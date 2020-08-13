export let positionY = {

   mounted() {

    setTimeout(() => {

    let aboutComponentTop = document.querySelector('#scroll-target-about').offsetTop
    let aboutComponentHeight = document.querySelector('#scroll-target-about').offsetHeight;
    let aboutComponentBottom = aboutComponentTop + aboutComponentHeight
    let aboutComponentObject = {
        top: aboutComponentTop,
        bottom: aboutComponentBottom
    }

    let skillsComponentPositionTop = document.querySelector('#scroll-target-skills').offsetTop


    let servicesComponentTop = document.querySelector('#scroll-target-services').offsetTop
    let servicesComponentHeight = document.querySelector('#scroll-target-services').offsetHeight
    let servicesComponentBottom = servicesComponentTop + servicesComponentHeight
    let servicesComponentObject = {
        top: servicesComponentTop,
        bottom: servicesComponentBottom
    }

    let liveComponentTop = document.querySelector('#scroll-target-live').offsetTop
    let liveComponentHeight = document.querySelector('#scroll-target-live').offsetHeight;
    let liveComponentBottom = liveComponentTop + liveComponentHeight
    let liveComponentObject = {
        top: liveComponentTop,
        bottom: liveComponentBottom
    }

    let hobbyComponentTop = document.querySelector('#scroll-target-hobby').offsetTop
    let hobbyComponentHeight = document.querySelector('#scroll-target-hobby').offsetHeight;
    let hobbyComponentBottom = hobbyComponentTop + hobbyComponentHeight
    let hobbyComponentObject = {
        top: hobbyComponentTop,
        bottom: hobbyComponentBottom
    }

console.log('------------------------------------');
console.log('Height mounted'+hobbyComponentHeight);
console.log('------------------------------------');


    let educationComponentTop = document.querySelector('#scroll-target-education').offsetTop
    let educationComponentHeight = document.querySelector('#scroll-target-education').offsetHeight
    let educationComponentBottom = educationComponentTop + educationComponentHeight
    let educationComponentObject = {
        top: educationComponentTop,
        bottom: educationComponentBottom
    }

    let contactComponentTop    = document.querySelector('#scroll-target-contact').offsetTop
    let contactComponentHeight = document.querySelector('#scroll-target-contact').offsetHeight
    let contactComponentBottom = contactComponentTop + contactComponentHeight
    let contactComponentObject = {
        top: contactComponentTop,
        bottom: contactComponentBottom
    }

    let positionYOfComponents = []
    positionYOfComponents.push(aboutComponentObject, servicesComponentObject, liveComponentObject, hobbyComponentObject, educationComponentObject, contactComponentObject)



    this.$emit('positionYOfElements', positionYOfComponents)
    this.$emit('positionYOfSkillsCircles', skillsComponentPositionTop)

}, 1000);

 }
}
