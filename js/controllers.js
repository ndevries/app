angular.module('app.controllers', [])

.controller('LandingCtrl', function($state) {

    if(localStorage.getItem("id") !== null && localStorage.getItem("secret") !== null) {
        $state.go('menu');
    }

})

.controller('LoginCtrl', function($scope, $http, $state, loading) {

    if(localStorage.getItem("id") !== null && localStorage.getItem("secret") !== null) {
        $state.go('menu');
    }

    $scope.json = {};

    $scope.submit = function() {

        loading.show();

        $http.post('http://localhost:8080/api/users/index.php', $scope.json).success(function(data) {
            loading.hide();
            if (data.status.error == false) {
                $scope.message         = data.status.message;
                localStorage["id"]     = data.data.id;
                localStorage["secret"] = data.data.secret;
                $state.go('menu');
            } else {
                $scope.message = data.status.message;
            }
        }).error(function(data, status) {
            loading.hide();
            $scope.message = "Error fetching data, please try again.";
        });
    };

})

.controller('LogoutCtrl', function($state, $rootScope) {

    localStorage.clear();
    $state.go('landing');

})

.controller('VideosIndexCtrl', function($scope, $http, loading) {

    $scope.videos = {};

    loading.show();

    $http.post('http://localhost:8080/api/videos/index.php').success(function(data) {
        loading.hide();
        if (data.status.error == false) {
            $scope.videos = data.data;
        } else {
            $scope.message = data.status.message;
        }
    }).error(function(data, status) {
        loading.hide();
        $scope.message = "Error fetching data, please try again.";
    });

})

.controller('VideosSingleCtrl', function($scope, $http, $stateParams, $sce, loading) {

    $scope.json = {};
    $scope.json.id = $stateParams.id;

    loading.show();

    $http.post('http://localhost:8080/api/videos/single.php', $scope.json).success(function(data) {
        loading.hide();
        if (data.status.error == false) {
            $scope.video = data.data;
            $scope.video.url = $sce.trustAsResourceUrl($scope.video.url)
        } else {
            $scope.message = data.status.message;
        }
    }).error(function(data, status) {
        loading.hide();
        $scope.message = "Error fetching data, please try again.";
    });

})

.controller('AudiosIndexCtrl', function($scope, $http, loading) {

    $scope.audios = {};

    loading.show();

    $http.post('http://localhost:8080/api/audios/index.php').success(function(data) {
        loading.hide();
        if (data.status.error == false) {
            $scope.audios = data.data;
        } else {
            $scope.message = data.status.message;
        }
    }).error(function(data, status) {
        loading.hide();
        $scope.message = "Error fetching data, please try again.";
    });

})

.controller('AudiosSingleCtrl', function($scope, $http, $stateParams, $sce, loading) {

    $scope.json = {};
    $scope.json.id = $stateParams.id;

    loading.show();

    $http.post('http://localhost:8080/api/audios/single.php', $scope.json).success(function(data) {
        loading.hide();
        if (data.status.error == false) {
            $scope.audio = data.data;
            $scope.audio.url = $sce.trustAsResourceUrl($scope.audio.url)
        } else {
            $scope.message = data.status.message;
        }
    }).error(function(data, status) {
        loading.hide();
        $scope.message = "Error fetching data, please try again.";
    });

})

.controller('MessagesIndexCtrl', function($scope, $http, loading, $state) {

    $scope.rightButtons = [
        {
            content: '<i class="icon ion-ios7-compose-outline"></i>',
            type: 'button-icon button-clear',
            tap: function(e) {
                $state.go('messages-create');
            }
        }
    ];

    loading.show();

    $http.post('http://localhost:8080/api/messages/index.php').success(function(data) {
        loading.hide();
        if (data.status.error == false) {
            $scope.messages = data.data;
        } else {
            $scope.message = data.status.message;
        }
    }).error(function(data, status) {
        loading.hide();
        $scope.message = "Error fetching data, please try again.";
    });

})

.controller('MessagesCreateCtrl', function($scope, $http) {



});