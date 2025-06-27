import React, { useEffect } from "react";
import AdminHeader from "../adminHeader/AdminHeader";
import Header from "../../../../../components/common/header/Header";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers, updateUserRole } from "../../../../../redux/reducers/authSlice"; // ✅ doğru thunk budur
import styles from "./Dashboard.module.scss";

const Dashboard = () => {
  const dispatch = useDispatch();

  // ✅ Bütün istifadəçiləri çək
  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);

  const users = useSelector((state) => state.auth.users); // auth.auth yox, users istifadə olunur

  return (
    <>
      <Header />
      <AdminHeader />
      <div className={styles.table}>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Avatar</th>
              <th>Role</th>
            </tr>
          </thead>
          <tbody>
            {users &&
              users.map((item) => (
                <tr key={item._id}>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.phone}</td>
                  <td>
                    <img
                      src={
                        item.avatar
                          ? `http://localhost:5000${item.avatar}`
                          : "https://cdn-icons-png.flaticon.com/512/149/149071.png"
                      }
                      alt="avatar"
                      width="40"
                      height="40"
                      style={{
                        borderRadius: "50%",
                        objectFit: "cover",
                        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                      }}
                    />
                  </td>
                  <td>
                    <select
                      value={item.role}
                      onChange={(e) =>
                        dispatch(
                          updateUserRole({ id: item._id, role: e.target.value })
                        )
                      }
                    >
                      <option value="user">user</option>
                      <option value="admin">admin</option>
                    </select>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Dashboard;
