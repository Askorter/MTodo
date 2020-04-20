import React from 'react';
import { render } from 'react-dom';
import Todo from './component/todo';

class Hello extends React.Component {
    render() {
       return (
            <Todo></Todo>
        )
    }
}
render(
    <Hello/>,
    document.getElementById('root')
)   