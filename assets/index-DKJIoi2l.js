import{r as u,j as t,R as Ct,L as _,B as It,a as Qt,b as H,N as Tt,c as Rt}from"./vendor-react-3GBrp-jG.js";import{f as _t,h as Ht,k as Ce,l as a,n as Nt}from"./vendor-C-jmcCh2.js";import{i as Zt,g as Gt,a as Ot,b as Ut,c as Vt,o as Xt,s as Yt,d as Jt,r as Q,u as Kt,e as Me,f as gt,h as ft,q as Ie,j as ei,k as ti,m as yt,p as ii,n as si,t as ri}from"./vendor-firebase-DiwS88rE.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))r(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function s(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerPolicy&&(o.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?o.credentials="include":n.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(n){if(n.ep)return;n.ep=!0;const o=s(n);fetch(n.href,o)}})();const ni={colors:{primary:{gold:"#FFD700",darkGold:"#C7A500",bronze:"#CD7F32"},winter:{iceBlue:"#A5D8FF",deepBlue:"#1E3A5F",snowWhite:"#F8F9FA",frostBlue:"#4A90E2",darkIce:"#2C5F8D"},alliance:{blue:"#0078D7",lightBlue:"#4BA3E3",darkBlue:"#003F7F"},horde:{red:"#8B0000",darkRed:"#5C0000",crimson:"#DC143C"},neutral:{black:"#0A0E1A",darkGray:"#1A1F2E",gray:"#2E3440",lightGray:"#4C566A",silver:"#D8DEE9",white:"#ECEFF4"},accent:{arcane:"#8B5CF6",frost:"#60A5FA",fire:"#EF4444",nature:"#10B981",holy:"#FDE047"},status:{success:"#10B981",warning:"#F59E0B",error:"#EF4444",info:"#3B82F6"},text:{primary:"#ECEFF4",secondary:"#D8DEE9",dark:"#0A0E1A",muted:"#4C566A"},channels:{general:"#ffdb97",wisp:"#cf21c7",group:"#60A5FA",guild:"#10B981",party:"#F59E0B",raid:"#EF4444"},quality:{poor:"#9D9D9D",common:"#FFFFFF",uncommon:"#1EFF00",rare:"#0070DD",epic:"#A335EE",legendary:"#FF8000"}},fonts:{primary:"'Cinzel', serif",secondary:"'Roboto Condensed', sans-serif",body:"'Open Sans', sans-serif",display:"'Cinzel Decorative', cursive"},fontSizes:{xs:"0.75rem",sm:"0.875rem",base:"1rem",lg:"1.125rem",xl:"1.25rem","2xl":"1.5rem","3xl":"1.875rem","4xl":"2.25rem","5xl":"3rem","6xl":"3.75rem"},fontWeights:{light:300,normal:400,medium:500,semibold:600,bold:700,black:900},spacing:{xxs:"0.125rem",xs:"0.25rem",sm:"0.5rem",md:"1rem",lg:"1.5rem",xl:"2rem","2xl":"3rem","3xl":"4rem","4xl":"6rem","5xl":"8rem"},borders:{thin:"1px",medium:"2px",thick:"4px",heavy:"6px"},borderRadius:{none:"0",sm:"0.25rem",md:"0.5rem",lg:"0.75rem",xl:"1rem",full:"9999px"},shadows:{sm:"0 1px 2px 0 rgba(0, 0, 0, 0.5)",md:"0 4px 6px -1px rgba(0, 0, 0, 0.5), 0 2px 4px -1px rgba(0, 0, 0, 0.3)",lg:"0 10px 15px -3px rgba(0, 0, 0, 0.5), 0 4px 6px -2px rgba(0, 0, 0, 0.3)",xl:"0 20px 25px -5px rgba(0, 0, 0, 0.5), 0 10px 10px -5px rgba(0, 0, 0, 0.3)",inner:"inset 0 2px 4px 0 rgba(0, 0, 0, 0.5)",glow:{blue:"0 0 20px rgba(74, 144, 226, 0.6), 0 0 40px rgba(74, 144, 226, 0.4)",gold:"0 0 20px rgba(255, 215, 0, 0.6), 0 0 40px rgba(255, 215, 0, 0.4)",arcane:"0 0 20px rgba(139, 92, 246, 0.6), 0 0 40px rgba(139, 92, 246, 0.4)",frost:"0 0 20px rgba(96, 165, 250, 0.6), 0 0 40px rgba(96, 165, 250, 0.4)"}},transitions:{fast:"150ms ease-in-out",base:"250ms ease-in-out",slow:"350ms ease-in-out"},breakpoints:{xs:"320px",sm:"640px",md:"768px",lg:"1024px",xl:"1280px","2xl":"1536px"},zIndex:{dropdown:1e3,modal:1100,popover:1200,tooltip:1300,notification:1400}},ai=_t`
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
`,oi={apiKey:"AIzaSyAcelSLYaVnCo-VNmZ7duPrBZ2S9p1__Nc",authDomain:"xmas-corp.firebaseapp.com",databaseURL:"https://xmas-corp-default-rtdb.europe-west1.firebasedatabase.app",projectId:"xmas-corp",storageBucket:"xmas-corp.firebasestorage.app",messagingSenderId:"795906380947",appId:"1:795906380947:web:e6e874d93c70d9713fe966",measurementId:"G-EY3X1CEYSZ"},ge=Zt(oi),qe=Gt(ge),T=Ot(ge);Ut(ge);typeof window<"u"&&Vt(ge);const li=async()=>{try{return(await Jt(qe)).user}catch(e){throw console.error("Erreur lors de la connexion anonyme:",e),e}},ci=async()=>{try{await Yt(qe)}catch(e){throw console.error("Erreur lors de la déconnexion:",e),e}},di=e=>Xt(qe,e);function xi(e){return e.toString().normalize("NFD").replace(new RegExp("\\p{Diacritic}","gu"),"").toLowerCase().trim().replace(/\s+/g,"-").replace(/[^a-z0-9-]/g,"").replace(/--+/g,"-")}const S={characters:"characters",messages:"messages"},Fe={strength:{name:"Force",description:"Augmente la force du personnage, augmentant les dégâts physiques.",emoji:"💪"},agility:{name:"Agilité",description:"Augmente l'agilité du personnage, améliorant la précision et l'esquive.",emoji:"🤸‍♂️"},intellect:{name:"Intelligence",description:"Augmente l'intelligence du personnage, améliorant les pouvoirs magiques.",emoji:"🧠"},stamina:{name:"Endurance",description:"Augmente l'endurance du personnage, augmentant la santé maximale.",emoji:"❤️"},attackPower:{name:"Puissance d'attaque",description:"Augmente la puissance d'attaque, augmentant les dégâts physiques infligés.",emoji:"⚔️"},spellPower:{name:"Puissance magique",description:"Augmente la puissance magique, augmentant les dégâts magiques infligés.",emoji:"✨"},critChance:{name:"Chance de coup critique",description:"Augmente la chance de porter des coups critiques, infligeant des dégâts supplémentaires.",emoji:"🎯"},luck:{name:"Chance de potion",description:"Augmente la chance d'obtenir des objets rares.",emoji:"🍀"}},bt=async(e,i)=>{try{const s=Q(T,e),r=ii(s);return await si(r,{...i,createdAt:Me(),updatedAt:Me()}),r.key}catch(s){throw console.error("Erreur lors de la création du document:",s),s}},pi=async e=>{try{const i=Q(T,e),s=await yt(i);if(s.exists()){const r=s.val();return Object.keys(r).map(n=>({id:n,...r[n]}))}else return[]}catch(i){throw console.error("Erreur lors de la lecture des documents:",i),i}},kt=async(e,i,s,r)=>{try{const n=Q(T,e);let o=Ie(n,ei(i));s!==void 0&&(o=Ie(o,ti(s)));const l=await yt(o);if(l.exists()){const d=l.val();return Object.keys(d).map(c=>({id:c,...d[c]}))}else return[]}catch(n){throw console.error("Erreur lors de la requête:",n),n}},We=e=>{const i={};return Object.keys(e).forEach(s=>{const r=e[s];if(r!==void 0)if(r!==null&&typeof r=="object"&&!Array.isArray(r)){const n=We(r);Object.keys(n).length>0&&(i[s]=n)}else Array.isArray(r)?i[s]=r.filter(n=>n!==void 0).map(n=>n!==null&&typeof n=="object"&&!Array.isArray(n)?We(n):n):i[s]=r}),i},he=async(e,i,s)=>{try{const r=Q(T,`${e}/${i}`),n=We(s);await Kt(r,{...n,updatedAt:Me()})}catch(r){throw console.error("Erreur lors de la mise à jour du document:",r),r}},hi=async(e,i)=>{try{const s=Q(T,`${e}/${i}`);await ri(s)}catch(s){throw console.error("Erreur lors de la suppression du document:",s),s}},ui=(e,i,s)=>{const r=Q(T,`${e}/${i}`),n=gt(r,o=>{o.exists()?s({id:i,...o.val()}):s(null)});return()=>ft(r,"value",n)},jt=(e,i)=>{const s=Q(T,e),r=gt(s,n=>{if(n.exists()){const o=n.val(),l=Object.keys(o).map(d=>({id:d,...o[d]}));i(l)}else i([])});return()=>ft(s,"value",r)},mi=async e=>(await kt(S.messages,"channel",e)).sort((s,r)=>r.timestamp-s.timestamp).slice(0,100).reverse(),gi=async(e,i,s)=>bt(S.messages,{who:e,message:i,channel:s,timestamp:Date.now()}),fi=async()=>{const e=await pi(S.characters),i=Ht(e.map(r=>(r.status=typeof r.updatedAt=="number"&&r.updatedAt+60*1e3*15>Date.now()?"online":"offline",r)),r=>r.status||"offline");return i.online=Ce(i.online||[],["name"],["asc"]),i.offline=Ce(i.offline||[],["name"],["asc"]),[...i.online,...i.offline].filter((r,n,o)=>n===o.findIndex(l=>l.userId===r.userId))},yi=(e,i)=>{const s=[e.name.toLowerCase(),i.name.toLowerCase()].sort();return xi(`mp_${s.join("_")}`)},bi=async(e,i)=>{const s=yi(e,i);e.chatChannel||(e.chatChannel=[]),i.chatChannel||(i.chatChannel=[]),e.chatChannel.find(r=>r.slug===s)||(e.chatChannel.push({slug:s,name:i.name}),await he(S.characters,e.id,{chatChannel:e.chatChannel})),i.chatChannel.find(r=>r.slug===s)||(i.chatChannel.push({slug:s,name:e.name}),await he(S.characters,i.id,{chatChannel:i.chatChannel}))},ki=async(e,i)=>{const s=e.chatChannel.filter(r=>r.slug!==i);await he(S.characters,e.id,{chatChannel:s})},ji=async e=>kt(S.characters,"userId",e),wi=async e=>bt(S.characters,e),wt=u.createContext({user:null,loading:!0}),vi=({children:e})=>{const[i,s]=u.useState(null),[r,n]=u.useState(!0);u.useEffect(()=>{const l=di(async d=>{if(d)s(d),n(!1);else try{const c=await li();s(c)}catch(c){console.error("Erreur lors de la connexion anonyme:",c)}finally{n(!1)}});return()=>l()},[]);const o={user:i,loading:r};return t.jsx(wt.Provider,{value:o,children:e})},Ee=()=>{const e=u.useContext(wt);if(!e)throw new Error("useAuth doit être utilisé dans un AuthProvider");return e},R={warrior:{id:"warrior",name:"Guerrier",description:"Maître du combat au corps à corps, utilise la rage pour déchaîner des attaques dévastatrices.",primaryStat:"strength",icon:"⚔️",color:"#C79C6E",baseHP:120,baseMP:0,availableFor:{alliance:["human","dwarf","night-elf","gnome","draenei","worgen"],horde:["orc","undead","tauren","troll","blood-elf","goblin"]},energyName:"🔥 Rage",armorType:"plate"},paladin:{id:"paladin",name:"Paladin",description:"Guerrier sacré qui utilise la Lumière pour protéger ses alliés et punir ses ennemis.",primaryStat:"strength",icon:"🛡️",color:"#F58CBA",baseHP:110,baseMP:80,availableFor:{alliance:["human","dwarf","draenei"],horde:["blood-elf","tauren"]},energyName:"💙 Mana",armorType:"plate"},hunter:{id:"hunter",name:"Chasseur",description:"Maître du tir à distance et compagnon des bêtes sauvages.",primaryStat:"agility",icon:"🏹",color:"#ABD473",baseHP:100,baseMP:100,availableFor:{alliance:["human","dwarf","night-elf","draenei","worgen","gnome"],horde:["orc","undead","tauren","troll","blood-elf","goblin"]},energyName:"🎯 Focus",armorType:"mail"},rogue:{id:"rogue",name:"Voleur",description:"Assassin furtif spécialisé dans les attaques sournoises et les coups critiques.",primaryStat:"agility",icon:"🗡️",color:"#FFF569",baseHP:95,baseMP:90,availableFor:{alliance:["human","dwarf","night-elf","gnome","worgen"],horde:["orc","undead","troll","blood-elf","goblin"]},energyName:"⚡ Énergie",armorType:"leather"},priest:{id:"priest",name:"Prêtre",description:"Manipule la magie sacrée et de l'ombre pour soigner ou blesser.",primaryStat:"intellect",icon:"✨",color:"#FFFFFF",baseHP:80,baseMP:120,availableFor:{alliance:["human","dwarf","night-elf","draenei","worgen"],horde:["undead","troll","blood-elf","goblin"]},energyName:"💙 Mana",armorType:"cloth"},shaman:{id:"shaman",name:"Chaman",description:"Invoque le pouvoir des éléments et des esprits ancestraux.",primaryStat:"intellect",icon:"⚡",color:"#0070DE",baseHP:95,baseMP:110,availableFor:{alliance:["draenei"],horde:["orc","tauren","troll","goblin"]},energyName:"💙 Mana",armorType:"mail"},mage:{id:"mage",name:"Mage",description:"Maître des arcanes, du feu et du givre, capable de manipuler les forces magiques.",primaryStat:"intellect",icon:"🔮",color:"#69CCF0",baseHP:75,baseMP:130,availableFor:{alliance:["human","dwarf","night-elf","gnome","draenei","worgen"],horde:["orc","undead","troll","blood-elf","goblin"]},energyName:"💙 Mana",armorType:"cloth"},warlock:{id:"warlock",name:"Démoniste",description:"Invoque des démons et utilise la magie de l'ombre et du feu démoniaque.",primaryStat:"intellect",icon:"👿",color:"#9482C9",baseHP:85,baseMP:120,availableFor:{alliance:["human","dwarf","gnome","worgen"],horde:["orc","undead","blood-elf","goblin"]},energyName:"💙 Mana",armorType:"cloth"},druid:{id:"druid",name:"Druide",description:"Transformiste de la nature capable de prendre plusieurs formes animales.",primaryStat:"intellect",icon:"🌿",color:"#FF7D0A",baseHP:90,baseMP:110,availableFor:{alliance:["night-elf","worgen"],horde:["tauren","troll"]},energyName:"💙 Mana",armorType:"leather"},"death-knight":{id:"death-knight",name:"Chevalier de la mort",description:"Guerrier impie maniant les pouvoirs de la mort et de la glace.",primaryStat:"strength",icon:"💀",color:"#C41F3B",baseHP:115,baseMP:100,availableFor:{alliance:["human","dwarf","night-elf","gnome","draenei","worgen"],horde:["orc","undead","tauren","troll","blood-elf","goblin"]},energyName:"🌀 Runes",armorType:"plate"}},vt={human:{id:"human",name:"Humain",description:"Peuple courageux et déterminé de Hurlevent.",faction:"alliance",icon:"👨",bonuses:{strength:2,agility:1,intellect:2,stamina:2}},dwarf:{id:"dwarf",name:"Nain",description:"Race ancienne et robuste de Forgefer.",faction:"alliance",icon:"🧔",bonuses:{strength:3,stamina:4,agility:1}},"night-elf":{id:"night-elf",name:"Elfe de la nuit",description:"Ancien peuple mystique de Kalimdor.",faction:"alliance",icon:"🧝",bonuses:{agility:4,intellect:1,stamina:1}},gnome:{id:"gnome",name:"Gnome",description:"Inventeurs ingénieux de Gnomeregan.",faction:"alliance",icon:"🧙",bonuses:{intellect:4,agility:2}},draenei:{id:"draenei",name:"Draeneï",description:"Réfugiés nobles guidés par la Lumière.",faction:"alliance",icon:"👽",bonuses:{strength:2,intellect:2,stamina:2}},worgen:{id:"worgen",name:"Worgen",description:"Humains maudits transformés en loups-garous.",faction:"alliance",icon:"🐺",bonuses:{strength:2,agility:3,stamina:2}},orc:{id:"orc",name:"Orc",description:"Guerriers féroces d'Orgrimmar.",faction:"horde",icon:"👹",bonuses:{strength:4,stamina:3}},undead:{id:"undead",name:"Mort-vivant",description:"Les Réprouvés, libérés du Fléau.",faction:"horde",icon:"🧟",bonuses:{intellect:2,agility:2,stamina:2}},tauren:{id:"tauren",name:"Tauren",description:"Géants paisibles des plaines de Mulgore.",faction:"horde",icon:"🐮",bonuses:{strength:3,stamina:5}},troll:{id:"troll",name:"Troll",description:"Chasseurs rusés des Îles de l'Écho.",faction:"horde",icon:"🗿",bonuses:{agility:3,intellect:1,stamina:2}},"blood-elf":{id:"blood-elf",name:"Elfe de sang",description:"Anciens Haut-Elfes assoiffés de magie.",faction:"horde",icon:"🧝‍♀️",bonuses:{intellect:4,agility:2}},goblin:{id:"goblin",name:"Gobelin",description:"Marchands malins et ingénieux.",faction:"horde",icon:"👺",bonuses:{intellect:3,agility:3}}},$i=e=>Object.values(vt).filter(i=>i.faction===e),Li=(e,i)=>Object.values(R).filter(s=>s.availableFor[i].includes(e)),$t=(e,i)=>{const s=R[e],r=vt[i],n=10,o=10,l=10,d=10,c=10,x=n+(r.bonuses.strength||0),h=o+(r.bonuses.agility||0),f=l+(r.bonuses.intellect||0),m=d+(r.bonuses.stamina||0),b=c+Math.floor((h+m+x+f)/4),g=s.energyName,$=s.baseHP*10,B=s.baseMP*5;let W=0;switch(s.primaryStat){case"strength":W+=5*x;break;case"agility":W+=7*h;break;case"intellect":W+=5*f;break}return{health:$,energy:B,strength:x,agility:h,intellect:f,stamina:m,armor:b,energyName:g,critChance:W}};function Mi(e){const i={strength:0,agility:0,intellect:0,stamina:0,armor:0,attackPower:0,spellPower:0,critChance:0};return e.equipment&&Object.keys(e.equipment).forEach(s=>{const r=e.equipment?.[s];r&&r.stats&&(i.strength+=r.stats.strength||0,i.agility+=r.stats.agility||0,i.intellect+=r.stats.intellect||0,i.stamina+=r.stats.stamina||0,i.armor+=r.stats.armor||0,i.attackPower+=r.stats.attackPower||0,i.spellPower+=r.stats.spellPower||0,i.critChance+=r.stats.critChance||0)}),i}function De(e){const i=$t(e.class,e.race),s=Mi(e),r=e.level,n=i.health,o=i.energy,l=i.strength,d=i.agility,c=i.intellect,x=i.stamina,h=5,f=5,m=i.armor,b=i.critChance;return{maxHealth:(n+(x+s.stamina))*r,maxMana:(o+(c+s.intellect))*r,strength:(l+s.strength)*r,agility:(d+s.agility)*r,intellect:(c+s.intellect)*r,stamina:(x+s.stamina)*r,attackPower:(h+s.attackPower)*r,spellPower:(f+s.spellPower)*r,armor:Number(m)+s.armor,critChance:(Number(b)+s.critChance)*.1,experienceToNextLevel:ue(r+1)}}function ue(e){return Math.floor(100*Math.pow(e,1.12))}function me(e){return e>=1e9?(e/1e9).toFixed(1).replace(/\.0$/,"")+"B":e>=1e6?(e/1e6).toFixed(1).replace(/\.0$/,"")+"M":e>=1e3?(e/1e3).toFixed(1).replace(/\.0$/,"")+"K":e.toString()}const Lt=u.createContext({character:null,loading:!0,hasCharacter:!1,createNewCharacter:async()=>{},updateCharacter:async()=>{},refreshCharacter:async()=>{}}),Fi=({children:e})=>{const{user:i}=Ee(),[s,r]=u.useState(null),[n,o]=u.useState(!0),l=u.useCallback(async f=>{try{o(!0);const m=await ji(f.uid);m.length>0?r(m[0]):r(null)}catch(m){console.error("Erreur lors du chargement du personnage:",m),r(null)}finally{o(!1)}},[]),d=u.useCallback(async f=>{if(!i)throw new Error("Utilisateur non connecté");try{o(!0);const m={userId:i.uid,name:f.name,faction:f.faction,race:f.race,class:f.class,level:1,experience:0,experienceToNextLevel:Math.floor(100*Math.pow(1.5,0)),health:0,maxHealth:0,mana:0,maxMana:0,strength:0,agility:0,intellect:0,stamina:0,attackPower:5,spellPower:5,armor:5,critChance:5,achievements:[],gold:0,defeatedMonsters:0,totalDamageDealt:0,inventory:{potions:[]},equipment:{},bagItems:[],chatChannel:[]},b=De(m);await wi({...m,...b,mana:b.maxMana,health:b.maxHealth}),await l(i)}catch(m){throw console.error("Erreur lors de la création du personnage:",m),m}finally{o(!1)}},[i,l]),c=u.useCallback(async f=>{if(!s?.id)throw new Error("Aucun personnage à mettre à jour");try{const m=De(f);await he(S.characters,f.id??s.id,{...f,...m})}catch(m){throw console.error("Erreur lors de la mise à jour du personnage:",m),m}},[s]),x=u.useCallback(async()=>{i&&await l(i)},[i,l]);u.useEffect(()=>{i?l(i):(r(null),o(!1))},[i,l]),u.useEffect(()=>{if(!s?.id)return;const f=ui(S.characters,s.id,m=>{m&&r(m)});return()=>f()},[s?.id]);const h={character:s,loading:n,hasCharacter:s!==null,createNewCharacter:d,updateCharacter:c,refreshCharacter:x};return t.jsx(Lt.Provider,{value:h,children:e})},D=()=>{const e=u.useContext(Lt);if(!e)throw new Error("useCharacter must be used within a CharacterProvider");return e},Mt=u.createContext(void 0),Wi=a.div`
  position: fixed;
  left: ${({$x:e})=>e}px;
  top: ${({$y:e})=>e}px;
  z-index: 10000;
  opacity: ${({$visible:e})=>e?1:0};
  transition: opacity 0.2s ease;
  transform: translate(-50%, -100%) translateY(-10px);
`,Di=a.div`
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
`,Pi=a.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing.xs};
  border-top: 1px solid rgba(255, 215, 0, 0.3);
  padding-top: ${({theme:e})=>e.spacing.sm};
`,Qe=a.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`,Te=a.div`
//   display: flex;
  color: #1eff00;
  font-size: ${({theme:e})=>e.fontSizes.sm};
  width: calc(100% - 100px);
  text-transform: capitalize;
`,Re=a.div`
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
`;function qi({children:e}){const[i,s]=u.useState(null),[r,n]=u.useState({x:0,y:0}),[o,l]=u.useState(!1),[d,c]=u.useState(!1),x=(b,g)=>{s(b),n(g),l(!0)},h=()=>{l(!1),setTimeout(()=>{d||s(null)},200)},f=()=>{c(!0),l(!0)},m=()=>{c(!1),l(!1),setTimeout(()=>{d||s(null)},200)};return t.jsxs(Mt.Provider,{value:{showTooltip:x,hideTooltip:h},children:[e,i&&t.jsx(Wi,{$x:r.x,$y:r.y,$visible:o,onMouseEnter:f,onMouseLeave:m,children:t.jsxs(Di,{$quality:i.quality,onClick:h,children:[t.jsx(Bi,{$quality:i.quality,children:i.title}),i.description&&t.jsxs(Ai,{children:['"',i.description,'"']}),i.stats&&Object.keys(i.stats).length>0&&t.jsx(Pi,{children:Object.entries(i.stats).sort().reverse().map(([b,g])=>t.jsxs(Qe,{children:[t.jsx(Te,{children:b}),t.jsx(Re,{children:g}),i.equiped&&t.jsx(t.Fragment,{children:t.jsx(_e,{$colorText:Number(g)>Number(i.equiped.stats[b])?"green":"red",children:`${Number(g)-Number(i.equiped.stats[b])}`})})]},b))}),t.jsxs(Qe,{children:[t.jsx(Te,{children:"level"}),t.jsx(Re,{children:i.level}),i.equiped&&t.jsx(_e,{$colorText:Number(i.level)>Number(i.equiped.level)?"green":"red",children:`${i.equiped.level}`})]})]})})]})}function Ft(){const e=u.useContext(Mt);if(!e)throw new Error("useTooltip must be used within a TooltipProvider");return e}const Wt=u.createContext(void 0),Ei=a.div`
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
`,zi=a.div`
  color: ${({theme:e})=>e.colors.primary.gold};
  font-size: ${({theme:e})=>e.fontSizes.lg};
  text-shadow: ${({theme:e})=>e.shadows.glow.gold};
  text-align: center;
`,Ci=a.div`
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
`,Qi=a.div`
  font-weight: ${({theme:e})=>e.fontWeights.bold};
  color: ${({theme:e,$color:i})=>i||e.colors.primary.gold};
`,Ti=a.div`
  font-size: ${({theme:e})=>e.fontSizes.sm};
  color: ${({theme:e})=>e.colors.winter.iceBlue};
`,Ri=a.div`
  font-size: ${({theme:e})=>e.fontSizes.sm};
  color: ${({theme:e})=>e.colors.winter.iceBlue};
`,_i=a.div`
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
`;function Hi({children:e}){const[i,s]=u.useState(null),[r,n]=u.useState(!1),{character:o}=D();function l(){n(!0)}function d(){n(!1)}const c=u.useCallback(async()=>{const h=await fi();s(h)},[]);u.useEffect(()=>{jt("characters",c),c()},[o,c]);const x={members:i,showMembers:l,hideMembers:d};return t.jsxs(Wt.Provider,{value:x,children:[t.jsxs(Ei,{$visible:r,children:[t.jsx(Si,{$visible:r,onClick:()=>{n(!r)},children:r?"❌":"👥"}),t.jsx(zi,{children:"Members"}),t.jsx(Ci,{children:i&&i.map(h=>t.jsxs(Ii,{children:[t.jsx(Ti,{children:typeof h.updatedAt=="number"&&h.updatedAt+60*1e3*15>Date.now()?"🟢":"⚪"}),t.jsx(Ri,{children:h.level}),t.jsx(Qi,{$color:R[h.class].color,children:h.name}),o&&o.id!==h.id&&t.jsxs(_i,{children:[o.isAdmin&&t.jsx(be,{onClick:()=>{h.id&&hi("characters",h.id)},children:"🗑️"}),t.jsx(be,{onClick:()=>{console.log("SEND LOVE")},children:"❤️"}),t.jsx(be,{onClick:()=>{bi(o,h)},children:"💬"})]})]},h.id))})]}),e]})}const Ni=()=>{const e=u.useContext(Wt);if(!e)throw new Error("useMembers must be used within a MembersProvider");return e},Zi=u.createContext(void 0),Gi=a.div`
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
`,Oi=a.div`
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
`,Ui=a.div`
    display: flex;
    flex-direction: row;
    background-color: rgba(0, 0, 0, 0.4);
    gap: ${({theme:e})=>e.spacing.md};
    padding: ${({theme:e})=>e.spacing.xs} ${({theme:e})=>e.spacing.sm};
    height: 30px;
    `,Vi=a.div`
    color: ${({theme:e,selected:i,$type:s})=>{switch(i){case!0:return e.colors.primary.gold;default:return s!=="general"?e.colors.channels.wisp:e.colors.text.secondary}}};
    font-size: ${({theme:e})=>e.fontSizes.base};
    font-weight: ${({theme:e})=>e.fontWeights.bold};
    cursor: pointer;
    display: flex;
    align-items: center;
    `,Xi=a.div`
    flex: 1;
    // background: red;
    padding: 0;
    overflow-y: auto;
    height: calc(100% - 60px);
    `,Yi=a.div`
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
    `,Ji=a.span`
    font-weight: ${({theme:e})=>e.fontWeights.semibold};
    `,Ki=a.input`
    padding: ${({theme:e})=>e.spacing.sm};
    border: none;
    border-radius: ${({theme:e})=>e.borderRadius.sm};
    background-color: rgba(0, 0, 0, 0.4);
    color: ${({theme:e})=>e.colors.neutral.white};
    font-size: ${({theme:e})=>e.fontSizes.base};
    margin: 0;
    width: 100%;
    height: 30px;
