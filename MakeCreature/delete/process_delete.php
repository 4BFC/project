<?php
mysqli_report(MYSQLI_REPORT_OFF);
$conn = mysqli_connect(
  'localhost',
  'root',
  '1024',
  'test'
);
//settype은 id값을 정수로 고정하기 위한 함수이다.
settype($_POST['id'], 'integer');

$filtered = array(
  'id' => mysqli_real_escape_string($conn, $_POST['id'])
);

$sql = "DELETE FROM creature WHERE id ={$filtered['id']}";
$result = mysqli_query($conn, $sql);

if ($result === false) {
  echo '삭제되지 못했습니다. 관리자에게 문의 해주세요.';
  echo mysqli_error($conn);
  error_log(mysqli_errno($conn));
} else {
  header('Location: ../create/creature_list.php');
}
