const users = require('../../users.json')

module.exports = {
  getUsers: (req, res) => {
    res.status(200).send(users)
  },

  getUser: (req, res) => {
    const { user_id } = req.params
    const filteredUsers = users.filter(user => user.id === +user_id)
    // console.log(req.params)
    // console.log(user_id)
    if (!user_id) {
      res.status(404).send('Resource not found')
    }
    res.status(200).send(filteredUsers)
  }
}