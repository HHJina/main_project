import time
import pymysql
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from bs4 import BeautifulSoup

# MySQL 접속 정보 설정
db_config = {
    'host': 'localhost',
    'user': 'root',
    'password': 'jina95030412',
    'db': 'kream',
    'charset': 'utf8mb4'
}
conn = pymysql.connect(
        host=db_config['host'],
        user=db_config['user'],
        password=db_config['password'],
        charset=db_config['charset']
    )
cursor = conn.cursor()

# Todo: 데이터베이스 테이블 생성 함수
def create_table():
    cursor.execute(f"CREATE DATABASE IF NOT EXISTS {db_config['db']}")
    conn.select_db(db_config['db'])

    sql = """
    CREATE TABLE IF NOT EXISTS product (
        id INT AUTO_INCREMENT PRIMARY KEY,
        category VARCHAR(50),
        brand VARCHAR(50),
        product_name VARCHAR(1000),
        price VARCHAR(10)
    )
    """
    cursor.execute(sql)
    conn.commit()
    # conn.close()

# Todo: 데이터 저장 함수 
def save_to_db(category, brand, product_name, price):
    try:
        sql = "INSERT INTO product(category, brand, product_name, price) VALUES(%s, %s, %s, %s)"
        cursor.execute(sql, (category, brand, product_name, price))
        conn.commit()
    except Exception as e:
        print(f"예상치 못한 기타 에러 발생: {e}")
        conn.rollback()
    # finally:
    #     conn.close()

# 드라이버 설정 함수
def setup_driver():
    header_user = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36"
    options_ = Options()
    options_.add_argument(f"User-Agent={header_user}")
    # 불필요한 GPU 가속 및 로그 끄기 (초기 구동 속도 향상)
    # options_.add_argument("--disable-gpu")
    # options_.add_argument("--disable-dev-shm-usage")
    # options_.add_argument("--headless=new") # 창 띄우지 않기
    options_.add_experimental_option("detach", True)  # 브라우저 종료 안함 (디버깅용)
    options_.add_experimental_option('excludeSwitches', ["enable-logging"])
    # 페이지 로드 전략 설정 (중요!)
    # 'normal' (기본값): 모든 리소스를 다 받을 때까지 대기
    # 'eager': DOM 트리만 완성되면 바로 제어권 획득 (빈 화면 탈출 속도 up)
    # options_.page_load_strategy = 'eager'
    return webdriver.Chrome(options=options_)

# 상품 검색 함수 
def search_product(driver, keyword):
    driver.get("https://kream.co.kr/")
    wait = WebDriverWait(driver, 5)
    # 헤더 메인이 보일 때까지 기다린다
    wait.until(
        EC.visibility_of_element_located((By.CSS_SELECTOR, ".btn_search"))
    )
    time.sleep(2)
    
    # 검색 창 열기
    # 클릭이 성공할 때까지 최대 3번 시도
    try_click = 0
    while try_click < 3:
        try:
            search_btn = wait.until(EC.element_to_be_clickable((By.CSS_SELECTOR, ".btn_search")))
            search_btn.click()
            break # 클릭 성공 시 반복문 탈출
        except Exception:
            try_click += 1
            print(f'실패횟수 : {try_click}')
            time.sleep(1) # 1초 쉬고 다시 시도
    
    # 검색어 입력
    search_input = wait.until(EC.visibility_of_element_located((By.CSS_SELECTOR, ".input_search.show_placeholder_on_focus")))
    search_input.send_keys(keyword)
    search_input.send_keys(Keys.ENTER)
    
    time.sleep(1) # 결과 로딩 대기

    # 스크롤 다운
    for _ in range(20):
        driver.find_element(By.TAG_NAME, 'body').send_keys(Keys.PAGE_DOWN)
        time.sleep(0.5)

# Todo: 상품 정보 추출 함수
def extract_product_info(soup, category):
    items = soup.select(".product_card")
    
    for item in items:
        product_name = item.select_one("p.text-lookup.display_paragraph.line_break_by_truncating_tail.text-element:not(.semibold)").text
        brand = item.select_one(".semibold").text
        price = item.select_one(".price-info-container .semibold.text-lookup.display_paragraph.line_break_by_truncating_tail.text-element").text
        
        save_to_db(category, brand, product_name, price)

def main():
    create_table()
    categories = ["상의", "하의", "신발", "패션잡화"]
    driver = setup_driver()

    try:
        for category in categories:
            print(f"===== '{category}' 수집 시작 =====")
            search_product(driver, category)
            
            html = driver.page_source
            soup = BeautifulSoup(html, "html.parser")
            extract_product_info(soup, category)
            
        conn.close()
    finally:
        driver.quit()

# 직접실행시 작동하는 코드
# 불러올때 실행되지 않게 하기 위해 작성
if __name__ == "__main__":
    main()