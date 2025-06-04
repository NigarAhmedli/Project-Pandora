import React from 'react'
import Layout from '../../../../components/common/layout/Layout'
import FirstSec from './container/firstSec/FirstSec'
import Charm from './container/twoSec/Charm'

const CharmSec = () => {
  return (
    <Layout>
        <FirstSec/>
        <Charm/>
    </Layout>
  )
}

export default CharmSec