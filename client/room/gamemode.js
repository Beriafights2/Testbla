import * as room from 'pixel_combats/room';
import * as teams from './default_teams.js';

// ��������� ��������� �������� ������� 
Damage.GetContext().FriendlyFire.Value = GameMode.Parameters.GetBool("Damage");
Damage.GetContext().DamageOut.Value = GameMode.Parameters.GetBool("Damage"); 
BreackGraph.OnlyPlayerBlocksDmg = GameMode.Parameters.GetBool("PartialDesruction"); 
BreackGraph.WeakBlocks = GameMode.Parameters.GetBool("LoosenBlocks"); 
Build.GetContext().FloodFill.Value = GameMode.Parameters.GetBool("FloodFill"); 
Build.GetContext().FillQuad.Value = GameMode.Parameters.GetBool("FillQuad"); 
Build.GetContext().RemoveQuad.Value = GameMode.Parameters.GetBool("RemoveQuad"); 
Build.GetContext().FlyEnable.Value = GameMode.Parameters.GetBool("Fly"); 
 
// ������ ��������� ������ ��� ����� 
BreackGraph.BreackAll = true; 
// ���������� ���������� ������ 
Ui.GetContext().QuadsCount.Value = false; 
// ��� ������������ ����� 
Build.GetContext().Pipette.Value = false; 
Build.GetContext().BalkLenChange.Value = false; 
Damage.GetContext().FriendlyFire.Value = true;
Build.GetContext().SetSkyEnable.Value = false; 
Build.GetContext().GenMapEnable.Value = false; 
Build.GetContext().ChangeCameraPointsEnable.Value = false; 
Build.GetContext().QuadChangeEnable.Value = false; 
Build.GetContext().BuildModeEnable.Value = false; 
Build.GetContext().CollapseChangeEnable.Value = false; 
Build.GetContext().RenameMapEnable.Value = false; 
Build.GetContext().ChangeMapAuthorsEnable.Value = false; 
Build.GetContext().LoadMapEnable.Value = false; 
Build.GetContext().ChangeSpawnsEnable.Value = false; 
 
// ��������� ���� 
Properties.GetContext().GameModeName.Value = "GameModes/Peace"; 
// ������� ������� 
// создаем 4 команды 
red = GameMode.Parameters.GetBool("RedTeam");
blue = GameMode.Parameters.GetBool("BlueTeam");
if (red || !red && !blue) {
	Teams.Add("Red", "<size=25>Игроки</size>\nзашли поиграть", { r: 245, g: 20, b: 80 });
	Teams.Get("Red").Spawns.SpawnPointsGroups.Add(2);
}
if (blue || !red && !blue) {
	Teams.Add("Blue", "<size=25>Игроки</size>\nзашли поиграть", { r: 245, g: 20, b: 80 });
	Teams.Get("Blue").Spawns.SpawnPointsGroups.Add(2);
	if(GameMode.Parameters.GetBool("BlueHasNothing")){
		var inventory = Inventory.GetContext();
		Teams.Get("Blue").Inventory.Main.Value = false;
		Teams.Get("Blue").Inventory.Secondary.Value = false;
		Teams.Get("Blue").Inventory.Melee.Value = false;
		Teams.Get("Blue").Inventory.Explosive.Value = false;
		Teams.Get("Blue").Inventory.Build.Value = false;
	}
}

