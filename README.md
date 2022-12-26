# RECOEN

> Read, Code, and Enrich others

다른 사람의 삶과 나의 삶을 부유하게 하고 싶은,  
책읽는 개발자의 블로그 프로젝트

## 기술스택

- React
  - recoil
  - emotion
- NextJs
  - next-auth
  - next-connect
  - next-mdx-remote
  - next-s3-upload
- Typescript
  - fxts
- jest
- react-testing-library
- toast-ui/editor
- axios
- sharp
- plaiceholder
- mongoose
- yarn berry
- sentry

<br>

## 🧐 신경 쓴 부분

### CI 구축 :

github action을 통해 매 pr마다 테스트코드, 린트, 번들사이즈등을 지속적으로 체크하였습니다. 깜빡하고 놓쳐 버린 테스트들을 확인할 수 있었고, next-bundle-analyzer를 workflow에 추가함으로써 현재 pr에서 기존에 비해 얼마나 번들사이즈가 커졌는지 확인할 수 있었습니다.

### SEO 최적화 :

og 태그와 Head컴포넌트를 메인페이지와 동적페이지들에 적용하여 검색최적화를 실행하였습니다. 또한 매 페이지마다 sitemap이 동적으로 생성될 수 있도록 하였고 이를 통해 검색엔진에 잡힐 수 있도록 하였습니다. 그 결과 라이트하우스 SEO점수에서 100점을 받을 수 있었습니다.

### 테스트코드 작성 :

jest와 react-testing-library를 활용해 매 컴포넌트마다 단위테스트를 작성하기 위해 노력했습니다. 이를 통해 코드에 대한 안정성을 확보하는 동시에, 컴포넌트가 가진 책임이 너무 크지는 않은지, 응집도가 낮지는 않는지를 확인할 수 있었으며, 컴포넌트를 분리할 사고의 기준도 얻을 수 있었습니다. 또한 각각의 기능요구사항에 대한 테스트를 작성함으로써, 리팩토링시 에러가 발생하는 일이 있을 때, 컴파일타임에 빠르게 확인할 수 있었습니다. 예를 들어 모달 컴포넌트를 작성하면서, permit 리코일 파일 이 필요 없어지면서 삭제했는데, 이 때 이 파일을 의존하고 있는 다른 컴포넌트들을 빠르게 확인할 수 있었습니다. 덕분에 리팩토링에 대한 자신감을 가지고 시도할 수 있었습니다.

### 함수형 프로그래밍을 적용하기 위한 시도 :

함수형 프로그래밍에 대한 학습을 병형하며 진행하였습니다. 이를 적용하기 위해 유틸함수를 작성할 때 fxts 라이브러리에서 제공하는 pipe와 curry와 같은 함수를 활용해 순수한 함수를 조합하는 방식으로 작성하였습니다. 이를 통해 훨씬 더 간결하고 가독성 높은 코드를 작성할 수 있었습니다.

```javascript
// getTags 유틸
import { map, pipe, flat, toArray, uniq } from '@fxts/core';

import { ArticleElement } from 'src/types/article';

export const getTags = (lists: ArticleElement[]) =>
  pipe(
    lists,
    map((article) => article.tags),
    flat,
    uniq,
    toArray,
  );

// isObjectEmpty 유틸
import { pipe, values, some, isEmpty } from '@fxts/core';

export const isObjectEmpty = (elements) =>
  pipe(
    elements,
    values,
    some((element) => isEmpty(element)),
  );
```

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

<br>

## ✨자랑하고 싶은 내용

### 객체지향적 설계를 위한 고민 :

객체지향적인 관점에서 컴포넌트를 설계하고자 고민했습니다. 각각의 컴포넌트가 가진 책임을 분리하고 캡슐화함으로써 변경사항이 크게 전파되지 않도록 고민했으며, 특히 모달 컴포넌트처럼 다양한 형태의 모달이 추가 될 수 있는 경우에는 개방폐쇄원칙을 적용하여 확장성있는 컴포넌트를 작성하기도 했습니다. 또한 구체적인 구현사항에 반복적으로 의존하고 있는 것 같은 컴포넌트가 보일 때, 추상 인터페이스에 의존하도록 의존성 역전 원칙을 적용하기도 했습니다. 아래의 링크를 확인하시면 제가 어떤 고민의 과정을 통해서, 각각의 원칙들을 적용했는지 확인하실 수 있습니다.

- [의존성 역전 원칙 적용](https://velog.io/@yesbb/%EB%A6%AC%EC%95%A1%ED%8A%B8%EC%97%90%EC%84%9C-%EC%9D%98%EC%A1%B4%EC%84%B1-%EC%97%AD%EC%A0%84-%EC%9B%90%EC%B9%99%EC%9D%84-%EC%A0%81%EC%9A%A9%ED%95%B4%EB%B3%B4%EC%95%98%EB%8B%A4feat.-%EC%A2%8B%EC%9D%80%EC%84%A4%EA%B3%84%EB%9E%80%EB%AC%B4%EC%97%87%EC%9D%BC%EA%B9%8C)
- [개방폐쇄원칙 적용](https://github.com/f-lab-edu/RECOEN/issues/33#issuecomment-1306821335)

### 효율적인 폴더링을 위한 고민 :

#### 1.atomic 패턴을 버리고, 주제별 폴더링을 선택한 이유 :

기존에는 atomic 패턴을 따라 폴더구조를 설계했습니다. atomic 패턴을 사용했던 이유는 계층별로 추상화 된 기준을 따라서 컴포넌트를 분리하다보면 재사용성 높은 컴포넌트를 얻게 될 것으로 기대했기 때문입니다. 하지만, 이내 atomic 패턴의 단점을 발견하게 되었습니다. 해당 패턴으로 폴더구조를 설계하는 순간, 특정 컴포넌트가 어디있는지 찾기 위해서 해당 컴포넌트가 어떤 계층에 속하는지 떠올리는 추가적인 인지 절차가 필요하다는 것을 느꼈고, 이는 직관성을 떨어뜨리고 가독성을 저하시키는 요인이 되었습니다. 동료와의 협업 및 가독성을 선택할지, 재사용성 높은 컴포넌트를 작성하도록 돕는 구조를 선택할지 놓고 트레이드오프를 고려한 결과, 동료와의 협업 및 가독성을 높이기 위해 atomic 패턴을 사용하지 않기로 했습니다. 재사용성 높은 컴포넌트를 작성하기 위해선 다른 추상화 전략을 활용해야겠다 판단했습니다.

결국 제가 선택한 폴더링 방법은 주제별로 폴더구조를 나누는 방식입니다. 주제별로 폴더구조를 나누는 방식을 선택한 이유는 그것이 직관적이기 때문입니다. article과 관련된 컴포넌트는 article이라고 적힌 폴더를 찾으면 되고, button과 같이 범용적인 컴포넌트는 ui폴더를 찾으면 됩니다. 이렇게 바꾼 결과 이전보다 훨씬 더 쉽게 컴포넌트를 찾을 수 있었습니다.

#### 2.index.ts를 이용하지 않는 구조

기존에는 모든 폴더마다 index.ts를 사용하여 폴더 자체를 import해올 수 있는 방식으로 작성하였습니다. 하지만 이런 방식으로 폴더를 관리할 경우, 이름에 대한 수정이 생기거나, 폴더의 이동이 발생할 경우 관리포인트가 늘어난다는 점을 발견하게 되었습니다. 때문에 관리포인트를 하나라도 줄이기 위해 폴더에서 index.ts를 사용하지 않기로 결정했습니다.
