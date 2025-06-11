import React from 'react'
import Layout from '../../../../components/common/layout/Layout'
import FirstS from './container/firstS/FirstS'
import CardSec from '../../components/cardSec/CardSec'
import Category from './container/collection/Category'

const CollectionSec = () => {
  return (
    <Layout>
        <FirstS/>
        <Category/>
        <CardSec/>
    </Layout>
  )
}

export default CollectionSec