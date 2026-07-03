// ==========================================
// 1. DỮ LIỆU TỪ CV VÀ CẤU HÌNH TRANG
// ==========================================
const portfolioData = {
  profile: {
    name: "Thể Văn Lộc (Ace Rem)",
    role: "",
    avatar: "L",
    description: "Mong muốn phát triển tại các vị trí nhân viên văn phòng, mong muốn được học hỏi, rèn luyện kỹ năng tư vấn, làm việc với dữ liệu. Luôn làm việc với tinh thần trách nhiệm, khả năng tiếp thu nhanh và sự kiên trì.",
    objective: "Đóng góp vào việc gia tăng doanh số, tối ưu hóa hệ thống và phát triển lâu dài cùng doanh nghiệp.",
    skills: ["Java/C++/Python", "SQL & Git", "Windows/Linux", "Bộ công cụ văn phòng", "Android system"],
    cvLink: "assets/cv.pdf"
  },
  contacts: {
    email: "aceloc2003@gmail.com",
    github: "https://github.com/Ace-Rem",
    githubLabel: "github.com/Ace-Rem",
    facebook: "https://www.facebook.com/rem.ace.54",
    facebookLabel: "facebook.com/Ace",
    zalo: "https://zalo.me/0375964170",
    phone: "0375964170",
    phoneLabel: "0375964170",
    address: "Phố Hữu Nghị, Phường Tùng Thiện, Hà Nội"
  },
  personalInfo: [
    { icon: "◉", label: "Họ và tên", value: "Thể Văn Lộc" },
    { icon: "◌", label: "Ngày sinh", value: "20/04/2003" },
    { icon: "⌂", label: "Địa chỉ", value: "Tùng Thiện, Hà Nội" },
    { icon: "✦", label: "Ngành học", value: "Công nghệ thông tin" },
    { icon: "▣", label: "Trường học", value: "Đại học Công Nghiệp Việt - Hung" }
  ],
  projects: [
    {
      icon: "▦",
      title: "Hệ thống QLCV (TaskAI)",
      time: "01/2026 - 04/2026",
      desc: "Lên ý tưởng, hỗ trợ xây dựng chức năng web/mobile và theo dõi luồng API/Dữ liệu.",
      tech: ["AI Integration", "API", "Testing"],
      github: "https://github.com/Ace-Rem/QLCV-AI-APK/releases"
    },
    {
      icon: "◈",
      title: "Website đọc/sáng tác truyện",
      time: "02/2025 - 05/2025",
      desc: "Hỗ trợ xây dựng, kiểm tra chức năng đăng nhập, tìm kiếm và làm quen quản lý dữ liệu backend.",
      tech: ["Web System", "Backend Data"],
      github: "https://github.com/Ace-Rem"
    },
    {
      icon: "💻",
      title: "Website bán laptop Ace-Rem",
      time: "02/2024 - 05/2024",
      desc: "Thực hành xây dựng website cơ bản, kiểm tra chức năng và xử lý dữ liệu.",
      tech: ["E-commerce", "Data Processing"],
      github: "https://github.com/Ace-Rem"
    },
    {
      icon: "🎵",
      title: "App Play Music Ace-Rem",
      time: "04/2025 - 07/2025",
      desc: "Xây dựng chức năng phát nhạc, tìm hiểu xử lý media và kiểm tra UX.",
      tech: ["Mobile App", "Media Processing"],
      github: "https://github.com/Ace-Rem/MPAR-app/releases"
    }
  ],
  resume: {
    education: "Cử nhân chuyên ngành Công nghệ thông tin (2022 - 2026).",
    skillsDesc: [
      "Hiểu cơ bản về lập trình (Java, C++, Python), kiến thức OOP, luồng hệ thống và frontend/backend.",
      "Sử dụng công cụ & CSDL cơ bản: SQL, Git/GitHub, Linux, Windows Forms, ASP.NET Web.",
      "Cài đặt, tối ưu HĐH máy tính; hiểu biết Android system và xử lý lỗi thiết bị/phần mềm cơ bản.",
      "Quản lý dữ liệu, chỉnh sửa đa phương tiện (ảnh/video/âm thanh) và Tin học văn phòng (Word, Excel, PowerPoint) cơ bản.",
      "Kỹ năng mềm: Phân tích vấn đề, tư duy logic, làm quen nhanh công cụ mới, cẩn thận và làm việc nhóm."
    ],
  },
  pages: [
    { id: "intro", title: "Giới thiệu", color: "#4B5694", bgImage: "./image/anh1.webp" },
    { id: "projects", title: "Dự án", color: "#DB1A1A", bgImage: "./image/anh2.webp" },
    { id: "profile", title: "Hồ sơ", color: "#FF9D23", bgImage: "./image/anh3.webp" },
    { id: "contact", title: "Liên hệ", color: "#48A111", bgImage: "./image/anh4.webp" }
  ]
};

