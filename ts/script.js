var MySlider = /** @class */ (function () {
    function MySlider() {
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
    MySlider.prototype.initEventListeners = function () {
        var _this = this;
        var leftButton = document.querySelector('.button .btn:first-child');
        var rightButton = document.querySelector('.button .btn:last-child');
        leftButton === null || leftButton === void 0 ? void 0 : leftButton.addEventListener('click', function () { return _this.previousSlide(); });
        rightButton === null || rightButton === void 0 ? void 0 : rightButton.addEventListener('click', function () { return _this.nextSlide(); });
    };
    MySlider.prototype.updateSlide = function () {
        var titleElement = document.getElementById('item-desc-title');
        var descriptionElement = document.getElementById('desc');
        var backgroundElement = document.querySelector('.hero');
        if (titleElement && descriptionElement && backgroundElement) {
            titleElement.textContent = this.slides[this.currentIndex].title;
            descriptionElement.textContent = this.slides[this.currentIndex].description;
            backgroundElement.className = "".concat(this.slides[this.currentIndex].mobileBackground, " hero lg:w-[60vw] w-full lg:h-[70vh] h-[70vh] bg-cover bg-center relative");
        }
    };
    MySlider.prototype.nextSlide = function () {
        this.currentIndex = (this.currentIndex + 1) % this.slides.length;
        this.updateSlide();
    };
    MySlider.prototype.previousSlide = function () {
        this.currentIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length;
        this.updateSlide();
    };
    return MySlider;
}());
var mySlider = new MySlider();
