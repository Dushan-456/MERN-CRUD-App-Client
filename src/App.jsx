import { useState } from 'react'
import './App.css'
import UsersTable from './Components/UsersTable'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <UsersTable/>
    </>
  )
}

export default App
