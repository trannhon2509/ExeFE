import React from 'react'
import { Link } from 'react-router-dom'
import RoutePath from '../config/RoutePath'

function SideBar() {
    return (

        <div className="d-flex flex-column align-items-stretch flex-shrink-0 bg-white py-5">
            <div className="list-group list-group-flush border-bottom scrollarea">
                <Link to={RoutePath.ADMINUSER} className="list-group-item list-group-item-action py-3 lh-tight" aria-current="true">
                    <h2>User</h2>
                </Link>
                <Link to={RoutePath.ADMINTUTOR} className="list-group-item list-group-item-action py-3 lh-tight" aria-current="true">
                    <h2>Tutor</h2>
                </Link>
                {/* <Link to={RoutePath.ADMINTEACHER}  className="list-group-item list-group-item-action py-3 lh-tight" aria-current="true">
                    <h2>Teacher</h2>
                </Link> */}
                {/* <Link to={RoutePath.ADMINBOOKING}  className="list-group-item list-group-item-action py-3 lh-tight" aria-current="true">
                    <h2>Booking</h2>
                </Link> */}
                <Link to={RoutePath.ADMINCOURSE} className="list-group-item list-group-item-action py-3 lh-tight" aria-current="true">
                    <h2>Subject</h2>
                </Link>
                {/* <Link to={RoutePath.ADMINPAYMENT}  className="list-group-item list-group-item-action py-3 lh-tight" aria-current="true">
                    <h2>Payment</h2>
                </Link> */}
            </div>
        </div>
    )
}

export default SideBar