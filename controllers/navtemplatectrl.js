myApp.component('navMenu',
{template:
  '<nav class="navbar navbar-dark bg-dark navbar-expand-sm">'+
  '<div class="container">'+
    '<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">'+
        '<span class="navbar-toggler-icon"></span>'+
    '</button>'+
          '<div class="collapse navbar-collapse" id="navbarToggleExternalContent">'+
          '<div class="navbar-nav">'+
            '<a class="nav-item nav-link" href="#">'+'Home'+'</a>'+
            '<a class="nav-item nav-link" href="#/exp">'+'Experience'+'</a>'+
            '<a class="nav-item nav-link" href="#/mytech">'+'Technology'+'</a>'+
            '<a class="nav-item nav-link" href="#/contact">'+'Contact me'+'</a>'+
            '<a class="nav-item nav-link" href="#/utility">'+'Utilities'+'</a>'+
          '</div>'+
        '</div>'+
      '</div>'+
    '</nav>'
});
