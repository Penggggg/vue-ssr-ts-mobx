<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>{{ vm.age }}</h2>
    <h3 @click="e => vm.setAge(Math.ceil(Math.random() * 9999))">+</h3>
  </div>
</template>

<script lang="ts">
import vm from '../store/vm';
import { inject } from '../service/inject';
import { Component, Prop, Vue } from 'vue-property-decorator';

@inject({ vm })
@Component
export default class HelloWorld extends Vue {

  private vm!: typeof vm;

  constructor( ) {
    super( );
  }

  @Prop( )
  private msg!: string;

  mounted( ) {
    this._http({
      url: '/api/personal/list'
    }, {
      loadMsg: '加载中...'
    });
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
.decorate-loading {
    left: 50% !important;
    top: 50% !important;
    width: 80px;
    height: 85px;
    border-radius: 10px;
    transform: translate(-50%,-50%);
}
</style>
