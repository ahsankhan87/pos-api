// import { getItem, listItems, editItem, addItem, deleteItem } from '../models/products.models.js'
const ProductModel = require('../models/products.models');

export const getProduct = (req, res) => {
    try {
        const resp = ProductModel.getItem(parseInt(req.params.id))
        res.status(200).json(resp)

    } catch (err) {
        res.status(500).send(err)
    }
}

export const listProducts = (req, res) => {
    try {
        const resp = ProductModel.listItems()
        res.status(200).json(resp)

    } catch (err) {
        res.status(500).send(err)
    }
}

export const editProduct = (req, res) => {
    try {
        const resp = ProductModel.editItem(parseInt(req.params.id), req.body)
        res.status(200).json(resp)

    } catch (err) {
        res.status(500).send(err)
    }
}

export const addProduct = (req, res) => {
    try {
        const resp = ProductModel.addItem(req.body)
        res.status(200).json(resp)

    } catch (err) {
        res.status(500).send(err)
    }
}

export const deleteProduct = (req, res) => {
    try {
        const resp = ProductModel.deleteItem(parseInt(req.params.id))
        res.status(200).json(resp)

    } catch (err) {
        res.status(500).send(err)
    }
}