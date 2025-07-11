// Updated Result.jsx
import { useState, useEffect, useContext } from 'react';
import { DataContext } from '../context/DataProvider';
import { Box, styled } from '@mui/material';

const Container = styled(Box)`
    flex: 1;
    height: 100%;
`;

const Result = () => {
    const [src, setSrc] = useState('');
    const { html, css, js } = useContext(DataContext);

    const srcCode = `
        <html>
            <head>
                <style>${css}</style>
            </head>
            <body>
                ${html}
                <script>
                    window.onload = function() {
                        ${js}
                    };
                </script>
            </body>
        </html>
    `;

    useEffect(() => {
        const timeout = setTimeout(() => {
            setSrc(srcCode);
        }, 250);

        return () => clearTimeout(timeout);
    }, [html, css, js]);

    return (
        <Container style={html || css || js ? null : { background: '#444857' }}>
            <iframe 
                srcDoc={src}
                title="output"
                sandbox="allow-scripts"
                frameBorder="0"
                width="100%"
                height="100%"
            />    
        </Container>
    );
};

export default Result;
