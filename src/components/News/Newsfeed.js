import React, { Component } from "react";

export default class Newsfeed extends Component {
  render() {
    const {
      author,
      title,
      description,
      urlToImage,
      url,
      publishedAt,
      content
    } = this.props.news;

    return (
      <div class="jumbotron">
        <div className="row">
          <h1 className="display-4 col-sm-6">{title}</h1>
          <img src={urlToImage} height="50%" width="50%" alt="" />
        </div>
        <p className="lead">{description}</p>
        <hr className="my-4" />
        <p>{content}</p>
        <p>
          PUBLISHED BY {author} AT {publishedAt}
        </p>
        <p className="lead">
          <a className="btn btn-primary btn-lg" href={url} role="button">
            Read More
          </a>
        </p>
      </div>
    );
  }
}
