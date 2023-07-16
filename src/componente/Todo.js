import React from 'react';
import {BiEdit} from 'react-icons/bi';
import {AiFillDelete} from 'react-icons/ai';

function Todo({text,updateMode,deleteMode}) {
  return (
    <div className='card todo'>
      <div className='newcard'>
        <div className='text'> {text}</div>
        <div className="icons">
            <BiEdit className="icon" onClick={updateMode}/>
            <AiFillDelete  className="icon" onClick={deleteMode}/>
        </div>
        </div>
      
    </div>
  )
}

export default Todo
