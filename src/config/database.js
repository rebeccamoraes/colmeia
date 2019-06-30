const sqlite3 = require('sqlite3').verbose();
const bd = new sqlite3.Database('data.db');

const USUARIOS_SCHEMA = `
CREATE TABLE IF NOT EXISTS usuarios (
    id INTEGER PRIMARY KEY AUTOINCREMENT, 
    nome VARCHAR(40) NOT NULL UNIQUE, 
    email VARCHAR(255) NOT NULL, 
    senha VARCHAR(255) NOT NULL,
    categoria CHAR NOT NULL
)
`;

const INSERIR_USUARIO_1 = 
`
INSERT INTO usuarios (
    nome, 
    email,
    senha,
    categoria
) SELECT 'Mariana Silva', 'mariana@ufg.br', '123', 'A' WHERE NOT EXISTS (SELECT * FROM usuarios WHERE email = 'mariana@ufg.br')
`;

const INSERIR_USUARIO_2 =
`
INSERT INTO usuarios (
    nome, 
    email,
    senha,
    categoria
) SELECT 'Joaquim Nogueira', 'joaquim@ufg.br', '123', 'E' WHERE NOT EXISTS (SELECT * FROM usuarios WHERE email = 'joaquim@ufg.br')
`;

const DEMANDAS_SCHEMA = 
`
CREATE TABLE IF NOT EXISTS demandas (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    titulo TEXT NOT NULL,
    descricao TEXT NOT NULL,
    fk_usuario INTEGER NOT NULL
)
`;

const INSERIR_DEMANDA_1 = 
`
INSERT INTO demandas (
    titulo,
    descricao,
    fk_usuario
) VALUES ('Saneamento básico', 'O setor Fulano não tem saneamento básico e a população está adoecendo.', 1)`;

const INSERIR_DEMANDA_2 =
`
INSERT INTO demandas (
    titulo,
    descricao,
    fk_usuario
) VALUES ('Habitação Popular', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ullamcorper semper urna, et blandit quam. Cras ac nibh in urna mattis ullamcorper nec et nunc. Maecenas mollis metus aliquam nulla varius, in dictum risus fringilla. Fusce vehicula id lorem ut sodales. Praesent nec placerat neque. Nam nec eleifend lacus. In a sagittis ligula. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque justo magna, cursus vel hendrerit eget, eleifend vel erat. Nulla non metus in ipsum dapibus aliquam.

', 1)`;

const INSERIR_DEMANDA_3 =
    `
INSERT INTO demandas (
    titulo,
    descricao,
    fk_usuario
) VALUES ('Agendamento de consultas demorado.', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ullamcorper semper urna, et blandit quam. Cras ac nibh in urna mattis ullamcorper nec et nunc. Maecenas mollis metus aliquam nulla varius, in dictum risus fringilla. Fusce vehicula id lorem ut sodales. Praesent nec placerat neque. Nam nec eleifend lacus. In a sagittis ligula. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque justo magna, cursus vel hendrerit eget, eleifend vel erat. Nulla non metus in ipsum dapibus aliquam.

', 1)`;

const INSERIR_DEMANDA_4 =
    `
INSERT INTO demandas (
    titulo,
    descricao,
    fk_usuario
) VALUES ('Agendamento de consultas demorado.', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ullamcorper semper urna, et blandit quam. Cras ac nibh in urna mattis ullamcorper nec et nunc. Maecenas mollis metus aliquam nulla varius, in dictum risus fringilla. Fusce vehicula id lorem ut sodales. Praesent nec placerat neque. Nam nec eleifend lacus. In a sagittis ligula. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque justo magna, cursus vel hendrerit eget, eleifend vel erat. Nulla non metus in ipsum dapibus aliquam.

', 2)`;


bd.serialize(() => {
    bd.run("PRAGMA foreign_keys=ON");
    bd.run(USUARIOS_SCHEMA);
    bd.run(INSERIR_USUARIO_1);
    bd.run(INSERIR_USUARIO_2);
    bd.run(DEMANDAS_SCHEMA);
    bd.run(INSERIR_DEMANDA_1);
    bd.run(INSERIR_DEMANDA_2);
    bd.run(INSERIR_DEMANDA_3);
    bd.run(INSERIR_DEMANDA_4);

    bd.each("SELECT * FROM usuarios", (err, usuario) => {
        console.log('Usuario: ');
        console.log(usuario);
    });
});

process.on('SIGINT', () =>
    bd.close(() => {
        console.log('BD encerrado!');
        process.exit(0);
    })
);

module.exports = bd;
