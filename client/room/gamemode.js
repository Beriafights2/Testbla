import * as peace from './peace_library.js';

peace.configure();
peace.create_teams();

PixelCombats.ApiTGKoder:
import { DisplayValueHeader, Color } from 'pixel_combats/basic';
import { Game, Players, Inventory, LeaderBoard, BuildBlocksSet, Teams, Damage, BreackGraph, Ui, Properties, GameMode, Spawns, Timers, TeamsBalancer, Build, AreaPlayerTriggerService } from 'pixel_combats/room';

Damage.GetContext().DamageOut.Value = true;
Damage.GetContext().FriendlyFire.Value = true;
BreackGraph.OnlyPlayerBlocksDmg = true;

Teams.Add("Blue", "<b>Игроки</b>", new Color(0, 0, 1, 0));
Teams.Add("Red", "<b>Админы</b>", new Color(0, 0, 0, 0));
var admsTeam = Teams.Get("Red");
var playersTeam = Teams.Get("Blue");
Teams.Get("Blue").Spawns.SpawnPointsGroups.Add(1);
Teams.Get("Red").Spawns.SpawnPointsGroups.Add(2);
playersTeam.Build.BlocksSet.Value = BuildBlocksSet.Blue;
admsTeam.Build.BlocksSet.Value = BuildBlocksSet.AllClear;

Teams.Get("Blue").Properties.Get("Deaths").Value = "<b><i><color=Yellow>новый режим от</a> <color=lime>Лунатика!!!</a></i> <color=Red>Flare</a></b>";
Teams.Get("Red").Properties.Get("Deaths").Value = "<b><i><color=Yellow></a> <color=Orange>Лунатик!!!</a></i> <color=Lime>[2.0.1]</a></b>";

LeaderBoard.PlayerLeaderBoardValues = [
  new DisplayValueHeader("Kills", "<b>Киллы</b>", "<b>Киллы</b>"),
  new DisplayValueHeader("Deaths", "<b>Смерти</b>", "<b>Смерти</b>"),
  new DisplayValueHeader("Scores", "<b>Очки</b>", "<b>Очки</b>"),
  new DisplayValueHeader("Статус", "<b>Статус</b>", "<b>Статус</b>")
];

LeaderBoard.PlayersWeightGetter.Set(function(player) {
  return player.Properties.Get("Scores").Value;
});

Ui.GetContext().TeamProp1.Value = { Team: "Blue", Prop: "Deaths" };
Ui.GetContext().TeamProp2.Value = { Team: "Red", Prop: "Deaths" };

