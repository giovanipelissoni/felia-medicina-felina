/**
 * FELIA - Medicina Felina & Cat Sitting
 * Interactive Frontend Scripts & Mobile Optimization
 */

// SVG Icon definitions (Full offline support without CDN)
const ICONS = {
  'activity': '<path d="M22 12h-4l-3 9L9 3l-3 9H2"/>',
  'activity-square': '<rect width="18" height="18" x="3" y="3" rx="2"/><path d="M17 12h-2l-2 5-2-10-2 5H7"/>',
  'award': '<circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/>',
  'book-open-check': '<path d="M8 3H2v15h7c1.7 0 3 1.3 3 3V7c0-2.2-1.8-4-4-4Z"/><path d="m16 12 2 2 4-4"/><path d="M22 6V3h-6c-2.2 0-4 1.8-4 4v14c0-1.7 1.3-3 3-3h7v-2"/>',
  'briefcase': '<rect width="20" height="14" x="2" y="7" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>',
  'building': '<rect width="16" height="20" x="4" y="2" rx="2" ry="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01"/><path d="M16 6h.01"/><path d="M12 6h.01"/><path d="M12 10h.01"/><path d="M12 14h.01"/><path d="M16 10h.01"/><path d="M16 14h.01"/><path d="M8 10h.01"/><path d="M8 14h.01"/>',
  'calendar': '<rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/>',
  'calendar-days': '<rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/><path d="M8 14h.01"/><path d="M12 14h.01"/><path d="M16 14h.01"/><path d="M8 18h.01"/><path d="M12 18h.01"/><path d="M16 18h.01"/>',
  'calendar-heart': '<path d="M3 10h18"/><path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M12 14.5c-.8-1-2.5-1-2.5 1 0 1.5 2.5 3 2.5 3s2.5-1.5 2.5-3c0-2-1.7-2-2.5-1z"/>',
  'cat': '<path d="M12 5c.67 0 1.35.09 2 .26 1.78-2 5.03-2.84 6.42-2.26 1.4.58-.42 7-.42 7 .57 1.07 1 2.24 1 3.5 0 4.42-4.03 8-9 8s-9-3.58-9-8c0-1.26.43-2.43 1-3.5 0 0-1.82-6.42-.42-7 1.39-.58 4.64.26 6.42 2.26.65-.17 1.33-.26 2-.26z"/><circle cx="9" cy="13" r="1"/><circle cx="15" cy="13" r="1"/><path d="M10 17s1 1 2 1 2-1 2-1"/>',
  'check-check': '<path d="M18 6 7 17l-5-5"/><path d="m22 10-7.5 7.5L13 16"/>',
  'check-circle': '<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>',
  'check-circle-2': '<circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/>',
  'chevron-down': '<path d="m6 9 6 6 6-6"/>',
  'clock': '<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>',
  'heart': '<path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>',
  'heart-handshake': '<path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/><path d="M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08v0c.82.82 2.13.85 3 .07l2.07-1.9a2.82 2.82 0 0 1 3.18 0l1.71 1.39"/>',
  'help-circle': '<circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><path d="M12 17h.01"/>',
  'home': '<path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>',
  'info': '<circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/>',
  'instagram': '<rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>',
  'lock': '<rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>',
  'mail': '<rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>',
  'map-pin': '<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>',
  'menu': '<line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/>',
  'message-circle': '<path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z"/>',
  'message-square': '<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>',
  'navigation': '<polygon points="3 11 22 2 13 21 11 13 3 11"/>',
  'phone': '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>',
  'pill': '<path d="m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z"/><path d="m8.5 8.5 7 7"/>',
  'send': '<path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/>',
  'shield': '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/>',
  'shield-check': '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/><path d="m9 12 2 2 4-4"/>',
  'sparkles': '<path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/><path d="M5 3v4"/><path d="M19 17v4"/><path d="M3 5h4"/><path d="M17 19h4"/>',
  'star': '<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>',
  'stethoscope': '<path d="M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1a.2.2 0 1 0 .3.3"/><path d="M8 15v1a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6v-4"/><circle cx="20" cy="10" r="2"/>',
  'syringe': '<path d="m18 2 4 4"/><path d="m17 7 3-3"/><path d="M19 9 8.7 19.3c-.4.4-1 .6-1.6.6H3v-4.1c0-.6.2-1.2.6-1.6L14 3.9"/><path d="m9 11 4 4"/><path d="m5 19-3 3"/><path d="m14 4 6 6"/>',
  'test-tube-2': '<path d="M21 7 6.82 21.18a2.83 2.83 0 0 1-3.99-.01v0a2.83 2.83 0 0 1 0-4L17 3"/><path d="m16 2 6 6"/><path d="M12 9h.01"/>',
  'truck': '<path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"/><path d="M15 18H9"/><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"/><circle cx="17" cy="18" r="2"/><circle cx="7" cy="18" r="2"/>',
  'user': '<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>',
  'volume-x': '<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><line x1="22" x2="16" y1="9" y2="15"/><line x1="16" x2="22" y1="9" y2="15"/>'
};

