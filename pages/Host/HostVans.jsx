import { Await, Link, defer, useLoaderData } from "react-router-dom";
import { getVans } from "../../api";
import { requireAuth } from "../../utils";
import { Suspense } from "react";

export async function loader({request}) {
  await requireAuth(request);
  return defer({vans: getVans("/api/host/vans")});
}

function HostVans() {
  const dataPromise = useLoaderData();   

  function renderVanElements(vans) {
    const vanElements = vans.map(van => (    
      <div key={van.id} className="host-van-tile">
        <Link 
          to={van.id}
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
      <div className="host-van-list">
        { vanElements }
      </div>
    )          
  }
  
  return ( 
    <div className="host-van-list-container">
      <h1>Your listed vans</h1>  
      <Suspense fallback={<h2>Loading vans...</h2>}>
        <Await resolve={dataPromise.vans}>
          {renderVanElements}        
        </Await> 
      </Suspense>      
    </div>
   );
}

export default HostVans;