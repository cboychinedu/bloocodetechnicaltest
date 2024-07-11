// Importing the necessary modules 
import "./Home.css"; 
import axios from 'axios';
import Navbar from "./Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component, Fragment } from 'react';

class Home extends Component {
    // Setting the state 
    state = {
        data: []
    } 

    // Creating a function to filter the state by category 
    filterByCategory = (category) => {
        // Filtering the products based on category 
        const filteredProducts = this.state.data.filter(product => product.category === category); 

        // Checking if the filtered products is empty 
        if (filteredProducts.length === 0) {
            // Products category not found
            alert("Product category not found")
        }

        // Else if the filtered products is not empty 
        else {
            // Setting the state 
            this.setState({
                data: filteredProducts, 
            })
        }
        
    }

    handleScroll = () => {
        // Get all elements with class name 'contentsDiv'
        const contentDivs = document.querySelectorAll('.innerMainArticleDiv');

        // Loop through each 'contentsDiv' and check if it is in viewport
        contentDivs.forEach(div => {
            const rect = div.getBoundingClientRect();
            const windowHeight = window.innerHeight || document.documentElement.clientHeight;
            
            // If 'contentsDiv' is in viewport, add 'visible' class for transition effect
            if (rect.top >= 0 && rect.bottom <= windowHeight) {
                div.classList.add('visible');
            } else {
                div.classList.remove('visible');
            }
        });
    }

    // Component did mount 
    componentDidMount() {
        // Setting the server address 
        const serverAddress = "https://dummyjson.com/products"; 

        // Using axios to fetch the data 
        axios.get(serverAddress)
        .then((responseData) => {
            // Destructuring 
            const products = responseData.data.products;

            // Setting the state 
            this.setState({
                data: products, 
            })
        })

        // Add scroll event listener 
        window.addEventListener("scroll", this.handleScroll)
    }

    // Rendering the component and returning 
    // it a jsx file 
    render() { 
        return(
            <Fragment>
                {/* Adding the navbar */}
                <Navbar filterByCategory={this.filterByCategory}/> 

                {/* Adding the article section */}
                <article className="mainArticle">
        
                    {this.state.data.map((products, index) => (
                        <div className="innerMainArticleDiv" key={products.id}>
                            <div className="imageDiv">
                                <img className="imageProducts" src={products.images[0]}  alt={products.category}/>
                            </div>
                            <div className="contentsDiv">
                                <ul className="contentsDivList">
                                    <li> <b>Availability Status: </b> {products.availabilityStatus}</li>
                                    <li> <b> Title: </b> {products.title}</li>
                                    <li> <b> Brand: </b> {products.brand} </li>
                                    <li> <b> Category: </b> {products.category}</li>
                                    <li> <b> Desc: </b> {products.description}</li>
                                    <li> <b> Discount:</b> {products.discountPercentage} % </li>
                                    <li> <b> MinimumOrderQuantity: </b> {products.minimumOrderQuantity}</li>
                                    <li> <b> Stock: </b> {products.stock} </li>
                                    <li>
                                        <div className="priceTagAndRating">
                                            <div>
                                                <span> <b> Price: </b> $ {products.price}</span>
                                            </div>
                                            <div>
                                                <span> <b> Rating: </b> {products.rating} </span>
                                            </div>
                                        </div>
                                    </li>
                                </ul>

                            </div>
                        </div>

                    ))}

                </article>

            </Fragment>
        )
    }
}

export default Home