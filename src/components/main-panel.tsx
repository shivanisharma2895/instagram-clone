import { postInfo } from "../data/posts-data";
import { storyData } from "../data/story-data";
import { storiesData } from "../interface/stories-data";
import "./main-panel.scss"
import "./post.scss"
import { postData } from "../interface/post-data";
import { AiOutlineHeart } from "react-icons/ai"
import { TbMessageCircle } from "react-icons/tb"
import { VscBookmark } from "react-icons/vsc"
import { HiOutlineDotsHorizontal } from "react-icons/hi"
import "./side-panel.scss"
import { BiCopyright } from "react-icons/bi"


const ProfileIcon = (props: storiesData) => {

    return (
        <div id="story-icon">
            <img src={props.icon} id="img" alt="" />
            {props.name}
        </div>
    );
}

const Post = (props: postData) => {
    return (
        <div id="post">
            <div id="post-Heading"><span><img id="image" src={props.postIcon} alt="" /></span>  <span id="headding">{props.postHeading}</span><span id="line-dot"><HiOutlineDotsHorizontal /></span></div>
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
            <div id="side-panel">
                <div id="personal">
                    <div id="profile-photo"><img id="pic" src="https://tse2.explicit.bing.net/th?id=OIP.sQjNfZ7e2kRhqwJ_Xj-_JAHaHa&pid=Api&P=0&h=180" alt="" /></div>
                    <div id="name">Shakira_34769<div id="original">
                        shakira wembolt</div></div>
                    <div id="switch">Switch</div>
                </div>
                <div id="others">About . Help . Press . API . Jobs . Privacy . Terms . Locations . Language . Meta Verified </div>
                <div id="copyright"><BiCopyright id="copy" />2023 INSTAGRAM FORM META</div>
            </div>

        </div>
    );
}
export default MainPanel;