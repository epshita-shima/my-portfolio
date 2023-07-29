import React, { useRef, useState } from "react";
import JoditEditor from 'jodit-react';
import ShowContent from "./ShowContent";
const Blog = () => {
    const editor = useRef(null);
	const [content, setContent] = useState('');
    console.log(content)
    return (
        <div className='lg:container pl-8 pr-8 sm:p-12 md:p-12 lg:p-0  lg:mx-auto mt-12'>
            <div className="mb-4">
                <h2 className="text-black capitalize font-bold text-[20px]">Share your knowledge</h2>
            </div>
            <JoditEditor
			ref={editor}
			value={content}
			tabIndex={1} 
			// onBlur={newContent => setContent(newContent)} 
			onChange={(newContent) => {
               setContent(newContent)
            }}
		/>
        
        <button className="btn btn-primary mt-2 mb-4">Post</button>
        <ShowContent content={content}></ShowContent>
        </div>
    );
};

export default Blog;