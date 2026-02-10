/* ============================================================
   ASEAN CSCO Handbook — JavaScript
   Minimal. Functional. No bloat.
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* ---- Navbar scroll state ---- */
  const nav = document.getElementById('nav');
  const onScroll = () => {
    nav.classList.toggle('nav--scrolled', window.scrollY > 60);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---- Mobile menu ---- */
  const toggle = document.getElementById('navToggle');
  const links = document.getElementById('navLinks');

  toggle.addEventListener('click', () => {
    const isOpen = links.classList.toggle('open');
    toggle.classList.toggle('active');
    toggle.setAttribute('aria-expanded', isOpen);
  });

  links.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      links.classList.remove('open');
      toggle.classList.remove('active');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });

  /* ---- Scroll reveal ---- */
  const revealEls = document.querySelectorAll('[data-reveal]');
  const revealObs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        revealObs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -30px 0px' });

  revealEls.forEach(el => revealObs.observe(el));

  /* ---- "Steal This Idea" clipboard copy ---- */
  const ideaData = {
    'hospital-on-wheels': {
      idea: 'Hospital on Wheels',
      summary: 'Mobile healthcare unit that brings telemedicine, basic diagnostics, and prescription services directly to underserved neighborhoods on a fixed weekly schedule.',
      components: [
        'Converted vehicle with basic medical equipment',
        'Telemedicine link to city hospital',
        'Weekly route covering underserved areas',
        'Citizen appointment system via app or phone',
        'Partnership with local health department'
      ],
      estimated_setup: '3-6 months',
      budget_range: 'Medium (vehicle + equipment + staffing)',
      source: 'ASEAN CSCO Handbook — Nakhon Si Thammarat Model'
    },
    'digital-catalog': {
      idea: 'Digital Catalog for Local Vendors',
      summary: 'City-maintained online marketplace linking physical market stalls to digital storefronts via QR codes. Zero tech skills required from vendors.',
      components: [
        'Simple web platform with vendor profiles',
        'QR code generation per stall/vendor',
        'Photo + product upload (can be done by city staff)',
        'Optional ordering or inquiry system',
        'Training session for market vendors'
      ],
      estimated_setup: '2-4 months',
      budget_range: 'Low (web hosting + QR printing)',
      source: 'ASEAN CSCO Handbook — Nakhon Si Thammarat Model'
    },
    'mayors-classroom': {
      idea: "Mayor's Classroom",
      summary: 'Monthly public session where the mayor teaches and answers real questions from citizens. Live broadcast, no scripts, no press conferences.',
      components: [
        'Monthly scheduled public session',
        'Live streaming setup (phone + internet is enough)',
        'Open Q&A from citizens (in-person + online)',
        'Social media promotion and archiving',
        'Follow-up action tracking from questions raised'
      ],
      estimated_setup: '1 month',
      budget_range: 'Very low (existing venue + phone)',
      source: 'ASEAN CSCO Handbook — Nakhon Si Thammarat Model'
    },
    '5-star-governance': {
      idea: '5-Star Governance',
      summary: 'Real-time, per-interaction citizen rating of every city service. Visible to department heads. Accountability through transparency.',
      components: [
        'Rating system integrated into city service app',
        'Per-interaction feedback (not annual surveys)',
        'Dashboard visible to department heads',
        'Monthly performance reports per department',
        'Recognition system for high-performing teams'
      ],
      estimated_setup: '3-5 months',
      budget_range: 'Low-Medium (app feature + dashboard)',
      source: 'ASEAN CSCO Handbook — Nakhon Si Thammarat Model'
    },
    'metaverse-classroom': {
      idea: 'Metaverse Classroom',
      summary: 'AR/VR integrated into real classrooms for 11,000 students. 300 trained teachers, 1,500 digital lessons. Parents visit and demand expansion — no tech push needed.',
      components: [
        'VR/AR headsets deployed in school classrooms',
        '1,500 digital lesson plans across subjects',
        'Teacher training program (300+ trained)',
        'Parent engagement events (van tours to schools)',
        'Partnership with EdTech providers and depa'
      ],
      estimated_setup: '4-8 months',
      budget_range: 'Medium (hardware + content + training)',
      source: 'ASEAN CSCO Handbook — Nakhon Si Thammarat Model'
    },
    'data-driven-decisions': {
      idea: 'Data-Driven Decision Making',
      summary: 'Every city meeting starts with a live dashboard, not a PowerPoint. Decisions anchored in real-time citizen data.',
      components: [
        'Live dashboard in every meeting room',
        'Real-time citizen complaint/report data feed',
        'Sensor data integration (flood, traffic, etc.)',
        'Decision logging linked to data triggers',
        'Training for department heads on data literacy'
      ],
      estimated_setup: '4-6 months',
      budget_range: 'Medium (dashboard + data integration)',
      source: 'ASEAN CSCO Handbook — Nakhon Si Thammarat Model'
    }
  };

  document.querySelectorAll('.toolkit__steal-btn').forEach(btn => {
    btn.addEventListener('click', async () => {
      const ideaKey = btn.dataset.idea;
      const data = ideaData[ideaKey];
      if (!data) return;

      const json = JSON.stringify(data, null, 2);

      try {
        await navigator.clipboard.writeText(json);

        // Show inline message
        const msg = btn.parentElement.querySelector('.toolkit__copied-msg');
        msg.classList.add('visible');
        setTimeout(() => msg.classList.remove('visible'), 2500);

        // Show toast
        showToast(`"${data.idea}" copied to clipboard — paste anywhere to use.`);
      } catch (err) {
        // Fallback
        showToast('Copy failed — try right-clicking and pasting manually.');
      }
    });
  });

  /* ---- Vibes Dashboard Widget ---- */
  const vibesFeed = document.getElementById('gdelt-feed');
  if (vibesFeed) {
    const vibesData = [
      { icon: '📊', title: 'Reports: 142', desc: 'New citizen issues logged today. AI auto-classified and routed.', color: '#2E8BC0' },
      { icon: '📈', title: 'Traffic Alert', desc: 'AI detected unusual congestion on Route 401. Signal timing adjusted.', color: '#e53e3e' },
      { icon: '✅', title: 'Resolution: 98%', desc: 'Park renovation completed. Citizen satisfaction survey: 4.7/5.', color: '#38a169' },
      { icon: '⚠️', title: 'Aging Case', desc: 'Streetlight repair in Soi 12 escalated. >72hrs unresolved.', color: '#dd6b20' }
    ];
    vibesFeed.innerHTML = '';
    vibesData.forEach(v => {
      const card = document.createElement('div');
      card.className = 'platform__vibes-card';
      card.style.cssText = '';
      card.innerHTML = `<div style="position:absolute;top:0;left:0;width:100%;height:4px;background:${v.color}"></div><div class="vibes-icon">${v.icon}</div><h4>${v.title}</h4><p>${v.desc}</p>`;
      vibesFeed.appendChild(card);
    });
  }

  /* ---- Toast ---- */
  const toast = document.getElementById('toast');
  let toastTimer;

  function showToast(message) {
    clearTimeout(toastTimer);
    toast.textContent = message;
    toast.classList.add('visible');
    toastTimer = setTimeout(() => {
      toast.classList.remove('visible');
    }, 3500);
  }

});
