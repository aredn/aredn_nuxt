<template>
  <div>
    <div class="text-center">
      <h1>Administration</h1>
    </div>
    <div class="text-left">
      <p>
        update firmware<br />
        manage packages <br />
        upload ssh <br />
        download supportdata
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Admin",
  middleware: "authenticated",
  components: {},
  head() {
    return {
      title: this.$store.state.nodename + " " + this.$options.name,
    };
  },
};
</script>
