# GhostMaker

**edited List**
테이블에 비어 있는 값이 들어갔을 시에 값이 비어 있다고 echo에서 띄워 주게 해야 한다. 
> if문을 사용해서 null값인 경우 생성을 하지 못하게 했을 때 $sql변수에서 값이 없기 때문에 $result변수에서 error 메시지를 출력한다. 이를 제거하기 위해서 ini_set('display_errors',  '0'); 코드를 사용해서 **숨겨주면** 된다.

**Location: 주의 사항**
header()함수의 Location을 사용할 때 ':'의 띄어쓰기가 매우 중요하다. 항상 Location: 이라고 사용하지 않고 띄어쓰기를 사용한 Location : 이면 아래와 같은 오류 메세지를 출력한다.
```
Internal Server Error
The server encountered an internal error or misconfiguration and was unable to complete your request.
Please contact the server administrator at postmaster@localhost to inform them of the time this error occurred, and the actions you performed just before this error.
More information about this error may be available in the server error log.
```