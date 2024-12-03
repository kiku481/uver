document.getElementById("sign-in-button").addEventListener("click", function(event) {
    event.preventDefault(); // 기본 폼 제출을 막음

    // 아이디와 비밀번호 값 가져오기
    const id = document.getElementById("id").value;
    const password = document.getElementById("password").value;
    let errorMessage = "";

    // 필수 항목 체크
    if (!id && !password) {
        errorMessage = "아이디와 비밀번호를 입력해주세요.";
    } else if (!id) {
        errorMessage = "아이디를 입력해주세요.";
    } else if (!password) {
        errorMessage = "비밀번호를 입력해주세요.";
    }

    // 경고 메시지 표시
    if (errorMessage) {
        alert(errorMessage);
    } else {
        // 로그인 처리 로직 (성공적으로 입력된 경우)
        window.location.href = "https://example.com";  // 회원가입 페이지로 이동
    }
});
