import { SistemaBancario } from "./SistemaBancario.js";
import { ContaBancaria } from "./ContaBancaria.js";

const servidor = new SistemaBancario();
const minhaConta = new ContaBancaria('Flávio', 323452);
console.log(minhaConta);  
minhaConta.depositar(500);
minhaConta.sacar(500000);      