import { useDispatch } from 'react-redux';
import './App.css';
import Router from './router/Router';
import { useEffect } from 'react';
import { getUser, loadUserFromStorage } from './redux/reducers/authSlice'; // loadUserFromStorage əlavə et

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    // Əvvəl localStorage-dan götür
    dispatch(loadUserFromStorage());

    // Sonra serverdən al (əgər token varsa, yeniləyəcək)
    dispatch(getUser());
  }, [dispatch]);

  return (
    <div className="App">
      <Router />
    </div>
  );
}

export default App;
