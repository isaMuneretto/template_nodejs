exports.seed = function (knex){
  return knex("editoras").del()
  .then(function() {
      return knex("editoras").insert([
          {
              nome:"Novatec", cidade: "São Paulo", estado: "SP", telefone: "(11)99680-1256", rua: "Luís Antônio dos Santos", cep: "02460-000" 
          },
          {
            nome:"Editora Érica", cidade: "São Paulo", estado: "SP", telefone: "(11)99949-7245", rua: "São Gil", cep: "03401-030" 
          },
          {
            nome:"Casa do Código", cidade: "Rio de Janeiro", estado: "RJ", telefone: "(11)98885-3344", rua: "João Milioli", cep: "0230-352" 
          },      
          {
            nome:"Cengage Learning", cidade: "São Paulo", estado: "SP", telefone: "(11)99690-2282", rua: "Avenida Alamedas", cep: "0300-111" 
          },  
          {
            nome:"Bookman", cidade: "Porto Alegre", estado: "RS", telefone: "(51)99922-5553", rua: "Jerônimo de Ornelas", cep: "90.040-340" 
          }  
          
      ]);
  });
}
