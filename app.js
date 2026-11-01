import { profile, projects, publications, linkGroups } from './content.js';

const copy = {
  en: {
    skip: 'Skip to content', profile: 'Profile', links: 'Useful links', mainNav: 'Main navigation', language: 'Language', home: 'Yunpeng Huang · Home',
    eyebrow: 'AI SYSTEMS / RESEARCH & ENGINEERING', heroLine: 'To encode the world and decode a better one.', aliasLabel: 'ALIAS', affiliations: 'BACKGROUND', nju: 'M.S., Nanjing University',
    portraitCaption: 'My usual avatar.', portraitAlt: 'Llama wearing sunglasses, Yunpeng Huang’s profile avatar',
    focusEyebrow: '01 / WHAT I THINK ABOUT', focusTitle: 'From a single kernel\nto a system at scale.',
    workEyebrow: '02 / BUILDING & SHARING', workTitle: 'Selected work', allRepositories: 'All repositories',
    publicationsEyebrow: '03 / RESEARCH', publicationsTitle: 'Selected Publications', conference: 'Conference papers', research: 'Technical Research', conferenceIntro: 'Conference publications and academic manuscripts.', researchIntro: 'Technical reports and research blogs.', fullList: 'Full list on Scholar',
    collectionLabel: 'THE EVERYDAY COLLECTION', collectionTitle: 'A few useful things,\nkept close at hand.', exploreLinks: 'Explore my links',
    linksEyebrow: 'THE EVERYDAY COLLECTION / 02', linksTitle: 'Useful things,\none place.', linksIntro: 'Repositories I return to.\nDocumentation I keep open.\nA small map of my working world.',
    linksFootnote: 'A personal collection. Some repositories may require access on GitHub.', siteSource: 'Site source', all: 'All links',
    search: 'Find a link…', searchLabel: 'Search links', categories: 'Link categories', noResults: 'No matching links. Try a different search.',
    results: n => `${n} ${n === 1 ? 'link' : 'links'} · Collected for everyday use`, openPaper: 'Read publication',
    pageTitle: 'Yunpeng Huang · AI Systems', linksPageTitle: 'Useful links · Yunpeng Huang',
  },
  zh: {
    skip: '跳到正文', profile: '个人主页', links: '常用链接', mainNav: '主导航', language: '语言', home: 'Yunpeng Huang · 首页',
    eyebrow: 'AI 系统 / 研究与工程', heroLine: 'To encode the world and decode a better one.', aliasLabel: '花名', affiliations: '背景', nju: '南京大学硕士',
    portraitCaption: '常用头像', portraitAlt: '戴着墨镜的羊驼，Yunpeng Huang 的常用头像',
    focusEyebrow: '01 / 关注的方向', focusTitle: '从一个算子，\n到规模化的系统。',
    workEyebrow: '02 / 构建与分享', workTitle: '一些作品', allRepositories: '全部仓库',
    publicationsEyebrow: '03 / 研究', publicationsTitle: '论文选录', conference: '会议论文', research: '技术研究', conferenceIntro: '会议论文与学术稿件。', researchIntro: '技术报告与研究博客。', fullList: 'Scholar 完整列表',
    collectionLabel: '日常会用到的东西', collectionTitle: '把常用的入口，\n放在触手可及的地方。', exploreLinks: '浏览常用链接',
    linksEyebrow: '日常收藏 / 02', linksTitle: '常用的，\n都在这里。', linksIntro: '经常回到的仓库，\n随时翻阅的文档，\n一张属于自己的工作地图。',
    linksFootnote: '个人常用链接集合。部分仓库可能需要相应的 GitHub 访问权限。', siteSource: '网站源码', all: '全部链接',
    search: '找一个链接…', searchLabel: '搜索链接', categories: '链接分类', noResults: '没有匹配的链接，换个关键词试试。',
    results: n => `${n} 个入口 · 为日常使用而收集`, openPaper: '阅读原文',
    pageTitle: 'Yunpeng Huang · 个人主页', linksPageTitle: '常用链接 · Yunpeng Huang',
  },
};
let language = localStorage.getItem('yh-language') || (navigator.language.startsWith('zh') ? 'zh' : 'en');
if (!copy[language]) language = 'en';
let category = 'all';
let query = '';
const $ = id => document.getElementById(id);
const localize = value => typeof value === 'string' ? value : value[language];
function element(tag, className, value) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (value != null) node.textContent = value;
  return node;
}
function externalLink(url, className, value) {
  const node = element('a', className, value);
  node.href = url;
  node.target = '_blank';
  node.rel = 'noopener noreferrer';
  return node;
}
function renderProfile() {
  $('bio').textContent = localize(profile.bio);
  $('focus-list').replaceChildren(...profile.focus.map((item, index) => {
    const row = element('div', 'focus-row');
    const body = element('div');
    body.append(element('h3', '', localize(item.title)), element('p', '', localize(item.description)));
    row.append(element('span', '', String(index + 1).padStart(2, '0')), body);
    return row;
  }));
  $('projects').replaceChildren(...projects.map(project => {
    const card = externalLink(project.url, 'project' + (project.featured ? ' featured' : ''));
    card.append(element('span', 'small-label', localize(project.label)), element('h3', '', project.name), element('p', '', localize(project.description)));
    if (project.featured) {
      const symbol = element('span', 'project-symbol', '∑');
      symbol.setAttribute('aria-hidden', 'true');
      const tags = element('div', 'project-tags');
      for (const tag of project.tags) tags.append(element('span', '', tag));
      const foot = element('div', 'project-foot');
      foot.append(element('span', '', localize(project.footer)), element('span', '', '↗'));
      card.append(symbol, tags, foot);
    } else {
      const arrow = element('span', 'project-arrow', '↗');
      arrow.setAttribute('aria-hidden', 'true');
      card.append(arrow);
    }
    return card;
  }));
  $('publications').replaceChildren(...['research', 'conference'].map(kind => {
    const section = element('section', 'publication-group');
    const papers = publications.filter(paper => paper.section === kind);
    const header = element('div', 'publication-group-heading');
    const title = element('h3', '', copy[language][kind]);
    title.id = 'publications-' + kind;
    section.setAttribute('aria-labelledby', title.id);
    header.append(title, element('span', 'publication-count', papers.length));
    section.append(header, element('p', 'publication-group-intro', copy[language][kind + 'Intro']));
    for (const paper of papers) {
      const row = element('article', 'publication');
      const content = element('div');
      const heading = element('h4');
      heading.append(externalLink(paper.url, '', paper.title));
      const authors = element('p', 'authors');
      const parts = localize(paper.authors).split('Yunpeng Huang');
      parts.forEach((part, index) => {
        if (index) authors.append(element('strong', '', 'Yunpeng Huang'));
        authors.append(document.createTextNode(part));
      });
      content.append(element('p', 'venue', localize(paper.venue)), heading, authors, element('p', 'paper-description', localize(paper.description)));
      const open = externalLink(paper.url, 'publication-open', '↗');
      open.setAttribute('aria-label', `${copy[language].openPaper}: ${paper.title}`);
      row.append(element('span', 'publication-year', paper.year), content, open);
      section.append(row);
    }
    return section;
  }));
}
function renderLinks() {
  const t = copy[language];
  const filters = [{ id: 'all', title: t.all, count: linkGroups.reduce((n, group) => n + group.items.length, 0) },
    ...linkGroups.map(group => ({ id: group.id, title: localize(group.title), count: group.items.length }))];
  $('link-filters').replaceChildren(...filters.map(filter => {
    const button = element('button');
    button.type = 'button';
    button.setAttribute('aria-pressed', category === filter.id);
    button.append(element('span', '', filter.title), element('span', 'filter-count', filter.count));
    button.addEventListener('click', () => { category = filter.id; renderLinks(); });
    return button;
  }));
  let total = 0;
  const sections = [];
  for (const group of linkGroups) {
    if (category !== 'all' && category !== group.id) continue;
    const matches = group.items.filter(item => `${item.title} ${item.description.en} ${item.description.zh} ${item.url}`.toLowerCase().includes(query));
    if (!matches.length) continue;
    total += matches.length;
    const section = element('section', 'link-section');
    const heading = element('div', 'link-section-heading');
    heading.append(element('h2', '', localize(group.title)), element('p', '', localize(group.subtitle)));
    const grid = element('div', 'link-grid');
    for (const item of matches) {
      const card = externalLink(item.url, 'link-card');
      const top = element('div', 'link-card-top');
      const arrow = element('span', 'link-arrow', '↗');
      arrow.setAttribute('aria-hidden', 'true');
      top.append(element('span', 'link-icon', item.icon), arrow);
      card.append(top, element('h3', '', item.title), element('p', '', localize(item.description)), element('span', 'link-card-domain', new URL(item.url).hostname.replace(/^www\./, '')));
      grid.append(card);
    }
    section.append(heading, grid);
    sections.push(section);
  }
  $('link-groups').replaceChildren(...sections);
  if (!total) $('link-groups').append(element('p', 'empty-state', t.noResults));
  $('links-result').textContent = t.results(total);
}
function route() {
  const active = location.hash === '#links' ? 'links' : 'profile';
  for (const id of ['profile', 'links']) $(id).hidden = id !== active;
  for (const link of document.querySelectorAll('[data-route]')) {
    if (link.dataset.route === active) link.setAttribute('aria-current', 'page');
    else link.removeAttribute('aria-current');
  }
  document.title = copy[language][active === 'links' ? 'linksPageTitle' : 'pageTitle'];
}
function render() {
  const t = copy[language];
  document.documentElement.lang = language === 'zh' ? 'zh-CN' : 'en';
  for (const node of document.querySelectorAll('[data-copy]')) node.textContent = t[node.dataset.copy];
  $('main-nav').setAttribute('aria-label', t.mainNav);
  document.querySelector('.wordmark').setAttribute('aria-label', t.home);
  document.querySelector('.language-switch').setAttribute('aria-label', t.language);
  $('link-filters').setAttribute('aria-label', t.categories);
  $('link-search').placeholder = t.search;
  $('link-search').setAttribute('aria-label', t.searchLabel);
  $('portrait-image').alt = t.portraitAlt;
  $('scholar-link').href = 'https://scholar.google.com/citations?user=whzKjcIAAAAJ&hl=' + (language === 'zh' ? 'zh-CN' : 'en');
  for (const button of document.querySelectorAll('[data-language]')) button.setAttribute('aria-pressed', button.dataset.language === language);
  renderProfile();
  renderLinks();
  route();
}
for (const button of document.querySelectorAll('[data-language]')) button.addEventListener('click', () => {
  language = button.dataset.language;
  localStorage.setItem('yh-language', language);
  render();
});
$('link-search').addEventListener('input', event => { query = event.target.value.trim().toLowerCase(); renderLinks(); });
document.querySelector('.skip-link').addEventListener('click', event => { event.preventDefault(); $('main').focus(); $('main').scrollIntoView(); });
window.addEventListener('hashchange', () => { route(); window.scrollTo(0, 0); });
$('year').textContent = new Date().getFullYear();
render();
