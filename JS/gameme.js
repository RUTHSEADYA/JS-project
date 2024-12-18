var numSelected=null;
var titleSelected=null;
var errors=0;
let games=[board1_1,board1_2,board1_3,board2_1,board2_2,board2_3,board3_1,board3_2,board3_3]
var board1_1=[
   "--74916-5",
   "2---6-3-9",
   "-----7-1-",
   "-586----4",
   "--3----9-",
   "--62--187",
   "9-4-7---2",
   "67-83----",
   "81--45---"
];
var board1_2=[
    "-2-5---1-",
    "53---9--8",
    "-7-8-3-64",
    "6--9-17-3",
    "--23--9--",
    "4-3-5---1",
    "95-6-8-3-",
    "2--1---96",
    "-6---4-5-"
 ];
 var board1_3=[
    "--3-25-98",
    "-6--1---4",
    "87--4---5",
    "--79---32",
    "1---58--6",
    "63-2--8--",
    "9---3--61",
    "3---9--8-",
    "74-58-9--"
 ];
 
 
 
var solution_1=[
    "387491625",
    "241568379",
    "569327418",
    "758619234",
    "123784596",
    "496253187",
    "934176852",
    "675832941",
    "812945763"

];
var solution_2=[
    "824567319",
    "536419278",
    "179823564",
    "685941723",
    "712386945",
    "493752681",
    "951678432",
    "247135896",
    "368294157"

];

var solution_3=[
    "413725698",
    "265819374",
    "879643215",
    "587964132",
    "192358746",
    "634271859",
    "928437561",
    "356192487",
    "741586923"

];

var board2_1=[
    "-7---4--1",
    "--4--68--",
    "--35---79",
    "-6--4-1--",
    "--1-3-9--",
    "--78-2-3-",
    "18---32--",
    "--91--7--",
    "7--4---1-"
 ];
 var board2_2=[
     "8---5--23",
     "--7-4-5--",
     "--5--8-9-",
     "-8--2--1-",
     "-6--3--7-",
     "-9-78--5-",
     "-5-3--6--",
     "--9-7-1--",
     "37--1---5"
  ];
  var board2_3=[
     "---3--968",
     "-86---7--",
     "-39-6---1",
     "9-2-4--8-",
     "---------",
     "-4--1-5-9",
     "2---3-69-",
     "--3---21-",
     "657--2---"
  ];
  
  
  
 var solution2_1=[
     "578294361",
     "914376825",
     "623581479",
     "362945187",
     "851637942",
     "497812536",
     "186753294",
     "249168753",
     "735429618"
 
 ];
 var solution2_2=[
     "816957423",
     "927143568",
     "435268791",
     "784529316",
     "562431879",
     "193786254",
     "251394687",
     "649875132",
     "378612945"
 
 ];
 
 var solution2_3=[
     "425371968",
     "186429753",
     "739865421",
     "972543186",
     "561987342",
     "348216579",
     "214738695",
     "893654217",
     "657192834"
 
 ];
 
 var board3_1=[
    "----2---8",
    "2----45--",
    "-4--9--6-",
    "--61-8-2-",
    "--72---9--",
    "-5--3-4--",
    "-8--1--9-2",
    "--59----4",
    "3---7----"
 ]
 var board3_2=[
     "8---6-5--",
     "6----7-1-",
     "---9----6",
     "--6-29--1",
     "--75--4--",
     "3---4-6--",
     "7----2---",
     "-3-1----9",
     "--9-7---5"
  ];
  var board3_3=[
     "-1----8--",
     "37--8---5",
     "-5--1--3-",
     "2---6--5-",
     "-3-----4-",
     "-9---7--2",
     "-8--3--7-",
     "9---4--18",
     "--4----2-"
  ]
 
  
 var solution3_1=[
     "693527148",
     "271864539",
     "548391267",
     "936148725",
     "417256983",
     "852739416",
     "784615392",
     "125983674",
     "369472851"
 
 ];
 var solution3_2=[
     "824567319",
     "536419278",
     "179823564",
     "685941723",
     "712386945",
     "493752681",
     "951678432",
     "247135896",
     "368294157"
 
 ];
 
 var solution3_3=[
     "612573894",
     "379284165",
     "458916237",
     "247368951",
     "835129746",
     "196457382",
     "581632479",
     "923745618",
     "764891523"
 
 ];
 
  




window.onload=function(){
 let level= parseInt(sessionStorage.getItem("level"))

    setGame(level);
startTimer();
restoreGameState();
};

let interval;
let timerCount = 0; // הגדרת משתנה גלובלי עבור ערך הזמן

function startTimer() {
    var timerInterval = 1000;

    interval = setInterval(function () {
        timerCount++;
        if (timerCount >= 900) {
            stopGame();
        }

        var minutes = Math.floor(timerCount / 60);
        var seconds = timerCount % 60;
        var timeDisplay = "טיימר: " + padNumber(minutes) + ":" + padNumber(seconds);
        document.getElementById("timer").innerText = timeDisplay;
    }, timerInterval);

    function padNumber(number) {
        return (number < 10 ? "0" : "") + number;
    }
}

function stopTimer() {
    clearInterval(interval);
    // שמירת ערך הטיימר הנוכחי
    sessionStorage.setItem("timerCount", timerCount);
}

// פונקציה להמשך הטיימר מנקודה שנעצר בה
function resumeTimer() {
    timerCount = parseInt(sessionStorage.getItem("timerCount")) || 0; // קבלת ערך הטיימר השמור, אם קיים
    startTimer();
}



