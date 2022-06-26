import React, { Component } from "react";
import { connect } from "react-redux";
import Character from "../Character/Character";

class CharacterList extends Component {
  render() {
    console.log("Render.. ");
    return (
      <div>
        <ul className="list-group">
          {this.props.characters.map((character) => {
            return (
              <li key={character.name} className="list-group-item">
                <Character character={character} favoriteButton={true} />
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps, null)(CharacterList);
