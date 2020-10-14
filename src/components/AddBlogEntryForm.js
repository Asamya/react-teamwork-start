import React, {useState} from "react";
import BlogEntry from "./BlogEntry";

function AddBlogEntryForm({irgendwas}) {

    const [blogHeader, setBlogHeader] = useState('');
    const [blogBody, setBlogBody] = useState('');

    function addBlogEntry() {
        irgendwas({
            header:blogHeader,
            text:blogBody
        })
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
        <button type="button" onClick={addBlogEntry}>
            Add Blog Entry
        </button>
    </form>
}

export default AddBlogEntryForm;