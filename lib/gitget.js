'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var GitGet = function () {
    function GitGet(username) {
        _classCallCheck(this, GitGet);

        this.username = username;
        this.events = new Events(this.username);
        this.profile = new Profile(this.username);
        fetch('https://api.github.com/users/' + this.username + '/events').then(function (response) {
            return response.json();
        });
    }

    _createClass(GitGet, [{
        key: 'setHtml',
        value: function setHtml(r, e) {
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
            if (instance.e == false) {
                console.log('There is no e.');

                fetch('https://api.github.com/users/' + this.username).then(function (response) {
                    return response.json();
                }).then(function (profile) {
                    instance.answer = profile[attr];
                });
                return instance;
            } else {
                console.log('There is an e');

                fetch('https://api.github.com/users/' + this.username).then(function (response) {
                    return response.json();
                }).then(function (profile) {
                    instance.answer = profile[attr];
                    instance.set(instance.e);
                });
            }
        }
    }, {
        key: 'set',
        value: function set(e) {
            var instance = this;
            if (instance.answer == false) {
                console.log('Not Ready Yet.');
                instance.e = e;
                instance.get(e);
            } else {
                console.log('Ready!');
                document.getElementById(e).innerText = instance.answer;
            }
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

var james = new GitGet('jcquinlan');