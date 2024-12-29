import styled from "styled-components";
import { useState } from "react";
import ReactPlayer from "react-player";

const PostModal = (props) => {
    const [editorText, setEditorText] = useState(" ");
    const [shareImage, setShareImage] = useState(null);
    
    // const [shareVideo, setShareVideo] = useState(" ");
    const handleChange = (e) => {
        const image = e.target.files[0];

        if (!image || !image.type.startsWith("image/")){
            alert(`not an image, the file is a ${ typeof image}`);
            return;
        }

        setShareImage(image);
    };


    const reset = (e) => {
        setEditorText(" ");
        setShareImage(null);
        props.handleClick(e);
    };

    return (
        <>
        { props.showModal === 'open' &&
            <Container>
                <Content>
                    <Header>
                        <h2>Create a Post</h2>  
                        <button onClick={(event)=> reset(event)}>
                        <img src="/images/close.svg" alt=""/>
                        </button>
                    </Header>
                        <SharedContent>
                            <UserInfo>
                                <img src="/images/user.svg" alt=""/>
                                <span>Name</span>
                            </UserInfo>
                            <Editor>
                                <textarea
                                value={editorText}
                                onChange={(e)=> setEditorText(e.target.value)}
                                placeholder="What you want to talk about?"
                                autoFocus={true}
                                />
                                <UploadImage>
                                    <input type="file" 
                                    accept="image/gif, image/jpeg, image/png"
                                    name="image"
                                    id="file"
                                    style={{display:"none"}}
                                    onChange={handleChange}
                                    />
                                    <p>
                                        <label htmlFor="file">Select an image to share</label>
                                    </p>
                                    {shareImage && <img src={URL.createObjectURL(shareImage)}
                                    alt="Preveiw"
                                    onLoad={(e)=> {
                                        URL.revokeObjectURL(e.target.src);
                                    }} />}
                                </UploadImage>
                            </Editor>
                        </SharedContent>
                        <ShareCreation>
                            <AttachAssets>
                                <AssetButton>
                                    <img src="/images/photo-2.svg" alt=""/>
                                 </AssetButton>
                                 <AssetButton>
                                    <img src="/images/video-1.svg" alt=""/>
                                </AssetButton>
                            </AttachAssets>
                            <ShareComment>
                                <AssetButton>
                                    <img src="/images/message-circle.svg" alt=""/>
                                    Anyone
                                </AssetButton>
                            </ShareComment>
                            <PostButton disabled={!editorText ? true : false}>Post</PostButton>
                        </ShareCreation>
                </Content>
            </Container>
        }
    </>
    );    
};
const Container = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.8);
    color: black;
    z-index: 9999;
    animation: fadeIn 0.3s;
`;

const Content = styled.div`
    width: 100%;
    max-width: 552px;
    background-color: white;
    max-height: 90%;
    overflow: initial;
    border-radius: 5px;
    position: relative;
    display: flex;
    flex-direction: column;
    top: 32px;
    margin: 0 auto;

`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 20px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  font-size: 16px;
  line-height: 1.5;
  color: rgba(0, 0, 0, 0.6);
  font-weight: 400;

  button {
    height: 40px;
    width: 40px;
    padding: 0; /* Ensures button size is consistent */
    border: none; /* Optional: Remove border */
    border-radius: 50%; /* Optional: Makes the button circular */
    background-color: transparent; /* Optional: Transparent background */
    display: flex;
    justify-content: center;
    align-items: center; /* Centers content inside the button */
    color: rgba(0, 0, 0, 0.6);
    cursor: pointer; /* Indicates clickable behavior */

    &:hover {
      background-color: rgba(0, 0, 0, 0.1); /* Adds a hover effect */
    }

    svg, img {
      pointer-events: none; /* Prevents interference from SVG */
      width: 50px;
      height: 50px; /* Ensures the SVG fits well */
    }
  }
`;


const SharedContent = styled.div`
    display: flex;
    flex-direction: column;
    padding: 8px 12px;
    flex-grow: 1;
    overflow: auto;
    vertical-align: baseline;
    background: transparent;
`;

const UserInfo = styled.div`
    display: flex;
    align-items: center;
    padding: 12px 24px;
    svg, img{
        width: 48px;
        height: 48px;
        border-radius: 50%;
        background-clip: content-box;
        border: 2px solid transparent;
        
    }
    span{
        font-weight: 600;
        margin-left: 5px;
        font-size: 16px;
        line-height: 1.5;
    }
`;

