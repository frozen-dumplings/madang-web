<template>
  <div class="about">
    <h1>This is an about page</h1>
    <b-button type="is-info" @click="clickButton">Cliek Me!</b-button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  sockets: {
    echoResponse(val) {
      console.log(val);
    },
  },
  methods: {
    clickButton() {
      this.$socket.client.emit('echoRequest', 'HELLO~');
    },
  },
});
</script>
