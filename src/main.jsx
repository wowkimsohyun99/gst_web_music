// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import './index.css'
// import App from "./App";
//
// ReactDOM.createRoot(document.getElementById('root')).render(
//     <React.StrictMode>
//         <App/>
//     </React.StrictMode>,
// )

import React from 'react'
import ReactDOM from 'react-dom'
import Router from './components/RouteSwitch'

ReactDOM.render(
    <React.StrictMode>
        <Router />
    </React.StrictMode>,
    document.getElementById('root')
)

