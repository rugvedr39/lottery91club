<!DOCTYPE html>
<html lang="en" data-change="1">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Management page</title>
  <link rel="stylesheet"
    href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700&display=fallback">
  <link rel="stylesheet" href="/plugins/fontawesome-free/css/all.min.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
  <link rel="stylesheet" href="/plugins/overlayScrollbars/css/OverlayScrollbars.min.css">
  <link rel="stylesheet" href="/dist/css/adminlte.min.css">
  <link rel="stylesheet" href="/css/pages__parity.css">
  <link rel="stylesheet" href="/css/vantjs.css">
  <link href="//cdn.jsdelivr.net/npm/@sweetalert2/theme-dark@4/dark.css" rel="stylesheet">
  <script src="https://cdn.socket.io/4.4.1/socket.io.min.js"
    integrity="sha384-fKnu0iswBIqkjxrhQCTZ7qlLHOFEgNkRmK2vaO/LbTZSXdJfAu6ewRBdwHPhBo/H"
    crossorigin="anonymous"></script>
  <link rel="stylesheet" href="/css/admin.css">

  <style>
    .active {
      background-color: #007bff !important;
    }

    /* Chrome, Safari, Edge, Opera */

    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    /* Firefox */

    input[type=number] {
      -moz-appearance: textfield;
    }

    #list-orders .item {
      padding: 5px 0;
      text-align: center;
    }

    .box .li[data-v-a9660e98] {
      display: block;
      height: 13px;
      width: 13px;
      border-radius: 50%;
      margin: 0 0.13333rem;
    }

    .van-col .goItem .c-tc .green {
      background-color: #5cba47;
    }

    .van-col .goItem .c-tc .red {
      background: #ffa43f;
    }

    .van-col .goItem .c-tc .violet {
      background-color: #eb43dd;
    }

    .van-col .c-tc .green {
      color: #5cba47;
    }

    .van-col .c-tc .red {
      color: #fb4e4e;
    }

    .van-col .c-tc .violet {
      color: #eb43dd;
    }

    .goItem .c-row-center {
      display: flex;
      justify-content: center;
    }

    .game {
      background-color: #e67e22 !important;
      cursor: pointer;
    }
  </style>
</head>

<body class="hold-transition dark-mode sidebar-mini layout-fixed layout-navbar-fixed layout-footer-fixed">
  <div class="wrapper">
    <div id="preloader">
    <div class="loadingPlaceholder"></div>
</div>
<nav class="main-header navbar navbar-expand navbar-dark">
    <ul class="navbar-nav">
        <li class="nav-item">
            <a class="nav-link" data-widget="pushmenu" href="#" role="button"><i class="fas fa-bars"></i></a>
        </li>
    </ul>
    <ul class="navbar-nav ml-auto">
        <li class="nav-item">
            <a class="nav-link" data-widget="fullscreen" href="#" role="button">
                <i class="fas fa-expand-arrows-alt"></i>
            </a>
        </li>
    </ul>
