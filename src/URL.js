import axios from 'axios';
import { useState } from 'react';
import './App.css';

function URL() {
    const [input, SetInput] = useState("");
    const [result, SetResult] = useState("");
    const [loading, SetLoading] = useState("false");

    const fetchData = async() => {
      try{
        SetLoading("true");
        const res = await axios(`https://api.shrtco.de/v2/
        shorten?url=${input}`);
        SetResult(res.data.result.full_short_link);
        SetLoading("false");
      }
      catch(err){
        alert(err);
      }
    }
    
    const handleClick = () => {
      fetchData();
      SetInput("");
    }


    
    return(
        <div className="container">
            <h1>URL Shortener</h1>
            <input type='text'
            placeholder='Enter your link here'
            value={input} 
            onChange={(e) => SetInput(e.target.value)}></input>
            <div className='button-pos'><button onClick={handleClick}>Shorten it!</button></div>
            {loading === "true" ? <p>Loading...</p> : <p>{result}</p>}
        </div>
    );
}

export default URL;