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
        this.push = new Push();
    }
    all(){
        return fetch('https://api.github.com/users/' + this.username + '/events')
            .then(response => response.json());
    }
}

class Push extends Events {
    all(){
        super.all();
    }
}

const james = new GitGet('jcquinlan');
