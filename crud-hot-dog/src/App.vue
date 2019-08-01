<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>CRUD</span>
        <span class="font-weight-light">HOT DOG</span>
      </v-toolbar-title>
    </v-app-bar>

    <v-content>
      <Slider></Slider>
    </v-content>
  </v-app>
</template>

<script>
import Slider from './components/Slider';

export default {
  name: 'App',
  components: {
    Slider
  },
  data: () => ({
    //
  }),
};
</script>
