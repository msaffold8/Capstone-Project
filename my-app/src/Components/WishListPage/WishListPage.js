import "./WishListPage.scss";

export const WishListPage = (props) => {
  return (
    <div className="WishListPage">
      <section id="wrapper">
        <div class="container">
          <div class="row">
            <div class="col-sm-12">
              <div class="with-head">
                <div class="row">
                  <div class="col-sm-12 col-lg-8">
                    <h3>username@mail.com</h3>
                    {/* <!-- <p><a href="#" class="btn btn-primary">Edit Profile</a></p> -->
                                <!-- <p><a href="#" class="btn btn-success"><i class="far fa-share-square"></i> Share</a></p> --> */}
                  </div>
                  <div class="col-sm-12 col-lg-4 text-lg-right">
                    <a href="#">
                      <img
                        src="https://images.unsplash.com/photo-1510771463146-e89e6e86560e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDR8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
                        alt=""
                        class="img-fluid"
                      />
                    </a>
                  </div>
                </div>
              </div>

              <div class="row">
                <div class="col-sm-6 col-lg-4">
                  <div class="with-list">
                    <div class="row g-1">
                      <div class="col-6">
                        <img
                          src="https://picsum.photos/200/160"
                          alt=""
                          class="img-fluid"
                        />
                      </div>
                      <div class="col-6">
                        <img src="" alt="" class="img-fluid" />
                      </div>
                      <div class="col-6">
                        <img src="" alt="" class="img-fluid" />
                      </div>
                      <div class="col-6">
                        <img src="" alt="" class="img-fluid" />
                      </div>
                    </div>
                    <div class="wish-num">
                      <h3>
                        <a href="#">My Wishlist</a>
                      </h3>
                      <p>2 items</p>
                      <a href="#" class="arrow">
                        <i class="fas fa-chevron-circle-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div class="col-sm-6 col-lg-4">
                  <div class="with-list">
                    <div class="row g-1">
                      <div class="col-6">
                        <img src="" alt="" class="img-fluid" />
                      </div>
                      <div class="col-6">
                        <img src="" alt="" class="img-fluid" />
                      </div>
                      <div class="col-6">
                        <img src="" alt="" class="img-fluid" />
                      </div>
                      <div class="col-6">
                        <img src="" alt="" class="img-fluid" />
                      </div>
                    </div>
                    <div class="wish-num">
                      <h3>
                        <a href="#">My Wishlist</a>
                      </h3>
                      <p>2 items</p>
                      <a href="#" class="arrow">
                        <i class="fas fa-chevron-circle-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div class="col-sm-6 col-lg-4">
                  <div class="with-list with-create">
                    <a href="#" class="">
                      <i class="fas fa-plus"></i> Create new list
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
