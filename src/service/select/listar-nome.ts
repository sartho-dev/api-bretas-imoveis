import { db } from "../../config/connect";

export async function listarPeloNome(nome:string) {

    const result = await db.query("select * from imovel where nome ilike $1", [`%${nome}%`])
    
    return result.rows
}