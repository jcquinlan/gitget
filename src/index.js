class GitGet{
    constructor(username){
        this.username = username;
    }

    events(){
        return fetch('https://api.github.com/users/' + this.username + '/events')
            .then(response => response.json());
    }

    pushEvents(){
        return this.events().then(function(events){
                let eventsList = [];
                events.forEach(function(event){
                    if( event.type === 'PushEvent' ){
                        eventsList.push(event);
                    }
                });
                return eventsList;
            });
    }

}

const james = new GitGet('jcquinlan');

james.pushEvents().then(events => console.log(events[0]));
