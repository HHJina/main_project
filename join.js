const form = document.getElementById("form");

form.addEventListener("submit", function (event) {
    event.preventDefault() // 기존기능 차단

    let userId = event.target.id.value;
    let userPw1 = event.target.pw1.value;
    let userPw2 = event.target.pw2.value;
    let userName = event.target.name.value;
    let userPhone = event.target.phone.value;
    let userEmail = event.target.email.value;
    let userGender = event.target.gender.value;

    // 아이디 유효성 검사 (6~15자, 영문 소문자 또는 숫자만 허용)
    const idRegex = /^[a-z0-9]{6,15}$/;
    if (!idRegex.test(userId)) {
        alert('아이디는 6자 이상 15자 이하의 영문 소문자 또는 숫자만 사용 가능합니다.');
        event.target.id.focus();
        return; // 제출 중단
    }

    // 비밀번호 유효성 검사 (8자 이상, 영문, 숫자, 특수문자를 각각 1개 이상 포함)
    const pwRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    if (!pwRegex.test(userPw1)) {
        alert('비밀번호는 8자 이상이며, 영문 대소문자, 숫자, 특수문자를 각각 1개 이상 포함해야 합니다.');
        event.target.pw1.focus();
        return;
    }

    // 비밀번호 일치 확인
    if (userPw1 !== userPw2) {
        alert('비밀번호와 비밀번호 확인이 일치하지 않습니다.');
        event.target.pw2.focus();
        return;
    }

    // 이름 유효성 검사 (2~10자 한글만 허용)
    const nameRegex = /^[가-힣]{2,10}$/;
    if (!nameRegex.test(userName)) {
        alert('이름은 2자 이상 10자 이하의 한글만 사용 가능합니다.');
        event.target.name.focus();
        return;
    }

    // 가입 컨펌
    const is_confirm = confirm(`아이디:${userId}\n이름:${userName}\n성별:${userGender}\n회원가입 하시겠습니까?`);

    if (is_confirm) {
        alert('회원가입에 성공하겼습니다.');
        window.location.href = './join_success.html';

    } else {
        alert('회원가입이 취소되었습니다.');
    }
})

// 다크모드
const toggleButton = document.querySelector('#darkModeToggle');
const body = document.body;

function enableDarkMode() {
    body.classList.add('dark-mode');
}

function disableDarkMode() {
    body.classList.remove('dark-mode');
}

function toggleDarkMode() {
    if (body.classList.contains('dark-mode')) {
        disableDarkMode();
    } else {
        enableDarkMode();
    }
}
toggleButton.addEventListener('click', toggleDarkMode);