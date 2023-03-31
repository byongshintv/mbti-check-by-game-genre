import React from "react";
import { Container, Typography, Button } from './_atoms';

function MainScreen({navigation}) {
    // next로 가는 링크 작성 
  return (
    <Container>
      <Typography style={style.title}>게임장르로 MBTI 검사</Typography>
      <Button onPress={() => navigation.navigate('QuizScreen')}>
        <Typography>테스트 시작</Typography>

      </Button>

      
    </Container>
  );
}

const style = {
  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 20,
  }
}



export default MainScreen;