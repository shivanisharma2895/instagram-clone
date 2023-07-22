import "./side-bar.scss"
import { GoHomeFill } from "react-icons/go"
import { FiSearch } from "react-icons/fi"
import { MdOutlineExplore } from "react-icons/md"
import { PiMessengerLogoBold } from "react-icons/pi"
import { AiOutlineHeart } from "react-icons/ai"
import { LuPlusSquare } from "react-icons/lu"
import { GiHamburgerMenu } from "react-icons/gi"
import { BiUserCircle } from "react-icons/bi"
import { TbFreezeRow } from "react-icons/tb"
const SideBar = () => {
    return (
        <div id="side-bar">
            <div id="header">Instagram</div>
            <div id="side-menu">
                <div id="hom"><GoHomeFill id="home" />Home</div>
                <div id="search"><FiSearch id="srch" />Search</div>
                <div id="explore"><MdOutlineExplore id="explr" />Explore</div>
                <div id="reels"><TbFreezeRow id="reel" />Reels</div>
                <div id="msg"><PiMessengerLogoBold id="msgs" />Messages</div>
                <div id="noti"><AiOutlineHeart id="notifi" />Notifications</div>
                <div id="create"><LuPlusSquare id="crt" />Create</div>
                <div id="profile"><BiUserCircle id="prfl" />Profile</div>
            </div>
            <div id="footer"><GiHamburgerMenu id="more" />More</div>
        </div>
    );
}
export default SideBar;