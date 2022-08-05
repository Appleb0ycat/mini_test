const btns = document.querySelectorAll(".btns li");
const boxs = document.querySelectorAll("section article");

// 버튼의 개수만큼 반복, 해당 요소 이벤트 등록
for(let i=0; i< btns.length; i++){
    // 각 버튼 클릭
    btns[i].addEventListener("click", () => {
        // on 클래스 추가 및 제거 로직
        btns[i].classList.add('on');
        boxs[i].classList.add('on');
        for(let j=0; j< btns.length; j++){
            if(i != j) {
                btns[j].classList.remove('on');
                boxs[j].classList.remove('on');
            }
        }
    });
};
