import React from 'react'
import Layout from '../../../../components/common/layout/Layout'
import FirstS from './container/firstS/FirstS'
import Collection from './container/collection/Collection'
import CardSec from '../../components/cardSec/CardSec'

const CollectionSec = () => {
  return (
    <Layout>
        <FirstS/>
        <Collection/>
        <CardSec/>
    </Layout>
  )
}

export default CollectionSec