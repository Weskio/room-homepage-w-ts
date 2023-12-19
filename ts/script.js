"use strict";
class MenuToggle {
    constructor() {
        this.initEventListeners();
    }
    initEventListeners() {
        const toggleButtons = document.querySelectorAll('.toggle');
        toggleButtons.forEach(button => {
            button.addEventListener('click', () => this.toggleMenu());
        });
    }
    toggleMenu() {
        const menu = document.querySelector('.desktop-header');
        const shadow = document.querySelector('.shadow');
        menu === null || menu === void 0 ? void 0 : menu.classList.toggle('active');
        shadow === null || shadow === void 0 ? void 0 : shadow.classList.toggle('active');
    }
}
const menuToggle = new MenuToggle();
class MySlider {
    constructor() {
        this.currentIndex = 0;
        this.slides = [
            {
                mobileBackground: 'mobile1',
                title: 'Discover innovative ways to decorate',
                description: "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love"
            },
            {
                mobileBackground: 'mobile2',
                title: 'We are available all across the globe',
                description: "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today."
            },
            {
                mobileBackground: 'mobile3',
                title: 'Manufactured with the best materials',
                description: "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office."
            },
        ];
        this.initEventListeners();
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
            backgroundElement.className = `${this.slides[this.currentIndex].mobileBackground}`;
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
