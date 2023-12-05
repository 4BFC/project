# fetch 기본 

두 번째 단계에선 추가 메서드를 호출해 응답 본문을 받습니다.

response 에는 프라미스를 기반으로 하는 다양한 메서드가 있습니다. 이 메서드들을 사용하면 다양한 형태의 응답 본문을 처리할 수 있습니다.

response.text() – 응답을 읽고 텍스트를 반환합니다,
response.json() – 응답을 JSON 형태로 파싱합니다,
response.formData() – 응답을 FormData 객체 형태로 반환합니다. FormData에 대한 자세한 내용은 다음 챕터에서 다루겠습니다.
response.blob() – 응답을 Blob(타입이 있는 바이너리 데이터) 형태로 반환합니다.
response.arrayBuffer() – 응답을 ArrayBuffer(바이너리 데이터를 로우 레벨 형식으로 표현한 것) 형태로 반환합니다.
이 외에도 response.body가 있는데, ReadableStream 객체인 response.body를 사용하면 응답 본문을 청크 단위로 읽을 수 있습니다. 자세한 용례는 곧 살펴보겠습니다.

- [json정리 및 사용 ]{https://velog.io/@ym1085/JSON-%EC%82%AC%EC%9A%A9%EB%B2%95}
- [fetch 세부 프로퍼티와 헤더]{https://ko.javascript.info/fetch}

# DOM tree 그리고 import

import문을 사용해서 js파일을 script태그를 사용해서 html에 부착할 시에 DOM tree를 생각해서 위치를 어떻게 두느냐에 따라 html이 파싱을 하는 순서가 달라 질 것이다.

# 비동기
- 비동기를 더욱 깊게 파고 들면서 비동기는 단순히 서버 데이터를 입출력할 때 새로고침을 하지 않고 사용할 수 있다는 것이다. 즉, 이미지를 로딩해 올 때 로딩하지 않고 바로 가지고 올 수 있다는 것이다. 결과적으로 SPA와 같은 모습이 나온다는 것이다.
- 비동기는 새로고침을 생각하면 되는 것이다.

## 비동기의 콜백함수 그리고 async&await
- callback 지옥에서 빠져 나오기 위해서 우리는 async&await문법을 사용하는 것이다.
- 드림코딩에서 클래스를 사용해서 만든 코드와 생활코딩에서 만든 코드를 비교 분석해서 비동기를 생각해보고 이의 차이를 찾아보자.
