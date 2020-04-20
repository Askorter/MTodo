import React from 'react';
import { render } from 'react-dom';
import Todo from '../../component/todo';

class Home extends React.Component {
    constructor() {
        this.state = {

        };
    }

    render() {
       return (
           <Todo></Todo>
        );
    }
}