`;function es({children:e}){const[i,s]=u.useState(!1),[r,n]=u.useState("general"),{character:o}=D(),[l,d]=u.useState([]),c=[{slug:"general",name:"Général"},...o?.chatChannel||[]],x=u.useCallback(async()=>{const g=await mi(r);d(g.map($=>({who:$.who,message:$.message,timestamp:$.timestamp??Date.now()})))},[r]),h=()=>{s(!0)},f=()=>{s(!1)},m=g=>{g.value&&o&&(gi(o.name,g.value,r),g.value="")};u.useEffect(()=>{x()},[x]),u.useEffect(()=>{jt("messages",async()=>{await x()})},[x]);const b=Ct.useRef(null);return u.useEffect(()=>{b.current&&(b.current.scrollTop=b.current.scrollHeight)},[l]),t.jsxs(Zi.Provider,{value:{showChat:h,hideChat:f},children:[t.jsxs(Gi,{$visible:i,children:[t.jsx(Oi,{$visible:i,onClick:()=>s(!i),children:i?"❌":"💬"}),i&&t.jsxs(t.Fragment,{children:[t.jsx(Ui,{children:c.map(g=>t.jsxs(Vi,{selected:r===g.slug,onClick:()=>n(g.slug),$type:g.slug,children:[g.name,g.slug!=="general"&&t.jsx("span",{style:{marginLeft:"4px",cursor:"pointer",fontSize:"12px"},onClick:$=>{if($.stopPropagation(),!o)return;const B=g.slug;ki(o,B),r===B&&n("general")},children:"❌"})]},g.slug))}),t.jsx(Xi,{ref:b,children:l.map((g,$)=>t.jsxs(Yi,{$type:r,children:[t.jsxs(Ji,{children:["[",g.who,"]:"]})," ",g.message]},$))}),t.jsx(Ki,{onKeyDown:g=>{g.key==="Enter"&&m(g.currentTarget)}})]})]}),e]})}const F=a.button`
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
`;const ts=a.header`
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
`,is=a.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: ${({theme:e})=>e.spacing.lg};
`,ss=a.div`
  font-family: ${({theme:e})=>e.fonts.display};
  font-size: ${({theme:e})=>e.fontSizes["2xl"]};
  color: ${({theme:e})=>e.colors.primary.gold};
  text-shadow: ${({theme:e})=>e.shadows.glow.gold};
  cursor: pointer;
  user-select: none;

  @media (max-width: ${({theme:e})=>e.breakpoints.md}) {
    font-size: ${({theme:e})=>e.fontSizes.xl};
  }
`,rs=a.nav`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing.md};
`,ns=a.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing.md};
  padding: ${({theme:e})=>e.spacing.sm} ${({theme:e})=>e.spacing.md};
  background: rgba(10, 14, 26, 0.5);
  border-radius: ${({theme:e})=>e.borderRadius.md};
  border: ${({theme:e})=>e.borders.thin} solid ${({theme:e})=>e.colors.winter.darkIce};
`,as=a.span`
  color: ${({theme:e})=>e.colors.winter.iceBlue};
  font-weight: ${({theme:e})=>e.fontWeights.medium};
  font-size: ${({theme:e})=>e.fontSizes.sm};

  @media (max-width: ${({theme:e})=>e.breakpoints.md}) {
    display: none;
  }
`,os=a.div`
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
`;function re({showActions:e=!0}){const{user:i,loading:s}=Ee(),{character:r}=D(),n=async()=>{try{await ci(),window.location.reload()}catch(o){console.error("Erreur lors de la déconnexion:",o)}};return t.jsx(ts,{children:t.jsxs(is,{children:[t.jsx(_,{to:"/",style:{textDecoration:"none"},children:t.jsx(ss,{children:"❄️ Fête d'Hiver"})}),t.jsx(rs,{children:s?t.jsx("div",{children:"Chargement..."}):i?t.jsxs(t.Fragment,{children:[e&&t.jsxs(t.Fragment,{children:[t.jsx(_,{to:"/",children:t.jsx(F,{$size:"small",$variant:"horde",children:"👤"})}),t.jsx(_,{to:"/exploration",children:t.jsx(F,{$size:"small",children:"🗺️"})}),t.jsx(_,{to:"/shop",children:t.jsx(F,{$size:"small",$variant:"alliance",children:"🏪"})}),t.jsx(_,{to:"/bestiary",children:t.jsx(F,{$size:"small",$variant:"secondary",children:"📖"})}),t.jsx(_,{to:"/leaderboard",children:t.jsx(F,{$size:"small",$variant:"secondary",children:"🏆"})})]}),r&&r.isAdmin?t.jsx(F,{$size:"small",$variant:"secondary",onClick:n,children:"Nouveau Personnage"}):t.jsx(t.Fragment,{}),t.jsxs(ns,{children:[t.jsx(os,{children:"👤"}),t.jsx(as,{children:r?.name||"Aventurier"})]})]}):null})]})})}const ls=a.input.attrs({type:"radio"})`
  opacity: 0;
  position: absolute;
  left: -9999px;
`,cs=a.label`
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
`,ne=({checked:e,onChange:i,label:s,value:r,name:n,borderColor:o,backgroundColor:l,disabled:d})=>t.jsxs(cs,{$checked:e,$borderColor:o,$backgroundColor:l,$disabled:d,children:[t.jsx(ls,{checked:e,onChange:i,value:r,name:n,disabled:d}),s]}),ds=a.div`
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
`,xs=a.div`
  max-width: 900px;
  width: 100%;
`,ps=a.h1`
  font-family: ${({theme:e})=>e.fonts.display};
  font-size: ${({theme:e})=>e.fontSizes["3xl"]};
  color: ${({theme:e})=>e.colors.primary.gold};
  text-shadow: ${({theme:e})=>e.shadows.glow.gold};
  text-align: center;
  margin-bottom: ${({theme:e})=>e.spacing.xl};
`,Y=a.div`
  margin-bottom: ${({theme:e})=>e.spacing.md};
`,J=a.label`
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
`,us=a.div`
  background: rgba(0, 0, 0, 0.5);
  border: ${({theme:e})=>e.borders.medium} solid ${({theme:e})=>e.colors.winter.darkIce};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  padding: ${({theme:e})=>e.spacing.lg};
  margin-top: ${({theme:e})=>e.spacing.lg};
`,ms=a.h3`
  color: ${({theme:e})=>e.colors.primary.gold};
  font-family: ${({theme:e})=>e.fonts.display};
  margin-bottom: ${({theme:e})=>e.spacing.md};
  text-align: center;
