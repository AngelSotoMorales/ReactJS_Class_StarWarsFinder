import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class NavBar extends Component {
  render() {
    return (
      <React.Fragment>
        {this.props.favoriteCharacter.length > 0 ? (
          <h4 className="link">
            <Link to={this.props.path}>{this.props.linkName}</Link>
          </h4>
        ) : undefined}
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps, null)(NavBar);
