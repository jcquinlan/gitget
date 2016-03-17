class GitGet {
    constructor(username){
        this.username = username;
        this.events = new Events(this.username);
        this.profile = new Profile(this.username);
        // Fetch URL on init b
        fetch('https://api.github.com/users/' + this.username + '/events')
            .then(response => response.json());
    }

    setHtml(r, e){
        document.getElementById(e).innerText = r;
    }
}

class Profile {
    constructor(username){
        this.username = username;
    }

    get(attr){
        let instance = this;

        return fetch('https://api.github.com/users/' + this.username )
            .then(response => response.json())
            .then(function(profile){
                instance.answer = profile[attr];
        });
    }

    set(){
        console.log(this.answer + ' blah');
    }

    // set(e){
    //     let instance =  this;
    //     if( !instance.answer ){
    //         console.log('Not Ready Yet.')
    //     } else {
    //         document.getElementById(e).innerText = instance.answer;
    //         console.log('Set!');
    //     }
    // }
}
class Events {
    constructor(username){
        this.username = username;
    }

    get(type){
        if( !type ){
            return fetch('https://api.github.com/users/' + this.username + '/events')
                .then(response => response.json())
        } else {
            return fetch('https://api.github.com/users/' + this.username + '/events')
                .then(response => response.json())
                .then(function(events){
                    return events.filter(event => event.type === type );
                });
        }
    }
}
