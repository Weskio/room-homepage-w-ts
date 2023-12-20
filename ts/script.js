"use strict";
class MobileMenu {
    constructor() {
        this.menu = document.querySelector('.mobile-menu');
        this.shadow = document.querySelector('.shadow');
        this.initEventListeners();
    }
    initEventListeners() {
        var _a;
        // Event listener for opening the menu
        const openButton = document.querySelector('.toggle[alt="mobile menu"]');
        openButton === null || openButton === void 0 ? void 0 : openButton.addEventListener('click', () => this.toggleMenu(true));
        // Event listener for closing the menu
        const closeButton = (_a = this.menu) === null || _a === void 0 ? void 0 : _a.querySelector('.toggle');
        closeButton === null || closeButton === void 0 ? void 0 : closeButton.addEventListener('click', () => this.toggleMenu(false));
    }
    toggleMenu(isOpen) {
        if (this.menu && this.shadow) {
            if (isOpen) {
                this.menu.style.display = 'flex';
                this.shadow.style.display = 'block';
            }
            else {
                this.menu.style.display = 'none';
                this.shadow.style.display = 'none';
            }
        }
    }
}
const mobileMenu = new MobileMenu();
class MySlider {
    constructor() {
        this.currentIndex = 0;
        this.slides = [
            {
                mobileBackground: 'mobile1',
                title: 'Discover innovative ways to decorate',
                description: "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today."
            },
            {
                mobileBackground: 'mobile2',
                title: 'We are available all across the globe',
                description: "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today."
            },
            {
                mobileBackground: 'mobile3',
                title: 'Manufactured with the best materials',
                description: 'Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.'
            },
        ];
        this.initEventListeners();
        this.updateSlide(); // Initialize the first slide
    }
    initEventListeners() {
        const leftButton = document.querySelector('.button .btn:first-child');
        const rightButton = document.querySelector('.button .btn:last-child');
        leftButton === null || leftButton === void 0 ? void 0 : leftButton.addEventListener('click', () => this.previousSlide());
        rightButton === null || rightButton === void 0 ? void 0 : rightButton.addEventListener('click', () => this.nextSlide());
    }
    updateSlide() {
        const titleElement = document.getElementById('item-desc-title');
        const descriptionElement = document.getElementById('desc');
        const backgroundElement = document.querySelector('.hero');
        if (titleElement && descriptionElement && backgroundElement) {
            titleElement.textContent = this.slides[this.currentIndex].title;
            descriptionElement.textContent = this.slides[this.currentIndex].description;
            backgroundElement.className = `hero ${this.slides[this.currentIndex].mobileBackground}`;
        }
    }
    nextSlide() {
        this.currentIndex = (this.currentIndex + 1) % this.slides.length;
        this.updateSlide();
    }
    previousSlide() {
        this.currentIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length;
        this.updateSlide();
    }
}
const mySlider = new MySlider();
