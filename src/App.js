import React, { Component } from 'react';
 
class App extends Component {
  render() {
    return (
      <div>

        <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
          <a className="navbar-brand js-scroll-trigger" href="#page-top">
            <span className="d-block d-lg-none">Gian Tomakin</span>
            <span className="d-none d-lg-block">
              <img className="img-fluid img-profile rounded-circle mx-auto mb-2" src="img/profile.jpg" alt=""/>
            </span>
          </a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#about">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#experience">Experience</a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#education">Education</a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#skills">Skills</a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#works">Works</a>
              </li>
            </ul>
          </div>
        </nav>

        <div className="container-fluid p-0">

          <section className="resume-section p-3 p-lg-5 d-flex d-column" id="about">
            <div className="my-auto">
              <h1 className="mb-0">Gian&nbsp;
                <span className="text-primary">Tomakin</span>
              </h1>
              <div className="subheading mb-5">480 Markthaler Place · Roselle Park, NJ 07204 · (551) 256-0349 ·
                <a href="mailto:giantomakin@gmail.com">giantomakin@gmail.com</a>
              </div>
                <div className="subheading mb-3">Career Objective</div>
               <p className="lead mb-5">To work with an organization that provides me an opportunity to grow and to exploit my potential to excel in the area of my profession as well as to help the organization in the accomplishment of its goal.</p>

              <div className="subheading mb-3">Summary</div>
              <p className="lead mb-5">I am a full-stack Web developer, I have utilize my skills and maximize my full potential from every experience of various projects that I worked. I love programming that it gives me joy, so I put effort in every work and do its best with passion, not just by quantity but also with quality. Learning new technologies, techniques or languages in every project are some of the few things that motivates me to become a better programmer.</p>
            </div>
          </section>

          <hr className="m-0"/>

          <section className="resume-section p-3 p-lg-5 d-flex flex-column" id="experience">
            <div className="my-auto">
              <h2 className="mb-5">Experience</h2>

              <div className="resume-item d-flex flex-column flex-md-row mb-5">
                <div className="resume-content mr-auto">
                  <h3 className="mb-0">Web Developer</h3>
                  <div className="subheading mb-3">All Granite and Marble, Inc</div>
                  <ul>
                     <li>Designed and implemented company web applications and internal tools using PHP(Laravel) , MySQL, Angular, React, Node and MongoDB. </li> 
                     <li>Designed architectural solutions, front-end and back-end components besides fixing functional/ performance defect leading to faster page load time. </li>
                     <li>Maintained and supported systems and websites, improved programming techniques and applications. </li>
                     <li>Integrated API's like Synology API, Open Graph, Sketchfab API, Jira Cloud Rest API, Google Maps, Bing Maps.  </li>
                  </ul>
                </div>
                <div className="resume-date text-md-right">
                  <span className="text-primary">March 2016 - Present</span>
                </div>
              </div>

              <div className="resume-item d-flex flex-column flex-md-row mb-5">
                <div className="resume-content mr-auto">
                  <h3 className="mb-0">Software Developer</h3>
                  <div className="subheading mb-3">Vauldex Technologies</div>
                  <ul>
                     <li>Develop virtual currency gateway applications using Scala, Play Framework, UnderscoreJS, PostgreSQL, BackboneJS, Akka, Coffee Script and SASS.</li> 
                     <li>Create specifications (UML) based from the requirements given.</li> 
                     <li>Analyze the best possible way on how to implement things during the development process.</li> 
                     <li>Maintain coding standards for readable and maintainable codes.</li> 
                  </ul>
                </div>
                <div className="resume-date text-md-right">
                  <span className="text-primary">October 2015 - January 2016</span>
                </div>
              </div>

              <div className="resume-item d-flex flex-column flex-md-row mb-5">
                <div className="resume-content mr-auto">
                  <h3 className="mb-0">Web Programmer</h3>
                  <div className="subheading mb-3">Proweaver Inc.</div>
                  <ul>
                     <li>Integrated API's like Synology API, Open Graph, Sketchfab API, Jira Cloud Rest API, Google Maps, Bing Maps.  </li>
                     <li>Develop corporate, e-commerce and custom web applications based from client’s requirements.</li>
                     <li>Manage and maintained development of PHP backend for dynamic driven web applications.</li>
                     <li>Used PHP, jQuery, MySQL, and Smarty for development.</li>

                  </ul>
                </div>
                <div className="resume-date text-md-right">
                  <span className="text-primary">November 2014 - October 2013</span>
                </div>
              </div>
            </div>
          </section>

          <hr className="m-0"/>

          <section className="resume-section p-3 p-lg-5 d-flex flex-column" id="education">
            <div className="my-auto">
              <h2 className="mb-5">Education</h2>

              <div className="resume-item d-flex flex-column flex-md-row mb-5">
                <div className="resume-content mr-auto">
                  <h3 className="mb-0">University of Cebu</h3>
                  <div className="subheading mb-3">Bachelor of Science in Information Technology</div>
                </div>
                <div className="resume-date text-md-right">
                  <span className="text-primary">June 2010 - October 2014</span>
                </div>
              </div>
            </div>
          </section>

          <hr className="m-0"/>

          <section className="resume-section p-3 p-lg-5 d-flex flex-column" id="skills">
            <div className="my-auto">
              <h2 className="mb-5">Skills</h2>

              <div className="subheading mb-3">Programming Languages &amp; Tools</div>
              <ul className="list-inline dev-icons">
                <li className="list-inline-item">
                  <i className="fab fa-html5"></i>
                </li>
                <li className="list-inline-item">
                  <i className="fab fa-css3-alt"></i>
                </li>
                <li className="list-inline-item">
                  <i className="fab fa-js-square"></i>
                </li>
                <li className="list-inline-item">
                  <i className="fab fa-angular"></i>
                </li>
                <li className="list-inline-item">
                  <i className="fab fa-react"></i>
                </li>
                <li className="list-inline-item">
                  <i className="fab fa-node-js"></i>
                </li>
                <li className="list-inline-item">
                  <i className="fab fa-sass"></i>
                </li>
                <li className="list-inline-item">
                  <i className="fab fa-less"></i>
                </li>
                <li className="list-inline-item">
                  <i className="fab fa-wordpress"></i>
                </li>
                <li className="list-inline-item">
                  <i className="fab fa-gulp"></i>
                </li>
                <li className="list-inline-item">
                  <i className="fab fa-grunt"></i>
                </li>
                <li className="list-inline-item">
                  <i className="fab fa-npm"></i>
                </li>
              </ul>

              <div className="subheading mb-3">Skills Overview</div>
              <ul className="fa-ul mb-0">
                    <li> <i className="fa-li fa fa-check"></i>Javascript, PHP, Java, Android, Python, C#, Scala, SQL, NoSQL,  HTML, CSS</li>
                    <li> <i className="fa-li fa fa-check"></i>Databases: MySQL, PostgreSQL, MongoDB</li>
                    <li> <i className="fa-li fa fa-check"></i>Environment : Windows, MacOS, Ubuntu Linux</li>
                    <li> <i className="fa-li fa fa-check"></i>Web Servers: Apache, NginX</li>
                    <li> <i className="fa-li fa fa-check"></i>Web Frameworks: Laravel, Code Igniter, Play, ASP.Net, Express</li>
                    <li> <i className="fa-li fa fa-check"></i>Javascript Frameworks: React, Vue and Angular</li>
                    <li> <i className="fa-li fa fa-check"></i>Libraries: Bootstrap, Foundation, jQuery, Lodash, Socket.io</li>
                    <li> <i className="fa-li fa fa-check"></i>Testing: PhpUnit, Mocha</li>
                    <li> <i className="fa-li fa fa-check"></i>Version Control: GIT</li>
                    <li> <i className="fa-li fa fa-check"></i>CMS: Wordpress, Prestashop</li>
                    <li> <i className="fa-li fa fa-check"></i>API: Google, Paypal</li>
                    <li> <i className="fa-li fa fa-check"></i>Others: REST, AJAX, JSON, Webpack, Web Socket, Babel, Redux, SASS, Coffee Script, Grunt, Gulp</li>
              </ul>
            </div>
          </section>

          <hr className="m-0"/>

          <section className="resume-section p-3 p-lg-5 d-flex flex-column" id="works">
            <div className="my-auto">
              <h2 className="mb-5">Recent Works</h2>
              <ul className="fa-ul mb-0">
                   <li><i className="fa-li fa fa-star text-warning"></i><a href="https://marble.com/colortipster">Color Tipster - (React, NodeJS, Express) </a></li>
                   <li><i className="fa-li fa fa-star text-warning"></i><a href=">http://visualizerplus.com/">Visualizer Plus - (Nuxt, Bootstrap, NodeJS, NginX)</a></li>
                   <li><i className="fa-li fa fa-star text-warning"></i><a href="https://inventivesoftwarellc.com/">Inventive Software LLC - (Nuxt, Bootstrap)</a></li>
                   <li><i className="fa-li fa fa-star text-warning"></i><a href="https://coinect.me/">Coinectme - (Play, Foundation, Backbone.js)</a></li>
                   <li><i className="fa-li fa fa-star text-warning"></i><a href="https://mr.exchange/en-JP">Mr.Exchange - (Play, Foundation, Backbone.js)</a></li>
                   <li><i className="fa-li fa fa-star text-warning"></i><a href="https://www.richardmagazine.com/">Richard Magazine - (Wordpress, Varnish Cache)</a></li>
              </ul>
            </div>
          </section>
        </div>

      </div>
    );
  }
}

export default App;
