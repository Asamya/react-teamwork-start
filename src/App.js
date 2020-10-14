import React, {useState} from 'react';
import './App.css';
import BlogEntry from "./components/blog/BlogEntry";
import ButtonCount from "./components/blog/ButtonCount";
import AddBlogEntryForm from "./components/blog/AddBlogEntryForm";
import BlogArray from "./components/blog/BlogArray";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

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

  return (
    <div className="App">
        <Header />
        <BlogArray />
        <Footer />
    </div>
  );
}

export default App;
