chrome.storage.local.get(['videoUrls', 'aulasTextos'], (data) => {
  const listElement = document.getElementById('onclickList');
  const videoUrls = data.videoUrls || [];
  const aulasTextos = data.aulasTextos || [];
  

  if (videoUrls.length === 0) {
    listElement.innerHTML = '<li>No video URL was found.</li>';
  } else {
    videoUrls.forEach((url, index) => {
     
      const cleanedUrl = url.replace('?autoplay=1', '');
	  
      const aulaTextoAtual = `Aula 0.0`;

      const li = document.createElement('li');

      const link = document.createElement('a');
      link.href = cleanedUrl;
	  link.target = "_blank";
      if (aulasTextos.length === 0) {
          link.innerHTML = `${aulaTextoAtual}`;
      } else {
          link.innerHTML = aulasTextos[index];
      }
      

      const textAfterLink = document.createElement('span');
      textAfterLink.innerHTML = ` : <br>${cleanedUrl}<br><br>`;

      li.appendChild(link);
      li.appendChild(textAfterLink);

      listElement.appendChild(li);
    });
  }
});
