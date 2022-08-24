import logo from './logo.svg';
import './App.css';
import {useEffect,useState} from 'react'
function App() {
    return (
    <div className="App">
      <Phonelist/>      
    </div>
  );
}
//var API="http://localhost:3000/"
var API="https://ecommerce31march.herokuapp.com"
function Phonelist(){
  const [mobiles,setMobiles] = useState([]);
  
  useEffect(()=>{
    fetch(`${API}/mobiles`)
  .then(data=>data.json())
  //.then(mbs=>console.log(mbs))
  .then(mbs=>setMobiles(mbs))
  },[])
  
  return (
    <div className="phone-list-container">
      {mobiles.map(mobile=><Phone key={mobile._id} mobile={mobile}/>)}
    </div>
  );

}
function Phone({mobile}){
  // const mobile = {
  //   model: "OnePlus 9 5G",
  //   img: "https://m.media-amazon.com/images/I/61fy+u9uqPL._SX679_.jpg",
  //   company: "Oneplus",
  // };
  
  return(
    <div className="phone-container">
      <img src={mobile.img} alt={mobile.model} className="phone-picture"/>
      <h2 className="phone-name">{mobile.model}</h2>
      <p className="phone-company">{mobile.company}</p>
    </div>
  )
}

export default App;
