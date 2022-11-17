var bmw56 = {
  'conf': null     // BMW configuration
};

// Expose to the global object
window.bmw56 = bmw56;


bmw56.conf = {
    "NAVIGATION":{
        "index":"bmw-connected-drive.html",                      
        "app-connected-drive": "app-bmw-connected.html"
    },
};


     function navigation(path,SerieActivate,ModeloActivate, subpath) {

        if (window.location != window.parent.location) {

          if (document.referrer.split('/')[2] === "m.bmw.es"){
              redirectMovil(path,SerieActivate,ModeloActivate,subpath);

          }else {
                redirectDesktop(path,SerieActivate,ModeloActivate,subpath);
            }
        } else {
          
            redirectIberica(path,SerieActivate,ModeloActivate,subpath);
          
        }
    }

    function redirectMovil(path,SerieActivate,ModeloActivate, subpath){

              var url = document.referrer;
              var prefix = (typeof(subpath) !== "undefined" )? subpath+"/" : "";
              var id = "proxyframe";
              var proxy = frames[id];
              var url = "//m.bmw.es/content/dam/bmw/marketES/m_bmw_es/cross-domain/iframeCrossDomainAM.html?url="+url.substr(0, url.lastIndexOf('/') + 1) + prefix + bmw56.conf.NAVIGATION[path];

              if(proxy){
                  proxy.location.href = url;
              } else {
                  var iframe = document.createElement("iframe");
                  iframe.id = id;
                  iframe.name = id;
                  iframe.src = url;
                  iframe.style.display = "none";
                  document.body.appendChild(iframe);
              }
    }

    function redirectDesktop(path,SerieActivate,ModeloActivate, subpath){

        document.domain = 'bmw.es';
        var url = window.top.location.href;
        var prefix = (typeof(subpath) !== "undefined" )? subpath+"/" : "";
        window.top.location.href = url.substr(0, url.lastIndexOf('/') + 1) + prefix + bmw56.conf.NAVIGATION[path];

    }

    function redirectIberica(path,SerieActivate,ModeloActivate, subpath){

              window.location.href = path + '.html';
    }

    function autoClick(time){
      var button = document.getElementById('cn-button');
        button.click();
        //button.style.pointerEvents = 'none';  
       // document.getElementsByTagName("a").style.pointerEvents = 'none';
        // Usage!
        sleep(time).then(() => {
          // To re-enable:
          //button.style.pointerEvents = 'auto'; 
          button.click();
          //document.getElementsByTagName("a").style.pointerEvents = 'auto';
        });
    }

      // sleep time expects milliseconds
      function sleep (time) {
        return new Promise((resolve) => setTimeout(resolve, time));
      }

      function loadVideo(){
        var subVideo = document.getElementById('videoPrincipal');
        var newVideo = document.getElementById('videoinstala1');
        subVideo.pause();
        $('#videoInstala').attr("href","#videoinstala1").click();
        newVideo.play();
        $('#videoInstala').attr("href","javascript:loadVideo();");
      }

      