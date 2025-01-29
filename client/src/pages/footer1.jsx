const Footer1 = () => {
  return (
    <>
      <footer className="mt-5 ">
        <div class="container d-flex flex-row justify-content-around">
          <div>
            <span className="fs-4">Follow Us</span>
            <hr />
            <div className="d-flex flex-row gap-3 text-white">
              <a href="##"><i className="bi bi-facebook"></i></a>
              <a href="##"><i className="bi bi-twitter"></i></a>
              <a href="##"><i className="bi bi-instagram"></i></a>
              <a href="##"><i className="bi bi-youtube"></i></a>
            </div>
          </div>
          <div>
            <span>Join Our Email List</span>
            <div className="d-flex flex-row">
            <input type="email" placeholder="Enter your email" />
            <button>SIGN UP NOW</button>
            </div>
            <span>Private, Secure and Scam-free</span>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer1;
