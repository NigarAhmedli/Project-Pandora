import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  PieChart,
  Pie,
  Tooltip,
  Cell,
  ResponsiveContainer,
  Legend
} from 'recharts';
import Header from '../../../../../components/common/header/Header';
import AdminHeader from '../adminHeader/AdminHeader';

const COLORS = ['#8884d8', '#82ca9d', '#ffc658', '#ff7f50', '#00C49F', '#FFBB28', '#FF8042'];

const Chart = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:5000/api/users/stats/users', { withCredentials: true })
      .then((res) => setData(res.data))
      .catch((err) => console.error('Statistika alınmadı:', err));
  }, []);

  // Ən çox istifadəçi olan ayı tapmaq
  const topMonth = data.length > 0
    ? data.reduce((max, curr) => (curr.count > max.count ? curr : max)).month
    : 'Yoxdur';

  const totalCount = data.reduce((total, item) => total + item.count, 0);
  const averageCount = data.length > 0 ? Math.round(totalCount / data.length) : 0;

  return (
    <>
      <Header />
      <AdminHeader />

      <div style={{ padding: '30px 0' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '30px', fontSize: '28px' }}>
          İstifadəçi Statistikası (Pie Chart)
        </h2>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '60px', flexWrap: 'wrap' }}>
          {/* Pie Chart hissəsi */}
          <div style={{ width: '600px', height: '600px' }}>
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={data}
                  dataKey="count"
                  nameKey="month"
                  cx="50%"
                  cy="45%"
                  outerRadius={160}
                  innerRadius={60}
                  fill="#8884d8"
                  label={({ name, percent }) =>
                    `${name} (${(percent * 100).toFixed(0)}%)`
                  }
                  animationDuration={1000}
                >
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend verticalAlign="bottom" height={40} iconType="circle" />
              </PieChart>
            </ResponsiveContainer>
          </div>

          {/* Statistik məlumatlar */}
          <div style={{ maxWidth: '300px', fontSize: '16px' }}>
            <h4>📆 Ən çox istifadəçi olan ay:</h4>
            <p style={{ fontWeight: 'bold', fontSize: '18px' }}>{topMonth}</p>

            <h4>👥 Ümumi istifadəçi sayı:</h4>
            <p>{totalCount}</p>

            <h4>📊 Orta istifadəçi sayı:</h4>
            <p>{averageCount}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Chart;
