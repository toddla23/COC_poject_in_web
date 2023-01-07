const player = {
  characterName : document.getElementById("characterName").value,
  playerName:document.getElementById("playerName").value,
  characterJob:document.getElementById("characterJob").value,
  characterAge:document.getElementById("characterAge").value,
  characterAge:document.getElementById("characterAge").value,
  characterGender:document.getElementById("characterGender").value,

  STR:document.getElementById("STR").value,
  DEX:document.getElementById("DEX").value,
  POW:document.getElementById("POW").value,
  CON:document.getElementById("CON").value,
  APP:document.getElementById("APP").value,
  EDU:document.getElementById("EDU").value,
  SIZ:document.getElementById("SIZ").value,
  INT:document.getElementById("INT").value,
  LUK:document.getElementById("LUK").value,


  //character:document.getElementById("character").value,

}

document.getElementById("input_finished").addEventListener("click",inputCompleted);
 
function inputCompleted() {
  player.characterName = document.getElementById("characterName").value;
  player.playerName=document.getElementById("playerName").value;
  player.characterJob=document.getElementById("characterJob").value;
  player.characterAge=document.getElementById("characterAge").value;
  player.characterAge=document.getElementById("characterAge").value;
  player.characterGender=document.getElementById("characterGender").value;
  player.STR=document.getElementById("STR").value;
  player.DEX=document.getElementById("DEX").value;
  player.POW=document.getElementById("POW").value;
  player.CON=document.getElementById("CON").value;
  player.APP=document.getElementById("APP").value;
  player.EDU=document.getElementById("EDU").value;
  player.SIZ=document.getElementById("SIZ").value;
  player.INT=document.getElementById("INT").value;
  player.LCK=document.getElementById("LUK").value;
  console.log(player);

  player.HP = Math.floor((parseInt(player.CON)+parseInt(player.SIZ))/10);
  player.Sane = player.POW;
  player.MP = Math.floor(parseInt(player.POW)/5);
  player.occupaionSkillScore = parseInt(player.EDU)*4;
  player.interestSkillScore = parseInt(player.INT)*2;

  printScores();

  console.log(player);
}

//최종점수저장하는곳
let totalpoints=document.getElementById("totalpoints").value;

//HP, MP, 스킬점수 업데이트하는곳
function printScores()
{
  document.getElementById("HP").value=player.HP;
  document.getElementById("MP").value=player.MP;
  document.getElementById("occupaionSkillScore").value=player.occupaionSkillScore;
  document.getElementById("interestSkillScore").value=player.interestSkillScore;
  document.getElementById("totalpoints").value=parseInt(player.occupaionSkillScore) + parseInt(player.interestSkillScore);
}

//점수 토탈해서 보너스점수 들어올떄마다 업데이트
document.getElementById("bonusSkillScore").addEventListener("change", function(){document.getElementById("totalpoints").value=parseInt(document.getElementById("bonusSkillScore").value) + parseInt(player.occupaionSkillScore) + parseInt(player.interestSkillScore);
totalpoints=document.getElementById("totalpoints").value;
});

// functions 배열 만들어서 반복으로 하나씩 이벤트 핸들러 넣어줄거임
const playerFunctions = document.querySelectorAll(".function_table");

// function 하나씩 접근해서 이벤트 핸들러 만들고 점수 감소까지 업데이트
for(const playerFunction of playerFunctions){
  playerFunction.querySelector(".normal").value = parseInt(playerFunction.querySelector(".input_score").value) + parseInt(playerFunction.querySelector(".defult").value);
  playerFunction.querySelector(".hard").value = Math.floor(parseInt(playerFunction.querySelector(".normal").value)/2);
  playerFunction.querySelector(".extreme").value = Math.floor(parseInt(playerFunction.querySelector(".normal").value)/5);

  playerFunction.querySelector(".input_score").addEventListener("change", function(){
    playerFunction.querySelector(".normal").value = parseInt(playerFunction.querySelector(".input_score").value) + parseInt(playerFunction.querySelector(".defult").value);
    playerFunction.querySelector(".hard").value = Math.floor(parseInt(playerFunction.querySelector(".normal").value)/2);
    playerFunction.querySelector(".extreme").value = Math.floor(parseInt(playerFunction.querySelector(".normal").value)/5);
    
    let tempScore = totalpoints; 
    for(const playerFunction of playerFunctions){
      tempScore-=playerFunction.querySelector(".input_score").value;
      console.log(playerFunction.querySelector(".input_score").value);
      console.log(tempScore);
    }
    document.getElementById("totalpoints").value = tempScore;
  })
}








/* document.getElementById("characterName").addEventListener("change", function(){player.characterName = document.getElementById("characterName").value;});
*/


document.getElementById("title").addEventListener("click",function(){console.log(player)});

/* document.getElementById("id").addEventListener("change", function(){player.porperty = document.getElementById("id").value;});
 */