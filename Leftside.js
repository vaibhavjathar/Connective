import styled from "styled-components";

const Leftside = (props) => {
    return (
        <Container>
            <ArtCard>
                <UserInfo>
                    <CardBackground />
                    <a>
                        <Photo />
                        <Link>Welcome, there!</Link>
                    </a>
                    <a>
                        <AddPhotoText>Add a photo</AddPhotoText>
                    </a>
                </UserInfo>
                <Widget>
                    <a>
                        <WidgetContent>
                            <span>Connections</span>
                            <span>Grow your network</span>
                        </WidgetContent>
                        <img src="/images/add-group.svg" alt="Add Group" />
                    </a>
                </Widget>
                <Item>
                    <span>
                        <img src="/images/bookmark.svg" alt="Bookmark" />
                        <span>My Items</span>
                    </span>
                </Item>
            </ArtCard>
            <CommunityCard>
                <a><span>Groups</span></a>
                <a>
                    <span>Events <img src="/images/plus-icon.svg" alt="Add" /></span>
                </a>
                <a><span>Follow Hashtags</span></a>
                <a><span>Discover More</span></a>
            </CommunityCard>
        </Container>
    );
};

const Container = styled.div`
    grid-area: leftside;
`;

const ArtCard = styled.div`
    text-align: center;
    overflow: hidden;
    margin-bottom: 8px;
    background-color: #fff;
    border-radius: 8px;
    transition: box-shadow 83ms;
    position: relative;
    border: none;
    box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 2px rgb(0 0 0 / 20%);
`;

const UserInfo = styled.div`
    border-bottom: 1px solid rgba(0, 0, 0, 0.15);
    padding: 12px;
`;

const CardBackground = styled.div`
    background: url("/images/card-bg.svg");
    background-position: center;
    background-size: cover;
    height: 54px;
    margin: -12px -12px 0;
`;

const Photo = styled.div`
    box-shadow: none;
    background-image: url("/images/camera.svg");
    width: 72px;
    height: 72px;
    box-sizing: border-box;
    background-clip: content-box;
    background-color: white;
    background-position: center;
    background-size: 60%;
    background-repeat: no-repeat;
    border: 2px solid white;
    margin: -38px auto 12px;
    border-radius: 50%;
`;

const Link = styled.div`
    font-size: 16px;
    color: #333;
    font-weight: bold;
    margin-top: 8px;
    cursor: pointer;
`;

const AddPhotoText = styled.div`
    color: #0a66c2;
    margin-top: 4px;
    font-size: 12px;
    cursor: pointer;
`;

const Widget = styled.div`
    border-bottom: 1px solid rgba(0, 0, 0, 0.15);
    padding: 12px 0;

    & > a {
        text-decoration: none;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 4px 12px;
        transition: background-color 0.3s ease;

        &:hover {
            background-color: rgba(0, 0, 0, 0.05);
        }

        img {
            width: 24px; 
            height: 24px;
        }
    }
`;

const WidgetContent = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;

    span:first-child {
        font-size: 16px;
        color: rgba(0, 0, 0, 0.6);
    }

    span:nth-child(2) {
        font-size: 14px;
        font-weight: bold;
        color: rgba(0, 0, 0, 1);
    }
`;

const Item = styled.a`
    text-align: left;
    padding: 12px;
    font-size: 12px;
    color: rgba(0, 0, 0, 0.9);
    cursor: pointer;
    transition: background-color 0.3s ease;


    &:hover {
        background-color: rgba(0, 0, 0, 0.05);
    }

    span {
        display: flex;
        align-items: center;
        gap: 8px;

        img {
            width: 20px;
            height: 20px;
            transition: transform 0.3s ease;
        }

        &:hover img {
            transform: scale(1.1);
        }
    }
`;

const CommunityCard = styled(ArtCard)`
    padding: 8px 0;
    display: flex;
    flex-direction: column;
    text-align: left;
    cursor: pointer;

    a {
        color: #333;
        padding: 4px 12px;
        font-size: 12px;
        text-decoration: none;
        transition: background-color 0.3s ease;

        &:hover {
            background-color: rgba(0, 0, 0, 0.05);
            color: #0a66c2;
        }

        &:last-child {
            border-top: 1px solid #d6cec2;
            padding: 12px;
            color: rgba(0, 0, 0, 0.6);
        }

        span {
            display: flex;
            align-items: center;
            justify-content: space-between;
            font-size: 15px;

            img {
                width: 16px;
                height: 16px;
            }
        }
    }
`;

export default Leftside;

