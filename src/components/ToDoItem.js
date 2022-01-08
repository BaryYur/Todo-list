import React, { useState, useEffect } from 'react';

import classes from './ToDoItem.module.css';

function ToDoItem (props) {
    const [itemToDo, setItemToDo] = useState(true);
    const [active, setActive] = useState(false);
    const [enteredInputValue, setEnteredInputValue] = useState(props.title);
    const [completed, setCompleted] = useState(false);
    const [toggle, setToggle] = useState(true);

    const checkHandler = () => {
        setActive(active => !active);
        setCompleted(complete => !complete);
        const itsNewData = {
            id: props.id,
            completed: completed,
            title: enteredInputValue
        };
        setNewData(itsNewData);
    };

    const removeItemHandler = () => {
        props.onDelete();
        setItemToDo(false);
    };

    const changeInputHandler = (event) => {
        setEnteredInputValue(event.target.value);
    };

    const onBlurHandler = () => {
        const itsNewData = {
            id: props.id,
            completed: completed,
            title: enteredInputValue
        };
        setNewData(itsNewData);
        setToggle(true);
    };

    let ENTER_KEY = 13;
    const onKeyHandler = (event) => {
        if(event.which === ENTER_KEY) {
            const itsNewData = {
                id: props.id,
                completed: completed,
                title: enteredInputValue
            };
            setNewData(itsNewData);
            setToggle(true);
        };
    };
    
    const doubleHandler = () => {
        setToggle(false);
    };

    const [newData, setNewData] = useState(
        JSON.parse(localStorage.getItem('newData')) 
    ); 

    useEffect(() => {
        localStorage.setItem('newData', JSON.stringify(newData));
    }, [newData]);

    

    return (
        <div>
            {itemToDo && 
            <li className={classes['item-container']}>
                <input 
                    className={toggle ? classes['active-checkbox'] : classes['not-active-checkbox']}  
                    type="checkbox"
                    onChange={checkHandler}
                />
                <div className={classes['title-container']}>
                    {toggle ? (
                    <p  
                        onDoubleClick={doubleHandler} 
                        className={!active ? classes['active-title'] : classes['not-active-title']}
                    >{enteredInputValue}</p>
                    ) : (
                    <input
                        type='text'
                        onBlur={onBlurHandler}
                        value={enteredInputValue}
                        onChange={changeInputHandler}
                        onKeyDown={onKeyHandler}
                    />
                    )}
                </div>
                <button 
                    className={toggle ? classes['active-button'] : classes['not-active-button']} 
                    onClick={removeItemHandler}
                >
                    <span></span>
                    <span></span>
                </button>
            </li>}
        </div>
    )
};

export default ToDoItem;