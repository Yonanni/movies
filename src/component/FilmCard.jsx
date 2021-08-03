import { useState } from "react";
import { Card } from "react-bootstrap";
import CommentArea from "./CommentArea";
import ShowComments from "./ShowComments";

const FilmCard = ({ film }) => {
  const [data, setData] = useState(null)
  // const handleData = (text) => {
  //   setData(text)
  // }
  // const newComment = (newOne) => {
  //   this.setState({
  //       comments: [...this.state.comments, newOne]
  //   })
// }
  return (
    <Card style={{width: "12rem"}}>
        <Card.Body>
      <Card.Img src={film.Poster} />
      <Card.Text>
          {film.Title}
      </Card.Text>
      <ShowComments film={film}  />
      <CommentArea film={film} />
      </Card.Body>
    </Card>
  );
};
export default FilmCard;
