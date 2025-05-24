
//Modularização (ES Modules)
import { Categoria, ListaGastosPorCategoria } from "./classes.js";
import { valorNegativo, atualizarInterface } from "./utils.js";

//POO

const gastosPorCategoria = new ListaGastosPorCategoria(
    new Categoria("Alimentação"),
    new Categoria("Transporte"),
    new Categoria("Lazer"),
    new Categoria("Outros")
)

//Manipulação do DOM
const formulario = document.querySelector("form");

formulario.addEventListener("submit", (evento) => {
    //Prevenção do comportamento padrão
    evento.preventDefault();

    const valorInformado = formulario.elements.valor.value;
    const categoriaInformada = formulario.elements.categoria.value;

    if(valorNegativo(valorInformado)){
        alert("Valor inválido. O valor não pode ser negativo.");
        return;
    }

    const categoria = gastosPorCategoria.obterCategoriaPorNome(categoriaInformada);
    categoria.adicionarValor(valorInformado);

    atualizarInterface(gastosPorCategoria);
    formulario.reset();

})


