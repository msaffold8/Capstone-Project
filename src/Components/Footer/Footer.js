import "./Footer.scss";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faLinkedin,
  faYoutube,
  faPinterest,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

export const Footer = (props) => {
  return (
    <footer id="footer">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-sm-12 col-lg-6">
            <div class="ft-logo">
              <img src="logo.png" alt="" class="img-fluid" />
            </div>
          </div>
          <div class="col-sm-12 col-lg-6">
            <ul class="ft-social text-lg-end">
              <li>
                <a href="#">
                  <Icon icon={faFacebook} />
                </a>
              </li>
              <li>
                <a href="#">
                  <Icon icon={faTwitter} />
                </a>
              </li>

              <li>
                <a href="#">
                  <Icon icon={faPinterest} />
                </a>
              </li>
              <li>
                <a href="#">
                  <Icon icon={faYoutube} />
                </a>
              </li>
              <li>
                <a href="#">
                  <Icon icon={faInstagram} />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="row align-items-center">
          <div class="col-sm-12 col-lg-6 order-2 order-lg-1">
            <div class="copyright">
              {/* <p>&copy;Copyright </p> */}
              {/* <!-- <p>&copy; 2021 All rights reserved.</p> --> */}
            </div>
          </div>
          <div class="col-sm-12 col-lg-6 order-1 order-lg-2">
            <ul class="ft-link text-lg-end">
              <li>
                <a href="#">Contact us</a>
              </li>
              <li>
                <a href="#">Private policy</a>
              </li>
              <li>
                <a href="#">Affiliate disclosure</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
