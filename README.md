# gitget
A small library for easily pulling data from GitHub.

All calls made to the API are asynchronous, so promises are needed to handle the data once it is returned. I am
hoping that a solution will be devised that take care of the promises behind-the-scenes, so users can use something
like :

	user.get('avatar_url').insert('#div');

to use the library. This may not be possible, but it is my hope.

All changes should be made to src/gitget.js using ES6.

I am totally open to taking this project in any direction, as I'm using it as a learning experience.
