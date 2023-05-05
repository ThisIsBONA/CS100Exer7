
let foodList = [];

const newFood = {};



let div = document.createElement('div');
div.classList.add('food-list');

let containerDiv = document.querySelector('.food');

function removeAllChildNodes(parent) {  //removes all child nodes of the parent node given
  while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
  }
}





 //checks if all forms has valid inputs then prints the details of the food in the console log
 //updates the food list
 //sort the food list by the ranks given
 //updates the cards shown in the container
const submitFood = () => {    

  removeAllChildNodes(div);
  const foodNameValue = document.getElementById("foodname").value;
  const descriptionValue = document.getElementById("description").value;
  const imgurlValue = document.getElementById("imgurl").value;
  const rankValue = document.getElementById("rank").value;
  const  regex=/^[0-9]+$/;
  if(foodNameValue == ''){
    alert("Enter food name!");
  }else if(descriptionValue== ''){
    alert("Enter food description!");
  }else if(imgurlValue == ''){
    alert("Enter image url!");
  }else if(rankValue == '' || !rankValue.match(regex)){
    alert("Enter rank as integer!");
  }else{
    console.log("Added new food:");
    console.log("Food name: "+foodNameValue);
    console.log("Food description: "+descriptionValue);
    console.log("Food image URL: "+imgurlValue);
    console.log("Food rank: "+rankValue);
    var newFood = {
      fname: foodNameValue,
      fdes: descriptionValue,
      furl: imgurlValue,
      frank: rankValue
    };

    foodList.push(newFood);
    foodList.sort((a,b) => { return a.frank - b.frank}); //sort list by rank

    for(let i=0; i<foodList.length; i++){
      containerDiv.appendChild(div);
      let html = `<div class="card">
                      <img id="fimg" src="${foodList[i].furl}" alt="">
                  </div>
                  <h3 id="ftitle">${foodList[i].fname}</h3>
                  <p id="fdes">${foodList[i].fdes}</p>
                  <br>
                  <div class="button-div">
                    <button id="delete-button" onClick="deleteFood(this)">Delete</button> 
                  </div>`;
    
      div.insertAdjacentHTML('beforeend', html);
    }
  }
}

//deletes the card
//deletes the food in the food list
function deleteFood(e) {
  child = e.parentElement;
  child.parentElement.remove();
  thisDiv = child.parentElement;
  thisTitle = thisDiv.children[1];

  for(let i=0; i<foodList.length; i++){
    if(thisTitle.innerText == foodList[i].fname){
      foodList.splice(i,1);
    }
  }
}


   