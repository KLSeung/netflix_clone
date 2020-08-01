import React from 'react';
import { Item, Inner, Container, Title, SubTitle, Image, Pane } from './styles/jumbotron';

export default function Jumbotron({ children, direction = 'row', ...otherProps }) {
  return(
    <Item {...otherProps}>
      <Inner direction = {direction}>{children}</Inner>
    </Item>
  )
}

Jumbotron.Container = function JumbotronContainer ( { children, ...otherProps }) {
  return <Container {...otherProps}>{children}</Container>
}

Jumbotron.Title = function JumbotronTitle ( { children, ...otherProps }) {
  return <Title {...otherProps}>{children}</Title>
}

Jumbotron.SubTitle = function JumbotronSubTitle ( { children, ...otherProps }) {
  return <SubTitle {...otherProps}>{children}</SubTitle>
}

Jumbotron.Image = function JumbotronImage ( { children, ...otherProps }) {
  return <Image {...otherProps} />
}

Jumbotron.Pane = function JumbotronPane( { children, ...otherProps }) {
  return <Pane {...otherProps}>{children}</Pane>
}