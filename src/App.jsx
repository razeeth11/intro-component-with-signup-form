import './App.css'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

function App() {

  const style = {
    backgroundColor : "hsl(154, 59%, 51%)",
    padding : "10px",
    letterSpacing : "1px"
  }

  return (
    <div className="App">
       <div className="left-card">
            <h1>Learn to code by watching others</h1>
            <p>See how experienced developers problems in real-time. Watching scripted tutorials is great but understanding how developers think is invaluable</p>
       </div>
       <div className="right-card">
        <h4>try it free 7 days <span>then 20/mo. thereafter</span></h4>
          <form action="#" className='sign-up-form'>
          <TextField id="outlined-basic" label="First Name" variant="outlined" />
          <TextField id="outlined-basic" label="Last Name" variant="outlined" />
          <TextField id="outlined-basic" label="Email Address" variant="outlined" />
          <TextField id="outlined-basic" label="Password" variant="outlined" />
          <Button className='submit-button' sx={style} variant="contained">Claim your free trail</Button>
          <p>By clicking the button, you are agreeing the <span className='terms'>terms and services</span></p>
          </form>
       </div>
    </div>
  )
}

export default App
