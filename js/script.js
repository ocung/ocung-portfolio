const projectData = {
  shopkeeper: {
    title:"Shopkeeper Simulation", kicker:"2025–2026 · Simulation · Final Project",
    subtitle:"PC · Unity · Solo development",
    image:"assets/shopkeeper-simulation.png", alt:"Shopkeeper Simulation main menu",
    youtubeId:"szmCSXuXHAw", youtubeUrl:"https://youtu.be/szmCSXuXHAw",
    overview:"A PC vertical-slice simulation about managing a second-hand phone shop. Players inspect used smartphones, evaluate their condition, negotiate prices, and manage money, storage, and time.",
    contributions:"The project combines game design and game programming in a solo-developed vertical slice.",
    work:["Designed a gameplay loop around inspecting, pricing, buying, and selling second-hand smartphones.","Worked on systems for device condition, market value, customer negotiation, money, storage, and time.","Created an eight-slide tutorial to introduce the main systems."],
    highlights:["Inspect physical condition, screen, connectivity, and camera.","Evaluate prices based on device condition and market value.","Negotiate with customers; rejected or incomplete offers affect customer patience.","Manage money, storage capacity, and in-game time."],
    testing:"Questionnaire testing with 30 respondents was used to evaluate the tutorial. System understanding had the lowest score (3.88), informing further tutorial refinement.",
    tags:["Game Design","Game Programming","Unity","Solo Dev"],
    gallery:[["assets/shopkeeper-simulation.png","Main menu and tutorial entry"]], links:[{label:"Watch on YouTube",url:"https://youtu.be/szmCSXuXHAw"}]
  },
  escape: {
    title:"Escape Room: Computer Crafting", kicker:"Feb–May 2023 · Puzzle",
    subtitle:"Room escape · Environment and map design",
    image:"assets/escape-room.gif", alt:"Escape Room: Computer Crafting gameplay",
    overview:"A room-escape game about AL, a teenager imprisoned after exploring the deep web. Players explore rooms, collect clues, and solve puzzles to progress.",
    contributions:"My documented contributions focused on planning playable spaces and arranging level environments.",
    work:["Designed the layout of playable areas.","Placed environment elements within levels."],
    highlights:["Explore and move between rooms.","Collect clues while exploring.","Use discovered clues to solve puzzles and progress."],
    tags:["Map Design","Environment Placement","Puzzle Design"],
    gallery:[["assets/escape-room.gif","Gameplay preview"],["assets/escape-room-collecting.gif","Collecting an item"],["assets/escape-room-room-transition.gif","Moving between rooms"],["assets/escape-room-puzzle-clue-a.gif","Puzzle clue interaction"],["assets/escape-room-puzzle-clue-b.gif","Puzzle clue interaction"],["assets/escape-room-puzzle-clue-c.gif","Puzzle clue interaction"]], links:[]
  },
  trash: {
    title:"TRASH CITY", kicker:"Aug–Dec 2022 · Educational",
    subtitle:"Educational game · Pixel art",
    image:"assets/trash-city.png", alt:"TRASH CITY main menu",
    overview:"A game about a waste collector working in a densely populated city. Players collect and sort rubbish while learning about different waste types through in-game information.",
    contributions:"My documented contributions focused on map layout, environment art, and placing environmental elements throughout the level.",
    work:["Designed the game map layout.","Contributed to environment art.","Placed environmental elements throughout the level."],
    highlights:["Explore areas to collect waste.","Read informational dialogue introducing different waste types.","Use drag-and-drop interaction to sort waste."],
    tags:["Map Design","Environment Art","Environment Placement","Educational"],
    gallery:[["assets/trash-city.png","Main menu and visual direction"],["assets/trash-city-sorting-waste.gif","Sorting waste"],["assets/trash-city-identifying-waste.gif","Identifying waste types"],["assets/trash-city-collecting-waste.gif","Collecting waste"]], links:[]
  }
};
const backdrop=document.getElementById("projectBackdrop");
const modalBody=document.getElementById("modalBody");
const modalTitle=document.getElementById("modalTitle");
const modalKicker=document.getElementById("modalKicker");
const modalSubtitle=document.getElementById("modalSubtitle");
const closeBtn=document.getElementById("closeModal");
let lastTrigger=null;
const esc=s=>String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
function list(items){return `<ul>${items.map(x=>`<li>${esc(x)}</li>`).join("")}</ul>`}
function openProject(key,trigger){
  const p=projectData[key]; if(!p)return;
  lastTrigger=trigger;modalTitle.textContent=p.title;modalKicker.textContent=p.kicker;modalSubtitle.textContent=p.subtitle;
  const gallery=p.gallery.map(([src,caption])=>`<figure class="gallery-item"><img src="${src}" alt="${esc(caption)}" loading="lazy"><figcaption>${esc(caption)}</figcaption></figure>`).join("");
  const links=p.links.length?p.links.map(l=>`<a href="${l.url}" target="_blank" rel="noopener noreferrer">${esc(l.label)} ↗</a>`).join(""):"";
  const featuredMedia=p.youtubeId?`<iframe src="https://www.youtube-nocookie.com/embed/${p.youtubeId}" title="${esc(p.title)} gameplay video" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`:`<img src="${p.image}" alt="${esc(p.alt)}">`;
  modalBody.innerHTML=`<div class="showcase-main">${featuredMedia}</div><p class="showcase-note">${p.youtubeId?`Gameplay video embedded from YouTube. If it does not load, use the “Watch on YouTube” link below.`:"Gameplay screenshots and GIFs supplied for this project."}</p><div class="detail-grid"><div class="detail-block"><h3>Project overview</h3><p>${esc(p.overview)}</p><h3>My contributions</h3><p>${esc(p.contributions)}</p>${list(p.work)}</div><div class="detail-block"><h3>Gameplay highlights</h3>${list(p.highlights)}${p.testing?`<h3>Testing & iteration</h3><p>${esc(p.testing)}</p>`:""}<div class="detail-tags">${p.tags.map(t=>`<span>${esc(t)}</span>`).join("")}</div>${links?`<div class="modal-links">${links}</div>`:""}</div></div><h3 style="margin:28px 0 0">Media gallery</h3><div class="media-gallery">${gallery}</div>`;
  backdrop.classList.add("open");backdrop.setAttribute("aria-hidden","false");document.body.classList.add("modal-open");closeBtn.focus();
}
function closeProject(){backdrop.classList.remove("open");backdrop.setAttribute("aria-hidden","true");document.body.classList.remove("modal-open");if(lastTrigger)lastTrigger.focus()}
document.querySelectorAll("[data-project]").forEach(btn=>btn.addEventListener("click",()=>openProject(btn.dataset.project,btn)));
closeBtn.addEventListener("click",closeProject);
backdrop.addEventListener("click",e=>{if(e.target===backdrop)closeProject()});
document.addEventListener("keydown",e=>{if(e.key==="Escape"&&backdrop.classList.contains("open"))closeProject()});
const menuBtn=document.getElementById("menuBtn"),nav=document.getElementById("mainNav");
menuBtn.addEventListener("click",()=>{const isOpen=nav.classList.toggle("open");menuBtn.setAttribute("aria-expanded",String(isOpen))});
nav.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>{nav.classList.remove("open");menuBtn.setAttribute("aria-expanded","false")}));
document.getElementById("year").textContent=new Date().getFullYear();
