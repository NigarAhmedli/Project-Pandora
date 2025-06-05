import React from 'react'
import Layout from '../../../../components/common/layout/Layout'
import OneSec from './container/firstSec/OneSec'
import Necklaces from './container/necklaces/Necklaces'
import CardSec from '../../components/cardSec/CardSec'

const NecklacesSec = () => {
  return (
    <Layout>
        <OneSec/>
        <Necklaces/>
        <CardSec/>
    </Layout>
  )
}

export default NecklacesSec