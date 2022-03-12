const express = require('express')
const res = require('express/lib/response')
const { Router } = express
const {
    getAllProducts,
    getProductById,
    createNewProduct,
    updateProduct,
    deleteProduct
} = require('./apis')
const { validaProducto } = require('./middleware/validaProducto')

const app = express()
const PORT = 8080
const router = Router()


app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/static', express.static(__dirname + '/public'))
app.use('/api/productos', router)

// ROUTES
router.get('/', getAllProducts)
router.get('/:id', validaProducto, getProductById)
router.post('/', createNewProduct)
router.put('/:id', validaProducto, updateProduct)
router.delete('/:id', validaProducto, deleteProduct)


app.listen(PORT, () => {
    console.log('server a la escucha en el puerto', PORT)
})

app.on('error', () => {
    console.log('Sucedió un error al iniciar el servidor')
})