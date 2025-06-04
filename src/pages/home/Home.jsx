import React from 'react'
import Layout from '../../components/common/layout/Layout'
import Jewelry from './components/jewelry/Jewelry'
import NewSec from './components/newSec/NewSec'
import ProductSec from './components/productSec/ProductSec'
import CardSec from './components/cardSec/CardSec'

const Home = () => {
  return (
    <Layout>
      <NewSec/>
       <Jewelry/> 
       <ProductSec/>
       <CardSec/>
    </Layout>
  )
}

export default Home