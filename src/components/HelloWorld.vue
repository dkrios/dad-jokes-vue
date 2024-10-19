<template>
  <div>
    <h1>Dad Jokes</h1>
    <button @click="fetchJoke">Get a Joke</button>
    <p v-if="joke">{{ joke }}</p>
    <p v-if="error">{{ error }}</p>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      joke: '',
      error: ''
    };
  },
  methods: {
    async fetchJoke() {
      try {
        const response = await axios.get('https://dad-jokes.p.rapidapi.com/random/joke', {
          headers: {
            'x-rapidapi-host': 'dad-jokes.p.rapidapi.com',
            'x-rapidapi-key': '6ec4f9e51cmsh5b8ecf13a1f7a12p145cc6jsndecd63635f59'
          }
        });
        this.joke = response.data.body[0].setup + ' ' + response.data.body[0].punchline;
      } catch (error) {
        this.error = 'Error fetching joke: ' + (error.response ? error.response.data.message : error.message);
      }
    }
  }
};
</script>
