import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { router } from './routes/Routes';
import './index.css'
import {RouterProvider,} from "react-router-dom";

import { Provider } from 'react-redux'
// import{ store} from './redux/store/store.js'
import { store } from './Featured/store/store';

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <Provider store={store}>
     <RouterProvider router={router} />
     </Provider>
    
  </StrictMode>,
)
