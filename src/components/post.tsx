import "./post.scss"
import { postData } from "../interface/post-data";
import { AiOutlineHeart } from "react-icons/ai"
import { TbMessageCircle } from "react-icons/tb"
import { VscBookmark } from "react-icons/vsc"



export const Post = (props: postData) => {
    return (
        <div id="post">
            <div id="post-Heading">{props.postIcon}{props.postHeading}</div>
            <div id="post-pic">{props.post}</div>
            <div id="icons"><AiOutlineHeart /><TbMessageCircle /><VscBookmark /></div>
            <div id="likes">{props.likes}</div>
            <div id="captions">{props.caption}</div>
            <div id="mor">{props.more}</div>
            <div id="view">{props.view}</div>
            <div id="comment">{props.addComment}</div>
        </div>
    );
} 