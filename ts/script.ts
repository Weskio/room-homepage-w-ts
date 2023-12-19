class MySlider {
    private currentIndex: number = 0;
    private slides: { mobileBackground: string; title: string; description: string; }[] = [
        {
            mobileBackground: 'mobile1',
            title: 'Discover innovative ways to decorate',
            description: 'We provide unmatched quality, comfort, and style for property owners across the country...'
        },
        {
            mobileBackground: 'mobile2',
            title: 'We are available all across the globe',
            description: 'With stores all over the world, it\'s easy for you to find furniture for your home...'
        },
        {
            mobileBackground: 'mobile3',
            title: 'Manufactured with the best materials',
            description: 'Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.'
        },
        
    ];

    constructor() {
        this.initEventListeners();
        this.updateSlide(); // Initialize the first slide
    }

    private initEventListeners(): void {
        const leftButton = document.querySelector('.button .btn:first-child');
        const rightButton = document.querySelector('.button .btn:last-child');

        leftButton?.addEventListener('click', () => this.previousSlide());
        rightButton?.addEventListener('click', () => this.nextSlide());
    }

    private updateSlide(): void {
        const titleElement = document.getElementById('item-desc-title');
        const descriptionElement = document.getElementById('desc');
        const backgroundElement = document.querySelector('.hero');

        if (titleElement && descriptionElement && backgroundElement) {
            titleElement.textContent = this.slides[this.currentIndex].title;
            descriptionElement.textContent = this.slides[this.currentIndex].description;
            backgroundElement.className = `hero ${this.slides[this.currentIndex].mobileBackground}`;
        }
    }

    public nextSlide(): void {
        this.currentIndex = (this.currentIndex + 1) % this.slides.length;
        this.updateSlide();
    }

    public previousSlide(): void {
        this.currentIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length;
        this.updateSlide();
    }
}

const mySlider = new MySlider();
