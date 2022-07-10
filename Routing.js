import React from 'react'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'

const Deafult = () => <div className="container"><h1> Welcome to Broo !</h1></div>
const Contact = () => <div className="container"><h1> For any enquiries do not contact me </h1></div>
const Error = () => <div className="container"><h1>Please contact the administrator</h1></div>

function Routing() {

  return (
    
    <Router>
            <div >
                
                <Link to="/" > React </Link>
                <Link to="/contact" > Contact</Link>

            </div>
        <Routes>
            <Route path="/" element={<Deafult />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="*" element={<Error />}></Route>
        </Routes>
    </Router>

  )
}

export default Routing