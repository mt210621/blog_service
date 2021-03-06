'use strict';

const Controller = require('egg').Controller

class HomeController extends Controller{

    async index(){
        //获取用户表的数据

        let result = await this.app.mysql.select("type")
        console.log(result)
        this.ctx.body=result
    }

    async getArticleList(){

        let sql = 'SELECT article.id as id,'+
                  'article.title as title,'+
                  'article.introduce as introduce,'+
                  'article.addTime as addTime,'+
                  'article.view_count as view_count '+
                  'FROM article'
     
         const results = await this.app.mysql.query(sql)
     
         this.ctx.body={
             data:results
         }
     }

     async getArticleById(){
        //先配置路由的动态传值，然后再接收值
        let id = this.ctx.params.id

        let sql = 'SELECT article.id as id,'+
        'article.title as title,'+
        'article.introduce as introduce,'+
        'article.article_content as article_content,'+
        "article.addTime as addTime,"+
        'article.view_count as view_count '+
        'FROM article '+
        'WHERE article.id='+id



        const result = await this.app.mysql.query(sql)


        this.ctx.body={data:result}

    }
    
}

module.exports = HomeController