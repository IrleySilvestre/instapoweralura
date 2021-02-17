import { Button } from "../src/components/commons/Butoon"
import Footer from "../src/components/commons/Footer"
import Menu from "../src/components/commons/Menu" 
import { Text } from "../src/components/foundation/Text"

export default function Home() {
  return (
    <div style={{
      flex: '1',
      display: 'flex',
      flexWrap: 'wrap',
      flexDirection: 'column',
      justifyContent: 'space-between',
    }}>
      <Menu/>
      <div>
        <Text variant="title" 
              tag="h1" 
              color = "tertiary.main"
              textAlign = {{
                xd: 'center',
                md: 'left',
              }} 
          >
          Compartilhe seus momentos com os amigos.
        </Text>

        <Text variant="paragraph1" 
              tag = "p" 
              color= "tertiary.light"
              textAlign = {{
                 xd: 'center',
                 md: 'left',
              }}
              >
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.
        </Text>

        <Button 
           margin = {{
             xd: 'auto',
             md: 'initial',
           }}
          display= "block" 
          variant="primary.main"
          >
          Cadastrar
        </Button>
      </div>
      <Footer/>
    </div>
  )
}

