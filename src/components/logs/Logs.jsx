import React, { useEffect } from "react";
import { connect } from "react-redux";
import LogItem from "./LogItem";
import Preloader from "../layout/Preloader";
import PropTypes from "prop-types";

const Logs = ({ log: { logs, loading } }) => {
  useEffect(() => {
    getLogs();
    // eslint-disable-next-line
  }, []);

  if (loading) {
    return <Preloader />;
  }
  return (
    <ul className="collection with-header">
      <li className="collection-header">
        <h4 className="center">System Logs</h4>
      </li>
      {!loading && logs.length === 0 ? (
        <p className="center">No logs to show...</p>
      ) : (
        logs.map((log) => <LogItem log={log} key={log.id} />)
      )}
    </ul>
  );
};

//makes sure Logs is an object
Logs.PropTypes = {
  log: PropTypes.object.isRequired,
};

// brings in the whole state and then gets descructored at the  top
const mapStateToProps = (state) => ({
  log: state.log,
});

export default connect(mapStateToProps)(Logs);
