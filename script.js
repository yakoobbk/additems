// main variable decleration

let inpElement=document.getElementById("inpElement");
let addItem=document.getElementById("addItem");
let ulList=document.getElementById("ulList");

let inp;
let inpArray=[];


//function to add input into local storage
function setLocal(){
  localStorage.setItem("stdNames",JSON.stringify(inpArray))

}

//function to get items

function getLocal(){
  if(localStorage.getItem("stdNames")){
    inpArray= JSON.parse(localStorage.getItem("stdNames"))
    buildUi();
  
  }
  
}
 
function buildUi(){

   ulList.textContent="";
  //taking single items from array
  inpArray.forEach((item)=>{
     //creating li element in ul

let li=document.createElement("li");
let span=document.createElement("span");
li.appendChild(span);


// input value adding to span in li ul


span.innerText=item;
 ulList.appendChild(li);
inpElement.value="";
inpElement.focus();

// add delete button

let del=document.createElement("button")
 del.classList.add("delBtn")
   del.innerText="Delete"
 li.appendChild(del)

 //add edit button
 let edt=document.createElement("button")
  edt.classList.add("editBtn")
   edt.innerText="Edit"
  li.appendChild(edt)

  
  })


}
// creating function for add items

function addFunction(){


  // taking input value
   
  inp=inpElement.value;
  
    
  if(inp==false){
    alert("enter anythimg")
  }else{

    inpArray.push(inp)
    //set local storage
        setLocal();
    
    //get local atorage
     getLocal();

    
 }

 }

 // creat function for delete items

 function delBtn(event){
   if(event.target.classList[0]==="delBtn"){
      let item=event.target.parentElement;

      item.remove();

     let spnNew= item.querySelector("span");
       let val=spnNew.textContent;
         
     let indexValue =inpArray.indexOf(val);
    
         inpArray.splice(indexValue,1);
         localStorage.setItem("stdNames",JSON.stringify(inpArray))


     
  }
          
   
   
 }

 //creat function for edit items

 function editBtn(event){
 
     if(event.target.classList[0]==="editBtn"){
       let editVal= prompt("enter a new value");

         if(editVal==null){

           alert("you did not enter anything");
         }else{

       //   console.log( `your current input value is ${editVal} are you happy now`);


            let item=event.target.parentElement;
          let spn= item.querySelector("span");
             spn.innerText=editVal;

             if(spn.innerText==""){
                 alert("you enter an empty string")
             }
          };
       
     }
  
 }
  

 // function callback with eventListener

addItem.addEventListener("click",addFunction);

 ulList.addEventListener("click",delBtn);

 ulList.addEventListener("click",editBtn);

 getLocal();