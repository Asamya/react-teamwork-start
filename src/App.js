import React from 'react';
import './App.css';
import BlogEntry from "./components/BlogEntry";
import ButtonCount from "./components/ButtonCount";

function App() {
    const blogEntry = {
        id: "1",
        header: "some-header",
        text: "sdfkjdsfgl",
        image: "http://placegoat.com/200/200"
    };

    const blogEntry2 = {
        id: "2",
        header: "some-new-header",
        text: "JUHUUUUU",
        image: "http://placegoat.com/200/200"
    }
    const entrys = [blogEntry, blogEntry2];

  return (
    <div className="App">
        {entrys.map(entry =>
            <BlogEntry key={entry.id} header={entry.header} text={entry.text} image={entry.image}/>)}
        <ButtonCount />
    </div>
  );
}

export default App;
