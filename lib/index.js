'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var GitGet = function GitGet(username) {
    _classCallCheck(this, GitGet);

    this.username = username;
    this.events = new Events(this.username);
    fetch('https://api.github.com/users/' + this.username + '/events').then(function (response) {
        return response.json();
    });
};

var Events = function () {
    function Events(username) {
        _classCallCheck(this, Events);

        this.username = username;
        this.push = new Push(this.username);
    }

    _createClass(Events, [{
        key: 'all',
        value: function all() {
            return fetch('https://api.github.com/users/' + this.username + '/events').then(function (response) {
                return response.json();
            });
        }
    }]);

    return Events;
}();

var Push = function () {
    function Push(username) {
        _classCallCheck(this, Push);

        this.username = username;
    }

    _createClass(Push, [{
        key: 'all',
        value: function all() {
            console.log('Returning all the push events for you ' + this.username);
        }
    }]);

    return Push;
}();

var james = new GitGet('jcquinlan');