import { Box } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import NavBar from './components/navbar/NavBar';

function App() {
  const isDark = useSelector((state) => state.darkMode.isDark)
  const dispatch = useDispatch()
  return (
    <div className={`App ${isDark ? "dark" : ""}`}>
      <Box
        className='bg-lightModeColor  dark:bg-darkModeColor  w-screen h-screen'
      >
        <NavBar/>
      </Box>
    </div>
  );
}

export default App;
