import { Component } from "react";
import OneComment from "./OneComment";

export default class ShowComments extends Component {
    state = {
        comments: []
    }

    // automatic update of comments

    // newComment = (newOne) => {
    //     this.setState({
    //         comments: [...this.state.comments, newOne]
    //     })
    // }

     componentDidMount =  async() => {
         
        try {
            const response = await fetch("https://striveschool-api.herokuapp.com/api/comments/" + this.props.film.imdbID, {
                headers: {
                    Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGRjNjBjNGIzNTgxNzAwMTVjMjI3MGQiLCJpYXQiOjE2Mjc5MTc4OTQsImV4cCI6MTYyOTEyNzQ5NH0.55iFPAhoIWlKqSlhlRB8eIB_GPAMX2sL5oqWbVKcY1w",
                }
            })
            if (response.ok){
                const res = await response.json()

                this.setState({
                    comments: res
                })
                console.log(res)
            }
           
        } catch (error) {
            console.log(error)
        }
    }
  
    render(){
        return(
            <ul>
                {
                this.state.comments.map(comment => <OneComment key={comment._id} comment={comment} />)
                }
            </ul>
        )
    }
}

// import { useEffect } from "react"
// import { useState } from "react"

// import { ListGroup } from "react-bootstrap"
// import OneComment from "./OneComment"

// const SingleComments = ({film}) => {

//     const [comments, setComments] = useState([])

//     useEffect(() => {
//         const fetchComents = async () => {
//             try {
//                 const response = await fetch("https://striveschool-api.herokuapp.com/api/comments/" + film.imdbID, {
//                 headers: {
//                     Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGRjNjBjNGIzNTgxNzAwMTVjMjI3MGQiLCJpYXQiOjE2Mjc5MTc4OTQsImV4cCI6MTYyOTEyNzQ5NH0.55iFPAhoIWlKqSlhlRB8eIB_GPAMX2sL5oqWbVKcY1w"
//                 }
//             })
            
//             const res = await response.json()
//             setComments(res)
//             console.log(res)

//             } catch (error) {
//                 console.log(error)
//             }
//         }
//         fetchComents()
//     }, [film.imdbID])

//     return (
//         <ListGroup>
//             {/* {book && <img src={book.img} />} */}
//             {comments.map(com => <OneComment key={com.comment_id} comment={com} />)}
//         </ListGroup>
//     )
// }
// export default SingleComments