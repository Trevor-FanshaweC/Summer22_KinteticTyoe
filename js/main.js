(() => {
    // grab a ref to the audio
    let track = document.querySelector('audio'),
        startBut = document.querySelector('.start-button');

    function startTextAnim() {
        // start the audio
        track.play();        
        // add some animation classes to the main text animation paths
        let textAnimPaths = document.querySelectorAll('#firstFive > path'),
            tonyImage = document.querySelector('.tony-gun');    

        textAnimPaths.forEach(path => path.classList.add('text-fade'));

        tonyImage.classList.add('zoom-tony');

        // hide the play button
        startBut.classList.add('hidden');
    }

    function setup() {
        // animate the start screen away
        // select the pieces
        let introPieces = document.querySelectorAll("#intro g"),
            tonyImg = document.querySelector('.tony-intro');

        // add the animation class to make them disappear
        introPieces.forEach(piece => piece.classList.add('intro-fade'));

        tonyImg.addEventListener('animationend', startTextAnim);

        // add tony's animation class and move him left
        tonyImg.classList.add('animate-tony');

    }

    startBut.addEventListener('click', setup);
})();