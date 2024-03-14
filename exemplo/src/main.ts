import { listar } from "./cidade/listagem";
import { dispararRemocao } from "./cidade/remocao";

listar();

document.getElementById('remover')!.onclick = dispararRemocao;
