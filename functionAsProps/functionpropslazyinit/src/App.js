import React, {useState}from  "react";

function call(n) {
  
  return n;
}

function App({n}) {
  // console.log(n)
  const [count, setCount] = useState(()=>{return call(n)});
  function increment(){
    setCount(count+1)
  }

  return (
    <>
      <div>{count}</div>
      <button onClick={increment}>Increment</button>
    </>
  );
}

export default App;
