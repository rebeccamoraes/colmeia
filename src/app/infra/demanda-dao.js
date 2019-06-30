class DemandaDao{

    constructor(db) {
        this._db = db;
    }

    adiciona(demanda) {
        return new Promise((resolve, reject) => {
            this._db.run(`
                INSERT INTO demandas (
                    titulo, 
                    descricao,
                    fk_usuario
                ) values (?,?,?)
                `,
                [
                    livro.titulo,
                    livro.descricao,
                    livro.id_usuario
                ],
                function (err) {
                    if (err) {
                        console.log(err);
                        return reject('Erro ao adicionar demanda.');
                    }

                    resolve();
                }
            )
        });
    }

    lista() {
        return new Promise((resolve, reject) => {
            this._db.all(
                'SELECT * FROM demandas',
                (erro, resultados) => {
                    if (erro) return reject('Erro ao listar demandas!');

                    return resolve(resultados);
                }
            )
        });
    }

    buscaPorId(id) {

        return new Promise((resolve, reject) => {
            this._db.get(
                `
                    SELECT *
                    FROM demandas
                    WHERE id = ?
                `,
                [id],
                (erro, demanda) => {
                    if (erro) {
                        return reject('Não foi possível encontrar a demanda!');
                    }
                    return resolve(demanda);
                }
            );
        });
    }
}

module.exports = DemandaDao;
