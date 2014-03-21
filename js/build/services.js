angular.module('app.services', [])

.service('API', function($http) {

    var baseURL = 'http://www.proalliance.biz/api/default.aspx';
    var apikey = '123';

    this.login = function(user) {

        return $http.get(baseURL + '?apikey=' + apikey + '&method=login&UserName=' + user.id + '&Password=' + user.password);

    };

})

.factory('Menu', function() {

    var showMenu = {
        state: false
    };

    return {

        state: function() {
            return showMenu;
        },

        hide: function() {
            showMenu.state = false;
        },

        show: function() {
            showMenu.state = true;
        }

    };

})

.factory('Header', function($state) {

    return {

        button: function(icon, destination, text) {
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