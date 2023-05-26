import { useState } from 'react'
import './Motivation.css'


const Advice = () => {
  const [advice, setAdvice] = useState('')


  async function myAdvice() {
    const response = await fetch('https://api.adviceslip.com/advice')
    const data = await response.json()
    const checkData = data.slip;
    // console.log(checkData.advice);
    setAdvice(checkData.advice);
  }


  return (
    <div className="container">
      <h1>Daily Motivations</h1>
      <p>{advice}</p>
      <button onClick={myAdvice}>Learn More</button>
    </div>
  
   )
  }

  export default Advice;
