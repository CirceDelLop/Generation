import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

/*1. JSX debe tener un solo elemento raíz*/
createRoot(document.getElementById('root')).render(
  <App/> //Tambien se puede poner <App></App> ó App()
);