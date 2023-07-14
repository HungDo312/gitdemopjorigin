import React from 'react';
// import './App.css';
import { NavLink, Route, Redirect, Switch } from 'react-router-dom';
import TodoFeature from './features/Todo/pages/index';
import AlbumFeature from './features/Album/pages/index';
import NotFound from './components/NotFound/index';



function App() {
    return (
        <div className="App">
            Header
            <p><NavLink to="/todo-list" activeClassName='active-menu' >Todo</NavLink></p>
            <p><NavLink to="/albums" activeClassName='active' >Albums</NavLink></p>

            <Switch>
                <Redirect from="/home" to="/" exact />
                <Redirect from="/post-list/:postId" to="/posts/:postId" exact />

                <Route path="/" component={TodoFeature} exact />
                <Route path='/todo-list' component={TodoFeature} />
                <Route path='/albums' component={AlbumFeature} />

                <Route component={NotFound} />
            </Switch>
        </div>
    );
}

export default App;