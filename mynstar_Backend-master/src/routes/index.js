const express = require("express");
const router = express.Router();
const AuthRouter = require("./Auth.routes")
const ProductRouter = require("./Product.routes")
const AddToCartRouter = require("./AddToCart.routes")
const AdminAuthRouter = require("./AdminAuth.route")
const AdminCategory = require("./AdminCategory.route")
const AdminProduct = require("./AdminProduct.route")

const routes= [
            {
                path:'/auth',
                route:AuthRouter
            },
            {
                path:'/product',
                route:ProductRouter
            },{
                path:'/addtocart',
                route:AddToCartRouter
            },{
                path:'/admin/auth',
                route:AdminAuthRouter
            },
            {
                path:'/product/category',
                route:AdminCategory
            },{
                path:'/admin/product',
                route:AdminProduct
            }
]

routes.forEach((cur)=>{
    router.use(cur.path,cur.route)
})

module.exports = router