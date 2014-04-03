var app = angular.module("instantSearch", []);
app.filter('searchFor', function () {

    return function (arr, searchString) {
        if (!searchString) {
            return arr;
        }
        
        searchString = searchString.toLowerCase();
        
        var result = [];
        angular.forEach(arr, function (item) {
            if (item.name.toLowerCase().indexOf(searchString) !== -1) {
                result.push(item);
            }
        });
        return result;
    };
});

function ContactListController($scope) {
    $scope.searchString = "";
    $scope.nome = "Contact List";
    $scope.contatos = [{
        name: 'Pedro Artur',
        telefone: "91247736",
        active: false
    }, {
        name: 'Rafael Escrich',
        telefone: "99766374",
        active: false
    }, {
        name: 'Monique Vicente',
        telefone: "933234",
        active: false
    }, {
        name: 'João Cunha',
        telefone: "99766374",
        active: false
    }];

    $scope.toggleActive = function (s) {
        s.active = !s.active;
    };

    $scope.adicionar = function (contato) {
        $scope.contatos.push(angular.copy(contato));
        $scope.contato = {};
    };

}