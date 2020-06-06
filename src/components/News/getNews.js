import React, { Component } from "react";
import axios from "axios";
import { v1 as uuid } from "uuid";
import Newsfeed from "./Newsfeed";

class getNews extends Component {
  state = {
    news: []
  };
  componentDidMount() {
    const today = new Date(),
      date =
        today.getFullYear() + "-" + today.getMonth() + "-" + today.getDate();

    axios
      .get(
        `https://newsapi.org/v2/everything?q=bitcoin&from=${date}&sortBy=publishedAt&apiKey=cc06e7c3cb264c45a74fd1fd0cb1b31a`
      )
      .then(res => this.setState({ news: res.data.articles }));
    console.log(this.state.news);
  }

  render() {
    const { news } = this.state;
    return (
      <div className="container">
        {news.map(n => (
          <Newsfeed key={uuid()} news={n} />
        ))}
      </div>
    );
  }
}
export default getNews;
