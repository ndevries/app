var myServices = angular.module('myServices', []);

myServices.factory('Page', function(){
    var name = 'Home';
    return {
        name: function() { return name; },
        setName: function(x) { name = x; }
    };
});
