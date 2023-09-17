
        <?php
        $pageTitle = "Live";
        $bodyClass = "";
        include 'header.php';
        ?>

        <!-- breadcrumb start -->
        <div class="breadcrumb-wrapper">
            <div class="container">
                <header class="entry-header">
                    <h1 class="entry-title">Pricing</h1>
                </header>
                <div id="crumbs">
                    <span>
                        <a href="#">
                            <span>Home</span>
                        </a>
                        <meta>

                        <span class="separator">
                            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="18" viewBox="0 0 10 18"
                                fill="none">
                                <path d="M0 18L7.9 0H10L2.1 18H0Z" fill="white" />
                            </svg>
                        </span>
                    </span>
                    <span>
                        <a href="#">
                            <span>Pages</span>
                        </a>
                        <meta>

                        <span class="separator">
                            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="18" viewBox="0 0 10 18"
                                fill="none">
                                <path d="M0 18L7.9 0H10L2.1 18H0Z" fill="white" />
                            </svg>
                        </span>
                    </span>
                    <span class="current">
                        <a href="#">
                            <span>Error</span>
                        </a>
                        <meta>
                    </span>
                </div>
            </div>
        </div>
        <!-- breadcrumb end -->

        <div class="error-page">
            <div class="container">
                <div class="error-wrapper">
                    <div class="error-image">
                        <img src="./assets/images/error.png" alt="Something Went Wrong">
                    </div>
                    <div class="error-message">
                        <h2>Oops ! Page Not Found</h2>
                        <span>The page you are looking for does not exist. It might have been moved or deleted.</span>
                        <a href="#" class="btn">Back to home</a>
                    </div>
                </div>
            </div>
        </div>

<?php include 'footer.html'; ?>

