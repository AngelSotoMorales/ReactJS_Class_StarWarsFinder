import React, { Component } from "react";
import {
  Form,
  FormGroup,
  FormControl,
  FormLabel,
  Button
} from "react-bootstrap";
import "./SearchInfoStarWars.css";
import { connect } from "react-redux";
import {
  setCharacters,
  cleanListCharacters
} from "../../redux/actions/actions-character";
import getCharacterByName from "../../services/webService";
import loading from "../../resources/imgs/StarWarsLoading.gif";

class SearchInfoStarWars extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      loading: false
    };
  }

  searchCharacter = () => {
    this.setState({ loading: true });
    this.props.cleanListCharacters();
    setTimeout(() => {
      getCharacterByName(this.state.name)
        .then((response) => {
          //Store in the redux store
          this.props.setCharacters(response);
          this.setState({ loading: false });
        })
        .catch((error) => console.log("Error retrieving data"));
    }, 3000); // Delay to see the star wars gif
  };

  render() {
    return (
      <React.Fragment>
        <Form>
          <FormGroup>
            <FormLabel>Name</FormLabel>
            <FormControl
              onChange={(event) => this.setState({ name: event.target.value })}
              type="text"
              placeholder="Anakyn Skywalker, R2D2"
            />
          </FormGroup>
          <Button
            onClick={() => this.searchCharacter()}
            className="margin-top margin-bottom"
          >
            Search
          </Button>
        </Form>
        {this.state.loading && <h3>Searching ...</h3>}
        {this.state.loading && <img src={loading} alt="Loading ..." />}
      </React.Fragment>
    );
  }
}

export default connect(null, { setCharacters, cleanListCharacters })(
  SearchInfoStarWars
);
