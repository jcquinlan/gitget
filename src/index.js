function all(){
    return fetch('https://api.github.com/users/' + this.username + '/events')
        .then(response => response.json());
}

class GitGet {
    constructor(username){
        this.username = username;
        this.events = new Events(this.username);
        fetch('https://api.github.com/users/' + this.username + '/events')
            .then(response => response.json());
    }
}

class Events {
    constructor(username){
        this.username = username;
        this.push = new Push(this.username);
        this.all = all;
    }
}

class Push {
    constructor(username){
        this.username = username;
        this.all = function(){
            all.then(function(events){
                return events.length;
            });
        }
    }
}



const james = new GitGet('jcquinlan');