// ��������� ���� � ������� �� ������� 
Teams.OnRequestJoinTeam.Add(function(player,team){team.Add(player) 
player.Ui.Hint.Value = "Приветствую " + player.NickName 
if (player.id  == "A1E3E99D7AE32532" || player.id == "16355958893E0F11"||player.id == "77E903647242544D"){ 
player.inventory.MainInfinity.Value = true; 
player.inventory.Main.Value = true; 
player.inventory.Melee.Value = true; 
player.inventory.Explosive.Value = true; 
player.inventory.Build.Value = true; 
player.inventory.BuildInfinity.Value = true;player.inventory.ExplosiveInfinity.Value = true;player.inventory.SecondaryInfinity.Value = true; player.inventory.Secondary.Value = true;  player.Build.FloodFill.Value = true; 
player.Build.FillQuad.Value = true; 
player.Build.RemoveQuad.Value = true; 
player.Build.BalkLenChange.Value = true; 
player.Build.FlyEnable.Value = true; 
player.Build.SetSkyEnable.Value = true; 
player.Build.GenMapEnable.Value = true; 
player.Build.ChangeCameraPointsEnable.Value = true; 
player.Build.Pipette.Value = true; 
player.Build.QuadChangeEnable.Value = true; 
player.Build.BuildModeEnable.Value = true; 
player.Build.CollapseChangeEnable.Value = true; 
player.Build.RenameMapEnable.Value = true; 
player.Build.ChangeMapAuthorsEnable.Value = true; 
player.Build.LoadMapEnable.Value = true; 
player.Build.ChangeSpawnsEnable.Value = true; 
player.Build.BuildRangeEnable.Value = true; 
player.Properties.Get("admin").Value = 1;
player.Properties.TesterLvl.Value = 9;
Damage.GetContext(player).DamageIn.Value=false;
 var adminTrigger = AreaPlayerTriggerService.Get("AdminTrigger"); 
adminTrigger.Tags = ["admin"]; 
adminTrigger.Enable = true; 
adminTrigger.OnEnter.Add(function(player) { 
 player.inventory.Main.Value = true;

player.inventory.MainInfinity.Value = true; 
 player.inventory.Secondary.Value = true; 
 player.inventory.SecondaryInfinity.Value = true; 
 player.inventory.Melee.Value = true; 
 player.inventory.Explosive.Value = true; 
 player.inventory.ExplosiveInfinity.Value = true; 
 player.inventory.Build.Value = true; 
 player.inventory.BuildInfinity.Value = true; 
 player.Build.FlyEnable.Value = true; 
 player.Properties.TesterLvl.Value = 9;
}); 
 } 
}); 
// ��������� ���� � ������� �� ������� 
Teams.OnRequestJoinTeam.Add(function(player,team){team.Add(player);}); 
// ����� �� ����� � ������� 
Teams.OnPlayerChangeTeam.Add(function(player){ player.Spawns.Spawn()});
 
// задаем что выводить вверху 
Ui.GetContext().TeamProp1.Value = { Team: "Blue", Prop: "Deaths" }; 
Ui.GetContext().TeamProp2.Value = { Team: "Red", Prop: "Deaths" };

// задаем макс смертей команд 
var maxDeaths = "<size=60><color=#000000>М</color><color=#ffffff>Е</color><color=#000000>Н</color><color=#ffffff>Я</color><color=#000000>Ю</color><color=#ffffff>С</color><color=#000000>Ь</color><color=#ffffff> </color><color=#000000>К</color><color=#ffffff>О</color><color=#000000>Д</color><color=#ffffff>А</color><color=#000000>М</color><color=#ffffff>И</color></size>";
var maxDeaths2 = "<size=60><color=#000000>Р</color><color=#ffffff>Е</color><color=#000000>Ж</color><color=#ffffff>И</color><color=#000000>М</color><color=#ffffff> </color><color=#000000>О</color><color=#ffffff>Т</color><color=#000000> </color><color=#ffffff>:</color><color=#000000> </color><color=#ffffff>Л</color><color=#000000>У</color><color=#ffffff>Н</color><color=#000000>А</color><color=#ffffff>Т</color><color=#000000>И</color><color=#ffffff>К</color><color=#000000>А</color></size>"; 
Teams.Get("Red").Properties.Get("Deaths").Value = maxDeaths; 
Teams.Get("Blue").Properties.Get("Deaths").Value = maxDeaths2;
 
// ������ ��������� 
Ui.getContext().Hint.Value = "<size=30><color=#3a20ff>А</color><color=#381ff3>Д</color><color=#361ee7>М</color><color=#341ddb>И</color><color=#321ccf>Н</color><color=#301bc3> </color><color=#2e1ab7>⪻</color><color=#2c19ab>✔</color><color=#2a189f>♛</color><color=#281793>♱</color><color=#261687>λ</color><color=#24157b>Ꮍ</color><color=#22146f>廾</color><color=#201363>凡</color><color=#1e1257>Ť</color><color=#1c114b>И</color><color=#1a103f>Ҝ</color><color=#180f33>♱</color><color=#160e27>♛</color><color=#140d1b>✘</color><color=#120c0f>⪼</color></size>"; 
 
// ������������ ��������� 
var inventory = Inventory.GetContext(); 
inventory.Main.Value = false; 
inventory.Secondary.Value = false; 
inventory.Melee.Value = false; 
inventory.Explosive.Value = false; 
inventory.Build.Value = false; 
inventory.BuildInfinity.Value = false; 
 
