function RestaurantController($scope) {
    $scope.TableDoesntExistsError = function () {
        return {
            msg: "This table does not exists."
        };
    };
    
    $scope.searchString = "";
    $scope.name = "Restaurante";
    $scope.menu = {
        "marguerita": { "name": "Marguerita Pizza",
                        "description": "Cheese, tomatoes and basil pizza.",
                        "price": 40,
                        "show": false,
                        "id": "marguerita",
                      },
        
        "mussarela": { "name" : "Mozzarela",
                       "description" : "Mozzarela pizza",
                       "price": 38,
                       "show": false,
                       "id": "mussarela",
                     },
        
        "camarao": { "name" : "Camarao",
                     "description" : "Camarao ao molho",
                     "price": 60,
                     "show": false,
                     "id": "camarao",
                   }
    };
    
    $scope.orders = {
        "1": [
            {
                "id": "mussarela",
                "quantity": 2
            },
            {
                "id": "mussarela",
                "quantity": 2
            },
            {
                "id": "mussarela",
                "quantity": 2
            }
        ],
        "2": [
            {
                "id": "camarao",
                "quantity": 1
            },
            {
                "id": "marguerita",
                "quantity": 1
            },
            {
                "id": "camarao",
                "quantity": 1
            }
        ]
    };
    
    $scope.toggleActive = function (s) {
        s.active = !s.active;
    };
    
    $scope.show = function (item) {
        item.show = !item.show;
    };

    $scope.add = function (item) {
        $scope.menu.push(angular.copy(item));
        $scope.item = {};
    };
    
    $scope.remove = function (itemIndex) {
        //$scope.menu.splice(contactIndex, 1);
        $scope.item = {};
    };
    
    $scope.addMenu = function (menuparam) {
        $scope.menu = menuparam;
    };

    $scope.order = function (mesa, pedido, quantity) {
        if (!mesa) { 
            
        }
        qtd = quantity || 1;
        ped = {
                "id": pedido,
                "quantity": qtd 
        };
        mesa.push(ped);
        console.log($scope.orders);
    
    };

    $scope.total = function (table) {
        var total = 0,
            itemNumber = 0;

        if (!$scope.orders[table]) { throw new $scope.TableDoesntExistsError(); }
        for (itemNumber = 0; itemNumber < $scope.orders[table].length; itemNumber += 1) {
            var orderItem = $scope.orders[table][itemNumber];
            var menuItem = $scope.menu[orderItem.id];
            total += menuItem.price * orderItem.quantity;
        }
        return total;
    };

    $scope.close = function (table) {
        if (!$scope.orders[table].items) { throw new $scope.TableDoesntExistsError(); }
        var closeTotal = $scope.total(table);
        delete $scope.orders[table];
        return closeTotal;
    };

    $scope.find = function (item) {
        return $scope.menu[item] || {};
    };
    
    $scope.newTable = function (id) {
        debugger;
        if (!$scope.orders[id]) {
            $scope.orders[id] = [];
            return;
        }
    };
}
