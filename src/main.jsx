import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { router } from './routes/Routes';
import './index.css'
import {RouterProvider,} from "react-router-dom";
import AuthProvider from './providers/AuthProvider'
import { Provider } from 'react-redux'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { store } from './Featured/store/store';

const queryClient = new QueryClient()
createRoot(document.getElementById('root')).render(
  <StrictMode>
     <Provider store={store}>
     <QueryClientProvider client={queryClient}>
     <AuthProvider>
     <RouterProvider router={router} />
     </AuthProvider>
     </QueryClientProvider>
     </Provider>
    
  </StrictMode>,
)