function renderAllIcons() {
  const elements = document.querySelectorAll('[data-lucide]');
  elements.forEach(el => {
    const iconName = el.getAttribute('data-lucide');
    const content = ICONS[iconName];
    if (content) {
      const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      svg.setAttribute('viewBox', '0 0 24 24');
      svg.setAttribute('width', '24');
      svg.setAttribute('height', '24');
      svg.setAttribute('fill', 'none');
      svg.setAttribute('stroke', 'currentColor');
      svg.setAttribute('stroke-width', '2');
      svg.setAttribute('stroke-linecap', 'round');
      svg.setAttribute('stroke-linejoin', 'round');
      
      if (el.className) svg.setAttribute('class', el.className);
      if (el.id) svg.setAttribute('id', el.id);
      svg.innerHTML = content;
      el.parentNode.replaceChild(svg, el);
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  renderAllIcons();
  initMobileNav();
  initFaqAccordion();
  initFormMasks();
  initLeadForm();
  initSmoothScroll();
  initNeighborhoodChecker();
  initServiceFilters();
});

// 1. Mobile Navigation
function initMobileNav() {
  const toggleBtn = document.getElementById('mobileToggle');
  const mobileNav = document.getElementById('mobileNav');
  const mobileLinks = document.querySelectorAll('.mobile-link, .mobile-nav-footer a');

  if (!toggleBtn || !mobileNav) return;

  toggleBtn.addEventListener('click', () => {
    mobileNav.classList.toggle('is-open');
    const isOpen = mobileNav.classList.contains('is-open');
    toggleBtn.setAttribute('aria-expanded', isOpen);
  });

  // Close when clicking background outside drawer
  mobileNav.addEventListener('click', (e) => {
    if (e.target === mobileNav) {
      closeMobileNav();
    }
  });

  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      closeMobileNav();
    });
  });
}

function closeMobileNav() {
  const mobileNav = document.getElementById('mobileNav');
  const toggleBtn = document.getElementById('mobileToggle');
  if (mobileNav) mobileNav.classList.remove('is-open');
  if (toggleBtn) toggleBtn.setAttribute('aria-expanded', 'false');
}
window.closeMobileNav = closeMobileNav;

