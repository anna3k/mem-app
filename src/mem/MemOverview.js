import React from "react";
import {Mem} from "./Mem";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {findAllMems} from "../state/mem-actions";
const MemOverview = (props) => {
  console.log(props);
  return <div className="row p-4">
    <div className="col-sm-4">
      <Mem/>
    </div>
  </div>
}

const mapStateToProps = (state) => {
  return {
    mems: state.mems,
  };
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({
      findAllMems,
      updateMem,
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MemOverview);

