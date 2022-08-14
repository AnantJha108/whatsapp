import './App.css';
import { Box, Container, Grid } from '@mui/material';
import Header1 from './components/Header1';
import Header2 from './components/Header2';
import Side1 from './components/Side1';
import Side2 from './components/Side2';

function App() {
  return (
    <>
      <Box sx={{ height:"100vh"}} className="background">
        <Container  maxWidth="xl" sx={{ height: "140px", backgroundColor: "#00a884" }}>
          <Box sx={{pt:"20px"}}>
            <Grid container>
              <Grid item xl={3.6} >
                <Header1/>
                <Side1/>
              </Grid>
            <Grid item xl={8.4}>
              <Header2/>
              <Side2/>
            </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </>
  );
}

export default App;
