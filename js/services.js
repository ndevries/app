angular.module('app.services', [])

.factory('loading', function($ionicLoading) {

    var loading = $ionicLoading.show({
        content: 'Loading...',
        animation: 'fade-in',
        showBackdrop: false,
        maxWidth: 200
    });
    loading.hide();

    return {
        show: function() {
            loading.show();
        },
        hide: function() {
            loading.hide();
        }
    };

});