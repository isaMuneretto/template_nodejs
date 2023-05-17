exports.seed = function (knex){
  return knex("autores").del()
  .then(function() {
      return knex("autores").insert([
          {
              nome:"André Luiz", sobrenome: "Villar Forbellone ", idade: "35", data_nascimento: "10/04/1988", sexo: "M", telefone: "(48)99955-9874" 
          },
          {
            nome:"Henri Frederico ", sobrenome: "Eberspächer", idade: "41", data_nascimento: "26/01/1982", sexo: "M", telefone: "(11)99660-3587" 
          },
          {
            nome:"Gabriela", sobrenome: "Marques", idade: "37", data_nascimento: "11/02/1986", sexo: "F", telefone: "(11)98844-7124" 
          },
          {
            nome:"Renata Soares", sobrenome: "Marques", idade: "45", data_nascimento: "06/03/1978", sexo: "F", telefone: "(11)98836-7489" 
          },
          {
            nome:"Humberto", sobrenome: "Rohden", idade: "55", data_nascimento: "11/02/1964", sexo: "M", telefone: "(11)99933-8988" 
          },

      ]);
  });
}
