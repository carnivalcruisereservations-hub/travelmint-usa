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
    
    $type = isset($input["type"]) ? strip_tags(trim($input["type"])) : "advisor";
    $data = isset($input["data"]) ? $input["data"] : $input;
    
    $subject = "";
    $messageHtml = "";
    $replyTo = "";
    
    if ($type === "quote") {
        $name = isset($data["name"]) ? strip_tags(trim($data["name"])) : "";
        $destination = isset($data["destination"]) ? strip_tags(trim($data["destination"])) : "";
        $guests = isset($data["guests"]) ? intval($data["guests"]) : 1;
        $email = isset($data["email"]) ? filter_var(trim($data["email"]), FILTER_VALIDATE_EMAIL) : "";
        $contact = isset($data["contact"]) ? strip_tags(trim($data["contact"])) : "";
        
        $subject = "New Quote Request: " . $destination;
        $replyTo = $email;
        
        $messageHtml = "<h3>New Quote Request</h3>";
        $messageHtml .= "<p><strong>Name:</strong> " . htmlspecialchars($name) . "</p>";
        $messageHtml .= "<p><strong>Destination:</strong> " . htmlspecialchars($destination) . "</p>";
        $messageHtml .= "<p><strong>Number of Guests:</strong> " . $guests . "</p>";
        if ($email) {
            $messageHtml .= "<p><strong>Email Address:</strong> " . htmlspecialchars($email) . "</p>";
        }
        if ($contact) {
            $messageHtml .= "<p><strong>Contact Number:</strong> " . htmlspecialchars($contact) . "</p>";
        }
    } else {
        // Default: Advisor request
        $spot = isset($data["spot"]) ? strip_tags(trim($data["spot"])) : "";
        $guests = isset($data["guests"]) ? intval($data["guests"]) : 1;
        $date = isset($data["date"]) ? strip_tags(trim($data["date"])) : "";
        $days = isset($data["days"]) ? intval($data["days"]) : 7;
        $email = isset($data["email"]) ? filter_var(trim($data["email"]), FILTER_VALIDATE_EMAIL) : "";
        $contact = isset($data["contact"]) ? strip_tags(trim($data["contact"])) : "";
        
        $subject = "New Travel Advisor Request: " . $spot;
        $replyTo = $email;
        
        $messageHtml = "<h3>New Travel Advisor Request</h3>";
        $messageHtml .= "<p><strong>Vacation Spot:</strong> " . htmlspecialchars($spot) . "</p>";
        $messageHtml .= "<p><strong>Number of Guests:</strong> " . $guests . "</p>";
        $messageHtml .= "<p><strong>Travel Date:</strong> " . htmlspecialchars($date) . "</p>";
        $messageHtml .= "<p><strong>Duration (Days):</strong> " . $days . "</p>";
        $messageHtml .= "<p><strong>Email Address:</strong> " . htmlspecialchars($email) . "</p>";
        $messageHtml .= "<p><strong>Contact Number:</strong> " . htmlspecialchars($contact) . "</p>";
    }
    
    // Resend API Configuration
    $apiKey = "re_hqiddvQd_7zXGpPQoTKpxs719tNCbJ8wq";
    $url = "https://api.resend.com/emails";
    
    $payload = [
        "from" => "info@travelmintusa.com",
        "to" => ["info@travelmintusa.com"],
        "subject" => $subject,
        "html" => $messageHtml
    ];
    
    if ($replyTo) {
        $payload["reply_to"] = $replyTo;
    }
    
    // Initialize CURL
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($payload));
    curl_setopt($ch, CURLOPT_HTTPHEADER, [
        "Authorization: Bearer " . $apiKey,
        "Content-Type: application/json"
    ]);
    
    $response = curl_exec($ch);
    $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    curl_close($ch);
    
    if ($httpCode >= 200 && $httpCode < 300) {
        echo json_encode(["status" => "success", "message" => "Email sent successfully via Resend"]);
    } else {
        // Fallback: standard php mail() if Resend API returns an error or is unconfigured
        $to = "info@travelmintusa.com";
        $headers = "From: info@travelmintusa.com\r\n";
        if ($replyTo) {
            $headers .= "Reply-To: " . $replyTo . "\r\n";
        }
        $headers .= "Content-Type: text/html; charset=UTF-8\r\n";
        
        if (mail($to, $subject, $messageHtml, $headers)) {
            echo json_encode(["status" => "success", "message" => "Email sent via backup server mailer"]);
        } else {
            http_response_code(500);
            echo json_encode([
                "status" => "error", 
                "message" => "Failed to send email. Resend status code: " . $httpCode,
                "detail" => json_decode($response, true)
            ]);
        }
    }
} else {
    http_response_code(405);
    echo json_encode(["status" => "error", "message" => "Method not allowed"]);
}
?>
