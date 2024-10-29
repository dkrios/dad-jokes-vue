<template>
  <div>
    <a :href="url" target="_blank">{{ linkText }}</a>
  </div>
</template>

<script>
export default {
  props: {
    url: {
      type: String,
      required: true,
    },
    linkText: {
      type: String,
      required: true,
    },
  },
};
</script>
  
  <style scoped>
  /* Optional styling for external links */
  a {
    color: blue;
    text-decoration: underline;
  }
  </style>
  