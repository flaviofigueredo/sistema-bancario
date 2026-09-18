export class ContaCadastrada {
    gerarScriptSQL(){
        console.log("Comando: INSERT INTO tb_conta (nm_titular, vl_saldo) VALUES ('Phillippe', 1500.00);");
    }
}

export class ContaFalha {
    guardarConta() {
        console.log("Dado salvo fora das normativas da empresa.");
    }
}