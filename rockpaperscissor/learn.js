let x = 0;
let y = 0;

const CHOICES= document.querySelectorAll(".CHOICE");
const msg = document.querySelector('#msg');

const userpara = document.querySelector('#W');
const comppara = document.querySelector('#y');


const gencompchoice = () => {
    const options = ['rock','paper','scissor'];
    const randomidx=Math.floor(Math.random()*3);
    return options[randomidx];
}
const drawgame = () => { 
    msg.innerText= 'GAME DRAW!!'
    msg.style.backgroundColor = 'PURPLE'; 
}
const showwinner = (userwin,CHOICEid,compchoice) => {
    if(userwin){
        x++;
        userpara.innerText = x;
        msg.innerText = `YOU WON! YOUR ${CHOICEid} beats ${compchoice}`;
        msg.style.backgroundColor = 'GREEN'; 
    }else{
        y++;
        comppara.innerText = y;
        msg.innerText = `YOU LOST! ${compchoice} beats your ${CHOICEid}`;
        msg.style.backgroundColor = 'RED'; 
    }
}

const playgame=(CHOICEid) => {
    console.log('user choice =',CHOICEid);
    const compchoice = gencompchoice();
    console.log('comp choice=',compchoice);

    if(CHOICEid === compchoice){
      drawgame(); 
    }else {
        let userwin = true;
        if(CHOICEid === 'rock'){
           userwin = compchoice ==='paper' ? false:true;
        }
        else if(CHOICEid==='paper'){
            userwin = compchoice ==='scissor'?false:true;

        }else{
            userwin = compchoice ==='rock'?false:true;
        }
        showwinner(userwin,CHOICEid,compchoice);
    }
};

CHOICES.forEach((CHOICE)=>{
    CHOICE.addEventListener("click",()=>{
        const CHOICEid = CHOICE.getAttribute("id");
        playgame(CHOICEid);

    });
});    

          
     
    

