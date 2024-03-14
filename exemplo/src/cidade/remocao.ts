import { API } from "../api";

async function remover(id: number | string): Promise<void> {
  const resposta = await fetch(API + `cidades/${id}`, {
    method: "DELETE",
  });
  if (!resposta.ok) {
    throw new Error("Erro ao remover a cidade.");
  }
}

export async function dispararRemocao() {
  const linha: HTMLTableRowElement|null = document.querySelector(".selecionado");
  if (!linha) {
    alert("Por favor selecione uma linha.");
    return;
  }
  const id = linha.dataset.id;
  try {
    remover(id!);
    linha.remove();
  } catch (e) {
    alert((e as Error).message);
  }
}
