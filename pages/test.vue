<template>
  <div>
    <div class="text-center">
      <h1>TESTING PAGE</h1>
    </div>
    <div class="text-left">
      <p>user: {{ user }}</p>
      <p>pass: {{ pass }}</p>
      <p>hash: {{ genBasicAuthHash }}</p>
      <p>header: {{ genHeader }}</p>
      <hr />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: "root",
      pass: "1234",
    };
  },
  computed: {
    genBasicAuthHash() {
      return btoa(this.user + ":" + this.pass);
    },
    genHeader() {
      return "Basic " + this.genBasicAuthHash;
    },
  },
};
</script>
