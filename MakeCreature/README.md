# GhostMaker

**edited List**
테이블에 비어 있는 값이 들어갔을 시에 값이 비어 있다고 echo에서 띄워 주게 해야 한다. 
> if문을 사용해서 null값인 경우 생성을 하지 못하게 했을 때 $sql변수에서 값이 없기 때문에 $result변수에서 error 메시지를 출력한다. 이를 제거하기 위해서 ini_set('display_errors',  '0'); 코드를 사용해서 **숨겨주면** 된다.