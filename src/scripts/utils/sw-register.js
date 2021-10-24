import { Workbox } from 'workbox-window';

const swRegister = async () => {
  if ('serviceWorker' in navigator) {
    const workbox = new Workbox('../sw.js');
    workbox.register();
    console.log('SW Registered');
  }
};

export default swRegister;
