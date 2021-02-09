import React, { Component } from "react";
import {Media, Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";


class DishDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    renderDish(dish) {
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
    renderComments(commentarr){

        if(commentarr!=null){
        const commetdiv=commentarr.comments.map((cmt)=>{
            return(
                <div key={cmt.id}>
                <p>{cmt.comment}</p>
                <p>-- {cmt.author} ,{new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(cmt.date)))}</p>
                </div>
            )
        })
        return(
            <div  key={commentarr.id} className="col-12 col-md-5 m-1 mt-4 p-4">
                <Media heading>Comments</Media>
                {commetdiv}
            </div>
        )
        }else{
            return(
                <div></div>
            )
        }
    }
    
    render() {
        
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        {this.renderDish(this.props.dish)}
                    </div>
                    
                    {this.renderComments(this.props.dish)}
                    
                </div>
            </div>

        )
    }
}

export default DishDetails;