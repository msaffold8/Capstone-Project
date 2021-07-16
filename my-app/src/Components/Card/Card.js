export const Card = (props) => {
  return (
    <div classNameName="Card">
      <div className="col-sm-6 col-lg-4">
        <div className="product-item">
          <h2>
            <a href="#">Product Title</a>
          </h2>
          <a href="#">
            <img
              src="https://picsum.photos/600/400"
              alt=""
              className="img-fluid"
            />
          </a>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
          <div className="row">
            <div className="col-6">
              <a href="#" className="save">
                <i className="far fa-heart"></i> 20 saves
              </a>
            </div>
            <div className="col-6 text-end">
              <a href="#" className="btn-dp">
                Check it out
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
