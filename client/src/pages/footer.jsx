const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="text-with-lines"><img src={`${process.env.PUBLIC_URL}/img/hp_footer_logo.png`} alt="" /></div>
        </div>
        <div className="container">
            <div className="row mt-3 about-section gap-2">
                <a href="##">About</a>
                <a href="##">Carees</a>
                <a href="##">Shoes Gallery Coupons</a>
                <a href="##">Customer Service </a>
                <a href="##">Shipping and Returns </a>
                <a href="##">Check Order </a>
                <a href="##">FAQS </a>
                <a href="##">Privacy </a>
                <a href="##">Suit Guide </a>
                <a href="##">Store Locator </a>
            </div>
        </div>
        <div className="container">
            <div className="mt-5 text-with-lines">Stay Connected: <i className="bi bi-facebook"/> <i className="bi bi-instagram"/> <i className="bi bi-twitter"/></div>
        </div>
        <p className="text-center">© 2021, All rights reserved</p>
      </footer>
    </>
  );
};

export default Footer;
