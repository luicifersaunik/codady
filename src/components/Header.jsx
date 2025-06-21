import { AppBar, Toolbar, styled } from "@mui/material";

const Container = styled(AppBar)`
    background: #060606;
    position: static;
    border-bottom: 1px solid #2f2f2f;
    height: 9vh;
`;

const Header = () => {
    return (
        <Container>
            <Toolbar>
                {/* ✅ Reference logo from public folder */}
                <img 
                    src="/codady-logo.png" 
                    alt="Codady Logo" 
                    style={{ height: '75px' }} 
                />
            </Toolbar>
        </Container>
    );
};

export default Header;
