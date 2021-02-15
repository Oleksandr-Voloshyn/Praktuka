import React from "react";
import {connect} from "react-redux";
import List from "./List";
import {addList, deleteList, taskDone, updateListChange} from "../../redux/list-reducer";


class ListApi extends React.Component{


  render () {
    return <>
      <List
      addList = {this.props.addList}
      updateListChange = {this.props.updateListChange}
      newList= {this.props.newList}
      list = {this.props.list}
      deleteList = {this.props.deleteList}
      taskDone = {this.props.taskDone}/>
    </>
  }
}

let mapStateToProps = (state) => {
  return {
    list: state.listPage.list,
    newList: state.listPage.newList,

  }
};

 export default connect(mapStateToProps,
   {addList, updateListChange, deleteList, taskDone})
 (ListApi)
