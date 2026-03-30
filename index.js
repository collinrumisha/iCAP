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

document.addEventListener('DOMContentLoaded', () => {
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