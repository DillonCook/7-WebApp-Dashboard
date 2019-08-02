const alert = document.querySelector('.alert');

// Fades allows CSS time to fade into background before removing completely
document.querySelector('.close-button').addEventListener('click', () => {
    alert.style.opacity = '0';
    setTimeout(function(){alert.parentNode.removeChild(alert);}, 1000);
});


