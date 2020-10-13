import React from 'react';
import './App.css';
import BlogEntry from "./components/BlogEntry";

function App() {
    const blogEntry = {
        header: "some-header",
        text: "sdfkjdsfgl",
        image: "http://placegoat.com/200/200"
    };

    const blogEntry2 = {
        header: "some-new-header",
        text: "JUHUUUUU",
        image: "http://placegoat.com/200/200"
    }
    const entrys = [blogEntry, blogEntry2];

  return (
    <div className="App">
      {/*<BlogEntry header={blogEntry.header} text={blogEntry.text} image={blogEntry.image} />
      <BlogEntry header={blogEntry2.header} text={blogEntry2.text} image={blogEntry2.image}/>
      <BlogEntry />*/}
        {entrys.map(entry => <BlogEntry header={entry.header} text={entry.text} image={entry.image}/>)}
    </div>
  );
}

export default App;
