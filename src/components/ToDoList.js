import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { navActions } from '../store/visible';

import { Route, Switch, Redirect } from 'react-router-dom';

import NavBox from './NavBox';
import ToDoItem from './ToDoItem';
import NewItem from './NewItem';
import classes from './ToDoList.module.css';

function ToDoList(props) {
    const dispatch = useDispatch();
    const show = useSelector(state => state.visibility.visibility);
    const [items, setItems] = useState(
        JSON.parse(localStorage.getItem('items')) || []
    ); 
    useEffect(() => {
        localStorage.setItem('items', JSON.stringify(items));
    }, [items]);
    const counter = items.length;

    const addItemHandler = (items) => {
        setItems((prevItems) => {
          return [...prevItems, items]
        });
    };

    if(items.length > 0) {
        dispatch(navActions.visible());
    } else {
        dispatch(navActions.inVisible());
    };

    const deleteItemHandler = (id) => {
        setItems(items.filter(item => item.id !== id));
    };

    return (
        <div className={classes['to-do-container']}>
            <div className={classes['to-do__title']}>
                <h1>todos</h1>
            </div>
            <NewItem onAddItems={addItemHandler} />
            <Switch>
                <Route path="/" exact>
                    <Redirect to="/all" />  
                </Route>
                <Route path="/all" exact >
                    <ul>
                        {items.map(item => 
                            <ToDoItem
                                key={item.id}
                                id={item.id}
                                completed={item.completed}
                                title={item.title}
                                onDelete={() => deleteItemHandler(item.id)}
                                // onSave={}
                            />  
                        )}
                    </ul>
                </Route>
                <Route path="/active" >
                    {/* <ul>
                        {items.map(item => 
                            <ToDoItem
                                key={item.id}
                                id={item.id}
                                title={item.title}
                                completed={item.completed = false}
                                onDelete={() => deleteItemHandler(item.id)}
                            />  
                        )}
                    </ul> */}
                </Route>
                <Route path="/completed" >
                    {/* <ul>
                        {items.map(item => 
                            <ToDoItem
                                key={item.id}
                                id={item.id}
                                title={item.title}
                                completed={item.completed = true}
                                onDelete={() => deleteItemHandler(item.id)}
                            />  
                        )}
                    </ul> */}
                </Route>
            </Switch>
            {show && <NavBox counter={counter} />}
        </div>
    )
};

export default ToDoList;