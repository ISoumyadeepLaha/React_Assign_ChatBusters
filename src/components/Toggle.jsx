import React, {useState} from 'react'

const Toggle = () => {
    const [value, setvalue] = useState(["dog", "cow", "goat", "Tiger", "Lion"])
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleToggle = () => {
       if(currentIndex < value.length - 1){
        setCurrentIndex((prev) => prev + 1);
       }
       else{
        setCurrentIndex(0);
       }
    }
  return (
    <div className='container'>
        <p className='value'>{value[currentIndex]}</p>
        <button  className='btn' onClick={handleToggle}>Click me</button>
    </div>
  )
}

export default Toggle