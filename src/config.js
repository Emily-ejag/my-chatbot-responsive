// Config starter code
import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";
import BotAvatar from "./components/BotAvatar/BotAvatar";
// import UserAvatar from "./components/BotUser/BotUser";
import Goals from "./components/Goals/Goals";
import Buttons from "./components/Buttons/Buttons";
import Plans from "./components/Plans/Plans";
import Date from "./components/Date/Date";

const config = {
    initialMessages: [createChatBotMessage('Hi I am Emily, I am here to help you customize your reservation through:', {widget:"buttons"}), createChatBotMessage('Let me know what are your plans')],
    botName: "Emily",
    customStyles: {
        botMessageBox: {
          backgroundColor: '#bababa',
        },
        chatButton: {
          backgroundColor: 'cadetblue',
        },
    },
    customComponents: {
        botAvatar: (props) => <BotAvatar {...props} />,
        // userAvatar: (props) => <UserAvatar {...props} />,
    },
    state:{
        goals: []
    },
    widgets:[
        {
            widgetName: "goals",
            widgetFunc: (props) => <Goals {...props}/>,
            mapStateToProps:["goals"],
        },
        {
            widgetName: "buttons",
            widgetFunc: (props) => <Buttons {...props}/>,
            mapStateToProps:["buttons"],
        },
        {
            widgetName: "plans",
            widgetFunc: (props) => <Plans {...props}/>,
            mapStateToProps:["plans"],

        },
        {
            widgetName: "date",
            widgetFunc: (props) => <Date {...props}/>,
            mapStateToProps:["date"],

        },
    ],
}

export default config