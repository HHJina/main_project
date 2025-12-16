// 제품 데이터
const product_data = [
    { category: "상의", brand: "Supreme", product: "슈프림 박스로고 후드티", price: "390,000" },
    { category: "하의", brand: "DIESEL", product: "디젤 트랙 팬츠", price: "188,000" },
    { category: "신발", brand: "Nike", product: "에어포스 1", price: "137,000" },
    { category: "패션잡화", brand: "Music&Goods", product: "빵빵이 키링", price: "29,000" },

    { category: "상의", brand: "Nike", product: "오프화이트 로고 티셔츠", price: "89,000" },
    { category: "상의", brand: "Adidas", product: "아디다스 트레포일 맨투맨", price: "79,000" },
    { category: "상의", brand: "Stussy", product: "스투시 베이직 후드", price: "159,000" },
    { category: "상의", brand: "Uniqlo", product: "U 크루넥 반팔 티셔츠", price: "19,900" },

    { category: "하의", brand: "Levi's", product: "501 오리지널 진", price: "128,000" },
    { category: "하의", brand: "Nike", product: "나이키 드라이핏 조거팬츠", price: "69,000" },
    { category: "하의", brand: "Adidas", product: "아디다스 파이어버드 팬츠", price: "75,000" },
    { category: "하의", brand: "Muji", product: "무인양품 면 와이드 팬츠", price: "49,900" },

    { category: "신발", brand: "New Balance", product: "뉴발란스 993 그레이", price: "299,000" },
    { category: "신발", brand: "Adidas", product: "이지부스트 350", price: "329,000" },
    { category: "신발", brand: "Converse", product: "척테일러 올스타", price: "65,000" },
    { category: "신발", brand: "Dr.Martens", product: "닥터마틴 1461", price: "210,000" },

    { category: "아우터", brand: "The North Face", product: "눕시 다운 자켓", price: "399,000" },
    { category: "아우터", brand: "Patagonia", product: "레트로 파일리스 자켓", price: "179,000" },
    { category: "아우터", brand: "Zara", product: "오버핏 블레이저", price: "129,000" },
    { category: "아우터", brand: "Uniqlo", product: "울트라 라이트 다운", price: "99,900" },

    { category: "패션잡화", brand: "Nike", product: "스우시 볼캡", price: "39,000" },
    { category: "패션잡화", brand: "New Era", product: "뉴에라 59FIFTY 캡", price: "45,000" },
    { category: "패션잡화", brand: "Ray-Ban", product: "웨이페어러 선글라스", price: "189,000" },
    { category: "패션잡화", brand: "Gentle Monster", product: "젠틀몬스터 선글라스", price: "269,000" },

    { category: "가방", brand: "Porter", product: "포터 탱커 백팩", price: "458,000" },
    { category: "가방", brand: "Eastpak", product: "이스트팩 패디드 백팩", price: "79,000" },
    { category: "가방", brand: "Louis Vuitton", product: "키폴 반둘리에", price: "2,980,000" },
    { category: "가방", brand: "Nike", product: "브라질리아 더플백", price: "55,000" },

    { category: "상의", brand: "Polo Ralph Lauren", product: "폴로 케이블 니트", price: "198,000" },
    { category: "상의", brand: "COS", product: "코스 오버핏 셔츠", price: "115,000" },
    { category: "상의", brand: "Ami", product: "아미 하트 로고 맨투맨", price: "315,000" },
    { category: "상의", brand: "Thisisneverthat", product: "디스이즈네버댓 로고 후드", price: "129,000" },
    { category: "상의", brand: "Carhartt", product: "칼하트 포켓 반팔 티셔츠", price: "59,000" },

    { category: "하의", brand: "Zara", product: "자라 와이드 슬랙스", price: "59,900" },
    { category: "하의", brand: "Uniqlo", product: "유니클로 EZ 앵클 팬츠", price: "49,900" },
    { category: "하의", brand: "Carhartt", product: "칼하트 더블니 팬츠", price: "139,000" },
    { category: "하의", brand: "Nike", product: "나이키 스우시 쇼츠", price: "45,000" },
    { category: "하의", brand: "Adidas", product: "아디다스 트레이닝 쇼츠", price: "39,000" },

    { category: "신발", brand: "Nike", product: "덩크 로우 레트로", price: "139,000" },
    { category: "신발", brand: "Asics", product: "젤 카야노 14", price: "189,000" },
    { category: "신발", brand: "Salomon", product: "XT-6 트레일 러닝화", price: "219,000" },
    { category: "신발", brand: "Vans", product: "올드스쿨 블랙", price: "75,000" },
    { category: "신발", brand: "Birkenstock", product: "보스턴 스웨이드", price: "169,000" },

    { category: "아우터", brand: "Moncler", product: "몽클레어 경량 패딩", price: "1,290,000" },
    { category: "아우터", brand: "Stone Island", product: "스톤아일랜드 소프트쉘 자켓", price: "798,000" },
    { category: "아우터", brand: "Carhartt", product: "칼하트 디트로이트 자켓", price: "249,000" },
    { category: "아우터", brand: "Muji", product: "무인양품 코튼 코트", price: "149,000" },
    { category: "아우터", brand: "Nike", product: "나이키 윈드러너 자켓", price: "129,000" },

    { category: "패션잡화", brand: "Apple", product: "애플워치 스포츠 밴드", price: "65,000" },
    { category: "패션잡화", brand: "G-Shock", product: "지샥 클래식 시계", price: "129,000" },
    { category: "패션잡화", brand: "Supreme", product: "슈프림 로고 비니", price: "89,000" },
    { category: "패션잡화", brand: "Stussy", product: "스투시 스탁 로고 캡", price: "69,000" },
    { category: "패션잡화", brand: "Porter", product: "포터 카드 지갑", price: "98,000" },

    { category: "가방", brand: "ARC'TERYX", product: "아크테릭스 맨티스 슬링백", price: "89,000" },
    { category: "가방", brand: "Samsonite", product: "쌤소나이트 캐리어", price: "259,000" },
    { category: "가방", brand: "COS", product: "코스 레더 토트백", price: "215,000" },
    { category: "가방", brand: "Uniqlo", product: "유니클로 라운드 미니백", price: "19,900" },
    { category: "가방", brand: "Herschel", product: "허쉘 데이팩", price: "89,000" },
];

