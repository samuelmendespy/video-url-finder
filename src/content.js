function captureOnClickAttributes() {
  const sections = document.querySelectorAll('li.section');
  let videoUrls = [];
  let aulasTextos = [];

  sections.forEach(section => {
    const sectionId = section.id;
    const sectionNumber = sectionId.match(/section-(\d+)/)?.[1]; 

    if (sectionNumber) {
      const videoDivs = section.querySelectorAll('div.video');
      
      videoDivs.forEach((div, index) => {
        const onclickAttr = div.getAttribute('onclick');
        if (onclickAttr) {
          const match = onclickAttr.match(/loadVideo\(this, '([^']+)'/);
          if (match && match[1]) {
            videoUrls.push(match[1]);
          }
        }

        const letra = String.fromCharCode(65 + index);
        const aulaTexto = `Aula ${sectionNumber}.${letra}`;
        aulasTextos.push(aulaTexto);
      });
    }
  });

  if (aulasTextos.length > 0) {
    console.log('Primeiro item de aulasTextos:', aulasTextos[0]);
  } else {
    console.log('Nenhum título encontrado.');
  }

  chrome.storage.local.set({ videoUrls: videoUrls, aulasTextos: aulasTextos }, () => {
    console.log('URLs dos vídeos e textos salvos!');
  });
}

window.addEventListener('load', captureOnClickAttributes);