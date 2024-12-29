import styled from 'styled-components';
import { connect } from 'react-redux';
import { signInAPI } from "../actions";
import { Navigate } from "react-router";
const Login = (props) => {
   return (
    <Container>
        {props.user && <Navigate to="/home" />}
         <Nav>
            <a href='/'> 
            <img src= "/images/Connective-logo.svg" alt= " "/>
            </a>
            <div>
                <Join>Join us</Join>
                <SignIn> Sign in </SignIn>
            </div>
         </Nav>
         <Section> 
            <Hero> 
                <h2>Welcome to Connective: Your growth starts with a connection!</h2> 
            <img src="/images/hero-login.svg" alt=" " />
            </Hero>
            <Form>
                <Google onClick={() => props.signIn()}>
                    <img src="/images/google.svg" alt=" " />
                    Sign up with Google
                </Google>
            </Form>
        </Section>
    </Container>
   );
};

const Container = styled.div`
    padding: 0px;
`;

const Nav = styled.nav`
    max-width: 1128px;
    margin: auto;
    padding: 12px 0 16px;
    display: flex;
    align-items: center;
    position: relative;
    justify-content: space-between;
    flex-wrap: nowrap;

    & > a {
        width: 135px;
        height: 34px;

        @media (max-width: 768px) {
            padding: 0 5px;
        }
    }
`;

const Join = styled.a`
    box-shadow: inset 0 0 0 1px white;
    font-size: 20px;
    transition-duration: 167ms; 
    font-weight: 600;
    padding: 10px 12px;
    text-decoration: none;
    color: black;
    border-radius: 24px;
    margin-right: 12px;
    flex-wrap: nowrap;
    text-align: right;

    &:hover {
        background-color: rgb(211, 211, 211);
        color: black;
        text-decoration: none;
    }
`;

const SignIn = styled.a`
box-shadow: inset 0 0 0 1px #0a66c2;
color: #0a66c2;
border-radius: 24px;
transition-duration: 167ms;
font-size: 16px;
font-weight: 600;
line-height: 40px;
padding: 10px 24px ;
text-align: center;
background-color: rgba(0, 0, 0, 0);
&:hover{
    background-color: rgba(112, 181, 249, 0.15);
    color: #0a66c2;
    text-decoration: none;
    }
`;


const Section = styled.section`
display: flex;
align-content: start;
min-height: 700px;
padding-bottom: 138px;
padding-top: 40px;
padding: 60px;
position: relative;
flex-wrap: wrap;
width: 100%;
max-width: 1128px;
align-items: center;
margin: auto;


    @media (max-width: 768px){
        margin: auto;
        min-height: 0px;
    }
`;



const Hero = styled.div`
    width: 100%;
    h2{
        padding-bottom: 0;
        width: 100%;
        font-size: 40px;
        color: #2977c9;
        font-weight: 200;
        line-height: 60px;
        @media (max-width: 768px){
        text-align: center;
        font-size: 20px;
        width: 100%;
        line-height: 2;
        }
    }

    img{
        /* z-index: -1; */
        width: 1200px;
        height: 700px;
        position: center;
        bottom: -px;
        right: -px;
        @media (max-width: 768px){
            top: 230px;
            width: initial;
            position: initial;
            heigth: initial;
        }
    }
`;
const Form = styled.div`
 margin-top: 10px;
 width: 408px;
 @media (max-width: 768px){
    margin-top: 20px;
 } 
`;
const Google = styled.button`
 display: flex;
 justify-content: center;
 background-color: #fff;
 align-items: center;
 height: 56px;
 width: 100%;
 border-radius: 28px;
 box-shadow: inset 0 0 0 1px rgb(0 0 0 / 60%), inset 0 0 0 2px rgb(0 0 0 / 0%) inset 0 0 0 1px rgb(0 0 0 / 0);

 vertical-align: middle;
 z-index: 0;
 transition-duration: 167ms;
 font-size: 20px;
 color: rgba(0, 0, 0, 0.6);
 &:hover{
    background-color: rgba(207, 207, 207, 0.25);
    color: rgba(0, 0, 0, 0.75);
 }
`;

const mapStateToProps = (state) => {
    return {user:state.userState.user,
        
    };
};

const mapDispatchToProps = (dispatch) =>({
    signIn: () => dispatch(signInAPI()),
});



export default connect(mapStateToProps, mapDispatchToProps) (Login);

