Damage.GetContext().FriendlyFire.Value = true;

// ��������� ��������� �������� �������
Damage.GetContext().DamageOut.Value = GameMode.Parameters.GetBool("Damage");
BreackGraph.OnlyPlayerBlocksDmg = GameMode.Parameters.GetBool("PartialDesruction");
BreackGraph.WeakBlocks = GameMode.Parameters.GetBool("LoosenBlocks");
Build.GetContext().FloodFill.Value =  GameMode.Parameters.GetBool("FloodFill");
Build.GetContext().FillQuad.Value =  GameMode.Parameters.GetBool("FillQuad");
Build.GetContext().RemoveQuad.Value =  GameMode.Parameters.GetBool("RemoveQuad");
Build.GetContext().FlyEnable.Value =  GameMode.Parameters.GetBool("Fly");
// задаем что выводить в лидербордах
LeaderBoard.PlayerLeaderBoardValues = [
 {
  Value: "Kills",
  DisplayName: "Убийства",
  ShortDisplayName: "Убийства"
 },
 {
  Value: "Deaths",
  DisplayName: "Смерти",
  ShortDisplayName: "Смерти"
 },
{
  Value: "Status",
  DisplayName: "Статус",
  ShortDisplayName: "Статус"
 },
 {
  Value: "Scores",
  DisplayName: "Очки",
  ShortDisplayName: "Очки"
 }
];
LeaderBoard.TeamLeaderBoardValue = {
 Value: "Deaths",
 DisplayName: "Statistics\Deaths",
 ShortDisplayName: "Statistics\Deaths"
};




// ������ ��������� ������ ��� �����
BreackGraph.BreackAll = true;
// ���������� ���������� ������
Ui.GetContext().QuadsCount.Value = true;
// ��� ������������ �����
Build.GetContext().Pipette.Value = true;
Build.GetContext().BalkLenChange.Value = true;
Build.GetContext().SetSkyEnable.Value = true;
Build.GetContext().GenMapEnable.Value = true;
Build.GetContext().ChangeCameraPointsEnable.Value = true;
Build.GetContext().QuadChangeEnable.Value = true;
Build.GetContext().BuildModeEnable.Value = true;
Build.GetContext().CollapseChangeEnable.Value = true;
Build.GetContext().RenameMapEnable.Value = true;
Build.GetContext().ChangeMapAuthorsEnable.Value = true;
Build.GetContext().LoadMapEnable.Value = true;
Build.GetContext().ChangeSpawnsEnable.Value = true;

// ��������� ����
Properties.GetContext().GameModeName.Value = "GameModes/Peace";
// ������� �������
red = GameMode.Parameters.GetBool("RedTeam");
blue = GameMode.Parameters.GetBool("BlueTeam");
if (red || !red && !blue) {
 Teams.Add("Red", "<color=red>АДМИНЫ</a>", { r
: 80 });
 Teams.Get("Red").Spawns.SpawnPointsGroups.Add
(1);
}

// ������ ���������  
Ui.GetContext().Hint.Value = "привет"; 
  
des = "@Vanhek34";  
sed = "@Vanhek34";  
Teams.Get("Blue").Properties.Get("Des").Value = des;  
Ui.GetContext().TeamProp1.Value = { Team: "Red", Prop: "sed" };  
Teams.Get("Red").Properties.Get("sed").Value = sed; 
 
Ui.GetContext().TeamProp2.Value = { Team: "Blue", Prop: "Des" };
var maxDeaths = Players.MaxCount * 6;
Teams.Get("Red").Properties.Get("Deaths").Value = maxDeaths;
Teams.Get("Blue").Properties.Get("Deaths").Value = maxDeaths;
// задаем что выводить в лидербордах


if (blue || !red && !blue) {
 Teams.Add("Blue", "<color=orange>ИГРОКИ</a>", { g: 128 });
 Teams.Get("Blue").Spawns.SpawnPointsGroups.Add(1);
 if(GameMode.Parameters.GetBool("BlueHasNothing")){
  var inventory = Inventory.GetContext();
  Teams.Get("Blue").Inventory.Main.Value = false;
  Teams.Get("Blue").Inventory.Secondary.Value = false;
  Teams.Get("Blue").Inventory.Melee.Value = false;
};

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
  if (player.id == "пусто") {
    player.Properties.Get("Статус").Value = "<b><i><color=yellow>VIP</color> Игрок</i></b>";
  }
  } else {
    player.Properties.Get("Статус").Value = "<b><i>Игрок</i></b>";
  }
});
