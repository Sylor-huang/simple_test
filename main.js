
function start_pixel() {
  var script = document.createElement('script');
  script.type = 'text/javascript';
  const params_hash = getUrlParams()

  const pixel_id = params_hash["stackadapt_pixel_id"]

  if(pixel_id && pixel_id.length > 0){
      script.innerHTML = "saq('ts', pixel_id, params_hash);"
      document.head.appendChild(script);
  }
};


function getUrlParams(){
  let search_params = window.location.search
  let params_hash = {};
  new URLSearchParams(search_params.slice(1)).forEach((val, key) => {
    params_hash[key] = val;
  });
  return params_hash
}
