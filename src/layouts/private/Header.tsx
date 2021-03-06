const PrivateHeader: React.FC = () => {
  return (
    <header id="page-topbar">
      <div className="navbar-header">
        <div className="d-flex">
          {/* LOGO */}
          <div className="navbar-brand-box">
            <a href="index.html" className="logo logo-dark">
              <span className="logo-sm">
                <img src="assets/images/logo-sm.png" alt="" height={22} />
              </span>
              <span className="logo-lg">
                <img src="assets/images/logo-dark.png" alt="" height={20} />
              </span>
            </a>
            <a href="index.html" className="logo logo-light">
              <span className="logo-sm">
                <img src="assets/images/logo-sm.png" alt="" height={22} />
              </span>
              <span className="logo-lg">
                <img src="assets/images/logo-light.png" alt="" height={20} />
              </span>
            </a>
          </div>
          <button
            type="button"
            className="btn btn-sm px-3 font-size-16 d-lg-none header-item waves-effect waves-light"
            data-bs-toggle="collapse"
            data-bs-target="#topnav-menu-content"
          >
            <i className="fa fa-fw fa-bars" />
          </button>
          {/* App Search*/}
          <form className="app-search d-none d-lg-block">
            <div className="position-relative">
              <input
                type="text"
                className="form-control"
                placeholder="Search..."
              />
              <span className="uil-search" />
            </div>
          </form>
        </div>
        <div className="d-flex">
          <div className="dropdown d-inline-block d-lg-none ms-2">
            <button
              type="button"
              className="btn header-item noti-icon waves-effect"
              id="page-header-search-dropdown"
              data-bs-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i className="uil-search" />
            </button>
            <div
              className="dropdown-menu dropdown-menu-lg dropdown-menu-right p-0"
              aria-labelledby="page-header-search-dropdown"
            >
              <form className="p-3">
                <div className="form-group m-0">
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search ..."
                      aria-label="Recipient's username"
                    />
                    <div className="input-group-append">
                      <button className="btn btn-primary" type="submit">
                        <i className="mdi mdi-magnify" />
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="dropdown d-inline-block language-switch">
            <button
              type="button"
              className="btn header-item waves-effect"
              data-bs-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <img
                src="assets/images/flags/us.jpg"
                alt="Header Language"
                height={16}
              />
            </button>
            <div className="dropdown-menu dropdown-menu-end">
              {/* item*/}
              <a
                href="javascript:void(0);"
                className="dropdown-item notify-item"
              >
                <img
                  src="assets/images/flags/spain.jpg"
                  alt="user-image"
                  className="me-1"
                  height={12}
                />
                <span className="align-middle">Spanish</span>
              </a>
              {/* item*/}
              <a
                href="javascript:void(0);"
                className="dropdown-item notify-item"
              >
                <img
                  src="assets/images/flags/germany.jpg"
                  alt="user-image"
                  className="me-1"
                  height={12}
                />{" "}
                <span className="align-middle">German</span>
              </a>
              {/* item*/}
              <a
                href="javascript:void(0);"
                className="dropdown-item notify-item"
              >
                <img
                  src="assets/images/flags/italy.jpg"
                  alt="user-image"
                  className="me-1"
                  height={12}
                />
                <span className="align-middle">Italian</span>
              </a>
              {/* item*/}
              <a
                href="javascript:void(0);"
                className="dropdown-item notify-item"
              >
                <img
                  src="assets/images/flags/russia.jpg"
                  alt="user-image"
                  className="me-1"
                  height={12}
                />{" "}
                <span className="align-middle">Russian</span>
              </a>
            </div>
          </div>
          <div className="dropdown d-none d-lg-inline-block ms-1">
            <button
              type="button"
              className="btn header-item noti-icon waves-effect"
              data-bs-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i className="uil-apps" />
            </button>
            <div className="dropdown-menu dropdown-menu-lg dropdown-menu-end">
              <div className="px-lg-2">
                <div className="row g-0">
                  <div className="col">
                    <a className="dropdown-icon-item" href="#">
                      <img src="assets/images/brands/github.png" alt="Github" />
                      <span>GitHub</span>
                    </a>
                  </div>
                  <div className="col">
                    <a className="dropdown-icon-item" href="#">
                      <img
                        src="assets/images/brands/bitbucket.png"
                        alt="bitbucket"
                      />
                      <span>Bitbucket</span>
                    </a>
                  </div>
                  <div className="col">
                    <a className="dropdown-icon-item" href="#">
                      <img
                        src="assets/images/brands/dribbble.png"
                        alt="dribbble"
                      />
                      <span>Dribbble</span>
                    </a>
                  </div>
                </div>
                <div className="row g-0">
                  <div className="col">
                    <a className="dropdown-icon-item" href="#">
                      <img
                        src="assets/images/brands/dropbox.png"
                        alt="dropbox"
                      />
                      <span>Dropbox</span>
                    </a>
                  </div>
                  <div className="col">
                    <a className="dropdown-icon-item" href="#">
                      <img
                        src="assets/images/brands/mail_chimp.png"
                        alt="mail_chimp"
                      />
                      <span>Mail Chimp</span>
                    </a>
                  </div>
                  <div className="col">
                    <a className="dropdown-icon-item" href="#">
                      <img src="assets/images/brands/slack.png" alt="slack" />
                      <span>Slack</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="dropdown d-none d-lg-inline-block ms-1">
            <button
              type="button"
              className="btn header-item noti-icon waves-effect"
              data-bs-toggle="fullscreen"
            >
              <i className="uil-minus-path" />
            </button>
          </div>
          <div className="dropdown d-inline-block">
            <button
              type="button"
              className="btn header-item noti-icon waves-effect"
              id="page-header-notifications-dropdown"
              data-bs-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i className="uil-bell" />
              <span className="badge bg-danger rounded-pill">3</span>
            </button>
            <div
              className="dropdown-menu dropdown-menu-lg dropdown-menu-end p-0"
              aria-labelledby="page-header-notifications-dropdown"
            >
              <div className="p-3">
                <div className="row align-items-center">
                  <div className="col">
                    <h5 className="m-0 font-size-16"> Notifications </h5>
                  </div>
                  <div className="col-auto">
                    <a href="#!" className="small">
                      {" "}
                      Mark all as read
                    </a>
                  </div>
                </div>
              </div>
              <div style={{ maxHeight: "230px" }}>
                <a className="text-reset notification-item">
                  <div className="d-flex align-items-start">
                    <div className="avatar-xs me-3">
                      <span className="avatar-title bg-primary rounded-circle font-size-16">
                        <i className="uil-shopping-basket" />
                      </span>
                    </div>
                    <div className="flex-1">
                      <h6 className="mt-0 mb-1">Your order is placed</h6>
                      <div className="font-size-12 text-muted">
                        <p className="mb-1">
                          If several languages coalesce the grammar
                        </p>
                        <p className="mb-0">
                          <i className="mdi mdi-clock-outline" /> 3 min ago
                        </p>
                      </div>
                    </div>
                  </div>
                </a>
                <a className="text-reset notification-item">
                  <div className="d-flex align-items-start">
                    <img
                      src="assets/images/users/avatar-3.jpg"
                      className="me-3 rounded-circle avatar-xs"
                      alt="user-pic"
                    />
                    <div className="flex-1">
                      <h6 className="mt-0 mb-1">James Lemire</h6>
                      <div className="font-size-12 text-muted">
                        <p className="mb-1">
                          It will seem like simplified English.
                        </p>
                        <p className="mb-0">
                          <i className="mdi mdi-clock-outline" /> 1 hours ago
                        </p>
                      </div>
                    </div>
                  </div>
                </a>
                <a className="text-reset notification-item">
                  <div className="d-flex align-items-start">
                    <div className="avatar-xs me-3">
                      <span className="avatar-title bg-success rounded-circle font-size-16">
                        <i className="uil-truck" />
                      </span>
                    </div>
                    <div className="flex-1">
                      <h6 className="mt-0 mb-1">Your item is shipped</h6>
                      <div className="font-size-12 text-muted">
                        <p className="mb-1">
                          If several languages coalesce the grammar
                        </p>
                        <p className="mb-0">
                          <i className="mdi mdi-clock-outline" /> 3 min ago
                        </p>
                      </div>
                    </div>
                  </div>
                </a>
                <a className="text-reset notification-item">
                  <div className="d-flex align-items-start">
                    <img
                      src="assets/images/users/avatar-4.jpg"
                      className="me-3 rounded-circle avatar-xs"
                      alt="user-pic"
                    />
                    <div className="flex-1">
                      <h6 className="mt-0 mb-1">Salena Layfield</h6>
                      <div className="font-size-12 text-muted">
                        <p className="mb-1">
                          As a skeptical Cambridge friend of mine occidental.
                        </p>
                        <p className="mb-0">
                          <i className="mdi mdi-clock-outline" /> 1 hours ago
                        </p>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <div className="p-2 border-top d-grid">
                <a
                  className="btn btn-sm btn-link font-size-14 text-center"
                  href="javascript:void(0)"
                >
                  <i className="uil-arrow-circle-right me-1" /> View More..
                </a>
              </div>
            </div>
          </div>
          <div className="dropdown d-inline-block">
            <button
              type="button"
              className="btn header-item waves-effect"
              id="page-header-user-dropdown"
              data-bs-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <img
                className="rounded-circle header-profile-user"
                src="assets/images/users/avatar-4.jpg"
                alt="Header Avatar"
              />
              <span className="d-none d-xl-inline-block ms-1 fw-medium font-size-15">
                Marcus
              </span>
              <i className="uil-angle-down d-none d-xl-inline-block font-size-15" />
            </button>
            <div className="dropdown-menu dropdown-menu-end">
              {/* item*/}
              <a className="dropdown-item" href="#">
                <i className="uil uil-user-circle font-size-18 align-middle text-muted me-1" />{" "}
                <span className="align-middle">View Profile</span>
              </a>
              <a className="dropdown-item" href="#">
                <i className="uil uil-wallet font-size-18 align-middle me-1 text-muted" />{" "}
                <span className="align-middle">My Wallet</span>
              </a>
              <a className="dropdown-item d-block" href="#">
                <i className="uil uil-cog font-size-18 align-middle me-1 text-muted" />{" "}
                <span className="align-middle">Settings</span>{" "}
                <span className="badge bg-soft-success rounded-pill mt-1 ms-2">
                  03
                </span>
              </a>
              <a className="dropdown-item" href="#">
                <i className="uil uil-lock-alt font-size-18 align-middle me-1 text-muted" />{" "}
                <span className="align-middle">Lock screen</span>
              </a>
              <a className="dropdown-item" href="#">
                <i className="uil uil-sign-out-alt font-size-18 align-middle me-1 text-muted" />{" "}
                <span className="align-middle">Sign out</span>
              </a>
            </div>
          </div>
          <div className="dropdown d-inline-block">
            <button
              type="button"
              className="btn header-item noti-icon right-bar-toggle waves-effect"
            >
              <i className="uil-cog" />
            </button>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="topnav">
          <nav className="navbar navbar-light navbar-expand-lg topnav-menu">
            <div className="collapse navbar-collapse" id="topnav-menu-content">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link" href="index.html">
                    <i className="uil-home-alt me-2" /> Dashboard
                  </a>
                </li>

                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle arrow-none"
                    href="#"
                    id="topnav-pages"
                    role="button"
                  >
                    <i className="uil-apps me-2" />
                    Blogs <div className="arrow-down" />
                  </a>
                  <div className="dropdown-menu" aria-labelledby="topnav-pages">
                    <a href="calendar.html" className="dropdown-item">
                      Categories
                    </a>
                    <a href="chat.html" className="dropdown-item">
                      New Category
                    </a>
                    <a href="calendar.html" className="dropdown-item">
                      Blogs
                    </a>
                    <a href="chat.html" className="dropdown-item">
                      New Blog
                    </a>
                    {/*<div className="dropdown">*/}
                    {/*    <a className="dropdown-item dropdown-toggle arrow-none" href="#" id="topnav-email" role="button">*/}
                    {/*        Email <div className="arrow-down" />*/}
                    {/*    </a>*/}
                    {/*    <div className="dropdown-menu" aria-labelledby="topnav-email">*/}
                    {/*        <a href="email-inbox.html" className="dropdown-item">Inbox</a>*/}
                    {/*        <a href="email-read.html" className="dropdown-item">Read Email</a>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                  </div>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default PrivateHeader;
