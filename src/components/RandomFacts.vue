<template>
  <div>
    <h1>Random Dog Fact</h1>
    <p v-if="loading">Loading...</p>
    <p v-if="error">{{ error }}</p>
    <p v-if="fact">{{ fact }}</p><br>
    <button @click="fetchRandomFact">Get Another Fact</button><br><br>
      
    <AppLink url="https://www.youtube.com/watch?v=0r5U34iB7CU" linkText="Listen to LoFi Music! Halloween Edition" />
    
    <br><br>
    <GoBack />
  
  </div>
</template>

<script>
import AppLink from './AppLink.vue';
import GoBack from './GoBack.vue';

export default {
  components: {
    AppLink,
    GoBack,
  },
  data() {
    return {
      fact: null,
      loading: true,
      error: null,
    };
  },
  methods: {
    async fetchRandomFact() {
      this.loading = true;
      this.error = null;

        try {
            const response = await fetch("https://dog-api.kinduff.com/api/facts", {
                method: "GET",
            });

            if (!response.ok) {
                throw new Error("Failed to fetch fact");
            }

            const data = await response.json();
            this.fact = data.facts[0]; // Adjust this based on actual data structure
        } catch (err) {
            console.error(err);
            this.error = err.message;
        } finally {
            this.loading = false;
        }
    },
},

  mounted() {
    this.fetchRandomFact(); // Fetch a random fact when the component is mounted
  },
};
</script>

<style scoped>
/* Add any styles you want here */
html {
  background-color: antiquewhite;
  text-align: center;
  padding: 20px;
  font-size: large;
}
h2 {
  color: #333;
}

p {
  font-size: 1.2em;
  margin: 20px 0;
}

button {
  padding: 10px 15px;
  background-color: #28a745;
  color: white;
  font-size: large;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #218838;
}
</style>
