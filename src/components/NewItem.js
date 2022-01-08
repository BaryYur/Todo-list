import React from 'react';

import ToDoForm from './ToDoForm';

function NewItem (props) {
    const saveItemsDataHandler = (enteredItemsData) => {   //adding function in items array
        const itemsData = {
          ...enteredItemsData,
          id: Math.random().toString(),
        };
        props.onAddItems(itemsData);
    };


    return (
        <div className="new-item">
            <ToDoForm 
                onSaveItemsData={saveItemsDataHandler} 
            />
        </div>
    )
}

export default NewItem;