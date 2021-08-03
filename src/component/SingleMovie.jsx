import { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import FilmCard from "./FilmCard";



export default class SingleMovie extends Component {
  state = {
    films: [],
  };
  componentDidMount = async () => {
    const response = await fetch(
      `http://www.omdbapi.com/?s=${this.props.name}&apikey=72db6b6a`
    );
    if (response.ok){
        const res = await response.json();
    this.setState({
      films: res.Search,
    });
    console.log(res.Search);
    }
  };

  render() {
    {
    //   console.log(this.state.films);
    }

    return (
      <Container>
          
        <Row xs={1} lg={5} className="d-flex mt-4">
          {this.state.films &&
            this.state.films.filter(film => film.Title.toLowerCase().indexOf(this.props.search.toLowerCase()) != -1)
            .map((film) => (
              <Col key={film.imdbID}>
                <FilmCard film={film} />
              </Col>
            ))}
        </Row>
      </Container>
    );
  }
}
