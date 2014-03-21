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

})

.factory('buttons', function($state) {

    return {
        make: function(icon, destination, text) {
            text = typeof text !== 'undefined' ? text : '';
            var button = [
                {
                    content: '<i class="icon ' + icon + '"></i> ' + text,
                    type: 'button-icon button-clear',
                    tap: function(e) {
                        $state.go(destination);
                    }
                }
            ];
            return button;
        }
    };

});