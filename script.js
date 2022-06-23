const range = document.querySelector('.range');
const viewsTitle = document.querySelector('.views__title span');
const viewsAmount = document.querySelector('.views__amount span');
const discountButton = document.querySelector('.discount-button');

document.addEventListener('DOMContentLoaded', () => priceRange(range, range.value));
range.addEventListener('input', () => priceRange(range, range.value));

discountButton.addEventListener('click', e => {
    range.classList.toggle('discounted');
    e.currentTarget.classList.toggle('slide');
    priceRange(range, range.value);
});

const priceRange = (range, value) => {
    range.style.backgroundImage = `linear-gradient(to right, hsl(174, 77%, 80%) ${value}%, hsl(223, 50%, 87%) ${value}%)`;

    if(range.classList.contains('discounted')) {
        if(value <= 20) {
            viewsTitle.textContent = '10K';
            viewsAmount.textContent = `$${8 - (8 * .25)}`;
        } else if (value <= 40) {
            viewsTitle.textContent = '50K';
            viewsAmount.textContent = `$${12 - (12 * .25)}`;
        } else if (value <= 60) {
            viewsTitle.textContent = '100K';
            viewsAmount.textContent = `$${16 - (16 * .25)}`;
        } else if (value <= 80) {
            viewsTitle.textContent = '500K';
            viewsAmount.textContent = `$${24 - (24 * .25)}`;
        } else {
            viewsTitle.textContent = '1M';
            viewsAmount.textContent = `$${36 - (36 * .25)}`;
        };
    } else {
        if(value <= 20) {
            viewsTitle.textContent = '10K';
            viewsAmount.textContent = '$8';
        } else if (value <= 40) {
            viewsTitle.textContent = '50K';
            viewsAmount.textContent = '$12';
        } else if (value <= 60) {
            viewsTitle.textContent = '100K';
            viewsAmount.textContent = '$16';
        } else if (value <= 80) {
            viewsTitle.textContent = '500K';
            viewsAmount.textContent = '$24';
        } else {
            viewsTitle.textContent = '1M';
            viewsAmount.textContent = '$36';
        };
    };
};