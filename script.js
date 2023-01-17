const arrows = document.getElementById('arrows');

document.addEventListener('keydown', OnKeyDown);

let arrow_size = 10;
let arrow_array = [];
let arrow_type = ['Arrow-left', 'Arrow-up', 'Arrow-right', 'Arrow-down'];
let current_arrow = 0;

//create array of arrows
function CreateArrowArray(){
    for(let i = 0; i<arrow_size; i++){
        // let arrowTemp = document.createElement('img');
        // arrowTemp.getAttribute('src', arrow-type[getRandomIntInclusive(0, 3)]);
        let randomNumber = getRandomIntInclusive(0, 3)
        arrow_array.push(randomNumber);
    }
}

//create img tags of arrows and append it to main tag.
function DrawArrowArray(){
    for(let i = 0; i<arrow_size; i++){
        let arrowTemp = document.createElement('img');
        arrowTemp.setAttribute('src', arrow_type[arrow_array[i]]+'.jpg');
        arrowTemp.setAttribute('class', 'arrow');
        arrowTemp.setAttribute('id', 'arrow'+i);

        arrows.appendChild(arrowTemp);
    }
}

function GenerateArrows(){
    CreateArrowArray();
    DrawArrowArray();
}

function OnKeyDown(event){
    // event.keyCode -> left :37, up: 38, right: 39, down: 40
    if(CheckInputArrow(current_arrow, event.keyCode)){
        ChangeArrowImgToRed(current_arrow, event.keyCode);
        current_arrow++;
    }else{
        current_arrow = 0;
        ChangeAllArrowToBlack();
    }
}

function ChangeAllArrowToBlack(){
    for(let i = 0; i<arrow_size; i++){
        let arrowTemp = document.getElementById('arrow'+i);
        arrowTemp.setAttribute('src', arrow_type[arrow_array[i]]+'.jpg');
    }
}

function ChangeArrowImgToRed(currArrowIndex, currArrowType){
    let arrowTemp = document.getElementById('arrow'+currArrowIndex);
    arrowTemp.setAttribute('src', arrow_type[currArrowType - Number(37)]+'r.jpg');
}

// check if current arrow and input are same, returns 1 if correct, else return 0;
function CheckInputArrow(currArrow, inputArrow){
    let isInputCorrect = 0;

    if(arrow_array[currArrow]+Number(37) === inputArrow){
        isInputCorrect = 1;
    }

    return isInputCorrect;
}

//randomly generate integer from 0 to 3
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //최댓값도 포함, 최솟값도 포함
  }

  GenerateArrows();