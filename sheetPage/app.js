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



function printScores()
{
  document.getElementById("HP").value=player.HP;
  document.getElementById("MP").value=player.MP;

  document.getElementById("occupaionSkillScore").value=player.occupaionSkillScore;
  document.getElementById("interestSkillScore").value=player.interestSkillScore;
  document.getElementById("totalpoints").value=parseInt(player.occupaionSkillScore) + parseInt(player.interestSkillScore);
}


document.getElementById("bonusSkillScore").addEventListener("change", function(){document.getElementById("totalpoints").value=parseInt(document.getElementById("bonusSkillScore").value) + parseInt(player.occupaionSkillScore) + parseInt(player.interestSkillScore)});




document.getElementById("input_finished").addEventListener("click",inputCompleted);

console.log(document.querySelectorAll("#input_score"));
/* document.getElementById("characterName").addEventListener("change", function(){player.characterName = document.getElementById("characterName").value;});
*/


document.getElementById("title").addEventListener("click",function(){console.log(player)});

/* document.getElementById("id").addEventListener("change", function(){player.porperty = document.getElementById("id").value;});
 */