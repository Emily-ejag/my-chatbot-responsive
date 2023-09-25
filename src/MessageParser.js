// in MessageParser.js
import React from 'react';

const MessageParser = ({ children, actions }) => {
  const parse = (message) => {
    if (message.includes('hello')||message.includes('hi')||message.includes('Hello')||message.includes('Hi'))  {
      actions.handleHello();
    }
    else if(message.includes('reservation')||message.includes('Reservation')) {
      actions.handleQuestion();
    }
    else if(message.includes('customer')||message.includes('dinner')||message.includes('lunch')||message.includes('breackfast')||message.includes('activity')) {
      actions.handleCheckList();
    }
    else if(!isNaN(parseInt(String(message)))) {
      actions.handleNumberGuests(message);
    }
  };

  
  // function handleAfterPlans(message) {
    
  // };

  
  

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          parse: parse,
          actions,
        });
      })}
    </div>
  );
};

// const handleAfterPlans = {
//   myMethod: () => {
//     // Method logic here
//     MessageParser.actions;
//   }
// };


export default MessageParser;