`,gs=a.div`
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
`,fs=a.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing.md};
  justify-content: center;
  margin-top: ${({theme:e})=>e.spacing.xl};
`;function ys({onComplete:e,onCancel:i}){const[s,r]=u.useState(""),[n,o]=u.useState(null),[l,d]=u.useState(null),[c,x]=u.useState(null),h=u.useMemo(()=>n?$i(n):[],[n]),f=u.useMemo(()=>!l||!n?[]:Li(l,n),[l,n]),m=u.useMemo(()=>!c||!l?null:$t(c,l),[c,l]),b=()=>{s&&n&&l&&c&&e({name:s,faction:n,race:l,class:c})};return t.jsx(ds,{children:t.jsxs(xs,{children:[t.jsx(ps,{children:"⚔️ Création de Personnage"}),t.jsxs(Y,{children:[t.jsx(J,{children:"Nom du personnage"}),t.jsx(hs,{type:"text",value:s,onChange:g=>r(g.target.value),placeholder:"Entrez un nom (min. 3 caractères)",maxLength:12,autoFocus:!0})]}),t.jsxs(Y,{children:[t.jsx(J,{children:"Faction"}),t.jsxs("div",{style:{display:"flex",gap:"1rem",justifyContent:"center"},children:[t.jsx(ne,{checked:n==="alliance",onChange:()=>{o("alliance"),d(null),x(null)},label:t.jsx("span",{children:"🛡️ Alliance"}),value:"alliance",name:"faction",borderColor:"#3b82f6",backgroundColor:"#1e293b"}),t.jsx(ne,{checked:n==="horde",onChange:()=>{o("horde"),d(null),x(null)},label:t.jsx("span",{children:"⚔️ Horde"}),value:"horde",name:"faction",borderColor:"#ef4444",backgroundColor:"#450a0a"})]})]}),n&&t.jsxs(Y,{children:[t.jsx(J,{children:"Race"}),t.jsx("div",{style:{display:"flex",gap:"1rem",flexWrap:"wrap",justifyContent:"center"},children:h.map(g=>t.jsx(ne,{checked:l===g.id,onChange:()=>{d(g.id),x(null)},label:t.jsxs("span",{children:[g.icon," ",g.name]}),value:g.id,name:"race",borderColor:n==="alliance"?"#3b82f6":"#ef4444",backgroundColor:n==="alliance"?"#1e293b":"#450a0a"},g.id))})]}),l&&n&&t.jsxs(Y,{children:[t.jsx(J,{children:"Classe"}),t.jsx("div",{style:{display:"flex",gap:"1rem",flexWrap:"wrap",justifyContent:"center"},children:f.map(g=>t.jsx(ne,{checked:c===g.id,onChange:()=>x(g.id),label:t.jsxs("span",{style:{color:g.color},children:[g.icon," ",g.name]}),value:g.id,name:"class",borderColor:g.color,backgroundColor:"#222",disabled:!1},g.id))})]}),c&&t.jsxs(Y,{children:[t.jsx(J,{children:"Résumé de la classe"}),t.jsx("div",{style:{marginBottom:"1rem",color:f.find(g=>g.id===c)?.color,textAlign:"center"},children:f.find(g=>g.id===c)?.description}),m&&t.jsxs(us,{children:[t.jsx(ms,{children:"📊 Statistiques de départ"}),t.jsxs(gs,{children:[t.jsxs(N,{children:[t.jsx(Z,{children:"❤️ Points de vie"}),t.jsx(G,{children:m.health})]}),t.jsxs(N,{children:[t.jsx(Z,{children:m.energyName}),t.jsx(G,{children:m.energy})]}),t.jsxs(N,{children:[t.jsx(Z,{children:"💪 Force"}),t.jsx(G,{children:m.strength})]}),t.jsxs(N,{children:[t.jsx(Z,{children:"🏃 Agilité"}),t.jsx(G,{children:m.agility})]}),t.jsxs(N,{children:[t.jsx(Z,{children:"🧠 Intelligence"}),t.jsx(G,{children:m.intellect})]}),t.jsxs(N,{children:[t.jsx(Z,{children:"🛡️ Endurance"}),t.jsx(G,{children:m.stamina})]})]})]})]}),t.jsxs(fs,{children:[i&&t.jsx(F,{$variant:"secondary",onClick:i,children:"Annuler"}),t.jsx(F,{onClick:b,disabled:!(s.trim().length>=3&&n&&l&&c),children:"✓ Créer le personnage"})]})]})})}const O=[{id:"wolf",name:"Loup",type:"beast",icon:"🐺",minLevel:1,maxLevel:5,baseHealth:15,baseDamage:100,baseArmor:5,experienceReward:25,goldReward:100,abilities:[{name:"Morsure",icon:"🦷",damage:150,cooldown:2,description:"Mord férocement la cible"}]},{id:"boar",name:"Sanglier",type:"beast",icon:"🐗",minLevel:1,maxLevel:5,baseHealth:20,baseDamage:120,baseArmor:8,experienceReward:30,goldReward:120,abilities:[{name:"Charge",icon:"💨",damage:12,cooldown:3,description:"Charge brutalement"}]},{id:"murloc",name:"Murloc",type:"humanoid",icon:"🐸",minLevel:5,maxLevel:10,baseHealth:30,baseDamage:600,baseArmor:10,experienceReward:200,goldReward:600,abilities:[{name:"Cri Murloc",icon:"📢",damage:780,cooldown:4,description:"MRGLGLGL!"}]},{id:"bandit",name:"Bandit",type:"humanoid",icon:"🗡️",minLevel:6,maxLevel:12,baseHealth:45,baseDamage:720,baseArmor:12,experienceReward:250,goldReward:720,abilities:[{name:"Coup Sournois",icon:"🔪",damage:800,cooldown:3,description:"Frappe dans le dos"}]},{id:"skeleton",name:"Squelette",type:"undead",icon:"💀",minLevel:10,maxLevel:15,baseHealth:60,baseDamage:1200,baseArmor:15,experienceReward:260,goldReward:1200,abilities:[{name:"Toucher de Givre",icon:"❄️",damage:1400,cooldown:4,description:"Toucher glacial qui ralentit"}]},{id:"ghoul",name:"Goule",type:"undead",icon:"🧟",minLevel:12,maxLevel:18,baseHealth:75,baseDamage:1400,baseArmor:18,experienceReward:275,goldReward:1400,abilities:[{name:"Festin de Chair",icon:"🩸",damage:2e3,heal:20,cooldown:5,description:"Dévore et se soigne"}]},{id:"fire-elemental",name:"Élémentaire de Feu",type:"elemental",icon:"🔥",minLevel:15,maxLevel:22,baseHealth:100,baseDamage:1800,baseArmor:18,experienceReward:300,goldReward:1800,abilities:[{name:"Boule de Feu",icon:"💥",damage:2e3,cooldown:3,description:"Lance une boule de feu"}]},{id:"ice-elemental",name:"Élémentaire de Glace",type:"elemental",icon:"❄️",minLevel:16,maxLevel:23,baseHealth:100,baseDamage:2e3,baseArmor:20,experienceReward:300,goldReward:1800,abilities:[{name:"Tempête de Glace",icon:"🌨️",damage:2500,cooldown:3,description:"Congèle les ennemis"}]},{id:"imp",name:"Diablotin",type:"demon",icon:"👿",minLevel:20,maxLevel:25,baseHealth:120,baseDamage:2400,baseArmor:22,experienceReward:350,goldReward:2400,abilities:[{name:"Trait de Feu",icon:"🔥",damage:3e3,cooldown:3,description:"Tire un trait de feu"}]},{id:"felguard",name:"Gangregarde",type:"demon",icon:"😈",minLevel:23,maxLevel:28,baseHealth:150,baseDamage:2600,baseArmor:28,experienceReward:370,goldReward:2600,abilities:[{name:"Coup Gangreneux",icon:"💚",damage:3200,cooldown:4,description:"Frappe corrompue"}]},{id:"giant",name:"Géant de Pierre",type:"giant",icon:"🗿",minLevel:25,maxLevel:32,baseHealth:175,baseDamage:3e3,baseArmor:30,experienceReward:550,goldReward:3e3,abilities:[{name:"Écrasement",icon:"🪨",damage:3500,cooldown:4,description:"Écrase avec une force titanesque"}]},{id:"whelp",name:"Dragonnet",type:"dragon",icon:"🐉",minLevel:30,maxLevel:35,baseHealth:200,baseDamage:3500,baseArmor:40,experienceReward:650,goldReward:3500,abilities:[{name:"Souffle de Flammes",icon:"🔥",damage:4e3,cooldown:4,description:"Souffle enflammé dévastateur"}]},{id:"dragon",name:"Dragon",type:"dragon",icon:"🐲",minLevel:35,maxLevel:45,baseHealth:300,baseDamage:4200,baseArmor:50,experienceReward:800,goldReward:4200,abilities:[{name:"Souffle de Dragon",icon:"💨",damage:5e3,cooldown:3,description:"Souffle destructeur"},{name:"Rugissement",icon:"😤",damage:4500,cooldown:5,description:"Rugissement terrifiant"}]},{id:"ancient-dragon",name:"Dragon Ancien",type:"dragon",icon:"🐲",minLevel:45,maxLevel:60,baseHealth:400,baseDamage:5500,baseArmor:60,experienceReward:1200,goldReward:5500,abilities:[{name:"Cataclysme",icon:"💥",damage:6e3,cooldown:5,description:"Déchaîne un cataclysme"},{name:"Souffle Ancestral",icon:"🌪️",damage:7e3,cooldown:4,description:"Souffle millénaire"}]}],bs=e=>{const i=O.filter(r=>r.minLevel<=e&&r.maxLevel>=e);if(i.length===0){const r=O.reduce((n,o)=>o.maxLevel<e&&o.maxLevel>n.maxLevel?o:n,O[0]);return He(r,e)}const s=i.reduce((r,n)=>Math.abs(n.maxLevel-e)<Math.abs(r.maxLevel-e)?n:r,i[0]);return He(s,e)},He=(e,i)=>({id:`${e.id}-${Date.now()}`,name:`${e.name} (Niv. ${i})`,type:e.type,icon:e.icon,level:i,health:Math.floor(e.baseHealth*2*i),maxHealth:Math.floor(e.baseHealth*2*i),damage:Math.floor(e.baseDamage+(i-e.minLevel)*2),armor:Math.floor(e.baseArmor+(i-e.minLevel)*2*.5),experienceReward:Math.floor(ue(i)/(4+i/10)),goldReward:Math.floor(e.goldReward+(i-e.minLevel)*1),abilities:e.abilities||[]}),ks={"heroic-strike":"ability_rogue_ambush","mortal-strike":"ability_warrior_savageblow",whirlwind:"ability_whirlwind",recklessness:"ability_criticalstrike",execute:"inv_sword_48","crusader-strike":"spell_holy_crusaderstrike","holy-light":"spell_holy_holybolt","divine-storm":"ability_paladin_divinestorm","hammer-of-wrath":"ability_thunderbolt","divine-shield":"spell_holy_divineintervention","arcane-shot":"ability_impalingbolt","multi-shot":"ability_upgrademoonglaive","aimed-shot":"inv_spear_07","explosive-shot":"ability_hunter_explosiveshot","kill-shot":"ability_hunter_assassinate2",backstab:"ability_backstab","sinister-strike":"spell_shadow_ritualofsacrifice",eviscerate:"ability_rogue_eviscerate","kidney-shot":"ability_rogue_kidneyshot","shadow-dance":"ability_rogue_shadowdance",smite:"spell_holy_holysmite",heal:"spell_holy_heal","shadow-word-pain":"spell_shadow_shadowwordpain","mind-blast":"spell_shadow_unholyfrenzy","divine-hymn":"spell_holy_divinehymn","lightning-bolt":"spell_nature_lightning","earth-shock":"spell_nature_earthshock","lava-burst":"spell_shaman_lavaburst","chain-lightning":"spell_nature_chainlightning","elemental-mastery":"spell_nature_wispheal",fireball:"spell_fire_flamebolt",frostbolt:"spell_frost_frostbolt02","arcane-missiles":"spell_nature_starfall",pyroblast:"spell_fire_fireball02","arcane-power":"spell_nature_lightning","shadow-bolt":"spell_shadow_shadowbolt",immolate:"spell_fire_immolation","chaos-bolt":"ability_warlock_chaosbolt",soulfire:"spell_fire_fireball02","dark-soul":"spell_shadow_shadetruesight",wrath:"spell_nature_abolishmagic",moonfire:"spell_nature_starfall",starfire:"spell_arcane_starfire",starfall:"ability_druid_starfall",incarnation:"spell_druid_incarnation","death-strike":"spell_deathknight_butcher2",obliterate:"spell_deathknight_classicon","frost-strike":"spell_deathknight_empowerruneblade2","soul-reaper":"ability_deathknight_soulreaper",apocalypse:"artifactability_unholydeathknight_deathsembrace",attack:"inv_sword_04",defend:"ability_defend",flee:"ability_rogue_sprint","health-potion":"inv_potion_54","mana-potion":"inv_potion_76"};function pe(e){const i=ks[e];return i?`https://wow.zamimg.com/images/wow/icons/large/${i}.jpg`:(console.warn(`Icon not found for key: ${e}`),"")}const ke={attack:pe("attack"),defend:pe("defend"),flee:pe("flee")},js={warrior:[{id:"heroic-strike",name:"Frappe héroïque",icon:"⚔️",description:"Une attaque puissante qui inflige 20% des dégâts.",baseDamage:.2,baseManaCost:10,manaCostPerLevel:2,unlockLevel:1},{id:"mortal-strike",name:"Frappe mortelle",icon:"💥",description:"Frappe dévastatrice infligeant 50% des dégâts.",baseDamage:.5,baseManaCost:20,manaCostPerLevel:3,unlockLevel:5},{id:"whirlwind",name:"Tourbillon",icon:"🌪️",description:"Attaque tournoyante massive (80% dégâts).",baseDamage:.8,baseManaCost:30,manaCostPerLevel:4,unlockLevel:10},{id:"recklessness",name:"Témérité",icon:"💢",description:"Frappe avec témérité (100% dégâts).",baseDamage:1,baseManaCost:40,manaCostPerLevel:5,unlockLevel:20},{id:"execute",name:"Exécution",icon:"☠️",description:"Coup final dévastateur (100% dégâts).",baseDamage:1,baseManaCost:50,manaCostPerLevel:6,unlockLevel:30}],paladin:[{id:"crusader-strike",name:"Frappe du croisé",icon:"⚡",description:"Frappe sacrée (20% dégâts).",baseDamage:.2,baseManaCost:15,manaCostPerLevel:2,unlockLevel:1},{id:"holy-light",name:"Lumière sacrée",icon:"✨",description:"Soigne pour 100% du spellPower.",baseHeal:1,baseManaCost:20,manaCostPerLevel:3,unlockLevel:3},{id:"divine-storm",name:"Tempête divine",icon:"🌟",description:"Tempête sacrée (80% dégâts).",baseDamage:.8,baseManaCost:30,manaCostPerLevel:4,unlockLevel:10},{id:"hammer-of-wrath",name:"Marteau de courroux",icon:"🔨",description:"Marteau divin (100% dégâts).",baseDamage:1,baseManaCost:40,manaCostPerLevel:5,unlockLevel:20},{id:"divine-shield",name:"Bouclier divin",icon:"🛡️",description:"Frappe protectrice (100% dégâts + soin 50%).",baseDamage:1,baseHeal:.5,baseManaCost:50,manaCostPerLevel:6,unlockLevel:30}],hunter:[{id:"arcane-shot",name:"Tir des arcanes",icon:"🏹",description:"Tir magique (20% dégâts).",baseDamage:.2,baseManaCost:15,manaCostPerLevel:2,unlockLevel:1},{id:"multi-shot",name:"Tir multiple",icon:"🎯",description:"Salve de flèches (50% dégâts).",baseDamage:.5,baseManaCost:25,manaCostPerLevel:3,unlockLevel:5},{id:"aimed-shot",name:"Tir visé",icon:"🎪",description:"Tir précis et puissant (80% dégâts).",baseDamage:.8,baseManaCost:35,manaCostPerLevel:4,unlockLevel:15},{id:"explosive-shot",name:"Tir explosif",icon:"💣",description:"Flèche explosive (100% dégâts).",baseDamage:1,baseManaCost:45,manaCostPerLevel:5,unlockLevel:25},{id:"kill-shot",name:"Tir mortel",icon:"💀",description:"Tir fatal (100% dégâts).",baseDamage:1,baseManaCost:60,manaCostPerLevel:7,unlockLevel:35}],rogue:[{id:"sinister-strike",name:"Frappe pernicieuse",icon:"🗡️",description:"Attaque sournoise (20% dégâts).",baseDamage:.2,baseManaCost:10,manaCostPerLevel:2,unlockLevel:1},{id:"eviscerate",name:"Éventration",icon:"🔪",description:"Attaque tranchante (50% dégâts).",baseDamage:.5,baseManaCost:20,manaCostPerLevel:3,unlockLevel:5},{id:"fan-of-knives",name:"Salve de couteaux",icon:"🗡️",description:"Attaque de zone (80% dégâts).",baseDamage:.8,baseManaCost:30,manaCostPerLevel:4,unlockLevel:10},{id:"shadowstep",name:"Pas de l’ombre",icon:"🌑",description:"Attaque furtive (100% dégâts).",baseDamage:1,baseManaCost:40,manaCostPerLevel:5,unlockLevel:20},{id:"vendetta",name:"Vendetta",icon:"🔥",description:"Attaque vengeresse (100% dégâts).",baseDamage:1,baseManaCost:50,manaCostPerLevel:6,unlockLevel:30}],priest:[{id:"smite",name:"Châtiment",icon:"✨",description:"Frappe sacrée (20% dégâts magiques).",baseDamage:.2,baseManaCost:15,manaCostPerLevel:2,unlockLevel:1},{id:"heal",name:"Soins",icon:"💚",description:"Soigne pour 50% du spellPower.",baseHeal:.5,baseManaCost:20,manaCostPerLevel:3,unlockLevel:1},{id:"shadow-word-pain",name:"Mot de l’ombre : Douleur",icon:"🌑",description:"Douleur de l’ombre (50% dégâts).",baseDamage:.5,baseManaCost:30,manaCostPerLevel:4,unlockLevel:10},{id:"mind-blast",name:"Explosion mentale",icon:"🧠",description:"Attaque mentale (80% dégâts).",baseDamage:.8,baseManaCost:40,manaCostPerLevel:5,unlockLevel:20},{id:"divine-hymn",name:"Hymne divin",icon:"🎵",description:"Hymne sacré (100% dégâts + soin 100%).",baseDamage:1,baseHeal:1,baseManaCost:50,manaCostPerLevel:6,unlockLevel:30}],shaman:[{id:"lightning-bolt",name:"Éclair",icon:"⚡",description:"Éclair foudroyant (20% dégâts).",baseDamage:.2,baseManaCost:15,manaCostPerLevel:2,unlockLevel:1},{id:"earth-shock",name:"Horion de terre",icon:"🌍",description:"Choc élémentaire (50% dégâts).",baseDamage:.5,baseManaCost:25,manaCostPerLevel:3,unlockLevel:5},{id:"lava-burst",name:"Explosion de lave",icon:"🌋",description:"Lave brûlante (80% dégâts).",baseDamage:.8,baseManaCost:35,manaCostPerLevel:4,unlockLevel:15},{id:"chain-lightning",name:"Chaîne d’éclairs",icon:"⛈️",description:"Éclairs enchaînés (100% dégâts).",baseDamage:1,baseManaCost:45,manaCostPerLevel:5,unlockLevel:25},{id:"elemental-mastery",name:"Maîtrise élémentaire",icon:"🔥",description:"Puissance des éléments (100% dégâts).",baseDamage:1,baseManaCost:60,manaCostPerLevel:7,unlockLevel:35}],mage:[{id:"fireball",name:"Boule de feu",icon:"🔥",description:"Boule de feu ardente (20% dégâts).",baseDamage:.2,baseManaCost:15,manaCostPerLevel:2,unlockLevel:1},{id:"frostbolt",name:"Éclair de givre",icon:"❄️",description:"Givre glacial (50% dégâts).",baseDamage:.5,baseManaCost:20,manaCostPerLevel:3,unlockLevel:3},{id:"arcane-missiles",name:"Projectiles des arcanes",icon:"🔮",description:"Salve arcanique (80% dégâts).",baseDamage:.8,baseManaCost:35,manaCostPerLevel:4,unlockLevel:15},{id:"pyroblast",name:"Explosion pyrotechnique",icon:"💥",description:"Explosion de feu (100% dégâts).",baseDamage:1,baseManaCost:50,manaCostPerLevel:6,unlockLevel:25},{id:"arcane-power",name:"Puissance des arcanes",icon:"✨",description:"Puissance arcanique ultime (100% dégâts).",baseDamage:1,baseManaCost:70,manaCostPerLevel:8,unlockLevel:35}],warlock:[{id:"shadow-bolt",name:"Trait de l’ombre",icon:"🌑",description:"Projectile d’ombre (20% dégâts).",baseDamage:.2,baseManaCost:15,manaCostPerLevel:2,unlockLevel:1},{id:"immolate",name:"Immolation",icon:"🔥",description:"Flammes démoniaques (50% dégâts).",baseDamage:.5,baseManaCost:25,manaCostPerLevel:3,unlockLevel:5},{id:"chaos-bolt",name:"Trait du chaos",icon:"💀",description:"Chaos destructeur (80% dégâts).",baseDamage:.8,baseManaCost:40,manaCostPerLevel:5,unlockLevel:15},{id:"soul-fire",name:"Feu de l’âme",icon:"👻",description:"Flammes spirituelles (100% dégâts).",baseDamage:1,baseManaCost:50,manaCostPerLevel:6,unlockLevel:25},{id:"dark-soul",name:"Âme noire",icon:"😈",description:"Puissance démoniaque (100% dégâts).",baseDamage:1,baseManaCost:65,manaCostPerLevel:8,unlockLevel:35}],druid:[{id:"wrath",name:"Colère",icon:"🌿",description:"Colère de la nature (20% dégâts).",baseDamage:.2,baseManaCost:15,manaCostPerLevel:2,unlockLevel:1},{id:"moonfire",name:"Eclat lunaire",icon:"🌙",description:"Lumière lunaire (50% dégâts).",baseDamage:.5,baseManaCost:25,manaCostPerLevel:3,unlockLevel:5},{id:"starfire",name:"Feu stellaire",icon:"⭐",description:"Feu des étoiles (80% dégâts).",baseDamage:.8,baseManaCost:35,manaCostPerLevel:4,unlockLevel:15},{id:"starsurge",name:"Déferlante stellaire",icon:"💫",description:"Déferlante cosmique (100% dégâts).",baseDamage:1,baseManaCost:45,manaCostPerLevel:5,unlockLevel:25},{id:"incarnation",name:"Incarnation",icon:"🦁",description:"Puissance animale (100% dégâts).",baseDamage:1,baseManaCost:60,manaCostPerLevel:7,unlockLevel:35}],"death-knight":[{id:"death-strike",name:"Frappe de la mort",icon:"💀",description:"Frappe mortelle (20% dégâts).",baseDamage:.2,baseManaCost:15,manaCostPerLevel:2,unlockLevel:1},{id:"obliterate",name:"Oblitération",icon:"⚔️",description:"Coup destructeur (50% dégâts).",baseDamage:.5,baseManaCost:25,manaCostPerLevel:3,unlockLevel:5},{id:"frost-strike",name:"Frappe de givre",icon:"❄️",description:"Frappe glaciale (80% dégâts).",baseDamage:.8,baseManaCost:35,manaCostPerLevel:4,unlockLevel:15},{id:"soul-reaper",name:"Faucheuse d’âme",icon:"👻",description:"Récolte d’âmes (100% dégâts).",baseDamage:1,baseManaCost:45,manaCostPerLevel:5,unlockLevel:25},{id:"apocalypse",name:"Apocalypse",icon:"☠️",description:"Fin des temps (100% dégâts).",baseDamage:1,baseManaCost:60,manaCostPerLevel:7,unlockLevel:35}]},ws=(e,i)=>(js[e]||[]).filter(r=>r.unlockLevel<=i),Dt=(e,i)=>e.baseManaCost+(e.manaCostPerLevel||0)*(i-1),vs=(e,i,s,r)=>e.baseDamage?Math.floor((r==="intellect"?s:i)*(1+e.baseDamage)):0,$s=(e,i)=>e.baseHeal?Math.floor(i*e.baseHeal):0,Ls=e=>pe(e.id),ae=e=>({minor:"poor",lesser:"common",normal:"common",greater:"uncommon",superior:"rare",ultimate:"epic"})[e],te=[{id:"health-minor",name:"Potion de soins mineure",description:"Restaure 600 points de vie",type:"health",quality:"minor",icon:"🧪",restoreAmount:600,price:10,requiredLevel:1},{id:"health-lesser",name:"Potion de soins inférieure",description:"Restaure 6000 points de vie",type:"health",quality:"lesser",icon:"🧪",restoreAmount:6e3,price:25,requiredLevel:5},{id:"health-normal",name:"Potion de soins",description:"Restaure 200 points de vie",type:"health",quality:"normal",icon:"🧪",restoreAmount:200,price:50,requiredLevel:10},{id:"health-greater",name:"Potion de soins supérieure",description:"Restaure 400 points de vie",type:"health",quality:"greater",icon:"🧪",restoreAmount:400,price:100,requiredLevel:20},{id:"health-superior",name:"Potion de soins majeure",description:"Restaure 800 points de vie",type:"health",quality:"superior",icon:"🧪",restoreAmount:800,price:200,requiredLevel:30},{id:"health-ultimate",name:"Élixir de vie ultime",description:"Restaure 50% de la vie maximale",type:"health",quality:"ultimate",icon:"⚗️",restoreAmount:0,restorePercent:50,price:500,requiredLevel:40},{id:"mana-minor",name:"Potion de mana mineure",description:"Restaure 30 points de mana",type:"mana",quality:"minor",icon:"💙",restoreAmount:30,price:10,requiredLevel:1},{id:"mana-lesser",name:"Potion de mana inférieure",description:"Restaure 60 points de mana",type:"mana",quality:"lesser",icon:"💙",restoreAmount:60,price:25,requiredLevel:5},{id:"mana-normal",name:"Potion de mana",description:"Restaure 120 points de mana",type:"mana",quality:"normal",icon:"💙",restoreAmount:120,price:50,requiredLevel:10},{id:"mana-greater",name:"Potion de mana supérieure",description:"Restaure 250 points de mana",type:"mana",quality:"greater",icon:"💙",restoreAmount:250,price:100,requiredLevel:20},{id:"mana-superior",name:"Potion de mana majeure",description:"Restaure 500 points de mana",type:"mana",quality:"superior",icon:"💙",restoreAmount:500,price:200,requiredLevel:30},{id:"mana-ultimate",name:"Élixir de mana ultime",description:"Restaure 50% du mana maximum",type:"mana",quality:"ultimate",icon:"💎",restoreAmount:0,restorePercent:50,price:500,requiredLevel:40},{id:"health-dev",name:"Élixir de vie du Dev",description:"Restaure 100% de la vie maximale",type:"health",quality:"ultimate",icon:"💎",restoreAmount:0,restorePercent:100,price:0,requiredLevel:0},{id:"mana-dev",name:"Élixir de mana du Dev",description:"Restaure 100% du mana maximum",type:"mana",quality:"ultimate",icon:"💎",restoreAmount:0,restorePercent:100,price:0,requiredLevel:0},{id:"elixir-of-strength",name:"Élixir de force",description:"Augmente temporairement la force de 20% pendant 30 minutes",type:"effect",quality:"superior",icon:"🧪"+Fe.strength.emoji,restoreAmount:0,restorePercent:20,price:10,requiredLevel:1},{id:"elixir-of-luck",name:"Élixir de chance",description:"Augmente temporairement la chance de 20% pendant 30 minutes",type:"effect",quality:"superior",icon:"🧪"+Fe.luck.emoji,restoreAmount:0,restorePercent:20,price:10,requiredLevel:1}],Ms=(e,i)=>{let s=te.filter(r=>r.requiredLevel<=e);return i&&(s=s.filter(r=>r.type===i)),s.sort((r,n)=>r.price-n.price)},Ne=(e,i,s)=>{let r=e.restoreAmount;return e.restorePercent&&(r=Math.floor(s*e.restorePercent/100)),Math.min(s,i+r)-i},Fs=(e,i,s=1)=>e.potions.find(n=>n.potionId===i)?{...e,potions:e.potions.map(n=>n.potionId===i?{...n,quantity:n.quantity+s}:n)}:{...e,potions:[...e.potions,{potionId:i,quantity:s}]},Bt=(e,i)=>{const s=e.potions.find(n=>n.potionId===i);return!s||s.quantity<=0?{inventory:e,success:!1}:{inventory:{potions:e.potions.map(n=>n.potionId===i?{...n,quantity:n.quantity-1}:n).filter(n=>n.quantity>0)},success:!0}},Ws=({primaryColor:e="#C0C0C0",secondaryColor:i="#8B4513",accentColor:s="#FFD700",size:r=24})=>t.jsxs("svg",{width:r,height:r,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("path",{d:"M19 3L5 17L7 19L21 5L19 3Z",fill:e,stroke:s,strokeWidth:"0.5"}),t.jsx("rect",{x:"4",y:"16",width:"6",height:"1.5",fill:s,transform:"rotate(45 4 16)"}),t.jsx("path",{d:"M3 19L5 17L4 18L3 19Z",fill:i,stroke:s,strokeWidth:"0.3"}),t.jsx("circle",{cx:"2.5",cy:"19.5",r:"1.2",fill:s})]}),Ds=({primaryColor:e="#8B4513",secondaryColor:i="#4B0082",accentColor:s="#9370DB",size:r=24})=>t.jsxs("svg",{width:r,height:r,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("line",{x1:"6",y1:"20",x2:"18",y2:"4",stroke:e,strokeWidth:"1.5",strokeLinecap:"round"}),t.jsx("path",{d:"M18 4L19.5 2.5L18 1L16.5 2.5L18 4Z",fill:s,stroke:i,strokeWidth:"0.5"}),t.jsx("circle",{cx:"18",cy:"3",r:"2.5",fill:s,opacity:"0.3"}),t.jsx("circle",{cx:"18",cy:"3",r:"1.5",fill:s,opacity:"0.5"})]}),Bs=({primaryColor:e="#696969",secondaryColor:i="#2F4F4F",accentColor:s="#A9A9A9",size:r=24})=>t.jsxs("svg",{width:r,height:r,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("path",{d:"M15 3L7 11L9 13L17 5L15 3Z",fill:e,stroke:s,strokeWidth:"0.5"}),t.jsx("rect",{x:"6",y:"11",width:"4",height:"1",fill:s,transform:"rotate(45 6 11)"}),t.jsx("line",{x1:"5.5",y1:"13.5",x2:"4",y2:"15",stroke:i,strokeWidth:"1.5",strokeLinecap:"round"})]}),As=({primaryColor:e="#8B4513",secondaryColor:i="#A9A9A9",accentColor:s="#FFD700",size:r=24})=>t.jsxs("svg",{width:r,height:r,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("line",{x1:"6",y1:"20",x2:"15",y2:"8",stroke:e,strokeWidth:"1.8",strokeLinecap:"round"}),t.jsx("path",{d:"M14 8L18 5L20 8L17 11L14 8Z",fill:i,stroke:s,strokeWidth:"0.5"}),t.jsx("path",{d:"M15 8L19 10L18 12L14 10L15 8Z",fill:i,stroke:s,strokeWidth:"0.5"})]}),Ps=({primaryColor:e="#8B4513",secondaryColor:i="#F5DEB3",accentColor:s="#D2691E",size:r=24})=>t.jsxs("svg",{width:r,height:r,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("path",{d:"M18 4Q20 12 18 20",stroke:e,strokeWidth:"1.5",fill:"none",strokeLinecap:"round"}),t.jsx("path",{d:"M18 4L16 12L18 20",stroke:i,strokeWidth:"0.5",fill:"none"}),t.jsx("line",{x1:"4",y1:"12",x2:"16",y2:"12",stroke:s,strokeWidth:"1"}),t.jsx("path",{d:"M4 12L6 11L6 13L4 12Z",fill:s})]}),qs=({primaryColor:e="#C0C0C0",secondaryColor:i="#A9A9A9",accentColor:s="#FFD700",size:r=24})=>t.jsxs("svg",{width:r,height:r,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("path",{d:"M8 12Q8 6 12 6Q16 6 16 12L16 16L8 16L8 12Z",fill:e,stroke:s,strokeWidth:"0.5"}),t.jsx("path",{d:"M9 14L15 14",stroke:i,strokeWidth:"1"}),t.jsx("circle",{cx:"12",cy:"9",r:"1",fill:s}),t.jsx("path",{d:"M8 16L8 18L16 18L16 16",fill:i,stroke:s,strokeWidth:"0.3"})]}),Es=({primaryColor:e="#C0C0C0",secondaryColor:i="#A9A9A9",accentColor:s="#FFD700",size:r=24})=>t.jsxs("svg",{width:r,height:r,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("path",{d:"M9 6L9 18L15 18L15 6L12 4L9 6Z",fill:e,stroke:s,strokeWidth:"0.5"}),t.jsx("ellipse",{cx:"8",cy:"7",rx:"2",ry:"1.5",fill:i,stroke:s,strokeWidth:"0.3"}),t.jsx("ellipse",{cx:"16",cy:"7",rx:"2",ry:"1.5",fill:i,stroke:s,strokeWidth:"0.3"}),t.jsx("line",{x1:"12",y1:"8",x2:"12",y2:"16",stroke:s,strokeWidth:"0.5"}),t.jsx("circle",{cx:"12",cy:"10",r:"0.8",fill:s})]}),Ss=({primaryColor:e="#8B7355",secondaryColor:i="#654321",accentColor:s="#D4AF37",size:r=24})=>t.jsxs("svg",{width:r,height:r,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("rect",{x:"8",y:"6",width:"8",height:"1.5",fill:s}),t.jsx("path",{d:"M8 7.5L9 18L11 18L10 7.5L8 7.5Z",fill:e,stroke:i,strokeWidth:"0.3"}),t.jsx("path",{d:"M14 7.5L13 18L15 18L16 7.5L14 7.5Z",fill:e,stroke:i,strokeWidth:"0.3"}),t.jsx("ellipse",{cx:"9.5",cy:"13",rx:"1",ry:"1.5",fill:i}),t.jsx("ellipse",{cx:"14.5",cy:"13",rx:"1",ry:"1.5",fill:i})]}),zs=({primaryColor:e="#8B4513",secondaryColor:i="#654321",accentColor:s="#D2691E",size:r=24})=>t.jsxs("svg",{width:r,height:r,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("path",{d:"M8 10L8 16L7 18L10 18L10 16L9 10L8 10Z",fill:e,stroke:i,strokeWidth:"0.5"}),t.jsx("path",{d:"M14 10L14 16L13 18L16 18L16 16L15 10L14 10Z",fill:e,stroke:i,strokeWidth:"0.5"}),t.jsx("line",{x1:"8.5",y1:"12",x2:"9.5",y2:"12",stroke:s,strokeWidth:"0.3"}),t.jsx("line",{x1:"8.5",y1:"14",x2:"9.5",y2:"14",stroke:s,strokeWidth:"0.3"}),t.jsx("line",{x1:"14.5",y1:"12",x2:"15.5",y2:"12",stroke:s,strokeWidth:"0.3"}),t.jsx("line",{x1:"14.5",y1:"14",x2:"15.5",y2:"14",stroke:s,strokeWidth:"0.3"})]}),je=({primaryColor:e="#FFD700",secondaryColor:i="#DAA520",gemColor:s="#4169E1",size:r=24})=>t.jsxs("svg",{width:r,height:r,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("circle",{cx:"12",cy:"13",r:"5",fill:"none",stroke:e,strokeWidth:"1.5"}),t.jsx("circle",{cx:"12",cy:"13",r:"3.5",fill:"none",stroke:i,strokeWidth:"0.5"}),t.jsx("path",{d:"M12 6L14 9L12 11L10 9L12 6Z",fill:s,stroke:e,strokeWidth:"0.5"}),t.jsx("path",{d:"M11.5 7L12 8L11.5 8.5",stroke:"white",strokeWidth:"0.5",opacity:"0.6"})]}),Cs=({primaryColor:e="#FFD700",secondaryColor:i="#DAA520",gemColor:s="#8B008B",size:r=24})=>t.jsxs("svg",{width:r,height:r,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("path",{d:"M8 4Q12 6 16 4",stroke:e,strokeWidth:"1",fill:"none"}),t.jsx("line",{x1:"8",y1:"4",x2:"10",y2:"10",stroke:e,strokeWidth:"0.8"}),t.jsx("line",{x1:"16",y1:"4",x2:"14",y2:"10",stroke:e,strokeWidth:"0.8"}),t.jsx("path",{d:"M10 10L12 16L14 10L10 10Z",fill:i,stroke:e,strokeWidth:"0.5"}),t.jsx("ellipse",{cx:"12",cy:"12",rx:"1.5",ry:"2",fill:s}),t.jsx("ellipse",{cx:"11.5",cy:"11.5",rx:"0.5",ry:"0.7",fill:"white",opacity:"0.6"})]}),Is=({primaryColor:e="#C0C0C0",secondaryColor:i="#A9A9A9",gemColor:s="#FF1493",size:r=24})=>t.jsxs("svg",{width:r,height:r,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("path",{d:"M6 8Q12 12 18 8",stroke:e,strokeWidth:"1.2",fill:"none"}),t.jsx("circle",{cx:"6",cy:"8",r:"1",fill:i}),t.jsx("circle",{cx:"12",cy:"11",r:"1",fill:i}),t.jsx("circle",{cx:"18",cy:"8",r:"1",fill:i}),t.jsx("circle",{cx:"12",cy:"14",r:"2.5",fill:s,stroke:e,strokeWidth:"0.5"}),t.jsx("circle",{cx:"11.5",cy:"13.5",r:"0.8",fill:"white",opacity:"0.5"})]}),Qs=({primaryColor:e="#FFD700",secondaryColor:i="#DAA520",gemColor:s="#00CED1",size:r=24})=>t.jsxs("svg",{width:r,height:r,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("ellipse",{cx:"12",cy:"12",rx:"6",ry:"4",fill:"none",stroke:e,strokeWidth:"1.5"}),t.jsx("ellipse",{cx:"12",cy:"12",rx:"5",ry:"3",fill:"none",stroke:i,strokeWidth:"0.5"}),t.jsx("circle",{cx:"12",cy:"8",r:"1",fill:s}),t.jsx("circle",{cx:"8",cy:"11",r:"0.8",fill:s}),t.jsx("circle",{cx:"16",cy:"11",r:"0.8",fill:s}),t.jsx("circle",{cx:"12",cy:"16",r:"1",fill:s})]}),Ts=({primaryColor:e="#FFD700",secondaryColor:i="#DAA520",gemColor:s="#FF0000",size:r=24})=>t.jsxs("svg",{width:r,height:r,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("path",{d:"M6 14L6 16L18 16L18 14L16 10L14 12L12 8L10 12L8 10L6 14Z",fill:e,stroke:i,strokeWidth:"0.5"}),t.jsx("circle",{cx:"8",cy:"10",r:"0.8",fill:i}),t.jsx("circle",{cx:"12",cy:"8",r:"0.8",fill:i}),t.jsx("circle",{cx:"16",cy:"10",r:"0.8",fill:i}),t.jsx("circle",{cx:"9",cy:"14",r:"1",fill:s}),t.jsx("circle",{cx:"12",cy:"13",r:"1.2",fill:s}),t.jsx("circle",{cx:"15",cy:"14",r:"1",fill:s})]}),z=e=>{switch(e){case"poor":return{primary:"#9D9D9D",secondary:"#7A7A7A",accent:"#6B6B6B",gem:"#808080"};case"common":return{primary:"#FFFFFF",secondary:"#D4D4D4",accent:"#B8B8B8",gem:"#E0E0E0"};case"uncommon":return{primary:"#1EFF00",secondary:"#00D000",accent:"#00A000",gem:"#00FF7F"};case"rare":return{primary:"#0070DD",secondary:"#0052AA",accent:"#003D88",gem:"#4169E1"};case"epic":return{primary:"#A335EE",secondary:"#8020CC",accent:"#6010AA",gem:"#9370DB"};case"legendary":return{primary:"#FF8000",secondary:"#DD6600",accent:"#BB4400",gem:"#FFD700"};default:return{primary:"#FFFFFF",secondary:"#D4D4D4",accent:"#B8B8B8",gem:"#E0E0E0"}}},Rs=({itemType:e,itemName:i="",size:s=24})=>{const r=i.toLowerCase(),n={primary:"#C0C0C0",secondary:"#A9A9A9",accent:"#E8E8E8"},o={primary:"#FFD700",secondary:"#DAA520"},l={primary:"#8B4513",secondary:"#654321",accent:"#D2691E"};switch(e){case"weapon":return r.includes("bâton")||r.includes("staff")||r.includes("sceptre")?t.jsx(Ds,{primaryColor:l.primary,secondaryColor:"#9370DB",accentColor:"#BA55D3",size:s}):r.includes("dague")||r.includes("dagger")||r.includes("poignard")?t.jsx(Bs,{primaryColor:n.primary,secondaryColor:n.secondary,accentColor:n.accent,size:s}):r.includes("hache")||r.includes("axe")?t.jsx(As,{primaryColor:l.primary,secondaryColor:n.primary,accentColor:n.accent,size:s}):r.includes("arc")||r.includes("bow")||r.includes("arbalète")?t.jsx(Ps,{primaryColor:l.primary,secondaryColor:"#DEB887",accentColor:l.accent,size:s}):t.jsx(Ws,{primaryColor:n.primary,secondaryColor:l.secondary,accentColor:n.accent,size:s});case"head":return t.jsx(qs,{primaryColor:n.primary,secondaryColor:n.secondary,accentColor:o.primary,size:s});case"chest":return t.jsx(Es,{primaryColor:n.primary,secondaryColor:n.secondary,accentColor:o.primary,size:s});case"legs":return t.jsx(Ss,{primaryColor:"#6B5D4F",secondaryColor:"#4A3F35",accentColor:o.secondary,size:s});case"boots":return t.jsx(zs,{primaryColor:l.primary,secondaryColor:l.secondary,accentColor:l.accent,size:s});case"jewelry":return r.includes("anneau")||r.includes("ring")||r.includes("bague")?t.jsx(je,{primaryColor:o.primary,secondaryColor:o.secondary,gemColor:"#4169E1",size:s}):r.includes("amulette")||r.includes("amulet")||r.includes("médaillon")?t.jsx(Cs,{primaryColor:o.primary,secondaryColor:o.secondary,gemColor:"#9370DB",size:s}):r.includes("collier")||r.includes("necklace")?t.jsx(Is,{primaryColor:"#C0C0C0",secondaryColor:"#A9A9A9",gemColor:"#DC143C",size:s}):r.includes("bracelet")?t.jsx(Qs,{primaryColor:o.primary,secondaryColor:o.secondary,gemColor:"#00CED1",size:s}):r.includes("couronne")||r.includes("crown")||r.includes("diadème")?t.jsx(Ts,{primaryColor:o.primary,secondaryColor:o.secondary,gemColor:"#FF0000",size:s}):t.jsx(je,{primaryColor:o.primary,secondaryColor:o.secondary,gemColor:"#4169E1",size:s});default:return t.jsx(je,{primaryColor:o.primary,secondaryColor:o.secondary,gemColor:"#4169E1",size:s})}},_s=a.div`
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
`,Se=({itemType:e,itemName:i="",quality:s="common",size:r=48})=>{const n=Math.floor(r*.65);return t.jsx(_s,{$quality:s,$size:r,children:t.jsx(Rs,{itemType:e,itemName:i,quality:"common",size:n})})},Hs=({liquidColor:e="#DC143C",glassColor:i="#87CEEB",size:s=24})=>t.jsxs("svg",{width:s,height:s,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("path",{d:"M10 3L10 6L8 8L8 18C8 19 9 20 10 20L14 20C15 20 16 19 16 18L16 8L14 6L14 3L10 3Z",fill:i,fillOpacity:"0.3",stroke:i,strokeWidth:"0.8"}),t.jsx("path",{d:"M8.5 12L8.5 18C8.5 18.5 9 19 10 19L14 19C15 19 15.5 18.5 15.5 18L15.5 12L8.5 12Z",fill:e,opacity:"0.8"}),t.jsx("ellipse",{cx:"12",cy:"13",rx:"2",ry:"1",fill:e,opacity:"0.4"}),t.jsx("rect",{x:"10",y:"2",width:"4",height:"1.5",fill:"#8B4513",rx:"0.5"}),t.jsx("rect",{x:"10.5",y:"3",width:"3",height:"0.5",fill:"#654321"}),t.jsx("path",{d:"M9 8L9 16",stroke:"white",strokeWidth:"0.5",opacity:"0.5"})]}),Ns=({liquidColor:e="#4169E1",glassColor:i="#87CEEB",size:s=24})=>t.jsxs("svg",{width:s,height:s,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("path",{d:"M10 3L10 6L8 8L8 18C8 19 9 20 10 20L14 20C15 20 16 19 16 18L16 8L14 6L14 3L10 3Z",fill:i,fillOpacity:"0.3",stroke:i,strokeWidth:"0.8"}),t.jsx("path",{d:"M8.5 12L8.5 18C8.5 18.5 9 19 10 19L14 19C15 19 15.5 18.5 15.5 18L15.5 12L8.5 12Z",fill:e,opacity:"0.8"}),t.jsx("circle",{cx:"10",cy:"14",r:"0.5",fill:"#E0FFFF",opacity:"0.8"}),t.jsx("circle",{cx:"13",cy:"15",r:"0.4",fill:"#E0FFFF",opacity:"0.8"}),t.jsx("circle",{cx:"11.5",cy:"16.5",r:"0.3",fill:"#E0FFFF",opacity:"0.8"}),t.jsx("rect",{x:"10",y:"2",width:"4",height:"1.5",fill:"#8B4513",rx:"0.5"}),t.jsx("rect",{x:"10.5",y:"3",width:"3",height:"0.5",fill:"#654321"}),t.jsx("path",{d:"M9 8L9 16",stroke:"white",strokeWidth:"0.5",opacity:"0.5"})]}),Zs=({liquidColor:e="#9370DB",glassColor:i="#87CEEB",size:s=24})=>t.jsxs("svg",{width:s,height:s,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("ellipse",{cx:"12",cy:"13",rx:"5",ry:"6",fill:i,fillOpacity:"0.3",stroke:i,strokeWidth:"0.8"}),t.jsx("ellipse",{cx:"12",cy:"14.5",rx:"4.5",ry:"4.5",fill:e,opacity:"0.8"}),t.jsx("rect",{x:"11",y:"6",width:"2",height:"2",fill:i,fillOpacity:"0.3",stroke:i,strokeWidth:"0.6"}),t.jsx("rect",{x:"10.5",y:"4.5",width:"3",height:"1.8",fill:"#8B4513",rx:"0.5"}),t.jsx("ellipse",{cx:"10",cy:"12",rx:"1.5",ry:"2",fill:"white",opacity:"0.4"})]}),Gs=a.div`
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
`,At=({potion:e,size:i=48})=>{const s=Math.floor(i*.65),r=l=>{switch(l.id.split("-").pop()){case"strength":switch(l.quality){case"minor":return"#CD5C5C";case"lesser":return"#DC143C";case"normal":return"#FF0000";case"greater":return"#FF4500";case"superior":return"#FF6347";case"ultimate":return"#FF7F50";default:return"#DC143C"}case"agility":switch(l.quality){case"minor":return"#4682B4";case"lesser":return"#4169E1";case"normal":return"#0000FF";case"greater":return"#1E90FF";case"superior":return"#00BFFF";case"ultimate":return"#00FFFF";default:return"#4169E1"}case"intellect":switch(l.quality){case"minor":return"#6A5ACD";case"lesser":return"#7B68EE";case"normal":return"#8A2BE2";case"greater":return"#9370DB";case"superior":return"#BA55D3";case"ultimate":return"#DA70D6";default:return"#7B68EE"}case"stamina":switch(l.quality){case"minor":return"#2E8B57";case"lesser":return"#3CB371";case"normal":return"#32CD32";case"greater":return"#00FF7F";case"superior":return"#7CFC00";case"ultimate":return"#ADFF2F";default:return"#3CB371"}case"attackPower":switch(l.quality){case"minor":return"#B8860B";case"lesser":return"#DAA520";case"normal":return"#FFD700";case"greater":return"#FFA500";case"superior":return"#FF8C00";case"ultimate":return"#FF7F50";default:return"#DAA520"}case"spellPower":switch(l.quality){case"minor":return"#4B0082";case"lesser":return"#6A5ACD";case"normal":return"#8A2BE2";case"greater":return"#9400D3";case"superior":return"#9932CC";case"ultimate":return"#BA55D3";default:return"#6A5ACD"}case"critChance":switch(l.quality){case"minor":return"#708090";case"lesser":return"#778899";case"normal":return"#A9A9A9";case"greater":return"#C0C0C0";case"superior":return"#D3D3D3";case"ultimate":return"#DCDCDC";default:return"#778899"}case"luck":switch(l.quality){case"minor":return"#8B4513";case"lesser":return"#A0522D";case"normal":return"#D2691E";case"greater":return"#FF8C00";case"superior":return"#FFA500";case"ultimate":return"#FFD700";default:return"#A0522D"}default:return"#ffffffff00"}},o=(l=>{switch(l.type){case"health":switch(l.quality){case"minor":return"#CD5C5C";case"lesser":return"#DC143C";case"normal":return"#FF0000";case"greater":return"#FF1493";case"superior":return"#FF69B4";case"ultimate":return"#FFD700";default:return"#DC143C"}case"mana":switch(l.quality){case"minor":return"#4682B4";case"lesser":return"#4169E1";case"normal":return"#0000FF";case"greater":return"#1E90FF";case"superior":return"#00BFFF";case"ultimate":return"#00FFFF";default:return"#4169E1"}case"effect":return r(l);default:return"#ffffffff00"}})(e);return t.jsx(Gs,{$quality:e.quality,$size:i,children:e.type==="health"?t.jsx(Hs,{liquidColor:o,size:s}):e.type==="mana"?t.jsx(Ns,{liquidColor:o,size:s}):t.jsx(Zs,{liquidColor:o,size:s})})},Os=({primaryColor:e="#E8E8E8",secondaryColor:i="#D3D3D3",accentColor:s="#A9A9A9",size:r=48})=>t.jsxs("svg",{width:r,height:r,viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("ellipse",{cx:"24",cy:"16",rx:"9",ry:"10",fill:e,stroke:s,strokeWidth:"1.5"}),t.jsx("path",{d:"M17 14Q24 13 31 14",stroke:s,strokeWidth:"0.8",opacity:"0.5"}),t.jsx("path",{d:"M16 18Q24 17 32 18",stroke:s,strokeWidth:"0.8",opacity:"0.5"}),t.jsx("ellipse",{cx:"20",cy:"15",rx:"2.5",ry:"3.5",fill:"black"}),t.jsx("ellipse",{cx:"28",cy:"15",rx:"2.5",ry:"3.5",fill:"black"}),t.jsx("circle",{cx:"20",cy:"14.5",r:"1.2",fill:"#DC2626",opacity:"0.9"}),t.jsx("circle",{cx:"28",cy:"14.5",r:"1.2",fill:"#DC2626",opacity:"0.9"}),t.jsx("circle",{cx:"20.5",cy:"14",r:"0.5",fill:"#FCA5A5",opacity:"0.8"}),t.jsx("circle",{cx:"28.5",cy:"14",r:"0.5",fill:"#FCA5A5",opacity:"0.8"}),t.jsx("line",{x1:"17",y1:"12",x2:"19",y2:"14",stroke:s,strokeWidth:"0.6",opacity:"0.6"}),t.jsx("line",{x1:"29",y1:"12",x2:"31",y2:"14",stroke:s,strokeWidth:"0.6",opacity:"0.6"}),t.jsx("path",{d:"M24 18L22 21L26 21Z",fill:"black"}),t.jsx("path",{d:"M23 21L22.5 22M25 21L25.5 22",stroke:s,strokeWidth:"0.5",opacity:"0.5"}),t.jsx("path",{d:"M18 22Q24 23 30 22",stroke:s,strokeWidth:"1",fill:"none"}),t.jsx("rect",{x:"19",y:"22",width:"1.2",height:"2.5",rx:"0.2",fill:i,stroke:s,strokeWidth:"0.3"}),t.jsx("rect",{x:"21",y:"22",width:"1.2",height:"2.5",rx:"0.2",fill:i,stroke:s,strokeWidth:"0.3"}),t.jsx("rect",{x:"23",y:"22",width:"1.2",height:"2.8",rx:"0.2",fill:e,stroke:s,strokeWidth:"0.3"}),t.jsx("rect",{x:"25",y:"22",width:"1.2",height:"2.8",rx:"0.2",fill:e,stroke:s,strokeWidth:"0.3"}),t.jsx("rect",{x:"27",y:"22",width:"1.2",height:"2.5",rx:"0.2",fill:i,stroke:s,strokeWidth:"0.3"}),t.jsx("rect",{x:"20",y:"24.5",width:"1",height:"2",rx:"0.2",fill:i,opacity:"0.7"}),t.jsx("rect",{x:"22",y:"24.5",width:"1",height:"2",rx:"0.2",fill:i,opacity:"0.7"}),t.jsx("rect",{x:"26",y:"24.5",width:"1",height:"2",rx:"0.2",fill:i,opacity:"0.7"}),t.jsx("rect",{x:"22.5",y:"26",width:"3",height:"2",rx:"0.5",fill:e,stroke:s,strokeWidth:"0.5"}),t.jsx("circle",{cx:"24",cy:"27",r:"1",fill:i}),t.jsx("rect",{x:"22.5",y:"28",width:"3",height:"2",rx:"0.5",fill:e,stroke:s,strokeWidth:"0.5"}),t.jsx("circle",{cx:"24",cy:"29",r:"1",fill:i}),t.jsx("rect",{x:"22.5",y:"30",width:"3",height:"2",rx:"0.5",fill:e,stroke:s,strokeWidth:"0.5"}),t.jsx("circle",{cx:"24",cy:"31",r:"1",fill:i}),t.jsx("ellipse",{cx:"24",cy:"35",rx:"7",ry:"6",fill:"none",stroke:e,strokeWidth:"1.8"}),t.jsx("line",{x1:"24",y1:"30",x2:"24",y2:"40",stroke:e,strokeWidth:"1.8"}),t.jsx("path",{d:"M19 32Q24 31 29 32",stroke:e,strokeWidth:"1.2",fill:"none"}),t.jsx("path",{d:"M18 34Q24 33 30 34",stroke:e,strokeWidth:"1.2",fill:"none"}),t.jsx("path",{d:"M18 36Q24 35 30 36",stroke:e,strokeWidth:"1.2",fill:"none"}),t.jsx("path",{d:"M19 38Q24 37 29 38",stroke:e,strokeWidth:"1.2",fill:"none"}),t.jsx("line",{x1:"18",y1:"27",x2:"24",y2:"26",stroke:e,strokeWidth:"1.5"}),t.jsx("line",{x1:"30",y1:"27",x2:"24",y2:"26",stroke:e,strokeWidth:"1.5"}),t.jsx("line",{x1:"18",y1:"28",x2:"14",y2:"33",stroke:e,strokeWidth:"2",strokeLinecap:"round"}),t.jsx("circle",{cx:"14",cy:"33",r:"1.2",fill:i,stroke:s,strokeWidth:"0.5"}),t.jsx("line",{x1:"14",y1:"33",x2:"11",y2:"38",stroke:e,strokeWidth:"1.8",strokeLinecap:"round"}),t.jsx("line",{x1:"30",y1:"28",x2:"34",y2:"33",stroke:e,strokeWidth:"2",strokeLinecap:"round"}),t.jsx("circle",{cx:"34",cy:"33",r:"1.2",fill:i,stroke:s,strokeWidth:"0.5"}),t.jsx("line",{x1:"34",y1:"33",x2:"37",y2:"38",stroke:e,strokeWidth:"1.8",strokeLinecap:"round"}),t.jsx("path",{d:"M10 38L9 40M11 38L11 41M12 38L13 40",stroke:e,strokeWidth:"1.2",strokeLinecap:"round"}),t.jsx("path",{d:"M36 38L35 40M37 38L37 41M38 38L39 40",stroke:e,strokeWidth:"1.2",strokeLinecap:"round"}),t.jsx("ellipse",{cx:"24",cy:"41",rx:"5",ry:"3",fill:"none",stroke:e,strokeWidth:"1.5"}),t.jsx("line",{x1:"21",y1:"42",x2:"19",y2:"46",stroke:e,strokeWidth:"1.8",strokeLinecap:"round"}),t.jsx("line",{x1:"27",y1:"42",x2:"29",y2:"46",stroke:e,strokeWidth:"1.8",strokeLinecap:"round"}),t.jsx("circle",{cx:"24",cy:"30",r:"16",fill:"#DC2626",opacity:"0.05"}),t.jsx("circle",{cx:"15",cy:"20",r:"1",fill:"#DC2626",opacity:"0.3"}),t.jsx("circle",{cx:"33",cy:"20",r:"1",fill:"#DC2626",opacity:"0.3"})]}),Ze=({primaryColor:e="#8FBC8F",secondaryColor:i="#556B2F",accentColor:s="#FFEB3B",size:r=48})=>t.jsxs("svg",{width:r,height:r,viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("ellipse",{cx:"24",cy:"32",rx:"9",ry:"10",fill:e,stroke:i,strokeWidth:"1"}),t.jsx("circle",{cx:"24",cy:"18",r:"8",fill:e,stroke:i,strokeWidth:"1"}),t.jsx("ellipse",{cx:"15",cy:"18",rx:"3",ry:"5",fill:e,stroke:i,strokeWidth:"0.8"}),t.jsx("ellipse",{cx:"33",cy:"18",rx:"3",ry:"5",fill:e,stroke:i,strokeWidth:"0.8"}),t.jsx("ellipse",{cx:"21",cy:"17",rx:"2",ry:"2.5",fill:s}),t.jsx("ellipse",{cx:"27",cy:"17",rx:"2",ry:"2.5",fill:s}),t.jsx("circle",{cx:"21.5",cy:"17",r:"1",fill:"black"}),t.jsx("circle",{cx:"27.5",cy:"17",r:"1",fill:"black"}),t.jsx("path",{d:"M24 18L24 21L25 21",fill:i}),t.jsx("path",{d:"M20 22Q24 24 28 22",stroke:i,strokeWidth:"1",fill:"none"}),t.jsx("path",{d:"M21 22L21 23",stroke:"white",strokeWidth:"0.5"}),t.jsx("path",{d:"M27 22L27 23",stroke:"white",strokeWidth:"0.5"}),t.jsx("ellipse",{cx:"16",cy:"30",rx:"2.5",ry:"5",fill:e,stroke:i,strokeWidth:"0.8"}),t.jsx("ellipse",{cx:"32",cy:"30",rx:"2.5",ry:"5",fill:e,stroke:i,strokeWidth:"0.8"}),t.jsx("circle",{cx:"20",cy:"15",r:"0.8",fill:i,opacity:"0.5"}),t.jsx("circle",{cx:"26",cy:"20",r:"0.6",fill:i,opacity:"0.5"})]}),Us=({primaryColor:e="#6B8E23",secondaryColor:i="#556B2F",accentColor:s="#FFD700",size:r=48})=>t.jsxs("svg",{width:r,height:r,viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("ellipse",{cx:"24",cy:"34",rx:"11",ry:"10",fill:e,stroke:i,strokeWidth:"1.5"}),t.jsx("ellipse",{cx:"24",cy:"17",rx:"9",ry:"8",fill:e,stroke:i,strokeWidth:"1.5"}),t.jsx("path",{d:"M17 14Q24 12 31 14",fill:i,opacity:"0.3"}),t.jsx("ellipse",{cx:"20",cy:"16",rx:"2",ry:"2.5",fill:"#8B0000"}),t.jsx("ellipse",{cx:"28",cy:"16",rx:"2",ry:"2.5",fill:"#8B0000"}),t.jsx("circle",{cx:"20.5",cy:"15.5",r:"0.5",fill:"#FF0000"}),t.jsx("circle",{cx:"28.5",cy:"15.5",r:"0.5",fill:"#FF0000"}),t.jsx("path",{d:"M20 21L19 25",stroke:"white",strokeWidth:"1.5",strokeLinecap:"round"}),t.jsx("path",{d:"M28 21L29 25",stroke:"white",strokeWidth:"1.5",strokeLinecap:"round"}),t.jsx("path",{d:"M18 22Q24 25 30 22",stroke:i,strokeWidth:"1.5",fill:"none"}),t.jsx("line",{x1:"26",y1:"13",x2:"29",y2:"15",stroke:i,strokeWidth:"0.8"}),t.jsx("line",{x1:"15",y1:"18",x2:"17",y2:"20",stroke:i,strokeWidth:"0.8"}),t.jsx("ellipse",{cx:"14",cy:"32",rx:"3",ry:"7",fill:e,stroke:i,strokeWidth:"1"}),t.jsx("ellipse",{cx:"34",cy:"32",rx:"3",ry:"7",fill:e,stroke:i,strokeWidth:"1"}),t.jsx("circle",{cx:"24",cy:"28",r:"2",fill:s,stroke:i,strokeWidth:"0.5"})]}),Vs=({primaryColor:e="#78716C",secondaryColor:i="#57534E",accentColor:s="#A8A29E",size:r=48})=>t.jsxs("svg",{width:r,height:r,viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("rect",{x:"16",y:"26",width:"16",height:"18",rx:"2",fill:e,stroke:i,strokeWidth:"2"}),t.jsx("line",{x1:"18",y1:"30",x2:"22",y2:"28",stroke:i,strokeWidth:"1",opacity:"0.6"}),t.jsx("line",{x1:"24",y1:"32",x2:"28",y2:"30",stroke:i,strokeWidth:"1",opacity:"0.6"}),t.jsx("line",{x1:"20",y1:"36",x2:"24",y2:"34",stroke:i,strokeWidth:"1",opacity:"0.6"}),t.jsx("line",{x1:"26",y1:"38",x2:"30",y2:"36",stroke:i,strokeWidth:"1",opacity:"0.6"}),t.jsx("path",{d:"M20 32L18 30L20 28L22 30Z",fill:s,stroke:i,strokeWidth:"0.8"}),t.jsx("path",{d:"M28 36L26 34L28 32L30 34Z",fill:s,stroke:i,strokeWidth:"0.8"}),t.jsx("rect",{x:"18",y:"10",width:"12",height:"14",rx:"1.5",fill:e,stroke:i,strokeWidth:"2.5"}),t.jsx("line",{x1:"20",y1:"12",x2:"23",y2:"15",stroke:i,strokeWidth:"1.2",opacity:"0.6"}),t.jsx("line",{x1:"26",y1:"13",x2:"28",y2:"16",stroke:i,strokeWidth:"1.2",opacity:"0.6"}),t.jsx("rect",{x:"20",y:"15",width:"2.5",height:"4",rx:"0.5",fill:"black",opacity:"0.7"}),t.jsx("rect",{x:"25.5",y:"15",width:"2.5",height:"4",rx:"0.5",fill:"black",opacity:"0.7"}),t.jsx("circle",{cx:"21",cy:"17",r:"1",fill:"#FCD34D",opacity:"0.8"}),t.jsx("circle",{cx:"26.5",cy:"17",r:"1",fill:"#FCD34D",opacity:"0.8"}),t.jsx("circle",{cx:"21.3",cy:"16.7",r:"0.4",fill:"#FEF3C7"}),t.jsx("circle",{cx:"26.8",cy:"16.7",r:"0.4",fill:"#FEF3C7"}),t.jsx("rect",{x:"21",y:"21",width:"6",height:"1.5",rx:"0.3",fill:"black",opacity:"0.6"}),t.jsx("path",{d:"M22 10L20 7L22 8L24 6L26 8L28 7L26 10",fill:s,stroke:i,strokeWidth:"1"}),t.jsx("path",{d:"M20 7L19 5M24 6L24 4M28 7L29 5",stroke:i,strokeWidth:"1.2",strokeLinecap:"round"}),t.jsx("rect",{x:"12",y:"24",width:"6",height:"8",rx:"1",fill:e,stroke:i,strokeWidth:"2"}),t.jsx("rect",{x:"30",y:"24",width:"6",height:"8",rx:"1",fill:e,stroke:i,strokeWidth:"2"}),t.jsx("path",{d:"M14 26L13 24L15 25Z",fill:s,stroke:i,strokeWidth:"0.5"}),t.jsx("path",{d:"M34 26L35 24L33 25Z",fill:s,stroke:i,strokeWidth:"0.5"}),t.jsx("rect",{x:"10",y:"30",width:"5",height:"12",rx:"1.5",fill:e,stroke:i,strokeWidth:"2"}),t.jsx("rect",{x:"33",y:"30",width:"5",height:"12",rx:"1.5",fill:e,stroke:i,strokeWidth:"2"}),t.jsx("line",{x1:"11",y1:"34",x2:"13",y2:"36",stroke:i,strokeWidth:"0.8",opacity:"0.5"}),t.jsx("line",{x1:"35",y1:"34",x2:"37",y2:"36",stroke:i,strokeWidth:"0.8",opacity:"0.5"}),t.jsx("rect",{x:"8",y:"40",width:"8",height:"6",rx:"1.5",fill:e,stroke:i,strokeWidth:"2"}),t.jsx("rect",{x:"32",y:"40",width:"8",height:"6",rx:"1.5",fill:e,stroke:i,strokeWidth:"2"}),t.jsx("line",{x1:"10",y1:"42",x2:"10",y2:"44",stroke:i,strokeWidth:"1"}),t.jsx("line",{x1:"12",y1:"42",x2:"12",y2:"44",stroke:i,strokeWidth:"1"}),t.jsx("line",{x1:"14",y1:"42",x2:"14",y2:"44",stroke:i,strokeWidth:"1"}),t.jsx("line",{x1:"34",y1:"42",x2:"34",y2:"44",stroke:i,strokeWidth:"1"}),t.jsx("line",{x1:"36",y1:"42",x2:"36",y2:"44",stroke:i,strokeWidth:"1"}),t.jsx("line",{x1:"38",y1:"42",x2:"38",y2:"44",stroke:i,strokeWidth:"1"}),t.jsx("rect",{x:"18",y:"42",width:"5",height:"5",rx:"0.5",fill:e,stroke:i,strokeWidth:"2"}),t.jsx("rect",{x:"25",y:"42",width:"5",height:"5",rx:"0.5",fill:e,stroke:i,strokeWidth:"2"}),t.jsx("circle",{cx:"10",cy:"38",r:"1.2",fill:s,opacity:"0.6"}),t.jsx("circle",{cx:"38",cy:"38",r:"1.2",fill:s,opacity:"0.6"}),t.jsx("circle",{cx:"16",cy:"44",r:"0.8",fill:i,opacity:"0.5"}),t.jsx("circle",{cx:"32",cy:"44",r:"0.8",fill:i,opacity:"0.5"}),t.jsx("ellipse",{cx:"24",cy:"44",rx:"14",ry:"2",fill:i,opacity:"0.2"})]}),Xs=({primaryColor:e="#DC2626",secondaryColor:i="#991B1B",accentColor:s="#FCD34D",size:r=48})=>t.jsxs("svg",{width:r,height:r,viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("ellipse",{cx:"24",cy:"32",rx:"11",ry:"10",fill:e,stroke:i,strokeWidth:"2"}),t.jsx("path",{d:"M16 28Q18 26 20 28Q22 26 24 28Q26 26 28 28Q30 26 32 28",stroke:i,strokeWidth:"1",fill:"none",opacity:"0.4"}),t.jsx("path",{d:"M16 32Q18 30 20 32Q22 30 24 32Q26 30 28 32Q30 30 32 32",stroke:i,strokeWidth:"1",fill:"none",opacity:"0.4"}),t.jsx("path",{d:"M18 36Q20 34 22 36Q24 34 26 36Q28 34 30 36",stroke:i,strokeWidth:"1",fill:"none",opacity:"0.4"}),t.jsx("ellipse",{cx:"24",cy:"16",rx:"8",ry:"7",fill:e,stroke:i,strokeWidth:"2"}),t.jsx("ellipse",{cx:"24",cy:"20",rx:"6",ry:"4",fill:e,stroke:i,strokeWidth:"1.5"}),t.jsx("path",{d:"M20 21Q24 23 28 21",stroke:i,strokeWidth:"1",fill:"none"}),t.jsx("ellipse",{cx:"22",cy:"21",rx:"1",ry:"1.5",fill:"black"}),t.jsx("ellipse",{cx:"26",cy:"21",rx:"1",ry:"1.5",fill:"black"}),t.jsx("circle",{cx:"21",cy:"20",r:"0.8",fill:"#9CA3AF",opacity:"0.5"}),t.jsx("circle",{cx:"27",cy:"20",r:"0.8",fill:"#9CA3AF",opacity:"0.5"}),t.jsx("ellipse",{cx:"20",cy:"14",rx:"2.5",ry:"3.5",fill:s}),t.jsx("ellipse",{cx:"28",cy:"14",rx:"2.5",ry:"3.5",fill:s}),t.jsx("ellipse",{cx:"20",cy:"14",rx:"1",ry:"2.5",fill:"black"}),t.jsx("ellipse",{cx:"28",cy:"14",rx:"1",ry:"2.5",fill:"black"}),t.jsx("circle",{cx:"20",cy:"13",r:"0.5",fill:"#FEF3C7"}),t.jsx("circle",{cx:"28",cy:"13",r:"0.5",fill:"#FEF3C7"}),t.jsx("path",{d:"M18 10L16 6Q15 5 16 6",stroke:i,strokeWidth:"2.5",strokeLinecap:"round"}),t.jsx("path",{d:"M30 10L32 6Q33 5 32 6",stroke:i,strokeWidth:"2.5",strokeLinecap:"round"}),t.jsx("circle",{cx:"16",cy:"6",r:"1.2",fill:i}),t.jsx("circle",{cx:"32",cy:"6",r:"1.2",fill:i}),t.jsx("path",{d:"M17 11L15 9",stroke:i,strokeWidth:"1.5",strokeLinecap:"round"}),t.jsx("path",{d:"M31 11L33 9",stroke:i,strokeWidth:"1.5",strokeLinecap:"round"}),t.jsx("path",{d:"M13 30Q8 24 6 28Q5 32 8 36Q10 38 13 36",fill:i,stroke:i,strokeWidth:"1.5",opacity:"0.8"}),t.jsx("path",{d:"M35 30Q40 24 42 28Q43 32 40 36Q38 38 35 36",fill:i,stroke:i,strokeWidth:"1.5",opacity:"0.8"}),t.jsx("path",{d:"M10 30L8 34",stroke:e,strokeWidth:"1",opacity:"0.6"}),t.jsx("path",{d:"M12 30L10 35",stroke:e,strokeWidth:"1",opacity:"0.6"}),t.jsx("path",{d:"M38 30L40 34",stroke:e,strokeWidth:"1",opacity:"0.6"}),t.jsx("path",{d:"M36 30L38 35",stroke:e,strokeWidth:"1",opacity:"0.6"}),t.jsx("path",{d:"M24 22L23 24L24 24L25 24Z",fill:s,stroke:i,strokeWidth:"0.5"}),t.jsx("path",{d:"M24 25L23 28L24 27L25 28Z",fill:s,stroke:i,strokeWidth:"0.5"}),t.jsx("path",{d:"M24 29L23 32L24 31L25 32Z",fill:s,stroke:i,strokeWidth:"0.5"}),t.jsx("path",{d:"M24 33L23 36L24 35L25 36Z",fill:s,stroke:i,strokeWidth:"0.5"}),t.jsx("path",{d:"M18 40Q16 42 14 44",stroke:e,strokeWidth:"3",strokeLinecap:"round"}),t.jsx("path",{d:"M30 40Q32 42 34 44",stroke:e,strokeWidth:"3",strokeLinecap:"round"}),t.jsx("path",{d:"M13 44L12 46M14 44L14 46M15 44L16 46",stroke:i,strokeWidth:"1.2",strokeLinecap:"round"}),t.jsx("path",{d:"M33 44L32 46M34 44L34 46M35 44L36 46",stroke:i,strokeWidth:"1.2",strokeLinecap:"round"}),t.jsx("path",{d:"M24 40Q26 44 28 46Q30 46 29 44",stroke:e,strokeWidth:"3",strokeLinecap:"round"}),t.jsx("path",{d:"M28 46L30 44L28 42",fill:i,stroke:i,strokeWidth:"1"}),t.jsx("circle",{cx:"24",cy:"24",r:"1.5",fill:"#F97316",opacity:"0.7"}),t.jsx("circle",{cx:"22",cy:"25",r:"1",fill:"#FBBF24",opacity:"0.6"}),t.jsx("circle",{cx:"26",cy:"25",r:"1",fill:"#FBBF24",opacity:"0.6"})]}),Ys=({primaryColor:e="#EF4444",secondaryColor:i="#DC2626",accentColor:s="#FBBF24",size:r=48})=>t.jsxs("svg",{width:r,height:r,viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("ellipse",{cx:"24",cy:"30",rx:"9",ry:"8",fill:e,stroke:i,strokeWidth:"1.5"}),t.jsx("path",{d:"M18 28Q20 26 22 28Q24 26 26 28Q28 26 30 28",stroke:i,strokeWidth:"0.8",fill:"none",opacity:"0.3"}),t.jsx("path",{d:"M18 32Q20 30 22 32Q24 30 26 32Q28 30 30 32",stroke:i,strokeWidth:"0.8",fill:"none",opacity:"0.3"}),t.jsx("ellipse",{cx:"24",cy:"17",rx:"6.5",ry:"6",fill:e,stroke:i,strokeWidth:"1.5"}),t.jsx("ellipse",{cx:"24",cy:"20",rx:"4.5",ry:"3",fill:e,stroke:i,strokeWidth:"1"}),t.jsx("circle",{cx:"22.5",cy:"20.5",r:"0.6",fill:"black"}),t.jsx("circle",{cx:"25.5",cy:"20.5",r:"0.6",fill:"black"}),t.jsx("ellipse",{cx:"21",cy:"15",rx:"2.5",ry:"3",fill:s}),t.jsx("ellipse",{cx:"27",cy:"15",rx:"2.5",ry:"3",fill:s}),t.jsx("circle",{cx:"21",cy:"15",r:"1.5",fill:"black"}),t.jsx("circle",{cx:"27",cy:"15",r:"1.5",fill:"black"}),t.jsx("circle",{cx:"21.5",cy:"14.5",r:"0.7",fill:"white"}),t.jsx("circle",{cx:"27.5",cy:"14.5",r:"0.7",fill:"white"}),t.jsx("path",{d:"M19 12L18 9",stroke:i,strokeWidth:"1.5",strokeLinecap:"round"}),t.jsx("path",{d:"M29 12L30 9",stroke:i,strokeWidth:"1.5",strokeLinecap:"round"}),t.jsx("circle",{cx:"18",cy:"9",r:"0.8",fill:i}),t.jsx("circle",{cx:"30",cy:"9",r:"0.8",fill:i}),t.jsx("path",{d:"M15 28Q12 26 13 32",fill:i,opacity:"0.5"}),t.jsx("path",{d:"M33 28Q36 26 35 32",fill:i,opacity:"0.5"}),t.jsx("line",{x1:"14",y1:"29",x2:"13",y2:"31",stroke:e,strokeWidth:"0.5",opacity:"0.4"}),t.jsx("line",{x1:"34",y1:"29",x2:"35",y2:"31",stroke:e,strokeWidth:"0.5",opacity:"0.4"}),t.jsx("path",{d:"M24 22L23.5 24L24.5 24Z",fill:s,stroke:i,strokeWidth:"0.3"}),t.jsx("path",{d:"M24 25L23.5 27L24.5 27Z",fill:s,stroke:i,strokeWidth:"0.3"}),t.jsx("path",{d:"M24 28L23.5 30L24.5 30Z",fill:s,stroke:i,strokeWidth:"0.3"}),t.jsx("path",{d:"M19 36Q18 38 17 40",stroke:e,strokeWidth:"2",strokeLinecap:"round"}),t.jsx("path",{d:"M29 36Q30 38 31 40",stroke:e,strokeWidth:"2",strokeLinecap:"round"}),t.jsx("path",{d:"M16 40L15.5 41M17 40L17 41M18 40L18.5 41",stroke:i,strokeWidth:"0.8",strokeLinecap:"round"}),t.jsx("path",{d:"M30 40L29.5 41M31 40L31 41M32 40L32.5 41",stroke:i,strokeWidth:"0.8",strokeLinecap:"round"}),t.jsx("path",{d:"M24 37Q25 40 26 42Q27 43 26.5 42",stroke:e,strokeWidth:"2",strokeLinecap:"round"}),t.jsx("path",{d:"M26 42L27 41L26 40",fill:i}),t.jsx("circle",{cx:"24",cy:"23",r:"0.8",fill:"#F97316",opacity:"0.5"}),t.jsx("circle",{cx:"22.5",cy:"24",r:"0.6",fill:"#FBBF24",opacity:"0.4"})]}),Js=({primaryColor:e="#7C3AED",secondaryColor:i="#5B21B6",accentColor:s="#A78BFA",size:r=48})=>t.jsxs("svg",{width:r,height:r,viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("ellipse",{cx:"24",cy:"32",rx:"13",ry:"11",fill:e,stroke:i,strokeWidth:"2.5"}),t.jsx("path",{d:"M14 28Q16 26 18 28Q20 26 22 28Q24 26 26 28Q28 26 30 28Q32 26 34 28",stroke:i,strokeWidth:"1.5",fill:"none",opacity:"0.5"}),t.jsx("path",{d:"M14 32Q16 30 18 32Q20 30 22 32Q24 30 26 32Q28 30 30 32Q32 30 34 32",stroke:i,strokeWidth:"1.5",fill:"none",opacity:"0.5"}),t.jsx("path",{d:"M14 36Q16 34 18 36Q20 34 22 36Q24 34 26 36Q28 34 30 36Q32 34 34 36",stroke:i,strokeWidth:"1.5",fill:"none",opacity:"0.5"}),t.jsx("line",{x1:"18",y1:"30",x2:"22",y2:"32",stroke:s,strokeWidth:"1",opacity:"0.4"}),t.jsx("line",{x1:"26",y1:"30",x2:"30",y2:"33",stroke:s,strokeWidth:"1",opacity:"0.4"}),t.jsx("ellipse",{cx:"24",cy:"15",rx:"9",ry:"8",fill:e,stroke:i,strokeWidth:"2.5"}),t.jsx("ellipse",{cx:"24",cy:"19",rx:"7",ry:"4.5",fill:e,stroke:i,strokeWidth:"2"}),t.jsx("path",{d:"M19 20Q24 23 29 20",stroke:i,strokeWidth:"1.5",fill:"none"}),t.jsx("path",{d:"M20 20L19 23",stroke:"white",strokeWidth:"1.5",strokeLinecap:"round"}),t.jsx("path",{d:"M28 20L29 23",stroke:"white",strokeWidth:"1.5",strokeLinecap:"round"}),t.jsx("ellipse",{cx:"21.5",cy:"20",rx:"1.2",ry:"1.8",fill:"black"}),t.jsx("ellipse",{cx:"26.5",cy:"20",rx:"1.2",ry:"1.8",fill:"black"}),t.jsx("circle",{cx:"20.5",cy:"19",r:"1",fill:s,opacity:"0.4"}),t.jsx("circle",{cx:"27.5",cy:"19",r:"1",fill:s,opacity:"0.4"}),t.jsx("ellipse",{cx:"20",cy:"13",rx:"3",ry:"4",fill:s}),t.jsx("ellipse",{cx:"28",cy:"13",rx:"3",ry:"4",fill:s}),t.jsx("ellipse",{cx:"20",cy:"13",rx:"1.2",ry:"3",fill:"#5B21B6"}),t.jsx("ellipse",{cx:"28",cy:"13",rx:"1.2",ry:"3",fill:"#5B21B6"}),t.jsx("circle",{cx:"20",cy:"12",r:"0.7",fill:"#DDD6FE"}),t.jsx("circle",{cx:"28",cy:"12",r:"0.7",fill:"#DDD6FE"}),t.jsx("path",{d:"M17 9L14 4Q13 2 14 3",stroke:i,strokeWidth:"3.5",strokeLinecap:"round"}),t.jsx("path",{d:"M31 9L34 4Q35 2 34 3",stroke:i,strokeWidth:"3.5",strokeLinecap:"round"}),t.jsx("circle",{cx:"14",cy:"4",r:"1.5",fill:i}),t.jsx("circle",{cx:"34",cy:"4",r:"1.5",fill:i}),t.jsx("path",{d:"M16 9L14 7",stroke:i,strokeWidth:"2",strokeLinecap:"round"}),t.jsx("path",{d:"M18 10L17 7",stroke:i,strokeWidth:"1.8",strokeLinecap:"round"}),t.jsx("path",{d:"M32 9L34 7",stroke:i,strokeWidth:"2",strokeLinecap:"round"}),t.jsx("path",{d:"M30 10L31 7",stroke:i,strokeWidth:"1.8",strokeLinecap:"round"}),t.jsx("path",{d:"M11 30Q5 22 3 26Q2 30 4 36Q6 40 10 38Q12 36 11 34",fill:i,stroke:i,strokeWidth:"2",opacity:"0.9"}),t.jsx("path",{d:"M37 30Q43 22 45 26Q46 30 44 36Q42 40 38 38Q36 36 37 34",fill:i,stroke:i,strokeWidth:"2",opacity:"0.9"}),t.jsx("path",{d:"M8 32L6 34",stroke:e,strokeWidth:"1.5",opacity:"0.7"}),t.jsx("path",{d:"M10 34L8 36",stroke:e,strokeWidth:"1.5",opacity:"0.7"}),t.jsx("path",{d:"M40 32L42 34",stroke:e,strokeWidth:"1.5",opacity:"0.7"}),t.jsx("path",{d:"M38 34L40 36",stroke:e,strokeWidth:"1.5",opacity:"0.7"}),t.jsx("path",{d:"M24 21L22.5 24L25.5 24Z",fill:s,stroke:i,strokeWidth:"0.8"}),t.jsx("path",{d:"M24 25L22.5 28L25.5 28Z",fill:s,stroke:i,strokeWidth:"0.8"}),t.jsx("path",{d:"M24 29L22.5 32L25.5 32Z",fill:s,stroke:i,strokeWidth:"0.8"}),t.jsx("path",{d:"M24 33L22.5 36L25.5 36Z",fill:s,stroke:i,strokeWidth:"0.8"}),t.jsx("path",{d:"M24 37L22.5 40L25.5 40Z",fill:s,stroke:i,strokeWidth:"0.8"}),t.jsx("path",{d:"M17 41Q15 43 13 45",stroke:e,strokeWidth:"3.5",strokeLinecap:"round"}),t.jsx("path",{d:"M31 41Q33 43 35 45",stroke:e,strokeWidth:"3.5",strokeLinecap:"round"}),t.jsx("path",{d:"M11 45L10 47M13 45L13 47M15 45L16 47",stroke:i,strokeWidth:"1.5",strokeLinecap:"round"}),t.jsx("path",{d:"M33 45L32 47M35 45L35 47M37 45L38 47",stroke:i,strokeWidth:"1.5",strokeLinecap:"round"}),t.jsx("path",{d:"M24 41Q26 44 28 46Q30 47 29.5 45",stroke:e,strokeWidth:"3.5",strokeLinecap:"round"}),t.jsx("path",{d:"M28 46L30 44L28 42",fill:i,stroke:i,strokeWidth:"1.5"}),t.jsx("path",{d:"M27 45L28 43L27 42",fill:s}),t.jsx("circle",{cx:"24",cy:"32",r:"15",fill:s,opacity:"0.1"}),t.jsx("circle",{cx:"12",cy:"24",r:"2",fill:s,opacity:"0.3"}),t.jsx("circle",{cx:"36",cy:"24",r:"2",fill:s,opacity:"0.3"}),t.jsx("circle",{cx:"18",cy:"16",r:"1.5",fill:s,opacity:"0.4"}),t.jsx("circle",{cx:"30",cy:"16",r:"1.5",fill:s,opacity:"0.4"})]}),Ks=({primaryColor:e="#32CD32",secondaryColor:i="#228B22",accentColor:s="#90EE90",size:r=48})=>t.jsxs("svg",{width:r,height:r,viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("ellipse",{cx:"24",cy:"30",rx:"14",ry:"12",fill:e,opacity:"0.8",stroke:i,strokeWidth:"1.5"}),t.jsx("ellipse",{cx:"24",cy:"38",rx:"15",ry:"4",fill:i,opacity:"0.4"}),t.jsx("ellipse",{cx:"18",cy:"26",rx:"4",ry:"5",fill:s,opacity:"0.5"}),t.jsx("ellipse",{cx:"28",cy:"24",rx:"3",ry:"4",fill:s,opacity:"0.5"}),t.jsx("circle",{cx:"20",cy:"28",r:"3",fill:"white",opacity:"0.9"}),t.jsx("circle",{cx:"28",cy:"28",r:"3",fill:"white",opacity:"0.9"}),t.jsx("circle",{cx:"20.5",cy:"28",r:"1.5",fill:"black"}),t.jsx("circle",{cx:"28.5",cy:"28",r:"1.5",fill:"black"}),t.jsx("circle",{cx:"19.5",cy:"27",r:"0.8",fill:"white"}),t.jsx("circle",{cx:"27.5",cy:"27",r:"0.8",fill:"white"}),t.jsx("circle",{cx:"16",cy:"32",r:"1.5",fill:s,opacity:"0.6"}),t.jsx("circle",{cx:"24",cy:"34",r:"1",fill:s,opacity:"0.6"}),t.jsx("circle",{cx:"30",cy:"30",r:"1.2",fill:s,opacity:"0.6"}),t.jsx("circle",{cx:"26",cy:"36",r:"0.8",fill:s,opacity:"0.6"}),t.jsx("path",{d:"M22 32Q24 33 26 32",stroke:i,strokeWidth:"1",fill:"none",opacity:"0.7"})]}),er=({primaryColor:e="#6B7C59",secondaryColor:i="#4A5842",accentColor:s="#8B4513",size:r=48})=>t.jsxs("svg",{width:r,height:r,viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("ellipse",{cx:"24",cy:"34",rx:"10",ry:"11",fill:e,stroke:i,strokeWidth:"1.5",opacity:"0.95"}),t.jsx("path",{d:"M18 30L20 32",stroke:"#8B0000",strokeWidth:"1.5",opacity:"0.7"}),t.jsx("path",{d:"M28 32L30 34",stroke:"#8B0000",strokeWidth:"1.5",opacity:"0.7"}),t.jsx("ellipse",{cx:"20",cy:"32",rx:"2",ry:"3",fill:"#4A5842",opacity:"0.6"}),t.jsx("ellipse",{cx:"28",cy:"35",rx:"2.5",ry:"3",fill:"#4A5842",opacity:"0.6"}),t.jsx("path",{d:"M20 34Q24 33 28 34",stroke:"#D3D3D3",strokeWidth:"0.8",opacity:"0.4"}),t.jsx("path",{d:"M20 36Q24 35 28 36",stroke:"#D3D3D3",strokeWidth:"0.8",opacity:"0.4"}),t.jsx("ellipse",{cx:"24",cy:"16",rx:"8.5",ry:"9",fill:e,stroke:i,strokeWidth:"1.5"}),t.jsx("path",{d:"M17 14Q24 13 31 14",stroke:i,strokeWidth:"1",opacity:"0.5"}),t.jsx("ellipse",{cx:"19",cy:"12",rx:"1.5",ry:"2",fill:"#4A5842",opacity:"0.5"}),t.jsx("ellipse",{cx:"29",cy:"13",rx:"1.5",ry:"2",fill:"#4A5842",opacity:"0.5"}),t.jsx("path",{d:"M17 9L16 6",stroke:s,strokeWidth:"2",strokeLinecap:"round",opacity:"0.7"}),t.jsx("path",{d:"M20 8L19 5",stroke:s,strokeWidth:"1.8",strokeLinecap:"round",opacity:"0.6"}),t.jsx("path",{d:"M24 7L24 4",stroke:s,strokeWidth:"1.5",strokeLinecap:"round",opacity:"0.5"}),t.jsx("path",{d:"M28 8L29 5",stroke:s,strokeWidth:"1.8",strokeLinecap:"round",opacity:"0.6"}),t.jsx("path",{d:"M31 10L32 7",stroke:s,strokeWidth:"2",strokeLinecap:"round",opacity:"0.7"}),t.jsx("ellipse",{cx:"20",cy:"15",rx:"2.5",ry:"3",fill:"#F5F5DC",opacity:"0.9"}),t.jsx("ellipse",{cx:"28",cy:"15",rx:"2.5",ry:"3",fill:"#F5F5DC",opacity:"0.9"}),t.jsx("circle",{cx:"20",cy:"15.5",r:"1.5",fill:"#696969",opacity:"0.6"}),t.jsx("circle",{cx:"28",cy:"15.5",r:"1.5",fill:"#696969",opacity:"0.6"}),t.jsx("line",{x1:"18",y1:"14",x2:"17",y2:"15",stroke:"#8B0000",strokeWidth:"0.5",opacity:"0.6"}),t.jsx("line",{x1:"30",y1:"14",x2:"31",y2:"15",stroke:"#8B0000",strokeWidth:"0.5",opacity:"0.6"}),t.jsx("ellipse",{cx:"24",cy:"21",rx:"4",ry:"2.5",fill:"black",opacity:"0.7"}),t.jsx("path",{d:"M21 20Q24 22 27 20",stroke:"#4A5842",strokeWidth:"1",fill:"none"}),t.jsx("rect",{x:"21",y:"19.5",width:"1.2",height:"2",rx:"0.2",fill:"#D2B48C",opacity:"0.8"}),t.jsx("rect",{x:"23.5",y:"19.5",width:"1",height:"1.5",rx:"0.2",fill:"#D2B48C",opacity:"0.7"}),t.jsx("rect",{x:"25.5",y:"19.5",width:"1.2",height:"2",rx:"0.2",fill:"#D2B48C",opacity:"0.8"}),t.jsx("ellipse",{cx:"28",cy:"18",rx:"1.5",ry:"1",fill:"#8B0000",opacity:"0.6"}),t.jsx("path",{d:"M17 18L19 20",stroke:"#8B0000",strokeWidth:"1.2",opacity:"0.6"}),t.jsx("circle",{cx:"26",cy:"12",r:"0.8",fill:"#8B0000",opacity:"0.5"}),t.jsx("path",{d:"M24 17L23 19L25 19Z",fill:"#4A5842",opacity:"0.6"}),t.jsx("path",{d:"M15 30Q12 32 10 35",stroke:e,strokeWidth:"3",strokeLinecap:"round"}),t.jsx("path",{d:"M33 30Q36 32 38 35",stroke:e,strokeWidth:"3",strokeLinecap:"round"}),t.jsx("path",{d:"M12 33L11 34",stroke:"#4A5842",strokeWidth:"1.5",opacity:"0.5"}),t.jsx("path",{d:"M36 33L37 34",stroke:"#4A5842",strokeWidth:"1.5",opacity:"0.5"}),t.jsx("ellipse",{cx:"10",cy:"35",rx:"2",ry:"2.5",fill:e,stroke:i,strokeWidth:"1"}),t.jsx("ellipse",{cx:"38",cy:"35",rx:"2",ry:"2.5",fill:e,stroke:i,strokeWidth:"1"}),t.jsx("path",{d:"M9 36L8 38M10 36L10 39M11 36L12 38",stroke:i,strokeWidth:"1.2",strokeLinecap:"round"}),t.jsx("path",{d:"M37 36L36 38M38 36L38 39M39 36L40 38",stroke:i,strokeWidth:"1.2",strokeLinecap:"round"}),t.jsx("circle",{cx:"8",cy:"38",r:"0.4",fill:"black"}),t.jsx("circle",{cx:"10",cy:"39",r:"0.4",fill:"black"}),t.jsx("circle",{cx:"12",cy:"38",r:"0.4",fill:"black"}),t.jsx("circle",{cx:"36",cy:"38",r:"0.4",fill:"black"}),t.jsx("circle",{cx:"38",cy:"39",r:"0.4",fill:"black"}),t.jsx("circle",{cx:"40",cy:"38",r:"0.4",fill:"black"}),t.jsx("path",{d:"M18 40Q20 42 22 41",stroke:s,strokeWidth:"1.5",fill:"none",opacity:"0.6"}),t.jsx("path",{d:"M26 40Q28 42 30 41",stroke:s,strokeWidth:"1.5",fill:"none",opacity:"0.6"}),t.jsx("circle",{cx:"22",cy:"28",r:"1.2",fill:"#8B0000",opacity:"0.5"}),t.jsx("circle",{cx:"26",cy:"31",r:"1",fill:"#8B0000",opacity:"0.5"}),t.jsx("circle",{cx:"24",cy:"36",r:"0.8",fill:"#4A5842",opacity:"0.4"}),t.jsx("ellipse",{cx:"20",cy:"38",rx:"1.5",ry:"1",fill:"#4A5842",opacity:"0.3"}),t.jsx("path",{d:"M20 42Q19 44 18 46",stroke:e,strokeWidth:"2.5",strokeLinecap:"round"}),t.jsx("path",{d:"M28 42Q29 44 30 46",stroke:e,strokeWidth:"2.5",strokeLinecap:"round"}),t.jsx("circle",{cx:"14",cy:"20",r:"0.6",fill:"black",opacity:"0.4"}),t.jsx("circle",{cx:"34",cy:"22",r:"0.6",fill:"black",opacity:"0.4"}),t.jsx("circle",{cx:"18",cy:"26",r:"0.5",fill:"black",opacity:"0.4"}),t.jsx("ellipse",{cx:"24",cy:"30",rx:"14",ry:"18",fill:"#4A5842",opacity:"0.08"})]}),tr=({primaryColor:e="#8B0000",secondaryColor:i="#DC143C",accentColor:s="#FFD700",size:r=48})=>t.jsxs("svg",{width:r,height:r,viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("ellipse",{cx:"24",cy:"32",rx:"10",ry:"10",fill:e,stroke:"black",strokeWidth:"1.5"}),t.jsx("ellipse",{cx:"24",cy:"16",rx:"8",ry:"7",fill:e,stroke:"black",strokeWidth:"1.5"}),t.jsx("path",{d:"M18 12Q16 8 14 10",stroke:"black",strokeWidth:"2",fill:i,strokeLinecap:"round"}),t.jsx("path",{d:"M30 12Q32 8 34 10",stroke:"black",strokeWidth:"2",fill:i,strokeLinecap:"round"}),t.jsx("ellipse",{cx:"21",cy:"15",rx:"2.5",ry:"3",fill:s}),t.jsx("ellipse",{cx:"27",cy:"15",rx:"2.5",ry:"3",fill:s}),t.jsx("circle",{cx:"21",cy:"15",r:"1",fill:"#FF4500"}),t.jsx("circle",{cx:"27",cy:"15",r:"1",fill:"#FF4500"}),t.jsx("circle",{cx:"21",cy:"14.5",r:"0.5",fill:"white",opacity:"0.8"}),t.jsx("circle",{cx:"27",cy:"14.5",r:"0.5",fill:"white",opacity:"0.8"}),t.jsx("path",{d:"M24 17L23 19L25 19Z",fill:"black"}),t.jsx("path",{d:"M20 20Q24 23 28 20",stroke:"black",strokeWidth:"1.5",fill:i}),t.jsx("path",{d:"M22 20L21 24",stroke:"white",strokeWidth:"1.5",strokeLinecap:"round"}),t.jsx("path",{d:"M26 20L27 24",stroke:"white",strokeWidth:"1.5",strokeLinecap:"round"}),t.jsx("path",{d:"M13 30Q8 26 10 35",fill:i,stroke:"black",strokeWidth:"1"}),t.jsx("path",{d:"M35 30Q40 26 38 35",fill:i,stroke:"black",strokeWidth:"1"}),t.jsx("path",{d:"M24 40Q26 44 28 42",stroke:e,strokeWidth:"2",strokeLinecap:"round"}),t.jsx("path",{d:"M28 42L30 44",stroke:e,strokeWidth:"1.5",strokeLinecap:"round"}),t.jsx("path",{d:"M28 42L26 44",stroke:e,strokeWidth:"1.5",strokeLinecap:"round"}),t.jsx("circle",{cx:"24",cy:"28",r:"2.5",fill:s,opacity:"0.6"}),t.jsx("path",{d:"M24 26L24 30M22 28L26 28",stroke:i,strokeWidth:"0.8"})]}),ir=({primaryColor:e="#DC2626",secondaryColor:i="#991B1B",accentColor:s="#FBBF24",size:r=48})=>t.jsxs("svg",{width:r,height:r,viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("ellipse",{cx:"24",cy:"18",rx:"7",ry:"6.5",fill:e,stroke:i,strokeWidth:"1.5"}),t.jsx("path",{d:"M19 13L17 9",stroke:i,strokeWidth:"2",strokeLinecap:"round"}),t.jsx("path",{d:"M29 13L31 9",stroke:i,strokeWidth:"2",strokeLinecap:"round"}),t.jsx("circle",{cx:"17",cy:"9",r:"1.5",fill:i}),t.jsx("circle",{cx:"31",cy:"9",r:"1.5",fill:i}),t.jsx("path",{d:"M16 16L12 14L15 18Z",fill:e,stroke:i,strokeWidth:"1"}),t.jsx("path",{d:"M32 16L36 14L33 18Z",fill:e,stroke:i,strokeWidth:"1"}),t.jsx("circle",{cx:"21",cy:"17",r:"2.5",fill:s}),t.jsx("circle",{cx:"27",cy:"17",r:"2.5",fill:s}),t.jsx("circle",{cx:"21",cy:"17",r:"1.5",fill:"black"}),t.jsx("circle",{cx:"27",cy:"17",r:"1.5",fill:"black"}),t.jsx("circle",{cx:"21.5",cy:"16.5",r:"0.7",fill:s,opacity:"0.9"}),t.jsx("circle",{cx:"27.5",cy:"16.5",r:"0.7",fill:s,opacity:"0.9"}),t.jsx("path",{d:"M20 21Q24 23 28 21",stroke:i,strokeWidth:"1.5",fill:"none"}),t.jsx("path",{d:"M22 21L21.5 23",stroke:"white",strokeWidth:"1",strokeLinecap:"round"}),t.jsx("path",{d:"M26 21L26.5 23",stroke:"white",strokeWidth:"1",strokeLinecap:"round"}),t.jsx("ellipse",{cx:"24",cy:"30",rx:"6",ry:"7",fill:e,stroke:i,strokeWidth:"1.5"}),t.jsx("ellipse",{cx:"24",cy:"31",rx:"4",ry:"4.5",fill:i,opacity:"0.3"}),t.jsx("path",{d:"M18 28Q14 26 13 30Q13 32 16 32",fill:i,stroke:i,strokeWidth:"1",opacity:"0.8"}),t.jsx("path",{d:"M30 28Q34 26 35 30Q35 32 32 32",fill:i,stroke:i,strokeWidth:"1",opacity:"0.8"}),t.jsx("line",{x1:"14",y1:"28",x2:"15",y2:"31",stroke:e,strokeWidth:"0.5",opacity:"0.6"}),t.jsx("line",{x1:"34",y1:"28",x2:"33",y2:"31",stroke:e,strokeWidth:"0.5",opacity:"0.6"}),t.jsx("path",{d:"M18 30Q15 32 14 35",stroke:e,strokeWidth:"2",strokeLinecap:"round"}),t.jsx("path",{d:"M30 30Q33 32 34 35",stroke:e,strokeWidth:"2",strokeLinecap:"round"}),t.jsx("line",{x1:"34",y1:"35",x2:"36",y2:"38",stroke:"#D97706",strokeWidth:"1.5"}),t.jsx("path",{d:"M35 38L35 40M36 38L36 40M37 38L37 40",stroke:"#D97706",strokeWidth:"0.8"}),t.jsx("circle",{cx:"36",cy:"38",r:"0.8",fill:s}),t.jsx("rect",{x:"20",y:"36",width:"2",height:"6",rx:"1",fill:e,stroke:i,strokeWidth:"0.8"}),t.jsx("rect",{x:"26",y:"36",width:"2",height:"6",rx:"1",fill:e,stroke:i,strokeWidth:"0.8"}),t.jsx("ellipse",{cx:"21",cy:"42",rx:"1.5",ry:"1",fill:i}),t.jsx("ellipse",{cx:"27",cy:"42",rx:"1.5",ry:"1",fill:i}),t.jsx("path",{d:"M20 42L19 43M21 42L21 43M22 42L23 43",stroke:i,strokeWidth:"0.5"}),t.jsx("path",{d:"M26 42L25 43M27 42L27 43M28 42L29 43",stroke:i,strokeWidth:"0.5"}),t.jsx("path",{d:"M24 36Q26 40 27 43",stroke:e,strokeWidth:"2",strokeLinecap:"round"}),t.jsx("path",{d:"M27 43L28 45",stroke:e,strokeWidth:"1.2",strokeLinecap:"round"}),t.jsx("path",{d:"M27 43L26 45",stroke:e,strokeWidth:"1.2",strokeLinecap:"round"}),t.jsx("path",{d:"M28 45L29 46M26 45L25 46",stroke:s,strokeWidth:"0.8",strokeLinecap:"round"}),t.jsx("circle",{cx:"12",cy:"20",r:"1",fill:"#F97316",opacity:"0.6"}),t.jsx("circle",{cx:"36",cy:"20",r:"1",fill:"#F97316",opacity:"0.6"}),t.jsx("circle",{cx:"16",cy:"34",r:"0.8",fill:"#FBBF24",opacity:"0.5"})]}),sr=({primaryColor:e="#065F46",secondaryColor:i="#047857",accentColor:s="#10B981",size:r=48})=>t.jsxs("svg",{width:r,height:r,viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("rect",{x:"17",y:"12",width:"14",height:"12",rx:"2",fill:e,stroke:"black",strokeWidth:"1.5"}),t.jsx("path",{d:"M18 14Q14 12 12 16Q11 18 13 18",stroke:"black",strokeWidth:"2.5",fill:i,strokeLinecap:"round"}),t.jsx("path",{d:"M30 14Q34 12 36 16Q37 18 35 18",stroke:"black",strokeWidth:"2.5",fill:i,strokeLinecap:"round"}),t.jsx("circle",{cx:"12.5",cy:"16",r:"1.2",fill:"#1F2937"}),t.jsx("circle",{cx:"35.5",cy:"16",r:"1.2",fill:"#1F2937"}),t.jsx("rect",{x:"23",y:"10",width:"2",height:"3",fill:i}),t.jsx("path",{d:"M22 10L24 8L26 10",fill:i,stroke:"black",strokeWidth:"0.5"}),t.jsx("rect",{x:"19",y:"17",width:"3",height:"4",rx:"0.5",fill:s,opacity:"0.9"}),t.jsx("rect",{x:"26",y:"17",width:"3",height:"4",rx:"0.5",fill:s,opacity:"0.9"}),t.jsx("rect",{x:"20",y:"18",width:"1",height:"2",fill:"#047857"}),t.jsx("rect",{x:"27",y:"18",width:"1",height:"2",fill:"#047857"}),t.jsx("circle",{cx:"20.5",cy:"19",r:"0.5",fill:"#D1FAE5"}),t.jsx("circle",{cx:"27.5",cy:"19",r:"0.5",fill:"#D1FAE5"}),t.jsx("rect",{x:"20",y:"22",width:"8",height:"2",fill:"black",opacity:"0.8"}),t.jsx("rect",{x:"20",y:"22",width:"1",height:"3",fill:"white"}),t.jsx("rect",{x:"22",y:"22",width:"1",height:"3",fill:"white"}),t.jsx("rect",{x:"25",y:"22",width:"1",height:"3",fill:"white"}),t.jsx("rect",{x:"27",y:"22",width:"1",height:"3",fill:"white"}),t.jsx("line",{x1:"17",y1:"16",x2:"15",y2:"18",stroke:"#047857",strokeWidth:"1",strokeLinecap:"round"}),t.jsx("line",{x1:"31",y1:"16",x2:"33",y2:"18",stroke:"#047857",strokeWidth:"1",strokeLinecap:"round"}),t.jsx("path",{d:"M14 24L12 26L12 30L16 32",fill:"#1F2937",stroke:"black",strokeWidth:"1"}),t.jsx("path",{d:"M34 24L36 26L36 30L32 32",fill:"#1F2937",stroke:"black",strokeWidth:"1"}),t.jsx("path",{d:"M12 26L10 25",stroke:"#4B5563",strokeWidth:"1.5",strokeLinecap:"round"}),t.jsx("path",{d:"M12 28L10 28",stroke:"#4B5563",strokeWidth:"1.5",strokeLinecap:"round"}),t.jsx("path",{d:"M36 26L38 25",stroke:"#4B5563",strokeWidth:"1.5",strokeLinecap:"round"}),t.jsx("path",{d:"M36 28L38 28",stroke:"#4B5563",strokeWidth:"1.5",strokeLinecap:"round"}),t.jsx("rect",{x:"16",y:"24",width:"16",height:"14",rx:"2",fill:e,stroke:"black",strokeWidth:"1.5"}),t.jsx("rect",{x:"18",y:"26",width:"12",height:"3",rx:"0.5",fill:"#1F2937",opacity:"0.6"}),t.jsx("rect",{x:"18",y:"31",width:"12",height:"3",rx:"0.5",fill:"#1F2937",opacity:"0.6"}),t.jsx("circle",{cx:"24",cy:"30",r:"2",fill:s,opacity:"0.4"}),t.jsx("path",{d:"M24 28L24 32M22 30L26 30",stroke:s,strokeWidth:"0.8",opacity:"0.6"}),t.jsx("rect",{x:"12",y:"28",width:"4",height:"10",rx:"1",fill:e,stroke:"black",strokeWidth:"1"}),t.jsx("rect",{x:"32",y:"28",width:"4",height:"10",rx:"1",fill:e,stroke:"black",strokeWidth:"1"}),t.jsx("rect",{x:"11",y:"36",width:"6",height:"4",rx:"0.5",fill:"#374151",stroke:"black",strokeWidth:"1"}),t.jsx("rect",{x:"31",y:"36",width:"6",height:"4",rx:"0.5",fill:"#374151",stroke:"black",strokeWidth:"1"}),t.jsx("rect",{x:"36",y:"32",width:"2",height:"12",rx:"0.3",fill:"#6B7280",stroke:"black",strokeWidth:"0.8"}),t.jsx("path",{d:"M35 32L39 32L37 28Z",fill:"#4B5563",stroke:"black",strokeWidth:"0.8"}),t.jsx("rect",{x:"36.5",y:"44",width:"1",height:"2",fill:"#8B4513"}),t.jsx("line",{x1:"37",y1:"34",x2:"37",y2:"42",stroke:s,strokeWidth:"0.5",opacity:"0.6"}),t.jsx("circle",{cx:"37",cy:"36",r:"1",fill:s,opacity:"0.3"}),t.jsx("rect",{x:"18",y:"38",width:"4",height:"7",rx:"1",fill:e,stroke:"black",strokeWidth:"1"}),t.jsx("rect",{x:"26",y:"38",width:"4",height:"7",rx:"1",fill:e,stroke:"black",strokeWidth:"1"}),t.jsx("rect",{x:"17",y:"43",width:"6",height:"3",rx:"0.5",fill:"#1F2937",stroke:"black",strokeWidth:"1"}),t.jsx("rect",{x:"25",y:"43",width:"6",height:"3",rx:"0.5",fill:"#1F2937",stroke:"black",strokeWidth:"1"}),t.jsx("circle",{cx:"10",cy:"32",r:"1.5",fill:s,opacity:"0.3"}),t.jsx("circle",{cx:"38",cy:"24",r:"1.5",fill:s,opacity:"0.3"}),t.jsx("circle",{cx:"16",cy:"42",r:"1",fill:s,opacity:"0.4"})]}),rr=({primaryColor:e="#6B7280",secondaryColor:i="#4B5563",accentColor:s="#F59E0B",size:r=48})=>t.jsxs("svg",{width:r,height:r,viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("path",{d:"M16 12L14 8L18 10Z",fill:e,stroke:i,strokeWidth:"1"}),t.jsx("path",{d:"M32 12L34 8L30 10Z",fill:e,stroke:i,strokeWidth:"1"}),t.jsx("ellipse",{cx:"24",cy:"18",rx:"9",ry:"8",fill:e,stroke:i,strokeWidth:"1"}),t.jsx("ellipse",{cx:"24",cy:"22",rx:"6",ry:"4",fill:i}),t.jsx("ellipse",{cx:"24",cy:"23",rx:"3",ry:"2",fill:"#1F2937"}),t.jsx("ellipse",{cx:"24",cy:"23",rx:"1.5",ry:"1",fill:"black"}),t.jsx("ellipse",{cx:"20",cy:"16",rx:"1.5",ry:"2",fill:s}),t.jsx("ellipse",{cx:"28",cy:"16",rx:"1.5",ry:"2",fill:s}),t.jsx("circle",{cx:"20",cy:"16",r:"0.8",fill:"black"}),t.jsx("circle",{cx:"28",cy:"16",r:"0.8",fill:"black"}),t.jsx("circle",{cx:"20.5",cy:"15.5",r:"0.4",fill:"white",opacity:"0.8"}),t.jsx("circle",{cx:"28.5",cy:"15.5",r:"0.4",fill:"white",opacity:"0.8"}),t.jsx("path",{d:"M22 24L21.5 26",stroke:"white",strokeWidth:"1",strokeLinecap:"round"}),t.jsx("path",{d:"M26 24L26.5 26",stroke:"white",strokeWidth:"1",strokeLinecap:"round"}),t.jsx("ellipse",{cx:"24",cy:"32",rx:"8",ry:"7",fill:e,stroke:i,strokeWidth:"1"}),t.jsx("ellipse",{cx:"24",cy:"33",rx:"5",ry:"4",fill:"#9CA3AF",opacity:"0.5"}),t.jsx("rect",{x:"18",y:"36",width:"2.5",height:"8",rx:"1",fill:i}),t.jsx("rect",{x:"27.5",y:"36",width:"2.5",height:"8",rx:"1",fill:i}),t.jsx("ellipse",{cx:"19.25",cy:"43",rx:"1.5",ry:"1",fill:"#1F2937"}),t.jsx("ellipse",{cx:"28.75",cy:"43",rx:"1.5",ry:"1",fill:"#1F2937"}),t.jsx("line",{x1:"18",y1:"43.5",x2:"17.5",y2:"44.5",stroke:i,strokeWidth:"0.5"}),t.jsx("line",{x1:"19.25",y1:"43.5",x2:"19.25",y2:"44.5",stroke:i,strokeWidth:"0.5"}),t.jsx("line",{x1:"20.5",y1:"43.5",x2:"21",y2:"44.5",stroke:i,strokeWidth:"0.5"}),t.jsx("path",{d:"M32 32Q36 30 38 26",stroke:e,strokeWidth:"2.5",strokeLinecap:"round"})]}),nr=({primaryColor:e="#8B4513",secondaryColor:i="#5D2E0F",accentColor:s="#D2691E",size:r=48})=>t.jsxs("svg",{width:r,height:r,viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("ellipse",{cx:"24",cy:"20",rx:"10",ry:"9",fill:e,stroke:i,strokeWidth:"1.5"}),t.jsx("ellipse",{cx:"17",cy:"14",rx:"2",ry:"3",fill:e,stroke:i,strokeWidth:"1"}),t.jsx("ellipse",{cx:"31",cy:"14",rx:"2",ry:"3",fill:e,stroke:i,strokeWidth:"1"}),t.jsx("ellipse",{cx:"24",cy:"24",rx:"7",ry:"5",fill:s,stroke:i,strokeWidth:"1"}),t.jsx("ellipse",{cx:"24",cy:"25",rx:"4",ry:"3",fill:i}),t.jsx("ellipse",{cx:"22",cy:"25",rx:"1",ry:"1.5",fill:"black"}),t.jsx("ellipse",{cx:"26",cy:"25",rx:"1",ry:"1.5",fill:"black"}),t.jsx("circle",{cx:"19",cy:"18",r:"1.5",fill:"black"}),t.jsx("circle",{cx:"29",cy:"18",r:"1.5",fill:"black"}),t.jsx("circle",{cx:"19.5",cy:"17.5",r:"0.5",fill:"#DC2626",opacity:"0.8"}),t.jsx("circle",{cx:"29.5",cy:"17.5",r:"0.5",fill:"#DC2626",opacity:"0.8"}),t.jsx("path",{d:"M20 26Q18 28 17 30",stroke:"white",strokeWidth:"2",strokeLinecap:"round"}),t.jsx("path",{d:"M28 26Q30 28 31 30",stroke:"white",strokeWidth:"2",strokeLinecap:"round"}),t.jsx("line",{x1:"20",y1:"13",x2:"19",y2:"10",stroke:i,strokeWidth:"1"}),t.jsx("line",{x1:"23",y1:"12",x2:"23",y2:"9",stroke:i,strokeWidth:"1"}),t.jsx("line",{x1:"26",y1:"12",x2:"26",y2:"9",stroke:i,strokeWidth:"1"}),t.jsx("line",{x1:"29",y1:"13",x2:"30",y2:"10",stroke:i,strokeWidth:"1"}),t.jsx("ellipse",{cx:"24",cy:"34",rx:"11",ry:"8",fill:e,stroke:i,strokeWidth:"1.5"}),t.jsx("rect",{x:"16",y:"38",width:"3",height:"7",rx:"1.5",fill:i}),t.jsx("rect",{x:"29",y:"38",width:"3",height:"7",rx:"1.5",fill:i}),t.jsx("rect",{x:"16",y:"43",width:"3",height:"2",fill:"#1F2937"}),t.jsx("rect",{x:"29",y:"43",width:"3",height:"2",fill:"#1F2937"}),t.jsx("path",{d:"M34 32Q36 31 37 30Q38 29 37 28",stroke:i,strokeWidth:"1.5",strokeLinecap:"round",fill:"none"})]}),ar=({primaryColor:e="#4ADE80",secondaryColor:i="#22C55E",accentColor:s="#FDE047",size:r=48})=>t.jsxs("svg",{width:r,height:r,viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("ellipse",{cx:"24",cy:"20",rx:"9",ry:"10",fill:e,stroke:i,strokeWidth:"1.5"}),t.jsx("path",{d:"M24 10L22 13L24 12L26 13Z",fill:"#EF4444",stroke:"#DC2626",strokeWidth:"0.5"}),t.jsx("path",{d:"M24 12L22.5 15L24 14L25.5 15Z",fill:"#F97316",stroke:"#EA580C",strokeWidth:"0.5"}),t.jsx("path",{d:"M24 14L23 17L24 16L25 17Z",fill:"#FBBF24",stroke:"#F59E0B",strokeWidth:"0.5"}),t.jsx("circle",{cx:"20",cy:"18",r:"3.5",fill:s,stroke:i,strokeWidth:"1"}),t.jsx("circle",{cx:"28",cy:"18",r:"3.5",fill:s,stroke:i,strokeWidth:"1"}),t.jsx("circle",{cx:"20",cy:"18",r:"2",fill:"black"}),t.jsx("circle",{cx:"28",cy:"18",r:"2",fill:"black"}),t.jsx("circle",{cx:"20.8",cy:"17.2",r:"0.8",fill:"white"}),t.jsx("circle",{cx:"28.8",cy:"17.2",r:"0.8",fill:"white"}),t.jsx("path",{d:"M24 24Q20 26 18 25Q20 27 24 27Q28 27 30 25Q28 26 24 24Z",fill:i,stroke:i,strokeWidth:"1"}),t.jsx("path",{d:"M20 25L19.5 26.5L20 26Z",fill:"white"}),t.jsx("path",{d:"M22 25L21.5 27L22 26Z",fill:"white"}),t.jsx("path",{d:"M26 25L26.5 27L26 26Z",fill:"white"}),t.jsx("path",{d:"M28 25L28.5 26.5L28 26Z",fill:"white"}),t.jsx("ellipse",{cx:"14",cy:"20",rx:"3",ry:"4",fill:e,stroke:i,strokeWidth:"1",transform:"rotate(-20 14 20)"}),t.jsx("ellipse",{cx:"34",cy:"20",rx:"3",ry:"4",fill:e,stroke:i,strokeWidth:"1",transform:"rotate(20 34 20)"}),t.jsx("path",{d:"M14 18Q12 20 14 22",stroke:i,strokeWidth:"0.5",fill:"none",opacity:"0.5"}),t.jsx("path",{d:"M34 18Q36 20 34 22",stroke:i,strokeWidth:"0.5",fill:"none",opacity:"0.5"}),t.jsx("ellipse",{cx:"24",cy:"34",rx:"7",ry:"8",fill:e,stroke:i,strokeWidth:"1.5"}),t.jsx("ellipse",{cx:"24",cy:"35",rx:"4.5",ry:"5",fill:s,opacity:"0.3"}),t.jsx("path",{d:"M17 30Q14 32 13 36",stroke:e,strokeWidth:"2.5",strokeLinecap:"round"}),t.jsx("path",{d:"M31 30Q34 32 35 36",stroke:e,strokeWidth:"2.5",strokeLinecap:"round"}),t.jsx("circle",{cx:"13",cy:"36",r:"2",fill:e,stroke:i,strokeWidth:"0.8"}),t.jsx("circle",{cx:"35",cy:"36",r:"2",fill:e,stroke:i,strokeWidth:"0.8"}),t.jsx("path",{d:"M12 35L11 34M13 35L13 34M14 35L15 34",stroke:i,strokeWidth:"0.5"}),t.jsx("path",{d:"M36 35L37 34M35 35L35 34M34 35L33 34",stroke:i,strokeWidth:"0.5"}),t.jsx("ellipse",{cx:"20",cy:"42",rx:"2.5",ry:"1.5",fill:e,stroke:i,strokeWidth:"0.8"}),t.jsx("ellipse",{cx:"28",cy:"42",rx:"2.5",ry:"1.5",fill:e,stroke:i,strokeWidth:"0.8"})]}),or=({primaryColor:e="#4B5563",secondaryColor:i="#1F2937",accentColor:s="#DC2626",size:r=48})=>t.jsxs("svg",{width:r,height:r,viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("path",{d:"M24 10Q16 12 14 18L34 18Q32 12 24 10Z",fill:i,stroke:"black",strokeWidth:"1"}),t.jsx("path",{d:"M14 18L12 22L24 24L36 22L34 18Z",fill:i,stroke:"black",strokeWidth:"1"}),t.jsx("ellipse",{cx:"24",cy:"20",rx:"7",ry:"5",fill:"black",opacity:"0.4"}),t.jsx("rect",{x:"16",y:"18",width:"16",height:"5",rx:"1",fill:i,stroke:"black",strokeWidth:"0.8"}),t.jsx("ellipse",{cx:"20",cy:"20",rx:"2",ry:"1.5",fill:s,opacity:"0.8"}),t.jsx("ellipse",{cx:"28",cy:"20",rx:"2",ry:"1.5",fill:s,opacity:"0.8"}),t.jsx("circle",{cx:"20",cy:"20",r:"0.8",fill:"black"}),t.jsx("circle",{cx:"28",cy:"20",r:"0.8",fill:"black"}),t.jsx("ellipse",{cx:"24",cy:"24",rx:"6",ry:"5",fill:"#D1A684",stroke:"black",strokeWidth:"0.5"}),t.jsx("path",{d:"M26 22L28 25",stroke:s,strokeWidth:"0.8",strokeLinecap:"round"}),t.jsx("path",{d:"M18 28Q16 30 16 35L32 35Q32 30 30 28Z",fill:i,stroke:"black",strokeWidth:"1"}),t.jsx("rect",{x:"16",y:"34",width:"16",height:"2",fill:"#8B4513",stroke:"black",strokeWidth:"0.5"}),t.jsx("rect",{x:"23",y:"33.5",width:"2",height:"3",fill:s,stroke:"black",strokeWidth:"0.3"}),t.jsx("path",{d:"M18 28L28 35",stroke:"#6B4423",strokeWidth:"2"}),t.jsx("path",{d:"M18 28L28 35",stroke:"#8B6F47",strokeWidth:"1.2"}),t.jsx("path",{d:"M16 30Q12 32 10 36",stroke:e,strokeWidth:"2.5",strokeLinecap:"round"}),t.jsx("path",{d:"M32 30Q36 32 38 36",stroke:e,strokeWidth:"2.5",strokeLinecap:"round"}),t.jsx("line",{x1:"38",y1:"36",x2:"42",y2:"38",stroke:"#9CA3AF",strokeWidth:"1.5",strokeLinecap:"round"}),t.jsx("path",{d:"M42 38L44 40",stroke:"#6B4423",strokeWidth:"1.2",strokeLinecap:"round"}),t.jsx("circle",{cx:"42",cy:"38",r:"0.8",fill:s}),t.jsx("circle",{cx:"20",cy:"36",r:"1.5",fill:"#FBBF24",stroke:"#F59E0B",strokeWidth:"0.5"}),t.jsx("path",{d:"M20 34.5L20 35.5",stroke:"#F59E0B",strokeWidth:"0.5"}),t.jsx("rect",{x:"18",y:"36",width:"3",height:"8",fill:i,stroke:"black",strokeWidth:"0.8"}),t.jsx("rect",{x:"27",y:"36",width:"3",height:"8",fill:i,stroke:"black",strokeWidth:"0.8"}),t.jsx("rect",{x:"17.5",y:"42",width:"4",height:"3",rx:"0.5",fill:"#4B5563",stroke:"black",strokeWidth:"0.5"}),t.jsx("rect",{x:"26.5",y:"42",width:"4",height:"3",rx:"0.5",fill:"#4B5563",stroke:"black",strokeWidth:"0.5"})]}),lr=({primaryColor:e="#EF4444",secondaryColor:i="#DC2626",size:s=48})=>t.jsxs("svg",{width:s,height:s,viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("path",{d:"M24 44Q18 44 15 38Q12 32 14 26Q16 20 20 16Q22 12 24 8Q26 12 28 16Q32 20 34 26Q36 32 33 38Q30 44 24 44Z",fill:"url(#fireGradient)",stroke:i,strokeWidth:"1"}),t.jsxs("defs",{children:[t.jsxs("linearGradient",{id:"fireGradient",x1:"24",y1:"8",x2:"24",y2:"44",gradientUnits:"userSpaceOnUse",children:[t.jsx("stop",{offset:"0%",stopColor:"#FBBF24"}),t.jsx("stop",{offset:"30%",stopColor:"#F97316"}),t.jsx("stop",{offset:"60%",stopColor:"#EF4444"}),t.jsx("stop",{offset:"100%",stopColor:"#DC2626"})]}),t.jsxs("radialGradient",{id:"fireCore",cx:"24",cy:"24",r:"12",gradientUnits:"userSpaceOnUse",children:[t.jsx("stop",{offset:"0%",stopColor:"#FFF7ED",stopOpacity:"0.9"}),t.jsx("stop",{offset:"40%",stopColor:"#FBBF24",stopOpacity:"0.6"}),t.jsx("stop",{offset:"100%",stopColor:"#F97316",stopOpacity:"0.3"})]})]}),t.jsx("path",{d:"M24 38Q21 38 19 34Q17 30 18 26Q19 22 21 20Q22 16 24 12Q26 16 27 20Q29 22 30 26Q31 30 29 34Q27 38 24 38Z",fill:"url(#fireCore)",opacity:"0.8"}),t.jsx("path",{d:"M18 28Q16 26 15 24Q14 22 15 20Q16 18 18 18",stroke:"#FBBF24",strokeWidth:"2",strokeLinecap:"round",fill:"none",opacity:"0.7"}),t.jsx("path",{d:"M30 28Q32 26 33 24Q34 22 33 20Q32 18 30 18",stroke:"#FBBF24",strokeWidth:"2",strokeLinecap:"round",fill:"none",opacity:"0.7"}),t.jsx("ellipse",{cx:"20",cy:"22",rx:"2",ry:"3",fill:"#FFF7ED",opacity:"0.9"}),t.jsx("ellipse",{cx:"28",cy:"22",rx:"2",ry:"3",fill:"#FFF7ED",opacity:"0.9"}),t.jsx("circle",{cx:"20",cy:"22",r:"1.2",fill:"#DC2626"}),t.jsx("circle",{cx:"28",cy:"22",r:"1.2",fill:"#DC2626"}),t.jsx("circle",{cx:"20.5",cy:"21.5",r:"0.5",fill:"#FBBF24"}),t.jsx("circle",{cx:"28.5",cy:"21.5",r:"0.5",fill:"#FBBF24"}),t.jsx("path",{d:"M20 28Q24 30 28 28",stroke:"#1F2937",strokeWidth:"1.5",strokeLinecap:"round",opacity:"0.5"}),t.jsx("path",{d:"M20 12Q18 10 18 8Q18 6 20 6",stroke:"#FBBF24",strokeWidth:"1.5",strokeLinecap:"round",fill:"none"}),t.jsx("path",{d:"M24 8Q24 6 24 4Q24 2 25 2",stroke:"#FFF7ED",strokeWidth:"1.5",strokeLinecap:"round",fill:"none"}),t.jsx("path",{d:"M28 12Q30 10 30 8Q30 6 28 6",stroke:"#FBBF24",strokeWidth:"1.5",strokeLinecap:"round",fill:"none"}),t.jsx("circle",{cx:"12",cy:"24",r:"1",fill:"#FBBF24",opacity:"0.8"}),t.jsx("circle",{cx:"36",cy:"24",r:"1",fill:"#FBBF24",opacity:"0.8"}),t.jsx("circle",{cx:"16",cy:"16",r:"0.8",fill:"#F97316",opacity:"0.7"}),t.jsx("circle",{cx:"32",cy:"16",r:"0.8",fill:"#F97316",opacity:"0.7"}),t.jsx("circle",{cx:"18",cy:"36",r:"1.2",fill:"#EF4444",opacity:"0.6"}),t.jsx("circle",{cx:"30",cy:"36",r:"1.2",fill:"#EF4444",opacity:"0.6"}),t.jsx("ellipse",{cx:"24",cy:"28",rx:"14",ry:"18",fill:e,opacity:"0.1"})]}),cr=({primaryColor:e="#60A5FA",secondaryColor:i="#3B82F6",accentColor:s="#DBEAFE",size:r=48})=>t.jsxs("svg",{width:r,height:r,viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("path",{d:"M24 6L32 14L34 24L32 34L24 42L16 34L14 24L16 14Z",fill:"url(#iceGradient)",stroke:i,strokeWidth:"1.5"}),t.jsxs("defs",{children:[t.jsxs("linearGradient",{id:"iceGradient",x1:"24",y1:"6",x2:"24",y2:"42",gradientUnits:"userSpaceOnUse",children:[t.jsx("stop",{offset:"0%",stopColor:"#DBEAFE"}),t.jsx("stop",{offset:"50%",stopColor:"#93C5FD"}),t.jsx("stop",{offset:"100%",stopColor:"#60A5FA"})]}),t.jsxs("radialGradient",{id:"iceCrystal",cx:"24",cy:"24",r:"12",gradientUnits:"userSpaceOnUse",children:[t.jsx("stop",{offset:"0%",stopColor:"#F0F9FF",stopOpacity:"0.9"}),t.jsx("stop",{offset:"60%",stopColor:"#DBEAFE",stopOpacity:"0.5"}),t.jsx("stop",{offset:"100%",stopColor:"#93C5FD",stopOpacity:"0.2"})]})]}),t.jsx("path",{d:"M24 10L28 18L30 24L28 30L24 38L20 30L18 24L20 18Z",fill:"url(#iceCrystal)",stroke:s,strokeWidth:"0.8",opacity:"0.8"}),t.jsx("line",{x1:"24",y1:"6",x2:"24",y2:"42",stroke:s,strokeWidth:"0.8",opacity:"0.6"}),t.jsx("line",{x1:"14",y1:"24",x2:"34",y2:"24",stroke:s,strokeWidth:"0.8",opacity:"0.6"}),t.jsx("line",{x1:"16",y1:"14",x2:"32",y2:"34",stroke:s,strokeWidth:"0.6",opacity:"0.4"}),t.jsx("line",{x1:"32",y1:"14",x2:"16",y2:"34",stroke:s,strokeWidth:"0.6",opacity:"0.4"}),t.jsx("circle",{cx:"24",cy:"6",r:"1.5",fill:"#F0F9FF",stroke:i,strokeWidth:"0.5"}),t.jsx("circle",{cx:"32",cy:"14",r:"1.5",fill:"#F0F9FF",stroke:i,strokeWidth:"0.5"}),t.jsx("circle",{cx:"34",cy:"24",r:"1.5",fill:"#F0F9FF",stroke:i,strokeWidth:"0.5"}),t.jsx("circle",{cx:"32",cy:"34",r:"1.5",fill:"#F0F9FF",stroke:i,strokeWidth:"0.5"}),t.jsx("circle",{cx:"24",cy:"42",r:"1.5",fill:"#F0F9FF",stroke:i,strokeWidth:"0.5"}),t.jsx("circle",{cx:"16",cy:"34",r:"1.5",fill:"#F0F9FF",stroke:i,strokeWidth:"0.5"}),t.jsx("circle",{cx:"14",cy:"24",r:"1.5",fill:"#F0F9FF",stroke:i,strokeWidth:"0.5"}),t.jsx("circle",{cx:"16",cy:"14",r:"1.5",fill:"#F0F9FF",stroke:i,strokeWidth:"0.5"}),t.jsx("ellipse",{cx:"20",cy:"20",rx:"2.5",ry:"3",fill:"#F0F9FF",opacity:"0.9"}),t.jsx("ellipse",{cx:"28",cy:"20",rx:"2.5",ry:"3",fill:"#F0F9FF",opacity:"0.9"}),t.jsx("circle",{cx:"20",cy:"20",r:"1.5",fill:i}),t.jsx("circle",{cx:"28",cy:"20",r:"1.5",fill:i}),t.jsx("circle",{cx:"20.5",cy:"19.5",r:"0.6",fill:"#DBEAFE"}),t.jsx("circle",{cx:"28.5",cy:"19.5",r:"0.6",fill:"#DBEAFE"}),t.jsx("path",{d:"M20 28Q24 26 28 28",stroke:i,strokeWidth:"1.5",strokeLinecap:"round",opacity:"0.6"}),t.jsx("path",{d:"M20 8L19 4",stroke:s,strokeWidth:"1.5",strokeLinecap:"round"}),t.jsx("path",{d:"M24 6L24 2",stroke:"#F0F9FF",strokeWidth:"2",strokeLinecap:"round"}),t.jsx("path",{d:"M28 8L29 4",stroke:s,strokeWidth:"1.5",strokeLinecap:"round"}),t.jsx("path",{d:"M14 20L10 19",stroke:s,strokeWidth:"1.2",strokeLinecap:"round"}),t.jsx("path",{d:"M14 28L10 29",stroke:s,strokeWidth:"1.2",strokeLinecap:"round"}),t.jsx("path",{d:"M34 20L38 19",stroke:s,strokeWidth:"1.2",strokeLinecap:"round"}),t.jsx("path",{d:"M34 28L38 29",stroke:s,strokeWidth:"1.2",strokeLinecap:"round"}),t.jsx("path",{d:"M10 12L11 11L12 12L11 13Z",fill:s,opacity:"0.7"}),t.jsx("path",{d:"M38 12L39 11L40 12L39 13Z",fill:s,opacity:"0.7"}),t.jsx("path",{d:"M10 36L11 35L12 36L11 37Z",fill:s,opacity:"0.7"}),t.jsx("path",{d:"M38 36L39 35L40 36L39 37Z",fill:s,opacity:"0.7"}),t.jsx("ellipse",{cx:"24",cy:"24",rx:"16",ry:"20",fill:e,opacity:"0.1"}),t.jsx("circle",{cx:"26",cy:"14",r:"1",fill:"#F0F9FF",opacity:"0.8"}),t.jsx("circle",{cx:"30",cy:"24",r:"1.2",fill:"#F0F9FF",opacity:"0.8"}),t.jsx("circle",{cx:"22",cy:"32",r:"0.8",fill:"#F0F9FF",opacity:"0.8"})]}),dr=a.div`
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
`,xr=a.div`
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
`,pr=a.div`
  position: absolute;
  top: 2px;
  right: 2px;
  font-size: 12px;
  z-index: 1;
`,Pt=({monsterName:e="",level:i=1,size:s=64})=>{const r=e.toLowerCase(),n=Math.floor(s*.75),o=()=>r.includes("squelette")||r.includes("skeleton")?t.jsx(Os,{size:n}):r.includes("zombie")||r.includes("mort-vivant")||r.includes("goule")||r.includes("ghoul")?t.jsx(er,{size:n}):r.includes("ancien")||r.includes("ancient")||r.includes("elder")?t.jsx(Js,{size:n}):r.includes("dragonnet")||r.includes("whelp")||r.includes("jeune")?t.jsx(Ys,{size:n}):r.includes("dragon")||r.includes("drake")||r.includes("wyrm")?t.jsx(Xs,{size:n}):r.includes("diablotin")||r.includes("imp")?t.jsx(ir,{size:n}):r.includes("gangregarde")||r.includes("felguard")||r.includes("garde")?t.jsx(sr,{size:n}):r.includes("démon")||r.includes("demon")||r.includes("diable")?t.jsx(tr,{size:n}):r.includes("géant")||r.includes("giant")?t.jsx(Vs,{size:n}):r.includes("orc")||r.includes("ogre")||r.includes("troll")?t.jsx(Us,{size:n}):r.includes("feu")||r.includes("fire")||r.includes("flamme")?t.jsx(lr,{size:n}):r.includes("glace")||r.includes("ice")||r.includes("givre")||r.includes("frost")?t.jsx(cr,{size:n}):r.includes("slime")||r.includes("gelée")||r.includes("gluant")||r.includes("élémentaire")||r.includes("elemental")?t.jsx(Ks,{size:n}):r.includes("loup")||r.includes("wolf")?t.jsx(rr,{size:n}):r.includes("sanglier")||r.includes("boar")?t.jsx(nr,{size:n}):r.includes("murloc")?t.jsx(ar,{size:n}):r.includes("bandit")||r.includes("voleur")||r.includes("brigand")?t.jsx(or,{size:n}):r.includes("gobelin")||r.includes("goblin")||r.includes("gnome")?t.jsx(Ze,{size:n}):t.jsx(Ze,{size:n}),l=i>=40;return t.jsxs(dr,{$size:s,$level:i,children:[l&&t.jsx(pr,{children:"💀"}),o(),t.jsx(xr,{$level:i,children:i})]})},Ge={poor:"#9d9d9d",common:"#ffffff",uncommon:"#1eff00",rare:"#0070dd",epic:"#a335ee",legendary:"#ff8000"},hr={poor:"Pauvre",common:"Commun",uncommon:"Inhabituel",rare:"Rare",epic:"Épique",legendary:"Légendaire"},ur=[{id:"weapon-uncommon-1",name:"Épée du débutant",slot:"weapon",quality:"uncommon",level:1,stats:{attackPower:5,strength:2},icon:"⚔️",price:50},{id:"head-uncommon-1",name:"Casque de cuir",slot:"head",quality:"uncommon",level:1,stats:{armor:3,stamina:2},icon:"🪖",price:40},{id:"chest-uncommon-1",name:"Plastron renforcé",slot:"chest",quality:"uncommon",level:1,stats:{armor:5,stamina:3},icon:"🦺",price:60},{id:"legs-uncommon-1",name:"Jambières robustes",slot:"legs",quality:"uncommon",level:1,stats:{armor:4,stamina:2},icon:"👖",price:50},{id:"boots-uncommon-1",name:"Bottes de marche",slot:"boots",quality:"uncommon",level:1,stats:{armor:2,agility:2},icon:"👢",price:40},{id:"jewelry-uncommon-1",name:"Anneau de novice",slot:"jewelry",quality:"uncommon",level:1,stats:{stamina:3,intellect:2},icon:"💍",price:45},{id:"weapon-uncommon-10",name:"Hache de guerre",slot:"weapon",quality:"uncommon",level:10,stats:{attackPower:15,strength:5,critChance:1},icon:"🪓",price:200},{id:"head-uncommon-10",name:"Heaume de fer",slot:"head",quality:"uncommon",level:10,stats:{armor:8,stamina:5},icon:"⛑️",price:150},{id:"chest-uncommon-10",name:"Cuirasse de mailles",slot:"chest",quality:"uncommon",level:10,stats:{armor:12,stamina:7},icon:"🦺",price:250},{id:"legs-uncommon-10",name:"Cuissardes de plates",slot:"legs",quality:"uncommon",level:10,stats:{armor:10,stamina:6},icon:"👖",price:200},{id:"boots-uncommon-10",name:"Solerets de bataille",slot:"boots",quality:"uncommon",level:10,stats:{armor:6,agility:5},icon:"👢",price:150},{id:"jewelry-uncommon-10",name:"Collier de force",slot:"jewelry",quality:"uncommon",level:10,stats:{strength:5,stamina:5},icon:"📿",price:180},{id:"weapon-uncommon-20",name:"Claymore enchantée",slot:"weapon",quality:"uncommon",level:20,stats:{attackPower:30,strength:10,critChance:2},icon:"⚔️",price:500},{id:"head-uncommon-20",name:"Couronne de mage",slot:"head",quality:"uncommon",level:20,stats:{armor:15,intellect:10,spellPower:10},icon:"👑",price:400},{id:"chest-uncommon-20",name:"Armure de champion",slot:"chest",quality:"uncommon",level:20,stats:{armor:25,stamina:15},icon:"🛡️",price:600},{id:"legs-uncommon-20",name:"Grèves mystiques",slot:"legs",quality:"uncommon",level:20,stats:{armor:20,stamina:12,intellect:8},icon:"👖",price:500},{id:"boots-uncommon-20",name:"Bottes de célérité",slot:"boots",quality:"uncommon",level:20,stats:{armor:12,agility:10,critChance:1},icon:"👢",price:400},{id:"jewelry-uncommon-20",name:"Amulette des braves",slot:"jewelry",quality:"uncommon",level:20,stats:{strength:10,stamina:10,critChance:2},icon:"📿",price:450},{id:"weapon-uncommon-30",name:"Lame de titan",slot:"weapon",quality:"uncommon",level:30,stats:{attackPower:50,strength:15,critChance:3},icon:"⚔️",price:1e3},{id:"head-uncommon-30",name:"Diadème arcanique",slot:"head",quality:"uncommon",level:30,stats:{armor:25,intellect:18,spellPower:20},icon:"👑",price:800},{id:"chest-uncommon-30",name:"Cuirasse de conquérant",slot:"chest",quality:"uncommon",level:30,stats:{armor:40,stamina:25},icon:"🛡️",price:1200},{id:"legs-uncommon-30",name:"Jambières de maître",slot:"legs",quality:"uncommon",level:30,stats:{armor:35,stamina:20,strength:10},icon:"👖",price:1e3},{id:"boots-uncommon-30",name:"Bottes de vent",slot:"boots",quality:"uncommon",level:30,stats:{armor:20,agility:18,critChance:2},icon:"👢",price:800},{id:"jewelry-uncommon-30",name:"Talisman de puissance",slot:"jewelry",quality:"uncommon",level:30,stats:{strength:15,intellect:15,stamina:15},icon:"✨",price:900}],mr=(e,i)=>{if(Math.random()>.3)return null;let s=null;if(i.class)try{s=R[i.class]}catch{s=null}let r;const n=Math.random();e<10?n<.5?r="poor":n<.85?r="common":n<.99?r="uncommon":r="legendary":e<20?n<.3?r="poor":n<.6?r="common":n<.85?r="uncommon":n<.98?r="rare":r="legendary":e<30?n<.3?r="common":n<.6?r="uncommon":n<.85?r="rare":n<.97?r="epic":r="legendary":e>49?n<.3?r="common":n<.6?r="uncommon":n<.85?r="rare":n<.9?r="epic":r="legendary":e>59?n<.3?r="common":n<.6?r="uncommon":n<.85?r="rare":n<.8?r="epic":r="legendary":n<.4?r="uncommon":n<.7?r="rare":n<.95?r="epic":r="legendary";const o=["weapon","head","chest","legs","boots","jewelry"],l=o[Math.floor(Math.random()*o.length)],d={poor:.5,common:1,uncommon:1.5,rare:2.5,epic:4,legendary:6},c=Math.floor(e*.8*d[r]),x={};if(l==="weapon")s?(x[s.primaryStat]=c,s.primaryStat==="intellect"?x.spellPower=c*2:x.attackPower=c*2):(x.strength=c,x.attackPower=c*2),Math.random()<.25&&(x.critChance=Math.floor(c*(.1+Math.random()*.2)));else if(l==="jewelry"){s?x[s.primaryStat]=c:x.strength=c;const j=["attackPower","spellPower","critChance","armor"],p=j[Math.floor(Math.random()*j.length)];p==="attackPower"&&s&&s.primaryStat!=="intellect"?x.attackPower=Math.floor(c*1.5):p==="spellPower"&&s&&s.primaryStat==="intellect"?x.spellPower=Math.floor(c*1.5):p==="critChance"?x.critChance=Math.floor(c*(.1+Math.random()*.2)):p==="armor"&&(x.armor=Math.floor(c*1.2))}else x.armor=c*2,s?x[s.primaryStat]=Math.floor(c*.7):x.stamina=Math.floor(c*.7),Math.random()<.15&&(x.critChance=Math.floor(c*(.08+Math.random()*.15)));const h={plate:"en Plaque",mail:"en Mailles",leather:"en Cuir",cloth:"en Tissu"},m={weapon:{poor:["Épée rouillée","Bâton cassé","Dague ébréchée"],common:["Épée courte","Hache de bucheron","Bâton de novice"],uncommon:["Lame tranchante","Marteau lourd","Arc solide"],rare:["Épée de chevalier","Hache runique","Bâton mystique"],epic:["Lame de dragon","Marteau de foudre","Arc de phoenix"],legendary:["Excalibur","Mjolnir","Frostmourne"]},head:{poor:["Bonnet","Chapeau"],common:["Casque","Capuche"],uncommon:["Heaume","Coiffe"],rare:["Couronne","Casque renforcé"],epic:["Heaume de dragon","Couronne céleste"],legendary:["Couronne des rois","Masque éternel"]},chest:{poor:["Tunique","Gilet"],common:["Plastron","Robe"],uncommon:["Cuirasse","Armure"],rare:["Armure renforcée","Robe enchantée"],epic:["Cuirasse céleste","Armure de dragon"],legendary:["Armure des rois","Cuirasse éternel"]},legs:{poor:["Pantalon","Braies"],common:["Jambières","Pantalon renforcé"],uncommon:["Grèves","Cuissardes"],rare:["Jambières renforcée","Grèves renforcée"],epic:["Cuissardes de dragon","Jambières céleste"],legendary:["Grèves des rois","Cuissardes éternel"]},boots:{poor:["Sandales","Bottes"],common:["Solerets","Souliers"],uncommon:["Bottes renforcées","Sandales solides"],rare:["Souliers enchantées","Solerets de bataille"],epic:["Bottes de dragon","Solerets céleste"],legendary:["Bottes des rois","Solerets éternels"]},jewelry:{poor:["Ficelle nouée","Caillou poli"],common:["Anneau de bronze","Collier simple"],uncommon:["Anneau d'argent","Collier enchassé"],rare:["Anneau d'or","Amulette magique"],epic:["Anneau de dragon","Talisman céleste"],legendary:["Anneau des rois","Amulette éternels"]}}[l][r],b=`${m[Math.floor(Math.random()*m.length)]} ${h[s?s.armorType:"cloth"]}`,g={weapon:"⚔️",head:"🪖",chest:"🛡️",legs:"👖",boots:"👢",jewelry:"💍"},$={poor:.5,common:1,uncommon:2,rare:5,epic:12,legendary:30},B=1,W=Math.max(1,e-2),E={...x};Object.keys(E).forEach(j=>{typeof E[j]=="number"&&(E[j]=(E[j]||0)+W*B)});const y=W*10,w=Math.floor(y*$[r]);return{id:`${l}-${r}-${Date.now()}-${Math.random()}`,name:b,slot:l,quality:r,level:W,stats:E,icon:g[l],price:w}},gr=e=>ur.filter(i=>i.level<=e&&i.price),fe=(e,i,s=!1,r=0)=>{const l=(R[e.class??"warrior"].primaryStat==="strength"?e.attackPower:e.spellPower)??e.damage??0,d=e.strength??0,c=e.critChance??0;let x=s?r:l;x+=Math.floor(d*.5);const h=c/100,m=Math.random()<h;m&&(x*=2);const b=i.armor*.1;return{damage:Math.max(1,Math.floor(x-b)),critical:m}},fr=e=>{const{damage:i,critical:s}=fe(e.player,e.monster),r=Math.max(0,e.monster.health-i),n=r===0,o={id:`${Date.now()}-player-attack`,message:s?`💥 Coup critique ! Vous infligez ${i} dégâts !`:`⚔️ Vous attaquez et infligez ${i} dégâts.`,type:s?"critical":"damage",timestamp:Date.now()};return{...e,monster:{...e.monster,health:r},turn:n?"player":"monster",status:n?"victory":"ongoing",battleLog:[...e.battleLog,o]}},yr=e=>{const{damage:i,critical:s}=fe(e.monster,e.player,!1,0),r=e.playerDefending?Math.floor(i*.5):i,n=Math.max(0,e.player.health-r),o=n===0,l={id:`${Date.now()}-monster-attack`,message:s?`💀 ${e.monster.name} vous inflige un coup critique de ${r} dégâts !`:e.playerDefending?`🛡️ Vous bloquez partiellement ! ${e.monster.name} inflige ${r} dégâts.`:`🔴 ${e.monster.name} vous inflige ${r} dégâts.`,type:s?"critical":"damage",timestamp:Date.now()};return{...e,player:{...e.player,health:n},turn:o?"monster":"player",status:o?"defeat":"ongoing",playerDefending:!1,battleLog:[...e.battleLog,l]}},br=e=>{const i={id:`${Date.now()}-player-defend`,message:"🛡️ Vous vous mettez en position défensive. Les dégâts du prochain tour seront réduits de 50%.",type:"info",timestamp:Date.now()};return{...e,playerDefending:!0,turn:"monster",battleLog:[...e.battleLog,i]}},kr=e=>{if(Math.random()<.5){const r={id:`${Date.now()}-flee-success`,message:"🏃 Vous avez réussi à fuir le combat !",type:"info",timestamp:Date.now()};return{...e,status:"fled",battleLog:[...e.battleLog,r]}}else{const r={id:`${Date.now()}-flee-fail`,message:"❌ Vous n'avez pas réussi à fuir ! Le monstre vous rattrape.",type:"info",timestamp:Date.now()};return{...e,turn:"monster",battleLog:[...e.battleLog,r]}}},jr=(e,i)=>{const s=Dt(i,e.player.level);if(e.player.mana<s){const f={id:`${Date.now()}-ability-nomana`,message:`❌ Pas assez de mana pour ${i.name} ! (${s} requis)`,type:"info",timestamp:Date.now()};return{...e,battleLog:[...e.battleLog,f]}}const r=R[e.player.class].primaryStat,n=vs(i,e.player.attackPower,e.player.spellPower,r),o=i.baseHeal?$s(i,e.player.spellPower):0,l=[];let d=e.player.health,c=e.monster.health;if(i.baseDamage&&n>0){const{damage:f,critical:m}=fe(e.player,e.monster,!0,n);c=Math.max(0,e.monster.health-f);const b=m?`${i.icon}💥 ${i.name} CRITIQUE ! ${f} dégâts !`:`${i.icon} ${i.name} inflige ${f} dégâts !`;l.push(b)}if(o>0){const f=Math.min(o,e.player.maxHealth-e.player.health);d=Math.min(e.player.maxHealth,e.player.health+f),l.push(`💚 Vous récupérez ${f} PV !`)}const x=c===0,h={id:`${Date.now()}-ability`,message:`${l.join(" ")} (-${s} mana)`,type:x?"victory":"damage",timestamp:Date.now()};return{...e,player:{...e.player,mana:e.player.mana-s,health:d},monster:{...e.monster,health:c},turn:x?"player":"monster",status:x?"victory":"ongoing",battleLog:[...e.battleLog,h]}},wr=(e,i)=>{const s=e.player.inventory||{potions:[]},r=te.find(h=>h.id===i);if(!r){const h={id:`${Date.now()}-potion-not-found`,message:"❌ Potion introuvable !",type:"info",timestamp:Date.now()};return{...e,battleLog:[...e.battleLog,h]}}const{inventory:n,success:o}=Bt(s,i);if(!o){const h={id:`${Date.now()}-no-potion`,message:`❌ Vous n'avez pas de ${r.name} !`,type:"info",timestamp:Date.now()};return{...e,battleLog:[...e.battleLog,h]}}let l=e.player.health,d=e.player.mana,c="";if(r.type==="health"){const h=Ne(r,e.player.health,e.player.maxHealth);l=e.player.health+h,c=`💚 Vous utilisez ${r.name} et récupérez ${h} PV !`}else if(r.type==="mana"){const h=Ne(r,e.player.mana,e.player.maxMana);d=e.player.mana+h,c=`💙 Vous utilisez ${r.name} et récupérez ${h} MP !`}const x={id:`${Date.now()}-potion-used`,message:c,type:"heal",timestamp:Date.now()};return{...e,player:{...e.player,health:l,mana:d,inventory:n},turn:"monster",battleLog:[...e.battleLog,x]}},vr=(e,i)=>{const s=e.experienceReward,r=e.goldReward,o=i.experience+s>=i.experienceToNextLevel,l=o?i.level+1:i.level,d=mr(e.level,i);return{experience:s,gold:r,levelUp:o,newLevel:l,loot:d||void 0}},$r=(e,i)=>{const s={id:`${Date.now()}-start`,message:`⚔️ Un ${i.name} sauvage apparaît !`,type:"info",timestamp:Date.now()};return{player:e,monster:i,turn:"player",turnCount:1,playerDefending:!1,monsterDefending:!1,battleLog:[s],status:"ongoing"}},Lr=e=>{if(e.monster.abilities.length>0&&Math.random()<.3){const s=e.monster.abilities[Math.floor(Math.random()*e.monster.abilities.length)],{damage:r,critical:n}=fe(e.monster,e.player,!0,s.damage||e.monster.damage*1.5),o=e.playerDefending?Math.floor(r*.5):r,l=Math.max(0,e.player.health-o),d=l===0,c={id:`${Date.now()}-monster-ability`,message:n?`💀✨ ${e.monster.name} utilise ${s.name} ! Coup critique de ${o} dégâts !`:`✨ ${e.monster.name} utilise ${s.name} et inflige ${o} dégâts !`,type:n?"critical":"damage",timestamp:Date.now()};return{...e,player:{...e.player,health:l},turn:d?"monster":"player",status:d?"defeat":"ongoing",playerDefending:!1,turnCount:e.turnCount+1,battleLog:[...e.battleLog,c]}}else return{...yr(e),turnCount:e.turnCount+1}};function Oe(e,i){let s=0,r=0,n=0;return e.length===4?(s=parseInt(e[1]+e[1],16),r=parseInt(e[2]+e[2],16),n=parseInt(e[3]+e[3],16)):e.length===7&&(s=parseInt(e.slice(1,3),16),r=parseInt(e.slice(3,5),16),n=parseInt(e.slice(5,7),16)),s=Math.min(255,Math.max(0,Math.round(s+i/100*255))),r=Math.min(255,Math.max(0,Math.round(r+i/100*255))),n=Math.min(255,Math.max(0,Math.round(n+i/100*255))),`rgb(${s},${r},${n})`}function we({color:e="#FFD700",size:i=48}){const s=Oe(e,-30),r=Oe(e,40);return t.jsxs("svg",{width:i,height:i,viewBox:"0 0 64 64",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("circle",{cx:"32",cy:"32",r:"28",fill:e,stroke:s,strokeWidth:"4",filter:"url(#glow)"}),t.jsx("ellipse",{cx:"32",cy:"32",rx:"22",ry:"22",fill:r,opacity:"0.15"}),t.jsx("ellipse",{cx:"40",cy:"24",rx:"8",ry:"4",fill:r,opacity:"0.5"}),t.jsx("ellipse",{cx:"24",cy:"44",rx:"6",ry:"2.5",fill:r,opacity:"0.3"}),t.jsx("defs",{children:t.jsx("filter",{id:"glow",x:"0",y:"0",width:"64",height:"64",filterUnits:"userSpaceOnUse",children:t.jsx("feGaussianBlur",{stdDeviation:"3",result:"blur"})})})]})}function ie({amount:e}){const i=Math.floor(e/1e4),s=Math.floor(e%1e4/100),r=e%100;return t.jsxs("span",{style:{display:"flex",alignItems:"center",justifyContent:"flex-end",gap:"8px"},children:[i>0&&t.jsxs("span",{style:{color:"#FFD700",marginRight:"4px"},children:[me(i)," ",t.jsx(we,{color:"#FFD700",size:12})]}),s>0&&t.jsxs("span",{style:{color:"#C0C0C0",marginRight:"4px"},children:[s," ",t.jsx(we,{color:"#C0C0C0",size:12})]}),t.jsxs("span",{style:{color:"#CD7F32"},children:[r," ",t.jsx(we,{color:"#B87333",size:12})]})]})}const Mr=a.div`
    width: 100%;
    margin-bottom: 0.5rem;
`,Fr=a.div`
    display: flex;
    justify-content: space-between;
    font-size: 0.95rem;
    color: #aaa;
    margin-bottom: 0.2rem;
`,Wr=a.div`
    position: relative;
    width: 100%;
    height: 22px;
    background: rgba(0,0,0,0.4);
    border-radius: 999px;
    border: 2px solid #ffd700;
    overflow: hidden;
    box-shadow: inset 0 2px 4px rgba(0,0,0,0.3);
`,Dr=a.div`
    height: 100%;
    width: ${({$percent:e})=>e}%;
    background: linear-gradient(90deg,#ffd700 0%,#ffed4e 50%,#ffd700 100%);
    transition: width 0.7s cubic-bezier(.4,2,.3,1);
    position: absolute;
    left: 0;
    top: 0;
    box-shadow: 0 0 10px rgba(255,215,0,0.5);
`,Br=a.div`
    height: 100%;
    width: ${({$percent:e})=>e}%;
    background: linear-gradient(90deg,#22c55e 0%,#bbf7d0 100%);
    transition: width 0.7s cubic-bezier(.4,2,.3,1);
    position: absolute;
    left: ${({$offset:e})=>e}%;
    top: 0;
    box-shadow: 0 0 10px rgba(34,197,94,0.3);
`,Ar=a.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    font-weight: bold;
    color: #fff;
    text-shadow: 0 1px 2px rgba(0,0,0,0.8);
    font-size: 0.85rem;
    z-index: 1;
