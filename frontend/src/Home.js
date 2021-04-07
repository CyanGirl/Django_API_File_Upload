import React, { useState, useEffect } from "react";
import axios from "axios";
import { API_URL, URL } from "./constants";

const Home = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);
  const [posts, setPosts] = useState([]);
  const [call, setCall] = useState(true);

  useEffect(() => {
    axios.get(API_URL).then((result) => setPosts(result.data));
    console.log("Hi there");
    console.log(posts.length);
  }, [call]);

  const handleTitle = (e) => {
    e.preventDefault();
    setTitle(e.target.value);
  };

  const handleContent = (e) => {
    e.preventDefault();
    setContent(e.target.value);
  };

  const handleImage = (e) => {
    e.preventDefault();
    console.log(e.target.files);
    setImage(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(title, content, image);

    let form_data = new FormData();
    form_data.append("image", image, image.name);
    form_data.append("title", title);
    form_data.append("content", content);

    let url = API_URL;

    axios
      .post(url, form_data, {
        headers: {
          "content-type": "multipart/form-data",
        },
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.log(err));

    setTitle("");
    setImage(null);
    setContent("");
  };

  return (
    <div>
      <h2>Home</h2>
      <form onSubmit={handleSubmit}>
        <p>
          <input
            type="text"
            placeholder="Title"
            id="title"
            value={title}
            onChange={handleTitle}
            required
          ></input>
        </p>
        <p>
          <input
            type="text"
            placeholder="Content"
            id="content"
            value={content}
            onChange={handleContent}
            required
          ></input>
        </p>
        <p>
          <input
            type="file"
            id="image"
            accept="image/png,image/jpeg"
            onChange={handleImage}
            required
          ></input>
        </p>
        <button type="submit">Post</button>
      </form>
    </div>
  );
};

export default Home;
