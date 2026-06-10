<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

// Only process POST requests
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Read JSON input
    $input = json_decode(file_get_contents("php://input"), true);
    
    if (!$input) {
        http_response_code(400);
        echo json_encode(["status" => "error", "message" => "No request data received"]);
        exit;
    }
    
    // Sanitize input values
    $spot = isset($input["spot"]) ? strip_tags(trim($input["spot"])) : "";
    $guests = isset($input["guests"]) ? intval($input["guests"]) : 1;
    $date = isset($input["date"]) ? strip_tags(trim($input["date"])) : "";
    $days = isset($input["days"]) ? intval($input["days"]) : 7;
    $email = isset($input["email"]) ? filter_var(trim($input["email"]), FILTER_VALIDATE_EMAIL) : "";
    $contact = isset($input["contact"]) ? strip_tags(trim($input["contact"])) : "";
    
    // Validation
    if (empty($spot) || empty($email) || empty($contact)) {
        http_response_code(400);
        echo json_encode(["status" => "error", "message" => "Required fields (Vacation Spot, Email, Contact) are missing or invalid."]);
        exit;
    }
    
    $to = "concierge@Travelhorizonusa.com";
    $subject = "New Travel Advisor Request: " . $spot;
    
    // Build email message body
    $message = "You have received a new travel advisor request from the website.\n\n";
    $message .= "==========================================\n";
    $message .= "Vacation Spot:      " . $spot . "\n";
    $message .= "Number of Guests:   " . $guests . "\n";
    $message .= "Travel Date:        " . $date . "\n";
    $message .= "Duration (Days):    " . $days . "\n";
    $message .= "Email Address:      " . $email . "\n";
    $message .= "Contact Number:     " . $contact . "\n";
    $message .= "==========================================\n\n";
    $message .= "Please reply directly to the customer's email (" . $email . ") to assist them.";
    
    // Build headers
    // Using a sender from the domain is crucial to prevent spam marking on Hostinger
    $headers = "From: webmaster@travelhorizonusa.com\r\n";
    $headers .= "Reply-To: " . $email . "\r\n";
    $headers .= "X-Mailer: PHP/" . phpversion() . "\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
    
    // Send email
    if (mail($to, $subject, $message, $headers)) {
        echo json_encode(["status" => "success", "message" => "Email sent successfully"]);
    } else {
        http_response_code(500);
        echo json_encode(["status" => "error", "message" => "Internal mail server failed to send email."]);
    }
} else {
    http_response_code(405);
    echo json_encode(["status" => "error", "message" => "Method not allowed"]);
}
?>
