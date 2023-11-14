<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>MakeCreature</title>
</head>

<!-- create zone -->
<?php
mysqli_report(MYSQLI_REPORT_OFF);
$conn = mysqli_connect(
  'localhost',
  'root',
  '1024',
  'test'
);

// id값이 없고 update가 아닌 경우 for POST data
//Update Pretreatment (update 전처리)
$escaped = array(
  'name' => '',
  'description' => ''
);
$value_btn = 'Create';
$form_creature = './create/process_create.php';
$form_id = '';

//Update After treatment (update 후처리)
if (isset($_GET['id'])) { //URL에 해당 id값을 가지고 있을시에 TRUE 를 반환하는 if문
  $value_btn = 'Update'; //id값이 있을 시에 create btn => update btn으로 변경
  //MYSQL injection을 보호하는 역할을 합니다.
  $filtered_id = mysqli_real_escape_string($conn, $_GET['id']); //PHP에서 MySQL 데이터베이스에 데이터를 안전하게 삽입할 수 있도록 문자열을 이스케이프(escape)하는 데 사용되는 함수입니다.
  settype($filtered_id, 'integer'); //int 값 해당 매개변수 고정하기

  $sql = "SELECT * FROM creature WHERE id = {$filtered_id}";
  $result = mysqli_query($conn, $sql); //해당 sql연결하기
  $row = mysqli_fetch_array($result);  //mysqli_fetch_array는 결과 집합의 행을 배열로 가지고 오는 함수이다.

  $escaped['name'] = htmlspecialchars($row['name']);
  $escaped['description'] = htmlspecialchars($row['description']);
  $form_creature = './update/process_update.php';
  $form_id = '<input type="hidden" name="id" value="' . $_GET['id'] . '">'; //id값을 전달하기 위함 -> process_update-author.php로 전달 후 처리
  //' . $_GET['id'] . '는 PHP에서 문자열을 생성하고 조합하는 방법입니다. 이것은 문자열 연결(Concatenation)을 수행하는 코드이다.
}
?>

<body>
  <h1>Creature <?= $value_btn ?></h1>

  <form action="<?= $form_creature ?>" method="POST">

    <?= $form_id ?>
    <p>Creature name : <input type="" name="name" value="<?= $escaped['name'] ?>"></p>
    <p>Description : </p>
    <p><textarea name="description" id="description" cols="30" rows="5"><?= $escaped['description'] ?></textarea></p>
    <p><input type="submit" value="<?= $value_btn ?>"></p>

  </form>

  <a href="./create/creature_list.php">Creature list</a>
  <a href="./index.php">Home</a>

</body>

</html>