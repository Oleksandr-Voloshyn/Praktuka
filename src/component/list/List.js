import React from "react";
import './List.css'
import deletePhoto from './../../accept/61848.png'
import addPhoto from './../../accept/add-icon-png-2462.png'
import donePhoto from './../../accept/all-done-icon-18.jpg'
import noDonePhoto from './../../accept/no-done.png'

const List = (props) => {

  let textValue = React.createRef();

  let addListTyt = () => {
    props.addList();
    console.log(props.list);
  }

  let onListChange = () => {
    let text = textValue.current.value;
    props.updateListChange(text)
  }

  let deleteList = (text) => {
    props.deleteList(text)
    console.log(text)
  }

  return (
    <div>
      <textarea
        onChange={onListChange}
        ref={textValue}
        value={props.newList}
        placeholder='додати список'>
      </textarea>
      <img src={addPhoto} onClick={addListTyt} className='addPhoto'/>
      <div>
        {props.list.map((l, index) => <div key={index} className='list'>
          {index + 1})
          {l.done === true ? <del>{l.list}</del> : <>{l.list}</>}
          <img className='deletePhoto' src={deletePhoto}
               onClick={() => {
                 deleteList(l.id)
               }}/>{}
          <img src={l.done === true ? donePhoto : noDonePhoto}
               className='donePhoto'
               onClick={() => {
                 props.taskDone(l.id)
               }}/>
        </div>)}

      </div>


    </div>
  )
}

export default List;


