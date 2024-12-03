// 예시 수량 (이 값은 실제로는 서버나 이전 페이지에서 가져오게 됩니다)
let quantities = {
    "item-1": 2,  // NEW★100% チーズバーガー
    "item-2": 1,  // French Fries
    "item-3": 3   // Coca-Cola
};

  // 각 아이템의 수량을 표시하고 원을 스타일링하는 함수
function updateItemQuantity() {
    Object.keys(quantities).forEach(itemId => {
        let itemNumberDiv = document.getElementById(`item-number-${itemId.split('-')[1]}`);
        let quantity = quantities[itemId];
        let span = itemNumberDiv.querySelector('span');

      // 수량이 1 이상이면 원을 초록색으로 표시하고 숫자 삽입
        if (quantity > 0) {
            itemNumberDiv.style.backgroundColor = 'green';
            span.textContent = quantity;
            itemNumberDiv.style.display = 'flex'; // 원이 표시되도록
        } else {
            itemNumberDiv.style.display = 'none'; // 수량이 0이면 원을 숨김
        }
    });
}

  // 페이지가 로드되면 수량을 업데이트
document.addEventListener('DOMContentLoaded', updateItemQuantity);


    // 현재 날짜 표시
    const currentDateElement = document.getElementById("current-date");
    const now = new Date();
    const options = { 
        year: 'numeric', 
        month: '2-digit', 
        day: '2-digit', 
        weekday: 'short', 
        hour: '2-digit', 
        minute: '2-digit' 
    };
    currentDateElement.textContent = `(${now.toLocaleDateString('ko-KR', options)})`;
});
