import React from 'react';
import { Container } from 'reactstrap';
import Menu from '../component/Menu';

function Layout({children}) {

  return (<>
    <Menu/>
    <Container className="py-4">
        {children}
    </Container>
    
  </>
  );
}

export default Layout;
