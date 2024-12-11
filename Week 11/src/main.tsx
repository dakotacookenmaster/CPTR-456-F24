import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { Provider } from './contexts/Number.context.ts'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider value={[1, 2, 3, 4, 5]}>
      <App />
    </Provider>
  </StrictMode>,
)
