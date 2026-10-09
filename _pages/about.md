---
permalink: /
title: "Lifan Gu | Academic Homepage"
description: >-
  Academic profile of Lifan Gu, Research Assistant at Westlake Laboratory.
author_profile: true
redirect_from:
  - /about/
  - /about.html
---

<section class="content-section glass-panel intro-section" id="about-me" aria-labelledby="about-me-title">
  <p class="section-index">01 · About Me</p>
  <h2 id="about-me-title">Intersection of medicine and engineering.</h2>
  <p class="intro-lede">
    I am a research assistant at Westlake Laboratory, where I study
    neuron-microglia interactions during addiction and withdrawal. I earned
    bachelor's degrees in Clinical Medicine and Medical Engineering at
    Xi'an Jiaotong University.
  </p>
  <p>
    My broader interests span neural circuits, medical data science,
    continuous glucose monitoring, and biomedical AI, with a particular focus
    on translating computational and experimental approaches into reproducible
    tools for biomedical research.
  </p>

  <div class="research-grid" aria-label="Research interests">
    {% for item in site.data.profile.research %}
      <article class="research-item">
        <span class="research-number" aria-hidden="true">0{{ forloop.index }}</span>
        <h3>{{ item.title }}</h3>
        <p>{{ item.description }}</p>
      </article>
    {% endfor %}
  </div>
</section>

<section class="content-section glass-panel" id="educations" aria-labelledby="educations-title">
  <p class="section-index">02 · Educations</p>
  <h2 id="educations-title">Bachelor Degree</h2>
  <ol class="timeline-list">
    {% for item in site.data.profile.educations %}
      <li>
        <p class="timeline-period">{{ item.period }}</p>
        <div>
          <h3>{{ item.degree }}</h3>
          <p class="item-organization">{{ item.institution }}</p>
          <p>{{ item.description }}</p>
        </div>
      </li>
    {% endfor %}
  </ol>
</section>

<section class="content-section glass-panel" id="experiences" aria-labelledby="experiences-title">
  <p class="section-index">03 · Experiences</p>
  <h2 id="experiences-title">Research and development experience.</h2>
  <ol class="timeline-list">
    {% for item in site.data.profile.experiences %}
      <li>
        <p class="timeline-period">{{ item.period }}</p>
        <div>
          <h3>{{ item.role }}</h3>
          <p class="item-organization">{{ item.organization }}</p>
          <p>{{ item.description }}</p>
        </div>
      </li>
    {% endfor %}
  </ol>
</section>

<section class="content-section glass-panel" id="publications" aria-labelledby="publications-title">
  <p class="section-index">04 · Publications</p>
  <h2 id="publications-title">Published articles.</h2>
  <p class="section-intro">
    Journal papers, conference papers and patents.
  </p>

  <h3 class="subsection-title">Journal articles</h3>
  <ol class="publication-list">
    {% for publication in site.data.profile.publications %}
      <li class="publication-card">
        <div class="publication-meta">
          <span>{{ publication.year }}</span>
          <span class="status status-published">{{ publication.status }}</span>
        </div>
        <div>
          <p class="authors">{{ publication.authors }}</p>
          <h4>
            <a href="{{ publication.url }}" target="_blank" rel="noopener noreferrer" data-goatcounter-click="publication-{{ forloop.index }}">
              {{ publication.title }} <span aria-hidden="true">↗</span>
            </a>
          </h4>
          <p class="venue">{{ publication.venue }}</p>
        </div>
      </li>
    {% endfor %}
  </ol>

  <h3 class="subsection-title abstracts-title">Conference abstracts</h3>
  <ol class="publication-list">
    {% for abstract in site.data.profile.abstracts %}
      <li class="publication-card">
        <div class="publication-meta">
          <span>{{ abstract.year }}</span>
          <span class="status status-pending">{{ abstract.status }}</span>
        </div>
        <div>
          <p class="authors">{{ abstract.authors }}</p>
          <h4>{{ abstract.title }}</h4>
          <p class="venue">{{ abstract.venue }}</p>
        </div>
      </li>
    {% endfor %}
  </ol>
  <p class="status-note">
    The above data is up to September 2026.
  </p>
</section>

<section class="content-section glass-panel" id="projects" aria-labelledby="projects-title">
  <p class="section-index">05 · Projects</p>
  <h2 id="projects-title">Focused projects.</h2>
  <p class="section-intro">
    Selected public repositories spanning biomedical data, clinical
    workflows, and computer vision.
  </p>

  <div class="project-grid">
    {% for project in site.data.profile.projects %}
      <article class="project-card">
        <div class="project-topline">
          <span aria-hidden="true">0{{ forloop.index }}</span>
          <a href="{{ project.url }}" target="_blank" rel="noopener noreferrer" aria-label="Open {{ project.title }} on GitHub" data-goatcounter-click="project-{{ forloop.index }}">↗</a>
        </div>
        <h3><a href="{{ project.url }}" target="_blank" rel="noopener noreferrer">{{ project.title }}</a></h3>
        <p>{{ project.description }}</p>
        <ul class="tag-list" aria-label="Project topics">
          {% for tag in project.tags %}<li>{{ tag }}</li>{% endfor %}
        </ul>
      </article>
    {% endfor %}
  </div>
</section>

<section class="content-section glass-panel" id="honors-and-awards" aria-labelledby="honors-title">
  <p class="section-index">06 · Honors and Awards</p>
  <h2 id="honors-title">Selected recognition.</h2>
  <p class="section-intro">Selected awards only; this is not a complete list.</p>
  <ol class="honors-list">
    {% for honor in site.data.profile.honors %}
      <li>
        <span class="honor-year">{{ honor.year }}</span>
        <div>
          <h3>{{ honor.title }}</h3>
          <p>{{ honor.organization }}</p>
        </div>
      </li>
    {% endfor %}
  </ol>
</section>
