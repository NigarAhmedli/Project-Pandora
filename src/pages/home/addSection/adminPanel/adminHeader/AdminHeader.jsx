import React from 'react'
import styles from './AdminHeader.module.scss'
import { useNavigate } from 'react-router-dom'

const AdminHeader = () => {
    const navigation = useNavigate()

    const goUsers = () => {
        navigation('/users')
    }

    const goProducts = () => {
        navigation('/adminpanel')
    }

    const goChart = () => {
        navigation('/chart')
    }
  return (
    <header>
        <ul>
            <li><a onClick={goProducts} href="">Products</a></li>
            <li><a onClick={goUsers} href="">Users</a></li>
            <li><a onClick={goChart} href="">Chart</a></li>
        </ul>
    </header>
  )
}

export default AdminHeader