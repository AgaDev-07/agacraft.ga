<?php
  $host = 'bolcn8rt1xey0wkabo0k-mysql.services.clever-cloud.com'
  $user = 'ugjlmttvbbo0x4f7'
  $password = 'Uq6ELB8ydnwox8M8P0pN'
  $data_base = 'bolcn8rt1xey0wkabo0k'
  $connection = mysqli_connect($host, $user, $password, $data_base) or die(mysql_error($mysqli));

  insert($connection)

  function insert($connection){
    $user = $_POST['user'];
    $password = $_POST['password'];

    $consulta = "INSERT INTO $data_base(user, password) VALUES ('$user', '$password')";
    mysqli_query($connection, $consulta);
    mysqli_close($connection);
  }
?>