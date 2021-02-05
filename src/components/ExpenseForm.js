import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';

class ExpenseForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      description: props.expense ? props.expense.description : '',
      amount: props.expense ? (props.expense.amount / 10).toString() : '',
      note: props.expense ? props.expense.note : '',
      createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
      calendarFocused: false,
      error: ''
    };
  }

  onTextChange = (e) => {
    const { name, value } = e.target;
    this.setState(() => ({
      [name]: value
    }))
  }

  onAmountChange = (e) => {
    const amount = e.target.value;
    if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState(() => ({ amount }));
    }
  }

  onDateChange = (createdAt) => {
    if (createdAt) {
      this.setState(() => ({ createdAt }));
    }
  }

  onFocusChange = ({focused}) => {
    this.setState(() => ({ calendarFocused: focused }));
  }

  onSubmit = (e) => {
    e.preventDefault();

    if (!this.state.description || !this.state.amount) {
      this.setState(() => ({
        error: 'Please provide a description and an amount.'
      }))
    } else {
      this.setState(() => ({
        error: ''
      }))
      this.props.onSubmit({
        description: this.state.description,
        amount: parseFloat(this.state.amount, 10) * 100,
        createdAt: this.state.createdAt.valueOf(),
        note: this.state.note
      });
    }
  };

  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.onSubmit}>
          <input 
            name="description" 
            type="text" 
            placeholder="description" 
            autoFocus 
            value={this.state.description} 
            onChange={this.onTextChange} 
          />
          <input 
            name="amount" 
            type="text" 
            placeholder="amount" 
            value={this.state.amount} 
            onChange={this.onAmountChange} 
          />
          <SingleDatePicker
            date={this.state.createdAt}
            onDateChange={this.onDateChange}
            focused={this.state.calendarFocused}
            onFocusChange={this.onFocusChange} // PropTypes.func.isRequired
            numberOfMonths={1}
            isOutsideRange={() => false}
          />
          <textarea 
            name="note" 
            placeholder="Add a note for your expense (optional)"
            value={this.state.note} 
            onChange={this.onTextChange}  
          />
          <button>{this.props.fromPage} Expense</button>
        </form>
      </div>
    );
  };
};

export default ExpenseForm;