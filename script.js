/**
 * FELIA - Medicina Felina & Cat Sitting Domiciliar
 * Core Interaction Script
 * Guarulhos & São Paulo
 */

document.addEventListener('DOMContentLoaded', () => {
  initHeaderScroll();
  initMobileDrawer();
  initNeighborhoodChips();
  initServiceFilters();
  initFaqAccordion();
  initPhoneMask();
  initLeadForm();
  initSmoothScroll();
});

/* --------------------------------------------------------------------------
   1. Sticky Header Scroll Indicator
   -------------------------------------------------------------------------- */
function initHeaderScroll() {
  const header = document.getElementById('header');
  if (!header) return;

  const onScroll = () => {
    if (window.scrollY > 20) {
      header.classList.add('is-scrolled');
    } else {
      header.classList.remove('is-scrolled');
    }
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

/* --------------------------------------------------------------------------
   2. Mobile Drawer Navigation
   -------------------------------------------------------------------------- */
function initMobileDrawer() {
  const trigger = document.getElementById('mobileMenuTrigger');
  const drawer = document.getElementById('mobileMenuDrawer');
  const closeBtn = document.getElementById('drawerCloseBtn');
  const backdrop = document.getElementById('drawerBackdrop');
  const links = drawer ? drawer.querySelectorAll('.drawer-link') : [];

  if (!drawer || !trigger) return;

  const openDrawer = () => {
    drawer.classList.add('is-open');
    drawer.setAttribute('aria-hidden', 'false');
    trigger.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  };

  const closeDrawer = () => {
    drawer.classList.remove('is-open');
    drawer.setAttribute('aria-hidden', 'true');
    trigger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  };

  window.closeDrawer = closeDrawer;

  trigger.addEventListener('click', () => {
    const isOpen = drawer.classList.contains('is-open');
    if (isOpen) {
      closeDrawer();
    } else {
      openDrawer();
    }
  });

  if (closeBtn) closeBtn.addEventListener('click', closeDrawer);
  if (backdrop) backdrop.addEventListener('click', closeDrawer);

  links.forEach(link => {
    link.addEventListener('click', () => {
      closeDrawer();
    });
  });

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && drawer.classList.contains('is-open')) {
      closeDrawer();
    }
  });
}

/* --------------------------------------------------------------------------
   3. Interactive Neighborhood Chips (Guarulhos & SP)
   -------------------------------------------------------------------------- */
function initNeighborhoodChips() {
  const pillsContainer = document.getElementById('bairrosPills');
  const feedbackText = document.getElementById('bairrosFeedbackText');
  const bairroInput = document.getElementById('bairro');

  if (!pillsContainer || !feedbackText) return;

  const chips = pillsContainer.querySelectorAll('.bairro-chip');

  chips.forEach(chip => {
    chip.addEventListener('click', () => {
      chips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');

      const bairro = chip.getAttribute('data-bairro') || chip.textContent.trim();

      if (bairro === 'Outro') {
        feedbackText.innerHTML = `<strong>Outro Bairro ou Cidade:</strong> Atendemos sob consulta de rota. Entre em contato pelo WhatsApp para verificar disponibilidade de encaixe no dia!`;
      } else if (bairro === 'Zona Norte SP') {
        feedbackText.innerHTML = `<strong>Zona Norte de São Paulo (Santana, Tucuruvi, Jaçanã):</strong> Rota confirmada para consultas domiciliares e cat sitting!`;
        if (bairroInput) bairroInput.value = 'Zona Norte (SP)';
      } else {
        feedbackText.innerHTML = `<strong>${bairro} (Guarulhos):</strong> Rota prioritária diária para consultas veterinárias e visitas de cat sitting!`;
        if (bairroInput) bairroInput.value = bairro;
      }
    });
  });
}

/* --------------------------------------------------------------------------
   4. Services Category Filter Tabs
   -------------------------------------------------------------------------- */
function initServiceFilters() {
  const filterBar = document.getElementById('servicesFilterBar');
  const cards = document.querySelectorAll('.service-card');

  if (!filterBar || !cards.length) return;

  const buttons = filterBar.querySelectorAll('.service-tab-btn');

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter') || 'all';

      cards.forEach(card => {
        const cat = card.getAttribute('data-cat');
        if (filter === 'all' || cat === filter) {
          card.classList.remove('is-hidden');
        } else {
          card.classList.add('is-hidden');
        }
      });
    });
  });
}

/* --------------------------------------------------------------------------
   5. Select Service & Smooth Scroll to Form
   -------------------------------------------------------------------------- */
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
    const headerOffset = 76;
    const elementPosition = formSection.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });

    if (select) {
      setTimeout(() => {
        select.focus();
        select.style.borderColor = 'var(--color-rose)';
        select.style.boxShadow = '0 0 0 4px rgba(162, 72, 103, 0.25)';
        setTimeout(() => {
          select.style.borderColor = '';
          select.style.boxShadow = '';
        }, 2000);
      }, 500);
    }
  }
}
window.selectServiceAndScroll = selectServiceAndScroll;

/* --------------------------------------------------------------------------
   6. FAQ Accordion
   -------------------------------------------------------------------------- */
