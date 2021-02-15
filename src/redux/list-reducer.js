const SEND_LIST = 'SEND_LIST';
const UPDATE_LIST = 'UPDATE_LIST';
const DELETE_LIST = 'DELETE_LIST'
const TASK_DONE = 'TASK_DONE'
// Test comment
const initialState = {
  list: [{id: 1, list: 'щось зробити 1'},
    {id: 2, list: 'щось зробити 2', done: false},
    {id: 3, list: 'щось зробити 3', done: true},
    {id: 4, list: 'щось зробити 4', done: true},
    {id: 5, list: 'щось зробити 5', done: false}],
  delList: [],
  newList: '',
  newId: 1
};

const listReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_LIST:
      state.list.map(i => {
        if (i.id === state.newId) {
          state.newId++
        }
        return state.newId
      })
      let body = {id: state.newId, list : state.newList, done: false}
      return {
        ...state,
        newList: '',
        list: [...state.list, body],
        newId: 1
      };

    case UPDATE_LIST:
      return {
        ...state,
        newList: action.listNew
      }
    case DELETE_LIST:
      //state.delList= '';
      state.list.map(i => {
        if (i.id !== action.listId){
          state.delList.push(i)
        }

        return state.delList;
      })
      return {
        ...state,
        list: [...state.delList],
        delList: []
        }
    case TASK_DONE:

      state.list.map(i => {
        if (i.id === action.listId ){
          i.done ? i.done = false : i.done = true
        }
        console.log(state.list)
        return state.list
      })
      return {
        ...state,
       list: [...state.list],

      }


    default:
      return state;
  }
}



export const addList = () => ({type: SEND_LIST});
export const updateListChange = (listNew) => ({type: UPDATE_LIST, listNew});
export const deleteList = (listId) => ({type:DELETE_LIST, listId});
export const taskDone = (listId) => ({type: TASK_DONE, listId});

export default listReducer;
