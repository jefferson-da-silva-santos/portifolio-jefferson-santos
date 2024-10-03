const descriptionSkills = {
  html: {
    en: `I use <strong>HTML5</strong> technology to structure my web pages, always prioritizing the correct and <strong>semantic</strong> use of its features, avoiding bad programming practices. I value exploring the <strong>semantic tags</strong> of the HTML5 language to ensure that the structure of projects is understandable for both the browser and users. Additionally, I pay special attention to using <strong>metadata</strong> to define crucial information and ensure the project is <strong>accessible</strong> to everyone.`,
    pt: `Utilizo a tecnologia <strong>HTML5</strong> para estruturar minhas páginas web, sempre priorizando o uso correto e <strong>semântico</strong> das suas funcionalidades, evitando más práticas de programação. Valorizo a exploração das <strong>tags semânticas</strong> da linguagem HTML5 para garantir que a estrutura dos projetos seja compreensível tanto para o navegador quanto para os usuários. Além disso, dedico atenção especial ao uso de <strong>metadados</strong> para definir informações cruciais e garantir que o projeto seja <strong>acessível</strong> a todos.`
  },
  css: {
    en: `I use <strong>CSS3</strong> technology to style my web pages, always focusing on the efficient and modern use of its resources, avoiding bad design practices. I value the exploration of advanced properties, such as <strong>Flexbox</strong> and <strong>Grid Layout</strong>, to create <strong>responsive</strong> and well-structured layouts, ensuring that the visual presentation of projects is harmonious and functional. Additionally, I pay special attention to <strong>accessibility</strong> and code <strong>optimization</strong>, ensuring that the design is accessible to everyone and performs well on different devices.`,
    pt: `Utilizo a tecnologia <strong>CSS3</strong> para estilizar minhas páginas web, sempre focando no uso eficiente e moderno dos seus recursos, evitando más práticas de design. Valorizo a exploração de propriedades avançadas, como <strong>Flexbox</strong> e <strong>Grid Layout</strong>, para criar layouts <strong>responsivos</strong> e bem estruturados, garantindo que a apresentação visual dos projetos seja harmoniosa e funcional. Além disso, dou especial atenção à <strong>acessibilidade</strong> e à <strong>otimização</strong> do código, assegurando que o design seja acessível a todos e performe bem em diferentes dispositivos.`
  },
  javascript: {
    en: `I use <strong>JavaScript</strong> to develop the <strong>interactivity</strong> and <strong>logic</strong> of my web pages, always focusing on <strong>clean and efficient coding</strong> practices. I value using modern language features like <strong>DOM manipulation</strong>, <strong>events, and APIs</strong> to create dynamic and engaging user experiences. Furthermore, I pay special attention to code optimization and <strong>accessibility</strong>, ensuring that features are accessible to all users and browsers.`,
    pt: `Utilizo <strong>JavaScript</strong> para desenvolver a <strong>interatividade</strong> e a <strong>lógica</strong> das minhas páginas web, sempre focando em práticas de <strong>codificação limpas</strong> e eficientes. Valorizo o uso de recursos modernos da linguagem, como <strong>manipulação de DOM</strong>, <strong>eventos e APIs</strong>, para criar experiências de usuário dinâmicas e envolventes. Além disso, dou especial atenção à otimização do código e à <strong>acessibilidade</strong>, assegurando que as funcionalidades sejam acessíveis a todos os usuários e navegadores.`
  },
  nodejs: {
    en: `I use <strong>Node.js</strong> to develop the <strong>backend</strong> of my applications, with an emphasis on creating efficient and scalable <strong>RESTful APIs</strong>. With <strong>Express</strong>, I structure the server in an organized and modular way, applying good coding practices to guarantee the <strong>maintainability</strong> and <strong>security</strong> of the code. I value the implementation of robust functionalities, such as <strong>authentication</strong>, data <strong>validation</strong> and <strong>route manipulation</strong>, always seeking to optimize the performance and scalability of APIs.`,
    pt: `Utilizo <strong>Node.js</strong> para desenvolver o <strong>backend</strong> das minhas aplicações, com ênfase na criação de <strong>APIs RESTful</strong> eficientes e escaláveis. Com o <strong>Express</strong>, estruturo o servidor de forma organizada e modular, aplicando boas práticas de codificação para garantir a <strong>manutenibilidade</strong> e a <strong>segurança</strong> do código. Prezo pela implementação de funcionalidades robustas, como <strong>autenticação</strong>, <strong>validação</strong> de dados e <strong>manipulação de rotas</strong>, buscando sempre otimizar a performance e a escalabilidade das APIs.`
  },
  react: {
    en: `I'm studying <strong>React</strong> to improve my skills in developing dynamic and reactive <strong>user interfaces</strong>. During learning, I'm focusing on understanding fundamental concepts such as <strong>components</strong>, <strong>state</strong>, and <strong>props</strong>, as well as applying good code organization and reuse practices. Although I'm still deepening my knowledge, I already value the flexibility and power of React to create modern, interactive web applications.`,
    pt: `Estou estudando <strong>React</strong> para aprimorar minhas habilidades no desenvolvimento de <strong>interfaces de usuário</strong> dinâmicas e reativas. Durante o aprendizado, estou focando na compreensão dos conceitos fundamentais, como <strong>componentes</strong>, <strong>estado</strong> e <strong>props</strong>, bem como na aplicação de boas práticas de organização e reutilização de código. Embora ainda esteja aprofundando meus conhecimentos, já valorizo a flexibilidade e o poder do React para criar aplicações web modernas e interativas.`
  },
  bootstrap: {
    en: ` UI use <strong>Bootstrap</strong> to develop <strong>responsive</strong> and attractive web interfaces quickly and efficiently. I take advantage of the <strong>components</strong> and <strong>utility classes</strong> provided by the <strong>framework</strong> to create consistent and stylized layouts, ensuring that the application adapts well to different screen sizes and devices. I value the integration of Bootstrap tools to simplify the design and implementation of elements such as buttons, forms and grids, etc.`,
    pt: `Utilizo o <strong>Bootstrap</strong> para desenvolver interfaces web <strong>responsivas</strong> e atraentes de forma rápida e eficiente. Aproveito os <strong>componentes</strong> e as <strong>classes utilitárias</strong> fornecidos pelo <strong>framework</strong> para criar layouts consistentes e estilizados, garantindo que a aplicação se adapte bem a diferentes tamanhos de tela e dispositivos. Valorizo a integração das ferramentas do Bootstrap para simplificar o design e a implementação de elementos como botões, formulários e grids, e etc.`
  },
  taiwind: {
    en: `I use <strong>Tailwind</strong> CSS to efficiently create highly customizable and <strong>responsive</strong> web interfaces. I take advantage of Tailwind's utilitarian approach to apply styles <strong>directly to HTML elements</strong>, which allows for rapid design iteration and greater <strong>flexibility</strong> in building layouts. I value Tailwind's ability to create cohesive and adaptable interfaces, using its utility classes to adjust spacing, colors, and typography in a granular way.`,
    pt: `Utilizo o <strong>Tailwind</strong> CSS para criar interfaces web altamente personalizáveis e <strong>responsivas</strong> com eficiência. Aproveito a abordagem utilitária do Tailwind para aplicar estilos <strong>diretamente nos elementos HTML</strong>, o que permite uma rápida iteração no design e uma maior <strong>flexibilidade</strong> na construção de layouts. Valorizo a capacidade do Tailwind de criar interfaces coesas e adaptáveis, utilizando suas classes de utilidades para ajustar espaçamentos, cores e tipografia de forma granular.`
  },
  sql: {
    en: `I use <strong>SQL</strong> to manage and manipulate data in relational databases. I value building well-designed database structures, with an emphasis on <strong>normalization</strong> and <strong>referential integrity</strong>, to ensure the consistency and efficiency of information. I take advantage of the SQL language to <strong>create</strong>, <strong>read</strong>, <strong>update</strong> and <strong>delete</strong> data <strong>(CRUD)</strong>, in addition to implementing <strong>joins</strong>, aggregations and subqueries to extract valuable insights.`,
    pt: `Utilizo <strong>SQL</strong> para gerenciar e manipular dados em bancos relacionais. Valorizo a construção de estruturas de banco de dados bem projetadas, com ênfase em <strong>normalização</strong> e <strong>integridade referencial</strong>, para garantir a consistência e a eficiência das informações. Aproveito a linguagem SQL para <strong>criar</strong>, <strong>ler</strong>, <strong>atualizar</strong> e <strong>excluir</strong> dados <strong>(CRUD)</strong>, além de implementar <strong>joins</strong>, agregações e subconsultas para extrair insights valiosos.`
  },
  mysql: {
    en: `I use <strong>MySQL</strong> to manage and manipulate data in <strong>relational databases</strong> with high performance and reliability. I value creating efficient database <strong>schemas</strong> and running SQL queries to perform <strong>CRUD</strong> operations and <strong>data analysis</strong>. I take advantage of MySQL features, such as <strong>indexes</strong> and <strong>query optimization</strong>, to improve performance and ensure data integrity.`,
    pt: `Utilizo <strong>MySQL</strong> para gerenciar e manipular dados em <strong>bancos relacionais</strong> com alta performance e confiabilidade. Valorizo a criação de <strong>esquemas</strong> de banco de dados eficientes e a execução de consultas SQL para realizar operações <strong>CRUD</strong> e <strong>análise de dados</strong>. Aproveito os recursos do MySQL, como <strong>índices</strong> e <strong>otimização de consultas</strong>, para melhorar a performance e garantir a integridade dos dados.`
  },
  postgre: {
    en: `I use <strong>PostgreSQL</strong> to work with <strong>relational databases</strong>, taking advantage of its robustness and extensibility. I value creating complex data structures and using advanced SQL queries to perform sophisticated operations and gain detailed <strong>insights</strong>. I leverage PostgreSQL features such as custom data types, advanced indexes, and <strong>ACID</strong> transaction support to ensure data integrity and performance.`,
    pt: `Utilizo <strong>PostgreSQL</strong> para trabalhar com <strong>bancos de dados relacionais</strong>, aproveitando sua robustez e extensibilidade. Valorizo a criação de estruturas de dados complexas e o uso de consultas SQL avançadas para realizar operações sofisticadas e obter <strong>insights</strong> detalhados. Aproveito as funcionalidades do PostgreSQL, como tipos de dados personalizados, índices avançados e suporte a transações ACID, para garantir a integridade e a performance dos dados.`
  },
  java: {
    en: `Currently, I'm learning how to use <strong>Java</strong> with the <strong>Spring Framework</strong> to develop the <strong>backend</strong> of my applications. My focus is on creating efficient and scalable <strong>RESTful APIs</strong>, using <strong>Spring Boot</strong> to structure the server in an organized and modular way. I seek to apply good coding practices to ensure code <strong>maintainability</strong> and <strong>security</strong>. I am dedicating myself to implementing robust functionalities, such as <strong>authentication</strong>, data <strong>validation</strong> and <strong>route</strong> <strong>manipulation</strong>, etc.`,
    pt: ` Atualmente, estou aprendendo a usar <strong>Java</strong> com o <strong>Spring Framework</strong> para desenvolver o <strong>backend</strong> das minhas aplicações. Meu foco está na criação de <strong>APIs RESTful</strong> eficientes e escaláveis, utilizando o <strong>Spring Boot</strong> para estruturar o servidor de maneira organizada e modular. Busco aplicar boas práticas de codificação para garantir a <strong>manutenibilidade</strong> e <strong>segurança</strong> do código. Estou me dedicando a implementar funcionalidades robustas, como <strong>autenticação</strong>, <strong>validação</strong> de dados e <strong>manipulação</strong> de <strong>rotas</strong> e etc.`
  },
  git: {
    en: `I'm studying <strong>Git</strong> to improve my skills in <strong>version control</strong> and collaboration on development projects. I'm focusing on understanding basic concepts, such as <strong>commits</strong>, <strong>branches</strong> and <strong>merges</strong>, as well as learning how to use essential commands to manage <strong>change history</strong> and resolve conflicts. I value practice with Git to improve organization and efficiency in code development.`,
    pt: `Estou estudando <strong>Git</strong> para aprimorar minhas habilidades no <strong>controle de versão</strong> e na colaboração em projetos de desenvolvimento. Estou focando na compreensão dos conceitos básicos, como <strong>commits</strong>, <strong>branches</strong> e <strong>merges</strong>, além de aprender a utilizar comandos essenciais para <strong>gerenciar o histórico de alterações</strong> e resolver conflitos. Valorizo a prática com Git para melhorar a organização e a eficiência no desenvolvimento de código.`
  }
}

