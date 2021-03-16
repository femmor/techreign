import React from 'react'
import {useParams} from "react-router-dom"

const ProductScreen = () => {

  const params = useParams()
  console.log(params)

  return (
    <div>
      Product {params.id}
    </div>
  )
}

export default ProductScreen
