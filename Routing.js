import React from 'react'
import Practice from "./Practice"
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'

const Deafult = () => <div className="container"><h1> Welcome to Broo !</h1></div>
const Contact = () => <div className="container"><h1> For any enquiries do not contact me </h1></div>
const Error = () => <div className="container"><h1>Please contact the administrator</h1></div>

function Routing() {

  return (
    
    <Router>
            <div >
                <button>
                    <Link to="/" > React </Link>
                </button>
                <button>
                    <Link to="/practice" > Practice </Link>
                </button>
                <button>
                    <Link to="/contact" > Contact </Link>
                </button>
            </div>
        <Routes>
            <Route path="/" element={<Deafult />}></Route>
            <Route path="/practice" element={<Practice />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="*" element={<Error />}></Route>
        </Routes>
    </Router>

  )
}

export default Routing