const descriptionsProjects = {
  planilhas: {
    pt: 'Jessica-planilhas é um projeto FrontEnd responsiva de vendas projetada para gerenciar e visualizar planilhas de forma eficiente e interativa. Este projeto utiliza tecnologias modernas para garantir uma experiência de usuário fluida e otimizada.',
    en: 'Jessica-spreadsheets is a responsive sales web application designed to manage and visualize spreadsheets efficiently and interactively. This project uses modern technologies to ensure a fluid and optimized user experience.',
    urlGit: 'https://github.com/jefferson-da-silva-santos/project-jessica-planilhas',
    urlDeploy: 'https://jessica-planilhas.netlify.app/'
  },
  movies: {
    pt: 'Projeto frontend FavFlix. Neste projeto, pude estar aprimorando minhas habilidades em HTML5, CSS e JavaScript, integrando a OMDb API para criar um sistema de busca de filmes por nome e ano. O layout do projeto foi inspirado na plataforma de streams Netflix, com um design moderno e responsivo, proporcionando uma experiência de navegação fluida e intuitiva para os usuários ao explorarem informações de filmes.',
    en: "FavFlix frontend project. In this project, I was able to improve my skills in HTML5, CSS and JavaScript, integrating the OMDb API to create a system for searching movies by name and year. The project's layout was inspired by the Netflix streaming platform, with a modern and responsive design, providing a fluid and intuitive navigation experience for users when exploring movie information.",
    urlGit: '',
    urlDeploy: ''
  },
  login: {
    pt: 'Projeto frontend de formulário de login e cadastro moderno e minimalista. Neste projeto, pude estar aprimorando minhas habilidades em HTML5, CSS e JavaScript, utilizando ícones do Bootstrap para melhorar a interface. A estrutura foi desenvolvida de forma responsiva e focada em uma experiência de usuário simplificada, com validações dinâmicas em JavaScript e otimização SEO para garantir melhor visibilidade nos motores de busca.',
    en: 'Modern and minimalist frontend design of a login and registration form. In this project, I was able to improve my skills in HTML5, CSS and JavaScript, using Bootstrap icons to improve the interface. The structure was developed in a responsive way and focused on a simplified user experience, with dynamic validations in JavaScript and SEO optimization to ensure better visibility in search engines.',
    urlGit: '',
    urlDeploy: ''
  },
  calculator: {
    pt: 'Projeto frontend de calculadora responsiva. Neste projeto, pude estar aprimorando minhas habilidades em JavaScript e trabalhando com funcionalidades como soma, subtração, divisão, e cálculos de porcentagem.',
    en: 'Responsive calculator frontend design. In this project, I was able to hone my JavaScript skills and work with features such as addition, subtraction, division, and percentage calculations.',
    urlGit: 'https://github.com/jefferson-da-silva-santos/calculadora',
    urlDeploy: ''
  },
  calculatorIMC: {
    pt: 'Projeto frontend de calculadora de IMC. Neste projeto, pude estar aprimorando minhas habilidades em HTML5, CSS e JavaScript para criar uma calculadora de Índice de Massa Corporal (IMC) responsiva e dinâmica. O sistema calcula o IMC e exibe mensagens personalizadas de acordo com o resultado, proporcionando uma experiência interativa ao usuário. ',
    en: 'BMI calculator frontend project. In this project, I was able to improve my HTML5, CSS and JavaScript skills to create a responsive and dynamic Body Mass Index (BMI) calculator. The system calculates the BMI and displays personalized messages according to the result, providing an interactive experience to the user.',
    urlGit: 'https://github.com/jefferson-da-silva-santos/calculadora-de-imc',
    urlDeploy: ''
  },
  previsaoTempo: {
    pt: 'Projeto frontend de previsão do tempo. Neste projeto, pude estar aprimorando minhas habilidades em JavaScript e trabalhando com a integração da API OpenWeather para exibir informações de previsão do tempo em tempo real. Além disso, utilizei HTML5 e CSS para estruturar e estilizar a interface de forma responsiva, garantindo uma boa experiência do usuário em diferentes dispositivos.',
    en: 'Weather forecast frontend project. In this project, I was able to improve my JavaScript skills and work with the OpenWeather API integration to display real-time weather forecast information. In addition, I used HTML5 and CSS to structure and style the interface in a responsive way, ensuring a good user experience across different devices.',
    urlGit: '',
    urlDeploy: ''
  }
};

