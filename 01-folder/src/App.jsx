import React from "react";
import card from './components/card'

const App = ()=>{
  return (
    <div className='parent'>
      <card user='aman' age={18}/>
      <card user='aman' age={18}/>
    </div>
  )
}
export default App