// ==========================================
// 2. DOM ELEMENTS & BIẾN TRẠNG THÁI
// ==========================================
const root = document.documentElement;
const logoContainer = document.getElementById("logo-container");
const menu = document.querySelector(".header-menu");
const track = document.querySelector(".carousel-track");
const indicators = document.querySelector(".carousel-indicators");
const circle = document.querySelector(".circle-navigation");
const circleIndex = document.querySelector(".circle-index");
const circleLabel = document.getElementById("circle-label-text");
const shell = document.querySelector(".carousel-shell");
const profileContainer = document.querySelector(".profile-card");
const themeToggle = document.querySelector(".theme-toggle");
const copyTooltip = document.querySelector(".copy-tooltip");
const siteHeader = document.querySelector(".site-header");
const themeBackground = document.querySelector(".theme-background");

const PAGE_COUNT = portfolioData.pages.length;
const HALF_PAGE = PAGE_COUNT / 2;
const circleIndexLabels = portfolioData.pages.map((_, i) => String(i + 1).padStart(2, "0"));
const pageTitles = portfolioData.pages.map((page) => page.title);
const pageColors = portfolioData.pages.map((page) => page.color);
const cardPosCache = new Array(PAGE_COUNT);

const POS_MATRIX = [];
for (let active = 0; active < PAGE_COUNT; active++) {
  const row = new Array(PAGE_COUNT);
  for (let card = 0; card < PAGE_COUNT; card++) {
    let offset = card - active;
    if (offset > HALF_PAGE) offset -= PAGE_COUNT;
    if (offset < -HALF_PAGE) offset += PAGE_COUNT;
    row[card] = offset === 0 ? "0" : String(offset);
  }
  POS_MATRIX[active] = row;
}

let activeIndex = -1;
let dragStartX = 0;
let dragCurrentX = 0;
let dragStartY = 0;
let dragPending = false;
let dragAxis = null;
let wasDragged = false;
let tooltipTimer = 0;
let layoutRafId = 0;
let transitionTimer = 0;
let pageRafId = 0;
let pendingPageIndex = 0;
let pendingTransitionEnds = 0;

let pageCards;
let menuButtons;
let indicatorDots;
let circleSegments;
let bgLayers;

// ==========================================
// 3. RENDER FUNCTIONS
// ==========================================
function renderHeader() {
  logoContainer.innerHTML = `
    <span class="logo-mark">${portfolioData.profile.avatar}</span>
    <span>Thông tin cá nhân</span>
  `;
}

function renderProfile() {
  profileContainer.innerHTML = `
    <div class="profile-top">
      <div class="avatar" aria-hidden="true">${portfolioData.profile.avatar}</div>
      <div>
        <p class="eyebrow">${portfolioData.profile.role}</p>
        <h2>${portfolioData.profile.name}</h2>
      </div>
    </div>
    <p class="profile-description">${portfolioData.profile.description}</p>

    <div class="profile-block">
      <h3>Kỹ năng nổi bật</h3>
      <div class="skill-tags">
        ${portfolioData.profile.skills.map(skill => `<span>${skill}</span>`).join("")}
      </div>
    </div>
    <div class="profile-actions">
      <a class="action-button primary-action" href="${portfolioData.profile.cvLink}" download>Tải CV</a>
      <a class="action-button copy-link" href="${portfolioData.contacts.github}" target="_blank" rel="noreferrer" data-copy="${portfolioData.contacts.github}" data-copy-label="GitHub">GitHub<span class="copy-icon" aria-hidden="true">⧉</span></a>
      <a class="action-button copy-link" href="mailto:${portfolioData.contacts.email}" data-copy="${portfolioData.contacts.email}" data-copy-label="Email">Email<span class="copy-icon" aria-hidden="true">⧉</span></a>
      <a class="action-button copy-link" href="${portfolioData.contacts.zalo}" target="_blank" rel="noreferrer" data-copy="${portfolioData.contacts.zalo}" data-copy-label="Zalo">Zalo<span class="copy-icon" aria-hidden="true">⧉</span></a>
      <a class="action-button copy-link" href="tel:${portfolioData.contacts.phone}" data-copy="${portfolioData.contacts.phone}" data-copy-label="Số điện thoại">Điện thoại<span class="copy-icon" aria-hidden="true">⧉</span></a>
    </div>
  `;
}

