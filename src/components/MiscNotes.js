import React from "react";
import styles from "./MiscNotes.module.css";
import { Row, Col } from "react-bootstrap";

const MiscNotes = (props) => {
  return (
    <div className={styles.background}>
      <div className={styles.heading}>
        <h1>
          <strong>Misc Notes</strong>
        </h1>
      </div>
      <div className={styles.text_content}>
        <p>Based on this let’s enter a thought experiment…</p>
        <p>
          If you are in the middle of a lake, you have the capability to swim,
          would the lack of swimming be suicide, no?
        </p>
        <p>
          If you jump in a pool and do not swim, letting yourself drown, that is
          suicide.
        </p>
        <p>
          If you are swimming with a friend who pushes you in for fun, and then
          you decided to let yourself drown, that friend would obviously save
          you, yet you would have attempted suicide.
        </p>
        <p>
          What about if your friend pushes you out of a canoe 30 ft from the
          deck, and paddles away too far to save you. He knows you can swim ba
        </p>
        <p style={{ marginBottom: "7%" }}>
          But what about if you were dropped into a lake, you see a shore but it
          looks far away, the waves are pushing against you, you are unsure if
          you would make it…. would it be suicide to give up?
        </p>
        <p>
          Are we not committing modern day suicide to not try and continue,
          given we are at the one point in a existing beings timeline when it
          has become possible? Is there not a life that you can live where you
          have a major impact.
        </p>
        <p>
          Imagine if you have a fatal illness and the cure was within reach but
          you choose to let yourself die, this is simply a form of suicide, if
          we do not fight for our lives, we do not fight to save all lives.
        </p>
        <p>
          Do not be ignorant to the possibility of this. With the advent of the
          internet humanity has more opportunity and power across board than
          ever before. We have also been overladen with distraction. Never could
          a normal lifespan give all the teachings and meaning necessary. A new
          era is starting in the world, and in life.
        </p>
        <p>Even if the odds are stacked against you. You should still do it.</p>
        <div className={styles.containerBar} style={{ padding: "3%" }}>
          <section className={styles.card_list}>
            <article className={styles.card}>
              <header className={styles.card_header}>
                <p>Feb 11th 2023</p>
                <h2>What about love?</h2>
              </header>
              <div
                // className={styles.card_author}
                style={{ display: "flex", justifyContent: "center" }}
              >
                <div style={{ position: "relative" }}>
                  <a className={styles.author_avatar}>
                    <img src="./Logof-modified.png" style={{}} />
                  </a>
                  <svg
                    className={styles.half_circle}
                    viewBox="0 0 108 57"
                    style={{
                      height: "50%",
                      width: "100%",
                      position: "absolute",
                      bottom: "0px",
                    }}
                  >
                    <path d="M102 4c0 27.1-21.9 49-49 49S4 31.1 4 4"></path>
                  </svg>
                </div>
              </div>
            </article>

            <article className={styles.card}>
              <header className={styles.card_header}>
                <p>Feb 11th 2023</p>
                <h2>
                  I know what I was born to do, I will make mistakes in doing it
                  that will give me guidance and lead in time to enlightenment.
                  I must continue to learn before I teach
                </h2>
              </header>
            </article>

            <article className={styles.card}>
              <header className={styles.card_header}>
                <p>Feb 11th 2023</p>
                <h2>
                  People are dying because of your inaction, it’s hard to
                  connect. Easy when there’s a drowning kid you can save
                  directly, because the you get the gratification.
                </h2>
              </header>
            </article>
          </section>
        </div>

        <div>
          <h1 style={{ padding: "3%" }}>
            <strong>
              One of the greatest things Effective Buddhists can first do is,
              conversion.
            </strong>
          </h1>
        </div>

        <div style={{ textAlign: "center", padding: "4%" }}>
          <h2>
            <strong>Buddha Studio</strong>
          </h2>
        </div>
        <div className={styles.studio}>
          <Row style={{}}>
            <Col xs={6} style={{ padding: "4%" }}>
              <img src="./BuddhaStudio.png" style={{ maxWidth: "100%" }}></img>
            </Col>

            <Col xs={1}>
              <div className={styles.vl}></div>
            </Col>

            <Col xs={5}>
              <div style={{ lineHeight: "1.6", padding: "4%" }}>
                <ul className={styles.scrollList}>
                  <li>
                    <p>
                      Offer All Buddhists Or People Who Wish To Live A Lifestyle
                      Giving Up BAD THINGS, a FREE LIFESTYLE. To work on what
                      matters, and the organization is sustained and can spread
                      FROM the works outputted from here.
                    </p>
                  </li>
                  <li>
                    <p>Food + Shelter given they follow a NOT TO DO LIST.</p>
                  </li>
                  <li>
                    <p>Im keen on visting buddhist temples.</p>
                  </li>
                  <li>
                    <p>
                      Which is why I was able to live this life: [Highlight Reel
                      Of Richness] Before finding a path of enlightenment
                    </p>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </div>

        <div style={{ padding: "10%" }}>
          <h2>
            <strong>
              Now I won’t renounce a beautiful lifestyle of efficient beauty. A
              focused community that can grow and be efficient.
            </strong>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default MiscNotes;
