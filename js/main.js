const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
const menuMovil = document.querySelector('.topbar .nav');
let intervaloGaleria = null;
/*
const translations = {
  es: {navPortfolio:'Portfolio',navApproach:'Mi mirada',navServices:'Servicios',navContact:'Hablemos ↗',kicker:'Fotografía y cine de bodas · Barcelona y donde nos lleve la historia',logoSmall:'Fotografía y cine de bodas',logoSub:'Foto · Film · Historias',imageLabel:'Historias reales · recuerdos para siempre',heroCopy:'Imágenes honestas, luz natural y momentos que no necesitan posado. Fotografío y filmo bodas para que, al volver a ellas, podáis sentirlo todo otra vez.',discover:'Descubrir historias',portfolioEyebrow:'Historias reales · Emociones sin guion',portfolioTitle:'Momentos que<br><em>se quedan.</em>',portfolioIntro:'Las miradas cómplices, los abrazos largos, el caos bonito de la fiesta. Una selección de instantes que hablan por sí solos.',approachEyebrow:'Mi manera de contar',approachTitle:'No hace falta que todo sea perfecto. <em>Solo que sea vuestro.</em>',approachCopy:'Creo en las historias que suceden entre una foto y otra. En dejar espacio para que seáis vosotros mismos y observar con sensibilidad, sin interrumpir lo que hace único vuestro día. Fotografías con alma y películas que se sienten como volver a casa.',servicesEyebrow:'A vuestra manera',servicesTitle:'Una historia.<br><em>Dos formas de vivirla.</em>',servicesIntro:'Podemos guardar vuestro día en imágenes, en movimiento o combinar ambos lenguajes para construir un recuerdo completo.',service1Num:'01 / FOTOGRAFÍA',service1Title:'Imágenes con verdad',service1Copy:'Una mirada documental y editorial que recoge los grandes momentos y también todo aquello que sucede sin que os deis cuenta.',service2Num:'02 / FILM',service2Title:'Vuestra película',service2Copy:'Movimiento, voces, música y pequeños detalles unidos en una película cinematográfica que os devuelva a ese día.',service3Num:'03 / FOTO + FILM',service3Title:'El recuerdo completo',service3Copy:'Fotografía y vídeo en una misma narrativa, cuidando la estética y la emoción de principio a fin.',contactEyebrow:'Vuestra fecha empieza aquí',contactTitle:'Contadme<br><em>vuestro plan.</em>',contactCopy:'¿Os imagináis reviviendo vuestra boda dentro de veinte años? Me encantará conocer vuestra historia, qué estáis preparando y qué os gustaría recordar.',emailLink:'O escribidme por email',formNames:'Vuestros nombres',formEmail:'Email de contacto',formDate:'Fecha de la boda',formService:'¿Qué os interesa?',optionPhoto:'Fotografía',optionFilm:'Film de boda',optionBoth:'Fotografía + film',optionUnsure:'Lo queremos hablar',formMessage:'Contadme un poco más',formSubmit:'Preparar email ↗',formNote:'Este formulario abrirá vuestro programa de correo con el mensaje preparado. Para recibir consultas directamente, conecta después un servicio de formularios.',backTop:'Volver arriba ↑'},
  ca: {navPortfolio:'Portfoli',navApproach:'La meva mirada',navServices:'Serveis',navContact:'Parlem ↗',kicker:'Fotografia i cinema de casaments · Barcelona i allà on ens porti la història',logoSmall:'Fotografia i cinema de casaments',logoSub:'Foto · Film · Històries',imageLabel:'Històries reals · records per sempre',heroCopy:'Imatges honestes, llum natural i moments que no necessiten posat. Fotografia i filmo casaments perquè, quan els torneu a veure, ho pugueu sentir tot una altra vegada.',discover:'Descobrir històries',portfolioEyebrow:'Històries reals · Emocions sense guió',portfolioTitle:'Moments que<br><em>es queden.</em>',portfolioIntro:
    'A BCN Bodes volem que el vostre dia sigui especial i pugueu recordar-lo com la gran història que és. Cuidem els detalls, les emocions, les reaccions i les sorpreses que fan únic cada enllaç. Amb més de 17 anys en el sector, captem aquests moments inoblidables perquè pugueu viure sempre que volgeu.'
};}};/*
function setLanguage(language) {
  const dictionary = translations[language] || translations.es;
  document.documentElement.lang = language;
  document.querySelectorAll('[data-i18n]').forEach(element => { if (dictionary[element.dataset.i18n]) element.innerHTML = dictionary[element.dataset.i18n]; });
  document.querySelectorAll('[data-lang]').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.lang === language)));
  document.querySelector('.menu-toggle').setAttribute('aria-label', language === 'ca' ? 'Obrir el menú' : 'Abrir menú');
}*/
const translations = {
  es: {
    navPortfolio: 'Portfolio',
    navFilm: 'Cine',
    navServices: 'Servicios',
    navContact: 'Hablemos',
    kicker: 'Fotografía y cine de bodas · Barcelona y donde nos lleve la historia',
    logoSmall: 'Fotografía y cine de bodas',
    logoSub: 'Foto · Film · Historias',
    imageLabel: 'Historias reales · Recuerdos para siempre',
    heroCopy: 'Imágenes honestas, luz natural y momentos que no necesitan posado. Fotografío y filmo bodas para que, al volver a ellas, podáis sentirlo todo otra vez.',
    discover: 'Descubrir historias',
videosTitle: 'Vuestra boda,<br><em>en película</em>',
videosIntro: 'A partir de vuestra boda, crearemos una película llena de sentimientos en la que podréis revivir algunos de los momentos más mágicos de ese día.',
    portfolioEyebrow: 'Historias reales · Emociones sin guion',
    portfolioTitle: 'Momentos que<br><em>se quedan.</em>',
    portfolioIntro: 'Las miradas cómplices, los abrazos largos, el caos bonito de la fiesta. Una selección de instantes que hablan por sí solos. Con nuestros reportages de fotografía y vídeo de boda queremos emocionaros cada vez que queráis revivir vuestro día.',

    approachEyebrow: 'Mi manera de contar',
    approachTitle: 'No hace falta que todo sea perfecto. <em>Solo que sea vuestro.</em>',
    approachCopy: 'Creo en las historias que suceden entre una foto y otra. En dejar espacio para que seáis vosotros mismos y observar con sensibilidad, sin interrumpir lo que hace único vuestro día. Fotografías con alma y películas que se sienten como volver a casa.',

    servicesEyebrow: 'A vuestra manera',
    servicesTitle: 'Una historia.<br><em>Dos formas de vivirla.</em>',
    servicesIntro: 'Podemos guardar vuestro día en imágenes, en movimiento o combinar ambos lenguajes para construir un recuerdo completo.',
    service1Num: '01 / FOTOGRAFÍA',
    service1Title: 'Imágenes con verdad',
    service1Copy: 'Una mirada documental y editorial que recoge los grandes momentos y también todo aquello que sucede sin que os deis cuenta.',
    service2Num: '02 / FILM',
    service2Title: 'Vuestra película',
    service2Copy: 'Movimiento, voces, música y pequeños detalles unidos en una película cinematográfica que os devuelva a ese día.',
    service3Num: '03 / FOTO + FILM',
    service3Title: 'El recuerdo completo',
    service3Copy: 'Fotografía y vídeo en una misma narrativa, cuidando la estética y la emoción de principio a fin.',

    contactEyebrow: 'Vuestra fecha empieza aquí',
    contactTitle: 'Contadnos<br><em>vuestro plan.</em>',
    contactCopy: '¿Os imagináis reviviendo vuestra boda dentro de veinte años? Me encantará conocer vuestra historia, qué estáis preparando y qué os gustaría recordar.',
    emailLink: 'O escribidme por email',
servicesHeading: 'Nuestros servicios',

photoPack1: 'Reportaje fotográfico completo de la boda.',
photoPack2: 'Entrega digital de todas las fotografías.',

premiumPhoto1: 'Reportaje fotográfico completo de la boda.',
premiumPhoto2: 'Entrega digital de todas las fotografías.',
premiumPhoto3: 'Álbum fotográfico profesional con una selección de las mejores imágenes.',
premiumPhoto4: 'Copia de las fotografías en un USB de madera.',

cinePack1: 'Película resumen de la boda de aproximadamente 25 minutos.',
cinePack2: 'Los momentos más especiales, las emociones y los detalles de la celebración.',
cinePack3: 'Edición cinematográfica para revivir vuestro día una y otra vez.',
cinePack4: 'Entrega digital.',

premiumCine1: 'Película resumen de la boda de aproximadamente 25 minutos.',
premiumCine2: 'Edición cinematográfica para revivir vuestro día una y otra vez.',
premiumCine3: 'Tráiler corto de la boda, ideal para compartir con familiares y amigos.',
premiumCine4: 'Entrevistas a los invitados para conservar sus mensajes y felicitaciones.',
premiumCine5: 'Vídeo de tomas falsas.',
premiumCine6: 'Entrega de todo el material grabado.',
premiumCine7: 'Entrega digital.',

completeNum: 'FOTOGRAFÍA Y VÍDEO',
completeTitle: 'PACK COMPLETO',
completeCopy: 'Incluye el Pack de Foto Premium y el Pack de Cine Premium.',

superNum: 'FOTOGRAFÍA Y VÍDEO + FIESTA',
superTitle: 'PACK SUPER',
superCopy: 'Incluye el pack completo de Fotografía + Cine para el día de vuestra boda, más el servicio extra de <strong>Fotomatón Retro</strong> y <strong>Plataforma de Vídeo 360º</strong>, para que todos vuestros invitados se lleven un recuerdo de vuestro día y elevéis vuestra fiesta a otro nivel.',

droneNum: 'SERVICIO DE DRON',
droneTitle: 'Servicio de Dron',
droneCopy: 'Combinad vuestra película con imágenes aéreas de vuestra boda. Servicio sujeto a la zona del evento y a los permisos aéreos necesarios.',

festiveEyebrow: 'Para celebrar a lo grande',
festiveTitle: 'Otros servicios<br><em>festivos.</em>',
festiveIntro: 'La fiesta no termina con las fotos. Queremos que vosotros y vuestros invitados disfrutéis de una experiencia inolvidable. Completad vuestra boda con nuestro <strong>Fotomatón Retro</strong>, ideal para llevaros recuerdos divertidos, y nuestra <strong>Plataforma de Vídeo 360º</strong>, para capturar momentos espectaculares desde todos los ángulos.',
festivePrices: 'Consultad los precios y todos los detalles en',
discountTitle: 'Un extra para vuestra celebración:',
discountCopy: 'si contratáis alguno de nuestros servicios audiovisuales de fotografía o vídeo de boda, disfrutaréis de un descuento tanto en el Fotomatón Retro como en la Plataforma de Vídeo 360º.',
    formNames: 'Vuestros nombres',
    formEmail: 'Email de contacto',
    formDate: 'Fecha de la boda',
    formService: '¿Qué os interesa?',
    optionPhoto: 'Fotografía',
    optionFilm: 'Film de boda',
    optionBoth: 'Fotografía + film',
    optionUnsure: 'Lo queremos hablar',
    formMessage: 'Contadnos un poco más',
    formSubmit: 'Enviar email ↗',
    backTop: 'Volver arriba ↑'
  },

  ca: {
    inicio: 'BCN Bodes',
    navPortfolio: 'Portfoli',
    navFilm: 'Cinema',
    navServices: 'Serveis',
    navContact: 'Parlem-ne',
    kicker: 'Fotografia i cinema de casaments · Barcelona i allà on ens porti la història',
    logoSmall: 'Fotografia i cinema de casaments',
    logoSub: 'Foto · Film · Històries',
    imageLabel: 'Històries reals · Records per sempre',
    heroCopy: 'Imatges honestes, llum natural i moments que no necessiten posat. Fotografia i filmo casaments perquè, quan els torneu a veure, ho pugueu sentir tot una altra vegada.',
    discover: 'Descobrir històries',
videosTitle: 'El vostre casament,<br><em>en pel·lícula</em>',
videosIntro: 'A partir del vostre casament, crearem una pel·lícula plena de sentiments en què podreu reviure alguns dels moments més màgics d’aquell dia.',
    portfolioEyebrow: 'Històries reals · Emocions sense guió',
    portfolioTitle: 'Moments que<br><em>es queden.</em>',
    portfolioIntro: 'Les mirades còmplices, les abraçades llargues i el caos bonic de la festa. Una selecció d’instants que parlen per si sols. Amb el nostre reportage de fotografia i video de boda volem que us emocioneu cada vegada que reviviu aquest dia tant especial.',

    approachEyebrow: 'La meva manera d’explicar',
    approachTitle: 'No cal que tot sigui perfecte. <em>Només cal que sigui vostre.</em>',
    approachCopy: 'Crec en les històries que passen entre una fotografia i una altra. En deixar espai perquè sigueu vosaltres mateixos i observar amb sensibilitat, sense interrompre allò que fa únic el vostre dia. Fotografies amb ànima i pel·lícules que us facin sentir com si tornéssiu a casa.',

    servicesEyebrow: 'A la vostra manera',
    servicesTitle: 'Una història.<br><em>Dues maneres de viure-la.</em>',
    servicesIntro: 'Podem guardar el vostre dia en imatges, en moviment o combinar tots dos llenguatges per crear un record complet.',
    service1Num: '01 / FOTOGRAFIA',
    service1Title: 'Imatges amb veritat',
    service1Copy: 'Una mirada documental i editorial que recull els grans moments i també tot allò que passa sense que us n’adoneu.',
    service2Num: '02 / FILM',
    service2Title: 'La vostra pel·lícula',
    service2Copy: 'Moviment, veus, música i petits detalls units en una pel·lícula cinematogràfica que us faci tornar a aquell dia.',
    service3Num: '03 / FOTO + FILM',
    service3Title: 'El record complet',
    service3Copy: 'Fotografia i vídeo en una mateixa narrativa, tenint cura de l’estètica i l’emoció de principi a fi.',

    contactEyebrow: 'La vostra data comença aquí',
    contactTitle: 'Expliqueu-nos<br><em>el vostre pla.</em>',
    contactCopy: 'Us imagineu reviure el vostre casament d’aquí a vint anys? M’encantarà conèixer la vostra història, què esteu preparant i què us agradaria recordar.',
    emailLink: 'O escriviu-nos per correu electrònic',
servicesHeading: 'Els nostres serveis',

photoPack1: 'Reportatge fotogràfic complet del casament.',
photoPack2: 'Lliurament digital de totes les fotografies.',

premiumPhoto1: 'Reportatge fotogràfic complet del casament.',
premiumPhoto2: 'Lliurament digital de totes les fotografies.',
premiumPhoto3: 'Àlbum fotogràfic professional amb una selecció de les millors imatges.',
premiumPhoto4: 'Còpia de les fotografies en un USB de fusta.',

cinePack1: 'Pel·lícula resum del casament d’aproximadament 25 minuts.',
cinePack2: 'Els moments més especials, les emocions i els detalls de la celebració.',
cinePack3: 'Edició cinematogràfica per reviure el vostre dia una vegada i una altra.',
cinePack4: 'Lliurament digital.',

premiumCine1: 'Pel·lícula resum del casament d’aproximadament 25 minuts.',
premiumCine2: 'Edició cinematogràfica per reviure el vostre dia una vegada i una altra.',
premiumCine3: 'Tràiler curt del casament, ideal per compartir amb familiars i amics.',
premiumCine4: 'Entrevistes als convidats per conservar els seus missatges i felicitacions.',
premiumCine5: 'Vídeo de preses falses.',
premiumCine6: 'Lliurament de tot el material enregistrat.',
premiumCine7: 'Lliurament digital.',

completeNum: 'FOTOGRAFIA I VÍDEO',
completeTitle: 'PACK COMPLET',
completeCopy: 'Inclou el Pack de Foto Premium i el Pack de Cine Premium.',

superNum: 'FOTOGRAFIA I VÍDEO + FESTA',
superTitle: 'PACK SUPER',
superCopy: 'Inclou el pack complet de Fotografia + Cinema per al dia del vostre casament, més el servei extra de <strong>Fotomatón Retro</strong> i <strong>Plataforma de Vídeo 360º</strong>, perquè tots els vostres convidats s’enduguin un record del vostre dia i pugueu portar la festa a un altre nivell.',

droneNum: 'SERVEI DE DRON',
droneTitle: 'Servei de Dron',
droneCopy: 'Combineu la vostra pel·lícula amb imatges aèries del vostre casament. Servei subjecte a la zona de l’esdeveniment i als permisos aeris necessaris.',

festiveEyebrow: 'Per celebrar-ho a lo gran',
festiveTitle: 'Altres serveis<br><em>festius.</em>',
festiveIntro: 'La festa no s’acaba amb les fotografies. Volem que vosaltres i els vostres convidats gaudiu d’una experiència inoblidable. Completeu el vostre casament amb el nostre <strong>Fotomatón Retro</strong>, ideal per endur-vos records divertits, i la nostra <strong>Plataforma de Vídeo 360º</strong>, per capturar moments espectaculars des de tots els angles.',
festivePrices: 'Consulteu els preus i tots els detalls a',
discountTitle: 'Un extra per a la vostra celebració:',
discountCopy: 'si contracteu algun dels nostres serveis audiovisuals de fotografia o vídeo de casament, gaudireu d’un descompte tant al Fotomatón Retro com a la Plataforma de Vídeo 360º.',
    formNames: 'Els vostres noms',
    formEmail: 'Correu electrònic de contacte',
    formDate: 'Data del casament',
    formService: 'Què us interessa?',
    optionPhoto: 'Fotografia',
    optionFilm: 'Film de casament',
    optionBoth: 'Fotografia + film',
    optionUnsure: 'En volem parlar',
    formMessage: 'Expliqueu-me una mica més',
    formSubmit: 'Enviar correu ↗',
    backTop: 'Tornar a dalt ↑'
  }
};


