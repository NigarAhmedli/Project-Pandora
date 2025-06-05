import React from 'react'
import Layout from '../../../../components/common/layout/Layout'
import FirstSec from './container/firstSec/FirstSec'
import Rings from './container/twoSec/Rings'
import CardSec from '../../components/cardSec/CardSec'

const RingSec = () => {
  return (
    <Layout>
        <FirstSec/>
        <Rings/>
        <CardSec/>
    </Layout>
  )
}

export default RingSec