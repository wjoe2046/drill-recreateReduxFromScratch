import React from 'react';
import { connect } from 'react-redux';
import List from './List';

import { handleAddGoal, handleDeleteGoal } from '../actions/goals';

class Goals extends React.Component {
  addGoal = (e) => {
    e.preventDefault();

    this.props.dispatch(
      handleAddGoal(this.input.value, () => (this.input.value = ''))
    );
  };

  removeGoal = (goal) => {
    this.props.dispatch(handleDeleteGoal(goal));
  };

  render() {
    return (
      <div>
        <h1>Goal List</h1>
        <input
          type='text'
          placeholder='add to do'
          ref={(input) => (this.input = input)}
        />
        <button onClick={this.addGoal}>Add todo</button>
        <List items={this.props.goals} remove={this.removeGoal} />
      </div>
    );
  }
}

export default connect((state) => ({
  goals: state.goals,
}))(Goals);
