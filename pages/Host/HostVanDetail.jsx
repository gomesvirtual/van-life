import { useEffect, useState } from "react";
import { Link, NavLink, Outlet, useParams } from "react-router-dom";
import HostVanInfo from "./HostVanInfo";

function HostVanDetail() {
  const { id } = useParams();
  const [van, setVan] = useState(null);

  const activeStyle = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616"
  }

  useEffect(() => {
    fetch(`/api/host/vans/${id}`)
      .then(res => res.json())
      .then(data => setVan(data.vans));
  }, [])  

  if(!van) {
    return <h2>Loading...</h2>;
  }

  return ( 
      <section>
        <Link
            to="../vans"            
            className="back-button"
        >&larr; <span>Back to all vans</span></Link>

        <div className="host-van-detail-layout-container">
          <div className="host-van-detail">
            <img src={van.imageUrl} />
            <div className="host-van-detail-info-text">
              <i
                  className={`van-type van-type-${van.type}`}
              >
                {van.type}
              </i>
              <h3>{van.name}</h3>
              <h4>${van.price}/day</h4>
            </div>
          </div>
          <nav className="host-van-detail-nav">
            <NavLink 
              to="." 
              end
              style={({isActive}) => isActive ? activeStyle : null}>
              Details
            </NavLink>
            <NavLink 
              to="pricing" 
              style={({isActive}) => isActive ? activeStyle : null}>
              Pricing
            </NavLink>
            <NavLink 
              to="photos" 
              style={({isActive}) => isActive ? activeStyle : null}>
              Photos
            </NavLink>
          </nav>
          <Outlet context={{van}} />
        </div>        
      </section>
   );
}

export default HostVanDetail;