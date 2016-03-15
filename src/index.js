class GitGet {
    constructor(username){
        this.username = username;
        this.events = new Events(this.username);
        this.profile = new Profile(this.username);
        fetch('https://api.github.com/users/' + this.username + '/events')
            .then(response => response.json());
    }

    setHtml(r){
        document.write(r);
    }
}

class Profile {
    constructor(username){
        this.username = username;
    }

    get(attr){
        return fetch('https://api.github.com/users/' + this.username )
            .then(response => response.json())
            .then(profile => profile[attr]);
    }
}
class Events {
    constructor(username){
        this.username = username;
    }

    get(type){
        return fetch('https://api.github.com/users/' + this.username + '/events')
            .then(response => response.json())
            .then(function(events){
                return events.map(event => event.type === type );
            });
    }
}



const james = new GitGet('jcquinlan');
