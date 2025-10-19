import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

import App3 from './App3.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <App /> */}
    <App3 />
  </StrictMode>
);
