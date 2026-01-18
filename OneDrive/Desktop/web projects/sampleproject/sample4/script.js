let tl1 = gsap.timeline();

tl1.from("nav h1,nav ul li a,nav .list button",{
    y:-50,
    opacity:0,
    duration:1,
    delay:1.3,
    stagger:0.15
})

tl1.from(".center-part-left h1",{
    x:-200,
    opacity:0,
    duration:0.7,
})
tl1.from(".center-part-left p",{
    x:-100,
    opacity:0,
    duration:0.7,
})
tl1.from(".center-part-left button",{
    opacity:0,
    duration:0.9,
})
tl1.from(".center-part-right",{
    opacity:0,
    duration:1,
},"=-1")
tl1.from(".center-bottem",{
    transform: "translateX(100%)",
    repeat:-1,
    duration:4,
    ease:"none"
})

let tl2 = gsap.timeline({
    scrollTrigger:{
        trigger:"section.two",
        scroller:"body",
        start:"top 50%",
        end:"top 0",
        scrub:2,
    }
})

tl2.from(".services",{
    x:-400,
    opacity:0,
    duration:0.7,
})
tl2.from(".box.line1.left",{
    x:-300,
    opacity:0,
    duration:1
},"line-1")
tl2.from(".box.line1.right",{
    x:300,
    opacity:0,
    duration:1
},"line-1")

tl2.from(".box.line2.left",{
    x:-300,
    opacity:0,
    duration:1
},"line-2")
tl2.from(".box.line2.right",{
    x:300,
    opacity:0,
    duration:1
},"line-2")

let tl3 = gsap.timeline({
    scrollTrigger:{
        trigger:"section.three",
        scroller:"body",
        start:"top 50%",
        end:"top 0",
        scrub:2,
    }
})

tl3.from(".main-box",{
    opacity:0,
    duration:0.6,
})

let tl4 = gsap.timeline({
    scrollTrigger:{
        trigger:"section.four",
        scroller:"body",
        start:"top 50%",
        end:"top 0",
        scrub:2,
    }
})

tl3.from(".study",{
    x:-300,
    opacity:0,
    duration:0.7,
})
tl3.from(".format-boder-box",{
    opacity:0,
    duration:1
})
tl4.from(".format-boder-box p h4",{
    x:-100,
    opacity:0,
    duration:1
})

let box1 = document.querySelector(".box1");
let box2 = document.querySelector(".box2");
let box3 = document.querySelector(".box3");
let box4 = document.querySelector(".box4");

box1.addEventListener("mouseenter",function(){
    gsap.to(".box1",{
        scale:1.1,
    })
})
box1.addEventListener("mouseleave",function(){
    gsap.to(".box1",{
        scale:1,
    })
})

box2.addEventListener("mouseenter",function(){
    gsap.to(".box2",{
        scale:1.1,
    })
})
box2.addEventListener("mouseleave",function(){
    gsap.to(".box2",{
        scale:1,
    })
})

box3.addEventListener("mouseenter",function(){
    gsap.to(".box3",{
        scale:1.1,
    })
})
box3.addEventListener("mouseleave",function(){
    gsap.to(".box3",{
        scale:1,
    })
})

box4.addEventListener("mouseenter",function(){
    gsap.to(".box4",{
        scale:1.1,
    })
})
box4.addEventListener("mouseleave",function(){
    gsap.to(".box4",{
        scale:1,
    })
})