/* FUNCIÓN PARA CAMBIAR DE IDIOMA */

function setLanguage(language) {
  const idioma = translations[language] ? language : 'es';
  const dictionary = translations[idioma];

  document.documentElement.lang = idioma;

  document.querySelectorAll('[data-i18n]').forEach(element => {
    const key = element.dataset.i18n;

    if (dictionary[key] !== undefined) {
      element.innerHTML = dictionary[key];
    }
  });

  document.querySelectorAll('[data-lang]').forEach(button => {
    const activo = button.dataset.lang === idioma;

    button.classList.toggle('active', activo);
    button.setAttribute('aria-pressed', String(activo));
  });

  if (toggle) {
    toggle.setAttribute(
      'aria-label',
      idioma === 'ca' ? 'Obrir el menú' : 'Abrir menú'
    );
  }
}

/* ACTIVAR LOS BOTONES ES / CAT */

document.querySelectorAll('[data-lang]').forEach(button => {
  button.addEventListener('click', () => {
    setLanguage(button.dataset.lang);
  });
});

/* Idioma inicial */
setLanguage('es');

document.querySelectorAll('[data-lang]').forEach(button => button.addEventListener('click', () => setLanguage(button.dataset.lang)));

/* PORTADA: dos fotos cada 3 segundos en bucle */

