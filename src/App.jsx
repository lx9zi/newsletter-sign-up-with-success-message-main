import { useRef, useState } from 'react'
import './App.css'
import 'remixicon/fonts/remixicon.css'
import Main from './pages/MainPage'
import ThxPage from './pages/ThxPage'

function App() {

  const [email, setEmail] = useState(null);
  const [emailError, setEmailError] = useState(false);
  const [thxPage, setThxPage] = useState(false);


  const check = () => {
    if (!email.match(new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}'))) {
      setEmailError(true)
    }
    else {
      setEmailError(false)
      setThxPage(true);
    }
  }

  return (
    <>
      {!thxPage ? <Main email={email} emailError={emailError} check={check} setEmail={setEmail} /> : <ThxPage setThxPage={setThxPage} thxPage={thxPage} />}


    </>
  )
}

export default App
