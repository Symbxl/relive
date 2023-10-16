import { Link } from "react-router-dom";
import { styled } from "styled-components";

const Navigation = () => {
  return ( <List>
    <Item><Link to="/">LOGO</Link></Item>
    <Container>
      <Item>Residential</Item>
      <Item>Commercial</Item>
    </Container>

    <Container>
      <Item>(825) 973-7707</Item>
      <Item>Free Estimate</Item>
    </Container>
  </List> );
}

export default Navigation;

const Container = styled.span`
  display: flex;
`

const List = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  border: 1px solid black;
  height: 10vh;
  margin: 0;
  padding: 0;
`

const Item = styled.li`
  margin: 1rem;

  &:hover {
    border-bottom: 1px solid black;
  }
`