// 2. Neighborhood Quick Checker
function initNeighborhoodChecker() {
  const chips = document.querySelectorAll('.chip-btn');
  const resultText = document.getElementById('checkerResultText');
  const bairroInput = document.getElementById('bairro');

  if (!chips.length || !resultText) return;

  chips.forEach(chip => {
    chip.addEventListener('click', () => {
      chips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');

      const bairro = chip.getAttribute('data-bairro');
      if (bairro === 'Outro') {
        resultText.innerHTML = `📍 <strong>Outro Bairro de Guarulhos / SP:</strong> Atendemos sob consulta rápida de rota. Fale conosco no WhatsApp para verificar horários no mesmo dia!`;
      } else if (bairro === 'Zona Norte SP') {
        resultText.innerHTML = `✅ <strong>Zona Norte de São Paulo (Santana, Tucuruvi, Jaçanã):</strong> Atendemos com rota diária para consultas e cat sitting!`;
        if (bairroInput) bairroInput.value = 'Zona Norte - SP';
      } else {
        resultText.innerHTML = `✅ <strong>${bairro} (Guarulhos):</strong> Atendemos com rota prioritária para consultas veterinárias e cat sitting!`;
        if (bairroInput) bairroInput.value = bairro;
      }
    });
  });
}

// 3. Service Category Filters
function initServiceFilters() {
  const tabs = document.querySelectorAll('.filter-tab');
  const cards = document.querySelectorAll('.service-card');

  if (!tabs.length || !cards.length) return;

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const filter = tab.getAttribute('data-filter');

      cards.forEach(card => {
        const cat = card.getAttribute('data-category');
        if (filter === 'all' || cat === filter) {
          card.classList.remove('is-hidden');
        } else {
          card.classList.add('is-hidden');
        }
      });
    });
  });
}

// 4. FAQ Accordion
function initFaqAccordion() {
  const headers = document.querySelectorAll('.accordion-header');

  headers.forEach(header => {
    header.addEventListener('click', () => {
      const item = header.parentElement;
      const content = item.querySelector('.accordion-content');
      const isExpanded = header.getAttribute('aria-expanded') === 'true';

      // Close all other items
      document.querySelectorAll('.accordion-item').forEach(otherItem => {
        if (otherItem !== item) {
          otherItem.classList.remove('is-open');
          const otherHeader = otherItem.querySelector('.accordion-header');
          const otherContent = otherItem.querySelector('.accordion-content');
          if (otherHeader) otherHeader.setAttribute('aria-expanded', 'false');
          if (otherContent) otherContent.style.maxHeight = null;
        }
      });

      // Toggle current item
      if (isExpanded) {
        item.classList.remove('is-open');
        header.setAttribute('aria-expanded', 'false');
        content.style.maxHeight = null;
      } else {
        item.classList.add('is-open');
        header.setAttribute('aria-expanded', 'true');
        content.style.maxHeight = content.scrollHeight + 'px';
      }
    });
  });
}

// 5. Form Phone Mask
function initFormMasks() {
  const phoneInput = document.getElementById('whatsapp');
  if (!phoneInput) return;

  phoneInput.addEventListener('input', (e) => {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length > 11) value = value.slice(0, 11);

    if (value.length > 10) {
      value = value.replace(/^(\d{2})(\d{5})(\d{4})$/, '($1) $2-$3');
    } else if (value.length > 6) {
      value = value.replace(/^(\d{2})(\d{4})(\d{0,4})$/, '($1) $2-$3');
    } else if (value.length > 2) {
      value = value.replace(/^(\d{2})(\d{0,5})$/, '($1) $2');
    } else if (value.length > 0) {
      value = value.replace(/^(\d{0,2})$/, '($1');
    }
    e.target.value = value;
  });
}

// 6. Select Service and Scroll to Form
function selectServiceAndScroll(serviceName) {
  const select = document.getElementById('service');
  const formSection = document.getElementById('agendamento');

  if (select) {
    let matched = false;
    for (let i = 0; i < select.options.length; i++) {
      if (select.options[i].value === serviceName || select.options[i].text.includes(serviceName)) {
        select.selectedIndex = i;
        matched = true;
        break;
      }
    }
    if (!matched) {
      select.value = serviceName;
    }
  }

  if (formSection) {
    // Scroll taking into account the mobile header
    const yOffset = -70;
    const y = formSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: 'smooth' });

    if (select) {
      select.focus();
      select.style.borderColor = 'var(--color-rose)';
      select.style.boxShadow = '0 0 0 4px rgba(217, 130, 155, 0.35)';
      setTimeout(() => {
        select.style.borderColor = '';
        select.style.boxShadow = '';
      }, 2000);
    }
  }
}
window.selectServiceAndScroll = selectServiceAndScroll;

