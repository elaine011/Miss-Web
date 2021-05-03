$('#picture').change(function() {
    var file = $('#picture')[0].files[0];
    var reader = new FileReader;
    reader.onload = function(e) {
      $('#demo').attr('src', e.target.result);
    };
    reader.readAsDataURL(file);
  });