<template>
    <div>

    <v-navigation-drawer
      v-model="drawer"
      app
      floating
      :permanent="true"
      width="170"
      :mini-variant.sync="mini"
      color="#263238"
      class="myDrawer"

    >

    <v-list class="mt-6">

        <v-tooltip bottom>
      <template v-slot:activator="{ on, attrs }">
        <v-img
        v-bind="attrs"
          v-on="on"
        class="logo"
        :src="getImageUrl('rrwd-logo-closed-white.svg')"
        ></v-img>
      </template>
      <span>Robert Roksela - Web Development</span>
        </v-tooltip>

       <v-list-item
            v-for="item in items"
            :key="item.title"
            link

            @click="$vuetify.goTo(`#scroll-target-${item.title}`, options)"

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





         <main-content :target="targetItem"></main-content>





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
          { title: 'about', icon: 'portrait' },
          { title: 'services', icon: 'build' },
          { title: 'submit', icon: 'image' },
          { title: 'likes', icon: 'thumb_down' },
        ],
       footer: {
        inset: false,
      },
      targetItem: null
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
        options () {
            return {
                offset: 0,
                duration: 1000
        }
      },
    },
    methods: {
        targetedListItem(t) {
            this.targetItem = t.title
        },
        getImageUrl(img) {
            return require(`../../assets/images/${img}`)
            }
    }
  }
</script>

<style lang="scss" scoped>

// .v-navigation-drawer{
//     border-right: 1px solid red !important;
// }
    .v-list-item__icon > i, .v-list-item__content {
        color: white !important;
    }
    .logo{
        margin: 10% 7%;
    }
    .v-list{
        text-transform: uppercase !important;
    }
</style>
