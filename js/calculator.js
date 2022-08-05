
let inputNumber='';
let numberArray = [];
let operatorArray = [];

function inputCalc(input) {
    const result = document.getElementById("result-input");

    // 초기화 함수
    function reset(){
        inputNumber='';
        numberArray = [];
        operatorArray = [];
    }

    // 처음 입력 할 때 다른 값이 있을 경우 삭제
    if( result.value != '' && inputNumber == '' && operatorArray.length == 0) {
        result.value='';
    }

    // 'C' 입력 시 초기화
    if(input == 'C') {
        reset();
        result.value='';
        return;
    }

    // 입력한 값 result-input에 출력
    result.value += input;
    
    // 연산자 입력 시 연산자 및 숫자 저장
    if(input == '+' || input =='-' || input == '*' || input == '/') {
        // 숫자 없이 연산자를 눌렀을 때
        if(inputNumber =='') {
            result.value='잘못된 입력';
            reset();
            return;
        }
        numberArray.push(inputNumber);
        inputNumber = '';
        operatorArray.push(input);
        return;
    }

    // '=' 입력 시 계산 및 출력
    if(input == '='){
        // 숫자 없이 '='를 눌렀을 때
        if(inputNumber =='') {
            result.value='잘못된 입력';
            reset();
            return;
        }
        numberArray.push(inputNumber);
        inputNumber = '';
        let ans = 0;
        let iter = 0;
        while (numberArray.length!=0){
            if(iter==0) {
                ans = parseInt(numberArray[0]);
                numberArray.shift();
                iter += 1;
            }
            switch(operatorArray[0]){
                case '+':
                    ans += parseInt(numberArray[0]);
                    numberArray.shift();
                    operatorArray.shift();                        
                    break;
                    
                case '-':
                    ans -= parseInt(numberArray[0]);
                    numberArray.shift();
                    operatorArray.shift();
                    break;
                case '*':
                    ans *= parseInt(numberArray[0]);
                    numberArray.shift();
                    operatorArray.shift();
                    break;
                case '/':
                    ans /= parseInt(numberArray[0]);
                    numberArray.shift();
                    operatorArray.shift();
                    break;
            }
        }
        // 계산한 값 출력
        result.value = ans;

        reset();
        return;
    }
    // 숫자 입력시 문자열에 추가
    inputNumber += input;
}