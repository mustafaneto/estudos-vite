import { API } from "../api";

type Cidade = {
  id: number | string;
  nome: string;
  uf: string;
};

async function carregarCidades(): Promise<Cidade[]> {
  const resposta = await fetch(API + "cidades");
  if (!resposta.ok) {
    throw new Error("Erro ao carregar as cidades");
  }
  return resposta.json();
}

function selecionarLinha(event: MouseEvent) {
  const linha = (event.target as HTMLTableCellElement).parentElement;
  linha?.classList.toggle("selecionado");
}

function desenharCidades(cidades: Cidade[]): void {
  document.querySelector("tbody")!.innerHTML = cidades
    .map(
      (c) => `
    <tr data-id="${c.id}">
        <td>${c.id}</td>
        <td>${c.nome}</td>
        <td>${c.uf}</td>
    </tr>`
    )
    .join("\n");
  document
    .querySelectorAll("tbody tr")
    .forEach((tr) => ((tr as any).onclick = selecionarLinha));
}

export async function listar() {
  try {
    const cidades = await carregarCidades();
    desenharCidades(cidades);
  } catch (e) {
    alert((e as Error).message);
  }
}
