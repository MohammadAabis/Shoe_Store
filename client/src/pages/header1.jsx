const Header1 = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="top-header col-sm-12">
          <span>Weekly Ad</span>
          <span>Gift Cards</span>
          <span>Used/Consignment Guns</span>
          <span>Shop By Brand</span>
          <span>Join Our Email</span>
          <span>
            <i className="bi bi-phone">1-888-256-1483</i>
          </span>
        </div>
      </div>
      <div className="container second-header">
        <div>
          <img
            src={`${process.env.PUBLIC_URL}/img/newHome/new-logo1.png`}
            alt=""
          />
        </div>
        <div>
          <input type="search" placeholder="Search..." />
          <button className="bg-danger text-white">
            <i className="bi bi-search"></i>
          </button>
        </div>
        <div className="store-location"> 
          <span>Store Location</span>
          <span><i className="bi bi-person-fill "></i> Signin</span>
          <span><i className="bi bi-cart"></i></span>
        </div>
      </div>

      {/* Navigation Menu */}
      <div className="container-fluid bg-danger mt-5">
          <nav class=" navbar navbar-expand-lg">
            <div class="container">
              <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button>

              <div class="collapse navbar-collapse" id="navbarNavDropdown">
                <ul class="navbar-nav navbar-items">
                  <li class="nav-item">
                    <a class="nav-link" href="##">
                    Accessories
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="##">
                    Apparel
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="##">
                      Jewelry
                    </a>
                  </li>
                  <li class="nav-item dropdown">
                    <a
                      class="nav-link "
                      href="##"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Mens Shoes
                    </a>
                    <ul class="dropdown-menu">
                      <li>
                        <a class="dropdown-item" href="##">
                          Action
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="##">
                          Another action
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="##">
                          Something else here
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="##">
                      Womens Shoes
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="##">
                      New Arivals
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="##">
                      Sales
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="##">
                     Our Brands
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
    </>
  );
};

export default Header1;
