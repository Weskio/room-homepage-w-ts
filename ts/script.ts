class MySlider {
    private currentIndex: number = 0;
    private slides: { mobileBackground: string; title: string; description: string; }[] = [
        {
        mobileBackground:'mobile1', 
        title:'Is it working',
        description:"Yes I am working"
    },
    {
        mobileBackground:'mobile2', 
        title:'I see you are working',
        description:"Yes I am working"
    },
    {
        mobileBackground:'mobile3', 
        title:'Keep it up',
        description:"Yes I am working"
    },

    ];

    constructor() {
        this.initEventListeners();
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
            backgroundElement.className = `${this.slides[this.currentIndex].mobileBackground} hero lg:w-[60vw] w-full lg:h-[70vh] h-[70vh] bg-cover bg-center relative`;
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
