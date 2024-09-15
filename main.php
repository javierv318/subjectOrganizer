<?php
// Variables de definicion
$host = 'localhost';
$database = 'your_database_name';
$username = 'your_username';
$password = 'your_password';

// Create a connection
$conn = new mysqli($host, $username, $password, $database);

// Check the connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} else {
    echo "Connected to database successfully";
}

include 'calendar_dashboard.php';

// Creacion de una query, EJEMPLO
$query = "SELECT * FROM your_table_name";

// Ejecucion de una query
$result = $conn->query($query);

// Verificar y  mostrar los resultados

if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        echo "id: " . $row["id"]. " - Name: " . $row["name"]. "<br>";
    }
} else {
    echo "0 results";
}

// Cierre de conexion
$conn->close();
?>