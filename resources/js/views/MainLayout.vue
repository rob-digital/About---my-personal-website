<template>
    <div >

    <v-navigation-drawer
      v-model="drawer"
      app
      height="100%"
      floating
      :permanent="true"
      width="170"
      :mini-variant.sync="mini"
      color="#263238"
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

        <v-img
              :src="getImageUrl(applyPhotoToDrawerSize)"
        ></v-img>

        <v-list class="mt-6">
            <v-list-item-group v-model="listPosition"  color="white">


            <v-list-item
                    v-for="item in items"
                    :key="item.title"
                    link

                    @click="$vuetify.goTo(`#scroll-target-${item.title}`, options)"

                >

                 <v-tooltip right :disabled="!activateTooltipOnSmallScreen" class="d-flex d-sm-none">
                 <template v-slot:activator="{ on, attrs }">
                    <v-list-item-icon v-bind="attrs" v-on="on">
                    <v-icon>{{ item.icon }}</v-icon>
                    </v-list-item-icon>
                 </template>
                 <span>{{ item.title }}</span>
                 </v-tooltip>

                    <v-list-item-content>
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                </v-list-item-group>
            </v-list>


            <v-row>
            <v-col cols="10" offset="1" class="pa-1 pt-10">

                <v-container v-if="windowHeight > 760" fluid >
                <v-row class="mx-0">
                    <v-col

                    v-for="(item, i) in socialIcons"
                    :key="i"
                    class="d-flex px-1 iconsColumn"
                    :cols="canvasFrameSize"

                    >
                    <a target="_blank" v-html="item" :href="urls[i]" @click.stop>
                        <div >
                        {{ item }}
                        </div>
                        </a>
                    </v-col>
                </v-row>
                </v-container>

              <v-tooltip top class="d-flex d-sm-none">
                 <template v-slot:activator="{ on, attrs }">
                    <v-switch
                      v-if="windowHeight >= 828"
                      class="d-none d-sm-flex pt-8"
                      v-model="switch1"
                      @change="toggleTheme"
                      inset
                      v-on="on"
                      v-bind="attrs"
                    >
                    </v-switch>
                 </template>
                 <span>Toggle Theme</span>
              </v-tooltip>

             </v-col>


             </v-row>

    </v-navigation-drawer>


         <main-content
           class="blue-grey darken-3 main-content"
           :target="targetItem"
           :activateSkillsCircleAnimation="activateSkillsCircleAnimation"
           v-on:positionYOfElements="positionYReceived"
           v-on:positionYOfSkillsCircles="positionYOfSkillsCirclesReceived"
           v-on:activateSnackbar1="activateSnackbar1"
           v-on:activateSnackbar2="activateSnackbar2"
           v-on:activateSnackbar3="activateSnackbar3"
         ></main-content>


        <v-footer
            :inset="footer.inset"
            app
            fixed
            class="blue-grey darken-3"
            >

             <footer-items></footer-items>

        </v-footer>

<!-- //!------- Snackbars -->

            <v-snackbar
                bottom
                v-model="snackbar1"

                >
                {{ snackbarText1 }}

                <template v-slot:action="{ attrs }">
                    <v-btn
                    color="yellow"
                    text
                    class="rounded-0"
                    v-bind="attrs"
                    @click="snackbar1 = false"
                    >
                    Close
                    </v-btn>
                </template>
            </v-snackbar>


           <v-snackbar
                bottom
                v-model="snackbar2"
                :snackbar2="snackbar2"
                >
                {{ snackbarText2 }}
                    <template v-slot:action="{ attrs }">
                        <v-btn
                        color="yellow"
                        text
                        class="rounded-0"
                        v-bind="attrs"
                        @click="snackbar2 = false"

                        >
                        Close
                        </v-btn>
                    </template>
            </v-snackbar>


            <v-snackbar
                bottom
                v-model="snackbar3"
                >
                {{ snackbarText3 }}

                <template v-slot:action="{ attrs }">
                    <v-btn
                    color="yellow"
                    text
                    class="rounded-0"
                    v-bind="attrs"
                    @click="snackbar3 = false"
                    >
                    Close
                    </v-btn>
                </template>
            </v-snackbar>



    </div>
</template>

