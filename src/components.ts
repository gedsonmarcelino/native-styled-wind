import styled from 'styled-components/native';
import { stylish } from './stylish';

const Text = styled.Text.attrs((props: any) => ({
  styles: props.styles,
}))`
  font-family: ${(props: any) => props.theme.fonts.regular};
  color: ${(props: any) => props.theme.colors.white};
  ${(props: any) => stylish(props)}
`;

const View = styled.View.attrs((props: any) => ({
  styles: props.styles,
}))`
  ${(props: any) => stylish(props)}
`;

const Row = styled.View.attrs((props: any) => ({
  styles: props.styles,
}))`
  flex-direction: row;
  ${(props: any) => stylish(props)}
`;

const Col = styled.View.attrs((props: any) => ({
  styles: props.styles,
}))`
  flex-direction: column;
  ${(props: any) => stylish(props)}
`;

const Image = styled.Image.attrs((props: any) => ({
  styles: props.styles,
}))`
  ${(props: any) => stylish(props)}
`;

const Button = styled.TouchableOpacity.attrs((props: any) => ({
  styles: props.styles,
}))`
  ${(props: any) => stylish(props)}
`;

export { Text, View, Row, Col, Image, Button };
