import { postInfo } from "../data/post-data";
import { storyData } from "../data/story-data";
import { storiesData } from "../interface/stories-data";
import "./main-panel.scss"
import "./post.scss"
import { postData } from "../interface/post-data";
import { AiOutlineHeart } from "react-icons/ai"
import { TbMessageCircle } from "react-icons/tb"
import { VscBookmark } from "react-icons/vsc"
import { HiOutlineDotsHorizontal } from "react-icons/hi"



const ProfileIcon = (props: storiesData) => {

    return (
        <div id="story-icon">
            <img src={props.icon} id="img" alt="" />
            {props.name}
        </div>
    )
}

const Post = (props: postData) => {
    return (
        <div id="post">
            <div id="post-Heading"><img id="image" src={props.postIcon} alt="" />{props.postHeading}<HiOutlineDotsHorizontal id="line-dot" /></div>
            <div id="post-pic"><img id="image2" src={props.post} alt="" /></div>
            <div id="icons"><AiOutlineHeart id="heart" /><TbMessageCircle id="mssg" /><VscBookmark id="book-mark" /></div>
            <div id="likes">{props.likes}</div>
            <div id="captions">{props.caption}</div>
            <div id="mor">{props.more}</div>
            <div id="view">{props.view}</div>
            <div id="comment">{props.addComment}</div>
        </div>
    );
}

const MainPanel = () => {
    return (
        <div id="main-panel">
            <div id="mid">
                <div id="story">
                    {storyData.map((storyData) => (<ProfileIcon name={storyData.name} icon={storyData.icon} />))}
                </div>
                <div id="about-posts">{postInfo.map((postInfo) => (<Post postIcon={postInfo.postIcon} postHeading={postInfo.postHeading} post={postInfo.post} likes={postInfo.likes} caption={postInfo.caption} more={postInfo.more} view={postInfo.view} addComment={postInfo.addComment} />))}</div>
            </div>

        </div>
    );
}
export default MainPanel;