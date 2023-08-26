function init() {
    gsap.registerPlugin(ScrollTrigger);
    const locoScroll = new LocomotiveScroll({
        el: document.querySelector(".main"),
        smooth: true
    });
    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy(".main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
    });

    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    ScrollTrigger.refresh();
}

init();

const csr = document.querySelector(".cursor");
const vidcsr = document.querySelector(".vidcsr");
const main = document.querySelector(".main");
const video = document.querySelector("#vid");

main.addEventListener('mousemove', (e) => {
    csr.style.left = e.x+"px";
    csr.style.top = e.y+"px";
})
video.addEventListener('mouseenter', (e) => {
    vidcsr.style.display = "block";
    csr.style.display = "none";
})

video.addEventListener('mousemove', (e) => {
    vidcsr.style.left = e.x + "px";
    vidcsr.style.top = e.y + "px";
})

video.addEventListener('mouseleave', (e) => {
    vidcsr.style.display = "none";
    csr.style.display = "block";
})

const tl = gsap.timeline();
ScrollTrigger.create({
    trigger: ".page1 h1",
    scroller: ".main",
    markers: false,
    start: "top 30%",
    end: "top 0",
    scrub: 2,
    animation: tl
});

const tl2 = gsap.timeline();
ScrollTrigger.create({
    trigger: ".page1 h1",
    scroller: ".main",
    markers: false,
    start: "top -100%",
    end: "top -130%",
    scrub: 2,
    animation: tl2
})

const tl3 = gsap.timeline();
ScrollTrigger.create({
    trigger: ".page1 h1",
    scroller: ".main",
    markers: false,
    start: "top -280%",
    end: "top -310%",
    scrub: 2,
    animation: tl3
})

tl.to(".page1 h1", {
    x: -100
}, "anim")

tl.to(".page1 h2", {
    x: 100
}, "anim")

tl.to(".page1 video", {
    width: "90%"
}, "anim")

tl2.to(".main", {
    backgroundColor: "white"
})

tl3.to(".main", {
    backgroundColor : "#0F0D0D"
})