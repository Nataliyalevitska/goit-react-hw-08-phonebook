
import { Suspense } from "react";
import Phonebook from "../Phonebook/Phonebook";
import { Global } from '@emotion/react';
import globalStyles from '../../styles/global-styles';
import Container from '../../styles/Container';

import LangSwitcher from "../LangSwitcher/LangSwitcher";


const App = () => {
   
  return (
    <div>
    
      <Global styles={globalStyles} />
         <Container>
            <Suspense
        fallback="Loading...">
      
        <LangSwitcher />
          <Phonebook />
          </Suspense>
        </Container>
                
    </div>
  );
};

export default App;