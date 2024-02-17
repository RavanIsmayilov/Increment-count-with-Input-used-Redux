import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../../actions'
import Display from '../../components/Display/display'
import '../../App.css'

export default function Counter() {
 

    const dispatch = useDispatch()

    const [inputValue, setInputValue] = useState('');


    const handleIncrement = () =>{
        const incrementValue = parseInt(inputValue);
        dispatch(increment(incrementValue));
    }
    const handleDecrement = () =>{
        const decrementValue = parseInt(inputValue) ;
        dispatch(decrement(decrementValue));

    }

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
      };
    

  return (
<>    

    <input
        className='input'
        type="number"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Enter a digit"
        />
        <Display/>
    <div className='buttons'>
    <button className='btn_increment' onClick={handleIncrement}>Increment</button>
    <button className='btn_decrement' onClick={handleDecrement}>Decrement</button>
    </div>
</>

  )
}
