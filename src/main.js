import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Import the router

const app = createApp(App); // Create the Vue app instance
app.use(router); // Use the router instance
app.mount('#app'); // Mount the app to the #app element in your HTML

