import React from "react"

const ProfileMessage = props => {
  return (
    <h1>{props.user.first_name} {props.user.last_name}</h1>
  )
};

export default ProfileMessage;
