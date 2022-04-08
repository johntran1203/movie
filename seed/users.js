// seed data add before it start

const db = requrie('../db');
const User = require("../models/user")

const main = async () => {
    const users = []

    // Insert many users into our db
    await User.insertMany(users)
    console.log('Create new users!!')
}

const run = async () => {
  await main()
  db.close()
}

run()