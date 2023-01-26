import React from 'react';
import App from './routes/App';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('app');
const ReactDom = createRoot(container); // createRoot(container!) if you use TypeScript
ReactDom.render(<App />);