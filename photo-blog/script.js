// 대상 요소 선택
const generateBtn = document.querySelector('#generateBtn');
const gridContainer = document.querySelector('#gridContainer');
let imageCount = 0;

// 이벤트 리스너를 등록
generateBtn.addEventListener('click', () => {
    // 무언가 하겠다! --> 클릭 이벤트가 발생했을 때 실행할 코드
    // console.log('버튼을 누르면 함수가 실행됨');

    if (imageCount < 30) {  // 30개의 이미지 생성 제한
        const img = document.createElement('img');  // img 태그 생성
        const randomNum = Math.floor(Math.random() * 1000) + 1;
        img.src = `https://picsum.photos/200/300?random=${randomNum}`;  // 이미지 URL 할당

        gridContainer.appendChild(img); // 이미지를 그리드 컨테이너에 추가
        imageCount++;
    }
    if (imageCount === 30) {  // 이미지 생성 개수가 30개가 되면
        const result = confirm("모든 사진을 지우시겠습니까?");  // confirm 대화상자 표시
        if (result) {  // OK 버튼 클릭시
            gridContainer.innerHTML = "";  // 그리드 컨테이너의 내용 모두 삭제
            imageCount = 0;  // 이미지 생성 개수 초기화
        }
    }
});