</nav>
<aside class="main-sidebar sidebar-dark-primary elevation-4">
    <div class="sidebar" style="margin-top: 0;">
        <div class="user-panel mt-3 pb-3 mb-3 d-flex">
            <div class="image">
                <img src="/images/facebook.jpg" class="img-circle elevation-2" alt="User Image">
            </div>
            <div class="info">
                <a href="#" class="d-block">Member</a>
            </div>
        </div>
        <nav class="mt-2">
            <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                <li class="nav-item">
                    <a href="/admin/manager/index" class="nav-link">
                        <i class="nav-icon fas fa-tachometer-alt"></i>
                        <p>Wingo</p>
                        <span class="right badge badge-danger">New</span>
                    </a>
                </li>
                <li class="nav-item">
                    <a href="/admin/manager/5d" class="nav-link">
                        <i class="nav-icon fas fa-tachometer-alt"></i>
                        <p>5D</p>
                        <span class="right badge badge-danger">New</span>
                    </a>
                </li>
                <li class="nav-item">
                    <a href="/admin/manager/k3" class="nav-link">
                        <i class="nav-icon fas fa-tachometer-alt"></i>
                        <p>K3</p>
                        <span class="right badge badge-danger">New</span>
                    </a>
                </li>
                <li class="nav-item">
                    <a href="/admin/manager/members" class="nav-link">
                        <i class="nav-icon fa fa-user-circle"></i>
                        <p>Members</p>
                    </a>
                </li>
                <li class="nav-item">
                    <a href="/admin/manager/ctv" class="nav-link">
                        <i class="nav-icon fa fa-users"></i>
                        <p>Collaborator</p>
                    </a>
                </li>
                <li class="nav-item">
                    <a href="/admin/manager/statistical" class="nav-link">
                        <i class="nav-icon fas fa-chart-pie"></i>
                        <p>Create Collaborator</p>
                    </a>
                </li>
                <li class="nav-item">
                    <a href="/admin/manager/recharge" class="nav-link">
                        <i class="nav-icon fa fa-credit-card-alt"></i>
                        <p>Browse Recharge</p>
                    </a>
                </li>
                <li class="nav-item">
                    <a href="/admin/manager/withdraw" class="nav-link">
                        <i class="nav-icon fa fa-bank"></i>
                        <p>Browse Withdrawal</p>
                    </a>
                </li>
                <li class="nav-item">
                    <a href="/admin/manager/rechargeRecord" class="nav-link">
                        <i class="nav-icon fa fa-list"></i>
                        <p>Recharge (Approved)</p>
                    </a>
                </li>
                <li class="nav-item">
                    <a href="/admin/manager/withdrawRecord" class="nav-link">
                        <i class="nav-icon fa fa-list"></i>
                        <p>Withdrawal (Approved)</p>
                    </a>
                </li>
                <li class="nav-item">
                    <a href="/admin/manager/createBonus" class="nav-link">
                        <i class="nav-icon fa fa-gift"></i>
                        <p>Create Giftcode</p>
                    </a>
                </li>
                <li class="nav-item">
                    <a href="/admin/manager/settings" class="nav-link">
                        <i class="nav-icon fa fa-cog"></i>
                        <p>Settings</p>
                    </a>
                </li>
                <!-- <li class="nav-item">
                    <a href="/manage/admin/api" class="nav-link">
                        <i class="nav-icon fa fa-link" aria-hidden="true"></i>
                        <p>API</p>
                    </a>
                </li> -->
                <li class="nav-item">
                    <a href="/home" class="nav-link">
                        <i class="nav-icon fa fa-sign-out" aria-hidden="true"></i>
                        <p>Come Backi</p>
                    </a>
                </li>
            </ul>
        </nav>
    </div>
