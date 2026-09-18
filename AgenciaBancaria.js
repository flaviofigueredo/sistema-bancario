export class AgenciaBancaria {
    constructor(numeroDaAgencia) {
        this.agencia = numeroDaAgencia;
    

        class CofreFisico {
            constructor(senhaDeAbertura) {
                this.senha = senhaDeAbertura;
            }
            destrancar() {
                console.log(`Cofre da agência ${numeroDaAgencia} destrancado. Senha: ${this.senha}`);
            }
        }

        this.tesouraria = new CofreFisico("AB-9988");
    }

    abrirAgencia() {
        console.log(`Iniciando operações da Agência: ${this.agencia}`);
        this.tesouraria.destrancar();
    }
}