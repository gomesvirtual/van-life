import { Await, Link, NavLink, Outlet, defer, useLoaderData } from "react-router-dom";
import { getVans } from "../../api";
import { requireAuth } from "../../utils";
import { Suspense } from "react";

export async function loader({ params, request }) {
  await requireAuth(request);
  return defer({ van: getVans(`/api/host/vans/${params.id}`) }) ;
}

function HostVanDetail() {
  const dataPromise = useLoaderData();

  const activeStyle = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616"
  } 

  function renderVan(van) {
    return (
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
    )
  }
  
  return ( 
      <section>
        <Link
          to="../vans"            
          className="back-button"
        >&larr; <span>Back to all vans</span></Link>
        <Suspense fallback={<h2>Loading van...</h2>}>
          <Await resolve={dataPromise.van}>
            {renderVan}
          </Await>
        </Suspense>        
      </section>
   );
}

export default HostVanDetail;