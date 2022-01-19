import React from "react"
import PropTypes from "prop-types"
class ProfileMessage extends React.Component {
  render () {
    return (
      <React.Fragment>
        Username: {this.props.username}
      </React.Fragment>
    );
  }
}

ProfileMessage.propTypes = {
  username: PropTypes.string
};
export default ProfileMessage
