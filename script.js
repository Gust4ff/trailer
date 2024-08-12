document.addEventListener('DOMContentLoaded', () => {
    const video1 = document.getElementById('video1');
    const video2 = document.getElementById('video2');
    const info1 = document.getElementById('info1');
    const info2 = document.getElementById('info2');

    video1.addEventListener('ended', () => {
        video2.classList.add('active');
        video1.classList.remove('active');
    });

    video2.addEventListener('ended', () => {
        video2.classList.remove('active');
        info1.style.display = 'none';
        info2.style.display = 'none';
    });

    video1.classList.add('active');
});
