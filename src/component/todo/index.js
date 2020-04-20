import React from 'react';
import { render } from 'react-dom';
import './index.scss';

export default class Todo extends React.Component {
    constructor(props) {
        super(props);
    }

    _renderTitle() {
        return <div className="title">Todo</div>
    }

    _renderOption() {

    }

    _renderContent() {

    }

    _renderBlankItem() {
        
    }

    render() {
       return (
           <div className="container">
               {this._renderTitle()}
           </div>
        );
    }
}