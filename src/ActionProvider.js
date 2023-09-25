import React from 'react';

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  const handleHello = () => {
    const botMessage = createChatBotMessage('Hello. Nice to meet you.');

    setState((hello) => ({
      ...hello,
      messages: [...hello.messages, botMessage],
    }));
  };
  const handleQuestion = () => {
    const botReservation = createChatBotMessage('Sure let me help you with your reservation, how many people are invited?');

    setState((reserv) => ({
      ...reserv,
      messages: [...reserv.messages, botReservation],
    }));
  };
   
  const handleCheckList = () => {
    const botCheckList = createChatBotMessage('Sounds good!');
    setState((check) => ({
      ...check,
      messages: [...check.messages, botCheckList],
    }));
  };

  const handleAfterPlans = () => {
    const botAfterPlan = createChatBotMessage('That sounds very cool. please select the goals for the meeting:', {widget:"goals"});
    setState((plan) => ({
      ...plan,
      messages: [...plan.messages, botAfterPlan],
    }));
  };
  const handleAfterGoals = () => {
    const botAfterGoals = createChatBotMessage('Fantastic! One last thing, When do you want to reserve?', {widget:"date"});
    setState((plan) => ({
      ...plan,
      messages: [...plan.messages, botAfterGoals],
    }));
  };
  const handleNumberGuests = (message) => {
    var mes=String(message);
    const botNumberGuests = createChatBotMessage('Got it, '+ mes + ' guests. \n\n Tell me a little bit about the plans you would like to include:', {widget:"plans"});
    setState((message) => ({
      ...message,
      messages: [...message.messages, botNumberGuests],
    }));
  };
  const handleFinal = () => {
    const botFinal = createChatBotMessage('Thank you for choosing us, we have succesfully booked your customized reservation');
    setState((date) => ({
      ...date,
      messages: [...date.messages, botFinal],
    }));
  };

  // Put the handleHello function in the actions object to pass to the MessageParser
  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            handleHello,
            handleQuestion,
            handleCheckList,
            handleNumberGuests,
            handleAfterPlans,
            handleAfterGoals,
            handleFinal,
          },
        });
      })}
    </div>
  );
};



export default ActionProvider;