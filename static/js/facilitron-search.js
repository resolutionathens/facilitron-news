(function() {

  // Localize jQuery variable
  var jQuery;

  /******** Load jQuery if not present *********/
  if (window.jQuery === undefined || window.jQuery.fn.jquery !== '1.9.1') {
    var script_tag = document.createElement('script');
    script_tag.setAttribute("type", "text/javascript");
    script_tag.setAttribute("src", "https://cdnjs.cloudflare.com/ajax/libs/jquery/1.9.1/jquery.min.js");
    if (script_tag.readyState) {
      script_tag.onreadystatechange = function () { // For old versions of IE
        if (this.readyState == 'complete' || this.readyState == 'loaded') {
          scriptLoadHandler();
        }
      };
    } else {
      script_tag.onload = scriptLoadHandler;
    }
    // Try to find the head, otherwise default to the documentElement
    (document.getElementsByTagName("head")[0] || document.documentElement).appendChild(script_tag);
  } else {
    // The jQuery version on the window is the one we want to use
    jQuery = window.jQuery;
    main();
  }

  /******** Called once jQuery has loaded ******/
  function scriptLoadHandler() {
    // Restore $ and window.jQuery to their previous values and store the
    // new jQuery in our local jQuery variable
    jQuery = window.jQuery.noConflict(true);
    // Call our main function
    main();

  }
  /******** helper function to load external scripts *********/
  function loadScript(src, onLoad) {
    var script_tag = document.createElement('script');
    script_tag.setAttribute("type", "text/javascript");
    script_tag.setAttribute("src", src);

    if (script_tag.readyState) {
      script_tag.onreadystatechange = function () {
        if (this.readyState == 'complete' || this.readyState == 'loaded') {
          onLoad();
        }
      };
    } else {
      script_tag.onload = onLoad;
    }
    (document.getElementsByTagName("head")[0] || document.documentElement).appendChild(script_tag);
  }

  /******** helper function to load external css  *********/
  function loadCss(href) {
    var link_tag = document.createElement('link');
    link_tag.setAttribute("type", "text/css");
    link_tag.setAttribute("rel", "stylesheet");
    link_tag.setAttribute("href", href);
    (document.getElementsByTagName("head")[0] || document.documentElement).appendChild(link_tag);
  }
  var initlocation = function () {
    var options = {
      componentRestrictions: {
        country: 'us'
      }
    };
    var input = document.getElementById('fa-location');
    var autocomplete = new google.maps.places.Autocomplete(input, options);
  }
  var geolocate = function () {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (position) {
        var lat = position.coords.latitude;
        var lng = position.coords.longitude;
        displayLocation(lat, lng);
      });
    }
  }
  var displayLocation = function (latitude, longitude) {
    var geocoder;
    geocoder = new google.maps.Geocoder();
    var latlng = new google.maps.LatLng(latitude, longitude);
    geocoder.geocode({
      'latLng': latlng
    }, function (results, status) {
      if (status == google.maps.GeocoderStatus.OK) {
        if (results[0]) {
          var add = results[0].formatted_address;
          var value = add.split(",");
          count = value.length;
          state = value[count - 2];
          city = value[count - 3];
          $('#fa-location').val(city + ", " + state);
        }
      }
    });
  }
  /******** Our main function ********/
  function main() {
    var baseurl = "https://www.facilitron.com";
    loadScript("https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=places&key=AIzaSyDeymCvE4ICfhpJTxg3Hmxe_IkVmrWMqUg", function () {});
    loadScript('https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.8.3/underscore-min.js', function () {});
    loadScript('https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.19.2/moment.min.js', function () {});
    var searchAndFilter = function (elm, elm2) {
      var input,
        filter,
        ul,
        li,
        a,
        i;
      input = document.getElementById(elm);
      filter = input.value.toUpperCase();
      ul = document.getElementById(elm2);
      li = ul.getElementsByTagName('li');
      for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
          li[i].style.display = "";
        } else {
          li[i].style.display = "none";
        }
      }
    }
    var showPosition = function (position) {
      var lat = position.coords.latitude;
      var lng = position.coords.longitude;
      displayLocation(lat, lng);
    }
    var showMonthPicker = function () {}

    jQuery(document).ready(function ($) {
      var server = $('#facilitron-search-container').data('server');
      if (server)
        baseurl = server;

      // removing this to prevent override of local css
      // loadCss(baseurl+"/stylesheets/facilitron_search_style.css");

      /******* Load HTML *******/
      var jsonp_url = baseurl + "/search_parameter?callback=?";

      $.getJSON(jsonp_url, function (data) {
        var html = '<div class="facilitron-search-bar-wrapper">';
        html += '<div class="facilitron-search-input-wrapper-sm">';
        html += '<div class="search-box facilitron-pull-left facilitron-search-sm">Search Facility</div>'
        html += '<div class="btn-facilitron-primary facilitron-pull-left facilitron-search-sm" name="fa_search" id="fa-search-sm">Search</div>';
        html += '</div>';
        html += '<div class="facilitron-search-input-wrapper">';
        html += '<div class="facilitron-search-activity">';
        html += '<input type="text" name="fa_activity" id="fa-activity" class="facilitron-search-input" placeholder="Facility or activity">';
        html += '</div>';
        html += '<div class="facilitron-ddd-wrapper" id="activity-dd">';
        html += '</div>';
        html += '</div>';
        html += '<div class="facilitron-search-input-wrapper">';
        html += '<div class="facilitron-search-location noborder-input">';
        html += '<input type="text" name="fa_location" id="fa-location" class="facilitron-search-input" placeholder="City or Zip">';
        html += '<span class="fa fa-map-marker decorative-field"></span>';
        html += '</div>';
        html += '</div>';
        html += '<div class="facilitron-search-input-wrapper">';
        html += '<div class="facilitron-search-location">';
        html += '<input type="text" name="fa_date" id="fa-date" class="facilitron-search-input" placeholder="Date">';
        html += '<span class="fa fa-calendar decorative-field"></span>';
        html += '</div>';
        html += '<div class="facilitron-ddd-wrapper facilitron-ddd-date" id="date-dd">';
        html += '</div>';
        html += '</div>';
        html += '<div class="facilitron-search-input-wrapper">';
        html += '<div class="btn-facilitron-primary" name="fa_search" id="fa-search">Search ';
        html += '<span class="loading-icons hidden">';
        html += '<span class="fa-stack fa-3x" style="margin-top:-8px;padding:0;">';
        html += '<i class="fa fa-spinner fa-pulse fa-stack-1x color-grey"></i>';
        html += '<span class="fa-stack-1x loading-text"><img src="' + baseurl + '/images/fa-logo-gray-loading.png" width="10"></span>';
        html += '</span></span>';
        html += '</div>';
        html += '</div>';
        html += '</div>';
        html += '<div id="searchModal" class="facilitron-modal">';
        html += '<div class="facilitron-modal-dialog">';
        html += '<div class="facilitron-modal-content" id="facilitron-seacrh-small">';
        html += '<div class="facilitron-search-activity-sm"><div class="facilitron-search-close facilitron-pull-right facilitron-search-sm"><i class="fa fa-times" aria-hidden="true"></i></div></div>';
        html += '<div class="facilitron-search-activity-sm">';
        html += '<input type="text" name="fa_activity_sm" id="fa-activity-sm" class="facilitron-search-input-sm" placeholder="Facility or activity">';
        html += '</div>';
        html += '<div class="facilitron-search-activity-sm">';
        html += '<input type="text" name="fa_location_sm" id="fa-location-sm" class="facilitron-search-input-sm" placeholder="City or Zip">';
        html += '<span class="fa fa-map-marker decorative-field"></span>';
        html += '</div>';
        html += '<div class="facilitron-search-activity-sm">';
        html += '<input type="text" name="fa_date_sm" id="fa-date-sm" class="facilitron-search-input-sm" placeholder="Month,Year">';
        html += '<span class="fa fa-calendar decorative-field"></span>';
        html += '</div>';
        html += '<div class="facilitron-search-activity-sm">';
        html += '<div class="btn-facilitron-primary" name="fa_search" id="fa-search">Search</div>';
        html += '</div>';
        html += '</div>';
        html += '</div>';
        html += '</div>';
        $('#facilitron-search-container').empty();
        $('#facilitron-search-container').html(html);
        var arr = JSON.parse(data);
        var aOwners = $.map(arr[0].owner, function (obj) {
          if (obj.u_id !== "facilitron")
            return {
              value: obj.name + " - " + obj.city + ", " + obj.state,
              data: obj.u_id,
              type: "owner"
            }
        });
        var activitiesArr = $.map(arr[0].activities, function (item) {
          return {
            value: item.name,
            data: item._id,
            type: "activity"
          };
        });
        var mergedObj = $.merge(aOwners, activitiesArr)
        var dd = '<ul class="facilitron-search-list" id="dd-activity">';
        for (var i = 0; i < mergedObj.length; i++) {
          dd += '<li><a href="javascript:void(0)" class="list-li" data-name="' + mergedObj[i].value + '" data-type="' + mergedObj[i].type + '" data-id="' + mergedObj[i].data + '">' + mergedObj[i].value + '</a></li>';
        }
        dd += '</ul>';
        $('#activity-dd').empty();
        $('#activity-dd').html(dd);
        var today = moment().format("MM/DD/YYYY");
        var month_dd = '<ul class="facilitron-search-list" id="dd-month">';
        for (var i = 1; i < 36; i++) {
          month_dd += '<li><a href="javascript:void(0)" class="month-list-li" data-date="' + moment().add(i, "month").format("MMMM, YYYY") + '">' + moment().add(i, "month").format("MMMM, YYYY") + '</a></li>';
        }
        month_dd += '</ul>';
        $('#date-dd').empty();
        $('#date-dd').html(month_dd);
        $('#fa-date').val(moment().format("MMMM, YYYY"));
        initlocation();

        $('body').on('click', '#fa-search', function () {
          var search = $.trim($('#fa-activity').val());
          if (search.indexOf("<script>") >= 0 || search.indexOf("</script>") >= 0)
            search = "";
          if (search.length == 0) {
            $('#activites').val('');
            $('#activites').attr("placeholder", "Facility or activity");
            return;
          }
          var a = search.toLowerCase().split(' ');
          var activityMap = _.groupBy(arr[0].activities, function (obj) {
            return obj.name.toLowerCase()
          });
          if (activityMap[search.toLowerCase()] == undefined) {
            var arrActivity = $.map(arr[0].activities, function (obj) {
              return obj.name.toLowerCase()
            });
            var temp = _.intersection(a, arrActivity);
            var activities = [];
            if (temp.length > 0) {
              for (var i = 0; i < temp.length; i++) {
                activities.push(activityMap[temp[i].toLowerCase()][0]._id)
              }
            }
          } else {
            var activities = activityMap[search.toLowerCase()][0]._id;
          }
          if (activities.length == 0)
            activities = -1;
          var search_date = $.trim($('#fa-date').val());

          search_date = moment(search_date, "MMMM, YYYY").format("MM/DD/YYYY");
          if (search_date.length == 0 || !moment(search_date).isValid()) {
            var startDate = new Date();
            var endDate = new Date();
            startDate.setDate(1);
            startDate.setMonth(startDate.getMonth());
            endDate.setDate(0);
            endDate.setMonth(endDate.getMonth() + 1);
          } else {
            var startDate = new Date(search_date);
            var endDate = new Date(search_date);
            startDate.setDate(1);
            endDate.setMonth(endDate.getMonth() + 1);
            endDate.setDate(0);
          }
          startDate = Date.UTC(startDate.getFullYear(), startDate.getMonth(), startDate.getDate());
          endDate = Date.UTC(endDate.getFullYear(), endDate.getMonth(), endDate.getDate());

          var address = $('#fa-location').val();
          if (address.length == 0) {
            $('#fa-location').val('');
            $('#fa-location').attr("placeholder", "City or Zip");
            return;
          }
          $('.loading-icons').removeClass('hidden').show();
          var geocoder;
          geocoder = new google.maps.Geocoder();
          geocoder.geocode({
            'address': address
          }, function (results, status) {
            if (status == google.maps.GeocoderStatus.OK) {
              var latitude = results[0].geometry.location.lat();
              var longitude = results[0].geometry.location.lng();
              var url = baseurl + "/searchfacility/u:facilitron/lat:" + latitude + "/lng:" + longitude + "/dist:20/activities:-1/types:-1/namelike:" + search + "/startDate:" + startDate + "/endDate:" + endDate
              window.location.href = url;
            } else {
              $('.loading-icons').addClass('hidden').hide();
            }
          });
        });
        $('body').on('click', '#fa-date', function () {
          $('#activity-dd').css({
            "display": "none"
          });
          $('#date-dd').css({
            "display": "block"
          });
        });
        $('body').on('click', '#fa-location', function () {
          $('#activity-dd').css({
            "display": "none"
          });
          if (!$('#fa-location').val())
            geolocate();
        });
        $('body').on('click', '#fa-activity', function () {
          $('#activity-dd').css({
            "display": "block"
          });
          $('#date-dd').css({
            "display": "none"
          });
        });
        $('body').on('keyup', '#fa-activity', function () {
          searchAndFilter("fa-activity", "activity-dd");
        });
        $('body').on('click', '.list-li', function () {
          var id = $(this).data('id');
          var type = $(this).data('type');
          var name = $(this).data('name');
          if (type == "owner") {
            var url = baseurl + "/" + id;
            window.location.href = url;
          } else {
            $('#activity-dd').css({
              "display": "none"
            });
            $('#fa-activity').val(name);
            $('#fa-activity').data("id", id);
          }
        });
        $('body').on('click', '.month-list-li', function () {
          var d = $(this).data('date');
          $('#date-dd').css({
            "display": "none"
          });
          $('#fa-date').val(d);
        });
        $('body').on('keyup', '#fa-date', function () {
          searchAndFilter("fa-date", "date-dd");
        });
        $('body').on('click', '.facilitron-search-sm', function () {
          $("#searchModal").slideToggle("slow");
          $("#facilitron-seacrh-small").slideToggle("slow");
        });

      })
    });
  }

})();