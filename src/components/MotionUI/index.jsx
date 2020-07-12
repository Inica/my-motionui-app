import React, { Fragment } from 'react';
import placeholder from '../../assets/placeholder2.png';
import './motion-ui.scss'

const ListItem = () => (
    <Fragment>
        <img src={placeholder} className="mr-3" alt="64X64" />
        <div className="media-body">
            <h5 className="mt-0 mb-1">List-based media object</h5>
            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
        </div>
    </Fragment>
)

const MotionUI = () => {
    return (
        <section className="motion-ui-list container-fluid" >
            <ul className="list-unstyled">
                <li className="media fade-in">
                    <ListItem />
                </li>
                <li className="media my-4">
                    <ListItem />
                </li>
                <li className="media">
                    <ListItem />
                </li>
            </ul>
        </section>
    );
}

export default MotionUI;