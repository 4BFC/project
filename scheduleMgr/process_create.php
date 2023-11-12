<?php
mysqli_report(MYSQLI_REPORT_OFF);
$conn = mysqli_connect(
  'localhost',
  'root',
  '1024',
  'test'
);

$filtered = array(
  'title' => mysqli_real_escape_string($conn, $_POST['title']),
  'description' => mysqli_real_escape_string($conn, $_POST['description'])
);

$sql = "
INSERT INTO scheduleMgr(user, date, title,description)
VALUES(
  'tester',
  NOW(),
  '{$filtered['title']}',
  '{$filtered['description']}'
)
";

$result = mysqli_query($conn, $sql);

if ($result === false) {
  echo '생성하지 못했습니다. 관리자에게 문의 해주세요.';
  echo mysqli_error($conn);
  error_log(mysqli_error($conn));
} else {
  echo '생성되었습니다. <br><a href="index.php">홈으로 돌아가기</a></br>';
}
