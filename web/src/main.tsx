import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Root from './components/Root/Root';

<Root />

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Root />
  </StrictMode>,
);
