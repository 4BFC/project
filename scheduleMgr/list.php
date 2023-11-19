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
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>

<body>
  <h1>Schedule_list</h1>
  <table border="1">
    <th>user</th>
    <th>day</th>
    <th>title</th>
    <th>date</th>
    <th>description</th>
    <?php
    $sql = "SELECT * FROM schedulemgr";
    $result = mysqli_query($conn, $sql);
    if ($row = mysqli_fetch_array($result)) {
      while ($row = mysqli_fetch_array($result)) {
        $filtered = array(
          'user' => htmlspecialchars($row['user']),
          'day' => htmlspecialchars($row['day']),
          'title' => htmlspecialchars($row['title']),
          'date' => htmlspecialchars($row['create_date']),
          'description' => htmlspecialchars($row['description'])
        );
    ?>
        <tr>
          <td><?= $filtered['user'] ?></td>
          <td><?= $filtered['day'] ?></td>
          <td id="title"><?= $filtered['title'] ?></td>
          <td><?= $filtered['date'] ?></td>
          <td id="description"><?= $filtered['description'] ?></td>
          <td><input type="button" name="edit" class="edit_btn" value="edit"></td>
          <td><input type="button" name="delete" class="delete_btn" value="delete"></td>
        </tr>
    <?php
      }
    } ?>
  </table>
  <script src="./main_button.js" type="module"></script>
</body>

</html>