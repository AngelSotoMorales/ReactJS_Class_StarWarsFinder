import React, { Component } from "react";
import { connect } from "react-redux";
import Character from "../Character/Character";
import { Container, Row, Col } from "react-bootstrap";
import NavBar from "../NavBar/NavBar";

class FavoriteCharacterList extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar path={"/"} linkName={"Home"} />
        <Container>
          <Row className="justify-content-md-center">
            <Col md={2}></Col>
            <Col md={8}>
              <h2>Favorite Characters:</h2>
              {this.props.favoriteCharacter.map((character, index) => {
                return (
                  <Character
                    key={index}
                    character={character}
                    favoriteButton={false}
                  />
                );
              })}
            </Col>
            <Col md={2}></Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps, null)(FavoriteCharacterList);
