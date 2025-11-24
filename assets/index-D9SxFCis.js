import{r as u,j as t,R as zt,L as _,B as It,a as Rt,b as H,N as Tt,c as Qt}from"./vendor-react-3GBrp-jG.js";import{f as Ct,h as _t,k as Ie,l as a,n as Ht}from"./vendor-C-jmcCh2.js";import{i as Nt,g as Zt,a as Gt,b as Ot,c as Ut,o as Vt,s as Xt,d as Yt,r as T,u as Jt,e as Me,f as mt,h as gt,q as Re,j as Kt,k as ei,m as ft,p as ti,n as ii,t as si}from"./vendor-firebase-DiwS88rE.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))r(n);new MutationObserver(n=>{for(const l of n)if(l.type==="childList")for(const o of l.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function s(n){const l={};return n.integrity&&(l.integrity=n.integrity),n.referrerPolicy&&(l.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?l.credentials="include":n.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(n){if(n.ep)return;n.ep=!0;const l=s(n);fetch(n.href,l)}})();const ri={colors:{primary:{gold:"#FFD700",darkGold:"#C7A500",bronze:"#CD7F32"},winter:{iceBlue:"#A5D8FF",deepBlue:"#1E3A5F",snowWhite:"#F8F9FA",frostBlue:"#4A90E2",darkIce:"#2C5F8D"},alliance:{blue:"#0078D7",lightBlue:"#4BA3E3",darkBlue:"#003F7F"},horde:{red:"#8B0000",darkRed:"#5C0000",crimson:"#DC143C"},neutral:{black:"#0A0E1A",darkGray:"#1A1F2E",gray:"#2E3440",lightGray:"#4C566A",silver:"#D8DEE9",white:"#ECEFF4"},accent:{arcane:"#8B5CF6",frost:"#60A5FA",fire:"#EF4444",nature:"#10B981",holy:"#FDE047"},status:{success:"#10B981",warning:"#F59E0B",error:"#EF4444",info:"#3B82F6"},text:{primary:"#ECEFF4",secondary:"#D8DEE9",dark:"#0A0E1A",muted:"#4C566A"},channels:{general:"#ffdb97",wisp:"#cf21c7",group:"#60A5FA",guild:"#10B981",party:"#F59E0B",raid:"#EF4444"},quality:{poor:"#9D9D9D",common:"#FFFFFF",uncommon:"#1EFF00",rare:"#0070DD",epic:"#A335EE",legendary:"#FF8000"}},fonts:{primary:"'Cinzel', serif",secondary:"'Roboto Condensed', sans-serif",body:"'Open Sans', sans-serif",display:"'Cinzel Decorative', cursive"},fontSizes:{xs:"0.75rem",sm:"0.875rem",base:"1rem",lg:"1.125rem",xl:"1.25rem","2xl":"1.5rem","3xl":"1.875rem","4xl":"2.25rem","5xl":"3rem","6xl":"3.75rem"},fontWeights:{light:300,normal:400,medium:500,semibold:600,bold:700,black:900},spacing:{xxs:"0.125rem",xs:"0.25rem",sm:"0.5rem",md:"1rem",lg:"1.5rem",xl:"2rem","2xl":"3rem","3xl":"4rem","4xl":"6rem","5xl":"8rem"},borders:{thin:"1px",medium:"2px",thick:"4px",heavy:"6px"},borderRadius:{none:"0",sm:"0.25rem",md:"0.5rem",lg:"0.75rem",xl:"1rem",full:"9999px"},shadows:{sm:"0 1px 2px 0 rgba(0, 0, 0, 0.5)",md:"0 4px 6px -1px rgba(0, 0, 0, 0.5), 0 2px 4px -1px rgba(0, 0, 0, 0.3)",lg:"0 10px 15px -3px rgba(0, 0, 0, 0.5), 0 4px 6px -2px rgba(0, 0, 0, 0.3)",xl:"0 20px 25px -5px rgba(0, 0, 0, 0.5), 0 10px 10px -5px rgba(0, 0, 0, 0.3)",inner:"inset 0 2px 4px 0 rgba(0, 0, 0, 0.5)",glow:{blue:"0 0 20px rgba(74, 144, 226, 0.6), 0 0 40px rgba(74, 144, 226, 0.4)",gold:"0 0 20px rgba(255, 215, 0, 0.6), 0 0 40px rgba(255, 215, 0, 0.4)",arcane:"0 0 20px rgba(139, 92, 246, 0.6), 0 0 40px rgba(139, 92, 246, 0.4)",frost:"0 0 20px rgba(96, 165, 250, 0.6), 0 0 40px rgba(96, 165, 250, 0.4)"}},transitions:{fast:"150ms ease-in-out",base:"250ms ease-in-out",slow:"350ms ease-in-out"},breakpoints:{xs:"320px",sm:"640px",md:"768px",lg:"1024px",xl:"1280px","2xl":"1536px"},zIndex:{dropdown:1e3,modal:1100,popover:1200,tooltip:1300,notification:1400}},ni=Ct`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    user-select: none;
  }
  
  html {
    font-size: 16px;
    scroll-behavior: smooth;
  }
  
  body {
    font-family: ${({theme:e})=>e.fonts.body};
    background: linear-gradient(
      180deg,
      ${({theme:e})=>e.colors.neutral.black} 0%,
      ${({theme:e})=>e.colors.winter.deepBlue} 50%,
      ${({theme:e})=>e.colors.neutral.darkGray} 100%
    );
    color: ${({theme:e})=>e.colors.neutral.white};
    line-height: 1.6;
    min-height: 100vh;
    overflow-x: hidden;
    position: relative;
    
    /* Effet de neige animé en arrière-plan */
    &::before {
      content: '';
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-image: 
        radial-gradient(2px 2px at 20% 30%, ${({theme:e})=>e.colors.winter.snowWhite}, transparent),
        radial-gradient(2px 2px at 60% 70%, ${({theme:e})=>e.colors.winter.snowWhite}, transparent),
        radial-gradient(1px 1px at 50% 50%, ${({theme:e})=>e.colors.winter.snowWhite}, transparent),
        radial-gradient(1px 1px at 80% 10%, ${({theme:e})=>e.colors.winter.snowWhite}, transparent),
        radial-gradient(2px 2px at 90% 60%, ${({theme:e})=>e.colors.winter.snowWhite}, transparent);
      background-size: 200px 200px, 300px 300px, 150px 150px, 250px 250px, 180px 180px;
      background-position: 0 0, 40px 60px, 130px 270px, 70px 100px, 150px 50px;
      opacity: 0.3;
      z-index: -1;
      pointer-events: none;
      animation: snowfall 20s linear infinite;
    }
  }
  
  @keyframes snowfall {
    0% {
      background-position: 0 0, 40px 60px, 130px 270px, 70px 100px, 150px 50px;
    }
    100% {
      background-position: 0 200px, 40px 260px, 130px 470px, 70px 300px, 150px 250px;
    }
  }
  
  h1, h2, h3, h4, h5, h6 {
    font-family: ${({theme:e})=>e.fonts.primary};
    font-weight: ${({theme:e})=>e.fontWeights.bold};
    line-height: 1.2;
    color: ${({theme:e})=>e.colors.primary.gold};
    text-shadow: 
      2px 2px 4px rgba(0, 0, 0, 0.8),
      0 0 10px rgba(255, 215, 0, 0.3);
  }
  
  h1 {
    font-size: ${({theme:e})=>e.fontSizes["5xl"]};
    margin-bottom: ${({theme:e})=>e.spacing.xl};
  }
  
  h2 {
    font-size: ${({theme:e})=>e.fontSizes["4xl"]};
    margin-bottom: ${({theme:e})=>e.spacing.lg};
  }
  
  h3 {
    font-size: ${({theme:e})=>e.fontSizes["3xl"]};
    margin-bottom: ${({theme:e})=>e.spacing.md};
  }
  
  h4 {
    font-size: ${({theme:e})=>e.fontSizes["2xl"]};
    margin-bottom: ${({theme:e})=>e.spacing.md};
  }
  
  p {
    margin-bottom: ${({theme:e})=>e.spacing.md};
  }
  
  a {
    color: ${({theme:e})=>e.colors.winter.frostBlue};
    text-decoration: none;
    transition: ${({theme:e})=>e.transitions.fast};
    
    &:hover {
      color: ${({theme:e})=>e.colors.primary.gold};
      text-shadow: ${({theme:e})=>e.shadows.glow.gold};
    }
  }
  
  button {
    font-family: ${({theme:e})=>e.fonts.secondary};
    cursor: pointer;
    border: none;
    outline: none;
    transition: ${({theme:e})=>e.transitions.base};
  }
  
  /* Scrollbar personnalisée */
  ::-webkit-scrollbar {
    width: 12px;
  }
  
  ::-webkit-scrollbar-track {
    background: ${({theme:e})=>e.colors.neutral.darkGray};
    border-radius: ${({theme:e})=>e.borderRadius.md};
  }
  
  ::-webkit-scrollbar-thumb {
    background: linear-gradient(
      180deg,
      ${({theme:e})=>e.colors.primary.gold},
      ${({theme:e})=>e.colors.primary.bronze}
    );
    border-radius: ${({theme:e})=>e.borderRadius.md};
    border: 2px solid ${({theme:e})=>e.colors.neutral.darkGray};
    
    &:hover {
      background: ${({theme:e})=>e.colors.primary.gold};
      box-shadow: ${({theme:e})=>e.shadows.glow.gold};
    }
  }
  
  /* Sélection de texte */
  ::selection {
    background: ${({theme:e})=>e.colors.primary.gold};
    color: ${({theme:e})=>e.colors.neutral.black};
  }
  
  /* Utilitaires */
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 ${({theme:e})=>e.spacing.lg};
  }
`,ai={apiKey:"AIzaSyAcelSLYaVnCo-VNmZ7duPrBZ2S9p1__Nc",authDomain:"xmas-corp.firebaseapp.com",databaseURL:"https://xmas-corp-default-rtdb.europe-west1.firebasedatabase.app",projectId:"xmas-corp",storageBucket:"xmas-corp.firebasestorage.app",messagingSenderId:"795906380947",appId:"1:795906380947:web:e6e874d93c70d9713fe966",measurementId:"G-EY3X1CEYSZ"},ge=Nt(ai),Pe=Zt(ge),Q=Gt(ge);Ot(ge);typeof window<"u"&&Ut(ge);const li=async()=>{try{return(await Yt(Pe)).user}catch(e){throw console.error("Erreur lors de la connexion anonyme:",e),e}},oi=async()=>{try{await Xt(Pe)}catch(e){throw console.error("Erreur lors de la déconnexion:",e),e}},ci=e=>Vt(Pe,e);function di(e){return e.toString().normalize("NFD").replace(new RegExp("\\p{Diacritic}","gu"),"").toLowerCase().trim().replace(/\s+/g,"-").replace(/[^a-z0-9-]/g,"").replace(/--+/g,"-")}const q={characters:"characters",messages:"messages"},Fe={strength:{name:"Force",description:"Augmente la force du personnage, augmentant les dégâts physiques.",emoji:"💪"},agility:{name:"Agilité",description:"Augmente l'agilité du personnage, améliorant la précision et l'esquive.",emoji:"🤸‍♂️"},intellect:{name:"Intelligence",description:"Augmente l'intelligence du personnage, améliorant les pouvoirs magiques.",emoji:"🧠"},stamina:{name:"Endurance",description:"Augmente l'endurance du personnage, augmentant la santé maximale.",emoji:"❤️"},attackPower:{name:"Puissance d'attaque",description:"Augmente la puissance d'attaque, augmentant les dégâts physiques infligés.",emoji:"⚔️"},spellPower:{name:"Puissance magique",description:"Augmente la puissance magique, augmentant les dégâts magiques infligés.",emoji:"✨"},critChance:{name:"Chance de coup critique",description:"Augmente la chance de porter des coups critiques, infligeant des dégâts supplémentaires.",emoji:"🎯"},luck:{name:"Chance de potion",description:"Augmente la chance d'obtenir des objets rares.",emoji:"🍀"}},yt=async(e,i)=>{try{const s=T(Q,e),r=ti(s);return await ii(r,{...i,createdAt:Me(),updatedAt:Me()}),r.key}catch(s){throw console.error("Erreur lors de la création du document:",s),s}},xi=async e=>{try{const i=T(Q,e),s=await ft(i);if(s.exists()){const r=s.val();return Object.keys(r).map(n=>({id:n,...r[n]}))}else return[]}catch(i){throw console.error("Erreur lors de la lecture des documents:",i),i}},bt=async(e,i,s,r)=>{try{const n=T(Q,e);let l=Re(n,Kt(i));s!==void 0&&(l=Re(l,ei(s)));const o=await ft(l);if(o.exists()){const d=o.val();return Object.keys(d).map(c=>({id:c,...d[c]}))}else return[]}catch(n){throw console.error("Erreur lors de la requête:",n),n}},We=e=>{const i={};return Object.keys(e).forEach(s=>{const r=e[s];if(r!==void 0)if(r!==null&&typeof r=="object"&&!Array.isArray(r)){const n=We(r);Object.keys(n).length>0&&(i[s]=n)}else Array.isArray(r)?i[s]=r.filter(n=>n!==void 0).map(n=>n!==null&&typeof n=="object"&&!Array.isArray(n)?We(n):n):i[s]=r}),i},pe=async(e,i,s)=>{try{const r=T(Q,`${e}/${i}`),n=We(s);await Jt(r,{...n,updatedAt:Me()})}catch(r){throw console.error("Erreur lors de la mise à jour du document:",r),r}},hi=async(e,i)=>{try{const s=T(Q,`${e}/${i}`);await si(s)}catch(s){throw console.error("Erreur lors de la suppression du document:",s),s}},pi=(e,i,s)=>{const r=T(Q,`${e}/${i}`),n=mt(r,l=>{l.exists()?s({id:i,...l.val()}):s(null)});return()=>gt(r,"value",n)},jt=(e,i)=>{const s=T(Q,e),r=mt(s,n=>{if(n.exists()){const l=n.val(),o=Object.keys(l).map(d=>({id:d,...l[d]}));i(o)}else i([])});return()=>gt(s,"value",r)},ui=async e=>(await bt(q.messages,"channel",e)).sort((s,r)=>r.timestamp-s.timestamp).slice(0,100).reverse(),mi=async(e,i,s)=>yt(q.messages,{who:e,message:i,channel:s,timestamp:Date.now()}),gi=async()=>{const e=await xi(q.characters),i=_t(e.map(r=>(r.status=typeof r.updatedAt=="number"&&r.updatedAt+60*1e3*15>Date.now()?"online":"offline",r)),r=>r.status||"offline");return i.online=Ie(i.online||[],["name"],["asc"]),i.offline=Ie(i.offline||[],["name"],["asc"]),[...i.online,...i.offline].filter((r,n,l)=>n===l.findIndex(o=>o.userId===r.userId))},fi=(e,i)=>{const s=[e.name.toLowerCase(),i.name.toLowerCase()].sort();return di(`mp_${s.join("_")}`)},yi=async(e,i)=>{const s=fi(e,i);e.chatChannel||(e.chatChannel=[]),i.chatChannel||(i.chatChannel=[]),e.chatChannel.find(r=>r.slug===s)||(e.chatChannel.push({slug:s,name:i.name}),await pe(q.characters,e.id,{chatChannel:e.chatChannel})),i.chatChannel.find(r=>r.slug===s)||(i.chatChannel.push({slug:s,name:e.name}),await pe(q.characters,i.id,{chatChannel:i.chatChannel}))},bi=async(e,i)=>{const s=e.chatChannel.filter(r=>r.slug!==i);await pe(q.characters,e.id,{chatChannel:s})},ji=async e=>bt(q.characters,"userId",e),ki=async e=>yt(q.characters,e),kt=u.createContext({user:null,loading:!0}),wi=({children:e})=>{const[i,s]=u.useState(null),[r,n]=u.useState(!0);u.useEffect(()=>{const o=ci(async d=>{if(d)s(d),n(!1);else try{const c=await li();s(c)}catch(c){console.error("Erreur lors de la connexion anonyme:",c)}finally{n(!1)}});return()=>o()},[]);const l={user:i,loading:r};return t.jsx(kt.Provider,{value:l,children:e})},Se=()=>{const e=u.useContext(kt);if(!e)throw new Error("useAuth doit être utilisé dans un AuthProvider");return e},C={warrior:{id:"warrior",name:"Guerrier",description:"Maître du combat au corps à corps, utilise la rage pour déchaîner des attaques dévastatrices.",primaryStat:"strength",icon:"⚔️",color:"#C79C6E",baseHP:120,baseMP:0,availableFor:{alliance:["human","dwarf","night-elf","gnome","draenei","worgen"],horde:["orc","undead","tauren","troll","blood-elf","goblin"]},energyName:"🔥 Rage",armorType:"plate"},paladin:{id:"paladin",name:"Paladin",description:"Guerrier sacré qui utilise la Lumière pour protéger ses alliés et punir ses ennemis.",primaryStat:"strength",icon:"🛡️",color:"#F58CBA",baseHP:110,baseMP:80,availableFor:{alliance:["human","dwarf","draenei"],horde:["blood-elf","tauren"]},energyName:"💙 Mana",armorType:"plate"},hunter:{id:"hunter",name:"Chasseur",description:"Maître du tir à distance et compagnon des bêtes sauvages.",primaryStat:"agility",icon:"🏹",color:"#ABD473",baseHP:100,baseMP:100,availableFor:{alliance:["human","dwarf","night-elf","draenei","worgen","gnome"],horde:["orc","undead","tauren","troll","blood-elf","goblin"]},energyName:"🎯 Focus",armorType:"mail"},rogue:{id:"rogue",name:"Voleur",description:"Assassin furtif spécialisé dans les attaques sournoises et les coups critiques.",primaryStat:"agility",icon:"🗡️",color:"#FFF569",baseHP:95,baseMP:90,availableFor:{alliance:["human","dwarf","night-elf","gnome","worgen"],horde:["orc","undead","troll","blood-elf","goblin"]},energyName:"⚡ Énergie",armorType:"leather"},priest:{id:"priest",name:"Prêtre",description:"Manipule la magie sacrée et de l'ombre pour soigner ou blesser.",primaryStat:"intellect",icon:"✨",color:"#FFFFFF",baseHP:80,baseMP:120,availableFor:{alliance:["human","dwarf","night-elf","draenei","worgen"],horde:["undead","troll","blood-elf","goblin"]},energyName:"💙 Mana",armorType:"cloth"},shaman:{id:"shaman",name:"Chaman",description:"Invoque le pouvoir des éléments et des esprits ancestraux.",primaryStat:"intellect",icon:"⚡",color:"#0070DE",baseHP:95,baseMP:110,availableFor:{alliance:["draenei"],horde:["orc","tauren","troll","goblin"]},energyName:"💙 Mana",armorType:"mail"},mage:{id:"mage",name:"Mage",description:"Maître des arcanes, du feu et du givre, capable de manipuler les forces magiques.",primaryStat:"intellect",icon:"🔮",color:"#69CCF0",baseHP:75,baseMP:130,availableFor:{alliance:["human","dwarf","night-elf","gnome","draenei","worgen"],horde:["orc","undead","troll","blood-elf","goblin"]},energyName:"💙 Mana",armorType:"cloth"},warlock:{id:"warlock",name:"Démoniste",description:"Invoque des démons et utilise la magie de l'ombre et du feu démoniaque.",primaryStat:"intellect",icon:"👿",color:"#9482C9",baseHP:85,baseMP:120,availableFor:{alliance:["human","dwarf","gnome","worgen"],horde:["orc","undead","blood-elf","goblin"]},energyName:"💙 Mana",armorType:"cloth"},druid:{id:"druid",name:"Druide",description:"Transformiste de la nature capable de prendre plusieurs formes animales.",primaryStat:"intellect",icon:"🌿",color:"#FF7D0A",baseHP:90,baseMP:110,availableFor:{alliance:["night-elf","worgen"],horde:["tauren","troll"]},energyName:"💙 Mana",armorType:"leather"},"death-knight":{id:"death-knight",name:"Chevalier de la mort",description:"Guerrier impie maniant les pouvoirs de la mort et de la glace.",primaryStat:"strength",icon:"💀",color:"#C41F3B",baseHP:115,baseMP:100,availableFor:{alliance:["human","dwarf","night-elf","gnome","draenei","worgen"],horde:["orc","undead","tauren","troll","blood-elf","goblin"]},energyName:"🌀 Runes",armorType:"plate"}},wt={human:{id:"human",name:"Humain",description:"Peuple courageux et déterminé de Hurlevent.",faction:"alliance",icon:"👨",bonuses:{strength:2,agility:1,intellect:2,stamina:2}},dwarf:{id:"dwarf",name:"Nain",description:"Race ancienne et robuste de Forgefer.",faction:"alliance",icon:"🧔",bonuses:{strength:3,stamina:4,agility:1}},"night-elf":{id:"night-elf",name:"Elfe de la nuit",description:"Ancien peuple mystique de Kalimdor.",faction:"alliance",icon:"🧝",bonuses:{agility:4,intellect:1,stamina:1}},gnome:{id:"gnome",name:"Gnome",description:"Inventeurs ingénieux de Gnomeregan.",faction:"alliance",icon:"🧙",bonuses:{intellect:4,agility:2}},draenei:{id:"draenei",name:"Draeneï",description:"Réfugiés nobles guidés par la Lumière.",faction:"alliance",icon:"👽",bonuses:{strength:2,intellect:2,stamina:2}},worgen:{id:"worgen",name:"Worgen",description:"Humains maudits transformés en loups-garous.",faction:"alliance",icon:"🐺",bonuses:{strength:2,agility:3,stamina:2}},orc:{id:"orc",name:"Orc",description:"Guerriers féroces d'Orgrimmar.",faction:"horde",icon:"👹",bonuses:{strength:4,stamina:3}},undead:{id:"undead",name:"Mort-vivant",description:"Les Réprouvés, libérés du Fléau.",faction:"horde",icon:"🧟",bonuses:{intellect:2,agility:2,stamina:2}},tauren:{id:"tauren",name:"Tauren",description:"Géants paisibles des plaines de Mulgore.",faction:"horde",icon:"🐮",bonuses:{strength:3,stamina:5}},troll:{id:"troll",name:"Troll",description:"Chasseurs rusés des Îles de l'Écho.",faction:"horde",icon:"🗿",bonuses:{agility:3,intellect:1,stamina:2}},"blood-elf":{id:"blood-elf",name:"Elfe de sang",description:"Anciens Haut-Elfes assoiffés de magie.",faction:"horde",icon:"🧝‍♀️",bonuses:{intellect:4,agility:2}},goblin:{id:"goblin",name:"Gobelin",description:"Marchands malins et ingénieux.",faction:"horde",icon:"👺",bonuses:{intellect:3,agility:3}}},vi=e=>Object.values(wt).filter(i=>i.faction===e),$i=(e,i)=>Object.values(C).filter(s=>s.availableFor[i].includes(e)),vt=(e,i)=>{const s=C[e],r=wt[i],n=10,l=10,o=10,d=10,c=10,x=n+(r.bonuses.strength||0),p=l+(r.bonuses.agility||0),f=o+(r.bonuses.intellect||0),m=d+(r.bonuses.stamina||0),b=c+Math.floor((p+m+x+f)/4),g=s.energyName,$=s.baseHP*10,A=s.baseMP*5;let B=0;switch(s.primaryStat){case"strength":B+=5*x;break;case"agility":B+=7*p;break;case"intellect":B+=5*f;break}return{health:$,energy:A,strength:x,agility:p,intellect:f,stamina:m,armor:b,energyName:g,critChance:B}};function Li(e){const i={strength:0,agility:0,intellect:0,stamina:0,armor:0,attackPower:0,spellPower:0,critChance:0};return e.equipment&&Object.keys(e.equipment).forEach(s=>{const r=e.equipment?.[s];r&&r.stats&&(i.strength+=r.stats.strength||0,i.agility+=r.stats.agility||0,i.intellect+=r.stats.intellect||0,i.stamina+=r.stats.stamina||0,i.armor+=r.stats.armor||0,i.attackPower+=r.stats.attackPower||0,i.spellPower+=r.stats.spellPower||0,i.critChance+=r.stats.critChance||0)}),i}function Be(e){const i=vt(e.class,e.race),s=Li(e),r=e.level,n=i.health,l=i.energy,o=i.strength,d=i.agility,c=i.intellect,x=i.stamina,p=5,f=5,m=i.armor,b=i.critChance;return{maxHealth:(n+x+s.stamina)*r,maxMana:(l+c+s.intellect)*r,strength:(o+s.strength)*r,agility:(d+s.agility)*r,intellect:(c+s.intellect)*r,stamina:(x+s.stamina)*r,attackPower:(p+s.attackPower)*r,spellPower:(f+s.spellPower)*r,armor:Number(m)+s.armor,critChance:(Number(b)+s.critChance)*.1,experienceToNextLevel:ue(r+1)}}function ue(e){return Math.floor(100*Math.pow(e,1.12))}function me(e){return e>=1e9?(e/1e9).toFixed(1).replace(/\.0$/,"")+"B":e>=1e6?(e/1e6).toFixed(1).replace(/\.0$/,"")+"M":e>=1e3?(e/1e3).toFixed(1).replace(/\.0$/,"")+"K":e.toString()}const $t=u.createContext({character:null,loading:!0,hasCharacter:!1,createNewCharacter:async()=>{},updateCharacter:async()=>{},refreshCharacter:async()=>{}}),Mi=({children:e})=>{const{user:i}=Se(),[s,r]=u.useState(null),[n,l]=u.useState(!0),o=u.useCallback(async f=>{try{l(!0);const m=await ji(f.uid);m.length>0?r(m[0]):r(null)}catch(m){console.error("Erreur lors du chargement du personnage:",m),r(null)}finally{l(!1)}},[]),d=u.useCallback(async f=>{if(!i)throw new Error("Utilisateur non connecté");try{l(!0);const m={userId:i.uid,name:f.name,faction:f.faction,race:f.race,class:f.class,level:1,experience:0,experienceToNextLevel:Math.floor(100*Math.pow(1.5,0)),health:0,maxHealth:0,mana:0,maxMana:0,strength:0,agility:0,intellect:0,stamina:0,attackPower:5,spellPower:5,armor:5,critChance:5,achievements:[],gold:0,defeatedMonsters:0,totalDamageDealt:0,inventory:{potions:[]},equipment:{},bagItems:[],chatChannel:[]},b=Be(m);await ki({...m,...b,mana:b.maxMana,health:b.maxHealth}),await o(i)}catch(m){throw console.error("Erreur lors de la création du personnage:",m),m}finally{l(!1)}},[i,o]),c=u.useCallback(async f=>{if(!s?.id)throw new Error("Aucun personnage à mettre à jour");try{const m=Be(f);await pe(q.characters,f.id??s.id,{...f,...m})}catch(m){throw console.error("Erreur lors de la mise à jour du personnage:",m),m}},[s]),x=u.useCallback(async()=>{i&&await o(i)},[i,o]);u.useEffect(()=>{i?o(i):(r(null),l(!1))},[i,o]),u.useEffect(()=>{if(!s?.id)return;const f=pi(q.characters,s.id,m=>{m&&r(m)});return()=>f()},[s?.id]);const p={character:s,loading:n,hasCharacter:s!==null,createNewCharacter:d,updateCharacter:c,refreshCharacter:x};return t.jsx($t.Provider,{value:p,children:e})},W=()=>{const e=u.useContext($t);if(!e)throw new Error("useCharacter must be used within a CharacterProvider");return e},Lt=u.createContext(void 0),Fi=a.div`
  position: fixed;
  left: ${({$x:e})=>e}px;
  top: ${({$y:e})=>e}px;
  z-index: 10000;
  opacity: ${({$visible:e})=>e?1:0};
  transition: opacity 0.2s ease;
  transform: translate(-50%, -100%) translateY(-10px);
`,Wi=a.div`
  background: linear-gradient(
    135deg,
    rgba(20, 20, 30, 0.98) 0%,
    rgba(30, 30, 45, 0.98) 100%
  );
  border: 2px solid ${({$quality:e,theme:i})=>{switch(e){case"poor":return"#9d9d9d";case"common":return"#ffffff";case"uncommon":return"#1eff00";case"rare":return"#0070dd";case"epic":return"#a335ee";case"legendary":return"#ff8000";default:return i.colors.primary.gold}}};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  padding: ${({theme:e})=>e.spacing.md};
  min-width: 200px;
  max-width: 350px;
  box-shadow: ${({theme:e})=>e.shadows.xl};
  backdrop-filter: blur(10px);
`,Bi=a.div`
  font-size: ${({theme:e})=>e.fontSizes.base};
  font-weight: ${({theme:e})=>e.fontWeights.bold};
  color: ${({$quality:e})=>{switch(e){case"poor":return"#9d9d9d";case"common":return"#ffffff";case"uncommon":return"#1eff00";case"rare":return"#0070dd";case"epic":return"#a335ee";case"legendary":return"#ff8000";default:return"#ffd700"}}};
  margin-bottom: ${({theme:e})=>e.spacing.xs};
  text-shadow: 0 0 10px rgba(0, 0, 0, 0.8);
`,Ai=a.div`
  font-size: ${({theme:e})=>e.fontSizes.sm};
  color: ${({theme:e})=>e.colors.text.secondary};
  margin-bottom: ${({theme:e})=>e.spacing.sm};
  font-style: italic;
`,Di=a.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing.xs};
  border-top: 1px solid rgba(255, 215, 0, 0.3);
  padding-top: ${({theme:e})=>e.spacing.sm};
`,Te=a.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`,Qe=a.div`
//   display: flex;
  color: #1eff00;
  font-size: ${({theme:e})=>e.fontSizes.sm};
  width: calc(100% - 100px);
  text-transform: capitalize;
`,Ce=a.div`
//   display: flex;
  color: ${({theme:e})=>e.colors.primary.gold};
  font-size: ${({theme:e})=>e.fontSizes.sm};
  width: 50px;
  text-align: right;
`,_e=a.div`
  color: ${({$colorText:e})=>e};
  font-size: ${({theme:e})=>e.fontSizes.sm};
  text-align: right;
  width: 50px;
  &:before { 
    content: '${({$colorText:e})=>e==="green"?"+":""}'; 
  } 
`;function Ei({children:e}){const[i,s]=u.useState(null),[r,n]=u.useState({x:0,y:0}),[l,o]=u.useState(!1),[d,c]=u.useState(!1),x=(b,g)=>{s(b),n(g),o(!0)},p=()=>{o(!1),setTimeout(()=>{d||s(null)},200)},f=()=>{c(!0),o(!0)},m=()=>{c(!1),o(!1),setTimeout(()=>{d||s(null)},200)};return t.jsxs(Lt.Provider,{value:{showTooltip:x,hideTooltip:p},children:[e,i&&t.jsx(Fi,{$x:r.x,$y:r.y,$visible:l,onMouseEnter:f,onMouseLeave:m,children:t.jsxs(Wi,{$quality:i.quality,onClick:p,children:[t.jsx(Bi,{$quality:i.quality,children:i.title}),i.description&&t.jsxs(Ai,{children:['"',i.description,'"']}),i.stats&&Object.keys(i.stats).length>0&&t.jsx(Di,{children:Object.entries(i.stats).sort().reverse().map(([b,g])=>t.jsxs(Te,{children:[t.jsx(Qe,{children:b}),t.jsx(Ce,{children:g}),i.equiped&&t.jsx(t.Fragment,{children:t.jsx(_e,{$colorText:Number(g)>Number(i.equiped.stats[b])?"green":"red",children:`${Number(g)-Number(i.equiped.stats[b])}`})})]},b))}),t.jsxs(Te,{children:[t.jsx(Qe,{children:"level"}),t.jsx(Ce,{children:i.level}),i.equiped&&t.jsx(_e,{$colorText:Number(i.level)>Number(i.equiped.level)?"green":"red",children:`${i.equiped.level}`})]})]})})]})}function Mt(){const e=u.useContext(Lt);if(!e)throw new Error("useTooltip must be used within a TooltipProvider");return e}const Ft=u.createContext(void 0),Pi=a.div`
  position: fixed;
  right: 0;
  bottom: ${({$visible:e})=>e?"0":"-10px"};;
  width: ${({$visible:e})=>e?"300px":"0"};
  height: ${({$visible:e})=>e?"50vh":"0"};
  border: 2px solid ${({theme:e})=>e.colors.primary.gold};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  box-shadow: ${({theme:e})=>e.shadows.xl};
  backdrop-filter: blur(10px);
  z-index: 1000;
`,Si=a.div`
    position: absolute;
    top: ${({$visible:e})=>e?"0":"-70px"};
    left: ${({$visible:e})=>e?"0":"-60px"};
    width: ${({$visible:e})=>e?"30px":"60px"};
    height: ${({$visible:e})=>e?"30px":"60px"};
    background-color: ${({theme:e})=>e.colors.primary.gold};
    border-radius: ${({theme:e})=>e.borderRadius.sm};
    font-size: ${({$visible:e})=>e?"0.8rem":"1.5rem"};;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`,qi=a.div`
  color: ${({theme:e})=>e.colors.primary.gold};
  font-size: ${({theme:e})=>e.fontSizes.lg};
  text-shadow: ${({theme:e})=>e.shadows.glow.gold};
  text-align: center;
`,zi=a.div`
  height: 90%;
  overflow-y: auto;
`,Ii=a.div`
  padding: ${({theme:e})=>e.spacing.sm};
  border-bottom: 1px solid ${({theme:e})=>e.colors.winter.darkIce};
  color: ${({theme:e})=>e.colors.neutral.white};
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: ${({theme:e})=>e.spacing.sm};

  &:hover {
    background-color: rgba(255, 215, 0, 0.1);
  }
`,Ri=a.div`
  font-weight: ${({theme:e})=>e.fontWeights.bold};
  color: ${({theme:e,$color:i})=>i||e.colors.primary.gold};
`,Ti=a.div`
  font-size: ${({theme:e})=>e.fontSizes.sm};
  color: ${({theme:e})=>e.colors.winter.iceBlue};
`,Qi=a.div`
  font-size: ${({theme:e})=>e.fontSizes.sm};
  color: ${({theme:e})=>e.colors.winter.iceBlue};
`,Ci=a.div`
  margin-left: auto;
  display: flex;
  gap: ${({theme:e})=>e.spacing.sm};
`,be=a.button`
  background: none;
  border: none;
  color: ${({theme:e})=>e.colors.primary.gold};
  cursor: pointer;
  font-size: 1rem;
  padding: ${({theme:e})=>e.spacing.xs};

  &:hover {
    color: ${({theme:e})=>e.colors.primary.gold};
    background-color: rgba(255, 215, 0, 0.2);
    border-radius: 50%;
  }
`;function _i({children:e}){const[i,s]=u.useState(null),[r,n]=u.useState(!1),{character:l}=W();function o(){n(!0)}function d(){n(!1)}const c=u.useCallback(async()=>{const p=await gi();s(p)},[]);u.useEffect(()=>{jt("characters",c),c()},[l,c]);const x={members:i,showMembers:o,hideMembers:d};return t.jsxs(Ft.Provider,{value:x,children:[t.jsxs(Pi,{$visible:r,children:[t.jsx(Si,{$visible:r,onClick:()=>{n(!r)},children:r?"❌":"👥"}),t.jsx(qi,{children:"Members"}),t.jsx(zi,{children:i&&i.map(p=>t.jsxs(Ii,{children:[t.jsx(Ti,{children:typeof p.updatedAt=="number"&&p.updatedAt+60*1e3*15>Date.now()?"🟢":"⚪"}),t.jsx(Qi,{children:p.level}),t.jsx(Ri,{$color:C[p.class].color,children:p.name}),l&&l.id!==p.id&&t.jsxs(Ci,{children:[l.isAdmin&&t.jsx(be,{onClick:()=>{p.id&&hi("characters",p.id)},children:"🗑️"}),t.jsx(be,{onClick:()=>{console.log("SEND LOVE")},children:"❤️"}),t.jsx(be,{onClick:()=>{yi(l,p)},children:"💬"})]})]},p.id))})]}),e]})}const Hi=()=>{const e=u.useContext(Ft);if(!e)throw new Error("useMembers must be used within a MembersProvider");return e},Ni=u.createContext(void 0),Zi=a.div`
  position: fixed;
  bottom: ${({$visible:e})=>e?"0":"-10px"};;
  left: 0;
  z-index: 9999;
  width: ${({$visible:e})=>e?"400px":"0"};
  height: ${({$visible:e})=>e?"300px":"0"};
  border: 2px solid ${({theme:e})=>e.colors.primary.gold};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  box-shadow: ${({theme:e})=>e.shadows.xl};
  backdrop-filter: blur(10px);
`,Gi=a.div`
    position: absolute;
    top: ${({$visible:e})=>e?"0":"-70px"};
    right: ${({$visible:e})=>e?"0":"-60px"};
    width: ${({$visible:e})=>e?"30px":"60px"};
    height: ${({$visible:e})=>e?"30px":"60px"};
    background-color: ${({theme:e})=>e.colors.primary.gold};
    border-radius: ${({theme:e})=>e.borderRadius.sm};
    font-size: ${({$visible:e})=>e?"0.8rem":"1.5rem"};;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`,Oi=a.div`
    display: flex;
    flex-direction: row;
    background-color: rgba(0, 0, 0, 0.4);
    gap: ${({theme:e})=>e.spacing.md};
    padding: ${({theme:e})=>e.spacing.xs} ${({theme:e})=>e.spacing.sm};
    height: 30px;
    `,Ui=a.div`
    color: ${({theme:e,selected:i,$type:s})=>{switch(i){case!0:return e.colors.primary.gold;default:return s!=="general"?e.colors.channels.wisp:e.colors.text.secondary}}};
    font-size: ${({theme:e})=>e.fontSizes.base};
    font-weight: ${({theme:e})=>e.fontWeights.bold};
    cursor: pointer;
    display: flex;
    align-items: center;
    `,Vi=a.div`
    flex: 1;
    // background: red;
    padding: 0;
    overflow-y: auto;
    height: calc(100% - 60px);
    `,Xi=a.div`
    flex: 1;
    display: flex;
    flex-direction: row;
    gap: ${({theme:e})=>e.spacing.xs};
    padding: ${({theme:e})=>e.spacing.xxs} ${({theme:e})=>e.spacing.sm};
    color: ${({theme:e,$type:i})=>i!=="general"?e.colors.channels.wisp:e.colors.channels.general};
    &:nth-child(odd) {
        background-color: rgba(0, 0, 0, 0.1);
    }
    &:nth-child(even) {
        background-color: rgba(0, 0, 0, 0.2);
    }
    `,Yi=a.span`
    font-weight: ${({theme:e})=>e.fontWeights.semibold};
    `,Ji=a.input`
    padding: ${({theme:e})=>e.spacing.sm};
    border: none;
    border-radius: ${({theme:e})=>e.borderRadius.sm};
    background-color: rgba(0, 0, 0, 0.4);
    color: ${({theme:e})=>e.colors.neutral.white};
    font-size: ${({theme:e})=>e.fontSizes.base};
    margin: 0;
    width: 100%;
    height: 30px;
