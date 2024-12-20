function captureOnClickAttributes() {
  const videoDivs = document.querySelectorAll('div.video');
  let onclickList = [];

  videoDivs.forEach(div => {
    const onclickAttr = div.getAttribute('onclick');
    if (onclickAttr) {
      onclickList.push(onclickAttr);
    }
  });

  chrome.storage.local.set({ videoOnClicks: onclickList }, () => {
  });
}

window.addEventListener('load', captureOnClickAttributes);
