export class SenhaBanco {
    #senhaPrivada;

    constructor(novaSenha) {
        this.senha = novaSenha;
    }

    get senha() {
        return "**********";
    }

    set senha(valorInformado){
        if (valorInformado.length < 8){
            console.log("[BLOQUEIO] A senha deve ter no mínimo 8 caracteres. Tente Novamente.")
            return;
        }
        this.#senhaPrivada = valorInformado;
        console.log("[SISTEMA] Senha cadastrada com sucesso.");
    }
}