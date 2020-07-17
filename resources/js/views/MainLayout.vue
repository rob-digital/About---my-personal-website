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
      color="#37474F"


    >


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


  <v-list class="mt-6">
    <v-list-item-group v-model="listPosition"  color="white">
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
    data() {
        return {
        drawer: true,
        listPosition: '',
        currentScroll: null,
        currentPositions:null,
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
    }
    },
     mounted() {
        window.addEventListener('scroll', this.checkScroll)
          if (this.currentScroll >= this.currentPositions[0].top && this.currentScroll <  this.currentPositions[0].bottom) {
                this.listPosition = 0
            } else if(this.currentScroll >= this.currentPositions[1].top && this.currentScroll <  this.currentPositions[1].bottom) {
                this.listPosition = 1
            } else if(this.currentScroll >= this.currentPositions[2].top && this.currentScroll <  this.currentPositions[2].bottom) {
                this.listPosition = 2
            } else if(this.currentScroll >= this.currentPositions[3].top && this.currentScroll <  this.currentPositions[3].bottom) {
                this.listPosition = 3
            }
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
        checkScroll() {

                // const wind = window.pageYOffset
                // const wind = document.documentElement.offsetHeight
                const wind = document.documentElement.scrollTop
                this.currentScroll = wind

                if (this.currentScroll >= this.currentPositions[0].top) {
                    for(var i = 0; i < this.currentPositions.length; i++) {

                        if (this.currentScroll >= this.currentPositions[i].top && this.currentScroll < this.currentPositions[i].bottom) {
                            this.listPosition = i
                        }
                    }
                } else {
                    this.listPosition = ''
                }

        },
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
