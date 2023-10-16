import { Link } from "react-router-dom";
import styled from "styled-components"


const Card = ({ id, image, title }) => {
  return <Container key={id}>
    <Image src={image} />
    <Title>{title}</Title>
    <Link to={title}>discover more</Link>
  </Container>
}

export default Card;

const Container = styled.div`
  border: 1px solid black;
  height: 300px;
  width: 400px;
  margin: 1rem;
`

const Image = styled.img`
  
`

const Title = styled.h2`
  
`