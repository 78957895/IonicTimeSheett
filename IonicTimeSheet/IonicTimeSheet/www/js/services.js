angular.module('starter.services', ['ngCookies'])


.factory('Auth',function($cookieStore){
    var _user = $cookieStore.get('starter.user');
    var setUser = function(user){
        _user = user;
        $cookieStore.put('starter.user', _user);
    }
    return{
        setUser: setUser,
        isLoggedIn: function(){
            return _user ? true : false;
        },
        getUser :function(){
            return _user;
        },
        logout : function(){
            $cookieStore.remove('starter.user');
            _user=null;
        }
    }
})

.factory('Auth', function ($cookieStore) {
    var _password = $cookieStore.get('starter.password');
    var setPassword = function (password) {
        _password = password;
        $cookieStore.put('starter.password', _password);
    }
    return {
        setPassword: setPassword,
        isLoggedIn: function () {
            return _password ? true : false;
        },
        getPassword: function () {
            return _password;
        },
        logout: function () {
            $cookieStore.remove('starter.password');
            _password = null;
        }
    }
})