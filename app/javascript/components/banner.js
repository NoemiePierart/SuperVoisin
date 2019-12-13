import Typed from 'typed.js';


const loadDynamicBannerText = () => {
  new Typed('#banner-typed-text', {
    strings: ["Besoin d'un petit service ? Faites-appel à vos voisins !"],
    typeSpeed: 50,
    loop: true
  });
}

export { loadDynamicBannerText };

