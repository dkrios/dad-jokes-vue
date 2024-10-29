import { createRouter, createWebHistory } from 'vue-router';
import AboutPage from './components/AboutPage.vue';
import ContactPage from './components/ContactPage.vue';
import RandomFacts from './components/RandomFacts.vue'; // Import the new component

const routes = [
  { path: '/about', component: AboutPage },
  { path: '/contact', component: ContactPage },
  { path: '/random-facts', component: RandomFacts }, // Add the route for the new component
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