function renderMenu() {
  menu.innerHTML = portfolioData.pages.map((page, index) =>
    `<button class="menu-button" type="button" data-index="${index}">${page.title}</button>`
  ).join("");
}

function renderIndicators() {
  indicators.innerHTML = portfolioData.pages.map((page, index) =>
    `<button class="indicator-dot" type="button" data-index="${index}" aria-label="Chuyển đến ${page.title}"></button>`
  ).join("");
}

function renderCircle() {
  const gap = 3;
  const step = 360 / PAGE_COUNT;
  circle.innerHTML = portfolioData.pages.map((page, index) => {
    const start = index * step + gap / 2;
    const end = (index + 1) * step - gap / 2;
    return `<path class="circle-segment" d="${describeArc(start, end)}" data-index="${index}" tabindex="0" role="button" aria-label="${page.title}"></path>`;
  }).join("");
}

function renderPages() {
  let html = "";
  portfolioData.pages.forEach((page, pageIndex) => {
    let content = "";
    if (page.id === "intro") {
      const infoHtml = portfolioData.personalInfo.map(info => `
        <section class="personal-info-item">
          <span class="info-icon" aria-hidden="true">${info.icon}</span>
          <div><h3>${info.label}</h3><p>${info.value}</p></div>
        </section>
      `).join("");
      content = `<div class="personal-info-list">${infoHtml}</div>`;
    }
    else if (page.id === "projects") {
      const projectsHtml = portfolioData.projects.map(proj => `
        <section class="project-item">
          <span class="project-icon" aria-hidden="true">${proj.icon}</span>
          <div>
            <h3>${proj.title} <span style="font-size: 0.75rem; color: var(--muted); font-weight: normal; margin-left: 5px;">(${proj.time})</span></h3>
            <p>${proj.desc}</p>
            <div class="tech-list">${proj.tech.map(t => `<span>${t}</span>`).join("")}</div>
            <div class="project-actions">
              <a class="small-link copy-link" href="${proj.github}" target="_blank" rel="noreferrer" data-copy="${proj.github}" data-copy-label="GitHub">GitHub<span class="copy-icon" aria-hidden="true">⧉</span></a>
              </div>
          </div>
        </section>
      `).join("");
      content = `<div class="project-list compact-grid">${projectsHtml}</div>`;
    }
    else if (page.id === "profile") {
      const skillsHtml = portfolioData.resume.skillsDesc.map(s => `<li>${s}</li>`).join("");

      content = `
        <div class="resume-grid compact-grid" style="grid-template-columns: 1fr 1.5fr;">
          <section class="resume-box">
            <h3>Học vấn</h3>
            <p>${portfolioData.resume.education}</p>
          </section>
          <section class="resume-box">
            <h3>Chi tiết Kỹ năng & Sở thích</h3>
            <ul>${skillsHtml}</ul>
          </section>
        </div>
        <a class="primary-button" href="${portfolioData.profile.cvLink}" download>Tải CV</a>
      `;
    }
    else if (page.id === "contact") {
      content = `
        <div class="contact-grid">
          <div class="contact-list">
            <section class="contact-row contact-link" role="link" tabindex="0" data-href="mailto:${portfolioData.contacts.email}">
              <span class="contact-icon" aria-hidden="true">✉</span><div><h3>Email</h3><p>${portfolioData.contacts.email}</p></div>
              <button class="copy-button" type="button" data-copy="${portfolioData.contacts.email}" data-copy-label="Email" aria-label="Sao chép Email">⧉</button>
            </section>
            <section class="contact-row contact-link" role="link" tabindex="0" data-href="${portfolioData.contacts.github}" data-external="true">
              <span class="contact-icon" aria-hidden="true">⌘</span><div><h3>GitHub</h3><p>${portfolioData.contacts.githubLabel}</p></div>
              <button class="copy-button" type="button" data-copy="${portfolioData.contacts.github}" data-copy-label="GitHub" aria-label="Sao chép GitHub">⧉</button>
            </section>
            <section class="contact-row contact-link" role="link" tabindex="0" data-href="${portfolioData.contacts.facebook}" data-external="true">
              <span class="contact-icon" aria-hidden="true">f</span><div><h3>Facebook</h3><p>${portfolioData.contacts.facebookLabel}</p></div>
              <button class="copy-button" type="button" data-copy="${portfolioData.contacts.facebook}" data-copy-label="Facebook" aria-label="Sao chép Facebook">⧉</button>
            </section>
            <section class="contact-row contact-link" role="link" tabindex="0" data-href="tel:${portfolioData.contacts.phone}">
              <span class="contact-icon" aria-hidden="true">☎</span><div><h3>Số điện thoại</h3><p>${portfolioData.contacts.phoneLabel}</p></div>
              <button class="copy-button" type="button" data-copy="${portfolioData.contacts.phone}" data-copy-label="Số điện thoại" aria-label="Sao chép Số điện thoại">⧉</button>
            </section>
            <section class="contact-row contact-link" role="link" tabindex="0" data-href="${portfolioData.contacts.zalo}" data-external="true">
              <span class="contact-icon" aria-hidden="true">Z</span><div><h3>Zalo</h3><p>${portfolioData.contacts.phoneLabel}</p></div>
              <button class="copy-button" type="button" data-copy="${portfolioData.contacts.zalo}" data-copy-label="Zalo" aria-label="Sao chép Zalo">⧉</button>
            </section>
          </div>
        </div>
      `;
    }

    html += `
      <article class="page-card" data-page="${page.id}" data-page-index="${pageIndex}">
        <div class="card-inner">
          <div class="card-heading">
            <span class="card-kicker">${page.id === 'intro' ? 'Thông tin cá nhân' : page.id === 'projects' ? 'Sản phẩm đã thực hiện' : page.id === 'profile' ? 'Năng lực chuyên môn' : 'Sẵn sàng kết nối'}</span>
            <h2>${page.title}</h2>
          </div>
          ${content}
        </div>
      </article>
    `;
  });
  track.innerHTML = html;
}

