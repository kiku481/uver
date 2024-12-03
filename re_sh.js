// 서버에서 리뷰 제목, 별점, 사용자 이름 데이터를 가져오는 함수
async function fetchReviewData() {
    const reviewTitleElement = document.getElementById("review-title");
    const starRatingElement = document.getElementById("star-rating");
    const userNameElement = document.querySelector(".user-name"); // 사용자 이름 요소

    try {
        // 서버 API 호출
        const response = await fetch("https://example.com/api/review-data"); // 서버 URL 수정 필요
        if (!response.ok) {
            throw new Error("Failed to fetch review data");
        }

        // 응답 데이터 처리
        const data = await response.json();

        // 리뷰 제목 표시 (최대 200자)
        reviewTitleElement.textContent = data.title.substring(0, 200);

        // 별점 표시
        const stars = "⭐".repeat(data.stars); // 별점 개수만큼 별 생성
        starRatingElement.textContent = stars;

        // 사용자 이름 표시
        userNameElement.textContent = data.userName;
    } catch (error) {
        // 오류 처리
        reviewTitleElement.textContent = "리뷰 제목을 불러오는 데 실패했습니다.";
        starRatingElement.textContent = "별점을 불러오는 데 실패했습니다.";
        userNameElement.textContent = "사용자 이름을 불러오는 데 실패했습니다.";
        console.error("Error fetching review data:", error);
    }
}

// DOM이 로드되면 데이터 가져오기 실행
document.addEventListener("DOMContentLoaded", fetchReviewData);



