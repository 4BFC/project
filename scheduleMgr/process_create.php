<?php
mysqli_report(MYSQLI_REPORT_OFF);
$conn = mysqli_connect(
  'localhost',
  'root',
  '1024',
  'test'
);
//try/catch문 사용하기
try {

  $filtered = array(
    'title' => mysqli_real_escape_string($conn, $_POST['title']),
    'description' => mysqli_real_escape_string($conn, $_POST['description']),
    'day' => mysqli_real_escape_string($conn, $_POST['day'])
  );

  $sql = "
  INSERT INTO scheduleMgr(user, create_date, title, day,description)
  VALUES(
    'tester',
    NOW(),
    '{$filtered['title']}',
    '{$filtered['day']}',
    '{$filtered['description']}'
  )
  ";

  $result = mysqli_query($conn, $sql);

  if ($result === false) {
    echo '생성하지 못했습니다. 관리자에게 문의 해주세요.';
    throw new Exception('저장하는 과정에 서 문제 발생!!');
    echo mysqli_error($conn);
    error_log(mysqli_error($conn));
  } else {
    //성공적으로 생성된 경우
    echo '생성되었습니다. <br><a href="index.php">홈으로 돌아가기</a></br>';
  }
} catch (Exception $e) {
  echo '오류 : ' . $e->getMessage();
}