`,Pr=a.div`
    font-size: 0.9rem;
    color: #22c55e;
    margin-top: 0.2rem;
    font-weight: bold;
`;function qr({character:e,battleState:i}){const s=e.level-3>i.monster.level?0:e.experience&&e.experienceToNextLevel?e.experience/e.experienceToNextLevel*100:0,r=i.rewards&&e.experienceToNextLevel?i.rewards.experience/e.experienceToNextLevel*100:0;return i.status==="victory"&&i.rewards?t.jsxs(Mr,{children:[t.jsxs(Fr,{children:[t.jsxs("span",{children:["Niveau ",i.rewards.levelUp&&i.rewards.newLevel?i.rewards.newLevel:e.level]}),t.jsxs("span",{children:[e.experience," / ",e.experienceToNextLevel," XP"]})]}),t.jsxs(Wr,{children:[t.jsx(Dr,{$percent:s}),t.jsx(Br,{$percent:e.level-3>i.monster.level?0:r,$offset:s}),t.jsxs(Ar,{children:[Math.max(0,Math.round(s+r)),"%"]})]}),t.jsxs(Pr,{children:["+",e.level-3>i.monster.level?0:i.rewards.experience," XP gagnés"]})]}):null}const ve=a.div`
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
`,Er=a.div`
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
`,Ue=a.div`
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
`,Ve=a.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  pointer-events: none;
  z-index: 100;
  width: 100%;
  height: 100%;
  overflow: visible;
`,Xe=a.div`
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
`,Sr=a.div`
  font-size: ${({theme:e})=>e.fontSizes["6xl"]};
  margin-bottom: ${({theme:e})=>e.spacing.md};
  filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.5));
`,zr=a.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: ${({theme:e})=>e.spacing.md};
`,Ye=a.h2`
  font-family: ${({theme:e})=>e.fonts.display};
  font-size: ${({theme:e})=>e.fontSizes["2xl"]};
  color: ${({theme:e})=>e.colors.primary.gold};
  margin-bottom: ${({theme:e})=>e.spacing.sm};
  text-shadow: 
    0 0 10px rgba(255, 215, 0, 0.5),
    2px 2px 4px rgba(0, 0, 0, 0.8);
  letter-spacing: 1px;
