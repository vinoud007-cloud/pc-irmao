<!DOCTYPE html>
<html lang="pt-BR">

<head>

    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Projeto PC do Meu Irmão</title>

    <link rel="stylesheet" href="style.css">

</head>

<body>

<div class="container">

    <header>

        <div class="titulo">

            <h1>🖥 Projeto PC do Meu Irmão</h1>

            <p>Acompanhe o progresso da montagem</p>

        </div>

        <div class="resumo">

            <div class="card">

                <span>Meta Total</span>

                <h2 id="metaTotal">R$ 0</h2>

            </div>

            <div class="card">

                <span>Guardado</span>

                <h2 id="guardadoTotal">R$ 0</h2>

            </div>

            <div class="card">

                <span>Falta</span>

                <h2 id="faltaTotal">R$ 0</h2>

            </div>

            <div class="card">

                <span>Progresso</span>

                <h2 id="porcentagemTotal">0%</h2>

            </div>

        </div>

        <div class="barra-geral">

            <div id="barraTotal"></div>

        </div>

    </header>

    <table>

        <thead>

            <tr>

                <th>Imagem</th>
                <th>Componente</th>
                <th>Meta</th>
                <th>Guardado</th>
                <th>Falta</th>
                <th>Progresso</th>

            </tr>

        </thead>

        <tbody id="tabelaComponentes">

            <!-- JavaScript adiciona as linhas -->

        </tbody>

    </table>

</div>

<script src="script.js"></script>

</body>
</html>
