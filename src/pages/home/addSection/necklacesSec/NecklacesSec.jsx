import React from 'react'
import Layout from '../../../../components/common/layout/Layout'
import OneSec from './container/firstSec/OneSec'
import Necklaces from './container/necklaces/Necklaces'

const NecklacesSec = () => {
  return (
    <Layout>
        <OneSec/>
        <Necklaces/>
    </Layout>
  )
}

export default NecklacesSec