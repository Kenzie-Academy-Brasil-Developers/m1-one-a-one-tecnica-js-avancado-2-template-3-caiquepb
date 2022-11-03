function verificaLista(lista, numero){

    let cont = 0

    for(let i = 0; i < lista.length; i++){
        if(lista[i] == numero){
            cont++
        }
    }

    if(cont % 5 == 0){
        return "É múltiplo de 5"
    }else{return "Não é múltiplo de 5"}

}