`,Be=a.div`
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
`,Je=a.div`
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
`,Ae=a.div`
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
`,Cr=a(Be)`
  height: 24px;
`,Ir=a.div`
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
`,Qr=a(Ae)`
  font-size: ${({theme:e})=>e.fontSizes.xs};
`,Tr=a.div`
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
`,Rr=a.h3`
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
`,K=a.button`
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
`,oe=a.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: ${({theme:e})=>e.borderRadius.sm};
`,Ke=a.span`
  font-size: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
`,et=a.div`
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
`,tt=a.h3`
  color: ${({theme:e})=>e.colors.primary.gold};
  font-size: ${({theme:e})=>e.fontSizes.lg};
  margin-bottom: ${({theme:e})=>e.spacing.md};
  font-weight: ${({theme:e})=>e.fontWeights.bold};
  text-shadow: 0 0 10px rgba(255, 215, 0, 0.5);
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing.sm};
`,it=a.div`
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
`,st=a.div`
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
`,rt=a.h2`
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
`,nt=a.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing.md};
  margin-bottom: ${({theme:e})=>e.spacing.xl};
  position: relative;
  z-index: 1;
`,ee=a.div`
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
`,_r=a(ee)`
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
gap: ${({theme:e})=>e.spacing.sm};
`;function Hr({character:e,monsterLevel:i,onBattleEnd:s,onExit:r}){const[n,o]=u.useState(()=>{const p=bs(typeof i=="number"?i:e.level);return $r(e,p)}),[l,d]=u.useState([]),[c,x]=u.useState(!1),h=u.useCallback((p,k,v)=>{const M=Date.now(),U={id:M,text:p,type:k,target:v};d(V=>[...V,U]),setTimeout(()=>{d(V=>V.filter(se=>se.id!==M))},1500)},[]),f=ws(e.class,e.level);u.useEffect(()=>{if(!n.battleLog||n.battleLog.length===0)return;const p=n.battleLog[n.battleLog.length-1];if(!p)return;const k=p.message.match(/(\d+) dégâts/i),v=p.message.match(/(?:récupère|soigne|restaure) (\d+)/i),M=p.message.match(/critique/i),U=p.message.match(/esquive|raté|manque/i),V=p.message.match(/défense|défend/i),se=p.message.match(/Vous (attaquez|infligez|utilisez)/i)||p.message.match(/inflige \d+ dégâts ! \(-\d+ mana\)/i)||p.message.match(/CRITIQUE.*\(-\d+ mana\)/i);if(U)h("Esquivé !","miss",se?"monster":"player");else if(V&&!k)h("Défense +","effect","player");else if(v){const X=v[1];h(`+${X}`,"heal","player")}else if(k){const X=k[1],Et=se?"monster":"player",St=M?"critical":"damage",zt=M?`${X} !!!`:X;h(zt,St,Et)}},[n.battleLog,h]),u.useEffect(()=>{if(n.turn==="monster"&&n.status==="ongoing"){const p=setTimeout(()=>{o(k=>(x(!1),Lr(k)))},500);return()=>clearTimeout(p)}},[n.turn,n.status]);const m=p=>{n.turn==="player"&&n.status==="ongoing"&&!c&&(x(!0),o(()=>p()))},b=()=>m(()=>fr(n)),g=p=>m(()=>jr(n,p)),$=()=>m(()=>br(n)),B=()=>m(()=>kr(n)),W=p=>m(()=>wr(n,p)),E=()=>{if(n.status==="victory"&&n.rewards){console.log(e.level,n.monster.level),console.log(e.level-3>n.monster.level),e.level-3>n.monster.level&&(n.rewards.experience=0);const p=(e.experience||0)+n.rewards.experience,k={...e,experience:n.rewards.levelUp?p-ue(e.level):p,gold:(e.gold||0)+n.rewards.gold,level:n.rewards.levelUp?e.level+1:e.level,health:n.rewards.levelUp?n.player.maxHealth:n.player.health,mana:n.rewards.levelUp?n.player.maxMana:n.player.mana,inventory:n.player.inventory,defeatedMonsters:e.defeatedMonsters+1,experienceToNextLevel:ue(n.rewards.newLevel)};if(n.rewards.levelUp){const v=De(k);k.health=v.maxHealth,k.mana=v.maxMana}s(k,n.rewards.loot)}else r()};u.useEffect(()=>{if(n.status==="victory"&&!n.rewards){const p=vr(n.monster,n.player);o(k=>({...k,rewards:p}))}},[n.status,n.monster,n.player,n.rewards]);const y=n.player.health/n.player.maxHealth*100,w=n.player.mana/n.player.maxMana*100,j=n.monster.health/n.monster.maxHealth*100;return u.useEffect(()=>{const p=["é",'"',"'","(","-","è"],k=v=>{console.log(v.key),v.key==="&"&&b(),f.forEach((M,U)=>{v.key===p[U]&&g(M)})};return window.addEventListener("keydown",k),()=>{window.removeEventListener("keydown",k)}},[b,g,f]),n.status==="victory"&&n.rewards?t.jsx(ve,{children:t.jsx($e,{children:t.jsxs(st,{children:[t.jsxs(nt,{children:[t.jsx(rt,{children:"🎉 Victoire ! 🎉"}),t.jsx(ee,{children:t.jsx(qr,{character:e,battleState:n})}),t.jsxs(_r,{children:["Tu as récupéré : ",t.jsx(ie,{amount:n.rewards.gold})]}),n.rewards.loot&&t.jsxs(ee,{children:["Tu as ramassé : "," ",t.jsxs("span",{style:{color:`${n.rewards.loot.quality==="poor"?"#9d9d9d":n.rewards.loot.quality==="common"?"#ffffff":n.rewards.loot.quality==="uncommon"?"#1eff00":n.rewards.loot.quality==="rare"?"#0070dd":n.rewards.loot.quality==="epic"?"#a335ee":"#ff8000"}`,fontWeight:"bold",fontSize:"1.1rem"},children:[n.rewards.loot.icon," ",n.rewards.loot.name]})]}),n.rewards.levelUp&&t.jsxs(ee,{children:["🎊 NIVEAU SUPÉRIEUR ! Niveau ",n.rewards.newLevel," 🎊"]})]}),t.jsx(F,{onClick:E,children:"Continuer"})]})})}):n.status==="defeat"||n.status==="fled"?t.jsx(ve,{children:t.jsx($e,{children:t.jsxs(st,{style:{background:"rgba(239, 68, 68, 0.2)",borderColor:"#ef4444"},children:[t.jsx(rt,{style:{color:"#ef4444"},children:n.status==="defeat"?"💀 Défaite":"🏃 Vous avez fui"}),t.jsx(nt,{children:t.jsx(ee,{style:{color:"#ef4444"},children:n.status==="defeat"?"Vous avez été vaincu...":"Vous avez échappé au combat"})}),t.jsxs(et,{children:[t.jsx(tt,{children:"📜 Journal de Combat"}),[...n.battleLog].reverse().map(p=>t.jsx(it,{$type:p.type,children:p.message},p.id))]}),t.jsx(F,{onClick:E,children:"Retour"})]})})}):t.jsx(ve,{children:t.jsxs($e,{children:[t.jsxs(Er,{children:[t.jsxs(Ue,{$isPlayer:!0,children:[t.jsx(Ye,{children:n.player.name}),t.jsx(Sr,{children:"⚔️"}),t.jsxs(Be,{children:[t.jsx(Je,{$percentage:y}),t.jsxs(Ae,{children:[n.player.health," / ",n.player.maxHealth]})]}),t.jsxs(Cr,{children:[t.jsx(Ir,{$percentage:w}),t.jsxs(Qr,{children:[n.player.mana," / ",n.player.maxMana]})]}),t.jsx(Ve,{children:l.filter(p=>p.target==="player").map(p=>t.jsx(Xe,{$type:p.type,children:me(parseInt(p.text))},p.id))})]}),t.jsxs(Ue,{children:[t.jsx(Ye,{children:n.monster.name.replace(/\s*\(Niv\.\s*\d+\)/,"")}),t.jsx(zr,{children:t.jsx(Pt,{monsterName:n.monster.name,level:n.monster.level,size:80})}),t.jsxs(Be,{children:[t.jsx(Je,{$percentage:j}),t.jsxs(Ae,{children:[n.monster.health," / ",n.monster.maxHealth]})]}),t.jsx(Ve,{children:l.filter(p=>p.target==="monster").map(p=>t.jsx(Xe,{$type:p.type,children:me(parseInt(p.text))},p.id))})]})]}),t.jsxs(Tr,{children:[t.jsx(Rr,{children:"Actions & Potions"}),t.jsxs("div",{style:{display:"flex",width:"100%",justifyContent:"space-between",alignItems:"center",gap:"2rem"},children:[t.jsxs("div",{style:{display:"flex",gap:"1.5rem",flexWrap:"wrap",alignItems:"center"},children:[t.jsx(K,{onClick:b,disabled:n.turn!=="player"||c,$disabled:n.turn!=="player"||c,$variant:"primary",style:{boxShadow:"none"},children:t.jsx(oe,{src:ke.attack,alt:"Attaquer"})}),f.map(p=>{const k=Dt(p,e.level),v=n.turn==="player"&&n.player.mana>=k&&!c,M=Ls(p);return t.jsx(K,{onClick:()=>g(p),disabled:!v,$disabled:!v,$variant:"primary",style:{boxShadow:"none"},children:M?t.jsx(oe,{src:M,alt:p.name}):t.jsx(Ke,{children:p.icon})},p.id)}),t.jsx(K,{onClick:$,disabled:n.turn!=="player"||c,$disabled:n.turn!=="player"||c,$variant:"secondary",style:{boxShadow:"none"},children:t.jsx(oe,{src:ke.defend,alt:"Défendre"})}),t.jsx(K,{onClick:B,disabled:n.turn!=="player"||c,$disabled:n.turn!=="player"||c,$variant:"danger",style:{boxShadow:"none"},children:t.jsx(oe,{src:ke.flee,alt:"Fuir"})})]}),t.jsx("div",{style:{display:"flex",gap:"1.5rem",flexWrap:"wrap",alignItems:"center"},children:n.player.inventory&&n.player.inventory.potions.length>0&&n.player.inventory.potions.map(p=>{const k=te.find(M=>M.id===p.potionId);if(!k||p.quantity<=0)return null;const v=n.turn==="player"&&!c;return t.jsx(K,{onClick:()=>W(p.potionId),disabled:!v,$disabled:!v,$variant:k.type==="health"?"danger":"secondary",style:{boxShadow:"none"},children:t.jsx(Ke,{children:k.icon})},p.potionId)})})]})]}),t.jsxs(et,{children:[t.jsx(tt,{children:"📜 Journal de Combat"}),[...n.battleLog].reverse().map(p=>t.jsx(it,{$type:p.type,children:p.message},p.id))]})]})})}const Nr=a.div`
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
`,Zr=a.div`
  text-align: center;
  margin-bottom: ${({theme:e})=>e.spacing.xl};
