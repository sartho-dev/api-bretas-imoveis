import { db } from "../../config/connect";

export async function listarPeloQuarto(num_quartos:number){

    const result = await db.query("select * from imovel where num_quartos = $1", [num_quartos])

    return result.rows

}