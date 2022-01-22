import React from "react"
// import PropTypes from "prop-types"
// class ProfileMessage extends React.Component {
//   render () {
//     return (
//       <React.Fragment>
//         Username: {this.props.username}
//       </React.Fragment>
//     );
//   }
// }

// ProfileMessage.propTypes = {
//   username: PropTypes.string
// };
// export default ProfileMessage

export default function ProfileMessage(props) {
  return (
    <h1>{props.user.first_name} {props.user.last_name}</h1>
  )
}
