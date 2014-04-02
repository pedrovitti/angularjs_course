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
var TableDoesntExistsError = function () {
    return {
        msg: "This table does not exists."
    };
};

var Restaurant = (function () {
    var menu = {},
        orders = {};
    
    return {
        menu: function () {
            return menu;
        },

        addMenu: function (menuparam) {
            menu = menuparam;
        },

        order: function (mesa, pedido) {
            if (!orders[mesa]) {
                orders[mesa] = [];
            }

            orders[mesa].push(pedido);
            return this;
        },

        total: function (table) {
            var total = 0,
                i = 0;

            if (!orders[table]) { throw new TableDoesntExistsError(); }
            for (i = 0; i < orders[table].length; i += 1) {
                var item = menu[orders[table][i].item];
                total += item.price * orders[table][i].quantity;
            }
            return total;
        },

        close: function (table) {
            if (!orders[table]) { throw new TableDoesntExistsError(); }
            var closeTotal = this.total(table);
            delete orders[table];
            return closeTotal;
        },

        find: function (item) {
            item = menu[item] || {};
            return item;
        }
    };
}());