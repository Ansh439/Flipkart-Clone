//componets
import Header from './components/header/Header.jsx'
import Home from './components/home/Home.jsx';
import { Box } from '@mui/material';

function App() {
  return (
    <>
      <Header />
      <Box style= {{marginTop: 55}}>
        <Home />
      </Box>
    </>
  );
}

export default App;