/* PORTADA: dos fotos cada 3 segundos en bucle */

(() => {
    const collage = document.querySelector('.collage-grid');
    if (!collage) return;

    const fotos = Array.from(collage.querySelectorAll('figure'));
    if (fotos.length < 2) return;

    let parejaActual = 0;
    let fotoMovilActual = 0;

    function mostrarFotos() {
        const esMovil = window.innerWidth <= 760;

        fotos.forEach((foto, indice) => {
            if (esMovil) {
                foto.style.setProperty('display', 'block', 'important');
                foto.classList.toggle(
                    'mobile-active',
                    indice === fotoMovilActual
                );
            } else {
                foto.classList.remove('mobile-active');

                const primera = parejaActual * 2;
                const segunda = primera + 1;

                const visible =
                    indice === primera || indice === segunda;

                foto.style.setProperty(
                    'display',
                    visible ? 'block' : 'none',
                    'important'
                );
            }
        });
    }

    mostrarFotos();

    window.setInterval(() => {
        if (window.innerWidth <= 760) {
            fotoMovilActual = (fotoMovilActual + 1) % fotos.length;
        } else {
            parejaActual =
                (parejaActual + 1) % Math.ceil(fotos.length / 2);
        }

        mostrarFotos();
    }, 3000);

    window.addEventListener('resize', mostrarFotos);
})();

