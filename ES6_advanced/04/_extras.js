
// EventEmitter

const eventEmitter = require('events')

class Users extends eventEmitter {
    userLogged(data) {
        this.emit('logged', data)
    }
}

const users = new Users();

// "users.once" para logar uma vez

users.on('user logged', data => {
    console.log(data)
})

Users.userLogged({user: 'user_teste'})