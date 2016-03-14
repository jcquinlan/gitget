'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function all() {
    return fetch('https://api.github.com/users/' + this.username + '/events').then(function (response) {
        return response.json();
    });
}

var GitGet = function GitGet(username) {
    _classCallCheck(this, GitGet);

    this.username = username;
    this.events = new Events(this.username);
    fetch('https://api.github.com/users/' + this.username + '/events').then(function (response) {
        return response.json();
    });
};

var Events = function Events(username) {
    _classCallCheck(this, Events);

    this.username = username;
    this.push = new Push(this.username);
    this.all = all;
};

var Push = function Push(username) {
    _classCallCheck(this, Push);

    this.username = username;
    this.all = function () {
        all.then(function (events) {
            return events.length;
        });
    };
};

var james = new GitGet('jcquinlan');