let isMenuVisible = false;
let isLanguageEnglish = false;
let isThemaLigth = false;


function toogleVariable(variable) {
  return !variable;
}

document.addEventListener('DOMContentLoaded', () => {
  const listaMenus = document.getElementById('lista-menus');
  const btnCardProjetcts = getElement('.btn-project', true);
  const imageCardsProjects = getElement('.group-image-project', true);
  const arraySkills = getElement('.skill-element', true);
  const textSkills = getElement('.textSkills');
  const btnLanguage = document.getElementById('btn-idioma');
  const btnTheme = document.getElementById('btn-tema');
  const itemsMenu = getElement('.itemsMenu-header', true);
  const userLanguage = localStorage.getItem('language') || navigator.language;
  const btnMenu = getElement('.select-menu-humburguer');

  const observations = ['left', 'right', 'bottom', 'p1', 'p2', 'p3', 'p4', 'p5', 'p6', 's1', 's2', 's3'];
  observations.forEach(obs => {
    createObservation(`.hidden-scroll-${obs}`, `show-scroll-${obs}`);
  });

  getElement('.btn-project', true).forEach(element => {
    element.addEventListener('click', () => {
      const title = element.parentNode.querySelector('.title-project').textContent;
      const tecnologies = element.parentNode.querySelector('.description-project').textContent.replace('Stack:', '').split('|').map(tec => tec.trim());
      const classes = element.className.split(' ');
      let description = '';
      let textsOption = '';
      if (isLanguageEnglish) {
        description = descriptionsProjects[classes[1]].en;
        textsOption = ['Technologies:', 'See in:'];
      } else {
        description = descriptionsProjects[classes[1]].pt;
        textsOption = ['Técnologias:', 'Ver em:']
      }
      const urlGit = descriptionsProjects[classes[1]].urlGit;
      const urlDeploy = descriptionsProjects[classes[1]].urlDeploy;

      dialogProject(title, description, tecnologies, urlGit, urlDeploy, textsOption);
    });
  });


  getElement('.close-options').addEventListener('click', (event) => {
    event.preventDefault();
    closeOptionBox();
  });

  getElement('.btn-options-git').addEventListener('click', (event) => {
    closeOptionBox();
  });

  getElement('.btn-options-deploy').addEventListener('click', (event) => {
    closeOptionBox();
  })


  if (userLanguage.startsWith('pt')) {
    portuguese();
    isLanguageEnglish = toogleVariable(isLanguageEnglish);
  } else {
    english();
    isLanguageEnglish = toogleVariable(isLanguageEnglish);
  }

  controlTextByLanguage(
    isLanguageEnglish,
    '.textSkills',
    '*Hover your mouse over the skills to check their descriptions*',
    '*Passe o mouse sobre as habilidades para verificar suas descrições*'
  );


  //Código para fazer com que o menu se ajuste de mobile para desktop de acordo com o tamanho da tela
  if (window.innerWidth > 896) {
    arraySkills.forEach((element) => {
      element.addEventListener('mouseover', () => {
        const classesSkills = element.className.split(' ');

        if (classesSkills[1] in descriptionSkills) {
          if (isLanguageEnglish) {
            handleTextSillsHover(isThemaDark, textSkills, classesSkills, 'en', 'rgb(212, 212, 212)', 'rgb(59, 59, 59)');
          } else {
            handleTextSillsHover(isThemaDark, textSkills, classesSkills, 'pt', 'rgb(212, 212, 212)', 'rgb(59, 59, 59)');
          }
        }
      });

      element.addEventListener('mouseout', () => {
        controlTextByLanguage(
          isLanguageEnglish,
          '.textSkills',
          '*Hover your mouse over the skills to check their descriptions*',
          '*Passe o mouse sobre as habilidades para verificar suas descrições*'
        )
      });
    });
  }

  handleHoverCardsProject(false, imageCardsProjects, 'mouseover', '130%');
  handleHoverCardsProject(false, imageCardsProjects, 'mouseout', '115%');
  handleHoverCardsProject(true, btnCardProjetcts, 'mouseover', '130%');
  handleHoverCardsProject(true, btnCardProjetcts, 'mouseout', '115%');

  /* Abrindo o menu humburguer quando o botão for clicado */
  btnMenu.addEventListener('click', () => {
    listaMenus.style.display = isMenuVisible ? 'none' : 'flex';
    document.body.style.overflow = isMenuVisible ? 'auto' : 'hidden';
    getElement('.linha-menu-humburguer', true).forEach(line => {
      line.style.backgroundColor = !isMenuVisible ? 'aqua' : isThemaLigth ? 'black' : 'white';
    });
    isMenuVisible = toogleVariable(isMenuVisible);
  });


  /* Fechando o menu sempre que o tamanho da janela aumentar ou diminuir */
  window.addEventListener('resize', () => {
    if (window.innerWidth > 896) {
      isMenuVisible = false;
      document.body.style.overflow = 'auto';
      listaMenus.style.display = 'flex';
      getElement('.linha-menu-humburguer', true).forEach(line => {
        line.style.backgroundColor = isThemaLigth ? 'black' : 'white';
      });
    } else {
      isMenuVisible = false;
      document.body.style.overflow = 'auto';
      listaMenus.style.display = 'none';
      getElement('.linha-menu-humburguer', true).forEach(line => {
        line.style.backgroundColor = isThemaLigth ? 'black' : 'white';
      });
    }
  });

  btnTheme.addEventListener('click', event => {
    event.preventDefault();
    if (isMenuVisible) {
      listaMenus.style.display = 'none';
      document.body.style.overflow = 'auto';
      getElement('.linha-menu-humburguer', true).forEach(line => {
        line.style.backgroundColor = isThemaLigth ? 'black' : 'white';
      });
      isMenuVisible = toogleVariable(isMenuVisible);
    }

    if (isThemaLigth) {
      themeDark();
      isThemaLigth = toogleVariable(isThemaLigth);
    } else {
      themeLight();
      isThemaLigth = toogleVariable(isThemaLigth);
    }

  });

  // itemsMenu.forEach(itemMenu => {
  //   itemMenu.addEventListener('click', () => {
  //     if (isMenuVisible) {
  //       getElement('.linha-menu-humburguer', true).forEach(line => {
  //         line.style.backgroundColor = isThemaDark ? 'white' : 'black';
  //       });
  //       openCloseMenu(listaMenus, false);
  //     }
  //   });
  // });


  // btnMenu.addEventListener('click', () => {
  //   if (!isMenuVisible) {
  //     openCloseMenu(listaMenus);
  //   } else {
  //     openCloseMenu(listaMenus, false);
  //   }
  // });

  // btnTheme.addEventListener('click', event => {
  //   event.preventDefault();

  //   if (isThemaDark) {
  //     isThemaDark = toogleVariable(isThemaDark);
  //     if (isMenuVisible) {
  //       openCloseMenu(listaMenus, false);
  //     }
  //     themeLight();
  //   } else {
  //     isThemaDark = toogleVariable(isThemaDark);
  //     if (isMenuVisible) {
  //       openCloseMenu(listaMenus, false);
  //     }
  //     themeDark();
  //   }
  // });

  // btnLanguage.addEventListener('click', event => {
  //   event.preventDefault();

  //   if (isLanguageEnglish) {
  //     portuguese();
  //     isLanguageEnglish = toogleVariable(isLanguageEnglish);
  //     if (isMenuVisible) {
  //       openCloseMenu(listaMenus, false);
  //       ajustColorMenu();
  //     }
  //   } else {
  //     english();
  //     isLanguageEnglish = toogleVariable(isLanguageEnglish);
  //     if (isMenuVisible) {
  //       openCloseMenu(listaMenus, false);
  //       ajustColorMenu();
  //     }
  //   }
  // });

  // window.addEventListener('resize', () => {
  //   if (window.innerWidth > 896) {
  //     listaMenus.style.visibility = 'visible';
  //     document.body.style.overflow = 'auto';
  //     listaMenus.style.backgroundColor = isThemaDark ? 'black' : 'white';
  //     isMenuVisible = false;
  //   } else {
  //     listaMenus.style.visibility = 'hidden';
  //     ajustColorMenu();
  //   }
  // });

});

