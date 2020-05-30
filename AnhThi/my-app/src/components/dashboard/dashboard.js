import React, { Component } from 'react';

class Dashboard extends Component {
  render() {
    return (
      <div>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <title>AdminLTE 3 | Dashboard</title>
        {/* Tell the browser to be responsive to screen width */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Font Awesome */}
        <link rel="stylesheet" href="plugins/fontawesome-free/css/all.min.css" />
        {/* Ionicons */}
        <link
          rel="stylesheet"
          href="https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css"
        />
        {/* Tempusdominus Bbootstrap 4 */}
        <link
          rel="stylesheet"
          href="plugins/tempusdominus-bootstrap-4/css/tempusdominus-bootstrap-4.min.css"
        />
        {/* iCheck */}
        <link
          rel="stylesheet"
          href="plugins/icheck-bootstrap/icheck-bootstrap.min.css"
        />
        {/* JQVMap */}
        <link rel="stylesheet" href="plugins/jqvmap/jqvmap.min.css" />
        {/* Theme style */}
        <link rel="stylesheet" href="dist/css/adminlte.min.css" />
        {/* overlayScrollbars */}
        <link
          rel="stylesheet"
          href="plugins/overlayScrollbars/css/OverlayScrollbars.min.css"
        />
        {/* Daterange picker */}
        <link rel="stylesheet" href="plugins/daterangepicker/daterangepicker.css" />
        {/* summernote */}
        <link rel="stylesheet" href="plugins/summernote/summernote-bs4.css" />
        {/* Google Font: Source Sans Pro */}
        <link
          href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700"
          rel="stylesheet"
        />
        <div className="wrapper">
          {/* Navbar */}
          <nav className="main-header navbar navbar-expand navbar-white navbar-light">
            {/* Left navbar links */}
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" data-widget="pushmenu" href="#" role="button">
                  <i className="fas fa-bars" />
                </a>
              </li>
              <li className="nav-item d-none d-sm-inline-block">
                <a href="index3.html" className="nav-link">
                  Home
                </a>
              </li>
              <li className="nav-item d-none d-sm-inline-block">
                <a href="#" className="nav-link">
                  Contact
                </a>
              </li>
            </ul>
            {/* SEARCH FORM */}
            <form className="form-inline ml-3">
              <div className="input-group input-group-sm">
                <input
                  className="form-control form-control-navbar"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <div className="input-group-append">
                  <button className="btn btn-navbar" type="submit">
                    <i className="fas fa-search" />
                  </button>
                </div>
              </div>
            </form>
            {/* Right navbar links */}
            <ul className="navbar-nav ml-auto">
              {/* Messages Dropdown Menu */}
              <li className="nav-item dropdown">
                <a className="nav-link" data-toggle="dropdown" href="#">
                  <i className="far fa-comments" />
                  <span className="badge badge-danger navbar-badge">3</span>
                </a>
                <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                  <a href="#" className="dropdown-item">
                    {/* Message Start */}
                    <div className="media">
                      <img
                        src="dist/img/user1-128x128.jpg"
                        alt="User Avatar"
                        className="img-size-50 mr-3 img-circle"
                      />
                      <div className="media-body">
                        <h3 className="dropdown-item-title">
                          Brad Diesel
                          <span className="float-right text-sm text-danger">
                            <i className="fas fa-star" />
                          </span>
                        </h3>
                        <p className="text-sm">Call me whenever you can...</p>
                        <p className="text-sm text-muted">
                          <i className="far fa-clock mr-1" /> 4 Hours Ago
                        </p>
                      </div>
                    </div>
                    {/* Message End */}
                  </a>
                  <div className="dropdown-divider" />
                  <a href="#" className="dropdown-item">
                    {/* Message Start */}
                    <div className="media">
                      <img
                        src="dist/img/user8-128x128.jpg"
                        alt="User Avatar"
                        className="img-size-50 img-circle mr-3"
                      />
                      <div className="media-body">
                        <h3 className="dropdown-item-title">
                          John Pierce
                          <span className="float-right text-sm text-muted">
                            <i className="fas fa-star" />
                          </span>
                        </h3>
                        <p className="text-sm">I got your message bro</p>
                        <p className="text-sm text-muted">
                          <i className="far fa-clock mr-1" /> 4 Hours Ago
                        </p>
                      </div>
                    </div>
                    {/* Message End */}
                  </a>
                  <div className="dropdown-divider" />
                  <a href="#" className="dropdown-item">
                    {/* Message Start */}
                    <div className="media">
                      <img
                        src="dist/img/user3-128x128.jpg"
                        alt="User Avatar"
                        className="img-size-50 img-circle mr-3"
                      />
                      <div className="media-body">
                        <h3 className="dropdown-item-title">
                          Nora Silvester
                          <span className="float-right text-sm text-warning">
                            <i className="fas fa-star" />
                          </span>
                        </h3>
                        <p className="text-sm">The subject goes here</p>
                        <p className="text-sm text-muted">
                          <i className="far fa-clock mr-1" /> 4 Hours Ago
                        </p>
                      </div>
                    </div>
                    {/* Message End */}
                  </a>
                  <div className="dropdown-divider" />
                  <a href="#" className="dropdown-item dropdown-footer">
                    See All Messages
                  </a>
                </div>
              </li>
              {/* Notifications Dropdown Menu */}
              <li className="nav-item dropdown">
                <a className="nav-link" data-toggle="dropdown" href="#">
                  <i className="far fa-bell" />
                  <span className="badge badge-warning navbar-badge">15</span>
                </a>
                <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                  <span className="dropdown-item dropdown-header">
                    15 Notifications
                  </span>
                  <div className="dropdown-divider" />
                  <a href="#" className="dropdown-item">
                    <i className="fas fa-envelope mr-2" /> 4 new messages
                    <span className="float-right text-muted text-sm">3 mins</span>
                  </a>
                  <div className="dropdown-divider" />
                  <a href="#" className="dropdown-item">
                    <i className="fas fa-users mr-2" /> 8 friend requests
                    <span className="float-right text-muted text-sm">12 hours</span>
                  </a>
                  <div className="dropdown-divider" />
                  <a href="#" className="dropdown-item">
                    <i className="fas fa-file mr-2" /> 3 new reports
                    <span className="float-right text-muted text-sm">2 days</span>
                  </a>
                  <div className="dropdown-divider" />
                  <a href="#" className="dropdown-item dropdown-footer">
                    See All Notifications
                  </a>
                </div>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  data-widget="control-sidebar"
                  data-slide="true"
                  href="#"
                  role="button"
                >
                  <i className="fas fa-th-large" />
                </a>
              </li>
            </ul>
          </nav>
          {/* /.navbar */}
          {/* Main Sidebar Container */}
          <aside className="main-sidebar sidebar-dark-primary elevation-4">
            {/* Brand Logo */}
            <a href="index3.html" className="brand-link">
              <img
                src="dist/img/AdminLTELogo.png"
                alt="AdminLTE Logo"
                className="brand-image img-circle elevation-3"
                style={{ opacity: ".8" }}
              />
              <span className="brand-text font-weight-light">AdminLTE 3</span>
            </a>
            {/* Sidebar */}
            <div className="sidebar">
              {/* Sidebar user panel (optional) */}
              <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                <div className="image">
                  <img
                    src="dist/img/user2-160x160.jpg"
                    className="img-circle elevation-2"
                    alt="User Image"
                  />
                </div>
                <div className="info">
                  <a href="#" className="d-block">
                    Alexander Pierce
                  </a>
                </div>
              </div>
              {/* Sidebar Menu */}
              <nav className="mt-2">
                <ul
                  className="nav nav-pills nav-sidebar flex-column"
                  data-widget="treeview"
                  role="menu"
                  data-accordion="false"
                >
                  {/* Add icons to the links using the .nav-icon class
               with font-awesome or any other icon font library */}
                  <li className="nav-item has-treeview menu-open">
                    <a href="#" className="nav-link active">
                      <i className="nav-icon fas fa-tachometer-alt" />
                      <p>
                        Dashboard
                        <i className="right fas fa-angle-left" />
                      </p>
                    </a>
                    <ul className="nav nav-treeview">
                      <li className="nav-item">
                        <a href="./index.html" className="nav-link active">
                          <i className="far fa-circle nav-icon" />
                          <p>Dashboard v1</p>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="./index2.html" className="nav-link">
                          <i className="far fa-circle nav-icon" />
                          <p>Dashboard v2</p>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="./index3.html" className="nav-link">
                          <i className="far fa-circle nav-icon" />
                          <p>Dashboard v3</p>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a href="pages/widgets.html" className="nav-link">
                      <i className="nav-icon fas fa-th" />
                      <p>
                        Widgets
                        <span className="right badge badge-danger">New</span>
                      </p>
                    </a>
                  </li>
                  <li className="nav-item has-treeview">
                    <a href="#" className="nav-link">
                      <i className="nav-icon fas fa-copy" />
                      <p>
                        Layout Options
                        <i className="fas fa-angle-left right" />
                        <span className="badge badge-info right">6</span>
                      </p>
                    </a>
                    <ul className="nav nav-treeview">
                      <li className="nav-item">
                        <a href="pages/layout/top-nav.html" className="nav-link">
                          <i className="far fa-circle nav-icon" />
                          <p>Top Navigation</p>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          href="pages/layout/top-nav-sidebar.html"
                          className="nav-link"
                        >
                          <i className="far fa-circle nav-icon" />
                          <p>Top Navigation + Sidebar</p>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="pages/layout/boxed.html" className="nav-link">
                          <i className="far fa-circle nav-icon" />
                          <p>Boxed</p>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          href="pages/layout/fixed-sidebar.html"
                          className="nav-link"
                        >
                          <i className="far fa-circle nav-icon" />
                          <p>Fixed Sidebar</p>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="pages/layout/fixed-topnav.html" className="nav-link">
                          <i className="far fa-circle nav-icon" />
                          <p>Fixed Navbar</p>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="pages/layout/fixed-footer.html" className="nav-link">
                          <i className="far fa-circle nav-icon" />
                          <p>Fixed Footer</p>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          href="pages/layout/collapsed-sidebar.html"
                          className="nav-link"
                        >
                          <i className="far fa-circle nav-icon" />
                          <p>Collapsed Sidebar</p>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item has-treeview">
                    <a href="#" className="nav-link">
                      <i className="nav-icon fas fa-chart-pie" />
                      <p>
                        Charts
                        <i className="right fas fa-angle-left" />
                      </p>
                    </a>
                    <ul className="nav nav-treeview">
                      <li className="nav-item">
                        <a href="pages/charts/chartjs.html" className="nav-link">
                          <i className="far fa-circle nav-icon" />
                          <p>ChartJS</p>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="pages/charts/flot.html" className="nav-link">
                          <i className="far fa-circle nav-icon" />
                          <p>Flot</p>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="pages/charts/inline.html" className="nav-link">
                          <i className="far fa-circle nav-icon" />
                          <p>Inline</p>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item has-treeview">
                    <a href="#" className="nav-link">
                      <i className="nav-icon fas fa-tree" />
                      <p>
                        UI Elements
                        <i className="fas fa-angle-left right" />
                      </p>
                    </a>
                    <ul className="nav nav-treeview">
                      <li className="nav-item">
                        <a href="pages/UI/general.html" className="nav-link">
                          <i className="far fa-circle nav-icon" />
                          <p>General</p>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="pages/UI/icons.html" className="nav-link">
                          <i className="far fa-circle nav-icon" />
                          <p>Icons</p>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="pages/UI/buttons.html" className="nav-link">
                          <i className="far fa-circle nav-icon" />
                          <p>Buttons</p>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="pages/UI/sliders.html" className="nav-link">
                          <i className="far fa-circle nav-icon" />
                          <p>Sliders</p>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="pages/UI/modals.html" className="nav-link">
                          <i className="far fa-circle nav-icon" />
                          <p>Modals &amp; Alerts</p>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="pages/UI/navbar.html" className="nav-link">
                          <i className="far fa-circle nav-icon" />
                          <p>Navbar &amp; Tabs</p>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="pages/UI/timeline.html" className="nav-link">
                          <i className="far fa-circle nav-icon" />
                          <p>Timeline</p>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="pages/UI/ribbons.html" className="nav-link">
                          <i className="far fa-circle nav-icon" />
                          <p>Ribbons</p>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item has-treeview">
                    <a href="#" className="nav-link">
                      <i className="nav-icon fas fa-edit" />
                      <p>
                        Forms
                        <i className="fas fa-angle-left right" />
                      </p>
                    </a>
                    <ul className="nav nav-treeview">
                      <li className="nav-item">
                        <a href="pages/forms/general.html" className="nav-link">
                          <i className="far fa-circle nav-icon" />
                          <p>General Elements</p>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="pages/forms/advanced.html" className="nav-link">
                          <i className="far fa-circle nav-icon" />
                          <p>Advanced Elements</p>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="pages/forms/editors.html" className="nav-link">
                          <i className="far fa-circle nav-icon" />
                          <p>Editors</p>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="pages/forms/validation.html" className="nav-link">
                          <i className="far fa-circle nav-icon" />
                          <p>Validation</p>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item has-treeview">
                    <a href="#" className="nav-link">
                      <i className="nav-icon fas fa-table" />
                      <p>
                        Tables
                        <i className="fas fa-angle-left right" />
                      </p>
                    </a>
                    <ul className="nav nav-treeview">
                      <li className="nav-item">
                        <a href="pages/tables/simple.html" className="nav-link">
                          <i className="far fa-circle nav-icon" />
                          <p>Simple Tables</p>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="pages/tables/data.html" className="nav-link">
                          <i className="far fa-circle nav-icon" />
                          <p>DataTables</p>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="pages/tables/jsgrid.html" className="nav-link">
                          <i className="far fa-circle nav-icon" />
                          <p>jsGrid</p>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-header">EXAMPLES</li>
                  <li className="nav-item">
                    <a href="pages/calendar.html" className="nav-link">
                      <i className="nav-icon far fa-calendar-alt" />
                      <p>
                        Calendar
                        <span className="badge badge-info right">2</span>
                      </p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="pages/gallery.html" className="nav-link">
                      <i className="nav-icon far fa-image" />
                      <p>Gallery</p>
                    </a>
                  </li>
                  <li className="nav-item has-treeview">
                    <a href="#" className="nav-link">
                      <i className="nav-icon far fa-envelope" />
                      <p>
                        Mailbox
                        <i className="fas fa-angle-left right" />
                      </p>
                    </a>
                    <ul className="nav nav-treeview">
                      <li className="nav-item">
                        <a href="pages/mailbox/mailbox.html" className="nav-link">
                          <i className="far fa-circle nav-icon" />
                          <p>Inbox</p>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="pages/mailbox/compose.html" className="nav-link">
                          <i className="far fa-circle nav-icon" />
                          <p>Compose</p>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="pages/mailbox/read-mail.html" className="nav-link">
                          <i className="far fa-circle nav-icon" />
                          <p>Read</p>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item has-treeview">
                    <a href="#" className="nav-link">
                      <i className="nav-icon fas fa-book" />
                      <p>
                        Pages
                        <i className="fas fa-angle-left right" />
                      </p>
                    </a>
                    <ul className="nav nav-treeview">
                      <li className="nav-item">
                        <a href="pages/examples/invoice.html" className="nav-link">
                          <i className="far fa-circle nav-icon" />
                          <p>Invoice</p>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="pages/examples/profile.html" className="nav-link">
                          <i className="far fa-circle nav-icon" />
                          <p>Profile</p>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="pages/examples/e-commerce.html" className="nav-link">
                          <i className="far fa-circle nav-icon" />
                          <p>E-commerce</p>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="pages/examples/projects.html" className="nav-link">
                          <i className="far fa-circle nav-icon" />
                          <p>Projects</p>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          href="pages/examples/project-add.html"
                          className="nav-link"
                        >
                          <i className="far fa-circle nav-icon" />
                          <p>Project Add</p>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          href="pages/examples/project-edit.html"
                          className="nav-link"
                        >
                          <i className="far fa-circle nav-icon" />
                          <p>Project Edit</p>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          href="pages/examples/project-detail.html"
                          className="nav-link"
                        >
                          <i className="far fa-circle nav-icon" />
                          <p>Project Detail</p>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="pages/examples/contacts.html" className="nav-link">
                          <i className="far fa-circle nav-icon" />
                          <p>Contacts</p>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item has-treeview">
                    <a href="#" className="nav-link">
                      <i className="nav-icon far fa-plus-square" />
                      <p>
                        Extras
                        <i className="fas fa-angle-left right" />
                      </p>
                    </a>
                    <ul className="nav nav-treeview">
                      <li className="nav-item">
                        <a href="pages/examples/login.html" className="nav-link">
                          <i className="far fa-circle nav-icon" />
                          <p>Login</p>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="pages/examples/register.html" className="nav-link">
                          <i className="far fa-circle nav-icon" />
                          <p>Register</p>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          href="pages/examples/forgot-password.html"
                          className="nav-link"
                        >
                          <i className="far fa-circle nav-icon" />
                          <p>Forgot Password</p>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          href="pages/examples/recover-password.html"
                          className="nav-link"
                        >
                          <i className="far fa-circle nav-icon" />
                          <p>Recover Password</p>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="pages/examples/lockscreen.html" className="nav-link">
                          <i className="far fa-circle nav-icon" />
                          <p>Lockscreen</p>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          href="pages/examples/legacy-user-menu.html"
                          className="nav-link"
                        >
                          <i className="far fa-circle nav-icon" />
                          <p>Legacy User Menu</p>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          href="pages/examples/language-menu.html"
                          className="nav-link"
                        >
                          <i className="far fa-circle nav-icon" />
                          <p>Language Menu</p>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="pages/examples/404.html" className="nav-link">
                          <i className="far fa-circle nav-icon" />
                          <p>Error 404</p>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="pages/examples/500.html" className="nav-link">
                          <i className="far fa-circle nav-icon" />
                          <p>Error 500</p>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="pages/examples/pace.html" className="nav-link">
                          <i className="far fa-circle nav-icon" />
                          <p>Pace</p>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="pages/examples/blank.html" className="nav-link">
                          <i className="far fa-circle nav-icon" />
                          <p>Blank Page</p>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="starter.html" className="nav-link">
                          <i className="far fa-circle nav-icon" />
                          <p>Starter Page</p>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-header">MISCELLANEOUS</li>
                  <li className="nav-item">
                    <a href="https://adminlte.io/docs/3.0" className="nav-link">
                      <i className="nav-icon fas fa-file" />
                      <p>Documentation</p>
                    </a>
                  </li>
                  <li className="nav-header">MULTI LEVEL EXAMPLE</li>
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      <i className="fas fa-circle nav-icon" />
                      <p>Level 1</p>
                    </a>
                  </li>
                  <li className="nav-item has-treeview">
                    <a href="#" className="nav-link">
                      <i className="nav-icon fas fa-circle" />
                      <p>
                        Level 1
                        <i className="right fas fa-angle-left" />
                      </p>
                    </a>
                    <ul className="nav nav-treeview">
                      <li className="nav-item">
                        <a href="#" className="nav-link">
                          <i className="far fa-circle nav-icon" />
                          <p>Level 2</p>
                        </a>
                      </li>
                      <li className="nav-item has-treeview">
                        <a href="#" className="nav-link">
                          <i className="far fa-circle nav-icon" />
                          <p>
                            Level 2
                            <i className="right fas fa-angle-left" />
                          </p>
                        </a>
                        <ul className="nav nav-treeview">
                          <li className="nav-item">
                            <a href="#" className="nav-link">
                              <i className="far fa-dot-circle nav-icon" />
                              <p>Level 3</p>
                            </a>
                          </li>
                          <li className="nav-item">
                            <a href="#" className="nav-link">
                              <i className="far fa-dot-circle nav-icon" />
                              <p>Level 3</p>
                            </a>
                          </li>
                          <li className="nav-item">
                            <a href="#" className="nav-link">
                              <i className="far fa-dot-circle nav-icon" />
                              <p>Level 3</p>
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="nav-item">
                        <a href="#" className="nav-link">
                          <i className="far fa-circle nav-icon" />
                          <p>Level 2</p>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      <i className="fas fa-circle nav-icon" />
                      <p>Level 1</p>
                    </a>
                  </li>
                  <li className="nav-header">LABELS</li>
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      <i className="nav-icon far fa-circle text-danger" />
                      <p className="text">Important</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      <i className="nav-icon far fa-circle text-warning" />
                      <p>Warning</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      <i className="nav-icon far fa-circle text-info" />
                      <p>Informational</p>
                    </a>
                  </li>
                </ul>
              </nav>
              {/* /.sidebar-menu */}
            </div>
            {/* /.sidebar */}
          </aside>
          {/* Content Wrapper. Contains page content */}
          <div className="content-wrapper">
            {/* Content Header (Page header) */}
            <div className="content-header">
              <div className="container-fluid">
                <div className="row mb-2">
                  <div className="col-sm-6">
                    <h1 className="m-0 text-dark">Dashboard</h1>
                  </div>
                  {/* /.col */}
                  <div className="col-sm-6">
                    <ol className="breadcrumb float-sm-right">
                      <li className="breadcrumb-item">
                        <a href="#">Home</a>
                      </li>
                      <li className="breadcrumb-item active">Dashboard v1</li>
                    </ol>
                  </div>
                  {/* /.col */}
                </div>
                {/* /.row */}
              </div>
              {/* /.container-fluid */}
            </div>
            {/* /.content-header */}
            {/* Main content */}
            <section className="content">
              <div className="container-fluid">
                {/* Small boxes (Stat box) */}
                <div className="row">
                  <div className="col-lg-3 col-6">
                    {/* small box */}
                    <div className="small-box bg-info">
                      <div className="inner">
                        <h3>150</h3>
                        <p>New Orders</p>
                      </div>
                      <div className="icon">
                        <i className="ion ion-bag" />
                      </div>
                      <a href="#" className="small-box-footer">
                        More info <i className="fas fa-arrow-circle-right" />
                      </a>
                    </div>
                  </div>
                  {/* ./col */}
                  <div className="col-lg-3 col-6">
                    {/* small box */}
                    <div className="small-box bg-success">
                      <div className="inner">
                        <h3>
                          53<sup style={{ fontSize: 20 }}>%</sup>
                        </h3>
                        <p>Bounce Rate</p>
                      </div>
                      <div className="icon">
                        <i className="ion ion-stats-bars" />
                      </div>
                      <a href="#" className="small-box-footer">
                        More info <i className="fas fa-arrow-circle-right" />
                      </a>
                    </div>
                  </div>
                  {/* ./col */}
                  <div className="col-lg-3 col-6">
                    {/* small box */}
                    <div className="small-box bg-warning">
                      <div className="inner">
                        <h3>44</h3>
                        <p>User Registrations</p>
                      </div>
                      <div className="icon">
                        <i className="ion ion-person-add" />
                      </div>
                      <a href="#" className="small-box-footer">
                        More info <i className="fas fa-arrow-circle-right" />
                      </a>
                    </div>
                  </div>
                  {/* ./col */}
                  <div className="col-lg-3 col-6">
                    {/* small box */}
                    <div className="small-box bg-danger">
                      <div className="inner">
                        <h3>65</h3>
                        <p>Unique Visitors</p>
                      </div>
                      <div className="icon">
                        <i className="ion ion-pie-graph" />
                      </div>
                      <a href="#" className="small-box-footer">
                        More info <i className="fas fa-arrow-circle-right" />
                      </a>
                    </div>
                  </div>
                  {/* ./col */}
                </div>
                {/* /.row */}
                {/* Main row */}
                <div className="row">
                  {/* Left col */}
                  <section className="col-lg-7 connectedSortable">
                    {/* Custom tabs (Charts with tabs)*/}
                    <div className="card">
                      <div className="card-header">
                        <h3 className="card-title">
                          <i className="fas fa-chart-pie mr-1" />
                          Sales
                        </h3>
                        <div className="card-tools">
                          <ul className="nav nav-pills ml-auto">
                            <li className="nav-item">
                              <a
                                className="nav-link active"
                                href="#revenue-chart"
                                data-toggle="tab"
                              >
                                Area
                              </a>
                            </li>
                            <li className="nav-item">
                              <a
                                className="nav-link"
                                href="#sales-chart"
                                data-toggle="tab"
                              >
                                Donut
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      {/* /.card-header */}
                      <div className="card-body">
                        <div className="tab-content p-0">
                          {/* Morris chart - Sales */}
                          <div
                            className="chart tab-pane active"
                            id="revenue-chart"
                            style={{ position: "relative", height: 300 }}
                          >
                            <canvas
                              id="revenue-chart-canvas"
                              height={300}
                              style={{ height: 300 }}
                            />
                          </div>
                          <div
                            className="chart tab-pane"
                            id="sales-chart"
                            style={{ position: "relative", height: 300 }}
                          >
                            <canvas
                              id="sales-chart-canvas"
                              height={300}
                              style={{ height: 300 }}
                            />
                          </div>
                        </div>
                      </div>
                      {/* /.card-body */}
                    </div>
                    {/* /.card */}
                    {/* DIRECT CHAT */}
                    <div className="card direct-chat direct-chat-primary">
                      <div className="card-header">
                        <h3 className="card-title">Direct Chat</h3>
                        <div className="card-tools">
                          <span
                            data-toggle="tooltip"
                            title="3 New Messages"
                            className="badge badge-primary"
                          >
                            3
                          </span>
                          <button
                            type="button"
                            className="btn btn-tool"
                            data-card-widget="collapse"
                          >
                            <i className="fas fa-minus" />
                          </button>
                          <button
                            type="button"
                            className="btn btn-tool"
                            data-toggle="tooltip"
                            title="Contacts"
                            data-widget="chat-pane-toggle"
                          >
                            <i className="fas fa-comments" />
                          </button>
                          <button
                            type="button"
                            className="btn btn-tool"
                            data-card-widget="remove"
                          >
                            <i className="fas fa-times" />
                          </button>
                        </div>
                      </div>
                      {/* /.card-header */}
                      <div className="card-body">
                        {/* Conversations are loaded here */}
                        <div className="direct-chat-messages">
                          {/* Message. Default to the left */}
                          <div className="direct-chat-msg">
                            <div className="direct-chat-infos clearfix">
                              <span className="direct-chat-name float-left">
                                Alexander Pierce
                              </span>
                              <span className="direct-chat-timestamp float-right">
                                23 Jan 2:00 pm
                              </span>
                            </div>
                            {/* /.direct-chat-infos */}
                            <img
                              className="direct-chat-img"
                              src="dist/img/user1-128x128.jpg"
                              alt="message user image"
                            />
                            {/* /.direct-chat-img */}
                            <div className="direct-chat-text">
                              Is this template really for free? That's unbelievable!
                            </div>
                            {/* /.direct-chat-text */}
                          </div>
                          {/* /.direct-chat-msg */}
                          {/* Message to the right */}
                          <div className="direct-chat-msg right">
                            <div className="direct-chat-infos clearfix">
                              <span className="direct-chat-name float-right">
                                Sarah Bullock
                              </span>
                              <span className="direct-chat-timestamp float-left">
                                23 Jan 2:05 pm
                              </span>
                            </div>
                            {/* /.direct-chat-infos */}
                            <img
                              className="direct-chat-img"
                              src="dist/img/user3-128x128.jpg"
                              alt="message user image"
                            />
                            {/* /.direct-chat-img */}
                            <div className="direct-chat-text">
                              You better believe it!
                            </div>
                            {/* /.direct-chat-text */}
                          </div>
                          {/* /.direct-chat-msg */}
                          {/* Message. Default to the left */}
                          <div className="direct-chat-msg">
                            <div className="direct-chat-infos clearfix">
                              <span className="direct-chat-name float-left">
                                Alexander Pierce
                              </span>
                              <span className="direct-chat-timestamp float-right">
                                23 Jan 5:37 pm
                              </span>
                            </div>
                            {/* /.direct-chat-infos */}
                            <img
                              className="direct-chat-img"
                              src="dist/img/user1-128x128.jpg"
                              alt="message user image"
                            />
                            {/* /.direct-chat-img */}
                            <div className="direct-chat-text">
                              Working with AdminLTE on a great new app! Wanna join?
                            </div>
                            {/* /.direct-chat-text */}
                          </div>
                          {/* /.direct-chat-msg */}
                          {/* Message to the right */}
                          <div className="direct-chat-msg right">
                            <div className="direct-chat-infos clearfix">
                              <span className="direct-chat-name float-right">
                                Sarah Bullock
                              </span>
                              <span className="direct-chat-timestamp float-left">
                                23 Jan 6:10 pm
                              </span>
                            </div>
                            {/* /.direct-chat-infos */}
                            <img
                              className="direct-chat-img"
                              src="dist/img/user3-128x128.jpg"
                              alt="message user image"
                            />
                            {/* /.direct-chat-img */}
                            <div className="direct-chat-text">I would love to.</div>
                            {/* /.direct-chat-text */}
                          </div>
                          {/* /.direct-chat-msg */}
                        </div>
                        {/*/.direct-chat-messages*/}
                        {/* Contacts are loaded here */}
                        <div className="direct-chat-contacts">
                          <ul className="contacts-list">
                            <li>
                              <a href="#">
                                <img
                                  className="contacts-list-img"
                                  src="dist/img/user1-128x128.jpg"
                                />
                                <div className="contacts-list-info">
                                  <span className="contacts-list-name">
                                    Count Dracula
                                    <small className="contacts-list-date float-right">
                                      2/28/2015
                                    </small>
                                  </span>
                                  <span className="contacts-list-msg">
                                    How have you been? I was...
                                  </span>
                                </div>
                                {/* /.contacts-list-info */}
                              </a>
                            </li>
                            {/* End Contact Item */}
                            <li>
                              <a href="#">
                                <img
                                  className="contacts-list-img"
                                  src="dist/img/user7-128x128.jpg"
                                />
                                <div className="contacts-list-info">
                                  <span className="contacts-list-name">
                                    Sarah Doe
                                    <small className="contacts-list-date float-right">
                                      2/23/2015
                                    </small>
                                  </span>
                                  <span className="contacts-list-msg">
                                    I will be waiting for...
                                  </span>
                                </div>
                                {/* /.contacts-list-info */}
                              </a>
                            </li>
                            {/* End Contact Item */}
                            <li>
                              <a href="#">
                                <img
                                  className="contacts-list-img"
                                  src="dist/img/user3-128x128.jpg"
                                />
                                <div className="contacts-list-info">
                                  <span className="contacts-list-name">
                                    Nadia Jolie
                                    <small className="contacts-list-date float-right">
                                      2/20/2015
                                    </small>
                                  </span>
                                  <span className="contacts-list-msg">
                                    I'll call you back at...
                                  </span>
                                </div>
                                {/* /.contacts-list-info */}
                              </a>
                            </li>
                            {/* End Contact Item */}
                            <li>
                              <a href="#">
                                <img
                                  className="contacts-list-img"
                                  src="dist/img/user5-128x128.jpg"
                                />
                                <div className="contacts-list-info">
                                  <span className="contacts-list-name">
                                    Nora S. Vans
                                    <small className="contacts-list-date float-right">
                                      2/10/2015
                                    </small>
                                  </span>
                                  <span className="contacts-list-msg">
                                    Where is your new...
                                  </span>
                                </div>
                                {/* /.contacts-list-info */}
                              </a>
                            </li>
                            {/* End Contact Item */}
                            <li>
                              <a href="#">
                                <img
                                  className="contacts-list-img"
                                  src="dist/img/user6-128x128.jpg"
                                />
                                <div className="contacts-list-info">
                                  <span className="contacts-list-name">
                                    John K.
                                    <small className="contacts-list-date float-right">
                                      1/27/2015
                                    </small>
                                  </span>
                                  <span className="contacts-list-msg">
                                    Can I take a look at...
                                  </span>
                                </div>
                                {/* /.contacts-list-info */}
                              </a>
                            </li>
                            {/* End Contact Item */}
                            <li>
                              <a href="#">
                                <img
                                  className="contacts-list-img"
                                  src="dist/img/user8-128x128.jpg"
                                />
                                <div className="contacts-list-info">
                                  <span className="contacts-list-name">
                                    Kenneth M.
                                    <small className="contacts-list-date float-right">
                                      1/4/2015
                                    </small>
                                  </span>
                                  <span className="contacts-list-msg">
                                    Never mind I found...
                                  </span>
                                </div>
                                {/* /.contacts-list-info */}
                              </a>
                            </li>
                            {/* End Contact Item */}
                          </ul>
                          {/* /.contacts-list */}
                        </div>
                        {/* /.direct-chat-pane */}
                      </div>
                      {/* /.card-body */}
                      <div className="card-footer">
                        <form action="#" method="post">
                          <div className="input-group">
                            <input
                              type="text"
                              name="message"
                              placeholder="Type Message ..."
                              className="form-control"
                            />
                            <span className="input-group-append">
                              <button type="button" className="btn btn-primary">
                                Send
                              </button>
                            </span>
                          </div>
                        </form>
                      </div>
                      {/* /.card-footer*/}
                    </div>
                    {/*/.direct-chat */}
                    {/* TO DO List */}
                    <div className="card">
                      <div className="card-header">
                        <h3 className="card-title">
                          <i className="ion ion-clipboard mr-1" />
                          To Do List
                        </h3>
                        <div className="card-tools">
                          <ul className="pagination pagination-sm">
                            <li className="page-item">
                              <a href="#" className="page-link">
                                «
                              </a>
                            </li>
                            <li className="page-item">
                              <a href="#" className="page-link">
                                1
                              </a>
                            </li>
                            <li className="page-item">
                              <a href="#" className="page-link">
                                2
                              </a>
                            </li>
                            <li className="page-item">
                              <a href="#" className="page-link">
                                3
                              </a>
                            </li>
                            <li className="page-item">
                              <a href="#" className="page-link">
                                »
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      {/* /.card-header */}
                      <div className="card-body">
                        <ul className="todo-list" data-widget="todo-list">
                          <li>
                            {/* drag handle */}
                            <span className="handle">
                              <i className="fas fa-ellipsis-v" />
                              <i className="fas fa-ellipsis-v" />
                            </span>
                            {/* checkbox */}
                            <div className="icheck-primary d-inline ml-2">
                              <input
                                type="checkbox"
                                defaultValue
                                name="todo1"
                                id="todoCheck1"
                              />
                              <label htmlFor="todoCheck1" />
                            </div>
                            {/* todo text */}
                            <span className="text">Design a nice theme</span>
                            {/* Emphasis label */}
                            <small className="badge badge-danger">
                              <i className="far fa-clock" /> 2 mins
                            </small>
                            {/* General tools such as edit or delete*/}
                            <div className="tools">
                              <i className="fas fa-edit" />
                              <i className="fas fa-trash-o" />
                            </div>
                          </li>
                          <li>
                            <span className="handle">
                              <i className="fas fa-ellipsis-v" />
                              <i className="fas fa-ellipsis-v" />
                            </span>
                            <div className="icheck-primary d-inline ml-2">
                              <input
                                type="checkbox"
                                defaultValue
                                name="todo2"
                                id="todoCheck2"
                                defaultChecked
                              />
                              <label htmlFor="todoCheck2" />
                            </div>
                            <span className="text">Make the theme responsive</span>
                            <small className="badge badge-info">
                              <i className="far fa-clock" /> 4 hours
                            </small>
                            <div className="tools">
                              <i className="fas fa-edit" />
                              <i className="fas fa-trash-o" />
                            </div>
                          </li>
                          <li>
                            <span className="handle">
                              <i className="fas fa-ellipsis-v" />
                              <i className="fas fa-ellipsis-v" />
                            </span>
                            <div className="icheck-primary d-inline ml-2">
                              <input
                                type="checkbox"
                                defaultValue
                                name="todo3"
                                id="todoCheck3"
                              />
                              <label htmlFor="todoCheck3" />
                            </div>
                            <span className="text">Let theme shine like a star</span>
                            <small className="badge badge-warning">
                              <i className="far fa-clock" /> 1 day
                            </small>
                            <div className="tools">
                              <i className="fas fa-edit" />
                              <i className="fas fa-trash-o" />
                            </div>
                          </li>
                          <li>
                            <span className="handle">
                              <i className="fas fa-ellipsis-v" />
                              <i className="fas fa-ellipsis-v" />
                            </span>
                            <div className="icheck-primary d-inline ml-2">
                              <input
                                type="checkbox"
                                defaultValue
                                name="todo4"
                                id="todoCheck4"
                              />
                              <label htmlFor="todoCheck4" />
                            </div>
                            <span className="text">Let theme shine like a star</span>
                            <small className="badge badge-success">
                              <i className="far fa-clock" /> 3 days
                            </small>
                            <div className="tools">
                              <i className="fas fa-edit" />
                              <i className="fas fa-trash-o" />
                            </div>
                          </li>
                          <li>
                            <span className="handle">
                              <i className="fas fa-ellipsis-v" />
                              <i className="fas fa-ellipsis-v" />
                            </span>
                            <div className="icheck-primary d-inline ml-2">
                              <input
                                type="checkbox"
                                defaultValue
                                name="todo5"
                                id="todoCheck5"
                              />
                              <label htmlFor="todoCheck5" />
                            </div>
                            <span className="text">
                              Check your messages and notifications
                            </span>
                            <small className="badge badge-primary">
                              <i className="far fa-clock" /> 1 week
                            </small>
                            <div className="tools">
                              <i className="fas fa-edit" />
                              <i className="fas fa-trash-o" />
                            </div>
                          </li>
                          <li>
                            <span className="handle">
                              <i className="fas fa-ellipsis-v" />
                              <i className="fas fa-ellipsis-v" />
                            </span>
                            <div className="icheck-primary d-inline ml-2">
                              <input
                                type="checkbox"
                                defaultValue
                                name="todo6"
                                id="todoCheck6"
                              />
                              <label htmlFor="todoCheck6" />
                            </div>
                            <span className="text">Let theme shine like a star</span>
                            <small className="badge badge-secondary">
                              <i className="far fa-clock" /> 1 month
                            </small>
                            <div className="tools">
                              <i className="fas fa-edit" />
                              <i className="fas fa-trash-o" />
                            </div>
                          </li>
                        </ul>
                      </div>
                      {/* /.card-body */}
                      <div className="card-footer clearfix">
                        <button type="button" className="btn btn-info float-right">
                          <i className="fas fa-plus" /> Add item
                        </button>
                      </div>
                    </div>
                    {/* /.card */}
                  </section>
                  {/* /.Left col */}
                  {/* right col (We are only adding the ID to make the widgets sortable)*/}
                  <section className="col-lg-5 connectedSortable">
                    {/* Map card */}
                    <div className="card bg-gradient-primary">
                      <div className="card-header border-0">
                        <h3 className="card-title">
                          <i className="fas fa-map-marker-alt mr-1" />
                          Visitors
                        </h3>
                        {/* card tools */}
                        <div className="card-tools">
                          <button
                            type="button"
                            className="btn btn-primary btn-sm daterange"
                            data-toggle="tooltip"
                            title="Date range"
                          >
                            <i className="far fa-calendar-alt" />
                          </button>
                          <button
                            type="button"
                            className="btn btn-primary btn-sm"
                            data-card-widget="collapse"
                            data-toggle="tooltip"
                            title="Collapse"
                          >
                            <i className="fas fa-minus" />
                          </button>
                        </div>
                        {/* /.card-tools */}
                      </div>
                      <div className="card-body">
                        <div id="world-map" style={{ height: 250, width: "100%" }} />
                      </div>
                      {/* /.card-body*/}
                      <div className="card-footer bg-transparent">
                        <div className="row">
                          <div className="col-4 text-center">
                            <div id="sparkline-1" />
                            <div className="text-white">Visitors</div>
                          </div>
                          {/* ./col */}
                          <div className="col-4 text-center">
                            <div id="sparkline-2" />
                            <div className="text-white">Online</div>
                          </div>
                          {/* ./col */}
                          <div className="col-4 text-center">
                            <div id="sparkline-3" />
                            <div className="text-white">Sales</div>
                          </div>
                          {/* ./col */}
                        </div>
                        {/* /.row */}
                      </div>
                    </div>
                    {/* /.card */}
                    {/* solid sales graph */}
                    <div className="card bg-gradient-info">
                      <div className="card-header border-0">
                        <h3 className="card-title">
                          <i className="fas fa-th mr-1" />
                          Sales Graph
                        </h3>
                        <div className="card-tools">
                          <button
                            type="button"
                            className="btn bg-info btn-sm"
                            data-card-widget="collapse"
                          >
                            <i className="fas fa-minus" />
                          </button>
                          <button
                            type="button"
                            className="btn bg-info btn-sm"
                            data-card-widget="remove"
                          >
                            <i className="fas fa-times" />
                          </button>
                        </div>
                      </div>
                      <div className="card-body">
                        <canvas
                          className="chart"
                          id="line-chart"
                          style={{
                            minHeight: 250,
                            height: 250,
                            maxHeight: 250,
                            maxWidth: "100%"
                          }}
                        />
                      </div>
                      {/* /.card-body */}
                      <div className="card-footer bg-transparent">
                        <div className="row">
                          <div className="col-4 text-center">
                            <input
                              type="text"
                              className="knob"
                              data-readonly="true"
                              defaultValue={20}
                              data-width={60}
                              data-height={60}
                              data-fgcolor="#39CCCC"
                            />
                            <div className="text-white">Mail-Orders</div>
                          </div>
                          {/* ./col */}
                          <div className="col-4 text-center">
                            <input
                              type="text"
                              className="knob"
                              data-readonly="true"
                              defaultValue={50}
                              data-width={60}
                              data-height={60}
                              data-fgcolor="#39CCCC"
                            />
                            <div className="text-white">Online</div>
                          </div>
                          {/* ./col */}
                          <div className="col-4 text-center">
                            <input
                              type="text"
                              className="knob"
                              data-readonly="true"
                              defaultValue={30}
                              data-width={60}
                              data-height={60}
                              data-fgcolor="#39CCCC"
                            />
                            <div className="text-white">In-Store</div>
                          </div>
                          {/* ./col */}
                        </div>
                        {/* /.row */}
                      </div>
                      {/* /.card-footer */}
                    </div>
                    {/* /.card */}
                    {/* Calendar */}
                    <div className="card bg-gradient-success">
                      <div className="card-header border-0">
                        <h3 className="card-title">
                          <i className="far fa-calendar-alt" />
                          Calendar
                        </h3>
                        {/* tools card */}
                        <div className="card-tools">
                          {/* button with a dropdown */}
                          <div className="btn-group">
                            <button
                              type="button"
                              className="btn btn-success btn-sm dropdown-toggle"
                              data-toggle="dropdown"
                              data-offset={-52}
                            >
                              <i className="fas fa-bars" />
                            </button>
                            <div className="dropdown-menu" role="menu">
                              <a href="#" className="dropdown-item">
                                Add new event
                              </a>
                              <a href="#" className="dropdown-item">
                                Clear events
                              </a>
                              <div className="dropdown-divider" />
                              <a href="#" className="dropdown-item">
                                View calendar
                              </a>
                            </div>
                          </div>
                          <button
                            type="button"
                            className="btn btn-success btn-sm"
                            data-card-widget="collapse"
                          >
                            <i className="fas fa-minus" />
                          </button>
                          <button
                            type="button"
                            className="btn btn-success btn-sm"
                            data-card-widget="remove"
                          >
                            <i className="fas fa-times" />
                          </button>
                        </div>
                        {/* /. tools */}
                      </div>
                      {/* /.card-header */}
                      <div className="card-body pt-0">
                        {/*The calendar */}
                        <div id="calendar" style={{ width: "100%" }} />
                      </div>
                      {/* /.card-body */}
                    </div>
                    {/* /.card */}
                  </section>
                  {/* right col */}
                </div>
                {/* /.row (main row) */}
              </div>
              {/* /.container-fluid */}
            </section>
            {/* /.content */}
          </div>
          {/* /.content-wrapper */}
          <footer className="main-footer">
            <strong>
              Copyright © 2014-2019 <a href="http://adminlte.io">AdminLTE.io</a>.
            </strong>
            All rights reserved.
            <div className="float-right d-none d-sm-inline-block">
              <b>Version</b> 3.0.6-pre
            </div>
          </footer>
          {/* Control Sidebar */}
          <aside className="control-sidebar control-sidebar-dark">
            {/* Control sidebar content goes here */}
          </aside>
          {/* /.control-sidebar */}
        </div>
        {/* ./wrapper */}
        {/* jQuery */}
        {/* jQuery UI 1.11.4 */}
        {/* Resolve conflict in jQuery UI tooltip with Bootstrap tooltip */}
        {/* Bootstrap 4 */}
        {/* ChartJS */}
        {/* Sparkline */}
        {/* JQVMap */}
        {/* jQuery Knob Chart */}
        {/* daterangepicker */}
        {/* Tempusdominus Bootstrap 4 */}
        {/* Summernote */}
        {/* overlayScrollbars */}
        {/* AdminLTE App */}
        {/* AdminLTE dashboard demo (This is only for demo purposes) */}
        {/* AdminLTE for demo purposes */}
      </div>
    );
  }
}

export default Dashboard;
