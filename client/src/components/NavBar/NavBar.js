// import 'bootstrap/dist/css/bootstrap.css';
import React,{Component} from 'react';
import { Link, animateScroll } from 'react-scroll';

export default class Navbar extends Component{
    constructor(props) {
        super(props);
        this.state = {
          navbar: false
        };
        this.toggleMenu = this.toggleMenu.bind(this);
      }
      toggleMenu(){
        this.setState({ navbar: !this.state.navbar })
      }
   
      render() {
        const show= (this.state.navbar) ?"show":"" ;
        return (
            <nav id="my-nav-bar" className="navbar navbar-expand-md navbar" style={{backgroundColor: "#282c34"}}>
                        <button className="navbar-toggler" type="button" onClick={ this.toggleMenu }>
                        <span className="navbar-toggler-icon" style={{color: "white"}}>Menu</span>
                    </button>
                    <div className={"collapse navbar-collapse "+show} style={{color: "white", fontSize: "20px" , paddingLeft: "10px", paddingRight: "40px"}}>
                        <div className="navbar-nav mr-auto">
                        <Link
                            activeClass="active"
                            to="home"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration= {500}
                            className="nav-item nav-link"
                            id="linked"
                        >Home</Link>
                        <Link
                            activeClass="active"
                            to="about"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration= {500}
                            id="linked"
                            className="nav-item nav-link"
                        >About</Link>
                        </div>
                    </div>
                    </nav>
        )
      }
    }