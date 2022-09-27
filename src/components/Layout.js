import {useState} from 'react';
import { Link } from 'react-router-dom'; 
import {  Container,  Navbar, Spacer, Image , Button } from '@nextui-org/react';
import { useLocation } from 'react-router-dom'; 

import ModalX from './ModalX';
import youtube_logo from '../static/youtube-logo.png'

const Layout = ({ children }) => {

  const [visible, setVisible] = useState(false);
  let location = useLocation();
  const handler = () => setVisible(true);
  const closeHandler = () => {
    setVisible(false);
  };

  return (
    
    <div>
        <Navbar isBordered="isBordered" variant="sticky" >
   
          <Navbar.Brand css={{ "@xs": { w: "12%" } }}>
                <Link className='link_tag_design' to="/"> <Image  width={140} height={60} src={youtube_logo}/> </Link>
          </Navbar.Brand>
   
   
          <Navbar.Content hideIn="xs" variant="highlight" enableCursorHighlight={true} activeColor="error">
            <Navbar.Link as={Link}> 
                <Link className={`link_tag_design ${location.pathname === '/recent' && 'is-active'}`} to="/recent"> Recent </Link> 
            </Navbar.Link>
            <Navbar.Link as={Link}> 
                <Link className={`link_tag_design ${location.pathname === '/favorite' && 'is-active'}`} to="/favorite"> Favorite </Link>
            </Navbar.Link>
            <Button color="success" auto shadow css={{marginLeft:'10px' , }} onPress={handler} > Add Playlist </Button> 
          </Navbar.Content>
   
          <Navbar.Toggle showIn="xs" />
   
          <Navbar.Collapse disableAnimation="disableAnimation">
   
              <Navbar.CollapseItem activeColor="error" >
                    <Link className={`link_tag_design ${location.pathname === '/recent' && 'is-active'}`} to="/recent"> Recent </Link> 
              </Navbar.CollapseItem>
              <Navbar.CollapseItem activeColor="error">
                    <Link className={`link_tag_design ${location.pathname === '/favorite' && 'is-active'}`} to="/favorite"> Favorite </Link>
              </Navbar.CollapseItem>
              <Navbar.CollapseItem activeColor="error">
                  <Button color="success" auto shadow onPress={handler}> Add Playlist </Button>
              </Navbar.CollapseItem>
   
          </Navbar.Collapse>
   
        </Navbar>

        <Container >
          <Spacer y={1}/>
            {children}
           <ModalX visible={visible} closeHandler={closeHandler}/>
        </Container>

    </div>
  )
}

export default Layout;
