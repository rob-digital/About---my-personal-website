<template>
    <div>

    <v-navigation-drawer
      v-model="drawer"
      app
      :flat="false"
      floating
      :permanent="true"
      width="170"
      :mini-variant.sync="mini"
      color="#263238"
        multiple

    >

    <v-list class="mt-6">
         <v-list-item-group v-model="model"  color="white">
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
         </v-list-item-group>
        </v-list>

    </v-navigation-drawer>





         <main-content :target="targetItem" v-on:positionYOfElements="positionYReceived"></main-content>





    <v-footer
      :inset="footer.inset"
      app
      :fixed="footer.fixed"
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
      model: {
        type: Number,
        require: false
      },
      currentScroll: null,
      currentPositions: null,
      items: [
          { title: 'about', icon: 'portrait' },
          { title: 'services', icon: 'build' },
          { title: 'submit', icon: 'image' },
          { title: 'likes', icon: 'thumb_down' },
        ],
       footer: {
        inset: true,
        fixed: false
      },
      targetItem: null
    }),
     mounted() {
        window.addEventListener('scroll', this.checkScroll)
    },


    methods: {
        targetedListItem(t) {
            this.targetItem = t.title
        },
        getImageUrl(img) {
            return require(`../../assets/images/${img}`)
        },
        positionYReceived(el) {
           this.currentPositions = el

        },
        checkScroll(event) {

                const wind = window.pageYOffset
                this.currentScroll = wind

        }
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
      checkScrollLevel() {

        if (this.currentScroll >= this.currentPositions[0].top ) {
               for(let i = 0; i < this.currentPositions.length; i++) {

                // if(this.currentScroll < this.currentPositions[i].top) {
                //     this.model = 10
                //   }
                if (this.currentScroll >= this.currentPositions[i].top && this.currentScroll <= this.currentPositions[i].bottom) {
                  return   this.model = i
                  }
            }
        } else {
           return this.model = null
        }



    },
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
