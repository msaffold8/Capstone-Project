import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";
import "./WishListPage.scss";

export const WishListPage = (props) => {
  return (
    <div className="WishListPage">
      <Header />
      <section id="wrapper">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="with-head">
                <div className="row">
                  <div className="col-sm-12 col-lg-8">
                    <h3> Welcome! msaffold8</h3>
                    {/* <!-- <p><a href="#" className="btn btn-primary">Edit Profile</a></p> -->
                                <!-- <p><a href="#" className="btn btn-success"><i className="far fa-share-square"></i> Share</a></p> --> */}
                  </div>
                  <div className="col-sm-12 col-lg-4 text-lg-right">
                    <a href="">
                      <img
                        src="https://images.unsplash.com/photo-1510771463146-e89e6e86560e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDR8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
                        alt=""
                        className="img-fluid"
                      />
                    </a>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-sm-6 col-lg-4">
                  <div className="with-list">
                    <div className="row g-1">
                      <div className="col-6">
                        <img
                          src="https://picsum.photos/200/160"
                          alt=""
                          className="img-fluid"
                        />
                      </div>
                      <div className="col-6">
                        <img src="" alt="" className="img-fluid" />
                      </div>
                      <div className="col-6">
                        <img src="" alt="" className="img-fluid" />
                      </div>
                      <div className="col-6">
                        <img src="" alt="" className="img-fluid" />
                      </div>
                    </div>
                    <div className="wish-num">
                      <h3>
                        <a href="">My Wishlist</a>
                      </h3>
                      <p>2 items</p>
                      <a href="" className="arrow">
                        <i className="fas fa-chevron-circle-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-lg-4">
                  <div className="with-list">
                    <div className="row g-1">
                      <div className="col-6">
                        <img src="" alt="" className="img-fluid" />
                      </div>
                      <div className="col-6">
                        <img src="" alt="" className="img-fluid" />
                      </div>
                      <div className="col-6">
                        <img src="" alt="" className="img-fluid" />
                      </div>
                      <div className="col-6">
                        <img src="" alt="" className="img-fluid" />
                      </div>
                    </div>
                    <div className="wish-num">
                      <h3>
                        <a href="">My Wishlist</a>
                      </h3>
                      <p>2 items</p>
                      <a href="" className="arrow">
                        <i className="fas fa-chevron-circle-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-lg-4">
                  <div className="with-list with-create">
                    <a href="" className="">
                      <i className="fas fa-plus"></i> Create new list
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};
