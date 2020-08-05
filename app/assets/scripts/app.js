import '../styles/styles.css'
import MobileMenu from './modules/MobileMenu'
import RevealOnScroll from './modules/Reveal0nScroll'
import StickyHeader from './modules/StickyHeader'

let stickyheader = new StickyHeader();

new RevealOnScroll(document.querySelectorAll(".feature-item"), 75)
new RevealOnScroll(document.querySelectorAll(".testimonial"),60)

let mobileMenu = new MobileMenu();

if(module.hot) {
    module.hot.accept()
}
