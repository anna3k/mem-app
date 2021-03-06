import React, {useEffect, useState} from "react";
import Mem from "./Mem";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {findAllMems} from "../state/mem-actions";

const MemOverview = (props) => {

  const [isUpdated] = useState();
  useEffect(() => {
    props.findAllMems()
  }, [isUpdated]);

  return <div className="d-flex p-4 w-100 flex-wrap align-content-stretch">
    {props.mems.map(mem =>
      <div className="col-sm-6 col-lg-3 p-2" key={mem.id}>
        <Mem mem={mem}/>
      </div>
    )}
  </div>
}

const mapStateToProps = (state, ownProps) => {
  return {
    mems: state[ownProps.memType],
  };
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({
      findAllMems,
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MemOverview);

