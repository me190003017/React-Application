import React, { Component } from "react";
import { Media, Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem, Modal, Label, Input, Button, ModalHeader, ModalBody, Form, FormGroup, FormFeedback } from "reactstrap";

// import {Control,LableForm,Errors} from "react-redux-form"
import { Link } from 'react-router-dom'


class CommentForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isModalOpen: false,
            username:'',
            touched:{
                username:false
            }
        };

        this.toggleModal = this.toggleModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange=this.handleInputChange.bind(this);
        this.handleBlur=this.handleBlur.bind(this);

    }

    toggleModal = () => {
        console.log("toggle modal clicked")
        this.setState({
            isModalOpen: !this.state.isModalOpen
        })
    }

    handleSubmit = (event) => {
        this.toggleModal();

        alert("Your Name : " + this.username.value + " Rating : " + this.rating.value + " Comment : " + this.comment.value);
        console.log("Your Name : " + this.username.value + " Rating : " + this.rating.value + " Comment : " + this.comment.value)
        event.preventDefault();
    }
    handleBlur =(field)=>(evt)=>{
        this.setState({
            touched:{ ...this.state.touched,[field]:true}
        })
    }
    handleInputChange=(event)=>{
        const target=event.target;
        const value=target.type==='checkbox' ? target.checked :target.value;
        this.setState({
            username:value
        });
    }
    validate(username){
        const errors={
            username:''
        };
        if(this.state.touched.username&&username.length<3){
            errors.username="Your Name Must contain 3 more than 3 characters"
        }
        else if(this.state.touched.username&&username.length>15){
            errors.username="Your Name Must contain 15 less than 15 characters"
        }
        else if(this.state.touched.username&&username.length===0){
            errors.username="Required"
        }
        return errors;
        
    }


    render() {
        const errors=this.validate(this.state.username);
        return (
            <div>

                <Button outline onClick={this.toggleModal}><span className="fa fa-pencil fa-lg"></span>Submit Comment</Button>

                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handleSubmit}>
                            <FormGroup>
                                <Label htmlFor="rating">Rating</Label>
                                <Input type="select" name="rating" innerRef={(input)=>this.rating=input}>
                                <option>1</option>
                                <option>2</option><option>3</option><option>4</option><option>5</option>
                                </Input>

                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="username">Your Name</Label>
                                <Input type="text" id="username" name="username" placeholder="Your Name" value={this.state.username} onChange={this.handleInputChange}
                                valid={errors.username===''} invalid={errors.username!==''} 
                                onBlur={this.handleBlur('username')}

                                innerRef={(input) => this.username = input} />
                                <FormFeedback>{errors.username}</FormFeedback>
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="textarea">Commment</Label>
                                <Input type="textarea" id="comment" name="comment" rows="6" innerRef={(input) => this.comment = input} />
                            </FormGroup>

                            <Button type="submit" color="primary" >Submit</Button>

                        </Form>
                    </ModalBody>
                </Modal>


            </div>
        )
    }
}

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

function RenderComments({ commentobj }) {

    if (commentobj != null) {
        const commetdiv = commentobj.map((cmt) => {
            return (
                <div key={cmt.id}>
                    <p>{cmt.comment}</p>
                    <p>-- {cmt.author} ,{new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(cmt.date)))}</p>
                </div>
            )
        })
        return (
            <div className="col-12 col-md-5 m-1 ">
                <Media heading>Comments</Media>
                {commetdiv}
                <CommentForm />
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
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                    <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>{props.dish.name}</h3>
                    <hr />
                </div>
            </div>

            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    <RenderDish dish={props.dish} />
                </div>


                <RenderComments commentobj={props.comments} />
            </div>
        </div>

    )

}

export default DishDetails;