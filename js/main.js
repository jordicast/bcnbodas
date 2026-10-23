const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
const translations = {
  es: {navPortfolio:'Portfolio',navApproach:'Mi mirada',navServices:'Servicios',navContact:'Hablemos ↗',kicker:'Fotografía y cine de bodas · Barcelona y donde nos lleve la historia',logoSmall:'Fotografía y cine de bodas',logoSub:'Foto · Film · Historias',imageLabel:'Historias reales · recuerdos para siempre',heroCopy:'Imágenes honestas, luz natural y momentos que no necesitan posado. Fotografío y filmo bodas para que, al volver a ellas, podáis sentirlo todo otra vez.',discover:'Descubrir historias',portfolioEyebrow:'Historias reales · Emociones sin guion',portfolioTitle:'Momentos que<br><em>se quedan.</em>',portfolioIntro:'Las miradas cómplices, los abrazos largos, el caos bonito de la fiesta. Una selección de instantes que hablan por sí solos.',approachEyebrow:'Mi manera de contar',approachTitle:'No hace falta que todo sea perfecto. <em>Solo que sea vuestro.</em>',approachCopy:'Creo en las historias que suceden entre una foto y otra. En dejar espacio para que seáis vosotros mismos y observar con sensibilidad, sin interrumpir lo que hace único vuestro día. Fotografías con alma y películas que se sienten como volver a casa.',servicesEyebrow:'A vuestra manera',servicesTitle:'Una historia.<br><em>Dos formas de vivirla.</em>',servicesIntro:'Podemos guardar vuestro día en imágenes, en movimiento o combinar ambos lenguajes para construir un recuerdo completo.',service1Num:'01 / FOTOGRAFÍA',service1Title:'Imágenes con verdad',service1Copy:'Una mirada documental y editorial que recoge los grandes momentos y también todo aquello que sucede sin que os deis cuenta.',service2Num:'02 / FILM',service2Title:'Vuestra película',service2Copy:'Movimiento, voces, música y pequeños detalles unidos en una película cinematográfica que os devuelva a ese día.',service3Num:'03 / FOTO + FILM',service3Title:'El recuerdo completo',service3Copy:'Fotografía y vídeo en una misma narrativa, cuidando la estética y la emoción de principio a fin.',contactEyebrow:'Vuestra fecha empieza aquí',contactTitle:'Contadme<br><em>vuestro plan.</em>',contactCopy:'¿Os imagináis reviviendo vuestra boda dentro de veinte años? Me encantará conocer vuestra historia, qué estáis preparando y qué os gustaría recordar.',emailLink:'O escribidme por email',formNames:'Vuestros nombres',formEmail:'Email de contacto',formDate:'Fecha de la boda',formService:'¿Qué os interesa?',optionPhoto:'Fotografía',optionFilm:'Film de boda',optionBoth:'Fotografía + film',optionUnsure:'Lo queremos hablar',formMessage:'Contadme un poco más',formSubmit:'Preparar email ↗',formNote:'Este formulario abrirá vuestro programa de correo con el mensaje preparado. Para recibir consultas directamente, conecta después un servicio de formularios.',backTop:'Volver arriba ↑'},
  ca: {navPortfolio:'Portfoli',navApproach:'La meva mirada',navServices:'Serveis',navContact:'Parlem ↗',kicker:'Fotografia i cinema de casaments · Barcelona i allà on ens porti la història',logoSmall:'Fotografia i cinema de casaments',logoSub:'Foto · Film · Històries',imageLabel:'Històries reals · records per sempre',heroCopy:'Imatges honestes, llum natural i moments que no necessiten posat. Fotografia i filmo casaments perquè, quan els torneu a veure, ho pugueu sentir tot una altra vegada.',discover:'Descobrir històries',portfolioEyebrow:'Històries reals · Emocions sense guió',portfolioTitle:'Moments que<br><em>es queden.</em>',portfolioIntro:
    'A BCN Bodes volem que el vostre dia sigui especial i pugueu recordar-lo com la gran història que és. Cuidem els detalls, les emocions, les reaccions i les sorpreses que fan únic cada enllaç. Amb més de 17 anys en el sector, captem aquests moments inoblidables perquè pugueu viure sempre que volgeu.'
};
function setLanguage(language) {
  const dictionary = translations[language] || translations.es;
  document.documentElement.lang = language;
  document.querySelectorAll('[data-i18n]').forEach(element => { if (dictionary[element.dataset.i18n]) element.innerHTML = dictionary[element.dataset.i18n]; });
  document.querySelectorAll('[data-lang]').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.lang === language)));
  document.querySelector('.menu-toggle').setAttribute('aria-label', language === 'ca' ? 'Obrir el menú' : 'Abrir menú');
}
document.querySelectorAll('[data-lang]').forEach(button => button.addEventListener('click', () => setLanguage(button.dataset.lang)));
toggle.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(isOpen));
  toggle.textContent = isOpen ? '×' : '☰';
});
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  toggle.setAttribute('aria-expanded', 'false');
  toggle.textContent = '☰';
}));
document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('contact-form').addEventListener('submit', event => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const subject = encodeURIComponent((document.documentElement.lang === 'ca' ? 'Consulta de casament — ' : 'Consulta de boda — ') + (data.get('nombres') || 'Nueva pareja'));
  const body = encodeURIComponent(
    (document.documentElement.lang === 'ca' ? 'Noms: ' : 'Nombres: ') + data.get('nombres') + '\nEmail: ' + data.get('email') + '\n' + (document.documentElement.lang === 'ca' ? 'Data: ' : 'Fecha: ') + (data.get('fecha') || (document.documentElement.lang === 'ca' ? 'Per confirmar' : 'Por confirmar')) + '\n' + (document.documentElement.lang === 'ca' ? 'Servei: ' : 'Servicio: ') + data.get('servicio') + '\n\n' + (document.documentElement.lang === 'ca' ? 'Missatge:\n' : 'Mensaje:\n') + (data.get('mensaje') || '')
  );
  window.location.href = 'mailto:bcnbodasmail@gmail.com?subject=' + subject + '&body=' + body;
});

