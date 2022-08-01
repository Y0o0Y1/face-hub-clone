import { Button } from '@mui/material';
import { Container } from '@mui/system';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { toggleLights } from './features/darkModeSlice';

function App() {
  const isDark = useSelector((state) => state.darkMode.isDark)
  // const [isDark, setIsDark] = useState(true);
  const dispatch = useDispatch()
  return (
    <div className={`App ${isDark && "dark"}`}>
      <Container
        className='bg-lightModeColor dark:bg-darkModeColor'
      >
        <h1
          className='bg-lightModeColor dark:bg-darkModeColor text-darkModeColor dark:text-white'
        >
          Hello Material UI With TailwindCSS
        </h1>
        <Button
          className='btn-primary'
          variant="contained"
          onClick={() => {dispatch(toggleLights()) }}
        >Toggle Dark Mode </Button>
      </Container>
    </div>
  );
}

export default App;