const ShareCreation = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 12px 24px 12px 16px;
`;

const AssetButton = styled.div`
    display: flex;
    align-items: center;
    height: 40px;
    min-width: auto;
    color: rgba(0, 0, 0, 0.5);
`;

const AttachAssets = styled.div`
    align-items: center;
    display: flex;
    padding-right: 8px;
    ${AssetButton}{
        width: 40px;
    }
`;

const ShareComment = styled.div`
    padding-left: 8px;
    margin-right: auto;
    border-left: 1px solid rgba(0, 0, 0, 0.15);
    ${AssetButton}{
        svg{
            margin-right: 5px;
        }
    }
`;

// const ShareComment = styled.div`
//   display: flex;
//   align-items: center; /* Aligns items vertically */
//   padding-left: 12px; /* Slightly increased padding for better spacing */
//   margin-right: auto;
//   border-left: 1px solid rgba(0, 0, 0, 0.15); /* Keeps the left border */
//   color: rgba(0, 0, 0, 0.6); /* Default text color */
//   font-size: 14px; /* Adjust font size for readability */
//   cursor: pointer; /* Indicates it's interactive */
//   transition: background-color 0.3s ease, color 0.3s ease; /* Smooth hover effects */

//   &:hover {
//     background-color: rgba(0, 0, 0, 0.05); /* Adds a subtle hover background */
//     color: rgba(0, 0, 0, 0.8); /* Darkens the text color on hover */
//     border-left: 1px solid rgba(0, 0, 0, 0.4); /* Enhances border visibility on hover */
//   }

//   ${AssetButton} {
//     display: flex; /* Ensures SVG and text are aligned properly */
//     align-items: center;
//     svg {
//       margin-right: 8px; /* Increased space between SVG and text */
//       fill: rgba(0, 0, 0, 0.6); /* Ensures icon matches text color */
//       transition: fill 0.3s ease; /* Smooth icon color transition */
//     }
//     &:hover svg {
//       fill: rgba(0, 0, 0, 0.8); /* Darkens the icon on hover */
//     }
//   }

//   &:active {
//     background-color: rgba(0, 0, 0, 0.1); /* Slight press effect */
//     color: rgba(0, 0, 0, 0.9); /* Makes the text stand out */
//   }
// `;



// const PostButton = styled.div`
//     min-width: 60px;
//     border-radius: 20px;
//     padding-left: 16px;
//     padding-right: 16px;
//     background: #0a66c2;
//     color: white;
//     &:hover{
//         background: #004182;
//     }
// `;



const PostButton = styled.button`
  min-width: 80px; /* Slightly wider for better usability */
  height: 40px; /* Uniform height for consistency */
  border-radius: 20px;
  padding: 0 20px; /* Padding for balanced spacing */
  background: ${(props) => (props.disabled ? "rgba(0,0,0,0.8)" : "#0a66c2")};
  color: ${(props) => (props.disabled ? "#ffffff" : "white")};
  font-size: 16px; /* Larger text for readability */
  font-weight: bold; /* Makes the text stand out */
  border: none; /* Removes default button border */
  cursor: pointer; /* Updates based on state */
  transition: background-color 0.3s ease, transform 0.2s ease; /* Smooth transitions */
  opacity: ${(props) => (props.disabled ? "0.8" : "1")}; /* Slight transparency for disabled state */

  &:hover {
    background: ${(props) => (props.disabled ? "rgba(0,0,0,0.8)" : "#004182")}; /* Hover only if enabled */
    transform: ${(props) => (props.disabled ? "none" : "scale(1.05)")}; /* Zoom only if enabled */
  }

  &:active {
    transform: ${(props) => (props.disabled ? "none" : "scale(1)")}; /* Prevents active effects if disabled */
  }

  &:focus {
    outline: ${(props) => (props.disabled ? "none" : "2px solid #004182")}; /* Focus only if enabled */
    outline-offset: ${(props) => (props.disabled ? "0" : "2px")};
  }
`;


const Editor = styled.div`
    padding: 12px 24px;
    textarea {
        width: 100%;
        min-height: 100px;
        resize: none;
    }

    input{
        width: 100%;
        height: 35px;
        font-size: 16px;
        margin-bottom: 20px;
    }
`;

const UploadImage = styled.div`
    text-align: center;
    img{
        width: 100%;
    }
`;

export default PostModal;