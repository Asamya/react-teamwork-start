import React from 'react';
import BlogHeader from "./BlogHeader";
import BlogBody from "./BlogBody";
import BlogImage from "./BlogImage";

function BlogEntry({header, text}) {

    return (
        <article className="BlogText">
            <BlogHeader header={header}/>
            <BlogBody text={text}/>
            <BlogImage/>
        </article>
    );
}

export default BlogEntry;