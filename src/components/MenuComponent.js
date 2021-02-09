import React, { Component } from "react";
import { Card, CardImg, CardImgOverlay, CardTitle } from "reactstrap";

class Menu extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
        // console.log("constructor has been called")
    };
    componentDidMount(){
        // console.log("component did mount has been invoked")
    }

    render() {
        // console.log("render has been called")
        const menu = this.props.dishes.map((dish) => {
            return (
                <div  key={dish.id} className="col-12 col-md-5 m-1">
                    {/* construct view for each element in dishes list */}
                    <Card onClick={()=>this.props.onClick(dish.id)}>
                        <CardImg width="100%" src={dish.image} alt={dish.name} />
                        <CardImgOverlay body className="ml-5">
                            <CardTitle>{dish.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            );
        });
   


        return (
            <div className="container">
                <div className="row">
                    {menu} 
                </div>
            </div>
        )
    }
}


export default Menu;