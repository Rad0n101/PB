const uuid = require('uuid')
const path = require('path')
const {Product, ProductInfo} = require('../models/models')
const ApiError = require('../error/ApiError')

class ProductController{
    async create(req, res, next){
        try
        {
            let {name, price, categoryId, themeId, info} = req.body
            const {img} = req.files
            let fileName = uuid.v4() + ".jpg"
            img.mv(path.resolve(__dirname, '..', 'static', fileName))

            const product = await Product.create({name, price, categoryId, themeId, img: fileName})

            if(info){
                info = JSON.parse(info)
                info.forEach(i =>
                    ProductInfo.create({
                        title: i.title,
                        description: i.description,
                        productId: product.id
                    }))
            }
    
    
            return res.json(product)
        } 
        catch (e)
        {
            next(ApiError.badRequest(e.message))
        }
    }

    async getAll(req, res){
        let {categoryId, themeId, limit, page} = req.query
        page = page || 1
        limit = limit || 12
        let offset = page * limit - limit

        let products
        if(!categoryId && !themeId){
            products = await Product.findAndCountAll({limit, offset})
        }
        if(categoryId && !themeId){
            products = await Product.findAndCountAll({where:{categoryId}, limit, offset})
        }
        if(!categoryId && themeId){
            products = await Product.findAndCountAll({where:{themeId}, limit, offset})
        }
        if(categoryId && themeId){
            products = await Product.findAndCountAll({where:{categoryId, themeId}, limit, offset})
        }
        return res.json(products)
    }

    async getOne(req, res){
        const {id} = req.params
        const product = await Product.findOne(
            {
                where: {id},
                include: [{model: ProductInfo, as: 'info'}]
            },
        )
        return res.json(product)
    }
}

module.exports = new ProductController()