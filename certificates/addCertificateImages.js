numberOfImages = 2;



// Inject certificate images to html

function addCertificateImage(path) {
    html = "";
    btnHtml = "";
    imgHtml = "";
    image = `
    <div class="carousel-item <ACTIVATESTATUS>" data-bs-interval="3000">
    <a
      href="<IMAGEPATH>"
      target="_blank"
    >
      <img
        src="<IMAGEPATH>"
        alt=""
        class="d-block w-100"
      />
    </a>
  </div>
  `;
  
    activeButton = `
  <button
  type="button"
  data-bs-target="#sliderImage"
  data-bs-slide-to="<SLIDEINDEX>"
  aria-label="Slide <SLIDENUMBER>"
  class="active"
  aria-corrent="true"
  ></button>
  `;
    normalButton = `
  <button
  type="button"
  data-bs-target="#sliderImage"
  data-bs-slide-to="<SLIDEINDEX>"
  aria-label="Slide <SLIDENUMBER>"
  ></button>
  `;
  
    for (let i = 0; i < path.length; i++) {
      if (i === 0) {
        btntmp = activeButton.replace("<SLIDEINDEX>", i);
        btntmp = btntmp.replace("<SLIDENUMBER>", i + 1);
        btnHtml += btntmp;
  
        imgtmp = image.replaceAll("<IMAGEPATH>", path[i]);
        imgtmp = imgtmp.replace("<ACTIVATESTATUS>", "active");
        imgHtml += imgtmp;
      } else {
        btntmp = normalButton.replace("<SLIDEINDEX>", i);
        btntmp = btntmp.replace("<SLIDENUMBER>", i + 1);
        btnHtml += btntmp;
  
        imgtmp = image.replaceAll("<IMAGEPATH>", path[i]);
        imgtmp = imgtmp.replace("<ACTIVATESTATUS>", "");
        imgHtml += imgtmp;
      }
    }
  
    document.getElementById("indicators").innerHTML = btnHtml;
    document.getElementById("certificateImages").innerHTML = imgHtml;
  
  }
  
  arr = [];

  for(let i = 0; i<numberOfImages; i++){
    arr.push('./certificates/Certificate-'+i+'.jpg')
  }
  
  addCertificateImage(arr)
  