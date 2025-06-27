import React from 'react'
import Layout from '../../../../components/common/layout/Layout'
import AdminSec from './container/AdminSec'
import AdminHeader from './adminHeader/AdminHeader'

const AdminPanel = () => {
  return (
    <Layout>
      <AdminHeader/>
        <AdminSec/>
    </Layout>
  )
}

export default AdminPanel