`;function Ki({children:e}){const[i,s]=u.useState(!1),[r,n]=u.useState("general"),{character:l}=W(),[o,d]=u.useState([]),c=[{slug:"general",name:"Général"},...l?.chatChannel||[]],x=u.useCallback(async()=>{const g=await ui(r);d(g.map($=>({who:$.who,message:$.message,timestamp:$.timestamp??Date.now()})))},[r]),p=()=>{s(!0)},f=()=>{s(!1)},m=g=>{g.value&&l&&(mi(l.name,g.value,r),g.value="")};u.useEffect(()=>{x()},[x]),u.useEffect(()=>{jt("messages",async()=>{await x()})},[x]);const b=zt.useRef(null);return u.useEffect(()=>{b.current&&(b.current.scrollTop=b.current.scrollHeight)},[o]),t.jsxs(Ni.Provider,{value:{showChat:p,hideChat:f},children:[t.jsxs(Zi,{$visible:i,children:[t.jsx(Gi,{$visible:i,onClick:()=>s(!i),children:i?"❌":"💬"}),i&&t.jsxs(t.Fragment,{children:[t.jsx(Oi,{children:c.map(g=>t.jsxs(Ui,{selected:r===g.slug,onClick:()=>n(g.slug),$type:g.slug,children:[g.name,g.slug!=="general"&&t.jsx("span",{style:{marginLeft:"4px",cursor:"pointer",fontSize:"12px"},onClick:$=>{if($.stopPropagation(),!l)return;const A=g.slug;bi(l,A),r===A&&n("general")},children:"❌"})]},g.slug))}),t.jsx(Vi,{ref:b,children:o.map((g,$)=>t.jsxs(Xi,{$type:r,children:[t.jsxs(Yi,{children:["[",g.who,"]:"]})," ",g.message]},$))}),t.jsx(Ji,{onKeyDown:g=>{g.key==="Enter"&&m(g.currentTarget)}})]})]}),e]})}const F=a.button`
  font-family: ${({theme:e})=>e.fonts.secondary};
  font-size: ${({$size:e,theme:i})=>e==="small"?i.fontSizes.sm:e==="large"?i.fontSizes.xl:i.fontSizes.lg};
  font-weight: ${({theme:e})=>e.fontWeights.bold};
  padding: ${({$size:e,theme:i})=>e==="small"?`${i.spacing.sm} ${i.spacing.md}`:e==="large"?`${i.spacing.lg} ${i.spacing["2xl"]}`:`${i.spacing.md} ${i.spacing.xl}`};
  width: ${({$fullWidth:e})=>e?"100%":"auto"};
  background: ${({theme:e,$variant:i})=>{switch(i){case"alliance":return`linear-gradient(135deg, ${e.colors.alliance.blue}, ${e.colors.alliance.darkBlue})`;case"horde":return`linear-gradient(135deg, ${e.colors.horde.red}, ${e.colors.horde.darkRed})`;case"secondary":return`linear-gradient(135deg, ${e.colors.neutral.gray}, ${e.colors.neutral.darkGray})`;default:return`linear-gradient(135deg, ${e.colors.primary.gold}, ${e.colors.primary.bronze})`}}};
  color: ${({theme:e})=>e.colors.neutral.white};
  border: ${({theme:e})=>e.borders.medium} solid ${({theme:e})=>e.colors.primary.gold};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  text-transform: uppercase;
  letter-spacing: 1px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: all ${({theme:e})=>e.transitions.base};

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    border-radius: ${({theme:e})=>e.borderRadius.full};
    background: rgba(255, 255, 255, 0.3);
    transform: translate(-50%, -50%);
    transition: width ${({theme:e})=>e.transitions.slow},
      height ${({theme:e})=>e.transitions.slow};
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${({theme:e})=>e.shadows.glow.gold};

    &::before {
      width: 300px;
      height: 300px;
    }
  }

  &:active {
    transform: translateY(0);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    
    &:hover {
      transform: none;
      box-shadow: none;
    }
  }
`;a.div`
  background: ${({variant:e})=>{switch(e){case"frost":return"linear-gradient(135deg, rgba(74, 144, 226, 0.2), rgba(30, 58, 95, 0.9))";case"fire":return"linear-gradient(135deg, rgba(239, 68, 68, 0.2), rgba(92, 0, 0, 0.9))";case"arcane":return"linear-gradient(135deg, rgba(139, 92, 246, 0.2), rgba(30, 30, 70, 0.9))";default:return"linear-gradient(135deg, rgba(30, 58, 95, 0.8), rgba(26, 31, 46, 0.9))"}}};
  border: ${({bordered:e,theme:i})=>e?`${i.borders.medium} solid ${i.colors.primary.gold}`:"none"};
  border-radius: ${({theme:e})=>e.borderRadius.lg};
  padding: ${({theme:e})=>e.spacing["2xl"]};
  box-shadow: ${({theme:e})=>e.shadows.xl};
  position: relative;
  transition: all ${({theme:e})=>e.transitions.base};

  ${({glowing:e,theme:i,variant:s})=>e&&`
    &::before {
      content: '';
      position: absolute;
      top: -2px;
      left: -2px;
      right: -2px;
      bottom: -2px;
      background: linear-gradient(
        45deg,
        ${s==="frost"?i.colors.winter.frostBlue:s==="fire"?i.colors.accent.fire:s==="arcane"?i.colors.accent.arcane:i.colors.primary.gold},
        ${i.colors.winter.frostBlue},
        ${s==="frost"?i.colors.winter.frostBlue:s==="fire"?i.colors.accent.fire:s==="arcane"?i.colors.accent.arcane:i.colors.primary.gold}
      );
      border-radius: ${i.borderRadius.lg};
      z-index: -1;
      opacity: 0;
      transition: opacity ${i.transitions.base};
    }

    &:hover::before {
      opacity: 0.6;
      animation: glow 2s ease-in-out infinite;
    }

    @keyframes glow {
      0%, 100% { opacity: 0.4; }
      50% { opacity: 0.8; }
    }
  `}

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${({theme:e,variant:i})=>{switch(i){case"frost":return e.shadows.glow.frost;case"arcane":return e.shadows.glow.arcane;default:return e.shadows.glow.blue}}};
  }
`;a.div`
  margin-bottom: ${({theme:e})=>e.spacing.lg};
  padding-bottom: ${({theme:e})=>e.spacing.md};
  border-bottom: ${({theme:e})=>e.borders.thin} solid ${({theme:e})=>e.colors.primary.gold};
`;a.h3`
  font-family: ${({theme:e})=>e.fonts.primary};
  font-size: ${({theme:e})=>e.fontSizes["2xl"]};
  color: ${({theme:e})=>e.colors.primary.gold};
  margin: 0;
`;a.p`
  font-family: ${({theme:e})=>e.fonts.secondary};
  font-size: ${({theme:e})=>e.fontSizes.sm};
  color: ${({theme:e})=>e.colors.winter.iceBlue};
  margin: ${({theme:e})=>e.spacing.xs} 0 0 0;
  text-transform: uppercase;
  letter-spacing: 1px;
`;a.div`
  color: ${({theme:e})=>e.colors.neutral.silver};
  line-height: 1.8;
`;a.div`
  margin-top: ${({theme:e})=>e.spacing.lg};
  padding-top: ${({theme:e})=>e.spacing.md};
  border-top: ${({theme:e})=>e.borders.thin} solid ${({theme:e})=>e.colors.neutral.gray};
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: ${({theme:e})=>e.spacing.md};
  flex-wrap: wrap;
`;const es=a.header`
  position: sticky;
  top: 0;
  background: linear-gradient(
    180deg,
    rgba(26, 31, 46, 0.98) 0%,
    rgba(30, 58, 95, 0.95) 100%
  );
  border-bottom: ${({theme:e})=>e.borders.medium} solid ${({theme:e})=>e.colors.primary.gold};
  padding: ${({theme:e})=>e.spacing.md} ${({theme:e})=>e.spacing.xl};
  box-shadow: ${({theme:e})=>e.shadows.lg};
  backdrop-filter: blur(10px);
  z-index: ${({theme:e})=>e.zIndex.dropdown};
`,ts=a.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: ${({theme:e})=>e.spacing.lg};
`,is=a.div`
  font-family: ${({theme:e})=>e.fonts.display};
  font-size: ${({theme:e})=>e.fontSizes["2xl"]};
  color: ${({theme:e})=>e.colors.primary.gold};
  text-shadow: ${({theme:e})=>e.shadows.glow.gold};
  cursor: pointer;
  user-select: none;

  @media (max-width: ${({theme:e})=>e.breakpoints.md}) {
    font-size: ${({theme:e})=>e.fontSizes.xl};
  }
`,ss=a.nav`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing.md};
`,rs=a.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing.md};
  padding: ${({theme:e})=>e.spacing.sm} ${({theme:e})=>e.spacing.md};
  background: rgba(10, 14, 26, 0.5);
  border-radius: ${({theme:e})=>e.borderRadius.md};
  border: ${({theme:e})=>e.borders.thin} solid ${({theme:e})=>e.colors.winter.darkIce};
`,ns=a.span`
  color: ${({theme:e})=>e.colors.winter.iceBlue};
  font-weight: ${({theme:e})=>e.fontWeights.medium};
  font-size: ${({theme:e})=>e.fontSizes.sm};

  @media (max-width: ${({theme:e})=>e.breakpoints.md}) {
    display: none;
  }
`,as=a.div`
  width: 40px;
  height: 40px;
  border-radius: ${({theme:e})=>e.borderRadius.full};
  background: linear-gradient(135deg, ${({theme:e})=>e.colors.primary.gold}, ${({theme:e})=>e.colors.primary.bronze});
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: ${({theme:e})=>e.fontWeights.bold};
  color: ${({theme:e})=>e.colors.neutral.black};
  font-size: ${({theme:e})=>e.fontSizes.lg};
  border: ${({theme:e})=>e.borders.medium} solid ${({theme:e})=>e.colors.primary.gold};
`;function re({showActions:e=!0}){const{user:i,loading:s}=Se(),{character:r}=W(),n=async()=>{try{await oi(),window.location.reload()}catch(l){console.error("Erreur lors de la déconnexion:",l)}};return t.jsx(es,{children:t.jsxs(ts,{children:[t.jsx(_,{to:"/",style:{textDecoration:"none"},children:t.jsx(is,{children:"❄️ Fête d'Hiver"})}),t.jsx(ss,{children:s?t.jsx("div",{children:"Chargement..."}):i?t.jsxs(t.Fragment,{children:[e&&t.jsxs(t.Fragment,{children:[t.jsx(_,{to:"/",children:t.jsx(F,{$size:"small",$variant:"horde",children:"👤"})}),t.jsx(_,{to:"/exploration",children:t.jsx(F,{$size:"small",children:"🗺️"})}),t.jsx(_,{to:"/shop",children:t.jsx(F,{$size:"small",$variant:"alliance",children:"🏪"})}),t.jsx(_,{to:"/bestiary",children:t.jsx(F,{$size:"small",$variant:"secondary",children:"📖"})}),t.jsx(_,{to:"/leaderboard",children:t.jsx(F,{$size:"small",$variant:"secondary",children:"🏆"})})]}),r&&r.isAdmin?t.jsx(F,{$size:"small",$variant:"secondary",onClick:n,children:"Nouveau Personnage"}):t.jsx(t.Fragment,{}),t.jsxs(rs,{children:[t.jsx(as,{children:"👤"}),t.jsx(ns,{children:r?.name||"Aventurier"})]})]}):null})]})})}const ls=a.input.attrs({type:"radio"})`
  opacity: 0;
  position: absolute;
  left: -9999px;
`,os=a.label`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem 1.5rem;
  border-radius: 1rem;
  border: 2px solid
    ${({$checked:e,$borderColor:i,theme:s})=>e?i||s.colors.primary.gold:s.colors.winter.darkIce};
  background: ${({$checked:e,$backgroundColor:i,theme:s})=>e?i||s.colors.winter.iceBlue:"rgba(0,0,0,0.3)"};
  color: ${({theme:e,$checked:i})=>i?e.colors.primary.gold:e.colors.neutral.white};
  font-weight: 600;
  font-size: 1.1rem;
  cursor: ${({$disabled:e})=>e?"not-allowed":"pointer"};
  opacity: ${({$disabled:e})=>e?.5:1};
  box-shadow: ${({$checked:e})=>e?"0 0 8px #FFD70055":"none"};
  transition: all 0.2s;

  &:hover {
    border-color: ${({theme:e})=>e.colors.primary.gold};
    background: ${({$checked:e,$backgroundColor:i,theme:s})=>e?i||s.colors.winter.iceBlue:s.colors.winter.darkIce};
  }
`,ne=({checked:e,onChange:i,label:s,value:r,name:n,borderColor:l,backgroundColor:o,disabled:d})=>t.jsxs(os,{$checked:e,$borderColor:l,$backgroundColor:o,$disabled:d,children:[t.jsx(ls,{checked:e,onChange:i,value:r,name:n,disabled:d}),s]}),cs=a.div`
  min-height: 100vh;
  background: linear-gradient(
    180deg,
    rgba(10, 14, 26, 0.95) 0%,
    rgba(15, 28, 50, 0.98) 100%
  );
  padding: ${({theme:e})=>e.spacing.xl};
  display: flex;
  align-items: flex-start;
  justify-content: center;
  max-width: 900px;
  width: 100%;
`,ds=a.div`
  max-width: 900px;
  width: 100%;
`,xs=a.h1`
  font-family: ${({theme:e})=>e.fonts.display};
  font-size: ${({theme:e})=>e.fontSizes["3xl"]};
  color: ${({theme:e})=>e.colors.primary.gold};
  text-shadow: ${({theme:e})=>e.shadows.glow.gold};
  text-align: center;
  margin-bottom: ${({theme:e})=>e.spacing.xl};
`,J=a.div`
  margin-bottom: ${({theme:e})=>e.spacing.md};
`,K=a.label`
  display: block;
  color: ${({theme:e})=>e.colors.winter.iceBlue};
  font-weight: ${({theme:e})=>e.fontWeights.medium};
  margin-bottom: ${({theme:e})=>e.spacing.sm};
  font-size: ${({theme:e})=>e.fontSizes.base};
`,hs=a.input`
  width: 100%;
  padding: ${({theme:e})=>e.spacing.md};
  background: rgba(0, 0, 0, 0.4);
  border: ${({theme:e})=>e.borders.medium} solid ${({theme:e})=>e.colors.winter.darkIce};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  color: ${({theme:e})=>e.colors.neutral.white};
  font-size: ${({theme:e})=>e.fontSizes.base};
  font-family: ${({theme:e})=>e.fonts.body};
  
  &:focus {
    outline: none;
    border-color: ${({theme:e})=>e.colors.primary.gold};
    box-shadow: 0 0 12px ${({theme:e})=>e.colors.primary.gold}40;
  }
`,ps=a.div`
  background: rgba(0, 0, 0, 0.5);
  border: ${({theme:e})=>e.borders.medium} solid ${({theme:e})=>e.colors.winter.darkIce};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  padding: ${({theme:e})=>e.spacing.lg};
  margin-top: ${({theme:e})=>e.spacing.lg};
`,us=a.h3`
  color: ${({theme:e})=>e.colors.primary.gold};
  font-family: ${({theme:e})=>e.fonts.display};
  margin-bottom: ${({theme:e})=>e.spacing.md};
  text-align: center;
`,ms=a.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${({theme:e})=>e.spacing.md};
`,N=a.div`
  display: flex;
  justify-content: space-between;
  padding: ${({theme:e})=>e.spacing.sm};
  background: rgba(0, 0, 0, 0.3);
  border-radius: ${({theme:e})=>e.borderRadius.sm};
`,Z=a.span`
  color: ${({theme:e})=>e.colors.winter.iceBlue};
  font-weight: ${({theme:e})=>e.fontWeights.medium};
`,G=a.span`
  color: ${({theme:e})=>e.colors.primary.gold};
  font-weight: ${({theme:e})=>e.fontWeights.bold};
`,gs=a.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing.md};
  justify-content: center;
  margin-top: ${({theme:e})=>e.spacing.xl};
