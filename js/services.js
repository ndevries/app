angular.module('app.services', [])

.factory('loading', function($ionicLoading) {

    var loading = $ionicLoading.show({
        content: 'Loading',
        animation: 'fade-in',
        showBackdrop: true,
        maxWidth: 200
    });

    return {
        show: function() {
            loading.show();
        },
        hide: function() {
            loading.hide();
        }
    };

});