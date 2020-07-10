import React, { Component } from 'react'

export default class HouseList extends Component {
  state = {
    house: []
  }
  render() {
    return (
      <React.Fragment>
        <section class="completed-project">
          <div class="container">
            <div class="recent-top">
              <p>Recent Paintings</p>
              <h3>Our Recent Completed Paintings</h3>
              <p>
                Let’s create the home of your dreams. No Job Is Too Big Or Small. We provide the highest quality painting and most professional services.
              </p>
            </div>
            <div class="recent-project">
              <div class="row">
                <div class="col-md-6">
                  <div class="prj-1-content">
                    <div class="p-icon">
                      <span class="flaticon-repair ficon-pj-1"></span>
                    </div>
                    <h4>Colorful Painting For Your Dream!</h4>
                    <p>
                      There is no society ever discovered in remotest corner the
                      world that has not had something that we would consider
                      the arts.
                    </p>
                    <a href="portfolio-details.html"> Learn More</a>
                  </div>
                  <div class="project-1">
                    <img src="/images/painting-1.jpg" alt="" />
                    <h4 className="before">Before</h4>
                    <div class="prj-1-content prj-two">
                      <div class="p-icon">
                        <span class="flaticon-repair ficon-pj-1"></span>
                      </div>
                      <h4> Tru Color Painting For Your Dream!</h4>
                      <p>TODO: Add desscription</p>
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="project-1">
                    <img src="/images/painting-1.jpg" alt="After Painting" />
                    <h4 className="after">After</h4>
                    <div class="prj-1-content prj-two">
                      <div class="p-icon">
                        <span class="flaticon-repair ficon-pj-1 ficon-pj-2"></span>
                      </div>
                      <h4>Tru Color Painting For Your Dream!</h4>
                      <p>TODO: Add desscription</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}
