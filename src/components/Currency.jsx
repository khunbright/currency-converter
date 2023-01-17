import React from 'react'
import './Currency.css'

const Currency = (props) => {
  const {currencyChoice,selectCurrency,changeCurrency,amount,onChangeAmount} = props
  return (
    <div className='currency'>
        <select value={selectCurrency} onChange={changeCurrency}>
            {currencyChoice.map((option)=>
             <option key={option} value={option}>{option}</option>
            )}
        </select>
        <input type="number" 
        value={amount}
        onChange={onChangeAmount}></input>
    </div>
  )
}

export default Currency