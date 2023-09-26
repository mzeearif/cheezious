// bootstrap.js
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// Export an empty object to avoid ES6 module errors
export default function initBootstrap() {
  if (typeof window !== 'undefined') {
    // Ensure the code only runs in the browser
    import('bootstrap/dist/js/bootstrap.bundle.min.js').then(() => {
      // Bootstrap code that requires the DOM can go here
    });
  }
}