function renderBackgrounds() {
  themeBackground.innerHTML = portfolioData.pages.map((page, index) =>
    `<div class="bg-layer" data-index="${index}" style="background-image:url('${page.bgImage}')"></div>`
  ).join("");
}

// ==========================================
// 4. CORE LOGIC & SỰ KIỆN
// ==========================================
function polarToCartesian(centerX, centerY, radius, angleInDegrees) {
  const angleInRadians = (angleInDegrees - 90) * Math.PI / 180;
  return {
    x: centerX + radius * Math.cos(angleInRadians),
    y: centerY + radius * Math.sin(angleInRadians)
  };
}

function describeArc(startAngle, endAngle) {
  const outerRadius = 104;
  const innerRadius = 56;
  const center = 110;
  const startOuter = polarToCartesian(center, center, outerRadius, endAngle);
  const endOuter = polarToCartesian(center, center, outerRadius, startAngle);
  const startInner = polarToCartesian(center, center, innerRadius, startAngle);
  const endInner = polarToCartesian(center, center, innerRadius, endAngle);
  const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";
  return [
    "M", startOuter.x, startOuter.y,
    "A", outerRadius, outerRadius, 0, largeArcFlag, 0, endOuter.x, endOuter.y,
    "L", startInner.x, startInner.y,
    "A", innerRadius, innerRadius, 0, largeArcFlag, 1, endInner.x, endInner.y,
    "Z"
  ].join(" ");
}

function applyLayoutMetrics(headerBottom) {
  const headerOffset = Math.ceil(headerBottom + 20);
  const availableHeight = Math.max(window.innerHeight - headerOffset, 360);
  root.style.setProperty("--header-offset", headerOffset + "px");
  root.style.setProperty("--available-height", availableHeight + "px");
}

function updateLayoutMetrics() {
  applyLayoutMetrics(siteHeader.getBoundingClientRect().bottom);
}

function scheduleLayoutMetrics() {
  if (layoutRafId) return;
  layoutRafId = requestAnimationFrame(() => {
    layoutRafId = 0;
    updateLayoutMetrics();
  });
}

function cacheCarouselDom() {
  pageCards = track.children;
  menuButtons = menu.children;
  indicatorDots = indicators.children;
  circleSegments = circle.querySelectorAll(".circle-segment");
  bgLayers = themeBackground.children;
  for (let i = 0; i < PAGE_COUNT; i++) cardPosCache[i] = null;
}

