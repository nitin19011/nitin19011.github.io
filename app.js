'use strict';
// Static content and file navigation. No build process or backend required.
const files = [
  {id:'home',name:'home.tsx',icon:'⚛',type:'tsx',folder:'src',language:'TypeScript React'},
  {id:'about',name:'about.html',icon:'5',type:'html',folder:'src',language:'HTML'},
  {id:'projects',name:'projects.js',icon:'JS',type:'js',folder:'src',language:'JavaScript'},
  {id:'skills',name:'skills.json',icon:'{}',type:'json',folder:'data',language:'JSON'},
  {id:'experience',name:'experience.ts',icon:'TS',type:'ts',folder:'src',language:'TypeScript'},
  {id:'contact',name:'contact.css',icon:'#',type:'css',folder:'src',language:'CSS'},
  {id:'readme',name:'README.md',icon:'M↓',type:'md',folder:'root',language:'Markdown'}
];
const icon = file => `<span class="file-icon ${file.type}" aria-hidden="true">${file.icon}</span>`;
const external = (url,label,cls='mini-link') => `<a class="${cls}" href="${url}" target="_blank" rel="noopener noreferrer">${label} <span aria-hidden="true">↗</span></a>`;
const tags = values => `<div class="tags">${values.map(v=>`<span class="tag">${v}</span>`).join('')}</div>`;
const heading = (comment,title,description) => `<p class="code-comment comment-subtle">${comment}</p><h2>${title}</h2><p class="section-description">${description}</p>`;

const projectCards = [
  {
    name:'FitChasers',type:'Java application · team project',number:'01',url:'https://github.com/nitin19011/tp',
    summary:'A command-line fitness tracker for workouts, exercises, sets and weight records. Built with a team for NUS CS2113.',
    tags:['Java','JUnit','Gradle','Input validation'],
    problem:'Make workout and weight logging predictable through a command-driven interface, including invalid inputs and out-of-order commands.',
    contribution:'My documented contributions include exercise and set commands, command validation, weight-tracking enhancements and user/developer documentation. A merged pull request confirms my exercise-management work.',
    approach:'Workouts contain exercises and sets. The application separates command parsing, domain objects and persistence, with JUnit tests and Gradle build configuration.',
    outcome:'Integrated features and source documentation are available in the repository. No usage or performance metrics are claimed.',
    evidence:external('https://github.com/AY2526S1-CS2113-W14-3/tp/pull/41','Merged exercise-management PR')+' · '+external('https://github.com/nitin19011/tp/blob/master/docs/team/nitin19011.md','Contribution notes'),
    note:null
  },
  {
    name:'Milo',type:'Python tooling · team project in progress',number:'02',url:'https://github.com/nitin19011/milo-hardware',
    summary:'The software behind a wearable gesture/audio project: data collectors, capture protocols, calibration utilities and a live detector validation interface.',
    tags:['Python','MQTT / TLS','Data collection','Model tooling'],
    problem:'Collect structured sensor and audio recordings, coordinate captures and inspect action-detector behaviour while preserving useful labels and metadata.',
    contribution:'This repository packages the team’s wearable-side work and supporting software. My exact ownership of the Python tools, protocol design and model pipeline still needs confirmation.',
    approach:'The paired demo uses MQTT/TLS control messages and shared capture IDs. Separate Python tools collect and review recordings. A separate detector prototype includes a live validation UI, training scripts and model-to-C++ export.',
    outcome:'Source, protocol guides, model reports and test code are available. The automatic detector remains a prototype; it has not replaced the paired demo trigger. The team’s Ultra96 inference and Unity projects are separate.',
    evidence:external('https://github.com/nitin19011/milo-hardware/blob/main/README.md','Repository overview')+' · '+external('https://github.com/nitin19011/milo-hardware/tree/main/prototypes/candidate_detector_latest','Detector prototype'),
    note:'Draft detail: confirm which Milo software components I personally implemented before using this case study in applications.'
  },
  {
    name:'Socks',type:'Java application · course project',number:'03',url:'https://github.com/nitin19011/ip',
    summary:'A keyboard-driven task manager with todos, deadlines, events, keyword search and automatic file storage. Developed from the Duke course template.',
    tags:['Java','Command parsing','File persistence'],
    problem:'Manage different task types from a simple command-line workflow and retain them between sessions.',
    contribution:'My individual course repository contains the application source and user guide. The distinction between my additions and the provided template is still being documented.',
    approach:'Separate parser, task, storage and UI packages handle commands and task persistence. The user guide includes command examples and a sample session.',
    outcome:'Source and documentation are available. No adoption metrics or independently verified runtime results are claimed.',
    evidence:external('https://github.com/nitin19011/ip/blob/master/docs/README.md','User guide'),
    note:'Draft detail: confirm my feature contributions beyond the supplied Duke template.'
  }
];
const card = p => `<article class="project-card"><div class="project-top"><span class="project-number" aria-hidden="true">${p.number}</span>${external(p.url,'GitHub')}</div><p class="project-type">${p.type}</p><h3>${p.name}</h3><p>${p.summary}</p>${tags(p.tags)}<details><summary>Read case study</summary><dl class="project-details"><dt>Problem</dt><dd>${p.problem}</dd><dt>My contribution</dt><dd>${p.contribution}</dd><dt>Approach</dt><dd>${p.approach}</dd><dt>Outcome & current limits</dt><dd>${p.outcome}</dd><dt>Evidence</dt><dd>${p.evidence}</dd></dl>${p.note?`<p class="draft-note">${p.note}</p>`:''}</details></article>`;

