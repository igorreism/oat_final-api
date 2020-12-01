let itens = [];

module.exports = class Store{

    static list(){
        return itens; 
    }

    static create(item){
        itens.push(item);
    }
}