function preloadBackgrounds() {
  for (let i = 0; i < PAGE_COUNT; i++) {
    const img = new Image();
    img.decoding = "async";
    img.src = portfolioData.pages[i].bgImage;
  }
}

function warmCompositor() {
  void track.offsetWidth;
  for (let i = 0; i < PAGE_COUNT; i++) {
    void pageCards[i].offsetWidth;
    void bgLayers[i].offsetWidth;
  }
}

function endPageTransition() {
  if (!shell.classList.contains("is-transitioning")) return;
  shell.classList.remove("is-transitioning");
  root.classList.remove("is-page-changing");
  pendingTransitionEnds = 0;
  window.clearTimeout(transitionTimer);
  transitionTimer = 0;
}

function beginPageTransition(updatedCards) {
  root.classList.add("is-page-changing");
  shell.classList.add("is-transitioning");
  pendingTransitionEnds = updatedCards;
  window.clearTimeout(transitionTimer);
  transitionTimer = window.setTimeout(endPageTransition, 360);
}

function onCardTransitionEnd(event) {
  if (!shell.classList.contains("is-transitioning")) return;
  if (event.propertyName !== "transform") return;
  if (!event.target.classList.contains("page-card")) return;
  pendingTransitionEnds -= 1;
  if (pendingTransitionEnds <= 0) endPageTransition();
}

function commitActivePage(newIndex) {
  if (newIndex === activeIndex) return;

  const prevIndex = activeIndex;
  activeIndex = newIndex;

  root.style.setProperty("--active-color", pageColors[activeIndex]);
  circleIndex.textContent = circleIndexLabels[activeIndex];
  circleLabel.textContent = pageTitles[activeIndex];

  if (prevIndex >= 0) {
    bgLayers[prevIndex].classList.remove("is-active");
    menuButtons[prevIndex].classList.remove("active");
    indicatorDots[prevIndex].classList.remove("active");
    circleSegments[prevIndex].classList.remove("active");
  }

  bgLayers[activeIndex].classList.add("is-active");
  menuButtons[activeIndex].classList.add("active");
  indicatorDots[activeIndex].classList.add("active");
  circleSegments[activeIndex].classList.add("active");

  const posRow = POS_MATRIX[activeIndex];
  let updatedCards = 0;

  for (let i = 0; i < PAGE_COUNT; i++) {
    const posKey = posRow[i];
    if (cardPosCache[i] === posKey) continue;
    cardPosCache[i] = posKey;
    pageCards[i].dataset.pos = posKey;
    updatedCards += 1;
  }

  if (updatedCards > 0) beginPageTransition(updatedCards);
}

function setActivePage(index) {
  pendingPageIndex = (index + PAGE_COUNT) % PAGE_COUNT;
  if (pendingPageIndex === activeIndex) return;
  if (pageRafId) return;
  pageRafId = requestAnimationFrame(() => {
    pageRafId = 0;
    commitActivePage(pendingPageIndex);
  });
}

function primeCarousel() {
  root.classList.add("no-transition");
  shell.classList.add("no-transition");
  commitActivePage(0);
  warmCompositor();
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      root.classList.remove("no-transition");
      shell.classList.remove("no-transition");
    });
  });
}

function setTheme(theme) {
  const isDark = theme === "dark";
  document.body.classList.toggle("dark-mode", isDark);
  themeToggle.setAttribute("aria-label", isDark ? "Chuyển giao diện sáng" : "Chuyển giao diện tối");
  localStorage.setItem("portfolio-theme", theme);
}

function openContactLink(target) {
  const href = target.dataset.href;
  if (!href) return;
  if (target.dataset.external === "true") {
    window.open(href, "_blank", "noopener,noreferrer");
    return;
  }
  window.location.href = href;
}

