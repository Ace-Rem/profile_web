// ==========================================
// 1. DỮ LIỆU TỪ CV VÀ CẤU HÌNH TRANG
// ==========================================
const portfolioData = {
  profile: {
    name: "Thể Văn Lộc (Ace Rem)", // [cite: 1]
    role: "", // [cite: 2]
    avatar: "L",
    description: "Mong muốn phát triển tại các vị trí nhân viên văn phòng, mong muốn được học hỏi, rèn luyện kỹ năng tư vấn, làm việc với dữ liệu. Luôn làm việc với tinh thần trách nhiệm, khả năng tiếp thu nhanh và sự kiên trì.",
    objective: "Đóng góp vào việc gia tăng doanh số, tối ưu hóa hệ thống và phát triển lâu dài cùng doanh nghiệp.",
    skills: ["Java/C++/Python", "SQL & Git", "Windows/Linux", "Bộ công cụ văn phòng", "Android system"], 
    cvLink: "assets/cv.pdf"
  },
  contacts: {
    email: "aceloc2003@gmail.com", // [cite: 5]
    github: "https://github.com/Ace-Rem",
    githubLabel: "github.com/Ace-Rem",
    facebook: "https://www.facebook.com/rem.ace.54",
    facebookLabel: "facebook.com/Ace",
    zalo: "https://zalo.me/0375964170",
    phone: "0375964170", // [cite: 3]
    phoneLabel: "0375964170",
    address: "Phố Hữu Nghị, Phường Tùng Thiện, Hà Nội" // [cite: 6]
  },
  personalInfo: [
    { icon: "◉", label: "Họ và tên", value: "Thể Văn Lộc" }, // [cite: 1]
    { icon: "◌", label: "Ngày sinh", value: "20/04/2003" }, // [cite: 4]
    { icon: "⌂", label: "Địa chỉ", value: "Tùng Thiện, Hà Nội" }, // [cite: 6]
    { icon: "✦", label: "Ngành học", value: "Công nghệ thông tin" }, // [cite: 8]
    { icon: "▣", label: "Trường học", value: "Đại học Công Nghiệp Việt - Hung" } // [cite: 11]
  ],
  projects: [
    {
      icon: "▦",
      title: "Hệ thống QLCV (TaskAI)",
      time: "01/2026 - 04/2026",
      desc: "Lên ý tưởng, hỗ trợ xây dựng chức năng web/mobile và theo dõi luồng API/Dữ liệu.",
      tech: ["AI Integration", "API", "Testing"],
      github: "https://github.com/Ace-Rem/QLCV-AI-APK/releases" // Đã thay link QLCV
    },
    {
      icon: "◈",
      title: "Website đọc/sáng tác truyện",
      time: "02/2025 - 05/2025",
      desc: "Hỗ trợ xây dựng, kiểm tra chức năng đăng nhập, tìm kiếm và làm quen quản lý dữ liệu backend.",
      tech: ["Web System", "Backend Data"],
      github: "https://github.com/Ace-Rem" // Bạn có thể thay link cụ thể sau nếu muốn
    },
    {
      icon: "💻",
      title: "Website bán laptop Ace-Rem",
      time: "02/2024 - 05/2024",
      desc: "Thực hành xây dựng website cơ bản, kiểm tra chức năng và xử lý dữ liệu.",
      tech: ["E-commerce", "Data Processing"],
      github: "https://github.com/Ace-Rem" // Bạn có thể thay link cụ thể sau nếu muốn
    },
    {
      icon: "🎵",
      title: "App Play Music Ace-Rem",
      time: "04/2025 - 07/2025",
      desc: "Xây dựng chức năng phát nhạc, tìm hiểu xử lý media và kiểm tra UX.",
      tech: ["Mobile App", "Media Processing"],
      github: "https://github.com/Ace-Rem/MPAR-app/releases" // Đã thay link Play Music
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

let activeIndex = 0;
let dragStartX = 0;
let dragCurrentX = 0;
let isDragging = false;
let wasDragged = false; // Biến cờ để phân biệt vuốt và click
let tooltipTimer;
let resizeTimer;

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
  const step = 360 / portfolioData.pages.length;
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

// ==========================================
// 4. CORE LOGIC & SỰ KIỆN CẢI TIẾN
// ==========================================
function polarToCartesian(centerX, centerY, radius, angleInDegrees) {
  const angleInRadians = (angleInDegrees - 90) * Math.PI / 180;
  return { x: centerX + radius * Math.cos(angleInRadians), y: centerY + radius * Math.sin(angleInRadians) };
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

function updateLayoutMetrics() {
  const headerRect = siteHeader.getBoundingClientRect();
  const headerOffset = Math.ceil(headerRect.bottom + 20);
  root.style.setProperty("--header-offset", `${headerOffset}px`);
  root.style.setProperty("--available-height", `${Math.max(window.innerHeight - headerOffset, 360)}px`);
}

function getShortestOffset(index) {
  const total = portfolioData.pages.length;
  let offset = index - activeIndex;
  if (offset > total / 2) offset -= total;
  if (offset < -total / 2) offset += total;
  return offset;
}

function setActivePage(index) {
  activeIndex = (index + portfolioData.pages.length) % portfolioData.pages.length;
  const activePage = portfolioData.pages[activeIndex];
  
  root.style.setProperty("--active-color", activePage.color);
  circleIndex.textContent = String(activeIndex + 1).padStart(2, "0");
  circleLabel.textContent = activePage.title;
  
  // Cập nhật ảnh nền tùy chỉnh
  themeBackground.style.backgroundImage = `url('${activePage.bgImage}')`;

  document.querySelectorAll(".menu-button").forEach((btn, idx) => btn.classList.toggle("active", idx === activeIndex));
  document.querySelectorAll(".indicator-dot").forEach((dot, idx) => dot.classList.toggle("active", idx === activeIndex));
  document.querySelectorAll(".circle-segment").forEach((seg, idx) => seg.classList.toggle("active", idx === activeIndex));

  document.querySelectorAll(".page-card").forEach((card, cardIndex) => {
    const offset = getShortestOffset(cardIndex);
    const visible = Math.abs(offset) <= 1;
    card.classList.toggle("active", cardIndex === activeIndex);
    card.classList.toggle("hidden-card", !visible);
    card.style.setProperty("--offset", offset);
    card.style.setProperty("--scale", cardIndex === activeIndex ? "1" : "0.8");
    card.style.setProperty("--opacity", visible ? (cardIndex === activeIndex ? "1" : "0.48") : "0");
    card.style.setProperty("--z-index", cardIndex === activeIndex ? "3" : visible ? "2" : "1");
    
    // CẢI TIẾN: Cho phép nhận sự kiện click ở thẻ kề bên (visible) để chuyển trang
    card.style.setProperty("--pointer-events", visible ? "auto" : "none");
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

async function copyValue(value, label = "") {
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
  copyTooltip.textContent = `Đã sao chép ${label || "nội dung"}`;
  copyTooltip.classList.add("visible");
  window.clearTimeout(tooltipTimer);
  tooltipTimer = window.setTimeout(() => copyTooltip.classList.remove("visible"), 1500);
}

function startDrag(clientX) {
  isDragging = true;
  wasDragged = false;
  dragStartX = clientX;
  dragCurrentX = clientX;
  shell.classList.add("dragging");
}

function moveDrag(clientX) {
  if (!isDragging) return;
  dragCurrentX = clientX;
}

function endDrag() {
  if (!isDragging) return;
  const distance = dragCurrentX - dragStartX;
  
  // Xác định xem người dùng vuốt hay chỉ click
  if (Math.abs(distance) > 10) {
    wasDragged = true; 
  }
  
  if (Math.abs(distance) > 55) {
    setActivePage(activeIndex + (distance < 0 ? 1 : -1));
  }
  
  isDragging = false;
  shell.classList.remove("dragging");
  
  // Xóa cờ wasDragged sau một khoảng trễ nhỏ để sự kiện click kịp nhận diện
  setTimeout(() => { wasDragged = false; }, 50);
}

// Khởi tạo
renderHeader();
renderProfile();
renderMenu();
renderPages();
renderIndicators();
renderCircle();
setTheme(localStorage.getItem("portfolio-theme") || "light");
updateLayoutMetrics();
setActivePage(0);

// Sự kiện
document.querySelectorAll(".header-menu, .carousel-indicators, .circle-navigation").forEach(el => {
  el.addEventListener("click", event => {
    const target = event.target.closest("[data-index]");
    if (target) setActivePage(Number(target.dataset.index));
  });
});

// Bỏ setPointerCapture để không bị "nuốt" sự kiện click trên Desktop (Ubuntu/Windows)
shell.addEventListener("pointerdown", event => {
  // Bỏ qua nếu người dùng đang click chuột phải
  if (event.button !== 0) return; 
  startDrag(event.clientX);
});

// Chuyển việc lắng nghe move và up lên window để thao tác kéo mượt hơn 
// ngay cả khi chuột trượt ra ngoài khối carousel
window.addEventListener("pointermove", event => {
  if (isDragging) moveDrag(event.clientX);
});

window.addEventListener("pointerup", event => {
  if (isDragging) endDrag();
});

window.addEventListener("pointercancel", event => {
  if (isDragging) endDrag();
});

document.addEventListener("keydown", event => {
  if (event.key === "ArrowRight") setActivePage(activeIndex + 1);
  if (event.key === "ArrowLeft") setActivePage(activeIndex - 1);
});

// XỬ LÝ CLICK TỔNG HỢP VỚI CÁC CẢI TIẾN
document.addEventListener("click", event => {
  // 1. Chặn click nếu vừa thực hiện thao tác vuốt (swipe)
  if (wasDragged) {
    event.preventDefault();
    event.stopPropagation();
    return;
  }

  // 2. Chuyển trang khi bấm vào thẻ bị mờ (những thẻ nằm rìa không active)
  const cardTarget = event.target.closest(".page-card");
  if (cardTarget && !cardTarget.classList.contains("active")) {
    setActivePage(Number(cardTarget.dataset.pageIndex));
    return;
  }

  // 3. Xử lý nút Copy (cả ở Profile và trong Card-inner)
  const copyTarget = event.target.closest("[data-copy]");
  if (copyTarget && (event.target.closest(".copy-button") || event.target.closest(".copy-icon"))) {
    event.preventDefault();
    event.stopPropagation();
    copyValue(copyTarget.dataset.copy, copyTarget.dataset.copyLabel);
    return;
  }

  // 4. Xử lý click chuyển hướng contact link
  const contactTarget = event.target.closest(".contact-link");
  if (contactTarget) {
    openContactLink(contactTarget);
  }
});

themeToggle.addEventListener("click", () => {
  setTheme(document.body.classList.contains("dark-mode") ? "light" : "dark");
});

window.addEventListener("resize", () => {
  window.clearTimeout(resizeTimer);
  resizeTimer = window.setTimeout(updateLayoutMetrics, 80);
});
window.addEventListener("load", updateLayoutMetrics);