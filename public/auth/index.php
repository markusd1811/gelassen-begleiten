<?php
$client_id = 'Ov23liyJ4tJlciS5DUCs';
$redirect_uri = 'https://gelassen-begleiten.de/callback/';
$url = "https://github.com/login/oauth/authorize?client_id={$client_id}&redirect_uri={$redirect_uri}&scope=repo,user";
header("Location: $url");
exit;
