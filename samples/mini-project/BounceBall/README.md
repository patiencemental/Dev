# Bounce Ball

- 참조 영상: https://www.youtube.com/watch?v=sLCiI6d5vTM

기본 HTML CSS JS 공부 중에 동적으로 움직이는 무언가를 만들어 보고 싶어 평소 구독중인 인터렉티브 디벨로퍼 김종민님의 영상을 보고 클론해봤다.

Canvas 및 관련 함수들, requestAnimationFrame 함수, 수학 지식 (공의 움직임 처리) 등의 내용은 원래 알고 있던 지식은 아니였지만 종민님의 설명과 적당한 추론으로 코드의 의미를 충분히 이해할 수 있었다.

---
## 간단 정리 1) [Canvas API](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API)

- Canvas API는 JS와 canvas element를 통해 그래픽을 그리기 위한 수단을 제공한다
- 활용
  - 애니메이션
  - 게임 그래픽스
  - 데이터 시각화
  - 사진 조작
  - 실시간 영상 처리
  - WebGL API에서 canvas element를 활용
- canvas element에서 getContext(contextType, contextAttributes) 메서드를 통해서 drawing context를 가져올 수 있다
- 영상에서는 ctx.getContext('2d') 코드를 통해서 2D 그래픽 작업을 할 수 있는 '[CanvasRenderingContext2D](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D)'라는 drawing context 개체를 가져온다
- [path 관련 문서](https://developer.mozilla.org/ko/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes#%EA%B2%BD%EB%A1%9C_%EA%B7%B8%EB%A6%AC%EA%B8%B0)

---

## 간단 정리 2) [window.requestAnimationFrame(callback: FrameRequestCallback)](https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame)

- 해당 메서드는 수행하고자 하는 애니메이션을 브라우저에게 알리면서, 다음 repaint 이전에 애니메이션을 업데이트 하기 위해 특정 함수를 호출하라고 요청한다
  - 해당 함수는 repaint 이전에 호출될 callback 메서드를 인자로 받는다
- 주의!!
  - requestAnimationFrame()은 1shot 이다 => 만약 애니메이션이 지속되길 원한다면 callback 메서드 내에서 다시 requestAnimationFrame()을 호출해야만 한다!
- 영상을 보면서 메서드명만 보고 "애니메이션을 그리기 위한 프레임을 브라우저에게 요청한다" 정도로만 이해했었는데 계속 자기 자신을 호출하는 재귀 형태의 의미를 문서를 보면서 인지했다

---
## 기본 로직 정리