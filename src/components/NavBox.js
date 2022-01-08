import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import classes from './NavBox.module.css';

function NavBox(props) {
    const [showBtn, setShowBtn] = useState(false);
    const removeCompletedItemsHandler = () => {
        setShowBtn(true);
    };

    return ( 
        <React.Fragment>
            <div className={classes['nav-container']}>
                <div className={classes['counter-box']}>
                    <span>
                        {props.counter}
                    </span>
                    <span>
                        item left
                    </span>
                </div>
                <nav>
                    <ul>
                        <li>
                            <NavLink activeClassName={classes['active-nav-link']} to="/all">All</NavLink>
                        </li>
                        <li>
                            <NavLink activeClassName={classes['active-nav-link']} to="/active">Active</NavLink>
                        </li>
                        <li>
                            <NavLink activeClassName={classes['active-nav-link']} to="/completed">Completed</NavLink>
                        </li>
                    </ul>
                </nav>
                <button 
                    className={showBtn ? classes['complete-btn'] : classes['not-complete-btn']}  
                    onClick={removeCompletedItemsHandler}
                >
                    Clear completed
                </button>
            </div> 
            <div className={classes['first-bottom']} ></div>
            <div className={classes['second-bottom']}></div>
        </React.Fragment>
    );
};

export default NavBox;