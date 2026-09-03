export class ContaBancaria{
    constructor(titularInicial, saldoInicial){
        this.titular = titularInicial;
        this.saldo = saldoInicial;
    }

    depositar(valor) {
        this.saldo += valor;
        console.log(`Depósito de R$${valor} concluído. Saldo Atual: R$${this.saldo}`);
    }
    
    sacar(valor) {
        if (valor > this.saldo){
            console.log("Erro de transição: Saldo em conta é insuficiente.")
            return;
        }
        this.saldo -= valor;
        console.log(`Saque liberado com sucesso. Saldo Restante: R$${this.saldo}`)
    }
}