// Pictures from Unsplash
// http://unsplash.com/

$('body').vegas({
    overlay: true,
    transition: 'fade', 
    transitionDuration: 4000,
    delay: 10000,
    color: 'red',
    animation: 'random',
    animationDuration: 20000,
    slides: [
        { src: 'https://relentlessbeats.com/wp-content/uploads/2022/09/Krewella-Sunbar-220409-058-1200x800.jpg',
            video: {
                src:[
                    '/videos/krewella.mp4'
                ],
            loop: true,
            mute: true
            }
        },
        { src: 'https://relentlessbeats.com/wp-content/uploads/2022/09/Krewella-Sunbar-220409-058-1200x800.jpg' },
        { src: 'images/imagen2.jpg' },
        { src: 'images/imagen3.jpg' },
    ]
});