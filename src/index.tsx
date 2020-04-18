import React from 'react'
import { render } from 'react-dom'
import App from './App'
import 'preset-style/dist/index.css'

const root = document.createElement('div')

render((<App />), root)

document.body.appendChild(root)
