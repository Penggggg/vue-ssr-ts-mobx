<template>
  <div class="hello">
    <h2>{{ vm.age }}</h2>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import vm from '../store/vm';
import { inject } from '../service/inject';

@inject({ vm })
@Component
export default class About extends Vue {

  private vm!: typeof vm;

  constructor( ) {
    super( );
  }

  mounted( ) {

  }

}
</script>
