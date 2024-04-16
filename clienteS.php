<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {
  
    $cedula = $_POST['cedula'];
    $referencia = $_POST['referencia'];
    
    $nombreImagen = $_POST['imagen'];
    
    echo "<h2>Datos recibidos:</h2>";
    echo "<p>Cédula del Cliente: $cedula</p>";
    echo "<p>Número de Referencia: $referencia</p>";
    echo "<h2>Imagen:</h2>";
    echo "<img src='$nombreImagen' alt='Imagen'>";
}
?>
