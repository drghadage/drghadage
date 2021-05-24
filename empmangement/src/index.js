import React from 'react'
import reactDOM from 'react-dom'
import { Provider } from 'react-redux'
import App from './App'
import { crst } from './Componenet/reducer'
import './index.css'
reactDOM.render(

    <Provider store={crst}><App/></Provider>
    
    ,document.getElementById('root'))