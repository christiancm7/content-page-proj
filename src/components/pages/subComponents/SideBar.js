import React from 'react'

export const SideBar = () => {
    return (
        <aside className="sidebar">
                <div className="ui segments">
                  <div className="ui segment segment-title"><p>Resources Download</p></div>
                  <div className="ui segment segment-spacing"><p><i className="file pdf outline icon"></i>Resource Title</p><i className="grey download icon"></i></div>
                  <div className="ui segment segment-spacing"><p><i className="file pdf outline icon"></i>Resource Title</p><i className="grey download icon"></i></div>
                  <div className="ui segment segment-spacing"><p><i className="file pdf outline icon"></i>Resource Title</p><i className="grey download icon"></i></div>
                  <div className="ui segment segment-spacing"><p><i className="file pdf outline icon"></i>Resource Title</p><i className="grey download icon"></i></div>
                  <div className="ui segment segment-spacing"><p><i className="file pdf outline icon"></i>Resource Title</p><i className="grey download icon"></i></div>
                </div>
                <div className="ui segments">
                  <div className="ui segment segment-title">
                    <i className="huge grey user circle outline icon"></i>
                    <div className="name-container">
                      <p id="name">Kirk Du Plessis</p>
                      <p id="position">Instructor</p>
                    </div>
                  </div>
                  <div className="details-container">
                      <p>Full-time options trader, real estate investor & Option Alpha Founder. Former mergers and acquisitions investment banker for Deutsche Bank in New York, REIT Analyst for BB&T Capital Markets in Washington D.C, and Options Strategy Consultant for multiple hedge funds. </p>
                  </div>
                  <div className="details-icons">
                  <i class="facebook f icon"></i>
                  <i class="twitter icon"></i>
                  <i class="instagram icon"></i>
                  </div>
                </div>
              </aside>
    )
}

export default SideBar