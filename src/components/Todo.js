import React, {useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {Add_ToDo, Delete_ToDo, Remove_ToDo} from '../actions/index'

const Todo = () => {
    const dispatch = useDispatch();
    const [inputData , setInputData] = useState('');
    const list = useSelector((state) => state.todoList.list);

    return(
        <div className="main_div">
            <div className="child_div">
                <h2>To do Lists</h2>
                <div className="addList">
                    <input type="text" placeholder="Add Item" 
                        value={inputData}
                        onChange={(event) => setInputData(event.target.value)}
                    />
                    <div className="plus" title="add Item" onClick={() => dispatch(Add_ToDo(inputData),setInputData(''))}><span>+</span></div>
                </div>

                <div className="showItem">
                {
                    list.map((elem) => {
                        return(
                            <div className="eachItem" key={elem.id}>
                                <h3>{elem.data}</h3>
                                <div className="minus" title="Delete Item" onClick={() => dispatch(Delete_ToDo(elem.id))}><span>-</span></div>
                            </div>
                        )
                    })
                }

                {/* <div className="eachItem" >
                    <h3>Test</h3>
                    <div className="minus" title="Delete Item" onClick={() => dispatch(Delete_ToDo(inputData))}><span>-</span></div>
                </div> */}
                    
                </div>

                <div className="clearList">
                    <button className="btn clearBtn" onClick={() => dispatch(Remove_ToDo())}>Clear List</button>
                </div>


            </div>
        </div>
    )
}

export default Todo;
