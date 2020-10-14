import React, {useState} from "react";
import BlogEntry from "./BlogEntry";

function AddBlogEntryForm({irgendwas}) {

    const [blogHeader, setBlogHeader] = useState('');
    const [blogBody, setBlogBody] = useState('');
    const blogImage = "http://placegoat.com/200/200"

    function addBlogEntry() {
        irgendwas({
            header:blogHeader,
            text:blogBody,
            image:blogImage
        })
        setBlogHeader('');
        setBlogBody('')
    }

    return <form>
        <label>
            Blog Header
        </label>
        <input value={blogHeader} onChange={event => setBlogHeader(event.target.value)}/>
        <label>
            Blog Body
        </label>
        <input value={blogBody} onChange={event => setBlogBody(event.target.value)}/>
        <button disabled={blogHeader.length === 0 || blogBody.length === 0}
                type="button"
                onClick={addBlogEntry}>
            Add Blog Entry
        </button>
    </form >
}

export default AddBlogEntryForm;