const views = {
  home: () => `<section class="pane home-pane" aria-labelledby="home-title"><div class="hero-grid"><div class="hero-copy"><p class="code-comment">// hello world. I'm Nitin.</p><h1 id="home-title">Nitin<span>Software portfolio.</span></h1><div class="underline-accent"></div><div class="badges"><span class="badge"><span class="dot"></span>Software engineering focus</span><span class="badge"><span class="dot"></span>NUS undergraduate</span><span class="badge pink">Class of 2027</span></div><p class="typing-line">Building applications. Understanding the details.<span class="cursor" aria-hidden="true"> |</span></p><p class="intro">I'm a Computer Engineering undergraduate focused on <strong>software development</strong>. My work spans <strong>Java applications</strong> and <strong>Python tooling</strong>, supported by industry experience in testing, troubleshooting and customer requirements.</p><div class="actions"><a class="button primary" href="#projects"><span aria-hidden="true">▱</span> View projects</a><a class="button" href="assets/Nitin_Resume.pdf" download><span aria-hidden="true">↓</span> Download résumé</a><a class="button" href="#contact"><span aria-hidden="true">✉</span> Contact</a></div></div><figure class="portrait"><div class="portrait-title"><span>nitin.webp</span><span aria-hidden="true">image</span></div><img src="assets/nitin.webp" width="600" height="800" alt="Nitin wearing a blue T-shirt, looking to the side" fetchpriority="high"><figcaption>Singapore · NUS Computer Engineering</figcaption></figure></div><div class="facts" aria-label="Profile at a glance"><div class="fact"><strong>NUS</strong><span>Computer Engineering</span></div><div class="fact"><strong>Java</strong><span>Application projects</span></div><div class="fact"><strong>Python</strong><span>Collection & tooling</span></div><div class="fact"><strong>Jun 2027</strong><span>Available full-time</span></div></div><div class="socials">${external('https://github.com/nitin19011','GitHub','social-link')}<a class="social-link" href="mailto:nitinsaklani18@gmail.com"><span aria-hidden="true">✉</span>Email</a><a class="social-link" href="#experience"><span aria-hidden="true">⌁</span>Engineering experience</a></div><p class="home-footnote">Start with <a href="#projects">FitChasers & Milo</a>, or open a file in the explorer.</p></section>`,
  projects: () => `<section class="pane" aria-labelledby="projects-title">${heading('// projects.js — source, decisions, contributions','Selected projects','Application development and software tools. Open a case study for scope, contribution and evidence.').replace('<h2>','<h2 id="projects-title">')}<div class="project-grid">${projectCards.map(card).join('')}</div></section>`,
  about: () => `<section class="pane" aria-labelledby="about-title">${heading('&lt;!-- about.html — background & education --&gt;','About me','Computer Engineering background. Software engineering direction.').replace('<h2>','<h2 id="about-title">')}<div class="info-box"><p>I'm <strong>Nitin</strong>, a Computer Engineering undergraduate at the National University of Singapore. I'm looking for <strong>software engineering roles starting June 2027</strong>.<br><br>Before university, I worked in semiconductor engineering, where I supported testing, investigated issues and translated customer requirements into inspection checks. I'm now building my software portfolio through Java applications and the tools supporting team projects.</p></div><h3 class="section-heading">Education</h3><div class="education"><article class="info-box"><p class="date">August 2024 – April 2027 · expected</p><h3>National University of Singapore</h3><p>Bachelor of Engineering in Computer Engineering (Honours)</p><p>Relevant completed coursework includes software engineering and object-oriented programming, data structures and algorithms, and information security.</p></article><article class="info-box"><p class="date">2018 – 2021</p><h3>Temasek Polytechnic</h3><p>Diploma in Aerospace Engineering</p></article></div><h3 class="section-heading">Outside the editor</h3><p class="muted">Volleyball, guitar and piano, and an interest in technology and physics.</p><a class="button" href="assets/Nitin_Resume.pdf" download>↓ Download full résumé</a></section>`,
  skills: () => `<section class="pane" aria-labelledby="skills-title">${heading('// skills.json — grouped by evidence','Skills & tools','No proficiency scores. Each group points to the work behind it.').replace('<h2>','<h2 id="skills-title">')}<div class="skill-grid"><article class="skill-group"><h3>Application development</h3>${tags(['Java','Object-oriented programming','Command parsing','File storage'])}<p>Evidence: <a href="#projects">FitChasers and Socks</a>.</p></article><article class="skill-group"><h3>Tooling & collection</h3>${tags(['Python','Collection interfaces','Dataset metadata','Protocol tooling'])}<p>Present in <a href="#projects">Milo’s software tooling</a>. Component ownership is being confirmed.</p></article><article class="skill-group"><h3>Development workflow</h3>${tags(['Git / GitHub','Gradle','JUnit','Checkstyle','Technical documentation'])}<p>Evidence: FitChasers source, build configuration, tests and contribution notes.</p></article><article class="skill-group"><h3>Engineering practice</h3>${tags(['Issue reproduction','Fix verification','Troubleshooting','Customer requirements'])}<p>Evidence: applications and associate engineering roles.</p></article></div><div class="info-box"><p>My résumé also lists <strong>C, C++, Python, Java, Rust and Linux</strong>. Project-specific examples and current proficiency should be discussed in an interview; the list is not a claim of equal depth in every language.</p></div></section>`,
  experience: () => `<section class="pane" aria-labelledby="experience-title">${heading('// experience.ts — professional background','Experience','Testing, troubleshooting and communicating technical requirements.').replace('<h2>','<h2 id="experience-title">')}<div class="timeline"><article><time>March 2024 – August 2024</time><h3>Applications Engineer</h3><p class="company">@ IN.D Solution · Semiconductor devices</p><ul><li>Built and tuned machine-vision inspection recipes against customer requirements.</li><li>Supplied test cases, reproduced issues and verified fixes across software and hardware updates.</li><li>Supported technical troubleshooting, demonstrations and project reporting across teams.</li></ul>${tags(['Machine vision','Testing','Requirements'])}</article><article><time>October 2021 – September 2023</time><h3>Associate Engineer</h3><p class="company">@ STATS ChipPAC · JCET Group</p><ul><li>Investigated semiconductor device issues and supported corrective actions.</li><li>Collected data to help product engineers address quality and yield requirements.</li><li>Communicated testing progress and technical issues to customers.</li></ul>${tags(['Troubleshooting','Data collection','Customer communication'])}</article><article><time>October 2020 – March 2021</time><h3>Design & Mechanical Engineer Intern</h3><p class="company">@ Temasek Polytechnic Aviation Research Centre</p><ul><li>Supported UAV prototype fabrication, assembly and iteration.</li><li>Created and refined PTC Creo models for fit and assembly requirements.</li><li>Assisted with build documentation and coordination.</li></ul>${tags(['Prototyping','PTC Creo','Documentation'])}</article></div><p class="section-description">These roles are engineering experience. They are not presented as software engineering employment.</p></section>`,
  contact: () => `<section class="pane" aria-labelledby="contact-title">${heading('/* contact.css — get in touch */','Let’s talk software.','Available for full-time roles from June 2027.').replace('<h2>','<h2 id="contact-title">')}<div class="info-box"><p>For software engineering opportunities or a conversation about my projects:</p><a class="contact-address" href="mailto:nitinsaklani18@gmail.com">nitinsaklani18@gmail.com <span aria-hidden="true">↗</span></a><div class="actions"><a class="button primary" href="mailto:nitinsaklani18@gmail.com">✉ Write an email</a>${external('https://github.com/nitin19011','View GitHub','button')}<a class="button" href="assets/Nitin_Resume.pdf" download>↓ Download résumé</a></div></div><div class="contact-grid"><div class="info-box"><h3>Role focus</h3><p>Software engineering and application development. Open to discussing customer-facing technical software roles.</p></div><div class="info-box"><h3>Location & availability</h3><p>Based in Singapore. Available June 2027. Open to overseas employers offering remote roles that can be performed from Singapore.</p></div></div><p class="section-description">The email link opens your mail application. No contact form or third-party submission service is used.</p></section>`,
  readme: () => `<section class="pane md-content" aria-labelledby="readme-title">${heading('# README.md','A quick introduction','The short version, for a recruiter with a few minutes.').replace('<h2>','<h2 id="readme-title">')}<div class="code-block"><span class="code-line">{</span><span class="code-line">&nbsp; <span class="code-key">"name"</span>: <span class="code-string">"Nitin"</span>,</span><span class="code-line">&nbsp; <span class="code-key">"focus"</span>: <span class="code-string">"Software engineering"</span>,</span><span class="code-line">&nbsp; <span class="code-key">"education"</span>: <span class="code-string">"NUS Computer Engineering"</span>,</span><span class="code-line">&nbsp; <span class="code-key">"available"</span>: <span class="code-string">"June 2027"</span></span><span class="code-line">}</span></div><h3>What to look at</h3><ul><li><a href="#projects">FitChasers</a>: Java application work and documented personal contributions.</li><li><a href="#projects">Milo</a>: collection, protocol and validation tooling supporting a team project.</li><li><a href="#experience">Engineering experience</a>: practical troubleshooting, testing and customer communication.</li></ul><h3>What is still being documented</h3><p>The Milo and Socks case studies explicitly mark personal contribution details that need confirmation. Prototype behaviour is described with its limitations; no production or adoption claims are made.</p><h3>Get the résumé</h3><p><a href="assets/Nitin_Resume.pdf" download>Download the supplied résumé as a PDF</a>, or <a href="mailto:nitinsaklani18@gmail.com">contact me directly</a>.</p></section>`
};

