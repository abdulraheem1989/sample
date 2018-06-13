app.module('myApp').component('navMenu',
{template:
  '<nav class="d-flex justify-content-center">'+
    '<ul class="nav nav-pills">'+
      '<li >'+'<a class="btn btn-outline-primary" href="#">'+'Home'+'</a>'+'</li>'+
      '<li >'+'<a class="btn btn-outline-primary" href="#/mytech">'+'What I know'+'</a>'+'</li>'+
      '<li >'+'<a class="btn btn-outline-primary" href="#/contact">'+'Contact me'+'</a>'+'</li>'+
      '<li >'+'<a class="btn btn-outline-primary" href="#/blog" >'+'Blog'+'</a>'+'</li>'+
      '<li >'+'<a class="btn btn-outline-primary" href="#/utility" >'+'Utilities'+'</a>'+'</li>'+
    '</ul>'+
  '</nav>'
});
