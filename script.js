let current = 'X';
let arr = Array(9).fill(null);

function checkWinner(){
  
  if(
       ( arr[0] !== null && arr[0] == arr[1] && arr[1] == arr[2]) ||
        (arr[3] !== null && arr[3] == arr[4] && arr[4] == arr[5]) ||
        (arr[6] !== null && arr[6] == arr[7] && arr[7] == arr[8]) ||
        (arr[0] !== null && arr[0] == arr[3] && arr[3] == arr[6]) ||
        (arr[1] !== null && arr[1] == arr[4] && arr[4] == arr[7]) ||
        (arr[2] !== null && arr[2] == arr[5] && arr[5] == arr[8]) ||
        (arr[0] !== null && arr[0] == arr[4] && arr[4] == arr[8]) ||
       ( arr[2] !== null && arr[2] == arr[4] && arr[4] == arr[6]) 
       ){
        console.log(current)  
        //  document.write(`Winner is: ${current}`);
        const title=document.querySelector(".title");
        title.innerHTML=(`Winner is: ${current}`);
         return;
       }

       if(!arr.some(e => e===null)){
        // document.write( `Draw !!`);
        document.querySelector(".title").innerHTML="DRAW!!";
        return;
       }
     

}

const res_btn=document.querySelector(".res");
res_btn.addEventListener('click',()=>{
 
  console.log("here");
  location.reload();
//   arr = Array(9).fill(null);
//   current = 'X';
//   document.querySelector(".title").innerHTML="Tic Tac Toe";
//   document.querySelector(".col").innerHTML="";
}
)
function handleclick(el){
 const id = Number(el.id);
 if(arr[id]!== null) return;

 arr[id] = current;
 el.innerText = current;
 checkWinner();
 current = current === 'X' ? 'O' : 'X';
}