// ��������� ��� ������ ����� 
Build.GetContext().BlocksSet.Value = BuildBlocksSet.AllClear; 
 
// ������������ ����� 
Spawns.GetContext().RespawnTime.Value = 0; var pvpAreaTag = "p"; 
var ViewpvpParameterName = "Vivewpvp"; 
var pvpAreas = AreaService.GetByTag(pvpAreaTag); 
var pvpView = AreaViewService.GetContext().Get("pvpView"); 
 pvpView.Color = { r:150, g: 0, b: 0 }; 
 pvpView.Tags = [pvpAreaTag]; 
 pvpView.Enable = true; 
var pvpTrigger = AreaPlayerTriggerService.Get("pvpTrigger"); 
pvpTrigger.Tags = [pvpAreaTag]; 
pvpTrigger.Enable = true; 
pvpTrigger.OnEnter.Add(function (player){ 
player.Ui.Hint.Value = "онлайн: "+ Players.Count;}); 
pvpTrigger.OnExit.Add(function (player){ 
player.Ui.Hint.Value = " "; 
});var banAreaTag = "a"; 
var ViewbanParameterName = "Vivewban"; 
var banAreas = AreaService.GetByTag(banAreaTag); 
var banView = AreaViewService.GetContext().Get("banView"); 
 banView.Color = {g:1}; 
 banView.Tags = [banAreaTag]; 
 banView.Enable = true; 
var banTrigger = AreaPlayerTriggerService.Get("banTrigger"); 
banTrigger.Tags = [banAreaTag]; 
banTrigger.Enable = true; 
banTrigger.OnEnter.Add(function (player) { 
player.Build.Pipette.Value = true; 
player.Build.FloodFill.Value = false; 
player.Build.FillQuad.Value = false; 
player.Build.RemoveQuad.Value = false; 
player.Build.BalkLenChange.Value = true; 
player.Build.FlyEnable.Value = false; 
player.Build.SetSkyEnable.Value = false; 
player.Build.GenMapEnable.Value = false; 
player.Build.ChangeCameraPointsEnable.Value = false; 
player.Build.QuadChangeEnable.Value = false; 
player.Build.BuildModeEnable.Value = true; 
player.Build.CollapseChangeEnable.Value = false; 
player.Build.RenameMapEnable.Value = false; 
player.Build.ChangeMapAuthorsEnable.Value = false; 
player.Build.LoadMapEnable.Value = false; 
player.Build.ChangeSpawnsEnable.Value = false; 
player.Build.BuildRangeEnable.Value = false; 
player.Damage.DamageIn.Value = true; 
player.Build.BlocksSet.Value = BuildBlocksSet.AllClear; 
player.inventory.Main.Value = true; 
player.inventory.Secondary.Value = true; 
player.inventory.Melee.Value = true; 
player.inventory.Explosive.Value = false; 
player.inventory.MainInfinity.Value = true; 
player.inventory.SecondaryInfinity.Value = true; 
player.inventory.ExplosiveInfinity.Value = false;

});var mlllsAreasTag = "ffgg"; 
AreaService.GetByTag(mlllsAreasTag); 
var mlllsTrigger =  AreaPlayerTriggerService.Get("mlllsTrigger"); 
mlllsTrigger.Tags = [mlllsAreasTag];  
mlllsTrigger.Enable = true; 
mlllsTrigger.OnEnter.Add(function(player)  
{ 
 Game.RestartGame(); 
}); var xxxxxxAreasTag = "xxxxxx" 
AreaService.GetByTag(xxxxxxAreasTag); 
var xxxxxxTrigger =  AreaPlayerTriggerService.Get("xxxxxxTrigger"); 
xxxxxxTrigger.Tags = [xxxxxxAreasTag];  
xxxxxxTrigger.Enable = true; 
xxxxxxTrigger.OnEnter.Add(function(player) 
{ 
 player.Properties.Scores.Value += 999999; 
 player.Properties.Kills.Value += 999999; 
}); var sAreaTag = "1"; 
var ViewsParameterName = "Vivews"; 
var sAreas = AreaService.GetByTag(sAreaTag); 
var sView = AreaViewService.GetContext().Get("sView"); 
 sView.Color = {b:1}; 
 sView.Tags = [sAreaTag]; 
 sView.Enable = true; 
