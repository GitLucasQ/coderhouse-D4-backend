const { listaProductos } = require('../productos')

const validaProducto = (req, res, next) => {
    const id = parseInt(req.params.id)
    const indiceProductoEncontrado = listaProductos.findIndex(producto => producto.id === id)
    if (indiceProductoEncontrado === -1) {
        return res.json('Producto no encontrado')
    }
    next()
}

module.exports = {
    validaProducto
}