import React from "react";
import './Tag.css';


interface TagProps {
    TagName: string;
}

const Tag: React.FC<TagProps> = (props) => {
    return (<div className='TagContainer'>
        <button className='TagButton'>{props.TagName}</button>
    </div>);
}

export default Tag;