// function ajustColorMenu() {
//   getElement('.linha-menu-humburguer', true).forEach(line => {
//     line.style.backgroundColor = isThemaDark ? 'white' : 'black';
//   });
// }

// function openCloseMenu(lista, open = true) {
//   isMenuVisible = toogleVariable(isMenuVisible);
//   document.body.style.overflow = open ? 'hidden' : 'auto';
//   lista.style.visibility = open ? 'visible' : 'hidden';
//   lista.style.backgroundColor = isThemaDark ? 'black' : 'white';
//   getElement('.linha-menu-humburguer', true).forEach(line => {
//     line.style.backgroundColor = open ? 'aqua' : isThemaDark ? 'white' : 'black';
//   });
// }


function handleTextSillsHover(isTheme, element, array, lenguage, color1, color2) {
  if (isTheme) {
    element.innerHTML = descriptionSkills[array[1]][lenguage];
    element.querySelectorAll('strong').forEach(element => {
      element.style.color = color1;
      element.style.fontWeight = 'bolder';
    });
  } else {
    element.innerHTML = descriptionSkills[array[1]][lenguage];
    element.querySelectorAll('strong').forEach(element => {
      element.style.color = color2;
      element.style.fontWeight = 'bolder';
    });
  }
}

function handleHoverCardsProject(isBtn, item, event, value) {
  if (isBtn) {
    item.forEach(element => {
      element.addEventListener(event, () => {
        const cardItem = element.parentElement;
        const imagemCardItem = cardItem.firstElementChild;
        imagemCardItem.style.backgroundSize = value;
      });
    });
  } else {
    item.forEach(element => {
      element.addEventListener(event, () => {
        element.style.backgroundSize = value;
      });
    });
  }
}

