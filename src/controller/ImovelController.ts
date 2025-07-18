import { Request, Response } from "express";
import { listarImoveis } from "../service/select/listar-imoveis";
import { Imovel } from "../model/Imovel";
import { create } from "../service/create/criar-imovel";
import { listarPeloNome } from "../service/select/listar-nome";
import { listarPeloQuarto } from "../service/select/listar-quarto";

export class ImovelController{


    static async index(req: Request, res: Response) {
        res.json({
            Hello:"Alo"
        })
        
    }

    static async criarImovel(req: Request, res: Response){
        try {

            const {nome, preco, num_areas, 
            num_quartos, num_banheiros, num_garagem, num_salas, num_cozinhas} = req.body

            const imovel = new Imovel(nome, preco, num_areas, 
            num_quartos, num_banheiros, num_garagem, num_salas, num_cozinhas)   

            await create(imovel)
            res.status(200).json({
                Mensagem: "Funcionou a cricao"
            })

        } catch (error) {
            res.status(500).json({
                Erro: "Nao funcionou a cricao"
            })
        }
    }

    static async listarImoveis(req: Request, res: Response){

        try {
            
            const result = await listarImoveis()

            res.status(200).json({
                Resultado: result,
            })

        } catch (error) {
            res.status(500).json({
                Erro: "Nao funcionou a listagem"
            })
        }

    }

    static async listarNome(req: Request, res: Response){
        try {
            
            const nome = req.body.nome

            const result = await listarPeloNome(nome)

            res.status(200).json({
                Mensagem: "Seleção feita com sucesso",
                Resultado: result,
            })

        } catch (error) {
            
            res.status(500).json({
                Erro: "Seleção não feita"
            })
        }
    }

    static async listarQuarto(req: Request, res: Response){

        try {
            
            const num_quartos = req.body.num_quartos

            const result = await listarPeloQuarto(num_quartos)

            res.status(200).json({
                Mensagem: "Seleção pelo numero de quartos feita com sucesso ",
                Resultado: result

            })

        } catch (error) {
            res.status(500).json({
                Mensagem: "Seleção não foi feita"
            })
        }

    }
}