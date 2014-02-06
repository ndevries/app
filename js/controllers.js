angular.module('starter.controllers', [])

.controller('LoginCtrl', function($scope, $http, $state) {

    $scope.user = {};
    $scope.submit = function() {
        $http.post('http://localhost:8080/api/users/index.php', $scope.user).success(function(data) {
            if (data.status.error == false) {
                $scope.message = data.status.message;
                window.localStorage.id     = data.data.id;
                window.localStorage.secret = data.data.secret;
                $state.go('menu');
            } else {
                $scope.message = data.status.message;
            }
        });
    };

})

// A simple controller that fetches a list of data from a service
.controller('PetIndexCtrl', function($scope, PetService) {
    // "Pets" is a service returning mock data (services.js)
    $scope.pets = PetService.all();
})


// A simple controller that shows a tapped item's data
.controller('PetDetailCtrl', function($scope, $stateParams, PetService) {
    // "Pets" is a service returning mock data (services.js)
    $scope.pet = PetService.get($stateParams.petId);
});
