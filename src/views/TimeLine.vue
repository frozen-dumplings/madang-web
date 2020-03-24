<template>
  <div class="container">
    <div class="card u-m-10">
      <header class="card-header">
        <p class="card-header-title">
          Bla bla??
        </p>
      </header>
      <div class="card-content">
        <b-input maxlength="200"
                 :has-counter="false"
                 type="textarea"
                 v-model="message"></b-input>
      </div>
      <footer class="card-footer">
        <b-button type="is-info"
                  expanded
                  @click="publish">Publish!</b-button>
      </footer>
    </div>
    <div v-for="message in messages"
         :key="message.timestamp"
         class="card u-m-10">
      <div class="content">
        {{message.message}}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { Socket } from 'vue-socket.io-extended';

interface Message {
  timestamp: number;
  message: string;
}

@Component
export default class TimeLine extends Vue {
  private message = '';

  private messages: Message[] = [];

  @Socket('message')
  onMessage(message: Message) {
    this.messages.unshift(message);
  }

  publish() {
    this.$socket.client.emit('message', { timestamp: Date.now(), message: this.message });
  }
}
</script>