function dialogProject(title, description, technologies, urlGit, urlDeploy, texts) {
  document.body.style.overflow = 'hidden';
  getElement('.description-option-project').textContent = description;
  getElement('.group-project-options-box').style.display = 'flex';
  getElement('.name-project-option').textContent = title;
  getElement('.btn-options-git').setAttribute('href', urlGit)
  getElement('.btn-options-deploy').setAttribute('href', urlDeploy)
  getElement('.description-option-project').textContent = description;
  const listTec = getElement('.list-options-box-tec');
  listTec.innerHTML = '';
  technologies.forEach(element => {
    const newLi = document.createElement('li');
    newLi.textContent = element;
    listTec.appendChild(newLi);
  });
  getElement('.text-tecnologias-options').textContent = texts[0];
  getElement('.text-see-in-options').textContent = texts[1];
}

function portuguese() {
  getElement('.btn-options-deploy').innerHTML = '<i class="bi bi-box-arrow-up-right"></i> Visitar';
  //icone idioma
  getElement('.icon-idioma').setAttribute('src', 'src/img/brasil.webp')
  // navegação
  const arrayMenusPortugues = ['inicio', 'sobre', 'habilidades', 'projetos', 'serviços', 'contato'];
  const arrayItensMenu = getElement('.itemsMenu-header', true);
  arrayItensMenu.forEach((element, index) => {
    element.textContent = arrayMenusPortugues[index];
  });
  // sobre
  getElement('.titleSobre').innerHTML = '&#8249; <span class="letraMonoton">S</span>obre &#8260; &#8250';
  const textsSobreArray = ['Meu nome é <strong>Jefferson Santos</strong>, e sou um entusiasta de tecnologia que decidiu seguir a carreira de programação. Nos últimos <strong>quatro anos</strong>, tenho me dedicado a compreender as principais tecnologias do mercado e a aplicar <strong>metodologias ágeis de desenvolvimento</strong>.', 'Concluí um curso técnico em <strong>Desenvolvimento de Sistemas (DS)</strong> com foco em <strong>desenvolvimento Full Stack</strong>. Desde então, trabalhei em projetos como freelancer e contribuí para projetos de código aberto, aprimorando continuamente minhas habilidades e experiência na área. (Eu amo café)'];
  const arrayTextSobre = getElement('.textSobre', true);
  arrayTextSobre.forEach((element, index) => {
    element.innerHTML = textsSobreArray[index];
  })
  // skills
  getElement('.titleSkills').innerHTML = '&#8249; <span class="letraMonoton">H</span>abilidades &#8260; &#8250;'
  getElement('.textSkills').innerHTML = '*Passe o mouse sobre as habilidades para verificar suas descrições*';
  // projetos
  getElement('.titleProjetos').innerHTML = '&#8249; <span class="letraMonoton">P</span>rojetos &#8260; &#8250;';
  const arrayCards = getElement('.card-item', true);
  const titlesProjetctsArray = ['Jéssica Planilhas', 'API - Filmes', 'Formuláio de Login', 'Calculadora - Light Dark', 'Calculadora de IMC', 'API - Previsão do Tempo'];
  arrayCards.forEach((element, index) => {
    element.querySelector('.title-project').innerHTML = titlesProjetctsArray[index];
  });
  getElement('.btn-project', true).forEach(element => {
    element.textContent = 'Ver projeto';
  })
  // serviço
  getElement('.titleService').innerHTML = '&#8249; <span class="letraMonoton">S</span>erviços &#8260; &#8250;';
  const titlesCards = ['Criação de Sites', 'Sites Responsivos', 'Criação de APIs'];
  const descriptionsCards = ['Criação de sites personalizados, sejam pessoais ou para diversos setores de negócio', ' Todos os sites são responsivos, para melhorar ainda mais a experiência do usuário em qualquer dispositivo.', 'Criação de APIs Rest seguras e experiência de integração com bancos de dados externos.'];
  const cardsService = getElement('.card-service', true);
  cardsService.forEach((element, index) => {
    element.querySelector('.title-card-service').innerHTML = titlesCards[index];
    element.querySelector('.description-card-service').innerHTML = descriptionsCards[index];
  });
  // contato
  getElement('.titleContact').innerHTML = '&#8249; <span class="letraMonoton">C</span>ontato &#8260; &#8250;';
  const inputsPlaceholdsArray = ['Insira seu nome e sobrenome', 'Insira seu email', 'Assunto da mensagem', 'Sua mensagem...'];
  const inputsArray = getElement('.inputsFormContato', true);
  inputsArray.forEach((element, index) => {
    element.setAttribute('placeholder', inputsPlaceholdsArray[index]);
  });
  document.getElementById('enviar').setAttribute('value', 'Enviar');
}

