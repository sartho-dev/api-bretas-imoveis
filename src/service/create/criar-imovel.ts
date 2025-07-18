import { db } from "../../config/connect";
import { Imovel } from "../../model/Imovel";

export async function create(imovel:Imovel) {

   const query =`insert into imovel (nome, preco, num_areas, num_quartos, num_banheiros,
   num_garagem, num_salas, num_cozinhas) values ($1,$2,$3,$4,$5,$6,$7,$8)`;


   const values = [
    imovel.nome,
    imovel.preco,
    imovel.num_areas,
    imovel.num_quartos,
    imovel.num_banheiros,
    imovel.num_garagem,
    imovel.num_salas,
    imovel.num_cozinhas,
  ];

   await db.query(query, values)
    
}