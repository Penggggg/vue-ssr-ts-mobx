<template>
  <div class="home">
    <img src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
  </div>
</template>

<script lang="ts">
import MuseUI from 'muse-ui';
import { HttpPlugin } from '../plugins/http';
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '../components/HelloWorld.vue'; // @ is an alias to /src

Vue.use( MuseUI );
Vue.use( HttpPlugin );

@Component({
  components: {
    HelloWorld,
  },
})
export default class Home extends Vue {}
</script>
<style lang="less">
@import '~muse-ui/dist/muse-ui.css';
@import '~muse-ui-loading/dist/muse-ui-loading.css';
</style>
