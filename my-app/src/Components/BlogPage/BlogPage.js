import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
// import "./BlogPage.scss";

export const BlogPage = (props) => {
  return (
    <div className="BlogPage">
      <Header />
      <div class="container">
        <div class="row">
          <div class="col-sm-12">
            <div class="blog-desc">
              <div class="text-center">
                <h2>100+ Mind-Blowing Gifts </h2>
                <p class="small">Updated: July 2021</p>
                <img
                  src="https://images.unsplash.com/photo-1512916206820-bd6d503c003e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzN8fGdpZnR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
                  alt=""
                  class="img-fluid"
                />
              </div>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse blandit venenatis molestie. Nam vulputate sit amet
                turpis quis egestas. Class aptent taciti sociosqu ad litora
                torquent per conubia nostra, per inceptos himenaeos. Nam
                ultricies a orci nec rutrum. Phasellus urna ipsum, semper id
                posuere a, placerat non turpis. Pellentesque egestas efficitur
                quam in hendrerit. Nam mollis, tellus id malesuada ornare, urna
                dui blandit mi, quis ornare lorem neque ut lorem. Ut tempus sed
                nulla at ultrices. Nullam semper tempus tellus eu rhoncus.
                Pellentesque ultricies risus ac tellus iaculis porta quis et
                justo. Vivamus malesuada nec leo quis sollicitudin. Nulla
                bibendum condimentum arcu, facilisis commodo nunc efficitur
                vitae. Aenean quis nulla tristique tortor consequat
                pellentesque. Nullam pharetra consectetur gravida. Donec in arcu
                tellus. Morbi eget felis a ligula consectetur sagittis in et
                nisi. Donec sit amet elementum neque. Morbi a semper ante.
                Aenean condimentum purus ac sapien scelerisque sodales. Aenean
                tortor nunc, sagittis et mauris ut, blandit vulputate orci.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
