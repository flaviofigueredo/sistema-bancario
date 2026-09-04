export class ContaGenerica{
    constructor(titular){
        if(new.target === ContaGenerica){
            throw new Error("Erro: 'Conta Genérica é abstrata. Escolha Poupança ou Corrente!'");
        }
        this.titular = titular;
    }

    cobrarTaxaMensal() {
        throw new Error("Contrato Quebrado: A classe filha precisa ter a função cobrarTaxaMensal() implementada!");
    }
}

export class ContaCorrente extends ContaGenerica{
    #saldo;

    constructor(titular, valorInicial) {
        super(titular);
        this.#saldo = valorInicial;
    }

    cobrarTaxaMensal() {
        console.log(`Conta Corrente de ${this.titular} foi cobrada uma taxa mensal de R$ 15,00`);
    }

    exibirExtrato(){
        console.log(`O cliente ${this.titular} possui R$${this.#saldo} em sua conta corrente.`);
    }
}

export class ContaPoupanca extends ContaGenerica{
    constructor(titular, saldo) {
        super(titular);
        this.saldo = saldo;
    }

    cobrarTaxaMensal(){
        console.log(`Conta Poupança de ${this.titular} é isenta de taxas`);
    }
}