import React, { useState } from 'react';
import './styles.scss'
import TodoList from '../../components/TodoList';
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';

function ListPage() {
    const inittodoList = [
        {
            id: 1,
            title: 'Eat',
            status: 'new',
        },
        {
            id: 2,
            title: 'Sleep',
            status: 'completed',
        },
        {
            id: 3,
            title: 'Code',
            status: 'new',
        },
    ];
    const location = useLocation();
    const [todoList, setTodoList] = useState(inittodoList);
    const [filteredStatus, setFilteredStatus] = useState(() => {



        return 'all';
    })
    const handleTodoClick = (todo, idx) => {
        //clone current array to the new one
        const newTodoList = [...todoList]

        console.log(todo, idx);
        //toggle state
        newTodoList[idx] = {
            ...newTodoList[idx],
            status: newTodoList[idx].status === 'new' ? 'completed' : 'new',
        }
        // newTodoList[idx] = newTodo;
        //update todo list
        setTodoList(newTodoList);
    }

    const handleShowAllClick = () => {
        setFilteredStatus('all');
    }
    const handleShowCompletedClick = () => {
        setFilteredStatus('completed')
    }
    const handleShowNewClick = () => {
        setFilteredStatus('new')
    }
    const renderedTodoList = todoList.filter(todo => filteredStatus === 'all' || filteredStatus === todo.status);
    console.log(renderedTodoList);

    return (
        <div>
            <h3>Todo TodoList</h3>
            <TodoList todoList={renderedTodoList} onTodoClick={handleTodoClick} />
            <div className='btn-Filter'>
                <button onClick={handleShowAllClick}>Show All</button>
                <button onClick={handleShowCompletedClick}>Show Completed</button>
                <button onClick={handleShowNewClick}>Show New</button>
            </div>
        </div >
    );
}

export default ListPage;