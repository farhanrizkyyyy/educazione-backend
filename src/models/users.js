const users = [
  {
    id: 1,
    email: 'example@mail.co',
    password: '1234'
  },
  {
    id: 2,
    email: 'example@mail.co',
    password: '1234'
  },
  {
    id: 3,
    email: 'example@mail.co',
    password: '1234'
  },
  {
    id: 4,
    email: 'example@mail.co',
    password: '1234'
  }
]

module.exports = {
  users,
  getAllUsers: (start, end, data) => {
    return data.slice(start, end)
  }
}
