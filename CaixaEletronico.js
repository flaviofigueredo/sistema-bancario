export class CaixaEletronico {
retirarDinheiro(valor) {
    console.log(`Processando liberação de R$${valor} nas gavetas fisicas ... `);
    registrarLogDeAuditoria();
        }

}   

function registrarLogDeAuditoria() {
    console.log("[LOG SECRETO BANCO CENTRAL] Saque registrado nas câmeras de segurança.");
}