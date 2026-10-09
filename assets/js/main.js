// 主题、移动导航和轻量滚动状态均在浏览器本地运行，不发送任何数据。
const root = document.documentElement;
const themeToggle = document.querySelector("[data-theme-toggle]");
const themeIcon = document.querySelector("[data-theme-icon]");
const navToggle = document.querySelector("[data-nav-toggle]");
const navigation = document.querySelector("[data-navigation]");
const header = document.querySelector("[data-header]");

function updateThemeControl() {
  if (!themeToggle || !themeIcon) return;
  const isDark = root.dataset.theme !== "light";
  themeIcon.textContent = isDark ? "☼" : "◐";
  themeToggle.setAttribute(
    "aria-label",
    isDark ? "Switch to light theme" : "Switch to dark theme",
  );
}

themeToggle?.addEventListener("click", () => {
  const nextTheme = root.dataset.theme === "light" ? "dark" : "light";
  root.dataset.theme = nextTheme;
  try {
    localStorage.setItem("theme", nextTheme);
  } catch (_) {
    // 隐私模式可能禁止 localStorage；主题切换本身仍然可用。
  }
  updateThemeControl();
});

navToggle?.addEventListener("click", () => {
  const isOpen = navToggle.getAttribute("aria-expanded") === "true";
  navToggle.setAttribute("aria-expanded", String(!isOpen));
  navigation?.classList.toggle("is-open", !isOpen);
});

navigation?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navToggle?.setAttribute("aria-expanded", "false");
    navigation.classList.remove("is-open");
  });
});

const updateHeader = () => {
  header?.classList.toggle("is-scrolled", window.scrollY > 16);
};

updateThemeControl();
updateHeader();
window.addEventListener("scroll", updateHeader, { passive: true });

const yearNode = document.querySelector("[data-current-year]");
if (yearNode) yearNode.textContent = String(new Date().getFullYear());
