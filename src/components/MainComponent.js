import React, { Component } from "react";
import Header from "./HeaderComponent";
import Home from './HomeComponent';
import Footer from "./FooterComponent";
import Menu from "./MenuComponent";
import Contact from "./ContactComponent";
import About from "./AboutComponent";
import DishDetails from "./DishdetailComponent";
import { Switch, Route, Redirect,withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { addComment,fetchDishes } from "../redux/ActionCreaters";

const mapStateToProps = (state)=>{
  return{
    dishes:state.dishes,
    comments:state.comments,
    promotions:state.promotions,
    leaders:state.leaders
  }
}

const mapDispatchToProps = (dispatch) =>({
    addComment:(dishId,rating,author,comment)=>dispatch(addComment(dishId,rating,author,comment)),
    fetchDishes:()=>{dispatch(fetchDishes())}
});

class Main extends Component {

  componentDidMount(){
    this.props.fetchDishes();
  }
  render() {
    const HomePage = () => {
      return (
        <Home dish={this.props.dishes.dishes.filter((dish) => dish.featured)[0]}
          dishesLoading={this.props.dishes.isLoading}
          dishesErrMess={this.props.dishes.errMess}
          leader={this.props.leaders.filter((leader) => leader.featured)[0]}
          promotion={this.props.promotions.filter((promo) => promo.featured)[0]}
        />
      )
    };

    const DishWithId = ({ match }) => {
      return (
        <DishDetails dish={this.props.dishes.dishes.filter((dish) => dish.id === parseInt(match.params.dishId, 10))[0]}
          comments={this.props.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId))}
          addComment={this.props.addComment}
          dishesLoading={this.props.dishes.isLoading}
          dishesErrMess={this.props.dishes.errMess} />
      )
    };
    const Aboutpage = () => {
      return (
        <About leaders={this.props.leaders} />
      )
    }
    return (

      <div className="cntct">

        <Header />
        <Switch>
          <Route path="/home" component={HomePage} />
          <Route exact path="/aboutus" component={Aboutpage} />
          <Route exact path="/menu" component={() => <Menu dishes={this.props.dishes} />} />
          <Route path="/menu/:dishId" component={DishWithId} />
          <Route exact path="/contactus" component={Contact} />
          <Redirect to="/home" />
        </Switch>
        <Footer />

      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Main));
