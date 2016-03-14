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
    }
    all(){
        return fetch('https://api.github.com/users/' + this.username + '/events')
            .then(response => response.json());
    }
}

class Push {
    constructor(username){
        this.username = username;
    }
    all(){
        console.log('Returning all the push events for you ' + this.username);
    }
}

const james = new GitGet('jcquinlan');
