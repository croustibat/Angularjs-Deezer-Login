<!DOCTYPE html>
<html ng-app="dzAppDemo">
  <head>
    <meta charset="utf-8">
    <title>AngularJS Log with Deezer.com</title>

    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="">
    <meta name="author" content="">

    <meta name="fragment" content="!" />

    <script src="//cdn-files.deezer.com/js/min/dz.js"></script>

    <!-- Le styles -->
    <link href="//netdna.bootstrapcdn.com/twitter-bootstrap/2.2.2/css/bootstrap-combined.min.css" rel="stylesheet">
    <link href="assets/css/flat-ui.css" rel="stylesheet">

    <script src="//ajax.googleapis.com/ajax/libs/angularjs/1.0.5/angular.min.js"></script>

    <!-- HTML5 shim, for IE6-8 support of HTML5 elements -->
    <!--[if lt IE 9]>
      <script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script>
    <![endif]-->

    <style>
      body{
        padding-top:60px;
      }
    </style>

    <!-- Fav and touch icons -->
    <link rel="shortcut icon" href="assets/img/favico.png">
    <script>
      var $domaine = "<?php echo $_SERVER['SERVER_NAME']?>";
    </script>
  </head>

  <body ng-controller="MainCtrl">

    <div id="dz-root"></div>
    <div id="wrap" class="container">

      <div id="demo-headline" class="demo-headline">
        <h1 class="demo-logo">
          Deezer & AngularJS
          <small>... and Flat UI</small>
        </h1>
      </div> <!-- /demo-headline -->


      <div class="row">
        <div class="span12">
          <div id="login-container" class="offset5" style="">
            <button class="btn btn-large btn-info" class="dz-login" ng-click="dzLogin()">Log with Deezer</button>
          </div>
        </div>
      </div>

      <div ng-view></div>

    </div><!-- end #wrap -->

    <script src="//ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js"></script>
    <script src="//netdna.bootstrapcdn.com/twitter-bootstrap/2.2.2/js/bootstrap.min.js"></script>

    <script src="assets/js/app.js" ></script>
    <script src="assets/js/controller.js" ></script>

  </body>
</html>