</aside>

      <div class="content-wrapper">
        <div class="content-header">
          <div class="container-fluid">
            <div class="row mb-2">
              <div class="col-sm-6">
                <h1 class="m-0">Dashboard V5</h1>
              </div>
            </div>
          </div>
        </div>
        <section class="content">
          <div class="container-fluid">
            <div class="row info-box">
              <div class="col-12 col-sm-6 col-md-3" onclick="location.href='/admin/manager/index'">
                <div class="info-box mb-3">
                  <span class="info-box-icon elevation-1 bg-primary game">1M</span>

                  <div class="info-box-content">
                    <span class="info-box-text">WinGO 1 min</span>
                  </div>
                </div>
              </div>
              <div class="clearfix hidden-md-up"></div>

              <div class="col-12 col-sm-6 col-md-3" onclick="location.href='/admin/manager/index/3'">
                <div class="info-box mb-3">
                  <span class="info-box-icon elevation-1 bg-primary game">3M</span>

                  <div class="info-box-content">
                    <span class="info-box-text">WinGO 3 min</span>
                  </div>
                </div>
              </div>
              <div class="col-12 col-sm-6 col-md-3" onclick="location.href='/admin/manager/index/5'">
                <div class="info-box mb-3">
                  <span class="info-box-icon elevation-1 bg-primary game">5M</span>

                  <div class="info-box-content">
                    <span class="info-box-text">WinGO 5 min</span>
                  </div>
                </div>
              </div>
              <div class="col-12 col-sm-6 col-md-3" onclick="location.href='/admin/manager/index/10'">
                <div class="info-box">
                  <span class="info-box-icon elevation-1 bg-primary game">10M</span>

                  <div class="info-box-content">
                    <span class="info-box-text">WinGO 10 min</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-12 col-sm-6 col-md-3">
                <div class="info-box mb-3">
                  <span class="info-box-icon bg-danger elevation-1">
                    <i class="fas fa-shopping-cart"></i>
                  </span>

                  <div class="info-box-content">
                    <span class="info-box-text">Join Red</span>
                    <span totalMoney='' class="info-box-number orderRed">0</span>
                  </div>
                </div>
              </div>
              <div class="clearfix hidden-md-up"></div>

              <div class="col-12 col-sm-6 col-md-3">
                <div class="info-box mb-3">
                  <span class="info-box-icon elevation-1" style="background-color: #8e44ad;"><i
                      class="fas fa-shopping-cart"></i></span>
                  <div class="info-box-content">
                    <span class="info-box-text">Join Violet</span>
                    <span totalMoney="" class="info-box-number orderViolet">0</span>
                  </div>
                </div>
              </div>
              <div class="col-12 col-sm-6 col-md-3">
                <div class="info-box mb-3">
                  <span class="info-box-icon bg-success elevation-1">
                    <i class="fas fa-shopping-cart"></i>
                  </span>

                  <div class="info-box-content">
                    <span class="info-box-text">Join Green</span>
                    <span totalMoney="" class="info-box-number orderGreen">0</span>
                  </div>
                </div>
              </div>
              <div class="col-12 col-sm-6 col-md-3">
                <div class="info-box">
                  <span class="info-box-icon bg-info elevation-1">
                    <i class="fas fa-shopping-cart"></i>
                  </span>

                  <div class="info-box-content">
                    <span class="info-box-text">Total Amount</span>
                    <span totalMoney="" class="info-box-number orderNumbers">0</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-12 col-sm-6 col-md-3">
                <div class="info-box mb-3">
                  <span class="info-box-icon elevation-1 bg-primary">0</span>

                  <div class="info-box-content">
                    <span class="info-box-text">Join 0</span>
                    <span totalMoney="" class="info-box-number orderNumber">0</span>
                  </div>
                </div>
              </div>
              <div class="clearfix hidden-md-up"></div>

              <div class="col-12 col-sm-6 col-md-3">
                <div class="info-box mb-3">
                  <span class="info-box-icon elevation-1 bg-primary">1</span>

                  <div class="info-box-content">
                    <span class="info-box-text">Join 1</span>
                    <span totalMoney="" class="info-box-number orderNumber">0</span>
                  </div>
                </div>
              </div>
              <div class="col-12 col-sm-6 col-md-3">
                <div class="info-box mb-3">
                  <span class="info-box-icon elevation-1 bg-primary">2</span>

                  <div class="info-box-content">
                    <span class="info-box-text">Join 2</span>
                    <span totalMoney="" class="info-box-number orderNumber">0</span>
                  </div>
                </div>
              </div>
              <div class="col-12 col-sm-6 col-md-3">
                <div class="info-box">
                  <span class="info-box-icon elevation-1 bg-primary">3</span>

                  <div class="info-box-content">
                    <span class="info-box-text">Join 3</span>
                    <span totalMoney="" class="info-box-number orderNumber">0</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-12 col-sm-6 col-md-3">
                <div class="info-box mb-3">
                  <span class="info-box-icon elevation-1 bg-primary">4</span>

                  <div class="info-box-content">
                    <span class="info-box-text">Join 4</span>
                    <span totalMoney="" class="info-box-number orderNumber">0</span>
                  </div>
                </div>
              </div>
              <div class="clearfix hidden-md-up"></div>

              <div class="col-12 col-sm-6 col-md-3">
                <div class="info-box mb-3">
                  <span class="info-box-icon elevation-1 bg-primary">5</span>

                  <div class="info-box-content">
                    <span class="info-box-text">Join 5</span>
                    <span totalMoney="" class="info-box-number orderNumber">0</span>
                  </div>
                </div>
              </div>
              <div class="col-12 col-sm-6 col-md-3">
                <div class="info-box mb-3">
                  <span class="info-box-icon bg-primary elevation-1">6</span>

                  <div class="info-box-content">
                    <span class="info-box-text">Join 6</span>
                    <span totalMoney="" class="info-box-number orderNumber">0</span>
                  </div>
                </div>
              </div>
              <div class="col-12 col-sm-6 col-md-3">
                <div class="info-box">
                  <span class="info-box-icon bg-primary elevation-1">7</span>

                  <div class="info-box-content">
                    <span class="info-box-text">Join 7</span>
                    <span totalMoney="" class="info-box-number orderNumber">0</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-12 col-sm-6 col-md-3">
                <div class="info-box mb-3">
                  <span class="info-box-icon bg-primary elevation-1">8</span>

                  <div class="info-box-content">
                    <span class="info-box-text">Join 8</span>
                    <span totalMoney="" class="info-box-number orderNumber">0</span>
                  </div>
                </div>
              </div>
              <div class="clearfix hidden-md-up"></div>

              <div class="col-12 col-sm-6 col-md-3">
                <div class="info-box mb-3">
                  <span class="info-box-icon elevation-1 bg-primary">9</span>

                  <div class="info-box-content">
                    <span class="info-box-text">Join 9</span>
                    <span totalMoney="" class="info-box-number orderNumber">0</span>
                  </div>
                </div>
              </div>
              <div class="col-12 col-sm-6 col-md-3">
                <div class="info-box mb-3">
                  <span class="info-box-icon elevation-1 bg-primary">B</span>

                  <div class="info-box-content">
                    <span class="info-box-text">Join Big</span>
                    <span totalMoney="" class="info-box-number orderNumber">0</span>
                  </div>
                </div>
              </div>
              <div class="col-12 col-sm-6 col-md-3">
                <div class="info-box mb-3">
                  <span class="info-box-icon elevation-1 bg-primary">S</span>

                  <div class="info-box-content">
                    <span class="info-box-text">Join Small</span>
                    <span totalMoney="" class="info-box-number orderNumber">0</span>
                  </div>
                </div>
              </div>
            </div>
            <!-- Main row -->
            <div class="row">
              <!-- Left col -->
              <div class="col-md-12">
                <!-- MAP & BOX PANE -->
                <div class="row">
                  <div class="col-md-12">
                    <div class="card direct-chat direct-chat-warning">
                      <div class="card-header">
                        <h3 class="card-title">Betting Statistics</h3>

                        <div class="card-tools">
                          <button type="button" class="btn btn-tool" data-card-widget="collapse">
                            <i class="fas fa-minus"></i>
                          </button>
                          <button type="button" class="btn btn-tool" data-card-widget="remove">
                            <i class="fas fa-times"></i>
                          </button>
                        </div>
                      </div>
                      <div class="card-body">
                        <div class="direct-chat-messages" style="min-height: 520px;">
                          <div class="direct-chat-msg">
                            <!---->
                          </div>
                        </div>
                      </div>
                      <div class="card-footer"></div>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-12">
                    <div class="card card-primary">
                      <div class="card-header" style="text-align: center;">
                        <div data-v-04e3b381="" class="reservation-chunk-sub-num">012401924124912</div>
                        <div data-v-7d40872f="" class="time" style="font-size: 23px;border-radius: none;">
                          <span data-v-7d40872f="" class="time-sub" style="border-radius: 0;">0</span>
                          <span data-v-7d40872f="" class="time-sub" style="border-radius: 0;">0</span>
                          <span data-v-7d40872f="" class="">:</span>
                          <span data-v-7d40872f="" class="time-sub" style="border-radius: 0;">4</span>
                          <span data-v-7d40872f="" class="time-sub" style="border-radius: 0;">7</span>
                        </div>
                      </div>
                      <div class="card-body" style="padding: 0;">
                        <div class="form-group">
                          <div data-v-a9660e98="" class="wrap">
                            <div data-v-a9660e98="" class="c-tc van-row"
                              style="text-align: center;border-bottom: 1px solid;padding: 6px">
                              <div data-v-a9660e98="" class="van-col van-col--8">Periods</div>
                              <div data-v-a9660e98="" class="van-col van-col--5">Number</div>
                              <div data-v-a9660e98="" class="van-col van-col--5">Big/Small</div>
                              <div data-v-a9660e98="" class="van-col van-col--6">Colour</div>
                            </div>
                          </div>
                          <div id="list-orders">
                            <!---->
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-12">
                    <div class="card card-primary">
                      <div class="card-header">
                        <h3 class="card-title">Adjusting the result</h3>
                      </div>
                      <div class="card-body">
                        <div class="form-group">
                            <b>
