---
title: Semester II
socialImage: https://utopia.inferalis.space/static/og-image.png
---
Your university files, beautifully organised.

<div class="course-grid">
  <a href="02-Thermodynamics" class="course-card">🔥 Thermodynamics</a>
  <a href="03-DEVC" class="course-card">📐 DEVC</a>
  <a href="04-BEEE/" class="course-card">⚡ Electrical & Electronics</a>
  <a href="05-Chemistry" class="course-card">🧪 Chemistry</a>
  <a href="07-Economics" class="course-card">📊 Economics</a>
  <a href="09-PPSUC" class="course-card">💻 PPSUC</a>
  <a href="10-IOT" class="course-card">🌐 IOT</a>
<a href="11-LAB" class="course-card">🥼LAB</a>
  <a href="14-Archive" class="course-card">🗂️ Archive</a>
  <a href="15-Docs" class="course-card">🏫 Docs</a>
  <a href="16-Other" class="course-card">📦 Other</a>
</div>

<style>
.course-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 14px;
  margin-top: 24px;
}

.course-card {
  display: block;
  padding: 18px 14px;
  background: var(--lightgray);
  border-radius: 16px;
  text-align: center;
  font-weight: 600;
  font-size: 0.9rem;
  color: var(--darkgray) !important;
  text-decoration: none !important;
  transition: transform 0.15s, background 0.15s;
  box-shadow: 0 2px 8px rgba(0,0,0,0.2);
}

.course-card:hover {
  transform: translateY(-3px);
  background: var(--highlight);
  color: var(--secondary) !important;
}

@media (min-width: 900px) {
  .course-grid {
    display: none;
  }
}
</style>

