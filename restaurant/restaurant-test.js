/* Web Application Development using Javascript and AngularJS */
/* https://github.com/pedrovitti/angularjs_course */
/* Restaurant ordering system - Test Suite */
/* Author: Pedro Vitti */

/* Um restaurante solicitou o desenvolvimento de um sistema de pedidos. Nele, os clientes podem buscar itens no cardapio, fazer pedidos, consultar o total da sua conta. Cada item do cardapio é composto de descrição e preço. Cada pedido contém apenas um item do cardapio, juntamente com a mesa e quantidade.

1- Deve listar os itens do cardapio, retornando os itens do cardapio;
2- Deve fazer pedidos informando a mesa, a quantidade e o item. Um pedido deve ser adicionado contendo a mesa, quantidade e o item do cardapio.
3- Deve consultar o total da conta informando a mesa, retornando o total da conta
4- Deve fechar a conta informando a mesa, retornando o total da conta e apagando todos os pedidos feitos
*/

describe("Restaurant ordering system test", function() {
    var table = 1;
    
    it("list menu itens", function() {
        expect(rest.menu()).toBe(true);
    });
    
    it("find item in menu", function() {
    
        marguerita = { "marguerita": { 
                           "name": "Pizza Marguerita",
                           "description": "Pizza marguerita with mozzarela cheese",
                           "price": 42
                        },
                     };
                 
        expect(rest.find("marguerita")).toEqual(marguerita);
    });
    
    it("get the total from table", function() { 
        order = {"item": "marguerita",
                 "quantity": 2 
                 };
                 
        rest.order(table, order);
        expect(rest.total(table)).toBe(80);
    });

    it("close a table", function() {
        expect(rest.close(table)).toBe(80);
        expect(rest.close(table))).toThrow(new TableDoestExistsError());
    });
});
