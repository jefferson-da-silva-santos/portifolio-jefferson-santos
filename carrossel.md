# HTML

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <!-- Link para o SwiperJS CSS -->
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css"
    />
    <link rel="stylesheet" href="style.css" />
    <title>Slide</title>
  </head>
  <body>
    <div class="container swiper">
      <div class="slider-wrapper">
        <div class="card-list swiper-wrapper">
          <div class="card-item swiper-slide">
            <img src="images/img-1.jpg" alt="User image" class="user-image" />
            <h2>James Wilson</h2>
            <p class="user-profission">Software Developer</p>
            <button class="message-button">Message</button>
          </div>

          <div class="card-item swiper-slide">
            <img src="images/img-2.jpg" alt="User image" class="user-image" />
            <h2>Sarah Johnson</h2>
            <p class="user-profission">Graphic Designer</p>
            <button class="message-button">Message</button>
          </div>

          <div class="card-item swiper-slide">
            <img src="images/img-3.jpg" alt="User image" class="user-image" />
            <h2>Luiz Chorvlht</h2>
            <p class="user-profission">Project Menager</p>
            <button class="message-button">Message</button>
          </div>

          <div class="card-item swiper-slide">
            <img src="images/img-4.jpg" alt="User image" class="user-image" />
            <h2>Melissa Andreons</h2>
            <p class="user-profission">Markting Specialist</p>
            <button class="message-button">Message</button>
          </div>

          <div class="card-item swiper-slide">
            <img src="images/img-5.jpg" alt="User image" class="user-image" />
            <h2>Icaro Novaes</h2>
            <p class="user-profission">Data Scientist</p>
            <button class="message-button">Message</button>
          </div>

          <div class="card-item swiper-slide">
            <img src="images/img-6.jpg" alt="User image" class="user-image" />
            <h2>Mark Pytersburgo</h2>
            <p class="user-profission">UI/UX Designer</p>
            <button class="message-button">Message</button>
          </div>
        </div>

        <div class="swiper-pagination"></div>
        <div class="swiper-slide-button swiper-button-prev"></div>
        <div class="swiper-slide-button swiper-button-next"></div>
      </div>
    </div>
    <!-- Link para o SwiperJS script -->
    <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>
    <!-- Link do script customizado -->
    <script src="script.js"></script>
  </body>
</html>
```

# CSS

```css
/* Importa a fonte Montserrat do Google Fonts */
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');

* {
  /* Define a fonte padrão e remove margens e paddings */
  font-family: "Montserrat", sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  /* Centraliza o conteúdo na tela */
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  /* Define um fundo com imagem */
  background: url('images/bg.jpg') #030728 no-repeat center;
}

.slider-wrapper {
  /* Oculta o overflow do conteúdo e define o tamanho máximo do slider */
  overflow: hidden;
  max-width: 1200px;
  margin: 0 70px 55px;
}

.card-item {
  /* Define o layout de cada carta de perfil */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #FFF;
  background: rgba(255, 255, 255, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(30px);
  user-select: none;
  padding: 35px;
  border-radius: 8px;
}

.user-image {
  /* Estiliza a imagem do usuário, transformando-a em um círculo */
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin-bottom: 40px;
  border: 3px solid #fff;
  padding: 4px;
}

.user-profission {
  /* Estiliza o texto da profissão do usuário */
  font-size: 1.15rem;
  color: #e3e3e3;
  font-weight: 500;
  margin: 14px 0 14px;
}

.message-button {
  /* Estiliza o botão de mensagem */
  font-size: 1.25em;
  padding: 10px 35px;
  color: #030728;
  border-radius: 6px;
  font-weight: 500;
  cursor: pointer;
  background: #fff;
  border: 1px solid transparent;
  transition: 0.2s ease;
}

.message-button:hover {
  /* Estilização do botão ao passar o mouse */
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid #fff;
  color: #fff;
}

.swiper-pagination-bullet {
  /* Estiliza os pontos de paginação do Swiper */
  background: #fff;
  height: 15px;
  width: 15px;
}

.swiper-slide-button {
  /* Estiliza os botões de navegação do Swiper */
  color: #fff;
  margin-top: -50px;
}

.swiper-slide-button:hover {
  /* Muda a cor dos botões de navegação ao passar o mouse */
  color: #4658ff;
}

@media (max-width: 768px) {
  .slider-wrapper {
    /* Ajusta o layout para telas menores */
    margin: 0 10px 40px;
  }

  .swiper-slide-button {
    /* Esconde os botões de navegação em telas menores */
    display: none;
  }
}
```

# JavaScript

```javascript
// Inicializa o Swiper com configurações específicas
const swiper = new Swiper('.slider-wrapper', {
  loop: true, // Permite que o slider dê loop infinito
  grabCursor: true, // Mostra um cursor de "mão" ao passar sobre o slider
  spaceBetween: 30, // Define o espaço entre os slides

  // Configurações de paginação
  pagination: {
    el: '.swiper-pagination', // Elemento onde a paginação será renderizada
    clickable: true, // Permite clicar nos bullets de paginação
    dynamicBullets: true // Usa bullets de tamanho dinâmico para representar a posição
  },

  // Configurações de navegação
  navigation: {
    nextEl: '.swiper-button-next', // Botão de próximo
    prevEl: '.swiper-button-prev', // Botão de anterior
  },

  // Configurações responsivas de quantos slides mostrar em diferentes tamanhos de tela
  breakpoints: {
    0: {
      slidesPerView: 1 // Mostra 1 slide por vez em telas pequenas
    },
    620: {
      slidesPerView: 2 // Mostra 2 slides por vez em telas médias
    },
    1024: {
      slidesPerView: 3 // Mostra 3 slides por vez em telas grandes
    }
  }
});
```