function RestaurantController($scope) {
    $scope.searchString = "";
    $scope.name = "Restaurante";
    $scope.menu = {
        "marguerita": { "name": "Marguerita Pizza",
                        "description": "Cheese, tomatoes and basil pizza.",
                        "price": 40,
                        "show": false
                      },
        
        "mussarela": { "name" : "Mozzarela",
                       "description" : "Mozzarela pizza",
                       "price": 38,
                       "show": false
                     },
        
        "camarao": { "name" : "Camarao",
                     "description" : "Camarao ao molho",
                     "price": 60,
                     "show": false
                   }
    };
    
    $scope.orders = {
        "1": [
            {
                "id": "mussarela",
                "quantity": "2"
            },
            {
                "id": "mussarela",
                "quantity": "2"
            },
            {
                "id": "mussarela",
                "quantity": "2"
            }
        ],
        "2": [
            {
                "id": "camarao",
                "quantity": "1"
            },
            {
                "id": "marguerita",
                "quantity": "1"
            },
            {
                "id": "camarao",
                "quantity": "1"
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
}