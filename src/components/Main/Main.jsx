import React,{useState} from 'react';


import LocationList from '../LocationList/LocationList'

export default function Main() {

  const [input, setInput] = useState('');

  const handleChange = (event) => {
    setInput(event.target.value);
  }


  return (
    <div className='main'>
      <h1>Ready to Explore ? Let the adventure begin.</h1>
      <input
        className='main__search' 
        type='text' 
        name='search' 
        value={input}
        placeholder='For example: Calgary, Canada'
        onChange={handleChange}
      >
      </input>
      <h1>Not sure where to travel. Check out some suggested destinations.</h1>
      <LocationList/>
    </div>
  )
}


