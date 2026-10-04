// 主题切换仅在本地保存偏好，不会把设置发送给任何第三方。
const root = document.documentElement;
const themeToggle = document.querySelector("[data-theme-toggle]");
const themeIcon = document.querySelector("[data-theme-icon]");

function updateThemeControl() {
  if (!themeToggle || !themeIcon) return;
  const isDark = root.dataset.theme !== "light";
  themeIcon.textContent = isDark ? "☼" : "☾";
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
  } catch (_) {}
  updateThemeControl();
});

updateThemeControl();

// 页脚年份自动更新，避免每年手动修改纯展示性字段。
const yearNode = document.querySelector("[data-current-year]");
if (yearNode) yearNode.textContent = String(new Date().getFullYear());

// 滚动后为导航增加更明确的层级；这是纯视觉增强，不影响无 JS 使用。
const header = document.querySelector("[data-header]");
const updateHeader = () => header?.classList.toggle("is-scrolled", window.scrollY > 24);
updateHeader();
window.addEventListener("scroll", updateHeader, { passive: true });
