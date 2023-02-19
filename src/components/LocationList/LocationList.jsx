import React,{useState} from 'react';


export default function LocationList() {
  const [currentPosition,setCurrentPosition] = useState(0);

  const locations = [
    {
      id:1,
      locationURL:'https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
      locationName:'Banff, Alberta'
    },
    {
      id:2,
      locationURL:'https://images.pexels.com/photos/2325447/pexels-photo-2325447.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
      locationName:'Cappadocia, Turkey'
    },
    {
      id:3,
      locationURL:'https://images.pexels.com/photos/230794/pexels-photo-230794.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
      locationName:'London, United Kingdom'
    },
    {
      id:4,
      locationURL:'https://images.pexels.com/photos/967292/pexels-photo-967292.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
      locationName:'Amsterdam, Netherlands'
    },
    {
      id:5,
      locationURL:'https://images.pexels.com/photos/1588032/pexels-photo-1588032.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
      locationName:'Jaipur, India'
    },
    {
      id:6,
      locationURL:'https://images.pexels.com/photos/1450354/pexels-photo-1450354.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
      locationName:'Maafushi, Maldives'
    },
    {
      id:7,
      locationURL:'https://images.pexels.com/photos/1292843/pexels-photo-1292843.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
      locationName:'Toronto, Canada'
    },
    {
      id:8,
      locationURL:'https://images.pexels.com/photos/1072839/pexels-photo-1072839.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
      locationName:'Urca, Brazil'
    },
    {
      id:9,
      locationURL:'https://images.pexels.com/photos/3217663/pexels-photo-3217663.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
      locationName:'Cambodia, Vietnam'
    },
  ]

  const listOfLocations = locations.map((location)=>{
    
    return (
      <div className='location' key={location.id}>
        <img className='location__img' src={location.locationURL} alt='suggested-location-img'/>
        <h2 className='location__name'>{location.locationName}</h2>
      </div>
    )
  })


  const handleLeftSlider = () => {

    let box = document.querySelector(".locations__list");
    let width = box.clientWidth;
    box.scrollLeft = box.scrollLeft - width;
    console.log(width);
    
  }
  const handleRightSlider = () => {
    let box = document.querySelector(".locations__list");
    let width = box.clientWidth;
    box.scrollLeft = box.scrollLeft + width;
    console.log(width);
  }



  return (
    <div className='locations'>
      <button className='locations__slider--left' onClick={handleLeftSlider} ><img src='.././left.png' alt='left-icon' width='50px'/></button>
      <div className='locations__list'>{listOfLocations}</div>
      <button className='locations__slider--right' onClick={handleRightSlider}><img src='.././right.png' alt='right-icon' width='50px'/></button>
    </div>
  );
}