0 (Red and Purple) | 5 (Green and Purple) | 1, 3, 7, 9 (Green) | 2, 4, 6, 8 (Red)   </p>
                            <label for="editResult" id="ketQua">Next result: 6</label>
                            <input type="text" class="form-control" id="editResult" value=""
                              placeholder="Enter the result (e.g., 1)">
                        </div>
                      </div>
                      <div class="card-footer" style="text-align: center;">
                        <button type="submit" class="btn btn-primary start-order">Submit</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <a id="back-to-tops" href="#" class="btn btn-primary back-to-top" role="button" aria-label="Scroll to top">
        <i class="fas fa-chevron-up"></i>
      </a>
  </div>
  <script src="/plugins/jquery/jquery.min.js"></script>
  <script src="/plugins/bootstrap/js/bootstrap.bundle.min.js"></script>
  <script src="/plugins/overlayScrollbars/js/jquery.overlayScrollbars.min.js"></script>
  <script src="//cdn.jsdelivr.net/npm/sweetalert2@11/dist/sweetalert2.min.js"></script>
  <script src="/dist/js/adminlte.js"></script>
  <script src="/plugins/jquery-mousewheel/jquery.mousewheel.js"></script>
  <script src="/plugins/raphael/raphael.min.js"></script>
  <script src="/js/admin/admin.js"></script>
  <script src="/js/admin/index.js"></script>
</body>
 
</html>