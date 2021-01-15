require('dotenv').config()

const express = require(`express`)
const mongoose = require(`mongoose`)
const bodyParser = require(`body-parser`)

const routeRouter = require(`./routes/main/rootRoute`)
const addProductRouter = require(`./routes/products/addProduct`)
const getAllProductsRouter = require(`./routes/products/getProduct`)
const deleteProductsRouter = require(`./routes/products/deleteProduct`)
const updateItemRouter = require(`./routes/products/patchProduct`)
const putItemRouter = require(`./routes/products/putProduct`)

const signUpRouter = require(`./routes/users/visitor/signup`)
const logInRouter = require(`./routes/users/visitor/login`)

const app = express()
app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}))


mongoose.connect(`${process.env.DB}`, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false})



// Products routes

app.use(routeRouter)
app.use(addProductRouter)
app.use(getAllProductsRouter)
app.use(deleteProductsRouter)
app.use(updateItemRouter)
app.use(putItemRouter)

// Users routes

app.use(signUpRouter)
app.use(logInRouter)

// Admin routes

app.listen(process.env.PORT || 8000, () => {
    console.log(`Server is running`)
})