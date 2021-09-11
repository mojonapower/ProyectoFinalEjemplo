import React from "react";

export const Card= ()=>{
    return(<div className="card text-dark bg-warning mb-3" style="max-width: 18rem;">
    <div className="card-header">Header</div>
    <div className="card-body">
      <h5 className="card-title">Warning card title</h5>
      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card&apos;s content.</p>
    </div>
  </div>)
}