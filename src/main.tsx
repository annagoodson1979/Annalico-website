// src/main.tsx

import ReactDOM from 'react-dom/client';
import App from './App';

// This is the root element in your index.html
const rootElement = document.getElementById('root');

// If the element exists, render the App
if (rootElement) {
const root = ReactDOM.createRoot(rootElement);
root.render(<App />);
} else {
console.error('Could not find the #root element in index.html!');
}
