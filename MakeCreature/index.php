<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>MakeCreature</title>
</head>

<body>
  <h1>Creature create</h1>
  <form action="./create/process_create.php" method="POST">
    <p>Creature name : <input type="" name="name"></p>
    <p>Description : </p>
    <p><textarea name="description" id="description" cols="30" rows="5"></textarea></p>
    <p><input type="submit" value="생성하기"></p>
  </form>
  <a href="./create/creature_list.php">Creature list</a>
  <a href="./index.php">Home</a>
</body>

</html>