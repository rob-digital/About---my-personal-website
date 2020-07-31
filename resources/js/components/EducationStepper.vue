<template>
   <div class="lightBg pt-4 pb-12">

       <heading-intro class="introSlot pt-8 mb-12">
            <h2>Education</h2>
        </heading-intro>


    <v-container class="educationContainer">

            <v-timeline  dense class="mx-lg-16">
            <v-timeline-item
                v-for="item in items"
                :key="item.school"
                color="accent"
                fill-dot
                left
                small
            >

                <v-card class="elevation-4 rounded-sm">

                    <v-card-title class="title accent mainTitle headline" >{{ item.school }}</v-card-title>
                    <v-card-title class="">{{ item.course1 }}</v-card-title>
                    <v-card-title v-show="item.course2" class="">{{ item.course2 }}</v-card-title>
                    <v-card-title v-show="item.course3" class="">{{ item.course3 }}</v-card-title>
                    <v-card-title v-show="item.achievement" class="font-weight-bold  textAccent--text ">{{ item.achievement }}</v-card-title>

                </v-card>
            </v-timeline-item>



            </v-timeline>
    </v-container>

    </div>
</template>

<script>
import HeadingIntro from '../components/slots/Heading'

   export default {
         components: {
            HeadingIntro
        },
    data () {
      return {
         items: [
                {
                    school: '2019 - Edinburgh Napier University',
                    course1: 'BSC (Hons) Web Design & Development',
                    achievement: 'First Class Honours Degree',
                    color: 'red'
                },
                {
                    school: `2013 - 2016 - Borders College`,
                    course1: '2016 - HNC Interactive Media',
                    course2: '2015 - NC Digital Media',
                    course3: '2014 - Business & Administration',
                    color: 'blue'
                },
                {   school: '2003 - University of Lodz - Poland',
                    course1: 'Marketing & Management',
                    text: 'Being interested in web design & development, I constantly update my knowledge to be up to date with modern standards of web design'
                },
            ],
      }
    },
  }
</script>

<style lang="scss" scoped>
.mainTitle{
    color: white;
}
@media only screen and (min-width: 1904px) {

 .v-timeline-item {
     max-width: 1220px !important;
     margin-left: calc(50% - 610px) !important;
 }

 .v-timeline::before {
     margin-left: calc(50% - 610px) !important;
 }

}
@media only screen and (max-width: 959px) {
    .v-timeline::before, .v-timeline-item   {
        margin-left: -40px;
    }
    .v-card {
        margin-left: -20px;
        max-width: 100%;
    }
}
.v-card{
    margin-right: 5%;
}
</style>
