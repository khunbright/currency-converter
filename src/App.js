import './App.css';
import converter from './img/converter.png'
import Currency from './components/Currency';
import { useEffect,useState } from 'react';

function App() {
  
  const [currencyChoice,setCurrencyChoice] = useState([])

  const [startCurrency,setStartCurrency] = useState("USD")
  const [endCurrency,setEndCurrency] = useState("THB")

  const [amount,setAmount] = useState(1)
  const [exchangeRate,setExchangeRate] = useState(0)

  const [checkstartCurrency,setCheckstartCurrency] = useState(true)

  let startAmount,endAmount

  if(checkstartCurrency){
    startAmount = amount
    endAmount=(amount*exchangeRate).toFixed(2)
  }else{
    endAmount = amount
    startAmount = (amount/exchangeRate).toFixed(2)
  }

  useEffect(() => {
  const url = `https://open.er-api.com/v6/latest/${startCurrency}`
   fetch(url)
   .then(res=>res.json())
   .then(data=>{
    setCurrencyChoice([...Object.keys(data.rates)])
    setExchangeRate(data.rates[endCurrency])
   })
    },[startCurrency,endCurrency])
  
    const amountstartCurrency=(e)=>{
        setAmount(e.target.value)
        setCheckstartCurrency(true)
    }
    const amountendCurrency=(e)=>{
        setAmount(e.target.value)
        setCheckstartCurrency(false)
    }

  return (
    <div className="App">
      <img src={converter} alt="logo" className='converter'></img>
      <h1>App Currency Converter</h1>
      <div className='container'>
        <Currency currencyChoice={currencyChoice} 
        selectCurrency={startCurrency}
        changeCurrency={(e)=>setStartCurrency(e.target.value)}
        amount={startAmount}
        onChangeAmount={amountstartCurrency}
        />
        <div className='eqaul'> = </div>
        <Currency currencyChoice={currencyChoice} 
        selectCurrency={endCurrency}
        changeCurrency={(e)=>setEndCurrency(e.target.value)}
        amount={endAmount}
        onChangeAmount={amountendCurrency}
        />
      </div>
    </div>

  );
}

export default App;
