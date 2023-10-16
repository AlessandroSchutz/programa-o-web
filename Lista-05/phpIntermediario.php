<!DOCTYPE html>
<html>
<head>
    <title>PHP INTERMEDIÁRIO</title>
</head>
<body>
<form method="post">

    <h3>Exercício 1 - "Olá, [Nome]!" Dinâmico</h3>

    <label for="nome">Digite seu Nome:</label>
    <input type="text" id="nome" name="nome" required><br>

    <input type="submit" value="Enviar">
</form>

<?php
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        if (isset($_POST["nome"])) {
            $nome = $_POST["nome"];
            echo "<h1> Olá, $nome!</h1>";
        } else {
            echo "Nome não especificado no formulário.";
        }
    } else {
        echo "Formulário não enviado.";
    }
?>

<form method="post">

    <h3>Exercício 2 - Conversor de Temperatura</h3>

    <label for="temperatura">Converta Celsius para Fahrenheit:</label>
    <input type="text" id="temperatura" name="temperatura" required><br>

    <input type="submit" value="Enviar">
</form>

<?php
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        if (isset($_POST["temperatura"])) {
            $temperatura = $_POST["temperatura"];
            $f = ($temperatura * 9 / 5) + 32;
            echo "<p>$temperatura ° Celsius equivale a $f ° Fahrenheit.</p>";
        } else {
            echo "Temperatura não especificada no formulário.";
        }
    } else {
        echo "Formulário não enviado.";
    }
?>

<form method="post">

    <h3>Exercício 3 - Calculadora de Média</h3>

    <label for="nota1">Digite Sua Primeira Nota:</label>
    <input type="text" id="nota" name="nota1" required><br>

    <label for="nota2">Digite Sua Segunda Nota:</label>
    <input type="text" id="nota" name="nota2" required><br>

    <label for="nota3">Digite Sua Terceira Nota:</label>
    <input type="text" id="nota" name="nota3" required><br>

    <label for="nota4">Digite Sua Quarta Nota:</label>
    <input type="text" id="nota" name="nota4" required><br>

    <input type="submit" value="Enviar">
</form>

<?php
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        if (isset($_POST["nota1"]) && isset($_POST["nota2"]) && isset($_POST["nota3"]) && isset($_POST["nota4"])) {
            $nota1 = $_POST["nota1"];
            $nota2 = $_POST["nota2"];
            $nota3 = $_POST["nota3"];
            $nota4 = $_POST["nota4"];
            $soma = $nota1 + $nota2 + $nota3 + $nota4;
            $media = $soma / 4;

            if ($media >= 7) {
                echo "<p>Você foi APROVADO!</p>";
                echo "<p>Sua média foi: $media</p>";
            } else {
                echo "<p>Você foi REPROVADO!</p>";
                echo "<p>Sua média foi: $media</p>";
            }
        } else {
            echo "Notas não especificadas no formulário.";
        }
    } else {
        echo "Notas não enviadas.";
    }
?>
<form method="post">

    <h3>Exercício 4 - Lista de Compras</h3>
    
    <?php
        $listaDeCompras = [];

        if($_SERVER["REQUEST_METHOD"] == "POST"){
            for($i = 1; $i <= 5; $i++){
                $item = $_POST["item$i"];
                if(!empty($item)){
                    $listaDeCompras[] = $item;
                }
            }
            sort($listaDeCompras);
        }
        for($i = 1; $i <= 5; $i++){
            echo "<label for='item$i'>Item $i:</label> ";
            echo "<input type='text' name='item$i' value='" . (isset($_POST["item$i"]) ? $_POST["item$i"] : "") . "'><br>";
        }
    ?><br>
    <input type="submit" value="Enviar">
</form>

<?php
    if(!empty($listaDeCompras)){
        echo "<h4>Itens da LISTA DE COMPRAS:</h4>";
        echo "<ol>";
        foreach($listaDeCompras as $item) {
            echo "<li>$item</li>";
        }
        echo "</ol>";
    }
?>

</body>
</html>

