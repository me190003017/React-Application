import React from "react";
import { Media, Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

function RenderDish({ dish }) {
    if (dish != null) {
        return (
            <Card>
                <CardImg width="100%" src={dish.image} alt={dish.name} />
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>

        )
    } else {
        return (
            <div>

            </div>
        )
    }
}
function RenderComments({ commentarr }) {

    if (commentarr != null) {
        const commetdiv = commentarr.comments.map((cmt) => {
            return (
                <div key={cmt.id}>
                    <p>{cmt.comment}</p>
                    <p>-- {cmt.author} ,{new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(cmt.date)))}</p>
                </div>
            )
        })
        return (
            <div key={commentarr.id} className="col-12 col-md-5 m-1 mt-4 p-4">
                <Media heading>Comments</Media>
                {commetdiv}
            </div>
        )
    } else {
        return (
            <div></div>
        )
    }
}
const DishDetails = (props) => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    <RenderDish dish={props.dish} />
                </div>


                <RenderComments commentarr={props.dish} />
            </div>
        </div>

    )

}

export default DishDetails;