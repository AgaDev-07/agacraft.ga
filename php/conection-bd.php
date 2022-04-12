<?php
  require 'vendor/autoload.php'
  $client = new MongoDB\Client( 'mongodb+srv://connector:ZhZAtNrfFNNqUjrG@cluster0.9qalr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');
  $db = $client->test;
?>
