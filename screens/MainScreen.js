import React from "react";
import { Container, Typography, Button } from './_atoms';
import { FontAwesome5 } from '@expo/vector-icons';
// 링크
import { Linking } from 'react-native';

function MainScreen({navigation}) {
    // next로 가는 링크 작성 
  return (
    <Container>
      <Typography style={style.title}>게임장르로 MBTI 검사</Typography>
      <Button onPress={() => navigation.navigate('QuizScreen')} style={{marginBottom: 20}}>
        <Typography>테스트 시작</Typography>
      </Button>
      <FontAwesome5 
        name="github" size={30} color="#fff" onPress={() => Linking.openURL('https://github.com/byongshintv/mbti-check-by-game-genre')} />
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