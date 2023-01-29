import React, { Component } from 'react'
import ImageCard from '../ImageCard/ImageCard'
export default class Home extends Component {
  state = {
    images: [
      { id: 1, path: "Images/portfolio/cabin.png" },
      { id: 2, path: "Images/portfolio/cake.png" },
      { id: 3, path: "Images/portfolio/circus.png" },
      { id: 4, path: "Images/portfolio/game.png" },
      { id: 5, path: "Images/portfolio/safe.png" },
      { id: 6, path: "Images/portfolio/submarine.png" },
    ]
  }
  render() {
    return (
      <section className="page-section portfolio pb-5" id="portfolio">
        <div className="container">
          <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Portfolio</h2>

          <div className="row justify-content-center">
            {this.state.images.map((image) => <ImageCard key={image.id} path={image.path} />)}
          </div>
        </div>
      </section>

    )
  }
}
