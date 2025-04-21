function writing() {
    let writing = document.getElementById('writing');

    let typewriter = new Typewriter(writing, {
        loop: true
    });
    
    typewriter.typeString('Hello World!')
        .pauseFor(2500)
        .deleteAll()
        .typeString('I love front')
        .pauseFor(2500)
        .deleteChars(5)
        .typeString('<strong>back!</strong>')
        .pauseFor(2500)
        .start();
}


writing();

