<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Schedule</title>
</head>

<body>
  <h1>Create</h1>
  <form action="process_create.php" method="POST">
    <p>title</p>
    <!--  -->
    <p><input type="text" name="title"></p>
    <p>day</p>
    <p><input type="text" name="day"></p>
    <p>description</p>
    <!--  -->
    <p><textarea name="description" id="" cols="30" rows="10"></textarea></p>
    <input type="submit" value="create">
  </form>
  <a href="index.php">Home</a>
  <a href="./list.php">My list</a>
</body>

</html>