import styles from "../styles/Content.module.css";

const openInNewTab = (url) => {
  window.open(url, "_blank").focus();
};

const detectMob = () => {
  return window.innerWidth <= 600;
};

const Content = () => {
  return (
    <div className={styles.contentContainer}>
      <div className={styles.contentText}>
        {!detectMob && <div className={styles.fixed}>I am a</div>}
        <ul className={styles.typed}>
          <li>
            <span>Frontend Developer</span>
          </li>
          <li>
            <span>Backend Developer</span>
          </li>
          <li>
            <span>Fullstack Developer</span>
          </li>
          {detectMob && (
            <li>
              <span>Ramy</span>
            </li>
          )}
        </ul>
      </div>
      <div className={styles.sections}>
        <section>
          <h1>About me</h1>
          <h3 className={styles.sectionText}>
            Sociable personality who always seeks a good relationship with
            others, understands the power of teamwork to find the solution to
            various problems that could be encountered within a project. Always
            eager to learn new technologies and concepts. Among my interests
            there is also literature, cinema and art. I like to help out in open
            source projects and study independently new technologies.
          </h3>
        </section>
        <a
          className={styles.svgContainer}
          onClick={() =>
            openInNewTab(
              "https://www.linkedin.com/in/ramy-abdulkadir-mohamed-7b3394197"
            )
          }
        >
          <img src="/linkedin.svg" height={30} width={30} />
        </a>
        <a
          className={styles.svgContainer}
          style={{ marginLeft: "10px" }}
          onClick={() => openInNewTab("https://github.com/Ramiellll")}
        >
          <img src="/github.svg" height={30} width={30} />
        </a>
      </div>
    </div>
  );
};

export default Content;
