document.addEventListener('DOMContentLoaded', () => {
  let menuVisible = false;
  let languageEnglish = false;

  const menu = document.getElementById('menu');
  const listaMenus = document.getElementById('lista-menus');
  const btnCardProjetcts = document.querySelectorAll('.btn-project');
  const imageCardsProjects = document.querySelectorAll('.group-image-project');


  imageCardsProjects.forEach(element => {
    element.addEventListener('mouseover', () => {
      element.style.backgroundSize = '130%';
    });
  })

  imageCardsProjects.forEach(element => {
    element.addEventListener('mouseout', () => {
      element.style.backgroundSize = '115%';
    });
  })

  btnCardProjetcts.forEach(element => {
    element.addEventListener('mouseover', () => {
      const cardItem = element.parentElement;
      const imagemCardItem = cardItem.firstElementChild;
      imagemCardItem.style.backgroundSize = '130%';
    })
  })

  btnCardProjetcts.forEach(element => {
    element.addEventListener('mouseout', () => {
      const cardItem = element.parentElement;
      const imagemCardItem = cardItem.firstElementChild;
      imagemCardItem.style.backgroundSize = '115%';
    })
  })

  menu.addEventListener('click', () => {
    menuVisible ? closedMenu(listaMenus) : openMenu(listaMenus);
    menuVisible = !menuVisible;
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 896) {
      document.body.style.overflow = 'auto';
      listaMenus.style.visibility = 'visible';
    } else {
      menuVisible = false;
      closedMenu(listaMenus);
    }
  })

});

function closedMenu(menu) {
  menu.style.visibility = 'hidden';
  document.body.style.overflow = 'auto';
}

function openMenu(menu) {
  menu.style.visibility = 'visible';
  document.body.style.overflow = 'hidden';
}