let openFiles = ['home','about','projects','readme','skills'];
let current = 'home';
const workspace = document.getElementById('workspace');
const content = document.getElementById('content');
const tabs = document.getElementById('tabs');
const navigation = document.getElementById('file-navigation');
const dialog = document.getElementById('file-dialog');
const filter = document.getElementById('file-filter');
const results = document.getElementById('file-results');

function closeMenus(){document.querySelectorAll('.menu-trigger').forEach(b=>{b.setAttribute('aria-expanded','false');document.getElementById(b.getAttribute('aria-controls')).hidden=true;});}
function closeDrawer(){workspace.classList.remove('mobile-explorer-open');document.getElementById('drawer-backdrop').hidden=true;const mobile=document.getElementById('mobile-nav-toggle');if(mobile)mobile.setAttribute('aria-expanded','false');}
function toggleExplorer(){
  if(window.matchMedia('(max-width:1023px)').matches){const open=workspace.classList.toggle('mobile-explorer-open');document.getElementById('drawer-backdrop').hidden=!open;document.getElementById('mobile-nav-toggle').setAttribute('aria-expanded',String(open));if(open)document.getElementById('close-explorer').focus();}
  else{const hidden=workspace.classList.toggle('sidebar-hidden');document.getElementById('explorer-button').setAttribute('aria-expanded',String(!hidden));}
}
function renderTabs(){tabs.innerHTML=openFiles.map(id=>{const f=files.find(file=>file.id===id);return `<div class="tab${current===id?' active':''}"><a href="#${id}" ${current===id?'aria-current="page"':''}>${icon(f)}${f.name}</a><button aria-label="Close ${f.name}" data-close="${id}" title="Close ${f.name}">×</button></div>`;}).join('');}
function renderFileResults(){const q=filter.value.toLowerCase().trim();const matches=files.filter(f=>f.name.toLowerCase().includes(q));results.innerHTML=matches.length?matches.map(f=>`<a href="#${f.id}">${icon(f)}<span>${f.name}</span></a>`).join(''):'<p class="dialog-hint">No matching files.</p>';}
function openDialog(){closeMenus();filter.value='';renderFileResults();dialog.showModal();filter.focus();}
function navigate(id,focus=false){
  if(!views[id])id='home';
  current=id;if(!openFiles.includes(id))openFiles.push(id);
  content.innerHTML=views[id]();content.scrollTop=0;
  const f=files.find(file=>file.id===id);
  document.getElementById('crumb-folder').textContent=f.folder;document.getElementById('crumb-file').textContent=f.name;document.getElementById('status-language').textContent=f.language;
  navigation.querySelectorAll('a').forEach(a=>{if(a.getAttribute('href')==='#'+id)a.setAttribute('aria-current','page');else a.removeAttribute('aria-current');});
  renderTabs();closeMenus();closeDrawer();if(dialog.open)dialog.close();
  document.title=id==='home'?'Nitin | Software Engineering Portfolio':`${id[0].toUpperCase()+id.slice(1)} | Nitin`;
  document.getElementById('announcement').textContent=`Opened ${f.name}`;
  if(focus)content.focus({preventScroll:true});
}
navigation.innerHTML=files.map(f=>`<a class="file-link" href="#${f.id}">${icon(f)}<span>${f.name}</span></a>`).join('');
const mobileToggle=document.createElement('button');mobileToggle.id='mobile-nav-toggle';mobileToggle.className='mobile-nav-toggle';mobileToggle.innerHTML='☰';mobileToggle.setAttribute('aria-label','Toggle file explorer');mobileToggle.setAttribute('aria-controls','explorer');mobileToggle.setAttribute('aria-expanded','false');document.querySelector('.titlebar').prepend(mobileToggle);
mobileToggle.addEventListener('click',toggleExplorer);document.getElementById('explorer-button').addEventListener('click',toggleExplorer);document.getElementById('toggle-sidebar').addEventListener('click',()=>{toggleExplorer();closeMenus();});
document.getElementById('close-explorer').addEventListener('click',()=>{closeDrawer();mobileToggle.focus();});document.getElementById('drawer-backdrop').addEventListener('click',()=>{closeDrawer();mobileToggle.focus();});
document.getElementById('open-file').addEventListener('click',openDialog);document.getElementById('quick-open-button').addEventListener('click',openDialog);filter.addEventListener('input',renderFileResults);
document.querySelectorAll('.menu-trigger').forEach(b=>b.addEventListener('click',()=>{const shouldOpen=b.getAttribute('aria-expanded')!=='true';closeMenus();if(shouldOpen){b.setAttribute('aria-expanded','true');document.getElementById(b.getAttribute('aria-controls')).hidden=false;}}));
document.querySelectorAll('[data-theme-choice]').forEach(b=>b.addEventListener('click',()=>{const theme=b.dataset.themeChoice;document.documentElement.dataset.theme=theme;try{localStorage.setItem('nitin-portfolio-theme',theme);}catch{}closeMenus();}));
document.addEventListener('click',event=>{
  if(!event.target.closest('.menu-wrap'))closeMenus();
  const close=event.target.closest('[data-close]');if(close){const id=close.dataset.close;openFiles=openFiles.filter(f=>f!==id);if(!openFiles.length)openFiles=['home'];if(current===id){const next=openFiles[openFiles.length-1];if(location.hash==='#'+next)navigate(next,true);else location.hash=next;}else{renderTabs();const next=tabs.querySelector('a');if(next)next.focus();}return;}
  const a=event.target.closest('a[href^="#"]');if(!a||a.getAttribute('href')==='#content')return;const id=a.getAttribute('href').slice(1);if(views[id]){event.preventDefault();if(location.hash==='#'+id)navigate(id,true);else location.hash=id;}
});
document.addEventListener('keydown',event=>{
  if((event.ctrlKey||event.metaKey)&&event.key.toLowerCase()==='p'){event.preventDefault();if(!dialog.open)openDialog();return;}
  if((event.ctrlKey||event.metaKey)&&event.key.toLowerCase()==='b'){event.preventDefault();toggleExplorer();return;}
  if(event.key==='Escape'){closeMenus();closeDrawer();}
  if(dialog.open){const links=[...results.querySelectorAll('a')];if(event.key==='ArrowDown'||event.key==='ArrowUp'){event.preventDefault();const index=links.indexOf(document.activeElement);const next=event.key==='ArrowDown'?(index+1)%links.length:(index<=0?links.length-1:index-1);if(links[next])links[next].focus();}else if(event.key==='Enter'&&document.activeElement===filter){event.preventDefault();if(links[0])links[0].click();}}
});
dialog.addEventListener('click',event=>{if(event.target===dialog){const rect=dialog.getBoundingClientRect();if(event.clientX<rect.left||event.clientX>rect.right||event.clientY<rect.top||event.clientY>rect.bottom)dialog.close();}});
document.querySelector('#file-dialog form').addEventListener('submit',event=>{if(event.submitter?.value!=='close')event.preventDefault();});
window.addEventListener('hashchange',()=>navigate(location.hash.slice(1),true));
window.matchMedia('(max-width:1023px)').addEventListener('change',closeDrawer);
try{const theme=localStorage.getItem('nitin-portfolio-theme');if(['default','tokyo','light'].includes(theme))document.documentElement.dataset.theme=theme;}catch{}
navigate(location.hash.slice(1));
