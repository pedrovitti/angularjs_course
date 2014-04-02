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

var Restaurant = (function () {
    var menu = {};
    var orders = {};

    return {
        menu: function () {
            return menu;
        },
        
        total: function (table) {
            var total = 0;
            if (!orders[table]) { throw new Error("Table do not exists!"); }
            for (var i = 0; i < orders[table].length; i += 1) {
                total += orders[table][i].price * orders[table][i].quantity;
            }
            return total;
        },
      
        close: function (table) {
            closeTotal = total(table);
            delete orders[table];
            return closeTotal;
        }
    };
}());
