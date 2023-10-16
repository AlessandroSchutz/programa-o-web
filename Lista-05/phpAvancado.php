<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP Avançado</title>
</head>
<body>

    <h3>Agenda de Contatos com Arrays Associativos</h3>

    <form method="post">
        <label for="nome">Digite o Nome:</label>
        <input type="text" id="nome" name="nome" required><br><br>

        <label for="telefone">Digite o Telefone:</label>
        <input type="tel" id="telefone" name="telefone" required><br><br>

        <label for="email">Digite o E-mail:</label>
        <input type="email" id="email" name="email" required><br><br>

        <input type="submit" value="Adicionar Contato">
    </form><br>

    <form method="post">
        <input type="submit" name="limpar" value="Limpar Agenda">
    </form>

    <?php
        //Usado para armazenar os dados 
        session_start();

        if(!isset($_SESSION["agenda"])){
            $_SESSION["agenda"] = array();
        }

        if($_SERVER["REQUEST_METHOD"] === "POST"){
            if(array_key_exists("delete", $_POST) && is_numeric($_POST["delete"])){
                $index =$_POST["delete"];
                if(isset($_SESSION["agenda"][$index])){
                    unset($_SESSION["agenda"][$index]);
                    $_SESSION["agenda"] = array_values($_SESSION["agenda"]);    
                }   
            } else if (isset($_POST["limpar"])){
                $_SESSION["agenda"] = array();
            }
        }

        if (isset($_POST["nome"]) && isset($_POST["telefone"]) && isset($_POST["email"])){
            $nome = $_POST["nome"];
            $telefone = $_POST["telefone"];
            $email = $_POST["email"];

            if(!empty($nome) && !empty($telefone) && !empty($email)){
                $novoContato = array(
                    "nome" => $nome,
                    "telefone" => $telefone,
                    "email" => $email
                );
                $_SESSION["agenda"][] = $novoContato;
            } else {
                echo "Por favor, preencha  todos os campos.";
            }
        }
    ?>

    <?php
        echo "<h3>Lista de Contatos</h3>";

        if(empty($_SESSION["agenda"])){
            echo "Nenhum Contato na Agenda.";
        } else {
            echo "<ul>";
            foreach($_SESSION["agenda"] as $index => $contato){
                echo "<li>";
                echo "Nome:" . $contato["nome"] . "<br>";
                echo "Telefone" . $contato["telefone"] . "<br>";
                echo "E-mail" . $contato["email"] . "<br>";
                echo '<form method="post" style="display: inline;">';
                echo '<input type="hidden" name="delete" value="' . $index . '">';
                echo '<input type="submit" value="Excluir">';
                echo '</form>';
                echo "</li>";
            }
            echo "</ul>";
        }

    ?>

    <h3>Upload de Arquivos</h3>
    <form method="post" enctype="multipart/form-data">
        <label for="imagem">Faça o Upload da Imagem:</label>
        <input type="file" id="imagem" name="imagem" accept="image/*"><br><br>
        <input type="submit" value="Enviar Imagem">
    </form>

    <?php 
        if($_SERVER["REQUEST_METHOD"] === "POST"){
            if(isset($_FILES["imagem"]) && $_FILES["imagem"]["error"] == 0){
                $diretorio_destino = "uploads/";
                $caminho_imagem = $diretorio_destino . $_FILES["imagem"]["name"];

                if(move_uploaded_file($_FILES["imagem"]["tmp_name"], $caminho_imagem)){
                    echo "A imagem foi enviada com sucesso.";
                } else {
                    echo "Erro ao mover o arquivo para o destino";
                }
            } else {
                echo "Erro no upload da imagem.";
            }
        }
    ?>

    <?php
        if(isset($caminho_imagem)){
            echo "<h4>Imagem Enviada:</h4>";
            echo '<img src="' . $caminho_imagem . '" alt="Imagem Enviada">';
        }
    ?>

    <h3>Autenticação Simples</h3>
    <form method="post">
        <label for="usuario">Nome de Usuário:</label>
        <input type="text" id="usuario" name="usuario" required><br><br>

        <label for="senha">Senha:</label>
        <input type="password" id="senha" name="senha" required><br><br>

        <input type="submit" value="Entrar">
    </form><br>

    <?php
        $usuarioCorreto = "usuario";
        $senhaCorreta = "senha123";

        if($_SERVER["REQUEST_METHOD"] === "POST"){
            if(isset($_POST["usuario"]) && isset($_POST["senha"])){
                $nome_usuario = $_POST["usuario"];
                $senha_usuario = $_POST["senha"];

                if($usuarioCorreto === $nome_usuario && $senhaCorreta === $senha_usuario){
                    $_SESSION["logado"] = true;
                    echo "<p>Usuário e Senha CORRETOS! </p><br>";
                }else{
                    echo "<p>Usuário ou Senha INVÁLIDOS! </p><br>";
                }
            }
        }
    ?>

    <form method="post">
        <input type="submit" value="Exibir Usuário e Senha Corretos">
    </form>

        <?php
            $usuarioCorreto = "usuario";
            $senhaCorreta = "senha123";

            if($_SERVER["REQUEST_METHOD"] === "POST"){
                echo "<p>Usuario:{ $usuarioCorreto } <br> Senha:{ $senhaCorreta }</p>";
            }
        ?>
</body>
</html>