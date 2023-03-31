import React from "react";
import { Image } from "react-native";
import { Container, Typography, Button } from './_atoms';
import rawMbtiRows from '../assets/mbti-game';
import { useState } from 'react';
import styled from 'styled-components/native';

function sampleArray(array,length){
  let result = [];
  for(let i=0;i<length;i++){
    let index = Math.floor(Math.random() * array.length);
    result.push(array[index]);
    array.splice(index,1);
  }
  return result;
}

const QuizRoundSize = 20;
const typeConversionEntries = [ ['I','E'], ['N','S'], ['F','T'], ['P','J'], ]
let MbtiRows = rawMbtiRows.filter( ({disabled, mbti_letter_stats}) => disabled !== true && mbti_letter_stats.length === 4);
let sampledMbtiRows = sampleArray(MbtiRows,QuizRoundSize * 2);


const QuizOptionList = styled.View`
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin-top: 20px;
`;

const QuizScreen = ({navigation}) => {
  let [round, setRound] = useState(0);
  let [letterStock, setLetterStock] = useState({ I: 0, N: 0, F: 0, P: 0 });

  
  function handleOptionClick(letterStats){
    let copiedLetterStock = {...letterStock};
    for(let {type, PercentageFloat} of letterStats){
      // type이  E, S, T, J인 경우 I,N, F, P로 바꾸고 PercentageFloat을 1- PercentageFloat로 변경
      if(typeConversionEntries.find(([from, to]) => to === type)){
        type = typeConversionEntries.find(([from, to]) => to === type)[0];
        PercentageFloat = 1 - PercentageFloat;
      }
      copiedLetterStock[type] += PercentageFloat;
    }
    setRound( round + 1);
    setLetterStock(copiedLetterStock);


    if(QuizRoundSize === round + 1){
      setRound(0)
      // EI SN TF JP
      sampledMbtiRows = sampleArray(MbtiRows,QuizRoundSize * 2);
      return navigation.navigate('ResultScreen', { letterStock, round : QuizRoundSize });
    }
  }

  // next로 가는 링크 작성 
  return (
    <Container>
      <Typography> {round+1}번째 선택지입니다. </Typography>
      <Typography> 좋아하는 장르를 골라주세요! </Typography>
      <QuizOptionList>
        <QuizOption prop={sampledMbtiRows[round*2]} onClick={handleOptionClick} />
        <QuizOption prop={sampledMbtiRows[round*2 + 1]} onClick={handleOptionClick} />
      </QuizOptionList>
    </Container>
  );
}

let defaultImage = require('../assets/game_default.png');
const QuizOption = ({prop, onClick}) => {
  let {profile_image_url, mbti_profile, mbti_profile_korean, mbti_letter_stats} = prop;
  if( profile_image_url === null ) profile_image_url = defaultImage;

  return (
    <Button onPress={() => onClick(mbti_letter_stats)} style={style.quizOption}>
      <Image source={ profile_image_url } style={{width: 100, height: 100}} />
      <Typography>{mbti_profile_korean}</Typography>
      <Typography style={style.smallTypo}>({mbti_profile})</Typography>
    </Button>
  )
}

const style = {
  quizOption: {
    alignItems: "center",
    justifyContent: "center",
    width:250,
    marginHorizontal: 10,
  },
  smallTypo: {
    fontSize: 12,
  }
}


export default QuizScreen;