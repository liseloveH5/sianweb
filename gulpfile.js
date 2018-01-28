var gulp = require('gulp');//gulp自身
var sftp = require('gulp-sftp');

gulp.task('deploy-online', function () {
  return gulp.src('dist/**/*')
    .pipe(sftp({
      "host": "47.96.153.197",
      "port": "22",
      "user": "html",
      "password": "sian123",
      "remotePath": "/home/ftp",
    }));
});


