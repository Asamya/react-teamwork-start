import React, {useState} from "react";
import BlogEntry from "./BlogEntry";
import ButtonCount from "./ButtonCount";
import AddBlogEntryForm from "./AddBlogEntryForm";

function BlogArray() {

    const [blogList, setBlogList] = useState([]);

    function onAddBlogEntry(blogData) {
        const newBlogList = [...blogList, blogData];
        setBlogList(newBlogList);
    }

    return <div>
    {
        blogList.map(entry =>
            <BlogEntry key={entry.id} header={entry.header} text={entry.text} image={entry.image}/>)
    }
    {/*<ButtonCount />*/}

    <AddBlogEntryForm irgendwas={onAddBlogEntry}/>
    </div>

}

export default BlogArray;