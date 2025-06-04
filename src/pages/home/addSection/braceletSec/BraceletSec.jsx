import React from 'react'
import Layout from '../../../../components/common/layout/Layout'
import FirstSec from './container/twoSec/FirstSec'
import Bracelet from './container/firstSec/Bracelet'

const BraceletSec = () => {
  return (
    <Layout>
        <FirstSec/>
        <Bracelet/>
    </Layout>
  )
}

export default BraceletSec