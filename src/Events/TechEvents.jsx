/* eslint-disable jsx-a11y/anchor-is-valid */
import "../main/TechnicalEvents.css";
import "../Events/Events.css";
import tech from "../assets/TechEvents/tech_events.mp4";
import project from "../assets/TechEvents/Project_expo.jpg";
import paper from "../assets/TechEvents/presentation.jpg";
import coding from "../assets/TechEvents/coding_debug.jpg";
import quiz from "../assets/TechEvents/Quiz.jpg";
import { Link } from "react-router-dom";

const TechEvents = () => {
  return (
    <main className="events-main">
      <video autoPlay loop muted src={tech} id="backVideo"></video>
      <h1 className="text-center tech-title">Technical Events</h1>
      <section className="card-area">
        {/* Card: Paper */}
        <section className="card-section">
          <div className="card">
            <div className="flip-card">
              <div className="flip-card__container">
                <div className="card-front">
                  <div className="card-front__tp card-front__tp--city">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-envelope-paper-heart-fill card-front__icon"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="m3 7.5 3.5 2L8 8.75l1.5.75 3.5-2v-6A1.5 1.5 0 0 0 11.5 0h-7A1.5 1.5 0 0 0 3 1.5zM2 3.133l-.941.502A2 2 0 0 0 0 5.4v.313l2 1.173zm12 3.753 2-1.173V5.4a2 2 0 0 0-1.059-1.765L14 3.133zm-3.693 3.324L16 6.873v6.5zm5.634 4.274L8 10.072.059 14.484A2 2 0 0 0 2 16h12a2 2 0 0 0 1.941-1.516M5.693 10.21 0 13.372v-6.5zM8 1.982C9.664.309 13.825 3.236 8 7 2.175 3.236 6.336.31 8 1.982"
                      />
                    </svg>
                    <h2 className="card-front__heading">Mind Unfolded</h2>
                    <p className="card-front__text-price">
                      (Paper Presentation)
                    </p>
                  </div>
                  <div className="card-front__bt">
                    <p className="card-front__text-view card-front__text-view--city">
                      View me
                    </p>
                  </div>
                </div>
                <div className="card-back">
                  <img src={paper} alt="" className="video__container" />
                </div>
              </div>
            </div>
            <div className="inside-page">
              <div className="inside-page__container">
                <h3 className="inside-page__heading inside-page__heading--city">
                  Academic Avengers
                </h3>
                <p className="inside-page__text">
                  Seize the opportunity to present your innovative ideas and
                  discoveries!
                </p>
                <Link
                  to="/epulz/event/mind-unfolded"
                  className="inside-page__btn inside-page__btn--city"
                >
                  Click Here
                </Link>
              </div>
            </div>
          </div>
        </section>
        {/* Card: Project */}
        <section className="card-section">
          <div className="card">
            <div className="flip-card">
              <div className="flip-card__container">
                <div className="card-front">
                  <div className="card-front__tp card-front__tp--ski">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-rocket-takeoff card-front__icon"
                      viewBox="0 0 16 16"
                    >
                      <path d="M9.752 6.193c.599.6 1.73.437 2.528-.362s.96-1.932.362-2.531c-.599-.6-1.73-.438-2.528.361-.798.8-.96 1.933-.362 2.532" />
                      <path d="M15.811 3.312c-.363 1.534-1.334 3.626-3.64 6.218l-.24 2.408a2.56 2.56 0 0 1-.732 1.526L8.817 15.85a.51.51 0 0 1-.867-.434l.27-1.899c.04-.28-.013-.593-.131-.956a9 9 0 0 0-.249-.657l-.082-.202c-.815-.197-1.578-.662-2.191-1.277-.614-.615-1.079-1.379-1.275-2.195l-.203-.083a10 10 0 0 0-.655-.248c-.363-.119-.675-.172-.955-.132l-1.896.27A.51.51 0 0 1 .15 7.17l2.382-2.386c.41-.41.947-.67 1.524-.734h.006l2.4-.238C9.005 1.55 11.087.582 12.623.208c.89-.217 1.59-.232 2.08-.188.244.023.435.06.57.093q.1.026.16.045c.184.06.279.13.351.295l.029.073a3.5 3.5 0 0 1 .157.721c.055.485.051 1.178-.159 2.065m-4.828 7.475.04-.04-.107 1.081a1.54 1.54 0 0 1-.44.913l-1.298 1.3.054-.38c.072-.506-.034-.993-.172-1.418a9 9 0 0 0-.164-.45c.738-.065 1.462-.38 2.087-1.006M5.205 5c-.625.626-.94 1.351-1.004 2.09a9 9 0 0 0-.45-.164c-.424-.138-.91-.244-1.416-.172l-.38.054 1.3-1.3c.245-.246.566-.401.91-.44l1.08-.107zm9.406-3.961c-.38-.034-.967-.027-1.746.163-1.558.38-3.917 1.496-6.937 4.521-.62.62-.799 1.34-.687 2.051.107.676.483 1.362 1.048 1.928.564.565 1.25.941 1.924 1.049.71.112 1.429-.067 2.048-.688 3.079-3.083 4.192-5.444 4.556-6.987.183-.771.18-1.345.138-1.713a3 3 0 0 0-.045-.283 3 3 0 0 0-.3-.041Z" />
                      <path d="M7.009 12.139a7.6 7.6 0 0 1-1.804-1.352A7.6 7.6 0 0 1 3.794 8.86c-1.102.992-1.965 5.054-1.839 5.18.125.126 3.936-.896 5.054-1.902Z" />
                    </svg>
                    <h2 className="card-front__heading">Project Expo</h2>
                    <p className="card-front__text-price">(Project Showcase)</p>
                  </div>
                  <div className="card-front__bt">
                    <p className="card-front__text-view card-front__text-view--ski">
                      View me
                    </p>
                  </div>
                </div>
                <div className="card-back">
                  <img src={project} alt="" className="video__container" />
                </div>
              </div>
            </div>
            <div className="inside-page">
              <div className="inside-page__container">
                <h3 className="inside-page__heading inside-page__heading--ski">
                  Research Rockstars!
                </h3>
                <p className="inside-page__text">
                  Showcase Your Projects, Inspire Others!
                </p>
                <Link
                  to="/epulz/event/project-expo"
                  className="inside-page__btn inside-page__btn--ski"
                >
                  Click Here
                </Link>
              </div>
            </div>
          </div>
        </section>
        {/* Card: Coding */}
        <section className="card-section">
          <div className="card">
            <div className="flip-card">
              <div className="flip-card__container">
                <div className="card-front">
                  <div className="card-front__tp card-front__tp--beach">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-code-slash card-front__icon"
                      viewBox="0 0 16 16"
                    >
                      <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0m6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0" />
                    </svg>
                    <h2 className="card-front__heading">Code Dilemma</h2>
                    <p className="card-front__text-price">(Code Debugging)</p>
                  </div>
                  <div className="card-front__bt">
                    <p className="card-front__text-view card-front__text-view--beach">
                      View me
                    </p>
                  </div>
                </div>
                <div className="card-back">
                  <img src={coding} alt="" className="video__container" />
                </div>
              </div>
            </div>
            <div className="inside-page">
              <div className="inside-page__container">
                <h3 className="inside-page__heading inside-page__heading--beach">
                  Debugging Dynamos!
                </h3>
                <p className="inside-page__text">
                  Calling all code wizards! Debugging challenge awaits you!
                </p>
                <Link
                  to="/epulz/event/code-dilemma"
                  className="inside-page__btn inside-page__btn--beach"
                >
                  Click Here
                </Link>
              </div>
            </div>
          </div>
        </section>
        {/* Card: Brain Buster */}
        <section className="card-section">
          <div className="card">
            <div className="flip-card">
              <div className="flip-card__container">
                <div className="card-front">
                  <div className="card-front__tp card-front__tp--camping">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-brilliance card-front__icon"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16M1 8a7 7 0 0 0 7 7 3.5 3.5 0 1 0 0-7 3.5 3.5 0 1 1 0-7 7 7 0 0 0-7 7" />
                    </svg>
                    <h2 className="card-front__heading">Brain Buster</h2>
                    <p className="card-front__text-price">(Technical Quiz)</p>
                  </div>
                  <div className="card-front__bt">
                    <p className="card-front__text-view card-front__text-view--camping">
                      View me
                    </p>
                  </div>
                </div>
                <div className="card-back">
                  <img src={quiz} alt="" className="video__container" />
                </div>
              </div>
            </div>
            <div className="inside-page">
              <div className="inside-page__container">
                <h3 className="inside-page__heading inside-page__heading--camping">
                  Electron Enthusiasts!
                </h3>
                <p className="inside-page__text">
                  Engage your mind: Quiz awaits!
                </p>
                <Link
                  to="/epulz/event/brain-buster"
                  className="inside-page__btn inside-page__btn--camping"
                >
                  Click Here
                </Link>
              </div>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
};

export { TechEvents };
