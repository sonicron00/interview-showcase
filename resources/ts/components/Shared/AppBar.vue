<template>
  <div>
    <v-app-bar color="deep-purple accent-4" app clipped-left dense dark>
      <v-toolbar-title>IxDF x Ryan Smith | Q&A Application</v-toolbar-title>
      <v-spacer></v-spacer>
      <a href="https://github.com/sonicron00/inventory-movements-tech-assessment" target=”_blank” style="color:white;">View this app on GitHub</a>
    </v-app-bar>
    <v-navigation-drawer
        app
        clipped
        permanent
    >
      <sidebar-menu :menu="menu" :show-child=child>
        <span slot="dropdown-icon"></span>
      </sidebar-menu>
    </v-navigation-drawer>

  </div>
</template>

<script>
import {SidebarMenu} from 'vue-sidebar-menu'
import 'vue-sidebar-menu/dist/vue-sidebar-menu.css'

export default {
  name: "AppBar",
  components: {SidebarMenu},
  data() {
    return {
      child: true,
      group: null,
      hover: false,
      menu: [
        {
          header: 'Main Navigation',
          hiddenOnCollapse: true
        },
        {
          href: '/',
          title: 'Home',
        },
        {
          title: 'Q & A',
          href: '/new-bonus',
        }
      ]
    }
  },
}
</script>

<style scoped>
.v-toolbar__title {
  font-weight: 900;
  font-size: 27px;
}
</style>