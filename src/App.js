import "./App.css";
import { Container, Row, Col } from "react-bootstrap";
import SearchInfoStarWars from "./components/SearchBar/SearchInfoStarWars";
import CharacterList from "./components/CharacterList/CharacterList";
import NavBar from "./components/NavBar/NavBar";
import React from "react";

export default function App() {
  return (
    <React.Fragment>
      <NavBar path={"/favorites"} linkName={"Favorites"} />
      <Container>
        <Row className="justify-content-md-center">
          <Col md={2}></Col>
          <Col md={8}>
            <h2>Star Wars Character Finder</h2>
            <SearchInfoStarWars />
            <CharacterList />
          </Col>
          <Col md={2}></Col>
        </Row>
      </Container>
    </React.Fragment>
  );
}
