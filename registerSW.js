if('serviceWorker' in navigator) {window.addEventListener('load', () => {navigator.serviceWorker.register('/LunchMate/sw.js', { scope: '/LunchMate/' })})}