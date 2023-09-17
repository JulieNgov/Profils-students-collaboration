const categories = document.querySelectorAll('.div-left, .div-right, .div-left > p, .div-right > p');

categories.forEach(category => {
    category.addEventListener('mouseenter', () => {
        category.classList.add('hovered');
    });

    category.addEventListener('mouseleave', () => {
        category.classList.remove('hovered');
    });
});