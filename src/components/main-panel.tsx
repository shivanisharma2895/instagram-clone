import { storyData } from "../data/story-data";
import { storiesData } from "../interface/stories-data";
import "./main-panel.scss"



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
                <div id="post">post</div>
            </div>

        </div>
    );
}
export default MainPanel;