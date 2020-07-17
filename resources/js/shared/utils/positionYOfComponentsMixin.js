export const positionY = {

    mounted() {


    const aboutComponentTop = document.querySelector('#scroll-target-about').offsetTop
    const aboutComponentHeight = document.querySelector('#scroll-target-about').offsetHeight;
    const aboutComponentBottom = aboutComponentTop + aboutComponentHeight
    const aboutComponentObject = {
        top: aboutComponentTop,
        bottom: aboutComponentBottom
    }

    const submitComponentTop = document.querySelector('#scroll-target-submit').offsetTop
    const submitComponentHeight = document.querySelector('#scroll-target-submit').offsetHeight
    const submitComponentBottom = submitComponentTop + submitComponentHeight
    const submitComponentObject = {
        top: submitComponentTop,
        bottom: submitComponentBottom
    }

    const servicesComponentTop = document.querySelector('#scroll-target-services').offsetTop
    const servicesComponentHeight = document.querySelector('#scroll-target-services').offsetHeight
    const servicesComponentBottom = servicesComponentTop + servicesComponentHeight
    const servicesComponentObject = {
        top: servicesComponentTop,
        bottom: servicesComponentBottom
    }


    const likesComponentTop = document.querySelector('#scroll-target-likes').offsetTop
    const likesComponentHeight = document.querySelector('#scroll-target-likes').offsetHeight
    const likesComponentBottom = likesComponentTop + likesComponentHeight
    const likesComponentObject = {
        top: likesComponentTop,
        bottom: likesComponentBottom
    }

    const positionYOfComponents = []
    positionYOfComponents.push(aboutComponentObject, servicesComponentObject, submitComponentObject, likesComponentObject)


    this.$emit('positionYOfElements', positionYOfComponents)

 }
}
