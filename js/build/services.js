angular.module('app.services', [])

// Main service to store all data
.service('API', function($http, $state, Menu) {

    var baseURL = 'http://www.proalliance.biz/api/default.aspx';
    var apikey = '123';

    this.login = function(user) {
        return $http.get(baseURL + '?apikey=' + apikey + '&method=login&UserName=' + user.id + '&Password=' + user.password);
    };

    this.logout = function() {
        Menu.hide();
        localStorage.removeItem('password');
        this.auth = false;
        this.user = {};
        this.audios = {};
        this.videos = {};
        this.messages = {};
        this.resources = {};
        $state.go('landing');
    };

    this.post = function(data) {
        return $http.post(baseURL + '?apikey=' + apikey + '&method=addpost', 'UserID=' + this.user.id + '&Message=' + data.Message);
    };

    this.auth = false;
    this.user = {};
    this.audios = {};
    this.videos = {};
    this.messages = {};
    this.resources = {};

})

// Service to control the side menu
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

// Service to control the header
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

})

// Service to help search arrays
.service('Find', function() {

    this.ById = function(arr, id) {
        for (var d = 0, len = arr.length; d < len; d += 1) {
            if (arr[d].id === parseInt(id)) {
                return arr[d];
            }
        }
    };

});