import { Restaurante } from "./restaurante";

export class Prato {
    public id: number;
    public restaurante: Restaurante;
    public nome: string;
    public valor: number;

    constructor() {
        this.restaurante = new Restaurante();
    }
}