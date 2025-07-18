import { Router } from "express";
import { ImovelController } from "../controller/ImovelController";

const router = Router()

router.get("/", ImovelController.index)

router.post("/criar/imovel", ImovelController.criarImovel)

//select

router.get("/imoveis", ImovelController.listarImoveis)

router.get("/imoveis/nome", ImovelController.listarNome)

router.get("/imoveis/quartos", ImovelController.listarQuarto)

export {router}