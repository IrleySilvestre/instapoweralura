import styled from 'styled-components'

const colorText = 'red';

const Title = styled.h1`
  font-size: 50px;
  color: ${colorText};
`

export default function Home() {
  return <Title>Qualquer Valor!!!</Title>
}