Teams.OnRequestJoinTeam.Add(function(player, team){
  if (GameMode.Parameters.GetBool('hello')) { 
    player.Ui.Hint.Value = Привет ${player.NickName}!; 
  }
  function getadm(player) {
    player.inventory.Main.Value = true;
    player.inventory.MainInfinity.Value = true;
    player.inventory.Secondary.Value = true;
    player.inventory.SecondaryInfinity.Value = true;
    player.inventory.Melee.Value = true;
    player.inventory.Explosive.Value = true;
    player.inventory.ExplosiveInfinity.Value = true;
    player.inventory.Build.Value = true;
    player.inventory.BuildInfinity.Value = true;
    player.contextedProperties.SkinType.Value = 1;
    player.Properties.Get("admin").Value = 1;
    player.Build.Pipette.Value = true;
    player.Build.FlyEnable.Value = true;
    player.Build.BalkLenChange.Value = true;
    player.Build.BuildRangeEnable.Value = true;
    player.Build.BuildModeEnable.Value = true;
    player.Build.RemoveQuad.Value = true;
    player.Build.FillQuad.Value = true;
    player.Build.FloodFill.Value = true;
    player.Build.ChangeSpawnsEnable.Value = true;
    player.Build.LoadMapEnable.Value = true;
    player.Build.ChangeMapAuthorsEnable.Value = true;
    player.Build.GenMapEnable.Value = true;
    player.Build.ChangeCameraPointsEnable.Value = true;
    player.Build.CollapseChangeEnable.Value = true;
    player.Build.QuadChangeEnable.Value = true;
    player.Build.SetSkyEnable.Value = true;
    player.Build.BlocksSet.Value = BuildBlocksSet.AllClear;
    player.Damage.DamageIn.Value = false;
  }
  function getvip1(player) {
    player.inventory.Main.Value = true;
    player.inventory.MainInfinity.Value = true;
    player.inventory.Secondary.Value = true; 
    player.inventory.SecondaryInfinity.Value = true;
    player.inventory.Melee.Value = true; 
    player.inventory.Explosive.Value = true;
    player.inventory.ExplosiveInfinity.Value = true;
    player.contextedProperties.MaxHp.Value = 1000;
  }
  function getvip2(player)
    player.inventory.Main.Value = true;
    player.inventory.MainInfinity.Value = true;
    player.inventory.Secondary.Value = true;
    player.inventory.SecondaryInfinity.Value = true;
    player.inventory.Melee.Value = true;

player.inventory.Explosive.Value = true;
    player.inventory.ExplosiveInfinity.Value = true;
    player.contextedProperties.MaxHp.Value = 5000;
  }
  function getamoder(player) {
  player.inventory.Main.Value = true;
  player.inventory.MainInfinity.Value = true;
  player.inventory.Secondary.Value = true;
  player.inventory.SecondaryInfinity.Value = true;
  player.inventory.Melee.Value = true;
  player.inventory.Explosive.Value = true;
  player.inventory.ExplosiveInfinity.Value = true;
  player.inventory.Build.Value = true;
  player.inventory.BuildInfinity.Value = true;
  player.contextedProperties.SkinType.Value = 1;
  player.contextedProperties.MaxHp.Value = 50000000000;
  player.Build.Pipette.Value = true;
  player.Build.FlyEnable.Value = true;
  player.Build.BuildRangeEnable.Value = true;
  player.Build.BuildModeEnable.Value = true;
  player.Build.BalkLenChange.Value = true;
  player.Build.CollapseChangeEnable.Value = true;
  }
  function getvip3(player) {
    player.inventory.Main.Value = true;
    player.inventory.MainInfinity.Value = true;
    player.inventory.Secondary.Value = true;
    player.inventory.SecondaryInfinity.Value = true;
    player.inventory.Melee.Value = true;
    player.inventory.Explosive.Value = true;
    player.inventory.ExplosiveInfinity.Value = true;
    player.inventory.Build.Value = true;
    player.Build.FlyEnable.Value = true;
    player.contextedProperties.SkinType.Value = 2;
    player.contextedProperties.MaxHp.Value = 1000000;
  }
  if (player.id == "16355958893E0F11"  player.id == "2827CD16AE7CC982") {
    Teams.Get("Red").Add(player);
  } else {
    Teams.Get("Blue").Add(player);
  }
  if (GameMode.Parameters.GetBool("miniHp")) {
    player.contextedProperties.MaxHp.Value = 50;
  }
  if (GameMode.Parameters.GetBool("bigHp")) {
    player.contextedProperties.MaxHp.Value = 150;
  }
  // Для Кирилла
  if (player.id == "16355958893E0F11) {
    getadm(player);
  }
  // Для Факторик 
  if (player.id == "2827CD16AE7CC982") {
    getadm(player);
  }
  if (player.id == "16355958893E0F11) {
  player.Properties.Get("Статус").Value = "<b><i><color=Red>ГЛ.АДМИН</a></i></b>";
  }
  if (player.id == "2827CD16AE7CC982") {
    player.Properties.Get("Статус").Value = "<b><i><color=Red>АДМИН</color></i></b>";
  }
  if (player.id == "пусто") {
    player.Properties.Get("Статус").Value = "<b><i><color=Lime>МОДЕРАТОР</a></i></b>";
  }
  if (player.id == "") {
    player.Properties.Get("Статус").Value = "<b><i><color=yellow>VIP</color> Игрок</i></b>";
  }
  } else {
    player.Properties.Get("Статус").Value = "<b><i>Игрок</i></b>";
  }
});

Teams.OnPlayerChangeTeam.Add(function(player){ 
player.Spawns.Spawn();
player.PopUp("Думаю будет весело)");
});

var immortalityTimerName = "immortality";
Spawns.GetContext().OnSpawn.Add(function(player){
  player.Properties.Immortality.Value = true;
  timer = player.Timers.Get(immortalityTimerName).Restart(5);
});
Timers.OnPlayerTimer.Add(function(timer){
  if (timer.Id != immortalityTimerName) return;
  timer.Player.Properties.Immortality.Value = false;
});

Damage.OnDeath.Add(function(player) {
  ++player.Properties.Deaths.Value;
});
Damage.OnDamage.Add(function(player, damaged, damage) {
  if (GameMode.Parameters.GetBool("scoresOnDamage")) {
    if (player.id != damaged.id) player.Properties.Scores.Value += Math.ceil(damage);
  }
});
/* 
Damage.OnKill.Add(function(player, killed) {
  if (player.id !== killed.id) { 
    ++player.Properties.Kills.Value;
    player.Properties.Scores.Value += 350;
  }
}); 
*/

var inventory = Inventory.GetContext();
inventory.Main.Value = false;
inventory.Secondary.Value = false;
inventory.Melee.Value = false;
inventory.Explosive.Value = false;
inventory.Build.Value = false;
inventory.BuildInfinity.Value = false;

Spawns.GetContext().RespawnTime.Value = 0;



var AdminkaTrigger = AreaPlayerTriggerService.Get("Админка")
AdminkaTrigger.Tags = ["Админка"];
AdminkaTrigger.Enable = true;
AdminkaTrigger.OnEnter.Add(function(player){
  if (enableAdminsZones) {
  player.inventory.Main.Value = true;
  player.inventory.MainInfinity.Value = true;
  player.inventory.Secondary.Value = true;
  player.inventory.SecondaryInfinity.Value = true;

player.inventory.Explosive.Value = true;
  player.inventory.ExplosiveInfinity.Value = true;
  player.inventory.Melee.Value = true;
  player.inventory.Build.Value = true;
  player.inventory.BuildInfinity.Value = true;
  player.Build.Pipette.Value = true;
  player.Build.FlyEnable.Value = true;
  player.Build.BuildRangeEnable.Value = true;
  player.Build.BuildModeEnable.Value = true;
  player.Build.BalkLenChange.Value = true;
  player.Build.CollapseChangeEnable.Value = true;
  player.Spawns.Spawn();
  player.Ui.Hint.Value = Ты получил админку;
