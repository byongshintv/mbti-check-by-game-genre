import React from "react";
import { View, Text } from "react-native";
import { Container, Typography, Button } from './_atoms';

const typeConversionEntries = [ ['I','E'], ['N','S'], ['F','T'], ['P','J'], ]

function wrapGPTResult(text){
  return Object.fromEntries(text.
    split("\n").slice(1).map((line) => line.split(/\: ?/))
  )
}

let chatGPTResult = wrapGPTResult(`ISTJ: 체계적이고 조직적이며 구체적인 사실에 기반을 둔 게임을 선호합니다. 전략 시뮬레이션 게임과 같은 게임이 이 유형에게 매우 인기가 있습니다.
ISFJ: 협력적이고 책임감이 강하며, 다른 사람들을 도와주는 게임을 선호합니다. 대화 중심의 게임, 의사 결정 게임, 협동적인 게임 등이 이 유형에게 적합합니다.
INFJ: 이상주의적이며, 인간관계에 대한 관심이 매우 높습니다. 이 유형은 역할 연기 게임, 체스, 미스터리 게임 등의 게임을 좋아합니다.
INTJ: 전략적이며, 현실적인 게임을 좋아합니다. 비디오 게임에서는 전략 게임, 보드 게임에서는 체스와 같은 게임을 선호합니다.
ISTP: 도전을 즐기며, 실제 경험과 현실감 있는 게임을 좋아합니다. 스포츠 게임, 레이싱 게임 등의 게임이 이 유형에게 매우 적합합니다.
ISFP: 예술적인 요소와 재미 요소가 있는 게임을 선호합니다. 비디오 게임에서는 RPG, 대화 중심 게임, 보드 게임에서는 카드 게임과 같은 게임을 좋아합니다.
INFP: 이상주의적이며, 규칙적이고 표준화된 게임보다는 개성 있고 자유로운 게임을 선호합니다. 대화 중심 게임, 창작 게임, 비디오 게임에서는 어드벤처 게임 등이 이 유형에게 인기가 있습니다.
INTJ: 전략적이며, 현실적인 게임을 좋아합니다. 비디오 게임에서는 전략 게임, 보드 게임에서는 체스와 같은 게임을 선호합니다.
ESTP: 경험에 의존하며, 무엇이든 시도해보는 게임을 좋아합니다. 경주 게임, 액션 게임, 체력 게임 등의 게임이 이 유형에게 매우 인기가 있습니다.
ESFP: 새로운 경험을 추구하며, 활동적인 게임을 좋아합니다. 음악 게임, 리듬 게임, 스포츠 게임과 같은 게임이 이 유형에게 매우 인기가 있습니다. 또한, 소셜 게임과 같이 다른 사람들과 함께하는 게임도 좋아합니다.
ENFP: 개성 있고 창의적인 게임을 좋아합니다. 인터랙티브한 비디오 게임, 창작 게임, 컴퓨터 게임과 같이 창의성을 발휘할 수 있는 게임을 좋아합니다.
ENTP: 도전적이며, 논쟁과 토론을 좋아하는 유형입니다. 논쟁 게임, 전략 게임, 머드 게임과 같은 게임이 이 유형에게 매우 적합합니다.
ESTJ: 목표를 달성하는 것을 좋아하며, 경쟁적인 게임을 좋아합니다. 스포츠 게임, 경영 시뮬레이션 게임, 전투 게임과 같은 게임이 이 유형에게 매우 인기가 있습니다.
ESFJ: 타인과의 관계를 중요하게 생각하며, 협동적인 게임을 좋아합니다. 퍼즐 게임, 캐주얼 게임, 대화 중심 게임과 같은 게임이 이 유형에게 매우 적합합니다.
ENFJ: 사람들과의 교류를 중요시하며, 역할 연기와 같은 게임을 좋아합니다. RPG 게임, 인터랙티브 스토리 게임, 협동 게임과 같은 게임이 이 유형에게 매우 인기가 있습니다.
ENTJ: 결정력이 강하며, 전략적인 게임을 좋아합니다. 경영 시뮬레이션 게임, 전략 게임, 대규모 다중 사용자 게임과 같은 게임이 이 유형에게 매우 인기가 있습니다.`)