/*window.onload = function() {
    let userName = prompt("Please enter your name:");
    if (userName !== null && userName !== "") {
        sessionStorage.setItem("userName", userName);
        let gameState = JSON.parse(localStorage.getItem('sudokuGameState'));
        if (gameState && gameState.userName === userName) {
            board = gameState.boardState;
            timerCount = gameState.timerCount;
            sessionStorage.setItem("level", gameState.level);
            resumeTimer();
            // Add code to display or initialize the saved game board here
        } else {
            let level = parseInt(sessionStorage.getItem("level"));
            setGame(level);
            startTimer();
        }
    } else {
        alert("Please enter a valid name.");
    }
};

function saveGameState() {
    let userName = sessionStorage.getItem("userName");
    if (userName !== null && userName !== "") {
        let gameState = {
            boardState: board,
            timerCount: timerCount,
            level: parseInt(sessionStorage.getItem("level")),
            userName: userName
        };
        localStorage.setItem('sudokuGameState', JSON.stringify(gameState));
    } else {
        alert("Please enter a valid name.");
    }
}*/

    // פונקציה להוספת אפסים מובילים כאשר יש רק ספרה אחת



    /*window.onload = function() {
        let userName = prompt("Please enter your name:");
        if (userName !== null && userName !== "") {
            sessionStorage.setItem("userName", userName);
            let gameState = JSON.parse(localStorage.getItem('sudokuGameState'));
          
            if (gameState && gameState.userName === userName) {
                let level = parseInt(sessionStorage.getItem("level"));
                setGame(level);
                startTimer();
                //board = gameState.boardState;
                //timerCount = gameState.timerCount;
               // sessionStorage.setItem("level", gameState.level);
               // resumeTimer();
                alert("welcome back");
                // Add code to display or initialize the saved game board here
            } else {
               
                let level = parseInt(sessionStorage.getItem("level"));
                setGame(level);
                startTimer();
                alert("Welcome! It looks like you are new to this game")
            }
        } else {
            alert("Please enter a valid name.");
        }
    };
    
    function saveGameState() {
        let userName = sessionStorage.getItem("userName");
        if (userName !== null && userName !== "") {
            let gameState = {
                boardState: board,
                timerCount: timerCount,
                level: parseInt(sessionStorage.getItem("level")),
                userName: userName
            };
            localStorage.setItem('sudokuGameState', JSON.stringify(gameState));
        } else {
            alert("Please enter a valid name.");
        }
    }*/
    

function stopGame(){
    document.getElementById('timeUpMessage').style.display = 'block';
    clearInterval(interval);

    
}
//digits
function setGame(lev){
    
    for (let i = 1; i<=9; i++) {
        let number =document.createElement("div");
      number.id=i;
      number.innerText=i;
      number.addEventListener("click", selectNumber);
     
      number.classList.add("number");
      document.getElementById("digits").appendChild(number);

        
    }
debugger;
//board
//if(lev==1)

var minIndex = (lev - 1) * 3; // חישוב האינדקס המינימלי במערך המשחקים
var maxIndex = lev* 3 - 1; // חישוב האינדקס המקסימלי במערך המשחקים
var num = Math.floor(Math.random() * (maxIndex - minIndex + 1)) + minIndex;



//var num=Math.floor(Math.random()*((lev*3)-1))+(((lev-1)*3)-1);
switch(num){
    case 0:board= board1_1;
    solution_1=solution_1;
    break;
    case 1:board= board1_2,solution_1=solution_2;
    break;
    case 2:board= board1_3,solution_1=solution_3;
    break;
   
     case 3:board= board2_1,solution_1=solution2_1;
     break;
     case 4:board= board2_2,solution_1=solution2_2;
     break;
     case 5:board= board2_3,solution_1=solution2_3;
     break;

     case 6:board= board3_1,solution_1=solution3_1;
     break;
     case 7:board= board3_2,solution_1=solution3_2;
     break;
     case 8:board= board3_3,solution_1=solution3_3;
     break;
}


for (let r = 0; r< 9; r++) {
   for (let c = 0; c < 9; c++) {
  let tile=document.createElement("div");
  tile.id=r.toString()+ "-" +c.toString();
  if(board[r][c]!="-"){

  tile.innerText=board[r][c];
tile.classList.add("tile-start");}

if(r==2||r==5){
tile.classList.add("border-line");
}
if(c==2||c==5){
    tile.classList.add("vertical-line");
    }

  tile.addEventListener("click",selectTile);
  tile.classList.add("tile");
  document.getElementById("board").append(tile);
    
   }
    
    }


        }
        function selectNumber(){
            if(numSelected!=null){
                numSelected.classList.remove("number_selected");
            }
            numSelected=this;
            numSelected.classList.add("number_selected");
        }

        function selectTile(){
            if(numSelected){

                if(this.innerText!=""){
                    return;
                }

          
            let coords=this.id.split("-");
            let r =parseInt(coords[0]);
            let c =parseInt(coords[1]);

             if(solution_1[r][c]===numSelected.id){
                this.innerText=numSelected.id;
                checkVictory(); // בדיקת ניצחון לאחר שהמשתמש בחר מספר
             }
             else{
             errors+=1;
            document.getElementById("errors").innerText=errors;
                }
             }
        }
        function checkVictory() {
            let boardFilled = true;
            let allTiles = document.querySelectorAll('.tile');
            allTiles.forEach(tile => {
                if (tile.innerText === "") {
                    boardFilled = false;
                }
            });
        
            if (boardFilled) {
                clearInterval(interval);
                document.getElementById('solveAnimationEasy').style.display = 'block';
                clearInterval(timer); // עצירת הטיימר כאשר המשתמש פותר את הסודוקו
            }
        }