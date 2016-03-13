'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var GitGet = function () {
    function GitGet(username) {
        _classCallCheck(this, GitGet);

        this.username = username;
    }

    _createClass(GitGet, [{
        key: 'events',
        value: function events() {
            return fetch('https://api.github.com/users/' + this.username + '/events').then(function (response) {
                return response.json();
            });
        }
    }, {
        key: 'pushEvents',
        value: function pushEvents() {
            return this.events().then(function (events) {
                var eventsList = [];
                events.forEach(function (event) {
                    if (event.type === 'PushEvent') {
                        eventsList.push(event);
                    }
                });
                return eventsList;
            });
        }
    }]);

    return GitGet;
}();

var james = new GitGet('jcquinlan');

james.pushEvents().then(function (events) {
    return console.log(events[0]);
});