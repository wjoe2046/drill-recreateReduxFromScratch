import React from 'react';
import { connect } from 'react-redux';
import List from './List';
import {
  handleAddTodo,
  handleDeleteTodo,
  handleToggle,
} from '../actions/todos';

class Todos extends React.Component {
  addItem = (e) => {
    e.preventDefault();

    this.props.dispatch(
      handleAddTodo(this.input.value, () => (this.input.value = ''))
    );
  };

  toggleItem = (id) => {
    console.log('i am toggling');
    this.props.dispatch(handleToggle(id));
  };

  removeItem = (todo) => {
    this.props.dispatch(handleDeleteTodo(todo));
  };

  render() {
    return (
      <div>
        <h1>Todo List</h1>
        <input
          type='text'
          placeholder='add to do'
          ref={(input) => (this.input = input)}
        />
        <button onClick={this.addItem}>Add todo</button>
        <List
          items={this.props.todos}
          remove={this.removeItem}
          toggle={this.toggleItem}
        />
      </div>
    );
  }
}

export default connect((state) => ({
  todos: state.todos,
}))(Todos);
