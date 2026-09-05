import './App.css'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';


function App() {

  return (
    <div style={{ width: '100%', height: '100vh' }}>
      {/* mui app bar */}
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{ backgroundColor: '#ffffff' }}>
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="primary"
              aria-label="menu"
              sx={{ color: 'blue', mr: 2 }}
            >
            </IconButton>
            <Typography variant="h6" component="div" sx={{ color: 'black', flexGrow: 1, fontSize: '28px', fontWeight: 'bold' }}>
              <img src="./public/logo.png" alt="" style={{ width: '48px' }} />
              BMI <span className='text-primary'>check</span>

            </Typography>

          </Toolbar>
        </AppBar>
      </Box>

      <div style={{minHeight:'150px',width:'100%'}} className='mt-2'>
        <h1 className='fnt1 text-center'>Calculate Your <span className='text-primary'>BMI</span></h1>
        <p className='text-center'>Know your body mass index instantly. A healthier you <br /> starts with knowing your numbers</p>
        
      </div>

      <div className="row">
        <div className="col-md-1"></div>
        <div className="col-md-5">
          <div style={{height:'400px',width:'100%'}} className='border rounded shadow p-4'>
              <h2>BMI Calculator</h2>
              <p>Enter your details below to calculate your BMI.</p>
          </div>
        </div>
        <div className="col-md-5">
          <div style={{height:'400px',width:'100%'}} className='border rounded shadow p-4'>

          </div>
        </div>
        <div className="col-md-1"></div>
      </div>

    </div>
  )
}

export default App
