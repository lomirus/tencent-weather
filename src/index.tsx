import * as ReactDOM from 'react-dom';

import App from './App'
import './styles/main.css'

const app = document.querySelector("#app");
ReactDOM.render(<App />, app);

// if ('serviceWorker' in navigator) {
//     window.addEventListener('load', () => {
//         navigator.serviceWorker.register('/service-worker.js').then(registration => {
//             console.log('SW registered: ', registration);
//         }).catch(registrationError => {
//             console.log('SW registration failed: ', registrationError);
//         });
//     });
// }
