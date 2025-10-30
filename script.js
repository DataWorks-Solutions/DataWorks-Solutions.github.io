// Espera a que la página esté cargada
document.addEventListener('DOMContentLoaded', () => {

  // --- Lógica para las solapas (tabs) ---
  // (Usado en index.html, precios.html, recursos.html)
  const tabs = document.querySelectorAll('#tab-navigation a');
  const panels = document.querySelectorAll('#tab-content section');

  // Clases de estilo para los estados activo/inactivo
  const activeTabClasses = ['border-b-primary', 'text-dw-dark-blue', 'dark:text-white'];
  const inactiveTabClasses = ['border-b-transparent', 'text-dw-dark-gray', 'dark:text-gray-400'];

  tabs.forEach(tab => {
    tab.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = tab.getAttribute('href');

      tabs.forEach(t => {
        t.classList.remove(...activeTabClasses);
        t.classList.add(...inactiveTabClasses);
      });

      tab.classList.add(...activeTabClasses);
      tab.classList.remove(...inactiveTabClasses);

      panels.forEach(panel => {
        panel.classList.add('hidden');
        if (panel.id === targetId.substring(1)) {
          panel.classList.remove('hidden');
        }
      });
    });
  });

  // --- Lógica para el menú hamburguesa ---
  // (Usado en TODAS las páginas)
  const boton = document.getElementById('boton-movil');
  const menu = document.getElementById('menu-movil');
  const icono = document.getElementById('icono-menu');

  if (boton && menu && icono) {
    boton.addEventListener('click', () => {
      menu.classList.toggle('hidden');
      if (menu.classList.contains('hidden')) {
        icono.textContent = 'menu';
      } else {
        icono.textContent = 'close';
      }
    });
  }

});