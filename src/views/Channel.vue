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
        <div>
          <b-button type="is-info"
                    expanded
                    @click="publish">Publish!</b-button>
        </div>
      </div>
    </div>
    <div class="card u-m-10">
      <header class="card-header">
        <p class="card-header-title">
          Channel!
        </p>
      </header>
      <b-field class="card-content">
        <b-input v-model="channel"></b-input>
        <b-button type="is-info"
                  @click="registerChannel">Register!</b-button>
      </b-field>
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
import Message from '../model/message';

@Component
export default class Channel extends Vue {
  private message = '';

  private channel = '';

  private messages: Message[] = [];

  @Socket('channel/message')
  onMessage(message: Message) {
    this.messages.unshift(message);
  }

  publish() {
    this.$socket.client.emit('channel/message', { timestamp: Date.now(), message: this.message });
  }

  private registerChannel() {
    this.$socket.client.emit('channel/register', { channel: this.channel });
  }
}
</script>
