const Dashboard: React.FC = () => {
  return (
      <div className="main-content">
        <div className="page-content">
          <div className="container-fluid">
            {/* start page title */}
            <div className="row">
              <div className="col-12">
                <div className="page-title-box d-flex align-items-center justify-content-between">
                  <h4 className="mb-0">Profile</h4>
                  <div className="page-title-right">
                    <ol className="breadcrumb m-0">
                      <li className="breadcrumb-item"><a href="javascript: void(0);">Contacts</a></li>
                      <li className="breadcrumb-item active">Profile</li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
            {/* end page title */}
            <div className="row mb-4">
              <div className="col-xl-4">
                <div className="card h-100">
                  <div className="card-body">
                    <div className="text-center">
                      <div className="dropdown float-end">
                        <a className="text-body dropdown-toggle font-size-18" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true">
                          <i className="uil uil-ellipsis-v" />
                        </a>
                        <div className="dropdown-menu dropdown-menu-end">
                          <a className="dropdown-item" href="#">Edit</a>
                          <a className="dropdown-item" href="#">Action</a>
                          <a className="dropdown-item" href="#">Remove</a>
                        </div>
                      </div>
                      <div className="clearfix" />
                      <div>
                        <img src="assets/images/users/avatar-4.jpg" alt="" className="avatar-lg rounded-circle img-thumbnail" />
                      </div>
                      <h5 className="mt-3 mb-1">Marcus</h5>
                      <p className="text-muted">UI/UX Designer</p>
                      <div className="mt-4">
                        <button type="button" className="btn btn-light btn-sm"><i className="uil uil-envelope-alt me-2" /> Message</button>
                      </div>
                    </div>
                    <hr className="my-4" />
                    <div className="text-muted">
                      <h5 className="font-size-16">About</h5>
                      <p>Hi I'm Marcus,has been the industry's standard dummy text To an English person, it will seem like simplified English, as a skeptical Cambridge.</p>
                      <div className="table-responsive mt-4">
                        <div>
                          <p className="mb-1">Name :</p>
                          <h5 className="font-size-16">Marcus</h5>
                        </div>
                        <div className="mt-4">
                          <p className="mb-1">Mobile :</p>
                          <h5 className="font-size-16">012-234-5678</h5>
                        </div>
                        <div className="mt-4">
                          <p className="mb-1">E-mail :</p>
                          <h5 className="font-size-16">marcus@minible.com</h5>
                        </div>
                        <div className="mt-4">
                          <p className="mb-1">Location :</p>
                          <h5 className="font-size-16">California, United States</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-8">
                <div className="card mb-0">
                  {/* Nav tabs */}
                  <ul className="nav nav-tabs nav-tabs-custom nav-justified" role="tablist">
                    <li className="nav-item">
                      <a className="nav-link active" data-bs-toggle="tab" href="#about" role="tab">
                        <i className="uil uil-user-circle font-size-20" />
                        <span className="d-none d-sm-block">About</span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" data-bs-toggle="tab" href="#tasks" role="tab">
                        <i className="uil uil-clipboard-notes font-size-20" />
                        <span className="d-none d-sm-block">Tasks</span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" data-bs-toggle="tab" href="#messages" role="tab">
                        <i className="uil uil-envelope-alt font-size-20" />
                        <span className="d-none d-sm-block">Messages</span>
                      </a>
                    </li>
                  </ul>
                  {/* Tab content */}
                  <div className="tab-content p-4">
                    <div className="tab-pane active" id="about" role="tabpanel">
                      <div>
                        <div>
                          <h5 className="font-size-16 mb-4">Experience</h5>
                          <ul className="activity-feed mb-0 ps-2">
                            <li className="feed-item">
                              <div className="feed-item-list">
                                <p className="text-muted mb-1">2019 - 2020</p>
                                <h5 className="font-size-16">UI/UX Designer</h5>
                                <p>Abc Company</p>
                                <p className="text-muted">To achieve this, it would be necessary to have uniform grammar, pronunciation and more common words. If several languages coalesce, the grammar of the resulting language is more simple and regular than that of the individual</p>
                              </div>
                            </li>
                            <li className="feed-item">
                              <div className="feed-item-list">
                                <p className="text-muted mb-1">2017 - 2019</p>
                                <h5 className="font-size-16">Graphic Designer</h5>
                                <p>xyz Company</p>
                                <p className="text-muted">It will be as simple as occidental in fact, it will be Occidental. To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental </p>
                              </div>
                            </li>
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-size-16 mb-4">Projects</h5>
                          <div className="table-responsive">
                            <table className="table table-nowrap table-hover mb-0">
                              <thead>
                              <tr>
                                <th scope="col">#</th>
                                <th scope="col">Projects</th>
                                <th scope="col">Date</th>
                                <th scope="col">Status</th>
                                <th scope="col" style={{width: '120px'}}>Action</th>
                              </tr>
                              </thead>
                              <tbody>
                              <tr>
                                <th scope="row">01</th>
                                <td><a href="#" className="text-dark">Brand Logo Design</a></td>
                                <td>
                                  18 Jun, 2020
                                </td>
                                <td>
                                  <span className="badge bg-soft-primary font-size-12">Open</span>
                                </td>
                                <td>
                                  <div className="dropdown">
                                    <a className="text-muted dropdown-toggle font-size-18 px-2" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true">
                                      <i className="uil uil-ellipsis-v" />
                                    </a>
                                    <div className="dropdown-menu dropdown-menu-end">
                                      <a className="dropdown-item" href="#">Action</a>
                                      <a className="dropdown-item" href="#">Another action</a>
                                      <a className="dropdown-item" href="#">Something else here</a>
                                    </div>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <th scope="row">02</th>
                                <td><a href="#" className="text-dark">Minible Admin</a></td>
                                <td>
                                  06 Jun, 2020
                                </td>
                                <td>
                                  <span className="badge bg-soft-primary font-size-12">Open</span>
                                </td>
                                <td>
                                  <div className="dropdown">
                                    <a className="text-muted dropdown-toggle font-size-18 px-2" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true">
                                      <i className="uil uil-ellipsis-v" />
                                    </a>
                                    <div className="dropdown-menu dropdown-menu-end">
                                      <a className="dropdown-item" href="#">Action</a>
                                      <a className="dropdown-item" href="#">Another action</a>
                                      <a className="dropdown-item" href="#">Something else here</a>
                                    </div>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <th scope="row">03</th>
                                <td><a href="#" className="text-dark">Chat app Design</a></td>
                                <td>
                                  28 May, 2020
                                </td>
                                <td>
                                  <span className="badge bg-soft-success font-size-12">Complete</span>
                                </td>
                                <td>
                                  <div className="dropdown">
                                    <a className="text-muted dropdown-toggle font-size-18 px-2" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true">
                                      <i className="uil uil-ellipsis-v" />
                                    </a>
                                    <div className="dropdown-menu dropdown-menu-end">
                                      <a className="dropdown-item" href="#">Action</a>
                                      <a className="dropdown-item" href="#">Another action</a>
                                      <a className="dropdown-item" href="#">Something else here</a>
                                    </div>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <th scope="row">04</th>
                                <td><a href="#" className="text-dark">Minible Landing</a></td>
                                <td>
                                  13 May, 2020
                                </td>
                                <td>
                                  <span className="badge bg-soft-success font-size-12">Complete</span>
                                </td>
                                <td>
                                  <div className="dropdown">
                                    <a className="text-muted dropdown-toggle font-size-18 px-2" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true">
                                      <i className="uil uil-ellipsis-v" />
                                    </a>
                                    <div className="dropdown-menu dropdown-menu-end">
                                      <a className="dropdown-item" href="#">Action</a>
                                      <a className="dropdown-item" href="#">Another action</a>
                                      <a className="dropdown-item" href="#">Something else here</a>
                                    </div>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <th scope="row">05</th>
                                <td><a href="#" className="text-dark">Authentication Pages</a></td>
                                <td>
                                  06 May, 2020
                                </td>
                                <td>
                                  <span className="badge bg-soft-success font-size-12">Complete</span>
                                </td>
                                <td>
                                  <div className="dropdown">
                                    <a className="text-muted dropdown-toggle font-size-18 px-2" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true">
                                      <i className="uil uil-ellipsis-v" />
                                    </a>
                                    <div className="dropdown-menu dropdown-menu-end">
                                      <a className="dropdown-item" href="#">Action</a>
                                      <a className="dropdown-item" href="#">Another action</a>
                                      <a className="dropdown-item" href="#">Something else here</a>
                                    </div>
                                  </div>
                                </td>
                              </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="tab-pane" id="tasks" role="tabpanel">
                      <div>
                        <h5 className="font-size-16 mb-3">Active</h5>
                        <div className="table-responsive">
                          <table className="table table-nowrap table-centered">
                            <tbody>
                            <tr>
                              <td style={{width: '60px'}}>
                                <div className="form-check font-size-16 text-center">
                                  <input type="checkbox" className="form-check-input" id="tasks-activeCheck2" />
                                  <label className="form-check-label" htmlFor="tasks-activeCheck2" />
                                </div>
                              </td>
                              <td>
                                <a href="#" className="fw-bold text-dark">Ecommerce Product Detail</a>
                              </td>
                              <td>27 May, 2020</td>
                              <td style={{width: '160px'}}><span className="badge bg-soft-primary font-size-12">Active</span></td>
                            </tr>
                            <tr>
                              <td>
                                <div className="form-check font-size-16 text-center">
                                  <input type="checkbox" className="form-check-input" id="tasks-activeCheck1" />
                                  <label className="form-check-label" htmlFor="tasks-activeCheck1" />
                                </div>
                              </td>
                              <td>
                                <a href="#" className="fw-bold text-dark">Ecommerce Product</a>
                              </td>
                              <td>26 May, 2020</td>
                              <td><span className="badge bg-soft-primary font-size-12">Active</span></td>
                            </tr>
                            </tbody>
                          </table>
                        </div>
                        <h5 className="font-size-16 my-3">Upcoming</h5>
                        <div className="table-responsive">
                          <table className="table table-nowrap table-centered">
                            <tbody>
                            <tr>
                              <td style={{width: '60px'}}>
                                <div className="form-check font-size-16 text-center">
                                  <input type="checkbox" className="form-check-input" id="tasks-upcomingCheck3" />
                                  <label className="form-check-label" htmlFor="tasks-upcomingCheck3" />
                                </div>
                              </td>
                              <td>
                                <a href="#" className="fw-bold text-dark">Chat app Page</a>
                              </td>
                              <td>-</td>
                              <td style={{width: '160px'}}><span className="badge bg-soft-secondary font-size-12">Waiting</span></td>
                            </tr>
                            <tr>
                              <td>
                                <div className="form-check font-size-16 text-center">
                                  <input type="checkbox" className="form-check-input" id="tasks-upcomingCheck2" />
                                  <label className="form-check-label" htmlFor="tasks-upcomingCheck2" />
                                </div>
                              </td>
                              <td>
                                <a href="#" className="fw-bold text-dark">Email Pages</a>
                              </td>
                              <td>04 June, 2020</td>
                              <td><span className="badge bg-soft-primary font-size-12">Approved</span></td>
                            </tr>
                            <tr>
                              <td>
                                <div className="form-check font-size-16 text-center">
                                  <input type="checkbox" className="form-check-input" id="tasks-upcomingCheck1" />
                                  <label className="form-check-label" htmlFor="tasks-upcomingCheck1" />
                                </div>
                              </td>
                              <td>
                                <a href="#" className="fw-bold text-dark">Contacts Profile Page</a>
                              </td>
                              <td>-</td>
                              <td><span className="badge bg-soft-secondary font-size-12">Waiting</span></td>
                            </tr>
                            </tbody>
                          </table>
                        </div>
                        <h5 className="font-size-16 my-3">Complete</h5>
                        <div className="table-responsive">
                          <table className="table table-nowrap table-centered">
                            <tbody>
                            <tr>
                              <td style={{width: '60px'}}>
                                <div className="form-check font-size-16 text-center">
                                  <input type="checkbox" className="form-check-input" id="tasks-completeCheck3" />
                                  <label className="form-check-label" htmlFor="tasks-completeCheck3" />
                                </div>
                              </td>
                              <td>
                                <a href="#" className="fw-bold text-dark">UI Elements</a>
                              </td>
                              <td>27 May, 2020</td>
                              <td style={{width: '160px'}}><span className="badge bg-soft-success font-size-12">Complete</span></td>
                            </tr>
                            <tr>
                              <td>
                                <div className="form-check font-size-16 text-center">
                                  <input type="checkbox" className="form-check-input" id="tasks-completeCheck2" />
                                  <label className="form-check-label" htmlFor="tasks-completeCheck2" />
                                </div>
                              </td>
                              <td>
                                <a href="#" className="fw-bold text-dark">Authentication Pages</a>
                              </td>
                              <td>27 May, 2020</td>
                              <td><span className="badge bg-soft-success font-size-12">Complete</span></td>
                            </tr>
                            <tr>
                              <td>
                                <div className="form-check font-size-16 text-center">
                                  <input type="checkbox" className="form-check-input" id="tasks-completeCheck1" />
                                  <label className="form-check-label" htmlFor="tasks-completeCheck1" />
                                </div>
                              </td>
                              <td>
                                <a href="#" className="fw-bold text-dark">Admin Layout</a>
                              </td>
                              <td>26 May, 2020</td>
                              <td><span className="badge bg-soft-success font-size-12">Complete</span></td>
                            </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                    <div className="tab-pane" id="messages" role="tabpanel">
                      <div>
                        <div data-simplebar style={{maxHeight: '430px'}}>
                          <div className="d-flex align-items-start border-bottom py-4">
                            <img className="me-2 rounded-circle avatar-xs" src="assets/images/users/avatar-3.jpg" alt="" />
                            <div className="flex-1">
                              <h5 className="font-size-15 mt-0 mb-1">Marion Walker <small className="text-muted float-end">1 hr ago</small></h5>
                              <p className="text-muted">If several languages coalesce, the grammar of the resulting .</p>
                              <a href="javascript: void(0);" className="text-muted font-13 d-inline-block"><i className="mdi mdi-reply" /> Reply</a>
                              <div className="d-flex align-items-start mt-4">
                                <img className="me-2 rounded-circle avatar-xs" src="assets/images/users/avatar-4.jpg" alt="" />
                                <div className="flex-1">
                                  <h5 className="font-size-15 mt-0 mb-1">Shanon Marvin <small className="text-muted float-end">1 hr ago</small></h5>
                                  <p className="text-muted">It will be as simple as in fact, it will be Occidental. To it will seem like simplified .</p>
                                  <a href="javascript: void(0);" className="text-muted font-13 d-inline-block">
                                    <i className="mdi mdi-reply" /> Reply
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="d-flex align-items-start border-bottom py-4">
                            <img className="me-2 rounded-circle avatar-xs" src="assets/images/users/avatar-5.jpg" alt="" />
                            <div className="flex-1">
                              <h5 className="font-size-15 mt-0 mb-1">Janice Morgan <small className="text-muted float-end">2 hrs ago</small></h5>
                              <p className="text-muted">To achieve this, it would be necessary to have uniform pronunciation.</p>
                              <a href="javascript: void(0);" className="text-muted font-13 d-inline-block"><i className="mdi mdi-reply" /> Reply</a>
                            </div>
                          </div>
                          <div className="d-flex align-items-start border-bottom py-4">
                            <img className="me-2 rounded-circle avatar-xs" src="assets/images/users/avatar-7.jpg" alt="" />
                            <div className="flex-1">
                              <h5 className="font-size-15 mt-0 mb-1">Patrick Petty <small className="text-muted float-end">3 hrs ago</small></h5>
                              <p className="text-muted">Sed ut perspiciatis unde omnis iste natus error sit </p>
                              <a href="javascript: void(0);" className="text-muted font-13 d-inline-block"><i className="mdi mdi-reply" /> Reply</a>
                            </div>
                          </div>
                        </div>
                        <div className="border rounded mt-4">
                          <form action="#">
                            <div className="px-2 py-1 bg-light">
                              <div className="btn-group" role="group">
                                <button type="button" className="btn btn-sm btn-link text-dark text-decoration-none"><i className="uil uil-link" /></button>
                                <button type="button" className="btn btn-sm btn-link text-dark text-decoration-none"><i className="uil uil-smile" /></button>
                                <button type="button" className="btn btn-sm btn-link text-dark text-decoration-none"><i className="uil uil-at" /></button>
                              </div>
                            </div>
                            <textarea rows={3} className="form-control border-0 resize-none" placeholder="Your Message..." defaultValue={""} />
                          </form>
                        </div> {/* end .border*/}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* end row */}
          </div> {/* container-fluid */}
        </div>
        {/* End Page-content */}
        <footer className="footer">
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-6">
                © Minible.
              </div>
              <div className="col-sm-6">
                <div className="text-sm-end d-none d-sm-block">
                  Crafted with <i className="mdi mdi-heart text-danger" /> by <a href="../../index.html" target="_blank" className="text-reset">Themesbrand</a>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
  );
};

export default Dashboard;
