//bold keys audio
let Cbold = new Audio('./boldkeys/' + encodeURIComponent('C#.mp3')); Cbold.load();
let Dbold = new Audio('./boldkeys/' + encodeURIComponent('D#.mp3')); Dbold.load();
let Fbold = new Audio('./boldkeys/' + encodeURIComponent('F#.mp3')); Fbold.load();
let Gbold = new Audio('./boldkeys/' + encodeURIComponent('G#.mp3')); Gbold.load();
let Abold = new Audio('./boldkeys/' + encodeURIComponent('A#.mp3')); Abold.load();
let C2bold = new Audio('./boldkeys/' + encodeURIComponent('C#2.mp3')); C2bold.load();
let D2bold = new Audio('./boldkeys/' + encodeURIComponent('D#2.mp3')); D2bold.load();
let F2bold = new Audio('./boldkeys/' + encodeURIComponent('F#2.mp3')); F2bold.load();
let G2bold = new Audio('./boldkeys/' + encodeURIComponent('G#2.mp3')); G2bold.load();
let A3bold = new Audio('./boldkeys/' + encodeURIComponent('A#3.mp3')); A3bold.load();
let C3bold = new Audio('./boldkeys/' + encodeURIComponent('C#3.mp3')); C3bold.load();
let D3bold = new Audio('./boldkeys/' + encodeURIComponent('D#3.mp3')); D3bold.load();
let F3bold = new Audio('./boldkeys/' + encodeURIComponent('F#3.mp3')); F3bold.load();
let G3bold = new Audio('./boldkeys/' + encodeURIComponent('G#3.mp3')); G3bold.load();
let A4bold = new Audio('./boldkeys/' + encodeURIComponent('A#4.mp3')); A4bold.load();

// White keys audio
let C = new Audio('./keys/C.mp3'); C.load();
let D = new Audio('./keys/D.mp3'); D.load();
let E = new Audio('./keys/E.mp3'); E.load();
let F = new Audio('./keys/F.mp3'); F.load();
let G = new Audio('./keys/G.mp3'); G.load();
let A = new Audio('./keys/A.mp3'); A.load();
let B = new Audio('./keys/B.mp3'); B.load();
let C2 = new Audio('./keys/C2.mp3'); C2.load();
let D2 = new Audio('./keys/D2.mp3'); D2.load();
let E2 = new Audio('./keys/E2.mp3'); E2.load();
let F2 = new Audio('./keys/F2.mp3'); F2.load();
let G2 = new Audio('./keys/G2.mp3'); G2.load();
let A2 = new Audio('./keys/A3.mp3'); A2.load();
let B2 = new Audio('./keys/B3.mp3'); B2.load();
let C3 = new Audio('./keys/C3.mp3'); C3.load();
let D3 = new Audio('./keys/D3.mp3'); D3.load();
let E3 = new Audio('./keys/E3.mp3'); E3.load();
let F3 = new Audio('./keys/F3.mp3'); F3.load();
let G3 = new Audio('./keys/G3.mp3'); G3.load();
let A3 = new Audio('./keys/A4.mp3'); A3.load();
let B3 = new Audio('./keys/B4.mp3'); B3.load();

let container = document.querySelector(".container");

