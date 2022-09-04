<template>
    <div>
        <v-progress-linear
        height="7"
      indeterminate
      color="cyan"
    ></v-progress-linear>
      <h1>Redirecting to you link...</h1>
      <br>
      <br>
      <v-progress-circular
      :rotate="-90"
      :size="400"
      :width="20"
      :value="value"
      color="primary"
    >
      {{ value }}
    </v-progress-circular>
    <br>
  </div>
  </template>
  <script>
  
  export default {
    name: 'RedirectionView',
    data: () => ({
        interval: {},
        value: 0,
    }),

    beforeDestroy () {
      clearInterval(this.interval)
    },
    mounted () {
      this.interval = setInterval(() => {
        if (this.value === 100) {
          return (this.value = 0)
        }
        this.value += 10
      }, 700)
    },
  }
  
  </script>
  