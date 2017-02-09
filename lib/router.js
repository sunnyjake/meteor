Router.map(function () {
  this.route('get-image', {
     where: 'server',
     path: '/img',
     action: function () {
       var fs = Npm.require('fs');
       console.log(this.request.query);
        console.log('retrieving ');
        // console.log(fs.readFileSync('/home/adminka/htaccess.txt'));
        var file = fs.readFileSync('/home/adminka/htaccess.txt');
        this.response.writeHead(200, {
          'Content-Type': 'text/plain',
          'Content-Disposition': `attachment; filename=test`,
          // 'Content-Type': 'application/download'
        });

        this.response.end(file);

        // this.response.end("test");
    }
  });
});

Router.route('/', function(){
  this.render("hello");
});
Router.route('/app', function(){
  this.render("App");
});
