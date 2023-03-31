import React from "react";
import { View, Text } from "react-native";
import { Container, Typography, Button } from './_atoms';

const typeConversionEntries = [ ['I','E'], ['N','S'], ['F','T'], ['P','J'], ]

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

    // next로 가는 링크 작성 
  return (
    <Container>
      <Typography>당신의 검사 결과는...</Typography>
      <Typography style={style.bigText}> {letterStockEntries.join('')} </Typography>
      <Typography>입니다.</Typography>
      <Button onPress={() => navigation.navigate('MainScreen')}>
        <Typography>메인화면으로</Typography>
      </Button>
    </Container>
  );
}

const style = {
  bigText: {
    fontSize: 60,
    fontWeight: "bold",
    marginVertical: 30,

  }
}



export default ResultScreen;