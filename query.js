const db = require('./db')
const User = require('./models/user')

const findAll = async() => {
    const users = User.find()
    // finding all the users
    console.log('All users:', users)
}


const run = async () => {
    await findAll()
    db.close()

}

run()