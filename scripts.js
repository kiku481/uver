// 1. 번역 데이터를 정의
const translations = {
    ko: {
        signupTitle: "회원가입",
        id: "아이디",
        password: "비밀번호",
        username: "유저 이름",
        language: "언어",
        submit: "가입하기",
        errors: {
            invalidId: "아이디는 영어만 사용 가능합니다.",
            invalidPasswordLength: "비밀번호는 8글자 이상으로 설정해주세요.",
            invalidPasswordFormat: "비밀번호는 숫자, 소문자, 대문자, 특수문자의 조합으로 설정해주세요.",
            invalidUsernameLength: "유저 이름은 8글자 이내로 설정해주세요.",
            missingFields: "모든 필드를 채워주세요."
        }
    },
    ja: {
        signupTitle: "会員加入",
        id: "ユーザーID",
        password: "パスワード",
        username: "ユーザー名",
        language: "言語",
        submit: "登録する",
        errors: {
            invalidId: "ユーザーIDは英語のみ使用できます。",
            invalidPasswordLength: "パスワードは8文字以上に設定してください。",
            invalidPasswordFormat: "パスワードは数字、小文字、大文字、特殊文字の組み合わせで設定してください。",
            invalidUsernameLength: "ユーザー名は8文字以内に設定してください。",
            missingFields: "すべての項目を入力してください。"
        }
    },
    en: {
        signupTitle: "Sign Up",
        id: "ID",
        password: "Password",
        username: "User Name",
        language: "Language",
        submit: "Sign Up",
        errors: {
            invalidId: "ID must only contain English letters.",
            invalidPasswordLength: "Password must be at least 8 characters long.",
            invalidPasswordFormat: "Password must contain a mix of numbers, lowercase, uppercase, and special characters.",
            invalidUsernameLength: "User name must be within 8 characters.",
            missingFields: "All fields are required."
        }
    }
};

// 2. 언어 변경 함수
function applyTranslations(lang) {
    const translation = translations[lang];
    if (!translation) return;

    document.getElementById("signup-subtitle").textContent = translation.signupTitle;
    document.getElementById("label-id").textContent = translation.id;
    document.getElementById("label-password").textContent = translation.password;
    document.getElementById("label-username").textContent = translation.username;
    document.getElementById("submit-button").textContent = translation.submit;
}

// 3. 언어 선택 이벤트
document.querySelectorAll(".flags img").forEach(flag => {
    flag.addEventListener("click", () => {
        document.querySelectorAll(".flags img").forEach(img => img.classList.remove("active"));
        flag.classList.add("active");

        const lang = flag.getAttribute("data-lang");
        applyTranslations(lang);
    });
});

// 4. 폼 제출 이벤트
document.getElementById("submit-button").addEventListener("click", function (event) {
    event.preventDefault();

    // 필드 값 가져오기
    const id = document.getElementById("id").value.trim();
    const password = document.getElementById("password").value.trim();
    const username = document.getElementById("username").value.trim();

    const lang = document.querySelector(".flags img.active")?.getAttribute("data-lang") || "ko";
    const errors = translations[lang].errors;

    let errorMessage = "";

    // 필수 항목 체크
    if (!id || !password || !username) {
        errorMessage = errors.missingFields;
    }

    // 아이디 검증 (영어만 허용)
    if (!/^[a-zA-Z]+$/.test(id)) {
        errorMessage = errors.invalidId;
    }

    // 비밀번호 검증
    if (password.length < 8) {
        errorMessage = errors.invalidPasswordLength;
    } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).+$/.test(password)) {
        errorMessage = errors.invalidPasswordFormat;
    }

    // 유저 이름 길이 검증
    if (username.length > 8) {
        errorMessage = errors.invalidUsernameLength;
    }

    // 에러 메시지가 있다면 경고창 띄우기
    if (errorMessage) {
        alert(errorMessage);
        return;
    }

    // 모든 검증 통과 시 제출
    alert("회원가입이 완료되었습니다!");
});
