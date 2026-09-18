import { StatusContaEnum } from "./TabelasDominio.js";

export class ControleDeConta {
    constructor(numeroDaConta) {
        this.conta = numeroDaConta;
        this.statusAtual = StatusContaEnum.EM_ANALISE_DE_CREDITO;
    }
    aprovarAbertura() {
        this.statusAtual = StatusContaEnum.ATIVA;
        console.log(`[BANCO] Conta ${this.conta} aprovada. Novo Status código: ${this.statusAtual}`);
    }
}