import React from "react";

function Alert(props) {
  return (
    
      props.alert &&<div   //ye && vala syntax padhlo bhai nhi samjh a rha merko bhi 
        className={`alert alert-${props.alert.type} alert-dismissible fade show`}
        role="alert"
      >
      <strong>{props.alert.type}</strong>:{props.alert.msg}
      </div>

  );
}

export default Alert;
