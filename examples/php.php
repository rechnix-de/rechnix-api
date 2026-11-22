<?php
$api = 'https://rechnix-api.mbanzagroup.workers.dev'; $key = 'demo'; // replace with your own key
$ch = curl_init("$api/v1/validate?profile=xrechnung&lang=de");
curl_setopt_array($ch, [CURLOPT_POST => true, CURLOPT_RETURNTRANSFER => true,
  CURLOPT_HTTPHEADER => ["X-API-Key: $key", 'Content-Type: application/xml'],
  CURLOPT_POSTFIELDS => file_get_contents('invoice.xml')]);
$result = json_decode(curl_exec($ch), true);
echo $result['valid'] ? "OK\n" : print_r($result['errors'], true);