function initFaqAccordion() {
  const accordion = document.getElementById('faqAccordion');
  if (!accordion) return;

  const items = accordion.querySelectorAll('.accordion-item');

  items.forEach(item => {
    const header = item.querySelector('.accordion-header');
    const panel = item.querySelector('.accordion-panel');

    if (!header || !panel) return;

    header.addEventListener('click', () => {
      const isOpen = item.classList.contains('is-open');

      // Close all other items
      items.forEach(otherItem => {
        if (otherItem !== item) {
          otherItem.classList.remove('is-open');
          const otherHeader = otherItem.querySelector('.accordion-header');
          const otherPanel = otherItem.querySelector('.accordion-panel');
          if (otherHeader) otherHeader.setAttribute('aria-expanded', 'false');
          if (otherPanel) otherPanel.style.maxHeight = null;
        }
      });

      // Toggle current item
      if (isOpen) {
        item.classList.remove('is-open');
        header.setAttribute('aria-expanded', 'false');
        panel.style.maxHeight = null;
      } else {
        item.classList.add('is-open');
        header.setAttribute('aria-expanded', 'true');
        panel.style.maxHeight = panel.scrollHeight + 'px';
      }
    });
  });
}

/* --------------------------------------------------------------------------
   7. Form Phone Mask (XX) XXXXX-XXXX
   -------------------------------------------------------------------------- */
function initPhoneMask() {
  const input = document.getElementById('whatsapp');
  if (!input) return;

  input.addEventListener('input', (e) => {
    let v = e.target.value.replace(/\D/g, '');
    if (v.length > 11) v = v.slice(0, 11);

    if (v.length > 10) {
      v = v.replace(/^(\d{2})(\d{5})(\d{4})$/, '($1) $2-$3');
    } else if (v.length > 6) {
      v = v.replace(/^(\d{2})(\d{4})(\d{0,4})$/, '($1) $2-$3');
    } else if (v.length > 2) {
      v = v.replace(/^(\d{2})(\d{0,5})$/, '($1) $2');
    } else if (v.length > 0) {
      v = v.replace(/^(\d{0,2})$/, '($1');
    }
    e.target.value = v;
  });
}

/* --------------------------------------------------------------------------
   8. Lead Form Submission & WhatsApp Message Dispatch
   -------------------------------------------------------------------------- */
function initLeadForm() {
  const form = document.getElementById('leadForm');
  const successBox = document.getElementById('formSuccessMessage');
  const waBtn = document.getElementById('waDirectButton');
  const summaryText = document.getElementById('successSummaryText');

  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const tutorName = document.getElementById('tutorName')?.value.trim();
    const whatsapp = document.getElementById('whatsapp')?.value.trim();
    const cidade = document.getElementById('cidade')?.value || 'Guarulhos';
    const bairro = document.getElementById('bairro')?.value.trim();
    const catName = document.getElementById('catName')?.value.trim();
    const service = document.getElementById('service')?.value;
    const preferredDate = document.getElementById('preferredDate')?.value;
    const preferredShift = document.getElementById('preferredShift')?.value || 'Qualquer horário';
    const notes = document.getElementById('notes')?.value.trim();

    // Validation
    if (!tutorName || !whatsapp || !bairro || !catName || !service) {
      alert('Por favor, preencha todos os campos obrigatórios marcados com (*).');
      return;
    }

    let dataFormatada = 'A combinar';
    if (preferredDate) {
      const parts = preferredDate.split('-');
      if (parts.length === 3) {
        dataFormatada = `${parts[2]}/${parts[1]}/${parts[0]}`;
      }
    }

    // Save lead to LocalStorage (browser local storage for data preservation)
    const leadRecord = {
      id: Date.now(),
      created_at: new Date().toISOString(),
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
      const leads = JSON.parse(localStorage.getItem('felia_leads') || '[]');
      leads.push(leadRecord);
      localStorage.setItem('felia_leads', JSON.stringify(leads));
    } catch (err) {
      console.warn('LocalStorage error:', err);
    }

    // Compose formatted WhatsApp text
    const message = 
`🐾 *PRÉ-AGENDAMENTO FELIA* 🐾

👤 *Tutor(a):* ${tutorName}
📱 *WhatsApp:* ${whatsapp}
📍 *Endereço:* ${bairro} - ${cidade}
🐱 *Nome do Gatinho:* ${catName}
🩺 *Serviço:* ${service}
🗓️ *Data Desejada:* ${dataFormatada}
⏰ *Período:* ${preferredShift}
${notes ? `📝 *Observações:* ${notes}` : ''}

_Olá Dra. Gabriella e Giovana, preenchi a ficha no site da FELIA e gostaria de confirmar este agendamento!_`;

    const phoneTarget = '5511999999999';
    const waUrl = `https://wa.me/${phoneTarget}?text=${encodeURIComponent(message)}`;

    if (waBtn) {
      waBtn.href = waUrl;
    }

    if (summaryText) {
      summaryText.innerHTML = `Olá, <strong>${tutorName}</strong>! Sua solicitação para <strong>${catName}</strong> (${service} em ${bairro}) foi gerada com sucesso. Toque no botão abaixo para confirmar diretamente no WhatsApp das profissionais:`;
    }

    form.style.display = 'none';
    if (successBox) {
      successBox.style.display = 'block';
      successBox.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  });
}

function resetFormToStart() {
  const form = document.getElementById('leadForm');
  const successBox = document.getElementById('formSuccessMessage');

  if (form && successBox) {
    form.reset();
    form.style.display = 'block';
    successBox.style.display = 'none';
    form.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
}
window.resetFormToStart = resetFormToStart;

/* --------------------------------------------------------------------------
   9. Smooth Scroll with Header Offset
   -------------------------------------------------------------------------- */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href === '#' || href === '') return;

      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        const headerOffset = 76;
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
