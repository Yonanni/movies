import { Component } from "react";
import { Button, Form } from "react-bootstrap";
import ShowComments from "./ShowComments";


export default class CommentArea extends Component {
  state = {
      inputs: {
          comment: "",
          rate: null,
          elementId: this.props.film.imdbID
      }
  };

  sendInfo = async (e) => {
      e.preventDefault()
    try {
        const response = await fetch(
            "https://striveschool-api.herokuapp.com/api/comments/",
            {
              headers: {
                Authorization:
                  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGRjNjBjNGIzNTgxNzAwMTVjMjI3MGQiLCJpYXQiOjE2Mjc5MTc4OTQsImV4cCI6MTYyOTEyNzQ5NH0.55iFPAhoIWlKqSlhlRB8eIB_GPAMX2sL5oqWbVKcY1w",
                  "CONTENT-TYPE": "application/json"
              },
              method: "POST",
              body: JSON.stringify(this.state.inputs)
            }
          );
          if (response.ok){
              this.props.newComment(await response.json())
              // alert("Successfully Posted")
              this.setState({
                  inputs: {
                    comment: "",
                    rate: 0,
                    elementId: this.props.film.imdbID
                  }
              })
          } else {
              alert("Something Wrong")
          }
    } catch (error) {
        console.log(error)
    }
    
    
  };

  handleInputs(key, value){
    this.setState({
        inputs: {
            ...this.state.inputs,
            [key]: value
        }
    })
  }



  render() {
    return (<>
     
      <Form onSubmit={this.sendInfo}>
        <Form.Group className="mb-3" >
          <Form.Label>Comment</Form.Label>
          <Form.Control as="textarea" rows={2} value={this.state.inputs.comment} onChange={(e)=> this.handleInputs("comment", e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3" >
          <Form.Label>Rate</Form.Label>
          <Form.Control type="number" value={this.state.inputs.rate} onChange={(e)=> this.handleInputs("rate", e.target.value)} />
        </Form.Group>
        <Button type="submit">Submit</Button>
      </Form>
      </>
    );
  }
}
