<template>
  <v-app-bar app clipped-left color="primary">
    <v-app-bar-nav-icon
      :disabled="$route.path !== '/'"
      class="white--text mr-4"
      @click.stop="$emit('toggle-drawer')"
    ></v-app-bar-nav-icon>
    <v-btn to="/" tile color="white">
      <v-icon>mdi-cat</v-icon><span class="button-text">Котики</span>
    </v-btn>
    <v-spacer></v-spacer>
    <v-btn to="/create" tile color="white">
      <v-icon>mdi-plus-thick</v-icon
      ><span class="button-text">Добавить товар</span>
    </v-btn>
  </v-app-bar>
</template>

<style scoped>
a {
  text-decoration: none;
}

@media (max-width: 600px) {
  .button-text {
    display: none;
  }
}
</style>
