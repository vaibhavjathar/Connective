import styled from "styled-components";
import PostModal from "./PostModal";
import { useState } from "react";
const Main = (props) => {
  const [showModal, setShowModal] = useState("close");

  const handleClick = (e) => {
    e.preventDefault();
    if (e. target !== e.currentTarget) {
      return;
    }

    switch (showModal){
      case "open":
        setShowModal("close");
        break;
        case "close":
          setShowModal("open");
          break;
          default:
            setShowModal("close");
            break;
    }
  };
  return (
    <Container>
      <ShareBox>
        <UserSection>
          <img src="/images/user.svg" alt="User" />
          <button onClick={handleClick}>Start a post</button>
        </UserSection>
        <ActionsSection>
          <ActionButton color="#70b5f9">
            <img src="/images/photo.svg" alt="Photo" />
            <span>Photo</span>
          </ActionButton>
          <ActionButton color="#7fc15e">
            <img src="/images/video.svg" alt="Video" />
            <span>Video</span>
          </ActionButton>
          <ActionButton color="#e7a33e">
            <img src="/images/photo-album.svg" alt="Event" />
            <span>Event</span>
          </ActionButton>
          <ActionButton color="#fc9295">
            <img src="/images/article-writing.svg" alt="Write Article" />
            <span>Write article</span>
          </ActionButton>
        </ActionsSection>
      </ShareBox>
      <div>
        <Article>
          <SharedActor>
            <a>
              <img src="/images/user.svg" alt="" />
              <div>
                <span>Title</span>
                <span>Info</span>
                <span>Date</span>
              </div>
            </a>
            <button>
              <img src="/images/ellipsis.svg" alt="" />
            </button>
          </SharedActor>
          <Description>Description</Description>
          <SharedImage>
            <a>
              <img src="/images/image.jpeg" alt="" />
            </a>
          </SharedImage>
          <SocialCounts>
            <li>
              <button>
                <img
                  src="https://static-exp1.licdn.com/sc/h/d310t2g24pvdy4pt1jkedo4yb"
                  alt=""
                />
                <img
                  src="https://static-exp1.licdn.com/sc/h/5thsbmikm6a8uov24ygwd914f"
                  alt=""
                />
                <span>75</span>
              </button>
            </li>
            <li>
              <a> comments </a>
            </li>
          </SocialCounts>
          <SocialActions>
            <button>
              <img src="/images/thumbs-up.svg" alt="" />
              <span>Like</span>
            </button>
            <button>
              <img src="/images/message-circle.svg" alt="" />
              <span>Comment</span>
            </button>
            <button>
              <img src="/images/send.svg" alt="" />
              <span>Send</span>
            </button>
            <button>
              <img src="/images/share-2.svg" alt="" />
              <span>Share</span>
            </button>
          </SocialActions>
        </Article>
      </div>
      <PostModal showModal={showModal} handleClick={handleClick} />
    </Container>
  );
};

const Container = styled.div`
  grid-area: main;
  padding: 16px;
`;

const CommonCard = styled.div`
  text-align: center;
  overflow: hidden;
  margin-bottom: 8px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }
`;

const ShareBox = styled(CommonCard)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
  background-color: #f9f9f9;
`;

const UserSection = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 8px 16px;
  margin-bottom: 12px;
  border-bottom: 1px solid #e0e0e0;

  img {
    width: 48px;
    border-radius: 50%;
    margin-right: 8px;
  }

  button {
    flex-grow: 1;
    padding: 12px 16px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 35px;
    background-color: #fff;
    text-align: left;
    font-weight: 500;
    font-size: 16px;
    color: rgba(0, 0, 0, 0.6);
    transition: background-color 0.3s ease, color 0.3s ease;

    &:hover {
      background-color: rgba(0, 0, 0, 0.05);
      color: rgba(0, 0, 0, 0.8);
    }
  }
`;

const ActionsSection = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  padding-top: 8px;
`;

const ActionButton = styled.button`
  display: flex;
  align-items: center;
  font-size: 17px;
  font-weight: 600;
  padding: 8px;
  color: ${(props) => props.color || "rgba(0, 0, 0, 0.6)"};
  background: none;
  border: none;
  cursor: pointer;
  transition: color 0.3s ease, transform 0.2s ease;

  img {
    width: 35px;
    height: 35px;
    margin-right: 4px;
  }

  &:hover {
    transform: scale(1.05);
  }
`;

const Article = styled(CommonCard)`
  padding: 0;
  margin: 0 0 8px;
  overflow: visible;
`;

const SharedActor = styled.div`
  padding: 12px 16px 0;
  margin-bottom: 8px;
  align-items: center;
  display: flex;
  position: relative;

  a {
    margin-right: 12px;
    text-decoration: none;
    flex-grow: 1;
    overflow: hidden;
    display: flex;

    img {
      width: 48px;
      height: 48px;
    }

    & > div {
      display: flex;
      flex-direction: column;
      margin-left: 8px;
      flex-grow: 1;
      flex-basis: 0;
      overflow: hidden;

      span {
        text-align: left;

        &:first-child {
          font-size: 14px;
          font-weight: 700;
          color: rgba(0, 0, 0, 1);
        }

        &:nth-child(n + 1) {
          font-size: 12px;
          color: rgba(0, 0, 0, 0.6);
        }
      }
    }
  }

  button {
    position: absolute;
    right: 12px;
    top: 0;
    background: transparent;
    border: none;
    outline: none;

    img {
      width: 24px;
      height: 24px;
    }
  }
`;

const Description = styled.div`
  padding: 0 16px;
  overflow: hidden;
  color: rgba(0, 0, 0, 0.9);
  font-size: 14px;
  text-align: left;
`;

const SharedImage = styled.div`
  margin-top: 8px;
  width: 100%;
  /* max-width: 300px; */
  display: block;
  position: relative;
  background-color: #f9fafb;
  img {
    object-fit: contain;
    width: 100%;
    height: 100%;
  }
`;

const SocialCounts = styled.div`
  line-height: 1.3;
  display: flex;
  align-items: flex-start;
  overflow: auto;
  margin: 0 16px;
  padding: 8px 0;
  border-bottom: 1px solid #e9e5df;
  list-style: none;
  li {
    margin-right: 5px;
    font-size: 12px;
    button {
      display: flex;
    }
  }
`;

// const SocialActions = styled.div`
//  align-items: center;
//  display: flex;
//  justify-content: flex-start;
//  margin: 0;
//  min-height: 40px;
//  padding: 4px 8px;
//  button{
//   display: inline-flex;
//   align-items: center;
//   padding: 8px;
//   color: aliceblue;

//   &:hover {
//       background-color: rgba(255, 255, 255, 0.1); /* Light background on hover */
//       transform: scale(1.05); /* Slight scale-up */
//     }

//   @media (min-width: 768px) {
//     span{
//       margin-left: 8px;
//     }
//   }
//  }

// `;

const SocialActions = styled.div`
  align-items: center;
  display: flex;
  justify-content: flex-start;
  margin: 0;
  min-height: 40px;
  padding: 4px 8px;

  button {
    display: inline-flex;
    align-items: center;
    padding: 8px;
    color: aliceblue;
    background-color: transparent;
    border: none;
    cursor: pointer;
    transition: background-color 0.3s ease, transform 0.2s ease;

    &:hover {
      background-color: rgba(
        255,
        255,
        255,
        0.1
      ); /* Light background on hover */
      transform: scale(1.05); /* Slight scale-up */
    }

    @media (min-width: 768px) {
      span {
        margin-left: 8px;
      }
    }
  }
`;

export default Main;