async function copyValue(value, label) {
  if (!value) return;
  try {
    await navigator.clipboard.writeText(value);
  } catch {
    const textarea = document.createElement("textarea");
    textarea.value = value;
    textarea.setAttribute("readonly", "");
    textarea.style.position = "fixed";
    textarea.style.opacity = "0";
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    textarea.remove();
  }
  copyTooltip.textContent = "Đã sao chép " + (label || "nội dung");
  copyTooltip.classList.add("visible");
  window.clearTimeout(tooltipTimer);
  tooltipTimer = window.setTimeout(() => copyTooltip.classList.remove("visible"), 1500);
}

  const AXIS_LOCK_PX = 10;
  const CAROUSEL_DRAG_PX = 55;
  const CAROUSEL_TAP_DRAG_PX = 10;
  const SCROLL_EDGE_EPS = 2;
  const COARSE_POINTER = window.matchMedia("(pointer: coarse)").matches;

  function cardInnerCanScrollY(inner, deltaY) {
    const maxScroll = inner.scrollHeight - inner.clientHeight;
    if (maxScroll <= SCROLL_EDGE_EPS) return false;
    if (deltaY > 0) return inner.scrollTop > SCROLL_EDGE_EPS;
    if (deltaY < 0) return inner.scrollTop < maxScroll - SCROLL_EDGE_EPS;
    return false;
  }

  let activeCardInnerTouch = null;
  let activeTouchState = null;

  function resetCardInnerTouch() {
    activeCardInnerTouch = null;
    activeTouchState = null;
  }

  function setupCardInnerTouchScroll() {
    track.addEventListener("touchstart", (event) => {
      const inner = event.target.closest(".card-inner");
      if (!inner || inner.closest(".page-card")?.dataset.pos !== "0" || event.touches.length !== 1) {
        resetCardInnerTouch();
        return;
      }
      activeCardInnerTouch = inner;
      activeTouchState = {
        startY: event.touches[0].clientY,
        startX: event.touches[0].clientX,
        axis: null
      };
    }, { passive: true });

    track.addEventListener("touchmove", (event) => {
      if (!COARSE_POINTER || !activeCardInnerTouch || !activeTouchState || event.touches.length !== 1) return;
      const touch = event.touches[0];
      const dy = touch.clientY - activeTouchState.startY;
      const dx = touch.clientX - activeTouchState.startX;
      if (!activeTouchState.axis) {
        if (Math.abs(dx) < AXIS_LOCK_PX && Math.abs(dy) < AXIS_LOCK_PX) return;
        activeTouchState.axis = Math.abs(dx) > Math.abs(dy) ? "x" : "y";
      }

      if (activeTouchState.axis === "x") return;
      if (cardInnerCanScrollY(activeCardInnerTouch, dy)) {
        event.preventDefault();
      }
    }, { passive: false });
    track.addEventListener("touchend", resetCardInnerTouch, { passive: true });
    track.addEventListener("touchcancel", resetCardInnerTouch, { passive: true });
  }

  function startDrag(clientX, clientY) {
    dragPending = true;
    isDragging = false;
    wasDragged = false;
    dragAxis = null;
    dragStartX = clientX;
    dragStartY = clientY;
    dragCurrentX = clientX;
}

function onPointerMove(event) {
  if (!dragPending && !isDragging) return;
  const dx = event.clientX - dragStartX;
  const dy = event.clientY - dragStartY;
  if (dragPending && !dragAxis) {
    if (Math.abs(dx) < AXIS_LOCK_PX && Math.abs(dy) < AXIS_LOCK_PX) return;
    dragAxis = Math.abs(dx) > Math.abs(dy) ? "x" : "y";
    if (dragAxis === "y") {
      dragPending = false;
      return;
    }
    isDragging = true;
    dragPending = false;
    shell.classList.add("dragging");
  }

  if (!isDragging) return;
  dragCurrentX = event.clientX;
}

function endDrag() {
  if (!isDragging && !dragPending) return;

  if (isDragging) {
    const distance = dragCurrentX - dragStartX;


    if (Math.abs(distance) > CAROUSEL_TAP_DRAG_PX) wasDragged = true;
    if (Math.abs(distance) > CAROUSEL_DRAG_PX) {
      setActivePage(activeIndex + (distance < 0 ? 1 : -1));
    }
    shell.classList.remove("dragging");
  }

  isDragging = false;
  dragPending = false;
  dragAxis = null;
  window.setTimeout(() => { wasDragged = false; }, 50);
}

