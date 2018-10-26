//操作数据库
const MongoClient = require('mongodb').MongoClient
const ObjectID = require('mongodb').ObjectID
const URL = 'mongodb://127.0.0.1:27017'
const DB_NAME = 'hackernews'
const COLLECTION_NAME = 'news'

module.exports = {
  //查询全部新闻数据
  getAllNews(callback) {
    MongoClient.connect(URL, {useNewUrlParser: true}, (err, client) => {
      if (err) return console.log('连接数据库失败')
      client
        .db(DB_NAME)
        .collection(COLLECTION_NAME)
        .find()
        .toArray((err, result) => {
          if (err) return console.log('数据查询失败')
          callback(result)
        })
      client.close()
    })
  },
  //添加数据
  addNews(newsData,callback) {
    MongoClient.connect(URL, {useNewUrlParser: true}, (err, client) => {
      if (err) return console.log('连接数据库失败')
      client
        .db(DB_NAME)
        .collection(COLLECTION_NAME)
        .insertOne(newsData, (err, result) => {
          if (err) {
            return console.log('新闻添加失败', err)
          }
          if (result.result.ok === 1) {
            callback()
          }
        })
      client.close()
    })
  },
//  查询数据
  findNewsById(id,callback){
    id = new ObjectID(id)
    MongoClient.connect(URL, {useNewUrlParser: true}, (err, client) => {
      if (err) return console.log('连接数据库失败')
      client
        .db(DB_NAME)
        .collection(COLLECTION_NAME)
        .findOne({_id:id},(err, result) => {
          if (err) return console.log('数据查询失败')
          callback(result)
        })
      client.close()
    })
  }

}
