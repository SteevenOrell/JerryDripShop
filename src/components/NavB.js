import React from 'react';
import {Navbar,Nav,NavDropdown} from 'react-bootstrap'

import {search} from 'react-icons-kit/fa/search';
import {Icon} from 'react-icons-kit';


import { Sidebar } from 'primereact/sidebar';
import logo from './assets/app-images/favicon.jpg'
import shoppingBag from './assets/app-images/online-shopping.png'
import './NavB.css'
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';




class NavB extends React.Component {
    constructor(props) {
        super(props);
        this.state = { visible: false, dropOpen1: false, dropOpen2: false, dropOpen3: false,dropOpen4: false,}
    }


  
  
  





    render() { 
        return ( <>

<Navbar id="FirstNavBar" collapseOnSelect expand="lg" >
  <Navbar.Brand href="#home"  ><img src={logo} id="imglogo" /></Navbar.Brand>

  <Navbar.Toggle aria-controls="responsive-navbar-nav" id="toggleMenu"  />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
     
   
    <NavDropdown title={<span className="colorNavB" > Men</span>}  className="middleLinks" id="basic-nav-dropdown"
            onMouseEnter={(e) => this.setState({ dropOpen1: true })}
            onMouseLeave={(e) => this.setState({ dropOpen1: false })}  show={this.state.dropOpen1}>
        <NavDropdown.Item href="#action/3.1"  >Clothing</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2" >Shoes</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.4" >Accessories</NavDropdown.Item>
      </NavDropdown>

      <NavDropdown title={<span className="colorNavB" >Women</span>}  className="middleLinks" id="basic-nav-dropdown"
            onMouseEnter={(e) => this.setState({ dropOpen2: true })}
            onMouseLeave={(e) => this.setState({ dropOpen2: false })} show={this.state.dropOpen2} >
        <NavDropdown.Item href="#action/3.1"  >Clothing</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2" >Shoes</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.4" >Accessories</NavDropdown.Item>
      </NavDropdown>

      <NavDropdown title={<span className="colorNavB" >Kids</span>}  className="middleLinks" id="basic-nav-dropdown"
            onMouseEnter={(e) => this.setState({ dropOpen3: true })}
            onMouseLeave={(e) => this.setState({ dropOpen3: false })} show={this.state.dropOpen3} >
        <NavDropdown.Item href="#action/3.1"  >Clothing</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2" >Shoes</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.4" >Accessories</NavDropdown.Item>
      </NavDropdown>

          <Nav.Link href="#SignIn-Up" className="middleLinks"><span className="colorNavB"> Sign in / Register </span></Nav.Link>

<NavDropdown title={<span className="colorNavB" >Customer Care</span>}  className="middleLinks"  id="basic-nav-dropdown"
      onMouseEnter={(e) => this.setState({ dropOpen4: true })}
      onMouseLeave={(e) => this.setState({ dropOpen4: false })}  show={this.state.dropOpen4} >
  <NavDropdown.Item href="#OrderStatus"  >Order Status</NavDropdown.Item>
  <NavDropdown.Item href="#ContactUs" className="dropdownItem">Contact us</NavDropdown.Item>
  <NavDropdown.Item href="Return" className="dropdownItem">Return</NavDropdown.Item>
  <NavDropdown.Item href="#PrivacyPolicy" className="dropdownItem">Privacy Policy</NavDropdown.Item>
  <NavDropdown.Item href="TermofSale" className="dropdownItem">Term of Sale</NavDropdown.Item>
  <NavDropdown.Item href="TermofUse" className="dropdownItem">Term of Use</NavDropdown.Item>
</NavDropdown>

<Nav.Link href="#AboutUs" className="middleLinks"><span className="colorNavB">About Us</span></Nav.Link>

</Nav>
<Nav id="leftNavBtn">  




<button  id="btn1" 
 onClick={(e) => this.setState({visible:true})}> <i className="pi pi-search" id="searchIcon"> </i> </button>



<button> <i className="pi pi-heart" id="loveIcon"></i>  </button>

<button id="shoppingBag" > <img src={shoppingBag} /> </button>


</Nav>
</Navbar.Collapse>
</Navbar>
<Sidebar id="Sidebar" visible={this.state.visible} position="top" baseZIndex={1000000} onHide={() => this.setState({ visible: false })}>
                  <div>
                  <h1> What are you looking for?</h1>
                  <form>
                  <input type="text" id="searchInput" placeholder="Enter Keywords"/> <br></br><br></br>
                  <button id="searchBtn" onClick={() => this.setState({ visibleTop: false })}  > Search </button>
                  </form>
                  </div>
              </Sidebar>
        </> );
    }
}
 
export default NavB;