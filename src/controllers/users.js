const { users, getAllUsers } = require('../models/users')
const qs = require('querystring')

module.exports = {
  getAllUsers: (request, response) => {
    let { page, limit } = request.query
    page = parseInt(page) || 1
    limit = parseInt(limit) || 5

    const totalData = users.length
    const totalPage = Math.ceil(totalData / limit)
    const startData = (page && limit && (page * limit) - limit)
    const endData = (page && limit && (page * limit))

    const prevQuery = qs.stringify({
      ...request.query,
      ...{ page: page - 1 }
    })
    const nextQuery = qs.stringify({
      ...request.query,
      ...{ page: page + 1 }
    })

    const prevLink = `http://localhost:8080/users?${prevQuery}`
    const nextLink = `http://localhost:8080/users?${nextQuery}`

    const data = {
      success: true,
      msg: 'list',
      data: getAllUsers(startData, endData, users),
      pageInfo: {
        page,
        perPage: limit,
        totalPage,
        totalData,
        prevLink: (page > 1 ? prevLink : null),
        nextLink: (page < totalPage ? nextLink : null)
      }
    }
    response.send(data)
  }
}
