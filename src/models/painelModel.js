var database = require("../database/config");

function grafico() {
    var instrucaoSql = `
        select genero.nome as genero,
        (
        select autor.nome from autor join livro on autor.id = livro.fkAutor group by autor.nome having Max(livro.id) limit 1
        ) as autorrico,
        count(livro.id) as qtd
        from livro
        right join genero
        on genero.id = livro.fkGenero
        group by genero.nome;
    `
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    grafico
}