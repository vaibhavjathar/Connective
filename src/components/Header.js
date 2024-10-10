import styled, { keyframes } from "styled-components";

const Header = (props) => {
    return (
        <Container>
            <Content> 
                <Logo>
                    <a href="/home"> 
                        <img src="/images/Connective-logo.svg" alt="Home Navigation" />    
                    </a>
                </Logo>
                <Search>
                    <SearchIcon>
                        <img src="/images/search.svg" alt="Search Icon" />
                    </SearchIcon>
                    <input type="text" placeholder="Search" />
                </Search>
                <Nav>
                    <NavListWrap>
                        <NavList className="active">
                            <a href="/home">
                                <img src="/images/nav-home.svg" alt="Home" /> 
                                <span>Home</span>
                            </a>
                        </NavList>

                        <NavList>
                            <a href="/home">
                                <img src="/images/user-networking.svg" alt="Home" /> 
                                <span>My Network</span>
                            </a>
                        </NavList>

                        <NavList>
                            <a href="/home">
                                <img src="/images/chat.svg" alt="Home" /> 
                                <span>Messaging</span>
                            </a>
                        </NavList>

                        <NavList>
                            <a href="/home">
                                <img src="/images/bell.svg" alt="Home" /> 
                                <span>Notifications</span>
                            </a>
                        </NavList>
                        <User>
                            <a>
                                <img src="/images/user.svg" alt="" />
                                <span>Me</span>
                                {/* <img src="/images/down-icon.svg" alt="" /> */}
                            </a>


                            <SignOut>
                                <a>Sign Out</a>
                            </SignOut>
                        </User>
                        <Work>
                            <a>
                                <img src="/images/suitcase.svg" alt="" />
                                <span>Work
                                    {/* <img src="/images/down-icon.svg" alt="" /> */}
                                </span>
                            </a>
                        </Work>
                    </NavListWrap>
                </Nav>
            </Content>
         </Container>      
    );
};

const Container = styled.div`
    background-color: white;
    border-bottom: 1px solid rgba(0, 0, 0, 0.08);
    left: 0; 
    padding: 0 24px;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 100;
    height: 7%;
`;

const Content = styled.div`
    display: flex;
    align-items: center;
    margin: 0 auto;
    min-height: 100%;
    max-width: 1128px;
`;

const Logo = styled.span`
    margin-right: 9px;

    img {
        width: 60px;
        height: auto;
        transition: transform 0.3s ease;

        &:hover {
            transform: scale(2);
        }
    }

    @media (max-width: 768px) {
        img {
            width: 45px;
        }
    }
`;

const scaleUp = keyframes`
    from {
        transform: scale(1);
    }
    to {
        transform: scale(1.2);
    }
`;

const Search = styled.div`
    display: flex;
    align-items: center;
    position: relative;
    background-color: #f0f2f5;
    border-radius: 4px;
    padding: 5px 10px;
    margin-left: 16px;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #e0e4e9;
    }

    input {
        border: none;
        border-radius: 2px;
        outline: none;
        background: transparent;
        padding: 8px 8px 8px 32px;
        width: 218px;
        line-height: 1.75;
        font-weight: 400;
        font-size: 14px;
        height: 27px;
        color: #333;

        &:focus + div img {
            animation: ${scaleUp} 0.3s ease forwards;
        }
    }
`;

const SearchIcon = styled.div`
    position: absolute;
    left: 10px;
    display: flex;
    align-items: center;
    pointer-events: none;
    z-index: 1;

    img {
        width: 20px;
        height: 20px;
        transition: transform 0.3s ease;
    }
`;

const Nav = styled.nav`
    margin-left: auto;
    display: block;

    @media (max-width: 760px) {
        position: fixed;
        left: 0;
        bottom: 0;
        background: white;
        width: 100%;
    }
`;

const NavListWrap = styled.ul`
    display: flex;
    flex-wrap: nowrap;
    list-style-type: none;

    .active {
        span: after {
            content: '';
            transform: scaleX(1);
            border-bottom: 2px solid var(--white, #fff);
            bottom: 0;
            left: 0;
            position: absolute;
            transition: transform 0.2s ease-in-out;
            width: 100%;
            border-color: rgba(0, 0, 0, 0.9);
        }
    }
`;

const NavList = styled.li`
    display: flex;
    align-items: center;

    a {
        align-items: center;
        background: transparent;
        display: flex;
        flex-direction: column;
        font-size: 12px;
        font-weight: 400;
        justify-content: center;
        line-height: 1.5;
        min-height: 42px;
        min-width: 80px;
        position: relative;
        text-decoration: none;
        color: rgba(0, 0, 0, 0.6);
        transition: color 0.3s ease;

        &:hover {
            color: #0a66c2;
        }

        img {
            width: 30px;
            height: 30px;
            transition: transform 0.3s ease;
        }

        img:hover {
            transform: scale(1.3);
        }

        span {
            display: flex;
            margin-top: 4px;
            align-items: center;
        }

        @media (max-width: 768px) {
            min-width: 70px;
        }
    }
`;

const SignOut= styled.div`
 position: absolute;
 top: 45px;
 background: white;
 border-radius: 0 0 5px 5px;
 width: 100px;
 height: 40px;
 font-size: 16px;
 transition-duration: 167ms;
 text-align: center;
 display: none;
`;

const User= styled(NavList)`
 a > svg{
    width: 24px;
    border-radius: 50%;
 }
 span {
    display: flex;
    align-items: center;
 }

 &:hover{
    ${SignOut}{
        align-items: center;
        display: flex;
        justify-content: center;
    }
 }
`;
const Work = styled(User)`
 border-left: 1px solid rgba(0, 0, 0, 0.08);
`;



export default Header;