`,Gr=a.h2`
  font-family: ${({theme:e})=>e.fonts.display};
  font-size: ${({theme:e})=>e.fontSizes["3xl"]};
  color: ${({theme:e})=>e.colors.primary.gold};
  margin-bottom: ${({theme:e})=>e.spacing.sm};
`,Or=a.div`
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
`,le=a.div`
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
`,at=a.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: ${({theme:e})=>e.spacing.lg};
  margin-bottom: ${({theme:e})=>e.spacing.xl};
`,ot=a.div`
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
`,ct=a.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing.xxs};
`,dt=a.h3`
  font-family: ${({theme:e})=>e.fonts.secondary};
  font-size: ${({theme:e})=>e.fontSizes.lg};
  color: ${({theme:e})=>e.colors.primary.gold};
  margin-bottom: ${({theme:e})=>e.spacing.xs};
`,Le=a.div`
  font-size: ${({theme:e})=>e.fontSizes.xs};
  line-height: 1;
  color: ${({theme:e})=>e.colors.neutral.silver};
`,Ur=a.div`
  font-size: ${({theme:e})=>e.fontSizes.xs};
  color: ${({theme:e})=>e.colors.winter.iceBlue};
`,Vr=a.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing.sm};
`,Xr=a.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing.md};
  align-items: center;
  margin-top: ${({theme:e})=>e.spacing.md};
