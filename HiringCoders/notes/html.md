<!DOCTYPE html>
<html>
    <head>
        <title>É o estudo</title>
        
        <meta charset="UTF-8"/> <!--fechamento in line-->
        <meta name="description" content="estudando html"/> <!--descrição da página-->
        <meta name="author" content="Gama academy"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/> <!--a primeira propriedade se refere
        a largura da pagina equivalente a do dispositivo e a segunda é a escala para saber se vai ter zoom() ou padrão (x)-->

        <!--incluir o css e js-->
        <style type="text/css">
            body{
                background-color: #4b5d64;
            }
        </style>
        <!--<link rel="stylesheet" type="text/css" href="..." href o local de origem da edição-->
        
        <!--<script type="text/javascript" src="..." o local de origem popup></script>-->
        <script type="text/javascript">
            alert("MIAU!");
        </script>

    </head>
    <body>
        <!--Cabeçalho-->
        <header>

        </header>
        <!--Fim-->

        <!--Conteúdo principal-->
        <main>
            <a href="https://google.com" title="Site do Google" target="_blank">
                Teste de Link
            </a>

            <p>
                Curso de HTML e queremos
                <a href="https://google.com"
                title="aprender pesquisando">aprender mais</a> <!-- repare na falta do target-->
            </p>

            <a href="https://google.com" title="Site do google" target="_blank">
                <img src="https://media.tenor.com/images/4fd49de4149a6d348e04f2465a3970af/tenor.gif" alt="Shinomya pesquisa google" title="Shinomya pesquisa google"/>
            </a>

            <!--Vídeo
            <video width="550" height="560" controls>
                <source src="..." type="vídeo/mp4"/>
            </video>
            -->

            <!-- Lista desordenada-->
            <ul type="circle">
                <li>item 1</li>
                <li>item 2</li>
            </ul>
            <!--ordenada-->
            <ol start="3" type="a">
                <li>item 1</li>
                <li>item 2</li>
            </ol>
            <!-- Lista de definição como um dicionário-->
            <dl>
                <dt>Palavra 1</dt>
                <dd>Explicação da Palavra 1</dd>
            </dl>

            <!-- Tabela bb -->
            <table>
                <!--cabeçalho-->
                <thead>
                    <tr>
                        <th>Semana da atividade</th>
                        <th>Nome da atividade</th>
                    </tr>
                </thead>
                <!--corpo-->
                <tbody>
                    <tr>
                        <td colspan="2">Semana 1</td>
                    </tr>
                    <tr>
                        <td>Semana 2</td>
                        <td rowspan="2">javascript</td>
                    </tr>
                    <tr>
                        <td>Semana 3</td>
                    </tr>
                </tbody>
                <!--rodapé-->
                <tfoot>
                    <tr>
                        <td>Total de atividades</td>
                        <td>2 atividades</td>
                    </tr>
                </tfoot>
            </table>
        </main>
        <!--Fim-->

        <!--Rodapé-->
        <footer>

        </footer>
        <!--Fim-->
    </body>
</html>