// MENÚ MÓVIL BCN BODAS


if (botonMenu && menuMovil) {

  botonMenu.addEventListener('click', function (event) {
    event.preventDefault();
    event.stopPropagation();

    const abierto = menuMovil.classList.contains('open');

    if (abierto) {
      menuMovil.classList.remove('open');
    } else {
      menuMovil.classList.add('open');
    }

    botonMenu.setAttribute('aria-expanded', String(!abierto));
    botonMenu.textContent = abierto ? '☰' : '✕';
  });

  // Cerrar al seleccionar una opción
  menuMovil.querySelectorAll('a').forEach(function (enlace) {
    enlace.addEventListener('click', function () {
      menuMovil.classList.remove('open');
      botonMenu.setAttribute('aria-expanded', 'false');
      botonMenu.textContent = '☰';
    });
  });

  // Cerrar al pulsar fuera del menú
  document.addEventListener('click', function (event) {
    if (
      !menuMovil.contains(event.target) &&
      !botonMenu.contains(event.target)
    ) {
      menuMovil.classList.remove('open');
      botonMenu.setAttribute('aria-expanded', 'false');
      botonMenu.textContent = '☰';
    }
  });

}
const yearElement = document.getElementById('year');

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}



    const body = encodeURIComponent(
      (document.documentElement.lang === 'ca' ? 'Noms: ' : 'Nombres: ') + data.get('nombres') +
      '\nEmail: ' + data.get('email') +
      '\n' + (document.documentElement.lang === 'ca' ? 'Data: ' : 'Fecha: ') +
      (data.get('fecha') || (document.documentElement.lang === 'ca' ? 'Per confirmar' : 'Por confirmar')) +
      '\n' + (document.documentElement.lang === 'ca' ? 'Servei: ' : 'Servicio: ') + data.get('servicio') +
      '\n\n' + (document.documentElement.lang === 'ca' ? 'Missatge:\n' : 'Mensaje:\n') +
      (data.get('mensaje') || '')
    );

    window.location.href = 'mailto:bcnbodasmail@gmail.com?subject=' + subject + '&body=' + body;
 

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






/* GALERÍA BCN BODAS: DESPLAZAMIENTO CON FLECHAS */;

function moverGaleria(direccion) {
    pararGaleria();

    const galeria = document.getElementById('wedding-gallery');

    if (!galeria) {
        console.error('No existe wedding-gallery');
        return;
    }

    intervaloGaleria = setInterval(function () {
        galeria.scrollLeft += direccion * 3;
    }, 20);
}

function pararGaleria() {
    if (intervaloGaleria !== null) {
        clearInterval(intervaloGaleria);
        intervaloGaleria = null;
    }
}

function desplazarGaleria(direccion) {
    pararGaleria();

    const galeria = document.getElementById('wedding-gallery');

    if (!galeria) return;

    const paso = window.innerWidth <= 760
        ? galeria.clientWidth
        : 300;

    galeria.scrollBy({
        left: direccion * paso,
        behavior: 'smooth'
    });
}

