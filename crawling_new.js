// var optionAxios = {
//     headers: {
//     //   'Content-Type': 'application/x-www-form-urlencoded',
//       'Access-Control-Allow-Origin': '*',
//       'Access-Control-Allow-Methods': 'GET',
//       'Access-Control-Allow-Headers': 'Content-Type, Authorization, Content-Length, X-Requested-With'
//     }
// }

// var url = "https://docs.google.com/forms/d/e/1FAIpQLSclatJNoiZUvLfV1VPGRw5qnd5BQQz3vsln48Rr2bHgoJOXRw/viewform";
// const getHtml = async () => {
//   try {
//     return await axios.get(
//         'https://cors-anywhere.herokuapp.com/'+url,optionAxios
// );
//   } catch (error) {
//     console.error(error);
//   }
  
// };
const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
const url = "https://docs.google.com/forms/d/e/1FAIpQLSclatJNoiZUvLfV1VPGRw5qnd5BQQz3vsln48Rr2bHgoJOXRw/viewform";

async function crawl(url) {
    // 수집중인 URL
    const decodedUrl = decodeURI(url);
    console.log(`크롤링 ${decodedUrl} ...`);
    // URL에서 데이터를 가져옴
    const response = await fetch(proxyUrl + url, {
        headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3',
            'Accept-Language': 'ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7'
        }
    });
    // 응답 데이터를 문자열로 변환
    const htmlString = await response.text();
    // HTML 문자열을 파싱하여 DOM 객체 생성
    const parser = new DOMParser();
    const htmlDOM = parser.parseFromString(htmlString, 'text/html');
    
    // 데이터 추출
    const elements = htmlDOM.querySelectorAll(".geS5n");
    // // 페이지내의 텍스트만 가져오기
    // const content = htmlDOM.querySelector('#mw-content-text').textContent;
    // // 추출한 데이터에서 연속된 개행 문자를 하나의 공백으로 대체    
    // const contentWithSingleNewlines = content.replace(/\n{2,}/g, '\n');
    elements.forEach (function (element) {
        console.log (element.textContent+'\n');
    });
    // console.log(`Title: ${title}\n`);
}
// 실행
crawl(url)
    .then(() => {
        console.log('데이터 수집 완료');
    })
    .catch(err => console.error(err));