function onDocumentClick(event) {
  if (wasDragged) {
    event.preventDefault();
    event.stopPropagation();
    return;
  }

  const navTarget = event.target.closest(".header-menu [data-index], .carousel-indicators [data-index], .circle-navigation [data-index]");
  if (navTarget) {
    setActivePage(Number(navTarget.dataset.index));
    return;
  }

  const cardTarget = event.target.closest(".page-card");
  if (cardTarget && cardTarget.dataset.pos !== "0") {
    setActivePage(Number(cardTarget.dataset.pageIndex));
    return;
  }

  const copyTarget = event.target.closest("[data-copy]");
  if (copyTarget && (event.target.closest(".copy-button") || event.target.closest(".copy-icon"))) {
    event.preventDefault();
    event.stopPropagation();
    copyValue(copyTarget.dataset.copy, copyTarget.dataset.copyLabel);
    return;
  }

  const contactTarget = event.target.closest(".contact-link");
  if (contactTarget) openContactLink(contactTarget);
}

function onKeyDown(event) {
  if (event.key === "ArrowRight") setActivePage(activeIndex + 1);
  if (event.key === "ArrowLeft") setActivePage(activeIndex - 1);
}

const THEME_TOGGLE_HOLD_MS = 220;
const THEME_TOGGLE_MOVE_PX = 8;
const THEME_TOGGLE_EDGE_PX = 10;
const THEME_TOGGLE_POS_KEY = "portfolio-theme-toggle-pos";
const THEME_TOGGLE_FINE_POINTER = window.matchMedia("(pointer: fine)").matches;

let themeToggleHoldTimer = 0;
let themeToggleDragging = false;
let themeTogglePressed = false;
let themeToggleWasMoved = false;
let themeToggleStartX = 0;
let themeToggleStartY = 0;
let themeToggleOriginLeft = 0;
let themeToggleOriginTop = 0;
let themeTogglePointerId = -1;

function clampThemeTogglePosition(left, top) {
  const width = themeToggle.offsetWidth;
  const height = themeToggle.offsetHeight;
  return {
    left: Math.min(Math.max(THEME_TOGGLE_EDGE_PX, left), window.innerWidth - width - THEME_TOGGLE_EDGE_PX),
    top: Math.min(Math.max(THEME_TOGGLE_EDGE_PX, top), window.innerHeight - height - THEME_TOGGLE_EDGE_PX)
  };
}

function applyThemeTogglePosition(left, top) {
  const next = clampThemeTogglePosition(left, top);
  themeToggle.style.left = next.left + "px";
  themeToggle.style.top = next.top + "px";
  themeToggle.style.bottom = "auto";
  themeToggle.classList.add("is-positioned");
  return next;
}

function ensureThemeTogglePixelPosition() {
  const rect = themeToggle.getBoundingClientRect();
  return applyThemeTogglePosition(rect.left, rect.top);
}

function saveThemeTogglePosition() {
  const left = parseFloat(themeToggle.style.left);
  const top = parseFloat(themeToggle.style.top);
  if (!Number.isFinite(left) || !Number.isFinite(top)) return;
  localStorage.setItem(THEME_TOGGLE_POS_KEY, JSON.stringify({ x: left, y: top }));
}

function restoreThemeTogglePosition() {
  const saved = localStorage.getItem(THEME_TOGGLE_POS_KEY);
  if (!saved) return;
  try {
    const { x, y } = JSON.parse(saved);
    if (!Number.isFinite(x) || !Number.isFinite(y)) return;
    applyThemeTogglePosition(x, y);
  } catch {
    localStorage.removeItem(THEME_TOGGLE_POS_KEY);
  }
}

function beginThemeToggleDrag(pointerId) {
  themeToggleDragging = true;
  themeTogglePointerId = pointerId;
  themeToggle.classList.add("is-dragging");
  themeToggle.classList.remove("is-holding");
  try {
    themeToggle.setPointerCapture(pointerId);
  } catch {
    /* noop */
  }
}

function clearThemeToggleHoldTimer() {
  window.clearTimeout(themeToggleHoldTimer);
  themeToggleHoldTimer = 0;
}

function clearThemeToggleInteraction() {
  clearThemeToggleHoldTimer();
  themeToggleDragging = false;
  themeTogglePointerId = -1;
  themeToggle.classList.remove("is-dragging", "is-holding");
}

function resetThemeToggleDragState() {
  clearThemeToggleInteraction();
  themeTogglePressed = false;
}

