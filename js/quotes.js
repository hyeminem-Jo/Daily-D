const quotes = [{
    quote: "단순하게 살아라. 현대인은 쓸데없는 절차와 일 때문에 얼마나 복잡한 삶을 살아가는가?",
    author: "이드리스 샤흐(Idris Schach)"
  },
  {
    quote: "절대 어제를 후회하지 마라 . 인생은 오늘의 나 안에 있고 내일은 스스로 만드는 것이다",
    author: "L.론허바드 (L. Ronhubard)"
  },
  {
    quote: "어리석은 자는 멀리서 행복을 찾고, 현명한 자는 자신의 발치에서 행복을 키워간다",
    author: "제임스 오펜하임(James Oppenheim)"
  },
  {
    quote: "너무 소심하고 까다롭게 자신의 행동을 고민하지 말라 . 모든 인생은 실험이다 . 더많이 실험할수록 더나아진다",
    author: "랄프 왈도 에머슨(Ralph Waldo Emerson)"
  },
  {
    quote: "화려한 일을 추구하지 말라. 중요한 것은 스스로의 재능이며, 자신의 행동에 쏟아 붓는 사랑의 정도이다",
    author: "머더 테레사(Mother Teresa)"
  },
  {
    quote: "재산을 잃은 사람은 많이 잃은 것이고, 친구를 잃은 사람은 더많이 잃은 것이며, 용기를 잃은 사람은 모든것을 잃은 것이다",
    author: "세르반테스(Cervantes)"
  },
  {
    quote: "행복의 한 쪽 문이 닫히면 다른 쪽 문이 열린다. 그러나 흔히 우리는 닫혀진 문을 오랫동안 보기 때문에 우리를 위해 열려 있는 문을 보지 못한다",
    author: "헬렌 켈러(Helen Keller)"
  },
  {
    quote: "자신의 본성이 어떤것이든 그에 충실하라 . 자신이 가진 재능의 끈을 놓아 버리지 마라. 본성이 이끄는 대로 따르면 성공할것이다",
    author: "시드니 스미스(Sydney Smith)"
  },
  {
    quote: "지금이야 말로 일할때다. 지금이야말로 싸울때다. 지금이야말로 나를 더 훌륭한 사람으로 만들때다 오늘 그것을 못하면 내일 그것을 할수있는가",
    author: "토마스 아켐피스  (Thomas Akempis)"
  },
  {
    quote: "삶이 그대를 속일지라도 슬퍼하거나 노하지 말아라 슬픈 날에 참고 견디라 . 즐거운 날은 오고야 말리니 마음은 미래를 바라느니 현재는 한없이 우울한것 모든건 하염없이 사라지나가 버리고 그리움이 되리니",
    author: "푸쉬킨(Pushkin)"
  }
]

const quote = document.querySelector("#quote .quote")
const author = document.querySelector("#quote .author")

const todayQuote = quotes[Math.floor(Math.random() * quotes.length)]

quote.innerText = `"${todayQuote.quote}"`
author.innerText = `- ${todayQuote.author} -`