<?php
  $connection = mysli_connect('bolcn8rt1xey0wkabo0k-mysql.services.clever-cloud.com', 'ugjlmttvbbo0x4f7', 'ugjlmttvbbo0x4f7') or die(mysql_error($mysqli));

  function insert($connection){
    $user = $_POST('user');
    $password = $_POST('password');

    $consulta = "INSERT INTO persona(user, password) VALUES ('$user', '$password')";
    mysqli_query($connection, $consulta);
    mysqli_close($connection);
  }
?>