function handleSubmit(event) {
    event.preventDefault();
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('errorMessage');

    const passwordMap = {
        'syundayo': 'https://itsumenzu.github.io/member/0002',
        'rikudayo': 'https://itsumenzu.github.io/member/0001',
        'akiharudayo': 'https://itsumenzu.github.io/member/0003',
        'takumidayo': 'https://itsumenzu.github.io/member/0004',
        'yuutodayo': 'https://itsumenzu.github.io/member/0005',
        'kaitodayo': 'https://itsumenzu.github.io/member/0006',
        'kyouzendayo': 'https://itsumenzu.github.io/member/0007',
        'yakumodayo': 'https://itsumenzu.github.io/member/0008'
    };

    if (passwordMap[password]) {
        window.location.href = passwordMap[password];
    } else {
        errorMessage.textContent = 'パスワードが正しくありません。';
    }
}
