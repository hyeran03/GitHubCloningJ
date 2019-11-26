// 즉시실행 함수 - window가 열리시 바로 작동
(function(window, document) {
  "use strict";

  //   토글버튼 클릭시 메뉴의 내용이 나오거나 사라지는 효과
  const $toggles = document.querySelectorAll(".toggle");
  const $toggleBtn = document.getElementById("toggle-btn");

  $toggleBtn.addEventListener("click", function() {
    toggleElement();
  });

  //   토글이 클릭되고 화면이 변경될때 클리된 이벤트가 처음의 상태로 돌아가는 효과
  window.addEventListener("resize", function() {
    if (window.innerWidth > 1024) {
      offElements();
    }
  });

  function toggleElement() {
    [].forEach.call($toggles, function(toggle) {
      toggle.classList.toggle("on");
    });
  }

  function offElements() {
    [].forEach.call($toggles, function(toggle) {
      toggle.classList.remove("on");
    });
  }
})(window, document);
