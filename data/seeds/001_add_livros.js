exports.seed = function (knex){
  return knex("livros").del()
  .then(function() {
      return knex("livros").insert([
          {
              titulo:"Web Design Responsivo", autor: "Mauricio Silva", ano: 2014, preco: 73.0, foto: "https://d1pkzhm5uq4mnt.cloudfront.net/imagens/capas/4e37aef84e7eb21870481f92721651377842bc42.jpg"
          },
          {
              titulo:"Lógica de Programação e Algoritmos com JavaScript", autor: "Edécio Fernando Iepsen", ano: 2022,
              preco: 72.30, foto: "https://m.media-amazon.com/images/I/41+6FmZ+qRL._SX363_BO1,204,203,200_.jpg"
          },
          {
              titulo:"Introdução à Programação com Python: Algoritmos e Lógica de Programação Para Iniciantes", autor: "Nilo Ney Coutinho Menezes", ano: 2019,
              preco: 62.10, foto: "https://m.media-amazon.com/images/I/41qeEtBu02L._SX357_BO1,204,203,200_.jpg"
          },
          {
              titulo:"Lógica de Programação. Crie Seus Primeiros Programas Usando Javascript e Html", autor: " Paulo Silveira ", ano: 2012,
              preco: 59.90, foto: "https://m.media-amazon.com/images/P/B00TZZF2TA.01._SCLZZZZZZZ_SX500_.jpg"
          },
          {
              titulo:"Banco de dados: Teoria e Desenvolvimento", autor: "William Pereira Alves", ano: 2020,
              preco: 85.94, foto: "https://m.media-amazon.com/images/P/B08N6Y6JDG.01._SCLZZZZZZZ_SX500_.jpg"
          },


      ]);
  });
}
