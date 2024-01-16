class MobileMenu {
    private menu: HTMLElement | null;
    private shadow: HTMLElement | null;
    
    constructor() {
        this.menu = document.querySelector('.mobile-menu');
        this.shadow = document.querySelector('.shadow');
        this.initEventListeners();
    }

    private initEventListeners(): void {
        // Event listener for opening the menu
        const openButton = document.querySelector('.toggle[alt="mobile menu"]');
        openButton?.addEventListener('click', () => this.toggleMenu(true));

        // Event listener for closing the menu
        const closeButton = this.menu?.querySelector('.toggle');
        closeButton?.addEventListener('click', () => this.toggleMenu(false));
    }

    private toggleMenu(isOpen: boolean): void {
        if (this.menu && this.shadow) {
            if (isOpen) {
                this.menu.style.display = 'flex';
                this.shadow.style.display = 'block';
            } else {
                this.menu.style.display = 'none';
                this.shadow.style.display = 'none';
            }
        }
    }
}

const mobileMenu = new MobileMenu();

class MySlider {
    private currentIndex: number = 0;
    private slides: { mobileBackground: string; title: string; description: string; }[] = [
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

        document.addEventListener('keydown', (event) => this.handleKeyboardInput(event));
  
    }

    private handleKeyboardInput(event: KeyboardEvent): void {
        console.log('called')
        switch(event.key) {
            case 'ArrowRight': // Right arrow key
            console.log(event)
                this.nextSlide();
                break;
            case 'ArrowLeft': // Left arrow key
                this.previousSlide();
                break;
        }
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
 