function english() {
  getElement('.btn-options-deploy').innerHTML = '<i class="bi bi-box-arrow-up-right"></i> Visit';
  //icone idioma
  getElement('.icon-idioma').setAttribute('src', 'src/img/eua.webp');
  // navegação
  const arrayMenusPortugues = ['home', 'about', 'skills', 'projects', 'services', 'contact'];
  const arrayItensMenu = getElement('.itemsMenu-header', true);
  arrayItensMenu.forEach((element, index) => {
    element.textContent = arrayMenusPortugues[index];
  });
  // sobre
  getElement('.titleSobre').innerHTML = '&#8249; <span class="letraMonoton">A</span>bout &#8260; &#8250';
  const textsSobreArray = ['My name is <strong>Jefferson Santos</strong> and I am a technology enthusiast who decided to pursue a career in programming. Over the last <strong>four years</strong>, I have dedicated myself to understanding the main  technologies on the market and applying <strong>agile development methodologies</strong> (I&#8217;m a coffee lover).', 'I completed a technical course in <strong>Systems Development (DS)</strong> with a focus on <strong>Full Stack development</strong>. Since then, I have worked on projects as a freelancer and contributed to open source projects, continually improving my skills and experience in the field.'];
  const arrayTextSobre = getElement('.textSobre', true);
  arrayTextSobre.forEach((element, index) => {
    element.innerHTML = textsSobreArray[index];
  });
  // skills
  getElement('.titleSkills').innerHTML = '&#8249; <span class="letraMonoton">S</span>kills &#8260; &#8250;';
  getElement('.textSkills').innerHTML = '*Hover your mouse over the skills to check their descriptions*';
  // projetos
  getElement('.titleProjetos').innerHTML = '&#8249; <span class="letraMonoton">P</span>rojects &#8260; &#8250;';
  const arrayCards = getElement('.card-item', true);
  const titlesProjetctsArray = ['Jessica Spreadsheets', 'API - Movies', 'Login Form', 'Calculator - Light Dark', 'BMI Calculator', 'API - Weather Forecast'];
  arrayCards.forEach((element, index) => {
    element.querySelector('.title-project').innerHTML = titlesProjetctsArray[index];
  });
  getElement('.btn-project', true).forEach(element => {
    element.textContent = 'View project';
  });
  // serviço
  getElement('.titleService').innerHTML = '&#8249; <span class="letraMonoton">S</span>ervices &#8260; &#8250;';
  const titlesCards = ['Website Creation', 'Responsive Websites', 'Creating APIs'];
  const descriptionsCards = ['Creation of personalized websites, whether personal or for various business sectors', 'All websites are responsive, to further improve the user experience on any device.', 'Creation of secure Rest APIs, and integration with external databases experience.'];
  const cardsService = getElement('.card-service', true);
  cardsService.forEach((element, index) => {
    element.querySelector('.title-card-service').innerHTML = titlesCards[index];
    element.querySelector('.description-card-service').innerHTML = descriptionsCards[index];
  });
  // contato
  getElement('.titleContact').innerHTML = '&#8249; <span class="letraMonoton">C</span>ontact &#8260; &#8250;';
  const inputsPlaceholdsArray = ['Enter your first and last name', 'Enter your email', 'Message subject', 'Your message...'];
  const inputsArray = getElement('.inputsFormContato', true);
  inputsArray.forEach((element, index) => {
    element.setAttribute('placeholder', inputsPlaceholdsArray[index]);
  });
  document.getElementById('enviar').setAttribute('value', 'Send');
}

