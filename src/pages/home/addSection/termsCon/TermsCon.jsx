import React from 'react'
import Layout from '../../../../components/common/layout/Layout'
import FirstTerms from './container/firstTerms/FirstTerms'
import TwoTerms from './container/twoTerms/TwoTerms'

const TermsCon = () => {
  return (
    <Layout>
        <FirstTerms/>
        <TwoTerms/>
    </Layout>
  )
}

export default TermsCon