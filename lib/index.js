'use strict';

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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
        this.push = new Push();
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

var Push = function (_Events) {
    _inherits(Push, _Events);

    function Push() {
        _classCallCheck(this, Push);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(Push).apply(this, arguments));
    }

    _createClass(Push, [{
        key: 'all',
        value: function all() {
            _get(Object.getPrototypeOf(Push.prototype), 'all', this).call(this);
        }
    }]);

    return Push;
}(Events);

var james = new GitGet('jcquinlan');