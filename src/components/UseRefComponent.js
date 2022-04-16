import React ,{useEffect,useRef,useState}from 'react';

const UseRefComponent = () => {
  const [value,setValue] = useState(0)
  const inputRef = useRef(null)
  const divRef = useRef(null)
  const valueRef = useRef(0)
  useEffect(() => {
    //document.querySelector("input").focus()
    inputRef.current.focus()
    //inputRef.current.parentNode.style.backgroundColor ="red"

  }, [])

  const handleClick = ()=>{
    
    //const colors =["orange","red","black","green" ,"purple"]

    //const random = Math.trunc(Math.random()*colors.length)
divRef.current.style.backgroundColor  = inputRef.current.value

  }

  const increase = ()=>{
    setValue(value+1)

  }
  return (
    <div className="useref" ref= {divRef}>
      <h2>UseRef Component</h2>
      <input  ref= {inputRef} placeholder="Enter text..." />
      <button onClick={handleClick}>ChangeBgColor</button>
      <button onClick={increase}>ARTTIR</button>
    </div>
  );
};

export default UseRefComponent;