`;function fs({onComplete:e,onCancel:i}){const[s,r]=u.useState(""),[n,l]=u.useState(null),[o,d]=u.useState(null),[c,x]=u.useState(null),p=u.useMemo(()=>n?vi(n):[],[n]),f=u.useMemo(()=>!o||!n?[]:$i(o,n),[o,n]),m=u.useMemo(()=>!c||!o?null:vt(c,o),[c,o]),b=()=>{s&&n&&o&&c&&e({name:s,faction:n,race:o,class:c})};return t.jsx(cs,{children:t.jsxs(ds,{children:[t.jsx(xs,{children:"⚔️ Création de Personnage"}),t.jsxs(J,{children:[t.jsx(K,{children:"Nom du personnage"}),t.jsx(hs,{type:"text",value:s,onChange:g=>r(g.target.value),placeholder:"Entrez un nom (min. 3 caractères)",maxLength:12,autoFocus:!0})]}),t.jsxs(J,{children:[t.jsx(K,{children:"Faction"}),t.jsxs("div",{style:{display:"flex",gap:"1rem",justifyContent:"center"},children:[t.jsx(ne,{checked:n==="alliance",onChange:()=>{l("alliance"),d(null),x(null)},label:t.jsx("span",{children:"🛡️ Alliance"}),value:"alliance",name:"faction",borderColor:"#3b82f6",backgroundColor:"#1e293b"}),t.jsx(ne,{checked:n==="horde",onChange:()=>{l("horde"),d(null),x(null)},label:t.jsx("span",{children:"⚔️ Horde"}),value:"horde",name:"faction",borderColor:"#ef4444",backgroundColor:"#450a0a"})]})]}),n&&t.jsxs(J,{children:[t.jsx(K,{children:"Race"}),t.jsx("div",{style:{display:"flex",gap:"1rem",flexWrap:"wrap",justifyContent:"center"},children:p.map(g=>t.jsx(ne,{checked:o===g.id,onChange:()=>{d(g.id),x(null)},label:t.jsxs("span",{children:[g.icon," ",g.name]}),value:g.id,name:"race",borderColor:n==="alliance"?"#3b82f6":"#ef4444",backgroundColor:n==="alliance"?"#1e293b":"#450a0a"},g.id))})]}),o&&n&&t.jsxs(J,{children:[t.jsx(K,{children:"Classe"}),t.jsx("div",{style:{display:"flex",gap:"1rem",flexWrap:"wrap",justifyContent:"center"},children:f.map(g=>t.jsx(ne,{checked:c===g.id,onChange:()=>x(g.id),label:t.jsxs("span",{style:{color:g.color},children:[g.icon," ",g.name]}),value:g.id,name:"class",borderColor:g.color,backgroundColor:"#222",disabled:!1},g.id))})]}),c&&t.jsxs(J,{children:[t.jsx(K,{children:"Résumé de la classe"}),t.jsx("div",{style:{marginBottom:"1rem",color:f.find(g=>g.id===c)?.color,textAlign:"center"},children:f.find(g=>g.id===c)?.description}),m&&t.jsxs(ps,{children:[t.jsx(us,{children:"📊 Statistiques de départ"}),t.jsxs(ms,{children:[t.jsxs(N,{children:[t.jsx(Z,{children:"❤️ Points de vie"}),t.jsx(G,{children:m.health})]}),t.jsxs(N,{children:[t.jsx(Z,{children:m.energyName}),t.jsx(G,{children:m.energy})]}),t.jsxs(N,{children:[t.jsx(Z,{children:"💪 Force"}),t.jsx(G,{children:m.strength})]}),t.jsxs(N,{children:[t.jsx(Z,{children:"🏃 Agilité"}),t.jsx(G,{children:m.agility})]}),t.jsxs(N,{children:[t.jsx(Z,{children:"🧠 Intelligence"}),t.jsx(G,{children:m.intellect})]}),t.jsxs(N,{children:[t.jsx(Z,{children:"🛡️ Endurance"}),t.jsx(G,{children:m.stamina})]})]})]})]}),t.jsxs(gs,{children:[i&&t.jsx(F,{$variant:"secondary",onClick:i,children:"Annuler"}),t.jsx(F,{onClick:b,disabled:!(s.trim().length>=3&&n&&o&&c),children:"✓ Créer le personnage"})]})]})})}const O=[{id:"wolf",name:"Loup",type:"beast",icon:"🐺",minLevel:1,maxLevel:5,baseHealth:15,baseDamage:100,baseArmor:5,experienceReward:25,goldReward:100,abilities:[{name:"Morsure",icon:"🦷",damage:150,cooldown:2,description:"Mord férocement la cible"}]},{id:"boar",name:"Sanglier",type:"beast",icon:"🐗",minLevel:1,maxLevel:5,baseHealth:20,baseDamage:120,baseArmor:8,experienceReward:30,goldReward:120,abilities:[{name:"Charge",icon:"💨",damage:120,cooldown:3,description:"Charge brutalement"}]},{id:"fox",name:"Renard Agile",type:"beast",icon:"🦊",minLevel:1,maxLevel:5,baseHealth:12,baseDamage:80,baseArmor:4,experienceReward:20,goldReward:80,abilities:[{name:"Fuite Rapide",icon:"🏃",damage:60,cooldown:2,description:"Esquive et contre-attaque"}]},{id:"owl",name:"Hibou Sombre",type:"beast",icon:"🦉",minLevel:2,maxLevel:5,baseHealth:10,baseDamage:70,baseArmor:3,experienceReward:18,goldReward:70,abilities:[{name:"Serres Tranchantes",icon:"🪶",damage:50,cooldown:2,description:"Attaque silencieuse de nuit"}]},{id:"murloc",name:"Murloc",type:"humanoid",icon:"🐸",minLevel:5,maxLevel:10,baseHealth:30,baseDamage:600,baseArmor:10,experienceReward:200,goldReward:600,abilities:[{name:"Cri Murloc",icon:"📢",damage:780,cooldown:4,description:"MRGLGLGL!"}]},{id:"bandit",name:"Bandit de la Forêt",type:"humanoid",icon:"🗡️",minLevel:6,maxLevel:12,baseHealth:45,baseDamage:720,baseArmor:12,experienceReward:250,goldReward:720,abilities:[{name:"Coup Sournois",icon:"🔪",damage:800,cooldown:3,description:"Frappe dans le dos"}]},{id:"thief",name:"Voleur de la Forêt",type:"humanoid",icon:"🕴️",minLevel:5,maxLevel:15,baseHealth:35,baseDamage:500,baseArmor:8,experienceReward:120,goldReward:500,abilities:[{name:"Vol Rapide",icon:"🪙",damage:400,cooldown:3,description:"Dérobe et frappe rapidement"}]},{id:"giant-rat",name:"Rat Géant",type:"beast",icon:"🐀",minLevel:7,maxLevel:15,baseHealth:25,baseDamage:350,baseArmor:6,experienceReward:80,goldReward:350,abilities:[{name:"Morsure Infectée",icon:"🦠",damage:300,cooldown:4,description:"Peut empoisonner la cible"}]},{id:"skeleton",name:"Squelette résucité",type:"undead",icon:"💀",minLevel:10,maxLevel:15,baseHealth:60,baseDamage:1200,baseArmor:15,experienceReward:260,goldReward:1200,abilities:[{name:"Toucher de Givre",icon:"❄️",damage:1400,cooldown:4,description:"Toucher glacial qui ralentit"}]},{id:"ghoul",name:"Goule affamée",type:"undead",icon:"🧟",minLevel:12,maxLevel:18,baseHealth:75,baseDamage:1400,baseArmor:18,experienceReward:275,goldReward:1400,abilities:[{name:"Festin de Chair",icon:"🩸",damage:2e3,heal:20,cooldown:5,description:"Dévore et se soigne"}]},{id:"ghost",name:"Fantôme du Manoir",type:"undead",icon:"👻",minLevel:10,maxLevel:15,baseHealth:40,baseDamage:900,baseArmor:10,experienceReward:180,goldReward:900,abilities:[{name:"Hurlement Effrayant",icon:"😱",damage:800,cooldown:4,description:"Effraie et affaiblit la cible"}]},{id:"gargoyle",name:"Gargouille Animée",type:"undead",icon:"🗿",minLevel:12,maxLevel:15,baseHealth:55,baseDamage:1100,baseArmor:18,experienceReward:220,goldReward:1100,abilities:[{name:"Griffes de Pierre",icon:"🪨",damage:1e3,cooldown:3,description:"Attaque physique puissante"}]},{id:"fire-elemental",name:"Élémentaire de Feu",type:"elemental",icon:"🔥",minLevel:15,maxLevel:22,baseHealth:100,baseDamage:1800,baseArmor:18,experienceReward:300,goldReward:1800,abilities:[{name:"Boule de Feu",icon:"💥",damage:2e3,cooldown:3,description:"Lance une boule de feu"}]},{id:"ice-elemental",name:"Élémentaire de Eau",type:"elemental",icon:"❄️",minLevel:16,maxLevel:23,baseHealth:100,baseDamage:2e3,baseArmor:20,experienceReward:300,goldReward:1800,abilities:[{name:"Tempête d'Eau",icon:"🌨️",damage:2500,cooldown:3,description:"Congèle les ennemis"}]},{id:"earth-elemental",name:"Élémentaire de Terre",type:"elemental",icon:"🌱",minLevel:17,maxLevel:24,baseHealth:120,baseDamage:2100,baseArmor:25,experienceReward:320,goldReward:1900,abilities:[{name:"Secousse Sismique",icon:"🌋",damage:2700,cooldown:4,description:"Provoque une secousse qui étourdit"}]},{id:"air-elemental",name:"Élémentaire d'Air",type:"elemental",icon:"🌪️",minLevel:18,maxLevel:25,baseHealth:90,baseDamage:2200,baseArmor:15,experienceReward:330,goldReward:1950,abilities:[{name:"Rafale",icon:"💨",damage:2600,cooldown:3,description:"Attaque avec une puissante rafale de vent"}]},{id:"imp",name:"Diablotin",type:"demon",icon:"👿",minLevel:20,maxLevel:25,baseHealth:120,baseDamage:2400,baseArmor:22,experienceReward:350,goldReward:2400,abilities:[{name:"Trait de Feu",icon:"🔥",damage:3e3,cooldown:3,description:"Tire un trait de feu"}]},{id:"felguard",name:"Gangregarde",type:"demon",icon:"😈",minLevel:23,maxLevel:28,baseHealth:150,baseDamage:2600,baseArmor:28,experienceReward:370,goldReward:2600,abilities:[{name:"Coup Gangreneux",icon:"💚",damage:3200,cooldown:4,description:"Frappe corrompue"}]},{id:"minor-demon",name:"Démon Mineur",type:"demon",icon:"👹",minLevel:20,maxLevel:25,baseHealth:110,baseDamage:2200,baseArmor:20,experienceReward:320,goldReward:2200,abilities:[{name:"Griffes Ardentes",icon:"🔥",damage:2100,cooldown:3,description:"Attaque de feu rapide"}]},{id:"succubus",name:"Succube",type:"demon",icon:"👩‍🦰",minLevel:22,maxLevel:25,baseHealth:100,baseDamage:2300,baseArmor:18,experienceReward:330,goldReward:2300,abilities:[{name:"Charme Fatal",icon:"💋",damage:2e3,cooldown:4,description:"Peut charmer et affaiblir la cible"}]},{id:"giant",name:"Géant de Pierre",type:"giant",icon:"🗿",minLevel:25,maxLevel:32,baseHealth:175,baseDamage:3e3,baseArmor:30,experienceReward:550,goldReward:3e3,abilities:[{name:"Écrasement",icon:"🪨",damage:3500,cooldown:4,description:"Écrase avec une force titanesque"}]},{id:"ice-giant",name:"Géant de Glace",type:"giant",icon:"🧊",minLevel:25,maxLevel:32,baseHealth:200,baseDamage:3200,baseArmor:35,experienceReward:600,goldReward:3200,abilities:[{name:"Souffle Glacial",icon:"❄️",damage:3700,cooldown:4,description:"Rend la cible plus lente"}]},{id:"troll-brute",name:"Troll Massif",type:"giant",icon:"🧟‍♂️",minLevel:27,maxLevel:32,baseHealth:180,baseDamage:3100,baseArmor:28,experienceReward:580,goldReward:3100,abilities:[{name:"Coup de Massue",icon:"🔨",damage:3400,cooldown:3,description:"Frappe puissante avec une massue"}]},{id:"whelp",name:"Dragonnet",type:"dragon",icon:"🐉",minLevel:30,maxLevel:35,baseHealth:200,baseDamage:3500,baseArmor:40,experienceReward:650,goldReward:3500,abilities:[{name:"Souffle de Flammes",icon:"🔥",damage:4e3,cooldown:4,description:"Souffle enflammé dévastateur"}]},{id:"dragon",name:"Dragon",type:"dragon",icon:"🐲",minLevel:35,maxLevel:45,baseHealth:300,baseDamage:4200,baseArmor:50,experienceReward:800,goldReward:4200,abilities:[{name:"Souffle de Dragon",icon:"💨",damage:5e3,cooldown:3,description:"Souffle destructeur"},{name:"Rugissement",icon:"😤",damage:4500,cooldown:5,description:"Rugissement terrifiant"}]},{id:"ancient-dragon",name:"Dragon Ancien",type:"dragon",icon:"🐲",minLevel:45,maxLevel:60,baseHealth:400,baseDamage:5500,baseArmor:60,experienceReward:1200,goldReward:5500,abilities:[{name:"Cataclysme",icon:"💥",damage:6e3,cooldown:5,description:"Déchaîne un cataclysme"},{name:"Souffle Ancestral",icon:"🌪️",damage:7e3,cooldown:4,description:"Souffle millénaire"}]},{id:"wyvern",name:"Wyvern Sauvage",type:"dragon",icon:"🦅",minLevel:30,maxLevel:40,baseHealth:220,baseDamage:3700,baseArmor:38,experienceReward:700,goldReward:3700,abilities:[{name:"Piqûre Venimeuse",icon:"🦟",damage:3900,cooldown:4,description:"Peut empoisonner la cible"}]},{id:"drake",name:"Drake des Cimes",type:"dragon",icon:"🦎",minLevel:35,maxLevel:50,baseHealth:280,baseDamage:4100,baseArmor:45,experienceReward:900,goldReward:4100,abilities:[{name:"Souffle Acide",icon:"🧪",damage:4800,cooldown:3,description:"Souffle corrosif"}]},{id:"guardian-dragon",name:"Dragon Gardien",type:"dragon",icon:"🛡️",minLevel:50,maxLevel:60,baseHealth:500,baseDamage:6e3,baseArmor:70,experienceReward:1500,goldReward:6e3,abilities:[{name:"Barrière Draconique",icon:"🛡️",damage:0,cooldown:5,description:"Réduit fortement les dégâts subis"},{name:"Souffle de Givre",icon:"❄️",damage:7500,cooldown:4,description:"Souffle glacé paralysant"}]}],ys=e=>{const i=O.filter(l=>l.minLevel<=e&&l.maxLevel>=e);if(i.length===0){const l=O.reduce((o,d)=>d.maxLevel<e&&d.maxLevel>o.maxLevel?d:o,O[0]);return He(l,e)}const s=Math.floor(Math.random()*i.length),n=i[s];return He(n,e)},He=(e,i)=>{console.log("Creating monster:",e,"for level",i);const s=2;return{id:`${e.id}-${Date.now()}`,name:`${e.name} (Niv. ${i})`,type:e.type,icon:e.icon,level:i,health:Math.floor(e.baseHealth*s*i),maxHealth:Math.floor(e.baseHealth*s*i),damage:Math.floor(e.baseDamage+(i-e.minLevel)*s),armor:Math.floor(e.baseArmor+(i-e.minLevel)*s*.5),experienceReward:Math.floor(ue(i)/(4+i/10)),goldReward:Math.floor(e.goldReward+(i-e.minLevel)*1),abilities:e.abilities||[]}},bs={"heroic-strike":"ability_rogue_ambush","mortal-strike":"ability_warrior_savageblow",whirlwind:"ability_whirlwind",recklessness:"ability_criticalstrike",execute:"inv_sword_48","crusader-strike":"spell_holy_crusaderstrike","holy-light":"spell_holy_holybolt","divine-storm":"ability_paladin_divinestorm","hammer-of-wrath":"ability_thunderbolt","divine-shield":"spell_holy_divineintervention","arcane-shot":"ability_impalingbolt","multi-shot":"ability_upgrademoonglaive","aimed-shot":"inv_spear_07","explosive-shot":"ability_hunter_explosiveshot","kill-shot":"ability_hunter_assassinate2",backstab:"ability_backstab","sinister-strike":"spell_shadow_ritualofsacrifice",eviscerate:"ability_rogue_eviscerate","kidney-shot":"ability_rogue_kidneyshot","shadow-dance":"ability_rogue_shadowdance",smite:"spell_holy_holysmite",heal:"spell_holy_heal","shadow-word-pain":"spell_shadow_shadowwordpain","mind-blast":"spell_shadow_unholyfrenzy","divine-hymn":"spell_holy_divinehymn","lightning-bolt":"spell_nature_lightning","earth-shock":"spell_nature_earthshock","lava-burst":"spell_shaman_lavaburst","chain-lightning":"spell_nature_chainlightning","elemental-mastery":"spell_nature_wispheal",fireball:"spell_fire_flamebolt",frostbolt:"spell_frost_frostbolt02","arcane-missiles":"spell_nature_starfall",pyroblast:"spell_fire_fireball02","arcane-power":"spell_nature_lightning","shadow-bolt":"spell_shadow_shadowbolt",immolate:"spell_fire_immolation","chaos-bolt":"ability_warlock_chaosbolt",soulfire:"spell_fire_fireball02","dark-soul":"spell_shadow_shadetruesight",wrath:"spell_nature_abolishmagic",moonfire:"spell_nature_starfall",starfire:"spell_arcane_starfire",starfall:"ability_druid_starfall",incarnation:"spell_druid_incarnation","death-strike":"spell_deathknight_butcher2",obliterate:"spell_deathknight_classicon","frost-strike":"spell_deathknight_empowerruneblade2","soul-reaper":"ability_deathknight_soulreaper",apocalypse:"artifactability_unholydeathknight_deathsembrace",attack:"inv_sword_04",defend:"ability_defend",flee:"ability_rogue_sprint","health-potion":"inv_potion_54","mana-potion":"inv_potion_76"};function he(e){const i=bs[e];return i?`https://wow.zamimg.com/images/wow/icons/large/${i}.jpg`:(console.warn(`Icon not found for key: ${e}`),"")}const je={attack:he("attack"),defend:he("defend"),flee:he("flee")},js={warrior:[{id:"heroic-strike",name:"Frappe héroïque",icon:"⚔️",description:"Une attaque puissante qui inflige 20% des dégâts.",baseDamage:.2,baseManaCost:10,manaCostPerLevel:2,unlockLevel:1},{id:"mortal-strike",name:"Frappe mortelle",icon:"💥",description:"Frappe dévastatrice infligeant 50% des dégâts.",baseDamage:.5,baseManaCost:20,manaCostPerLevel:3,unlockLevel:5},{id:"whirlwind",name:"Tourbillon",icon:"🌪️",description:"Attaque tournoyante massive (80% dégâts).",baseDamage:.8,baseManaCost:30,manaCostPerLevel:4,unlockLevel:10},{id:"recklessness",name:"Témérité",icon:"💢",description:"Frappe avec témérité (100% dégâts).",baseDamage:1,baseManaCost:40,manaCostPerLevel:5,unlockLevel:20},{id:"execute",name:"Exécution",icon:"☠️",description:"Coup final dévastateur (100% dégâts).",baseDamage:1,baseManaCost:50,manaCostPerLevel:6,unlockLevel:30}],paladin:[{id:"crusader-strike",name:"Frappe du croisé",icon:"⚡",description:"Frappe sacrée (20% dégâts).",baseDamage:.2,baseManaCost:15,manaCostPerLevel:2,unlockLevel:1},{id:"holy-light",name:"Lumière sacrée",icon:"✨",description:"Soigne pour 100% du spellPower.",baseHeal:1,baseManaCost:20,manaCostPerLevel:3,unlockLevel:3},{id:"divine-storm",name:"Tempête divine",icon:"🌟",description:"Tempête sacrée (80% dégâts).",baseDamage:.8,baseManaCost:30,manaCostPerLevel:4,unlockLevel:10},{id:"hammer-of-wrath",name:"Marteau de courroux",icon:"🔨",description:"Marteau divin (100% dégâts).",baseDamage:1,baseManaCost:40,manaCostPerLevel:5,unlockLevel:20},{id:"divine-shield",name:"Bouclier divin",icon:"🛡️",description:"Frappe protectrice (100% dégâts + soin 50%).",baseDamage:1,baseHeal:.5,baseManaCost:50,manaCostPerLevel:6,unlockLevel:30}],hunter:[{id:"arcane-shot",name:"Tir des arcanes",icon:"🏹",description:"Tir magique (20% dégâts).",baseDamage:.2,baseManaCost:15,manaCostPerLevel:2,unlockLevel:1},{id:"multi-shot",name:"Tir multiple",icon:"🎯",description:"Salve de flèches (50% dégâts).",baseDamage:.5,baseManaCost:25,manaCostPerLevel:3,unlockLevel:5},{id:"aimed-shot",name:"Tir visé",icon:"🎪",description:"Tir précis et puissant (80% dégâts).",baseDamage:.8,baseManaCost:35,manaCostPerLevel:4,unlockLevel:15},{id:"explosive-shot",name:"Tir explosif",icon:"💣",description:"Flèche explosive (100% dégâts).",baseDamage:1,baseManaCost:45,manaCostPerLevel:5,unlockLevel:25},{id:"kill-shot",name:"Tir mortel",icon:"💀",description:"Tir fatal (100% dégâts).",baseDamage:1,baseManaCost:60,manaCostPerLevel:7,unlockLevel:35}],rogue:[{id:"sinister-strike",name:"Frappe pernicieuse",icon:"🗡️",description:"Attaque sournoise (20% dégâts).",baseDamage:.2,baseManaCost:10,manaCostPerLevel:2,unlockLevel:1},{id:"eviscerate",name:"Éventration",icon:"🔪",description:"Attaque tranchante (50% dégâts).",baseDamage:.5,baseManaCost:20,manaCostPerLevel:3,unlockLevel:5},{id:"fan-of-knives",name:"Salve de couteaux",icon:"🗡️",description:"Attaque de zone (80% dégâts).",baseDamage:.8,baseManaCost:30,manaCostPerLevel:4,unlockLevel:10},{id:"shadowstep",name:"Pas de l’ombre",icon:"🌑",description:"Attaque furtive (100% dégâts).",baseDamage:1,baseManaCost:40,manaCostPerLevel:5,unlockLevel:20},{id:"vendetta",name:"Vendetta",icon:"🔥",description:"Attaque vengeresse (100% dégâts).",baseDamage:1,baseManaCost:50,manaCostPerLevel:6,unlockLevel:30}],priest:[{id:"smite",name:"Châtiment",icon:"✨",description:"Frappe sacrée (20% dégâts magiques).",baseDamage:.2,baseManaCost:15,manaCostPerLevel:2,unlockLevel:1},{id:"heal",name:"Soins",icon:"💚",description:"Soigne pour 50% du spellPower.",baseHeal:.5,baseManaCost:20,manaCostPerLevel:3,unlockLevel:1},{id:"shadow-word-pain",name:"Mot de l’ombre : Douleur",icon:"🌑",description:"Douleur de l’ombre (50% dégâts).",baseDamage:.5,baseManaCost:30,manaCostPerLevel:4,unlockLevel:10},{id:"mind-blast",name:"Explosion mentale",icon:"🧠",description:"Attaque mentale (80% dégâts).",baseDamage:.8,baseManaCost:40,manaCostPerLevel:5,unlockLevel:20},{id:"divine-hymn",name:"Hymne divin",icon:"🎵",description:"Hymne sacré (100% dégâts + soin 100%).",baseDamage:1,baseHeal:1,baseManaCost:50,manaCostPerLevel:6,unlockLevel:30}],shaman:[{id:"lightning-bolt",name:"Éclair",icon:"⚡",description:"Éclair foudroyant (20% dégâts).",baseDamage:.2,baseManaCost:15,manaCostPerLevel:2,unlockLevel:1},{id:"earth-shock",name:"Horion de terre",icon:"🌍",description:"Choc élémentaire (50% dégâts).",baseDamage:.5,baseManaCost:25,manaCostPerLevel:3,unlockLevel:5},{id:"lava-burst",name:"Explosion de lave",icon:"🌋",description:"Lave brûlante (80% dégâts).",baseDamage:.8,baseManaCost:35,manaCostPerLevel:4,unlockLevel:15},{id:"chain-lightning",name:"Chaîne d’éclairs",icon:"⛈️",description:"Éclairs enchaînés (100% dégâts).",baseDamage:1,baseManaCost:45,manaCostPerLevel:5,unlockLevel:25},{id:"elemental-mastery",name:"Maîtrise élémentaire",icon:"🔥",description:"Puissance des éléments (100% dégâts).",baseDamage:1,baseManaCost:60,manaCostPerLevel:7,unlockLevel:35}],mage:[{id:"fireball",name:"Boule de feu",icon:"🔥",description:"Boule de feu ardente (20% dégâts).",baseDamage:.2,baseManaCost:15,manaCostPerLevel:2,unlockLevel:1},{id:"frostbolt",name:"Éclair de givre",icon:"❄️",description:"Givre glacial (50% dégâts).",baseDamage:.5,baseManaCost:20,manaCostPerLevel:3,unlockLevel:3},{id:"arcane-missiles",name:"Projectiles des arcanes",icon:"🔮",description:"Salve arcanique (80% dégâts).",baseDamage:.8,baseManaCost:35,manaCostPerLevel:4,unlockLevel:15},{id:"pyroblast",name:"Explosion pyrotechnique",icon:"💥",description:"Explosion de feu (100% dégâts).",baseDamage:1,baseManaCost:50,manaCostPerLevel:6,unlockLevel:25},{id:"arcane-power",name:"Puissance des arcanes",icon:"✨",description:"Puissance arcanique ultime (100% dégâts).",baseDamage:1,baseManaCost:70,manaCostPerLevel:8,unlockLevel:35}],warlock:[{id:"shadow-bolt",name:"Trait de l’ombre",icon:"🌑",description:"Projectile d’ombre (20% dégâts).",baseDamage:.2,baseManaCost:15,manaCostPerLevel:2,unlockLevel:1},{id:"immolate",name:"Immolation",icon:"🔥",description:"Flammes démoniaques (50% dégâts).",baseDamage:.5,baseManaCost:25,manaCostPerLevel:3,unlockLevel:5},{id:"chaos-bolt",name:"Trait du chaos",icon:"💀",description:"Chaos destructeur (80% dégâts).",baseDamage:.8,baseManaCost:40,manaCostPerLevel:5,unlockLevel:15},{id:"soul-fire",name:"Feu de l’âme",icon:"👻",description:"Flammes spirituelles (100% dégâts).",baseDamage:1,baseManaCost:50,manaCostPerLevel:6,unlockLevel:25},{id:"dark-soul",name:"Âme noire",icon:"😈",description:"Puissance démoniaque (100% dégâts).",baseDamage:1,baseManaCost:65,manaCostPerLevel:8,unlockLevel:35}],druid:[{id:"wrath",name:"Colère",icon:"🌿",description:"Colère de la nature (20% dégâts).",baseDamage:.2,baseManaCost:15,manaCostPerLevel:2,unlockLevel:1},{id:"moonfire",name:"Eclat lunaire",icon:"🌙",description:"Lumière lunaire (50% dégâts).",baseDamage:.5,baseManaCost:25,manaCostPerLevel:3,unlockLevel:5},{id:"starfire",name:"Feu stellaire",icon:"⭐",description:"Feu des étoiles (80% dégâts).",baseDamage:.8,baseManaCost:35,manaCostPerLevel:4,unlockLevel:15},{id:"starsurge",name:"Déferlante stellaire",icon:"💫",description:"Déferlante cosmique (100% dégâts).",baseDamage:1,baseManaCost:45,manaCostPerLevel:5,unlockLevel:25},{id:"incarnation",name:"Incarnation",icon:"🦁",description:"Puissance animale (100% dégâts).",baseDamage:1,baseManaCost:60,manaCostPerLevel:7,unlockLevel:35}],"death-knight":[{id:"death-strike",name:"Frappe de la mort",icon:"💀",description:"Frappe mortelle (20% dégâts).",baseDamage:.2,baseManaCost:15,manaCostPerLevel:2,unlockLevel:1},{id:"obliterate",name:"Oblitération",icon:"⚔️",description:"Coup destructeur (50% dégâts).",baseDamage:.5,baseManaCost:25,manaCostPerLevel:3,unlockLevel:5},{id:"frost-strike",name:"Frappe de givre",icon:"❄️",description:"Frappe glaciale (80% dégâts).",baseDamage:.8,baseManaCost:35,manaCostPerLevel:4,unlockLevel:15},{id:"soul-reaper",name:"Faucheuse d’âme",icon:"👻",description:"Récolte d’âmes (100% dégâts).",baseDamage:1,baseManaCost:45,manaCostPerLevel:5,unlockLevel:25},{id:"apocalypse",name:"Apocalypse",icon:"☠️",description:"Fin des temps (100% dégâts).",baseDamage:1,baseManaCost:60,manaCostPerLevel:7,unlockLevel:35}]},ks=(e,i)=>(js[e]||[]).filter(r=>r.unlockLevel<=i),Wt=(e,i)=>e.baseManaCost+(e.manaCostPerLevel||0)*(i-1),ws=(e,i,s,r)=>e.baseDamage?Math.floor((r==="intellect"?s:i)*(1+e.baseDamage)):0,vs=(e,i)=>e.baseHeal?Math.floor(i*e.baseHeal):0,$s=e=>he(e.id),ae=e=>({minor:"poor",lesser:"common",normal:"common",greater:"uncommon",superior:"rare",ultimate:"epic"})[e],ie=[{id:"health-minor",name:"Potion de soins mineure",description:"Restaure 600 points de vie",type:"health",quality:"minor",icon:"🧪",restoreAmount:600,price:10,requiredLevel:1},{id:"health-lesser",name:"Potion de soins inférieure",description:"Restaure 6000 points de vie",type:"health",quality:"lesser",icon:"🧪",restoreAmount:6e3,price:25,requiredLevel:5},{id:"health-normal",name:"Potion de soins",description:"Restaure 200 points de vie",type:"health",quality:"normal",icon:"🧪",restoreAmount:200,price:50,requiredLevel:10},{id:"health-greater",name:"Potion de soins supérieure",description:"Restaure 400 points de vie",type:"health",quality:"greater",icon:"🧪",restoreAmount:400,price:100,requiredLevel:20},{id:"health-superior",name:"Potion de soins majeure",description:"Restaure 800 points de vie",type:"health",quality:"superior",icon:"🧪",restoreAmount:800,price:200,requiredLevel:30},{id:"health-ultimate",name:"Élixir de vie ultime",description:"Restaure 50% de la vie maximale",type:"health",quality:"ultimate",icon:"⚗️",restoreAmount:0,restorePercent:50,price:500,requiredLevel:40},{id:"mana-minor",name:"Potion de mana mineure",description:"Restaure 30 points de mana",type:"mana",quality:"minor",icon:"💙",restoreAmount:30,price:10,requiredLevel:1},{id:"mana-lesser",name:"Potion de mana inférieure",description:"Restaure 60 points de mana",type:"mana",quality:"lesser",icon:"💙",restoreAmount:60,price:25,requiredLevel:5},{id:"mana-normal",name:"Potion de mana",description:"Restaure 120 points de mana",type:"mana",quality:"normal",icon:"💙",restoreAmount:120,price:50,requiredLevel:10},{id:"mana-greater",name:"Potion de mana supérieure",description:"Restaure 250 points de mana",type:"mana",quality:"greater",icon:"💙",restoreAmount:250,price:100,requiredLevel:20},{id:"mana-superior",name:"Potion de mana majeure",description:"Restaure 500 points de mana",type:"mana",quality:"superior",icon:"💙",restoreAmount:500,price:200,requiredLevel:30},{id:"mana-ultimate",name:"Élixir de mana ultime",description:"Restaure 50% du mana maximum",type:"mana",quality:"ultimate",icon:"💎",restoreAmount:0,restorePercent:50,price:500,requiredLevel:40},{id:"health-dev",name:"Élixir de vie du Dev",description:"Restaure 100% de la vie maximale",type:"health",quality:"ultimate",icon:"💎",restoreAmount:0,restorePercent:100,price:0,requiredLevel:0},{id:"mana-dev",name:"Élixir de mana du Dev",description:"Restaure 100% du mana maximum",type:"mana",quality:"ultimate",icon:"💎",restoreAmount:0,restorePercent:100,price:0,requiredLevel:0},{id:"elixir-of-strength",name:"Élixir de force",description:"Augmente temporairement la force de 20% pendant 30 minutes",type:"effect",quality:"superior",icon:"🧪"+Fe.strength.emoji,restoreAmount:0,restorePercent:20,price:10,requiredLevel:1},{id:"elixir-of-luck",name:"Élixir de chance",description:"Augmente temporairement la chance de 20% pendant 30 minutes",type:"effect",quality:"superior",icon:"🧪"+Fe.luck.emoji,restoreAmount:0,restorePercent:20,price:10,requiredLevel:1}],Ls=(e,i)=>{let s=ie.filter(r=>r.requiredLevel<=e);return i&&(s=s.filter(r=>r.type===i)),s.sort((r,n)=>r.price-n.price)},Ne=(e,i,s)=>{let r=e.restoreAmount;return e.restorePercent&&(r=Math.floor(s*e.restorePercent/100)),Math.min(s,i+r)-i},Ms=(e,i,s=1)=>e.potions.find(n=>n.potionId===i)?{...e,potions:e.potions.map(n=>n.potionId===i?{...n,quantity:n.quantity+s}:n)}:{...e,potions:[...e.potions,{potionId:i,quantity:s}]},Bt=(e,i)=>{const s=e.potions.find(n=>n.potionId===i);return!s||s.quantity<=0?{inventory:e,success:!1}:{inventory:{potions:e.potions.map(n=>n.potionId===i?{...n,quantity:n.quantity-1}:n).filter(n=>n.quantity>0)},success:!0}},Fs=({primaryColor:e="#C0C0C0",secondaryColor:i="#8B4513",accentColor:s="#FFD700",size:r=24})=>t.jsxs("svg",{width:r,height:r,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("path",{d:"M19 3L5 17L7 19L21 5L19 3Z",fill:e,stroke:s,strokeWidth:"0.5"}),t.jsx("rect",{x:"4",y:"16",width:"6",height:"1.5",fill:s,transform:"rotate(45 4 16)"}),t.jsx("path",{d:"M3 19L5 17L4 18L3 19Z",fill:i,stroke:s,strokeWidth:"0.3"}),t.jsx("circle",{cx:"2.5",cy:"19.5",r:"1.2",fill:s})]}),Ws=({primaryColor:e="#8B4513",secondaryColor:i="#4B0082",accentColor:s="#9370DB",size:r=24})=>t.jsxs("svg",{width:r,height:r,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("line",{x1:"6",y1:"20",x2:"18",y2:"4",stroke:e,strokeWidth:"1.5",strokeLinecap:"round"}),t.jsx("path",{d:"M18 4L19.5 2.5L18 1L16.5 2.5L18 4Z",fill:s,stroke:i,strokeWidth:"0.5"}),t.jsx("circle",{cx:"18",cy:"3",r:"2.5",fill:s,opacity:"0.3"}),t.jsx("circle",{cx:"18",cy:"3",r:"1.5",fill:s,opacity:"0.5"})]}),Bs=({primaryColor:e="#696969",secondaryColor:i="#2F4F4F",accentColor:s="#A9A9A9",size:r=24})=>t.jsxs("svg",{width:r,height:r,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("path",{d:"M15 3L7 11L9 13L17 5L15 3Z",fill:e,stroke:s,strokeWidth:"0.5"}),t.jsx("rect",{x:"6",y:"11",width:"4",height:"1",fill:s,transform:"rotate(45 6 11)"}),t.jsx("line",{x1:"5.5",y1:"13.5",x2:"4",y2:"15",stroke:i,strokeWidth:"1.5",strokeLinecap:"round"})]}),As=({primaryColor:e="#8B4513",secondaryColor:i="#A9A9A9",accentColor:s="#FFD700",size:r=24})=>t.jsxs("svg",{width:r,height:r,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("line",{x1:"6",y1:"20",x2:"15",y2:"8",stroke:e,strokeWidth:"1.8",strokeLinecap:"round"}),t.jsx("path",{d:"M14 8L18 5L20 8L17 11L14 8Z",fill:i,stroke:s,strokeWidth:"0.5"}),t.jsx("path",{d:"M15 8L19 10L18 12L14 10L15 8Z",fill:i,stroke:s,strokeWidth:"0.5"})]}),Ds=({primaryColor:e="#8B4513",secondaryColor:i="#F5DEB3",accentColor:s="#D2691E",size:r=24})=>t.jsxs("svg",{width:r,height:r,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("path",{d:"M18 4Q20 12 18 20",stroke:e,strokeWidth:"1.5",fill:"none",strokeLinecap:"round"}),t.jsx("path",{d:"M18 4L16 12L18 20",stroke:i,strokeWidth:"0.5",fill:"none"}),t.jsx("line",{x1:"4",y1:"12",x2:"16",y2:"12",stroke:s,strokeWidth:"1"}),t.jsx("path",{d:"M4 12L6 11L6 13L4 12Z",fill:s})]}),Es=({primaryColor:e="#C0C0C0",secondaryColor:i="#A9A9A9",accentColor:s="#FFD700",size:r=24})=>t.jsxs("svg",{width:r,height:r,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("path",{d:"M8 12Q8 6 12 6Q16 6 16 12L16 16L8 16L8 12Z",fill:e,stroke:s,strokeWidth:"0.5"}),t.jsx("path",{d:"M9 14L15 14",stroke:i,strokeWidth:"1"}),t.jsx("circle",{cx:"12",cy:"9",r:"1",fill:s}),t.jsx("path",{d:"M8 16L8 18L16 18L16 16",fill:i,stroke:s,strokeWidth:"0.3"})]}),Ps=({primaryColor:e="#C0C0C0",secondaryColor:i="#A9A9A9",accentColor:s="#FFD700",size:r=24})=>t.jsxs("svg",{width:r,height:r,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("path",{d:"M9 6L9 18L15 18L15 6L12 4L9 6Z",fill:e,stroke:s,strokeWidth:"0.5"}),t.jsx("ellipse",{cx:"8",cy:"7",rx:"2",ry:"1.5",fill:i,stroke:s,strokeWidth:"0.3"}),t.jsx("ellipse",{cx:"16",cy:"7",rx:"2",ry:"1.5",fill:i,stroke:s,strokeWidth:"0.3"}),t.jsx("line",{x1:"12",y1:"8",x2:"12",y2:"16",stroke:s,strokeWidth:"0.5"}),t.jsx("circle",{cx:"12",cy:"10",r:"0.8",fill:s})]}),Ss=({primaryColor:e="#8B7355",secondaryColor:i="#654321",accentColor:s="#D4AF37",size:r=24})=>t.jsxs("svg",{width:r,height:r,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("rect",{x:"8",y:"6",width:"8",height:"1.5",fill:s}),t.jsx("path",{d:"M8 7.5L9 18L11 18L10 7.5L8 7.5Z",fill:e,stroke:i,strokeWidth:"0.3"}),t.jsx("path",{d:"M14 7.5L13 18L15 18L16 7.5L14 7.5Z",fill:e,stroke:i,strokeWidth:"0.3"}),t.jsx("ellipse",{cx:"9.5",cy:"13",rx:"1",ry:"1.5",fill:i}),t.jsx("ellipse",{cx:"14.5",cy:"13",rx:"1",ry:"1.5",fill:i})]}),qs=({primaryColor:e="#8B4513",secondaryColor:i="#654321",accentColor:s="#D2691E",size:r=24})=>t.jsxs("svg",{width:r,height:r,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("path",{d:"M8 10L8 16L7 18L10 18L10 16L9 10L8 10Z",fill:e,stroke:i,strokeWidth:"0.5"}),t.jsx("path",{d:"M14 10L14 16L13 18L16 18L16 16L15 10L14 10Z",fill:e,stroke:i,strokeWidth:"0.5"}),t.jsx("line",{x1:"8.5",y1:"12",x2:"9.5",y2:"12",stroke:s,strokeWidth:"0.3"}),t.jsx("line",{x1:"8.5",y1:"14",x2:"9.5",y2:"14",stroke:s,strokeWidth:"0.3"}),t.jsx("line",{x1:"14.5",y1:"12",x2:"15.5",y2:"12",stroke:s,strokeWidth:"0.3"}),t.jsx("line",{x1:"14.5",y1:"14",x2:"15.5",y2:"14",stroke:s,strokeWidth:"0.3"})]}),ke=({primaryColor:e="#FFD700",secondaryColor:i="#DAA520",gemColor:s="#4169E1",size:r=24})=>t.jsxs("svg",{width:r,height:r,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("circle",{cx:"12",cy:"13",r:"5",fill:"none",stroke:e,strokeWidth:"1.5"}),t.jsx("circle",{cx:"12",cy:"13",r:"3.5",fill:"none",stroke:i,strokeWidth:"0.5"}),t.jsx("path",{d:"M12 6L14 9L12 11L10 9L12 6Z",fill:s,stroke:e,strokeWidth:"0.5"}),t.jsx("path",{d:"M11.5 7L12 8L11.5 8.5",stroke:"white",strokeWidth:"0.5",opacity:"0.6"})]}),zs=({primaryColor:e="#FFD700",secondaryColor:i="#DAA520",gemColor:s="#8B008B",size:r=24})=>t.jsxs("svg",{width:r,height:r,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("path",{d:"M8 4Q12 6 16 4",stroke:e,strokeWidth:"1",fill:"none"}),t.jsx("line",{x1:"8",y1:"4",x2:"10",y2:"10",stroke:e,strokeWidth:"0.8"}),t.jsx("line",{x1:"16",y1:"4",x2:"14",y2:"10",stroke:e,strokeWidth:"0.8"}),t.jsx("path",{d:"M10 10L12 16L14 10L10 10Z",fill:i,stroke:e,strokeWidth:"0.5"}),t.jsx("ellipse",{cx:"12",cy:"12",rx:"1.5",ry:"2",fill:s}),t.jsx("ellipse",{cx:"11.5",cy:"11.5",rx:"0.5",ry:"0.7",fill:"white",opacity:"0.6"})]}),Is=({primaryColor:e="#C0C0C0",secondaryColor:i="#A9A9A9",gemColor:s="#FF1493",size:r=24})=>t.jsxs("svg",{width:r,height:r,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("path",{d:"M6 8Q12 12 18 8",stroke:e,strokeWidth:"1.2",fill:"none"}),t.jsx("circle",{cx:"6",cy:"8",r:"1",fill:i}),t.jsx("circle",{cx:"12",cy:"11",r:"1",fill:i}),t.jsx("circle",{cx:"18",cy:"8",r:"1",fill:i}),t.jsx("circle",{cx:"12",cy:"14",r:"2.5",fill:s,stroke:e,strokeWidth:"0.5"}),t.jsx("circle",{cx:"11.5",cy:"13.5",r:"0.8",fill:"white",opacity:"0.5"})]}),Rs=({primaryColor:e="#FFD700",secondaryColor:i="#DAA520",gemColor:s="#00CED1",size:r=24})=>t.jsxs("svg",{width:r,height:r,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("ellipse",{cx:"12",cy:"12",rx:"6",ry:"4",fill:"none",stroke:e,strokeWidth:"1.5"}),t.jsx("ellipse",{cx:"12",cy:"12",rx:"5",ry:"3",fill:"none",stroke:i,strokeWidth:"0.5"}),t.jsx("circle",{cx:"12",cy:"8",r:"1",fill:s}),t.jsx("circle",{cx:"8",cy:"11",r:"0.8",fill:s}),t.jsx("circle",{cx:"16",cy:"11",r:"0.8",fill:s}),t.jsx("circle",{cx:"12",cy:"16",r:"1",fill:s})]}),Ts=({primaryColor:e="#FFD700",secondaryColor:i="#DAA520",gemColor:s="#FF0000",size:r=24})=>t.jsxs("svg",{width:r,height:r,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("path",{d:"M6 14L6 16L18 16L18 14L16 10L14 12L12 8L10 12L8 10L6 14Z",fill:e,stroke:i,strokeWidth:"0.5"}),t.jsx("circle",{cx:"8",cy:"10",r:"0.8",fill:i}),t.jsx("circle",{cx:"12",cy:"8",r:"0.8",fill:i}),t.jsx("circle",{cx:"16",cy:"10",r:"0.8",fill:i}),t.jsx("circle",{cx:"9",cy:"14",r:"1",fill:s}),t.jsx("circle",{cx:"12",cy:"13",r:"1.2",fill:s}),t.jsx("circle",{cx:"15",cy:"14",r:"1",fill:s})]}),z=e=>{switch(e){case"poor":return{primary:"#9D9D9D",secondary:"#7A7A7A",accent:"#6B6B6B",gem:"#808080"};case"common":return{primary:"#FFFFFF",secondary:"#D4D4D4",accent:"#B8B8B8",gem:"#E0E0E0"};case"uncommon":return{primary:"#1EFF00",secondary:"#00D000",accent:"#00A000",gem:"#00FF7F"};case"rare":return{primary:"#0070DD",secondary:"#0052AA",accent:"#003D88",gem:"#4169E1"};case"epic":return{primary:"#A335EE",secondary:"#8020CC",accent:"#6010AA",gem:"#9370DB"};case"legendary":return{primary:"#FF8000",secondary:"#DD6600",accent:"#BB4400",gem:"#FFD700"};default:return{primary:"#FFFFFF",secondary:"#D4D4D4",accent:"#B8B8B8",gem:"#E0E0E0"}}},Qs=({itemType:e,itemName:i="",size:s=24})=>{const r=i.toLowerCase(),n={primary:"#C0C0C0",secondary:"#A9A9A9",accent:"#E8E8E8"},l={primary:"#FFD700",secondary:"#DAA520"},o={primary:"#8B4513",secondary:"#654321",accent:"#D2691E"};switch(e){case"weapon":return r.includes("bâton")||r.includes("staff")||r.includes("sceptre")?t.jsx(Ws,{primaryColor:o.primary,secondaryColor:"#9370DB",accentColor:"#BA55D3",size:s}):r.includes("dague")||r.includes("dagger")||r.includes("poignard")?t.jsx(Bs,{primaryColor:n.primary,secondaryColor:n.secondary,accentColor:n.accent,size:s}):r.includes("hache")||r.includes("axe")?t.jsx(As,{primaryColor:o.primary,secondaryColor:n.primary,accentColor:n.accent,size:s}):r.includes("arc")||r.includes("bow")||r.includes("arbalète")?t.jsx(Ds,{primaryColor:o.primary,secondaryColor:"#DEB887",accentColor:o.accent,size:s}):t.jsx(Fs,{primaryColor:n.primary,secondaryColor:o.secondary,accentColor:n.accent,size:s});case"head":return t.jsx(Es,{primaryColor:n.primary,secondaryColor:n.secondary,accentColor:l.primary,size:s});case"chest":return t.jsx(Ps,{primaryColor:n.primary,secondaryColor:n.secondary,accentColor:l.primary,size:s});case"legs":return t.jsx(Ss,{primaryColor:"#6B5D4F",secondaryColor:"#4A3F35",accentColor:l.secondary,size:s});case"boots":return t.jsx(qs,{primaryColor:o.primary,secondaryColor:o.secondary,accentColor:o.accent,size:s});case"jewelry":return r.includes("anneau")||r.includes("ring")||r.includes("bague")?t.jsx(ke,{primaryColor:l.primary,secondaryColor:l.secondary,gemColor:"#4169E1",size:s}):r.includes("amulette")||r.includes("amulet")||r.includes("médaillon")?t.jsx(zs,{primaryColor:l.primary,secondaryColor:l.secondary,gemColor:"#9370DB",size:s}):r.includes("collier")||r.includes("necklace")?t.jsx(Is,{primaryColor:"#C0C0C0",secondaryColor:"#A9A9A9",gemColor:"#DC143C",size:s}):r.includes("bracelet")?t.jsx(Rs,{primaryColor:l.primary,secondaryColor:l.secondary,gemColor:"#00CED1",size:s}):r.includes("couronne")||r.includes("crown")||r.includes("diadème")?t.jsx(Ts,{primaryColor:l.primary,secondaryColor:l.secondary,gemColor:"#FF0000",size:s}):t.jsx(ke,{primaryColor:l.primary,secondaryColor:l.secondary,gemColor:"#4169E1",size:s});default:return t.jsx(ke,{primaryColor:l.primary,secondaryColor:l.secondary,gemColor:"#4169E1",size:s})}},Cs=a.div`
  width: ${e=>e.$size}px;
  height: ${e=>e.$size}px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background: ${e=>{const i=z(e.$quality);return`linear-gradient(135deg, ${i.primary}22 0%, ${i.secondary}33 100%)`}};
  border: 2px solid ${e=>z(e.$quality).primary};
  box-shadow: 0 2px 8px ${e=>z(e.$quality).primary}44;
  
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 3px;
    background: radial-gradient(
      circle at 30% 30%,
      ${e=>z(e.$quality).primary}11 0%,
      transparent 70%
    );
  }
`,qe=({itemType:e,itemName:i="",quality:s="common",size:r=48})=>{const n=Math.floor(r*.65);return t.jsx(Cs,{$quality:s,$size:r,children:t.jsx(Qs,{itemType:e,itemName:i,quality:"common",size:n})})},_s=({liquidColor:e="#DC143C",glassColor:i="#87CEEB",size:s=24})=>t.jsxs("svg",{width:s,height:s,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("path",{d:"M10 3L10 6L8 8L8 18C8 19 9 20 10 20L14 20C15 20 16 19 16 18L16 8L14 6L14 3L10 3Z",fill:i,fillOpacity:"0.3",stroke:i,strokeWidth:"0.8"}),t.jsx("path",{d:"M8.5 12L8.5 18C8.5 18.5 9 19 10 19L14 19C15 19 15.5 18.5 15.5 18L15.5 12L8.5 12Z",fill:e,opacity:"0.8"}),t.jsx("ellipse",{cx:"12",cy:"13",rx:"2",ry:"1",fill:e,opacity:"0.4"}),t.jsx("rect",{x:"10",y:"2",width:"4",height:"1.5",fill:"#8B4513",rx:"0.5"}),t.jsx("rect",{x:"10.5",y:"3",width:"3",height:"0.5",fill:"#654321"}),t.jsx("path",{d:"M9 8L9 16",stroke:"white",strokeWidth:"0.5",opacity:"0.5"})]}),Hs=({liquidColor:e="#4169E1",glassColor:i="#87CEEB",size:s=24})=>t.jsxs("svg",{width:s,height:s,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("path",{d:"M10 3L10 6L8 8L8 18C8 19 9 20 10 20L14 20C15 20 16 19 16 18L16 8L14 6L14 3L10 3Z",fill:i,fillOpacity:"0.3",stroke:i,strokeWidth:"0.8"}),t.jsx("path",{d:"M8.5 12L8.5 18C8.5 18.5 9 19 10 19L14 19C15 19 15.5 18.5 15.5 18L15.5 12L8.5 12Z",fill:e,opacity:"0.8"}),t.jsx("circle",{cx:"10",cy:"14",r:"0.5",fill:"#E0FFFF",opacity:"0.8"}),t.jsx("circle",{cx:"13",cy:"15",r:"0.4",fill:"#E0FFFF",opacity:"0.8"}),t.jsx("circle",{cx:"11.5",cy:"16.5",r:"0.3",fill:"#E0FFFF",opacity:"0.8"}),t.jsx("rect",{x:"10",y:"2",width:"4",height:"1.5",fill:"#8B4513",rx:"0.5"}),t.jsx("rect",{x:"10.5",y:"3",width:"3",height:"0.5",fill:"#654321"}),t.jsx("path",{d:"M9 8L9 16",stroke:"white",strokeWidth:"0.5",opacity:"0.5"})]}),Ns=({liquidColor:e="#9370DB",glassColor:i="#87CEEB",size:s=24})=>t.jsxs("svg",{width:s,height:s,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("ellipse",{cx:"12",cy:"13",rx:"5",ry:"6",fill:i,fillOpacity:"0.3",stroke:i,strokeWidth:"0.8"}),t.jsx("ellipse",{cx:"12",cy:"14.5",rx:"4.5",ry:"4.5",fill:e,opacity:"0.8"}),t.jsx("rect",{x:"11",y:"6",width:"2",height:"2",fill:i,fillOpacity:"0.3",stroke:i,strokeWidth:"0.6"}),t.jsx("rect",{x:"10.5",y:"4.5",width:"3",height:"1.8",fill:"#8B4513",rx:"0.5"}),t.jsx("ellipse",{cx:"10",cy:"12",rx:"1.5",ry:"2",fill:"white",opacity:"0.4"})]}),Zs=a.div`
  width: ${e=>e.$size}px;
  height: ${e=>e.$size}px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background: ${e=>{const i=z(ae(e.$quality));return`linear-gradient(135deg, ${i.primary}22 0%, ${i.secondary}33 100%)`}};
  border: 2px solid ${e=>z(ae(e.$quality)).primary};
  box-shadow: 0 2px 8px ${e=>z(ae(e.$quality)).primary}44;
  
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 3px;
    background: radial-gradient(
      circle at 30% 30%,
      ${e=>z(ae(e.$quality)).primary}11 0%,
      transparent 70%
    );
  }
