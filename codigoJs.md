```javascript
document.addEventListener('DOMContentLoaded', () => {
  // Seleciona elementos do DOM e inicializa variáveis de estado
  const menu = document.getElementById('menu');
  const listaMenus = document.getElementById('lista-menus');
  const btnCardProjetcts = document.querySelectorAll('.btn-project');
  const imageCardsProjects = document.querySelectorAll('.group-image-project');
  let menuVisible = false;  // Controla a visibilidade do menu
  let lenguageEnglis = true;  // Define o idioma padrão como inglês
  let themaEscuro = true;  // Define o tema padrão como escuro
  const arraySkills = document.querySelectorAll('.skill-element');
  const paragrafo = document.querySelector('.textSkills');
  const btnIdioma = document.getElementById('btn-idioma');
  const btnTheme = document.getElementById('btn-tema');
  const arrayMenus = document.querySelectorAll('.itemsMenu-header');

  // Obtém a linguagem do usuário a partir do localStorage ou do navegador
  const userLanguage = localStorage.getItem('language') || navigator.language;

  // Adiciona evento de clique para os botões de projetos
  document.querySelectorAll('.btn-project').forEach(element => {
    element.addEventListener('click', () => {
      // Captura o título, tecnologias, classes e descrição do projeto
      const title = element.parentNode.querySelector('.title-project').textContent;
      const tecnologies = element.parentNode.querySelector('.description-project').textContent.replace('Stack:', '').split('|').map(tec => tec.trim());
      const classes = element.className.split(' ');
      let description = '';
      let textsOption = '';

      // Verifica o idioma selecionado e ajusta as informações do projeto
      if (lenguageEnglis) {
        description = descriptionsProjects[classes[1]].en;
        textsOption = ['Technologies:', 'See in:'];
      } else {
        description = descriptionsProjects[classes[1]].pt;
        textsOption = ['Técnologias:', 'Ver em:']
      }
      
      const urlGit = descriptionsProjects[classes[1]].urlGit;
      const urlDeploy = descriptionsProjects[classes[1]].urlDeploy;

      // Exibe o diálogo com as informações do projeto
      dialogProject(title, description, tecnologies, urlGit, urlDeploy, textsOption);
    });
  });

  // Adiciona evento de clique para fechar as opções de projeto
  document.querySelector('.close-options').addEventListener('click', (event) => {
    event.preventDefault();
    document.body.style.overflow = 'auto';
    document.querySelector('.group-project-options-box').style.display = 'none';
  });

  // Adiciona evento de clique para mudar o tema entre claro e escuro
  btnTheme.addEventListener('click', (event) => {
    event.preventDefault();
    if (themaEscuro) {
      themeLight();  // Aplica tema claro
      themaEscuro = !themaEscuro;
      if (window.innerWidth <= 896) {
        closedMenu(listaMenus);
        menuVisible = !menuVisible;
      }
    } else {
      themeDark();  // Aplica tema escuro
      themaEscuro = !themaEscuro;
      if (window.innerWidth <= 896) {
        closedMenu(listaMenus);
        menuVisible = !menuVisible;
      }
    }
  });

  // Verifica a linguagem do usuário e ajusta o site para português ou inglês
  if (userLanguage.startsWith('pt')) {
    portugues();
    lenguageEnglis = !lenguageEnglis;
  } else {
    englis();
    lenguageEnglis = !lenguageEnglis;
  }

  // Adiciona eventos de clique nos itens do menu para esconder o menu após a seleção
  arrayMenus.forEach((element) => {
    element.addEventListener('click', () => {
      if (window.innerWidth <= 986) {
        closedMenu(listaMenus);
        menuVisible = !menuVisible;
      }
    })
  });

  // Define o texto do parágrafo de habilidades baseado no idioma selecionado
  if (lenguageEnglis) {
    document.querySelector('.textSkills').innerHTML = '*Hover your mouse over the skills to check their descriptions*';
  } else {
    document.querySelector('.textSkills').innerHTML = '*Passe o mouse sobre as habilidades para verificar suas descrições*';
  }

  // Adiciona evento de clique para alternar o idioma do site
  btnIdioma.addEventListener('click', (event) => {
    event.preventDefault();

    if (lenguageEnglis) {
      portugues();
      lenguageEnglis = !lenguageEnglis;
      if (window.innerWidth <= 896) {
        closedMenu(listaMenus);
        menuVisible = !menuVisible;
      }
    } else {
      englis();
      lenguageEnglis = !lenguageEnglis;
      if (window.innerWidth <= 896) {
        closedMenu(listaMenus);
        menuVisible = !menuVisible;
      }
    }
  });

  // Adiciona eventos para exibir descrições de habilidades ao passar o mouse
  if (window.innerWidth > 896) {
    arraySkills.forEach((element) => {
      element.addEventListener('mouseover', () => {
        const classesSkills = element.className.split(' ');

        // Verifica se há uma descrição para a habilidade e a exibe
        if (classesSkills[1] in descriptionSkills) {
          if (lenguageEnglis) {
            if (themaEscuro) {
              paragrafo.innerHTML = descriptionSkills[classesSkills[1]].en;
              paragrafo.querySelectorAll('strong').forEach(element => {
                element.style.color = 'rgb(212, 212, 212)';
                element.style.fontWeight = 'bolder';
              });
            } else {
              paragrafo.innerHTML = descriptionSkills[classesSkills[1]].en;
              paragrafo.querySelectorAll('strong').forEach(element => {
                element.style.color = 'rgb(59, 59, 59)';
                element.style.fontWeight = 'bolder';
              });
            }
          } else {
            if (themaEscuro) {
              paragrafo.innerHTML = descriptionSkills[classesSkills[1]].pt;
              paragrafo.querySelectorAll('strong').forEach(element => {
                element.style.color = 'rgb(212, 212, 212)';
                element.style.fontWeight = 'bolder';
              });
            } else {
              paragrafo.innerHTML = descriptionSkills[classesSkills[1]].pt;
              paragrafo.querySelectorAll('strong').forEach(element => {
                element.style.color = 'rgb(59, 59, 59)';
              });
            }
          }
        }
      });

      // Restaura o texto padrão ao remover o mouse da habilidade
      element.addEventListener('mouseout', () => {
        if (lenguageEnglis) {
          paragrafo.innerHTML = '*Hover your mouse over the skills to check their descriptions*';
        } else {
          paragrafo.innerHTML = '*Passe o mouse sobre as habilidades para verificar suas descrições*';
        }
      });
    });
  }

  // Adiciona eventos para aumentar o zoom das imagens dos projetos ao passar o mouse
  imageCardsProjects.forEach(element => {
    element.addEventListener('mouseover', () => {
      element.style.backgroundSize = '130%';
    });
  });

  // Reduz o zoom das imagens dos projetos ao remover o mouse
  imageCardsProjects.forEach(element => {
    element.addEventListener('mouseout', () => {
      element.style.backgroundSize = '115%';
    });
  });

  // Adiciona eventos para aumentar o zoom das imagens dos cards de projetos ao passar o mouse
  btnCardProjetcts.forEach(element => {
    element.addEventListener('mouseover', () => {
      const cardItem = element.parentElement;
      const imagemCardItem = cardItem.firstElementChild;
      imagemCardItem.style.backgroundSize = '130%';
    });
  });

  // Reduz o zoom das imagens dos cards de projetos ao remover o mouse
  btnCardProjetcts.forEach(element => {
    element.addEventListener('mouseout', () => {
      const cardItem = element.parentElement;
      const imagemCardItem = cardItem.firstElementChild;
      imagemCardItem.style.backgroundSize = '115%';
    });
  });

  // Alterna a visibilidade do menu ao clicar no botão de menu
  menu.addEventListener('click', () => {
    menuVisible ? closedMenu(listaMenus) : openMenu(listaMenus, themaEscuro);
    menuVisible = !menuVisible;
  });

  // Ajusta a visibilidade do menu e o comportamento do overflow da página ao redimensionar a janela
  window.addEventListener('resize', () => {
    if (window.innerWidth > 896) {
      document.body.style.overflow = 'auto';
      listaMenus.style.visibility = 'visible';
      listaMenus.style.backgroundColor = 'transparent'
    } else {
      menuVisible = false;
      closedMenu(listaMenus);
    }
  });
});
```
