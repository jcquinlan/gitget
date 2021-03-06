'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var GitGet = function () {
    function GitGet(username) {
        _classCallCheck(this, GitGet);

        this.username = username;
        this.events = new Events(this.username);
        this.profile = new Profile(this.username);
        // Fetch URL on init b
        fetch('https://api.github.com/users/' + this.username + '/events').then(function (response) {
            return response.json();
        });
    }

    _createClass(GitGet, [{
        key: 'set',
        value: function set(r, e) {
            document.getElementById(e).innerText = r;
        }
    }]);

    return GitGet;
}();

var Profile = function () {
    function Profile(username) {
        _classCallCheck(this, Profile);

        this.username = username;
    }

    _createClass(Profile, [{
        key: 'get',
        value: function get(attr) {
            var instance = this;

            return fetch('https://api.github.com/users/' + this.username).then(function (response) {
                return response.json();
            });
        }
    }, {
        key: 'set',
        value: function set() {
            alert(this.answer);
        }
    }]);

    return Profile;
}();

var Events = function () {
    function Events(username) {
        _classCallCheck(this, Events);

        this.username = username;
    }

    _createClass(Events, [{
        key: 'get',
        value: function get(type) {
            if (!type) {
                return fetch('https://api.github.com/users/' + this.username + '/events').then(function (response) {
                    return response.json();
                });
            } else {
                return fetch('https://api.github.com/users/' + this.username + '/events').then(function (response) {
                    return response.json();
                }).then(function (events) {
                    return events.filter(function (event) {
                        return event.type === type;
                    });
                });
            }
        }
    }]);

    return Events;
}();