`,At=({potion:e,size:i=48})=>{const s=Math.floor(i*.65),r=o=>{switch(o.id.split("-").pop()){case"strength":switch(o.quality){case"minor":return"#CD5C5C";case"lesser":return"#DC143C";case"normal":return"#FF0000";case"greater":return"#FF4500";case"superior":return"#FF6347";case"ultimate":return"#FF7F50";default:return"#DC143C"}case"agility":switch(o.quality){case"minor":return"#4682B4";case"lesser":return"#4169E1";case"normal":return"#0000FF";case"greater":return"#1E90FF";case"superior":return"#00BFFF";case"ultimate":return"#00FFFF";default:return"#4169E1"}case"intellect":switch(o.quality){case"minor":return"#6A5ACD";case"lesser":return"#7B68EE";case"normal":return"#8A2BE2";case"greater":return"#9370DB";case"superior":return"#BA55D3";case"ultimate":return"#DA70D6";default:return"#7B68EE"}case"stamina":switch(o.quality){case"minor":return"#2E8B57";case"lesser":return"#3CB371";case"normal":return"#32CD32";case"greater":return"#00FF7F";case"superior":return"#7CFC00";case"ultimate":return"#ADFF2F";default:return"#3CB371"}case"attackPower":switch(o.quality){case"minor":return"#B8860B";case"lesser":return"#DAA520";case"normal":return"#FFD700";case"greater":return"#FFA500";case"superior":return"#FF8C00";case"ultimate":return"#FF7F50";default:return"#DAA520"}case"spellPower":switch(o.quality){case"minor":return"#4B0082";case"lesser":return"#6A5ACD";case"normal":return"#8A2BE2";case"greater":return"#9400D3";case"superior":return"#9932CC";case"ultimate":return"#BA55D3";default:return"#6A5ACD"}case"critChance":switch(o.quality){case"minor":return"#708090";case"lesser":return"#778899";case"normal":return"#A9A9A9";case"greater":return"#C0C0C0";case"superior":return"#D3D3D3";case"ultimate":return"#DCDCDC";default:return"#778899"}case"luck":switch(o.quality){case"minor":return"#8B4513";case"lesser":return"#A0522D";case"normal":return"#D2691E";case"greater":return"#FF8C00";case"superior":return"#FFA500";case"ultimate":return"#FFD700";default:return"#A0522D"}default:return"#ffffffff00"}},l=(o=>{switch(o.type){case"health":switch(o.quality){case"minor":return"#CD5C5C";case"lesser":return"#DC143C";case"normal":return"#FF0000";case"greater":return"#FF1493";case"superior":return"#FF69B4";case"ultimate":return"#FFD700";default:return"#DC143C"}case"mana":switch(o.quality){case"minor":return"#4682B4";case"lesser":return"#4169E1";case"normal":return"#0000FF";case"greater":return"#1E90FF";case"superior":return"#00BFFF";case"ultimate":return"#00FFFF";default:return"#4169E1"}case"effect":return r(o);default:return"#ffffffff00"}})(e);return t.jsx(Zs,{$quality:e.quality,$size:i,children:e.type==="health"?t.jsx(_s,{liquidColor:l,size:s}):e.type==="mana"?t.jsx(Hs,{liquidColor:l,size:s}):t.jsx(Ns,{liquidColor:l,size:s})})},Gs=({primaryColor:e="#A3A3A3",secondaryColor:i="#6B7280",accentColor:s="#FBBF24",size:r=48})=>t.jsxs("svg",{width:r,height:r,viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("ellipse",{cx:"24",cy:"30",rx:"10",ry:"12",fill:e,stroke:i,strokeWidth:"2"}),t.jsx("ellipse",{cx:"24",cy:"16",rx:"8",ry:"7",fill:e,stroke:i,strokeWidth:"2"}),t.jsx("ellipse",{cx:"20",cy:"16",rx:"2.5",ry:"2.5",fill:s,stroke:i,strokeWidth:"1"}),t.jsx("ellipse",{cx:"28",cy:"16",rx:"2.5",ry:"2.5",fill:s,stroke:i,strokeWidth:"1"}),t.jsx("circle",{cx:"20",cy:"16",r:"1",fill:"black"}),t.jsx("circle",{cx:"28",cy:"16",r:"1",fill:"black"}),t.jsx("polygon",{points:"24,19 22,22 26,22",fill:"#FBBF24",stroke:i,strokeWidth:"0.5"}),t.jsx("ellipse",{cx:"14",cy:"30",rx:"3",ry:"7",fill:i,opacity:"0.7"}),t.jsx("ellipse",{cx:"34",cy:"30",rx:"3",ry:"7",fill:i,opacity:"0.7"}),t.jsx("rect",{x:"21",y:"40",width:"2",height:"4",rx:"0.5",fill:s}),t.jsx("rect",{x:"25",y:"40",width:"2",height:"4",rx:"0.5",fill:s})]}),Os=({primaryColor:e="#F59E42",secondaryColor:i="#A16207",size:s=48})=>t.jsxs("svg",{width:s,height:s,viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("ellipse",{cx:"24",cy:"32",rx:"8",ry:"10",fill:e,stroke:i,strokeWidth:"2"}),t.jsx("ellipse",{cx:"24",cy:"18",rx:"7",ry:"7",fill:e,stroke:i,strokeWidth:"2"}),t.jsx("polygon",{points:"18,10 15,4 22,10",fill:e,stroke:i,strokeWidth:"1.5"}),t.jsx("polygon",{points:"30,10 33,4 26,10",fill:e,stroke:i,strokeWidth:"1.5"}),t.jsx("ellipse",{cx:"24",cy:"20",rx:"3.2",ry:"2.7",fill:"#fff"}),t.jsx("ellipse",{cx:"22",cy:"18",rx:"0.7",ry:"1",fill:"#222"}),t.jsx("ellipse",{cx:"26",cy:"18",rx:"0.7",ry:"1",fill:"#222"}),t.jsx("ellipse",{cx:"24",cy:"21.5",rx:"0.5",ry:"0.4",fill:"#222"}),t.jsx("ellipse",{cx:"36",cy:"40",rx:"3.5",ry:"7",fill:e,stroke:i,strokeWidth:"2"}),t.jsx("ellipse",{cx:"36",cy:"46",rx:"2.2",ry:"2.2",fill:"#fff",stroke:i,strokeWidth:"1"})]}),Us=({primaryColor:e="#6B7280",secondaryColor:i="#4B5563",accentColor:s="#F59E0B",size:r=48})=>t.jsxs("svg",{width:r,height:r,viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("path",{d:"M16 12L14 8L18 10Z",fill:e,stroke:i,strokeWidth:"1"}),t.jsx("path",{d:"M32 12L34 8L30 10Z",fill:e,stroke:i,strokeWidth:"1"}),t.jsx("ellipse",{cx:"24",cy:"18",rx:"9",ry:"8",fill:e,stroke:i,strokeWidth:"1"}),t.jsx("ellipse",{cx:"24",cy:"22",rx:"6",ry:"4",fill:i}),t.jsx("ellipse",{cx:"24",cy:"23",rx:"3",ry:"2",fill:"#1F2937"}),t.jsx("ellipse",{cx:"24",cy:"23",rx:"1.5",ry:"1",fill:"black"}),t.jsx("ellipse",{cx:"20",cy:"16",rx:"1.5",ry:"2",fill:s}),t.jsx("ellipse",{cx:"28",cy:"16",rx:"1.5",ry:"2",fill:s}),t.jsx("circle",{cx:"20",cy:"16",r:"0.8",fill:"black"}),t.jsx("circle",{cx:"28",cy:"16",r:"0.8",fill:"black"}),t.jsx("circle",{cx:"20.5",cy:"15.5",r:"0.4",fill:"white",opacity:"0.8"}),t.jsx("circle",{cx:"28.5",cy:"15.5",r:"0.4",fill:"white",opacity:"0.8"}),t.jsx("path",{d:"M22 24L21.5 26",stroke:"white",strokeWidth:"1",strokeLinecap:"round"}),t.jsx("path",{d:"M26 24L26.5 26",stroke:"white",strokeWidth:"1",strokeLinecap:"round"}),t.jsx("ellipse",{cx:"24",cy:"32",rx:"8",ry:"7",fill:e,stroke:i,strokeWidth:"1"}),t.jsx("ellipse",{cx:"24",cy:"33",rx:"5",ry:"4",fill:"#9CA3AF",opacity:"0.5"}),t.jsx("rect",{x:"18",y:"36",width:"2.5",height:"8",rx:"1",fill:i}),t.jsx("rect",{x:"27.5",y:"36",width:"2.5",height:"8",rx:"1",fill:i}),t.jsx("ellipse",{cx:"19.25",cy:"43",rx:"1.5",ry:"1",fill:"#1F2937"}),t.jsx("ellipse",{cx:"28.75",cy:"43",rx:"1.5",ry:"1",fill:"#1F2937"}),t.jsx("line",{x1:"18",y1:"43.5",x2:"17.5",y2:"44.5",stroke:i,strokeWidth:"0.5"}),t.jsx("line",{x1:"19.25",y1:"43.5",x2:"19.25",y2:"44.5",stroke:i,strokeWidth:"0.5"}),t.jsx("line",{x1:"20.5",y1:"43.5",x2:"21",y2:"44.5",stroke:i,strokeWidth:"0.5"}),t.jsx("path",{d:"M32 32Q36 30 38 26",stroke:e,strokeWidth:"2.5",strokeLinecap:"round"})]}),Vs=({primaryColor:e="#8B4513",secondaryColor:i="#5D2E0F",accentColor:s="#D2691E",size:r=48})=>t.jsxs("svg",{width:r,height:r,viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("ellipse",{cx:"24",cy:"20",rx:"10",ry:"9",fill:e,stroke:i,strokeWidth:"1.5"}),t.jsx("ellipse",{cx:"17",cy:"14",rx:"2",ry:"3",fill:e,stroke:i,strokeWidth:"1"}),t.jsx("ellipse",{cx:"31",cy:"14",rx:"2",ry:"3",fill:e,stroke:i,strokeWidth:"1"}),t.jsx("ellipse",{cx:"24",cy:"24",rx:"7",ry:"5",fill:s,stroke:i,strokeWidth:"1"}),t.jsx("ellipse",{cx:"24",cy:"25",rx:"4",ry:"3",fill:i}),t.jsx("ellipse",{cx:"22",cy:"25",rx:"1",ry:"1.5",fill:"black"}),t.jsx("ellipse",{cx:"26",cy:"25",rx:"1",ry:"1.5",fill:"black"}),t.jsx("circle",{cx:"19",cy:"18",r:"1.5",fill:"black"}),t.jsx("circle",{cx:"29",cy:"18",r:"1.5",fill:"black"}),t.jsx("circle",{cx:"19.5",cy:"17.5",r:"0.5",fill:"#DC2626",opacity:"0.8"}),t.jsx("circle",{cx:"29.5",cy:"17.5",r:"0.5",fill:"#DC2626",opacity:"0.8"}),t.jsx("path",{d:"M20 26Q18 28 17 30",stroke:"white",strokeWidth:"2",strokeLinecap:"round"}),t.jsx("path",{d:"M28 26Q30 28 31 30",stroke:"white",strokeWidth:"2",strokeLinecap:"round"}),t.jsx("line",{x1:"20",y1:"13",x2:"19",y2:"10",stroke:i,strokeWidth:"1"}),t.jsx("line",{x1:"23",y1:"12",x2:"23",y2:"9",stroke:i,strokeWidth:"1"}),t.jsx("line",{x1:"26",y1:"12",x2:"26",y2:"9",stroke:i,strokeWidth:"1"}),t.jsx("line",{x1:"29",y1:"13",x2:"30",y2:"10",stroke:i,strokeWidth:"1"}),t.jsx("ellipse",{cx:"24",cy:"34",rx:"11",ry:"8",fill:e,stroke:i,strokeWidth:"1.5"}),t.jsx("rect",{x:"16",y:"38",width:"3",height:"7",rx:"1.5",fill:i}),t.jsx("rect",{x:"29",y:"38",width:"3",height:"7",rx:"1.5",fill:i}),t.jsx("rect",{x:"16",y:"43",width:"3",height:"2",fill:"#1F2937"}),t.jsx("rect",{x:"29",y:"43",width:"3",height:"2",fill:"#1F2937"}),t.jsx("path",{d:"M34 32Q36 31 37 30Q38 29 37 28",stroke:i,strokeWidth:"1.5",strokeLinecap:"round",fill:"none"})]}),Xs=({primaryColor:e="#A8A29E",secondaryColor:i="#57534E",accentColor:s="#F59E0B",size:r=48})=>t.jsxs("svg",{width:r,height:r,viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("ellipse",{cx:"24",cy:"33",rx:"11",ry:"8",fill:e,stroke:i,strokeWidth:"2.2"}),t.jsx("line",{x1:"18",y1:"27",x2:"16",y2:"24",stroke:i,strokeWidth:"1.2"}),t.jsx("line",{x1:"22",y1:"26",x2:"21",y2:"22",stroke:i,strokeWidth:"1.2"}),t.jsx("line",{x1:"26",y1:"27",x2:"28",y2:"24",stroke:i,strokeWidth:"1.2"}),t.jsx("line",{x1:"30",y1:"28",x2:"32",y2:"25",stroke:i,strokeWidth:"1.2"}),t.jsx("ellipse",{cx:"24",cy:"16",rx:"8",ry:"6",fill:e,stroke:i,strokeWidth:"2"}),t.jsx("ellipse",{cx:"24",cy:"20",rx:"5",ry:"2.5",fill:"#B6A28B",stroke:i,strokeWidth:"1"}),t.jsx("ellipse",{cx:"22.5",cy:"20.5",rx:"0.5",ry:"0.8",fill:"black"}),t.jsx("ellipse",{cx:"25.5",cy:"20.5",rx:"0.5",ry:"0.8",fill:"black"}),t.jsx("ellipse",{cx:"20",cy:"15",rx:"1.2",ry:"2",fill:"#DC2626"}),t.jsx("ellipse",{cx:"28",cy:"15",rx:"1.2",ry:"2",fill:"#DC2626"}),t.jsx("ellipse",{cx:"20",cy:"15",rx:"0.7",ry:"1.2",fill:"black"}),t.jsx("ellipse",{cx:"28",cy:"15",rx:"0.7",ry:"1.2",fill:"black"}),t.jsx("line",{x1:"22",y1:"13",x2:"24",y2:"15",stroke:"#B91C1C",strokeWidth:"0.7"}),t.jsx("line",{x1:"26",y1:"14",x2:"28",y2:"16",stroke:"#B91C1C",strokeWidth:"0.7"}),t.jsx("ellipse",{cx:"16",cy:"12",rx:"2.2",ry:"3",fill:s,stroke:i,strokeWidth:"1"}),t.jsx("path",{d:"M15 10Q14 8 16 9Q17 10 16 12",stroke:i,strokeWidth:"0.8"}),t.jsx("ellipse",{cx:"32",cy:"12",rx:"2.2",ry:"3",fill:s,stroke:i,strokeWidth:"1"}),t.jsx("path",{d:"M33 10Q34 8 32 9Q31 10 32 12",stroke:i,strokeWidth:"0.8"}),t.jsx("rect",{x:"22",y:"21.5",width:"1.2",height:"2.5",rx:"0.2",fill:"white",stroke:i,strokeWidth:"0.3"}),t.jsx("rect",{x:"24.8",y:"21.5",width:"1.2",height:"2.5",rx:"0.2",fill:"white",stroke:i,strokeWidth:"0.3"}),t.jsx("rect",{x:"23.2",y:"24",width:"1",height:"1.5",rx:"0.2",fill:"#B6A28B",stroke:i,strokeWidth:"0.2"}),t.jsx("path",{d:"M34 33Q39 37 41 44Q39 45 37 43Q36 41 38 40",stroke:s,strokeWidth:"2.2"}),t.jsx("ellipse",{cx:"41",cy:"44",rx:"1.2",ry:"0.7",fill:"#F59E0B",opacity:"0.7"}),t.jsx("rect",{x:"18",y:"38",width:"2.2",height:"6",rx:"0.7",fill:i}),t.jsx("rect",{x:"27.8",y:"38",width:"2.2",height:"6",rx:"0.7",fill:i}),t.jsx("ellipse",{cx:"19",cy:"44",rx:"1",ry:"0.6",fill:"#B6A28B"}),t.jsx("ellipse",{cx:"29",cy:"44",rx:"1",ry:"0.6",fill:"#B6A28B"}),t.jsx("line",{x1:"18.5",y1:"44.5",x2:"18",y2:"45.5",stroke:i,strokeWidth:"0.5"}),t.jsx("line",{x1:"19",y1:"44.5",x2:"19",y2:"45.5",stroke:i,strokeWidth:"0.5"}),t.jsx("line",{x1:"19.5",y1:"44.5",x2:"20",y2:"45.5",stroke:i,strokeWidth:"0.5"}),t.jsx("line",{x1:"28.5",y1:"44.5",x2:"28",y2:"45.5",stroke:i,strokeWidth:"0.5"}),t.jsx("line",{x1:"29",y1:"44.5",x2:"29",y2:"45.5",stroke:i,strokeWidth:"0.5"}),t.jsx("line",{x1:"29.5",y1:"44.5",x2:"30",y2:"45.5",stroke:i,strokeWidth:"0.5"}),t.jsx("ellipse",{cx:"24",cy:"33",rx:"13",ry:"10",fill:i,opacity:"0.08"})]}),Ys=({primaryColor:e="#4B5563",secondaryColor:i="#1F2937",accentColor:s="#FBBF24",size:r=48})=>t.jsxs("svg",{width:r,height:r,viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("path",{d:"M24 8Q16 14 14 22L34 22Q32 14 24 8Z",fill:e,stroke:i,strokeWidth:"1.2"}),t.jsx("ellipse",{cx:"24",cy:"24",rx:"7",ry:"5.5",fill:e,stroke:i,strokeWidth:"0.7"}),t.jsx("rect",{x:"17",y:"20",width:"14",height:"5",rx:"1",fill:i,opacity:"0.7"}),t.jsx("ellipse",{cx:"21",cy:"23",rx:"1.2",ry:"1",fill:s,opacity:"0.7"}),t.jsx("ellipse",{cx:"27",cy:"23",rx:"1.2",ry:"1",fill:s,opacity:"0.7"}),t.jsx("path",{d:"M26 25L28 27",stroke:s,strokeWidth:"0.7",strokeLinecap:"round"}),t.jsx("path",{d:"M18 29Q15 33 16 38L32 38Q33 33 30 29Z",fill:e,stroke:i,strokeWidth:"0.7"}),t.jsx("rect",{x:"17",y:"37",width:"14",height:"2",fill:i,opacity:"0.5"}),t.jsx("path",{d:"M19 29L29 38",stroke:i,strokeWidth:"0.7"}),t.jsx("path",{d:"M16 33Q13 36 13 41",stroke:i,strokeWidth:"1",strokeLinecap:"round"}),t.jsx("path",{d:"M32 33Q35 36 35 41",stroke:i,strokeWidth:"1",strokeLinecap:"round"}),t.jsx("path",{d:"M35 41Q39 39 36 36Q33 33 35 41Z",fill:i,stroke:e,strokeWidth:"0.7"}),t.jsx("ellipse",{cx:"21",cy:"39",rx:"1",ry:"0.7",fill:i,opacity:"0.7"}),t.jsx("rect",{x:"19",y:"39",width:"3",height:"7",fill:e,stroke:i,strokeWidth:"0.3"}),t.jsx("rect",{x:"26",y:"39",width:"3",height:"7",fill:e,stroke:i,strokeWidth:"0.3"}),t.jsx("rect",{x:"18.5",y:"45",width:"3.5",height:"2.5",rx:"0.5",fill:i,opacity:"0.7"}),t.jsx("rect",{x:"26.5",y:"45",width:"3.5",height:"2.5",rx:"0.5",fill:i,opacity:"0.7"})]}),Js=({primaryColor:e="#4B5563",secondaryColor:i="#1F2937",accentColor:s="#DC2626",size:r=48})=>t.jsxs("svg",{width:r,height:r,viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("path",{d:"M24 10Q16 12 14 18L34 18Q32 12 24 10Z",fill:i,stroke:"black",strokeWidth:"1"}),t.jsx("path",{d:"M14 18L12 22L24 24L36 22L34 18Z",fill:i,stroke:"black",strokeWidth:"1"}),t.jsx("ellipse",{cx:"24",cy:"20",rx:"7",ry:"5",fill:"black",opacity:"0.4"}),t.jsx("rect",{x:"16",y:"18",width:"16",height:"5",rx:"1",fill:i,stroke:"black",strokeWidth:"0.8"}),t.jsx("ellipse",{cx:"20",cy:"20",rx:"2",ry:"1.5",fill:s,opacity:"0.8"}),t.jsx("ellipse",{cx:"28",cy:"20",rx:"2",ry:"1.5",fill:s,opacity:"0.8"}),t.jsx("circle",{cx:"20",cy:"20",r:"0.8",fill:"black"}),t.jsx("circle",{cx:"28",cy:"20",r:"0.8",fill:"black"}),t.jsx("ellipse",{cx:"24",cy:"24",rx:"6",ry:"5",fill:"#D1A684",stroke:"black",strokeWidth:"0.5"}),t.jsx("path",{d:"M26 22L28 25",stroke:s,strokeWidth:"0.8",strokeLinecap:"round"}),t.jsx("path",{d:"M18 28Q16 30 16 35L32 35Q32 30 30 28Z",fill:i,stroke:"black",strokeWidth:"1"}),t.jsx("rect",{x:"16",y:"34",width:"16",height:"2",fill:"#8B4513",stroke:"black",strokeWidth:"0.5"}),t.jsx("rect",{x:"23",y:"33.5",width:"2",height:"3",fill:s,stroke:"black",strokeWidth:"0.3"}),t.jsx("path",{d:"M18 28L28 35",stroke:"#6B4423",strokeWidth:"2"}),t.jsx("path",{d:"M18 28L28 35",stroke:"#8B6F47",strokeWidth:"1.2"}),t.jsx("path",{d:"M16 30Q12 32 10 36",stroke:e,strokeWidth:"2.5",strokeLinecap:"round"}),t.jsx("path",{d:"M32 30Q36 32 38 36",stroke:e,strokeWidth:"2.5",strokeLinecap:"round"}),t.jsx("line",{x1:"38",y1:"36",x2:"42",y2:"38",stroke:"#9CA3AF",strokeWidth:"1.5",strokeLinecap:"round"}),t.jsx("path",{d:"M42 38L44 40",stroke:"#6B4423",strokeWidth:"1.2",strokeLinecap:"round"}),t.jsx("circle",{cx:"42",cy:"38",r:"0.8",fill:s}),t.jsx("circle",{cx:"20",cy:"36",r:"1.5",fill:"#FBBF24",stroke:"#F59E0B",strokeWidth:"0.5"}),t.jsx("path",{d:"M20 34.5L20 35.5",stroke:"#F59E0B",strokeWidth:"0.5"}),t.jsx("rect",{x:"18",y:"36",width:"3",height:"8",fill:i,stroke:"black",strokeWidth:"0.8"}),t.jsx("rect",{x:"27",y:"36",width:"3",height:"8",fill:i,stroke:"black",strokeWidth:"0.8"}),t.jsx("rect",{x:"17.5",y:"42",width:"4",height:"3",rx:"0.5",fill:"#4B5563",stroke:"black",strokeWidth:"0.5"}),t.jsx("rect",{x:"26.5",y:"42",width:"4",height:"3",rx:"0.5",fill:"#4B5563",stroke:"black",strokeWidth:"0.5"})]}),Ks=({primaryColor:e="#4ADE80",secondaryColor:i="#22C55E",accentColor:s="#FDE047",size:r=48})=>t.jsxs("svg",{width:r,height:r,viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("ellipse",{cx:"24",cy:"20",rx:"9",ry:"10",fill:e,stroke:i,strokeWidth:"1.5"}),t.jsx("path",{d:"M24 10L22 13L24 12L26 13Z",fill:"#EF4444",stroke:"#DC2626",strokeWidth:"0.5"}),t.jsx("path",{d:"M24 12L22.5 15L24 14L25.5 15Z",fill:"#F97316",stroke:"#EA580C",strokeWidth:"0.5"}),t.jsx("path",{d:"M24 14L23 17L24 16L25 17Z",fill:"#FBBF24",stroke:"#F59E0B",strokeWidth:"0.5"}),t.jsx("circle",{cx:"20",cy:"18",r:"3.5",fill:s,stroke:i,strokeWidth:"1"}),t.jsx("circle",{cx:"28",cy:"18",r:"3.5",fill:s,stroke:i,strokeWidth:"1"}),t.jsx("circle",{cx:"20",cy:"18",r:"2",fill:"black"}),t.jsx("circle",{cx:"28",cy:"18",r:"2",fill:"black"}),t.jsx("circle",{cx:"20.8",cy:"17.2",r:"0.8",fill:"white"}),t.jsx("circle",{cx:"28.8",cy:"17.2",r:"0.8",fill:"white"}),t.jsx("path",{d:"M24 24Q20 26 18 25Q20 27 24 27Q28 27 30 25Q28 26 24 24Z",fill:i,stroke:i,strokeWidth:"1"}),t.jsx("path",{d:"M20 25L19.5 26.5L20 26Z",fill:"white"}),t.jsx("path",{d:"M22 25L21.5 27L22 26Z",fill:"white"}),t.jsx("path",{d:"M26 25L26.5 27L26 26Z",fill:"white"}),t.jsx("path",{d:"M28 25L28.5 26.5L28 26Z",fill:"white"}),t.jsx("ellipse",{cx:"14",cy:"20",rx:"3",ry:"4",fill:e,stroke:i,strokeWidth:"1",transform:"rotate(-20 14 20)"}),t.jsx("ellipse",{cx:"34",cy:"20",rx:"3",ry:"4",fill:e,stroke:i,strokeWidth:"1",transform:"rotate(20 34 20)"}),t.jsx("path",{d:"M14 18Q12 20 14 22",stroke:i,strokeWidth:"0.5",fill:"none",opacity:"0.5"}),t.jsx("path",{d:"M34 18Q36 20 34 22",stroke:i,strokeWidth:"0.5",fill:"none",opacity:"0.5"}),t.jsx("ellipse",{cx:"24",cy:"34",rx:"7",ry:"8",fill:e,stroke:i,strokeWidth:"1.5"}),t.jsx("ellipse",{cx:"24",cy:"35",rx:"4.5",ry:"5",fill:s,opacity:"0.3"}),t.jsx("path",{d:"M17 30Q14 32 13 36",stroke:e,strokeWidth:"2.5",strokeLinecap:"round"}),t.jsx("path",{d:"M31 30Q34 32 35 36",stroke:e,strokeWidth:"2.5",strokeLinecap:"round"}),t.jsx("circle",{cx:"13",cy:"36",r:"2",fill:e,stroke:i,strokeWidth:"0.8"}),t.jsx("circle",{cx:"35",cy:"36",r:"2",fill:e,stroke:i,strokeWidth:"0.8"}),t.jsx("path",{d:"M12 35L11 34M13 35L13 34M14 35L15 34",stroke:i,strokeWidth:"0.5"}),t.jsx("path",{d:"M36 35L37 34M35 35L35 34M34 35L33 34",stroke:i,strokeWidth:"0.5"}),t.jsx("ellipse",{cx:"20",cy:"42",rx:"2.5",ry:"1.5",fill:e,stroke:i,strokeWidth:"0.8"}),t.jsx("ellipse",{cx:"28",cy:"42",rx:"2.5",ry:"1.5",fill:e,stroke:i,strokeWidth:"0.8"})]}),er=({primaryColor:e="#E8E8E8",secondaryColor:i="#D3D3D3",accentColor:s="#A9A9A9",size:r=48})=>t.jsxs("svg",{width:r,height:r,viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("ellipse",{cx:"24",cy:"16",rx:"9",ry:"10",fill:e,stroke:s,strokeWidth:"1.5"}),t.jsx("path",{d:"M17 14Q24 13 31 14",stroke:s,strokeWidth:"0.8",opacity:"0.5"}),t.jsx("path",{d:"M16 18Q24 17 32 18",stroke:s,strokeWidth:"0.8",opacity:"0.5"}),t.jsx("ellipse",{cx:"20",cy:"15",rx:"2.5",ry:"3.5",fill:"black"}),t.jsx("ellipse",{cx:"28",cy:"15",rx:"2.5",ry:"3.5",fill:"black"}),t.jsx("circle",{cx:"20",cy:"14.5",r:"1.2",fill:"#DC2626",opacity:"0.9"}),t.jsx("circle",{cx:"28",cy:"14.5",r:"1.2",fill:"#DC2626",opacity:"0.9"}),t.jsx("circle",{cx:"20.5",cy:"14",r:"0.5",fill:"#FCA5A5",opacity:"0.8"}),t.jsx("circle",{cx:"28.5",cy:"14",r:"0.5",fill:"#FCA5A5",opacity:"0.8"}),t.jsx("line",{x1:"17",y1:"12",x2:"19",y2:"14",stroke:s,strokeWidth:"0.6",opacity:"0.6"}),t.jsx("line",{x1:"29",y1:"12",x2:"31",y2:"14",stroke:s,strokeWidth:"0.6",opacity:"0.6"}),t.jsx("path",{d:"M24 18L22 21L26 21Z",fill:"black"}),t.jsx("path",{d:"M23 21L22.5 22M25 21L25.5 22",stroke:s,strokeWidth:"0.5",opacity:"0.5"}),t.jsx("path",{d:"M18 22Q24 23 30 22",stroke:s,strokeWidth:"1",fill:"none"}),t.jsx("rect",{x:"19",y:"22",width:"1.2",height:"2.5",rx:"0.2",fill:i,stroke:s,strokeWidth:"0.3"}),t.jsx("rect",{x:"21",y:"22",width:"1.2",height:"2.5",rx:"0.2",fill:i,stroke:s,strokeWidth:"0.3"}),t.jsx("rect",{x:"23",y:"22",width:"1.2",height:"2.8",rx:"0.2",fill:e,stroke:s,strokeWidth:"0.3"}),t.jsx("rect",{x:"25",y:"22",width:"1.2",height:"2.8",rx:"0.2",fill:e,stroke:s,strokeWidth:"0.3"}),t.jsx("rect",{x:"27",y:"22",width:"1.2",height:"2.5",rx:"0.2",fill:i,stroke:s,strokeWidth:"0.3"}),t.jsx("rect",{x:"20",y:"24.5",width:"1",height:"2",rx:"0.2",fill:i,opacity:"0.7"}),t.jsx("rect",{x:"22",y:"24.5",width:"1",height:"2",rx:"0.2",fill:i,opacity:"0.7"}),t.jsx("rect",{x:"26",y:"24.5",width:"1",height:"2",rx:"0.2",fill:i,opacity:"0.7"}),t.jsx("rect",{x:"22.5",y:"26",width:"3",height:"2",rx:"0.5",fill:e,stroke:s,strokeWidth:"0.5"}),t.jsx("circle",{cx:"24",cy:"27",r:"1",fill:i}),t.jsx("rect",{x:"22.5",y:"28",width:"3",height:"2",rx:"0.5",fill:e,stroke:s,strokeWidth:"0.5"}),t.jsx("circle",{cx:"24",cy:"29",r:"1",fill:i}),t.jsx("rect",{x:"22.5",y:"30",width:"3",height:"2",rx:"0.5",fill:e,stroke:s,strokeWidth:"0.5"}),t.jsx("circle",{cx:"24",cy:"31",r:"1",fill:i}),t.jsx("ellipse",{cx:"24",cy:"35",rx:"7",ry:"6",fill:"none",stroke:e,strokeWidth:"1.8"}),t.jsx("line",{x1:"24",y1:"30",x2:"24",y2:"40",stroke:e,strokeWidth:"1.8"}),t.jsx("path",{d:"M19 32Q24 31 29 32",stroke:e,strokeWidth:"1.2",fill:"none"}),t.jsx("path",{d:"M18 34Q24 33 30 34",stroke:e,strokeWidth:"1.2",fill:"none"}),t.jsx("path",{d:"M18 36Q24 35 30 36",stroke:e,strokeWidth:"1.2",fill:"none"}),t.jsx("path",{d:"M19 38Q24 37 29 38",stroke:e,strokeWidth:"1.2",fill:"none"}),t.jsx("line",{x1:"18",y1:"27",x2:"24",y2:"26",stroke:e,strokeWidth:"1.5"}),t.jsx("line",{x1:"30",y1:"27",x2:"24",y2:"26",stroke:e,strokeWidth:"1.5"}),t.jsx("line",{x1:"18",y1:"28",x2:"14",y2:"33",stroke:e,strokeWidth:"2",strokeLinecap:"round"}),t.jsx("circle",{cx:"14",cy:"33",r:"1.2",fill:i,stroke:s,strokeWidth:"0.5"}),t.jsx("line",{x1:"14",y1:"33",x2:"11",y2:"38",stroke:e,strokeWidth:"1.8",strokeLinecap:"round"}),t.jsx("line",{x1:"30",y1:"28",x2:"34",y2:"33",stroke:e,strokeWidth:"2",strokeLinecap:"round"}),t.jsx("circle",{cx:"34",cy:"33",r:"1.2",fill:i,stroke:s,strokeWidth:"0.5"}),t.jsx("line",{x1:"34",y1:"33",x2:"37",y2:"38",stroke:e,strokeWidth:"1.8",strokeLinecap:"round"}),t.jsx("path",{d:"M10 38L9 40M11 38L11 41M12 38L13 40",stroke:e,strokeWidth:"1.2",strokeLinecap:"round"}),t.jsx("path",{d:"M36 38L35 40M37 38L37 41M38 38L39 40",stroke:e,strokeWidth:"1.2",strokeLinecap:"round"}),t.jsx("ellipse",{cx:"24",cy:"41",rx:"5",ry:"3",fill:"none",stroke:e,strokeWidth:"1.5"}),t.jsx("line",{x1:"21",y1:"42",x2:"19",y2:"46",stroke:e,strokeWidth:"1.8",strokeLinecap:"round"}),t.jsx("line",{x1:"27",y1:"42",x2:"29",y2:"46",stroke:e,strokeWidth:"1.8",strokeLinecap:"round"}),t.jsx("circle",{cx:"24",cy:"30",r:"16",fill:"#DC2626",opacity:"0.05"}),t.jsx("circle",{cx:"15",cy:"20",r:"1",fill:"#DC2626",opacity:"0.3"}),t.jsx("circle",{cx:"33",cy:"20",r:"1",fill:"#DC2626",opacity:"0.3"})]}),tr=({primaryColor:e="#F3F4F6",secondaryColor:i="#A3A3A3",accentColor:s="#DC2626",size:r=48})=>t.jsxs("svg",{width:r,height:r,viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("path",{d:"M12 24Q10 38 24 40Q38 38 36 24Q35 16 24 12Q13 16 12 24Z",fill:e,opacity:"0.85",stroke:i,strokeWidth:"1.5"}),t.jsx("ellipse",{cx:"24",cy:"18",rx:"7",ry:"6",fill:e,opacity:"0.95",stroke:i,strokeWidth:"1.2"}),t.jsx("ellipse",{cx:"21",cy:"17",rx:"1.5",ry:"2.2",fill:s,opacity:"0.85"}),t.jsx("ellipse",{cx:"27",cy:"17",rx:"1.5",ry:"2.2",fill:s,opacity:"0.85"}),t.jsx("ellipse",{cx:"21",cy:"17",rx:"0.7",ry:"1.2",fill:"white",opacity:"0.7"}),t.jsx("ellipse",{cx:"27",cy:"17",rx:"0.7",ry:"1.2",fill:"white",opacity:"0.7"}),t.jsx("path",{d:"M22 20Q24 23 26 20Q24 22 22 20Z",fill:"black",opacity:"0.5"}),t.jsx("path",{d:"M15 22Q10 28 16 34Q18 36 19 34Q17 32 15 22Z",fill:e,opacity:"0.6"}),t.jsx("path",{d:"M33 22Q38 28 32 34Q30 36 29 34Q31 32 33 22Z",fill:e,opacity:"0.6"}),t.jsx("path",{d:"M14 38Q18 44 24 41Q30 44 34 38",stroke:i,strokeWidth:"1.5"}),t.jsx("path",{d:"M18 41Q20 44 22 41",stroke:i,strokeWidth:"1",opacity:"0.7"}),t.jsx("path",{d:"M26 41Q28 44 30 41",stroke:i,strokeWidth:"1",opacity:"0.7"}),t.jsx("ellipse",{cx:"24",cy:"30",rx:"14",ry:"18",fill:s,opacity:"0.07"}),t.jsx("ellipse",{cx:"24",cy:"24",rx:"18",ry:"10",fill:e,opacity:"0.04"})]}),ir=({primaryColor:e="#A3A3A3",secondaryColor:i="#57534E",accentColor:s="#F59E0B",size:r=48})=>t.jsxs("svg",{width:r,height:r,viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("ellipse",{cx:"24",cy:"32",rx:"9",ry:"8",fill:e,stroke:i,strokeWidth:"2"}),t.jsx("ellipse",{cx:"24",cy:"18",rx:"7",ry:"6",fill:e,stroke:i,strokeWidth:"2"}),t.jsx("ellipse",{cx:"21",cy:"16",rx:"1.2",ry:"2",fill:s}),t.jsx("ellipse",{cx:"27",cy:"16",rx:"1.2",ry:"2",fill:s}),t.jsx("ellipse",{cx:"14",cy:"28",rx:"3",ry:"7",fill:i,opacity:"0.7"}),t.jsx("ellipse",{cx:"34",cy:"28",rx:"3",ry:"7",fill:i,opacity:"0.7"}),t.jsx("rect",{x:"21",y:"38",width:"2",height:"4",rx:"0.5",fill:i}),t.jsx("rect",{x:"25",y:"38",width:"2",height:"4",rx:"0.5",fill:i})]}),sr=({primaryColor:e="#6B7C59",secondaryColor:i="#4A5842",accentColor:s="#8B4513",size:r=48})=>t.jsxs("svg",{width:r,height:r,viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("ellipse",{cx:"24",cy:"34",rx:"10",ry:"11",fill:e,stroke:i,strokeWidth:"1.5",opacity:"0.95"}),t.jsx("path",{d:"M18 30L20 32",stroke:"#8B0000",strokeWidth:"1.5",opacity:"0.7"}),t.jsx("path",{d:"M28 32L30 34",stroke:"#8B0000",strokeWidth:"1.5",opacity:"0.7"}),t.jsx("ellipse",{cx:"20",cy:"32",rx:"2",ry:"3",fill:"#4A5842",opacity:"0.6"}),t.jsx("ellipse",{cx:"28",cy:"35",rx:"2.5",ry:"3",fill:"#4A5842",opacity:"0.6"}),t.jsx("path",{d:"M20 34Q24 33 28 34",stroke:"#D3D3D3",strokeWidth:"0.8",opacity:"0.4"}),t.jsx("path",{d:"M20 36Q24 35 28 36",stroke:"#D3D3D3",strokeWidth:"0.8",opacity:"0.4"}),t.jsx("ellipse",{cx:"24",cy:"16",rx:"8.5",ry:"9",fill:e,stroke:i,strokeWidth:"1.5"}),t.jsx("path",{d:"M17 14Q24 13 31 14",stroke:i,strokeWidth:"1",opacity:"0.5"}),t.jsx("ellipse",{cx:"19",cy:"12",rx:"1.5",ry:"2",fill:"#4A5842",opacity:"0.5"}),t.jsx("ellipse",{cx:"29",cy:"13",rx:"1.5",ry:"2",fill:"#4A5842",opacity:"0.5"}),t.jsx("path",{d:"M17 9L16 6",stroke:s,strokeWidth:"2",strokeLinecap:"round",opacity:"0.7"}),t.jsx("path",{d:"M20 8L19 5",stroke:s,strokeWidth:"1.8",strokeLinecap:"round",opacity:"0.6"}),t.jsx("path",{d:"M24 7L24 4",stroke:s,strokeWidth:"1.5",strokeLinecap:"round",opacity:"0.5"}),t.jsx("path",{d:"M28 8L29 5",stroke:s,strokeWidth:"1.8",strokeLinecap:"round",opacity:"0.6"}),t.jsx("path",{d:"M31 10L32 7",stroke:s,strokeWidth:"2",strokeLinecap:"round",opacity:"0.7"}),t.jsx("ellipse",{cx:"20",cy:"15",rx:"2.5",ry:"3",fill:"#F5F5DC",opacity:"0.9"}),t.jsx("ellipse",{cx:"28",cy:"15",rx:"2.5",ry:"3",fill:"#F5F5DC",opacity:"0.9"}),t.jsx("circle",{cx:"20",cy:"15.5",r:"1.5",fill:"#696969",opacity:"0.6"}),t.jsx("circle",{cx:"28",cy:"15.5",r:"1.5",fill:"#696969",opacity:"0.6"}),t.jsx("line",{x1:"18",y1:"14",x2:"17",y2:"15",stroke:"#8B0000",strokeWidth:"0.5",opacity:"0.6"}),t.jsx("line",{x1:"30",y1:"14",x2:"31",y2:"15",stroke:"#8B0000",strokeWidth:"0.5",opacity:"0.6"}),t.jsx("ellipse",{cx:"24",cy:"21",rx:"4",ry:"2.5",fill:"black",opacity:"0.7"}),t.jsx("path",{d:"M21 20Q24 22 27 20",stroke:"#4A5842",strokeWidth:"1",fill:"none"}),t.jsx("rect",{x:"21",y:"19.5",width:"1.2",height:"2",rx:"0.2",fill:"#D2B48C",opacity:"0.8"}),t.jsx("rect",{x:"23.5",y:"19.5",width:"1",height:"1.5",rx:"0.2",fill:"#D2B48C",opacity:"0.7"}),t.jsx("rect",{x:"25.5",y:"19.5",width:"1.2",height:"2",rx:"0.2",fill:"#D2B48C",opacity:"0.8"}),t.jsx("ellipse",{cx:"28",cy:"18",rx:"1.5",ry:"1",fill:"#8B0000",opacity:"0.6"}),t.jsx("path",{d:"M17 18L19 20",stroke:"#8B0000",strokeWidth:"1.2",opacity:"0.6"}),t.jsx("circle",{cx:"26",cy:"12",r:"0.8",fill:"#8B0000",opacity:"0.5"}),t.jsx("path",{d:"M24 17L23 19L25 19Z",fill:"#4A5842",opacity:"0.6"}),t.jsx("path",{d:"M15 30Q12 32 10 35",stroke:e,strokeWidth:"3",strokeLinecap:"round"}),t.jsx("path",{d:"M33 30Q36 32 38 35",stroke:e,strokeWidth:"3",strokeLinecap:"round"}),t.jsx("path",{d:"M12 33L11 34",stroke:"#4A5842",strokeWidth:"1.5",opacity:"0.5"}),t.jsx("path",{d:"M36 33L37 34",stroke:"#4A5842",strokeWidth:"1.5",opacity:"0.5"}),t.jsx("ellipse",{cx:"10",cy:"35",rx:"2",ry:"2.5",fill:e,stroke:i,strokeWidth:"1"}),t.jsx("ellipse",{cx:"38",cy:"35",rx:"2",ry:"2.5",fill:e,stroke:i,strokeWidth:"1"}),t.jsx("path",{d:"M9 36L8 38M10 36L10 39M11 36L12 38",stroke:i,strokeWidth:"1.2",strokeLinecap:"round"}),t.jsx("path",{d:"M37 36L36 38M38 36L38 39M39 36L40 38",stroke:i,strokeWidth:"1.2",strokeLinecap:"round"}),t.jsx("circle",{cx:"8",cy:"38",r:"0.4",fill:"black"}),t.jsx("circle",{cx:"10",cy:"39",r:"0.4",fill:"black"}),t.jsx("circle",{cx:"12",cy:"38",r:"0.4",fill:"black"}),t.jsx("circle",{cx:"36",cy:"38",r:"0.4",fill:"black"}),t.jsx("circle",{cx:"38",cy:"39",r:"0.4",fill:"black"}),t.jsx("circle",{cx:"40",cy:"38",r:"0.4",fill:"black"}),t.jsx("path",{d:"M18 40Q20 42 22 41",stroke:s,strokeWidth:"1.5",fill:"none",opacity:"0.6"}),t.jsx("path",{d:"M26 40Q28 42 30 41",stroke:s,strokeWidth:"1.5",fill:"none",opacity:"0.6"}),t.jsx("circle",{cx:"22",cy:"28",r:"1.2",fill:"#8B0000",opacity:"0.5"}),t.jsx("circle",{cx:"26",cy:"31",r:"1",fill:"#8B0000",opacity:"0.5"}),t.jsx("circle",{cx:"24",cy:"36",r:"0.8",fill:"#4A5842",opacity:"0.4"}),t.jsx("ellipse",{cx:"20",cy:"38",rx:"1.5",ry:"1",fill:"#4A5842",opacity:"0.3"}),t.jsx("path",{d:"M20 42Q19 44 18 46",stroke:e,strokeWidth:"2.5",strokeLinecap:"round"}),t.jsx("path",{d:"M28 42Q29 44 30 46",stroke:e,strokeWidth:"2.5",strokeLinecap:"round"}),t.jsx("circle",{cx:"14",cy:"20",r:"0.6",fill:"black",opacity:"0.4"}),t.jsx("circle",{cx:"34",cy:"22",r:"0.6",fill:"black",opacity:"0.4"}),t.jsx("circle",{cx:"18",cy:"26",r:"0.5",fill:"black",opacity:"0.4"}),t.jsx("ellipse",{cx:"24",cy:"30",rx:"14",ry:"18",fill:"#4A5842",opacity:"0.08"})]}),rr=({primaryColor:e="#A7F3D0",secondaryColor:i="#38BDF8",accentColor:s="#F0F9FF",size:r=64})=>t.jsxs("svg",{width:r,height:r,viewBox:"0 0 64 64",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("defs",{children:t.jsxs("radialGradient",{id:"windTornado",cx:"24",cy:"24",r:"20",gradientUnits:"userSpaceOnUse",children:[t.jsx("stop",{offset:"0%",stopColor:s}),t.jsx("stop",{offset:"60%",stopColor:e}),t.jsx("stop",{offset:"100%",stopColor:i})]})}),t.jsx("path",{d:"M32 60C44 52 52 44 32 38C12 44 20 52 32 60Z",fill:"url(#windTornado)",stroke:i,strokeWidth:"2.5"}),t.jsx("path",{d:"M32 60C38 54 44 48 32 44C20 48 26 54 32 60Z",fill:s,opacity:"0.3"}),t.jsx("ellipse",{cx:"20",cy:"44",rx:"7",ry:"3.5",fill:s,opacity:"0.7"}),t.jsx("ellipse",{cx:"44",cy:"44",rx:"6",ry:"3",fill:s,opacity:"0.7"}),t.jsx("ellipse",{cx:"32",cy:"28",rx:"10",ry:"4",fill:s,opacity:"0.5"}),t.jsx("ellipse",{cx:"32",cy:"52",rx:"12",ry:"3.5",fill:e,opacity:"0.2"}),t.jsx("ellipse",{cx:"32",cy:"56",rx:"21",ry:"9",fill:e,opacity:"0.08"}),t.jsx("ellipse",{cx:"28",cy:"36",rx:"2.2",ry:"3.2",fill:"#18181B"}),t.jsx("ellipse",{cx:"36",cy:"36",rx:"2.2",ry:"3.2",fill:"#18181B"}),t.jsx("circle",{cx:"28",cy:"36",r:"1.2",fill:i}),t.jsx("circle",{cx:"36",cy:"36",r:"1.2",fill:i})]}),nr=({primaryColor:e="#A3A3A3",secondaryColor:i="#78716C",accentColor:s="#D6D3D1",size:r=64})=>t.jsxs("svg",{width:r,height:r,viewBox:"0 0 64 64",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("defs",{children:t.jsxs("radialGradient",{id:"rockBody",cx:"24",cy:"28",r:"18",gradientUnits:"userSpaceOnUse",children:[t.jsx("stop",{offset:"0%",stopColor:s}),t.jsx("stop",{offset:"60%",stopColor:e}),t.jsx("stop",{offset:"100%",stopColor:i})]})}),t.jsx("ellipse",{cx:"32",cy:"44",rx:"18",ry:"12",fill:"url(#rockBody)",stroke:i,strokeWidth:"2.5"}),t.jsx("ellipse",{cx:"20",cy:"50",rx:"7",ry:"4",fill:e,opacity:"0.7"}),t.jsx("ellipse",{cx:"44",cy:"50",rx:"6",ry:"3.5",fill:e,opacity:"0.7"}),t.jsx("ellipse",{cx:"38",cy:"34",rx:"4",ry:"2.5",fill:i,opacity:"0.6"}),t.jsx("ellipse",{cx:"26",cy:"34",rx:"3.5",ry:"2",fill:i,opacity:"0.6"}),t.jsx("ellipse",{cx:"28",cy:"40",rx:"2.2",ry:"3.2",fill:"#18181B"}),t.jsx("ellipse",{cx:"36",cy:"40",rx:"2.2",ry:"3.2",fill:"#18181B"}),t.jsx("circle",{cx:"28",cy:"40",r:"1.2",fill:e}),t.jsx("circle",{cx:"36",cy:"40",r:"1.2",fill:e}),t.jsx("path",{d:"M28 46Q32 48 36 46",stroke:s,strokeWidth:"1.5",strokeLinecap:"round"}),t.jsx("circle",{cx:"16",cy:"34",r:"1.5",fill:s,opacity:"0.5"}),t.jsx("circle",{cx:"48",cy:"34",r:"1.5",fill:s,opacity:"0.5"}),t.jsx("circle",{cx:"32",cy:"60",r:"2",fill:i,opacity:"0.3"}),t.jsx("ellipse",{cx:"32",cy:"56",rx:"21",ry:"9",fill:e,opacity:"0.08"})]}),ar=({primaryColor:e="#60A5FA",secondaryColor:i="#3B82F6",accentColor:s="#DBEAFE",size:r=64})=>t.jsxs("svg",{width:r,height:r,viewBox:"0 0 64 64",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("defs",{children:t.jsxs("radialGradient",{id:"waterDrop",cx:"24",cy:"24",r:"20",gradientUnits:"userSpaceOnUse",children:[t.jsx("stop",{offset:"0%",stopColor:s}),t.jsx("stop",{offset:"60%",stopColor:e}),t.jsx("stop",{offset:"100%",stopColor:i})]})}),t.jsx("path",{d:"M32 60Q48 38 32 12Q16 38 32 60Z",fill:"url(#waterDrop)",stroke:i,strokeWidth:"2.5"}),t.jsx("ellipse",{cx:"32",cy:"44",rx:"10",ry:"4",fill:s,opacity:"0.3"}),t.jsx("ellipse",{cx:"32",cy:"52",rx:"7",ry:"3",fill:e,opacity:"0.15"}),t.jsx("circle",{cx:"24",cy:"56",r:"1.5",fill:s,opacity:"0.6"}),t.jsx("circle",{cx:"40",cy:"56",r:"1.5",fill:s,opacity:"0.6"}),t.jsx("circle",{cx:"32",cy:"60",r:"2",fill:s,opacity:"0.5"}),t.jsx("ellipse",{cx:"32",cy:"56",rx:"18",ry:"9",fill:e,opacity:"0.08"}),t.jsx("ellipse",{cx:"28",cy:"36",rx:"2.2",ry:"3.2",fill:"#18181B"}),t.jsx("ellipse",{cx:"36",cy:"36",rx:"2.2",ry:"3.2",fill:"#18181B"}),t.jsx("circle",{cx:"28",cy:"36",r:"1.2",fill:e}),t.jsx("circle",{cx:"36",cy:"36",r:"1.2",fill:e})]}),lr=({primaryColor:e="#EF4444",secondaryColor:i="#F97316",accentColor:s="#FBBF24",size:r=64})=>t.jsxs("svg",{width:r,height:r,viewBox:"0 0 64 64",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("defs",{children:t.jsxs("radialGradient",{id:"flameTornado",cx:"24",cy:"24",r:"20",gradientUnits:"userSpaceOnUse",children:[t.jsx("stop",{offset:"0%",stopColor:s}),t.jsx("stop",{offset:"40%",stopColor:i}),t.jsx("stop",{offset:"100%",stopColor:e})]})}),t.jsx("path",{d:"M32 60C42 54 52 44 40 38C56 32 48 20 32 26C16 20 8 32 24 38C12 44 22 54 32 60Z",fill:"url(#flameTornado)",stroke:e,strokeWidth:"2.5"}),t.jsx("path",{d:"M32 60C36 52 44 46 32 40C20 46 28 52 32 60Z",fill:s,opacity:"0.3"}),t.jsx("ellipse",{cx:"32",cy:"44",rx:"10",ry:"4",fill:s,opacity:"0.4"}),t.jsx("circle",{cx:"24",cy:"52",r:"1.5",fill:s,opacity:"0.7"}),t.jsx("circle",{cx:"40",cy:"52",r:"1.5",fill:s,opacity:"0.7"}),t.jsx("circle",{cx:"32",cy:"56",r:"2",fill:i,opacity:"0.5"}),t.jsx("ellipse",{cx:"32",cy:"56",rx:"18",ry:"9",fill:e,opacity:"0.08"}),t.jsx("ellipse",{cx:"28",cy:"36",rx:"2.2",ry:"3.2",fill:"#18181B"}),t.jsx("ellipse",{cx:"36",cy:"36",rx:"2.2",ry:"3.2",fill:"#18181B"}),t.jsx("circle",{cx:"28",cy:"36",r:"1.2",fill:e}),t.jsx("circle",{cx:"36",cy:"36",r:"1.2",fill:e})]}),or=({primaryColor:e="#8B0000",secondaryColor:i="#DC143C",accentColor:s="#FFD700",size:r=48})=>t.jsxs("svg",{width:r,height:r,viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("ellipse",{cx:"24",cy:"32",rx:"10",ry:"10",fill:e,stroke:"black",strokeWidth:"1.5"}),t.jsx("ellipse",{cx:"24",cy:"16",rx:"8",ry:"7",fill:e,stroke:"black",strokeWidth:"1.5"}),t.jsx("path",{d:"M18 12Q16 8 14 10",stroke:"black",strokeWidth:"2",fill:i,strokeLinecap:"round"}),t.jsx("path",{d:"M30 12Q32 8 34 10",stroke:"black",strokeWidth:"2",fill:i,strokeLinecap:"round"}),t.jsx("ellipse",{cx:"21",cy:"15",rx:"2.5",ry:"3",fill:s}),t.jsx("ellipse",{cx:"27",cy:"15",rx:"2.5",ry:"3",fill:s}),t.jsx("circle",{cx:"21",cy:"15",r:"1",fill:"#FF4500"}),t.jsx("circle",{cx:"27",cy:"15",r:"1",fill:"#FF4500"}),t.jsx("circle",{cx:"21",cy:"14.5",r:"0.5",fill:"white",opacity:"0.8"}),t.jsx("circle",{cx:"27",cy:"14.5",r:"0.5",fill:"white",opacity:"0.8"}),t.jsx("path",{d:"M24 17L23 19L25 19Z",fill:"black"}),t.jsx("path",{d:"M20 20Q24 23 28 20",stroke:"black",strokeWidth:"1.5",fill:i}),t.jsx("path",{d:"M22 20L21 24",stroke:"white",strokeWidth:"1.5",strokeLinecap:"round"}),t.jsx("path",{d:"M26 20L27 24",stroke:"white",strokeWidth:"1.5",strokeLinecap:"round"}),t.jsx("path",{d:"M13 30Q8 26 10 35",fill:i,stroke:"black",strokeWidth:"1"}),t.jsx("path",{d:"M35 30Q40 26 38 35",fill:i,stroke:"black",strokeWidth:"1"}),t.jsx("path",{d:"M24 40Q26 44 28 42",stroke:e,strokeWidth:"2",strokeLinecap:"round"}),t.jsx("path",{d:"M28 42L30 44",stroke:e,strokeWidth:"1.5",strokeLinecap:"round"}),t.jsx("path",{d:"M28 42L26 44",stroke:e,strokeWidth:"1.5",strokeLinecap:"round"}),t.jsx("circle",{cx:"24",cy:"28",r:"2.5",fill:s,opacity:"0.6"}),t.jsx("path",{d:"M24 26L24 30M22 28L26 28",stroke:i,strokeWidth:"0.8"})]}),cr=({primaryColor:e="#DC2626",secondaryColor:i="#991B1B",accentColor:s="#FBBF24",size:r=48})=>t.jsxs("svg",{width:r,height:r,viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("ellipse",{cx:"24",cy:"18",rx:"7",ry:"6.5",fill:e,stroke:i,strokeWidth:"1.5"}),t.jsx("path",{d:"M19 13L17 9",stroke:i,strokeWidth:"2",strokeLinecap:"round"}),t.jsx("path",{d:"M29 13L31 9",stroke:i,strokeWidth:"2",strokeLinecap:"round"}),t.jsx("circle",{cx:"17",cy:"9",r:"1.5",fill:i}),t.jsx("circle",{cx:"31",cy:"9",r:"1.5",fill:i}),t.jsx("path",{d:"M16 16L12 14L15 18Z",fill:e,stroke:i,strokeWidth:"1"}),t.jsx("path",{d:"M32 16L36 14L33 18Z",fill:e,stroke:i,strokeWidth:"1"}),t.jsx("circle",{cx:"21",cy:"17",r:"2.5",fill:s}),t.jsx("circle",{cx:"27",cy:"17",r:"2.5",fill:s}),t.jsx("circle",{cx:"21",cy:"17",r:"1.5",fill:"black"}),t.jsx("circle",{cx:"27",cy:"17",r:"1.5",fill:"black"}),t.jsx("circle",{cx:"21.5",cy:"16.5",r:"0.7",fill:s,opacity:"0.9"}),t.jsx("circle",{cx:"27.5",cy:"16.5",r:"0.7",fill:s,opacity:"0.9"}),t.jsx("path",{d:"M20 21Q24 23 28 21",stroke:i,strokeWidth:"1.5",fill:"none"}),t.jsx("path",{d:"M22 21L21.5 23",stroke:"white",strokeWidth:"1",strokeLinecap:"round"}),t.jsx("path",{d:"M26 21L26.5 23",stroke:"white",strokeWidth:"1",strokeLinecap:"round"}),t.jsx("ellipse",{cx:"24",cy:"30",rx:"6",ry:"7",fill:e,stroke:i,strokeWidth:"1.5"}),t.jsx("ellipse",{cx:"24",cy:"31",rx:"4",ry:"4.5",fill:i,opacity:"0.3"}),t.jsx("path",{d:"M18 28Q14 26 13 30Q13 32 16 32",fill:i,stroke:i,strokeWidth:"1",opacity:"0.8"}),t.jsx("path",{d:"M30 28Q34 26 35 30Q35 32 32 32",fill:i,stroke:i,strokeWidth:"1",opacity:"0.8"}),t.jsx("line",{x1:"14",y1:"28",x2:"15",y2:"31",stroke:e,strokeWidth:"0.5",opacity:"0.6"}),t.jsx("line",{x1:"34",y1:"28",x2:"33",y2:"31",stroke:e,strokeWidth:"0.5",opacity:"0.6"}),t.jsx("path",{d:"M18 30Q15 32 14 35",stroke:e,strokeWidth:"2",strokeLinecap:"round"}),t.jsx("path",{d:"M30 30Q33 32 34 35",stroke:e,strokeWidth:"2",strokeLinecap:"round"}),t.jsx("line",{x1:"34",y1:"35",x2:"36",y2:"38",stroke:"#D97706",strokeWidth:"1.5"}),t.jsx("path",{d:"M35 38L35 40M36 38L36 40M37 38L37 40",stroke:"#D97706",strokeWidth:"0.8"}),t.jsx("circle",{cx:"36",cy:"38",r:"0.8",fill:s}),t.jsx("rect",{x:"20",y:"36",width:"2",height:"6",rx:"1",fill:e,stroke:i,strokeWidth:"0.8"}),t.jsx("rect",{x:"26",y:"36",width:"2",height:"6",rx:"1",fill:e,stroke:i,strokeWidth:"0.8"}),t.jsx("ellipse",{cx:"21",cy:"42",rx:"1.5",ry:"1",fill:i}),t.jsx("ellipse",{cx:"27",cy:"42",rx:"1.5",ry:"1",fill:i}),t.jsx("path",{d:"M20 42L19 43M21 42L21 43M22 42L23 43",stroke:i,strokeWidth:"0.5"}),t.jsx("path",{d:"M26 42L25 43M27 42L27 43M28 42L29 43",stroke:i,strokeWidth:"0.5"}),t.jsx("path",{d:"M24 36Q26 40 27 43",stroke:e,strokeWidth:"2",strokeLinecap:"round"}),t.jsx("path",{d:"M27 43L28 45",stroke:e,strokeWidth:"1.2",strokeLinecap:"round"}),t.jsx("path",{d:"M27 43L26 45",stroke:e,strokeWidth:"1.2",strokeLinecap:"round"}),t.jsx("path",{d:"M28 45L29 46M26 45L25 46",stroke:s,strokeWidth:"0.8",strokeLinecap:"round"}),t.jsx("circle",{cx:"12",cy:"20",r:"1",fill:"#F97316",opacity:"0.6"}),t.jsx("circle",{cx:"36",cy:"20",r:"1",fill:"#F97316",opacity:"0.6"}),t.jsx("circle",{cx:"16",cy:"34",r:"0.8",fill:"#FBBF24",opacity:"0.5"})]}),dr=({primaryColor:e="#065F46",secondaryColor:i="#047857",accentColor:s="#10B981",size:r=48})=>t.jsxs("svg",{width:r,height:r,viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("rect",{x:"17",y:"12",width:"14",height:"12",rx:"2",fill:e,stroke:"black",strokeWidth:"1.5"}),t.jsx("path",{d:"M18 14Q14 12 12 16Q11 18 13 18",stroke:"black",strokeWidth:"2.5",fill:i,strokeLinecap:"round"}),t.jsx("path",{d:"M30 14Q34 12 36 16Q37 18 35 18",stroke:"black",strokeWidth:"2.5",fill:i,strokeLinecap:"round"}),t.jsx("circle",{cx:"12.5",cy:"16",r:"1.2",fill:"#1F2937"}),t.jsx("circle",{cx:"35.5",cy:"16",r:"1.2",fill:"#1F2937"}),t.jsx("rect",{x:"23",y:"10",width:"2",height:"3",fill:i}),t.jsx("path",{d:"M22 10L24 8L26 10",fill:i,stroke:"black",strokeWidth:"0.5"}),t.jsx("rect",{x:"19",y:"17",width:"3",height:"4",rx:"0.5",fill:s,opacity:"0.9"}),t.jsx("rect",{x:"26",y:"17",width:"3",height:"4",rx:"0.5",fill:s,opacity:"0.9"}),t.jsx("rect",{x:"20",y:"18",width:"1",height:"2",fill:"#047857"}),t.jsx("rect",{x:"27",y:"18",width:"1",height:"2",fill:"#047857"}),t.jsx("circle",{cx:"20.5",cy:"19",r:"0.5",fill:"#D1FAE5"}),t.jsx("circle",{cx:"27.5",cy:"19",r:"0.5",fill:"#D1FAE5"}),t.jsx("rect",{x:"20",y:"22",width:"8",height:"2",fill:"black",opacity:"0.8"}),t.jsx("rect",{x:"20",y:"22",width:"1",height:"3",fill:"white"}),t.jsx("rect",{x:"22",y:"22",width:"1",height:"3",fill:"white"}),t.jsx("rect",{x:"25",y:"22",width:"1",height:"3",fill:"white"}),t.jsx("rect",{x:"27",y:"22",width:"1",height:"3",fill:"white"}),t.jsx("line",{x1:"17",y1:"16",x2:"15",y2:"18",stroke:"#047857",strokeWidth:"1",strokeLinecap:"round"}),t.jsx("line",{x1:"31",y1:"16",x2:"33",y2:"18",stroke:"#047857",strokeWidth:"1",strokeLinecap:"round"}),t.jsx("path",{d:"M14 24L12 26L12 30L16 32",fill:"#1F2937",stroke:"black",strokeWidth:"1"}),t.jsx("path",{d:"M34 24L36 26L36 30L32 32",fill:"#1F2937",stroke:"black",strokeWidth:"1"}),t.jsx("path",{d:"M12 26L10 25",stroke:"#4B5563",strokeWidth:"1.5",strokeLinecap:"round"}),t.jsx("path",{d:"M12 28L10 28",stroke:"#4B5563",strokeWidth:"1.5",strokeLinecap:"round"}),t.jsx("path",{d:"M36 26L38 25",stroke:"#4B5563",strokeWidth:"1.5",strokeLinecap:"round"}),t.jsx("path",{d:"M36 28L38 28",stroke:"#4B5563",strokeWidth:"1.5",strokeLinecap:"round"}),t.jsx("rect",{x:"16",y:"24",width:"16",height:"14",rx:"2",fill:e,stroke:"black",strokeWidth:"1.5"}),t.jsx("rect",{x:"18",y:"26",width:"12",height:"3",rx:"0.5",fill:"#1F2937",opacity:"0.6"}),t.jsx("rect",{x:"18",y:"31",width:"12",height:"3",rx:"0.5",fill:"#1F2937",opacity:"0.6"}),t.jsx("circle",{cx:"24",cy:"30",r:"2",fill:s,opacity:"0.4"}),t.jsx("path",{d:"M24 28L24 32M22 30L26 30",stroke:s,strokeWidth:"0.8",opacity:"0.6"}),t.jsx("rect",{x:"12",y:"28",width:"4",height:"10",rx:"1",fill:e,stroke:"black",strokeWidth:"1"}),t.jsx("rect",{x:"32",y:"28",width:"4",height:"10",rx:"1",fill:e,stroke:"black",strokeWidth:"1"}),t.jsx("rect",{x:"11",y:"36",width:"6",height:"4",rx:"0.5",fill:"#374151",stroke:"black",strokeWidth:"1"}),t.jsx("rect",{x:"31",y:"36",width:"6",height:"4",rx:"0.5",fill:"#374151",stroke:"black",strokeWidth:"1"}),t.jsx("rect",{x:"36",y:"32",width:"2",height:"12",rx:"0.3",fill:"#6B7280",stroke:"black",strokeWidth:"0.8"}),t.jsx("path",{d:"M35 32L39 32L37 28Z",fill:"#4B5563",stroke:"black",strokeWidth:"0.8"}),t.jsx("rect",{x:"36.5",y:"44",width:"1",height:"2",fill:"#8B4513"}),t.jsx("line",{x1:"37",y1:"34",x2:"37",y2:"42",stroke:s,strokeWidth:"0.5",opacity:"0.6"}),t.jsx("circle",{cx:"37",cy:"36",r:"1",fill:s,opacity:"0.3"}),t.jsx("rect",{x:"18",y:"38",width:"4",height:"7",rx:"1",fill:e,stroke:"black",strokeWidth:"1"}),t.jsx("rect",{x:"26",y:"38",width:"4",height:"7",rx:"1",fill:e,stroke:"black",strokeWidth:"1"}),t.jsx("rect",{x:"17",y:"43",width:"6",height:"3",rx:"0.5",fill:"#1F2937",stroke:"black",strokeWidth:"1"}),t.jsx("rect",{x:"25",y:"43",width:"6",height:"3",rx:"0.5",fill:"#1F2937",stroke:"black",strokeWidth:"1"}),t.jsx("circle",{cx:"10",cy:"32",r:"1.5",fill:s,opacity:"0.3"}),t.jsx("circle",{cx:"38",cy:"24",r:"1.5",fill:s,opacity:"0.3"}),t.jsx("circle",{cx:"16",cy:"42",r:"1",fill:s,opacity:"0.4"})]}),xr=({primaryColor:e="#F472B6",secondaryColor:i="#BE185D",accentColor:s="#FBBF24",size:r=48})=>t.jsxs("svg",{width:r,height:r,viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("ellipse",{cx:"24",cy:"32",rx:"8",ry:"7",fill:e,stroke:i,strokeWidth:"2"}),t.jsx("ellipse",{cx:"24",cy:"18",rx:"7",ry:"6",fill:e,stroke:i,strokeWidth:"2"}),t.jsx("ellipse",{cx:"21",cy:"16",rx:"1.2",ry:"2",fill:s}),t.jsx("ellipse",{cx:"27",cy:"16",rx:"1.2",ry:"2",fill:s}),t.jsx("ellipse",{cx:"24",cy:"20",rx:"2",ry:"1",fill:"#BE185D"}),t.jsx("ellipse",{cx:"14",cy:"28",rx:"3",ry:"7",fill:i,opacity:"0.7"}),t.jsx("ellipse",{cx:"34",cy:"28",rx:"3",ry:"7",fill:i,opacity:"0.7"})]}),hr=({primaryColor:e="#DC2626",secondaryColor:i="#991B1B",accentColor:s="#FBBF24",size:r=48})=>t.jsxs("svg",{width:r,height:r,viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("ellipse",{cx:"24",cy:"32",rx:"8",ry:"7",fill:e,stroke:i,strokeWidth:"2"}),t.jsx("ellipse",{cx:"24",cy:"18",rx:"7",ry:"6",fill:e,stroke:i,strokeWidth:"2"}),t.jsx("ellipse",{cx:"21",cy:"16",rx:"1.2",ry:"2",fill:s}),t.jsx("ellipse",{cx:"27",cy:"16",rx:"1.2",ry:"2",fill:s}),t.jsx("path",{d:"M19 13L17 9",stroke:i,strokeWidth:"2",strokeLinecap:"round"}),t.jsx("path",{d:"M29 13L31 9",stroke:i,strokeWidth:"2",strokeLinecap:"round"}),t.jsx("rect",{x:"21",y:"38",width:"2",height:"4",rx:"0.5",fill:i}),t.jsx("rect",{x:"25",y:"38",width:"2",height:"4",rx:"0.5",fill:i})]}),pr=({primaryColor:e="#60A5FA",secondaryColor:i="#3B82F6",accentColor:s="#DBEAFE",size:r=48})=>t.jsxs("svg",{width:r,height:r,viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("rect",{x:"16",y:"26",width:"16",height:"18",rx:"2",fill:e,stroke:i,strokeWidth:"2"}),t.jsx("rect",{x:"18",y:"10",width:"12",height:"14",rx:"1.5",fill:e,stroke:i,strokeWidth:"2.5"}),t.jsx("rect",{x:"21",y:"15",width:"2.5",height:"4",rx:"0.5",fill:s}),t.jsx("rect",{x:"25.5",y:"15",width:"2.5",height:"4",rx:"0.5",fill:s}),t.jsx("rect",{x:"21",y:"21",width:"6",height:"1.5",rx:"0.3",fill:"black",opacity:"0.6"}),t.jsx("rect",{x:"12",y:"24",width:"6",height:"8",rx:"1",fill:e,stroke:i,strokeWidth:"2"}),t.jsx("rect",{x:"30",y:"24",width:"6",height:"8",rx:"1",fill:e,stroke:i,strokeWidth:"2"}),t.jsx("rect",{x:"10",y:"30",width:"5",height:"12",rx:"1.5",fill:e,stroke:i,strokeWidth:"2"}),t.jsx("rect",{x:"33",y:"30",width:"5",height:"12",rx:"1.5",fill:e,stroke:i,strokeWidth:"2"}),t.jsx("rect",{x:"8",y:"40",width:"8",height:"6",rx:"1.5",fill:e,stroke:i,strokeWidth:"2"}),t.jsx("rect",{x:"32",y:"40",width:"8",height:"6",rx:"1.5",fill:e,stroke:i,strokeWidth:"2"}),t.jsx("rect",{x:"18",y:"42",width:"5",height:"5",rx:"0.5",fill:e,stroke:i,strokeWidth:"2"}),t.jsx("rect",{x:"25",y:"42",width:"5",height:"5",rx:"0.5",fill:e,stroke:i,strokeWidth:"2"})]}),ur=({primaryColor:e="#A7F3D0",secondaryColor:i="#065F46",accentColor:s="#FBBF24",size:r=48})=>t.jsxs("svg",{width:r,height:r,viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("ellipse",{cx:"24",cy:"32",rx:"10",ry:"8",fill:e,stroke:i,strokeWidth:"2"}),t.jsx("ellipse",{cx:"24",cy:"18",rx:"8",ry:"7",fill:e,stroke:i,strokeWidth:"2"}),t.jsx("ellipse",{cx:"21",cy:"16",rx:"1.5",ry:"2",fill:s}),t.jsx("ellipse",{cx:"27",cy:"16",rx:"1.5",ry:"2",fill:s}),t.jsx("ellipse",{cx:"24",cy:"22",rx:"4",ry:"2",fill:"#065F46"}),t.jsx("rect",{x:"23",y:"23",width:"2",height:"1.2",rx:"0.3",fill:"white"}),t.jsx("rect",{x:"32",y:"36",width:"8",height:"2",rx:"0.5",fill:"#A6531B"})]}),mr=({primaryColor:e="#78716C",secondaryColor:i="#57534E",accentColor:s="#A8A29E",size:r=48})=>t.jsxs("svg",{width:r,height:r,viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("rect",{x:"16",y:"26",width:"16",height:"18",rx:"2",fill:e,stroke:i,strokeWidth:"2"}),t.jsx("line",{x1:"18",y1:"30",x2:"22",y2:"28",stroke:i,strokeWidth:"1",opacity:"0.6"}),t.jsx("line",{x1:"24",y1:"32",x2:"28",y2:"30",stroke:i,strokeWidth:"1",opacity:"0.6"}),t.jsx("line",{x1:"20",y1:"36",x2:"24",y2:"34",stroke:i,strokeWidth:"1",opacity:"0.6"}),t.jsx("line",{x1:"26",y1:"38",x2:"30",y2:"36",stroke:i,strokeWidth:"1",opacity:"0.6"}),t.jsx("path",{d:"M20 32L18 30L20 28L22 30Z",fill:s,stroke:i,strokeWidth:"0.8"}),t.jsx("path",{d:"M28 36L26 34L28 32L30 34Z",fill:s,stroke:i,strokeWidth:"0.8"}),t.jsx("rect",{x:"18",y:"10",width:"12",height:"14",rx:"1.5",fill:e,stroke:i,strokeWidth:"2.5"}),t.jsx("line",{x1:"20",y1:"12",x2:"23",y2:"15",stroke:i,strokeWidth:"1.2",opacity:"0.6"}),t.jsx("line",{x1:"26",y1:"13",x2:"28",y2:"16",stroke:i,strokeWidth:"1.2",opacity:"0.6"}),t.jsx("rect",{x:"20",y:"15",width:"2.5",height:"4",rx:"0.5",fill:"black",opacity:"0.7"}),t.jsx("rect",{x:"25.5",y:"15",width:"2.5",height:"4",rx:"0.5",fill:"black",opacity:"0.7"}),t.jsx("circle",{cx:"21",cy:"17",r:"1",fill:"#FCD34D",opacity:"0.8"}),t.jsx("circle",{cx:"26.5",cy:"17",r:"1",fill:"#FCD34D",opacity:"0.8"}),t.jsx("circle",{cx:"21.3",cy:"16.7",r:"0.4",fill:"#FEF3C7"}),t.jsx("circle",{cx:"26.8",cy:"16.7",r:"0.4",fill:"#FEF3C7"}),t.jsx("rect",{x:"21",y:"21",width:"6",height:"1.5",rx:"0.3",fill:"black",opacity:"0.6"}),t.jsx("path",{d:"M22 10L20 7L22 8L24 6L26 8L28 7L26 10",fill:s,stroke:i,strokeWidth:"1"}),t.jsx("path",{d:"M20 7L19 5M24 6L24 4M28 7L29 5",stroke:i,strokeWidth:"1.2",strokeLinecap:"round"}),t.jsx("rect",{x:"12",y:"24",width:"6",height:"8",rx:"1",fill:e,stroke:i,strokeWidth:"2"}),t.jsx("rect",{x:"30",y:"24",width:"6",height:"8",rx:"1",fill:e,stroke:i,strokeWidth:"2"}),t.jsx("path",{d:"M14 26L13 24L15 25Z",fill:s,stroke:i,strokeWidth:"0.5"}),t.jsx("path",{d:"M34 26L35 24L33 25Z",fill:s,stroke:i,strokeWidth:"0.5"}),t.jsx("rect",{x:"10",y:"30",width:"5",height:"12",rx:"1.5",fill:e,stroke:i,strokeWidth:"2"}),t.jsx("rect",{x:"33",y:"30",width:"5",height:"12",rx:"1.5",fill:e,stroke:i,strokeWidth:"2"}),t.jsx("line",{x1:"11",y1:"34",x2:"13",y2:"36",stroke:i,strokeWidth:"0.8",opacity:"0.5"}),t.jsx("line",{x1:"35",y1:"34",x2:"37",y2:"36",stroke:i,strokeWidth:"0.8",opacity:"0.5"}),t.jsx("rect",{x:"8",y:"40",width:"8",height:"6",rx:"1.5",fill:e,stroke:i,strokeWidth:"2"}),t.jsx("rect",{x:"32",y:"40",width:"8",height:"6",rx:"1.5",fill:e,stroke:i,strokeWidth:"2"}),t.jsx("line",{x1:"10",y1:"42",x2:"10",y2:"44",stroke:i,strokeWidth:"1"}),t.jsx("line",{x1:"12",y1:"42",x2:"12",y2:"44",stroke:i,strokeWidth:"1"}),t.jsx("line",{x1:"14",y1:"42",x2:"14",y2:"44",stroke:i,strokeWidth:"1"}),t.jsx("line",{x1:"34",y1:"42",x2:"34",y2:"44",stroke:i,strokeWidth:"1"}),t.jsx("line",{x1:"36",y1:"42",x2:"36",y2:"44",stroke:i,strokeWidth:"1"}),t.jsx("line",{x1:"38",y1:"42",x2:"38",y2:"44",stroke:i,strokeWidth:"1"}),t.jsx("rect",{x:"18",y:"42",width:"5",height:"5",rx:"0.5",fill:e,stroke:i,strokeWidth:"2"}),t.jsx("rect",{x:"25",y:"42",width:"5",height:"5",rx:"0.5",fill:e,stroke:i,strokeWidth:"2"}),t.jsx("circle",{cx:"10",cy:"38",r:"1.2",fill:s,opacity:"0.6"}),t.jsx("circle",{cx:"38",cy:"38",r:"1.2",fill:s,opacity:"0.6"}),t.jsx("circle",{cx:"16",cy:"44",r:"0.8",fill:i,opacity:"0.5"}),t.jsx("circle",{cx:"32",cy:"44",r:"0.8",fill:i,opacity:"0.5"}),t.jsx("ellipse",{cx:"24",cy:"44",rx:"14",ry:"2",fill:i,opacity:"0.2"})]}),gr=({primaryColor:e="#A3A3A3",secondaryColor:i="#6B7280",accentColor:s="#FBBF24",size:r=48})=>t.jsxs("svg",{width:r,height:r,viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("ellipse",{cx:"24",cy:"32",rx:"10",ry:"8",fill:e,stroke:i,strokeWidth:"2"}),t.jsx("ellipse",{cx:"24",cy:"18",rx:"7",ry:"6",fill:e,stroke:i,strokeWidth:"2"}),t.jsx("ellipse",{cx:"21",cy:"16",rx:"1.2",ry:"2",fill:s}),t.jsx("ellipse",{cx:"27",cy:"16",rx:"1.2",ry:"2",fill:s}),t.jsx("ellipse",{cx:"14",cy:"28",rx:"3",ry:"7",fill:i,opacity:"0.7"}),t.jsx("ellipse",{cx:"34",cy:"28",rx:"3",ry:"7",fill:i,opacity:"0.7"}),t.jsx("path",{d:"M32 32Q38 36 40 44",stroke:s,strokeWidth:"2"}),t.jsx("path",{d:"M20 14Q18 10 22 12",stroke:i,strokeWidth:"1.2"}),t.jsx("path",{d:"M28 14Q30 10 26 12",stroke:i,strokeWidth:"1.2"})]}),fr=({primaryColor:e="#FBBF24",secondaryColor:i="#A16207",accentColor:s="#F59E42",size:r=48})=>t.jsxs("svg",{width:r,height:r,viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("ellipse",{cx:"24",cy:"32",rx:"9",ry:"7",fill:e,stroke:i,strokeWidth:"2"}),t.jsx("ellipse",{cx:"24",cy:"18",rx:"7",ry:"6",fill:e,stroke:i,strokeWidth:"2"}),t.jsx("ellipse",{cx:"21",cy:"16",rx:"1.2",ry:"2",fill:s}),t.jsx("ellipse",{cx:"27",cy:"16",rx:"1.2",ry:"2",fill:s}),t.jsx("ellipse",{cx:"14",cy:"28",rx:"3",ry:"7",fill:i,opacity:"0.7"}),t.jsx("ellipse",{cx:"34",cy:"28",rx:"3",ry:"7",fill:i,opacity:"0.7"}),t.jsx("path",{d:"M32 32Q38 36 40 44",stroke:s,strokeWidth:"2"})]}),yr=({primaryColor:e="#A3A3A3",secondaryColor:i="#6B7280",accentColor:s="#FBBF24",size:r=48})=>t.jsxs("svg",{width:r,height:r,viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("ellipse",{cx:"24",cy:"32",rx:"9",ry:"7",fill:e,stroke:i,strokeWidth:"2"}),t.jsx("ellipse",{cx:"24",cy:"18",rx:"7",ry:"6",fill:e,stroke:i,strokeWidth:"2"}),t.jsx("ellipse",{cx:"21",cy:"16",rx:"1.2",ry:"2",fill:s}),t.jsx("ellipse",{cx:"27",cy:"16",rx:"1.2",ry:"2",fill:s}),t.jsx("path",{d:"M32 32Q38 36 40 44",stroke:s,strokeWidth:"2"})]}),br=({primaryColor:e="#F59E0B",secondaryColor:i="#B45309",accentColor:s="#FBBF24",size:r=48})=>t.jsxs("svg",{width:r,height:r,viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("ellipse",{cx:"24",cy:"32",rx:"13",ry:"11",fill:e,stroke:i,strokeWidth:"2.5"}),t.jsx("ellipse",{cx:"24",cy:"15",rx:"9",ry:"8",fill:e,stroke:i,strokeWidth:"2.5"}),t.jsx("ellipse",{cx:"20",cy:"13",rx:"3",ry:"4",fill:s}),t.jsx("ellipse",{cx:"28",cy:"13",rx:"3",ry:"4",fill:s}),t.jsx("path",{d:"M17 9L14 4Q13 2 14 3",stroke:i,strokeWidth:"3.5",strokeLinecap:"round"}),t.jsx("path",{d:"M31 9L34 4Q35 2 34 3",stroke:i,strokeWidth:"3.5",strokeLinecap:"round"}),t.jsx("ellipse",{cx:"24",cy:"28",rx:"5",ry:"3",fill:"#FBBF24",opacity:"0.5"})]}),jr=({primaryColor:e="#EF4444",secondaryColor:i="#DC2626",accentColor:s="#FBBF24",size:r=48})=>t.jsxs("svg",{width:r,height:r,viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("ellipse",{cx:"24",cy:"30",rx:"9",ry:"8",fill:e,stroke:i,strokeWidth:"1.5"}),t.jsx("path",{d:"M18 28Q20 26 22 28Q24 26 26 28Q28 26 30 28",stroke:i,strokeWidth:"0.8",fill:"none",opacity:"0.3"}),t.jsx("path",{d:"M18 32Q20 30 22 32Q24 30 26 32Q28 30 30 32",stroke:i,strokeWidth:"0.8",fill:"none",opacity:"0.3"}),t.jsx("ellipse",{cx:"24",cy:"17",rx:"6.5",ry:"6",fill:e,stroke:i,strokeWidth:"1.5"}),t.jsx("ellipse",{cx:"24",cy:"20",rx:"4.5",ry:"3",fill:e,stroke:i,strokeWidth:"1"}),t.jsx("circle",{cx:"22.5",cy:"20.5",r:"0.6",fill:"black"}),t.jsx("circle",{cx:"25.5",cy:"20.5",r:"0.6",fill:"black"}),t.jsx("ellipse",{cx:"21",cy:"15",rx:"2.5",ry:"3",fill:s}),t.jsx("ellipse",{cx:"27",cy:"15",rx:"2.5",ry:"3",fill:s}),t.jsx("circle",{cx:"21",cy:"15",r:"1.5",fill:"black"}),t.jsx("circle",{cx:"27",cy:"15",r:"1.5",fill:"black"}),t.jsx("circle",{cx:"21.5",cy:"14.5",r:"0.7",fill:"white"}),t.jsx("circle",{cx:"27.5",cy:"14.5",r:"0.7",fill:"white"}),t.jsx("path",{d:"M19 12L18 9",stroke:i,strokeWidth:"1.5",strokeLinecap:"round"}),t.jsx("path",{d:"M29 12L30 9",stroke:i,strokeWidth:"1.5",strokeLinecap:"round"}),t.jsx("circle",{cx:"18",cy:"9",r:"0.8",fill:i}),t.jsx("circle",{cx:"30",cy:"9",r:"0.8",fill:i}),t.jsx("path",{d:"M15 28Q12 26 13 32",fill:i,opacity:"0.5"}),t.jsx("path",{d:"M33 28Q36 26 35 32",fill:i,opacity:"0.5"}),t.jsx("line",{x1:"14",y1:"29",x2:"13",y2:"31",stroke:e,strokeWidth:"0.5",opacity:"0.4"}),t.jsx("line",{x1:"34",y1:"29",x2:"35",y2:"31",stroke:e,strokeWidth:"0.5",opacity:"0.4"}),t.jsx("path",{d:"M24 22L23.5 24L24.5 24Z",fill:s,stroke:i,strokeWidth:"0.3"}),t.jsx("path",{d:"M24 25L23.5 27L24.5 27Z",fill:s,stroke:i,strokeWidth:"0.3"}),t.jsx("path",{d:"M24 28L23.5 30L24.5 30Z",fill:s,stroke:i,strokeWidth:"0.3"}),t.jsx("path",{d:"M19 36Q18 38 17 40",stroke:e,strokeWidth:"2",strokeLinecap:"round"}),t.jsx("path",{d:"M29 36Q30 38 31 40",stroke:e,strokeWidth:"2",strokeLinecap:"round"}),t.jsx("path",{d:"M16 40L15.5 41M17 40L17 41M18 40L18.5 41",stroke:i,strokeWidth:"0.8",strokeLinecap:"round"}),t.jsx("path",{d:"M30 40L29.5 41M31 40L31 41M32 40L32.5 41",stroke:i,strokeWidth:"0.8",strokeLinecap:"round"}),t.jsx("path",{d:"M24 37Q25 40 26 42Q27 43 26.5 42",stroke:e,strokeWidth:"2",strokeLinecap:"round"}),t.jsx("path",{d:"M26 42L27 41L26 40",fill:i}),t.jsx("circle",{cx:"24",cy:"23",r:"0.8",fill:"#F97316",opacity:"0.5"}),t.jsx("circle",{cx:"22.5",cy:"24",r:"0.6",fill:"#FBBF24",opacity:"0.4"})]}),kr=({primaryColor:e="#7C3AED",secondaryColor:i="#5B21B6",accentColor:s="#A78BFA",size:r=48})=>t.jsxs("svg",{width:r,height:r,viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("ellipse",{cx:"24",cy:"32",rx:"13",ry:"11",fill:e,stroke:i,strokeWidth:"2.5"}),t.jsx("path",{d:"M14 28Q16 26 18 28Q20 26 22 28Q24 26 26 28Q28 26 30 28Q32 26 34 28",stroke:i,strokeWidth:"1.5",fill:"none",opacity:"0.5"}),t.jsx("path",{d:"M14 32Q16 30 18 32Q20 30 22 32Q24 30 26 32Q28 30 30 32Q32 30 34 32",stroke:i,strokeWidth:"1.5",fill:"none",opacity:"0.5"}),t.jsx("path",{d:"M14 36Q16 34 18 36Q20 34 22 36Q24 34 26 36Q28 34 30 36Q32 34 34 36",stroke:i,strokeWidth:"1.5",fill:"none",opacity:"0.5"}),t.jsx("line",{x1:"18",y1:"30",x2:"22",y2:"32",stroke:s,strokeWidth:"1",opacity:"0.4"}),t.jsx("line",{x1:"26",y1:"30",x2:"30",y2:"33",stroke:s,strokeWidth:"1",opacity:"0.4"}),t.jsx("ellipse",{cx:"24",cy:"15",rx:"9",ry:"8",fill:e,stroke:i,strokeWidth:"2.5"}),t.jsx("ellipse",{cx:"24",cy:"19",rx:"7",ry:"4.5",fill:e,stroke:i,strokeWidth:"2"}),t.jsx("path",{d:"M19 20Q24 23 29 20",stroke:i,strokeWidth:"1.5",fill:"none"}),t.jsx("path",{d:"M20 20L19 23",stroke:"white",strokeWidth:"1.5",strokeLinecap:"round"}),t.jsx("path",{d:"M28 20L29 23",stroke:"white",strokeWidth:"1.5",strokeLinecap:"round"}),t.jsx("ellipse",{cx:"21.5",cy:"20",rx:"1.2",ry:"1.8",fill:"black"}),t.jsx("ellipse",{cx:"26.5",cy:"20",rx:"1.2",ry:"1.8",fill:"black"}),t.jsx("circle",{cx:"20.5",cy:"19",r:"1",fill:s,opacity:"0.4"}),t.jsx("circle",{cx:"27.5",cy:"19",r:"1",fill:s,opacity:"0.4"}),t.jsx("ellipse",{cx:"20",cy:"13",rx:"3",ry:"4",fill:s}),t.jsx("ellipse",{cx:"28",cy:"13",rx:"3",ry:"4",fill:s}),t.jsx("ellipse",{cx:"20",cy:"13",rx:"1.2",ry:"3",fill:"#5B21B6"}),t.jsx("ellipse",{cx:"28",cy:"13",rx:"1.2",ry:"3",fill:"#5B21B6"}),t.jsx("circle",{cx:"20",cy:"12",r:"0.7",fill:"#DDD6FE"}),t.jsx("circle",{cx:"28",cy:"12",r:"0.7",fill:"#DDD6FE"}),t.jsx("path",{d:"M17 9L14 4Q13 2 14 3",stroke:i,strokeWidth:"3.5",strokeLinecap:"round"}),t.jsx("path",{d:"M31 9L34 4Q35 2 34 3",stroke:i,strokeWidth:"3.5",strokeLinecap:"round"}),t.jsx("circle",{cx:"14",cy:"4",r:"1.5",fill:i}),t.jsx("circle",{cx:"34",cy:"4",r:"1.5",fill:i}),t.jsx("path",{d:"M16 9L14 7",stroke:i,strokeWidth:"2",strokeLinecap:"round"}),t.jsx("path",{d:"M18 10L17 7",stroke:i,strokeWidth:"1.8",strokeLinecap:"round"}),t.jsx("path",{d:"M32 9L34 7",stroke:i,strokeWidth:"2",strokeLinecap:"round"}),t.jsx("path",{d:"M30 10L31 7",stroke:i,strokeWidth:"1.8",strokeLinecap:"round"}),t.jsx("path",{d:"M11 30Q5 22 3 26Q2 30 4 36Q6 40 10 38Q12 36 11 34",fill:i,stroke:i,strokeWidth:"2",opacity:"0.9"}),t.jsx("path",{d:"M37 30Q43 22 45 26Q46 30 44 36Q42 40 38 38Q36 36 37 34",fill:i,stroke:i,strokeWidth:"2",opacity:"0.9"}),t.jsx("path",{d:"M8 32L6 34",stroke:e,strokeWidth:"1.5",opacity:"0.7"}),t.jsx("path",{d:"M10 34L8 36",stroke:e,strokeWidth:"1.5",opacity:"0.7"}),t.jsx("path",{d:"M40 32L42 34",stroke:e,strokeWidth:"1.5",opacity:"0.7"}),t.jsx("path",{d:"M38 34L40 36",stroke:e,strokeWidth:"1.5",opacity:"0.7"}),t.jsx("path",{d:"M24 21L22.5 24L25.5 24Z",fill:s,stroke:i,strokeWidth:"0.8"}),t.jsx("path",{d:"M24 25L22.5 28L25.5 28Z",fill:s,stroke:i,strokeWidth:"0.8"}),t.jsx("path",{d:"M24 29L22.5 32L25.5 32Z",fill:s,stroke:i,strokeWidth:"0.8"}),t.jsx("path",{d:"M24 33L22.5 36L25.5 36Z",fill:s,stroke:i,strokeWidth:"0.8"}),t.jsx("path",{d:"M24 37L22.5 40L25.5 40Z",fill:s,stroke:i,strokeWidth:"0.8"}),t.jsx("path",{d:"M17 41Q15 43 13 45",stroke:e,strokeWidth:"3.5",strokeLinecap:"round"}),t.jsx("path",{d:"M31 41Q33 43 35 45",stroke:e,strokeWidth:"3.5",strokeLinecap:"round"}),t.jsx("path",{d:"M11 45L10 47M13 45L13 47M15 45L16 47",stroke:i,strokeWidth:"1.5",strokeLinecap:"round"}),t.jsx("path",{d:"M33 45L32 47M35 45L35 47M37 45L38 47",stroke:i,strokeWidth:"1.5",strokeLinecap:"round"}),t.jsx("path",{d:"M24 41Q26 44 28 46Q30 47 29.5 45",stroke:e,strokeWidth:"3.5",strokeLinecap:"round"}),t.jsx("path",{d:"M28 46L30 44L28 42",fill:i,stroke:i,strokeWidth:"1.5"}),t.jsx("path",{d:"M27 45L28 43L27 42",fill:s}),t.jsx("circle",{cx:"24",cy:"32",r:"15",fill:s,opacity:"0.1"}),t.jsx("circle",{cx:"12",cy:"24",r:"2",fill:s,opacity:"0.3"}),t.jsx("circle",{cx:"36",cy:"24",r:"2",fill:s,opacity:"0.3"}),t.jsx("circle",{cx:"18",cy:"16",r:"1.5",fill:s,opacity:"0.4"}),t.jsx("circle",{cx:"30",cy:"16",r:"1.5",fill:s,opacity:"0.4"})]}),wr=({primaryColor:e="#A3A3A3",secondaryColor:i="#6B7280",accentColor:s="#FBBF24",size:r=48})=>t.jsxs("svg",{width:r,height:r,viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("ellipse",{cx:"24",cy:"32",rx:"10",ry:"8",fill:e,stroke:i,strokeWidth:"2"}),t.jsx("ellipse",{cx:"24",cy:"18",rx:"7",ry:"6",fill:e,stroke:i,strokeWidth:"2"}),t.jsx("ellipse",{cx:"21",cy:"16",rx:"1.2",ry:"2",fill:s}),t.jsx("ellipse",{cx:"27",cy:"16",rx:"1.2",ry:"2",fill:s}),t.jsx("ellipse",{cx:"24",cy:"22",rx:"2",ry:"1",fill:i,opacity:"0.5"}),t.jsx("ellipse",{cx:"24",cy:"32",rx:"14",ry:"10",fill:s,opacity:"0.08"})]}),vr=a.div`
  width: ${e=>e.$size}px;
  height: ${e=>e.$size}px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background: ${e=>e.$level>=30?"linear-gradient(135deg, #8B000022 0%, #DC143C33 100%)":e.$level>=20?"linear-gradient(135deg, #A335EE22 0%, #8020CC33 100%)":e.$level>=10?"linear-gradient(135deg, #0070DD22 0%, #0052AA33 100%)":"linear-gradient(135deg, #1EFF0022 0%, #00D00033 100%)"};
  border: 2px solid ${e=>e.$level>=30?"#DC143C":e.$level>=20?"#A335EE":e.$level>=10?"#0070DD":"#1EFF00"};
  box-shadow: 0 2px 8px ${e=>e.$level>=30?"#DC143C44":e.$level>=20?"#A335EE44":e.$level>=10?"#0070DD44":"#1EFF0044"};
  
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 6px;
    background: radial-gradient(
      circle at 30% 30%,
      rgba(255, 255, 255, 0.1) 0%,
      transparent 70%
    );
  }
