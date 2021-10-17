import React from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';
import dateFormat from "dateformat";
// var now = new Date();

    // componentDidMount() {
    //     console.log('Dishdetail Component ComponentDidMount invoked');
    // }

    // componentDidUpdate() {
    //     console.log('Dishdetail Component ComponentDidUpdate invoked');
    // }

    function RenderDish({dish}) {
        if (dish != null) {
            return (
                <div className="col-12 col-md-5 m-1">
                    <Card >
                        <CardImg width="100%" src={dish.image} alt={dish.name} />
                        <CardBody>
                            <CardTitle>{dish.name}</CardTitle>
                            <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card>
                </div>
            );
        }
    }

    function RenderComments({comments}) {
        if (comments != null)
        return (
            <div className="col-12 col-md-5 m-1">
                <h4>Comments</h4>
                <ul className="list-unstyled">
                    {comments.map((comment) => {
                        return (
                            <li key={comment.id}>
                                <p>{comment.comment}</p>
                                <p>-- {comment.author}, {dateFormat(comment.date,"dd/mm/yyyy")}</p>
                            </li>
                        )
                    })}
                </ul>
            </div>
        ); 
        
        else
            return (
                <div></div>
            );
    }

    const DishDetail = (props) => {

        // console.log('Dishdetail Component render invoked');
        if (props.dish != null)
            return (
                <div className="container">
                    <div className="row">
                        <RenderDish dish={props.dish} />
                        <RenderComments comments={props.dish.comments} />
                    </div>
                </div>

            );
        else
            return (
                <div></div>
            );
    }

export default DishDetail;