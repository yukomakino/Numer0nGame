const answerNum = document.getElementById('answerNum');
const numCheck = document.getElementById('numCheck');

let cpNum = [];
let ansNum = [];
let eat, bite;
let turn = 0;

function makeThreeNum () {
    let numList = ['0','1','2','3','4','5','6','7','8','9'];
    for (let i = 0; i < 3; i++) {
            let randomNum = Math.floor(Math.random() * numList.length);
            cpNum[i] = numList[randomNum];
            numList.splice(randomNum,1)
        }
    console.log(cpNum);
}

makeThreeNum();

function gameJudge() {
    eat = 0;
    bite = 0;

    for (let i = 0; i < 3; i++) {
        if (ansNum[i] == cpNum[i]) {
            eat += 1;
        } else if (cpNum.indexOf(ansNum[i]) != -1) {
            bite += 1;
        }
    }
    alert(`${eat} EAT , ${bite} BITE `);
    if (eat == 3) {
        alert('正解です！');
        makeThreeNum();
    } else {
        turn += 1;
        answerNum.value = '';
        return;
    }
}

numCheck.addEventListener('click', () => {
    ansNum = answerNum.value.split('');
    console.log(ansNum);

    if (3 != answerNum.value.length) {
        alert('3桁の数値を入力してください');
    } else {
        const repeatNumCheck = /(.)\1/.test(answerNum.value); //同じ数字をくりかえすかをチェック（test => 一致するものがあるか検査）
        if (repeatNumCheck) {
            alert('同じ数字は2回以上使えません')
        } else if (turn < 10) {
            gameJudge();
        } else {
            alert('10回までしか挑戦できません!やり直し!');
            makeThreeNum();
            answerNum.value = '';
            turn = 0;
        }
    }
});