`,$r=a.div`
  position: absolute;
  bottom: 2px;
  right: 2px;
  background: ${e=>e.$level>=30?"linear-gradient(135deg, #8B0000 0%, #DC143C 100%)":e.$level>=20?"linear-gradient(135deg, #6010AA 0%, #A335EE 100%)":e.$level>=10?"linear-gradient(135deg, #003D88 0%, #0070DD 100%)":"linear-gradient(135deg, #00A000 0%, #1EFF00 100%)"};
  color: white;
  font-size: 10px;
  font-weight: bold;
  padding: 2px 6px;
  border-radius: 4px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);
  z-index: 1;
`,Lr=a.div`
  position: absolute;
  top: 2px;
  right: 2px;
  font-size: 12px;
  z-index: 1;
`,Dt=({monster:e,level:i=1,size:s=64})=>{const r=Math.floor(s*.75),n=()=>{switch(e.id.replace(/-(\d+)$/,"")){case"wolf":return t.jsx(Us,{size:r});case"fox":return t.jsx(Os,{size:r});case"boar":return t.jsx(Vs,{size:r});case"owl":return t.jsx(Gs,{size:r});case"giant-rat":return t.jsx(Xs,{size:r});case"bandit":return t.jsx(Js,{size:r});case"murloc":return t.jsx(Ks,{size:r});case"thief":return t.jsx(Ys,{size:r});case"skeleton":return t.jsx(er,{size:r});case"gargoyle":return t.jsx(ir,{size:r});case"ghost":return t.jsx(tr,{size:r});case"ghoul":return t.jsx(sr,{size:r});case"ice-elemental":return t.jsx(ar,{size:r});case"fire-elemental":return t.jsx(lr,{size:r});case"air-elemental":return t.jsx(rr,{size:r});case"earth-elemental":return t.jsx(nr,{size:r});case"demon":return t.jsx(or,{size:r});case"felguard":return t.jsx(dr,{size:r});case"imp":return t.jsx(cr,{size:r});case"minor-demon":return t.jsx(hr,{size:r});case"succubus":return t.jsx(xr,{size:r});case"ice-giant":return t.jsx(pr,{size:r});case"giant":return t.jsx(mr,{size:r});case"troll-brute":return t.jsx(ur,{size:r});case"whelp":return t.jsx(jr,{size:r});case"ancient-dragon":return t.jsx(kr,{size:r});case"dragon":return t.jsx(gr,{size:r});case"drake":return t.jsx(yr,{size:r});case"guardian-dragon":return t.jsx(br,{size:r});case"wyvern":return t.jsx(fr,{size:r})}return t.jsx(wr,{size:r})},l=i>=40;return t.jsxs(vr,{$size:s,$level:i,children:[l&&t.jsx(Lr,{children:"💀"}),n(),t.jsx($r,{$level:i,children:i})]})},Ze={poor:"#9d9d9d",common:"#ffffff",uncommon:"#1eff00",rare:"#0070dd",epic:"#a335ee",legendary:"#ff8000"},Mr={poor:"Pauvre",common:"Commun",uncommon:"Inhabituel",rare:"Rare",epic:"Épique",legendary:"Légendaire"},Fr=[{id:"weapon-uncommon-1",name:"Épée du débutant",slot:"weapon",quality:"uncommon",level:1,stats:{attackPower:5,strength:2},icon:"⚔️",price:50},{id:"head-uncommon-1",name:"Casque de cuir",slot:"head",quality:"uncommon",level:1,stats:{armor:3,stamina:2},icon:"🪖",price:40},{id:"chest-uncommon-1",name:"Plastron renforcé",slot:"chest",quality:"uncommon",level:1,stats:{armor:5,stamina:3},icon:"🦺",price:60},{id:"legs-uncommon-1",name:"Jambières robustes",slot:"legs",quality:"uncommon",level:1,stats:{armor:4,stamina:2},icon:"👖",price:50},{id:"boots-uncommon-1",name:"Bottes de marche",slot:"boots",quality:"uncommon",level:1,stats:{armor:2,agility:2},icon:"👢",price:40},{id:"jewelry-uncommon-1",name:"Anneau de novice",slot:"jewelry",quality:"uncommon",level:1,stats:{stamina:3,intellect:2},icon:"💍",price:45},{id:"weapon-uncommon-10",name:"Hache de guerre",slot:"weapon",quality:"uncommon",level:10,stats:{attackPower:15,strength:5,critChance:1},icon:"🪓",price:200},{id:"head-uncommon-10",name:"Heaume de fer",slot:"head",quality:"uncommon",level:10,stats:{armor:8,stamina:5},icon:"⛑️",price:150},{id:"chest-uncommon-10",name:"Cuirasse de mailles",slot:"chest",quality:"uncommon",level:10,stats:{armor:12,stamina:7},icon:"🦺",price:250},{id:"legs-uncommon-10",name:"Cuissardes de plates",slot:"legs",quality:"uncommon",level:10,stats:{armor:10,stamina:6},icon:"👖",price:200},{id:"boots-uncommon-10",name:"Solerets de bataille",slot:"boots",quality:"uncommon",level:10,stats:{armor:6,agility:5},icon:"👢",price:150},{id:"jewelry-uncommon-10",name:"Collier de force",slot:"jewelry",quality:"uncommon",level:10,stats:{strength:5,stamina:5},icon:"📿",price:180},{id:"weapon-uncommon-20",name:"Claymore enchantée",slot:"weapon",quality:"uncommon",level:20,stats:{attackPower:30,strength:10,critChance:2},icon:"⚔️",price:500},{id:"head-uncommon-20",name:"Couronne de mage",slot:"head",quality:"uncommon",level:20,stats:{armor:15,intellect:10,spellPower:10},icon:"👑",price:400},{id:"chest-uncommon-20",name:"Armure de champion",slot:"chest",quality:"uncommon",level:20,stats:{armor:25,stamina:15},icon:"🛡️",price:600},{id:"legs-uncommon-20",name:"Grèves mystiques",slot:"legs",quality:"uncommon",level:20,stats:{armor:20,stamina:12,intellect:8},icon:"👖",price:500},{id:"boots-uncommon-20",name:"Bottes de célérité",slot:"boots",quality:"uncommon",level:20,stats:{armor:12,agility:10,critChance:1},icon:"👢",price:400},{id:"jewelry-uncommon-20",name:"Amulette des braves",slot:"jewelry",quality:"uncommon",level:20,stats:{strength:10,stamina:10,critChance:2},icon:"📿",price:450},{id:"weapon-uncommon-30",name:"Lame de titan",slot:"weapon",quality:"uncommon",level:30,stats:{attackPower:50,strength:15,critChance:3},icon:"⚔️",price:1e3},{id:"head-uncommon-30",name:"Diadème arcanique",slot:"head",quality:"uncommon",level:30,stats:{armor:25,intellect:18,spellPower:20},icon:"👑",price:800},{id:"chest-uncommon-30",name:"Cuirasse de conquérant",slot:"chest",quality:"uncommon",level:30,stats:{armor:40,stamina:25},icon:"🛡️",price:1200},{id:"legs-uncommon-30",name:"Jambières de maître",slot:"legs",quality:"uncommon",level:30,stats:{armor:35,stamina:20,strength:10},icon:"👖",price:1e3},{id:"boots-uncommon-30",name:"Bottes de vent",slot:"boots",quality:"uncommon",level:30,stats:{armor:20,agility:18,critChance:2},icon:"👢",price:800},{id:"jewelry-uncommon-30",name:"Talisman de puissance",slot:"jewelry",quality:"uncommon",level:30,stats:{strength:15,intellect:15,stamina:15},icon:"✨",price:900}],Wr=(e,i)=>{if(Math.random()>.3)return null;let s=null;if(i.class)try{s=C[i.class]}catch{s=null}let r;const n=Math.random();e<10?n<.5?r="poor":n<.85?r="common":n<.99?r="uncommon":r="legendary":e<20?n<.3?r="poor":n<.6?r="common":n<.85?r="uncommon":n<.98?r="rare":r="legendary":e<30?n<.3?r="common":n<.6?r="uncommon":n<.85?r="rare":n<.97?r="epic":r="legendary":e>49?n<.3?r="common":n<.6?r="uncommon":n<.85?r="rare":n<.9?r="epic":r="legendary":e>59?n<.3?r="common":n<.6?r="uncommon":n<.85?r="rare":n<.8?r="epic":r="legendary":n<.4?r="uncommon":n<.7?r="rare":n<.95?r="epic":r="legendary";const l=["weapon","head","chest","legs","boots","jewelry"],o=l[Math.floor(Math.random()*l.length)],d={poor:.5,common:1,uncommon:1.5,rare:2.5,epic:4,legendary:6},c=Math.floor(e*.8*d[r]),x={};if(o==="weapon")s?(x[s.primaryStat]=c,s.primaryStat==="intellect"?x.spellPower=c*2:x.attackPower=c*2):(x.strength=c,x.attackPower=c*2),Math.random()<.25&&(x.critChance=Math.floor(c*(.1+Math.random()*.2)));else if(o==="jewelry"){s?x[s.primaryStat]=c:x.strength=c;const k=["attackPower","spellPower","critChance","armor"],h=k[Math.floor(Math.random()*k.length)];h==="attackPower"&&s&&s.primaryStat!=="intellect"?x.attackPower=Math.floor(c*1.5):h==="spellPower"&&s&&s.primaryStat==="intellect"?x.spellPower=Math.floor(c*1.5):h==="critChance"?x.critChance=Math.floor(c*(.1+Math.random()*.2)):h==="armor"&&(x.armor=Math.floor(c*1.2))}else x.armor=c*2,s?x[s.primaryStat]=Math.floor(c*.7):x.stamina=Math.floor(c*.7),Math.random()<.15&&(x.critChance=Math.floor(c*(.08+Math.random()*.15)));const p={plate:"en Plaque",mail:"en Mailles",leather:"en Cuir",cloth:"en Tissu"},m={weapon:{poor:["Épée rouillée","Bâton cassé","Dague ébréchée"],common:["Épée courte","Hache de bucheron","Bâton de novice"],uncommon:["Lame tranchante","Marteau lourd","Arc solide"],rare:["Épée de chevalier","Hache runique","Bâton mystique"],epic:["Lame de dragon","Marteau de foudre","Arc de phoenix"],legendary:["Excalibur","Mjolnir","Frostmourne"]},head:{poor:["Bonnet","Chapeau"],common:["Casque","Capuche"],uncommon:["Heaume","Coiffe"],rare:["Couronne","Casque renforcé"],epic:["Heaume de dragon","Couronne céleste"],legendary:["Couronne des rois","Masque éternel"]},chest:{poor:["Tunique","Gilet"],common:["Plastron","Robe"],uncommon:["Cuirasse","Armure"],rare:["Armure renforcée","Robe enchantée"],epic:["Cuirasse céleste","Armure de dragon"],legendary:["Armure des rois","Cuirasse éternel"]},legs:{poor:["Pantalon","Braies"],common:["Jambières","Pantalon renforcé"],uncommon:["Grèves","Cuissardes"],rare:["Jambières renforcée","Grèves renforcée"],epic:["Cuissardes de dragon","Jambières céleste"],legendary:["Grèves des rois","Cuissardes éternel"]},boots:{poor:["Sandales","Bottes"],common:["Solerets","Souliers"],uncommon:["Bottes renforcées","Sandales solides"],rare:["Souliers enchantées","Solerets de bataille"],epic:["Bottes de dragon","Solerets céleste"],legendary:["Bottes des rois","Solerets éternels"]},jewelry:{poor:["Ficelle nouée","Caillou poli"],common:["Anneau de bronze","Collier simple"],uncommon:["Anneau d'argent","Collier enchassé"],rare:["Anneau d'or","Amulette magique"],epic:["Anneau de dragon","Talisman céleste"],legendary:["Anneau des rois","Amulette éternels"]}}[o][r],b=`${m[Math.floor(Math.random()*m.length)]} ${p[s?s.armorType:"cloth"]}`,g={weapon:"⚔️",head:"🪖",chest:"🛡️",legs:"👖",boots:"👢",jewelry:"💍"},$={poor:.5,common:1,uncommon:2,rare:5,epic:12,legendary:30},A=1,B=Math.max(1,e-2),S={...x};Object.keys(S).forEach(k=>{typeof S[k]=="number"&&(S[k]=(S[k]||0)+B*A)});const y=B*10,w=Math.floor(y*$[r]);return{id:`${o}-${r}-${Date.now()}-${Math.random()}`,name:b,slot:o,quality:r,level:B,stats:S,icon:g[o],price:w}},Br=e=>Fr.filter(i=>i.level<=e&&i.price),fe=(e,i,s=!1,r=0)=>{const o=(C[e.class??"warrior"].primaryStat==="strength"?e.attackPower:e.spellPower)??e.damage??0,d=e.strength??0,c=e.critChance??0;let x=s?r:o;x+=Math.floor(d*.5);const p=c/100,m=Math.random()<p;m&&(x*=2);const b=i.armor*.1;return{damage:Math.max(1,Math.floor(x-b)),critical:m}},Ar=e=>{const{damage:i,critical:s}=fe(e.player,e.monster),r=Math.max(0,e.monster.health-i),n=r===0,l={id:`${Date.now()}-player-attack`,message:s?`💥 Coup critique ! Vous infligez ${i} dégâts !`:`⚔️ Vous attaquez et infligez ${i} dégâts.`,type:s?"critical":"damage",timestamp:Date.now()};return{...e,monster:{...e.monster,health:r},turn:n?"player":"monster",status:n?"victory":"ongoing",battleLog:[...e.battleLog,l]}},Dr=e=>{const{damage:i,critical:s}=fe(e.monster,e.player,!1,0),r=e.playerDefending?Math.floor(i*.5):i,n=Math.max(0,e.player.health-r),l=n===0,o={id:`${Date.now()}-monster-attack`,message:s?`💀 ${e.monster.name} vous inflige un coup critique de ${r} dégâts !`:e.playerDefending?`🛡️ Vous bloquez partiellement ! ${e.monster.name} inflige ${r} dégâts.`:`🔴 ${e.monster.name} vous inflige ${r} dégâts.`,type:s?"critical":"damage",timestamp:Date.now()};return{...e,player:{...e.player,health:n},turn:l?"monster":"player",status:l?"defeat":"ongoing",playerDefending:!1,battleLog:[...e.battleLog,o]}},Er=e=>{const i={id:`${Date.now()}-player-defend`,message:"🛡️ Vous vous mettez en position défensive. Les dégâts du prochain tour seront réduits de 50%.",type:"info",timestamp:Date.now()};return{...e,playerDefending:!0,turn:"monster",battleLog:[...e.battleLog,i]}},Pr=e=>{if(Math.random()<.5){const r={id:`${Date.now()}-flee-success`,message:"🏃 Vous avez réussi à fuir le combat !",type:"info",timestamp:Date.now()};return{...e,status:"fled",battleLog:[...e.battleLog,r]}}else{const r={id:`${Date.now()}-flee-fail`,message:"❌ Vous n'avez pas réussi à fuir ! Le monstre vous rattrape.",type:"info",timestamp:Date.now()};return{...e,turn:"monster",battleLog:[...e.battleLog,r]}}},Sr=(e,i)=>{const s=Wt(i,e.player.level);if(e.player.mana<s){const f={id:`${Date.now()}-ability-nomana`,message:`❌ Pas assez de mana pour ${i.name} ! (${s} requis)`,type:"info",timestamp:Date.now()};return{...e,battleLog:[...e.battleLog,f]}}const r=C[e.player.class].primaryStat,n=ws(i,e.player.attackPower,e.player.spellPower,r),l=i.baseHeal?vs(i,e.player.spellPower):0,o=[];let d=e.player.health,c=e.monster.health;if(i.baseDamage&&n>0){const{damage:f,critical:m}=fe(e.player,e.monster,!0,n);c=Math.max(0,e.monster.health-f);const b=m?`${i.icon}💥 ${i.name} CRITIQUE ! ${f} dégâts !`:`${i.icon} ${i.name} inflige ${f} dégâts !`;o.push(b)}if(l>0){const f=Math.min(l,e.player.maxHealth-e.player.health);d=Math.min(e.player.maxHealth,e.player.health+f),o.push(`💚 Vous récupérez ${f} PV !`)}const x=c===0,p={id:`${Date.now()}-ability`,message:`${o.join(" ")} (-${s} mana)`,type:x?"victory":"damage",timestamp:Date.now()};return{...e,player:{...e.player,mana:e.player.mana-s,health:d},monster:{...e.monster,health:c},turn:x?"player":"monster",status:x?"victory":"ongoing",battleLog:[...e.battleLog,p]}},qr=(e,i)=>{const s=e.player.inventory||{potions:[]},r=ie.find(p=>p.id===i);if(!r){const p={id:`${Date.now()}-potion-not-found`,message:"❌ Potion introuvable !",type:"info",timestamp:Date.now()};return{...e,battleLog:[...e.battleLog,p]}}const{inventory:n,success:l}=Bt(s,i);if(!l){const p={id:`${Date.now()}-no-potion`,message:`❌ Vous n'avez pas de ${r.name} !`,type:"info",timestamp:Date.now()};return{...e,battleLog:[...e.battleLog,p]}}let o=e.player.health,d=e.player.mana,c="";if(r.type==="health"){const p=Ne(r,e.player.health,e.player.maxHealth);o=e.player.health+p,c=`💚 Vous utilisez ${r.name} et récupérez ${p} PV !`}else if(r.type==="mana"){const p=Ne(r,e.player.mana,e.player.maxMana);d=e.player.mana+p,c=`💙 Vous utilisez ${r.name} et récupérez ${p} MP !`}const x={id:`${Date.now()}-potion-used`,message:c,type:"heal",timestamp:Date.now()};return{...e,player:{...e.player,health:o,mana:d,inventory:n},turn:"monster",battleLog:[...e.battleLog,x]}},zr=(e,i)=>{const s=e.experienceReward,r=e.goldReward,l=i.experience+s>=i.experienceToNextLevel,o=l?i.level+1:i.level,d=Wr(e.level,i);return{experience:s,gold:r,levelUp:l,newLevel:o,loot:d||void 0}},Ir=(e,i)=>{const s={id:`${Date.now()}-start`,message:`⚔️ Un ${i.name} sauvage apparaît !`,type:"info",timestamp:Date.now()};return{player:e,monster:i,turn:"player",turnCount:1,playerDefending:!1,monsterDefending:!1,battleLog:[s],status:"ongoing"}},Rr=e=>{if(e.monster.abilities.length>0&&Math.random()<.3){const s=e.monster.abilities[Math.floor(Math.random()*e.monster.abilities.length)],{damage:r,critical:n}=fe(e.monster,e.player,!0,s.damage||e.monster.damage*1.5),l=e.playerDefending?Math.floor(r*.5):r,o=Math.max(0,e.player.health-l),d=o===0,c={id:`${Date.now()}-monster-ability`,message:n?`💀✨ ${e.monster.name} utilise ${s.name} ! Coup critique de ${l} dégâts !`:`✨ ${e.monster.name} utilise ${s.name} et inflige ${l} dégâts !`,type:n?"critical":"damage",timestamp:Date.now()};return{...e,player:{...e.player,health:o},turn:d?"monster":"player",status:d?"defeat":"ongoing",playerDefending:!1,turnCount:e.turnCount+1,battleLog:[...e.battleLog,c]}}else return{...Dr(e),turnCount:e.turnCount+1}};function Ge(e,i){let s=0,r=0,n=0;return e.length===4?(s=parseInt(e[1]+e[1],16),r=parseInt(e[2]+e[2],16),n=parseInt(e[3]+e[3],16)):e.length===7&&(s=parseInt(e.slice(1,3),16),r=parseInt(e.slice(3,5),16),n=parseInt(e.slice(5,7),16)),s=Math.min(255,Math.max(0,Math.round(s+i/100*255))),r=Math.min(255,Math.max(0,Math.round(r+i/100*255))),n=Math.min(255,Math.max(0,Math.round(n+i/100*255))),`rgb(${s},${r},${n})`}function we({color:e="#FFD700",size:i=48}){const s=Ge(e,-30),r=Ge(e,40);return t.jsxs("svg",{width:i,height:i,viewBox:"0 0 64 64",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("circle",{cx:"32",cy:"32",r:"28",fill:e,stroke:s,strokeWidth:"4",filter:"url(#glow)"}),t.jsx("ellipse",{cx:"32",cy:"32",rx:"22",ry:"22",fill:r,opacity:"0.15"}),t.jsx("ellipse",{cx:"40",cy:"24",rx:"8",ry:"4",fill:r,opacity:"0.5"}),t.jsx("ellipse",{cx:"24",cy:"44",rx:"6",ry:"2.5",fill:r,opacity:"0.3"}),t.jsx("defs",{children:t.jsx("filter",{id:"glow",x:"0",y:"0",width:"64",height:"64",filterUnits:"userSpaceOnUse",children:t.jsx("feGaussianBlur",{stdDeviation:"3",result:"blur"})})})]})}function U({amount:e}){const i=Math.floor(e/1e4),s=Math.floor(e%1e4/100),r=e%100;return t.jsxs("span",{style:{display:"flex",alignItems:"center",justifyContent:"flex-end",gap:"8px"},children:[i>0&&t.jsxs("span",{style:{color:"#FFD700",marginRight:"4px"},children:[me(i)," ",t.jsx(we,{color:"#FFD700",size:12})]}),s>0&&t.jsxs("span",{style:{color:"#C0C0C0",marginRight:"4px"},children:[s," ",t.jsx(we,{color:"#C0C0C0",size:12})]}),t.jsxs("span",{style:{color:"#CD7F32"},children:[r," ",t.jsx(we,{color:"#B87333",size:12})]})]})}const Tr=a.div`
    width: 100%;
    margin-bottom: 0.5rem;
