// higher order component (hoc) - a component that renders another component
// we'll be able to:
// reuse code
// render hijacking
// prop manipulation
// abstract state

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
  <div>
    <h1>Info</h1>
    <p>The info is: {props.info}</p>
  </div>
);

// this is the higher order component
const withAdminWarning = (WrappedComponent) => {
  return (props) => (
    <div>
      {
        props.isAdmin && <p>This is private info. Please don't share!</p>
      }
      
      <WrappedComponent {...props} />
    </div>
  )
};

const requireAuthentication = (WrappedComponent) => {
  return (props) => (
    <div>
      {
        props.isAuthenticated ? (
          <WrappedComponent {...props} />
        ) : (
          <p>Sorry, you are not authenticated. Please log in.</p>
        )
      }
    </div>
  )
}

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

// ReactDOM.render(<AdminInfo isAdmin={false} info="these are the details"/>, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated={true} info="these are the details"/>, document.getElementById('app'));