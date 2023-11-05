<?php
mysqli_report(MYSQLI_REPORT_OFF);
$conn = mysqli_connect(
  'localhost',
  'root',
  '1024',
  'test'
);
?>

<!DOCTYPE html>
<html lang="kor">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>MakeCreature</title>
</head>

<body>
  <h1>Creature list</h1>
  <table border="1">
    <th>name</th>
    <th>description</th>
    <th>user</th>
    <th>created</th>
    <?php // show create list zone
    $sql = "SELECT * FROM creature";
    $result = mysqli_query($conn, $sql);
    // while문을 통해서 해당 row값들을 모두 불러온다. 이는 DESC tablename으로 sql monitor에서 확인이 가능핟.
    if ($row = mysqli_fetch_array($result)) {
      while ($row = mysqli_fetch_array($result)) {
        $filtered = array(
          'id' => htmlspecialchars($row['id']),
          'name' => htmlspecialchars($row['name']),
          'description' => htmlspecialchars($row['description']),
          'created' => htmlspecialchars($row['created']),
          'user' => htmlspecialchars($row['user'])
        );
    ?>
        <!-- colum -->
        <tr>
          <!-- name colum -->
          <td><?= $filtered['name'] ?>
            <!-- hidden type input area -->
            <input type="hidden" value="">
          </td>
          <!-- description colum -->
          <td><?= $filtered['description'] ?>
            <!-- hidden type input area -->
            <input type="hidden" value="">
          </td>
          <!-- user colum -->
          <td><?= $filtered['user'] ?></td>
          <!-- created colum -->
          <td><?= $filtered['created'] ?></td>
          <!-- delete colum -->
          <td>
            <!-- update zone -->
            <a href="../index.php?id=<?= $filtered['id'] ?>">update</a>
          </td>
          <td>
            <!-- delete zone -->
            <form action="../delete/process_delete.php" method="post" onsubmit="if(!confirm('sure?')){return false;}">
              <input type="hidden" name="id" value="<?= $filtered['id'] ?>">
              <input type="submit" value="delete">
            </form>
          </td>
        </tr>
      <?php
      }

      ?>
      <!-- update zone -->

      <form action="../update/process_update.php">
        <!-- <input type="submit" value=""> -->
      </form>
      <?php

      ?>

      <!-- <?php
          } else {
            $filtered = array(
              'id' => "NULL",
              'name' => "NULL",
              'description' => "NULL",
              'created' => "NULL",
              'user' => "NULL"
            );
          }
            ?> -->
  </table>


  <a href="../index.php">Home</a>
</body>

</html>