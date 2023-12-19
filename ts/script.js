"use strict";
class MySlider {
    constructor() {
        this.currentIndex = 0;
        this.slides = [
            {
                mobileBackground: 'mobile1',
                title: 'Is it working',
                description: "Yes I am working"
            },
            {
                mobileBackground: 'mobile2',
                title: 'I see you are working',
                description: "Yes I am working"
            },
            {
                mobileBackground: 'mobile3',
                title: 'Keep it up',
                description: "Yes I am working"
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
            backgroundElement.className = `${this.slides[this.currentIndex].mobileBackground} hero lg:w-[60vw] w-full lg:h-[70vh] h-[70vh] bg-cover bg-center relative`;
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
