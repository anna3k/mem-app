import React from "react";

export const Mem = (props) => {
  return <div className="card h-100">
    <h4 className="card-title">{props.mem?.title}</h4>
    <div className="card-body">

    </div>
    <div className="d-flex justify-content-around">
      <button className="btn btn-primary w-25">
        {props.mem?.upvotes}
      </button>
      <button className="btn btn-primary w-25">
        {props.mem?.downvotes}
      </button>
    </div>
  </div>
}