`,Qr=a.div`
    display: flex;
    justify-content: space-between;
    font-size: 0.95rem;
    color: #aaa;
    margin-bottom: 0.2rem;
`,Cr=a.div`
    position: relative;
    width: 100%;
    height: 22px;
    background: rgba(0,0,0,0.4);
    border-radius: 999px;
    border: 2px solid #ffd700;
    overflow: hidden;
    box-shadow: inset 0 2px 4px rgba(0,0,0,0.3);
`,_r=a.div`
    height: 100%;
    width: ${({$percent:e})=>e}%;
    background: linear-gradient(90deg,#ffd700 0%,#ffed4e 50%,#ffd700 100%);
    transition: width 0.7s cubic-bezier(.4,2,.3,1);
    position: absolute;
    left: 0;
    top: 0;
    box-shadow: 0 0 10px rgba(255,215,0,0.5);
`,Hr=a.div`
    height: 100%;
    width: ${({$percent:e})=>e}%;
    background: linear-gradient(90deg,#22c55e 0%,#bbf7d0 100%);
    transition: width 0.7s cubic-bezier(.4,2,.3,1);
    position: absolute;
    left: ${({$offset:e})=>e}%;
    top: 0;
    box-shadow: 0 0 10px rgba(34,197,94,0.3);
`,Nr=a.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    font-weight: bold;
    color: #fff;
    text-shadow: 0 1px 2px rgba(0,0,0,0.8);
    font-size: 0.85rem;
    z-index: 1;
`,Zr=a.div`
    font-size: 0.9rem;
    color: #22c55e;
    margin-top: 0.2rem;
    font-weight: bold;
`;function Gr({character:e,battleState:i}){const s=e.level-3>i.monster.level?0:e.experience&&e.experienceToNextLevel?e.experience/e.experienceToNextLevel*100:0,r=i.rewards&&e.experienceToNextLevel?i.rewards.experience/e.experienceToNextLevel*100:0;return i.status==="victory"&&i.rewards?t.jsxs(Tr,{children:[t.jsxs(Qr,{children:[t.jsxs("span",{children:["Niveau ",i.rewards.levelUp&&i.rewards.newLevel?i.rewards.newLevel:e.level]}),t.jsxs("span",{children:[e.experience," / ",e.experienceToNextLevel," XP"]})]}),t.jsxs(Cr,{children:[t.jsx(_r,{$percent:s}),t.jsx(Hr,{$percent:e.level-3>i.monster.level?0:r,$offset:s}),t.jsxs(Nr,{children:[Math.max(0,Math.round(s+r)),"%"]})]}),t.jsxs(Zr,{children:["+",e.level-3>i.monster.level?0:i.rewards.experience," XP gagnés"]})]}):null}const ve=a.div`
  // min-height: calc(100vh - 92px);
  width: 100%;
  max-width: 1200px;
  background: 
    radial-gradient(ellipse at top, rgba(139, 0, 0, 0.3) 0%, transparent 50%),
    radial-gradient(ellipse at bottom, rgba(0, 0, 139, 0.3) 0%, transparent 50%),
    linear-gradient(180deg, rgba(10, 10, 20, 0.95) 0%, rgba(20, 10, 30, 0.98) 100%);
  padding: ${({theme:e})=>e.spacing.xl};
  border: ${({theme:e})=>e.borders.medium} solid ${({theme:e})=>e.colors.primary.gold};
  border-radius: ${({theme:e})=>e.borderRadius.lg};
  margin: ${({theme:e})=>e.spacing.xl};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      repeating-linear-gradient(
        0deg,
        transparent,
        transparent 2px,
        rgba(0, 0, 0, 0.03) 2px,
        rgba(0, 0, 0, 0.03) 4px
      );
    pointer-events: none;
  }
`,$e=a.div`
  // max-width: 900px;
  width: 100%;
  position: relative;
  z-index: 1;
`,Or=a.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({theme:e})=>e.spacing.xl};
  margin-bottom: ${({theme:e})=>e.spacing.xl};
  position: relative;

  @media (max-width: ${({theme:e})=>e.breakpoints.md}) {
    grid-template-columns: 1fr;
    gap: ${({theme:e})=>e.spacing.lg};
  }

  &::before {
    content: '⚔️';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 4rem;
    opacity: 0.1;
    z-index: 0;
    animation: pulse 2s ease-in-out infinite;

    @media (max-width: ${({theme:e})=>e.breakpoints.md}) {
      display: none;
    }
  }

  @keyframes pulse {
    0%, 100% { opacity: 0.05; transform: translate(-50%, -50%) scale(1); }
    50% { opacity: 0.15; transform: translate(-50%, -50%) scale(1.1); }
  }
`,Oe=a.div`
  background: ${({$isPlayer:e})=>e?"linear-gradient(135deg, rgba(65, 105, 225, 0.15) 0%, rgba(30, 58, 138, 0.25) 100%)":"linear-gradient(135deg, rgba(178, 34, 34, 0.15) 0%, rgba(127, 29, 29, 0.25) 100%)"};
  border: 2px solid ${({theme:e,$isPlayer:i})=>i?e.colors.alliance.blue:e.colors.horde.red};
  border-radius: ${({theme:e})=>e.borderRadius.lg};
  padding: ${({theme:e})=>e.spacing.lg};
  text-align: center;
  position: relative;
  overflow: visible;
  backdrop-filter: blur(10px);
  box-shadow: 
    0 8px 32px ${({$isPlayer:e})=>e?"rgba(65, 105, 225, 0.3)":"rgba(178, 34, 34, 0.3)"},
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(
      90deg,
      transparent,
      ${({theme:e,$isPlayer:i})=>i?e.colors.alliance.blue:e.colors.horde.red},
      transparent
    );
  }
  z-index: 1;
`,Ue=a.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  pointer-events: none;
  z-index: 100;
  width: 100%;
  height: 100%;
  overflow: visible;
`,Ve=a.div`
  position: absolute;
  top: 50%;
  left: ${({$type:e})=>{switch(e){case"damage":return"20%";case"critical":return"80%";case"heal":return"50%";default:return"50%"}}};
  font-weight: bold;
  text-shadow: 
    2px 2px 4px rgba(0, 0, 0, 0.9),
    -1px -1px 2px rgba(0, 0, 0, 0.9),
    1px -1px 2px rgba(0, 0, 0, 0.9),
    -1px 1px 2px rgba(0, 0, 0, 0.9);
  animation: floatUp 1.5s ease-out forwards;
  white-space: nowrap;

  font-size: ${({$type:e})=>{switch(e){case"critical":return"2.5rem";case"miss":return"1.8rem";default:return"2rem"}}};

  color: ${({$type:e})=>{switch(e){case"damage":return"#ff4444";case"heal":return"#44ff44";case"critical":return"#ffaa00";case"miss":return"#aaaaaa";case"effect":return"#88ccff";default:return"#ffffff"}}};

  @keyframes floatUp {
    0% {
      transform: translate(-50%, -50%) translateY(0) scale(0.5);
      opacity: 1;
    }
    50% {
      transform: translate(-50%, -50%) translateY(-60px) scale(1.2);
      opacity: 1;
    }
    100% {
      transform: translate(-50%, -50%) translateY(-120px) scale(1);
      opacity: 0;
    }
  }
`,Ur=a.div`
  font-size: ${({theme:e})=>e.fontSizes["6xl"]};
  margin-bottom: ${({theme:e})=>e.spacing.md};
  filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.5));
`,Vr=a.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: ${({theme:e})=>e.spacing.md};
`,Xe=a.h2`
  font-family: ${({theme:e})=>e.fonts.display};
  font-size: ${({theme:e})=>e.fontSizes["2xl"]};
  color: ${({theme:e})=>e.colors.primary.gold};
  margin-bottom: ${({theme:e})=>e.spacing.sm};
  text-shadow: 
    0 0 10px rgba(255, 215, 0, 0.5),
    2px 2px 4px rgba(0, 0, 0, 0.8);
  letter-spacing: 1px;
