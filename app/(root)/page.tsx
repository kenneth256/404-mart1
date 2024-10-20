import ProductList from '@/components/shared/products/productList'
import { getLatestProducts } from '@/lib/actions/product.actions'


import React from 'react'

const Home = async() => {
  const newestProducts= await getLatestProducts()
  return (
    <div className='space-y-8'>
      
     <ProductList data={newestProducts} title='Latest Products' />
    </div>
  )
}

export default Home
