import { useDispatch } from "react-redux";
import { openModal } from "../features/LogicSlice";
import { useEffect, useState } from "react";

const useCurYear = () => {
  const [year, setYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setYear(Number(new Date().getFullYear()));
  }, []);

  return year;
};

function Footer() {
  const dispatch = useDispatch();
  const handleOpen = () => {
    dispatch(openModal());
  };

  const currentYear = useCurYear();
  return (
    <div className="footer">
      <h2>Let's Connect</h2>
      <p>
        Keep up-to-date with my latest projects, achievements, and{" "}
        <br className="break" />
        experiences. Feel free to reach out - I'm excited to explore potential{" "}
        <br className="break" />
        collaborations, share knowledge, or discuss innovative ideas.
      </p>
      <div className="flex">
        <div className="flex-img">
          <a href="https://github.com/Midemixdev" className="social-link">
            <img src="/footerIcon/github.png" alt="github logo" />
          </a>
          <a href="mailto:>olamidepeter912@gmail.com" className="social-link">
            <img src="/footerIcon/email.png" alt="email logo" />
          </a>
          <a
            href="https://www.linkedin.com/in/olamide-johnson-5493042a0"
            className="social-link"
          >
            <img src="/footerIcon/linkedIn.png" alt="linkedIn logo" />
          </a>
        </div>
        <div>
          <button className="footer-button" onClick={handleOpen}>
            Get in touch
          </button>
        </div>
      </div>
      <p className="copyright">
        <span>Copyright &copy; {currentYear}</span> Codemasters Inc. All rights
        reserved
      </p>
    </div>
  );
}

export default Footer;
