import React,{useState} from 'react'
import Header from './components/Header'
import fs from  "./assets/fs.png"

const ReactMemo = () => {
    const [counter, setCounter] = useState(0)
    const [img,setImg] = useState(null)

    const increase =()=>{
        setCounter(counter +1)

    }
    console.log(counter);
  return (
    <div>
        <Header img={img}></Header>
        <p>Count : {counter}</p>
        <button onClick={increase}>ARTTIR</button>
        <button onClick={()=>setImg(fs)}>FS</button>
    </div>
  )
}

export default ReactMemo