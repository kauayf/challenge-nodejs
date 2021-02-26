<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style type="text/css">

    body {
    background-color: #E1E7E4; } 
    
    h1 { 
    color: blueviolet; 
    align-self: auto;}

    </style>
</head>
<body>
    <h1>Desafio de NodeJS Feito por RocketSeat 🚀</h1>

    <h2>Especificações do Teste</h2><br>
    <p>Em cada teste, tem uma breve descrição no que sua aplicação deve cumprir 
        para que o teste passe.</p>
    <ul>
        <li><strong>Para esse desafio temos os seguintes testes</strong></li><br>

        <li><strong>should be able to create a new repository:</strong>Para que esse teste passe, sua aplicação deve permitir que um repositório
            seja criado, e retorne um json com o projeto criado.</li><br>

        <li><strong>should be able to list the repositories:</strong> Para que esse teste passe, sua aplicação deve permitir que seja retornado um array
        com todos os repositórios que foram criados até o momento.</li><br>

        <li><strong>should be able to update repository:</strong> Para que esse teste passe, sua aplicação deve permitir que sejam alterados apenas os campos url,
        title e techs.</li><br>

        <li><strong>should not be able to update a repository that does not exist:</strong>Para que esse teste passe, você deve validar na sua rota
        de update se o id do repositório enviado pela url existe ou não. Caso não exista, retornar um erro com status 400.</li><br>

        <li><strong>should not be able to update repository likes manually:</strong> Para que esse teste passe, você não deve permitir que sua rota
        de update altere diretamente os likes desse repositório, mantendo o mesmo número de likes que o repositório já possuia antes da atualização.
        Isso porque o único lugar que deve atualizar essa informação é a rota responsável por aumentar o número de likes.</li><br>

        <li><strong>should be able to delete the repository:</strong> Para que esse teste passe, você deve permitir que a sua rota de delete exclua um projeto,
        e ao fazer a exclusão, ele retorne uma resposta vazia, com status 204.</li><br>

        <li><strong>should not be able to delete a repository that does not exist:</strong> Para que esse teste passe, você deve validar na sua rota
        de delete se o id do repositório enviado pela url existe ou não. Caso não exista, retornar um erro com status 400.</li><br>

        <li><strong>should be able to give a like to the repository:</strong> Para que esse teste passe, sua aplicação deve permitir que um repositório
        com o id informado possa receber likes. O valor de likes deve ser incrementado em 1 a cada requisição, e como resultado,
        retornar um json contendo o repositório com o número de likes atualizado.</li><br>

        <li><strong>should not be able to like a repository that does not exist:</strong> Para que esse teste passe, você deve validar na sua rota de
        like se o id do repositório enviado pela url existe ou não. Caso não exista, retornar um erro com status 400.</li><br>
    </ul>
    
</body>
</html>
