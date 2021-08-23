import React, { useState } from 'react'


const App = () => {
  const [count, setCount] = useState(0)
  console.log("aaa")
  const increment = () => setCount(prev => prev+1)
  const decrement = () => setCount(prev => prev-1)
  const increment2 = () => setCount(prev => prev+1)
  const decrement2 = () => setCount(prev => prev-1)
  const reset = () => setCount(0)
  const double = () => setCount(prev => prev*2)
  const divide3 = () => setCount(prev => prev%3===0 ? prev/3 : prev )
  return (
    <React.Fragment>
      <div>
        count: {count}
      </div>
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>
      <div>
      <button onClick={increment2}>+1</button>
      <button onClick={decrement2}>-1</button>
      </div>
      <div>
        <button onClick={reset}>reset</button>
        <button onClick={double}>*2</button>
        <button onClick={divide3}>3の倍数の時だけ3で割る</button>
      </div>
    </React.Fragment>
  )
}

export default App;