// 7. Lead Form Submission & WhatsApp Message Generator
function initLeadForm() {
  const form = document.getElementById('leadForm');
  const successModal = document.getElementById('formSuccessModal');
  const waBtn = document.getElementById('waDirectSendBtn');
  const summaryP = document.getElementById('successSummary');

  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const tutorName = document.getElementById('tutorName').value.trim();
    const whatsapp = document.getElementById('whatsapp').value.trim();
    const cidade = document.getElementById('cidade').value;
    const bairro = document.getElementById('bairro').value.trim();
    const catName = document.getElementById('catName').value.trim();
    const service = document.getElementById('service').value;
    const preferredDate = document.getElementById('preferredDate').value;
    const preferredShift = document.getElementById('preferredShift').value;
    const notes = document.getElementById('notes').value.trim();

    let dataFormatada = 'A combinar';
    if (preferredDate) {
      const parts = preferredDate.split('-');
      if (parts.length === 3) {
        dataFormatada = `${parts[2]}/${parts[1]}/${parts[0]}`;
      }
    }

    const lead = {
      id: Date.now(),
      timestamp: new Date().toISOString(),
      tutorName,
      whatsapp,
      cidade,
      bairro,
      catName,
      service,
      preferredDate: dataFormatada,
      preferredShift,
      notes
    };

    try {
      const existingLeads = JSON.parse(localStorage.getItem('felia_leads') || '[]');
      existingLeads.push(lead);
      localStorage.setItem('felia_leads', JSON.stringify(existingLeads));
      console.log('Lead salvo com sucesso no navegador:', lead);
    } catch (err) {
      console.warn('Não foi possível salvar localmente:', err);
    }

    const whatsappMessage = 
`🐾 *NOVO PRÉ-AGENDAMENTO FELIA* 🐾

👤 *Tutor(a):* ${tutorName}
📱 *WhatsApp:* ${whatsapp}
📍 *Local:* ${bairro} - ${cidade}
🐱 *Nome do Gato:* ${catName}
🩺 *Serviço de Interesse:* ${service}
🗓️ *Data Preferencial:* ${dataFormatada}
⏰ *Período:* ${preferredShift}
${notes ? `📝 *Observações:* ${notes}` : ''}

_Olá Dra. Gabriella e Giovana, preenchi a ficha no site da FELIA e gostaria de confirmar a disponibilidade de horário!_`;

    const phoneTarget = '5511999999999';
    const waUrl = `https://wa.me/${phoneTarget}?text=${encodeURIComponent(whatsappMessage)}`;

    if (waBtn) {
      waBtn.href = waUrl;
    }

    if (summaryP) {
      summaryP.innerHTML = `Olá, <strong>${tutorName}</strong>! Sua solicitação para <strong>${catName}</strong> (${service} em ${bairro}) foi registrada com sucesso. Toque no botão abaixo para abrir a conversa no WhatsApp e sincronizar na agenda:`;
    }

    form.style.display = 'none';
    if (successModal) {
      successModal.style.display = 'block';
      successModal.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  });
}

function resetBookingForm() {
  const form = document.getElementById('leadForm');
  const successModal = document.getElementById('formSuccessModal');

  if (form && successModal) {
    form.reset();
    form.style.display = 'block';
    successModal.style.display = 'none';
    form.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
}
window.resetBookingForm = resetBookingForm;

// 8. Smooth Scroll Fix with offset
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#' || targetId === '') return;
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        const headerOffset = 70;
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}
