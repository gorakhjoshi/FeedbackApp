import React from 'react';
import Button from './shared/Button';
import Card from './shared/Card';

function FeedbackForm() {
  const [text, setText] = React.useState('');
  const handleChangeText = (e) => {
    setText(e.target.value);
  };

  return (
    <Card>
      <form>
        <h2>Please type your feedback below.</h2>
        <div className='input-group'>
          <input
            type='text'
            onChange={handleChangeText}
            placeholder='Write your review'
          />
          <Button> Send </Button>
        </div>
      </form>
    </Card>
  );
}

export default FeedbackForm;
