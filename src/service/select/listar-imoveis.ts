import { db } from "../../config/connect";

export async function listarImoveis(){
    const result = await db.query("select * from imoveis")
    return result.rows
}   