`,xt=a.button`
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
`,Yr=a.div`
  flex: 1;
  text-align: center;
  font-size: ${({theme:e})=>e.fontSizes.xl};
  color: ${({theme:e})=>e.colors.neutral.white};
  font-weight: ${({theme:e})=>e.fontWeights.bold};
`;function Jr({character:e,onPurchase:i}){const[s,r]=u.useState("potions"),[n,o]=u.useState("all"),[l,d]=u.useState("all"),[c,x]=u.useState("all"),[h,f]=u.useState({}),m=Ms(e.level,n==="all"?void 0:n),g=gr(e.level).filter(y=>{if(l!=="all"&&y.slot!==l||c==="available"&&y.level>e.level)return!1;if(c==="current"){const w=Math.max(1,e.level-5),j=e.level+5;if(y.level<w||y.level>j)return!1}return!0}),$=y=>h[y]||1,B=(y,w)=>{f(j=>({...j,[y]:Math.max(1,w)}))},W=y=>{const w=$(y.id),j=y.price*w;if(e.gold<j)return;const p=e.inventory||{potions:[]},k=Fs(p,y.id,w),v={...e,gold:e.gold-j,inventory:k};i(v),f(M=>({...M,[y.id]:1}))},E=y=>{const w=y.price||0;if(e.gold<w||e.level<y.level)return;const j=e.bagItems||[];j.push({itemId:y.id,item:y});const p={...e,gold:e.gold-w,bagItems:j};i(p)};return t.jsxs(Nr,{children:[t.jsxs(Zr,{children:[t.jsx(Gr,{children:"🏪 Boutique"}),t.jsxs(Or,{children:["Votre or : ",t.jsx(ie,{amount:e.gold})]})]}),t.jsxs(le,{children:[t.jsx(L,{$active:s==="potions",onClick:()=>r("potions"),children:"🧪 Potions"}),t.jsx(L,{$active:s==="equipment",onClick:()=>r("equipment"),children:"⚔️ Équipement"})]}),s==="potions"&&t.jsxs(t.Fragment,{children:[t.jsxs(le,{children:[t.jsx(L,{$active:n==="all",onClick:()=>o("all"),children:"Toutes"}),t.jsx(L,{$active:n==="health",onClick:()=>o("health"),children:"❤️ Vie"}),t.jsx(L,{$active:n==="mana",onClick:()=>o("mana"),children:"💙 Mana"})]}),t.jsx(at,{children:m.map(y=>{const w=$(y.id),j=y.price*w,p=e.gold>=j;return t.jsxs(ot,{$affordable:p,children:[t.jsxs(lt,{children:[t.jsx(At,{potion:y,size:64}),t.jsxs(ct,{children:[t.jsx(dt,{children:y.name}),t.jsx(Le,{children:y.description})]})]}),t.jsxs(Xr,{children:[t.jsxs(Vr,{children:[t.jsx(xt,{onClick:()=>B(y.id,w-1),disabled:w<=1,children:"-"}),t.jsx(Yr,{children:w}),t.jsx(xt,{onClick:()=>B(y.id,w+1),disabled:j>=e.gold&&w>0,children:"+"})]}),t.jsx(F,{onClick:()=>W(y),disabled:!p,$size:"small",$variant:"secondary",children:p?t.jsx(ie,{amount:j}):"Trop cher"})]})]},y.id)})})]}),s==="equipment"&&t.jsxs(t.Fragment,{children:[t.jsxs(le,{children:[t.jsx(L,{$active:l==="all",onClick:()=>d("all"),children:"Tous"}),t.jsx(L,{$active:l==="weapon",onClick:()=>d("weapon"),children:"⚔️ Arme"}),t.jsx(L,{$active:l==="head",onClick:()=>d("head"),children:"🪖 Tête"}),t.jsx(L,{$active:l==="chest",onClick:()=>d("chest"),children:"🛡️ Torse"}),t.jsx(L,{$active:l==="legs",onClick:()=>d("legs"),children:"👖 Jambes"}),t.jsx(L,{$active:l==="boots",onClick:()=>d("boots"),children:"👢 Bottes"}),t.jsx(L,{$active:l==="jewelry",onClick:()=>d("jewelry"),children:"💍 Bijoux"})]}),t.jsxs(le,{children:[t.jsx(L,{$active:c==="all",onClick:()=>x("all"),children:"Tous niveaux"}),t.jsx(L,{$active:c==="available",onClick:()=>x("available"),children:"✅ Équipables"}),t.jsx(L,{$active:c==="current",onClick:()=>x("current"),children:"📊 ±5 niveaux"})]}),t.jsx(at,{children:g.map(y=>{const w=e.gold>=(y.price||0),j=e.level>=y.level;return t.jsxs(ot,{$affordable:w&&j,children:[t.jsxs(lt,{children:[t.jsx(Se,{itemType:y.slot,itemName:y.name,quality:y.quality,size:56}),t.jsx(ct,{children:t.jsx(dt,{style:{color:Ge[y.quality]},children:y.name})})]}),t.jsx(Le,{style:{color:Ge[y.quality]},children:hr[y.quality]}),t.jsx(Le,{children:Object.entries(y.stats).map(([p,k])=>t.jsxs("div",{children:["+",k," ",p==="attackPower"?"Puissance":p==="spellPower"?"Magie":p==="critChance"?"Crit":p==="strength"?"Force":p==="agility"?"Agilité":p==="intellect"?"Intelligence":p==="stamina"?"Endurance":p==="armor"?"Armure":p]},p))}),t.jsxs(Ur,{children:["Niveau ",y.level]}),t.jsx(F,{onClick:()=>E(y),disabled:!w||!j,$fullWidth:!0,$size:"small",$variant:"primary",children:j?w?`${y.price} 💰`:"Trop cher":`Niveau ${y.level} requis`})]},y.id)})})]})]})}function qt(){const{showTooltip:e,hideTooltip:i}=Ft();return{showItemTooltip:(r,n)=>{const o={title:r.name,stats:r.stats,quality:r.quality,level:r.level,equiped:r.equiped??void 0};e(o,{x:n.clientX,y:n.clientY})},hideTooltip:i}}function Pe(e){const i={};return e.forEach(s=>{i[s.item.id]={...s,item:{id:s.item.id,name:s.item.name,slot:s.item.slot,quality:s.item.quality,level:s.item.level,stats:s.item.stats,icon:s.item.icon,price:s.item.price,dropRate:s.item.dropRate||0}}}),Object.values(i)}const Kr=a.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: ${({theme:e})=>e.spacing.md};

  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }
`,en=a.div`
  background: rgba(0, 0, 0, 0.3);
  border: 2px solid rgba(255, 215, 0, 0.3);
  border-radius: ${({theme:e})=>e.borderRadius.md};
  padding: ${({theme:e})=>e.spacing.xs};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
`,tn=a.div`
  color: ${({theme:e})=>e.colors.text.secondary};
  font-size: ${({theme:e})=>e.fontSizes.xs};
  margin-bottom: ${({theme:e})=>e.spacing.xs};
  text-transform: uppercase;
  text-align: center;
`,sn=a.div`
  cursor: pointer;
`,rn=a.div`
  color: ${({theme:e})=>e.colors.text.secondary};
  font-style: italic;
  font-size: ${({theme:e})=>e.fontSizes.sm};
  text-align: center;
`;function nn(){const{character:e,updateCharacter:i}=D(),{showItemTooltip:s,hideTooltip:r}=qt(),[n,o]=u.useState({});if(u.useEffect(()=>{e&&o(e.equipment||{})},[e]),!e)return null;const l=d=>{if(!e.equipment||!e.equipment[d])return;const c=e.equipment[d];let x=[...e.bagItems||[],{itemId:c.id,item:c}];const h={...e.equipment};delete h[d],x=Pe(x),i({...e,equipment:h,bagItems:x})};return t.jsxs(ze,{style:{marginBottom:"1.5rem"},children:[t.jsx(ye,{children:"⚔️ Équipement"}),t.jsx(Kr,{children:["weapon","head","chest","legs","boots","jewelry"].map(d=>{const c={weapon:"⚔️ Arme",head:"🪖 Tête",chest:"👕 Torse",legs:"👖 Jambes",boots:"👢 Bottes",jewelry:"💍 Bijou"},x=n?.[d];return t.jsxs(en,{children:[t.jsx(tn,{children:c[d]}),x?t.jsx(sn,{onClick:()=>l(d),onMouseEnter:h=>s(x,h),onMouseLeave:r,children:t.jsx(Se,{itemType:d,itemName:x.name,quality:x.quality,size:52})}):t.jsx(rn,{children:"Vide"})]},d)})})]})}const an=a.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: ${({theme:e})=>e.spacing.md};
`,A=a.div`
  display: flex;
  justify-content: space-between;
  padding: ${({theme:e})=>e.spacing.xs};
  background: rgba(0, 0, 0, 0.3);
  border-radius: ${({theme:e})=>e.borderRadius.md};
  border-left: 3px solid ${({theme:e})=>e.colors.primary.gold};
