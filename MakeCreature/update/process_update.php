<?php
mysqli_report(MYSQLI_REPORT_OFF);
$conn = mysqli_connect(
  'localhost',
  'root',
  '1024',
  'test'
);

settype($_POST['id'], 'integer');
//index.php의 form태그의 POST받은 값들을 array형식으로 나열하는 변수
$filtered = array(
  'id' => mysqli_real_escape_string($conn, $_POST['id']),
  'name' => mysqli_real_escape_string($conn, $_POST['name']),
  'description' => mysqli_real_escape_string($conn, $_POST['description'])
);

//update sql 명령어
$sql = " UPDATE creature 
SET name = '{$filtered['name']}',description = '{$filtered['description']}' WHERE id = {$filtered['id']}
";

$result = mysqli_query($conn, $sql);
if ($result === false) {
  echo '저장하는 과정에서 문제가 생겼습니다. 관리자에게 문의하세요.';
  error_log(mysqli_error($conn));
} else {
  //Location뒤에는 항상 스페이스가 존재하면 안된다. 이와 같은 오류가 있을시에 Internal Server Error를 발생시킨다.
  header('Location: ../create/creature_list.php');
  // echo '수정 되었습니다. <br><a href="../create/creature_list.php">나의 크리처 확인하러가기</a>';
}
