import React from 'react'
import ChatBot from 'react-simple-chatbot'

const CustomChatbot = props => {
  const config = {
    width: '300px',
    height: '400px',
    floating: true
  }

  const steps = [
    {
      id: 'Greet',
      message: 'Hello, Welcome to Golden Shoes',
      trigger: 'Ask Name'
    },
    {
      id: 'Ask Name',
      message: 'Please type your name...',
      trigger: 'Waiting user input for name'
    },
    {
      id: 'Waiting user input for name',
      user: true,
      trigger: 'Asking options for help'
    },
    {
      id: 'Asking options for help',
      message: 'Hi {previousValue}, please pick an option...',
      trigger: 'Displaying options'
    },
    {
      id: 'Displaying options',
      options: [
        {
          value: 'Order Help',
          label: 'Order help',
          trigger: 'Asking for order number'
        },
        {
          value: 'Product Help',
          label: 'Product help',
          end: true
        }
      ]
    },
    {
      id: 'Asking for order number',
      message: 'Please can I take your order number',
      trigger: 'Waiting for order number'
    },
    {
      id: 'Waiting for order number',
      user: true,
      trigger: 'Checking'
    },
    {
      id: 'Checking',
      message: 'Thanks, let me check my system',
      trigger: 'Done'
    },
    {
      id: 'Done',
      message: 'Have a great day !!',
      end: true
    }
  ]

  return <ChatBot steps={steps} {...config} />
}

export default CustomChatbot
