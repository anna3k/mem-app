import React from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {updateMem} from "../state/mem-actions";

const Mem = (props) => {
  return <div className="card h-100">
    <h4 className="card-title">{props.mem?.title}</h4>
    <div className="card-body">
      <img className="img-fluid" src={props.mem?.img}/>
    </div>
    <div className="d-flex justify-content-around">
      <button className="btn btn-primary w-25" onClick={() => props.updateMem({...props.mem, upvotes: props.mem.upvotes + 1})}>
        {'+' + props.mem.upvotes}
      </button>
      <button className="btn btn-primary w-25" onClick={() => props.updateMem({...props.mem, downvotes: props.mem.downvotes + 1})}>
        {'-' + props.mem.downvotes}
      </button>
    </div>
  </div>
}


const mapStateToProps = (state, ownProps) => {
  return {
    upvotes: ownProps.mem.upvotes,
    downvotes: ownProps.mem.downvotes
  };
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({
      updateMem,
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Mem);