// src/serviceWorkerRegistration.js
// Default service worker registration script for create-react-app PWA

const register = () => {
    if (navigator.serviceWorker) {
      navigator.serviceWorker
        .register('./service-worker.js')
        .then((registration) => {
          console.log('Service Worker registered with scope: ', registration.scope);
        })
        .catch((error) => {
          console.error('Service Worker registration failed: ', error);
        });
    }
  };
  
  const unregister = () => {
    if (navigator.serviceWorker) {
      navigator.serviceWorker.ready.then((registration) => {
        registration.unregister();
      });
    }
  };
  
  export { register, unregister };
  