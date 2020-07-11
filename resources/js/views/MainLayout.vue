<template>
    <div>

    <v-navigation-drawer
      v-model="drawer"
      app
    :permanent="true"

    :mini-variant.sync="mini"

    >

    <v-list>
       <v-list-item
            v-for="item in items"
            :key="item.title"
            link
          >
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>

    </v-navigation-drawer>



    <v-main>

         <main-content></main-content>

    </v-main>



    <v-footer
      :inset="footer.inset"
      app
    >
      <span class="px-4">&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>

    </div>
</template>

<script>
import MainContent from './MainContent'

  export default {
      components:{
          MainContent
      },
    props: {
      source: String,
      xsOnly: {
        type: Boolean,
        default: true
      }
    },
    data: () => ({
      drawer: null,
      items: [
          { title: 'Dashboard', icon: 'thumb_up' },
          { title: 'Photos', icon: 'image' },
          { title: 'About', icon: 'thumb_down' },
        ],
       footer: {
        inset: false,
      },
    }),

    mounted() {
        console.log('------------------------------------');
        console.log(`Small and Down: ${this.$vuetify.breakpoint.xsOnly}`);
        console.log(`MD and Up: ${this.$vuetify.breakpoint.smAndUp}`);
        console.log('------------------------------------');
    },
    computed: {
        mini() {
            return this.$vuetify.breakpoint.xsOnly;
        },
          notOnMobile() {
            return this.$vuetify.breakpoint.smAndUp
        }
    }

  }
</script>

<style lang="scss" scoped>

</style>
