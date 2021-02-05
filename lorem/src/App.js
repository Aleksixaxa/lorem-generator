import './App.css';
import {useState} from 'react'
import data from './data'


const App = () => {
    const [text, setText] = useState([])
    const [count, setCount] = useState(0)
    // console.log(text)

  const submitHandler = (e) => {
    let amount = parseInt(count);
    e.preventDefault()

    if (count <= 0){
      amount = 1;
    }else if (count > 8) {
      amount = 8;
    }
    setText(data.slice(0, amount))
  }


  return (
  <div>
    <h1>Lorem ipsum generator</h1>
      <form onSubmit={submitHandler}>
        <label className="form-control" htmlFor="amount">Max num 8</label>
          <input className="form-control" type="number" name="amount" id="amount" value={count} onChange={(e)=> {setCount(e.target.value)}}/>
        <button className="form-control" type="submit">Generate!</button>
      </form>
    {
      text.map((p) => {
       return <p>{p}</p>
      })
    }
  </div>
  )
}
export default App;
