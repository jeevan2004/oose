import React from "react";
import "./newsletter.css";

const NewsLetter = () => {
  return (
    <section class="newsletter__area">
      <div class="container">
        <div class="row align-items-center justify-content-center">
          <div class="col-lg-8">
            <div class="newsletter__content">
              <h2 class="title">
                <b>Want to stay informed about</b> <br />{" "}
                <b>new courses &amp; study?</b>
              </h2>
              <div class="newsletter__form">
                <form action="" method="post" class="newsletter">
                  <input
                    type="hidden"
                    name="_token"
                    value="1afEaOW78cqOGp7S5vm4qNWrl7QxXDUSUgJKOtTJ"
                    autocomplete="off"
                  />{" "}
                  <input
                    type="email"
                    placeholder="Type your e-mail"
                    name="email"
                  />
                  <button type="submit" class="btn_secondary">
                    Subscribe Now
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="newsletter__shape">
        <img
          src="https://skillgro.websolutionus.com/frontend/img/others/newsletter_shape03.png"
          alt="img"
        />
      </div>
    </section>
  );
};

export default NewsLetter;
