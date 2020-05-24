import React from 'react';
import { render } from 'react-dom';
import './index.scss';
const tabConfig = [{
  name: '待完成',
  key: 'WAIT',
  statusKey: 'WAIT'
}, {
  name: '已完成',
  key: 'DONE',
  statusKey: 'DONE'
}, {
  name: '已删除',
  key: 'DELETE',
  statusKey: 'DELETE'
}];

export default class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todoData: [
        {
          name: '学习',
          status: 'WAIT',
          mark: '123'
        }
      ],
      currentShow: 'WAIT',
      tabPositionData: null,
      inputValue: ''
    };
  }

  _renderHeader() {
    return <div className="header">
      <input onChange={this.handleInputChange.bind(this)} value={this.state.inputValue}></input>
      <button onClick={this.handleAddWaitTodo.bind(this)}>添加todo</button>
    </div>
  }

  _renderBar() {
    return <div className="bottom-bar"></div>
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

  handleClickTab(index) {
    this.setState({
      currentShow: tabConfig[index].key
    });
  }

  handleInputChange(e) {
    this.setState({
      inputValue: e.target.value
    });
    return false;
  }

  handleAddWaitTodo() {
    let name = this.state.inputValue;
    let todoData = [...this.state.todoData];
    todoData.push({
      name: name,
      status: 'WAIT',
      mark: ''
    });
    this.setState({
      inputValue: '',
      todoData: todoData
    });
  }

  render() {
    return (
      <div className="container">
        {this._renderHeader()}
        <div className="things-container">
          {
            this.state.todoData.map((item, index) => {
              if (item.status === this.state.currentShow) {
                return <div className="todo-item" key={index}>{item.name}</div>
              }
            })
          }
        </div>
        <div className="tab-container">
          {
            tabConfig.map((item, index) => {
              return <div className={"tab-item " + (item.key === this.state.currentShow ? 'selected' : '')} key={index} onClick={() => {
                this.handleClickTab(index);
              }}>
                {item.name}
              </div>
            })
          }
        </div>
      </div>
    );
  }
}