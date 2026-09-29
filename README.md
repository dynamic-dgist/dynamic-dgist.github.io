# Research Lab Website

연구실 웹사이트 소스입니다. 상단 메뉴와 하단 소속 정보가 적용된 2026-09-29 버전입니다.
HTML, CSS, JavaScript만 사용하며 별도 설치나 빌드가 필요하지 않습니다.

## 파일별 수정 위치

| 파일 | 내용 |
| --- | --- |
| `index.html` | 메인 사진, 연구실 소개, News |
| `members.html` | 교수, 학생, 졸업생 |
| `research.html` | 연구 프로젝트 |
| `publications.html` | 연도별 논문 |
| `contact.html` | 이메일, 소속, 주소 |
| `style.css` | 상단 메뉴, 글꼴, 색상, 여백, 모바일 레이아웃 |
| `main.js` | 모바일 메뉴 열기와 닫기 |
| `campus.jpg` | 메인 예시 사진 |

## 콘텐츠 수정

- 연구실 이름과 공통 메뉴, 하단 소속 문구는 다섯 HTML 파일에 각각 들어 있습니다. 공통 내용을 바꾸면 다섯 파일에 동일하게 반영하세요.
- 메인 사진은 `campus.jpg`를 새 사진으로 교체하면 됩니다. `index.html`의 이미지 대체 텍스트(`alt`)와 설명도 실제 사진에 맞게 수정하세요.
- News는 `index.html`의 `newsrow` 블록을 복사해 맨 위에 추가하고 날짜와 내용을 바꾸세요.
- 실제 멤버와 연구 내용은 각 HTML에서 수정하세요. 현재 연구실 이름, 소속, 인물과 논문 정보는 임시 콘텐츠입니다.
- 연락처는 `contact.html`에 입력하세요. 이메일 링크는 실제 주소를 확인한 뒤 `mailto:` 링크로 추가할 수 있습니다.
- 새 페이지를 추가하면 모든 HTML의 상단 메뉴도 함께 수정하세요.

## GitHub에서 관리

이 폴더의 내용물을 저장소 최상위에 올리면 됩니다. ZIP 파일 자체가 아니라 압축을 푼 파일들을 올리세요.
소스 관리만 하려면 Pages 설정은 필요하지 않습니다. 수정할 때는 변경 이유가 드러나는 커밋 메시지를 남기고, 공동 작업은 브랜치와 Pull Request를 사용하면 됩니다.

이 사본은 기존 사이트와 자동 동기화되지 않습니다. GitHub에서 수정한 내용을 실제 사이트에 반영하려면 별도로 게시하거나, 아래의 GitHub Pages를 선택해 설정하세요.

## 선택 사항: GitHub Pages로 게시

공개 게시를 원할 때만 설정하세요. GitHub Pages 웹사이트는 일반적으로 인터넷에 공개됩니다. 비공개 저장소 지원 여부는 계정 요금제에 따라 다릅니다.

1. 파일들을 `main` 브랜치 최상위에 올립니다.
2. 저장소에서 **Settings → Pages**를 엽니다.
3. **Source → Deploy from a branch**를 선택합니다.
4. 브랜치는 **main**, 폴더는 **/(root)**를 선택하고 저장합니다.
5. 배포가 완료되면 Pages 화면에 표시되는 주소로 접속합니다.

이후 해당 브랜치에 커밋하면 GitHub Pages에 변경 사항이 반영됩니다. `.nojekyll`은 빌드 없이 정적 파일을 게시하기 위한 파일입니다.

공식 안내: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

## 로컬 확인

`index.html`을 브라우저에서 열어 확인할 수 있습니다. 또는 Python이 설치된 환경에서 폴더 안에서 다음 명령을 실행하세요.

```sh
python3 -m http.server 8000
```

브라우저에서 `http://localhost:8000`에 접속하고, 종료하려면 터미널에서 Ctrl+C를 누릅니다.

## 사진 출처

현재 사진은 실제 연구실 사진이 아닌 예시 이미지입니다.

- Damar Scott / Unsplash
- https://unsplash.com/photos/modern-building-on-a-grassy-campus-with-trees-_hjgDAtTLNc
- 이용 조건: https://unsplash.com/license