const gallery = document.getElementById("wedding-gallery");
const left = document.querySelector(".gallery-arrow-left");
const right = document.querySelector(".gallery-arrow-right");

if (gallery && left && right) {
  let direction = 0;
  let animationFrame = null;
  let lastTime = 0;

  const speed = 220; // Velocidad en píxeles por segundo

  function stopScrolling() {
    direction = 0;
    lastTime = 0;

    if (animationFrame !== null) {
      cancelAnimationFrame(animationFrame);
      animationFrame = null;
    }
  }

  function animate(time) {
    if (direction === 0) {
      animationFrame = null;
      return;
    }

    if (lastTime === 0) lastTime = time;

    const delta = Math.min((time - lastTime) / 1000, 0.05);
    lastTime = time;

    const maxScroll = gallery.scrollWidth - gallery.clientWidth;

    if (
      (direction < 0 && gallery.scrollLeft <= 0) ||
      (direction > 0 && gallery.scrollLeft >= maxScroll - 1)
    ) {
      stopScrolling();
      return;
    }

    gallery.scrollLeft += direction * speed * delta;
    animationFrame = requestAnimationFrame(animate);
  }

  function startScrolling(dir) {
    stopScrolling();
    direction = dir;
    animationFrame = requestAnimationFrame(animate);
  }

  // Flecha izquierda: desplazar hacia la izquierda
  left.addEventListener("mouseenter", () => startScrolling(-1));
  left.addEventListener("mouseleave", stopScrolling);

  // Flecha derecha: desplazar hacia la derecha
  right.addEventListener("mouseenter", () => startScrolling(1));
  right.addEventListener("mouseleave", stopScrolling);

  // En pantallas táctiles, un toque desplaza la galería
  left.addEventListener("click", () => {
    stopScrolling();
    gallery.scrollBy({
      left: -gallery.clientWidth * 0.8,
      behavior: "smooth"
    });
  });

  right.addEventListener("click", () => {
    stopScrolling();
    gallery.scrollBy({
      left: gallery.clientWidth * 0.8,
      behavior: "smooth"
    });
  });

  window.addEventListener("blur", stopScrolling);
}


/* Marcar en el menú la sección que está visible */
document.addEventListener("DOMContentLoaded", () => {
  const menuLinks = document.querySelectorAll(
    '.nav a[href^="#"]'
  );

  const sections = document.querySelectorAll(
    'main section[id]'
  );

  function updateActiveMenu() {
    let currentSection = "";

    sections.forEach(section => {
      const rect = section.getBoundingClientRect();

      if (
        rect.top <= 150 &&
        rect.bottom > 150
      ) {
        currentSection = section.id;
      }
    });

    menuLinks.forEach(link => {
      const isActive =
        link.getAttribute("href") === "#" + currentSection;

      link.classList.toggle("active", isActive);
    });
  }

  window.addEventListener("scroll", updateActiveMenu);
  window.addEventListener("resize", updateActiveMenu);

  menuLinks.forEach(link => {
    link.addEventListener("click", () => {
      setTimeout(updateActiveMenu, 100);
    });
  });

  updateActiveMenu();
});



document.addEventListener("DOMContentLoaded", () => {
  const grid = document.querySelector(".collage-grid");
  if (!grid) return;

  const figures = Array.from(grid.querySelectorAll("figure"));
  if (figures.length < 3) return;

  // Preparamos las imágenes para mostrarlas por parejas
  let currentIndex = 0;

  figures.forEach((figure) => {
    figure.style.transition = "opacity 1s ease";
    figure.style.opacity = "0";
    figure.style.position = "absolute";
    figure.style.inset = "0";
    figure.style.width = "50%";
    figure.style.height = "100%";
    figure.style.display = "block";
  });

  function showPair(index) {
    figures.forEach((figure) => {
      figure.style.opacity = "0";
      figure.style.pointerEvents = "none";
    });

    const leftFigure = figures[index];
    const rightFigure = figures[(index + 1) % figures.length];

    leftFigure.style.left = "0";
    leftFigure.style.right = "auto";
    leftFigure.style.width = "50%";
    leftFigure.style.opacity = "1";
    leftFigure.style.pointerEvents = "auto";

    rightFigure.style.left = "50%";
    rightFigure.style.right = "auto";
    rightFigure.style.width = "50%";
    rightFigure.style.opacity = "1";
    rightFigure.style.pointerEvents = "auto";

    currentIndex = (index + 2) % figures.length;
  }

  showPair(0);

  setInterval(() => {
    showPair(currentIndex);
  }, 3000);
});


fotos.forEach(function (foto) {
  foto.classList.remove("mobile-active");
});

fotos[numero].classList.add("mobile-active");