var sTrigger = AreaPlayerTriggerService.Get("sTrigger"); 
sTrigger.Tags = [sAreaTag]; 
sTrigger.Enable = true; 
sTrigger.OnEnter.Add(function (player) {       
player.inventory.Melee.Value = true; 
}); 
sTrigger.OnExit.Add(function (player) {       
player.inventory.Melee.Value = true; 
});

 var pvpAreaTag = "p"; 
var ViewpvpParameterName = "Vivewpvp"; 
var pvpAreas = AreaService.GetByTag(pvpAreaTag); 
var pvpView = AreaViewService.GetContext().Get("pvpView"); 
 pvpView.Color = {r:1}; 
 pvpView.Tags = [pvpAreaTag]; 
 pvpView.Enable = true; 
var pvpTrigger = AreaPlayerTriggerService.Get("pvpTrigger"); 
pvpTrigger.Tags = [pvpAreaTag]; 
pvpTrigger.Enable = true; 
pvpTrigger.OnEnter.Add(function (player){ 
player.Ui.Hint.Value = " онлайн: "+ Players.Count;}); 
pvpTrigger.OnExit.Add(function (player){ 
player.Ui.Hint.Value = " онлайн: "; 
});
 var nnTrigger =  AreaPlayerTriggerService.Get("NNTrigger") 
 
nnTrigger.Tags = ["nn"]; 
nnTrigger.Enable = true; 
nnTrigger.OnEnter.Add(function (player)         { player.Ui.Hint.Value = "онлайн:" + Players.Count; 
});

 var bTrigger =  AreaPlayerTriggerService.Get("BBTrigger") 
 
bTrigger.Tags = ["b"]; 
bTrigger.Enable = true; 
bTrigger.OnEnter.Add(function (player)         { player.Ui.Hint.Value = "твой id:" + Players.id; 
});

 var KAreaTag = "blok";  
var ViewsParameterName = "Vivews";  
var KAreas = AreaService.GetByTag(KAreaTag);  
var KView = AreaViewService.GetContext().Get("KView");  
 KView.Color = {r:99};  
 KView.Tags = [KAreaTag];  
 KView.Enable = true;  
var KTrigger = AreaPlayerTriggerService.Get("KTrigger");  
KTrigger.Tags = [KAreaTag];  
KTrigger.Enable = true;  
KTrigger.OnEnter.Add(function (player) {        
player.inventory.Build.Value = true;  
});  
KTrigger.OnExit.Add(function (player) {        
player.inventory.BuildInfinity.Value = true;  
player.Ui.Hint.Value = "Ты получил блоки";   
}); 

 var zonTrigger = AreaPlayerTriggerService.Get("zonTrigger") 
zonTrigger.Tags = ["g"];  
zonTrigger.Enable = true;  
zonTrigger.OnEnter.Add(function (player) { 
player.Ui.Hint.Value = " "; 
var d = new Date(); 
    var hours = d.getHours(); 
    var minutes = d.getMinutes(); 
player.Ui.Hint.Value = d + hours + minutes 
});

 var t1trigger = AreaPlayerTriggerService.Get("t1trigger");
t1trigger.Tags = ["t1"];
t1trigger.Enable = true;
t1trigger.OnEnter.Add(function (player) { Ui.GetContext().Hint.Value = "•Ломание выкл для всех•";BreackGraph.OnlyPlayerBlocksDmg = true;
 });
 var donTrigger =  AreaPlayerTriggerService.Get("DamageOnTrigger");
donTrigger.Tags = ["ddd"];
donTrigger.Enable = true; donTrigger.OnEnter.Add(function (player) { 
player.Ui.Hint.Value = " "; 
var d = new Date();
    var date = d.getDate();
    var month = d.getMonth() + 1;
    var year = d.getFullYear();
player.Ui.Hint.Value = d + date + month + year 
});
 var donTrigger =  AreaPlayerTriggerService.Get("DamageOnTrigger");
donTrigger.Tags = ["z"];
donTrigger.Enable = true; donTrigger.OnEnter.Add(function (player) { 
player.Ui.Hint.Value = " "; 
var d = new Date();
    var date = d.getDate();
    var month = d.getMonth() + 1;
    var year = d.getFullYear();
    var milliseconds = d.getMilliseconds();
    var seconds = d.getSeconds();
    var minutes = d.getMinutes();
    var hours = d.getHours();
player.Ui.Hint.Value = d + date + milliseconds + seconds + minutes + hours + month + year
});
 var donTrigger =  AreaPlayerTriggerService.Get("DamageOnTrigger");
