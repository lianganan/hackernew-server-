const db = require('./db')

module.exports = {
  showIndex(req, res) {
    db.getAllNews(result => {
      res.render('index.html', {list: result})
    })
  },
  showDetails(req, res) {
    let id = req.query.id
    db.findNewsById(id, result => {
      res.render('details.html', result)
    })
  },
  showSubmit(req, res) {
    res.render('submit.html')
  },
  addGet(req, res) {
    let newsData = req.query
    db.addNews(newsData, result => {
      res.redirect('/index')
    })
  }
}