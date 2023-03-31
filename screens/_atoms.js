
import { View, Text } from "react-native";
import styled from "styled-components/native";

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding:32px;
`;

const Typography = styled.Text`
  font-size: 18px;
  font-weight: 600;
  color:#fff;
`;

const Button = styled.TouchableOpacity`
  background-color: #fff;
  padding: 16px 32px;
  border-radius: 8px;
  margin-top: 16px;
  background:transparent;
  border:2px solid #fff;
  color:#fff; 
`;

export { Container, Typography, Button };