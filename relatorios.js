export const GeradorExtratoPDF = class {
    constructor(mesReferencia) {
        this.mes = mesReferencia;
    }

    renderizarDocumento() {
        console.log(`Carregando tela de impressão para o extrato bancário do mês: ${this.mes}`);
    }
};