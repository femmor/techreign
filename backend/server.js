const express = require("express")
const products = require('./data/products')
const app = express()

const PORT = 7000

// Test API
app.get('/', (req, res) => {
  res.send('API is running')
})

// Get all products
app.get('/api/products', (req, res) => {
  res.json(products)
})

// Get product by ID
app.get('/api/products/:id', (req, res) => {
  const product = products.find((p) => p._id === req.params.id)
  res.json(product)
})

// Run Server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})