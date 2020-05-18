const { users, getAllUsers, getUsersByEmail, getSortUsers } = require('../models/users')
const qs = require('querystring')

module.exports = {
  getAllUsers: (request, response) => {
    let { page, limit, search, sort, sortBy } = request.query
    page = parseInt(page) || 1
    limit = parseInt(limit) || 5
    search = search || ''
    sort = Boolean(parseInt(sort)) || false
    sortBy = sortBy || 'id'

    const totalData = getUsersByEmail(users, search).length
    const totalPage = Math.ceil(totalData / limit)
    const startData = (page && limit && (page * limit) - limit)
    const endData = (page && limit && (page * limit))

    const prev = qs.stringify({
      ...request.query,
      ...{ page: page - 1 }
    })
    const next = qs.stringify({
      ...request.query,
      ...{ page: page + 1 }
    })

    const prevQuery = prev
    const nextQuery = next

    const prevLink = `http://localhost:8080/users?${prevQuery}`
    const nextLink = `http://localhost:8080/users?${nextQuery}`

    const data = {
      success: true,
      msg: 'list',
      data: getAllUsers(startData, endData, getUsersByEmail(getSortUsers(users, sort, sortBy), search)),
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