// 제품 테이블에 데이터 추가
const product_data_Table = document.getElementById("product_data_Table");
const form_option = document.querySelector("#inlineFormSelectPref");
let option_category = ["카테고리"]; // 옵션 선택지
const total_data = product_data.length; // 데이터 총 개수
let filter_data = [...product_data]; //필터 데이터 개수
const pagination = document.querySelector(".pagination");
const limit = 5; // 페이지당 노출 데이터
let current_page = 1; // 현재 페이지
let tatal_pages = Math.ceil(total_data / limit); // 총 페이지
const search_input = document.querySelector('#searchInput'); // 검색란
const search_button = document.querySelector('#searchButton'); // 조회 버튼

// 초기 데이터 로딩
function getPage() {
    product_data_Table.innerHTML = ""; // 테이블 내용 초기화

    const start = (current_page - 1) * limit;
    const end = start + limit;
    const paginated_items = filter_data.slice(start, end);

    paginated_items.forEach((item) => {
        const row = product_data_Table.insertRow();
        row.insertCell(0).innerHTML = item.category;
        row.insertCell(1).innerHTML = item.brand;
        row.insertCell(2).innerHTML = item.product;
        row.insertCell(3).innerHTML = item.price;
    });
}

// 페이지네이션
function getPagination() {
    pagination.innerHTML = ""; // 버튼 초기화

    // 이전/다음 버튼
    function createMoveButton(text, page, isDisabled) {
        const page_item = document.createElement("li");
        page_item.className = `page-item ${isDisabled ? "disabled" : ""}`;

        const page_link = document.createElement("a");
        page_link.className = "page-link";
        page_link.href = "#";
        // 이전/다음 아이콘(부트스트랩)
        page_link.innerHTML = text === '이전' ? '&laquo;' : '&raquo;';

        if (!isDisabled) {
            page_link.addEventListener("click", function () {
                current_page = page;
                getPage();
                getPagination();
            });
        }

        page_item.appendChild(page_link);
        return page_item;
    }

    // 이전버튼
    const prev_disabled = current_page === 1;
    pagination.appendChild(createMoveButton("이전", current_page - 1, prev_disabled));

    // 페이지 번호 버튼 루프
    for (let i = 1; i <= tatal_pages; i++) {
        const page_item = document.createElement("li");
        page_item.className = `page-item ${i === current_page ? "active" : ""}`;

        const page_link = document.createElement("a");
        page_link.className = "page-link";
        page_link.href = "#";
        page_link.textContent = i;

        // 페이지 클릭 이벤트 핸들러
        page_link.addEventListener("click", function () {
            current_page = i; // 현재 페이지 업데이트
            getPage(); // 새 페이지 데이터로 테이블 갱신
            getPagination(); // 버튼 상태 갱신
        });

        page_item.appendChild(page_link);
        pagination.appendChild(page_item);
    }

    // 다음버튼
    const next_disabled = current_page === tatal_pages;
    pagination.appendChild(createMoveButton("다음", current_page + 1, next_disabled));
}

// 셀렉트 옵션추가
function getOption() {
    product_data.forEach((item) => {
        if (!option_category.includes(item.category)) {
            option_category.push(item.category);
        }
    });

    option_category.forEach(function (val) {
        let option = document.createElement("option");
        option.value = val;
        option.text = val;

        form_option.appendChild(option);
    });
}

// 필터링
function filterProducts() {
    const category = form_option.value;
    const search = search_input.value;

    filter_data = product_data.filter(function (item) {
        const categoryMatch = (category === '카테고리' || item.category === category);
        const searchMatch = (search === '' || item.product.includes(search));

        return categoryMatch && searchMatch;
    });

    console.log(filter_data);
}

// 조회버튼 클릭 이벤트
search_button.addEventListener('click', function () {
    filterProducts();
    tatal_pages = Math.ceil(filter_data.length / limit);
    console.log(filter_data);

    current_page = 1;
    getPage();
    getPagination();
})
// 엔터로 조회
search_input.addEventListener('keydown', function (e) {
    if (event.key === 'Enter' || event.keyCode === 13) {
        e.preventDefault();
        filterProducts();

        tatal_pages = Math.ceil(filter_data.length / limit);
        current_page = 1;
        getPage();
        getPagination();
    }
});

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


getPage();
getOption();
getPagination();
