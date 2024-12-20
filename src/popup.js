chrome.storage.local.get('videoOnClicks', (data) => {
  const listElement = document.getElementById('onclickList');
  const onclickList = data.videoOnClicks || [];

  if (onclickList.length === 0) {
    listElement.innerHTML = '<li>Nenhum atributo onclick encontrado.</li>';
  } else {
    onclickList.forEach(click => {
      const li = document.createElement('li');
      li.textContent = click;
      listElement.appendChild(li);
    });
  }
});
