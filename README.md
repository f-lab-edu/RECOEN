# RECOEN

> Read, Code, and Enrich others

다른 사람의 삶과 나의 삶을 부유하게 하고 싶은,  
책읽는 개발자의 블로그 프로젝트

## 기술스택 :

클라이언트 :

- React : 컴포넌트 기반의 UI 라이브러리로써, vuejs보다는 높은 자율성을 가지며, 풍성한 생태계를 가지고 있다는 점에서 선택하게 되었습니다.
- TypeScript : 정적 타입 검사를 통한 안정성과 타입 인텔리센스를 통한 생산성 향상을 위해 사용했습니다.
- Emotion(CSS) : 가독성 높고, 응집성있는 스타일을 작성하기 위해 css-in-js 라이브러리인 emotionjs를 선택했습니다.
- Recoil : 전역 상태를 관리하기 위한 라이브러리로써, Redux와 비교했을 때, 더욱 간결하고, 상태를 작은 단위로 활용하기에 용이함이 있다고 생각해 사용했습니다.
- Nextjs : 서버사이드 렌더링을 지원하기 위하여 사용했습니다. 또한, 빌드 시간을 단축시키고, 빌드된 파일을 캐싱하여 빠른 로딩을 지원하기 위해 사용했습니다.
- Ramdajs : 함수형 프로그래밍을 위해 사용했습니다. lodash에 비하여 높은 가독성을 가지고 있으며, 트리쉐이킹이 가능하며 더욱 가벼운 라이브러리이기 때문에 사용했습니다.

서버 :

- Node.js : 자바스크립트를 사용하여 서버를 구축하기 위해 사용했습니다.

테스팅 도구 :

- Jest : 테스트 코드를 작성하기 위해 사용했습니다.
- React-testing-library : 컴포넌트 단위의 테스트 코드를 작성하기 위해 사용했습니다.
- Cypress (E2E) : E2E 테스트를 위해 사용했습니다. playwright와 비교를 해본 결과 속도적인 측면에선 상대적으로 느리다는 단점이 있었지만, 퀄리티 높은 공식문서와 잘 구성되어 있는 커뮤니티를 통해 더욱 빠른 학습 및 문제를 해결할 수 있다는 점에서 cypress를 선택하게 되었습니다.

기능 구현에 사용한 도구 :

- axios : HTTP 통신을 위해 사용했습니다.
- next-auth : 소셜 로그인을 손쉽게 구현하기 위해 사용했습니다.
- next-connect : nextjs의 api 기능을 사용할 때 더욱 효율적으로 작성하기 위해 미들웨어 라이브러리로 사용했습니다.
- next-mdx-remote : 디테일 페이지에서 mdx를 사용하기 위해 사용했습니다.
- next-s3-upload : 손쉽게 S3에 이미지를 업로드하기 위해 사용했습니다.
- toast-ui/editor : 여러 에디터 라이브러리 중 지속적으로 관리되고 있으며 한글로 친절하게 공식문서가 작성되어 있기에 선택했습니다.
- plaiceholder : 이미지 최적화를 위하여 lazy 로딩을 사용시, blur 이미지를 제공하기 위해서 사용했습니다.
- mongoose : MongoDB를 사용하기 위해 사용했습니다.

에러 트래킹에 사용한 도구 :

- sentry : 효율적으로 에러 트래킹을 위해 사용했습니다.

DB :

- MongoDB

<br>

## 기능소개

