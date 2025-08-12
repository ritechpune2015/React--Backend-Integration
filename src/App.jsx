import { useState } from 'react'
import { CustomerList } from './components/CustomerList'
import { RouteConfig } from './routeconfig'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
         <RouteConfig />
    </>
  )
}

export default App
