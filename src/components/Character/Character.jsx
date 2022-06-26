import React, { Component } from "react";
import {
  setFavoriteCharacter,
  removeFavoriteCharacter
} from "../../redux/actions/actions-favoriteCharacter";
import { connect } from "react-redux";
import "./Character.css";

class Character extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favorited: false,
      showNotification: false
    };
  }

  handlerFavorite = (character) => {
    this.setState({ favorited: true, showNotification: true });
    this.props.setFavoriteCharacter(character);
    this.hideElement();
  };

  handlerRemoveFavorite = (character) => {
    this.setState({ favorited: false });
    this.props.removeFavoriteCharacter(character);
  };

  hideElement = () => {
    setTimeout(() => {
      this.setState({ showNotification: false });
    }, 2000);
  };

  render() {
    //let character = this.props.character;
    let { character } = this.props;
    return (
      <div className="list-item">
        {this.props.favoriteButton ? (
          this.state.favorited ? (
            <span
              className="star"
              onClick={() => this.handlerRemoveFavorite(character)}
            >
              &#9734; <em>Remove to favorite!</em>
            </span>
          ) : (
            <span
              className="star-selected"
              onClick={() => this.handlerFavorite(character)}
            >
              &#9734; <em>Add to favorite!</em>
            </span>
          )
        ) : (
          <hr />
        )}

        <h4>{character.name}</h4>
        <div>
          <strong>Birth day: </strong>
          {character.birth_year}
        </div>
        <div>
          <strong>Height (cm): </strong>
          {character.height}
        </div>
        <div>
          <strong>Mass (kg): </strong>
          {character.mass}
        </div>
        {this.state.showNotification && (
          <p className="margin-top-notification">
            <strong>
              <em>Character added to favorite list!</em>
            </strong>
          </p>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state;
};
export default connect(mapStateToProps, {
  setFavoriteCharacter,
  removeFavoriteCharacter
})(Character);
