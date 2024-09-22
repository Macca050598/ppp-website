import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import ButtonGradient from './assets/svg/ButtonGradient';
import Button from './components/Button';
const App = () => {

  return (
    <>
    <h1>Welcome to puppy potty pal!</h1>

    <div className="pt-[4.75rem] lg:pt-[5.05rem] overflow-hidden">
      <Button className="mt-10" href="#login">
    Something
      </Button>
    </div>
    <ButtonGradient  />

    </>
  )
}

export default App;