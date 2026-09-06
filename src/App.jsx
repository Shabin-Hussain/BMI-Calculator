import './App.css'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleDot } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';






function App() {
  /* STATES to hold data */
  const [gender, setGender] = useState("")
  const [age, setAge] = useState(0)
  const [height, setHeight] = useState(0)
  const [weight, setWeight] = useState(0)
  const [bmi, setBMI] = useState(0)

  /* for conditional rendering */
  const [isGender, setIsGender] = useState(true)
  const [isAge, setIsAge] = useState(true)
  const [isHeight, setIsHeight] = useState(true)
  const [isWeight, setIsWeight] = useState(true)

  /* range */
  const [normal, setNormal] = useState('Loading')
  const [range, setRange] = useState('Enter your details to calculate your BMI.')
  const [details, setDetails] = useState(' Your BMI result will appear here.')


  const resolve = (e) => {
  

    let name = e.target.name
    let value = e.target.value
  /*   console.log(!!value.match(/^[0-9]*$/)); */
    if(name=='gender'){
      setGender(value)
      setIsGender(true)
    }


    if (!!value.match(/^[0-9]*$/)) {
      if (name == 'height') {
        setHeight(value)
        setIsHeight(true)
      }
      else if (name == 'weight') {
        setWeight(value)
        setIsWeight(true)
      }
      else if(name=='age'){
        setAge(value)
        setIsAge(true)
      }
     
    }

    else {
      if (name == 'height') {
        setHeight(value)
        setIsHeight(false)
      }
      else if (name == 'weight') {
        setWeight(value)
        setIsWeight(false)
      }
      else if(name=='age')  {
        setAge(value)
        setIsAge(false)
      }
     
    }




  }

 

  const calculate = () => {
    /* if no value in height and weight */
    if (!height || !weight || !age || !gender) {
      alert('Please enter all values')
    }

    let newHeight = height / 100
    let newBmi = (weight / newHeight ** 2).toFixed(1)
    setBMI(newBmi)

    if (newBmi < 18.5) {
      setNormal('Under Weight')
      setRange('Your BMI is below the normal range.')
      setDetails('Consider maintaining a balanced and nutritious diet.')
    }
    else if (newBmi > 18.5 && newBmi < 24.9) {
      setNormal('Normal Weight')
      setRange('Your BMI is in the normal range.')
      setDetails(' Keep up the good work!')
    }
    else if (newBmi > 25 && newBmi < 29.9) {
      setNormal('Over Weight')
      setRange('Your BMI is above the normal range.')
      setDetails('Consider maintaining a healthy diet and staying physically active.')
    }
    else if (newBmi >= 30) {
      setNormal('Obese')
      setRange('Your BMI is in the obesity range.')
      setDetails('Consider focusing on a healthy lifestyle and consulting a healthcare professional.')
    }
  }






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
<div className='container-fluid'>
  
        <div style={{ minHeight: '150px', width: '100%' }} className='mt-2'>
          <h1 className='fnt1 text-center'>Calculate Your <span className='text-primary'>BMI</span></h1>
          <p className='text-center'>Know your body mass index instantly. A healthier you <br /> starts with knowing your numbers</p>
  
        </div>
  
        <div className="row">
          <div className="col-md-1"></div>
          <div className="col-md-5">
            <div style={{ minHeight: '400px', width: '100%' }} className='border rounded shadow p-4'>
              <h2>BMI Calculator</h2>
              <p>Enter your details below to calculate your BMI.</p>
  
              <div className="row">
                <div className="col-md-6 p-4">
                  <FormControl>
                    <h6 className=''>Gender</h6>
                    <RadioGroup row name="gender" value={gender || ""} onChange={(e)=>resolve(e)}>
                      <FormControlLabel value="female" control={<Radio />} label="Female" />
                      <FormControlLabel value="male" control={<Radio />} label="Male" />
  
                    </RadioGroup>
                  </FormControl>
  
                  <h6 className='mt-4'>Height(cm)</h6>
                  <TextField id="outlined-basic" label="Enter your height" variant="outlined" className='w-100' name='height' value={height || ""} onChange={(e) => resolve(e)} />
                  {!isHeight &&
                    <p className='text-danger'>*Invalid Input</p>}
  
  
                </div>
                <div className="col-md-6 p-4">
  
                  <h6 className=''>Age(years)</h6>
                  <TextField id="outlined-basic" label="Enter your age" value={age || ""} variant="outlined" className='w-100' name='age' onChange={(e) => resolve(e)} />
                  {!isAge &&
                    <p className='text-danger'>*Invalid Input</p>}
  
                  <h6 className='mt-2'>Weight(kg)</h6>
                  <TextField id="outlined-basic" label="Enter your weight" value={weight || ""} variant="outlined" className='w-100' name='weight' onChange={(e) => resolve(e)} />
                  {!isWeight &&
                    <p className='text-danger'>*Invalid Input</p>}
                </div>
              </div>
  
              <Button variant="contained" className='w-100 py-2' disabled={ isAge && isHeight && isWeight &&isGender? false : true} onClick={calculate}>Calculate BMI</Button>
  
            </div>
          </div>
          <div className="col-md-5">
            <div style={{ minHeight: '400px', width: '100%' }} className='border rounded shadow p-4'>
              <h6>Your Result</h6>
  
  
              {/* circle */}
              <div className='row'>
                <div className='col-md-6 d-flex align-items-center justify-content-center'>
                  <div className='circle' style={{
                    '--percentage': `${Math.min((bmi / 40) * 100, 100)}%`
                  }}>
                    <span>
                      {bmi > 0
                        ? `${Math.min(Math.round((bmi / 40) * 100), 100)}%`
                        : '0%'}
                    </span>
                  </div>
                </div>
  
                <div className='col-md-6'>
                  <h6 className='text-center'>BMI</h6>
                  <h1 className='text-center'>{bmi > 0 ? bmi : 0}</h1>
                  <p className='text-success text-center'>{normal}</p>
                </div>
              </div>
  
              <p className='text-center mt-5 text-success'>{details} <br />{range}</p>
  
            </div>
          </div>
          <div className="col-md-1"></div>
        </div>
  
        <div className="row">
          <div className="col-md-1"></div>
          <div className="col-md-10">
            <div className="row border rounded mt-2" style={{ minHeight: '60px' }}>
              <div className="col-md-3">
                <h6 className='text-center pt-1'><FontAwesomeIcon icon={faCircleDot} style={{ color: 'blue' }} />Underweight</h6>
                <p className='text-center'>&lt;18.5</p>
              </div>
              <div className="col-md-3">
                <h6 className='text-center pt-1'><FontAwesomeIcon icon={faCircleDot} style={{ color: 'green' }} />Normalweight</h6>
                <p className='text-center'>18.5-24.9</p>
              </div>
              <div className="col-md-3">
                <h6 className='text-center pt-1'><FontAwesomeIcon icon={faCircleDot} style={{ color: 'orange' }} />Overweight</h6>
                <p className='text-center'>25-29.9</p>
              </div>
              <div className="col-md-3">
                <h6 className='text-center pt-1'><FontAwesomeIcon icon={faCircleDot} style={{ color: 'red' }} />Obese</h6>
                <p className='text-center'>&gt;=30</p>
              </div>
            </div>
          </div>
          <div className="col-md-1"></div>
        </div>
</div>

    </div>
  )
}

export default App
