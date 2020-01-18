
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

ReactDOM.render(<App />,
  document.getElementById('root'));

/*
import React from 'react';
import ReactDOM from 'react-dom';

import Header from './components/Header';
import List from './components/List';
import AddPanel from './components/AddPanel';
import './index.css'

const App = () => {
    const todoData = [
        { label: 'Yeah', done: false, id: 1 },
        { label: 'Two', done: true, id: 2 },
        { label: 'Three', done: false, id: 3 },
    ];

    return (
        <div className="app">
            <Header />
            <div className="body">
                <List list={ todoData }/>
                <AddPanel />
            </div>
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));
*/