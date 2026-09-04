import { ContaGenerica, ContaCorrente, ContaPoupanca } from "./ContasDoBanco.js";
import { SenhaBanco } from "./SenhaBanco.js"; 

const contaCerta = new ContaCorrente("Flávio", 2536563);
console.log(`Conta Criada para: ${contaCerta.titular}, Saldo Inicial: ${contaCerta.limite}`);
contaCerta.cobrarTaxaMensal();
//contaCerta.#saldo = 1000000;
contaCerta.exibirExtrato();

const contaPoup = new ContaPoupanca("Ana", 5000);
console.log(`Conta criada para: ${contaPoup.titular}, Saldo inicial: ${contaPoup.saldo}`);
contaPoup.cobrarTaxaMensal();

const acesso = new SenhaBanco("12345678");