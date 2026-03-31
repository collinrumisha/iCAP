function filterEquip(category, activeTab) {
  document.querySelectorAll('.js-filter-tab').forEach(tab => tab.classList.remove('active'));
  activeTab.classList.add('active');

  document.querySelectorAll('.equip-card').forEach(card => {
    const show = category === 'all' || card.dataset.cat === category;
    card.style.display = show ? 'flex' : 'none';
  });
}

function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
}

const equipmentImageMap = {
  'Sony A7 IV': 'assets/sony A7 IV.webp',
  'Canon R6 Mark II': 'assets/canon r6 mark II.webp',
  'Sony A7 III': 'assets/sony A7 III.webp',
  'DJI Osmo Pocket 3': 'assets/DJI Osmo Pocket 3 Combo.webp',
  'Sony A7 IV (Pentagon)': 'assets/sony A7 IV.webp',
  'Sony G Master 24-105mm f/4': 'assets/Sony G Master 24-105mm.png',
  'Canon f/1.8 / 24-105mm IS USM': 'assets/Canon 24-105mm ISUSM.png',
  'Tamron 22-200mm': 'assets/Tamron 22-200mm.webp',
  'Canon f/2.8 70-200 IS USM': 'assets/Canon F2.8 70-200 IS USM.webp',
  'Sony f/2.8 50mm': 'assets/Sony f2.8 50mm.webp',
  'Metabone EF to RF': 'assets/Metabones EF to RF.jpeg',
  'Metabone EF to Z': 'assets/Metabones EF to Z.jpeg',
  'Godox SL 150 (Key Light)': 'assets/Godox SL 150 (Key Light).jpg',
  'Studio Light': 'assets/LED Light Studio Light.png',
  'Softbox + Diffuser Kit': 'assets/Softbox%20%2B%20Diffuser%20Kit%2065%20round.jpg',
  'Soft Box': 'assets/Softbox%20%2B%20Diffuser%20Kit%2045.jpg',
  'LED 300 RGB Panel': 'assets/LED 300 RGB Panel.webp',
  'Neewer FL10 Spotlight': 'assets/Neewer FL10 Spotlight.jpeg',
  'Lantern Light (Orb)': 'assets/Lantern-Light-(Orb).jpg',
  '30W + 20W Fill Light Set': 'assets/30W%20%2B%2020W%20Fill%20Light%20Set.jpg',
  'Godox V850III Flash': 'assets/Godox V850III Flash.webp',
  'DJI Mic Mini': 'assets/DJI Mic Mini.png',
  'Mic Stick': 'assets/mic stick mini.png',
  'DJI RS4 Gimbal Combo': 'assets/DJI RS4 Combo Gimbal.jpg',
  'DJI Mini 4K Drone': 'assets/DJI Mini 4K Drone.webp',
  'Heavyduty Tripod Stand': 'assets/Heavyduty Tripod Stand.webp',
  'K&F Camera Stand': 'assets/K&F Camera Stand  Tripod.webp',
  'Stand': 'assets/K&F Stand Mobile Vlog.webp',
  'SD Card 256GB 200mbps': 'assets/SD Card 256GB (200mbps).webp',
  'SSD 1TB Backup Drive': 'assets/SSD 1TB Backup Drive.jpg',
  'SSD 128GB 200mbps': 'assets/SSD 128GB (200mbps).jpeg'
};

function renderEquipmentImages() {
  document.querySelectorAll('.equip-card').forEach(card => {
    if (card.querySelector('.equip-image-wrap')) {
      return;
    }

    const nameElement = card.querySelector('.equip-name');
    const imagePath = nameElement ? equipmentImageMap[nameElement.textContent.trim()] : '';
    if (!imagePath) {
      return;
    }

    const imageWrap = document.createElement('div');
    imageWrap.className = 'equip-image-wrap';

    const image = document.createElement('img');
    image.className = 'equip-image';
    image.src = imagePath;
    image.alt = nameElement.textContent.trim();
    image.loading = 'lazy';
    image.addEventListener('error', () => {
      imageWrap.remove();
      card.classList.remove('has-image');
    });

    imageWrap.appendChild(image);
    card.insertBefore(imageWrap, card.querySelector('.equip-cat'));
    card.classList.add('has-image');
  });
}

document.addEventListener('DOMContentLoaded', () => {
  renderEquipmentImages();

  const nav = document.querySelector('nav');
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelectorAll('.nav-links a');

  if (nav && navToggle) {
    navToggle.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('nav-open');
      navToggle.setAttribute('aria-expanded', String(isOpen));
    });

    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        nav.classList.remove('nav-open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  document.querySelectorAll('.js-scroll-target').forEach(button => {
    button.addEventListener('click', () => {
      const targetId = button.dataset.target;
      if (targetId) {
        scrollToSection(targetId);
      }
    });
  });

  document.querySelectorAll('.js-filter-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      const category = tab.dataset.cat || 'all';
      filterEquip(category, tab);
    });
  });
});