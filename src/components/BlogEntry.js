import React from 'react';
import BlogHeader from "./BlogHeader";
import BlogBody from "./BlogBody";
import BlogImage from "./BlogImage";

function BlogEntry({header, text, image}) {

    return (
        <article className="BlogText">
            <BlogHeader header={header}/>
            <BlogBody text={text}/>
            {/*<BlogImage image={image}/>*/}
        </article>
    );
}

export default BlogEntry;