container.addEventListener("click", function(event) {
    let target = event.target;
    if (target.classList.contains('boldkey') || target.closest('.boldkey')) {
        target = target.closest('.boldkey');
        if (target.id === 'one') {
            Cbold.currentTime = 0; Cbold.play();
            target.classList.add("pressed");
        } else if (target.id === 'two') {
            Dbold.currentTime = 0; Dbold.play();
            target.classList.add("pressed");
        } else if (target.id === 'four') {
            Fbold.currentTime = 0; Fbold.play();
            target.classList.add("pressed");
        } else if (target.id === 'five') {
            Gbold.currentTime = 0; Gbold.play();
            target.classList.add("pressed");
        } else if (target.id === 'six') {
            Abold.currentTime = 0; Abold.play();
            target.classList.add("pressed");
        } else if (target.id === 'seven') {
            C2bold.currentTime = 0; C2bold.play();
            target.classList.add("pressed");
        } else if (target.id === 'eight') {
            D2bold.currentTime = 0; D2bold.play();
            target.classList.add("pressed");
        } else if (target.id === 'ten') {
            F2bold.currentTime = 0; F2bold.play();
            target.classList.add("pressed");
        } else if (target.id === 'eleven') {
            G2bold.currentTime = 0; G2bold.play();
            target.classList.add("pressed");
        } else if (target.id === 'twelve') {
            A3bold.currentTime = 0; A3bold.play();
            target.classList.add("pressed");
        } else if (target.id === 'thirteen') {
            C3bold.currentTime = 0; C3bold.play();
            target.classList.add("pressed");
        } else if (target.id === 'fourteen') {
            D3bold.currentTime = 0; D3bold.play();
            target.classList.add("pressed");
        } else if (target.id === 'sixteen') {
            F3bold.currentTime = 0; F3bold.play();
            target.classList.add("pressed");
        } else if (target.id === 'seventeen') {
            G3bold.currentTime = 0; G3bold.play();
            target.classList.add("pressed");
        } else if (target.id === 'eighteen') {
            A4bold.currentTime = 0; A4bold.play();
            target.classList.add("pressed");
        }
        setTimeout(function(){
            target.classList.remove("pressed");
        }, 150)
    } else if (target.classList.contains('keys') || target.closest('.keys')) {
        target = target.closest('.keys');
        if (target.id === 'firstkey') {
            C.currentTime = 0; C.play();
            target.classList.add("press");
            target.style.borderBottom = "none";
        } else if (target.id === 'secondkey') {
            D.currentTime = 0; D.play();
            target.classList.add("press");
        } else if (target.id === 'thirdkey') {
            E.currentTime = 0; E.play();
            target.classList.add("press");
        } else if (target.id === 'fourthkey') {
            F.currentTime = 0; F.play();
            target.classList.add("press");
        } else if (target.id === 'fifthkey') {
            G.currentTime = 0; G.play();
            target.classList.add("press");
        } else if (target.id === 'sixthkey') {
            A.currentTime = 0; A.play();
            target.classList.add("press");
        } else if (target.id === 'seventhkey') {
            B.currentTime = 0; B.play();
            target.classList.add("press");
        } else if (target.id === 'eighthkey') {
            C2.currentTime = 0; C2.play();
            target.classList.add("press");
        } else if (target.id === 'ninthkey') {
            D2.currentTime = 0; D2.play();
            target.classList.add("press");
        } else if (target.id === 'tenthkey') {
            E2.currentTime = 0; E2.play();
            target.classList.add("press");
        } else if (target.id === 'eleventhkey') {
            F2.currentTime = 0; F2.play();
            target.classList.add("press");
        } else if (target.id === 'twelfthkey') {
            G2.currentTime = 0; G2.play();
            target.classList.add("press");
        } else if (target.id === 'thirteenthkey') {
            A2.currentTime = 0; A2.play();
            target.classList.add("press");
        } else if (target.id === 'fourteenthkey') {
            B2.currentTime = 0; B2.play();
            target.classList.add("press");
        } else if (target.id === 'fifteenthkey') {
            C3.currentTime = 0; C3.play();
            target.classList.add("press");
        } else if (target.id === 'sixteenthkey') {
            D3.currentTime = 0; D3.play();
            target.classList.add("press");
        } else if (target.id === 'seventeenthkey') {
            E3.currentTime = 0; E3.play();
            target.classList.add("press");
        } else if (target.id === 'eighteenthkey') {
            F3.currentTime = 0; F3.play();
            target.classList.add("press");
        } else if (target.id === 'ninteenthkey') {
            G3.currentTime = 0; G3.play();
            target.classList.add("press");
        } else if (target.id === 'twentythkey') {
            A3.currentTime = 0; A3.play();
            target.classList.add("press");
        } else if (target.id === 'twentyonekey') {
            B3.currentTime = 0; B3.play();
            target.classList.add("press");
        }
        setTimeout(function(){
            target.classList.remove("press");
        }, 150)
    }
});

document.addEventListener("keydown", function(event) {
    if (event.code === 'KeyA') {
        C.currentTime = 0; C.play();
    } else if (event.code === 'KeyS') {
        D.currentTime = 0; D.play();
    } else if (event.code === 'KeyD') {
        E.currentTime = 0; E.play();
    } else if (event.code === 'KeyF') {
        F.currentTime = 0; F.play();
    } else if (event.code === 'KeyG') {
        G.currentTime = 0; G.play();
    } else if (event.code === 'KeyH') {
        A.currentTime = 0; A.play();
    } else if (event.code === 'KeyJ') {
        B.currentTime = 0; B.play();
    } else if (event.code === 'KeyK') {
        C2.currentTime = 0; C2.play();
    } else if (event.code === 'KeyL') {
        D2.currentTime = 0; D2.play();
    } else if (event.code === 'Semicolon') {
        E2.currentTime = 0; E2.play();
    } else if (event.code === 'Quote') {
        F2.currentTime = 0; F2.play();
    } else if (event.code === 'BracketRight') {
        G2.currentTime = 0; G2.play();
    } else if (event.code === 'Backquote') {
        A2.currentTime = 0; A2.play();
    } else if (event.code === 'Digit1') {
        B2.currentTime = 0; B2.play();
    } else if (event.code === 'Digit2') {
        C3.currentTime = 0; C3.play();
    } else if (event.code === 'Digit3') {
        D3.currentTime = 0; D3.play();
    } else if (event.code === 'Digit4') {
        E3.currentTime = 0; E3.play();
    } else if (event.code === 'Digit5') {
        F3.currentTime = 0; F3.play();
    } else if (event.code === 'Digit6') {
        G3.currentTime = 0; G3.play();
    } else if (event.code === 'Digit7') {
        A3.currentTime = 0; A3.play();
    } else if (event.code === 'Digit8') {
        B3.currentTime = 0; B3.play();
    } else if (event.code === 'KeyW') {
        Cbold.currentTime = 0; Cbold.play();
    } else if (event.code === 'KeyE') {
        Dbold.currentTime = 0; Dbold.play();
    } else if (event.code === 'KeyT') {
        Fbold.currentTime = 0; Fbold.play();
    } else if (event.code === 'KeyY') {
        Gbold.currentTime = 0; Gbold.play();
    } else if (event.code === 'KeyU') {
        Abold.currentTime = 0; Abold.play();
    } else if (event.code === 'KeyO') {
        C2bold.currentTime = 0; C2bold.play();
    } else if (event.code === 'KeyP') {
        D2bold.currentTime = 0; D2bold.play();
    } else if (event.code === 'BracketLeft') {
        F2bold.currentTime = 0; F2bold.play();
    } else if (event.code === 'Minus') {
        G2bold.currentTime = 0; G2bold.play();
    } else if (event.code === 'Backslash') {
        A3bold.currentTime = 0; A3bold.play();
    } else if (event.code === 'KeyZ') {
        Cbold.currentTime = 0; Cbold.play();
    }
});