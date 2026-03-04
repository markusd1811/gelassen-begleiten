<?php
$client_id = 'Ov23liyJ4tJlciS5DUCs';
$client_secret = '8499f2dfad0e130c2d33194537a80808066e96d9';

$code = $_GET['code'] ?? '';
if (!$code) {
    die("Error: No authorization code provided.");
}

$ch = curl_init('https://github.com/login/oauth/access_token');
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query([
    'client_id' => $client_id,
    'client_secret' => $client_secret,
    'code' => $code
]));
curl_setopt($ch, CURLOPT_HTTPHEADER, ['Accept: application/json']);
$response = curl_exec($ch);
if (curl_errno($ch)) {
    die("CURL Error: " . curl_error($ch));
}
curl_close($ch);

$data = json_decode($response, true);
$token = $data['access_token'] ?? '';

if (!$token) {
    die("Failed to retrieve token. GitHub returned: " . htmlspecialchars($response));
}
?>
<!DOCTYPE html>
<html>
<head><title>Authenticating...</title></head>
<body>
<script>
  (function() {
    function receiveMessage(e) {
      if (e.data === "authorizing:github") {
        window.opener.postMessage(
          'authorization:github:success:{"token":"<?php echo $token; ?>", "provider":"github"}',
          e.origin
        );
      }
    }
    window.addEventListener("message", receiveMessage, false);
    window.opener.postMessage("authorizing:github", "*");
  })();
</script>
</body>
</html>
