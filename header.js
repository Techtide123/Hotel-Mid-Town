document.write(`
    <header class="site-header header-style-1 mobile-sider-drawer-menu">
            <div class="sticky-header main-bar-wraper">
                <div class="main-bar p-t5">
                    <div class="container">
                        <div class="logo-header">
                            <div class="logo-header-inner logo-header-one">
                                <a href="index.html">
                                    <img src="images/icons/logos.png" alt="" style="width: 100px;border-radius: 3%;"/>
                                </a>
                            </div>
                        </div>
                        <!-- NAV Toggle Button -->
                        <button id="mobile-side-drawer" data-target=".header-nav" data-toggle="collapse" type="button"
                            class="navbar-toggler collapsed">
                            <span class="sr-only">Toggle navigation</span>
                            <span class="icon-bar icon-bar-first"></span>
                            <span class="icon-bar icon-bar-two"></span>
                            <span class="icon-bar icon-bar-three"></span>
                        </button>
                        <!-- ETRA Nav -->

                        <!-- MAIN Vav -->
                        <div class="header-nav navbar-collapse collapse">
                            <ul class=" nav navbar-nav">
                                <li class="active">
                                    <a href="index.html">Home</a>
                                </li>
                                           <li class="submenu-direction">
                                    <a href="about.html">About Us</a>
                                    
                                </li>
                                <li>
                                    <a href="index.html#rooms">Rooms</a>
                                    <ul class="sub-menu">
                                        <li><a href="dormitory-room.html">Dormitory Room</a></li>
                                        <li><a href="double-deluxe-room-ac.html">Double Deluxe AC Room</a></li>
                                        <li><a href="double-deluxe-room-non-ac.html">Double Deluxe Non AC Room</a></li>
                                        <li><a href="standard-double-room-non-ac.html">Standard Double Non AC Room</a></li>
                                        <li><a href="triple-deluxe-room-ac.html">Triple Deluxe AC Room</a></li>
                                        <li><a href="triple-deluxe-room-non-ac.html">Triple Deluxe Non AC Room</a></li>
                                    </ul> 
                                    
                                </li>
                                <li>
                                    <a href="about.html#services">Services</a>
                                    
                                </li>
                                <li>
                                    <a href="gallery.html">Gallery</a>
                                    
                                </li>
                     
                                <li class="submenu-direction">
                                    <a href="contact.html">Contact Us</a>
                                    <!-- <ul class="sub-menu">
                                        <li><a href="accordian.html">Accordian</a></li>
                                        <li><a href="button.html">Button</a></li>
                                        <li><a href="icon_box.html">Icon box style</a></li>
                                        <li><a href="list_group.html">List group</a></li>
                                        <li><a href="modal_popup.html">Modal popup</a></li>
                                        <li><a href="tabs.html">Tabs</a></li>
                                        <li><a href="table.html">Table</a></li>
                                        <li><a href="video.html">Video </a></li>
                                        <li><a href="icon-font.html">Icon Font </a></li>
                                    </ul> -->
                                </li>
                            </ul>
                        </div>

                        <div class="extra-nav">
                            <div class="extra-cell">
                                <a href="mailto:hotelmidtowndaringbadi1@gmail.com" class="contact-slide-show text-white"><i class="fa fa-envelope-o"></i></a>
                            </div>
                           <div class="extra-cell">
                                <a href="tel:+919337335835" class="socialicon_show text-white">
                                    <i class="fa fa-phone"></i>
                                </a>
                            </div>

                        </div>
                        <!-- ETRA Nav -->

                        <!-- Social Nav -->
                        <div class="social_hide">
                            <div class="side-social-nav">
                                <a href="javascript:void(0)" class="socialicon_close">&times;</a>
                                <ul class="list-unstyled">
                                    <li><a href="javascript:void(0);" class="fa fa-facebook"><span
                                                class="social-tooltip">Facebook</span></a></li>
                                    <li><a href="javascript:void(0);" class="fa fa-rss"><span
                                                class="social-tooltip">Rss</span></a></li>
                                    <li><a href="javascript:void(0);" class="fa fa-linkedin"><span
                                                class="social-tooltip">Linkedin</span></a></li>
                                    <li><a href="javascript:void(0);" class="fa fa-google-plus"><span
                                                class="social-tooltip">Google Plus</span></a></li>
                                    <li><a href="javascript:void(0);" class="fa fa-instagram"><span
                                                class="social-tooltip">Instagram</span></a></li>
                                </ul>
                            </div>
                        </div>

                        <!-- Contact Nav -->
                        <div class="contact-slide-hide">
                            <div class="contact-nav">
                                <a href="javascript:void(0)" class="contact_close">&times;</a>
                                <div class="contact-nav-form p-a30">
                                    <form class="cons-contact-form" method="post" action="form-handler.php">
                                        <div class="contact-one m-b30">

                                            <!-- TITLE START -->
                                            <div class="section-head text-center">
                                                <h2 class="m-b5" data-title="Form">Get In Touch</h2>
                                            </div>
                                            <!-- TITLE END -->
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <div class="form-group wt-inputicon-box">
                                                        <input name="username" type="text" required class="form-control"
                                                            placeholder="Name">
                                                        <i class="fs-input-icon sl-icon-user"></i>
                                                    </div>
                                                </div>
                                                <div class="col-md-6">
                                                    <div class="form-group wt-inputicon-box">
                                                        <input name="email" type="text" class="form-control" required
                                                            placeholder="Email">
                                                        <i class="fs-input-icon sl-icon-envolope-letter"></i>
                                                    </div>
                                                </div>
                                                <div class="col-md-12">
                                                    <div class="form-group wt-inputicon-box">
                                                        <textarea name="message" rows="3" class="form-control " required
                                                            placeholder="Message"></textarea>
                                                        <i class="fs-input-icon sl-icon-envolope"></i>
                                                    </div>
                                                </div>
                                                <div class="col-md-12">
                                                    <div class="text-center">
                                                        <button name="submit" type="submit" value="Submit"
                                                            class="btn-half site-button button-lg m-b15">
                                                            <span>Submit</span><em></em>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                    <div class="contact-info text-black m-b30">
                                        <!-- TITLE START -->
                                        <div class="section-head text-center">
                                            <h2 class="m-b5" data-title="Info">Contact Info</h2>
                                        </div>
                                        <!-- TITLE END -->
                                        <ul>
                                            <li>
                                                <div class="wt-icon-box-wraper center p-b40">
                                                    <div class="icon-md m-b20"><i class="sl-icon-phone"></i></div>
                                                    <div class="icon-content">
                                                        <h5 class="m-t0 font-weight-500">Phone number</h5>
                                                        <p>+91 9337335835</p>
                                                    </div>
                                                </div>
                                            </li>

                                            <li>
                                                <div class="wt-icon-box-wraper center p-b40">
                                                    <div class="icon-md m-b20"><i class="sl-icon-envolope-letter"></i>
                                                    </div>
                                                    <div class="icon-content">
                                                        <h5 class="m-t0 font-weight-500">Email address</h5>
                                                        <p>hotelmidtowndaringbadi1@gmail.com</p>
                                                    </div>
                                                </div>
                                            </li>

                                            <li>
                                                <div class="wt-icon-box-wraper center">
                                                    <div class="icon-md m-b20"><i class="sl-icon-map"></i></div>
                                                    <div class="icon-content">
                                                        <h5 class="m-t0 font-weight-500">Address info</h5>
                                                        <p>Near Lord shiv temple, NH - 59, Main road, Daringbadi, Kandhamal, Odisha, 762104</p>
                                                    </div>
                                                </div>
                                            </li>

                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- SITE Search -->
                        <div id="search">
                            <span class="close"></span>
                            <form role="search" id="searchform" action="/search" method="get" class="radius-xl">
                                <div class="input-group">
                                    <input value="" name="q" type="search" placeholder="Type to search" />
                                    <span class="input-group-btn"><button type="button" class="search-btn"><i
                                                class="fa fa-search"></i></button></span>
                                </div>
                            </form>
                        </div>


                    </div>
                </div>
            </div>
        </header>`);