| 기능       | 스크린샷                                                                                                                      |
| ---------- | ----------------------------------------------------------------------------------------------------------------------------- |
| 로그인     | ![login_AdobeExpress](https://user-images.githubusercontent.com/71473074/217205151-9c8f7390-86d8-4768-80a7-8eea776cf956.gif)  |
| 새글작성   | ![new_article_AdobeExpress (1)](https://user-images.githubusercontent.com/71473074/218024244-8757462c-aeb2-44a3-9b01-4140afacb23f.gif)|
| 게시글수정 | ![update_article_AdobeExpress](https://user-images.githubusercontent.com/71473074/218024268-c26cfc6c-c220-41bc-b32c-672e927b47e4.gif)|
| 게시글삭제 | ![delete_article_AdobeExpress](https://user-images.githubusercontent.com/71473074/218024275-1c09d22b-376a-45f8-90d9-a54785db07f4.gif) |
| 슬라이더   | ![slider_AdobeExpress](https://user-images.githubusercontent.com/71473074/217035706-5017f659-f078-46de-85aa-82556120f74f.gif) |




<br>

## ✨자랑하고 싶은 내용

### 객체지향적 설계를 위한 고민과 리액트 고급패턴 활용 :

객체지향적인 관점에서 컴포넌트를 설계함으로써 <u>어떻게하면 유지보수가 용이한 프로젝트가 될 수 있을까를 고민</u>했습니다. 각각의 컴포넌트가 가진 책임을 분리하고 캡슐화함으로써 변경사항이 크게 전파되지 않도록 노력했으며, 특히 모달 컴포넌트처럼 다양한 형태의 모달이 추가 될 수 있는 경우나, 다양한 페이지에서 사용되는 List 컨테이너 같은 경우에는 <u>개방폐쇄원칙을 적용</u>하여 확장성있는 컴포넌트를 작성하기도 했습니다. 이때 Compound Component 패턴이나 Render Prop과 같은 리액트의 고급 패턴을 활용함과 동시에 그 속에 숨어있는 객체지향적 원리 생각하며 트레이드 오프를 고려한 설계를 진행하였습니다. 또한 구체적인 구현사항에 반복적으로 의존하고 있는 것 같은 컴포넌트가 보일 때, 추상 인터페이스에 의존하도록 <u>의존성 역전 원칙을 적용</u>하기도 했습니다. 아래의 링크를 확인하시면 제가 어떤 고민의 과정을 통해서, 각각의 원칙들을 적용했는지 확인하실 수 있습니다.

- [의존성 역전 원칙 적용](https://velog.io/@yesbb/%EB%A6%AC%EC%95%A1%ED%8A%B8%EC%97%90%EC%84%9C-%EC%9D%98%EC%A1%B4%EC%84%B1-%EC%97%AD%EC%A0%84-%EC%9B%90%EC%B9%99%EC%9D%84-%EC%A0%81%EC%9A%A9%ED%95%B4%EB%B3%B4%EC%95%98%EB%8B%A4feat.-%EC%A2%8B%EC%9D%80%EC%84%A4%EA%B3%84%EB%9E%80%EB%AC%B4%EC%97%87%EC%9D%BC%EA%B9%8C)
- [개방폐쇄원칙 적용](https://velog.io/@yesbb/%EA%B0%9D%EC%B2%B4%EC%A7%80%ED%96%A5%EC%9D%98-%EA%B4%80%EC%A0%90%EC%9C%BC%EB%A1%9C-%EB%B0%94%EB%9D%BC%EB%B3%B8-%EB%A6%AC%EC%95%A1%ED%8A%B8-%EA%B3%A0%EA%B8%89-%ED%8C%A8%ED%84%B4-Compound-component-Render-props#%EA%B0%9C%EB%B0%A9%ED%8F%90%EC%87%84%EC%9B%90%EC%B9%99%EC%9C%BC%EB%A1%9C-%EB%B0%94%EB%9D%BC%EB%B3%B4%EA%B8%B0--render-prop)

### 테스트코드 작성 :

#### 단위 테스트 :

jest와 react-testing-library를 활용해 매 컴포넌트마다 단위테스트를 작성하기 위해 노력했습니다. 테스트를 작성할 때는 효율성을 생각하여, 가능하면 많은 곳에서 사용중인 모듈에 대해서 우선적으로 테스트를 작성하기 위해서 노력했습니다. 제가 이렇게 단위 테스트를 작성함으로써 얻게된 이점은 3가지였습니다.

1. 단일한 책임을 가진 컴포넌트 : 테스트 코드를 작성하면서 자연스럽게 해당 모듈이 가진 책임을 명시적으로 확인할 수 있었습니다. 덕분에 컴포넌트가 가진 책임이 너무 크지는 않은지, 응집도가 낮지는 않은지를 명확하게 파악할 수 있었고, 이를 기반으로 컴포넌트를 분리할 사고의 기준도 얻을 수 있었습니다.
2. 빠른 에러 캐치와 리팩토링의 자신감 : 에러를 빨리 발견할 수 있다는 것은 소프트웨어가 점점 더 견고하고 안정성이 높아지고 있다는 것을 의미합니다. 각각의 기능요구사항에 대한 테스트를 작성함으로써, 리팩토링시 에러가 발생하는 일이 있을 때면 빠르게 컴파일타임에 빠르게 확인할 수 있었습니다. 예를 들어 모달 컴포넌트를 작성하면서, permit 리코일 파일 이 필요 없어지면서 삭제했는데, 이 때 이 파일을 의존하고 있는 다른 컴포넌트들을 빠르게 확인할 수 있었습니다. 이처럼 의존성이 엮여있는 컴포넌트들의 경우 변경 사항이 생겼을 때 빠르게 문제를 확인할 수 있는 장점이 있었습니다. 덕분에 리팩토링에 대한 자신감을 가지고 시도할 수 있었습니다.
3. 코드의 문서화 : 저는 테스트 코드를 작성할 때, BDD기반의 테스트코드를 작성했습니다. GWT(Given, When, Then)의 형태로 테스트코드를 작성함으로써, 다른 개발자가 테스트코드만 읽어도 해당 모듈이 어떤 상황에서 어떤 결과를 기대할 수 있는지 작성함으로써 협업시 효율을 높혔고, 나아가 비개발자가 읽더라도 문제 없이 이해할 수 있도록 작성하였습니다.

#### E2E 테스트 :

cypress를 활용해 핵심 비즈니스 로직에 대하여 유저의 시나리오를 기반으로 한 테스트를 작성했습니다. 이를 통해 사용자 경험을 확보하고, 기능 추가 및 수정 시 빠르게 에러를 캐치할 수 있었습니다. 또한 E2E 테스트도 BDD 기반으로 작성함으로써 누구나 읽고 이해할 수 있게 하였습니다.

## 🧐 신경 쓴 부분

### 효율적인 폴더링을 위한 고민 :

#### 1.atomic 패턴을 버리고, 도메인별 폴더링을 선택한 이유 :

기존에는 atomic 패턴을 따라 폴더구조를 설계했습니다. atomic 패턴을 사용했던 이유는 계층별로 추상화 된 기준을 따라서 컴포넌트를 분리하다보면 재사용성 높은 컴포넌트를 얻게 될 것으로 기대했기 때문입니다. 하지만, 이내 atomic 패턴의 단점을 발견하게 되었습니다. 해당 패턴으로 폴더구조를 설계하는 순간, 특정 컴포넌트가 어디있는지 찾기 위해서 해당 컴포넌트가 어떤 계층에 속하는지 떠올리는 추가적인 인지 절차가 필요하다는 것을 느꼈고, 이는 직관성을 떨어뜨리고 가독성을 저하시키는 요인이 되었습니다. 동료와의 협업 및 가독성을 선택할지, 재사용성 높은 컴포넌트를 작성하도록 돕는 구조를 선택할지 놓고 트레이드오프를 고려한 결과, 동료와의 협업 및 가독성을 높이기 위해 atomic 패턴을 사용하지 않기로 했습니다. 재사용성 높은 컴포넌트를 작성하기 위해선 다른 추상화 전략을 활용해야겠다 판단했습니다.

결국 제가 선택한 폴더링 방법은 도메인별로 폴더구조를 나누는 방식입니다. 이 방식을 선택한 이유는 그것이 직관적이고 훨씬 더 응집도 높은 방식이기 때문입니다. article과 관련된 컴포넌트는 article이라고 적힌 폴더를 찾으면 되고, button과 같이 범용적인 컴포넌트는 ui폴더를 찾으면 됩니다. 이렇게 연관된 주제별로 파일들을 묶어 놓음으로써 응집도를 높일 수 있었습니다. 그 결과 이전보다 훨씬 더 작업의 효율을 높이고, 쉽게 컴포넌트를 찾을 수 있었습니다.

#### 2.index.ts를 이용하지 않는 구조

기존에는 모든 폴더마다 index.ts를 사용하여 폴더 자체를 import해올 수 있는 방식으로 작성하였습니다. 하지만 이런 방식으로 폴더를 관리할 경우, 이름에 대한 수정이 생기거나, 폴더의 이동이 발생할 경우 관리포인트가 늘어난다는 점을 발견하게 되었습니다. 때문에 관리포인트를 하나라도 줄이기 위해 폴더에서 index.ts를 사용하지 않기로 결정했습니다. 반면 hooks나 utils 같은 경우에는 파일간의 이동의 확률이 매우 적기 때문에 index.ts를 사용하는 것이 효율적일 것이라고 판단하였고, 이에 따라 hooks와 utils 폴더는 index.ts를 사용하였습니다.

### 함수형 프로그래밍을 적용하기 위한 시도 :

함수형 프로그래밍에 대한 학습을 병형하며 진행하였습니다. 이를 적용하기 위해 유틸함수를 작성할 때 ramdajs 라이브러리에서 제공하는 pipe와 curry와 같은 함수를 활용해 순수한 함수를 조합하는 방식으로 작성하였습니다. 이를 통해 훨씬 더 간결하고 가독성 높은 코드를 작성할 수 있었습니다.

```javascript
// getTags 유틸
import pipe from 'ramda/src/pipe';
import pluck from 'ramda/src/pluck';
import flatten from 'ramda/src/flatten';
import uniq from 'ramda/src/uniq';

export const getTags = pipe(pluck('tags'), flatten, uniq);
```

```javascript
// isAnyPropertyEmpty 유틸
import pipe from 'ramda/src/pipe';
import values from 'ramda/src/values';
import isEmpty from 'ramda/src/isEmpty';
import any from 'ramda/src/any';

export const isAnyPropertyEmpty = pipe(values, any(isEmpty));
```

```javascript
// filterArticles
import curry from 'ramda/src/curry';
import includes from 'ramda/src/includes';
import filter from 'ramda/src/filter';

const filterArticles = curry(
  (articles: ViewArticleElement[], selectedTag: string) =>
    filter((article) => includes(selectedTag, article.tags), articles),
);
```

### CI 구축 및 테스트 자동화 :

github action을 통해 매 pr마다 테스트코드, 린트, 번들사이즈등을 지속적으로 체크하였습니다. 매 pr마다 자동으로 실행되는 테스트를 통해서 깜빡하고 놓쳐 버린 테스트를 확인할 수 있었고, next-bundle-analyzer를 통해 현재 pr이 기존의 번들 사이즈에 비해 얼마나 커졌는지 확인할 수 있었습니다.

### SEO 최적화 :

og 태그와 Head컴포넌트를 메인페이지와 동적페이지들에 적용하여 필요한 메타 데이터를 제공하여 SEO를 최적화 했습니다. 매 페이지마다 sitemap이 동적으로 생성될 수 있도록 하였고 이를 통해 검색엔진에 잡힐 수 있도록 하였습니다. 다른 link로 향하는 a 태그의 경우에는 title 속성에 필요한 설명을 부여하기, robots.txt 제공하기, 이미지 alt속성 제공하기 등등 SEO에 필요한 요소를 적용했고, 그 결과 라이트하우스 SEO점수에서 100점을 받을 수 있었습니다.

### 효율적인 에러 트래킹 :

내가 개발하는 환경에서는 어떤 에러가 발생하는지 어디서 발생했는지 트래킹하는 것이 비교적 쉽습니다. 하지만, 유저의 환경에서는 어떤 에러가 발생했는지 유저가 직접 리포트해주지 않는 이상 그것을 트래킹하기는 어렵습니다. 이런 효율적인 에러 트래킹을 하기 위해서 sentry를 사용하였습니다. 그 결과 유저의 환경에서 어떤 에러가 발생했는지, 또한 sourcemap을 통해 어떤 코드로부터 에러가 발생했는지를 트래킹할 수 있었습니다.

### 접근성 :

#### 시맨틱 태그

div나 span 태그 사용하기를 지양하고, 시맨틱한 태그를 사용하기 위해 고민했습니다. `article`, `time`, `section`, `blockquote`, `cite`, `nav`와 같은 태그들을 적절히 활용하였습니다. `h1` 태그 같은 경우에는 한 페이지당 하나만 존재하도록 작성하였으며, heading 요소들이 순서를 갖추어 화면을 구성할 수 있도록 작성했습니다. 또한 필요한 곳에서 button이나 a 태그를 활용함으로써, 모든 페이지에서 tabIndex도 순서에 알맞게 움직일 수 있게 하였습니다.

#### aria-label

대부분의 요소들을 시맨틱하게 작성한 결과, aria-label을 넣지 않아도 screen reader가 정상적으로 모든 요소들을 읽을 수 있게 되었습니다. 하지만, 직접 눈을 감고 screen reader를 통해서 모든 요소들을 확인해 본 결과, 몇몇 요소들의 경우 문맥상 시맨틱 태그으로만은 이해하기 어렵겠다고 판단된 요소들이 있었습니다.

1. tag 기반 검색 요소 :
   tag 기반 검색 버튼 같은 경우에는 button이라는 role 만으로는 사용자가 어떤 역할을 하는지 이해하기 어렵다고 판단했습니다. 때문에 해당 요소에는 aria-label을 넣어주었습니다.

```javascript
<StyledChip
  ...
  aria-label={clickable ? `태그 기반 검색 ${label}` : `태그 ${label}`}
>
  {label}
  {deletable && <Image src={XImage} alt="삭제" width={8} height={8} />}
</StyledChip>
```

2. 제목과 설명글 :
   해당 내용을 스크린 리더가 쭉쭉 읽어나가지만, 추가적으로 무엇에 대한 내용인지 설명을 덧붙임으로써 더 이해하기 쉽도록 만들었습니다.

```javascript
<Title aria-label={`제목 : ${title}`}>{title}</Title>
<Desc aria-label={`설명글 : ${description}`}>{description}</Desc>
```

이렇게 기본적으로 시맨틱하게 작성함으로써 최대한 aria- 요소를 사용하는 것을 피했으며, 직접 screen reader를 통해 확인함으로써 문맥상 꼭 필요하거난 도움이 되겠다고 판단되는 내용들에 한해서만 aria- 요소를 사용했습니다. 그 결과 screen reader 만으로도 안정적으로 어플리케이션을 이용할 수 있게 되었습니다.

#### 언어 설정

기본적으로 전체 페이지의 언어 설정을 ko로 해두고, 영어를 사용하는 곳이 명확한 곳에서 lang="en" 프로퍼티를 사용하였습니다. 이를 통해 AT 기기가 정확하게 언어를 인지할 수 있게 만들었습니다.

```javascript
  <Title lang="en">recoen.</Title>
  ...
  <StyledLink href={path} title={title} passHref legacyBehavior>
    <Item ref={ref} barWidth={barWidth} isActive={isActive} lang="en">
      {name}
    </Item>
  </StyledLink>
```

#### rem

font-size 에 대해서 px로 고정하지 않고, 유저가 기본으로 설정 해준 폰트 사이즈에 반응해 화면에 보여질 수 있도록 모든 font-size에 대해 rem을 적용했습니다.