function onThemeTogglePointerDown(event) {
  if (event.button !== 0) return;

  themeToggleWasMoved = false;
  clearThemeToggleInteraction();
  themeTogglePressed = true;

  const origin = ensureThemeTogglePixelPosition();
  themeToggleStartX = event.clientX;
  themeToggleStartY = event.clientY;
  themeToggleOriginLeft = origin.left;
  themeToggleOriginTop = origin.top;

  themeToggle.classList.add("is-holding");
  themeToggleHoldTimer = window.setTimeout(() => {
    themeToggleHoldTimer = 0;
    if (!themeTogglePressed) return;
    beginThemeToggleDrag(event.pointerId);
  }, THEME_TOGGLE_HOLD_MS);
}

function onThemeTogglePointerMove(event) {
  if (!themeTogglePressed && !themeToggleDragging) return;
  if ((event.buttons & 1) === 0 && !themeToggleDragging) return;
  if (themeTogglePointerId !== -1 && event.pointerId !== themeTogglePointerId && themeToggleDragging) return;

  const dx = event.clientX - themeToggleStartX;
  const dy = event.clientY - themeToggleStartY;

  if (!themeToggleDragging) {
    if (THEME_TOGGLE_FINE_POINTER) return;
    if (Math.abs(dx) < THEME_TOGGLE_MOVE_PX && Math.abs(dy) < THEME_TOGGLE_MOVE_PX) return;
    clearThemeToggleHoldTimer();
    beginThemeToggleDrag(event.pointerId);
  }

  if (!themeToggleDragging) return;

  themeToggleWasMoved = true;
  applyThemeTogglePosition(themeToggleOriginLeft + dx, themeToggleOriginTop + dy);
}

function onThemeTogglePointerUp(event) {
  themeTogglePressed = false;
  clearThemeToggleHoldTimer();

  if (themeToggleDragging) {
    if (themeTogglePointerId === event.pointerId) {
      try {
        themeToggle.releasePointerCapture(event.pointerId);
      } catch {
        /* noop */
      }
    }
    saveThemeTogglePosition();
    resetThemeToggleDragState();
    window.setTimeout(() => { themeToggleWasMoved = false; }, 50);
    return;
  }

  themeToggle.classList.remove("is-holding");
  setTheme(document.body.classList.contains("dark-mode") ? "light" : "dark");
}

function setupThemeToggleDrag() {
  restoreThemeTogglePosition();

  themeToggle.addEventListener("pointerdown", onThemeTogglePointerDown);
  themeToggle.addEventListener("pointermove", onThemeTogglePointerMove);
  themeToggle.addEventListener("pointerup", onThemeTogglePointerUp);
  themeToggle.addEventListener("pointercancel", onThemeTogglePointerUp);

  themeToggle.addEventListener("click", (event) => {
    if (themeToggleWasMoved) {
      event.preventDefault();
    }
  });

  window.addEventListener("resize", () => {
    if (!themeToggle.classList.contains("is-positioned")) return;
    const left = parseFloat(themeToggle.style.left);
    const top = parseFloat(themeToggle.style.top);
    if (!Number.isFinite(left) || !Number.isFinite(top)) return;
    const next = applyThemeTogglePosition(left, top);
    saveThemeTogglePosition();
  }, { passive: true });
}

// ==========================================
// 5. KHỞI TẠO
// ==========================================
renderHeader();
renderProfile();
renderMenu();
renderPages();
renderIndicators();
renderCircle();
renderBackgrounds();
cacheCarouselDom();
preloadBackgrounds();
setTheme(localStorage.getItem("portfolio-theme") || "dark");
updateLayoutMetrics();
primeCarousel();
setupCardInnerTouchScroll();
setupThemeToggleDrag();

track.addEventListener("transitionend", onCardTransitionEnd, true);

document.addEventListener("click", onDocumentClick);
document.addEventListener("keydown", onKeyDown);

shell.addEventListener("pointerdown", (event) => {
  if (event.button !== 0) return;
  startDrag(event.clientX, event.clientY);
});

window.addEventListener("pointermove", onPointerMove, { passive: true });
window.addEventListener("pointerup", endDrag, { passive: true });
window.addEventListener("pointercancel", endDrag, { passive: true });

if (typeof ResizeObserver !== "undefined") {
  const headerObserver = new ResizeObserver((entries) => {
    const entry = entries[0];
    if (!entry) return;
    scheduleLayoutMetrics();
  });
  headerObserver.observe(siteHeader);
} else {
  window.addEventListener("resize", scheduleLayoutMetrics, { passive: true });
}

window.addEventListener("resize", scheduleLayoutMetrics, { passive: true });
window.addEventListener("load", scheduleLayoutMetrics, { passive: true });
