import React, { useEffect, useState } from 'react';
import './App.scss';
import TodoList from './components/TodoList/index';
import TodoForm from './components/TodoForm';
import PostList from './components/PostList/index';
import Pagination from './components/Pagination/index';
import PostFilterForm from './components/PostFilterForm';
import Clock from './components/clock/index';
import BetterCLock from './components/betterClock';
import MagicBox from './components/magicBox';
import productApi from './api/productAPI';
import { queryString } from 'query-string';

function App() {
  useEffect(() => {
    const fetchProducts = async () => {
      const params = {
        _limit: 10,
      }

      const productList = await productApi.getAll(params);
      console.log(productList)
    }
    fetchProducts();
  }, []);




  const [todoList, setTodoList] = useState([
    { id: 1, title: 'I love Ez Frontend' },
    { id: 2, title: 'We love Ez Frontend' },
    { id: 3, title: 'They love Ez Frontend' }
  ]);

  const [postList, setPostList] = useState([]);
  const [pagination, setPagination] = useState({
    _page: 1,
    _limit: 10,
    _totalRows: 1,
  })
  const [filter, setFilter] = useState({
    _limit: 10,
    _page: 1,
    title_like: '',
  })
  useEffect(() => {
    async function fecthPostList() {
      try {
        const paramString = queryString.stringify(filter);
        const requestUrl = `http://js-post-api.herokuapp.com/api/posts?${paramString}`;
        const response = await fetch(requestUrl)
        const responseJSON = await response.json();
        console.log({ responseJSON });

        const { data, pagination } = responseJSON
        setPostList(data);
        setPagination(pagination);
      } catch (error) {
        console.log('Failed to fecth post list:', error.message);
      }
    }
    console.log('POST list effect')
    fecthPostList();
  }, [filter]);
  useEffect(() => {
    console.log('Todo list effect')
  })

  function handlePageChange(newPage) {
    console.log('New page', newPage)
    setFilter({
      ...filter,
      _page: newPage,
    })
  }

  function handleTodoCLick(todo) {
    console.log(todo);
    const index = todoList.findIndex(x => x.id === todo.id)
    if (index < 0) return;

    const newTodoList = [...todoList]
    newTodoList.splice(index, 1)
    setTodoList(newTodoList);
  }
  function handleTodoFormSubmit(formValues) {
    console.log('Form submit:', formValues);
    //add new todo to cur todo list
    const newTodo = {
      id: todoList.length + 1,
      ...formValues
    }
    const newTodoList = [...todoList];
    newTodoList.push(newTodo);
    setTodoList(newTodoList)
  }

  function handleFilterChange(newFilters) {
    console.log('New Filter:', newFilters)
    setFilter({
      ...filter,
      _page: 1,
      title_like: newFilters.searchTerm
    })
  }
  const [showClock, setShowClock] = useState(true);

  return (
    <div className="app">
      <h1>React hooks - PostList</h1>
      {/* <TodoForm onSubmit={handleTodoFormSubmit} />
      <TodoList todos={todoList} onTodoClick={handleTodoCLick} /> */}
      {/* <PostFilterForm onSubmit={handleFilterChange} />
      <PostList posts={postList} />
      <Pagination
        pagination={pagination}
        onPageChange={handlePageChange}
      /> */}
      {/* <p>Clock</p>
      {showClock && < Clock />}
      <BetterCLock />
      <button onClick={() => setShowClock(false)}>Hide clock</button> */}
      {/* <MagicBox /> */}
    </div>
  );
}

export default App;
