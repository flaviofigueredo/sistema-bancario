import { ContaGenerica, ContaCorrente, ContaPoupanca } from "./ContasDoBanco.js";
import { SenhaBanco } from "./SenhaBanco.js"; 
import { CaixaEletronico } from "./CaixaEletronico.js";
import { GeradorExtratoPDF } from "./relatorios.js";
import { AgenciaBancaria } from "./AgenciaBancaria.js";
import { ContaCadastrada, ContaFalha } from "./ModulosConta.js";
import { ControleDeConta } from "./GerenciamentoConta.js";
import { StatusContaEnum } from "./TabelasDominio.js";

const contaCerta = new ContaCorrente("Flávio", 2536563);
console.log(`Conta Criada para: ${contaCerta.titular}, Saldo Inicial: ${contaCerta.limite}`);
contaCerta.cobrarTaxaMensal();
//contaCerta.#saldo = 1000000;
contaCerta.exibirExtrato();

const contaPoup = new ContaPoupanca("Ana", 5000);
console.log(`Conta criada para: ${contaPoup.titular}, Saldo inicial: ${contaPoup.saldo}`);
contaPoup.cobrarTaxaMensal();

const acesso = new SenhaBanco("12345678");

console.log("Inicial o terminal de autoatendimento...");

const terminalDaEsquina = new CaixaEletronico();

terminalDaEsquina.retirarDinheiro(100.00);

const extratoDeJaneiro = new GeradorExtratoPDF("Janeiro/2026");
extratoDeJaneiro.renderizarDocumento();

const bancoCentro = new AgenciaBancaria("0456-X");
bancoCentro.abrirAgencia();

function validarSalvamentoBD(classeExternaRecebida) {
    if (typeof classeExternaRecebida.gerarScriptSQL === 'function'){
        console.log("Validação Contratual aprovada: Lógica autorizada para o banco de dados...");
    } else {
        throw new Error("Quebra de Contrato: Falta o método rigoroso 'gerarScriptSQL' na classe enviada!");
    }
}

validarSalvamentoBD(new ContaCadastrada());

const novaConta = new ControleDeConta("7788-9");
novaConta.aprovarAbertura();

StatusContaEnum.NOVO_STATUS_INVENTADO = 5;
StatusContaEnum.ATIVA = 500;