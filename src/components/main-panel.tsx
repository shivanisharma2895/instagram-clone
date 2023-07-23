import { postInfo } from "../data/post-data";
import { storyData } from "../data/story-data";
import { storiesData } from "../interface/stories-data";
import "./main-panel.scss"
import { Post } from "./post";



const ProfileIcon = (props: storiesData) => {

    return (
        <div id="story-icon">
            <img src={props.icon} id="img" alt="" />
            {props.name}
        </div>
    )
}

const MainPanel = () => {
    return (
        <div id="main-panel">
            <div id="mid">
                <div id="story">
                    {storyData.map((storyData) => (<ProfileIcon name={storyData.name} icon={storyData.icon} />))}
                </div>
                <div id="post">{postInfo.map((postData) => (<Post postIcon={postData.postIcon} postHeading={postData.postHeading} post={postData.post} likes={postData.likes} caption={postData.caption} more={postData.more} view={postData.view} addComment={postData.addComment} />))}</div>
            </div>

        </div>
    );
}
export default MainPanel;