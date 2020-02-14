import React from 'react';
import ReactDOM from 'react-dom';
import MainPage from './app/MainPage';

const Index = () => {
    return (
        <div>
            Welcome to React!
            <MainPage />
        </div>
    );
};

ReactDOM.render(<Index />, document.getElementById('app'));
