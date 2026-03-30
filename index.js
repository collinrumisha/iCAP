function filterEquip(cat, btn) {
  document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
  btn.classList.add('active');
  document.querySelectorAll('.equip-card').forEach(card => {
    const show = cat === 'all' || card.dataset.cat === cat;
    card.style.display = show ? 'flex' : 'none';
  });
}