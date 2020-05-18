const users = [
  {
    id: 1,
    email: 'admin@mail.co',
    password: '1234'
  },
  {
    id: 2,
    email: 'mod1@mail.co',
    password: '1234'
  },
  {
    id: 3,
    email: 'mod2@mail.co',
    password: '1234'
  },
  {
    id: 4,
    email: 'mod3@mail.co',
    password: '1234'
  },
  {
    id: 5,
    email: 'mod4@mail.co',
    password: '1234'
  },
  {
    id: 6,
    email: 'mod5@mail.co',
    password: '1234'
  },
  {
    id: 7,
    email: 'jajang@mail.co',
    password: '1234'
  }
]

module.exports = {
  users,
  getAllUsers: (start, end, data) => {
    return data.slice(start, end)
  },
  getUsersByEmail: (data, email) => {
    return users.filter(o => o.email.startsWith(email))
  },
  getSortUsers: (data, cond, column) => {
    return data.sort((a, b) => {
      let column1 = a[column]
      let column2 = b[column]

      if (typeof a[column] === 'string') {
        column1 = a[column].toUpperCase()
      }
      if (typeof b[column] === 'string') {
        column2 = b[column].toUpperCase()
      }

      if (!cond) {
        if (column1 < column2) {
          return -1
        }
        if (column1 > column2) {
          return 1
        }
      } else {
        if (column1 > column2) {
          return -1
        }
        if (column1 < column2) {
          return 1
        }
      }
      return 0
    })
  }
}
