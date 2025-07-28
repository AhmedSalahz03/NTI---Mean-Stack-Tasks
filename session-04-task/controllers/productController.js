let products = require("../data/products");

const getAllProducts = (req, res) => {
    res.status(200).json(products);
};

const getProductById = (req, res) => {
    const id = req.params.id;
    const product = products.find((p) => p.id == id);

    if (product) {
        res.status(200).json(product);
    } else {
        res.status(404).json({ message: "not found" });
    }
};

const addProduct = (req, res) => {
    let body = req.body;
    if (!body.productName || !body.price) {
        return res.status(400).json({ message: "product price or name is missing" });
    }
    const newProduct = { id: products.length + 1, ...body };
    products.push(newProduct);
    res.status(201).json(newProduct);
};

const deleteProduct = (req, res) => {
    const id = req.params.id;
    const index = products.findIndex((product) => product.id == id);
    if (index === -1) {
        return res.status(404).json({ message: "Product is not found" });
    }
    products.splice(index, 1);
    res.status(200).json({ message: "product deleted" });
};

const updateProduct = (req, res) => {
    const id = req.params.id;
    const body = req.body;
    const index = products.findIndex((product) => product.id == id);
    if (index === -1) {
        return res.status(404).json({ message: "Product is not found" });
    }
    products[index] = { ...products[index], ...body };
    res.status(200).json({ message: "product updated" });
};

module.exports = {
    getAllProducts,
    getProductById,
    addProduct,
    deleteProduct,
    updateProduct
};
