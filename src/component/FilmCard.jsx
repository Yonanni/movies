import { Component } from "react";
import { Card } from "react-bootstrap";
import OneComment from "./OneComment";
import CommentArea from "./CommentArea"

export default class FilmCard extends Component {
  state = {
    comments: [],
  };

  // automatic update of comments

    newComment = (newOne) => {
        this.setState({
            comments: [...this.state.comments, newOne]
        })
    }

  // automatic update of comments

  deleteComment = (commentID) => {
    this.setState({
      comments: this.state.comments.filter(comment => comment._id !== commentID)
    })
  }

  componentDidMount = async () => {
    try {
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/" +
          this.props.film.imdbID,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGRjNjBjNGIzNTgxNzAwMTVjMjI3MGQiLCJpYXQiOjE2Mjc5MTc4OTQsImV4cCI6MTYyOTEyNzQ5NH0.55iFPAhoIWlKqSlhlRB8eIB_GPAMX2sL5oqWbVKcY1w",
          },
        }
      );
      if (response.ok) {
        const res = await response.json();

        this.setState({
          comments: res,
        });
        console.log(res);
      }
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <Card style={{ width: "12rem" }}>
        <Card.Body>
          <Card.Img src={this.props.film.Poster} />
          <Card.Text>{this.props.film.Title}</Card.Text>
          <ul>
            {this.state.comments.map((comment) => (
              <OneComment key={comment._id} comment={comment} deleteComment={this.deleteComment} />
            ))}
          </ul>
          <CommentArea film={this.props.film} newComment={this.newComment} />
        </Card.Body>
      </Card>
    );
  }
}
