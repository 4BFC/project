<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Schedule_list</title>
</head>

<body>
  <table border="1">
    <!-- 1st row -->
    <tr>
      <td>title</td>
      <td>description</td>
      <td>edit</td>
      <td>delete</td>
    </tr>
    <!-- 2nd row -->
    <tr>
      <td id="title">1st : title_Null
        <!-- hidden으로 변경해서.. 보였다 없앴다 하는것이 좋으까? -->
        <input type="hidden" value="test">
      </td>
      <td id="description">1st : description_Null</td>
      <td><input id="edit_btn" type="button" value="edit"></td>
      <td><input type="button" value="delete"></td>
    </tr>
    <!-- 2nd row -->
    <tr>
      <td>2nd : title_Null</td>
      <td>2nd : description_Null</td>
      <td><input type="button" value="edit"></td>
      <td><input type="button" value="delete"></td>
    </tr>
  </table>

  <script src="./process/process.js" type="module"></script>
</body>

</html>
<!-- https://ofcourse.kr/html-course/table-%ED%83%9C%EA%B7%B8 -->