<script>
import MainContent from './MainContent'
import FooterItems from '../components/FooterItems'


  export default {
      components:{
          MainContent,
          FooterItems
      },
    props: {
      switchControl: Boolean,
      source: String,
      xsOnly: {
        type: Boolean,
        default: true
      },

    },
    data() {
        return {
        drawer: true,
        listPosition: '',
        currentScroll: null,
        currentScrollOnLoad: null,
        currentPositions:null,
        positionYOfSkillsCircels: null,
        activateSkillsCircleAnimation: false,
        urls: [],
        switch1: null,
        activateTooltipOnSmallScreen: false,

        snackbar1: false,
        snackbarText1: 'Message sent succesfully',
        snackbar2: false,
        snackbarText2: 'Thank you for your feedback',
        snackbar3: false,
        snackbarText3: 'Please verify you\'re a human ',


        socialIcons: [
        `<svg width='32' height='19' data-name='twitter' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 77 64'>
            <title>twitter icon</title>
            <path data-name='icon' d='M75.79,7.49a31.22,31.22,0,0,1-5.31,1.77,16.15,16.15,0,0,0,4.37-7h0c.21-.73-.63-1.46-1.25-1h0a32.52,32.52,0,0,1-8.12,3.33c-.21,0-.31.1-.52.1a2.47,2.47,0,0,1-1.45-.52A16.58,16.58,0,0,0,52.47,0a18.82,18.82,0,0,0-5.3.83A16,16,0,0,0,36.34,12.38a17.65,17.65,0,0,0-.41,6.14,1,1,0,0,1-.11.42.81.81,0,0,1-.41.21H35.3a44,44,0,0,1-30-16h0a.87.87,0,0,0-1.45.11h0a16.62,16.62,0,0,0-2.29,8.32,16.44,16.44,0,0,0,5,11.86,13.8,13.8,0,0,1-3.64-1.35h0a.83.83,0,0,0-1.25.73h0a16.67,16.67,0,0,0,9.68,15.3h-.31a13.36,13.36,0,0,1-2.81-.31h0a1,1,0,0,0-1,1.14h0A16.65,16.65,0,0,0,20.32,50.26,30.54,30.54,0,0,1,3.15,55.47H1.27A1.32,1.32,0,0,0,0,56.4a1.39,1.39,0,0,0,.62,1.46A45.46,45.46,0,0,0,23.54,64a45.2,45.2,0,0,0,19.57-4.16A43.72,43.72,0,0,0,57.47,49.12a46.59,46.59,0,0,0,8.74-14.67,45.51,45.51,0,0,0,3-16v-.21a2.94,2.94,0,0,1,1-2.18,29.39,29.39,0,0,0,6.56-7.29h0a.83.83,0,0,0-1-1.25Z' transform='translate(0)' style='fill:#fff'></path>
        </svg>`,
        // `<svg width='19' height='19' data-name='instagram' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'>
        //     <title>instagram icon</title>
        //     <path data-name='icon' d='M21.34,32A10.67,10.67,0,1,1,32,42.67,10.67,10.67,0,0,1,21.34,32m-5.77,0A16.43,16.43,0,1,0,32,15.57,16.42,16.42,0,0,0,15.57,32M45.24,14.92a3.84,3.84,0,1,0,3.84-3.84h0a3.84,3.84,0,0,0-3.84,3.84M19.07,58.05A17.61,17.61,0,0,1,13.13,57a10.08,10.08,0,0,1-3.68-2.4,9.73,9.73,0,0,1-2.39-3.68A17.74,17.74,0,0,1,6,44.93C5.8,41.56,5.77,40.55,5.77,32s0-9.56.18-12.93a17.8,17.8,0,0,1,1.11-5.94A9.85,9.85,0,0,1,9.45,9.45a9.75,9.75,0,0,1,3.68-2.4A17.61,17.61,0,0,1,19.07,6c3.38-.15,4.39-.19,12.93-.19s9.56,0,12.93.19a17.87,17.87,0,0,1,5.94,1.1,10,10,0,0,1,3.69,2.4A9.77,9.77,0,0,1,57,13.13a17.55,17.55,0,0,1,1.1,5.94c.15,3.37.19,4.38.19,12.93s0,9.56-.19,12.93A17.55,17.55,0,0,1,57,50.87,10.59,10.59,0,0,1,50.87,57a17.55,17.55,0,0,1-5.94,1.1c-3.37.15-4.38.18-12.93.18s-9.56,0-12.93-.18M18.81.19A23.59,23.59,0,0,0,11,1.68,15.67,15.67,0,0,0,5.37,5.37,15.67,15.67,0,0,0,1.68,11,23.59,23.59,0,0,0,.19,18.81C0,22.22,0,23.31,0,32s0,9.78.19,13.19A23.59,23.59,0,0,0,1.68,53,16.34,16.34,0,0,0,11,62.32a23.64,23.64,0,0,0,7.77,1.49C22.22,64,23.31,64,32,64s9.78,0,13.19-.19A23.59,23.59,0,0,0,53,62.32,16.34,16.34,0,0,0,62.32,53a23.59,23.59,0,0,0,1.49-7.77C64,41.78,64,40.69,64,32s0-9.78-.19-13.19A23.59,23.59,0,0,0,62.32,11a15.75,15.75,0,0,0-3.69-5.67A15.75,15.75,0,0,0,53,1.68,23.58,23.58,0,0,0,45.2.19C41.78,0,40.69,0,32,0S22.22,0,18.81.19' style='fill:#fff'></path>
        // </svg>` ,
        `<svg xmlns="http://www.w3.org/2000/svg" style="margin-top: -5px" width='29' height='27' xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false"  style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 1024 1024"><path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5C64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9c26.4 39.1 77.9 32.5 104 26c5.7-23.5 17.9-44.5 34.7-60.8c-140.6-25.2-199.2-111-199.2-213c0-49.5 16.3-95 48.3-131.7c-20.4-60.5 1.9-112.3 4.9-120c58.1-5.2 118.5 41.6 123.2 45.3c33-8.9 70.7-13.6 112.9-13.6c42.4 0 80.2 4.9 113.5 13.9c11.3-8.6 67.3-48.8 121.3-43.9c2.9 7.7 24.7 58.3 5.5 118c32.4 36.8 48.9 82.7 48.9 132.3c0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9c177.1-59.7 304.6-227 304.6-424.1c0-247.2-200.4-447.3-447.5-447.3z" fill="#fff"/>
        <title>GitHub icon</title>
        </svg>`,
        `<svg width='22' height='19' data-name='linkedin' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 66.97 64'>
            <title>linkedin icon</title>
            <path data-name='icon' d='M0,7.43A7,7,0,0,1,2.26,2.1,8.31,8.31,0,0,1,8.15,0,8,8,0,0,1,13.9,2.07a7.27,7.27,0,0,1,2.26,5.56A6.79,6.79,0,0,1,14,12.8,8.3,8.3,0,0,1,8,14.93H8A7.9,7.9,0,0,1,2.2,12.8,7.15,7.15,0,0,1,0,7.43ZM.84,64V20.82H15.19V64Zm22.3,0H37.49V39.89A9.35,9.35,0,0,1,38,36.4a9.39,9.39,0,0,1,2.75-3.72,7,7,0,0,1,4.62-1.52q7.24,0,7.24,9.76V64H67V39.24q0-9.57-4.52-14.51a15.43,15.43,0,0,0-12-4.95,14.68,14.68,0,0,0-13,7.18v.13h-.06l.06-.13V20.82H23.14q.13,2.07.13,12.86T23.14,64Z' style='fill:#fff'></path>
        </svg>`

        ],

        items: [
            { title: 'about', icon: 'portrait' },
            { title: 'services', icon: 'build' },
             { title: 'live', icon: 'ondemand_video' },
            { title: 'hobby', icon: 'image' },
            { title: 'education', icon: 'import_contacts' },
            { title: 'contact', icon: 'local_post_office' },

            ],
       footer: {
        inset: true,
        fixed: false
      },
      targetItem: null,
      windowHeight: 0
    }
    },
    created() {
        window.addEventListener('resize', this.handleWindowHeight)
        this.handleWindowHeight()

    },
    destroyed() {
        window.removeEventListener('resize', this.handleWindowHeight)
    },
    mounted() {
        const url1 = `https://twitter.com/RobertRoksela`;
        const url2 = `https://github.com/rob-digital`;
        const url3 = `https://www.linkedin.com/in/robert-roksela-6489311b0/`;
        const urls = []
        urls.push(url1, url2, url3)
        this.urls = urls

        const windowHeight = this.windowHeight
        this.currentScrollOnLoad = document.documentElement.scrollTop


         if (this.currentScrollOnLoad + windowHeight >= this.positionYOfSkillsCircels ) {
            this.activateSkillsCircleAnimation = true
        } else {
             this.activateSkillsCircleAnimation = false
        }



        this.switch1 = this.switchControl
       setTimeout(() => {                              // activate this to remove error in the console

        window.addEventListener('scroll', this.checkScroll)
                  if (this.currentScroll >= this.currentPositions[0].top && this.currentScroll <  this.currentPositions[0].bottom) {
                this.listPosition = 0
            } else if(this.currentScroll >= this.currentPositions[1].top && this.currentScroll <  this.currentPositions[1].bottom) {
                this.listPosition = 1
            } else if(this.currentScroll >= this.currentPositions[2].top && this.currentScroll <  this.currentPositions[2].bottom) {
                this.listPosition = 2
            } else if(this.currentScroll >= this.currentPositions[3].top && this.currentScroll <  this.currentPositions[3].bottom) {
                this.listPosition = 3
            } else if(this.currentScroll >= this.currentPositions[4].top && this.currentScroll <  this.currentPositions[4].bottom) {
                this.listPosition = 4
            } else if(this.currentScroll >= this.currentPositions[5].top && this.currentScroll <  this.currentPositions[5].bottom) {
                this.listPosition = 5
            }

            }, 1000)
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
        positionYOfSkillsCirclesReceived(el) {
            this.positionYOfSkillsCircels = el
        },
        checkScroll() {
                const windowHeight = this.windowHeight
                // const wind = window.pageYOffset
                // const wind = document.documentElement.offsetHeight
                const wind = document.documentElement.scrollTop

                this.currentScroll = wind

                 if (this.currentScroll+ windowHeight >= this.positionYOfSkillsCircels ) {
                    this.activateSkillsCircleAnimation = true
                }

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
         activateSnackbar1() {
            this.snackbar1 = true
        },
        activateSnackbar2() {
            this.snackbar2 = true
        },
        activateSnackbar3() {
            this.snackbar3 = true
        },
        toggleTheme() {
            this.$emit('changeTheme', true)
        },
        handleWindowHeight() {
            this.windowHeight = window.innerHeight
        }

    },
     computed: {

        mini: {
            get() {
                return this.$vuetify.breakpoint.xsOnly
            },
            set() {
                return this.$vuetify.breakpoint.xsOnly
            },

        },
        options () {
            return {
                offset: 0,
                duration: 1000
        }
      },
      canvasFrameSize() {
                switch (this.$vuetify.breakpoint.name) {
                case 'xs': return '12'
                case 'sm': return '4'
                case 'md': return '4'
                case 'lg': return '4'
                case 'xl': return '4'
                }
            },
        applyPhotoToDrawerSize() {
               switch (this.$vuetify.breakpoint.name) {
                case 'xs': return 'me6.jpg'
                case 'sm': return 'me2.jpg'
                case 'md': return 'me2.jpg'
                case 'lg': return 'me2.jpg'
                case 'xl': return 'me2.jpg'
                }
            },
        },
        watch: {
            switchControl: function() {
                if(this.switchControl) {
                   this.switch1 = true
                } else {
                    this.switch1 = false
                }
            },
            canvasFrameSize: function() {
                if(this.canvasFrameSize === '12') {
                 return this.activateTooltipOnSmallScreen = true
              } else {
                return  this.activateTooltipOnSmallScreen = false
              }
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
    .v-list-item__icon  {
        margin: 12px 16px 12px 0px !important;

    }
    .logo{
        margin: 20% 7%;
    }
    .v-list{
        text-transform: uppercase !important;
    }
    .icons {
        padding: 8px !important;
    }
 @media only screen and (max-width: 599px) {
    .icons {
        padding: 0px !important;
    }
     .logo{
        display: none;
    }
}
.iconsColumn {
    justify-content: center;
}
h5{
   text-transform: uppercase;
}
.switchModeDiv{
    width: 100%;
}
  @media only screen and (min-width: 600px) and (max-width: 999px) {
      .v-list-item__icon{
          margin: 8px 16px 8px 0px !important;
      }
      .v-list-item__title{
          font-size: .9rem;
      }
      .v-list-item .v-list-item__subtitle, .v-list-item .v-list-item__title {
          line-height: 1;
      }
      .v-icon.v-icon{
          font-size: 20px
      }
      .v-list-item {
          min-height: 36px;
      }
  }
.v-input input{
      display: none !important;
  }
  .main-content{
      overflow: hidden;
  }
</style>