function themeLight() {
  //Caixa options
  getElement('.group-project-options-box').style.backgroundColor = 'rgb(255 255 255 / 55%)';
  getElement('.project-options-box').style.backgroundColor = '#ffffff';
  getElement('.project-options-box').style.boxShadow = '0px 0px 10px gray';
  getElement('.project-options-box').style.color = 'black';
  getElement('.name-project-option').style.color = '#000000';
  getElement('.name-project-option').style.textShadow = '0px 0px 5px #0000009a';
  getElement('.close-options').style.color = 'black';
  document.getElementById('btn-tema').setAttribute('src', 'src/img/modo-claro.webp');
  document.body.style.backgroundColor = '#f7f7f7';
  getElement('.logoNav').style.color = 'rgb(49, 49, 49)';
  getElement('.groupNav').style.backgroundColor = '#ffffffed';
  getElement('.groupNav').style.boxShadow = '0px 0px 8px rgba(49, 49, 49, 0.438)';
  getElement('.groupHeader-texts h1').style.color = 'rgb(49, 49, 49)';
  getElement('.titleSobre').style.color = 'rgb(49, 49, 49)';
  getElement('.groupSobre').style.backgroundColor = '#ffffff';
  getElement('.groupSobre-primary').style.color = '#1d1d1d';
  getElement('.titleSkills').style.color = 'rgb(49, 49, 49)';
  getElement('.textSkills').style.color = '#1d1d1d';
  getElement('.groupProjetos').style.backgroundColor = 'white';
  getElement('.titleProjetos').style.color = 'rgb(49, 49, 49)';
  getElement('.groupService').style.backgroundColor = '#f7f7f7';
  getElement('.titleService').style.color = 'rgb(49, 49, 49)';
  getElement('.groupContact').style.backgroundColor = 'white';
  getElement('.titleContact').style.color = 'rgb(49, 49, 49)';
  getElement('textarea').style.border = '1px solid rgb(219, 219, 219)';
  getElement('textarea').style.backgroundColor = '#eeeeee';
  getElement('textarea').style.color = 'rgb(49, 49, 49)';

  document.getElementById('lista-menus').style.backgroundColor = 'white';
  

  // Seletores querySelectorAll
  getElement('.itemsMenu-header', true).forEach(element => {
    element.classList.remove('itemsMenu-header--dark');
    element.classList.add('itemsMenu-header--ligth');
  });
  getElement('.itemsMenu-header', true).forEach(element => {
    element.style.color = 'rgb(49, 49, 49)';
  });
  document.querySelectorAll('.linha-menu-humburguer').forEach(line => {
    line.style.backgroundColor = 'white';
  })
  getElement('.linha-menu-humburguer', true).forEach(element => {
    element.style.backgroundColor = 'rgb(49, 49, 49)';
  });
  getElement('.geoupHeader-socialMediaButton', true).forEach(element => {
    element.style.backgroundColor = 'white';
    element.style.boxShadow = '0px 0px 10px rgba(128, 128, 128, 0.575)';
    element.style.color = 'rgb(49, 49, 49)';
  });
  getElement('.textSobre', true).forEach(element => {
    element.style.color = '#1d1d1d';
  });
  getElement('.skill-element', true).forEach(element => {
    element.style.backgroundColor = 'white';
    element.style.border = '1px solid #e4e4e4';
  });
  getElement('strong', true).forEach(element => {
    element.style.color = 'rgb(59, 59, 59)';
  });
  getElement('.card-item', true).forEach(element => {
    element.style.backgroundColor = '#f3f3f3';
    element.style.border = '1px solid #e2e2e2';
  });
  getElement('.title-project', true).forEach(element => {
    element.style.color = 'rgb(49, 49, 49)';
  });
  getElement('.description-project', true).forEach(element => {
    element.style.color = '#5b5b5b';
  });
  getElement('.btn-project', true).forEach(element => {
    element.style.backgroundColor = 'white';
    element.style.border = '2px solid #e9e9e9';
    element.style.color = 'rgb(49, 49, 49)';
  });
  getElement('.card-service', true).forEach(element => {
    element.style.backgroundColor = 'white';
    element.style.border = '1px solid #e2e2e2';
    element.style.transition = 'border 1s ease';
  });
  getElement('.circle-interno-servico', true).forEach(element => {
    element.style.backgroundColor = 'white';
  });
  getElement('.title-card-service', true).forEach(element => {
    element.style.color = 'rgb(49, 49, 49)';
  });
  getElement('.description-card-service', true).forEach(element => {
    element.style.color = '#1d1d1d';
  });
  getElement('input', true).forEach(element => {
    element.style.border = '1px solid rgb(219, 219, 219)';
    element.style.backgroundColor = '#eeeeee';
    element.style.color = 'rgb(49, 49, 49)';
  });
  getElement('.linhas', true).forEach(element => {
    element.style.backgroundImage = 'linear-gradient(to top, transparent 20%, #00ffff)';
  });
  getElement('.listNav > li', true).forEach(element => {
    element.style.backgroundColor = 'transparent';
  });

  // Elementos com eventos
  getElement('.itemsMenu-header', true).forEach(element => {
    element.addEventListener('mouseover', () => {
      element.style.color = 'black';
    });
    element.addEventListener('mouseout', () => {
      element.style.color = 'rgb(49, 49, 49)';
    });
  });
  getElement('.geoupHeader-socialMediaButton', true).forEach(element => {
    element.addEventListener('mouseover', () => {
      element.style.color = '#00ffff';
      element.style.boxShadow = '0px 0px 10px #00ffff';
    });
    element.addEventListener('mouseout', () => {
      element.style.color = 'rgb(49, 49, 49)';
      element.style.boxShadow = '0px 0px 10px rgba(128, 128, 128, 0.575)';
    });
  });
  getElement('.skill-element', true).forEach(element => {
    element.addEventListener('mouseover', () => {
      element.style.border = '1px solid #00ffff';
    });
    element.addEventListener('mouseout', () => {
      element.style.border = '1px solid #e4e4e4';
    });
  });
  getElement('.btn-project', true).forEach(element => {
    element.addEventListener('mouseover', () => {
      element.style.backgroundColor = 'gray';
      element.style.color = 'white';
    });
    element.addEventListener('mouseout', () => {
      element.style.backgroundColor = 'white';
      element.style.color = 'rgb(49, 49, 49)';
    });
  });
  getElement('.card-service', true).forEach(element => {
    element.addEventListener('mouseover', () => {
      element.style.border = '1px solid #00ffff';
    });
    element.addEventListener('mouseout', () => {
      element.style.border = '1px solid #e2e2e2';
    });
  });
  getElement('textarea').addEventListener('focus', () => {
    getElement('textarea').style.boxShadow = '0px 0px 8px #00ffff';
  });
  getElement('.listNav > li', true).forEach(element => {
    if (window.innerWidth < 896) {
      element.addEventListener('mouseover', () => {
        element.style.backgroundColor = 'rgb(229, 229, 229)';
      });
      element.addEventListener('mouseout', () => {
        element.style.backgroundColor = 'transparent';
      });
    }
  });
}

