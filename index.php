<!DOCTYPE html>
<html ng-app="app">
<head>
<!--<meta http-equiv="Content-Security-Policy" content="block-all-mixed-content">--> 
 <!-- <link rel="shortcut icon" type="image/x-icon" href="./favicon.png"> -->
  <title>Star wars</title>
   <meta name="description" content="">
  <meta charset="utf-8">
   <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
  <link rel="stylesheet" type="text/css" href="css/font-awesome.min.css">
  <link rel="stylesheet" type="text/css"  href="css/style.css">
  
 

</head>
<body>
<h1 class="text-center makeWhite">Star wars app</h1>
<div  ui-view>
  
</div>


 <!-- jQuery -->
  
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
  <script src="js/minjs/jquery-ui.js" defer></script>

  <!-- Angular -->

  <script src="js/minjs/angular.js"></script>
  <script src="js/minjs/angular-ui-router.js" defer></script> 
  <script src="js/minjs/angular-resource.js" defer></script> 
  <script src="js/minjs/angular-animate.js" defer></script>
  <script src="js/minjs/ui-bootstrap-tpls.js" defer></script>
  <script src="js/minjs/angular-local-storage.js" defer></script>
  <!-- Controllers -->
  <script src="js/minjs/app.js?v=1.10" defer></script>
  <script src="js/minjs/controller/homeController.js?" defer></script>
  <script src="js/minjs/controller/searchController.js?" defer></script>

   <!-- factory -->
  <script src="js/minjs/factory/planetDetails.js" defer></script>

   <!-- Directives -->
  <script src="js/minjs/directives/planets.js" defer></script>

</body>
</html>
   
