<template lang='pug'>
  .app
    heading
    transition(name='fade')
      router-view
    footing
</template>

<script>
  import Heading from './components/Heading'
  import Footing from './components/Footing'

  export default {
    components: {
      Heading,
      Footing
    }
  }
</script>

<style lang='scss'>
  @import 'styles/app';
  @import '~assets/style/transitions';

  .app {
    @extend %hides-scrollbars;
    @extend %gradient-background;
    @include xy-grid-container(100%);

    overflow-x: hidden;
    height: 100vh;
    color: from-palette(white);

    @include breakpoint(large) {
      overflow: hidden;
    }
  }
</style>