function themeDark() {
  document.getElementById('lista-menus').style.backgroundColor = 'white';

  getElement('.group-project-options-box').style.backgroundColor = 'rgba(0, 0, 0, 0.86)';
  getElement('.project-options-box').style.backgroundColor = '#0b0b0b';
  getElement('.project-options-box').style.boxShadow = 'none';
  getElement('.project-options-box').style.color = 'white';
  getElement('.name-project-option').style.color = '#00ffff';
  getElement('.name-project-option').style.textShadow = '0px 0px 5px #00ffff9a';
  getElement('.close-options').style.color = 'white';
  document.getElementById('btn-tema').setAttribute('src', 'src/img/modo-escuro.webp');
  document.body.style.backgroundColor = '#0f0f0f';
  getElement('.logoNav').style.color = 'white';
  getElement('.groupNav').style.backgroundColor = '#080808ed';
  getElement('.groupNav').style.boxShadow = '0px 0px 8px rgb(49, 49, 49)';
  getElement('.groupHeader-texts h1').style.color = 'white';
  getElement('.titleSobre').style.color = 'white';
  getElement('.groupSobre').style.backgroundColor = '#0b0b0b';
  getElement('.groupSobre-primary').style.color = '#f7f7f7';
  getElement('.titleSkills').style.color = 'white';
  getElement('.textSkills').style.color = '#9ca3af';
  getElement('.groupProjetos').style.backgroundColor = '#0b0b0b';
  getElement('.titleProjetos').style.color = 'white';
  getElement('.groupService').style.backgroundColor = '#0f0f0f';
  getElement('.titleService').style.color = 'white';
  getElement('.groupContact').style.backgroundColor = '#0b0b0b';
  getElement('.titleContact').style.color = 'white';
  getElement('textarea').style.border = '1px solid #00ffff';
  getElement('textarea').style.backgroundColor = '#161616';
  getElement('textarea').style.color = 'white';

  // Seletores querySelectorAll
  getElement('.itemsMenu-header', true).forEach(element => {
    element.classList.remove('itemsMenu-header--ligth');
    element.classList.add('itemsMenu-header--dark');
  });
  getElement('.itemsMenu-header', true).forEach(element => {
    element.style.color = 'white';
  });

  getElement('.geoupHeader-socialMediaButton', true).forEach(element => {
    element.style.backgroundColor = '#1d1d1d';
    element.style.boxShadow = 'none';
    element.style.color = 'white';
  });
  getElement('.textSobre', true).forEach(element => {
    element.style.color = '#9ca3af';
  });
  getElement('.skill-element', true).forEach(element => {
    element.style.backgroundColor = '#141414';
    element.style.border = '1px solid #242323';
  });
  getElement('strong', true).forEach(element => {
    element.style.color = 'rgb(212, 212, 212)';
  });
  getElement('.card-item', true).forEach(element => {
    element.style.backgroundColor = '#1d1d1d';
    element.style.border = '1px solid #1a1a1a';
  });
  getElement('.title-project', true).forEach(element => {
    element.style.color = 'white';
  });
  getElement('.description-project', true).forEach(element => {
    element.style.color = '#5b5b5b';
  });
  getElement('.btn-project', true).forEach(element => {
    element.style.backgroundColor = '#1d1d1d';
    element.style.border = '2px solid #2c2c2c';
    element.style.color = 'white';
  });
  getElement('.card-service', true).forEach(element => {
    element.style.backgroundColor = '#141414';
    element.style.border = '1px solid #1e1d1d';
    element.style.transition = 'border 1s ease';
  });
  getElement('.circle-interno-servico', true).forEach(element => {
    element.style.backgroundColor = '#0f0f0f';
  });
  getElement('.title-card-service', true).forEach(element => {
    element.style.color = 'white';
  });
  getElement('.description-card-service', true).forEach(element => {
    element.style.color = '#9ca3af';
  });
  getElement('input', true).forEach(element => {
    element.style.border = '1px solid #00ffff';
    element.style.backgroundColor = '#161616';
    element.style.color = 'white';
  });
  getElement('.linhas', true).forEach(element => {
    element.style.backgroundImage = 'linear-gradient(to top, transparent 20%, #00ffff)';
  });
  getElement('.listNav > li', true).forEach(element => {
    element.style.backgroundColor = 'transparent';
  });

  // Elementos com eventos
  getElement('.itemsMenu-header', true).forEach(element => {
    element.addEventListener('mouseover', () => {
      element.style.color = '#00ffff';
    });
    element.addEventListener('mouseout', () => {
      element.style.color = 'white';
    });
  });
  getElement('.geoupHeader-socialMediaButton', true).forEach(element => {
    element.addEventListener('mouseover', () => {
      element.style.color = '#00ffff';
      element.style.boxShadow = '0px 0px 10px #00ffff';
    });
    element.addEventListener('mouseout', () => {
      element.style.color = 'white';
      element.style.boxShadow = 'none';
      element.backgroundColor = '#1d1d1d';
    });
  });
  getElement('.skill-element', true).forEach(element => {
    element.addEventListener('mouseover', () => {
      element.style.border = '1px solid #00ffff';
    });
    element.addEventListener('mouseout', () => {
      element.style.border = '1px solid #131313';
    });
  });
  getElement('.btn-project', true).forEach(element => {
    element.addEventListener('mouseover', () => {
      element.style.backgroundColor = '#2e2e2e';
      element.style.color = 'white';
    });
    element.addEventListener('mouseout', () => {
      element.style.backgroundColor = '#1d1d1d';
      element.style.color = 'white';
    });
  });
  getElement('.card-service', true).forEach(element => {
    element.addEventListener('mouseover', () => {
      element.style.border = '1px solid #00ffff';
    });
    element.addEventListener('mouseout', () => {
      element.style.border = '1px solid #1a1a1a';
    });
  });
  getElement('textarea').addEventListener('focus', () => {
    getElement('textarea').style.boxShadow = '0px 0px 8px #00ffff';
  });
  getElement('.listNav > li', true).forEach(element => {
    if (window.innerWidth < 896) {
      element.addEventListener('mouseover', () => {
        element.style.backgroundColor = 'rgb(45, 45, 45)';
      });
      element.addEventListener('mouseout', () => {
        element.style.backgroundColor = 'transparent';
      });
    }
  });
}

function createObservation(hiddenClass, visibleClass) {
  const observation = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add(visibleClass);
      } else {
        return;
      }
    });
  });

  const elementosOcultos = getElement(hiddenClass, true);
  elementosOcultos.forEach((element) => observation.observe(element));
}

function closeOptionBox() {
  document.body.style.overflow = 'auto';
  getElement('.group-project-options-box').style.display = 'none';
}

function controlTextByLanguage(lenguageEnglis, element, textEn, textPt) {
  getElement(element).innerHTML = (lenguageEnglis) ? textEn : textPt;
}

function getElement(element, multiple = false) {
  return multiple ? document.querySelectorAll(element) : document.querySelector(element);
}