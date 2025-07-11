// Code.jsx
import { useContext } from 'react';
import Editor from './Editor';
import { Box, styled } from '@mui/material';
import { DataContext } from '../context/DataProvider';

const Container = styled(Box)`
  background-color: #060606;
  display: flex;
  height: 50vh;
  width: 100%;
  overflow: hidden;
`;

const Code = () => {
  const { html, css, js, setHtml, setCss, setJs } = useContext(DataContext);

  return (
    <Container>
      <Editor 
        language="xml"
        heading="HTML"
        value={html}
        onChange={setHtml}
        icon='/'
        color='#FF3C41'
      />
      <Editor 
        language="css"
        heading="CSS"
        value={css}
        onChange={setCss}
        icon='*'
        color='#0EBEFF'
      />
      <Editor 
        language="javascript"
        heading="JS"
        value={js}
        onChange={setJs}
        icon='( )'
        color='#FCD000'
      />
    </Container>
  );
};

export default Code;
