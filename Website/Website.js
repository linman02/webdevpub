let huv = document.getElementById("huvud");

let divbackground = document.createElement("div");
divbackground.className = "background";
huv.appendChild(divbackground);

let rex = document.getElementById("trex");
var rexcounter = 0;

let rexChangePicture = function(){


    if(rexcounter == 0){
        rex.src = "https://w7.pngwing.com/pngs/67/652/png-transparent-ark-survival-evolved-velociraptor-dinosaur-tyrannosaurus-rex-dilophosaurus-t-rex-tyrannosaurus-terrestrial-animal-indominus-rex.png";
        rexcounter = 1;
    }
    else{
        rex.src = "https://www.dododex.com/media/creature/rex.png"
        rexcounter = 0;
    }
    

}

rex.addEventListener("click", rexChangePicture);

let spino = document.getElementById("spino")
var spinocounter = 0;
let spinoChangePicture = function(){
    if(spinocounter == 0) {
        spino.src = "https://www.vhv.rs/dpng/d/446-4460730_spinosaurus-download-png-image-spino-png-ark-transparent.png"
        spinocounter = 1;
    }

    else {
        spino.src = "https://www.dododex.com/media/creature/spinosaur.png"
        spinocounter = 0;
    }

}
spino.addEventListener("click", spinoChangePicture);

let dodo = document.getElementById("dodo");
var dodocounter = 0;
let dodoChangePicture = function() {
    if(dodocounter == 0) {
        dodo.src = "http://www.ark-survival.net/files/2015/06/2015-06-16_00003.jpg"
        dodocounter = 1;
    }

    else {
        dodo.src = "https://www.dododex.com/media/creature/dodo.png"
        dodocounter = 0;
    }
}
dodo.addEventListener("click", dodoChangePicture);

let raptor = document.getElementById("raptor");
var raptorcounter = 0;
let raptorChangePicture = function() {
    if(raptorcounter == 0) {
        raptor.src = "https://www.dododex.com/media/creature/raptor.png"
        raptorcounter = 1;
    }

    else {
        raptor.src = "https://www.vhv.rs/dpng/d/451-4512978_ark-arksurvivalevolved-raptor-velociraptor-freetoedit-ark-raptor-transparent.png"
        raptorcounter = 0;
    }
}
raptor.addEventListener("click", raptorChangePicture);

let carno = document.getElementById("carnotaurus");
var carnocounter = 0;
let carnoChangePicture = function() {
    if(carnocounter == 0) {
        carno.src = "https://gamepedia.cursecdn.com/arksurvivalevolved_gamepedia/thumb/f/f5/Carno_PaintRegion1.jpg/400px-Carno_PaintRegion1.jpg"
        carnocounter = 1;
    }
    else {
        carno.src = "https://www.dododex.com/media/creature/carnotaurus.png"
        carnocounter = 0;
    }
}
carno.addEventListener("click", carnoChangePicture);