export class Imovel{
    constructor(
        
        public nome: string,
        public preco: number,
        public num_areas: number,
        public num_quartos: number,
        public num_banheiros: number,
        public num_garagem: number,
        public num_salas: number,
        public num_cozinhas: number,
        public id?: number,
    ){

    }
}