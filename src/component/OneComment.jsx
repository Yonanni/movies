import { Component } from "react";
import { Button } from "react-bootstrap";

export default class OneComment extends Component {
    state = {}

    deleteFetch = async(id) => {
        try {
            const resp = await fetch("https://striveschool-api.herokuapp.com/api/comments/" + id, {
                headers: {
                    Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGRjNjBjNGIzNTgxNzAwMTVjMjI3MGQiLCJpYXQiOjE2Mjc5MTc4OTQsImV4cCI6MTYyOTEyNzQ5NH0.55iFPAhoIWlKqSlhlRB8eIB_GPAMX2sL5oqWbVKcY1w"
                },
                method: "DELETE"
            })
            if (resp.ok){
                alert("DELETED!!!")
            } else {
                alert("Something Wrong in Delete")
            }
        } catch (error) {
            console.log(error)
        }
    }

    render(){
        return(
            <li>{this.props.comment.comment}😎 {this.props.comment.rate} <Button variant="danger" onClick={() => this.deleteFetch(this.props.comment._id)} >X</Button></li>
        )
    }
}