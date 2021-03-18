import express from "express"
import dotenv from 'dotenv'
import colors from "colors"
import connectDB from "./config/db.js"
import productRoutes from "./routes/productRoutes.js"

dotenv.config()

connectDB()

// Initialize app
const app = express()

const PORT = process.env.PORT || 5000

// Test API
app.get('/', (req, res) => {
  res.send('API is running')
})

app.use('/api/products', productRoutes)

// Run Server
app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
})