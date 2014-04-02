/* Web Application Development using Javascript and AngularJS */
/* https://github.com/pedrovitti/angularjs_course */
/* Restaurant ordering system - Test Suite */
/* Author: Pedro Vitti */

/* Um Restaurante solicitou o desenvolvimento de um sistema de pedidos. Nele, os clientes podem buscar itens no cardapio, fazer pedidos, consultar o total da sua conta. Cada item do cardapio é composto de descrição e preço. Cada pedido contém apenas um item do cardapio, juntamente com a mesa e quantidade.

1- Deve listar os itens do cardapio, retornando os itens do cardapio;
2- Deve fazer pedidos informando a mesa, a quantidade e o item. Um pedido deve ser adicionado contendo a mesa, quantidade e o item do cardapio.
3- Deve consultar o total da conta informando a mesa, retornando o total da conta
4- Deve fechar a conta informando a mesa, retornando o total da conta e apagando todos os pedidos feitos
*/

describe("Restaurant ordering system test", function () {
    
    var menuTest = {
        "marguerita": { "name": "Pizza Marguerita",
                        "description": "Pizza de queijo com tomate e manjerição",
                        "price": 40
                      },
        
        "mussarela": { "name" : "Pizza mussarela",
                       "description" : "Pizza de mussarela com tomate e azeitonas",
                       "price": 38
                     }
    };
    var table = 1,
        table2 = 2;
    
    it("list menu itens", function () {
        Restaurant.addMenu(menuTest);
        expect(Restaurant.menu()).toBe(menuTest);
    });
    
    it("find item in menu", function () {
    
        var marguerita = { "name": "Pizza Marguerita",
                           "description": "Pizza de queijo com tomate e manjerição",
                           "price": 40
                         };
                 
        expect(Restaurant.find("marguerita")).toEqual(marguerita);
    });
    
     it("order items", function () {
        var order = {"item": "marguerita",
                     "quantity": 2
                    };
                 
        Restaurant.order(table, order);
        expect(Restaurant.total(table)).toBe(80);
        
        Restaurant.order(table, order);
        expect(Restaurant.total(table)).toBe(160);
    });
    
    it("get the total from table", function () {
        var order = {"item": "marguerita",
                     "quantity": 3
                    };

        Restaurant.order(table2, order);
        expect(Restaurant.total(table2)).toBe(120);
    });

    it("close a table", function () {
        expect(Restaurant.close(table)).toBe(160);
        expect(Restaurant.close(table2)).toBe(120);
        expect(function(){ Restaurant.close(table); }).toThrow(new TableDoesntExistsError());
    });
});