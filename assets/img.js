$(document).ready(function() {
    var images = [
      {
        tag: "Concert",
        src: "./assets/images/gallery/concerts/aaron-paul-wnX-fXzB6Cw-unsplash.webp",
        alt: "Image de la foule d'un concert"
      },
      {
        tag: "Entreprises",
        src: "./assets/images/gallery/entreprise/ali-morshedlou-WMD64tMfc4k-unsplash.webp",
        alt: "Portrait d'un homme en costume d'entreprise élégant."
      },
      {
        tag: "Entreprises",
        src: "./assets/images/gallery/entreprise/jason-goodman-tHO1_OuKbg0-unsplash.webp",
        alt: "Image de deux collaboratrice souriante dans un bureau"
      },
      {
        tag: "Mariages",
        src: "./assets/images/gallery/mariage/hannah-busing-RvF2R_qMpRk-unsplash.webp",
        alt: "Deux main se tenant par les bout des doigts"
      },
      {
        tag: "Portrait",
        src: "./assets/images/gallery/portraits/ade-tunji-rVkhWWZFAtQ-unsplash.webp",
        alt: "Portrait d'un homme fermant les yeux"
      },
      {
        tag: "Mariages",
        src: "./assets/images/gallery/mariage/jakob-owens-SiniLJkXhMc-unsplash.webp",
        alt: "Deux mariés se tenant le bras et marchant de manière complice"
      },
      {
        tag: "Portrait",
        src: "./assets/images/gallery/portraits/nino-van-prattenburg--443cl1uR_8-unsplash.webp",
        alt: "Une jeune femme se tient dérrière un grillage"
      },
      {
        tag: "Concert",
        src: "./assets/images/gallery/concerts/austin-neill-hgO1wFPXl3I-unsplash.webp",
        alt: "Image d'un chanteur sur scène"
      },
      {
        tag: "Entreprises",
        src: "./assets/images/gallery/entreprise/mateus-campos-felipe-Fsgzm8N0hIY-unsplash.webp",
        alt: "Une femme d'affaire tout sourire parlant à un collègue dérrière son ordinateur"
      }
    ];
  
    var $gallery = $(".gallery");
  
    images.forEach(function(image) {
      var $img = $("<img>")
        .addClass("gallery-item")
        .attr("data-gallery-tag", image.tag)
        .attr("src", image.src)
        .attr("loading", "lazy")
        .attr("decoding", "async")
        .attr("cache-control", "max-age=604800")
        .attr("alt", image.alt)
        .css("max-width", "100%");
      $gallery.append($img);
    });
  
    $gallery.mauGallery();
  });
  