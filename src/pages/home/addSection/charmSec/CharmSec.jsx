import React from 'react'
import Layout from '../../../../components/common/layout/Layout'
import FirstSec from './container/firstSec/FirstSec'
import Charm from './container/twoSec/Charm'
import Jewelry from '../../components/jewelry/Jewelry'
import CardSec from '../../components/cardSec/CardSec'

const CharmSec = () => {
  return (
    <Layout>
        <FirstSec/>
        <Jewelry/>
        <Charm/>
        <CardSec/>

    </Layout>
  )
}

export default CharmSec