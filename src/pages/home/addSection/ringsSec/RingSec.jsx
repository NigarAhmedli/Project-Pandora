import React from 'react'
import Layout from '../../../../components/common/layout/Layout'
import FirstSec from './container/firstSec/FirstSec'
import Rings from './container/twoSec/Rings'

const RingSec = () => {
  return (
    <Layout>
        <FirstSec/>
        <Rings/>
    </Layout>
  )
}

export default RingSec