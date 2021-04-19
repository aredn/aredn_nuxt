<template>
  <v-row>
    <v-col class="text-center">
        <h1>Setup</h1>
    </v-col>
  </v-row>
</template>

<script>
export default {
  created() {
    console.log(process.env.NODE_ENV)
    console.log(process.env.apiROOT)
    
  }
}
</script>
