gsap.from("#img",{
    x: 500,
    duration: 2,
    opacity: 0,
    ease: "expo.easeInOut"
})

gsap.from("#contact",{
    x: 400,
    duration: 1.5,
    opacity: 0,
    stagger: 0.5
})

gsap.from("#contact1",{
    x: 400,
    duration: 1.5,
    opacity: 0,
    stagger: 0.5
})

gsap.from("#img1",{
    x: 500,
    duration: 2,
    opacity: 0,
    ease: "expo.easeInOut"
})

gsap.from(".bon",{
    y: 100,
    duration: 3,
    opacity: 0,
    ease: "expo.easeInOut",
    stagger: 60
})

$('.bon').textillate({ in: { effect: 'fadeInUp' },delay: 100 });

gsap.from("#nav1",{
    x: -2000,
    duration: 1,
    delay: 1.5,
    opacity: 0,
    ease: "expo.easeInOut"
})

gsap.from("#nav1 h3",{
    y: 200,
    duration: 1,
    delay: 2,
    opacity: 0,
    ease: "expo.easeInOut"
})

gsap.from("#left #meet1 h2",{
    x: 300,
    duration: 1,
    delay: 2.5,
    opacity: 0,
    ease: "expo.easeInOut"
})

gsap.from("#left #martina h2",{
    y: 200,
    duration: 1,
    delay: 3,
    opacity: 0,
    ease: "expo.easeInOut"
})

gsap.from("#left #almquist h2",{
    y: 200,
    duration: 1,
    delay: 3,
    opacity: 0.3,
    ease: "expo.easeInOut"
})

gsap.from("#star",{
    rotate: "360deg",
    y: 300,
    duration: 2.7,
    opacity: 0,
    ease: "expo.easeInOut",
    delay: 2.5
})

gsap.from("#stylist",{
    y: 100,
    duration: 3,
    opacity: 0,
    ease: "expo.easeInOut",
    delay: 2.5
})

gsap.from("#circle",{
    x: 0,
    duration: 2,
    delay: 3,
    opacity: 0,
    ease: "expo.easeInOut"
})

gsap.from("#right h1",{
    y: 50,
    duration: 3,
    opacity: 0,
    delay: 3.8,
    ease: "expo.easeInOut",
    effect: 'fadeInUp',
    stagger: 0.6
})




