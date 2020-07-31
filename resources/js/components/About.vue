<template>
    <div class="pt-8 pb-15 main">
        <heading-intro class="introSlot pt-6 mb-12">
            <h2>about</h2>
        </heading-intro>

        <h4  class="text-center">Hi, my name is Robert&nbspRoksela3333</h4>
        <div class="d-flex justify-space-around">
        <blockquote class=" blockquote aboutText">
            I am a web developer well known for my hard work and reliability. I can build a high quality website that will speak for your business electronically. Effective exposure of your strongest qualities, and professional presentation of your company’s image to internet users will boost your business and increase your chances of attracting new customers.
        </blockquote>
        </div>

    </div>
</template>

<script>
import HeadingIntro from '../components/slots/Heading'

    export default {
        components: {
            HeadingIntro
        }
    }
</script>

<style lang="scss" scoped>

h4 {
    font-size: 1.5rem;
}
.aboutText {
    max-width: 800px !important;
}
</style>
