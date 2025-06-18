import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

const PrivRouter = () => {
  const { user, loading } = useSelector((state) => state.auth);

  if (loading) return null; // və ya <p>Yüklənir...</p>

  return user ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivRouter;
