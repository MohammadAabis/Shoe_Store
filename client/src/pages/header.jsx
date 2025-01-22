const header = () => {
  return (
    <>
      <header class="header">
        <div className="container mb-3 email-us">Email US</div>
        <div class="container">
          {/* Logo Container */}
          <div className="d-flex align-items-center justify-content-around ">
            <div className="logo">
              <img src={`${process.env.PUBLIC_URL}/img/hp_logo.png`} alt="" />
            </div>

            {/* Search Form Container */}
            <div>
              <form class="search-form" role="search">
                <div class="d-flex">
                  <input
                    class="form-control me-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  />
                  <button class="btn btn-outline-danger" type="submit">
                    <i class="bi bi-search text-white"></i>
                  </button>
                </div>
              </form>
            </div>

            {/* Text Container */}
            <div className="d-flex flex-column">
              <span className="text-danger fw-bold">
                Fast & Free Shipping on Orders over $59.99*
              </span>
              <a href="##" className="click-details text-danger fw-bold">
                Click For Details
              </a>
            </div>

            {/* Cart Container */}
            <div className=" d-flex flex-column align-items-center">
              <i class="bi bi-cart3"></i>
              <span>Cart</span>
            </div>
          </div>
        </div>

        {/* Navigation Menu */}
        <div className="container">
          <hr />
          <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
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
      </header>
    </>
  );
};

export default header;
