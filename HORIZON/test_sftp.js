const { Client } = require('ssh2');

const conn = new Client();

const runTest = (username, password) => {
  console.log(`Connecting as ${username} with password ${password}...`);
  
  conn.on('ready', () => {
    console.log('SUCCESS: Connected and authenticated successfully via SFTP!');
    conn.sftp((err, sftp) => {
      if (err) {
        console.error('SFTP Error:', err.message);
        conn.end();
        return;
      }
      
      // List the files in public_html
      sftp.readdir('public_html', (err, list) => {
        if (err) {
          console.error('Error listing public_html:', err.message);
        } else {
          console.log('Current files in public_html:');
          list.forEach(item => {
            console.log(`- ${item.filename} (${item.attrs.size} bytes)`);
          });
        }
        conn.end();
      });
    });
  }).on('error', (err) => {
    console.error('Authentication/Connection Failed:', err.message);
    conn.end();
  }).connect({
    host: '82.29.81.142',
    port: 65002,
    username: username,
    password: password,
    readyTimeout: 15000
  });
};

// Start the test
runTest('u425476743', 'Sunandsands@2025');
