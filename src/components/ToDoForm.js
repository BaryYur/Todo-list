import React, { useState } from 'react';

import classes from './ToDoForm.module.css';
 
function ToDoForm (props) {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [allItems, setAllItems] = useState(false);

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
    };

    const submitHandler = (event) => {
        event.preventDefault();

        if(enteredTitle.length === 0) {
           return;
        };

        const itemsData = {
            id: Math.random().toString(),
            completed: false,
            title: enteredTitle,
        };

        props.onSaveItemsData(itemsData);
        setEnteredTitle('');
    };

    const selectAllItemsHandler = () => {
        setAllItems(b => !b);
    };

    // console.log(props.id);

    return (
        <div className={classes['form-container']}>
            <label 
                className={!allItems ? classes['not-active-btn'] : classes['active-btn']} 
                onClick={selectAllItemsHandler}
                htmlFor={props.id}
            >
                <span>&gt;</span>
            </label>
            <form onSubmit={submitHandler}>
                <input 
                    type="text" 
                    placeholder="What needs to be done?"  
                    value={enteredTitle}
                    onChange={titleChangeHandler}
                />
            </form>
        </div>
    )
};

export default ToDoForm;