`,Ae=a.div`
  width: 100%;
  height: 32px;
  background: rgba(0, 0, 0, 0.6);
  border-radius: ${({theme:e})=>e.borderRadius.md};
  overflow: hidden;
  position: relative;
  margin-bottom: ${({theme:e})=>e.spacing.sm};
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.5);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 50%;
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.2) 0%,
      transparent 100%
    );
    pointer-events: none;
  }
`,Ye=a.div`
  height: 100%;
  width: ${({$percentage:e})=>e}%;
  background: linear-gradient(
    90deg,
    #dc2626 0%,
    #ef4444 50%,
    #f87171 100%
  );
  box-shadow: 
    0 0 10px rgba(239, 68, 68, 0.5),
    inset 0 1px 0 rgba(255, 255, 255, 0.3);
  transition: width 0.5s ease-out;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      90deg,
      transparent 0%,
      rgba(255, 255, 255, 0.3) 50%,
      transparent 100%
    );
    animation: shimmer 2s infinite;
  }

  @keyframes shimmer {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(100%); }
  }
`,De=a.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: ${({theme:e})=>e.fontWeights.bold};
  font-size: ${({theme:e})=>e.fontSizes.sm};
  text-shadow: 
    0 0 8px rgba(0, 0, 0, 1),
    1px 1px 2px rgba(0, 0, 0, 0.8);
  pointer-events: none;
  z-index: 2;
  letter-spacing: 0.5px;
`,Xr=a(Ae)`
  height: 24px;
`,Yr=a.div`
  height: 100%;
  width: ${({$percentage:e})=>e}%;
  background: linear-gradient(
    90deg,
    #1e3a8a 0%,
    #3b82f6 50%,
    #60a5fa 100%
  );
  box-shadow: 
    0 0 10px rgba(59, 130, 246, 0.5),
    inset 0 1px 0 rgba(255, 255, 255, 0.3);
  transition: width 0.5s ease-out;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      90deg,
      transparent 0%,
      rgba(255, 255, 255, 0.3) 50%,
      transparent 100%
    );
    animation: shimmer 2s infinite;
  }
`,Jr=a(De)`
  font-size: ${({theme:e})=>e.fontSizes.xs};
`,Kr=a.div`
  margin-bottom: ${({theme:e})=>e.spacing.xl};
  background: linear-gradient(
    135deg,
    rgba(0, 0, 0, 0.4) 0%,
    rgba(0, 0, 0, 0.2) 100%
  );
  border: 2px solid rgba(255, 215, 0, 0.3);
  border-radius: ${({theme:e})=>e.borderRadius.lg};
  padding: ${({theme:e})=>e.spacing.lg};
  backdrop-filter: blur(10px);
  box-shadow: 
    0 8px 32px rgba(0, 0, 0, 0.5),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
`,en=a.h3`
  font-family: ${({theme:e})=>e.fonts.display};
  color: ${({theme:e})=>e.colors.primary.gold};
  margin-bottom: ${({theme:e})=>e.spacing.md};
  font-size: ${({theme:e})=>e.fontSizes.xl};
  text-shadow: 0 0 10px rgba(255, 215, 0, 0.5);
  letter-spacing: 1px;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing.sm};

  &::before,
  &::after {
    content: '';
    flex: 1;
    height: 2px;
    background: linear-gradient(
      90deg,
      transparent,
      ${({theme:e})=>e.colors.primary.gold},
      transparent
    );
  }
`,ee=a.button`
  width: 64px;
  height: 64px;
  border-radius: ${({theme:e})=>e.borderRadius.md};
  border: 2px solid;
  font-size: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: ${({$disabled:e})=>e?"not-allowed":"pointer"};
  opacity: ${({$disabled:e})=>e?.4:1};
  position: relative;
  transition: all 0.2s ease;
  padding: 0;
  overflow: hidden;
  
  background: ${({$variant:e})=>{switch(e){case"primary":return"linear-gradient(135deg, rgba(255, 215, 0, 0.2) 0%, rgba(184, 134, 11, 0.3) 100%)";case"secondary":return"linear-gradient(135deg, rgba(59, 130, 246, 0.2) 0%, rgba(37, 99, 235, 0.3) 100%)";case"danger":return"linear-gradient(135deg, rgba(239, 68, 68, 0.2) 0%, rgba(220, 38, 38, 0.3) 100%)";default:return"linear-gradient(135deg, rgba(100, 116, 139, 0.2) 0%, rgba(71, 85, 105, 0.3) 100%)"}}};
  
  border-color: ${({$variant:e,theme:i})=>{switch(e){case"primary":return i.colors.primary.gold;case"secondary":return i.colors.alliance.blue;case"danger":return i.colors.horde.red;default:return i.colors.neutral.silver}}};
  
  box-shadow: 
    0 4px 8px rgba(0, 0, 0, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
  

  
  &:active:not(:disabled) {
    transform: translateY(-2px);
  }
`,le=a.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: ${({theme:e})=>e.borderRadius.sm};
`,Je=a.span`
  font-size: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
`,Ke=a.div`
  background: linear-gradient(
    135deg,
    rgba(0, 0, 0, 0.6) 0%,
    rgba(0, 0, 0, 0.4) 100%
  );
  border: 2px solid ${({theme:e})=>e.colors.winter.darkIce};
  border-radius: ${({theme:e})=>e.borderRadius.lg};
  padding: ${({theme:e})=>e.spacing.lg};
  max-height: 250px;
  overflow-y: auto;
  backdrop-filter: blur(10px);
  box-shadow: 
    inset 0 2px 4px rgba(0, 0, 0, 0.5),
    0 4px 16px rgba(0, 0, 0, 0.3);

  /* Scrollbar styling */
  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, 0.3);
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background: ${({theme:e})=>e.colors.primary.gold};
    border-radius: 4px;
    
    &:hover {
      background: ${({theme:e})=>e.colors.primary.bronze};
    }
  }
`,et=a.h3`
  color: ${({theme:e})=>e.colors.primary.gold};
  font-size: ${({theme:e})=>e.fontSizes.lg};
  margin-bottom: ${({theme:e})=>e.spacing.md};
  font-weight: ${({theme:e})=>e.fontWeights.bold};
  text-shadow: 0 0 10px rgba(255, 215, 0, 0.5);
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing.sm};
`,tt=a.div`
  padding: ${({theme:e})=>e.spacing.sm} ${({theme:e})=>e.spacing.md};
  margin-bottom: ${({theme:e})=>e.spacing.sm};
  border-radius: ${({theme:e})=>e.borderRadius.sm};
  font-size: ${({theme:e})=>e.fontSizes.sm};
  border-left: 3px solid;
  background: ${({$type:e})=>{switch(e){case"critical":return"rgba(239, 68, 68, 0.25)";case"damage":return"rgba(251, 191, 36, 0.25)";case"heal":return"rgba(34, 197, 94, 0.25)";case"victory":return"rgba(34, 197, 94, 0.35)";case"defeat":return"rgba(239, 68, 68, 0.35)";default:return"rgba(100, 116, 139, 0.15)"}}};
  border-left-color: ${({$type:e})=>{switch(e){case"critical":return"#ef4444";case"damage":return"#fbbf24";case"heal":return"#22c55e";case"victory":return"#22c55e";case"defeat":return"#ef4444";default:return"#64748b"}}};
  color: ${({theme:e})=>e.colors.neutral.white};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  animation: slideIn 0.3s ease-out;

  @keyframes slideIn {
    from {
      opacity: 0;
      transform: translateX(-10px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
`,it=a.div`
  background: linear-gradient(
    135deg,
    rgba(34, 197, 94, 0.2) 0%,
    rgba(22, 163, 74, 0.3) 100%
  );
  border: 3px solid ${({theme:e})=>e.colors.status.success};
  border-radius: ${({theme:e})=>e.borderRadius.lg};
  padding: ${({theme:e})=>e.spacing.xl};
  text-align: center;
  backdrop-filter: blur(10px);
  box-shadow: 
    0 0 40px rgba(34, 197, 94, 0.4),
    inset 0 1px 0 rgba(255, 255, 255, 0.2);
  position: relative;
  overflow: hidden;
  height: 70vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: ${({theme:e})=>e.spacing.lg};

  &::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(
      circle,
      rgba(34, 197, 94, 0.1) 0%,
      transparent 70%
    );
    animation: rotate 20s linear infinite;
  }

  @keyframes rotate {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
`,st=a.h2`
  font-family: ${({theme:e})=>e.fonts.display};
  font-size: ${({theme:e})=>e.fontSizes["4xl"]};
  color: ${({theme:e})=>e.colors.status.success};
  margin-bottom: ${({theme:e})=>e.spacing.lg};
  text-shadow: 
    0 0 20px rgba(34, 197, 94, 0.8),
    0 0 40px rgba(34, 197, 94, 0.5),
    2px 2px 4px rgba(0, 0, 0, 0.8);
  animation: glow 2s ease-in-out infinite;
  position: relative;
  z-index: 1;

  @keyframes glow {
    0%, 100% { text-shadow: 0 0 20px rgba(34, 197, 94, 0.8), 2px 2px 4px rgba(0, 0, 0, 0.8); }
    50% { text-shadow: 0 0 30px rgba(34, 197, 94, 1), 0 0 50px rgba(34, 197, 94, 0.7), 2px 2px 4px rgba(0, 0, 0, 0.8); }
  }
`,rt=a.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing.md};
  margin-bottom: ${({theme:e})=>e.spacing.xl};
  position: relative;
  z-index: 1;
`,te=a.div`
  font-size: ${({theme:e})=>e.fontSizes.xl};
  color: ${({theme:e})=>e.colors.primary.gold};
  font-weight: ${({theme:e})=>e.fontWeights.bold};
  text-shadow: 
    0 0 10px rgba(255, 215, 0, 0.5),
    2px 2px 4px rgba(0, 0, 0, 0.8);
  padding: ${({theme:e})=>e.spacing.sm};
  background: rgba(0, 0, 0, 0.3);
  border-radius: ${({theme:e})=>e.borderRadius.md};
  border: 1px solid rgba(255, 215, 0, 0.3);
  animation: slideInUp 0.5s ease-out backwards;

  &:nth-child(1) { animation-delay: 0.1s; }
  &:nth-child(2) { animation-delay: 0.2s; }
  &:nth-child(3) { animation-delay: 0.3s; }
  &:nth-child(4) { animation-delay: 0.4s; }

  @keyframes slideInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`,tn=a(te)`
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
gap: ${({theme:e})=>e.spacing.sm};
`;function sn({character:e,monsterLevel:i,onBattleEnd:s,onExit:r}){const[n,l]=u.useState(()=>{const h=ys(typeof i=="number"?i:e.level);return Ir(e,h)}),[o,d]=u.useState([]),[c,x]=u.useState(!1),p=u.useCallback((h,j,v)=>{const M=Date.now(),V={id:M,text:h,type:j,target:v};d(X=>[...X,V]),setTimeout(()=>{d(X=>X.filter(se=>se.id!==M))},1500)},[]),f=ks(e.class,e.level);u.useEffect(()=>{if(!n.battleLog||n.battleLog.length===0)return;const h=n.battleLog[n.battleLog.length-1];if(!h)return;const j=h.message.match(/(\d+) dégâts/i),v=h.message.match(/(?:récupère|soigne|restaure) (\d+)/i),M=h.message.match(/critique/i),V=h.message.match(/esquive|raté|manque/i),X=h.message.match(/défense|défend/i),se=h.message.match(/Vous (attaquez|infligez|utilisez)/i)||h.message.match(/inflige \d+ dégâts ! \(-\d+ mana\)/i)||h.message.match(/CRITIQUE.*\(-\d+ mana\)/i);if(V)p("Esquivé !","miss",se?"monster":"player");else if(X&&!j)p("Défense +","effect","player");else if(v){const Y=v[1];p(`+${Y}`,"heal","player")}else if(j){const Y=j[1],Pt=se?"monster":"player",St=M?"critical":"damage",qt=M?`${Y} !!!`:Y;p(qt,St,Pt)}},[n.battleLog,p]),u.useEffect(()=>{if(n.turn==="monster"&&n.status==="ongoing"){const h=setTimeout(()=>{l(j=>(x(!1),Rr(j)))},500);return()=>clearTimeout(h)}},[n.turn,n.status]);const m=h=>{n.turn==="player"&&n.status==="ongoing"&&!c&&(x(!0),l(()=>h()))},b=()=>m(()=>Ar(n)),g=h=>m(()=>Sr(n,h)),$=()=>m(()=>Er(n)),A=()=>m(()=>Pr(n)),B=h=>m(()=>qr(n,h)),S=()=>{if(n.status==="victory"&&n.rewards){console.log(e.level,n.monster.level),console.log(e.level-3>n.monster.level),e.level-3>n.monster.level&&(n.rewards.experience=0);const h=(e.experience||0)+n.rewards.experience,j={...e,experience:n.rewards.levelUp?h-ue(e.level):h,gold:(e.gold||0)+n.rewards.gold,level:n.rewards.levelUp?e.level+1:e.level,health:n.rewards.levelUp?n.player.maxHealth:n.player.health,mana:n.rewards.levelUp?n.player.maxMana:n.player.mana,inventory:n.player.inventory,defeatedMonsters:e.defeatedMonsters+1,experienceToNextLevel:ue(n.rewards.newLevel)};if(n.rewards.levelUp){const v=Be(j);j.health=v.maxHealth,j.mana=v.maxMana}s(j,n.rewards.loot)}else r()};u.useEffect(()=>{if(n.status==="victory"&&!n.rewards){const h=zr(n.monster,n.player);l(j=>({...j,rewards:h}))}},[n.status,n.monster,n.player,n.rewards]);const y=n.player.health/n.player.maxHealth*100,w=n.player.mana/n.player.maxMana*100,k=n.monster.health/n.monster.maxHealth*100;return u.useEffect(()=>{const h=["é",'"',"'","(","-","è"],j=v=>{console.log(v.key),v.key==="&"&&b(),f.forEach((M,V)=>{v.key===h[V]&&g(M)})};return window.addEventListener("keydown",j),()=>{window.removeEventListener("keydown",j)}},[b,g,f]),n.status==="victory"&&n.rewards?t.jsx(ve,{children:t.jsx($e,{children:t.jsxs(it,{children:[t.jsxs(rt,{children:[t.jsx(st,{children:"🎉 Victoire ! 🎉"}),t.jsx(te,{children:t.jsx(Gr,{character:e,battleState:n})}),t.jsxs(tn,{children:["Tu as récupéré : ",t.jsx(U,{amount:n.rewards.gold})]}),n.rewards.loot&&t.jsxs(te,{children:["Tu as ramassé : "," ",t.jsxs("span",{style:{color:`${n.rewards.loot.quality==="poor"?"#9d9d9d":n.rewards.loot.quality==="common"?"#ffffff":n.rewards.loot.quality==="uncommon"?"#1eff00":n.rewards.loot.quality==="rare"?"#0070dd":n.rewards.loot.quality==="epic"?"#a335ee":"#ff8000"}`,fontWeight:"bold",fontSize:"1.1rem"},children:[n.rewards.loot.icon," ",n.rewards.loot.name]})]}),n.rewards.levelUp&&t.jsxs(te,{children:["🎊 NIVEAU SUPÉRIEUR ! Niveau ",n.rewards.newLevel," 🎊"]})]}),t.jsx(F,{onClick:S,children:"Continuer"})]})})}):n.status==="defeat"||n.status==="fled"?t.jsx(ve,{children:t.jsx($e,{children:t.jsxs(it,{style:{background:"rgba(239, 68, 68, 0.2)",borderColor:"#ef4444"},children:[t.jsx(st,{style:{color:"#ef4444"},children:n.status==="defeat"?"💀 Défaite":"🏃 Vous avez fui"}),t.jsx(rt,{children:t.jsx(te,{style:{color:"#ef4444"},children:n.status==="defeat"?"Vous avez été vaincu...":"Vous avez échappé au combat"})}),t.jsxs(Ke,{children:[t.jsx(et,{children:"📜 Journal de Combat"}),[...n.battleLog].reverse().map(h=>t.jsx(tt,{$type:h.type,children:h.message},h.id))]}),t.jsx(F,{onClick:S,children:"Retour"})]})})}):t.jsx(ve,{children:t.jsxs($e,{children:[t.jsxs(Or,{children:[t.jsxs(Oe,{$isPlayer:!0,children:[t.jsx(Xe,{children:n.player.name}),t.jsx(Ur,{children:"⚔️"}),t.jsxs(Ae,{children:[t.jsx(Ye,{$percentage:y}),t.jsxs(De,{children:[Math.floor(n.player.health/10)," / ",Math.floor(n.player.maxHealth/10)]})]}),t.jsxs(Xr,{children:[t.jsx(Yr,{$percentage:w}),t.jsxs(Jr,{children:[n.player.mana," / ",n.player.maxMana]})]}),t.jsx(Ue,{children:o.filter(h=>h.target==="player").map(h=>t.jsx(Ve,{$type:h.type,children:me(Math.floor(parseInt(h.text)/10))},h.id))})]}),t.jsxs(Oe,{children:[t.jsx(Xe,{children:n.monster.name.replace(/\s*\(Niv\.\s*\d+\)/,"")}),t.jsx(Vr,{children:t.jsx(Dt,{monster:n.monster,level:n.monster.level,size:80})}),t.jsxs(Ae,{children:[t.jsx(Ye,{$percentage:k}),t.jsxs(De,{children:[n.monster.health," / ",n.monster.maxHealth]})]}),t.jsx(Ue,{children:o.filter(h=>h.target==="monster").map(h=>t.jsx(Ve,{$type:h.type,children:me(parseInt(h.text))},h.id))})]})]}),t.jsxs(Kr,{children:[t.jsx(en,{children:"Actions & Potions"}),t.jsxs("div",{style:{display:"flex",width:"100%",justifyContent:"space-between",alignItems:"center",gap:"2rem"},children:[t.jsxs("div",{style:{display:"flex",gap:"1.5rem",flexWrap:"wrap",alignItems:"center"},children:[t.jsx(ee,{onClick:b,disabled:n.turn!=="player"||c,$disabled:n.turn!=="player"||c,$variant:"primary",style:{boxShadow:"none"},children:t.jsx(le,{src:je.attack,alt:"Attaquer"})}),f.map(h=>{const j=Wt(h,e.level),v=n.turn==="player"&&n.player.mana>=j&&!c,M=$s(h);return t.jsx(ee,{onClick:()=>g(h),disabled:!v,$disabled:!v,$variant:"primary",style:{boxShadow:"none"},children:M?t.jsx(le,{src:M,alt:h.name}):t.jsx(Je,{children:h.icon})},h.id)}),t.jsx(ee,{onClick:$,disabled:n.turn!=="player"||c,$disabled:n.turn!=="player"||c,$variant:"secondary",style:{boxShadow:"none"},children:t.jsx(le,{src:je.defend,alt:"Défendre"})}),t.jsx(ee,{onClick:A,disabled:n.turn!=="player"||c,$disabled:n.turn!=="player"||c,$variant:"danger",style:{boxShadow:"none"},children:t.jsx(le,{src:je.flee,alt:"Fuir"})})]}),t.jsx("div",{style:{display:"flex",gap:"1.5rem",flexWrap:"wrap",alignItems:"center"},children:n.player.inventory&&n.player.inventory.potions.length>0&&n.player.inventory.potions.map(h=>{const j=ie.find(M=>M.id===h.potionId);if(!j||h.quantity<=0)return null;const v=n.turn==="player"&&!c;return t.jsx(ee,{onClick:()=>B(h.potionId),disabled:!v,$disabled:!v,$variant:j.type==="health"?"danger":"secondary",style:{boxShadow:"none"},children:t.jsx(Je,{children:j.icon})},h.potionId)})})]})]}),t.jsxs(Ke,{children:[t.jsx(et,{children:"📜 Journal de Combat"}),[...n.battleLog].reverse().map(h=>t.jsx(tt,{$type:h.type,children:h.message},h.id))]})]})})}const rn=a.div`
  max-width: 1200px;
  width: 100%;
  background: linear-gradient(
    135deg,
    rgba(30, 58, 95, 0.8),
    rgba(26, 31, 46, 0.9)
  );
  border: ${({theme:e})=>e.borders.medium} solid ${({theme:e})=>e.colors.primary.gold};
  border-radius: ${({theme:e})=>e.borderRadius.lg};
  padding: ${({theme:e})=>e.spacing.xl};
  box-shadow: ${({theme:e})=>e.shadows.xl};
`,nn=a.div`
  text-align: center;
  margin-bottom: ${({theme:e})=>e.spacing.xl};
`,an=a.h2`
  font-family: ${({theme:e})=>e.fonts.display};
  font-size: ${({theme:e})=>e.fontSizes["3xl"]};
  color: ${({theme:e})=>e.colors.primary.gold};
  margin-bottom: ${({theme:e})=>e.spacing.sm};
`,ln=a.div`
  font-size: ${({theme:e})=>e.fontSizes.xl};
  color: ${({theme:e})=>e.colors.winter.iceBlue};
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: ${({theme:e})=>e.spacing.md};

  
  span {
    color: ${({theme:e})=>e.colors.primary.gold};
    font-weight: ${({theme:e})=>e.fontWeights.bold};
  }
`,oe=a.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing.md};
  margin-bottom: ${({theme:e})=>e.spacing.xl};
  justify-content: center;
`,L=a.button`
  padding: ${({theme:e})=>e.spacing.sm} ${({theme:e})=>e.spacing.md};
  background: ${({$active:e,theme:i})=>e?`linear-gradient(135deg, ${i.colors.primary.gold}, ${i.colors.primary.bronze})`:"rgba(0, 0, 0, 0.3)"};
  color: ${({theme:e})=>e.colors.neutral.white};
  border: ${({theme:e})=>e.borders.thin} solid ${({theme:e})=>e.colors.primary.gold};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  font-family: ${({theme:e})=>e.fonts.secondary};
  font-size: ${({theme:e})=>e.fontSizes.sm};
  font-weight: ${({theme:e})=>e.fontWeights.semibold};
  cursor: pointer;
  transition: all ${({theme:e})=>e.transitions.base};
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: ${({theme:e})=>e.shadows.glow.gold};
  }
`,nt=a.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: ${({theme:e})=>e.spacing.lg};
  margin-bottom: ${({theme:e})=>e.spacing.xl};
`,at=a.div`
  background: rgba(0, 0, 0, 0.4);
  border: ${({theme:e})=>e.borders.medium} solid
    ${({$affordable:e,theme:i})=>e?i.colors.primary.gold:i.colors.neutral.lightGray};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  padding: ${({theme:e})=>e.spacing.lg};
  opacity: ${({$affordable:e})=>e?1:.6};
`,lt=a.div`
  display: flex;
  align-items: flex-start;
  gap: ${({theme:e})=>e.spacing.md};
  margin-bottom: ${({theme:e})=>e.spacing.md};
`,ot=a.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing.xxs};
`,ct=a.h3`
  font-family: ${({theme:e})=>e.fonts.secondary};
  font-size: ${({theme:e})=>e.fontSizes.lg};
  color: ${({theme:e})=>e.colors.primary.gold};
  margin-bottom: ${({theme:e})=>e.spacing.xs};
`,Le=a.div`
  font-size: ${({theme:e})=>e.fontSizes.xs};
  line-height: 1;
  color: ${({theme:e})=>e.colors.neutral.silver};
`,on=a.div`
  font-size: ${({theme:e})=>e.fontSizes.xs};
  color: ${({theme:e})=>e.colors.winter.iceBlue};
`,cn=a.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing.sm};
`,dn=a.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing.md};
  align-items: center;
  margin-top: ${({theme:e})=>e.spacing.md};
`,dt=a.button`
  width: 32px;
  height: 32px;
  background: ${({theme:e})=>e.colors.primary.gold};
  color: ${({theme:e})=>e.colors.neutral.black};
  border: none;
  border-radius: ${({theme:e})=>e.borderRadius.sm};
  font-size: ${({theme:e})=>e.fontSizes.lg};
  font-weight: ${({theme:e})=>e.fontWeights.bold};
  cursor: pointer;
  transition: all ${({theme:e})=>e.transitions.base};
  
  &:hover {
    transform: scale(1.1);
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none;
  }
`,xn=a.div`
  flex: 1;
  text-align: center;
  font-size: ${({theme:e})=>e.fontSizes.xl};
  color: ${({theme:e})=>e.colors.neutral.white};
  font-weight: ${({theme:e})=>e.fontWeights.bold};
`;function hn({character:e,onPurchase:i}){const[s,r]=u.useState("potions"),[n,l]=u.useState("all"),[o,d]=u.useState("all"),[c,x]=u.useState("all"),[p,f]=u.useState({}),m=Ls(e.level,n==="all"?void 0:n),g=Br(e.level).filter(y=>{if(o!=="all"&&y.slot!==o||c==="available"&&y.level>e.level)return!1;if(c==="current"){const w=Math.max(1,e.level-5),k=e.level+5;if(y.level<w||y.level>k)return!1}return!0}),$=y=>p[y]||1,A=(y,w)=>{f(k=>({...k,[y]:Math.max(1,w)}))},B=y=>{const w=$(y.id),k=y.price*w;if(e.gold<k)return;const h=e.inventory||{potions:[]},j=Ms(h,y.id,w),v={...e,gold:e.gold-k,inventory:j};i(v),f(M=>({...M,[y.id]:1}))},S=y=>{const w=y.price||0;if(e.gold<w||e.level<y.level)return;const k=e.bagItems||[];k.push({itemId:y.id,item:y});const h={...e,gold:e.gold-w,bagItems:k};i(h)};return t.jsxs(rn,{children:[t.jsxs(nn,{children:[t.jsx(an,{children:"🏪 Boutique"}),t.jsxs(ln,{children:["Votre or : ",t.jsx(U,{amount:e.gold})]})]}),t.jsxs(oe,{children:[t.jsx(L,{$active:s==="potions",onClick:()=>r("potions"),children:"🧪 Potions"}),t.jsx(L,{$active:s==="equipment",onClick:()=>r("equipment"),children:"⚔️ Équipement"})]}),s==="potions"&&t.jsxs(t.Fragment,{children:[t.jsxs(oe,{children:[t.jsx(L,{$active:n==="all",onClick:()=>l("all"),children:"Toutes"}),t.jsx(L,{$active:n==="health",onClick:()=>l("health"),children:"❤️ Vie"}),t.jsx(L,{$active:n==="mana",onClick:()=>l("mana"),children:"💙 Mana"})]}),t.jsx(nt,{children:m.map(y=>{const w=$(y.id),k=y.price*w,h=e.gold>=k;return t.jsxs(at,{$affordable:h,children:[t.jsxs(lt,{children:[t.jsx(At,{potion:y,size:64}),t.jsxs(ot,{children:[t.jsx(ct,{children:y.name}),t.jsx(Le,{children:y.description})]})]}),t.jsxs(dn,{children:[t.jsxs(cn,{children:[t.jsx(dt,{onClick:()=>A(y.id,w-1),disabled:w<=1,children:"-"}),t.jsx(xn,{children:w}),t.jsx(dt,{onClick:()=>A(y.id,w+1),disabled:k>=e.gold&&w>0,children:"+"})]}),t.jsx(F,{onClick:()=>B(y),disabled:!h,$size:"small",$variant:"secondary",children:h?t.jsx(U,{amount:k}):"Trop cher"})]})]},y.id)})})]}),s==="equipment"&&t.jsxs(t.Fragment,{children:[t.jsxs(oe,{children:[t.jsx(L,{$active:o==="all",onClick:()=>d("all"),children:"Tous"}),t.jsx(L,{$active:o==="weapon",onClick:()=>d("weapon"),children:"⚔️ Arme"}),t.jsx(L,{$active:o==="head",onClick:()=>d("head"),children:"🪖 Tête"}),t.jsx(L,{$active:o==="chest",onClick:()=>d("chest"),children:"🛡️ Torse"}),t.jsx(L,{$active:o==="legs",onClick:()=>d("legs"),children:"👖 Jambes"}),t.jsx(L,{$active:o==="boots",onClick:()=>d("boots"),children:"👢 Bottes"}),t.jsx(L,{$active:o==="jewelry",onClick:()=>d("jewelry"),children:"💍 Bijoux"})]}),t.jsxs(oe,{children:[t.jsx(L,{$active:c==="all",onClick:()=>x("all"),children:"Tous niveaux"}),t.jsx(L,{$active:c==="available",onClick:()=>x("available"),children:"✅ Équipables"}),t.jsx(L,{$active:c==="current",onClick:()=>x("current"),children:"📊 ±5 niveaux"})]}),t.jsx(nt,{children:g.map(y=>{const w=e.gold>=(y.price||0),k=e.level>=y.level;return t.jsxs(at,{$affordable:w&&k,children:[t.jsxs(lt,{children:[t.jsx(qe,{itemType:y.slot,itemName:y.name,quality:y.quality,size:56}),t.jsx(ot,{children:t.jsx(ct,{style:{color:Ze[y.quality]},children:y.name})})]}),t.jsx(Le,{style:{color:Ze[y.quality]},children:Mr[y.quality]}),t.jsx(Le,{children:Object.entries(y.stats).map(([h,j])=>t.jsxs("div",{children:["+",j," ",h==="attackPower"?"Puissance":h==="spellPower"?"Magie":h==="critChance"?"Crit":h==="strength"?"Force":h==="agility"?"Agilité":h==="intellect"?"Intelligence":h==="stamina"?"Endurance":h==="armor"?"Armure":h]},h))}),t.jsxs(on,{children:["Niveau ",y.level]}),t.jsx(F,{onClick:()=>S(y),disabled:!w||!k,$fullWidth:!0,$size:"small",$variant:"primary",children:k?w?`${y.price} 💰`:"Trop cher":`Niveau ${y.level} requis`})]},y.id)})})]})]})}function Et(){const{showTooltip:e,hideTooltip:i}=Mt();return{showItemTooltip:(r,n)=>{const l={title:r.name,stats:r.stats,quality:r.quality,level:r.level,equiped:r.equiped??void 0};e(l,{x:n.clientX,y:n.clientY})},hideTooltip:i}}function Ee(e){const i={};return e.forEach(s=>{i[s.item.id]={...s,item:{id:s.item.id,name:s.item.name,slot:s.item.slot,quality:s.item.quality,level:s.item.level,stats:s.item.stats,icon:s.item.icon,price:s.item.price,dropRate:s.item.dropRate||0}}}),Object.values(i)}const pn=a.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: ${({theme:e})=>e.spacing.md};

  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }
`,un=a.div`
  background: rgba(0, 0, 0, 0.3);
  border: 2px solid rgba(255, 215, 0, 0.3);
  border-radius: ${({theme:e})=>e.borderRadius.md};
  padding: ${({theme:e})=>e.spacing.xs};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
`,mn=a.div`
  color: ${({theme:e})=>e.colors.text.secondary};
  font-size: ${({theme:e})=>e.fontSizes.xs};
  margin-bottom: ${({theme:e})=>e.spacing.xs};
  text-transform: uppercase;
  text-align: center;
`,gn=a.div`
  cursor: pointer;
`,fn=a.div`
  color: ${({theme:e})=>e.colors.text.secondary};
  font-style: italic;
  font-size: ${({theme:e})=>e.fontSizes.sm};
  text-align: center;
`;function yn(){const{character:e,updateCharacter:i}=W(),{showItemTooltip:s,hideTooltip:r}=Et(),[n,l]=u.useState({});if(u.useEffect(()=>{e&&l(e.equipment||{})},[e]),!e)return null;const o=d=>{if(!e.equipment||!e.equipment[d])return;const c=e.equipment[d];let x=[...e.bagItems||[],{itemId:c.id,item:c}];const p={...e.equipment};delete p[d],x=Ee(x),i({...e,equipment:p,bagItems:x})};return t.jsxs(ze,{style:{marginBottom:"1.5rem"},children:[t.jsx(ye,{children:"⚔️ Équipement"}),t.jsx(pn,{children:["weapon","head","chest","legs","boots","jewelry"].map(d=>{const c={weapon:"⚔️ Arme",head:"🪖 Tête",chest:"👕 Torse",legs:"👖 Jambes",boots:"👢 Bottes",jewelry:"💍 Bijou"},x=n?.[d];return t.jsxs(un,{children:[t.jsx(mn,{children:c[d]}),x?t.jsx(gn,{onClick:()=>o(d),onMouseEnter:p=>s(x,p),onMouseLeave:r,children:t.jsx(qe,{itemType:d,itemName:x.name,quality:x.quality,size:52})}):t.jsx(fn,{children:"Vide"})]},d)})})]})}const bn=a.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: ${({theme:e})=>e.spacing.md};
`,D=a.div`
  display: flex;
  justify-content: space-between;
  padding: ${({theme:e})=>e.spacing.xs};
  background: rgba(0, 0, 0, 0.3);
  border-radius: ${({theme:e})=>e.borderRadius.md};
  border-left: 3px solid ${({theme:e})=>e.colors.primary.gold};
`,E=a.span`
  color: ${({theme:e})=>e.colors.text.secondary};
  font-size: ${({theme:e})=>e.fontSizes.sm};
`,P=a.span`
  color: ${({theme:e})=>e.colors.primary.gold};
  font-weight: ${({theme:e})=>e.fontWeights.bold};
  font-size: ${({theme:e})=>e.fontSizes.base};
`;function jn(){const{character:e}=W();return e?t.jsxs(ze,{children:[t.jsx(ye,{children:"📊 Statistiques"}),t.jsxs(bn,{children:[t.jsxs(D,{children:[t.jsx(E,{children:"❤️ Vie"}),t.jsxs(P,{children:[Math.floor(e.health/10)," / ",Math.floor(e.maxHealth/10)]})]}),t.jsxs(D,{children:[t.jsx(E,{children:"💙 Mana"}),t.jsxs(P,{children:[e.mana," / ",e.maxMana]})]}),t.jsxs(D,{children:[t.jsx(E,{children:"💰 Or"}),t.jsx(P,{children:t.jsx(U,{amount:e.gold})})]}),t.jsxs(D,{children:[t.jsx(E,{children:"⚔️ Puissance d'attaque"}),t.jsx(P,{children:e.attackPower})]}),t.jsxs(D,{children:[t.jsx(E,{children:"🔮 Puissance magique"}),t.jsx(P,{children:e.spellPower})]}),t.jsxs(D,{children:[t.jsx(E,{children:"🛡️ Armure"}),t.jsx(P,{children:e.armor})]}),t.jsxs(D,{children:[t.jsx(E,{children:"💪 Force"}),t.jsx(P,{children:e.strength})]}),t.jsxs(D,{children:[t.jsx(E,{children:"🎯 Agilité"}),t.jsx(P,{children:e.agility})]}),t.jsxs(D,{children:[t.jsx(E,{children:"🧠 Intelligence"}),t.jsx(P,{children:e.intellect})]}),t.jsxs(D,{children:[t.jsx(E,{children:"💚 Endurance"}),t.jsx(P,{children:e.stamina})]}),t.jsxs(D,{children:[t.jsx(E,{children:"⚡ Critique"}),t.jsxs(P,{children:[e.critChance.toFixed(1),"%"]})]})]})]}):null}const kn=e=>({minor:"poor",lesser:"common",normal:"common",greater:"uncommon",superior:"rare",ultimate:"epic"})[e],wn=a.div`
  margin-bottom: ${({theme:e})=>e.spacing.xl};
`,vn=a.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(80px, 1fr));
  gap: ${({theme:e})=>e.spacing.md};
`,$n=a.div`
  background: rgba(0, 0, 0, 0.3);
  border: 2px solid ${({theme:e})=>e.colors.primary.gold};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  padding: ${({theme:e})=>e.spacing.sm};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({theme:e})=>e.spacing.xs};
  cursor: pointer;
  transition: all 0.2s;
  position: relative;
`,Ln=a.div`
  color: ${({theme:e})=>e.colors.primary.gold};
  font-size: ${({theme:e})=>e.fontSizes.base};
  font-weight: ${({theme:e})=>e.fontWeights.bold};
  text-align: center;
`,Mn=a.div`
  color: ${({theme:e})=>e.colors.text.secondary};
  font-style: italic;
  font-size: ${({theme:e})=>e.fontSizes.sm};
  text-align: center;
`;function Fn(){const{character:e,updateCharacter:i}=W(),{showTooltip:s,hideTooltip:r}=Mt();if(!e)return null;const n=l=>{if(!e.inventory)return;const o=ie.find(b=>b.id===l);if(!o)return;const d=Bt(e.inventory,l);if(!d.success){alert("Impossible d'utiliser cette potion !");return}let c=e.health||0,x=e.mana||0;const p=e.buffs||[],f=b=>{switch(b.quality){case"minor":return 1800;case"lesser":return 2100;case"normal":return 2400;case"greater":return 2700;case"superior":return 3e3;case"ultimate":return 3600;default:return 0}},m=o.id.split("-").pop();switch(o.type){case"health":c=Math.min(e.maxHealth||e.health||0,(e.health||0)+o.restoreAmount),c+=Math.floor((e.maxHealth||0)*(o.restorePercent||0)/100);break;case"mana":x=Math.min(e.maxMana||e.mana||0,(e.mana||0)+o.restoreAmount),x+=Math.floor((e.maxMana||0)*(o.restorePercent||0)/100);break;case"effect":p.push({id:`potion-${m}-${Date.now()}`,effect:m,amount:o.restorePercent||0,duration:f(o),icon:Fe[m]?.emoji||o.icon,name:o.name,description:o.description,expiresAt:Date.now()+f(o)});break}c<0&&(c=0),x<0&&(x=0),c>(e.maxHealth||0)&&(c=e.maxHealth||0),x>(e.maxMana||0)&&(x=e.maxMana||0),i({...e,inventory:d.inventory,health:c,mana:x,buffs:p})};return t.jsxs(wn,{children:[t.jsx(ye,{children:"🧪 Potions"}),e.inventory?.potions&&e.inventory.potions.length>0?t.jsx(vn,{children:e.inventory.potions.map((l,o)=>{const d=ie.find(c=>c.id===l.potionId);return d?t.jsxs($n,{onClick:()=>n(d.id),children:[t.jsx("div",{onMouseEnter:c=>{s({title:d.name,description:d.description,quality:kn(d.quality),stats:{Type:d.type==="health"?"Santé":"Mana",Restaure:`${d.restoreAmount} ${d.type==="health"?"PV":"Mana"}`}},{x:c.clientX,y:c.clientY})},onMouseLeave:r,children:t.jsx(At,{potion:d,size:48})}),t.jsxs(Ln,{children:["x",l.quantity]})]},o):null})}):t.jsx(Mn,{children:"Aucune potion"})]})}const Wn=a.div``,Bn=a.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  gap: ${({theme:e})=>e.spacing.md};
`,An=a.div`
  background: rgba(0, 0, 0, 0.3);
  border: 2px solid ${({$quality:e,theme:i})=>{switch(e){case"legendary":return i.colors.quality.legendary;case"epic":return i.colors.quality.epic;case"rare":return i.colors.quality.rare;case"uncommon":return i.colors.quality.uncommon;case"common":return i.colors.quality.common;default:return i.colors.quality.poor}}};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  padding: ${({theme:e})=>e.spacing.md};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({theme:e})=>e.spacing.sm};
