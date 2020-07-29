export const positionY = {


    

   mounted() {

       setTimeout(() => {

    const aboutComponentTop = document.querySelector('#scroll-target-about').offsetTop
    const aboutComponentHeight = document.querySelector('#scroll-target-about').offsetHeight;
    const aboutComponentBottom = aboutComponentTop + aboutComponentHeight
    const aboutComponentObject = {
        top: aboutComponentTop,
        bottom: aboutComponentBottom
    } 

    const skillsComponentPositionTop = document.querySelector('#scroll-target-skills').offsetTop


    const servicesComponentTop = document.querySelector('#scroll-target-services').offsetTop
    const servicesComponentHeight = document.querySelector('#scroll-target-services').offsetHeight
    const servicesComponentBottom = servicesComponentTop + servicesComponentHeight
    const servicesComponentObject = {
        top: servicesComponentTop,
        bottom: servicesComponentBottom
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

    // const hobbyComponentTop = document.querySelector('#scroll-target-hobby').offsetTop
    // const hobbyComponentHeight = document.querySelector('#scroll-target-hobby').offsetHeight
    // const hobbyComponentBottom = hobbyComponentTop + hobbyComponentHeight
    // const hobbyComponentObject = {
    //     top: hobbyComponentTop,
    //     bottom: hobbyComponentBottom
    // }




    const educationComponentTop = document.querySelector('#scroll-target-education').offsetTop
    const educationComponentHeight = document.querySelector('#scroll-target-education').offsetHeight
    const educationComponentBottom = educationComponentTop + educationComponentHeight
    const educationComponentObject = {
        top: educationComponentTop,
        bottom: educationComponentBottom
    }

    const positionYOfComponents = []
    positionYOfComponents.push(aboutComponentObject, servicesComponentObject, hobbyComponentObject, educationComponentObject)



    this.$emit('positionYOfElements', positionYOfComponents) 
    this.$emit('positionYOfSkillsCircles', skillsComponentPositionTop)
   
}, 1000);

 }
}
