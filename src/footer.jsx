import "./footer.css";

export default function Footer() {
  return (
    <>
      <div className="footer">
        <div className="left">
          <div className="emails">
            <h3>Emails</h3>
            <p>devanshbusinesswork.gmail.com</p>
            <p>devanshrajput032006.gmail.com</p>
          </div>
          <div className="social-media">
            <h3>Social Media</h3>
            <a href="https://www.linkedin.com/in/devansh-rajput-088ba9300?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
              <img src="assets/org-linked.jfif" alt="linked in profile" />
            </a>
            <a href="https://www.instagram.com/devanshwebdev?igsh=azNkNGw4eWdkeTdq">
              <img className="insta-img" src="assets/org-insta.jfif" alt="instagram profile" />
            </a>
            <p>© 2024</p>
          </div>
        </div>
        <div className="right">
          <video
            src="assets/animation with html code.mp4"
            autoPlay
            poster="assets/postervideoanimation.jpg"
            loop
            autoFocus
            controls
          ></video>
        </div>
      </div>
    </>
  );
}
