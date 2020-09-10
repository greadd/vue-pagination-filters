<template>
  <v-app app>
    <Topbar @toggle-drawer="$refs.drawer.drawer = !$refs.drawer.drawer" />
    <Sidebar v-if="$route.path === '/'" ref="drawer" />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import Topbar from '@/components/Topbar'
import Sidebar from '@/components/Sidebar'
export default {
  name: 'App',
  components: {
    Sidebar,
    Topbar
  }
}
</script>
