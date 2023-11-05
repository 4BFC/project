<?php
mysqli_report(MYSQLI_REPORT_OFF);
$conn = mysqli_connect(
  'localhost',
  'root',
  '1024',
  'test'
);

$filtered = array(
  'name' => mysqli_real_escape_string($conn, $_POST['name']),
  'description' => mysqli_real_escape_string($conn, $_POST['description'])
);

if ($filtered['name'] == null || $filtered['description'] == null) {
  echo '아무것도 입력하지 않았습니다. <a href="../index.php">홈으로 돌아가기.</a>';
  echo mysqli_error($conn);
  error_log(mysqli_errno($conn));
  ini_set('display_errors', '0');
} else {
  $sql = "
  INSERT INTO creature(name, description, created,user)
  VALUES(
    '{$filtered['name']}',
    '{$filtered['description']}',
    NOW(),
    'test'
  )
";
}

$result = mysqli_query($conn, $sql);

if ($result === false) {
  echo '생성하지 못했습니다. 관리자에게 문의 해주세요.';
  echo mysqli_error($conn);
  error_log(mysqli_errno($conn));
} else {
  echo '생성되었습니다. <br><a href="creature_list.php">나의 크리처 확인하러가기</a>';
}