let bingGPTResult = wrapGPTResult(`ISTJ: 전략적인 게임을 좋아하며, 계획적이고 체계적으로 플레이합니다. 팀 게임에서는 실행자나 완결자 역할을 맡으며, 일정이나 규칙을 잘 지킵니다.
ISFJ: 시뮬레이션 게임을 좋아하며, 현실적이고 세심하게 플레이합니다. 팀 게임에서는 조정자나 팀워크 조성자 역할을 맡으며, 다른 팀원들을 도우며 분위기를 유지합니다.
INFJ: RPG 게임을 좋아하며, 창의적이고 독창적으로 플레이합니다. 팀 게임에서는 창조자나 전문가 역할을 맡으며, 새로운 아이디어나 전략을 제시합니다.
INTJ: 전략적인 게임을 좋아하며, 논리적이고 분석적으로 플레이합니다. 팀 게임에서는 판단자나 추진자 역할을 맡으며, 문제 해결이나 결정에 기여합니다.
ISTP: 액션 게임을 좋아하며, 실용적이고 유연하게 플레이합니다. 팀 게임에서는 자원 탐색자나 실행자 역할을 맡으며, 새로운 기회나 도전에 응합니다.
ISFP: 모험 게임을 좋아하며, 감각적이고 자유로운 방식으로 플레이합니다. 팀 게임에서는 창조자나 팀워크 조성자 역할을 맡으며, 다양한 경험과 감정을 공유합니다.
INFP: RPG 게임을 좋아하며, 이상적이고 개성적으로 플레이합니다. 팀 게임에서는 창조자나 전문가 역할을 맡으며, 자신의 가치관과 비전을 반영합니다.
INTP: 전략적인 게임을 좋아하며, 지적이고 탐구적으로 플레이합니다. 팀 게임에서는 판단자나 추진자 역할을 맡으며, 복잡한 문제나 상황에 대응합니다.
ESTP: 스포츠 게임을 좋아하며, 적극적이고 재기발랄하게 플레이합니다. 팀 게임에서는 자원 탐색자나 실행자 역할을 맡으며, 위기를 기회로 바꾸거나 리스크를 감수합니다.
ESFP: 리듬 게임을 좋아하며, 활기차고 재미있게 플레이합니다. 팀 게임에서는 팀워크 조성자나 추진자 역할을 맡으며, 다른 사람들과 소통하거나 동기를 부여합니다.
ENFP: RPG 게임을 좋아하며, 상상력과 유머감각으로 플레이합니다. 팀 게임에서는 창조자나 전문가 역할을 맡으며, 새로운 가능성이나 재미를 발견합니다.
ENTP: 전략적인 게임을 좋아하며, 도전적이고 변화를 추구하는 방식으로 플레이합니다. 팀 게임에서는 판단자나 추진자 역할을 맡으며, 혁신적인 아이디어나 해결책을 제안합니다.
ESTJ: 전략적인 게임을 좋아하며, 목표지향적이고 체계적으로 플레이합니다. 팀 게임에서는 완결자나 조정자 역할을 맡으며, 효율적인 계획이나 조직을 만듭니다.
ESFJ: 시뮬레이션 게임을 좋아하며, 협조적이고 친절하게 플레이합니다. 팀 게임에서는 조정자나 팀워크 조성자 역할을 맡으며, 다른 사람들의 필요나 감정에 반응합니다.
ENFJ: RPG 게임을 좋아하며, 친화적이고 영감을 주는 방식으로 플레이합니다. 팀 게임에서는 전문가나 추진자 역할을 맡으며, 공동의 비전이나 목표를 세우고 이끕니다.
ENTJ: 전략적인 게임을 좋아하며, 리더십과 자신감으로 플레이합니다. 팀 게임에서는 판단자나 추진자 역할을 맡으며, 전체적인 방향성이나 의사결정에 영향력을 발휘합니다.`)


//letterStock, round 파라미터 가져오기
function ResultScreen({route, navigation}) {
  const { letterStock, round } = route.params;
  let letterStockEntries = Object.entries(letterStock);
  //letterStockEntries에서 round만큼 나눈게 0.5 밑이면 I,N,F,P로 바꾸기
  letterStockEntries = letterStockEntries.map(([type, PercentageFloat]) => {
    if(PercentageFloat / round < 0.5){
      type = typeConversionEntries.find(([from, to]) => from === type)[1];
    }
    return type
  });

  let mbti = letterStockEntries.join('');
  return (
    <Container>
      <Typography>당신의 검사 결과는...</Typography>
      <Typography style={style.bigText}> {mbti} </Typography>
      <Typography style={{marginBottom:10}}>입니다.</Typography>
      <Quotation citation={ chatGPTResult[mbti] } attribution="ChatGPT" />
      <Quotation citation={ bingGPTResult[mbti] } attribution="bingGPT" />
      <Button onPress={() => navigation.navigate('MainScreen')}>
        <Typography>메인화면으로</Typography>
      </Button>
    </Container>
  );
}

const Quotation = ({ citation, attribution }) => {
  return (
    <View>
      <Typography style={ style.quotation.citation}>"{citation}"</Typography>
      <Typography style={ style.quotation.attribution}>- {attribution}</Typography>
    </View>
  );
};


const style = {
  bigText: {
    fontSize: 60,
    fontWeight: "bold",
    marginVertical: 15,
  },
  quotation: {
    citation: {
      fontSize: 20,
      fontStyle: "italic",
      marginVertical: 10,
    },
    attribution: {
      fontSize: 15,
      textAlign: "right",
    },
  },
}



export default ResultScreen;