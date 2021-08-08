export let positionY = {

 async  mounted() {

    let skillsCirclesComponentTop = await document.querySelector('#scroll-target-skills').offsetTop
    let skillsCirclesComponentHeight = await document.querySelector('#scroll-target-skills').offsetHeight;
    let skillsCirclesComponentBottom = await skillsCirclesComponentTop + skillsCirclesComponentHeight

    let aboutComponentTop = await document.querySelector('#scroll-target-about').offsetTop
    let aboutComponentHeight = await document.querySelector('#scroll-target-about').offsetHeight;
    let aboutComponentBottom = await aboutComponentTop + aboutComponentHeight
    let aboutComponentObject = {
        top: aboutComponentTop,
        bottom: skillsCirclesComponentBottom
    }

    let servicesComponentTop = await document.querySelector('#scroll-target-services').offsetTop
    let servicesComponentHeight = await document.querySelector('#scroll-target-services').offsetHeight
    let servicesComponentBottom = await servicesComponentTop + servicesComponentHeight
    let servicesComponentObject = {
        top: servicesComponentTop,
        bottom: servicesComponentBottom
    }

    let liveComponentTop = await document.querySelector('#scroll-target-live').offsetTop
    let liveComponentHeight = await document.querySelector('#scroll-target-live').offsetHeight;
    let liveComponentBottom = await liveComponentTop + liveComponentHeight
    let liveComponentObject = {
        top: liveComponentTop,
        bottom: liveComponentBottom
    }

    let hobbyComponentTop = await document.querySelector('#scroll-target-hobby').offsetTop
    let hobbyComponentHeight = await document.querySelector('#scroll-target-hobby').offsetHeight;
    let hobbyComponentBottom = await hobbyComponentTop + hobbyComponentHeight
    let hobbyComponentObject = {
        top: hobbyComponentTop,
        bottom: hobbyComponentBottom
    }


    let educationComponentTop = await document.querySelector('#scroll-target-education').offsetTop
    let educationComponentHeight = await document.querySelector('#scroll-target-education').offsetHeight
    let educationComponentBottom = await educationComponentTop + educationComponentHeight
    let educationComponentObject = {
        top: educationComponentTop,
        bottom: educationComponentBottom
    }

    let contactComponentTop    = await document.querySelector('#scroll-target-contact').offsetTop
    let contactComponentHeight = await document.querySelector('#scroll-target-contact').offsetHeight
    let contactComponentBottom = await contactComponentTop + contactComponentHeight
    let contactComponentObject = {
        top: contactComponentTop,
        bottom: contactComponentBottom
    }

    let positionYOfComponents = []
    positionYOfComponents.push(aboutComponentObject, servicesComponentObject, liveComponentObject, hobbyComponentObject, educationComponentObject, contactComponentObject)



    this.$emit('positionYOfElements', positionYOfComponents)

    let skillsComponentPositionTop = await document.querySelector('#scroll-target-skills').offsetTop
    this.$emit('positionYOfSkillsCircles', skillsComponentPositionTop)

 }
}
