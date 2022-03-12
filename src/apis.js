const { listaProductos } = require('./productos')

const getAllProducts = (req, res) => {
    try {
        res.json(listaProductos)
    } catch (error) {
        res.status(500).json({ 'error': error })
    }
}

const getProductById = (req, res) => {
    try {
        const id = parseInt(req.params.id)
        const productoEncontrado = listaProductos.find(producto => producto.id === id)
        res.json(productoEncontrado)
    } catch (error) {
        res.status(500).json({ 'error': error })
    }
}

const createNewProduct = (req, res) => {
    try {
        const { title, price, thumbnail } = req.body        
        let idUltimoProducto = Math.max(...listaProductos.map(producto => producto.id))
        idUltimoProducto = idUltimoProducto += 1

        const nuevoProducto = {
            title,
            price,
            thumbnail,
            id: idUltimoProducto
        }
        listaProductos.push(nuevoProducto)

        res.status(201).json(nuevoProducto)
    } catch (error) {
        res.status(500).json({ 'error': error })
    }
}

const updateProduct = (req, res) => {
    try {
        const id = parseInt(req.params.id)
        const { title, price, thumbnail } = req.body
        const indiceProductoModificar = listaProductos.findIndex(producto => producto.id === id)
        listaProductos[indiceProductoModificar] = { title, price, thumbnail, id }
        res.json('producto actualizado con éxito')
    } catch (error) {
        res.status(500).json({ 'error': error })
    }
}

const deleteProduct = (req, res) => {
    try {
        const id = parseInt(req.params.id)
        const indiceProductoEliminar = listaProductos.findIndex(producto => producto.id === id)
        listaProductos.splice(indiceProductoEliminar, 1)
        res.json('producto eliminado con éxito')
    } catch (error) {
        res.status(500).json({ 'error': error })
    }
}


module.exports = {
    getAllProducts,
    getProductById,
    createNewProduct,
    updateProduct,
    deleteProduct
}