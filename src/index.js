import React from 'react'
import { render } from 'react-dom'
import Icon from './components/Icon'
import Code from './components/Code'
import './assets/css/app.css'
const App = () => {
  return (
    <div className='app'>
      <h3>React Boilerplate</h3>
      <Icon />
      <div className='instructions'>
        <h3 className="flex-row">Happy Coding!!</h3>
        <p className="flex-row">Start by editing the content of <Code>src/index.js</Code> </p>
        <div className="content">
          <h4>Start development server</h4>
          <p className='flex-row'>To start development Server run <Code>npm run dev</Code></p>
        </div>
        <div className="content">
          <h4>Build for deployment</h4>
          <p className='flex-row'>To build Scripts for deployment run <Code>npm run build</Code></p>
          <p className='flex-row'>This will build a <Code>dist</Code> directory in your project which can be used for deployment.</p>
        </div>
      </div>
    </div>
  )
}

render(<App />, document.getElementById('app'))