`,P=a.span`
  color: ${({theme:e})=>e.colors.text.secondary};
  font-size: ${({theme:e})=>e.fontSizes.sm};
`,q=a.span`
  color: ${({theme:e})=>e.colors.primary.gold};
  font-weight: ${({theme:e})=>e.fontWeights.bold};
  font-size: ${({theme:e})=>e.fontSizes.base};
`;function on(){const{character:e}=D();return e?t.jsxs(ze,{children:[t.jsx(ye,{children:"📊 Statistiques"}),t.jsxs(an,{children:[t.jsxs(A,{children:[t.jsx(P,{children:"❤️ Vie"}),t.jsxs(q,{children:[e.health," / ",e.maxHealth]})]}),t.jsxs(A,{children:[t.jsx(P,{children:"💙 Mana"}),t.jsxs(q,{children:[e.mana," / ",e.maxMana]})]}),t.jsxs(A,{children:[t.jsx(P,{children:"💰 Or"}),t.jsx(q,{children:t.jsx(ie,{amount:e.gold})})]}),t.jsxs(A,{children:[t.jsx(P,{children:"⚔️ Puissance d'attaque"}),t.jsx(q,{children:e.attackPower})]}),t.jsxs(A,{children:[t.jsx(P,{children:"🔮 Puissance magique"}),t.jsx(q,{children:e.spellPower})]}),t.jsxs(A,{children:[t.jsx(P,{children:"🛡️ Armure"}),t.jsx(q,{children:e.armor})]}),t.jsxs(A,{children:[t.jsx(P,{children:"💪 Force"}),t.jsx(q,{children:e.strength})]}),t.jsxs(A,{children:[t.jsx(P,{children:"🎯 Agilité"}),t.jsx(q,{children:e.agility})]}),t.jsxs(A,{children:[t.jsx(P,{children:"🧠 Intelligence"}),t.jsx(q,{children:e.intellect})]}),t.jsxs(A,{children:[t.jsx(P,{children:"💚 Endurance"}),t.jsx(q,{children:e.stamina})]}),t.jsxs(A,{children:[t.jsx(P,{children:"⚡ Critique"}),t.jsxs(q,{children:[e.critChance.toFixed(1),"%"]})]})]})]}):null}const ln=e=>({minor:"poor",lesser:"common",normal:"common",greater:"uncommon",superior:"rare",ultimate:"epic"})[e],cn=a.div`
  margin-bottom: ${({theme:e})=>e.spacing.xl};
`,dn=a.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(80px, 1fr));
  gap: ${({theme:e})=>e.spacing.md};
`,xn=a.div`
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
`,pn=a.div`
  color: ${({theme:e})=>e.colors.primary.gold};
  font-size: ${({theme:e})=>e.fontSizes.base};
  font-weight: ${({theme:e})=>e.fontWeights.bold};
  text-align: center;
`,hn=a.div`
  color: ${({theme:e})=>e.colors.text.secondary};
  font-style: italic;
  font-size: ${({theme:e})=>e.fontSizes.sm};
  text-align: center;
`;function un(){const{character:e,updateCharacter:i}=D(),{showTooltip:s,hideTooltip:r}=Ft();if(!e)return null;const n=o=>{if(!e.inventory)return;const l=te.find(b=>b.id===o);if(!l)return;const d=Bt(e.inventory,o);if(!d.success){alert("Impossible d'utiliser cette potion !");return}let c=e.health||0,x=e.mana||0;const h=e.buffs||[],f=b=>{switch(b.quality){case"minor":return 1800;case"lesser":return 2100;case"normal":return 2400;case"greater":return 2700;case"superior":return 3e3;case"ultimate":return 3600;default:return 0}},m=l.id.split("-").pop();switch(l.type){case"health":c=Math.min(e.maxHealth||e.health||0,(e.health||0)+l.restoreAmount),c+=Math.floor((e.maxHealth||0)*(l.restorePercent||0)/100);break;case"mana":x=Math.min(e.maxMana||e.mana||0,(e.mana||0)+l.restoreAmount),x+=Math.floor((e.maxMana||0)*(l.restorePercent||0)/100);break;case"effect":h.push({id:`potion-${m}-${Date.now()}`,effect:m,amount:l.restorePercent||0,duration:f(l),icon:Fe[m]?.emoji||l.icon,name:l.name,description:l.description,expiresAt:Date.now()+f(l)});break}c<0&&(c=0),x<0&&(x=0),c>(e.maxHealth||0)&&(c=e.maxHealth||0),x>(e.maxMana||0)&&(x=e.maxMana||0),i({...e,inventory:d.inventory,health:c,mana:x,buffs:h})};return t.jsxs(cn,{children:[t.jsx(ye,{children:"🧪 Potions"}),e.inventory?.potions&&e.inventory.potions.length>0?t.jsx(dn,{children:e.inventory.potions.map((o,l)=>{const d=te.find(c=>c.id===o.potionId);return d?t.jsxs(xn,{onClick:()=>n(d.id),children:[t.jsx("div",{onMouseEnter:c=>{s({title:d.name,description:d.description,quality:ln(d.quality),stats:{Type:d.type==="health"?"Santé":"Mana",Restaure:`${d.restoreAmount} ${d.type==="health"?"PV":"Mana"}`}},{x:c.clientX,y:c.clientY})},onMouseLeave:r,children:t.jsx(At,{potion:d,size:48})}),t.jsxs(pn,{children:["x",o.quantity]})]},l):null})}):t.jsx(hn,{children:"Aucune potion"})]})}const mn=a.div``,gn=a.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  gap: ${({theme:e})=>e.spacing.md};
`,fn=a.div`
  background: rgba(0, 0, 0, 0.3);
  border: 2px solid ${({$quality:e,theme:i})=>{switch(e){case"legendary":return i.colors.quality.legendary;case"epic":return i.colors.quality.epic;case"rare":return i.colors.quality.rare;case"uncommon":return i.colors.quality.uncommon;case"common":return i.colors.quality.common;default:return i.colors.quality.poor}}};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  padding: ${({theme:e})=>e.spacing.md};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({theme:e})=>e.spacing.sm};
`,yn=a.div`
  cursor: pointer;
`,bn=a.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing.xs};
  width: 100%;
`,kn=a.button`
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
`,jn=a.div`
  color: ${({theme:e})=>e.colors.text.secondary};
  font-style: italic;
  font-size: ${({theme:e})=>e.fontSizes.sm};
  text-align: center;
`;function wn(){const{character:e,updateCharacter:i}=D(),{showItemTooltip:s,hideTooltip:r}=qt();if(!e)return null;const n=d=>{const c={...d};delete c.equiped;const x=e.equipment||{},h=x[d.slot],f={...x,[d.slot]:c};let m=(e.bagItems||[]).filter(b=>("item"in b?b.item:b).id!==d.id);if(h){const b={...h};delete b.equiped,m=[...m,{itemId:b.id,item:b}]}m=Pe(m),i({...e,equipment:f,bagItems:m})},o=d=>{const c=Math.floor((d.price||0)*.25);let x=(e.bagItems||[]).filter(h=>("item"in h?h.item:h).id!==d.id);x=Pe(x),i({...e,bagItems:x,gold:e.gold+c})},l=(e.bagItems||[]).slice().sort((d,c)=>{const x="item"in d?d.item:d;return(("item"in c?c.item:c).level||0)-(x.level||0)});return t.jsxs(mn,{children:[t.jsx(ye,{children:"🎒 Sac - Équipement"}),l.length>0?t.jsx(gn,{children:l.map((d,c)=>{const x="item"in d?d.item:d;return x.equiped=e.equipment?e.equipment[x.slot]:void 0,!x||!x.name?null:t.jsxs(fn,{$quality:x.quality,children:[t.jsx(yn,{onClick:()=>n(x),onMouseEnter:h=>s(x,h),onMouseLeave:r,children:t.jsx(Se,{itemType:x.slot,itemName:x.name,quality:x.quality,size:52})}),t.jsx(bn,{children:t.jsxs(kn,{$variant:"secondary",onClick:()=>o(x),children:["Vendre (",Math.floor((x.price||0)*.25),"g)"]})})]},c)})}):t.jsx(jn,{children:"Aucun équipement dans le sac"})]})}const vn=a.div`
  width: 100%;
  margin-bottom: ${({theme:e})=>e.spacing.xl};
`,$n=a.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: ${({theme:e})=>e.spacing.xs};
  font-size: ${({theme:e})=>e.fontSizes.sm};
  color: ${({theme:e})=>e.colors.text.secondary};
`,Ln=a.div`
  width: 100%;
  height: 24px;
  background: rgba(0, 0, 0, 0.4);
  border: 2px solid ${({theme:e})=>e.colors.primary.gold};
  border-radius: ${({theme:e})=>e.borderRadius.full};
  overflow: hidden;
  position: relative;
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.3);
`,Mn=a.div`
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
`,Fn=a.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-weight: ${({theme:e})=>e.fontWeights.bold};
  color: ${({theme:e})=>e.colors.text.primary};
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.8);
  font-size: ${({theme:e})=>e.fontSizes.xs};
  z-index: 1;
`;function Wn(){const{character:e}=D();if(!e)return null;const i=e.experience/e.experienceToNextLevel*100;return t.jsxs(vn,{children:[t.jsxs($n,{children:[t.jsxs("span",{children:["Niveau ",e.level]}),t.jsxs("span",{children:[e.experience," / ",e.experienceToNextLevel," XP"]})]}),t.jsxs(Ln,{children:[t.jsx(Mn,{$progress:Math.max(0,Math.min(100,i))}),t.jsxs(Fn,{children:[Math.max(0,Math.round(i)),"%"]})]})]})}const Dn=a.div`
  margin-bottom: ${({theme:e})=>e.spacing.xl};
`,Bn=a.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing.md};
`,An=a.div`
  background: rgba(0, 0, 0, 0.3);
  border: 2px solid ${({theme:e})=>e.colors.primary.gold};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  padding: ${({theme:e})=>e.spacing.sm};
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing.sm};
`;function Pn(){const{character:e}=D();return!e||!e.buffs||e.buffs.length===0?null:t.jsx(Dn,{children:t.jsx(Bn,{children:t.jsx(An,{children:e?.buffs.filter(i=>i.expiresAt<Date.now()).map(i=>t.jsxs(t.Fragment,{children:[t.jsx("span",{style:{fontSize:"1.5rem"},children:i.icon})," ",i.name,"(+",i.amount," %) - Durée restante : ",i.duration," secondes"]}))})})})}const qn=a.div`
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
`,En=a.div`
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
`;function Sn(){return t.jsxs(qn,{children:[t.jsx(Wn,{}),t.jsxs(En,{children:[t.jsxs("div",{children:[t.jsx(nn,{}),t.jsx(on,{})]}),t.jsxs(ze,{children:[t.jsx(Pn,{}),t.jsx(un,{}),t.jsx(wn,{})]})]})]})}const zn=a.div`
  min-height: calc(100vh - 92px);
  width: 100%;
  max-width: 1200px;
  // background:
  //   radial-gradient(ellipse at top, rgba(139, 0, 0, 0.3) 0%, transparent 50%),
  //   radial-gradient(ellipse at bottom, rgba(0, 0, 139, 0.3) 0%, transparent 50%),
  //   linear-gradient(180deg, rgba(10, 10, 20, 0.95) 0%, rgba(20, 10, 30, 0.98) 100%);
  padding: ${({theme:e})=>e.spacing.xl};
  margin: 0 auto;
`,Cn=a.div`
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
`,In=a.h1`
  color: ${({theme:e})=>e.colors.primary.gold};
  font-size: ${({theme:e})=>e.fontSizes["3xl"]};
  margin-bottom: ${({theme:e})=>e.spacing.lg};
  text-shadow: ${({theme:e})=>e.shadows.glow.gold};
`,Qn=a.p`
  color: ${({theme:e})=>e.colors.text.secondary};
  font-size: ${({theme:e})=>e.fontSizes.lg};
  margin-bottom: ${({theme:e})=>e.spacing.xl};
  line-height: 1.6;
`;function Tn(){const{character:e,updateCharacter:i}=D(),[s,r]=u.useState(!1),[n,o]=u.useState(e?e.level>35?35:e.level:1);if(u.useEffect(()=>{n>35&&o(35)},[e,n]),!e)return null;const l=(d,c)=>{if(c){const x=[...d.bagItems||[],{itemId:c.id,item:c}];i({...d,bagItems:x})}else i(d);r(!1),setTimeout(()=>{r(!0)},100)};return s?t.jsx(Hr,{character:e,monsterLevel:n,onBattleEnd:l,onExit:()=>r(!1)}):t.jsx(zn,{children:t.jsxs(Cn,{children:[t.jsx(In,{children:"🗺️ Exploration"}),t.jsxs(Qn,{children:["Partez à l'aventure dans les terres sauvages et affrontez des monstres !",t.jsx("br",{}),"Gagnez de l'expérience, de l'or et trouvez des équipements légendaires."]}),t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:16,marginBottom:32,justifyContent:"center"},children:[t.jsx("label",{htmlFor:"monster-level",style:{fontWeight:"bold",color:"#ffd700"},children:"Niveau du monstre :"}),t.jsx("input",{id:"monster-level",type:"number",min:n-3,max:35,defaultValue:n,onChange:d=>o(Number(d.target.value)>35?35:Number(d.target.value)<e.level-3?e.level-3:Number(d.target.value)),style:{width:80,fontSize:18,padding:4,borderRadius:8,border:"2px solid #ffd700",background:"#222",color:"#ffd700",textAlign:"center"}})]}),t.jsx(F,{onClick:()=>r(!0),$size:"large",children:"⚔️ Chercher un Combat"})]})})}const Rn=a.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: ${({theme:e})=>e.spacing.xl};
`;function _n(){const{character:e,updateCharacter:i}=D(),s=n=>{i(n)},r=()=>{};return e?t.jsx(Rn,{children:t.jsx(Jr,{character:e,onPurchase:s,onClose:r})}):null}const Hn=a.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: ${({theme:e})=>e.spacing.xl};
`,Nn=a.div`
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
`,Zn=a.h1`
  color: ${({theme:e})=>e.colors.primary.gold};
  font-size: ${({theme:e})=>e.fontSizes["3xl"]};
  margin-bottom: ${({theme:e})=>e.spacing.md};
  text-shadow: ${({theme:e})=>e.shadows.glow.gold};
  text-align: center;
`,Gn=a.p`
  color: ${({theme:e})=>e.colors.text.secondary};
  font-size: ${({theme:e})=>e.fontSizes.base};
  margin-bottom: ${({theme:e})=>e.spacing.xl};
  text-align: center;
  line-height: 1.6;
`,On=a.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing.md};
  margin-bottom: ${({theme:e})=>e.spacing.xl};
  flex-wrap: wrap;
  justify-content: center;
`,pt=a.button`
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
`,Un=a.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: ${({theme:e})=>e.spacing.lg};
`,Vn=a.div`
  background: rgba(0, 0, 0, 0.3);
  border: 2px solid ${({theme:e})=>e.colors.primary.gold};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  padding: ${({theme:e})=>e.spacing.lg};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({theme:e})=>e.spacing.md};
  transition: all 0.3s;

  &:hover {
    transform: translateY(-4px);
    border-color: ${({theme:e})=>e.colors.primary.gold};
    box-shadow: 0 8px 16px ${({theme:e})=>e.colors.primary.gold}33;
  }
`,Xn=a.h3`
  color: ${({theme:e})=>e.colors.primary.gold};
  font-size: ${({theme:e})=>e.fontSizes.lg};
  font-weight: ${({theme:e})=>e.fontWeights.bold};
  text-align: center;
  margin: 0;
`,Yn=a.div`
  color: ${({theme:e})=>e.colors.text.muted};
  font-size: ${({theme:e})=>e.fontSizes.sm};
  font-style: italic;
  text-transform: uppercase;
  letter-spacing: 1px;
`,Jn=a.div`
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
`,Kn=a.div`
  color: ${({theme:e})=>e.colors.text.secondary};
  font-size: ${({theme:e})=>e.fontSizes.sm};
  text-align: center;
`,ea=a.div`
  text-align: center;
  color: ${({theme:e})=>e.colors.text.secondary};
  font-size: ${({theme:e})=>e.fontSizes.sm};
  margin-bottom: ${({theme:e})=>e.spacing.md};
`,ht={beast:{icon:"🐺",label:"Bêtes"},humanoid:{icon:"👤",label:"Humanoïdes"},undead:{icon:"💀",label:"Morts-vivants"},elemental:{icon:"🔥",label:"Élémentaires"},demon:{icon:"😈",label:"Démons"},giant:{icon:"🗿",label:"Géants"},dragon:{icon:"🐉",label:"Dragons"}};function ta(){const[e,i]=u.useState("all"),s=O.filter(n=>e==="all"?!0:n.type===e),r=n=>O.filter(o=>o.type===n).length;return t.jsx(Hn,{children:t.jsxs(Nn,{children:[t.jsx(Zn,{children:"📖 Bestiaire"}),t.jsxs(Gn,{children:["Découvrez toutes les créatures qui peuplent le monde de la Fête d'Hiver.",t.jsx("br",{}),"Étudiez leurs forces et leurs faiblesses pour mieux les affronter !"]}),t.jsxs(On,{children:[t.jsxs(pt,{$active:e==="all",onClick:()=>i("all"),children:["Tous (",O.length,")"]}),Object.keys(ht).map(n=>{const o=r(n),{icon:l,label:d}=ht[n];return t.jsxs(pt,{$active:e===n,onClick:()=>i(n),children:[l," ",d," (",o,")"]},n)})]}),t.jsxs(ea,{children:[s.length," créature",s.length>1?"s":""," trouvée",s.length>1?"s":""]}),t.jsx(Un,{children:s.map((n,o)=>t.jsxs(Vn,{children:[t.jsx(Pt,{monsterName:n.name,level:Math.floor((n.minLevel+n.maxLevel)/2),size:96}),t.jsx(Xn,{children:n.name}),t.jsx(Yn,{children:n.type}),t.jsxs(Kn,{children:["Niveau ",n.minLevel," - ",n.maxLevel]}),t.jsxs(Jn,{children:[t.jsxs(ce,{children:["❤️ PV: ",t.jsx("span",{children:n.baseHealth})]}),t.jsxs(ce,{children:["⚔️ ATT: ",t.jsx("span",{children:n.baseDamage})]}),t.jsxs(ce,{children:["🛡️ ARM: ",t.jsx("span",{children:n.baseArmor})]}),t.jsxs(ce,{children:["💰 Or: ",t.jsx("span",{children:n.goldReward})]})]})]},o))})]})})}const ia=(e,i)=>e?e.map(s=>{let r=0;return r+=s.level*10,r+=s.gold/1e5,r+=s.achievements?s.achievements.length*5:0,r+=s.defeatedMonsters?s.defeatedMonsters/100:0,s.score=Math.floor(r),s}).sort((s,r)=>(r[i]||0)-(s[i]||0)):[],sa=a.div`
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  padding: ${({theme:e})=>e.spacing.xl};
`,ra=a.div`
  background: linear-gradient(135deg, rgba(30,58,95,0.9) 0%, rgba(26,31,46,0.95) 100%);
  border: ${({theme:e})=>e.borders.medium} solid ${({theme:e})=>e.colors.primary.gold};
  border-radius: ${({theme:e})=>e.borderRadius.lg};
  padding: ${({theme:e})=>e.spacing.xl};
  box-shadow: ${({theme:e})=>e.shadows.xl};
  backdrop-filter: blur(10px);
`,na=a.h1`
  color: ${({theme:e})=>e.colors.primary.gold};
  font-size: ${({theme:e})=>e.fontSizes["3xl"]};
  margin-bottom: ${({theme:e})=>e.spacing.md};
  text-shadow: ${({theme:e})=>e.shadows.glow.gold};
  text-align: center;
`,aa=a.p`
  color: ${({theme:e})=>e.colors.text.secondary};
  font-size: ${({theme:e})=>e.fontSizes.base};
  margin-bottom: ${({theme:e})=>e.spacing.xl};
  text-align: center;
  line-height: 1.6;
`,oa=a.table`
  width: 100%;
  border-collapse: collapse;
  background: #222;
  color: #fff;
  margin: 2rem auto;
  box-shadow: 0 0 16px #0008;
`,C=a.th`
  padding: 1rem;
  background: #444;
  font-size: 1.2rem;
`,I=a.td`
  padding: 0.8rem;
  text-align: center;
  border-bottom: 1px solid ${({$colorBorder:e})=>e||"#555"};
`;function la(){const{members:e}=Ni(),[i,s]=u.useState(e||[]),[r,n]=u.useState("score");return u.useEffect(()=>{s(ia(e,r)||[])},[e,r]),t.jsx(sa,{children:t.jsxs(ra,{children:[t.jsx(na,{children:"🏆 Leaderboard"}),t.jsxs(aa,{children:["Classement des meilleurs aventuriers d'Azeroth.",t.jsx("br",{}),"Affrontez les autres joueurs pour grimper dans le classement !"]}),t.jsxs(oa,{children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx(C,{children:"Rank"}),t.jsx(C,{children:"Name"}),t.jsx(C,{onClick:()=>{n("level")},children:"Level"}),t.jsx(C,{children:"Gold"}),t.jsx(C,{children:"Kill"}),t.jsx(C,{children:"HFs"}),t.jsx(C,{onClick:()=>{n("score")},children:"Score"})]})}),t.jsx("tbody",{children:i&&i.map((o,l)=>t.jsxs("tr",{style:{backgroundColor:o.faction==="horde"?"rgba(165, 42, 42, 0.2)":"rgba(30, 144, 255, 0.2)"},children:[t.jsx(I,{$colorBorder:o.faction==="horde"?"#a52a2a":"#1e90ff",children:l+1}),t.jsx(I,{$colorBorder:o.faction==="horde"?"#a52a2a":"#1e90ff",style:{color:R[o.class]?.color||"#fff"},children:o.name}),t.jsx(I,{$colorBorder:o.faction==="horde"?"#a52a2a":"#1e90ff",children:o.level}),t.jsx(I,{$colorBorder:o.faction==="horde"?"#a52a2a":"#1e90ff",children:t.jsx(ie,{amount:o.gold})}),t.jsx(I,{$colorBorder:o.faction==="horde"?"#a52a2a":"#1e90ff",children:o.defeatedMonsters}),t.jsx(I,{$colorBorder:o.faction==="horde"?"#a52a2a":"#1e90ff",children:o.achievements?.length||0}),t.jsx(I,{$colorBorder:o.faction==="horde"?"#a52a2a":"#1e90ff",children:me(o.score||0)})]},o.id))})]})]})})}const de=a.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`,xe=a.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`,ut=a.h1`
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
`,mt=a.h2`
  font-family: ${({theme:e})=>e.fonts.secondary};
  font-size: ${({theme:e})=>e.fontSizes["2xl"]};
  color: ${({theme:e})=>e.colors.winter.iceBlue};
  text-align: center;
  margin-bottom: ${({theme:e})=>e.spacing.md};
  font-weight: ${({theme:e})=>e.fontWeights.light};
  letter-spacing: 2px;
  text-transform: uppercase;
`;function ca(){const{user:e,loading:i}=Ee(),{character:s,hasCharacter:r,loading:n,createNewCharacter:o}=D(),l=async d=>{try{await o(d)}catch(c){console.error("Erreur lors de la création du personnage:",c),alert("Erreur lors de la création du personnage. Veuillez réessayer.")}};return i||n?t.jsxs(de,{children:[t.jsx(re,{showActions:!1}),t.jsxs(xe,{children:[t.jsx(ut,{children:"❄️ Fête d'Hiver"}),t.jsx(mt,{children:"Chargement..."})]})]}):e&&!r?t.jsxs(de,{children:[t.jsx(re,{showActions:!1}),t.jsx(xe,{children:t.jsx(ys,{onComplete:l})})]}):e&&s?t.jsx(de,{children:t.jsx(es,{children:t.jsxs(Hi,{children:[t.jsx(re,{showActions:!0}),t.jsx(xe,{children:t.jsxs(Qt,{children:[t.jsx(H,{path:"/",element:t.jsx(Sn,{})}),t.jsx(H,{path:"/exploration",element:t.jsx(Tn,{})}),t.jsx(H,{path:"/shop",element:t.jsx(_n,{})}),t.jsx(H,{path:"/bestiary",element:t.jsx(ta,{})}),t.jsx(H,{path:"/leaderboard",element:t.jsx(la,{})}),t.jsx(H,{path:"*",element:t.jsx(Tt,{to:"/",replace:!0})})]})})]})})}):t.jsxs(de,{children:[t.jsx(re,{showActions:!1}),t.jsxs(xe,{children:[t.jsx(ut,{children:"❄️ Fête d'Hiver"}),t.jsx(mt,{children:"Bienvenue dans l'aventure"})]})]})}function da(){return t.jsx(It,{children:t.jsx(ca,{})})}Rt.createRoot(document.getElementById("root")).render(t.jsx(u.StrictMode,{children:t.jsxs(Nt,{theme:ni,children:[t.jsx(ai,{}),t.jsx(vi,{children:t.jsx(Fi,{children:t.jsx(qi,{children:t.jsx(da,{})})})})]})}));