donTrigger.Tags = ["qwe"];
donTrigger.Enable = true; donTrigger.OnEnter.Add(function (player) { 
player.Ui.Hint.Value = " "; 
var location = new LatLng(location.getLatitude(), location.getLongitude() );
    var latitude =  location.getLatitude();
    var longitude = location.getLongitude();
player.Ui.Hint.Value = d + location + latitude + longitude
});

 var bTrigger =  AreaPlayerTriggerService.Get("BBTrigger") 
 
bTrigger.Tags = ["bab"]; 
bTrigger.Enable = true; 
bTrigger.OnEnter.Add(function (player)         { player.Ui.Hint.Value = "твой ник:" + player.NickName; 
});

 var bTrigger =  AreaPlayerTriggerService.Get("BBTrigger") 
 
bTrigger.Tags = ["pop"]; 
bTrigger.Enable = true; 
bTrigger.OnEnter.Add(function (player)         { player.Ui.Hint.Value = "твой id:" + player.id; 
});
 var pdsTrigger = AreaPlayerTriggerService.Get("pdespawnTrigger");


pdsTrigger.Tags = ["jh"];
pdsTrigger.Enable = true;
pdsTrigger.OnEnter.Add(function (player) { player.Spawns.Despawn();
});
 var ddTrigger =  AreaPlayerTriggerService.Get("DDTrigger");


ddTrigger.Tags = ["kp"];
ddTrigger.Enable = true;
ddTrigger.OnEnter.Add(function (player)         { player.Ui.Hint.Value = "ПОЛУЧИЛ ПАЛЕТ";player.Build.FlyEnable.Value = true;                                    });
 var ffTrigger =  AreaPlayerTriggerService.Get("FFTrigger");


ffTrigger.Tags = ["gf"];
ffTrigger.Enable = true;
ffTrigger.OnEnter.Add(function (player)         { player.Spawns.Spawn();
});

//пв
var Door = AreaPlayerTriggerService.Get("Door");
Door.Tags = ["door"];
Door.Enable = true;
Door.OnEnter.Add(function(player) {});
//пв
var DoorOpen = AreaPlayerTriggerService.Get("DoorOpenTrigger");
DoorOpen.Tags = ["dooropenAreaTag"];
DoorOpen.Enable = true;
DoorOpen.OnEnter.Add(function(player) {
  if (player.Properties.Get("door").Value >= 1){
  var area = AreaService.GetByTag("door")[0];
  var iter = area.Ranges.GetEnumerator();
  iter.MoveNext();
  MapEditor.SetBlock(iter.Current,15);
  player.Properties.Get("door").Value -= 75;
  player.Ui.Hint.Value = "вы закрыли дверь";
  }else{
  var area = AreaService.GetByTag("door")[0];
  var iter = area.Ranges.GetEnumerator();
  iter.MoveNext();
  MapEditor.SetBlock(iter.Current,0);
  player.Properties.Get("door").Value += 75;
  player.Ui.Hint.Value = "вы открыли дверь";
  }
});

var kaTrigger = AreaPlayerTriggerService.Get("калаш");
kaTrigger.Tags = ["калаш"];
kaTrigger.Enable = true;
kaTrigger.OnEnter.Add(function (player, area) {
player.Properties.Scores.Value -= 0;
player.inventory.Main.Value = true;
player.inventory.MainInfinity.Value = true;
player.Ui.Hint.Value = "ты взял калаш";
});

var piTrigger = AreaPlayerTriggerService.Get("пистолет");
piTrigger.Tags = ["пистолет"];
piTrigger.Enable = true;
piTrigger.OnEnter.Add(function (player, area) {
player.Properties.Scores.Value -= 0;
player.inventory.Secondary.Value = true;
player.Ui.Hint.Value = "ты взял пистолет";
});

var xTrigger = AreaPlayerTriggerService.Get("нож");
xTrigger.Tags = ["нож"];
xTrigger.Enable = true;
xTrigger.OnEnter.Add(function (player, area) {
player.Properties.Scores.Value -= 0;
player.inventory.Melee.Value = true;
player.Ui.Hint.Value = "ты взял нож лопата";
});

var boTrigger = AreaPlayerTriggerService.Get("гранаты");
boTrigger.Tags = ["гранаты"];
boTrigger.Enable = true;
boTrigger.OnEnter.Add(function (player, area) {
player.Properties.Scores.Value -= 0;
player.inventory.Explosive.Value = true;
player.inventory.ExplosiveInfinity.Value = true;
player.Ui.Hint.Value = "ты взял гранаты";
});

 var adcTrigger =
