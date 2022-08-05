

let inputNumber='';
let number = [];
let operator = [];

function inputCalc(input) {
    const result = document.getElementById("result-input");
    // 초기화 함수
    function init(){
        inputNumber='';
        number = [];
        operator = [];
    }
    // 처음 입력시 다른 값이 있을 경우 삭제
    if( result.value != '' && inputNumber == '' && operator.length == 0) {
        result.value='';
    }

    // C 입력시 초기화
    if(input == 'C') {
        init();
        result.value='';
        return;
    }
    // 입력한 값 result-input에 출력
    result.value += input;
    
    // 연산자 및 숫자 저장
    if(input == '+' || input =='-' || input == '*' || input == '/') {
        if(inputNumber =='') {
            result.value='잘못된 입력';
            init();
            return;
        }
        number.push(inputNumber);
        inputNumber = '';
        operator.push(input);
        return;
    }
    // '=' 입력시 계산
    if(input == '='){
        if(inputNumber =='') {
            result.value='잘못된 입력';
            init();
            return;
        }
        number.push(inputNumber);
        inputNumber = '';
        let ans = 0;
        let iter = 0;
        while (number.length!=0){
            if(iter==0) {
                switch(operator[0]){
                    case '+':
                        ans = parseInt(number[0]) + parseInt(number[1]);
                        number.splice(0,2);
                        operator.shift();
                        iter += 1;                        
                        break;
                        
                    case '-':
                        ans = parseInt(number[0]) - parseInt(number[1]);
                        number.splice(0,2);
                        operator.shift();
                        iter += 1;  
                        break;
                    case '*':
                        ans = parseInt(number[0]) * parseInt(number[1]);
                        number.splice(0,2);
                        operator.shift();
                        iter += 1;  
                        break;
                    case '/':
                        ans = parseInt(number[0]) / parseInt(number[1]);
                        number.splice(0,2);
                        operator.shift();
                        iter += 1;  
                        break;
                }
            }
            switch(operator[0]){
                case '+':
                    ans += parseInt(number[0]);
                    number.shift();
                    operator.shift();                        
                    break;
                    
                case '-':
                    ans -= parseInt(number[0]);
                    number.shift();
                    operator.shift();
                    break;
                case '*':
                    ans *= parseInt(number[0]);
                    number.shift();
                    operator.shift();
                    break;
                case '/':
                    ans /= parseInt(number[0]);
                    number.shift();
                    operator.shift();
                    break;
            }
        }
        // 계산한 값 출력
        result.value = ans;

        init();
        return;
    }
    // 숫자 입력시 문자열에 추가
    inputNumber += input;
}