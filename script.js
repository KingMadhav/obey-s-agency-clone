let now = document.querySelector(".line .now")
let h5timmer = document.querySelector(".line1-part1 h5")
let grow = document.querySelector(".h5")

function loadingAnimation() {
    var tl = gsap.timeline()
    tl.from(".line h1", {
        y: 150,
        stagger: 0.25,
        duration: 0.6,
        delay: 0.5
    }),
    tl.from(".line1-part1,.line h2", {
        opacity: 0,
        onStart: function () {
            h5timer = document.querySelector(".line1-part1 h5"),
            grow = 0,
            setInterval(function () {
                if (grow < 100) {
                    h5timer.innerHTML = grow++
                }
                else {
                    h5timer.innerHTML = grow
                }
            }, 3)
        }
    }),
    tl.to(".line h2", {
        animationName: "loaderanime",
        opacity: 1
    }),

    tl.to(".loader", {
        opacity: 0,
        duration: 0.2,
        delay: 3.2
    }),
    tl.from(".page1", {
        y: 1600,
        delay: 0.2,
        ease: Power4,
        duration: 0.5,
        opacity: 0
    })
}

// loadingAnimation()
document.addEventListener("mousemove",
    function (dets){
        gsap.to(".crsr",{
            left:dets.x,
            top:dets.y,
        })
    
})