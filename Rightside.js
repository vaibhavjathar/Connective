// import styled from "styled-components";

// const Rightside = (props) => {
//   return (
//     <Container>
//       <FollowCard>
//         <Title>
//           <h2>Add to your feed</h2>
//           <img src="/images/information.svg" alt="" />
//         </Title>

//         <FeedList>
//             <li>
//                 <a>
//                     <Avatar />
//                 </a>
//                 <div>
//                     <span>#Connective</span>
//                     <button>Follow</button>
//                 </div>
//           </li>
//           <li>
//             <a>
//                 <Avatar />
//             </a>
//             <div>
//               <span>#Video</span>
//               <button>Follow</button>
//             </div>
//             </li>
//         </FeedList>

//         <Recommendation>
//           View all recommendations
//           <img src="/images/right-icon.svg" alt="" />
//         </Recommendation>
//       </FollowCard>
//       <BannerCard>
//         <img
//           src="https://static-exp1.licdn.com/scds/common/u/images/promo/ads/li_evergreen_jobs_ad_300x250_v1.jpg"
//           alt=""
//         />
//       </BannerCard>
//     </Container>
//   );
// };

// const Container = styled.div`
//   grid-area: rightside;
// `;

// const FollowCard = styled.div`
//   text-align: center;
//   overflow: hidden;
//   margin-bottom: 8px;
//   background-color: #fff;
//   border-radius: 5px;
//   position: relative;
//   border: none;
//   box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
//   padding: 12px;
// `;

// const Title = styled.div`
//   display: inline-flex;
//   align-items: center;
//   justify-content: space-between;
//   font-size: 16px;
//   width: 9%;
//   color: rgba(0, 0, 0, 0.6);
// `;

// const FeedList = styled.ul`
//   margin-top: 16px;
//   li {
//     display: flex;
//     align-items: center;
//     margin: 12px 0;
//     position: relative;
//     font-size: 14px;
//     & > div {
//       display: flex;
//       flex-direction: column;
//     }

//     button {
//       background-color: transparent;
//       color: rgba(0, 0, 0, 0.6);
//       box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.6);
//       padding: 16px;
//       align-items: center;
//       border-radius: 15px;
//       box-sizing: border-box;
//       font-weight: 600;
//       display: inline-flex;
//       justify-content: center;
//       max-height: 32px;
//       max-width: 480px;
//       text-align: center;
//       outline: none;
//     }
//   }
// `;

// const Avatar = styled.div`
//   background-image: url("https://static-exp1.licdn.com/sc/h/1b4vl1r54ijmrmcyxzoidwmxs");
//   background-size: contain;
//   background-position: center;
//   background-repeat: no-repeat;
//   width: 48px;
//   height: 48px;
//   margin-right: 8px;
// `;

// const Recommendation = styled.a`
//   color: #0a66c2;
//   display: flex;
//   align-items: center;
//   font-size: 14px;
// `;

// const BannerCard = styled(FollowCard)`
//   img {
//     width: 100%;
//     height: 100%;
//   }
// `;

// export default Rightside;

import styled from "styled-components";

const Rightside = (props) => {
  return (
    <Container>
      <FollowCard>
        <Title>
          <h2>Add to your feed</h2>
          <img src="/images/feed-icon.svg" alt="info" />
        </Title>

        <FeedList>
          <li>
            <a>
              <Avatar />
            </a>
            <div>
              <span>#Connective</span>
              <button>Follow</button>
            </div>
          </li>
          <li>
            <a>
              <Avatar />
            </a>
            <div>
              <span>#Video</span>
              <button>Follow</button>
            </div>
          </li>
        </FeedList>

        <Recommendation>
          View all recommendations
          <img src="/images/right-icon.svg" alt="arrow" />
        </Recommendation>
      </FollowCard>
      <BannerCard>
        <img
          // src="/images/Connective-Banner-Ad.jpg"
          alt="Connective Banner Ad"
        />
      </BannerCard>
    </Container>
  );
};

const Container = styled.div`
  grid-area: rightside;
`;

const FollowCard = styled.div`
  text-align: center;
  overflow: hidden;
  margin-bottom: 8px;
  background-color: #fff;
  border-radius: 5px;
  position: relative;
  border: none;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.15), 0 0 3px rgba(0, 0, 0, 0.2);
  padding: 16px;
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 16px;
  font-weight: 600;
  color: rgba(0, 0, 0, 0.6);
  margin-bottom: 16px;
`;

const FeedList = styled.ul`
  margin-top: 16px;
  li {
    display: flex;
    align-items: center;
    margin: 12px 0;
    font-size: 14px;
    color: rgba(0, 0, 0, 0.9);
    & > div {
      display: flex;
      flex-direction: column;
      margin-left: 8px;
    }

    button {
      background-color: transparent;
      color: #0a66c2;
      border: 1px solid #0a66c2;
      padding: 8px 12px;
      border-radius: 20px;
      font-weight: 600;
      cursor: pointer;
      transition: background-color 0.3s;

      &:hover {
        background-color: rgba(10, 102, 194, 0.1);
      }
    }
  }
`;

const Avatar = styled.div`
  background-image: url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSalBiI3J3yNuKar-3H95l5wE-Il4FlJjpRcW_DjHO95ksRJUpNeeelK4bxRa0KL6ip0i8&usqp=CAU");
  background-size: cover;
  background-size: contain;
  background-position: center;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  margin-right: 8px;
`;

const Recommendation = styled.a`
  color: #0a66c2;
  display: flex;
  align-items: center;
  font-size: 14px;
  font-weight: 600;
  margin-top: 16px;
  cursor: pointer;

  img {
    margin-left: 4px;
  }
`;

const BannerCard = styled(FollowCard)`
  img {
    width: 100%;
    height: auto;
    border-radius: 5px;
  }
`;

export default Rightside;
