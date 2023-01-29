import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return (
      <section className="page-section bg-light text-dark mb-0 p-3" id="about">
        <div className="container">
          <h2 className="page-section-heading text-center text-uppercase text-dark">About</h2>

          <div className="row">
            <div className="col-lg-4 ms-auto"><p className="lead">Freelancer is a free bootstrap theme created by Start Bootstrap. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p></div>
            <div className="col-lg-4 me-auto"><p className="lead">You can create your own custom avatar for the masthead, change the icon in the dividers, and add your email address to the contact form to make it fully functional!</p></div>
          </div>

        </div>
      </section>

    )
  }
}
