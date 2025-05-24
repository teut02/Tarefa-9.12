export class Categoria {
    //Encapsulamento com campos privados
    #nome;
    #valor;
    constructor(nome){
        this.#nome = nome;
        this.#valor = 0;
    }

    //Uso de Getters
    get valor(){
        return this.#valor;
    }

    get nome(){
        return this.#nome;
    }

    //Manipulação de estado
    adicionarValor(valor){
        this.#valor += parseFloat(valor);
    }
}

export class ListaGastosPorCategoria {
    #categorias;
    //Rest Operator
    constructor(...categoria){
        this.#categorias = categoria;
    }
    get categorias(){
        return this.#categorias;
    }
    obterCategoriaPorNome(nome){
        //Programação funcional
        return this.#categorias.find((categoria) => categoria.nome == nome);
    }
    obterTotal(){
        //Redução de dados com reduce
        return this.#categorias.reduce((total, categoria) => total + categoria.valor, 0);
    }
}