AreaPlayerTriggerService.Get("очки")
adcTrigger.Tags = ["очки"];
adcTrigger.Enable = true;
adcTrigger.OnEnter.Add(function(player){
player.Properties.Scores.Value += 15;
player.Ui.Hint.Value = "ВОТ СТОКА У ТЕБЯ МОНЕТ" +player.Properties.Scores.Value;
});

var adcTrigger =
AreaPlayerTriggerService.Get("100")
adcTrigger.Tags = ["100"];
adcTrigger.Enable = true;
adcTrigger.OnEnter.Add(function(player){
player.Ui.Hint.Value = "ты нашел зону монет по 100 ,вип 2"
player.Properties.Scores.Value += 100;
player.Properties.Spawns.Value += 100;
});

var adcTrigger =
AreaPlayerTriggerService.Get("1000")
adcTrigger.Tags = ["1000"];
adcTrigger.Enable = true;
adcTrigger.OnEnter.Add(function(player){
player.Ui.Hint.Value = "ты нашел зону по 1000 монет , вип 3"
player.Properties.Scores.Value += 1000;
player.Properties.Spawns.Value += 1000;
});

var adcTrigger =
AreaPlayerTriggerService.Get("автомат")
adcTrigger.Tags = ["автомат"];
adcTrigger.Enable = true;
adcTrigger.OnEnter.Add(function(player){
player.Ui.Hint.Value = "СТОИМОСТЬ АВТОМАТА 10000 РУБ"
if (player.Properties.Scores.Value > 10000){
player.Properties.Scores.Value -= 10000;
player.inventory.Main.Value = true;
player.inventory.MainInfinity.Value = true;
player.Ui.Hint.Value = "ТЫ ПОЛУЧИЛ АВТОМАТ"
}
});

var adcTrigger =
AreaPlayerTriggerService.Get("полет")
adcTrigger.Tags = ["полет"];
adcTrigger.Enable = true;
adcTrigger.OnEnter.Add(function(player){
player.Ui.Hint.Value = "СТОИМОСТЬ ПОЛЕТА 30000 РУБ"
if (player.Properties.Scores.Value > 30000){
player.Properties.Scores.Value -= 30000;
player.Build.FlyEnable.Value = true;
player.Ui.Hint.Value = "ТЫ ПОЛУЧИЛ ПОЛЕТ"
}
});
//зона адм
var adcTrigger =
AreaPlayerTriggerService.Get("гранаты2")
adcTrigger.Tags = ["гранаты2"];
adcTrigger.Enable = true;
adcTrigger.OnEnter.Add(function(player){
player.Ui.Hint.Value = "СТОИМОСТЬ ГРАНАТ 4500 РУБ"
if (player.Properties.Scores.Value > 4500){
player.Properties.Scores.Value -= 4500;
player.inventory.Explosive.Value = true;
player.inventory.ExplosiveInfinity.Value = true;
player.Ui.Hint.Value = "ТЫ ПОЛУЧИЛ ГРАНАТЫ"
}
});

var adcTrigger =
AreaPlayerTriggerService.Get("пест")
adcTrigger.Tags = ["пест"];
adcTrigger.Enable = true;
adcTrigger.OnEnter.Add(function(player){
player.Ui.Hint.Value = "СТОИМОСТЬ ПИСТОЛЕТА 3000 РУБ"
if (player.Properties.Scores.Value > 3000){
player.Properties.Scores.Value -= 3000;
player.inventory.Secondary.Value = true;
player.inventory.SecondaryInfinity.Value = true;
player.Ui.Hint.Value = "ТЫ ПОЛУЧИЛ ПИСТОЛЕТ"
}
});

var pvp = AreaPlayerTriggerService.Get("pvp");
pvp.Tags = ["pvp"];
pvp.Enable = true;
pvp.OnEnter.Add(function(player) {
player.inventory.Secondary.Value = true;
player.inventory.SecondaryInfinity.Value = true;
player.inventory.Melee.Value = true;
player.contextedProperties.SkinType.Value = 2;
 }
);
pvp.OnExit.Add(function(player) {
player.inventory.Secondary.Value = false;
player.inventory.SecondaryInfinity.Value = false;
player.inventory.Melee.Value = false;
player.contextedProperties.SkinType.Value
