import React from "react";
import { Container, Typography, Button } from './_atoms';

function MainScreen({navigation}) {
    // next로 가는 링크 작성 
  return (
    <Container>
      <Typography style={style.title}>게임장르 MBTI 검사</Typography>
      <Typography> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
      </Typography>
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