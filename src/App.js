import React, { useState } from 'react'


const App = (props) => {
  
  const [name, setName] = useState(props.name)
  const [price, setPrice] = useState(props.price)
  
  const reset = () =>{
    setPrice(props.price)
    setName(props.name)
  }

  return (
    <React.Fragment>
      <p>現在の{name}は{price}です</p>
      <button onClick={()=> setPrice(prev => prev+1)}>+1</button>
      <button onClick={()=> setPrice(prev => prev-1)}>-1</button>
      <button onClick={reset}>reset</button>
      <input value={name} onChange={e=>setName(e.target.value)}/>
    </React.Fragment>
  )
}

App.defaultProps={
  name:'',
  price: 1000
}
export default App;
