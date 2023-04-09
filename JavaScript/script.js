      const gallery = document.querySelector('.gallery');
      const lightbox = document.querySelector('.lightbox');
      const lightboxImg = document.querySelector('.lightbox-img');
      const lightboxCaption = document.querySelector('.lightbox-caption');
      const images = [
        {
          src: 'images/philipp-Q-CRMFxuT6s-unsplash.jpg',
          hdSrc: 'images/philipp-Q-CRMFxuT6s-unsplash (1).jpg',
          caption: 'Beautiful image of Deutschland'
        },
        {
          src: 'images/ricky-J-0gv8U-tEQ-unsplash.jpg',
          hdSrc: 'images/ricky-J-0gv8U-tEQ-unsplash (1).jpg',
          caption: 'a red tower sitting next to a tall building'
        },
        {
          src: 'images/mehdi-el-marouazi-mi_J6A6QE3Q-unsplash.jpg',
          hdSrc: 'images/mehdi-el-marouazi-mi_J6A6QE3Q-unsplash (1).jpg',
          caption: 'the person standing in the middle of the desert'
        },
        {
          src: 'images/dan-cutler-6IpuZTqDLv8-unsplash.jpg',
          hdSrc: 'images/dan-cutler-6IpuZTqDLv8-unsplash (1).jpg',
          caption: 'large body of water with mountain in the background'
        },
        {
          src: 'images/rafael-hoyos-weht-A3-1ef_i0-I-unsplash.jpg',
          hdSrc: 'images/rafael-hoyos-weht-A3-1ef_i0-I-unsplash (1).jpg',
          caption: 'a truck is sitting in the sand'
        },
        {
          src: 'images/marek-piwnicki-ynuUJH9GniI-unsplash.jpg',
          hdSrc: 'images/marek-piwnicki-ynuUJH9GniI-unsplash (1).jpg',
          caption: 'a view of mountain range from distance'
        },
        {
          src: 'images/niccolo-chiamori-FUz8mgAhfgw-unsplash.jpg',
          hdSrc: 'images/niccolo-chiamori-FUz8mgAhfgw-unsplash (1).jpg',
          caption: 'statue of liberty holding torch in right hand'
        },
        {
          src: 'images/milos-lopusina-FdP7SLRD6TA-unsplash.jpg',
          hdSrc: 'images/kevin-charit-iGhNV_HPJ-M-unsplash (1).jpg',
          caption: ' train travelling through snow covered country side'
        },
        {
          src: 'images/lokman-salan-8h-KPLjHAKg-unsplash (1).jpg',
          hdSrc: 'images/lokman-salan-8h-KPLjHAKg-unsplash.jpg',
          caption: 'a view of city from rooftop'
        },
        {
          src: 'images/nhan-hoang-cdIV8TTI6ZY-unsplash.jpg',
          hdSrc: 'images/nhan-hoang-cdIV8TTI6ZY-unsplash (1).jpg',
          caption: 'a lone tree in a field with mountain in the background'
        },
        {
          src: 'images/mono-log-n9rhLtixIMM-unsplash.jpg',
          hdSrc: 'images/mono-log-n9rhLtixIMM-unsplash (1).jpg',
          caption: 'a tall building covered in a green plant'
        },
        {
          src: 'images/moise-m-xzLM9LEoIZg-unsplash.jpg',
          hdSrc: 'images/moise-m-xzLM9LEoIZg-unsplash (1).jpg',
          caption: 'a very tall building in the middle of city'
        },
        {
          src: 'images/isaac-wolff-0cjgh9SK72E-unsplash.jpg',
          hdSrc: 'images/isaac-wolff-0cjgh9SK72E-unsplash (1).jpg',
          caption: 'a sailboat in the middle of large body of water'
        },
        {
          src: 'images/francesco-ungaro-elKBl2BcMiU-unsplash.jpg',
          hdSrc: 'images/francesco-ungaro-elKBl2BcMiU-unsplash (1).jpg',
          caption: 'view of building through some rocks'
        },
        {
          src: 'images/mario-esposito-Wokcw4XYiAk-unsplash.jpg',
          hdSrc: 'images/mario-esposito-Wokcw4XYiAk-unsplash (1).jpg',
          caption: 'a man riding a bike down a street next to a building'
        },
      ];
      
      images.forEach(image => {
        const img = document.createElement('img');
        img.src = image.src;
        img.dataset.hdSrc = image.hdSrc;
        img.dataset.caption = image.caption;
        gallery.appendChild(img);
      });
      
      gallery.addEventListener('click', event => {
        if (event.target.tagName === 'IMG') {
          lightboxImg.src = event.target.dataset.hdSrc;
          lightboxCaption.textContent = event.target.dataset.caption;
          lightbox.classList.add('visible');
        }
      });
      
      lightbox.addEventListener('click', () => {
        lightbox.classList.remove('visible');
      });
      
      lightboxImg.onerror = () => {
        console.error('Failed to load image:', lightboxImg.src);
      };