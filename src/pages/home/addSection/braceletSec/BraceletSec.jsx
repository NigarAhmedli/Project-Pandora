import React from 'react'
import Layout from '../../../../components/common/layout/Layout'
import FirstSec from './container/twoSec/FirstSec'
import Bracelet from './container/firstSec/Bracelet'
import CardSec from '../../components/cardSec/CardSec'

const BraceletSec = () => {
  return (
    <Layout>
        <FirstSec/>
        <Bracelet/>
        <CardSec/>
    </Layout>
  )
}

export default BraceletSec