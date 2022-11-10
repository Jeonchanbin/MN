// 01.start 리액트 JS
// html태그와 JS문법을 따옴표 없이 사용하는 JSX문법을 쓴다
// JSX(Javascript XML) 문법을 쓰는 파일은 .js 대신 .jsx 확장자를 씀
function MyFirstReact() {
    return (
        <div>
            <h1>잘해보자</h1>
            <h2>
                [ 리액트란? ] <br/> <br/> 
                프론트엔드 JS 라이브러리다
                사용자 UI의
                구성요소를 빌드하기 위한 도구 <br/> 
                [ 작동원리 ] <br/> <br/>  
                가상돔(virtual
                DOM)을 사용하여 최소의 html리소스를 사용함으로 <br/> 
                빠르고 쉽게
                UI화면의 구성한다 <br/>  
                가상돔은 실제 DOM을 변경하기 전에
                메모리상에서 구성하는 가짜 DOM이다 <br/> 
                변경사항을 한번에 구성하여
                반영하기 위한 도구다 <br/> 
                리액트는 변경하고자 하는 부분만 업데이트
                가능함 <br/> 
            </h2>
        </div>
    );
} ////////////// MyFirstReact 함수 ////////////////
