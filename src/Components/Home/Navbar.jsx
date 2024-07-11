// Importing the necessary modules 
import React, { Fragment, useState } from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import "./Home.css"; 


// Creating the functional based component 
const Navbar = (props) => {
    // Setting state 
    const [category, setCategory] = useState("")

    // Handle The state 
    const handleCategory = (event) => {
        // Getting the value 
        const value = event.target.value.toLowerCase(); 

        // Setting the state 
        setCategory(value); 
    }

    // Handle submission 
    const searchSubmission = () => {
        props.filterByCategory(category); 
    }

    // Return the jsx 
    return(
        <Fragment> 
            <nav className="mainNav">
                <div className="navContainerDiv">
                    <nav className="leftNav">
                        <Link to="/"> Home </Link>
                        <Link to="#"> About </Link>
                        <Link to="#"> ContactUs</Link>

                    </nav>

                    <nav className='rightNav'>
                        <div>
                            <input className="searchInputForm" type="search" placeholder='Search Category...' onChange={handleCategory}/> 
                        </div>

                        <div>
                            <Button type="submit" onClick={searchSubmission}>Submit</Button>
                        </div>
                    </nav>
                </div>
            </nav>

        </Fragment>
    )
}

// Exporting the navbar 
export default Navbar; 