`,Dn=a.div`
  cursor: pointer;
`,En=a.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing.xs};
  width: 100%;
`,Pn=a.button`
  width: 100%;
  padding: ${({theme:e})=>e.spacing.xs};
  background: ${({$variant:e})=>e==="primary"?"rgba(0, 120, 255, 0.2)":"rgba(255, 215, 0, 0.2)"};
  color: ${({theme:e})=>e.colors.text.primary};
  border: 1px solid ${({$variant:e,theme:i})=>e==="primary"?i.colors.alliance.blue:i.colors.primary.gold};
  border-radius: ${({theme:e})=>e.borderRadius.sm};
  font-size: ${({theme:e})=>e.fontSizes.xs};
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background: ${({$variant:e})=>e==="primary"?"rgba(0, 120, 255, 0.4)":"rgba(255, 215, 0, 0.4)"};
  }
`,Sn=a.div`
  color: ${({theme:e})=>e.colors.text.secondary};
  font-style: italic;
  font-size: ${({theme:e})=>e.fontSizes.sm};
  text-align: center;
`;function qn(){const{character:e,updateCharacter:i}=W(),{showItemTooltip:s,hideTooltip:r}=Et();if(!e)return null;const n=d=>{const c={...d};delete c.equiped;const x=e.equipment||{},p=x[d.slot],f={...x,[d.slot]:c};let m=(e.bagItems||[]).filter(b=>("item"in b?b.item:b).id!==d.id);if(p){const b={...p};delete b.equiped,m=[...m,{itemId:b.id,item:b}]}m=Ee(m),i({...e,equipment:f,bagItems:m})},l=d=>{const c=Math.floor((d.price||0)*.25);let x=(e.bagItems||[]).filter(p=>("item"in p?p.item:p).id!==d.id);x=Ee(x),i({...e,bagItems:x,gold:e.gold+c})},o=(e.bagItems||[]).slice().sort((d,c)=>{const x="item"in d?d.item:d;return(("item"in c?c.item:c).level||0)-(x.level||0)});return t.jsxs(Wn,{children:[t.jsx(ye,{children:"🎒 Sac - Équipement"}),o.length>0?t.jsx(Bn,{children:o.map((d,c)=>{const x="item"in d?d.item:d;return x.equiped=e.equipment?e.equipment[x.slot]:void 0,!x||!x.name?null:t.jsxs(An,{$quality:x.quality,children:[t.jsx(Dn,{onClick:()=>n(x),onMouseEnter:p=>s(x,p),onMouseLeave:r,children:t.jsx(qe,{itemType:x.slot,itemName:x.name,quality:x.quality,size:52})}),t.jsx(En,{children:t.jsxs(Pn,{$variant:"secondary",onClick:()=>l(x),children:["Vendre (",Math.floor((x.price||0)*.25),"g)"]})})]},c)})}):t.jsx(Sn,{children:"Aucun équipement dans le sac"})]})}const zn=a.div`
  width: 100%;
  margin-bottom: ${({theme:e})=>e.spacing.xl};
`,In=a.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: ${({theme:e})=>e.spacing.xs};
  font-size: ${({theme:e})=>e.fontSizes.sm};
  color: ${({theme:e})=>e.colors.text.secondary};
`,Rn=a.div`
  width: 100%;
  height: 24px;
  background: rgba(0, 0, 0, 0.4);
  border: 2px solid ${({theme:e})=>e.colors.primary.gold};
  border-radius: ${({theme:e})=>e.borderRadius.full};
  overflow: hidden;
  position: relative;
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.3);
`,Tn=a.div`
  height: 100%;
  width: ${({$progress:e})=>e}%;
  background: linear-gradient(
    90deg,
    #ffd700 0%,
    #ffed4e 50%,
    #ffd700 100%
  );
  transition: width 0.5s ease;
  position: relative;
  box-shadow: 0 0 10px rgba(255, 215, 0, 0.5);

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      90deg,
      transparent 0%,
      rgba(255, 255, 255, 0.3) 50%,
      transparent 100%
    );
    animation: shimmer 2s infinite;
  }

  @keyframes shimmer {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(100%);
    }
  }
`,Qn=a.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-weight: ${({theme:e})=>e.fontWeights.bold};
  color: ${({theme:e})=>e.colors.text.primary};
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.8);
  font-size: ${({theme:e})=>e.fontSizes.xs};
  z-index: 1;
`;function Cn(){const{character:e}=W();if(!e)return null;const i=e.experience/e.experienceToNextLevel*100;return t.jsxs(zn,{children:[t.jsxs(In,{children:[t.jsxs("span",{children:["Niveau ",e.level]}),t.jsxs("span",{children:[e.experience," / ",e.experienceToNextLevel," XP"]})]}),t.jsxs(Rn,{children:[t.jsx(Tn,{$progress:Math.max(0,Math.min(100,i))}),t.jsxs(Qn,{children:[Math.max(0,Math.round(i)),"%"]})]})]})}const _n=a.div`
  margin-bottom: ${({theme:e})=>e.spacing.xl};
`,Hn=a.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing.md};
`,Nn=a.div`
  background: rgba(0, 0, 0, 0.3);
  border: 2px solid ${({theme:e})=>e.colors.primary.gold};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  padding: ${({theme:e})=>e.spacing.sm};
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing.sm};
`;function Zn(){const{character:e}=W();return!e||!e.buffs||e.buffs.length===0?null:t.jsx(_n,{children:t.jsx(Hn,{children:t.jsx(Nn,{children:e?.buffs.filter(i=>i.expiresAt<Date.now()).map(i=>t.jsxs(t.Fragment,{children:[t.jsx("span",{style:{fontSize:"1.5rem"},children:i.icon})," ",i.name,"(+",i.amount," %) - Durée restante : ",i.duration," secondes"]}))})})})}const Gn=a.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: ${({theme:e})=>e.spacing.lg};
`,ze=a.div`
  background: linear-gradient(
    135deg,
    rgba(30, 58, 95, 0.9) 0%,
    rgba(26, 31, 46, 0.95) 100%
  );
  border: ${({theme:e})=>e.borders.medium} solid ${({theme:e})=>e.colors.primary.gold};
  border-radius: ${({theme:e})=>e.borderRadius.lg};
  padding: ${({theme:e})=>e.spacing.md};
  box-shadow: ${({theme:e})=>e.shadows.xl};
  backdrop-filter: blur(10px);
`,On=a.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({theme:e})=>e.spacing.lg};
  margin-bottom: ${({theme:e})=>e.spacing.lg};

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,ye=a.h3`
  color: ${({theme:e})=>e.colors.primary.gold};
  font-size: ${({theme:e})=>e.fontSizes.xl};
  margin-bottom: ${({theme:e})=>e.spacing.md};
  text-shadow: ${({theme:e})=>e.shadows.glow.gold};
`;function Un(){return t.jsxs(Gn,{children:[t.jsx(Cn,{}),t.jsxs(On,{children:[t.jsxs("div",{children:[t.jsx(yn,{}),t.jsx(jn,{})]}),t.jsxs(ze,{children:[t.jsx(Zn,{}),t.jsx(Fn,{}),t.jsx(qn,{})]})]})]})}const Vn=()=>t.jsxs("svg",{width:"64",height:"64",viewBox:"0 0 64 64",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("rect",{x:"0",y:"0",width:"64",height:"64",rx:"12",fill:"#B6E2A1"}),t.jsx("ellipse",{cx:"32",cy:"54",rx:"22",ry:"7",fill:"#8DC07F"}),t.jsx("ellipse",{cx:"20",cy:"32",rx:"8",ry:"10",fill:"#4C9A2A",stroke:"#2E6B1A",strokeWidth:"2"}),t.jsx("rect",{x:"17",y:"38",width:"6",height:"12",rx:"2",fill:"#A67C52"}),t.jsx("ellipse",{cx:"44",cy:"28",rx:"6",ry:"8",fill:"#5CB85C",stroke:"#4C9A2A",strokeWidth:"1.5"}),t.jsx("rect",{x:"41",y:"34",width:"5",height:"8",rx:"1.5",fill:"#A67C52"}),t.jsx("ellipse",{cx:"12",cy:"40",rx:"4",ry:"6",fill:"#7CC47F"}),t.jsx("rect",{x:"10",y:"46",width:"3",height:"6",rx:"1",fill:"#A67C52"}),t.jsx("ellipse",{cx:"32",cy:"44",rx:"10",ry:"4",fill:"#7CC47F"}),t.jsx("ellipse",{cx:"28",cy:"50",rx:"5",ry:"2",fill:"#7CC47F"}),t.jsx("ellipse",{cx:"38",cy:"50",rx:"4",ry:"2",fill:"#7CC47F"}),t.jsx("ellipse",{cx:"24",cy:"52",rx:"1.2",ry:"0.7",fill:"#FFB347"}),t.jsx("ellipse",{cx:"26",cy:"53",rx:"0.7",ry:"0.4",fill:"#FFD700"}),t.jsx("ellipse",{cx:"40",cy:"52",rx:"1",ry:"0.5",fill:"#FFD700"}),t.jsx("ellipse",{cx:"42",cy:"53",rx:"0.7",ry:"0.4",fill:"#FFB347"}),t.jsx("ellipse",{cx:"24",cy:"56",rx:"2",ry:"1",fill:"#D9D9D9"}),t.jsx("ellipse",{cx:"40",cy:"57",rx:"1.5",ry:"0.8",fill:"#B0B0B0"}),t.jsx("ellipse",{cx:"32",cy:"20",rx:"10",ry:"3",fill:"#FFD700",opacity:"0.2"})]}),Xn=()=>t.jsxs("svg",{width:"64",height:"64",viewBox:"0 0 64 64",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("rect",{x:"0",y:"0",width:"64",height:"64",rx:"12",fill:"#E2D6A1"}),t.jsx("ellipse",{cx:"32",cy:"54",rx:"22",ry:"7",fill:"#C0B77F"}),t.jsx("ellipse",{cx:"32",cy:"38",rx:"12",ry:"8",fill:"#B0B0B0",stroke:"#8C7AA6",strokeWidth:"2"}),t.jsx("path",{d:"M32 30 Q34 34 32 38 Q30 42 32 46",stroke:"#8C7AA6",strokeWidth:"1.5"}),t.jsx("ellipse",{cx:"48",cy:"28",rx:"7",ry:"10",fill:"#4C9A2A",stroke:"#A67C52",strokeWidth:"2"}),t.jsx("rect",{x:"45",y:"38",width:"6",height:"12",rx:"2",fill:"#A67C52"}),t.jsx("ellipse",{cx:"24",cy:"50",rx:"2",ry:"1",fill:"#FFB347"}),t.jsx("ellipse",{cx:"22",cy:"52",rx:"1",ry:"0.5",fill:"#FFD700"}),t.jsx("ellipse",{cx:"20",cy:"48",rx:"6",ry:"2",fill:"#7CC47F"}),t.jsx("ellipse",{cx:"40",cy:"57",rx:"1.5",ry:"0.8",fill:"#B0B0B0"}),t.jsx("ellipse",{cx:"32",cy:"24",rx:"8",ry:"3",fill:"#BCA77B",opacity:"0.3"})]}),Yn=()=>t.jsxs("svg",{width:"64",height:"64",viewBox:"0 0 64 64",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("rect",{x:"0",y:"0",width:"64",height:"64",rx:"12",fill:"#C1B6E2"}),t.jsx("ellipse",{cx:"32",cy:"54",rx:"22",ry:"7",fill:"#A7A1BC"}),t.jsx("rect",{x:"18",y:"28",width:"28",height:"18",rx:"3",fill:"#6B4F7A",stroke:"#4F3A6B",strokeWidth:"2"}),t.jsx("rect",{x:"26",y:"36",width:"12",height:"10",rx:"2",fill:"#8C7AA6"}),t.jsx("rect",{x:"30",y:"44",width:"4",height:"6",rx:"1.5",fill:"#FFD700"}),t.jsx("polygon",{points:"18,28 32,14 46,28",fill:"#4F3A6B",stroke:"#6B4F7A",strokeWidth:"2"}),t.jsx("rect",{x:"22",y:"32",width:"4",height:"6",rx:"1",fill:"#E2E2E2"}),t.jsx("rect",{x:"38",y:"32",width:"4",height:"6",rx:"1",fill:"#E2E2E2"}),t.jsx("ellipse",{cx:"12",cy:"38",rx:"3",ry:"6",fill:"#4F3A6B"}),t.jsx("ellipse",{cx:"52",cy:"38",rx:"3",ry:"6",fill:"#4F3A6B"}),t.jsx("ellipse",{cx:"32",cy:"50",rx:"10",ry:"3",fill:"#7CC47F"}),t.jsx("ellipse",{cx:"24",cy:"56",rx:"2",ry:"1",fill:"#D9D9D9"}),t.jsx("ellipse",{cx:"40",cy:"57",rx:"1.5",ry:"0.8",fill:"#B0B0B0"}),t.jsx("ellipse",{cx:"32",cy:"24",rx:"6",ry:"2",fill:"#B6E2F2",opacity:"0.5"})]}),Jn=()=>t.jsxs("svg",{width:"64",height:"64",viewBox:"0 0 64 64",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("rect",{x:"0",y:"0",width:"64",height:"64",rx:"12",fill:"#E2A1A1"}),t.jsx("ellipse",{cx:"32",cy:"54",rx:"22",ry:"7",fill:"#C07F7F"}),t.jsx("rect",{x:"20",y:"30",width:"24",height:"14",rx:"2",fill:"#7A2A2A",stroke:"#A63A2B",strokeWidth:"2"}),t.jsx("rect",{x:"16",y:"34",width:"6",height:"10",rx:"1",fill:"#A63A2B"}),t.jsx("rect",{x:"42",y:"34",width:"6",height:"10",rx:"1",fill:"#A63A2B"}),t.jsx("rect",{x:"30",y:"38",width:"4",height:"6",rx:"1",fill:"#E2E2E2"}),t.jsx("ellipse",{cx:"19",cy:"34",rx:"2",ry:"1",fill:"#FFB347"}),t.jsx("ellipse",{cx:"45",cy:"34",rx:"2",ry:"1",fill:"#FFB347"}),t.jsx("ellipse",{cx:"32",cy:"50",rx:"1.2",ry:"0.8",fill:"#E2E2E2"}),t.jsx("ellipse",{cx:"34",cy:"50",rx:"1",ry:"0.6",fill:"#E2E2E2"}),t.jsx("path",{d:"M24 38 Q26 40 28 38",stroke:"#A63A2B",strokeWidth:"1"}),t.jsx("path",{d:"M40 38 Q42 40 44 38",stroke:"#A63A2B",strokeWidth:"1"}),t.jsx("ellipse",{cx:"32",cy:"24",rx:"6",ry:"2",fill:"#7A2A2A",opacity:"0.3"})]}),Kn=()=>t.jsxs("svg",{width:"64",height:"64",viewBox:"0 0 64 64",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("rect",{x:"0",y:"0",width:"64",height:"64",rx:"12",fill:"#E2C6A1"}),t.jsx("ellipse",{cx:"32",cy:"54",rx:"22",ry:"7",fill:"#BCA77B"}),t.jsx("polygon",{points:"20,40 32,20 44,40",fill:"#A63A2B",stroke:"#7C4A2A",strokeWidth:"2"}),t.jsx("rect",{x:"27",y:"40",width:"10",height:"10",rx:"2",fill:"#7C4A2A"}),t.jsx("line",{x1:"32",y1:"20",x2:"32",y2:"40",stroke:"#E2C6A1",strokeWidth:"1.5"}),t.jsx("polygon",{points:"12,44 18,32 24,44",fill:"#BCA77B",stroke:"#A67C52",strokeWidth:"1"}),t.jsx("ellipse",{cx:"32",cy:"50",rx:"4",ry:"2",fill:"#FFB347"}),t.jsx("rect",{x:"30",y:"52",width:"4",height:"2",rx:"1",fill:"#A67C52"}),t.jsx("ellipse",{cx:"50",cy:"32",rx:"6",ry:"8",fill:"#4C5A2A"}),t.jsx("rect",{x:"48",y:"38",width:"4",height:"8",rx:"1.5",fill:"#A67C52"}),t.jsx("ellipse",{cx:"16",cy:"48",rx:"5",ry:"2",fill:"#7CC47F"}),t.jsx("ellipse",{cx:"40",cy:"57",rx:"1.5",ry:"0.8",fill:"#B0B0B0"}),t.jsx("ellipse",{cx:"38",cy:"46",rx:"2",ry:"1.2",fill:"#FFD700"}),t.jsx("ellipse",{cx:"36",cy:"47",rx:"1",ry:"0.6",fill:"#A67C52"})]}),ea=()=>t.jsxs("svg",{width:"64",height:"64",viewBox:"0 0 64 64",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("rect",{x:"0",y:"0",width:"64",height:"64",rx:"12",fill:"#A1D7E2"}),t.jsx("ellipse",{cx:"32",cy:"54",rx:"22",ry:"7",fill:"#7FC0C4"}),t.jsx("ellipse",{cx:"32",cy:"38",rx:"10",ry:"6",fill:"#E2E2E2",stroke:"#B0B0B0",strokeWidth:"2"}),t.jsx("path",{d:"M28 38 Q29 34 32 36 Q33 34 36 38",fill:"#FFB347",stroke:"#E2A147",strokeWidth:"1"}),t.jsx("ellipse",{cx:"40",cy:"32",rx:"2",ry:"4",fill:"#47B3FF",stroke:"#A1D7E2",strokeWidth:"1"}),t.jsx("path",{d:"M20 30 Q24 28 28 30",stroke:"#B6E2F2",strokeWidth:"2",fill:"none"}),t.jsx("ellipse",{cx:"24",cy:"48",rx:"5",ry:"2",fill:"#7CC47F"}),t.jsx("ellipse",{cx:"26",cy:"50",rx:"1",ry:"0.5",fill:"#FFD700"}),t.jsx("ellipse",{cx:"22",cy:"50",rx:"1",ry:"0.5",fill:"#FFB347"}),t.jsx("ellipse",{cx:"40",cy:"57",rx:"1.5",ry:"0.8",fill:"#B0B0B0"}),t.jsx("ellipse",{cx:"32",cy:"24",rx:"6",ry:"2",fill:"#FFD700",opacity:"0.3"})]}),ta=()=>t.jsxs("svg",{width:"64",height:"64",viewBox:"0 0 64 64",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("rect",{x:"0",y:"0",width:"64",height:"64",rx:"12",fill:"#A1B6E2"}),t.jsx("polygon",{points:"16,54 32,18 48,54",fill:"#7A8CA6",stroke:"#4F3A6B",strokeWidth:"2"}),t.jsx("path",{d:"M32 32 Q36 28 40 32 Q44 36 40 40 Q36 44 32 40 Q28 36 32 32",fill:"#E2A147",stroke:"#FFD700",strokeWidth:"1.5"}),t.jsx("path",{d:"M32 32 Q30 28 28 32 Q26 36 28 40 Q30 44 32 40",fill:"#E2A147",opacity:"0.7"}),t.jsx("ellipse",{cx:"32",cy:"50",rx:"8",ry:"3",fill:"#FFD700"}),t.jsx("ellipse",{cx:"32",cy:"50",rx:"4",ry:"1.5",fill:"#FFB347"}),t.jsx("ellipse",{cx:"36",cy:"52",rx:"1",ry:"0.5",fill:"#FFD700"}),t.jsx("ellipse",{cx:"28",cy:"52",rx:"1",ry:"0.5",fill:"#FFD700"}),t.jsx("ellipse",{cx:"24",cy:"24",rx:"6",ry:"2",fill:"#E2E2E2"}),t.jsx("ellipse",{cx:"44",cy:"22",rx:"5",ry:"2",fill:"#E2E2E2"}),t.jsx("ellipse",{cx:"32",cy:"16",rx:"8",ry:"3",fill:"#FFD700",opacity:"0.2"})]}),ia=[{id:"starting_zone",name:"Foret du Départ",description:"Le point de départ de toutes les aventures, où les héros commencent leur voyage.",levelRange:[1,5],componentIcon:Vn},{id:"bandit_camp",name:"Camp de Voleurs",description:"Un campement caché dans la forêt, habité par des bandits et des Murlocs.",levelRange:[5,15],componentIcon:Kn},{id:"occult_mansion",name:"Manoir Occulte",description:"Un manoir mystérieux rempli de secrets et de dangers.",levelRange:[10,15],componentIcon:Yn},{id:"elemental_plains",name:"Plain Elementaire",description:"Des plaines vastes où les éléments prennent vie sous des formes variées.",levelRange:[15,20],componentIcon:ea},{id:"demon_stronghold",name:"Forteresse Démoniaque",description:"Le repaire des démons, un endroit sombre et périlleux où seuls les plus braves osent s'aventurer.",levelRange:[20,25],componentIcon:Jn},{id:"giants_land",name:"La Terre des Géants",description:"Un territoire vaste et imposant, habité par des créatures gigantesques.",levelRange:[25,32],componentIcon:Xn},{id:"dragon_peak",name:"Pic du Dragon",description:"Le sommet le plus élevé, où résident les dragons légendaires et leurs trésors.",levelRange:[30,60],componentIcon:ta}],sa=a.div`
  min-height: calc(100vh - 92px);
  width: 100%;
  max-width: 1200px;
  padding: ${({theme:e})=>e.spacing.xl};
  margin: 0 auto;
`,ra=a.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({theme:e})=>e.spacing.md};
  background: linear-gradient(
    135deg,
    rgba(30, 58, 95, 0.9) 0%,
    rgba(26, 31, 46, 0.95) 100%
  );
  border: ${({theme:e})=>e.borders.medium} solid ${({theme:e})=>e.colors.primary.gold};
  border-radius: ${({theme:e})=>e.borderRadius.lg};
  padding: ${({theme:e})=>e.spacing.xl};
  box-shadow: ${({theme:e})=>e.shadows.xl};
  backdrop-filter: blur(10px);
  text-align: center;
`,na=a.div`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  justify-content: center;
`,aa=a.h1`
  color: ${({theme:e})=>e.colors.primary.gold};
  font-size: ${({theme:e})=>e.fontSizes["3xl"]};
  text-shadow: ${({theme:e})=>e.shadows.glow.gold};
  margin-bottom: 0;
`,la=a.div`
  color: ${({theme:e})=>e.colors.text.secondary};
  font-size: ${({theme:e})=>e.fontSizes.base};
  line-height: 1.6;
`;function oa(){const{character:e,updateCharacter:i}=W(),[s,r]=u.useState(!1),[n,l]=u.useState(e?e.level>35?35:e.level:1);if(u.useEffect(()=>{n>35&&l(35)},[e,n]),!e)return null;const o=(d,c)=>{if(c){const x=[...d.bagItems||[],{itemId:c.id,item:c}];i({...d,bagItems:x})}else i(d);r(!1),setTimeout(()=>{r(!0)},100)};return s?t.jsx(sn,{character:e,monsterLevel:n,onBattleEnd:o,onExit:()=>r(!1)}):t.jsx(sa,{children:t.jsxs(ra,{children:[t.jsx(aa,{children:"🗺️ Exploration"}),t.jsxs(la,{children:["Partez à l'aventure dans les terres sauvages et affrontez des monstres !",t.jsx("br",{}),"Gagnez de l'expérience, de l'or et trouvez des équipements légendaires."]}),t.jsx(na,{children:ia.map(d=>{const c=d.componentIcon;return e.level<d.levelRange[0]?null:t.jsx(c,{},d.id)})}),t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:16,marginBottom:32,justifyContent:"center"},children:[t.jsx("label",{htmlFor:"monster-level",style:{fontWeight:"bold",color:"#ffd700"},children:"Niveau du monstre :"}),t.jsx("input",{id:"monster-level",type:"number",min:n-3,max:35,defaultValue:n,onChange:d=>l(Number(d.target.value)>35?35:Number(d.target.value)<e.level-3?e.level-3:Number(d.target.value)),style:{width:80,fontSize:18,padding:4,borderRadius:8,border:"2px solid #ffd700",background:"#222",color:"#ffd700",textAlign:"center"}})]}),t.jsx(F,{onClick:()=>r(!0),$size:"large",children:"⚔️ Chercher un Combat"})]})})}const ca=a.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: ${({theme:e})=>e.spacing.xl};
`;function da(){const{character:e,updateCharacter:i}=W(),s=n=>{i(n)},r=()=>{};return e?t.jsx(ca,{children:t.jsx(hn,{character:e,onPurchase:s,onClose:r})}):null}const xa=a.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: ${({theme:e})=>e.spacing.xl};
`,ha=a.div`
  background: linear-gradient(
    135deg,
    rgba(30, 58, 95, 0.9) 0%,
    rgba(26, 31, 46, 0.95) 100%
  );
  border: ${({theme:e})=>e.borders.medium} solid ${({theme:e})=>e.colors.primary.gold};
  border-radius: ${({theme:e})=>e.borderRadius.lg};
  padding: ${({theme:e})=>e.spacing.xl};
  box-shadow: ${({theme:e})=>e.shadows.xl};
  backdrop-filter: blur(10px);
`,pa=a.h1`
  color: ${({theme:e})=>e.colors.primary.gold};
  font-size: ${({theme:e})=>e.fontSizes["3xl"]};
  margin-bottom: ${({theme:e})=>e.spacing.md};
  text-shadow: ${({theme:e})=>e.shadows.glow.gold};
  text-align: center;
`,ua=a.p`
  color: ${({theme:e})=>e.colors.text.secondary};
  font-size: ${({theme:e})=>e.fontSizes.base};
  margin-bottom: ${({theme:e})=>e.spacing.xl};
  text-align: center;
  line-height: 1.6;
`,ma=a.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing.md};
  margin-bottom: ${({theme:e})=>e.spacing.xl};
  flex-wrap: wrap;
  justify-content: center;
`,xt=a.button`
  padding: ${({theme:e})=>e.spacing.sm} ${({theme:e})=>e.spacing.md};
  background: ${({$active:e,theme:i})=>e?`linear-gradient(135deg, ${i.colors.primary.gold} 0%, ${i.colors.primary.bronze} 100%)`:"rgba(0, 0, 0, 0.3)"};
  color: ${({$active:e,theme:i})=>e?i.colors.neutral.black:i.colors.text.secondary};
  border: 2px solid ${({$active:e,theme:i})=>i.colors.primary.gold};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  font-weight: ${({theme:e})=>e.fontWeights.bold};
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  }
`,ga=a.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: ${({theme:e})=>e.spacing.lg};
`,fa=a.div`
  background: rgba(0, 0, 0, 0.3);
  border: 2px solid ${({theme:e})=>e.colors.primary.gold};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  padding: ${({theme:e})=>e.spacing.lg};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({theme:e})=>e.spacing.md};
  transition: all 0.3s;
`,ya=a.h3`
  color: ${({theme:e})=>e.colors.primary.gold};
  font-size: ${({theme:e})=>e.fontSizes.lg};
  font-weight: ${({theme:e})=>e.fontWeights.bold};
  text-align: center;
  margin: 0;
`,ba=a.div`
  color: ${({theme:e})=>e.colors.text.muted};
  font-size: ${({theme:e})=>e.fontSizes.sm};
  font-style: italic;
  text-transform: uppercase;
  letter-spacing: 1px;
`,ja=a.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${({theme:e})=>e.spacing.sm};
  width: 100%;
`,ce=a.div`
  display: flex;
  justify-content: space-between;
  padding: ${({theme:e})=>e.spacing.xs};
  background: rgba(0, 0, 0, 0.2);
  border-radius: ${({theme:e})=>e.borderRadius.sm};
  font-size: ${({theme:e})=>e.fontSizes.sm};
  color: ${({theme:e})=>e.colors.text.secondary};

  span {
    color: ${({theme:e})=>e.colors.primary.gold};
    font-weight: ${({theme:e})=>e.fontWeights.bold};
  }
`,ka=a.div`
  color: ${({theme:e})=>e.colors.text.secondary};
  font-size: ${({theme:e})=>e.fontSizes.sm};
  text-align: center;
`,wa=a.div`
  text-align: center;
  color: ${({theme:e})=>e.colors.text.secondary};
  font-size: ${({theme:e})=>e.fontSizes.sm};
  margin-bottom: ${({theme:e})=>e.spacing.md};
`,ht={goblin:{icon:"🧌",label:"Gobelin"},beast:{icon:"🐺",label:"Bêtes"},humanoid:{icon:"👤",label:"Humanoïdes"},undead:{icon:"💀",label:"Morts-vivants"},elemental:{icon:"🔥",label:"Élémentaires"},demon:{icon:"😈",label:"Démons"},giant:{icon:"🗿",label:"Géants"},dragon:{icon:"🐉",label:"Dragons"}};function va(){const{character:e}=W(),[i,s]=u.useState("all"),r=O.filter(l=>i==="all"?!0:l.type===i),n=l=>O.filter(o=>o.type===l).length;return t.jsx(xa,{children:t.jsxs(ha,{children:[t.jsx(pa,{children:"📖 Bestiaire"}),t.jsxs(ua,{children:["Découvrez toutes les créatures qui peuplent le monde de la Fête d'Hiver.",t.jsx("br",{}),"Étudiez leurs forces et leurs faiblesses pour mieux les affronter !"]}),t.jsxs(ma,{children:[t.jsxs(xt,{$active:i==="all",onClick:()=>s("all"),children:["Tous (",O.length,")"]}),Object.keys(ht).map(l=>{const o=n(l),{icon:d,label:c}=ht[l];return t.jsxs(xt,{$active:i===l,onClick:()=>s(l),children:[d," ",c," (",o,")"]},l)})]}),t.jsxs(wa,{children:[r.length," créature",r.length>1?"s":""," trouvée",r.length>1?"s":""]}),t.jsx(ga,{children:r.map((l,o)=>t.jsxs(fa,{children:[t.jsx(Dt,{monster:{...l,level:Math.floor((l.minLevel+l.maxLevel)/2),health:l.baseHealth,maxHealth:l.baseHealth,damage:l.baseDamage,armor:l.baseArmor,abilities:l.abilities??[]},level:Math.floor((l.minLevel+l.maxLevel)/2),size:96}),t.jsx(ya,{children:l.name}),t.jsx(ba,{children:l.type}),t.jsxs(ka,{children:["Niveau ",l.minLevel," - ",l.maxLevel]}),e?.isAdmin&&t.jsxs(ja,{children:[t.jsxs(ce,{children:["❤️ PV: ",t.jsx("span",{children:l.baseHealth})]}),t.jsxs(ce,{children:["⚔️ ATT: ",t.jsx("span",{children:l.baseDamage})]}),t.jsxs(ce,{children:["🛡️ ARM: ",t.jsx("span",{children:l.baseArmor})]}),t.jsxs(ce,{children:["💰 Or: ",t.jsx("span",{children:t.jsx(U,{amount:l.goldReward})})]})]})]},o))})]})})}const $a=(e,i)=>e?e.map(s=>{let r=0;return r+=s.level*10,r+=s.gold/1e5,r+=s.achievements?s.achievements.length*5:0,r+=s.defeatedMonsters?s.defeatedMonsters/100:0,s.score=Math.floor(r),s}).sort((s,r)=>(r[i]||0)-(s[i]||0)):[],La=a.div`
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  padding: ${({theme:e})=>e.spacing.xl};
`,Ma=a.div`
  background: linear-gradient(135deg, rgba(30,58,95,0.9) 0%, rgba(26,31,46,0.95) 100%);
  border: ${({theme:e})=>e.borders.medium} solid ${({theme:e})=>e.colors.primary.gold};
  border-radius: ${({theme:e})=>e.borderRadius.lg};
  padding: ${({theme:e})=>e.spacing.xl};
  box-shadow: ${({theme:e})=>e.shadows.xl};
  backdrop-filter: blur(10px);
`,Fa=a.h1`
  color: ${({theme:e})=>e.colors.primary.gold};
  font-size: ${({theme:e})=>e.fontSizes["3xl"]};
  margin-bottom: ${({theme:e})=>e.spacing.md};
  text-shadow: ${({theme:e})=>e.shadows.glow.gold};
  text-align: center;
`,Wa=a.p`
  color: ${({theme:e})=>e.colors.text.secondary};
  font-size: ${({theme:e})=>e.fontSizes.base};
  margin-bottom: ${({theme:e})=>e.spacing.xl};
  text-align: center;
  line-height: 1.6;
`,Ba=a.table`
  width: 100%;
  border-collapse: collapse;
  background: #222;
  color: #fff;
  margin: 2rem auto;
  box-shadow: 0 0 16px #0008;
`,I=a.th`
  padding: 1rem;
  background: #444;
  font-size: 1.2rem;
`,R=a.td`
  padding: 0.8rem;
  text-align: center;
  border-bottom: 1px solid ${({$colorBorder:e})=>e||"#555"};
`;function Aa(){const{members:e}=Hi(),[i,s]=u.useState(e||[]),[r,n]=u.useState("score");return u.useEffect(()=>{s($a(e,r)||[])},[e,r]),t.jsx(La,{children:t.jsxs(Ma,{children:[t.jsx(Fa,{children:"🏆 Leaderboard"}),t.jsxs(Wa,{children:["Classement des meilleurs aventuriers d'Azeroth.",t.jsx("br",{}),"Affrontez les autres joueurs pour grimper dans le classement !"]}),t.jsxs(Ba,{children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx(I,{children:"Rank"}),t.jsx(I,{children:"Name"}),t.jsx(I,{onClick:()=>{n("level")},children:"Level"}),t.jsx(I,{children:"Gold"}),t.jsx(I,{children:"Kill"}),t.jsx(I,{children:"HFs"}),t.jsx(I,{onClick:()=>{n("score")},children:"Score"})]})}),t.jsx("tbody",{children:i&&i.map((l,o)=>t.jsxs("tr",{style:{backgroundColor:l.faction==="horde"?"rgba(165, 42, 42, 0.2)":"rgba(30, 144, 255, 0.2)"},children:[t.jsx(R,{$colorBorder:l.faction==="horde"?"#a52a2a":"#1e90ff",children:o+1}),t.jsx(R,{$colorBorder:l.faction==="horde"?"#a52a2a":"#1e90ff",style:{color:C[l.class]?.color||"#fff"},children:l.name}),t.jsx(R,{$colorBorder:l.faction==="horde"?"#a52a2a":"#1e90ff",children:l.level}),t.jsx(R,{$colorBorder:l.faction==="horde"?"#a52a2a":"#1e90ff",children:t.jsx(U,{amount:l.gold})}),t.jsx(R,{$colorBorder:l.faction==="horde"?"#a52a2a":"#1e90ff",children:l.defeatedMonsters}),t.jsx(R,{$colorBorder:l.faction==="horde"?"#a52a2a":"#1e90ff",children:l.achievements?.length||0}),t.jsx(R,{$colorBorder:l.faction==="horde"?"#a52a2a":"#1e90ff",children:me(l.score||0)})]},l.id))})]})]})})}const de=a.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`,xe=a.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`,pt=a.h1`
  font-family: ${({theme:e})=>e.fonts.display};
  font-size: ${({theme:e})=>e.fontSizes["6xl"]};
  text-align: center;
  margin: ${({theme:e})=>e.spacing.xl} 0;
  background: linear-gradient(
    135deg,
    ${({theme:e})=>e.colors.primary.gold},
    ${({theme:e})=>e.colors.winter.iceBlue},
    ${({theme:e})=>e.colors.primary.gold}
  );
  background-size: 200% 200%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: shimmer 3s ease-in-out infinite;
  
  @keyframes shimmer {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
  
  @media (max-width: ${({theme:e})=>e.breakpoints.md}) {
    font-size: ${({theme:e})=>e.fontSizes["4xl"]};
  }
`,ut=a.h2`
  font-family: ${({theme:e})=>e.fonts.secondary};
  font-size: ${({theme:e})=>e.fontSizes["2xl"]};
  color: ${({theme:e})=>e.colors.winter.iceBlue};
  text-align: center;
  margin-bottom: ${({theme:e})=>e.spacing.md};
  font-weight: ${({theme:e})=>e.fontWeights.light};
  letter-spacing: 2px;
  text-transform: uppercase;
`;function Da(){const{user:e,loading:i}=Se(),{character:s,hasCharacter:r,loading:n,createNewCharacter:l}=W(),o=async d=>{try{await l(d)}catch(c){console.error("Erreur lors de la création du personnage:",c),alert("Erreur lors de la création du personnage. Veuillez réessayer.")}};return i||n?t.jsxs(de,{children:[t.jsx(re,{showActions:!1}),t.jsxs(xe,{children:[t.jsx(pt,{children:"❄️ Fête d'Hiver"}),t.jsx(ut,{children:"Chargement..."})]})]}):e&&!r?t.jsxs(de,{children:[t.jsx(re,{showActions:!1}),t.jsx(xe,{children:t.jsx(fs,{onComplete:o})})]}):e&&s?t.jsx(de,{children:t.jsx(Ki,{children:t.jsxs(_i,{children:[t.jsx(re,{showActions:!0}),t.jsx(xe,{children:t.jsxs(Rt,{children:[t.jsx(H,{path:"/",element:t.jsx(Un,{})}),t.jsx(H,{path:"/exploration",element:t.jsx(oa,{})}),t.jsx(H,{path:"/shop",element:t.jsx(da,{})}),t.jsx(H,{path:"/bestiary",element:t.jsx(va,{})}),t.jsx(H,{path:"/leaderboard",element:t.jsx(Aa,{})}),t.jsx(H,{path:"*",element:t.jsx(Tt,{to:"/",replace:!0})})]})})]})})}):t.jsxs(de,{children:[t.jsx(re,{showActions:!1}),t.jsxs(xe,{children:[t.jsx(pt,{children:"❄️ Fête d'Hiver"}),t.jsx(ut,{children:"Bienvenue dans l'aventure"})]})]})}function Ea(){return t.jsx(It,{children:t.jsx(Da,{})})}Qt.createRoot(document.getElementById("root")).render(t.jsx(u.StrictMode,{children:t.jsxs(Ht,{theme:ri,children:[t.jsx(ni,{}),t.jsx(wi,{children:t.jsx(Mi,{children:t.jsx(Ei,{children:t.jsx(Ea,{})})})})]})}));
