import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function HostVans() {
  const [vans, setVans] = useState([]);

  useEffect(() => {
    fetch("/api/host/vans")
      .then(res => res.json())
      .then(data => setVans(data.vans));
  },[])
  
  const vanElements = vans.map(van => (    
    <div key={van.id} className="host-van-tile">
      <Link 
        to={`/host/vans/${van.id}`}
        aria-label={`View details for ${van.name}, priced at $${van.price} per day`}    
        className="host-van-link-wrapper"    
      >
        <img src={van.imageUrl} alt={`Image of ${van.name}`} />
        <div className="host-van-info">
          <p>{van.name}</p>
          <p>${van.price}<span>/day</span></p>
        </div>
      </Link>
    </div>
  ))
  
  return ( 
    <div className="host-van-list-container">
      <h1>Your listed vans</h1>      
      <div className="host-van-list">
        { vanElements }
      </div>
    </div>
   );
}

export default HostVans;