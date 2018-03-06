"use strict"
let onEnterViewPort = function (entries, observer) {
    entries.forEach(function (entry) {
        if (entry.intersectionRatio !== 0) { entry.target.classList.add("in") }
        else { entry.target.classList.remove("in") }
    })
}
let observer = new IntersectionObserver(onEnterViewPort, {}); let hidemes = document.querySelectorAll(".hideme"); for (let i = 0; i < hidemes.length; ++i) { observer.observe(hidemes[i]) }
window.onscroll = function () { scrollFunc() }; function scrollFunc() {
    let e = document.querySelector("#aboutText"); let offset = { y: 0 }; while (e) { offset.y += e.offsetTop; e = e.offsetParent }
    if (document.documentElement && document.documentElement.scrollTop) { offset.y -= document.documentElement.scrollTop }
    else if (document.body && document.body.scrollTop) { offset.y -= document.body.scrollTop }
    else if (window.pageYOffset) { offset.y -= window.pageYOffset }
    let slideText = document.querySelector("#aboutText"); let fixedText = document.querySelector("#fixed"); let elHeight = slideText.clientHeight; let winHeight = window.innerHeight; let winWidth = window.innerWidth
    let bottom = slideText.getBoundingClientRect().bottom; if (offset.y <= 20 && bottom > 300 && elHeight > winHeight && winWidth >= 670) { fixedText.classList.add("fixed"); slideText.classList.add("slide") } else if (bottom < 300 || offset.y > 20 || elHeight < winHeight) { fixedText.classList.remove("fixed"); slideText.classList.remove("slide") }
}