import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import constants from './../constants';
import { addTicket } from './../actions';
const { c } = constants;

function NewTicketForm(props){
  let _names = null;
  let _location = null;
  let _issue = null;

  function handleNewTicketFormSubmission(event) {
    const { dispatch } = props;
    event.preventDefault();
    dispatch(addTicket(_names.value, _location.value, _issue.value));
    props.history.push('/');
  }

  return (
    <div>
      <form onSubmit={handleNewTicketFormSubmission}>
        <input
          type='text'
          id='names'
          placeholder='Pair Names'
          ref={(input) => {_names = input;}}/>
        <input
          type='text'
          id='location'
          placeholder='Location'
          ref={(input) => {_location = input;}} />
        <textarea
          id='issue'
          placeholder='Describe your issue.'
          ref={(textarea) => {_issue = textarea;}} />
        <button type='submit'>Help!</button>
      </form>
    </div>
  );
}


export default withRouter(connect()(NewTicketForm));