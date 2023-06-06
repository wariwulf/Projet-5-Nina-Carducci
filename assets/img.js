$(document).ready(function() {
    var images = [
      {
        tag: "Concert",
        src: "./assets/images/gallery/concerts/aaron-paul-wnX-fXzB6Cw-unsplash.webp"
      },
      {
        tag: "Entreprises",
        src: "./assets/images/gallery/entreprise/ali-morshedlou-WMD64tMfc4k-unsplash.webp"
      },
      {
        tag: "Entreprises",
        src: "./assets/images/gallery/entreprise/jason-goodman-tHO1_OuKbg0-unsplash.webp"
      },
      {
        tag: "Mariages",
        src: "./assets/images/gallery/mariage/hannah-busing-RvF2R_qMpRk-unsplash.webp"
      },
      {
        tag: "Portrait",
        src: "./assets/images/gallery/portraits/ade-tunji-rVkhWWZFAtQ-unsplash.webp"
      },
      {
        tag: "Mariages",
        src: "./assets/images/gallery/mariage/jakob-owens-SiniLJkXhMc-unsplash.webp"
      },
      {
        tag: "Portrait",
        src: "./assets/images/gallery/portraits/nino-van-prattenburg--443cl1uR_8-unsplash.webp"
      },
      {
        tag: "Concert",
        src: "./assets/images/gallery/concerts/austin-neill-hgO1wFPXl3I-unsplash.webp"
      },
      {
        tag: "Entreprises",
        src: "./assets/images/gallery/entreprise/mateus-campos-felipe-Fsgzm8N0hIY-unsplash.webp"
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
        .attr("alt", "")
        .css("max-width", "100%");
      $gallery.append($img);
    });
  
    $gallery.mauGallery();
  });
  