import{r as f,j as t,R as $t,u as Lt,a as Mt,L as it,B as Bt,b as Ft,c as D,N as At,d as Wt}from"./vendor-react-CXL8uzek.js";import{f as Dt,h as Et,k as ne,l as o,n as St}from"./vendor-TPqvnkfd.js";import{i as Ct,g as Pt,a as Qt,b as qt,c as It,o as Tt,s as Rt,d as zt,r as C,u as _t,e as ue,f as st,h as rt,q as qe,j as Ht,k as Nt,m as lt,p as Zt,n as Gt,t as Ut}from"./vendor-firebase-CmVxILOq.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))r(n);new MutationObserver(n=>{for(const l of n)if(l.type==="childList")for(const a of l.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function s(n){const l={};return n.integrity&&(l.integrity=n.integrity),n.referrerPolicy&&(l.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?l.credentials="include":n.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(n){if(n.ep)return;n.ep=!0;const l=s(n);fetch(n.href,l)}})();const Ot={colors:{primary:{gold:"#FFD700",darkGold:"#C7A500",bronze:"#CD7F32"},winter:{iceBlue:"#A5D8FF",deepBlue:"#1E3A5F",snowWhite:"#F8F9FA",frostBlue:"#4A90E2",darkIce:"#2C5F8D"},alliance:{blue:"#0078D7",lightBlue:"#4BA3E3",darkBlue:"#003F7F"},horde:{red:"#8B0000",darkRed:"#5C0000",crimson:"#DC143C"},neutral:{black:"#0A0E1A",darkGray:"#1A1F2E",gray:"#2E3440",lightGray:"#4C566A",silver:"#D8DEE9",white:"#ECEFF4"},accent:{arcane:"#8B5CF6",frost:"#60A5FA",fire:"#EF4444",nature:"#10B981",holy:"#FDE047"},status:{success:"#10B981",warning:"#F59E0B",error:"#EF4444",info:"#3B82F6"},text:{primary:"#ECEFF4",secondary:"#D8DEE9",dark:"#0A0E1A",muted:"#4C566A"},channels:{general:"#ffdb97",wisp:"#cf21c7",group:"#60A5FA",guild:"#10B981",party:"#F59E0B",raid:"#EF4444"},quality:{poor:"#9D9D9D",common:"#FFFFFF",uncommon:"#1EFF00",rare:"#0070DD",epic:"#A335EE",legendary:"#FF8000"}},fonts:{primary:"'Cinzel', serif",secondary:"'Roboto Condensed', sans-serif",body:"'Open Sans', sans-serif",display:"'Cinzel Decorative', cursive"},fontSizes:{xs:"0.75rem",sm:"0.875rem",base:"1rem",lg:"1.125rem",xl:"1.25rem","2xl":"1.5rem","3xl":"1.875rem","4xl":"2.25rem","5xl":"3rem","6xl":"3.75rem"},fontWeights:{light:300,normal:400,medium:500,semibold:600,bold:700,black:900},spacing:{xxs:"0.125rem",xs:"0.25rem",sm:"0.5rem",md:"1rem",lg:"1.5rem",xl:"2rem","2xl":"3rem","3xl":"4rem","4xl":"6rem","5xl":"8rem"},borders:{thin:"1px",medium:"2px",thick:"4px",heavy:"6px"},borderRadius:{none:"0",sm:"0.25rem",md:"0.5rem",lg:"0.75rem",xl:"1rem",full:"9999px"},shadows:{sm:"0 1px 2px 0 rgba(0, 0, 0, 0.5)",md:"0 4px 6px -1px rgba(0, 0, 0, 0.5), 0 2px 4px -1px rgba(0, 0, 0, 0.3)",lg:"0 10px 15px -3px rgba(0, 0, 0, 0.5), 0 4px 6px -2px rgba(0, 0, 0, 0.3)",xl:"0 20px 25px -5px rgba(0, 0, 0, 0.5), 0 10px 10px -5px rgba(0, 0, 0, 0.3)",inner:"inset 0 2px 4px 0 rgba(0, 0, 0, 0.5)",glow:{blue:"0 0 20px rgba(74, 144, 226, 0.6), 0 0 40px rgba(74, 144, 226, 0.4)",gold:"0 0 20px rgba(255, 215, 0, 0.6), 0 0 40px rgba(255, 215, 0, 0.4)",arcane:"0 0 20px rgba(139, 92, 246, 0.6), 0 0 40px rgba(139, 92, 246, 0.4)",frost:"0 0 20px rgba(96, 165, 250, 0.6), 0 0 40px rgba(96, 165, 250, 0.4)"}},transitions:{fast:"150ms ease-in-out",base:"250ms ease-in-out",slow:"350ms ease-in-out"},breakpoints:{xs:"320px",sm:"640px",md:"768px",lg:"1024px",xl:"1280px","2xl":"1536px"},zIndex:{dropdown:1e3,modal:1100,popover:1200,tooltip:1300,notification:1400}},Vt=Dt`
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
    background-attachment: fixed;
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
`,Xt={apiKey:"AIzaSyAcelSLYaVnCo-VNmZ7duPrBZ2S9p1__Nc",authDomain:"xmas-corp.firebaseapp.com",databaseURL:"https://xmas-corp-default-rtdb.europe-west1.firebasedatabase.app",projectId:"xmas-corp",storageBucket:"xmas-corp.firebasestorage.app",messagingSenderId:"795906380947",appId:"1:795906380947:web:e6e874d93c70d9713fe966",measurementId:"G-EY3X1CEYSZ"},ae=Ct(Xt),Le=Pt(ae),P=Qt(ae);qt(ae);typeof window<"u"&&It(ae);const Yt=async()=>{try{return(await zt(Le)).user}catch(e){throw console.error("Erreur lors de la connexion anonyme:",e),e}},Kt=async()=>{try{await Rt(Le)}catch(e){throw console.error("Erreur lors de la déconnexion:",e),e}},Jt=e=>Tt(Le,e),S={characters:"characters",messages:"messages",shops:"shops"},nt=async(e,i)=>{try{const s=C(P,e),r=Zt(s);return await Gt(r,{...i,createdAt:ue(),updatedAt:ue()}),r.key}catch(s){throw console.error("Erreur lors de la création du document:",s),s}},Me=async e=>{try{const i=C(P,e),s=await lt(i);if(s.exists()){const r=s.val();return Object.keys(r).map(n=>({id:n,...r[n]}))}else return[]}catch(i){throw console.error("Erreur lors de la lecture des documents:",i),i}},at=async(e,i,s,r)=>{try{const n=C(P,e);let l=qe(n,Ht(i));s!==void 0&&(l=qe(l,Nt(s)));const a=await lt(l);if(a.exists()){const d=a.val();return Object.keys(d).map(c=>({id:c,...d[c]}))}else return[]}catch(n){throw console.error("Erreur lors de la requête:",n),n}},ge=e=>{const i={};return Object.keys(e).forEach(s=>{const r=e[s];if(r!==void 0)if(r!==null&&typeof r=="object"&&!Array.isArray(r)){const n=ge(r);Object.keys(n).length>0&&(i[s]=n)}else Array.isArray(r)?i[s]=r.filter(n=>n!==void 0).map(n=>n!==null&&typeof n=="object"&&!Array.isArray(n)?ge(n):n):i[s]=r}),i},G=async(e,i,s)=>{try{const r=C(P,`${e}/${i}`),n=ge(s);await _t(r,{...n,updatedAt:ue()})}catch(r){throw console.error("Erreur lors de la mise à jour du document:",r),r}},ot=async(e,i)=>{try{const s=C(P,`${e}/${i}`);await Ut(s)}catch(s){throw console.error("Erreur lors de la suppression du document:",s),s}},ei=(e,i,s)=>{const r=C(P,`${e}/${i}`),n=st(r,l=>{l.exists()?s({id:i,...l.val()}):s(null)});return()=>rt(r,"value",n)},Be=(e,i)=>{const s=C(P,e),r=st(s,n=>{if(n.exists()){const l=n.val(),a=Object.keys(l).map(d=>({id:d,...l[d]}));i(a)}else i([])});return()=>rt(s,"value",r)},ct=f.createContext({user:null,loading:!0}),ti=({children:e})=>{const[i,s]=f.useState(null),[r,n]=f.useState(!0);f.useEffect(()=>{const a=Jt(async d=>{if(d)s(d),n(!1);else try{const c=await Yt();s(c)}catch(c){console.error("Erreur lors de la connexion anonyme:",c)}finally{n(!1)}});return()=>a()},[]);const l={user:i,loading:r};return t.jsx(ct.Provider,{value:l,children:e})},Fe=()=>{const e=f.useContext(ct);if(!e)throw new Error("useAuth doit être utilisé dans un AuthProvider");return e},B={monk:{id:"monk",name:"Moine",description:"Maître des arts martiaux qui utilise l'énergie spirituelle pour soigner et combattre.",primaryStat:"agility",icon:"🥋",color:"#00FF96",baseHP:105,baseMP:100,availableFor:{alliance:["human","dwarf","night-elf","gnome","draenei","worgen"],horde:["orc","undead","tauren","troll","blood-elf","goblin"],neutral:["pandaren"]},energyName:"💨 Chi",armorType:"leather",weaponType:["staff"]},warrior:{id:"warrior",name:"Guerrier",description:"Maître du combat au corps à corps, utilise la rage pour déchaîner des attaques dévastatrices.",primaryStat:"strength",icon:"⚔️",color:"#C79C6E",baseHP:120,baseMP:0,availableFor:{alliance:["human","dwarf","night-elf","gnome","draenei","worgen"],horde:["orc","undead","tauren","troll","blood-elf","goblin"],neutral:["pandaren"]},energyName:"🔥 Rage",armorType:"plate",weaponType:["sword","axe","mace"]},paladin:{id:"paladin",name:"Paladin",description:"Guerrier sacré qui utilise la Lumière pour protéger ses alliés et punir ses ennemis.",primaryStat:"strength",icon:"🛡️",color:"#F58CBA",baseHP:110,baseMP:80,availableFor:{alliance:["human","dwarf","draenei"],horde:["blood-elf","tauren"],neutral:[]},energyName:"💙 Mana",armorType:"plate",weaponType:["sword","mace"]},hunter:{id:"hunter",name:"Chasseur",description:"Maître du tir à distance et compagnon des bêtes sauvages.",primaryStat:"agility",icon:"🏹",color:"#ABD473",baseHP:100,baseMP:100,availableFor:{alliance:["human","dwarf","night-elf","draenei","worgen","gnome"],horde:["orc","undead","tauren","troll","blood-elf","goblin"],neutral:["pandaren"]},energyName:"🎯 Focus",armorType:"mail",weaponType:["bow"]},rogue:{id:"rogue",name:"Voleur",description:"Assassin furtif spécialisé dans les attaques sournoises et les coups critiques.",primaryStat:"agility",icon:"🗡️",color:"#FFF569",baseHP:95,baseMP:90,availableFor:{alliance:["human","dwarf","night-elf","gnome","worgen"],horde:["orc","undead","troll","blood-elf","goblin"],neutral:["pandaren"]},energyName:"⚡ Énergie",armorType:"leather",weaponType:["sword"]},priest:{id:"priest",name:"Prêtre",description:"Manipule la magie sacrée et de l'ombre pour soigner ou blesser.",primaryStat:"intellect",icon:"✨",color:"#FFFFFF",baseHP:80,baseMP:120,availableFor:{alliance:["human","dwarf","night-elf","draenei","worgen"],horde:["undead","troll","blood-elf","goblin"],neutral:["pandaren"]},energyName:"💙 Mana",armorType:"cloth",weaponType:["staff"]},shaman:{id:"shaman",name:"Chaman",description:"Invoque le pouvoir des éléments et des esprits ancestraux.",primaryStat:"intellect",icon:"⚡",color:"#0070DE",baseHP:95,baseMP:110,availableFor:{alliance:["draenei"],horde:["orc","tauren","troll","goblin"],neutral:["pandaren"]},energyName:"💙 Mana",armorType:"mail",weaponType:["mace","staff"]},mage:{id:"mage",name:"Mage",description:"Maître des arcanes, du feu et du givre, capable de manipuler les forces magiques.",primaryStat:"intellect",icon:"🔮",color:"#69CCF0",baseHP:75,baseMP:130,availableFor:{alliance:["human","dwarf","night-elf","gnome","draenei","worgen"],horde:["orc","undead","troll","blood-elf","goblin"],neutral:["pandaren"]},energyName:"💙 Mana",armorType:"cloth",weaponType:["staff"]},warlock:{id:"warlock",name:"Démoniste",description:"Invoque des démons et utilise la magie de l'ombre et du feu démoniaque.",primaryStat:"intellect",icon:"👿",color:"#9482C9",baseHP:85,baseMP:120,availableFor:{alliance:["human","dwarf","gnome","worgen"],horde:["orc","undead","blood-elf","goblin"],neutral:[]},energyName:"💙 Mana",armorType:"cloth",weaponType:["staff"]},druid:{id:"druid",name:"Druide",description:"Transformiste de la nature capable de prendre plusieurs formes animales.",primaryStat:"intellect",icon:"🌿",color:"#FF7D0A",baseHP:90,baseMP:110,availableFor:{alliance:["night-elf","worgen"],horde:["tauren","troll"],neutral:[]},energyName:"💙 Mana",armorType:"leather",weaponType:["staff","mace"]},"death-knight":{id:"death-knight",name:"Chevalier de la mort",description:"Guerrier impie maniant les pouvoirs de la mort et de la glace.",primaryStat:"strength",icon:"💀",color:"#C41F3B",baseHP:115,baseMP:100,availableFor:{alliance:["human","dwarf","night-elf","gnome","draenei","worgen"],horde:["orc","undead","tauren","troll","blood-elf","goblin"],neutral:["pandaren"]},energyName:"🌀 Runes",armorType:"plate",weaponType:["sword","axe","mace"]}},dt={human:{id:"human",name:"Humain",description:"Peuple courageux et déterminé de Hurlevent.",faction:"alliance",icon:"👨",bonuses:{strength:2,agility:1,intellect:2,stamina:2}},dwarf:{id:"dwarf",name:"Nain",description:"Race ancienne et robuste de Forgefer.",faction:"alliance",icon:"🧔",bonuses:{strength:3,stamina:4,agility:1}},"night-elf":{id:"night-elf",name:"Elfe de la nuit",description:"Ancien peuple mystique de Kalimdor.",faction:"alliance",icon:"🧝",bonuses:{agility:4,intellect:1,stamina:1}},gnome:{id:"gnome",name:"Gnome",description:"Inventeurs ingénieux de Gnomeregan.",faction:"alliance",icon:"🧙",bonuses:{intellect:4,agility:2}},draenei:{id:"draenei",name:"Draeneï",description:"Réfugiés nobles guidés par la Lumière.",faction:"alliance",icon:"👽",bonuses:{strength:2,intellect:2,stamina:2}},worgen:{id:"worgen",name:"Worgen",description:"Humains maudits transformés en loups-garous.",faction:"alliance",icon:"🐺",bonuses:{strength:2,agility:3,stamina:2}},orc:{id:"orc",name:"Orc",description:"Guerriers féroces d'Orgrimmar.",faction:"horde",icon:"👹",bonuses:{strength:4,stamina:3}},undead:{id:"undead",name:"Mort-vivant",description:"Les Réprouvés, libérés du Fléau.",faction:"horde",icon:"🧟",bonuses:{intellect:2,agility:2,stamina:2}},tauren:{id:"tauren",name:"Tauren",description:"Géants paisibles des plaines de Mulgore.",faction:"horde",icon:"🐮",bonuses:{strength:3,stamina:5}},troll:{id:"troll",name:"Troll",description:"Chasseurs rusés des Îles de l'Écho.",faction:"horde",icon:"🗿",bonuses:{agility:3,intellect:1,stamina:2}},"blood-elf":{id:"blood-elf",name:"Elfe de sang",description:"Anciens Haut-Elfes assoiffés de magie.",faction:"horde",icon:"🧝‍♀️",bonuses:{intellect:4,agility:2}},goblin:{id:"goblin",name:"Gobelin",description:"Marchands malins et ingénieux.",faction:"horde",icon:"👺",bonuses:{intellect:3,agility:3}},pandaren:{id:"pandaren",name:"Pandaren",description:"Âmes sages en quête d'équilibre.",faction:"neutral",icon:"🐼",bonuses:{strength:2,agility:2,intellect:2,stamina:2}}},ii=e=>Object.values(dt).filter(i=>i.faction===e),si=(e,i)=>Object.values(B).filter(s=>s.availableFor[i].includes(e));function ri(e){const i={strength:0,agility:0,intellect:0,stamina:0,armor:0,attackPower:0,spellPower:0,critChance:0};return e.equipment&&Object.keys(e.equipment).forEach(s=>{const r=e.equipment?.[s];r&&r.stats&&(i.strength+=r.stats.strength||0,i.agility+=r.stats.agility||0,i.intellect+=r.stats.intellect||0,i.stamina+=r.stats.stamina||0,i.armor+=r.stats.armor||0,i.attackPower+=r.stats.attackPower||0,i.spellPower+=r.stats.spellPower||0,i.critChance+=r.stats.critChance||0)}),i}function me(e){const i=ht(e.class,e.race),s=ri(e),r=e.level,n=i.health,l=i.energy,a=i.strength,d=i.agility,c=i.intellect,u=i.stamina,x=Math.floor(i.primaryStat==="strength"?a+s.strength/5:i.primaryStat==="agility"?d+s.agility/5:c+s.intellect/5),p=Math.floor(i.primaryStat==="intellect"?c+s.intellect/5:0);console.log("baseIntellect",c),console.log("baseStatsFromStuffs.intellect",s.intellect),console.log("baseSpellPower",p);const h=i.armor,m=i.critChance,g={maxHealth:(n+u+s.stamina)*r,maxMana:(l+c+s.intellect)*r,strength:a*r+s.strength,agility:d*r+s.agility,intellect:c*r+s.intellect,stamina:u*r+s.stamina,attackPower:(x+s.attackPower)*r,spellPower:(p+s.spellPower)*r,armor:Number(h)+s.armor,critChance:(Number(m)+s.critChance)*.1,experienceToNextLevel:Ae(r+1)};return e.buffs&&e.buffs.forEach(y=>{switch(y.effect){case"strength":g.strength+=Math.floor(g.strength*y.amount/100);break;case"agility":g.agility+=Math.floor(g.agility*y.amount/100);break;case"intellect":g.intellect+=Math.floor(g.intellect*y.amount/100);break;case"stamina":g.stamina+=Math.floor(g.stamina*y.amount/100),g.maxHealth+=Math.floor((n+s.stamina)*Math.floor(e.level*y.amount/100));break}}),g}function Ae(e){return Math.floor(100*Math.pow(e,1.12))}function ye(e){return e>=1e9?(e/1e9).toFixed(1).replace(/\.0$/,"")+"B":e>=1e6?(e/1e6).toFixed(1).replace(/\.0$/,"")+"M":e>=1e3?(e/1e3).toFixed(1).replace(/\.0$/,"")+"K":e.toString()}function xt(e){if(!e.buffs)return[];const i=Date.now();return e.buffs.filter(s=>s.expiresAt>i)}const ht=(e,i)=>{const s=B[e],r=dt[i],n=10,l=10,a=10,d=10,c=10,u=n+(r.bonuses.strength||0),x=l+(r.bonuses.agility||0),p=a+(r.bonuses.intellect||0),h=d+(r.bonuses.stamina||0),m=c+Math.floor((x+h+u+p)/4),g=s.energyName,y=s.baseHP*10,M=s.baseMP;let V=0;switch(s.primaryStat){case"strength":V+=5*u;break;case"agility":V+=7*x;break;case"intellect":V+=5*p;break}return{health:y,energy:M,strength:u,agility:x,intellect:p,stamina:h,armor:m,energyName:g,critChance:V,primaryStat:s.primaryStat}},li=async e=>at("characters","userId",e),ni=async e=>nt("characters",e),pt=f.createContext({character:{},loading:!0,hasCharacter:!1,createNewCharacter:async()=>{},updateCharacter:async()=>{},refreshCharacter:async()=>{}}),ai=({children:e})=>{const{user:i}=Fe(),[s,r]=f.useState(null),[n,l]=f.useState(!0),a=f.useCallback(async p=>{try{l(!0);const h=await li(p.uid);h.length>0?r(h[0]):r({})}catch(h){console.error("Erreur lors du chargement du personnage:",h),r({})}finally{l(!1)}},[]),d=f.useCallback(async p=>{if(!i)throw new Error("Utilisateur non connecté");try{l(!0);const h={userId:i.uid,name:p.name,faction:p.faction,race:p.race,class:p.class,level:1,experience:0,experienceToNextLevel:Math.floor(100*Math.pow(1.5,0)),health:0,maxHealth:0,mana:0,maxMana:0,strength:0,agility:0,intellect:0,stamina:0,attackPower:5,spellPower:5,armor:5,critChance:5,achievements:[],gold:0,defeatedMonsters:0,totalDamageDealt:0,inventory:{potions:[]},equipment:{},bagItems:[],chatChannel:[]},m=me(h);await ni({...h,...m,mana:m.maxMana,health:m.maxHealth}),await a(i)}catch(h){throw console.error("Erreur lors de la création du personnage:",h),h}finally{l(!1)}},[i,a]),c=f.useCallback(async p=>{if(!s?.id)throw new Error("Aucun personnage à mettre à jour");try{const h=me(p),m=xt(p);p.buffs=m,await G(S.characters,p.id??s.id,{...p,...h})}catch(h){throw console.error("Erreur lors de la mise à jour du personnage:",h),h}},[s]),u=f.useCallback(async()=>{i&&await a(i)},[i,a]);f.useEffect(()=>{i?a(i):(r({}),l(!1))},[i,a]),f.useEffect(()=>{if(!s?.id)return;const p=ei(S.characters,s.id,h=>{h&&r(h)});return()=>p()},[s?.id]);const x={character:s,loading:n,hasCharacter:s!==null&&s.id!==void 0,createNewCharacter:d,updateCharacter:c,refreshCharacter:u};return t.jsx(pt.Provider,{value:x,children:e})},j=()=>{const e=f.useContext(pt);if(!e)throw new Error("useCharacter must be used within a CharacterProvider");return e},oi=async e=>(await at("messages","channel",e)).sort((s,r)=>r.timestamp-s.timestamp).slice(0,100).reverse(),ci=async(e,i,s)=>nt("messages",{who:e,message:i,channel:s,timestamp:Date.now()});function di(e){return e.toString().normalize("NFD").replace(new RegExp("\\p{Diacritic}","gu"),"").toLowerCase().trim().replace(/\s+/g,"-").replace(/[^a-z0-9-]/g,"").replace(/--+/g,"-")}const xi=async()=>{const e=await Me("characters"),i=Et(e.map(r=>(r.status=typeof r.updatedAt=="number"&&r.updatedAt+60*1e3*15>Date.now()?"online":"offline",r)),r=>r.status||"offline");return i.online=ne(i.online||[],["name"],["asc"]),i.offline=ne(i.offline||[],["name"],["asc"]),[...i.online,...i.offline].filter((r,n,l)=>n===l.findIndex(a=>a.userId===r.userId))},hi=(e,i)=>{const s=[e.name.toLowerCase(),i.name.toLowerCase()].sort();return di(`mp_${s.join("_")}`)},pi=async(e,i)=>{const s=hi(e,i);e.chatChannel||(e.chatChannel=[]),i.chatChannel||(i.chatChannel=[]),e.chatChannel.find(r=>r.slug===s)||(e.chatChannel.push({slug:s,name:i.name}),await G("characters",e.id,{chatChannel:e.chatChannel})),i.chatChannel.find(r=>r.slug===s)||(i.chatChannel.push({slug:s,name:e.name}),await G("characters",i.id,{chatChannel:i.chatChannel}))},fi=async(e,i)=>{const s=e.chatChannel.filter(r=>r.slug!==i);await G("characters",e.id,{chatChannel:s})},ui=f.createContext(void 0),gi=o.div`
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
`,mi=o.div`
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
`,yi=o.div`
    display: flex;
    flex-direction: row;
    background-color: rgba(0, 0, 0, 0.4);
    gap: ${({theme:e})=>e.spacing.md};
    padding: ${({theme:e})=>e.spacing.xs} ${({theme:e})=>e.spacing.sm};
    height: 30px;
    `,ji=o.div`
    color: ${({theme:e,selected:i,$type:s})=>{switch(i){case!0:return e.colors.primary.gold;default:return s!=="general"?e.colors.channels.wisp:e.colors.text.secondary}}};
    font-size: ${({theme:e})=>e.fontSizes.base};
    font-weight: ${({theme:e})=>e.fontWeights.bold};
    cursor: pointer;
    display: flex;
    align-items: center;
    `,ki=o.div`
    flex: 1;
    // background: red;
    padding: 0;
    overflow-y: auto;
    height: calc(100% - 60px);
    `,wi=o.div`
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
    `,bi=o.span`
    font-weight: ${({theme:e})=>e.fontWeights.semibold};
    `,vi=o.input`
    padding: ${({theme:e})=>e.spacing.sm};
    border: none;
    border-radius: ${({theme:e})=>e.borderRadius.sm};
    background-color: rgba(0, 0, 0, 0.4);
    color: ${({theme:e})=>e.colors.neutral.white};
    font-size: ${({theme:e})=>e.fontSizes.base};
    margin: 0;
    width: 100%;
    height: 30px;
`;function $i({children:e}){const[i,s]=f.useState(!1),[r,n]=f.useState("general"),{character:l}=j(),[a,d]=f.useState([]),c=[{slug:"general",name:"Général"},...l?.chatChannel||[]],u=f.useCallback(async()=>{const g=await oi(r);d(g.map(y=>({who:y.who,message:y.message,timestamp:y.timestamp??Date.now()})))},[r]),x=()=>{s(!0)},p=()=>{s(!1)},h=g=>{g.value&&l&&(ci(l.name,g.value,r),g.value="")};f.useEffect(()=>{u()},[u]),f.useEffect(()=>{Be("messages",async()=>{await u()})},[u]);const m=$t.useRef(null);return f.useEffect(()=>{m.current&&(m.current.scrollTop=m.current.scrollHeight)},[a]),t.jsxs(ui.Provider,{value:{showChat:x,hideChat:p},children:[t.jsxs(gi,{$visible:i,children:[t.jsx(mi,{$visible:i,onClick:()=>s(!i),children:i?"❌":"💬"}),i&&t.jsxs(t.Fragment,{children:[t.jsx(yi,{children:c.map(g=>t.jsxs(ji,{selected:r===g.slug,onClick:()=>n(g.slug),$type:g.slug,children:[g.name,g.slug!=="general"&&t.jsx("span",{style:{marginLeft:"4px",cursor:"pointer",fontSize:"12px"},onClick:y=>{if(y.stopPropagation(),!l)return;const M=g.slug;fi(l,M),r===M&&n("general")},children:"❌"})]},g.slug))}),t.jsx(ki,{ref:m,children:a.map((g,y)=>t.jsxs(wi,{$type:r,children:[t.jsxs(bi,{children:["[",g.who,"]:"]})," ",g.message]},y))}),t.jsx(vi,{onKeyDown:g=>{g.key==="Enter"&&h(g.currentTarget)}})]})]}),e]})}const ft=f.createContext(void 0),Li=o.div`
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
`,Mi=o.div`
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
`,Bi=o.div`
  color: ${({theme:e})=>e.colors.primary.gold};
  font-size: ${({theme:e})=>e.fontSizes.lg};
  text-shadow: ${({theme:e})=>e.shadows.glow.gold};
  text-align: center;
`,Fi=o.div`
  height: 90%;
  overflow-y: auto;
`,Ai=o.div`
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
`,Wi=o.div`
  font-weight: ${({theme:e})=>e.fontWeights.bold};
  color: ${({theme:e,$color:i})=>i||e.colors.primary.gold};
`,Di=o.div`
  font-size: ${({theme:e})=>e.fontSizes.sm};
  color: ${({theme:e})=>e.colors.winter.iceBlue};
`,Ei=o.div`
  font-size: ${({theme:e})=>e.fontSizes.sm};
  color: ${({theme:e})=>e.colors.winter.iceBlue};
`,Si=o.div`
  margin-left: auto;
  display: flex;
  gap: ${({theme:e})=>e.spacing.sm};
`,he=o.button`
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
`;function Ci({children:e}){const[i,s]=f.useState(null),[r,n]=f.useState(!1),{character:l}=j();function a(){n(!0)}function d(){n(!1)}const c=f.useCallback(async()=>{const x=await xi();s(x)},[]);f.useEffect(()=>{Be("characters",c),c()},[l,c]);const u={members:i,showMembers:a,hideMembers:d};return t.jsxs(ft.Provider,{value:u,children:[t.jsxs(Li,{$visible:r,children:[t.jsx(Mi,{$visible:r,onClick:()=>{n(!r)},children:r?"❌":"👥"}),t.jsx(Bi,{children:"Members"}),t.jsx(Fi,{children:i&&i.map(x=>t.jsxs(Ai,{children:[t.jsx(Di,{children:typeof x.updatedAt=="number"&&x.updatedAt+60*1e3*15>Date.now()?"🟢":"⚪"}),t.jsx(Ei,{children:x.level}),t.jsx(Wi,{$color:B[x.class].color,children:x.name}),l&&l.id!==x.id&&t.jsxs(Si,{children:[l.isAdmin&&t.jsx(he,{onClick:()=>{x.id&&ot("characters",x.id)},children:"🗑️"}),t.jsx(he,{onClick:()=>{console.log("SEND LOVE")},children:"❤️"}),t.jsx(he,{onClick:()=>{pi(l,x)},children:"💬"})]})]},x.id))})]}),e]})}const Pi=()=>{const e=f.useContext(ft);if(!e)throw new Error("useMembers must be used within a MembersProvider");return e},ut=f.createContext(void 0),Qi=o.div`
  position: fixed;
  left: ${({$x:e})=>e}px;
  top: ${({$y:e})=>e}px;
  z-index: 10000;
  opacity: ${({$visible:e})=>e?1:0};
  transition: opacity 0.2s ease;
  transform: translate(-50%, -100%) translateY(-10px);
`,qi=o.div`
  background: linear-gradient(
    135deg,
    rgba(20, 20, 30, 0.98) 0%,
    rgba(30, 30, 45, 0.98) 100%
  );
  border: 2px solid ${({$quality:e,theme:i})=>{switch(e){case"poor":return"#9d9d9d";case"common":return"#ffffff";case"uncommon":return"#1eff00";case"rare":return"#0070dd";case"epic":return"#a335ee";case"legendary":return"#ff8000";default:return i.colors.primary.gold}}};
  border-radius: ${({theme:e})=>e.borderRadius.md};
//   padding: ${({theme:e})=>e.spacing.sm};
  min-width: 200px;
  max-width: 350px;
  box-shadow: ${({theme:e})=>e.shadows.xl};
  backdrop-filter: blur(10px);
`,Ii=o.div`
  font-size: ${({theme:e})=>e.fontSizes.base};
  font-weight: ${({theme:e})=>e.fontWeights.bold};
  color: ${({$quality:e})=>{switch(e){case"poor":return"#9d9d9d";case"common":return"#ffffff";case"uncommon":return"#1eff00";case"rare":return"#0070dd";case"epic":return"#a335ee";case"legendary":return"#ff8000";default:return"#ffd700"}}};
  margin-bottom: ${({theme:e})=>e.spacing.xs};
  text-shadow: 0 0 10px rgba(0, 0, 0, 0.8);
  padding: ${({theme:e})=>e.spacing.xs} ${({theme:e})=>e.spacing.sm};
`,Ti=o.div`
  font-size: ${({theme:e})=>e.fontSizes.sm};
  color: ${({theme:e})=>e.colors.text.secondary};
  margin-bottom: ${({theme:e})=>e.spacing.sm};
  font-style: italic;
  padding: ${({theme:e})=>e.spacing.xs} ${({theme:e})=>e.spacing.sm};
`,Ri=o.div`
  display: flex;
  flex-direction: column;
  gap: 0;
  border-top: 1px solid rgba(255, 215, 0, 0.3);
  padding: ${({theme:e})=>e.spacing.xs} ${({theme:e})=>e.spacing.sm};
`,Ie=o.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`,Te=o.div`
//   display: flex;
  color: #1eff00;
  font-size: ${({theme:e})=>e.fontSizes.sm};
  width: calc(100% - 100px);
  text-transform: capitalize;
`,Re=o.div`
//   display: flex;
  color: ${({theme:e})=>e.colors.primary.gold};
  font-size: ${({theme:e})=>e.fontSizes.sm};
  width: 50px;
  text-align: right;
`,ze=o.div`
  color: ${({$colorText:e})=>e};
  font-size: ${({theme:e})=>e.fontSizes.sm};
  text-align: right;
  width: 50px;
  &:before { 
    content: '${({$colorText:e})=>e==="green"?"+":""}'; 
  } 
`;function zi({children:e}){const[i,s]=f.useState(null),[r,n]=f.useState({x:0,y:0}),[l,a]=f.useState(!1),[d,c]=f.useState(!1),u=(m,g)=>{s(m),n(g),a(!0)},x=()=>{a(!1),setTimeout(()=>{d||s(null)},200)},p=()=>{c(!0),a(!0)},h=()=>{c(!1),a(!1),setTimeout(()=>{d||s(null)},200)};return t.jsxs(ut.Provider,{value:{showTooltip:u,hideTooltip:x},children:[e,i&&t.jsx(Qi,{$x:r.x,$y:r.y,$visible:l,onMouseMove:p,onMouseLeave:h,children:t.jsxs(qi,{$quality:i.quality,onClick:x,children:[t.jsx(Ii,{$quality:i.quality,children:i.title}),i.description&&t.jsxs(Ti,{children:['"',i.description,'"']}),i.stats&&Object.keys(i.stats).length>0&&t.jsxs(Ri,{children:[Object.entries(i.stats).sort().reverse().map(([m,g])=>t.jsxs(Ie,{children:[t.jsx(Te,{children:m}),t.jsx(Re,{children:g}),i.equiped&&t.jsx(t.Fragment,{children:t.jsx(ze,{$colorText:Number(g)>Number(i.equiped.stats[m])?"green":"red",children:`${Number(g)-Number(i.equiped.stats[m])}`})})]},m)),i.level&&i.level>0?t.jsxs(Ie,{children:[t.jsx(Te,{children:"level"}),t.jsx(Re,{children:i.level}),i.equiped&&t.jsx(ze,{$colorText:Number(i.level)>Number(i.equiped.level)?"green":"red",children:`${i.equiped.level}`})]}):""]})]})})]})}function We(){const e=f.useContext(ut);if(!e)throw new Error("useTooltip must be used within a TooltipProvider");return e}function _i(){if(typeof crypto<"u"&&crypto.randomUUID)return crypto.randomUUID();const e=[...crypto.getRandomValues(new Uint8Array(16))].map(i=>i.toString(16).padStart(2,"0"));return e[6]=(parseInt(e[6],16)&15|64).toString(16),e[8]=(parseInt(e[8],16)&63|128).toString(16),`${e.slice(0,4).join("")}${e.slice(4,6).join("")}-${e.slice(6,8).join("")}-${e.slice(8,10).join("")}-${e.slice(10,12).join("")}-${e.slice(12,16).join("")}`}const Hi={poor:.5,common:1,uncommon:1.5,rare:2.5,epic:4,legendary:6},Ni={plate:"en Plaque",mail:"en Mailles",leather:"en Cuir",cloth:"en Tissu"},Zi={weapon:"⚔️",head:"👑",chest:"🛡️",legs:"👖",boots:"👢",jewelry:"💍"},Gi={poor:.5,common:1,uncommon:2,rare:5,epic:12,legendary:30},X={sword:{poor:["Épée rouillée","Lame ébréchée"],common:["Épée courte","Lame simple"],uncommon:["Lame tranchante","Épée solide"],rare:["Épée de chevalier","Lame runique"],epic:["Lame de dragon","Épée mystique"],legendary:["Excalibur","Lame éternelle"]},axe:{poor:["Hache usée","Hache ébréchée"],common:["Hache de guerre","Hache solide"],uncommon:["Hache tranchante","Hache de bataille"],rare:["Hache runique","Hache de champion"],epic:["Hache de dragon","Hache mystique"],legendary:["Hache des rois","Hache éternelle"]},mace:{poor:["Marteau usé","Marteau ébréché"],common:["Marteau de guerre","Marteau solide"],uncommon:["Marteau lourd","Marteau de bataille"],rare:["Marteau runique","Marteau de champion"],epic:["Marteau de dragon","Marteau mystique"],legendary:["Marteau des rois","Marteau éternel"]},bow:{poor:["Arc cassé","Arc usé"],common:["Arc court","Arc solide"],uncommon:["Arc long","Arc précis"],rare:["Arc elfique","Arc de maître"],epic:["Arc de dragon","Arc mystique"],legendary:["Arc des rois","Arc éternel"]},staff:{poor:["Bâton cassé","Bâton usé"],common:["Bâton de novice","Bâton solide"],uncommon:["Bâton d'apprenti","Bâton enchanté"],rare:["Bâton mystique","Bâton de sorcier"],epic:["Bâton de dragon","Bâton céleste"],legendary:["Bâton des rois","Bâton éternel"]}},Ui={weapon:{poor:["Épée rouillée","Bâton cassé","Dague ébréchée"],common:["Épée courte","Hache de bucheron","Bâton de novice"],uncommon:["Lame tranchante","Marteau lourd","Arc solide"],rare:["Épée de chevalier","Hache runique","Bâton mystique"],epic:["Lame de dragon","Marteau de foudre","Arc de phoenix"],legendary:["Excalibur","Mjolnir","Frostmourne"]},head:{poor:["Bonnet","Chapeau"],common:["Casque","Capuche"],uncommon:["Heaume","Coiffe"],rare:["Couronne","Casque renforcé"],epic:["Heaume de dragon","Couronne céleste"],legendary:["Couronne des rois","Masque éternel"]},chest:{poor:["Tunique","Gilet"],common:["Plastron","Robe"],uncommon:["Cuirasse","Armure"],rare:["Armure renforcée","Robe enchantée"],epic:["Cuirasse céleste","Armure de dragon"],legendary:["Armure des rois","Cuirasse éternel"]},legs:{poor:["Pantalon","Braies"],common:["Jambières","Pantalon renforcé"],uncommon:["Grèves","Cuissardes"],rare:["Jambières renforcée","Grèves renforcée"],epic:["Cuissardes de dragon","Jambières céleste"],legendary:["Grèves des rois","Cuissardes éternel"]},boots:{poor:["Sandales","Bottes"],common:["Solerets","Souliers"],uncommon:["Bottes renforcées","Sandales solides"],rare:["Souliers enchantées","Solerets de bataille"],epic:["Bottes de dragon","Solerets céleste"],legendary:["Bottes des rois","Solerets éternels"]},jewelry:{poor:["Ficelle nouée","Caillou poli"],common:["Anneau de bronze","Collier simple"],uncommon:["Anneau d'argent","Collier enchassé"],rare:["Anneau d'or","Amulette magique"],epic:["Anneau de dragon","Talisman céleste"],legendary:["Anneau des rois","Amulette éternels"]}},Oi=(e,i)=>Math.floor(e*Gi[i]*100),Vi=(e,i,s)=>{const r=Ui[e][i];let n="";if(e==="weapon"&&s&&s.weaponType){const l=s.weaponType.filter(d=>X[d]&&X[d][i]),a=l[Math.floor(Math.random()*l.length)];n=X[a][i][Math.floor(Math.random()*X[a][i].length)]}else e==="jewelry"?n=`${r[Math.floor(Math.random()*r.length)]}`:n=`${r[Math.floor(Math.random()*r.length)]} ${Ni[s?s.armorType:"cloth"]}`;return n},Xi=(e,i)=>e<10?i>=0&&i<.3?"poor":i>=.3&&i<.6?"common":i>=.6&&i<.85?"uncommon":i>=.85&&i<.99?"rare":"legendary":e<20?i>=0&&i<.15?"poor":i>=.15&&i<.4?"common":i>=.4&&i<.75?"uncommon":i>=.75&&i<.95?"rare":i>=.95&&i<.98?"epic":"legendary":e<30?i>=0&&i<.1?"poor":i>=.1&&i<.3?"common":i>=.3&&i<.65?"uncommon":i>=.65&&i<.9?"rare":i>=.9&&i<.97?"epic":"legendary":e<40?i>=0&&i<.07?"poor":i>=0&&i<.25?"common":i>=0&&i<.6?"uncommon":i>=0&&i<.7?"rare":i>=0&&i<.96?"epic":"legendary":e<50?i>=0&&i<.05?"poor":i>=.05&&i<.2?"common":i>=.2&&i<.5?"uncommon":i>=.5&&i<.65?"rare":i>=.65&&i<.85?"epic":(i>=.85&&i<.95,"legendary"):i>=0&&i<.01?"poor":i>=.01&&i<.1?"common":i>=.1&&i<.4?"uncommon":i>=.4&&i<.6?"rare":i>=.6&&i<.9?"epic":"legendary",Yi=()=>{const e=["weapon","head","chest","legs","boots","jewelry"];return e[Math.floor(Math.random()*e.length)]},Ki=(e,i,s,r,n)=>{const l={},a=Math.floor(s*.8*Hi[r]);if(e==="weapon")i?(l[i.primaryStat]=a,i.primaryStat==="intellect"?l.spellPower=a*2:l.attackPower=a*2):(l.strength=a,l.attackPower=a*2),Math.random()<.25&&(l.critChance=Math.floor(a*(.1+Math.random()*.2)));else if(e==="jewelry"){i?l[i.primaryStat]=a:l.strength=a;const d=["attackPower","spellPower","critChance","armor"],c=d[Math.floor(Math.random()*d.length)];c==="attackPower"&&i&&i.primaryStat!=="intellect"?l.attackPower=Math.floor(a*1.5):c==="spellPower"&&i&&i.primaryStat==="intellect"?l.spellPower=Math.floor(a*1.5):c==="critChance"?l.critChance=Math.floor(a*(.1+Math.random()*.2)):c==="armor"&&(l.armor=Math.floor(a*1.2))}else{l.armor=a*2,i?l[i.primaryStat]=Math.floor(a*.7):l.stamina=Math.floor(a*.7);let d=.15;n>1&&(d+=(n-1)*.2),Math.random()>d&&(l.critChance=Math.floor(a*(.08+Math.random()*.15)))}return l},Ji=(e,i)=>{const s=B[i.class]||B.warrior,r=i.buffs?.reduce((l,a)=>a.effect==="luck"?l+a.amount/100:l,0)||0;let n=Math.random();return n+=r>=1?(r-1)*.08:0,Math.random()>.3+r?null:es(e,n,s,r)},es=(e,i,s,r)=>{const n=Xi(e,i),l=Yi(),a=Ki(l,s,e,n,r),d=Vi(l,n,s),c=Oi(e,n);return{id:`${l}-${n}-${Date.now()}-${_i()}`,name:d,slot:l,quality:n,level:e,stats:a,icon:Zi[l],price:c}},ts=async(e,i)=>{const s=await Me(S.shops);return ne(s,e,i)},is=async(e,i,s)=>{const n=(await Me(S.shops)).find(d=>d.id===e);if(!n)return;await ot(S.shops,n.id);const l=i.bagItems||[],a=i.gold-n.price*s;n&&l.push({itemId:n.id,item:n}),await G(S.characters,i.id,{bagItems:l,gold:a})},gt=f.createContext(void 0);function ss({children:e}){const[i,s]=f.useState([]),r=f.useCallback(async()=>{s(await ts(["level"],["asc"]))},[]);return f.useEffect(()=>{Be(S.shops,async()=>{r()})},[r]),t.jsx(gt.Provider,{value:{shop:i,setShop:s},children:e})}const rs=()=>{const e=f.useContext(gt);if(!e)throw new Error("useShop must be used within a ShopProvider");return e},R=[{id:"wolf",name:"Loup",type:"beast",icon:"🐺",minLevel:1,maxLevel:5,baseHealth:15,baseDamage:100,baseArmor:5,experienceReward:25,goldReward:100,abilities:[{name:"Morsure",icon:"🦷",damage:150,cooldown:2,description:"Mord férocement la cible"}]},{id:"boar",name:"Sanglier",type:"beast",icon:"🐗",minLevel:1,maxLevel:5,baseHealth:20,baseDamage:120,baseArmor:8,experienceReward:30,goldReward:120,abilities:[{name:"Charge",icon:"💨",damage:120,cooldown:3,description:"Charge brutalement"}]},{id:"fox",name:"Renard Agile",type:"beast",icon:"🦊",minLevel:1,maxLevel:5,baseHealth:12,baseDamage:80,baseArmor:4,experienceReward:20,goldReward:80,abilities:[{name:"Fuite Rapide",icon:"🏃",damage:60,cooldown:2,description:"Esquive et contre-attaque"}]},{id:"owl",name:"Hibou Sombre",type:"beast",icon:"🦉",minLevel:2,maxLevel:5,baseHealth:10,baseDamage:70,baseArmor:3,experienceReward:18,goldReward:70,abilities:[{name:"Serres Tranchantes",icon:"🪶",damage:50,cooldown:2,description:"Attaque silencieuse de nuit"}]},{id:"murloc",name:"Murloc",type:"humanoid",icon:"🐸",minLevel:5,maxLevel:10,baseHealth:30,baseDamage:600,baseArmor:10,experienceReward:200,goldReward:600,abilities:[{name:"Cri Murloc",icon:"📢",damage:780,cooldown:4,description:"MRGLGLGL!"}]},{id:"bandit",name:"Bandit de la Forêt",type:"humanoid",icon:"🗡️",minLevel:6,maxLevel:12,baseHealth:45,baseDamage:720,baseArmor:12,experienceReward:250,goldReward:720,abilities:[{name:"Coup Sournois",icon:"🔪",damage:800,cooldown:3,description:"Frappe dans le dos"}]},{id:"thief",name:"Voleur de la Forêt",type:"humanoid",icon:"🕴️",minLevel:5,maxLevel:15,baseHealth:35,baseDamage:500,baseArmor:8,experienceReward:120,goldReward:500,abilities:[{name:"Vol Rapide",icon:"🪙",damage:400,cooldown:3,description:"Dérobe et frappe rapidement"}]},{id:"giant-rat",name:"Rat Géant",type:"beast",icon:"🐀",minLevel:7,maxLevel:15,baseHealth:25,baseDamage:350,baseArmor:6,experienceReward:80,goldReward:350,abilities:[{name:"Morsure Infectée",icon:"🦠",damage:300,cooldown:4,description:"Peut empoisonner la cible"}]},{id:"skeleton",name:"Squelette résucité",type:"undead",icon:"💀",minLevel:10,maxLevel:15,baseHealth:60,baseDamage:1200,baseArmor:15,experienceReward:260,goldReward:1200,abilities:[{name:"Toucher de Givre",icon:"❄️",damage:1400,cooldown:4,description:"Toucher glacial qui ralentit"}]},{id:"ghoul",name:"Goule affamée",type:"undead",icon:"🧟",minLevel:12,maxLevel:18,baseHealth:75,baseDamage:1400,baseArmor:18,experienceReward:275,goldReward:1400,abilities:[{name:"Festin de Chair",icon:"🩸",damage:2e3,heal:20,cooldown:5,description:"Dévore et se soigne"}]},{id:"ghost",name:"Fantôme du Manoir",type:"undead",icon:"👻",minLevel:10,maxLevel:15,baseHealth:40,baseDamage:900,baseArmor:10,experienceReward:180,goldReward:900,abilities:[{name:"Hurlement Effrayant",icon:"😱",damage:800,cooldown:4,description:"Effraie et affaiblit la cible"}]},{id:"gargoyle",name:"Gargouille Animée",type:"undead",icon:"🗿",minLevel:12,maxLevel:15,baseHealth:55,baseDamage:1100,baseArmor:18,experienceReward:220,goldReward:1100,abilities:[{name:"Griffes de Pierre",icon:"🪨",damage:1e3,cooldown:3,description:"Attaque physique puissante"}]},{id:"fire-elemental",name:"Élémentaire de Feu",type:"elemental",icon:"🔥",minLevel:15,maxLevel:22,baseHealth:100,baseDamage:1800,baseArmor:18,experienceReward:300,goldReward:1800,abilities:[{name:"Boule de Feu",icon:"💥",damage:2e3,cooldown:3,description:"Lance une boule de feu"}]},{id:"ice-elemental",name:"Élémentaire de Eau",type:"elemental",icon:"❄️",minLevel:16,maxLevel:23,baseHealth:100,baseDamage:2e3,baseArmor:20,experienceReward:300,goldReward:1800,abilities:[{name:"Tempête d'Eau",icon:"🌨️",damage:2500,cooldown:3,description:"Congèle les ennemis"}]},{id:"earth-elemental",name:"Élémentaire de Terre",type:"elemental",icon:"🌱",minLevel:17,maxLevel:24,baseHealth:120,baseDamage:2100,baseArmor:25,experienceReward:320,goldReward:1900,abilities:[{name:"Secousse Sismique",icon:"🌋",damage:2700,cooldown:4,description:"Provoque une secousse qui étourdit"}]},{id:"air-elemental",name:"Élémentaire d'Air",type:"elemental",icon:"🌪️",minLevel:18,maxLevel:25,baseHealth:90,baseDamage:2200,baseArmor:15,experienceReward:330,goldReward:1950,abilities:[{name:"Rafale",icon:"💨",damage:2600,cooldown:3,description:"Attaque avec une puissante rafale de vent"}]},{id:"imp",name:"Diablotin",type:"demon",icon:"👿",minLevel:20,maxLevel:25,baseHealth:120,baseDamage:2400,baseArmor:22,experienceReward:350,goldReward:2400,abilities:[{name:"Trait de Feu",icon:"🔥",damage:3e3,cooldown:3,description:"Tire un trait de feu"}]},{id:"felguard",name:"Gangregarde",type:"demon",icon:"😈",minLevel:23,maxLevel:28,baseHealth:150,baseDamage:2600,baseArmor:28,experienceReward:370,goldReward:2600,abilities:[{name:"Coup Gangreneux",icon:"💚",damage:3200,cooldown:4,description:"Frappe corrompue"}]},{id:"minor-demon",name:"Démon Mineur",type:"demon",icon:"👹",minLevel:20,maxLevel:25,baseHealth:110,baseDamage:2200,baseArmor:20,experienceReward:320,goldReward:2200,abilities:[{name:"Griffes Ardentes",icon:"🔥",damage:2100,cooldown:3,description:"Attaque de feu rapide"}]},{id:"succubus",name:"Succube",type:"demon",icon:"👩‍🦰",minLevel:22,maxLevel:25,baseHealth:100,baseDamage:2300,baseArmor:18,experienceReward:330,goldReward:2300,abilities:[{name:"Charme Fatal",icon:"💋",damage:2e3,cooldown:4,description:"Peut charmer et affaiblir la cible"}]},{id:"giant",name:"Géant de Pierre",type:"giant",icon:"🗿",minLevel:25,maxLevel:32,baseHealth:175,baseDamage:3e3,baseArmor:30,experienceReward:550,goldReward:3e3,abilities:[{name:"Écrasement",icon:"🪨",damage:3500,cooldown:4,description:"Écrase avec une force titanesque"}]},{id:"ice-giant",name:"Géant de Glace",type:"giant",icon:"🧊",minLevel:25,maxLevel:32,baseHealth:200,baseDamage:3200,baseArmor:35,experienceReward:600,goldReward:3200,abilities:[{name:"Souffle Glacial",icon:"❄️",damage:3700,cooldown:4,description:"Rend la cible plus lente"}]},{id:"troll-brute",name:"Troll Massif",type:"giant",icon:"🧟‍♂️",minLevel:27,maxLevel:32,baseHealth:180,baseDamage:3100,baseArmor:28,experienceReward:580,goldReward:3100,abilities:[{name:"Coup de Massue",icon:"🔨",damage:3400,cooldown:3,description:"Frappe puissante avec une massue"}]},{id:"whelp",name:"Dragonnet",type:"dragon",icon:"🐉",minLevel:30,maxLevel:35,baseHealth:200,baseDamage:3500,baseArmor:40,experienceReward:650,goldReward:3500,abilities:[{name:"Souffle de Flammes",icon:"🔥",damage:4e3,cooldown:4,description:"Souffle enflammé dévastateur"}]},{id:"dragon",name:"Dragon",type:"dragon",icon:"🐲",minLevel:35,maxLevel:45,baseHealth:300,baseDamage:4200,baseArmor:50,experienceReward:800,goldReward:4200,abilities:[{name:"Souffle de Dragon",icon:"💨",damage:5e3,cooldown:3,description:"Souffle destructeur"},{name:"Rugissement",icon:"😤",damage:4500,cooldown:5,description:"Rugissement terrifiant"}]},{id:"ancient-dragon",name:"Dragon Ancien",type:"dragon",icon:"🐲",minLevel:45,maxLevel:60,baseHealth:400,baseDamage:5500,baseArmor:60,experienceReward:1200,goldReward:5500,abilities:[{name:"Cataclysme",icon:"💥",damage:6e3,cooldown:5,description:"Déchaîne un cataclysme"},{name:"Souffle Ancestral",icon:"🌪️",damage:7e3,cooldown:4,description:"Souffle millénaire"}]},{id:"wyvern",name:"Wyvern Sauvage",type:"dragon",icon:"🦅",minLevel:30,maxLevel:40,baseHealth:220,baseDamage:3700,baseArmor:38,experienceReward:700,goldReward:3700,abilities:[{name:"Piqûre Venimeuse",icon:"🦟",damage:3900,cooldown:4,description:"Peut empoisonner la cible"}]},{id:"drake",name:"Drake des Cimes",type:"dragon",icon:"🦎",minLevel:35,maxLevel:50,baseHealth:280,baseDamage:4100,baseArmor:45,experienceReward:900,goldReward:4100,abilities:[{name:"Souffle Acide",icon:"🧪",damage:4800,cooldown:3,description:"Souffle corrosif"}]},{id:"guardian-dragon",name:"Dragon Gardien",type:"dragon",icon:"🛡️",minLevel:50,maxLevel:60,baseHealth:500,baseDamage:6e3,baseArmor:70,experienceReward:1500,goldReward:6e3,abilities:[{name:"Barrière Draconique",icon:"🛡️",damage:0,cooldown:5,description:"Réduit fortement les dégâts subis"},{name:"Souffle de Givre",icon:"❄️",damage:7500,cooldown:4,description:"Souffle glacé paralysant"}]}],ls=(e,i)=>{const s=R.filter(a=>i.monstersId.includes(a.id));if(s.length===0){const a=R.reduce((d,c)=>c.maxLevel<e&&c.maxLevel>d.maxLevel?c:d,R[0]);return _e(a,e)}const r=Math.floor(Math.random()*s.length),l=s[r];return _e(l,e)},_e=(e,i)=>({id:`${e.id}-${Date.now()}`,name:`${e.name}`,type:e.type,icon:e.icon,level:i,health:Math.floor(e.baseHealth*2*i),maxHealth:Math.floor(e.baseHealth*2*i),damage:Math.floor(e.baseDamage+(i-e.minLevel)*2),armor:Math.floor(e.baseArmor+(i-e.minLevel)*2*.5),experienceReward:Math.floor(Ae(i)/(4+i/10)),goldReward:Math.floor(e.goldReward*3*i),abilities:e.abilities||[]}),ns={jab:"ability_monk_jab","keg-smash":"ability_monk_kegsmash","rising-sun-kick":"ability_monk_risingsunkick","blackout-kick":"ability_monk_blackoutkick","fists-of-fury":"monk_ability_fistoffury","spinning-crane-kick":"ability_monk_cranekick_new","heroic-strike":"ability_rogue_ambush","mortal-strike":"ability_warrior_savageblow",whirlwind:"ability_whirlwind",recklessness:"ability_criticalstrike",execute:"inv_sword_48","crusader-strike":"spell_holy_crusaderstrike","holy-light":"spell_holy_holybolt","divine-storm":"ability_paladin_divinestorm","hammer-of-wrath":"ability_thunderbolt","divine-shield":"spell_holy_divineintervention","arcane-shot":"ability_impalingbolt","multi-shot":"ability_upgrademoonglaive","aimed-shot":"inv_spear_07","explosive-shot":"ability_hunter_explosiveshot","kill-shot":"ability_hunter_assassinate2",backstab:"ability_backstab","sinister-strike":"spell_shadow_ritualofsacrifice",eviscerate:"ability_rogue_eviscerate","kidney-shot":"ability_rogue_kidneyshot","shadow-dance":"ability_rogue_shadowdance",smite:"spell_holy_holysmite",heal:"spell_holy_heal","shadow-word-pain":"spell_shadow_shadowwordpain","mind-blast":"spell_shadow_unholyfrenzy","divine-hymn":"spell_holy_divinehymn","lightning-bolt":"spell_nature_lightning","earth-shock":"spell_nature_earthshock","lava-burst":"spell_shaman_lavaburst","chain-lightning":"spell_nature_chainlightning","elemental-mastery":"spell_nature_wispheal",fireball:"spell_fire_flamebolt",frostbolt:"spell_frost_frostbolt02","arcane-missiles":"spell_nature_starfall",pyroblast:"spell_fire_fireball02","arcane-power":"spell_nature_lightning","shadow-bolt":"spell_shadow_shadowbolt",immolate:"spell_fire_immolation","chaos-bolt":"ability_warlock_chaosbolt",soulfire:"spell_fire_fireball02","dark-soul":"spell_shadow_shadetruesight",wrath:"spell_nature_abolishmagic",moonfire:"spell_nature_starfall",starfire:"spell_arcane_starfire",starfall:"ability_druid_starfall",incarnation:"spell_druid_incarnation","death-strike":"spell_deathknight_butcher2",obliterate:"spell_deathknight_classicon","frost-strike":"spell_deathknight_empowerruneblade2","soul-reaper":"ability_deathknight_soulreaper",apocalypse:"artifactability_unholydeathknight_deathsembrace",attack:"inv_sword_04",magic:"inv_wand_02",defend:"ability_defend",flee:"ability_rogue_sprint","health-potion":"inv_potion_54","mana-potion":"inv_potion_76"};function Z(e){const i=ns[e];return i?`https://wow.zamimg.com/images/wow/icons/large/${i}.jpg`:(console.warn(`Icon not found for key: ${e}`),"")}const Y={attack:Z("attack"),magic:Z("magic"),defend:Z("defend"),flee:Z("flee")},as={monk:[{id:"jab",name:"Coup de poing",icon:"🥋",description:"Un coup rapide qui inflige +20% de dégâts supplémentaires.",baseDamage:.2,baseManaCost:10,manaCostPerLevel:2,unlockLevel:1},{id:"rising-sun-kick",name:"Coup de pied du soleil levant",icon:"☀️",description:"Un coup puissant qui inflige +50% de dégâts supplémentaires.",baseDamage:.5,baseManaCost:20,manaCostPerLevel:3,unlockLevel:5},{id:"blackout-kick",name:"Coup de pied aveuglant",icon:"🌑",description:"Un coup tournoyant qui inflige +80% de dégâts supplémentaires.",baseDamage:.8,baseManaCost:30,manaCostPerLevel:4,unlockLevel:10},{id:"fists-of-fury",name:"Poings de fureur",icon:"👊",description:"Une série de coups rapides qui infligent +100% de dégâts supplémentaires.",baseDamage:1,baseManaCost:40,manaCostPerLevel:5,unlockLevel:20},{id:"spinning-crane-kick",name:"Coup de grue tournoyant",icon:"🦢",description:"Un coup tournoyant qui inflige +200% de dégâts supplémentaires.",baseDamage:2,baseManaCost:50,manaCostPerLevel:6,unlockLevel:30}],warrior:[{id:"heroic-strike",name:"Frappe héroïque",icon:"⚔️",description:"Une attaque puissante qui inflige +20% de dégâts supplémentaires.",baseDamage:.2,baseManaCost:10,manaCostPerLevel:2,unlockLevel:1},{id:"mortal-strike",name:"Frappe mortelle",icon:"💥",description:"Frappe dévastatrice qui inflige +50% de dégâts supplémentaires.",baseDamage:.5,baseManaCost:20,manaCostPerLevel:3,unlockLevel:5},{id:"whirlwind",name:"Tourbillon",icon:"🌪️",description:"Attaque tournoyante massive qui inflige +80% de dégâts supplémentaires.",baseDamage:.8,baseManaCost:30,manaCostPerLevel:4,unlockLevel:10},{id:"recklessness",name:"Témérité",icon:"💢",description:"Frappe avec témérité qui inflige +100% de dégâts supplémentaires.",baseDamage:1,baseManaCost:40,manaCostPerLevel:5,unlockLevel:20},{id:"execute",name:"Exécution",icon:"☠️",description:"Coup final dévastateur qui inflige +200% de dégâts supplémentaires.",baseDamage:2,baseManaCost:50,manaCostPerLevel:6,unlockLevel:30}],paladin:[{id:"crusader-strike",name:"Frappe du croisé",icon:"⚡",description:"Frappe sacrée qui inflige +20% de dégâts supplémentaires.",baseDamage:.2,baseManaCost:10,manaCostPerLevel:2,unlockLevel:1},{id:"holy-light",name:"Lumière sacrée",icon:"✨",description:"Soigne pour 20% de la vie.",baseHeal:.2,baseManaCost:20,manaCostPerLevel:3,unlockLevel:3},{id:"divine-storm",name:"Tempête divine",icon:"🌟",description:"Tempête sacrée qui inflige +80% de dégâts supplémentaires.",baseDamage:.8,baseManaCost:30,manaCostPerLevel:4,unlockLevel:10},{id:"hammer-of-wrath",name:"Marteau de courroux",icon:"🔨",description:"Marteau divin qui inflige +100% de dégâts.",baseDamage:1,baseManaCost:40,manaCostPerLevel:5,unlockLevel:20},{id:"divine-shield",name:"Bouclier divin",icon:"🛡️",description:"Frappe protectrice qui inflige +200% de dégâts et soigne +50%.",baseDamage:2,baseHeal:.5,baseManaCost:50,manaCostPerLevel:6,unlockLevel:30}],hunter:[{id:"arcane-shot",name:"Tir des arcanes",icon:"🏹",description:"Tir magique qui inflige +20% de dégâts supplémentaires.",baseDamage:.2,baseManaCost:10,manaCostPerLevel:2,unlockLevel:1},{id:"multi-shot",name:"Tir multiple",icon:"🎯",description:"Salve de flèches qui inflige +50% de dégâts supplémentaires.",baseDamage:.5,baseManaCost:20,manaCostPerLevel:3,unlockLevel:5},{id:"aimed-shot",name:"Tir visé",icon:"🎪",description:"Tir précis et puissant qui inflige +80% de dégâts supplémentaires.",baseDamage:.8,baseManaCost:30,manaCostPerLevel:4,unlockLevel:15},{id:"explosive-shot",name:"Tir explosif",icon:"💣",description:"Flèche explosive qui inflige +100% de dégâts supplémentaires.",baseDamage:1,baseManaCost:40,manaCostPerLevel:5,unlockLevel:25},{id:"kill-shot",name:"Tir mortel",icon:"💀",description:"Tir fatal qui inflige +200% de dégâts supplémentaires.",baseDamage:2,baseManaCost:50,manaCostPerLevel:6,unlockLevel:35}],rogue:[{id:"sinister-strike",name:"Frappe pernicieuse",icon:"🗡️",description:"Attaque sournoise qui inflige +20% de dégâts supplémentaires.",baseDamage:.2,baseManaCost:10,manaCostPerLevel:2,unlockLevel:1},{id:"eviscerate",name:"Éventration",icon:"🔪",description:"Attaque tranchante qui inflige +50% de dégâts supplémentaires.",baseDamage:.5,baseManaCost:20,manaCostPerLevel:3,unlockLevel:5},{id:"fan-of-knives",name:"Salve de couteaux",icon:"🗡️",description:"Attaque de zone qui inflige +80% de dégâts supplémentaires.",baseDamage:.8,baseManaCost:30,manaCostPerLevel:4,unlockLevel:10},{id:"shadowstep",name:"Pas de l’ombre",icon:"🌑",description:"Attaque furtive qui inflige +100% de dégâts supplémentaires.",baseDamage:1,baseManaCost:40,manaCostPerLevel:5,unlockLevel:20},{id:"vendetta",name:"Vendetta",icon:"🔥",description:"Attaque vengeresse qui inflige +200% de dégâts supplémentaires.",baseDamage:2,baseManaCost:50,manaCostPerLevel:6,unlockLevel:30}],priest:[{id:"smite",name:"Châtiment",icon:"✨",description:"Frappe sacrée qui inflige +20% de dégâts magiques.",baseDamage:.2,baseManaCost:10,manaCostPerLevel:2,unlockLevel:1},{id:"heal",name:"Soins",icon:"💚",description:"Soigne pour 20% de la vie.",baseHeal:.2,baseManaCost:20,manaCostPerLevel:3,unlockLevel:1},{id:"shadow-word-pain",name:"Mot de l’ombre : Douleur",icon:"🌑",description:"Douleur de l’ombre qui inflige +50% de dégâts supplémentaires.",baseDamage:.5,baseManaCost:30,manaCostPerLevel:4,unlockLevel:10},{id:"mind-blast",name:"Explosion mentale",icon:"🧠",description:"Attaque mentale qui inflige +80% de dégâts supplémentaires.",baseDamage:.8,baseManaCost:40,manaCostPerLevel:5,unlockLevel:20},{id:"divine-hymn",name:"Hymne divin",icon:"🎵",description:"Hymne sacré qui inflige +200% de dégâts supplémentaires et soigne pour 50% de la vie.",baseDamage:2,baseHeal:.5,baseManaCost:50,manaCostPerLevel:6,unlockLevel:30}],shaman:[{id:"lightning-bolt",name:"Éclair",icon:"⚡",description:"Éclair foudroyant qui inflige +20% de dégâts supplémentaires.",baseDamage:.2,baseManaCost:10,manaCostPerLevel:2,unlockLevel:1},{id:"earth-shock",name:"Horion de terre",icon:"🌍",description:"Choc élémentaire qui inflige +50% de dégâts supplémentaires.",baseDamage:.5,baseManaCost:20,manaCostPerLevel:3,unlockLevel:5},{id:"lava-burst",name:"Explosion de lave",icon:"🌋",description:"Lave brûlante qui inflige +80% de dégâts supplémentaires.",baseDamage:.8,baseManaCost:30,manaCostPerLevel:4,unlockLevel:15},{id:"chain-lightning",name:"Chaîne d’éclairs",icon:"⛈️",description:"Éclairs enchaînés qui infligent +100% de dégâts supplémentaires.",baseDamage:1,baseManaCost:40,manaCostPerLevel:5,unlockLevel:25},{id:"elemental-mastery",name:"Maîtrise élémentaire",icon:"🔥",description:"Puissance des éléments qui inflige +200% de dégâts supplémentaires.",baseDamage:2,baseManaCost:50,manaCostPerLevel:6,unlockLevel:35}],mage:[{id:"fireball",name:"Boule de feu",icon:"🔥",description:"Boule de feu ardente qui inflige +20% de dégâts supplémentaires.",baseDamage:.2,baseManaCost:10,manaCostPerLevel:2,unlockLevel:1},{id:"frostbolt",name:"Éclair de givre",icon:"❄️",description:"Givre glacial qui inflige +50% de dégâts supplémentaires.",baseDamage:.5,baseManaCost:20,manaCostPerLevel:3,unlockLevel:3},{id:"arcane-missiles",name:"Projectiles des arcanes",icon:"🔮",description:"Salve arcanique qui inflige +80% de dégâts supplémentaires.",baseDamage:.8,baseManaCost:30,manaCostPerLevel:4,unlockLevel:15},{id:"pyroblast",name:"Explosion pyrotechnique",icon:"💥",description:"Explosion de feu qui inflige +100% de dégâts supplémentaires.",baseDamage:1,baseManaCost:40,manaCostPerLevel:5,unlockLevel:25},{id:"arcane-power",name:"Puissance des arcanes",icon:"✨",description:"Puissance arcanique ultime qui inflige +200% de dégâts supplémentaires.",baseDamage:2,baseManaCost:50,manaCostPerLevel:6,unlockLevel:35}],warlock:[{id:"shadow-bolt",name:"Trait de l’ombre",icon:"🌑",description:"Projectile d’ombre qui inflige +20% de dégâts supplémentaires.",baseDamage:.2,baseManaCost:10,manaCostPerLevel:2,unlockLevel:1},{id:"immolate",name:"Immolation",icon:"🔥",description:"Flammes démoniaques qui infligent +50% de dégâts supplémentaires.",baseDamage:.5,baseManaCost:20,manaCostPerLevel:3,unlockLevel:5},{id:"chaos-bolt",name:"Trait du chaos",icon:"💀",description:"Chaos destructeur qui inflige +80% de dégâts supplémentaires.",baseDamage:.8,baseManaCost:30,manaCostPerLevel:4,unlockLevel:15},{id:"soul-fire",name:"Feu de l’âme",icon:"👻",description:"Flammes spirituelles qui infligent +100% de dégâts supplémentaires.",baseDamage:1,baseManaCost:40,manaCostPerLevel:5,unlockLevel:25},{id:"dark-soul",name:"Âme noire",icon:"😈",description:"Puissance démoniaque qui inflige +200% de dégâts supplémentaires.",baseDamage:2,baseManaCost:50,manaCostPerLevel:6,unlockLevel:35}],druid:[{id:"wrath",name:"Colère",icon:"🌿",description:"Colère de la nature qui inflige +20% de dégâts supplémentaires.",baseDamage:.2,baseManaCost:10,manaCostPerLevel:2,unlockLevel:1},{id:"moonfire",name:"Eclat lunaire",icon:"🌙",description:"Lumière lunaire qui inflige +50% de dégâts supplémentaires.",baseDamage:.5,baseManaCost:20,manaCostPerLevel:3,unlockLevel:5},{id:"starfire",name:"Feu stellaire",icon:"⭐",description:"Feu des étoiles qui inflige +80% de dégâts supplémentaires.",baseDamage:.8,baseManaCost:30,manaCostPerLevel:4,unlockLevel:15},{id:"starsurge",name:"Déferlante stellaire",icon:"💫",description:"Déferlante cosmique qui inflige +100% de dégâts supplémentaires.",baseDamage:1,baseManaCost:40,manaCostPerLevel:5,unlockLevel:25},{id:"incarnation",name:"Incarnation",icon:"🦁",description:"Puissance animale qui inflige +200% de dégâts supplémentaires.",baseDamage:2,baseManaCost:50,manaCostPerLevel:6,unlockLevel:35}],"death-knight":[{id:"death-strike",name:"Frappe de la mort",icon:"💀",description:"Frappe mortelle qui inflige +20% de dégâts supplémentaires.",baseDamage:.2,baseManaCost:10,manaCostPerLevel:2,unlockLevel:1},{id:"obliterate",name:"Oblitération",icon:"⚔️",description:"Coup destructeur qui inflige +50% de dégâts supplémentaires.",baseDamage:.5,baseManaCost:20,manaCostPerLevel:3,unlockLevel:5},{id:"frost-strike",name:"Frappe de givre",icon:"❄️",description:"Frappe glaciale qui inflige +80% de dégâts supplémentaires.",baseDamage:.8,baseManaCost:30,manaCostPerLevel:4,unlockLevel:15},{id:"soul-reaper",name:"Faucheuse d’âme",icon:"👻",description:"Récolte d’âmes qui inflige +100% de dégâts supplémentaires.",baseDamage:1,baseManaCost:40,manaCostPerLevel:5,unlockLevel:25},{id:"apocalypse",name:"Apocalypse",icon:"☠️",description:"Fin des temps qui inflige +200% de dégâts supplémentaires.",baseDamage:2,baseManaCost:50,manaCostPerLevel:6,unlockLevel:35}]},He=(e,i)=>(as[e]||[]).filter(r=>r.unlockLevel<=i),mt=(e,i)=>(e.baseManaCost+(e.manaCostPerLevel||0))*(i-1),os=(e,i,s,r)=>e.baseDamage?Math.floor((r==="intellect"?s:i)*(1+e.baseDamage)):0,cs=(e,i)=>e.baseHeal?Math.floor(i*e.baseHeal):0,ds=e=>Z(e.id),je={none:{name:"No Effect",emoji:"❔"},strength:{name:"Strength",emoji:"💪"},agility:{name:"Agility",emoji:"🤸"},intellect:{name:"Intellect",emoji:"🧠"},stamina:{name:"Stamina",emoji:"❤️"},attackPower:{name:"Attack Power",emoji:"⚔️"},spellPower:{name:"Spell Power",emoji:"✨"},critChance:{name:"Critical Chance",emoji:"🎯"},luck:{name:"Luck",emoji:"🍀"}},K=e=>({minor:"poor",lesser:"common",normal:"common",greater:"uncommon",superior:"rare",ultimate:"epic"})[e],ke=[{id:"health-minor",name:"Potion de soins mineure",description:"Restaure 60 points de vie",type:"health",quality:"minor",icon:"🧪",restoreAmount:600,price:100,requiredLevel:1},{id:"health-lesser",name:"Potion de soins inférieure",description:"Restaure 300 points de vie",type:"health",quality:"lesser",icon:"🧪",restoreAmount:3e3,price:5e3,requiredLevel:5},{id:"health-normal",name:"Potion de soins",description:"Restaure 500 points de vie",type:"health",quality:"normal",icon:"🧪",restoreAmount:5e3,price:1e4,requiredLevel:10},{id:"health-greater",name:"Potion de soins supérieure",description:"Restaure 1200 points de vie",type:"health",quality:"greater",icon:"🧪",restoreAmount:12e3,price:5e4,requiredLevel:20},{id:"health-superior",name:"Potion de soins majeure",description:"Restaure 2000 points de vie",type:"health",quality:"superior",icon:"🧪",restoreAmount:2e4,price:1e5,requiredLevel:30},{id:"health-ultimate",name:"Élixir de vie ultime",description:"Restaure 50% de la vie maximale",type:"health",quality:"ultimate",icon:"⚗️",restoreAmount:0,restorePercent:50,price:5e5,requiredLevel:40},{id:"mana-minor",name:"Potion de mana mineure",description:"Restaure 100 points mana",type:"mana",quality:"minor",icon:"💙",restoreAmount:100,price:100,requiredLevel:1},{id:"mana-lesser",name:"Potion de mana inférieure",description:"Restaure 30% de la mana maximum",type:"mana",quality:"lesser",icon:"💙",restoreAmount:0,restorePercent:30,price:5e3,requiredLevel:5},{id:"mana-normal",name:"Potion de mana",description:"Restaure 40% de la mana maximum",type:"mana",quality:"normal",icon:"💙",restoreAmount:0,restorePercent:40,price:1e4,requiredLevel:10},{id:"mana-greater",name:"Potion de mana supérieure",description:"Restaure 60% de la mana maximum",type:"mana",quality:"greater",icon:"💙",restoreAmount:0,restorePercent:60,price:5e4,requiredLevel:20},{id:"mana-superior",name:"Potion de mana majeure",description:"Restaure 80% de la mana maximum",type:"mana",quality:"superior",icon:"💙",restoreAmount:0,restorePercent:80,price:1e5,requiredLevel:30},{id:"mana-ultimate",name:"Élixir de mana ultime",description:"Restaure 100% du mana maximum",type:"mana",quality:"ultimate",icon:"💎",restoreAmount:0,restorePercent:100,price:5e5,requiredLevel:40},{id:"elixir-of-strength",name:"Élixir de force",description:"Augmente temporairement la force de 20% pendant 10 minutes",type:"effect",quality:"normal",icon:"🧪"+je.strength.emoji,restoreAmount:0,restorePercent:20,price:1e4,requiredLevel:20},{id:"elixir-of-luck",name:"Élixir de chance",description:"Augmente temporairement la chance de 20% pendant 10 minutes",type:"effect",quality:"normal",icon:"🧪"+je.luck.emoji,restoreAmount:0,restorePercent:20,price:1e4,requiredLevel:20},{id:"health-dev",name:"Élixir de vie du Dev",description:"Restaure 100% de la vie maximale",type:"health",quality:"ultimate",icon:"💎",restoreAmount:0,restorePercent:100,price:9999999,requiredLevel:0},{id:"mana-dev",name:"Élixir de mana du Dev",description:"Restaure 100% du mana maximum",type:"mana",quality:"ultimate",icon:"💎",restoreAmount:0,restorePercent:100,price:9999999,requiredLevel:0}],xs=(e,i)=>{let s=ke.filter(r=>r.requiredLevel<=e);return i&&(s=s.filter(r=>r.type===i)),ne(s,["type","requiredLevel"],["desc","desc"])},hs=(e,i,s=1)=>e.potions.find(n=>n.potionId===i)?{...e,potions:e.potions.map(n=>n.potionId===i?{...n,quantity:n.quantity+s}:n)}:{...e,potions:[...e.potions,{potionId:i,quantity:s}]},ps=(e,i)=>{const s=e.potions.find(n=>n.potionId===i);return!s||s.quantity<=0?{inventory:e,success:!1}:{inventory:{potions:e.potions.map(n=>n.potionId===i?{...n,quantity:n.quantity-1}:n).filter(n=>n.quantity>0)},success:!0}},oe=(e,i,s=!1,r=0,n=!1)=>{const l=B[e.class??"warrior"].primaryStat,d=(l==="strength"||l==="agility"?e.attackPower:e.spellPower)??e.damage??0,c=e.critChance??0;let u=s?r:d;const x=c/100,h=Math.random()<x;h&&(u*=2);const m=i.armor*i.level*(n?.05:1.5);return{damage:Math.max(100*(e.level/2),Math.floor(u-m)),critical:h}},Ne=e=>{const{damage:i,critical:s}=oe(e.player,e.monster),r=Math.max(0,e.monster.health-i),n=r===0,l={id:`${Date.now()}-player-attack`,message:s?`💥 Coup critique ! Vous infligez ${Math.floor(i/10)} dégâts !`:`⚔️ Vous attaquez et infligez ${Math.floor(i/10)} dégâts.`,type:s?"critical":"damage",timestamp:Date.now()};return{...e,monster:{...e.monster,health:r},turn:n?"player":"monster",status:n?"victory":"ongoing",battleLog:[...e.battleLog,l]}},fs=e=>{const{damage:i,critical:s}=oe(e.monster,e.player,!1,0,!0),r=e.playerDefending?Math.floor(i*.5):i,n=Math.max(0,e.player.health-r),l=n<=0,a={id:`${Date.now()}-monster-attack`,message:s?`💀 ${e.monster.name} vous inflige un coup critique de ${Math.floor(r/10)} dégâts !`:e.playerDefending?`🛡️ Vous bloquez partiellement ! ${e.monster.name} inflige ${Math.floor(r/10)} dégâts.`:`🔴 ${e.monster.name} vous inflige ${Math.floor(r/10)} dégâts.`,type:s?"critical":"damage",timestamp:Date.now()};return{...e,player:{...e.player,health:n},turn:l?"monster":"player",status:l?"defeat":"ongoing",playerDefending:!1,battleLog:[...e.battleLog,a]}},us=e=>{const i={id:`${Date.now()}-player-defend`,message:"🛡️ Vous vous mettez en position défensive. Les dégâts du prochain tour seront réduits de 50%.",type:"info",timestamp:Date.now()};return{...e,playerDefending:!0,turn:"monster",battleLog:[...e.battleLog,i]}},gs=e=>{if(Math.random()<.5){const r={id:`${Date.now()}-flee-success`,message:"🏃 Vous avez réussi à fuir le combat !",type:"info",timestamp:Date.now()};return{...e,status:"fled",battleLog:[...e.battleLog,r]}}else{const r={id:`${Date.now()}-flee-fail`,message:"❌ Vous n'avez pas réussi à fuir ! Le monstre vous rattrape.",type:"info",timestamp:Date.now()};return{...e,turn:"monster",battleLog:[...e.battleLog,r]}}},Ze=(e,i)=>{const s=mt(i,e.player.level);if(e.player.mana<s){const p={id:`${Date.now()}-ability-nomana`,message:`❌ Pas assez de mana pour ${i.name} ! (${s} requis)`,type:"info",timestamp:Date.now()};return{...e,turn:"player",status:"ongoing",battleLog:[...e.battleLog,p]}}const r=B[e.player.class].primaryStat,n=os(i,e.player.attackPower,e.player.spellPower,r),l=i.baseHeal?cs(i,e.player.spellPower):0,a=[];let d=e.player.health,c=e.monster.health;if(i.baseDamage&&n>0){const{damage:p,critical:h}=oe(e.player,e.monster,!0,n);c=Math.max(0,e.monster.health-p);const m=h?`${i.icon}💥 ${i.name} CRITIQUE ! ${p/10} dégâts !`:`${i.icon} ${i.name} inflige ${p/10} dégâts !`;a.push(m)}if(l>0){const p=Math.min(l,e.player.maxHealth-e.player.health);d=Math.min(e.player.maxHealth,e.player.health+p),a.push(`💚 Vous récupérez ${p} PV !`)}const u=c===0,x={id:`${Date.now()}-ability`,message:`${a.join(" ")} (-${s} mana)`,type:u?"victory":"damage",timestamp:Date.now()};return{...e,player:{...e.player,mana:e.player.mana-s,health:d},monster:{...e.monster,health:c},turn:u?"player":"monster",status:u?"victory":"ongoing",battleLog:[...e.battleLog,x]}},ms=(e,i)=>{let s=e.experienceReward;const r=e.level-i.level;r!==0&&(r>=3&&(s*=1.5),r<0&&(s/=Math.abs(r))),s=Math.floor(s);const n=e.goldReward,a=i.experience+s>=i.experienceToNextLevel,d=a?i.level+1:i.level,c=Ji(e.level,i);return{experience:s,gold:n,levelUp:a,newLevel:d,loot:c||void 0}},ys=(e,i,s)=>{const r=ls(i,s),n={id:`${Date.now()}-start`,message:`⚔️ Un ${r.name} apparaît !`,type:"info",timestamp:Date.now()};return{player:e,monster:r,zone:s,turn:"player",turnCount:1,playerDefending:!1,monsterDefending:!1,battleLog:[n],status:"ongoing"}},js=e=>{if(e.monster.abilities.length>0&&Math.random()<.3){const s=e.monster.abilities[Math.floor(Math.random()*e.monster.abilities.length)],{damage:r,critical:n}=oe(e.monster,e.player,!0,s.damage||e.monster.damage*1.5,!0),l=e.playerDefending?Math.floor(r*.5):r,a=Math.max(0,e.player.health-l),d=a===0,c={id:`${Date.now()}-monster-ability`,message:n?`💀✨ ${e.monster.name} utilise ${s.name} ! Coup critique de ${Math.floor(l/10)} dégâts !`:`✨ ${e.monster.name} utilise ${s.name} et inflige ${Math.floor(l/10)} dégâts !`,type:n?"critical":"damage",timestamp:Date.now()};return{...e,player:{...e.player,health:a},turn:d?"monster":"player",status:d?"defeat":"ongoing",playerDefending:!1,turnCount:e.turnCount+1,battleLog:[...e.battleLog,c]}}else return{...fs(e),turnCount:e.turnCount+1}},yt=f.createContext(void 0);function ks({children:e}){const[i,s]=f.useState(null),r=Lt(),n=Mt(),l=(a,d,c)=>{s(ys(a,d,c))};return f.useEffect(()=>{i&&r.pathname!=="/battle"&&n("/battle"),!i&&r.pathname==="/battle"&&n("/")},[i,r,n]),t.jsx(yt.Provider,{value:{battle:i,setBattle:s,createNewBattle:l},children:e})}const A=o.button`
  font-family: ${({theme:e})=>e.fonts.secondary};
  font-size: ${({$size:e,theme:i})=>e==="small"?i.fontSizes.sm:e==="large"?i.fontSizes.xl:i.fontSizes.lg};
  font-weight: ${({theme:e})=>e.fontWeights.bold};
  padding: ${({$size:e,theme:i})=>e==="small"?`${i.spacing.xs} ${i.spacing.sm}`:e==="large"?`${i.spacing.lg} ${i.spacing["2xl"]}`:`${i.spacing.md} ${i.spacing.xl}`};
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
    // transform: translateY(-2px);
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
`,ws="/X-Mas-Corp/assets/death-knight-BlDcxklt.png",bs="/X-Mas-Corp/assets/druid-DTZsHHDj.png",vs="/X-Mas-Corp/assets/hunter-Bv91z2Ld.png",$s="/X-Mas-Corp/assets/mage-BleXcksg.png",Ls="/X-Mas-Corp/assets/monk-BGOXjoq-.png",Ms="/X-Mas-Corp/assets/paladin-C0IVX5DB.png",Bs="/X-Mas-Corp/assets/priest-BgbDRr4c.png",Fs="/X-Mas-Corp/assets/rogue-Sa5N04dD.png",As="/X-Mas-Corp/assets/shaman-4zOWNnOm.png",Ws="/X-Mas-Corp/assets/warlock-C2x8oev9.png",Ds="/X-Mas-Corp/assets/warrior-BHhjWIDc.png",Es={"death-knight":ws,druid:bs,hunter:vs,mage:$s,monk:Ls,paladin:Ms,priest:Bs,rogue:Fs,shaman:As,warlock:Ws,warrior:Ds},Ss=o.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
`;function Cs({wowClass:e}){return t.jsx(Ss,{src:Es[e],alt:e})}const Ps=o.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing.md};
  padding: ${({theme:e})=>e.spacing.sm} ${({theme:e})=>e.spacing.md};
  background: rgba(10, 14, 26, 0.5);
  border-radius: ${({theme:e})=>e.borderRadius.md};
  border: ${({theme:e})=>e.borders.thin} solid ${({theme:e})=>e.colors.winter.darkIce};
`,Qs=o.span`
  color: ${({theme:e})=>e.colors.winter.iceBlue};
  font-weight: ${({theme:e})=>e.fontWeights.medium};
  font-size: ${({theme:e})=>e.fontSizes.sm};

  @media (max-width: ${({theme:e})=>e.breakpoints.md}) {
    display: none;
  }
`,qs=o.div`
  width: 40px;
  height: 40px;
  border-radius: ${({theme:e})=>e.borderRadius.full};
  background: linear-gradient(135deg, ${({theme:e})=>e.colors.primary.gold}, ${({theme:e})=>e.colors.primary.bronze});

  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: ${({theme:e})=>e.fontWeights.bold};
  color: ${({theme:e})=>e.colors.neutral.black};
  font-size: ${({theme:e})=>e.fontSizes.lg};
  border: ${({theme:e})=>e.borders.medium} solid ${({theme:e})=>e.colors.primary.gold};
`;function Is(){const{character:e}=j();return e?t.jsxs(Ps,{children:[t.jsx(qs,{children:t.jsx(Cs,{wowClass:e.class})}),t.jsx(Qs,{children:e?.name||"Aventurier"})]}):null}function Ge(e,i){let s=0,r=0,n=0;return e.length===4?(s=parseInt(e[1]+e[1],16),r=parseInt(e[2]+e[2],16),n=parseInt(e[3]+e[3],16)):e.length===7&&(s=parseInt(e.slice(1,3),16),r=parseInt(e.slice(3,5),16),n=parseInt(e.slice(5,7),16)),s=Math.min(255,Math.max(0,Math.round(s+i/100*255))),r=Math.min(255,Math.max(0,Math.round(r+i/100*255))),n=Math.min(255,Math.max(0,Math.round(n+i/100*255))),`rgb(${s},${r},${n})`}function Q({color:e="#FFD700",size:i=48}){const s=Ge(e,-30),r=Ge(e,40);return t.jsxs("svg",{width:i,height:i,viewBox:"0 0 64 64",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("circle",{cx:"32",cy:"32",r:"28",fill:e,stroke:s,strokeWidth:"4",filter:"url(#glow)"}),t.jsx("ellipse",{cx:"32",cy:"32",rx:"22",ry:"22",fill:r,opacity:"0.15"}),t.jsx("ellipse",{cx:"40",cy:"24",rx:"8",ry:"4",fill:r,opacity:"0.5"}),t.jsx("ellipse",{cx:"24",cy:"44",rx:"6",ry:"2.5",fill:r,opacity:"0.3"}),t.jsx("defs",{children:t.jsx("filter",{id:"glow",x:"0",y:"0",width:"64",height:"64",filterUnits:"userSpaceOnUse",children:t.jsx("feGaussianBlur",{stdDeviation:"3",result:"blur"})})})]})}function W({amount:e,variant:i="normal"}){const s=Math.floor(e/1e4),r=Math.floor(e%1e4/100),n=e%100;return t.jsxs("span",{style:{display:"flex",alignItems:"center",whiteSpace:"nowrap",justifyContent:"flex-end",gap:i==="small"?"4px":"16px"},children:[i==="small"&&t.jsxs(t.Fragment,{children:[s>0&&t.jsxs("span",{style:{color:"#FFD700"},children:[ye(s)," ",t.jsx(Q,{color:"#FFD700",size:8})]}),r>0&&s<900&&t.jsxs("span",{style:{color:"#C0C0C0"},children:[r," ",t.jsx(Q,{color:"#C0C0C0",size:8})]}),n>0&&r<90&&t.jsxs("span",{style:{color:"#CD7F32"},children:[n," ",t.jsx(Q,{color:"#B87333",size:8})]})]}),i==="normal"&&t.jsxs(t.Fragment,{children:[s>0&&t.jsxs("span",{style:{color:"#FFD700"},children:[ye(s)," ",t.jsx(Q,{color:"#FFD700",size:12})]}),r>0&&t.jsxs("span",{style:{color:"#C0C0C0"},children:[r," ",t.jsx(Q,{color:"#C0C0C0",size:12})]}),t.jsxs("span",{style:{color:"#CD7F32"},children:[n," ",t.jsx(Q,{color:"#B87333",size:12})]})]})]})}const Ts=o.header`
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
`,Rs=o.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: ${({theme:e})=>e.spacing.lg};
`,zs=o.div`
  font-family: ${({theme:e})=>e.fonts.display};
  font-size: ${({theme:e})=>e.fontSizes["2xl"]};
  color: ${({theme:e})=>e.colors.primary.gold};
  text-shadow: ${({theme:e})=>e.shadows.glow.gold};
  cursor: pointer;
  user-select: none;

  @media (max-width: ${({theme:e})=>e.breakpoints.md}) {
    font-size: ${({theme:e})=>e.fontSizes.xl};
  }
`,_s=o.nav`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing.md};
`,z=o(it)`
  text-decoration: none;
  color: ${({theme:e})=>e.colors.neutral.white};
  font-size: ${({theme:e})=>e.fontSizes["2xl"]};
`;function J({showActions:e=!0}){const{user:i,loading:s}=Fe(),{character:r}=j(),n=async()=>{try{await Kt(),window.location.reload()}catch(l){console.error("Erreur lors de la déconnexion:",l)}};return t.jsx(Ts,{children:t.jsxs(Rs,{children:[t.jsx(it,{to:"/",style:{textDecoration:"none"},children:t.jsx(zs,{children:"❄️ Fête d'Hiver"})}),r&&t.jsx(W,{amount:r.gold,variant:"normal"}),t.jsx(_s,{children:s?t.jsx("div",{children:"Chargement..."}):i?t.jsxs(t.Fragment,{children:[e&&t.jsxs(t.Fragment,{children:[t.jsx(z,{to:"/",children:"👤"}),t.jsx(z,{to:"/exploration",children:"🗺️"}),t.jsx(z,{to:"/shop",children:"🏪"}),t.jsx(z,{to:"/leaderboard",children:"🏅"})]}),t.jsx(Is,{}),r&&r.isAdmin?t.jsx(z,{to:"/",onClick:n,children:"🗑️"}):t.jsx(t.Fragment,{})]}):null})]})})}const Hs=o.input.attrs({type:"radio"})`
  opacity: 0;
  position: absolute;
  left: -9999px;
`,Ns=o.label`
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
`,ee=({checked:e,onChange:i,label:s,value:r,name:n,borderColor:l,backgroundColor:a,disabled:d})=>t.jsxs(Ns,{$checked:e,$borderColor:l,$backgroundColor:a,$disabled:d,children:[t.jsx(Hs,{checked:e,onChange:i,value:r,name:n,disabled:d}),s]}),Zs=o.div`
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
`,Gs=o.div`
  max-width: 900px;
  width: 100%;
`,Us=o.h1`
  font-family: ${({theme:e})=>e.fonts.display};
  font-size: ${({theme:e})=>e.fontSizes["3xl"]};
  color: ${({theme:e})=>e.colors.primary.gold};
  text-shadow: ${({theme:e})=>e.shadows.glow.gold};
  text-align: center;
  margin-bottom: ${({theme:e})=>e.spacing.xl};
`,_=o.div`
  margin-bottom: ${({theme:e})=>e.spacing.md};
`,H=o.label`
  display: block;
  color: ${({theme:e})=>e.colors.winter.iceBlue};
  font-weight: ${({theme:e})=>e.fontWeights.medium};
  margin-bottom: ${({theme:e})=>e.spacing.sm};
  font-size: ${({theme:e})=>e.fontSizes.base};
`,Os=o.input`
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
`,Vs=o.div`
  background: rgba(0, 0, 0, 0.5);
  border: ${({theme:e})=>e.borders.medium} solid ${({theme:e})=>e.colors.winter.darkIce};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  padding: ${({theme:e})=>e.spacing.lg};
  margin-top: ${({theme:e})=>e.spacing.lg};
`,Xs=o.h3`
  color: ${({theme:e})=>e.colors.primary.gold};
  font-family: ${({theme:e})=>e.fonts.display};
  margin-bottom: ${({theme:e})=>e.spacing.md};
  text-align: center;
`,Ys=o.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${({theme:e})=>e.spacing.md};
`,q=o.div`
  display: flex;
  justify-content: space-between;
  padding: ${({theme:e})=>e.spacing.sm};
  background: rgba(0, 0, 0, 0.3);
  border-radius: ${({theme:e})=>e.borderRadius.sm};
`,I=o.span`
  color: ${({theme:e})=>e.colors.winter.iceBlue};
  font-weight: ${({theme:e})=>e.fontWeights.medium};
`,T=o.span`
  color: ${({theme:e})=>e.colors.primary.gold};
  font-weight: ${({theme:e})=>e.fontWeights.bold};
`,Ks=o.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing.md};
  justify-content: center;
  margin-top: ${({theme:e})=>e.spacing.xl};
`;function Js({onComplete:e,onCancel:i}){const[s,r]=f.useState(""),[n,l]=f.useState(null),[a,d]=f.useState(null),[c,u]=f.useState(null),x=f.useMemo(()=>n?ii(n):[],[n]),p=f.useMemo(()=>!a||!n?[]:si(a,n),[a,n]),h=f.useMemo(()=>!c||!a?null:ht(c,a),[c,a]),m=()=>{s&&n&&a&&c&&e({name:s,faction:n,race:a,class:c})};return t.jsx(Zs,{children:t.jsxs(Gs,{children:[t.jsx(Us,{children:"⚔️ Création de Personnage"}),t.jsxs(_,{children:[t.jsx(H,{children:"Nom du personnage"}),t.jsx(Os,{type:"text",value:s,onChange:g=>r(g.target.value),placeholder:"Entrez un nom (min. 3 caractères)",maxLength:12,autoFocus:!0})]}),t.jsxs(_,{children:[t.jsx(H,{children:"Faction"}),t.jsxs("div",{style:{display:"flex",gap:"1rem",justifyContent:"center"},children:[t.jsx(ee,{checked:n==="alliance",onChange:()=>{l("alliance"),d(null),u(null)},label:t.jsx("span",{children:"🛡️ Alliance"}),value:"alliance",name:"faction",borderColor:"#3b82f6",backgroundColor:"#1e293b"}),t.jsx(ee,{checked:n==="horde",onChange:()=>{l("horde"),d(null),u(null)},label:t.jsx("span",{children:"⚔️ Horde"}),value:"horde",name:"faction",borderColor:"#ef4444",backgroundColor:"#450a0a"})]})]}),n&&t.jsxs(_,{children:[t.jsx(H,{children:"Race"}),t.jsx("div",{style:{display:"flex",gap:"1rem",flexWrap:"wrap",justifyContent:"center"},children:x.map(g=>t.jsx(ee,{checked:a===g.id,onChange:()=>{d(g.id),u(null)},label:t.jsxs("span",{children:[g.icon," ",g.name]}),value:g.id,name:"race",borderColor:n==="alliance"?"#3b82f6":"#ef4444",backgroundColor:n==="alliance"?"#1e293b":"#450a0a"},g.id))})]}),a&&n&&t.jsxs(_,{children:[t.jsx(H,{children:"Classe"}),t.jsx("div",{style:{display:"flex",gap:"1rem",flexWrap:"wrap",justifyContent:"center"},children:p.map(g=>t.jsx(ee,{checked:c===g.id,onChange:()=>u(g.id),label:t.jsxs("span",{style:{color:g.color},children:[g.icon," ",g.name]}),value:g.id,name:"class",borderColor:g.color,backgroundColor:"#222",disabled:!1},g.id))})]}),c&&t.jsxs(_,{children:[t.jsx(H,{children:"Résumé de la classe"}),t.jsx("div",{style:{marginBottom:"1rem",color:p.find(g=>g.id===c)?.color,textAlign:"center"},children:p.find(g=>g.id===c)?.description}),h&&t.jsxs(Vs,{children:[t.jsx(Xs,{children:"📊 Statistiques de départ"}),t.jsxs(Ys,{children:[t.jsxs(q,{children:[t.jsx(I,{children:"❤️ Points de vie"}),t.jsx(T,{children:h.health})]}),t.jsxs(q,{children:[t.jsx(I,{children:h.energyName}),t.jsx(T,{children:h.energy})]}),t.jsxs(q,{children:[t.jsx(I,{children:"💪 Force"}),t.jsx(T,{children:h.strength})]}),t.jsxs(q,{children:[t.jsx(I,{children:"🏃 Agilité"}),t.jsx(T,{children:h.agility})]}),t.jsxs(q,{children:[t.jsx(I,{children:"🧠 Intelligence"}),t.jsx(T,{children:h.intellect})]}),t.jsxs(q,{children:[t.jsx(I,{children:"🛡️ Endurance"}),t.jsx(T,{children:h.stamina})]})]})]})]}),t.jsxs(Ks,{children:[i&&t.jsx(A,{$variant:"secondary",onClick:i,children:"Annuler"}),t.jsx(A,{onClick:m,disabled:!(s.trim().length>=3&&n&&a&&c),children:"✓ Créer le personnage"})]})]})})}const er=o.div`
  margin-top: ${({theme:e})=>e.spacing.xl};
  max-width: 1200px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({theme:e})=>e.spacing.md};
  height: 80vh;
`,De=o.h1`
  color: ${({theme:e})=>e.colors.primary.gold};
  font-size: ${({theme:e})=>e.fontSizes["3xl"]};
  text-shadow: ${({theme:e})=>e.shadows.glow.gold};
  margin-bottom: 0;
`,Ee=o.div`
  color: ${({theme:e})=>e.colors.text.secondary};
  font-size: ${({theme:e})=>e.fontSizes.base};
  line-height: 1.6;
  text-align: center;
`;o.section`
  padding: ${({theme:e})=>e.spacing["3xl"]} 0;
`;o.div`
  display: grid;
  grid-template-columns: repeat(${({columns:e=3})=>e}, 1fr);
  gap: ${({gap:e,theme:i})=>e||i.spacing.lg};

  @media (max-width: ${({theme:e})=>e.breakpoints.lg}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${({theme:e})=>e.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;const k=o.div`
  display: flex;
  flex-direction: ${({direction:e="row"})=>e};
  align-items: ${({align:e="center"})=>e};
  justify-content: ${({justify:e="flex-start"})=>e};
  gap: ${({gap:e,theme:i})=>e||i.spacing.md};
  flex-wrap: ${({wrap:e})=>e?"wrap":"nowrap"};
  width: 100%;
`,b=o.div`
  width: 100%;
  background: ${({variant:e})=>{switch(e){case"frost":return"linear-gradient(135deg, rgba(74, 144, 226, 0.2), rgba(30, 58, 95, 0.9))";case"fire":return"linear-gradient(135deg, rgba(239, 68, 68, 0.2), rgba(92, 0, 0, 0.9))";case"arcane":return"linear-gradient(135deg, rgba(139, 92, 246, 0.2), rgba(30, 30, 70, 0.9))";default:return"linear-gradient(135deg, rgba(30, 58, 95, 0.8), rgba(26, 31, 46, 0.9))"}}};
  border: ${({bordered:e,theme:i})=>e?`${i.borders.medium} solid ${i.colors.primary.gold}`:"none"};
  border-radius: ${({theme:e})=>e.borderRadius.lg};
  padding: ${({theme:e})=>e.spacing.md};
  box-shadow: ${({theme:e})=>e.shadows.xl};
  backdrop-filter: blur(10px);
`,Se=o.div`
  max-height: 50vh;
  overflow-y: auto;
`,U=o.div`
  margin-bottom: ${({theme:e})=>e.spacing.md};
  padding-bottom: ${({theme:e})=>e.spacing.sm};
  border-bottom: ${({theme:e})=>e.borders.thin} solid
    ${({theme:e})=>e.colors.primary.gold};
`,O=o.h3`
  font-family: ${({theme:e})=>e.fonts.primary};
  font-size: ${({theme:e})=>e.fontSizes.lg};
  color: ${({theme:e})=>e.colors.primary.gold};
  margin: 0;
`;o.p`
  font-family: ${({theme:e})=>e.fonts.secondary};
  font-size: ${({theme:e})=>e.fontSizes.sm};
  color: ${({theme:e})=>e.colors.winter.iceBlue};
  margin: ${({theme:e})=>e.spacing.xs} 0 0 0;
  text-transform: uppercase;
  letter-spacing: 1px;
`;o.div`
  color: ${({theme:e})=>e.colors.neutral.silver};
  line-height: 1.8;
`;o.div`
  margin-top: ${({theme:e})=>e.spacing.lg};
  padding-top: ${({theme:e})=>e.spacing.md};
  border-top: ${({theme:e})=>e.borders.thin} solid
    ${({theme:e})=>e.colors.neutral.gray};
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: ${({theme:e})=>e.spacing.md};
  flex-wrap: wrap;
`;const Ce=o.div`
  color: ${({theme:e})=>e.colors.text.secondary};
  font-style: italic;
  font-size: ${({theme:e})=>e.fontSizes.sm};
  text-align: center;
`;o.div`
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
`;o.div`
  // max-width: 900px;
  width: 100%;
  position: relative;
  z-index: 1;
`;o.div`
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
`;o.div`
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
`;o.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  pointer-events: none;
  z-index: 100;
  width: 100%;
  height: 100%;
  overflow: visible;
`;o.div`
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
`;o.div`
  font-size: ${({theme:e})=>e.fontSizes["6xl"]};
  margin-bottom: ${({theme:e})=>e.spacing.md};
  filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.5));
`;o.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: ${({theme:e})=>e.spacing.md};
`;o.h2`
  font-family: ${({theme:e})=>e.fonts.display};
  font-size: ${({theme:e})=>e.fontSizes["2xl"]};
  color: ${({theme:e})=>e.colors.primary.gold};
  margin-bottom: ${({theme:e})=>e.spacing.sm};
  text-shadow: 
    0 0 10px rgba(255, 215, 0, 0.5),
    2px 2px 4px rgba(0, 0, 0, 0.8);
  letter-spacing: 1px;
`;const we=o.div`
  width: 100%;
  height: 32px;
  background: rgba(0, 0, 0, 0.6);
  border-radius: ${({theme:e})=>e.borderRadius.md};
  overflow: hidden;
  position: relative;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.5);

  // display: flex;
  // justify-content: flex-start;

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
`,Ue=o.div`
  height: 100%;
  width: ${({$percentage:e})=>e}%;
  background: ${({$reverse:e})=>e?"linear-gradient(90deg, #f87171 0%, #ef4444 50%, #dc2626 100%)":"linear-gradient(90deg,#dc2626 0%,#ef4444 50%,#f87171 100%)"};
  box-shadow: ${e=>e?"0 0 10px rgba(255, 255, 255, 0.3),inset 0 1px 0 rgba(239, 68, 68, 0.5)":"0 0 10px rgba(239, 68, 68, 0.5),inset 0 1px 0 rgba(255, 255, 255, 0.3)"};
  position: absolute;
  transition: width 0.5s ease-out;
  right: ${({$reverse:e})=>e?0:"auto"};
  left : ${({$reverse:e})=>e?"auto":0};

`,be=o.div`
position: absolute;
color: red;
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
`;o(we)`
height: 24px;
`;o.div`
height: 100 %;
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

`;o(be)`
font - size: ${({theme:e})=>e.fontSizes.xs};
`;o.div`
margin - bottom: ${({theme:e})=>e.spacing.xl};
background: linear - gradient(
  135deg,
  rgba(0, 0, 0, 0.4) 0 %,
  rgba(0, 0, 0, 0.2) 100 %
  );
border: 2px solid rgba(255, 215, 0, 0.3);
border - radius: ${({theme:e})=>e.borderRadius.lg};
padding: ${({theme:e})=>e.spacing.lg};
backdrop - filter: blur(10px);
box - shadow:
0 8px 32px rgba(0, 0, 0, 0.5),
  inset 0 1px 0 rgba(255, 255, 255, 0.1);
`;o.h3`
font - family: ${({theme:e})=>e.fonts.display};
color: ${({theme:e})=>e.colors.primary.gold};
margin - bottom: ${({theme:e})=>e.spacing.md};
font - size: ${({theme:e})=>e.fontSizes.xl};
text - shadow: 0 0 10px rgba(255, 215, 0, 0.5);
letter - spacing: 1px;
text - transform: uppercase;
display: flex;
align - items: center;
gap: ${({theme:e})=>e.spacing.sm};

  &:: before,
  &::after {
  content: '';
  flex: 1;
  height: 2px;
  background: linear - gradient(
    90deg,
    transparent,
    ${({theme:e})=>e.colors.primary.gold},
transparent
    );
  }
`;o.button`
width: 64px;
height: 64px;
border - radius: ${({theme:e})=>e.borderRadius.md};
border: 2px solid;
font - size: 2rem;
display: flex;
align - items: center;
justify - content: center;
cursor: ${({$disabled:e})=>e?"not-allowed":"pointer"};
opacity: ${({$disabled:e})=>e?.4:1};
position: relative;
transition: all 0.2s ease;
padding: 0;
overflow: hidden;

background: ${({$variant:e})=>{switch(e){case"primary":return"linear-gradient(135deg, rgba(255, 215, 0, 0.2) 0%, rgba(184, 134, 11, 0.3) 100%)";case"secondary":return"linear-gradient(135deg, rgba(59, 130, 246, 0.2) 0%, rgba(37, 99, 235, 0.3) 100%)";case"danger":return"linear-gradient(135deg, rgba(239, 68, 68, 0.2) 0%, rgba(220, 38, 38, 0.3) 100%)";default:return"linear-gradient(135deg, rgba(100, 116, 139, 0.2) 0%, rgba(71, 85, 105, 0.3) 100%)"}}};

border - color: ${({$variant:e,theme:i})=>{switch(e){case"primary":return i.colors.primary.gold;case"secondary":return i.colors.alliance.blue;case"danger":return i.colors.horde.red;default:return i.colors.neutral.silver}}};

box - shadow:
0 4px 8px rgba(0, 0, 0, 0.3),
  inset 0 1px 0 rgba(255, 255, 255, 0.1);
  

  
  &: active: not(: disabled) {
  transform: translateY(-2px);
}
`;const te=o.img`
width: 100 %;
height: 100 %;
object - fit: cover;
border - radius: ${({theme:e})=>e.borderRadius.sm};
`,tr=o.span`
font - size: 2rem;
display: flex;
align - items: center;
justify - content: center;
`,ir=o.div`
background: linear - gradient(
  135deg,
  rgba(0, 0, 0, 0.6) 0 %,
  rgba(0, 0, 0, 0.4) 100 %
  );
border-radius: ${({theme:e})=>e.borderRadius.lg};
padding: ${({theme:e})=>e.spacing.lg} 0;
max-height: 250px;
width: 100%;
backdrop-filter: blur(10px);

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
`,jt=o.h3`
  font-family: ${({theme:e})=>e.fonts.primary};
  font-size: ${({theme:e})=>e.fontSizes.lg};
  color: ${({theme:e})=>e.colors.primary.gold};
`,sr=o.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  height: 100%;
`,kt=o.div`
padding: ${({theme:e})=>e.spacing.sm} ${({theme:e})=>e.spacing.md};
margin - bottom: ${({theme:e})=>e.spacing.sm};
border - radius: ${({theme:e})=>e.borderRadius.sm};
font - size: ${({theme:e})=>e.fontSizes.sm};
border - left: 3px solid;
background: ${({$type:e})=>{switch(e){case"critical":return"rgba(239, 68, 68, 0.25)";case"damage":return"rgba(251, 191, 36, 0.25)";case"heal":return"rgba(34, 197, 94, 0.25)";case"victory":return"rgba(34, 197, 94, 0.35)";case"defeat":return"rgba(239, 68, 68, 0.35)";default:return"rgba(100, 116, 139, 0.15)"}}};
border - left - color: ${({$type:e})=>{switch(e){case"critical":return"#ef4444";case"damage":return"#fbbf24";case"heal":return"#22c55e";case"victory":return"#22c55e";case"defeat":return"#ef4444";default:return"#64748b"}}};
color: ${({theme:e})=>e.colors.neutral.white};
box - shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
animation: slideIn 0.3s ease - out;

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
`;o.div`
background: linear-gradient(
  135deg,
  rgba(34, 197, 94, 0.2) 0 %,
  rgba(22, 163, 74, 0.3) 100 %
  );
border: 3px solid ${({theme:e})=>e.colors.status.success};
border-radius: ${({theme:e})=>e.borderRadius.lg};
padding: ${({theme:e})=>e.spacing.xl};
text - align: center;
backdrop - filter: blur(10px);
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
  top: -50 %;
  left: -50 %;
  width: 200 %;
  height: 200 %;
  background: radial - gradient(
    circle,
    rgba(34, 197, 94, 0.1) 0 %,
    transparent 70 %
    );
  animation: rotate 20s linear infinite;
}

@keyframes rotate {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
}
`;o.h2`
font - family: ${({theme:e})=>e.fonts.display};
font - size: ${({theme:e})=>e.fontSizes["4xl"]};
color: ${({theme:e})=>e.colors.status.success};
margin - bottom: ${({theme:e})=>e.spacing.lg};
text - shadow:
0 0 20px rgba(34, 197, 94, 0.8),
  0 0 40px rgba(34, 197, 94, 0.5),
    2px 2px 4px rgba(0, 0, 0, 0.8);
animation: glow 2s ease -in -out infinite;
position: relative;
z - index: 1;

@keyframes glow {
  0 %, 100 % { text- shadow: 0 0 20px rgba(34, 197, 94, 0.8), 2px 2px 4px rgba(0, 0, 0, 0.8);
}
50 % { text- shadow: 0 0 30px rgba(34, 197, 94, 1), 0 0 50px rgba(34, 197, 94, 0.7), 2px 2px 4px rgba(0, 0, 0, 0.8); }
  }
`;o.div`
display: flex;
flex - direction: column;
gap: ${({theme:e})=>e.spacing.md};
margin - bottom: ${({theme:e})=>e.spacing.xl};
position: relative;
z - index: 1;
`;const rr=o.div`
font - size: ${({theme:e})=>e.fontSizes.xl};
color: ${({theme:e})=>e.colors.primary.gold};
font - weight: ${({theme:e})=>e.fontWeights.bold};
text - shadow:
0 0 10px rgba(255, 215, 0, 0.5),
  2px 2px 4px rgba(0, 0, 0, 0.8);
padding: ${({theme:e})=>e.spacing.sm};
background: rgba(0, 0, 0, 0.3);
border - radius: ${({theme:e})=>e.borderRadius.md};
border: 1px solid rgba(255, 215, 0, 0.3);
animation: slideInUp 0.5s ease - out backwards;

  &: nth - child(1) { animation - delay: 0.1s; }
  &: nth - child(2) { animation - delay: 0.2s; }
  &: nth - child(3) { animation - delay: 0.3s; }
  &: nth - child(4) { animation - delay: 0.4s; }

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
`;o(rr)`
display: flex;
flex - direction: row;
align - items: center;
justify - content: center;
gap: ${({theme:e})=>e.spacing.sm};
`;const ce=()=>{const e=f.useContext(yt);if(!e)throw new Error("useBattle doit être utilisé dans un BattleProvider");return e},lr=({size:e=48})=>t.jsxs("svg",{width:e,height:e,viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("ellipse",{cx:"24",cy:"24",rx:"12",ry:"14",fill:"#FBE9D0",stroke:"#A67C52",strokeWidth:"2"}),t.jsx("ellipse",{cx:"24",cy:"26",rx:"10",ry:"12",fill:"#EAD2B7",opacity:"0.5"}),t.jsx("path",{d:"M14 16 Q24 4 34 16 Q32 10 24 12 Q16 10 14 16",fill:"#6B4F1D",stroke:"#4B2E09",strokeWidth:"1"}),t.jsx("rect",{x:"18",y:"19",width:"4",height:"1",rx:"0.5",fill:"#4B2E09"}),t.jsx("rect",{x:"26",y:"19",width:"4",height:"1",rx:"0.5",fill:"#4B2E09"}),t.jsx("ellipse",{cx:"20",cy:"24",rx:"1.5",ry:"2",fill:"#222"}),t.jsx("ellipse",{cx:"28",cy:"24",rx:"1.5",ry:"2",fill:"#222"}),t.jsx("ellipse",{cx:"20",cy:"25",rx:"0.5",ry:"0.7",fill:"#fff"}),t.jsx("ellipse",{cx:"28",cy:"25",rx:"0.5",ry:"0.7",fill:"#fff"}),t.jsx("rect",{x:"23",y:"26",width:"2",height:"3",rx:"1",fill:"#EAD2B7"}),t.jsx("path",{d:"M21 32 Q24 35 27 32",stroke:"#A67C52",strokeWidth:"1.5",fill:"none"}),t.jsx("ellipse",{cx:"24",cy:"36",rx:"2",ry:"1",fill:"#EAD2B7",opacity:"0.7"})]}),nr=({size:e=48})=>t.jsxs("svg",{width:e,height:e,viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("ellipse",{cx:"24",cy:"24",rx:"12",ry:"14",fill:"#FBE9D0",stroke:"#A67C52",strokeWidth:"2"}),t.jsx("ellipse",{cx:"24",cy:"26",rx:"10",ry:"12",fill:"#EAD2B7",opacity:"0.5"}),t.jsx("path",{d:"M12 16 Q24 2 36 16 Q34 10 24 12 Q14 10 12 16",fill:"#C19A6B",stroke:"#A67C52",strokeWidth:"1"}),t.jsx("ellipse",{cx:"24",cy:"16",rx:"8",ry:"3",fill:"#C19A6B"}),t.jsx("rect",{x:"18",y:"19",width:"4",height:"1",rx:"0.5",fill:"#A67C52"}),t.jsx("rect",{x:"26",y:"19",width:"4",height:"1",rx:"0.5",fill:"#A67C52"}),t.jsx("ellipse",{cx:"20",cy:"24",rx:"1.5",ry:"2",fill:"#222"}),t.jsx("ellipse",{cx:"28",cy:"24",rx:"1.5",ry:"2",fill:"#222"}),t.jsx("ellipse",{cx:"20",cy:"25",rx:"0.5",ry:"0.7",fill:"#fff"}),t.jsx("ellipse",{cx:"28",cy:"25",rx:"0.5",ry:"0.7",fill:"#fff"}),t.jsx("rect",{x:"23",y:"26",width:"2",height:"3",rx:"1",fill:"#EAD2B7"}),t.jsx("path",{d:"M21 32 Q24 35 27 32",stroke:"#A67C52",strokeWidth:"1.5",fill:"none"}),t.jsx("ellipse",{cx:"24",cy:"36",rx:"2",ry:"1",fill:"#EAD2B7",opacity:"0.7"})]}),ar=({size:e=48})=>t.jsxs("svg",{width:e,height:e,viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("ellipse",{cx:"24",cy:"24",rx:"12",ry:"13",fill:"#E7C9A9",stroke:"#A67C52",strokeWidth:"2"}),t.jsx("ellipse",{cx:"24",cy:"26",rx:"10",ry:"11",fill:"#D1B08A",opacity:"0.5"}),t.jsx("path",{d:"M14 16 Q24 6 34 16 Q32 12 24 14 Q16 12 14 16",fill:"#7C4A03",stroke:"#4B2E09",strokeWidth:"1"}),t.jsx("rect",{x:"16",y:"19",width:"5",height:"2",rx:"1",fill:"#7C4A03"}),t.jsx("rect",{x:"27",y:"19",width:"5",height:"2",rx:"1",fill:"#7C4A03"}),t.jsx("ellipse",{cx:"20",cy:"24",rx:"1.2",ry:"1.7",fill:"#222"}),t.jsx("ellipse",{cx:"28",cy:"24",rx:"1.2",ry:"1.7",fill:"#222"}),t.jsx("ellipse",{cx:"20",cy:"25",rx:"0.4",ry:"0.5",fill:"#fff"}),t.jsx("ellipse",{cx:"28",cy:"25",rx:"0.4",ry:"0.5",fill:"#fff"}),t.jsx("rect",{x:"22",y:"26",width:"4",height:"3",rx:"2",fill:"#D1B08A"}),t.jsx("path",{d:"M19 32 Q24 30 29 32",stroke:"#7C4A03",strokeWidth:"2",fill:"none"}),t.jsx("ellipse",{cx:"24",cy:"36",rx:"7",ry:"4",fill:"#7C4A03",stroke:"#4B2E09",strokeWidth:"1"})]}),or=({size:e=48})=>t.jsxs("svg",{width:e,height:e,viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("ellipse",{cx:"24",cy:"24",rx:"12",ry:"13",fill:"#E7C9A9",stroke:"#A67C52",strokeWidth:"2"}),t.jsx("ellipse",{cx:"24",cy:"26",rx:"10",ry:"11",fill:"#D1B08A",opacity:"0.5"}),t.jsx("path",{d:"M12 16 Q24 4 36 16 Q34 12 24 14 Q14 12 12 16",fill:"#A67C52",stroke:"#7C4A03",strokeWidth:"1"}),t.jsx("rect",{x:"16",y:"19",width:"5",height:"2",rx:"1",fill:"#7C4A03"}),t.jsx("rect",{x:"27",y:"19",width:"5",height:"2",rx:"1",fill:"#7C4A03"}),t.jsx("ellipse",{cx:"20",cy:"24",rx:"1.2",ry:"1.7",fill:"#222"}),t.jsx("ellipse",{cx:"28",cy:"24",rx:"1.2",ry:"1.7",fill:"#222"}),t.jsx("ellipse",{cx:"20",cy:"25",rx:"0.4",ry:"0.5",fill:"#fff"}),t.jsx("ellipse",{cx:"28",cy:"25",rx:"0.4",ry:"0.5",fill:"#fff"}),t.jsx("rect",{x:"22",y:"26",width:"4",height:"3",rx:"2",fill:"#D1B08A"}),t.jsx("path",{d:"M21 32 Q24 35 27 32",stroke:"#A67C52",strokeWidth:"1.5",fill:"none"}),t.jsx("ellipse",{cx:"18",cy:"38",rx:"2",ry:"1.5",fill:"#A67C52"}),t.jsx("ellipse",{cx:"30",cy:"38",rx:"2",ry:"1.5",fill:"#A67C52"})]}),cr=({size:e=48})=>t.jsxs("svg",{width:e,height:e,viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("ellipse",{cx:"24",cy:"24",rx:"12",ry:"15",fill:"#B6D1C2",stroke:"#3A6351",strokeWidth:"2"}),t.jsx("ellipse",{cx:"24",cy:"26",rx:"10",ry:"13",fill:"#8DB7A2",opacity:"0.5"}),t.jsx("path",{d:"M14 16 Q24 2 34 16 Q32 10 24 12 Q16 10 14 16",fill:"#7C3AED",stroke:"#4B2E09",strokeWidth:"1"}),t.jsx("rect",{x:"14",y:"18",width:"8",height:"1",rx:"0.5",fill:"#3A6351"}),t.jsx("rect",{x:"26",y:"18",width:"8",height:"1",rx:"0.5",fill:"#3A6351"}),t.jsx("ellipse",{cx:"20",cy:"24",rx:"1.5",ry:"2",fill:"#A7F3D0"}),t.jsx("ellipse",{cx:"28",cy:"24",rx:"1.5",ry:"2",fill:"#A7F3D0"}),t.jsx("rect",{x:"23",y:"26",width:"2",height:"3",rx:"1",fill:"#8DB7A2"}),t.jsx("path",{d:"M21 32 Q24 33 27 32",stroke:"#3A6351",strokeWidth:"1.5",fill:"none"}),t.jsx("ellipse",{cx:"8",cy:"20",rx:"3",ry:"7",fill:"#B6D1C2",stroke:"#3A6351",strokeWidth:"1"}),t.jsx("ellipse",{cx:"40",cy:"20",rx:"3",ry:"7",fill:"#B6D1C2",stroke:"#3A6351",strokeWidth:"1"})]}),dr=({size:e=48})=>t.jsxs("svg",{width:e,height:e,viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("ellipse",{cx:"24",cy:"24",rx:"12",ry:"15",fill:"#B6D1C2",stroke:"#3A6351",strokeWidth:"2"}),t.jsx("ellipse",{cx:"24",cy:"26",rx:"10",ry:"13",fill:"#8DB7A2",opacity:"0.5"}),t.jsx("path",{d:"M12 16 Q24 2 36 16 Q34 10 24 12 Q14 10 12 16",fill:"#A78BFA",stroke:"#7C3AED",strokeWidth:"1"}),t.jsx("rect",{x:"14",y:"18",width:"8",height:"1",rx:"0.5",fill:"#3A6351"}),t.jsx("rect",{x:"26",y:"18",width:"8",height:"1",rx:"0.5",fill:"#3A6351"}),t.jsx("ellipse",{cx:"20",cy:"24",rx:"1.5",ry:"2",fill:"#A7F3D0"}),t.jsx("ellipse",{cx:"28",cy:"24",rx:"1.5",ry:"2",fill:"#A7F3D0"}),t.jsx("rect",{x:"23",y:"26",width:"2",height:"3",rx:"1",fill:"#8DB7A2"}),t.jsx("path",{d:"M21 32 Q24 35 27 32",stroke:"#3A6351",strokeWidth:"1.5",fill:"none"}),t.jsx("ellipse",{cx:"8",cy:"20",rx:"3",ry:"7",fill:"#B6D1C2",stroke:"#3A6351",strokeWidth:"1"}),t.jsx("ellipse",{cx:"40",cy:"20",rx:"3",ry:"7",fill:"#B6D1C2",stroke:"#3A6351",strokeWidth:"1"})]}),xr=({size:e=48})=>t.jsxs("svg",{width:e,height:e,viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("ellipse",{cx:"24",cy:"24",rx:"10",ry:"11",fill:"#F3E1C7",stroke:"#BCA37F",strokeWidth:"2"}),t.jsx("ellipse",{cx:"24",cy:"26",rx:"8",ry:"9",fill:"#E2CFA3",opacity:"0.5"}),t.jsx("path",{d:"M14 16 Q24 6 34 16 Q32 12 24 14 Q16 12 14 16",fill:"#EAB308",stroke:"#B45309",strokeWidth:"1"}),t.jsx("rect",{x:"16",y:"19",width:"4",height:"1",rx:"0.5",fill:"#B45309"}),t.jsx("rect",{x:"28",y:"19",width:"4",height:"1",rx:"0.5",fill:"#B45309"}),t.jsx("ellipse",{cx:"20",cy:"24",rx:"1.2",ry:"1.2",fill:"#222"}),t.jsx("ellipse",{cx:"28",cy:"24",rx:"1.2",ry:"1.2",fill:"#222"}),t.jsx("ellipse",{cx:"20",cy:"25",rx:"0.4",ry:"0.4",fill:"#fff"}),t.jsx("ellipse",{cx:"28",cy:"25",rx:"0.4",ry:"0.4",fill:"#fff"}),t.jsx("ellipse",{cx:"24",cy:"27",rx:"1.5",ry:"1",fill:"#E2CFA3"}),t.jsx("path",{d:"M21 32 Q24 34 27 32",stroke:"#BCA37F",strokeWidth:"1.5",fill:"none"}),t.jsx("ellipse",{cx:"12",cy:"24",rx:"2",ry:"3",fill:"#F3E1C7",stroke:"#BCA37F",strokeWidth:"1"}),t.jsx("ellipse",{cx:"36",cy:"24",rx:"2",ry:"3",fill:"#F3E1C7",stroke:"#BCA37F",strokeWidth:"1"})]}),hr=({size:e=48})=>t.jsxs("svg",{width:e,height:e,viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("ellipse",{cx:"24",cy:"24",rx:"10",ry:"11",fill:"#F3E1C7",stroke:"#BCA37F",strokeWidth:"2"}),t.jsx("ellipse",{cx:"24",cy:"26",rx:"8",ry:"9",fill:"#E2CFA3",opacity:"0.5"}),t.jsx("path",{d:"M12 16 Q24 6 36 16 Q34 12 24 14 Q14 12 12 16",fill:"#F472B6",stroke:"#BE185D",strokeWidth:"1"}),t.jsx("rect",{x:"16",y:"19",width:"4",height:"1",rx:"0.5",fill:"#BE185D"}),t.jsx("rect",{x:"28",y:"19",width:"4",height:"1",rx:"0.5",fill:"#BE185D"}),t.jsx("ellipse",{cx:"20",cy:"24",rx:"1.2",ry:"1.2",fill:"#222"}),t.jsx("ellipse",{cx:"28",cy:"24",rx:"1.2",ry:"1.2",fill:"#222"}),t.jsx("ellipse",{cx:"20",cy:"25",rx:"0.4",ry:"0.4",fill:"#fff"}),t.jsx("ellipse",{cx:"28",cy:"25",rx:"0.4",ry:"0.4",fill:"#fff"}),t.jsx("ellipse",{cx:"24",cy:"27",rx:"1.5",ry:"1",fill:"#E2CFA3"}),t.jsx("path",{d:"M21 32 Q24 34 27 32",stroke:"#BCA37F",strokeWidth:"1.5",fill:"none"}),t.jsx("ellipse",{cx:"12",cy:"24",rx:"2",ry:"3",fill:"#F3E1C7",stroke:"#BCA37F",strokeWidth:"1"}),t.jsx("ellipse",{cx:"36",cy:"24",rx:"2",ry:"3",fill:"#F3E1C7",stroke:"#BCA37F",strokeWidth:"1"})]}),pr=({size:e=48})=>t.jsxs("svg",{width:e,height:e,viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("ellipse",{cx:"24",cy:"24",rx:"12",ry:"14",fill:"#A7C7E7",stroke:"#3B82F6",strokeWidth:"2"}),t.jsx("ellipse",{cx:"24",cy:"26",rx:"10",ry:"12",fill:"#60A5FA",opacity:"0.5"}),t.jsx("path",{d:"M16 10 Q12 2 20 12",stroke:"#64748B",strokeWidth:"2",fill:"none"}),t.jsx("path",{d:"M32 10 Q36 2 28 12",stroke:"#64748B",strokeWidth:"2",fill:"none"}),t.jsx("path",{d:"M14 16 Q24 6 34 16 Q32 12 24 14 Q16 12 14 16",fill:"#F3F4F6",stroke:"#64748B",strokeWidth:"1"}),t.jsx("rect",{x:"18",y:"19",width:"4",height:"1",rx:"0.5",fill:"#64748B"}),t.jsx("rect",{x:"26",y:"19",width:"4",height:"1",rx:"0.5",fill:"#64748B"}),t.jsx("ellipse",{cx:"20",cy:"24",rx:"1.5",ry:"2",fill:"#FBBF24"}),t.jsx("ellipse",{cx:"28",cy:"24",rx:"1.5",ry:"2",fill:"#FBBF24"}),t.jsx("rect",{x:"23",y:"26",width:"2",height:"3",rx:"1",fill:"#60A5FA"}),t.jsx("path",{d:"M21 32 Q24 33 27 32",stroke:"#64748B",strokeWidth:"1.5",fill:"none"}),t.jsx("rect",{x:"22",y:"36",width:"4",height:"2",rx:"1",fill:"#60A5FA"})]}),fr=({size:e=48})=>t.jsxs("svg",{width:e,height:e,viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("ellipse",{cx:"24",cy:"24",rx:"12",ry:"14",fill:"#A7C7E7",stroke:"#3B82F6",strokeWidth:"2"}),t.jsx("ellipse",{cx:"24",cy:"26",rx:"10",ry:"12",fill:"#60A5FA",opacity:"0.5"}),t.jsx("path",{d:"M16 10 Q12 2 20 12",stroke:"#64748B",strokeWidth:"2",fill:"none"}),t.jsx("path",{d:"M32 10 Q36 2 28 12",stroke:"#64748B",strokeWidth:"2",fill:"none"}),t.jsx("path",{d:"M12 16 Q24 6 36 16 Q34 12 24 14 Q14 12 12 16",fill:"#F3F4F6",stroke:"#64748B",strokeWidth:"1"}),t.jsx("rect",{x:"18",y:"19",width:"4",height:"1",rx:"0.5",fill:"#64748B"}),t.jsx("rect",{x:"26",y:"19",width:"4",height:"1",rx:"0.5",fill:"#64748B"}),t.jsx("ellipse",{cx:"20",cy:"24",rx:"1.5",ry:"2",fill:"#FBBF24"}),t.jsx("ellipse",{cx:"28",cy:"24",rx:"1.5",ry:"2",fill:"#FBBF24"}),t.jsx("rect",{x:"23",y:"26",width:"2",height:"3",rx:"1",fill:"#60A5FA"}),t.jsx("path",{d:"M21 32 Q24 35 27 32",stroke:"#64748B",strokeWidth:"1.5",fill:"none"}),t.jsx("ellipse",{cx:"24",cy:"36",rx:"2",ry:"1",fill:"#60A5FA"})]}),ur=({size:e=48})=>t.jsxs("svg",{width:e,height:e,viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("ellipse",{cx:"24",cy:"24",rx:"13",ry:"14",fill:"#A3A3A3",stroke:"#222",strokeWidth:"2"}),t.jsx("ellipse",{cx:"24",cy:"26",rx:"11",ry:"12",fill:"#6B7280",opacity:"0.5"}),t.jsx("ellipse",{cx:"24",cy:"32",rx:"6",ry:"3",fill:"#F3F4F6",stroke:"#222",strokeWidth:"1"}),t.jsx("ellipse",{cx:"24",cy:"33",rx:"2",ry:"1",fill:"#222"}),t.jsx("ellipse",{cx:"10",cy:"14",rx:"3",ry:"6",fill:"#A3A3A3",stroke:"#222",strokeWidth:"1"}),t.jsx("ellipse",{cx:"38",cy:"14",rx:"3",ry:"6",fill:"#A3A3A3",stroke:"#222",strokeWidth:"1"}),t.jsx("ellipse",{cx:"20",cy:"24",rx:"1.5",ry:"2",fill:"#FBBF24"}),t.jsx("ellipse",{cx:"28",cy:"24",rx:"1.5",ry:"2",fill:"#FBBF24"}),t.jsx("rect",{x:"21",y:"35",width:"2",height:"2",rx:"1",fill:"#fff"}),t.jsx("rect",{x:"25",y:"35",width:"2",height:"2",rx:"1",fill:"#fff"}),t.jsx("rect",{x:"18",y:"19",width:"4",height:"1",rx:"0.5",fill:"#222"}),t.jsx("rect",{x:"26",y:"19",width:"4",height:"1",rx:"0.5",fill:"#222"})]}),gr=({size:e=48})=>t.jsxs("svg",{width:e,height:e,viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("ellipse",{cx:"24",cy:"24",rx:"13",ry:"14",fill:"#A3A3A3",stroke:"#222",strokeWidth:"2"}),t.jsx("ellipse",{cx:"24",cy:"26",rx:"11",ry:"12",fill:"#6B7280",opacity:"0.5"}),t.jsx("ellipse",{cx:"24",cy:"32",rx:"6",ry:"3",fill:"#F3F4F6",stroke:"#222",strokeWidth:"1"}),t.jsx("ellipse",{cx:"24",cy:"33",rx:"2",ry:"1",fill:"#222"}),t.jsx("ellipse",{cx:"10",cy:"14",rx:"3",ry:"6",fill:"#A3A3A3",stroke:"#222",strokeWidth:"1"}),t.jsx("ellipse",{cx:"38",cy:"14",rx:"3",ry:"6",fill:"#A3A3A3",stroke:"#222",strokeWidth:"1"}),t.jsx("ellipse",{cx:"20",cy:"24",rx:"1.5",ry:"2",fill:"#FBBF24"}),t.jsx("ellipse",{cx:"28",cy:"24",rx:"1.5",ry:"2",fill:"#FBBF24"}),t.jsx("rect",{x:"21",y:"35",width:"2",height:"2",rx:"1",fill:"#fff"}),t.jsx("rect",{x:"25",y:"35",width:"2",height:"2",rx:"1",fill:"#fff"}),t.jsx("rect",{x:"18",y:"19",width:"4",height:"1",rx:"0.5",fill:"#6B7280"}),t.jsx("rect",{x:"26",y:"19",width:"4",height:"1",rx:"0.5",fill:"#6B7280"})]}),mr=({size:e=48})=>t.jsxs("svg",{width:e,height:e,viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("ellipse",{cx:"24",cy:"24",rx:"13",ry:"13",fill:"#F3F4F6",stroke:"#222",strokeWidth:"2"}),t.jsx("ellipse",{cx:"18",cy:"24",rx:"4",ry:"5",fill:"#222",opacity:"0.7"}),t.jsx("ellipse",{cx:"30",cy:"24",rx:"4",ry:"5",fill:"#222",opacity:"0.7"}),t.jsx("ellipse",{cx:"20",cy:"24",rx:"1.2",ry:"1.5",fill:"#22C55E"}),t.jsx("ellipse",{cx:"28",cy:"24",rx:"1.2",ry:"1.5",fill:"#22C55E"}),t.jsx("ellipse",{cx:"24",cy:"30",rx:"2",ry:"1.2",fill:"#222"}),t.jsx("path",{d:"M21 34 Q24 36 27 34",stroke:"#222",strokeWidth:"1.5",fill:"none"}),t.jsx("ellipse",{cx:"10",cy:"14",rx:"3",ry:"3",fill:"#222"}),t.jsx("ellipse",{cx:"38",cy:"14",rx:"3",ry:"3",fill:"#222"})]}),yr=({size:e=48})=>t.jsxs("svg",{width:e,height:e,viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("ellipse",{cx:"24",cy:"24",rx:"13",ry:"13",fill:"#F3F4F6",stroke:"#222",strokeWidth:"2"}),t.jsx("ellipse",{cx:"18",cy:"24",rx:"4",ry:"5",fill:"#222",opacity:"0.7"}),t.jsx("ellipse",{cx:"30",cy:"24",rx:"4",ry:"5",fill:"#222",opacity:"0.7"}),t.jsx("ellipse",{cx:"20",cy:"24",rx:"1.2",ry:"1.5",fill:"#22C55E"}),t.jsx("ellipse",{cx:"28",cy:"24",rx:"1.2",ry:"1.5",fill:"#22C55E"}),t.jsx("ellipse",{cx:"24",cy:"30",rx:"2",ry:"1.2",fill:"#222"}),t.jsx("path",{d:"M21 34 Q24 36 27 34",stroke:"#222",strokeWidth:"1.5",fill:"none"}),t.jsx("ellipse",{cx:"10",cy:"14",rx:"3",ry:"3",fill:"#222"}),t.jsx("ellipse",{cx:"38",cy:"14",rx:"3",ry:"3",fill:"#222"}),t.jsx("ellipse",{cx:"10",cy:"12",rx:"1.2",ry:"1.2",fill:"#F472B6"}),t.jsx("ellipse",{cx:"10",cy:"12",rx:"0.5",ry:"0.5",fill:"#BE185D"})]}),jr=({size:e=48})=>t.jsxs("svg",{width:e,height:e,viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("ellipse",{cx:"24",cy:"24",rx:"13",ry:"14",fill:"#65A30D",stroke:"#365314",strokeWidth:"2"}),t.jsx("ellipse",{cx:"24",cy:"26",rx:"11",ry:"12",fill:"#A3E635",opacity:"0.5"}),t.jsx("path",{d:"M14 16 Q24 6 34 16 Q32 12 24 14 Q16 12 14 16",fill:"#222",stroke:"#365314",strokeWidth:"1"}),t.jsx("rect",{x:"16",y:"19",width:"5",height:"2",rx:"1",fill:"#222"}),t.jsx("rect",{x:"27",y:"19",width:"5",height:"2",rx:"1",fill:"#222"}),t.jsx("ellipse",{cx:"20",cy:"24",rx:"1.5",ry:"2",fill:"#DC2626"}),t.jsx("ellipse",{cx:"28",cy:"24",rx:"1.5",ry:"2",fill:"#DC2626"}),t.jsx("rect",{x:"22",y:"26",width:"4",height:"3",rx:"2",fill:"#A3E635"}),t.jsx("path",{d:"M21 32 Q24 35 27 32",stroke:"#365314",strokeWidth:"1.5",fill:"none"}),t.jsx("rect",{x:"22",y:"34",width:"2",height:"2",rx:"1",fill:"#fff"}),t.jsx("rect",{x:"24",y:"34",width:"2",height:"2",rx:"1",fill:"#fff"}),t.jsx("ellipse",{cx:"24",cy:"36",rx:"3",ry:"2",fill:"#A3E635"})]}),kr=({size:e=48})=>t.jsxs("svg",{width:e,height:e,viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("ellipse",{cx:"24",cy:"24",rx:"13",ry:"14",fill:"#65A30D",stroke:"#365314",strokeWidth:"2"}),t.jsx("ellipse",{cx:"24",cy:"26",rx:"11",ry:"12",fill:"#A3E635",opacity:"0.5"}),t.jsx("path",{d:"M12 16 Q24 6 36 16 Q34 12 24 14 Q14 12 12 16",fill:"#222",stroke:"#365314",strokeWidth:"1"}),t.jsx("rect",{x:"16",y:"19",width:"5",height:"2",rx:"1",fill:"#222"}),t.jsx("rect",{x:"27",y:"19",width:"5",height:"2",rx:"1",fill:"#222"}),t.jsx("ellipse",{cx:"20",cy:"24",rx:"1.5",ry:"2",fill:"#DC2626"}),t.jsx("ellipse",{cx:"28",cy:"24",rx:"1.5",ry:"2",fill:"#DC2626"}),t.jsx("rect",{x:"22",y:"26",width:"4",height:"3",rx:"2",fill:"#A3E635"}),t.jsx("path",{d:"M21 32 Q24 35 27 32",stroke:"#365314",strokeWidth:"1.5",fill:"none"}),t.jsx("rect",{x:"22",y:"34",width:"2",height:"2",rx:"1",fill:"#fff"}),t.jsx("rect",{x:"24",y:"34",width:"2",height:"2",rx:"1",fill:"#fff"}),t.jsx("ellipse",{cx:"24",cy:"36",rx:"3",ry:"2",fill:"#A3E635"})]}),wr=({size:e=48})=>t.jsxs("svg",{width:e,height:e,viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("ellipse",{cx:"24",cy:"24",rx:"13",ry:"14",fill:"#D1D5DB",stroke:"#6B7280",strokeWidth:"2"}),t.jsx("ellipse",{cx:"24",cy:"26",rx:"11",ry:"12",fill:"#9CA3AF",opacity:"0.5"}),t.jsx("path",{d:"M14 16 Q24 6 34 16 Q32 12 24 14 Q16 12 14 16",fill:"#22C55E",stroke:"#6B7280",strokeWidth:"1"}),t.jsx("rect",{x:"16",y:"19",width:"5",height:"1",rx:"0.5",fill:"#6B7280"}),t.jsx("rect",{x:"27",y:"19",width:"5",height:"1",rx:"0.5",fill:"#6B7280"}),t.jsx("ellipse",{cx:"20",cy:"24",rx:"1.5",ry:"2",fill:"#FBBF24"}),t.jsx("ellipse",{cx:"28",cy:"24",rx:"1.5",ry:"2",fill:"#FBBF24"}),t.jsx("rect",{x:"23",y:"26",width:"2",height:"3",rx:"1",fill:"#9CA3AF"}),t.jsx("path",{d:"M21 32 Q24 30 27 32",stroke:"#6B7280",strokeWidth:"1.5",fill:"none"}),t.jsx("ellipse",{cx:"24",cy:"36",rx:"2",ry:"1",fill:"#9CA3AF"}),t.jsx("path",{d:"M18 28 Q20 30 22 28",stroke:"#DC2626",strokeWidth:"1",fill:"none"})]}),br=({size:e=48})=>t.jsxs("svg",{width:e,height:e,viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("ellipse",{cx:"24",cy:"24",rx:"13",ry:"14",fill:"#D1D5DB",stroke:"#6B7280",strokeWidth:"2"}),t.jsx("ellipse",{cx:"24",cy:"26",rx:"11",ry:"12",fill:"#9CA3AF",opacity:"0.5"}),t.jsx("path",{d:"M12 16 Q24 6 36 16 Q34 12 24 14 Q14 12 12 16",fill:"#A78BFA",stroke:"#6B7280",strokeWidth:"1"}),t.jsx("rect",{x:"16",y:"19",width:"5",height:"1",rx:"0.5",fill:"#6B7280"}),t.jsx("rect",{x:"27",y:"19",width:"5",height:"1",rx:"0.5",fill:"#6B7280"}),t.jsx("ellipse",{cx:"20",cy:"24",rx:"1.5",ry:"2",fill:"#FBBF24"}),t.jsx("ellipse",{cx:"28",cy:"24",rx:"1.5",ry:"2",fill:"#FBBF24"}),t.jsx("rect",{x:"23",y:"26",width:"2",height:"3",rx:"1",fill:"#9CA3AF"}),t.jsx("path",{d:"M21 32 Q24 30 27 32",stroke:"#6B7280",strokeWidth:"1.5",fill:"none"}),t.jsx("ellipse",{cx:"24",cy:"36",rx:"2",ry:"1",fill:"#9CA3AF"}),t.jsx("path",{d:"M26 28 Q28 30 30 28",stroke:"#DC2626",strokeWidth:"1",fill:"none"})]}),vr=({size:e=48})=>t.jsxs("svg",{width:e,height:e,viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("ellipse",{cx:"24",cy:"24",rx:"14",ry:"15",fill:"#A0522D",stroke:"#4B2E09",strokeWidth:"2"}),t.jsx("ellipse",{cx:"24",cy:"26",rx:"12",ry:"13",fill:"#C68642",opacity:"0.5"}),t.jsx("ellipse",{cx:"10",cy:"12",rx:"4",ry:"8",fill:"#F3F4F6",stroke:"#4B2E09",strokeWidth:"1"}),t.jsx("ellipse",{cx:"38",cy:"12",rx:"4",ry:"8",fill:"#F3F4F6",stroke:"#4B2E09",strokeWidth:"1"}),t.jsx("ellipse",{cx:"24",cy:"32",rx:"4",ry:"2",fill:"#4B2E09"}),t.jsx("ellipse",{cx:"20",cy:"24",rx:"1.5",ry:"2",fill:"#222"}),t.jsx("ellipse",{cx:"28",cy:"24",rx:"1.5",ry:"2",fill:"#222"}),t.jsx("path",{d:"M21 34 Q24 36 27 34",stroke:"#4B2E09",strokeWidth:"1.5",fill:"none"}),t.jsx("ellipse",{cx:"24",cy:"38",rx:"3",ry:"1.5",fill:"#C68642"})]}),$r=({size:e=48})=>t.jsxs("svg",{width:e,height:e,viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("ellipse",{cx:"24",cy:"24",rx:"14",ry:"15",fill:"#A0522D",stroke:"#4B2E09",strokeWidth:"2"}),t.jsx("ellipse",{cx:"24",cy:"26",rx:"12",ry:"13",fill:"#C68642",opacity:"0.5"}),t.jsx("ellipse",{cx:"10",cy:"12",rx:"4",ry:"8",fill:"#F3F4F6",stroke:"#4B2E09",strokeWidth:"1"}),t.jsx("ellipse",{cx:"38",cy:"12",rx:"4",ry:"8",fill:"#F3F4F6",stroke:"#4B2E09",strokeWidth:"1"}),t.jsx("ellipse",{cx:"24",cy:"32",rx:"4",ry:"2",fill:"#4B2E09"}),t.jsx("ellipse",{cx:"20",cy:"24",rx:"1.5",ry:"2",fill:"#222"}),t.jsx("ellipse",{cx:"28",cy:"24",rx:"1.5",ry:"2",fill:"#222"}),t.jsx("path",{d:"M21 34 Q24 37 27 34",stroke:"#4B2E09",strokeWidth:"1.5",fill:"none"}),t.jsx("ellipse",{cx:"24",cy:"38",rx:"3",ry:"1.5",fill:"#C68642"}),t.jsx("ellipse",{cx:"10",cy:"10",rx:"1.2",ry:"1.2",fill:"#F472B6"}),t.jsx("ellipse",{cx:"10",cy:"10",rx:"0.5",ry:"0.5",fill:"#BE185D"})]}),Lr=({size:e=48})=>t.jsxs("svg",{width:e,height:e,viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("ellipse",{cx:"24",cy:"24",rx:"13",ry:"15",fill:"#38BDF8",stroke:"#0EA5E9",strokeWidth:"2"}),t.jsx("ellipse",{cx:"24",cy:"26",rx:"11",ry:"13",fill:"#7DD3FC",opacity:"0.5"}),t.jsx("path",{d:"M14 16 Q24 6 34 16 Q32 12 24 14 Q16 12 14 16",fill:"#F97316",stroke:"#EA580C",strokeWidth:"1"}),t.jsx("rect",{x:"16",y:"19",width:"5",height:"1",rx:"0.5",fill:"#EA580C"}),t.jsx("rect",{x:"27",y:"19",width:"5",height:"1",rx:"0.5",fill:"#EA580C"}),t.jsx("ellipse",{cx:"20",cy:"24",rx:"1.5",ry:"2",fill:"#FBBF24"}),t.jsx("ellipse",{cx:"28",cy:"24",rx:"1.5",ry:"2",fill:"#FBBF24"}),t.jsx("rect",{x:"23",y:"26",width:"2",height:"5",rx:"1",fill:"#7DD3FC"}),t.jsx("path",{d:"M21 32 Q24 35 27 32",stroke:"#0EA5E9",strokeWidth:"1.5",fill:"none"}),t.jsx("rect",{x:"22",y:"34",width:"2",height:"2",rx:"1",fill:"#fff"}),t.jsx("rect",{x:"24",y:"34",width:"2",height:"2",rx:"1",fill:"#fff"}),t.jsx("ellipse",{cx:"24",cy:"36",rx:"2",ry:"1",fill:"#7DD3FC"})]}),Mr=({size:e=48})=>t.jsxs("svg",{width:e,height:e,viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("ellipse",{cx:"24",cy:"24",rx:"13",ry:"15",fill:"#38BDF8",stroke:"#0EA5E9",strokeWidth:"2"}),t.jsx("ellipse",{cx:"24",cy:"26",rx:"11",ry:"13",fill:"#7DD3FC",opacity:"0.5"}),t.jsx("path",{d:"M12 16 Q24 6 36 16 Q34 12 24 14 Q14 12 12 16",fill:"#F97316",stroke:"#EA580C",strokeWidth:"1"}),t.jsx("rect",{x:"16",y:"19",width:"5",height:"1",rx:"0.5",fill:"#EA580C"}),t.jsx("rect",{x:"27",y:"19",width:"5",height:"1",rx:"0.5",fill:"#EA580C"}),t.jsx("ellipse",{cx:"20",cy:"24",rx:"1.5",ry:"2",fill:"#FBBF24"}),t.jsx("ellipse",{cx:"28",cy:"24",rx:"1.5",ry:"2",fill:"#FBBF24"}),t.jsx("rect",{x:"23",y:"26",width:"2",height:"5",rx:"1",fill:"#7DD3FC"}),t.jsx("path",{d:"M21 32 Q24 35 27 32",stroke:"#0EA5E9",strokeWidth:"1.5",fill:"none"}),t.jsx("ellipse",{cx:"24",cy:"36",rx:"2",ry:"1",fill:"#7DD3FC"})]}),Br=({size:e=48})=>t.jsxs("svg",{width:e,height:e,viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("ellipse",{cx:"24",cy:"24",rx:"12",ry:"15",fill:"#F3E1C7",stroke:"#F59E42",strokeWidth:"2"}),t.jsx("ellipse",{cx:"24",cy:"26",rx:"10",ry:"13",fill:"#FDE68A",opacity:"0.5"}),t.jsx("path",{d:"M14 16 Q24 6 34 16 Q32 12 24 14 Q16 12 14 16",fill:"#FDE047",stroke:"#F59E42",strokeWidth:"1"}),t.jsx("rect",{x:"16",y:"19",width:"5",height:"1",rx:"0.5",fill:"#F59E42"}),t.jsx("rect",{x:"27",y:"19",width:"5",height:"1",rx:"0.5",fill:"#F59E42"}),t.jsx("ellipse",{cx:"20",cy:"24",rx:"1.5",ry:"2",fill:"#22C55E"}),t.jsx("ellipse",{cx:"28",cy:"24",rx:"1.5",ry:"2",fill:"#22C55E"}),t.jsx("rect",{x:"23",y:"26",width:"2",height:"3",rx:"1",fill:"#FDE68A"}),t.jsx("path",{d:"M21 32 Q24 35 27 32",stroke:"#F59E42",strokeWidth:"1.5",fill:"none"}),t.jsx("ellipse",{cx:"8",cy:"20",rx:"3",ry:"7",fill:"#F3E1C7",stroke:"#F59E42",strokeWidth:"1"}),t.jsx("ellipse",{cx:"40",cy:"20",rx:"3",ry:"7",fill:"#F3E1C7",stroke:"#F59E42",strokeWidth:"1"})]}),Fr=({size:e=48})=>t.jsxs("svg",{width:e,height:e,viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("ellipse",{cx:"24",cy:"24",rx:"12",ry:"15",fill:"#F3E1C7",stroke:"#F59E42",strokeWidth:"2"}),t.jsx("ellipse",{cx:"24",cy:"26",rx:"10",ry:"13",fill:"#FDE68A",opacity:"0.5"}),t.jsx("path",{d:"M12 16 Q24 6 36 16 Q34 12 24 14 Q14 12 12 16",fill:"#FDE047",stroke:"#F59E42",strokeWidth:"1"}),t.jsx("rect",{x:"16",y:"19",width:"5",height:"1",rx:"0.5",fill:"#F59E42"}),t.jsx("rect",{x:"27",y:"19",width:"5",height:"1",rx:"0.5",fill:"#F59E42"}),t.jsx("ellipse",{cx:"20",cy:"24",rx:"1.5",ry:"2",fill:"#22C55E"}),t.jsx("ellipse",{cx:"28",cy:"24",rx:"1.5",ry:"2",fill:"#22C55E"}),t.jsx("rect",{x:"23",y:"26",width:"2",height:"3",rx:"1",fill:"#FDE68A"}),t.jsx("path",{d:"M21 32 Q24 35 27 32",stroke:"#F59E42",strokeWidth:"1.5",fill:"none"}),t.jsx("ellipse",{cx:"8",cy:"20",rx:"3",ry:"7",fill:"#F3E1C7",stroke:"#F59E42",strokeWidth:"1"}),t.jsx("ellipse",{cx:"40",cy:"20",rx:"3",ry:"7",fill:"#F3E1C7",stroke:"#F59E42",strokeWidth:"1"})]}),Ar=({size:e=48})=>t.jsxs("svg",{width:e,height:e,viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("ellipse",{cx:"24",cy:"24",rx:"12",ry:"13",fill:"#22C55E",stroke:"#166534",strokeWidth:"2"}),t.jsx("ellipse",{cx:"24",cy:"26",rx:"10",ry:"11",fill:"#A3E635",opacity:"0.5"}),t.jsx("path",{d:"M14 16 Q24 6 34 16 Q32 12 24 14 Q16 12 14 16",fill:"#222",stroke:"#166534",strokeWidth:"1"}),t.jsx("rect",{x:"16",y:"19",width:"4",height:"1",rx:"0.5",fill:"#166534"}),t.jsx("rect",{x:"28",y:"19",width:"4",height:"1",rx:"0.5",fill:"#166534"}),t.jsx("ellipse",{cx:"20",cy:"24",rx:"1.2",ry:"1.7",fill:"#F97316"}),t.jsx("ellipse",{cx:"28",cy:"24",rx:"1.2",ry:"1.7",fill:"#F97316"}),t.jsx("rect",{x:"23",y:"26",width:"2",height:"4",rx:"1",fill:"#A3E635"}),t.jsx("path",{d:"M21 32 Q24 35 27 32",stroke:"#166534",strokeWidth:"1.5",fill:"none"}),t.jsx("ellipse",{cx:"8",cy:"20",rx:"3",ry:"7",fill:"#22C55E",stroke:"#166534",strokeWidth:"1"}),t.jsx("ellipse",{cx:"40",cy:"20",rx:"3",ry:"7",fill:"#22C55E",stroke:"#166534",strokeWidth:"1"})]}),Wr=({size:e=48})=>t.jsxs("svg",{width:e,height:e,viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("ellipse",{cx:"24",cy:"24",rx:"12",ry:"13",fill:"#22C55E",stroke:"#166534",strokeWidth:"2"}),t.jsx("ellipse",{cx:"24",cy:"26",rx:"10",ry:"11",fill:"#A3E635",opacity:"0.5"}),t.jsx("path",{d:"M12 16 Q24 6 36 16 Q34 12 24 14 Q14 12 12 16",fill:"#A78BFA",stroke:"#166534",strokeWidth:"1"}),t.jsx("rect",{x:"16",y:"19",width:"4",height:"1",rx:"0.5",fill:"#166534"}),t.jsx("rect",{x:"28",y:"19",width:"4",height:"1",rx:"0.5",fill:"#166534"}),t.jsx("ellipse",{cx:"20",cy:"24",rx:"1.2",ry:"1.7",fill:"#F97316"}),t.jsx("ellipse",{cx:"28",cy:"24",rx:"1.2",ry:"1.7",fill:"#F97316"}),t.jsx("rect",{x:"23",y:"26",width:"2",height:"4",rx:"1",fill:"#A3E635"}),t.jsx("path",{d:"M21 32 Q24 35 27 32",stroke:"#166534",strokeWidth:"1.5",fill:"none"}),t.jsx("ellipse",{cx:"8",cy:"20",rx:"3",ry:"7",fill:"#22C55E",stroke:"#166534",strokeWidth:"1"}),t.jsx("ellipse",{cx:"40",cy:"20",rx:"3",ry:"7",fill:"#22C55E",stroke:"#166534",strokeWidth:"1"})]}),Dr={human:{male:lr,female:nr},dwarf:{male:ar,female:or},"night-elf":{male:cr,female:dr},gnome:{male:xr,female:hr},draenei:{male:pr,female:fr},worgen:{male:ur,female:gr},pandaren:{male:mr,female:yr},orc:{male:jr,female:kr},undead:{male:wr,female:br},tauren:{male:vr,female:$r},troll:{male:Lr,female:Mr},"blood-elf":{male:Br,female:Fr},goblin:{male:Ar,female:Wr}},Er=({race:e,sex:i,size:s=48})=>{const r=Dr[e]?.[i];return r?t.jsx(r,{size:s}):null},Sr=({primaryColor:e="#C0C0C0",secondaryColor:i="#8B4513",accentColor:s="#FFD700",size:r=24})=>t.jsxs("svg",{width:r,height:r,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("path",{d:"M19 3L5 17L7 19L21 5L19 3Z",fill:e,stroke:s,strokeWidth:"0.5"}),t.jsx("rect",{x:"4",y:"16",width:"6",height:"1.5",fill:s,transform:"rotate(45 4 16)"}),t.jsx("path",{d:"M3 19L5 17L4 18L3 19Z",fill:i,stroke:s,strokeWidth:"0.3"}),t.jsx("circle",{cx:"2.5",cy:"19.5",r:"1.2",fill:s})]}),Cr=({primaryColor:e="#8B4513",secondaryColor:i="#4B0082",accentColor:s="#9370DB",size:r=24})=>t.jsxs("svg",{width:r,height:r,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("line",{x1:"6",y1:"20",x2:"18",y2:"4",stroke:e,strokeWidth:"1.5",strokeLinecap:"round"}),t.jsx("path",{d:"M18 4L19.5 2.5L18 1L16.5 2.5L18 4Z",fill:s,stroke:i,strokeWidth:"0.5"}),t.jsx("circle",{cx:"18",cy:"3",r:"2.5",fill:s,opacity:"0.3"}),t.jsx("circle",{cx:"18",cy:"3",r:"1.5",fill:s,opacity:"0.5"})]}),Pr=({primaryColor:e="#696969",secondaryColor:i="#2F4F4F",accentColor:s="#A9A9A9",size:r=24})=>t.jsxs("svg",{width:r,height:r,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("path",{d:"M15 3L7 11L9 13L17 5L15 3Z",fill:e,stroke:s,strokeWidth:"0.5"}),t.jsx("rect",{x:"6",y:"11",width:"4",height:"1",fill:s,transform:"rotate(45 6 11)"}),t.jsx("line",{x1:"5.5",y1:"13.5",x2:"4",y2:"15",stroke:i,strokeWidth:"1.5",strokeLinecap:"round"})]}),Qr=({primaryColor:e="#8B4513",secondaryColor:i="#A9A9A9",accentColor:s="#FFD700",size:r=24})=>t.jsxs("svg",{width:r,height:r,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("line",{x1:"6",y1:"20",x2:"15",y2:"8",stroke:e,strokeWidth:"1.8",strokeLinecap:"round"}),t.jsx("path",{d:"M14 8L18 5L20 8L17 11L14 8Z",fill:i,stroke:s,strokeWidth:"0.5"}),t.jsx("path",{d:"M15 8L19 10L18 12L14 10L15 8Z",fill:i,stroke:s,strokeWidth:"0.5"})]}),qr=({primaryColor:e="#8B4513",secondaryColor:i="#F5DEB3",accentColor:s="#D2691E",size:r=24})=>t.jsxs("svg",{width:r,height:r,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("path",{d:"M18 4Q20 12 18 20",stroke:e,strokeWidth:"1.5",fill:"none",strokeLinecap:"round"}),t.jsx("path",{d:"M18 4L16 12L18 20",stroke:i,strokeWidth:"0.5",fill:"none"}),t.jsx("line",{x1:"4",y1:"12",x2:"16",y2:"12",stroke:s,strokeWidth:"1"}),t.jsx("path",{d:"M4 12L6 11L6 13L4 12Z",fill:s})]}),Ir=({primaryColor:e="#C0C0C0",secondaryColor:i="#A9A9A9",accentColor:s="#FFD700",size:r=24})=>t.jsxs("svg",{width:r,height:r,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("path",{d:"M8 12Q8 6 12 6Q16 6 16 12L16 16L8 16L8 12Z",fill:e,stroke:s,strokeWidth:"0.5"}),t.jsx("path",{d:"M9 14L15 14",stroke:i,strokeWidth:"1"}),t.jsx("circle",{cx:"12",cy:"9",r:"1",fill:s}),t.jsx("path",{d:"M8 16L8 18L16 18L16 16",fill:i,stroke:s,strokeWidth:"0.3"})]}),Tr=({primaryColor:e="#C0C0C0",secondaryColor:i="#A9A9A9",accentColor:s="#FFD700",size:r=24})=>t.jsxs("svg",{width:r,height:r,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("path",{d:"M9 6L9 18L15 18L15 6L12 4L9 6Z",fill:e,stroke:s,strokeWidth:"0.5"}),t.jsx("ellipse",{cx:"8",cy:"7",rx:"2",ry:"1.5",fill:i,stroke:s,strokeWidth:"0.3"}),t.jsx("ellipse",{cx:"16",cy:"7",rx:"2",ry:"1.5",fill:i,stroke:s,strokeWidth:"0.3"}),t.jsx("line",{x1:"12",y1:"8",x2:"12",y2:"16",stroke:s,strokeWidth:"0.5"}),t.jsx("circle",{cx:"12",cy:"10",r:"0.8",fill:s})]}),Rr=({primaryColor:e="#8B7355",secondaryColor:i="#654321",accentColor:s="#D4AF37",size:r=24})=>t.jsxs("svg",{width:r,height:r,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("rect",{x:"8",y:"6",width:"8",height:"1.5",fill:s}),t.jsx("path",{d:"M8 7.5L9 18L11 18L10 7.5L8 7.5Z",fill:e,stroke:i,strokeWidth:"0.3"}),t.jsx("path",{d:"M14 7.5L13 18L15 18L16 7.5L14 7.5Z",fill:e,stroke:i,strokeWidth:"0.3"}),t.jsx("ellipse",{cx:"9.5",cy:"13",rx:"1",ry:"1.5",fill:i}),t.jsx("ellipse",{cx:"14.5",cy:"13",rx:"1",ry:"1.5",fill:i})]}),zr=({primaryColor:e="#8B4513",secondaryColor:i="#654321",accentColor:s="#D2691E",size:r=24})=>t.jsxs("svg",{width:r,height:r,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("path",{d:"M8 10L8 16L7 18L10 18L10 16L9 10L8 10Z",fill:e,stroke:i,strokeWidth:"0.5"}),t.jsx("path",{d:"M14 10L14 16L13 18L16 18L16 16L15 10L14 10Z",fill:e,stroke:i,strokeWidth:"0.5"}),t.jsx("line",{x1:"8.5",y1:"12",x2:"9.5",y2:"12",stroke:s,strokeWidth:"0.3"}),t.jsx("line",{x1:"8.5",y1:"14",x2:"9.5",y2:"14",stroke:s,strokeWidth:"0.3"}),t.jsx("line",{x1:"14.5",y1:"12",x2:"15.5",y2:"12",stroke:s,strokeWidth:"0.3"}),t.jsx("line",{x1:"14.5",y1:"14",x2:"15.5",y2:"14",stroke:s,strokeWidth:"0.3"})]}),pe=({primaryColor:e="#FFD700",secondaryColor:i="#DAA520",gemColor:s="#4169E1",size:r=24})=>t.jsxs("svg",{width:r,height:r,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("circle",{cx:"12",cy:"13",r:"5",fill:"none",stroke:e,strokeWidth:"1.5"}),t.jsx("circle",{cx:"12",cy:"13",r:"3.5",fill:"none",stroke:i,strokeWidth:"0.5"}),t.jsx("path",{d:"M12 6L14 9L12 11L10 9L12 6Z",fill:s,stroke:e,strokeWidth:"0.5"}),t.jsx("path",{d:"M11.5 7L12 8L11.5 8.5",stroke:"white",strokeWidth:"0.5",opacity:"0.6"})]}),_r=({primaryColor:e="#FFD700",secondaryColor:i="#DAA520",gemColor:s="#8B008B",size:r=24})=>t.jsxs("svg",{width:r,height:r,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("path",{d:"M8 4Q12 6 16 4",stroke:e,strokeWidth:"1",fill:"none"}),t.jsx("line",{x1:"8",y1:"4",x2:"10",y2:"10",stroke:e,strokeWidth:"0.8"}),t.jsx("line",{x1:"16",y1:"4",x2:"14",y2:"10",stroke:e,strokeWidth:"0.8"}),t.jsx("path",{d:"M10 10L12 16L14 10L10 10Z",fill:i,stroke:e,strokeWidth:"0.5"}),t.jsx("ellipse",{cx:"12",cy:"12",rx:"1.5",ry:"2",fill:s}),t.jsx("ellipse",{cx:"11.5",cy:"11.5",rx:"0.5",ry:"0.7",fill:"white",opacity:"0.6"})]}),Hr=({primaryColor:e="#C0C0C0",secondaryColor:i="#A9A9A9",gemColor:s="#FF1493",size:r=24})=>t.jsxs("svg",{width:r,height:r,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("path",{d:"M6 8Q12 12 18 8",stroke:e,strokeWidth:"1.2",fill:"none"}),t.jsx("circle",{cx:"6",cy:"8",r:"1",fill:i}),t.jsx("circle",{cx:"12",cy:"11",r:"1",fill:i}),t.jsx("circle",{cx:"18",cy:"8",r:"1",fill:i}),t.jsx("circle",{cx:"12",cy:"14",r:"2.5",fill:s,stroke:e,strokeWidth:"0.5"}),t.jsx("circle",{cx:"11.5",cy:"13.5",r:"0.8",fill:"white",opacity:"0.5"})]}),Nr=({primaryColor:e="#FFD700",secondaryColor:i="#DAA520",gemColor:s="#00CED1",size:r=24})=>t.jsxs("svg",{width:r,height:r,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("ellipse",{cx:"12",cy:"12",rx:"6",ry:"4",fill:"none",stroke:e,strokeWidth:"1.5"}),t.jsx("ellipse",{cx:"12",cy:"12",rx:"5",ry:"3",fill:"none",stroke:i,strokeWidth:"0.5"}),t.jsx("circle",{cx:"12",cy:"8",r:"1",fill:s}),t.jsx("circle",{cx:"8",cy:"11",r:"0.8",fill:s}),t.jsx("circle",{cx:"16",cy:"11",r:"0.8",fill:s}),t.jsx("circle",{cx:"12",cy:"16",r:"1",fill:s})]}),Zr=({primaryColor:e="#FFD700",secondaryColor:i="#DAA520",gemColor:s="#FF0000",size:r=24})=>t.jsxs("svg",{width:r,height:r,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("path",{d:"M6 14L6 16L18 16L18 14L16 10L14 12L12 8L10 12L8 10L6 14Z",fill:e,stroke:i,strokeWidth:"0.5"}),t.jsx("circle",{cx:"8",cy:"10",r:"0.8",fill:i}),t.jsx("circle",{cx:"12",cy:"8",r:"0.8",fill:i}),t.jsx("circle",{cx:"16",cy:"10",r:"0.8",fill:i}),t.jsx("circle",{cx:"9",cy:"14",r:"1",fill:s}),t.jsx("circle",{cx:"12",cy:"13",r:"1.2",fill:s}),t.jsx("circle",{cx:"15",cy:"14",r:"1",fill:s})]}),F=e=>{switch(e){case"poor":return{primary:"#9D9D9D",secondary:"#7A7A7A",accent:"#6B6B6B",gem:"#808080"};case"common":return{primary:"#FFFFFF",secondary:"#D4D4D4",accent:"#B8B8B8",gem:"#E0E0E0"};case"uncommon":return{primary:"#1EFF00",secondary:"#00D000",accent:"#00A000",gem:"#00FF7F"};case"rare":return{primary:"#0070DD",secondary:"#0052AA",accent:"#003D88",gem:"#4169E1"};case"epic":return{primary:"#A335EE",secondary:"#8020CC",accent:"#6010AA",gem:"#9370DB"};case"legendary":return{primary:"#FF8000",secondary:"#DD6600",accent:"#BB4400",gem:"#FFD700"};default:return{primary:"#FFFFFF",secondary:"#D4D4D4",accent:"#B8B8B8",gem:"#E0E0E0"}}},Gr=({itemType:e,itemName:i="",size:s=24})=>{const r=i.toLowerCase(),n={primary:"#C0C0C0",secondary:"#A9A9A9",accent:"#E8E8E8"},l={primary:"#FFD700",secondary:"#DAA520"},a={primary:"#8B4513",secondary:"#654321",accent:"#D2691E"};switch(e){case"weapon":return r.includes("bâton")||r.includes("staff")||r.includes("sceptre")?t.jsx(Cr,{primaryColor:a.primary,secondaryColor:"#9370DB",accentColor:"#BA55D3",size:s}):r.includes("dague")||r.includes("dagger")||r.includes("poignard")?t.jsx(Pr,{primaryColor:n.primary,secondaryColor:n.secondary,accentColor:n.accent,size:s}):r.includes("hache")||r.includes("axe")?t.jsx(Qr,{primaryColor:a.primary,secondaryColor:n.primary,accentColor:n.accent,size:s}):r.includes("arc")||r.includes("bow")||r.includes("arbalète")?t.jsx(qr,{primaryColor:a.primary,secondaryColor:"#DEB887",accentColor:a.accent,size:s}):t.jsx(Sr,{primaryColor:n.primary,secondaryColor:a.secondary,accentColor:n.accent,size:s});case"head":return t.jsx(Ir,{primaryColor:n.primary,secondaryColor:n.secondary,accentColor:l.primary,size:s});case"chest":return t.jsx(Tr,{primaryColor:n.primary,secondaryColor:n.secondary,accentColor:l.primary,size:s});case"legs":return t.jsx(Rr,{primaryColor:"#6B5D4F",secondaryColor:"#4A3F35",accentColor:l.secondary,size:s});case"boots":return t.jsx(zr,{primaryColor:a.primary,secondaryColor:a.secondary,accentColor:a.accent,size:s});case"jewelry":return r.includes("anneau")||r.includes("ring")||r.includes("bague")?t.jsx(pe,{primaryColor:l.primary,secondaryColor:l.secondary,gemColor:"#4169E1",size:s}):r.includes("amulette")||r.includes("amulet")||r.includes("médaillon")?t.jsx(_r,{primaryColor:l.primary,secondaryColor:l.secondary,gemColor:"#9370DB",size:s}):r.includes("collier")||r.includes("necklace")?t.jsx(Hr,{primaryColor:"#C0C0C0",secondaryColor:"#A9A9A9",gemColor:"#DC143C",size:s}):r.includes("bracelet")?t.jsx(Nr,{primaryColor:l.primary,secondaryColor:l.secondary,gemColor:"#00CED1",size:s}):r.includes("couronne")||r.includes("crown")||r.includes("diadème")?t.jsx(Zr,{primaryColor:l.primary,secondaryColor:l.secondary,gemColor:"#FF0000",size:s}):t.jsx(pe,{primaryColor:l.primary,secondaryColor:l.secondary,gemColor:"#4169E1",size:s});default:return t.jsx(pe,{primaryColor:l.primary,secondaryColor:l.secondary,gemColor:"#4169E1",size:s})}},Ur=o.div`
  width: ${e=>e.$size}px;
  height: ${e=>e.$size}px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background: ${e=>{const i=F(e.$quality);return`linear-gradient(135deg, ${i.primary}22 0%, ${i.secondary}33 100%)`}};
  border: 2px solid ${e=>F(e.$quality).primary};
  box-shadow: 0 2px 8px ${e=>F(e.$quality).primary}44;
  
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 3px;
    background: radial-gradient(
      circle at 30% 30%,
      ${e=>F(e.$quality).primary}11 0%,
      transparent 70%
    );
  }
`,de=({itemType:e,itemName:i="",quality:s="common",size:r=48})=>{const n=Math.floor(r*.65);return t.jsx(Ur,{$quality:s,$size:r,children:t.jsx(Gr,{itemType:e,itemName:i,quality:"common",size:n})})},Or=({liquidColor:e="#DC143C",glassColor:i="#87CEEB",size:s=24})=>t.jsxs("svg",{width:s,height:s,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("path",{d:"M10 3L10 6L8 8L8 18C8 19 9 20 10 20L14 20C15 20 16 19 16 18L16 8L14 6L14 3L10 3Z",fill:i,fillOpacity:"0.3",stroke:i,strokeWidth:"0.8"}),t.jsx("path",{d:"M8.5 12L8.5 18C8.5 18.5 9 19 10 19L14 19C15 19 15.5 18.5 15.5 18L15.5 12L8.5 12Z",fill:e,opacity:"0.8"}),t.jsx("ellipse",{cx:"12",cy:"13",rx:"2",ry:"1",fill:e,opacity:"0.4"}),t.jsx("rect",{x:"10",y:"2",width:"4",height:"1.5",fill:"#8B4513",rx:"0.5"}),t.jsx("rect",{x:"10.5",y:"3",width:"3",height:"0.5",fill:"#654321"}),t.jsx("path",{d:"M9 8L9 16",stroke:"white",strokeWidth:"0.5",opacity:"0.5"})]}),Vr=({liquidColor:e="#4169E1",glassColor:i="#87CEEB",size:s=24})=>t.jsxs("svg",{width:s,height:s,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("path",{d:"M10 3L10 6L8 8L8 18C8 19 9 20 10 20L14 20C15 20 16 19 16 18L16 8L14 6L14 3L10 3Z",fill:i,fillOpacity:"0.3",stroke:i,strokeWidth:"0.8"}),t.jsx("path",{d:"M8.5 12L8.5 18C8.5 18.5 9 19 10 19L14 19C15 19 15.5 18.5 15.5 18L15.5 12L8.5 12Z",fill:e,opacity:"0.8"}),t.jsx("circle",{cx:"10",cy:"14",r:"0.5",fill:"#E0FFFF",opacity:"0.8"}),t.jsx("circle",{cx:"13",cy:"15",r:"0.4",fill:"#E0FFFF",opacity:"0.8"}),t.jsx("circle",{cx:"11.5",cy:"16.5",r:"0.3",fill:"#E0FFFF",opacity:"0.8"}),t.jsx("rect",{x:"10",y:"2",width:"4",height:"1.5",fill:"#8B4513",rx:"0.5"}),t.jsx("rect",{x:"10.5",y:"3",width:"3",height:"0.5",fill:"#654321"}),t.jsx("path",{d:"M9 8L9 16",stroke:"white",strokeWidth:"0.5",opacity:"0.5"})]}),Xr=({liquidColor:e="#9370DB",glassColor:i="#87CEEB",size:s=24})=>t.jsxs("svg",{width:s,height:s,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("ellipse",{cx:"12",cy:"13",rx:"5",ry:"6",fill:i,fillOpacity:"0.3",stroke:i,strokeWidth:"0.8"}),t.jsx("ellipse",{cx:"12",cy:"14.5",rx:"4.5",ry:"4.5",fill:e,opacity:"0.8"}),t.jsx("rect",{x:"11",y:"6",width:"2",height:"2",fill:i,fillOpacity:"0.3",stroke:i,strokeWidth:"0.6"}),t.jsx("rect",{x:"10.5",y:"4.5",width:"3",height:"1.8",fill:"#8B4513",rx:"0.5"}),t.jsx("ellipse",{cx:"10",cy:"12",rx:"1.5",ry:"2",fill:"white",opacity:"0.4"})]}),Yr=o.div`
  width: ${e=>e.$size}px;
  height: ${e=>e.$size}px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background: ${e=>{const i=F(K(e.$quality));return`linear-gradient(135deg, ${i.primary}22 0%, ${i.secondary}33 100%)`}};
  border: 2px solid ${e=>F(K(e.$quality)).primary};
  box-shadow: 0 2px 8px ${e=>F(K(e.$quality)).primary}44;
  
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 3px;
    background: radial-gradient(
      circle at 30% 30%,
      ${e=>F(K(e.$quality)).primary}11 0%,
      transparent 70%
    );
  }
`,wt=({potion:e,size:i=48})=>{const s=Math.floor(i*.65),r=a=>{switch(a.id.split("-").pop()){case"strength":switch(a.quality){case"minor":return"#CD5C5C";case"lesser":return"#DC143C";case"normal":return"#FF0000";case"greater":return"#FF4500";case"superior":return"#FF6347";case"ultimate":return"#FF7F50";default:return"#DC143C"}case"agility":switch(a.quality){case"minor":return"#4682B4";case"lesser":return"#4169E1";case"normal":return"#0000FF";case"greater":return"#1E90FF";case"superior":return"#00BFFF";case"ultimate":return"#00FFFF";default:return"#4169E1"}case"intellect":switch(a.quality){case"minor":return"#6A5ACD";case"lesser":return"#7B68EE";case"normal":return"#8A2BE2";case"greater":return"#9370DB";case"superior":return"#BA55D3";case"ultimate":return"#DA70D6";default:return"#7B68EE"}case"stamina":switch(a.quality){case"minor":return"#2E8B57";case"lesser":return"#3CB371";case"normal":return"#32CD32";case"greater":return"#00FF7F";case"superior":return"#7CFC00";case"ultimate":return"#ADFF2F";default:return"#3CB371"}case"attackPower":switch(a.quality){case"minor":return"#B8860B";case"lesser":return"#DAA520";case"normal":return"#FFD700";case"greater":return"#FFA500";case"superior":return"#FF8C00";case"ultimate":return"#FF7F50";default:return"#DAA520"}case"spellPower":switch(a.quality){case"minor":return"#4B0082";case"lesser":return"#6A5ACD";case"normal":return"#8A2BE2";case"greater":return"#9400D3";case"superior":return"#9932CC";case"ultimate":return"#BA55D3";default:return"#6A5ACD"}case"critChance":switch(a.quality){case"minor":return"#708090";case"lesser":return"#778899";case"normal":return"#A9A9A9";case"greater":return"#C0C0C0";case"superior":return"#D3D3D3";case"ultimate":return"#DCDCDC";default:return"#778899"}case"luck":switch(a.quality){case"minor":return"#8B4513";case"lesser":return"#A0522D";case"normal":return"#D2691E";case"greater":return"#FF8C00";case"superior":return"#FFA500";case"ultimate":return"#FFD700";default:return"#A0522D"}default:return"#ffffffff00"}},l=(a=>{switch(a.type){case"health":return"#DC143C";case"mana":return"#4169E1";case"effect":return r(a);default:return"#ffffffff00"}})(e);return t.jsx(Yr,{$quality:e.quality,$size:i,children:e.type==="health"?t.jsx(Or,{liquidColor:l,size:s}):e.type==="mana"?t.jsx(Vr,{liquidColor:l,size:s}):t.jsx(Xr,{liquidColor:l,size:s})})},Kr=({primaryColor:e="#A3A3A3",secondaryColor:i="#6B7280",accentColor:s="#FBBF24",size:r=48})=>t.jsxs("svg",{width:r,height:r,viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("ellipse",{cx:"24",cy:"30",rx:"10",ry:"12",fill:e,stroke:i,strokeWidth:"2"}),t.jsx("ellipse",{cx:"24",cy:"16",rx:"8",ry:"7",fill:e,stroke:i,strokeWidth:"2"}),t.jsx("ellipse",{cx:"20",cy:"16",rx:"2.5",ry:"2.5",fill:s,stroke:i,strokeWidth:"1"}),t.jsx("ellipse",{cx:"28",cy:"16",rx:"2.5",ry:"2.5",fill:s,stroke:i,strokeWidth:"1"}),t.jsx("circle",{cx:"20",cy:"16",r:"1",fill:"black"}),t.jsx("circle",{cx:"28",cy:"16",r:"1",fill:"black"}),t.jsx("polygon",{points:"24,19 22,22 26,22",fill:"#FBBF24",stroke:i,strokeWidth:"0.5"}),t.jsx("ellipse",{cx:"14",cy:"30",rx:"3",ry:"7",fill:i,opacity:"0.7"}),t.jsx("ellipse",{cx:"34",cy:"30",rx:"3",ry:"7",fill:i,opacity:"0.7"}),t.jsx("rect",{x:"21",y:"40",width:"2",height:"4",rx:"0.5",fill:s}),t.jsx("rect",{x:"25",y:"40",width:"2",height:"4",rx:"0.5",fill:s})]}),Jr=({primaryColor:e="#F59E42",secondaryColor:i="#A16207",size:s=48})=>t.jsxs("svg",{width:s,height:s,viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("ellipse",{cx:"24",cy:"32",rx:"8",ry:"10",fill:e,stroke:i,strokeWidth:"2"}),t.jsx("ellipse",{cx:"24",cy:"18",rx:"7",ry:"7",fill:e,stroke:i,strokeWidth:"2"}),t.jsx("polygon",{points:"18,10 15,4 22,10",fill:e,stroke:i,strokeWidth:"1.5"}),t.jsx("polygon",{points:"30,10 33,4 26,10",fill:e,stroke:i,strokeWidth:"1.5"}),t.jsx("ellipse",{cx:"24",cy:"20",rx:"3.2",ry:"2.7",fill:"#fff"}),t.jsx("ellipse",{cx:"22",cy:"18",rx:"0.7",ry:"1",fill:"#222"}),t.jsx("ellipse",{cx:"26",cy:"18",rx:"0.7",ry:"1",fill:"#222"}),t.jsx("ellipse",{cx:"24",cy:"21.5",rx:"0.5",ry:"0.4",fill:"#222"}),t.jsx("ellipse",{cx:"36",cy:"40",rx:"3.5",ry:"7",fill:e,stroke:i,strokeWidth:"2"}),t.jsx("ellipse",{cx:"36",cy:"46",rx:"2.2",ry:"2.2",fill:"#fff",stroke:i,strokeWidth:"1"})]}),el=({primaryColor:e="#6B7280",secondaryColor:i="#4B5563",accentColor:s="#F59E0B",size:r=48})=>t.jsxs("svg",{width:r,height:r,viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("path",{d:"M16 12L14 8L18 10Z",fill:e,stroke:i,strokeWidth:"1"}),t.jsx("path",{d:"M32 12L34 8L30 10Z",fill:e,stroke:i,strokeWidth:"1"}),t.jsx("ellipse",{cx:"24",cy:"18",rx:"9",ry:"8",fill:e,stroke:i,strokeWidth:"1"}),t.jsx("ellipse",{cx:"24",cy:"22",rx:"6",ry:"4",fill:i}),t.jsx("ellipse",{cx:"24",cy:"23",rx:"3",ry:"2",fill:"#1F2937"}),t.jsx("ellipse",{cx:"24",cy:"23",rx:"1.5",ry:"1",fill:"black"}),t.jsx("ellipse",{cx:"20",cy:"16",rx:"1.5",ry:"2",fill:s}),t.jsx("ellipse",{cx:"28",cy:"16",rx:"1.5",ry:"2",fill:s}),t.jsx("circle",{cx:"20",cy:"16",r:"0.8",fill:"black"}),t.jsx("circle",{cx:"28",cy:"16",r:"0.8",fill:"black"}),t.jsx("circle",{cx:"20.5",cy:"15.5",r:"0.4",fill:"white",opacity:"0.8"}),t.jsx("circle",{cx:"28.5",cy:"15.5",r:"0.4",fill:"white",opacity:"0.8"}),t.jsx("path",{d:"M22 24L21.5 26",stroke:"white",strokeWidth:"1",strokeLinecap:"round"}),t.jsx("path",{d:"M26 24L26.5 26",stroke:"white",strokeWidth:"1",strokeLinecap:"round"}),t.jsx("ellipse",{cx:"24",cy:"32",rx:"8",ry:"7",fill:e,stroke:i,strokeWidth:"1"}),t.jsx("ellipse",{cx:"24",cy:"33",rx:"5",ry:"4",fill:"#9CA3AF",opacity:"0.5"}),t.jsx("rect",{x:"18",y:"36",width:"2.5",height:"8",rx:"1",fill:i}),t.jsx("rect",{x:"27.5",y:"36",width:"2.5",height:"8",rx:"1",fill:i}),t.jsx("ellipse",{cx:"19.25",cy:"43",rx:"1.5",ry:"1",fill:"#1F2937"}),t.jsx("ellipse",{cx:"28.75",cy:"43",rx:"1.5",ry:"1",fill:"#1F2937"}),t.jsx("line",{x1:"18",y1:"43.5",x2:"17.5",y2:"44.5",stroke:i,strokeWidth:"0.5"}),t.jsx("line",{x1:"19.25",y1:"43.5",x2:"19.25",y2:"44.5",stroke:i,strokeWidth:"0.5"}),t.jsx("line",{x1:"20.5",y1:"43.5",x2:"21",y2:"44.5",stroke:i,strokeWidth:"0.5"}),t.jsx("path",{d:"M32 32Q36 30 38 26",stroke:e,strokeWidth:"2.5",strokeLinecap:"round"})]}),tl=({primaryColor:e="#8B4513",secondaryColor:i="#5D2E0F",accentColor:s="#D2691E",size:r=48})=>t.jsxs("svg",{width:r,height:r,viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("ellipse",{cx:"24",cy:"20",rx:"10",ry:"9",fill:e,stroke:i,strokeWidth:"1.5"}),t.jsx("ellipse",{cx:"17",cy:"14",rx:"2",ry:"3",fill:e,stroke:i,strokeWidth:"1"}),t.jsx("ellipse",{cx:"31",cy:"14",rx:"2",ry:"3",fill:e,stroke:i,strokeWidth:"1"}),t.jsx("ellipse",{cx:"24",cy:"24",rx:"7",ry:"5",fill:s,stroke:i,strokeWidth:"1"}),t.jsx("ellipse",{cx:"24",cy:"25",rx:"4",ry:"3",fill:i}),t.jsx("ellipse",{cx:"22",cy:"25",rx:"1",ry:"1.5",fill:"black"}),t.jsx("ellipse",{cx:"26",cy:"25",rx:"1",ry:"1.5",fill:"black"}),t.jsx("circle",{cx:"19",cy:"18",r:"1.5",fill:"black"}),t.jsx("circle",{cx:"29",cy:"18",r:"1.5",fill:"black"}),t.jsx("circle",{cx:"19.5",cy:"17.5",r:"0.5",fill:"#DC2626",opacity:"0.8"}),t.jsx("circle",{cx:"29.5",cy:"17.5",r:"0.5",fill:"#DC2626",opacity:"0.8"}),t.jsx("path",{d:"M20 26Q18 28 17 30",stroke:"white",strokeWidth:"2",strokeLinecap:"round"}),t.jsx("path",{d:"M28 26Q30 28 31 30",stroke:"white",strokeWidth:"2",strokeLinecap:"round"}),t.jsx("line",{x1:"20",y1:"13",x2:"19",y2:"10",stroke:i,strokeWidth:"1"}),t.jsx("line",{x1:"23",y1:"12",x2:"23",y2:"9",stroke:i,strokeWidth:"1"}),t.jsx("line",{x1:"26",y1:"12",x2:"26",y2:"9",stroke:i,strokeWidth:"1"}),t.jsx("line",{x1:"29",y1:"13",x2:"30",y2:"10",stroke:i,strokeWidth:"1"}),t.jsx("ellipse",{cx:"24",cy:"34",rx:"11",ry:"8",fill:e,stroke:i,strokeWidth:"1.5"}),t.jsx("rect",{x:"16",y:"38",width:"3",height:"7",rx:"1.5",fill:i}),t.jsx("rect",{x:"29",y:"38",width:"3",height:"7",rx:"1.5",fill:i}),t.jsx("rect",{x:"16",y:"43",width:"3",height:"2",fill:"#1F2937"}),t.jsx("rect",{x:"29",y:"43",width:"3",height:"2",fill:"#1F2937"}),t.jsx("path",{d:"M34 32Q36 31 37 30Q38 29 37 28",stroke:i,strokeWidth:"1.5",strokeLinecap:"round",fill:"none"})]}),il=({primaryColor:e="#A8A29E",secondaryColor:i="#57534E",accentColor:s="#F59E0B",size:r=48})=>t.jsxs("svg",{width:r,height:r,viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("ellipse",{cx:"24",cy:"33",rx:"11",ry:"8",fill:e,stroke:i,strokeWidth:"2.2"}),t.jsx("line",{x1:"18",y1:"27",x2:"16",y2:"24",stroke:i,strokeWidth:"1.2"}),t.jsx("line",{x1:"22",y1:"26",x2:"21",y2:"22",stroke:i,strokeWidth:"1.2"}),t.jsx("line",{x1:"26",y1:"27",x2:"28",y2:"24",stroke:i,strokeWidth:"1.2"}),t.jsx("line",{x1:"30",y1:"28",x2:"32",y2:"25",stroke:i,strokeWidth:"1.2"}),t.jsx("ellipse",{cx:"24",cy:"16",rx:"8",ry:"6",fill:e,stroke:i,strokeWidth:"2"}),t.jsx("ellipse",{cx:"24",cy:"20",rx:"5",ry:"2.5",fill:"#B6A28B",stroke:i,strokeWidth:"1"}),t.jsx("ellipse",{cx:"22.5",cy:"20.5",rx:"0.5",ry:"0.8",fill:"black"}),t.jsx("ellipse",{cx:"25.5",cy:"20.5",rx:"0.5",ry:"0.8",fill:"black"}),t.jsx("ellipse",{cx:"20",cy:"15",rx:"1.2",ry:"2",fill:"#DC2626"}),t.jsx("ellipse",{cx:"28",cy:"15",rx:"1.2",ry:"2",fill:"#DC2626"}),t.jsx("ellipse",{cx:"20",cy:"15",rx:"0.7",ry:"1.2",fill:"black"}),t.jsx("ellipse",{cx:"28",cy:"15",rx:"0.7",ry:"1.2",fill:"black"}),t.jsx("line",{x1:"22",y1:"13",x2:"24",y2:"15",stroke:"#B91C1C",strokeWidth:"0.7"}),t.jsx("line",{x1:"26",y1:"14",x2:"28",y2:"16",stroke:"#B91C1C",strokeWidth:"0.7"}),t.jsx("ellipse",{cx:"16",cy:"12",rx:"2.2",ry:"3",fill:s,stroke:i,strokeWidth:"1"}),t.jsx("path",{d:"M15 10Q14 8 16 9Q17 10 16 12",stroke:i,strokeWidth:"0.8"}),t.jsx("ellipse",{cx:"32",cy:"12",rx:"2.2",ry:"3",fill:s,stroke:i,strokeWidth:"1"}),t.jsx("path",{d:"M33 10Q34 8 32 9Q31 10 32 12",stroke:i,strokeWidth:"0.8"}),t.jsx("rect",{x:"22",y:"21.5",width:"1.2",height:"2.5",rx:"0.2",fill:"white",stroke:i,strokeWidth:"0.3"}),t.jsx("rect",{x:"24.8",y:"21.5",width:"1.2",height:"2.5",rx:"0.2",fill:"white",stroke:i,strokeWidth:"0.3"}),t.jsx("rect",{x:"23.2",y:"24",width:"1",height:"1.5",rx:"0.2",fill:"#B6A28B",stroke:i,strokeWidth:"0.2"}),t.jsx("path",{d:"M34 33Q39 37 41 44Q39 45 37 43Q36 41 38 40",stroke:s,strokeWidth:"2.2"}),t.jsx("ellipse",{cx:"41",cy:"44",rx:"1.2",ry:"0.7",fill:"#F59E0B",opacity:"0.7"}),t.jsx("rect",{x:"18",y:"38",width:"2.2",height:"6",rx:"0.7",fill:i}),t.jsx("rect",{x:"27.8",y:"38",width:"2.2",height:"6",rx:"0.7",fill:i}),t.jsx("ellipse",{cx:"19",cy:"44",rx:"1",ry:"0.6",fill:"#B6A28B"}),t.jsx("ellipse",{cx:"29",cy:"44",rx:"1",ry:"0.6",fill:"#B6A28B"}),t.jsx("line",{x1:"18.5",y1:"44.5",x2:"18",y2:"45.5",stroke:i,strokeWidth:"0.5"}),t.jsx("line",{x1:"19",y1:"44.5",x2:"19",y2:"45.5",stroke:i,strokeWidth:"0.5"}),t.jsx("line",{x1:"19.5",y1:"44.5",x2:"20",y2:"45.5",stroke:i,strokeWidth:"0.5"}),t.jsx("line",{x1:"28.5",y1:"44.5",x2:"28",y2:"45.5",stroke:i,strokeWidth:"0.5"}),t.jsx("line",{x1:"29",y1:"44.5",x2:"29",y2:"45.5",stroke:i,strokeWidth:"0.5"}),t.jsx("line",{x1:"29.5",y1:"44.5",x2:"30",y2:"45.5",stroke:i,strokeWidth:"0.5"}),t.jsx("ellipse",{cx:"24",cy:"33",rx:"13",ry:"10",fill:i,opacity:"0.08"})]}),sl=({primaryColor:e="#4B5563",secondaryColor:i="#1F2937",accentColor:s="#FBBF24",size:r=48})=>t.jsxs("svg",{width:r,height:r,viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("path",{d:"M24 8Q16 14 14 22L34 22Q32 14 24 8Z",fill:e,stroke:i,strokeWidth:"1.2"}),t.jsx("ellipse",{cx:"24",cy:"24",rx:"7",ry:"5.5",fill:e,stroke:i,strokeWidth:"0.7"}),t.jsx("rect",{x:"17",y:"20",width:"14",height:"5",rx:"1",fill:i,opacity:"0.7"}),t.jsx("ellipse",{cx:"21",cy:"23",rx:"1.2",ry:"1",fill:s,opacity:"0.7"}),t.jsx("ellipse",{cx:"27",cy:"23",rx:"1.2",ry:"1",fill:s,opacity:"0.7"}),t.jsx("path",{d:"M26 25L28 27",stroke:s,strokeWidth:"0.7",strokeLinecap:"round"}),t.jsx("path",{d:"M18 29Q15 33 16 38L32 38Q33 33 30 29Z",fill:e,stroke:i,strokeWidth:"0.7"}),t.jsx("rect",{x:"17",y:"37",width:"14",height:"2",fill:i,opacity:"0.5"}),t.jsx("path",{d:"M19 29L29 38",stroke:i,strokeWidth:"0.7"}),t.jsx("path",{d:"M16 33Q13 36 13 41",stroke:i,strokeWidth:"1",strokeLinecap:"round"}),t.jsx("path",{d:"M32 33Q35 36 35 41",stroke:i,strokeWidth:"1",strokeLinecap:"round"}),t.jsx("path",{d:"M35 41Q39 39 36 36Q33 33 35 41Z",fill:i,stroke:e,strokeWidth:"0.7"}),t.jsx("ellipse",{cx:"21",cy:"39",rx:"1",ry:"0.7",fill:i,opacity:"0.7"}),t.jsx("rect",{x:"19",y:"39",width:"3",height:"7",fill:e,stroke:i,strokeWidth:"0.3"}),t.jsx("rect",{x:"26",y:"39",width:"3",height:"7",fill:e,stroke:i,strokeWidth:"0.3"}),t.jsx("rect",{x:"18.5",y:"45",width:"3.5",height:"2.5",rx:"0.5",fill:i,opacity:"0.7"}),t.jsx("rect",{x:"26.5",y:"45",width:"3.5",height:"2.5",rx:"0.5",fill:i,opacity:"0.7"})]}),rl=({primaryColor:e="#4B5563",secondaryColor:i="#1F2937",accentColor:s="#DC2626",size:r=48})=>t.jsxs("svg",{width:r,height:r,viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("path",{d:"M24 10Q16 12 14 18L34 18Q32 12 24 10Z",fill:i,stroke:"black",strokeWidth:"1"}),t.jsx("path",{d:"M14 18L12 22L24 24L36 22L34 18Z",fill:i,stroke:"black",strokeWidth:"1"}),t.jsx("ellipse",{cx:"24",cy:"20",rx:"7",ry:"5",fill:"black",opacity:"0.4"}),t.jsx("rect",{x:"16",y:"18",width:"16",height:"5",rx:"1",fill:i,stroke:"black",strokeWidth:"0.8"}),t.jsx("ellipse",{cx:"20",cy:"20",rx:"2",ry:"1.5",fill:s,opacity:"0.8"}),t.jsx("ellipse",{cx:"28",cy:"20",rx:"2",ry:"1.5",fill:s,opacity:"0.8"}),t.jsx("circle",{cx:"20",cy:"20",r:"0.8",fill:"black"}),t.jsx("circle",{cx:"28",cy:"20",r:"0.8",fill:"black"}),t.jsx("ellipse",{cx:"24",cy:"24",rx:"6",ry:"5",fill:"#D1A684",stroke:"black",strokeWidth:"0.5"}),t.jsx("path",{d:"M26 22L28 25",stroke:s,strokeWidth:"0.8",strokeLinecap:"round"}),t.jsx("path",{d:"M18 28Q16 30 16 35L32 35Q32 30 30 28Z",fill:i,stroke:"black",strokeWidth:"1"}),t.jsx("rect",{x:"16",y:"34",width:"16",height:"2",fill:"#8B4513",stroke:"black",strokeWidth:"0.5"}),t.jsx("rect",{x:"23",y:"33.5",width:"2",height:"3",fill:s,stroke:"black",strokeWidth:"0.3"}),t.jsx("path",{d:"M18 28L28 35",stroke:"#6B4423",strokeWidth:"2"}),t.jsx("path",{d:"M18 28L28 35",stroke:"#8B6F47",strokeWidth:"1.2"}),t.jsx("path",{d:"M16 30Q12 32 10 36",stroke:e,strokeWidth:"2.5",strokeLinecap:"round"}),t.jsx("path",{d:"M32 30Q36 32 38 36",stroke:e,strokeWidth:"2.5",strokeLinecap:"round"}),t.jsx("line",{x1:"38",y1:"36",x2:"42",y2:"38",stroke:"#9CA3AF",strokeWidth:"1.5",strokeLinecap:"round"}),t.jsx("path",{d:"M42 38L44 40",stroke:"#6B4423",strokeWidth:"1.2",strokeLinecap:"round"}),t.jsx("circle",{cx:"42",cy:"38",r:"0.8",fill:s}),t.jsx("circle",{cx:"20",cy:"36",r:"1.5",fill:"#FBBF24",stroke:"#F59E0B",strokeWidth:"0.5"}),t.jsx("path",{d:"M20 34.5L20 35.5",stroke:"#F59E0B",strokeWidth:"0.5"}),t.jsx("rect",{x:"18",y:"36",width:"3",height:"8",fill:i,stroke:"black",strokeWidth:"0.8"}),t.jsx("rect",{x:"27",y:"36",width:"3",height:"8",fill:i,stroke:"black",strokeWidth:"0.8"}),t.jsx("rect",{x:"17.5",y:"42",width:"4",height:"3",rx:"0.5",fill:"#4B5563",stroke:"black",strokeWidth:"0.5"}),t.jsx("rect",{x:"26.5",y:"42",width:"4",height:"3",rx:"0.5",fill:"#4B5563",stroke:"black",strokeWidth:"0.5"})]}),ll=({primaryColor:e="#4ADE80",secondaryColor:i="#22C55E",accentColor:s="#FDE047",size:r=48})=>t.jsxs("svg",{width:r,height:r,viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("ellipse",{cx:"24",cy:"20",rx:"9",ry:"10",fill:e,stroke:i,strokeWidth:"1.5"}),t.jsx("path",{d:"M24 10L22 13L24 12L26 13Z",fill:"#EF4444",stroke:"#DC2626",strokeWidth:"0.5"}),t.jsx("path",{d:"M24 12L22.5 15L24 14L25.5 15Z",fill:"#F97316",stroke:"#EA580C",strokeWidth:"0.5"}),t.jsx("path",{d:"M24 14L23 17L24 16L25 17Z",fill:"#FBBF24",stroke:"#F59E0B",strokeWidth:"0.5"}),t.jsx("circle",{cx:"20",cy:"18",r:"3.5",fill:s,stroke:i,strokeWidth:"1"}),t.jsx("circle",{cx:"28",cy:"18",r:"3.5",fill:s,stroke:i,strokeWidth:"1"}),t.jsx("circle",{cx:"20",cy:"18",r:"2",fill:"black"}),t.jsx("circle",{cx:"28",cy:"18",r:"2",fill:"black"}),t.jsx("circle",{cx:"20.8",cy:"17.2",r:"0.8",fill:"white"}),t.jsx("circle",{cx:"28.8",cy:"17.2",r:"0.8",fill:"white"}),t.jsx("path",{d:"M24 24Q20 26 18 25Q20 27 24 27Q28 27 30 25Q28 26 24 24Z",fill:i,stroke:i,strokeWidth:"1"}),t.jsx("path",{d:"M20 25L19.5 26.5L20 26Z",fill:"white"}),t.jsx("path",{d:"M22 25L21.5 27L22 26Z",fill:"white"}),t.jsx("path",{d:"M26 25L26.5 27L26 26Z",fill:"white"}),t.jsx("path",{d:"M28 25L28.5 26.5L28 26Z",fill:"white"}),t.jsx("ellipse",{cx:"14",cy:"20",rx:"3",ry:"4",fill:e,stroke:i,strokeWidth:"1",transform:"rotate(-20 14 20)"}),t.jsx("ellipse",{cx:"34",cy:"20",rx:"3",ry:"4",fill:e,stroke:i,strokeWidth:"1",transform:"rotate(20 34 20)"}),t.jsx("path",{d:"M14 18Q12 20 14 22",stroke:i,strokeWidth:"0.5",fill:"none",opacity:"0.5"}),t.jsx("path",{d:"M34 18Q36 20 34 22",stroke:i,strokeWidth:"0.5",fill:"none",opacity:"0.5"}),t.jsx("ellipse",{cx:"24",cy:"34",rx:"7",ry:"8",fill:e,stroke:i,strokeWidth:"1.5"}),t.jsx("ellipse",{cx:"24",cy:"35",rx:"4.5",ry:"5",fill:s,opacity:"0.3"}),t.jsx("path",{d:"M17 30Q14 32 13 36",stroke:e,strokeWidth:"2.5",strokeLinecap:"round"}),t.jsx("path",{d:"M31 30Q34 32 35 36",stroke:e,strokeWidth:"2.5",strokeLinecap:"round"}),t.jsx("circle",{cx:"13",cy:"36",r:"2",fill:e,stroke:i,strokeWidth:"0.8"}),t.jsx("circle",{cx:"35",cy:"36",r:"2",fill:e,stroke:i,strokeWidth:"0.8"}),t.jsx("path",{d:"M12 35L11 34M13 35L13 34M14 35L15 34",stroke:i,strokeWidth:"0.5"}),t.jsx("path",{d:"M36 35L37 34M35 35L35 34M34 35L33 34",stroke:i,strokeWidth:"0.5"}),t.jsx("ellipse",{cx:"20",cy:"42",rx:"2.5",ry:"1.5",fill:e,stroke:i,strokeWidth:"0.8"}),t.jsx("ellipse",{cx:"28",cy:"42",rx:"2.5",ry:"1.5",fill:e,stroke:i,strokeWidth:"0.8"})]}),nl=({primaryColor:e="#E8E8E8",secondaryColor:i="#D3D3D3",accentColor:s="#A9A9A9",size:r=48})=>t.jsxs("svg",{width:r,height:r,viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("ellipse",{cx:"24",cy:"16",rx:"9",ry:"10",fill:e,stroke:s,strokeWidth:"1.5"}),t.jsx("path",{d:"M17 14Q24 13 31 14",stroke:s,strokeWidth:"0.8",opacity:"0.5"}),t.jsx("path",{d:"M16 18Q24 17 32 18",stroke:s,strokeWidth:"0.8",opacity:"0.5"}),t.jsx("ellipse",{cx:"20",cy:"15",rx:"2.5",ry:"3.5",fill:"black"}),t.jsx("ellipse",{cx:"28",cy:"15",rx:"2.5",ry:"3.5",fill:"black"}),t.jsx("circle",{cx:"20",cy:"14.5",r:"1.2",fill:"#DC2626",opacity:"0.9"}),t.jsx("circle",{cx:"28",cy:"14.5",r:"1.2",fill:"#DC2626",opacity:"0.9"}),t.jsx("circle",{cx:"20.5",cy:"14",r:"0.5",fill:"#FCA5A5",opacity:"0.8"}),t.jsx("circle",{cx:"28.5",cy:"14",r:"0.5",fill:"#FCA5A5",opacity:"0.8"}),t.jsx("line",{x1:"17",y1:"12",x2:"19",y2:"14",stroke:s,strokeWidth:"0.6",opacity:"0.6"}),t.jsx("line",{x1:"29",y1:"12",x2:"31",y2:"14",stroke:s,strokeWidth:"0.6",opacity:"0.6"}),t.jsx("path",{d:"M24 18L22 21L26 21Z",fill:"black"}),t.jsx("path",{d:"M23 21L22.5 22M25 21L25.5 22",stroke:s,strokeWidth:"0.5",opacity:"0.5"}),t.jsx("path",{d:"M18 22Q24 23 30 22",stroke:s,strokeWidth:"1",fill:"none"}),t.jsx("rect",{x:"19",y:"22",width:"1.2",height:"2.5",rx:"0.2",fill:i,stroke:s,strokeWidth:"0.3"}),t.jsx("rect",{x:"21",y:"22",width:"1.2",height:"2.5",rx:"0.2",fill:i,stroke:s,strokeWidth:"0.3"}),t.jsx("rect",{x:"23",y:"22",width:"1.2",height:"2.8",rx:"0.2",fill:e,stroke:s,strokeWidth:"0.3"}),t.jsx("rect",{x:"25",y:"22",width:"1.2",height:"2.8",rx:"0.2",fill:e,stroke:s,strokeWidth:"0.3"}),t.jsx("rect",{x:"27",y:"22",width:"1.2",height:"2.5",rx:"0.2",fill:i,stroke:s,strokeWidth:"0.3"}),t.jsx("rect",{x:"20",y:"24.5",width:"1",height:"2",rx:"0.2",fill:i,opacity:"0.7"}),t.jsx("rect",{x:"22",y:"24.5",width:"1",height:"2",rx:"0.2",fill:i,opacity:"0.7"}),t.jsx("rect",{x:"26",y:"24.5",width:"1",height:"2",rx:"0.2",fill:i,opacity:"0.7"}),t.jsx("rect",{x:"22.5",y:"26",width:"3",height:"2",rx:"0.5",fill:e,stroke:s,strokeWidth:"0.5"}),t.jsx("circle",{cx:"24",cy:"27",r:"1",fill:i}),t.jsx("rect",{x:"22.5",y:"28",width:"3",height:"2",rx:"0.5",fill:e,stroke:s,strokeWidth:"0.5"}),t.jsx("circle",{cx:"24",cy:"29",r:"1",fill:i}),t.jsx("rect",{x:"22.5",y:"30",width:"3",height:"2",rx:"0.5",fill:e,stroke:s,strokeWidth:"0.5"}),t.jsx("circle",{cx:"24",cy:"31",r:"1",fill:i}),t.jsx("ellipse",{cx:"24",cy:"35",rx:"7",ry:"6",fill:"none",stroke:e,strokeWidth:"1.8"}),t.jsx("line",{x1:"24",y1:"30",x2:"24",y2:"40",stroke:e,strokeWidth:"1.8"}),t.jsx("path",{d:"M19 32Q24 31 29 32",stroke:e,strokeWidth:"1.2",fill:"none"}),t.jsx("path",{d:"M18 34Q24 33 30 34",stroke:e,strokeWidth:"1.2",fill:"none"}),t.jsx("path",{d:"M18 36Q24 35 30 36",stroke:e,strokeWidth:"1.2",fill:"none"}),t.jsx("path",{d:"M19 38Q24 37 29 38",stroke:e,strokeWidth:"1.2",fill:"none"}),t.jsx("line",{x1:"18",y1:"27",x2:"24",y2:"26",stroke:e,strokeWidth:"1.5"}),t.jsx("line",{x1:"30",y1:"27",x2:"24",y2:"26",stroke:e,strokeWidth:"1.5"}),t.jsx("line",{x1:"18",y1:"28",x2:"14",y2:"33",stroke:e,strokeWidth:"2",strokeLinecap:"round"}),t.jsx("circle",{cx:"14",cy:"33",r:"1.2",fill:i,stroke:s,strokeWidth:"0.5"}),t.jsx("line",{x1:"14",y1:"33",x2:"11",y2:"38",stroke:e,strokeWidth:"1.8",strokeLinecap:"round"}),t.jsx("line",{x1:"30",y1:"28",x2:"34",y2:"33",stroke:e,strokeWidth:"2",strokeLinecap:"round"}),t.jsx("circle",{cx:"34",cy:"33",r:"1.2",fill:i,stroke:s,strokeWidth:"0.5"}),t.jsx("line",{x1:"34",y1:"33",x2:"37",y2:"38",stroke:e,strokeWidth:"1.8",strokeLinecap:"round"}),t.jsx("path",{d:"M10 38L9 40M11 38L11 41M12 38L13 40",stroke:e,strokeWidth:"1.2",strokeLinecap:"round"}),t.jsx("path",{d:"M36 38L35 40M37 38L37 41M38 38L39 40",stroke:e,strokeWidth:"1.2",strokeLinecap:"round"}),t.jsx("ellipse",{cx:"24",cy:"41",rx:"5",ry:"3",fill:"none",stroke:e,strokeWidth:"1.5"}),t.jsx("line",{x1:"21",y1:"42",x2:"19",y2:"46",stroke:e,strokeWidth:"1.8",strokeLinecap:"round"}),t.jsx("line",{x1:"27",y1:"42",x2:"29",y2:"46",stroke:e,strokeWidth:"1.8",strokeLinecap:"round"}),t.jsx("circle",{cx:"24",cy:"30",r:"16",fill:"#DC2626",opacity:"0.05"}),t.jsx("circle",{cx:"15",cy:"20",r:"1",fill:"#DC2626",opacity:"0.3"}),t.jsx("circle",{cx:"33",cy:"20",r:"1",fill:"#DC2626",opacity:"0.3"})]}),al=({primaryColor:e="#F3F4F6",secondaryColor:i="#A3A3A3",accentColor:s="#DC2626",size:r=48})=>t.jsxs("svg",{width:r,height:r,viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("path",{d:"M12 24Q10 38 24 40Q38 38 36 24Q35 16 24 12Q13 16 12 24Z",fill:e,opacity:"0.85",stroke:i,strokeWidth:"1.5"}),t.jsx("ellipse",{cx:"24",cy:"18",rx:"7",ry:"6",fill:e,opacity:"0.95",stroke:i,strokeWidth:"1.2"}),t.jsx("ellipse",{cx:"21",cy:"17",rx:"1.5",ry:"2.2",fill:s,opacity:"0.85"}),t.jsx("ellipse",{cx:"27",cy:"17",rx:"1.5",ry:"2.2",fill:s,opacity:"0.85"}),t.jsx("ellipse",{cx:"21",cy:"17",rx:"0.7",ry:"1.2",fill:"white",opacity:"0.7"}),t.jsx("ellipse",{cx:"27",cy:"17",rx:"0.7",ry:"1.2",fill:"white",opacity:"0.7"}),t.jsx("path",{d:"M22 20Q24 23 26 20Q24 22 22 20Z",fill:"black",opacity:"0.5"}),t.jsx("path",{d:"M15 22Q10 28 16 34Q18 36 19 34Q17 32 15 22Z",fill:e,opacity:"0.6"}),t.jsx("path",{d:"M33 22Q38 28 32 34Q30 36 29 34Q31 32 33 22Z",fill:e,opacity:"0.6"}),t.jsx("path",{d:"M14 38Q18 44 24 41Q30 44 34 38",stroke:i,strokeWidth:"1.5"}),t.jsx("path",{d:"M18 41Q20 44 22 41",stroke:i,strokeWidth:"1",opacity:"0.7"}),t.jsx("path",{d:"M26 41Q28 44 30 41",stroke:i,strokeWidth:"1",opacity:"0.7"}),t.jsx("ellipse",{cx:"24",cy:"30",rx:"14",ry:"18",fill:s,opacity:"0.07"}),t.jsx("ellipse",{cx:"24",cy:"24",rx:"18",ry:"10",fill:e,opacity:"0.04"})]}),ol=({primaryColor:e="#A3A3A3",secondaryColor:i="#57534E",accentColor:s="#F59E0B",size:r=48})=>t.jsxs("svg",{width:r,height:r,viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("ellipse",{cx:"24",cy:"32",rx:"9",ry:"8",fill:e,stroke:i,strokeWidth:"2"}),t.jsx("ellipse",{cx:"24",cy:"18",rx:"7",ry:"6",fill:e,stroke:i,strokeWidth:"2"}),t.jsx("ellipse",{cx:"21",cy:"16",rx:"1.2",ry:"2",fill:s}),t.jsx("ellipse",{cx:"27",cy:"16",rx:"1.2",ry:"2",fill:s}),t.jsx("ellipse",{cx:"14",cy:"28",rx:"3",ry:"7",fill:i,opacity:"0.7"}),t.jsx("ellipse",{cx:"34",cy:"28",rx:"3",ry:"7",fill:i,opacity:"0.7"}),t.jsx("rect",{x:"21",y:"38",width:"2",height:"4",rx:"0.5",fill:i}),t.jsx("rect",{x:"25",y:"38",width:"2",height:"4",rx:"0.5",fill:i})]}),cl=({primaryColor:e="#6B7C59",secondaryColor:i="#4A5842",accentColor:s="#8B4513",size:r=48})=>t.jsxs("svg",{width:r,height:r,viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("ellipse",{cx:"24",cy:"34",rx:"10",ry:"11",fill:e,stroke:i,strokeWidth:"1.5",opacity:"0.95"}),t.jsx("path",{d:"M18 30L20 32",stroke:"#8B0000",strokeWidth:"1.5",opacity:"0.7"}),t.jsx("path",{d:"M28 32L30 34",stroke:"#8B0000",strokeWidth:"1.5",opacity:"0.7"}),t.jsx("ellipse",{cx:"20",cy:"32",rx:"2",ry:"3",fill:"#4A5842",opacity:"0.6"}),t.jsx("ellipse",{cx:"28",cy:"35",rx:"2.5",ry:"3",fill:"#4A5842",opacity:"0.6"}),t.jsx("path",{d:"M20 34Q24 33 28 34",stroke:"#D3D3D3",strokeWidth:"0.8",opacity:"0.4"}),t.jsx("path",{d:"M20 36Q24 35 28 36",stroke:"#D3D3D3",strokeWidth:"0.8",opacity:"0.4"}),t.jsx("ellipse",{cx:"24",cy:"16",rx:"8.5",ry:"9",fill:e,stroke:i,strokeWidth:"1.5"}),t.jsx("path",{d:"M17 14Q24 13 31 14",stroke:i,strokeWidth:"1",opacity:"0.5"}),t.jsx("ellipse",{cx:"19",cy:"12",rx:"1.5",ry:"2",fill:"#4A5842",opacity:"0.5"}),t.jsx("ellipse",{cx:"29",cy:"13",rx:"1.5",ry:"2",fill:"#4A5842",opacity:"0.5"}),t.jsx("path",{d:"M17 9L16 6",stroke:s,strokeWidth:"2",strokeLinecap:"round",opacity:"0.7"}),t.jsx("path",{d:"M20 8L19 5",stroke:s,strokeWidth:"1.8",strokeLinecap:"round",opacity:"0.6"}),t.jsx("path",{d:"M24 7L24 4",stroke:s,strokeWidth:"1.5",strokeLinecap:"round",opacity:"0.5"}),t.jsx("path",{d:"M28 8L29 5",stroke:s,strokeWidth:"1.8",strokeLinecap:"round",opacity:"0.6"}),t.jsx("path",{d:"M31 10L32 7",stroke:s,strokeWidth:"2",strokeLinecap:"round",opacity:"0.7"}),t.jsx("ellipse",{cx:"20",cy:"15",rx:"2.5",ry:"3",fill:"#F5F5DC",opacity:"0.9"}),t.jsx("ellipse",{cx:"28",cy:"15",rx:"2.5",ry:"3",fill:"#F5F5DC",opacity:"0.9"}),t.jsx("circle",{cx:"20",cy:"15.5",r:"1.5",fill:"#696969",opacity:"0.6"}),t.jsx("circle",{cx:"28",cy:"15.5",r:"1.5",fill:"#696969",opacity:"0.6"}),t.jsx("line",{x1:"18",y1:"14",x2:"17",y2:"15",stroke:"#8B0000",strokeWidth:"0.5",opacity:"0.6"}),t.jsx("line",{x1:"30",y1:"14",x2:"31",y2:"15",stroke:"#8B0000",strokeWidth:"0.5",opacity:"0.6"}),t.jsx("ellipse",{cx:"24",cy:"21",rx:"4",ry:"2.5",fill:"black",opacity:"0.7"}),t.jsx("path",{d:"M21 20Q24 22 27 20",stroke:"#4A5842",strokeWidth:"1",fill:"none"}),t.jsx("rect",{x:"21",y:"19.5",width:"1.2",height:"2",rx:"0.2",fill:"#D2B48C",opacity:"0.8"}),t.jsx("rect",{x:"23.5",y:"19.5",width:"1",height:"1.5",rx:"0.2",fill:"#D2B48C",opacity:"0.7"}),t.jsx("rect",{x:"25.5",y:"19.5",width:"1.2",height:"2",rx:"0.2",fill:"#D2B48C",opacity:"0.8"}),t.jsx("ellipse",{cx:"28",cy:"18",rx:"1.5",ry:"1",fill:"#8B0000",opacity:"0.6"}),t.jsx("path",{d:"M17 18L19 20",stroke:"#8B0000",strokeWidth:"1.2",opacity:"0.6"}),t.jsx("circle",{cx:"26",cy:"12",r:"0.8",fill:"#8B0000",opacity:"0.5"}),t.jsx("path",{d:"M24 17L23 19L25 19Z",fill:"#4A5842",opacity:"0.6"}),t.jsx("path",{d:"M15 30Q12 32 10 35",stroke:e,strokeWidth:"3",strokeLinecap:"round"}),t.jsx("path",{d:"M33 30Q36 32 38 35",stroke:e,strokeWidth:"3",strokeLinecap:"round"}),t.jsx("path",{d:"M12 33L11 34",stroke:"#4A5842",strokeWidth:"1.5",opacity:"0.5"}),t.jsx("path",{d:"M36 33L37 34",stroke:"#4A5842",strokeWidth:"1.5",opacity:"0.5"}),t.jsx("ellipse",{cx:"10",cy:"35",rx:"2",ry:"2.5",fill:e,stroke:i,strokeWidth:"1"}),t.jsx("ellipse",{cx:"38",cy:"35",rx:"2",ry:"2.5",fill:e,stroke:i,strokeWidth:"1"}),t.jsx("path",{d:"M9 36L8 38M10 36L10 39M11 36L12 38",stroke:i,strokeWidth:"1.2",strokeLinecap:"round"}),t.jsx("path",{d:"M37 36L36 38M38 36L38 39M39 36L40 38",stroke:i,strokeWidth:"1.2",strokeLinecap:"round"}),t.jsx("circle",{cx:"8",cy:"38",r:"0.4",fill:"black"}),t.jsx("circle",{cx:"10",cy:"39",r:"0.4",fill:"black"}),t.jsx("circle",{cx:"12",cy:"38",r:"0.4",fill:"black"}),t.jsx("circle",{cx:"36",cy:"38",r:"0.4",fill:"black"}),t.jsx("circle",{cx:"38",cy:"39",r:"0.4",fill:"black"}),t.jsx("circle",{cx:"40",cy:"38",r:"0.4",fill:"black"}),t.jsx("path",{d:"M18 40Q20 42 22 41",stroke:s,strokeWidth:"1.5",fill:"none",opacity:"0.6"}),t.jsx("path",{d:"M26 40Q28 42 30 41",stroke:s,strokeWidth:"1.5",fill:"none",opacity:"0.6"}),t.jsx("circle",{cx:"22",cy:"28",r:"1.2",fill:"#8B0000",opacity:"0.5"}),t.jsx("circle",{cx:"26",cy:"31",r:"1",fill:"#8B0000",opacity:"0.5"}),t.jsx("circle",{cx:"24",cy:"36",r:"0.8",fill:"#4A5842",opacity:"0.4"}),t.jsx("ellipse",{cx:"20",cy:"38",rx:"1.5",ry:"1",fill:"#4A5842",opacity:"0.3"}),t.jsx("path",{d:"M20 42Q19 44 18 46",stroke:e,strokeWidth:"2.5",strokeLinecap:"round"}),t.jsx("path",{d:"M28 42Q29 44 30 46",stroke:e,strokeWidth:"2.5",strokeLinecap:"round"}),t.jsx("circle",{cx:"14",cy:"20",r:"0.6",fill:"black",opacity:"0.4"}),t.jsx("circle",{cx:"34",cy:"22",r:"0.6",fill:"black",opacity:"0.4"}),t.jsx("circle",{cx:"18",cy:"26",r:"0.5",fill:"black",opacity:"0.4"}),t.jsx("ellipse",{cx:"24",cy:"30",rx:"14",ry:"18",fill:"#4A5842",opacity:"0.08"})]}),dl=({primaryColor:e="#A7F3D0",secondaryColor:i="#38BDF8",accentColor:s="#F0F9FF",size:r=64})=>t.jsxs("svg",{width:r,height:r,viewBox:"0 0 64 64",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("defs",{children:t.jsxs("radialGradient",{id:"windTornado",cx:"24",cy:"24",r:"20",gradientUnits:"userSpaceOnUse",children:[t.jsx("stop",{offset:"0%",stopColor:s}),t.jsx("stop",{offset:"60%",stopColor:e}),t.jsx("stop",{offset:"100%",stopColor:i})]})}),t.jsx("path",{d:"M32 60C44 52 52 44 32 38C12 44 20 52 32 60Z",fill:"url(#windTornado)",stroke:i,strokeWidth:"2.5"}),t.jsx("path",{d:"M32 60C38 54 44 48 32 44C20 48 26 54 32 60Z",fill:s,opacity:"0.3"}),t.jsx("ellipse",{cx:"20",cy:"44",rx:"7",ry:"3.5",fill:s,opacity:"0.7"}),t.jsx("ellipse",{cx:"44",cy:"44",rx:"6",ry:"3",fill:s,opacity:"0.7"}),t.jsx("ellipse",{cx:"32",cy:"28",rx:"10",ry:"4",fill:s,opacity:"0.5"}),t.jsx("ellipse",{cx:"32",cy:"52",rx:"12",ry:"3.5",fill:e,opacity:"0.2"}),t.jsx("ellipse",{cx:"32",cy:"56",rx:"21",ry:"9",fill:e,opacity:"0.08"}),t.jsx("ellipse",{cx:"28",cy:"36",rx:"2.2",ry:"3.2",fill:"#18181B"}),t.jsx("ellipse",{cx:"36",cy:"36",rx:"2.2",ry:"3.2",fill:"#18181B"}),t.jsx("circle",{cx:"28",cy:"36",r:"1.2",fill:i}),t.jsx("circle",{cx:"36",cy:"36",r:"1.2",fill:i})]}),xl=({primaryColor:e="#A3A3A3",secondaryColor:i="#78716C",accentColor:s="#D6D3D1",size:r=64})=>t.jsxs("svg",{width:r,height:r,viewBox:"0 0 64 64",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("defs",{children:t.jsxs("radialGradient",{id:"rockBody",cx:"24",cy:"28",r:"18",gradientUnits:"userSpaceOnUse",children:[t.jsx("stop",{offset:"0%",stopColor:s}),t.jsx("stop",{offset:"60%",stopColor:e}),t.jsx("stop",{offset:"100%",stopColor:i})]})}),t.jsx("ellipse",{cx:"32",cy:"44",rx:"18",ry:"12",fill:"url(#rockBody)",stroke:i,strokeWidth:"2.5"}),t.jsx("ellipse",{cx:"20",cy:"50",rx:"7",ry:"4",fill:e,opacity:"0.7"}),t.jsx("ellipse",{cx:"44",cy:"50",rx:"6",ry:"3.5",fill:e,opacity:"0.7"}),t.jsx("ellipse",{cx:"38",cy:"34",rx:"4",ry:"2.5",fill:i,opacity:"0.6"}),t.jsx("ellipse",{cx:"26",cy:"34",rx:"3.5",ry:"2",fill:i,opacity:"0.6"}),t.jsx("ellipse",{cx:"28",cy:"40",rx:"2.2",ry:"3.2",fill:"#18181B"}),t.jsx("ellipse",{cx:"36",cy:"40",rx:"2.2",ry:"3.2",fill:"#18181B"}),t.jsx("circle",{cx:"28",cy:"40",r:"1.2",fill:e}),t.jsx("circle",{cx:"36",cy:"40",r:"1.2",fill:e}),t.jsx("path",{d:"M28 46Q32 48 36 46",stroke:s,strokeWidth:"1.5",strokeLinecap:"round"}),t.jsx("circle",{cx:"16",cy:"34",r:"1.5",fill:s,opacity:"0.5"}),t.jsx("circle",{cx:"48",cy:"34",r:"1.5",fill:s,opacity:"0.5"}),t.jsx("circle",{cx:"32",cy:"60",r:"2",fill:i,opacity:"0.3"}),t.jsx("ellipse",{cx:"32",cy:"56",rx:"21",ry:"9",fill:e,opacity:"0.08"})]}),hl=({primaryColor:e="#60A5FA",secondaryColor:i="#3B82F6",accentColor:s="#DBEAFE",size:r=64})=>t.jsxs("svg",{width:r,height:r,viewBox:"0 0 64 64",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("defs",{children:t.jsxs("radialGradient",{id:"waterDrop",cx:"24",cy:"24",r:"20",gradientUnits:"userSpaceOnUse",children:[t.jsx("stop",{offset:"0%",stopColor:s}),t.jsx("stop",{offset:"60%",stopColor:e}),t.jsx("stop",{offset:"100%",stopColor:i})]})}),t.jsx("path",{d:"M32 60Q48 38 32 12Q16 38 32 60Z",fill:"url(#waterDrop)",stroke:i,strokeWidth:"2.5"}),t.jsx("ellipse",{cx:"32",cy:"44",rx:"10",ry:"4",fill:s,opacity:"0.3"}),t.jsx("ellipse",{cx:"32",cy:"52",rx:"7",ry:"3",fill:e,opacity:"0.15"}),t.jsx("circle",{cx:"24",cy:"56",r:"1.5",fill:s,opacity:"0.6"}),t.jsx("circle",{cx:"40",cy:"56",r:"1.5",fill:s,opacity:"0.6"}),t.jsx("circle",{cx:"32",cy:"60",r:"2",fill:s,opacity:"0.5"}),t.jsx("ellipse",{cx:"32",cy:"56",rx:"18",ry:"9",fill:e,opacity:"0.08"}),t.jsx("ellipse",{cx:"28",cy:"36",rx:"2.2",ry:"3.2",fill:"#18181B"}),t.jsx("ellipse",{cx:"36",cy:"36",rx:"2.2",ry:"3.2",fill:"#18181B"}),t.jsx("circle",{cx:"28",cy:"36",r:"1.2",fill:e}),t.jsx("circle",{cx:"36",cy:"36",r:"1.2",fill:e})]}),pl=({primaryColor:e="#EF4444",secondaryColor:i="#F97316",accentColor:s="#FBBF24",size:r=64})=>t.jsxs("svg",{width:r,height:r,viewBox:"0 0 64 64",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("defs",{children:t.jsxs("radialGradient",{id:"flameTornado",cx:"24",cy:"24",r:"20",gradientUnits:"userSpaceOnUse",children:[t.jsx("stop",{offset:"0%",stopColor:s}),t.jsx("stop",{offset:"40%",stopColor:i}),t.jsx("stop",{offset:"100%",stopColor:e})]})}),t.jsx("path",{d:"M32 60C42 54 52 44 40 38C56 32 48 20 32 26C16 20 8 32 24 38C12 44 22 54 32 60Z",fill:"url(#flameTornado)",stroke:e,strokeWidth:"2.5"}),t.jsx("path",{d:"M32 60C36 52 44 46 32 40C20 46 28 52 32 60Z",fill:s,opacity:"0.3"}),t.jsx("ellipse",{cx:"32",cy:"44",rx:"10",ry:"4",fill:s,opacity:"0.4"}),t.jsx("circle",{cx:"24",cy:"52",r:"1.5",fill:s,opacity:"0.7"}),t.jsx("circle",{cx:"40",cy:"52",r:"1.5",fill:s,opacity:"0.7"}),t.jsx("circle",{cx:"32",cy:"56",r:"2",fill:i,opacity:"0.5"}),t.jsx("ellipse",{cx:"32",cy:"56",rx:"18",ry:"9",fill:e,opacity:"0.08"}),t.jsx("ellipse",{cx:"28",cy:"36",rx:"2.2",ry:"3.2",fill:"#18181B"}),t.jsx("ellipse",{cx:"36",cy:"36",rx:"2.2",ry:"3.2",fill:"#18181B"}),t.jsx("circle",{cx:"28",cy:"36",r:"1.2",fill:e}),t.jsx("circle",{cx:"36",cy:"36",r:"1.2",fill:e})]}),fl=({primaryColor:e="#8B0000",secondaryColor:i="#DC143C",accentColor:s="#FFD700",size:r=48})=>t.jsxs("svg",{width:r,height:r,viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("ellipse",{cx:"24",cy:"32",rx:"10",ry:"10",fill:e,stroke:"black",strokeWidth:"1.5"}),t.jsx("ellipse",{cx:"24",cy:"16",rx:"8",ry:"7",fill:e,stroke:"black",strokeWidth:"1.5"}),t.jsx("path",{d:"M18 12Q16 8 14 10",stroke:"black",strokeWidth:"2",fill:i,strokeLinecap:"round"}),t.jsx("path",{d:"M30 12Q32 8 34 10",stroke:"black",strokeWidth:"2",fill:i,strokeLinecap:"round"}),t.jsx("ellipse",{cx:"21",cy:"15",rx:"2.5",ry:"3",fill:s}),t.jsx("ellipse",{cx:"27",cy:"15",rx:"2.5",ry:"3",fill:s}),t.jsx("circle",{cx:"21",cy:"15",r:"1",fill:"#FF4500"}),t.jsx("circle",{cx:"27",cy:"15",r:"1",fill:"#FF4500"}),t.jsx("circle",{cx:"21",cy:"14.5",r:"0.5",fill:"white",opacity:"0.8"}),t.jsx("circle",{cx:"27",cy:"14.5",r:"0.5",fill:"white",opacity:"0.8"}),t.jsx("path",{d:"M24 17L23 19L25 19Z",fill:"black"}),t.jsx("path",{d:"M20 20Q24 23 28 20",stroke:"black",strokeWidth:"1.5",fill:i}),t.jsx("path",{d:"M22 20L21 24",stroke:"white",strokeWidth:"1.5",strokeLinecap:"round"}),t.jsx("path",{d:"M26 20L27 24",stroke:"white",strokeWidth:"1.5",strokeLinecap:"round"}),t.jsx("path",{d:"M13 30Q8 26 10 35",fill:i,stroke:"black",strokeWidth:"1"}),t.jsx("path",{d:"M35 30Q40 26 38 35",fill:i,stroke:"black",strokeWidth:"1"}),t.jsx("path",{d:"M24 40Q26 44 28 42",stroke:e,strokeWidth:"2",strokeLinecap:"round"}),t.jsx("path",{d:"M28 42L30 44",stroke:e,strokeWidth:"1.5",strokeLinecap:"round"}),t.jsx("path",{d:"M28 42L26 44",stroke:e,strokeWidth:"1.5",strokeLinecap:"round"}),t.jsx("circle",{cx:"24",cy:"28",r:"2.5",fill:s,opacity:"0.6"}),t.jsx("path",{d:"M24 26L24 30M22 28L26 28",stroke:i,strokeWidth:"0.8"})]}),ul=({primaryColor:e="#DC2626",secondaryColor:i="#991B1B",accentColor:s="#FBBF24",size:r=48})=>t.jsxs("svg",{width:r,height:r,viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("ellipse",{cx:"24",cy:"18",rx:"7",ry:"6.5",fill:e,stroke:i,strokeWidth:"1.5"}),t.jsx("path",{d:"M19 13L17 9",stroke:i,strokeWidth:"2",strokeLinecap:"round"}),t.jsx("path",{d:"M29 13L31 9",stroke:i,strokeWidth:"2",strokeLinecap:"round"}),t.jsx("circle",{cx:"17",cy:"9",r:"1.5",fill:i}),t.jsx("circle",{cx:"31",cy:"9",r:"1.5",fill:i}),t.jsx("path",{d:"M16 16L12 14L15 18Z",fill:e,stroke:i,strokeWidth:"1"}),t.jsx("path",{d:"M32 16L36 14L33 18Z",fill:e,stroke:i,strokeWidth:"1"}),t.jsx("circle",{cx:"21",cy:"17",r:"2.5",fill:s}),t.jsx("circle",{cx:"27",cy:"17",r:"2.5",fill:s}),t.jsx("circle",{cx:"21",cy:"17",r:"1.5",fill:"black"}),t.jsx("circle",{cx:"27",cy:"17",r:"1.5",fill:"black"}),t.jsx("circle",{cx:"21.5",cy:"16.5",r:"0.7",fill:s,opacity:"0.9"}),t.jsx("circle",{cx:"27.5",cy:"16.5",r:"0.7",fill:s,opacity:"0.9"}),t.jsx("path",{d:"M20 21Q24 23 28 21",stroke:i,strokeWidth:"1.5",fill:"none"}),t.jsx("path",{d:"M22 21L21.5 23",stroke:"white",strokeWidth:"1",strokeLinecap:"round"}),t.jsx("path",{d:"M26 21L26.5 23",stroke:"white",strokeWidth:"1",strokeLinecap:"round"}),t.jsx("ellipse",{cx:"24",cy:"30",rx:"6",ry:"7",fill:e,stroke:i,strokeWidth:"1.5"}),t.jsx("ellipse",{cx:"24",cy:"31",rx:"4",ry:"4.5",fill:i,opacity:"0.3"}),t.jsx("path",{d:"M18 28Q14 26 13 30Q13 32 16 32",fill:i,stroke:i,strokeWidth:"1",opacity:"0.8"}),t.jsx("path",{d:"M30 28Q34 26 35 30Q35 32 32 32",fill:i,stroke:i,strokeWidth:"1",opacity:"0.8"}),t.jsx("line",{x1:"14",y1:"28",x2:"15",y2:"31",stroke:e,strokeWidth:"0.5",opacity:"0.6"}),t.jsx("line",{x1:"34",y1:"28",x2:"33",y2:"31",stroke:e,strokeWidth:"0.5",opacity:"0.6"}),t.jsx("path",{d:"M18 30Q15 32 14 35",stroke:e,strokeWidth:"2",strokeLinecap:"round"}),t.jsx("path",{d:"M30 30Q33 32 34 35",stroke:e,strokeWidth:"2",strokeLinecap:"round"}),t.jsx("line",{x1:"34",y1:"35",x2:"36",y2:"38",stroke:"#D97706",strokeWidth:"1.5"}),t.jsx("path",{d:"M35 38L35 40M36 38L36 40M37 38L37 40",stroke:"#D97706",strokeWidth:"0.8"}),t.jsx("circle",{cx:"36",cy:"38",r:"0.8",fill:s}),t.jsx("rect",{x:"20",y:"36",width:"2",height:"6",rx:"1",fill:e,stroke:i,strokeWidth:"0.8"}),t.jsx("rect",{x:"26",y:"36",width:"2",height:"6",rx:"1",fill:e,stroke:i,strokeWidth:"0.8"}),t.jsx("ellipse",{cx:"21",cy:"42",rx:"1.5",ry:"1",fill:i}),t.jsx("ellipse",{cx:"27",cy:"42",rx:"1.5",ry:"1",fill:i}),t.jsx("path",{d:"M20 42L19 43M21 42L21 43M22 42L23 43",stroke:i,strokeWidth:"0.5"}),t.jsx("path",{d:"M26 42L25 43M27 42L27 43M28 42L29 43",stroke:i,strokeWidth:"0.5"}),t.jsx("path",{d:"M24 36Q26 40 27 43",stroke:e,strokeWidth:"2",strokeLinecap:"round"}),t.jsx("path",{d:"M27 43L28 45",stroke:e,strokeWidth:"1.2",strokeLinecap:"round"}),t.jsx("path",{d:"M27 43L26 45",stroke:e,strokeWidth:"1.2",strokeLinecap:"round"}),t.jsx("path",{d:"M28 45L29 46M26 45L25 46",stroke:s,strokeWidth:"0.8",strokeLinecap:"round"}),t.jsx("circle",{cx:"12",cy:"20",r:"1",fill:"#F97316",opacity:"0.6"}),t.jsx("circle",{cx:"36",cy:"20",r:"1",fill:"#F97316",opacity:"0.6"}),t.jsx("circle",{cx:"16",cy:"34",r:"0.8",fill:"#FBBF24",opacity:"0.5"})]}),gl=({primaryColor:e="#065F46",secondaryColor:i="#047857",accentColor:s="#10B981",size:r=48})=>t.jsxs("svg",{width:r,height:r,viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("rect",{x:"17",y:"12",width:"14",height:"12",rx:"2",fill:e,stroke:"black",strokeWidth:"1.5"}),t.jsx("path",{d:"M18 14Q14 12 12 16Q11 18 13 18",stroke:"black",strokeWidth:"2.5",fill:i,strokeLinecap:"round"}),t.jsx("path",{d:"M30 14Q34 12 36 16Q37 18 35 18",stroke:"black",strokeWidth:"2.5",fill:i,strokeLinecap:"round"}),t.jsx("circle",{cx:"12.5",cy:"16",r:"1.2",fill:"#1F2937"}),t.jsx("circle",{cx:"35.5",cy:"16",r:"1.2",fill:"#1F2937"}),t.jsx("rect",{x:"23",y:"10",width:"2",height:"3",fill:i}),t.jsx("path",{d:"M22 10L24 8L26 10",fill:i,stroke:"black",strokeWidth:"0.5"}),t.jsx("rect",{x:"19",y:"17",width:"3",height:"4",rx:"0.5",fill:s,opacity:"0.9"}),t.jsx("rect",{x:"26",y:"17",width:"3",height:"4",rx:"0.5",fill:s,opacity:"0.9"}),t.jsx("rect",{x:"20",y:"18",width:"1",height:"2",fill:"#047857"}),t.jsx("rect",{x:"27",y:"18",width:"1",height:"2",fill:"#047857"}),t.jsx("circle",{cx:"20.5",cy:"19",r:"0.5",fill:"#D1FAE5"}),t.jsx("circle",{cx:"27.5",cy:"19",r:"0.5",fill:"#D1FAE5"}),t.jsx("rect",{x:"20",y:"22",width:"8",height:"2",fill:"black",opacity:"0.8"}),t.jsx("rect",{x:"20",y:"22",width:"1",height:"3",fill:"white"}),t.jsx("rect",{x:"22",y:"22",width:"1",height:"3",fill:"white"}),t.jsx("rect",{x:"25",y:"22",width:"1",height:"3",fill:"white"}),t.jsx("rect",{x:"27",y:"22",width:"1",height:"3",fill:"white"}),t.jsx("line",{x1:"17",y1:"16",x2:"15",y2:"18",stroke:"#047857",strokeWidth:"1",strokeLinecap:"round"}),t.jsx("line",{x1:"31",y1:"16",x2:"33",y2:"18",stroke:"#047857",strokeWidth:"1",strokeLinecap:"round"}),t.jsx("path",{d:"M14 24L12 26L12 30L16 32",fill:"#1F2937",stroke:"black",strokeWidth:"1"}),t.jsx("path",{d:"M34 24L36 26L36 30L32 32",fill:"#1F2937",stroke:"black",strokeWidth:"1"}),t.jsx("path",{d:"M12 26L10 25",stroke:"#4B5563",strokeWidth:"1.5",strokeLinecap:"round"}),t.jsx("path",{d:"M12 28L10 28",stroke:"#4B5563",strokeWidth:"1.5",strokeLinecap:"round"}),t.jsx("path",{d:"M36 26L38 25",stroke:"#4B5563",strokeWidth:"1.5",strokeLinecap:"round"}),t.jsx("path",{d:"M36 28L38 28",stroke:"#4B5563",strokeWidth:"1.5",strokeLinecap:"round"}),t.jsx("rect",{x:"16",y:"24",width:"16",height:"14",rx:"2",fill:e,stroke:"black",strokeWidth:"1.5"}),t.jsx("rect",{x:"18",y:"26",width:"12",height:"3",rx:"0.5",fill:"#1F2937",opacity:"0.6"}),t.jsx("rect",{x:"18",y:"31",width:"12",height:"3",rx:"0.5",fill:"#1F2937",opacity:"0.6"}),t.jsx("circle",{cx:"24",cy:"30",r:"2",fill:s,opacity:"0.4"}),t.jsx("path",{d:"M24 28L24 32M22 30L26 30",stroke:s,strokeWidth:"0.8",opacity:"0.6"}),t.jsx("rect",{x:"12",y:"28",width:"4",height:"10",rx:"1",fill:e,stroke:"black",strokeWidth:"1"}),t.jsx("rect",{x:"32",y:"28",width:"4",height:"10",rx:"1",fill:e,stroke:"black",strokeWidth:"1"}),t.jsx("rect",{x:"11",y:"36",width:"6",height:"4",rx:"0.5",fill:"#374151",stroke:"black",strokeWidth:"1"}),t.jsx("rect",{x:"31",y:"36",width:"6",height:"4",rx:"0.5",fill:"#374151",stroke:"black",strokeWidth:"1"}),t.jsx("rect",{x:"36",y:"32",width:"2",height:"12",rx:"0.3",fill:"#6B7280",stroke:"black",strokeWidth:"0.8"}),t.jsx("path",{d:"M35 32L39 32L37 28Z",fill:"#4B5563",stroke:"black",strokeWidth:"0.8"}),t.jsx("rect",{x:"36.5",y:"44",width:"1",height:"2",fill:"#8B4513"}),t.jsx("line",{x1:"37",y1:"34",x2:"37",y2:"42",stroke:s,strokeWidth:"0.5",opacity:"0.6"}),t.jsx("circle",{cx:"37",cy:"36",r:"1",fill:s,opacity:"0.3"}),t.jsx("rect",{x:"18",y:"38",width:"4",height:"7",rx:"1",fill:e,stroke:"black",strokeWidth:"1"}),t.jsx("rect",{x:"26",y:"38",width:"4",height:"7",rx:"1",fill:e,stroke:"black",strokeWidth:"1"}),t.jsx("rect",{x:"17",y:"43",width:"6",height:"3",rx:"0.5",fill:"#1F2937",stroke:"black",strokeWidth:"1"}),t.jsx("rect",{x:"25",y:"43",width:"6",height:"3",rx:"0.5",fill:"#1F2937",stroke:"black",strokeWidth:"1"}),t.jsx("circle",{cx:"10",cy:"32",r:"1.5",fill:s,opacity:"0.3"}),t.jsx("circle",{cx:"38",cy:"24",r:"1.5",fill:s,opacity:"0.3"}),t.jsx("circle",{cx:"16",cy:"42",r:"1",fill:s,opacity:"0.4"})]}),ml=({primaryColor:e="#F472B6",secondaryColor:i="#BE185D",accentColor:s="#FBBF24",size:r=48})=>t.jsxs("svg",{width:r,height:r,viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("ellipse",{cx:"24",cy:"32",rx:"8",ry:"7",fill:e,stroke:i,strokeWidth:"2"}),t.jsx("ellipse",{cx:"24",cy:"18",rx:"7",ry:"6",fill:e,stroke:i,strokeWidth:"2"}),t.jsx("ellipse",{cx:"21",cy:"16",rx:"1.2",ry:"2",fill:s}),t.jsx("ellipse",{cx:"27",cy:"16",rx:"1.2",ry:"2",fill:s}),t.jsx("ellipse",{cx:"24",cy:"20",rx:"2",ry:"1",fill:"#BE185D"}),t.jsx("ellipse",{cx:"14",cy:"28",rx:"3",ry:"7",fill:i,opacity:"0.7"}),t.jsx("ellipse",{cx:"34",cy:"28",rx:"3",ry:"7",fill:i,opacity:"0.7"})]}),yl=({primaryColor:e="#DC2626",secondaryColor:i="#991B1B",accentColor:s="#FBBF24",size:r=48})=>t.jsxs("svg",{width:r,height:r,viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("ellipse",{cx:"24",cy:"32",rx:"8",ry:"7",fill:e,stroke:i,strokeWidth:"2"}),t.jsx("ellipse",{cx:"24",cy:"18",rx:"7",ry:"6",fill:e,stroke:i,strokeWidth:"2"}),t.jsx("ellipse",{cx:"21",cy:"16",rx:"1.2",ry:"2",fill:s}),t.jsx("ellipse",{cx:"27",cy:"16",rx:"1.2",ry:"2",fill:s}),t.jsx("path",{d:"M19 13L17 9",stroke:i,strokeWidth:"2",strokeLinecap:"round"}),t.jsx("path",{d:"M29 13L31 9",stroke:i,strokeWidth:"2",strokeLinecap:"round"}),t.jsx("rect",{x:"21",y:"38",width:"2",height:"4",rx:"0.5",fill:i}),t.jsx("rect",{x:"25",y:"38",width:"2",height:"4",rx:"0.5",fill:i})]}),jl=({primaryColor:e="#60A5FA",secondaryColor:i="#3B82F6",accentColor:s="#DBEAFE",size:r=48})=>t.jsxs("svg",{width:r,height:r,viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("rect",{x:"16",y:"26",width:"16",height:"18",rx:"2",fill:e,stroke:i,strokeWidth:"2"}),t.jsx("rect",{x:"18",y:"10",width:"12",height:"14",rx:"1.5",fill:e,stroke:i,strokeWidth:"2.5"}),t.jsx("rect",{x:"21",y:"15",width:"2.5",height:"4",rx:"0.5",fill:s}),t.jsx("rect",{x:"25.5",y:"15",width:"2.5",height:"4",rx:"0.5",fill:s}),t.jsx("rect",{x:"21",y:"21",width:"6",height:"1.5",rx:"0.3",fill:"black",opacity:"0.6"}),t.jsx("rect",{x:"12",y:"24",width:"6",height:"8",rx:"1",fill:e,stroke:i,strokeWidth:"2"}),t.jsx("rect",{x:"30",y:"24",width:"6",height:"8",rx:"1",fill:e,stroke:i,strokeWidth:"2"}),t.jsx("rect",{x:"10",y:"30",width:"5",height:"12",rx:"1.5",fill:e,stroke:i,strokeWidth:"2"}),t.jsx("rect",{x:"33",y:"30",width:"5",height:"12",rx:"1.5",fill:e,stroke:i,strokeWidth:"2"}),t.jsx("rect",{x:"8",y:"40",width:"8",height:"6",rx:"1.5",fill:e,stroke:i,strokeWidth:"2"}),t.jsx("rect",{x:"32",y:"40",width:"8",height:"6",rx:"1.5",fill:e,stroke:i,strokeWidth:"2"}),t.jsx("rect",{x:"18",y:"42",width:"5",height:"5",rx:"0.5",fill:e,stroke:i,strokeWidth:"2"}),t.jsx("rect",{x:"25",y:"42",width:"5",height:"5",rx:"0.5",fill:e,stroke:i,strokeWidth:"2"})]}),kl=({primaryColor:e="#A7F3D0",secondaryColor:i="#065F46",accentColor:s="#FBBF24",size:r=48})=>t.jsxs("svg",{width:r,height:r,viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("ellipse",{cx:"24",cy:"32",rx:"10",ry:"8",fill:e,stroke:i,strokeWidth:"2"}),t.jsx("ellipse",{cx:"24",cy:"18",rx:"8",ry:"7",fill:e,stroke:i,strokeWidth:"2"}),t.jsx("ellipse",{cx:"21",cy:"16",rx:"1.5",ry:"2",fill:s}),t.jsx("ellipse",{cx:"27",cy:"16",rx:"1.5",ry:"2",fill:s}),t.jsx("ellipse",{cx:"24",cy:"22",rx:"4",ry:"2",fill:"#065F46"}),t.jsx("rect",{x:"23",y:"23",width:"2",height:"1.2",rx:"0.3",fill:"white"}),t.jsx("rect",{x:"32",y:"36",width:"8",height:"2",rx:"0.5",fill:"#A6531B"})]}),wl=({primaryColor:e="#78716C",secondaryColor:i="#57534E",accentColor:s="#A8A29E",size:r=48})=>t.jsxs("svg",{width:r,height:r,viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("rect",{x:"16",y:"26",width:"16",height:"18",rx:"2",fill:e,stroke:i,strokeWidth:"2"}),t.jsx("line",{x1:"18",y1:"30",x2:"22",y2:"28",stroke:i,strokeWidth:"1",opacity:"0.6"}),t.jsx("line",{x1:"24",y1:"32",x2:"28",y2:"30",stroke:i,strokeWidth:"1",opacity:"0.6"}),t.jsx("line",{x1:"20",y1:"36",x2:"24",y2:"34",stroke:i,strokeWidth:"1",opacity:"0.6"}),t.jsx("line",{x1:"26",y1:"38",x2:"30",y2:"36",stroke:i,strokeWidth:"1",opacity:"0.6"}),t.jsx("path",{d:"M20 32L18 30L20 28L22 30Z",fill:s,stroke:i,strokeWidth:"0.8"}),t.jsx("path",{d:"M28 36L26 34L28 32L30 34Z",fill:s,stroke:i,strokeWidth:"0.8"}),t.jsx("rect",{x:"18",y:"10",width:"12",height:"14",rx:"1.5",fill:e,stroke:i,strokeWidth:"2.5"}),t.jsx("line",{x1:"20",y1:"12",x2:"23",y2:"15",stroke:i,strokeWidth:"1.2",opacity:"0.6"}),t.jsx("line",{x1:"26",y1:"13",x2:"28",y2:"16",stroke:i,strokeWidth:"1.2",opacity:"0.6"}),t.jsx("rect",{x:"20",y:"15",width:"2.5",height:"4",rx:"0.5",fill:"black",opacity:"0.7"}),t.jsx("rect",{x:"25.5",y:"15",width:"2.5",height:"4",rx:"0.5",fill:"black",opacity:"0.7"}),t.jsx("circle",{cx:"21",cy:"17",r:"1",fill:"#FCD34D",opacity:"0.8"}),t.jsx("circle",{cx:"26.5",cy:"17",r:"1",fill:"#FCD34D",opacity:"0.8"}),t.jsx("circle",{cx:"21.3",cy:"16.7",r:"0.4",fill:"#FEF3C7"}),t.jsx("circle",{cx:"26.8",cy:"16.7",r:"0.4",fill:"#FEF3C7"}),t.jsx("rect",{x:"21",y:"21",width:"6",height:"1.5",rx:"0.3",fill:"black",opacity:"0.6"}),t.jsx("path",{d:"M22 10L20 7L22 8L24 6L26 8L28 7L26 10",fill:s,stroke:i,strokeWidth:"1"}),t.jsx("path",{d:"M20 7L19 5M24 6L24 4M28 7L29 5",stroke:i,strokeWidth:"1.2",strokeLinecap:"round"}),t.jsx("rect",{x:"12",y:"24",width:"6",height:"8",rx:"1",fill:e,stroke:i,strokeWidth:"2"}),t.jsx("rect",{x:"30",y:"24",width:"6",height:"8",rx:"1",fill:e,stroke:i,strokeWidth:"2"}),t.jsx("path",{d:"M14 26L13 24L15 25Z",fill:s,stroke:i,strokeWidth:"0.5"}),t.jsx("path",{d:"M34 26L35 24L33 25Z",fill:s,stroke:i,strokeWidth:"0.5"}),t.jsx("rect",{x:"10",y:"30",width:"5",height:"12",rx:"1.5",fill:e,stroke:i,strokeWidth:"2"}),t.jsx("rect",{x:"33",y:"30",width:"5",height:"12",rx:"1.5",fill:e,stroke:i,strokeWidth:"2"}),t.jsx("line",{x1:"11",y1:"34",x2:"13",y2:"36",stroke:i,strokeWidth:"0.8",opacity:"0.5"}),t.jsx("line",{x1:"35",y1:"34",x2:"37",y2:"36",stroke:i,strokeWidth:"0.8",opacity:"0.5"}),t.jsx("rect",{x:"8",y:"40",width:"8",height:"6",rx:"1.5",fill:e,stroke:i,strokeWidth:"2"}),t.jsx("rect",{x:"32",y:"40",width:"8",height:"6",rx:"1.5",fill:e,stroke:i,strokeWidth:"2"}),t.jsx("line",{x1:"10",y1:"42",x2:"10",y2:"44",stroke:i,strokeWidth:"1"}),t.jsx("line",{x1:"12",y1:"42",x2:"12",y2:"44",stroke:i,strokeWidth:"1"}),t.jsx("line",{x1:"14",y1:"42",x2:"14",y2:"44",stroke:i,strokeWidth:"1"}),t.jsx("line",{x1:"34",y1:"42",x2:"34",y2:"44",stroke:i,strokeWidth:"1"}),t.jsx("line",{x1:"36",y1:"42",x2:"36",y2:"44",stroke:i,strokeWidth:"1"}),t.jsx("line",{x1:"38",y1:"42",x2:"38",y2:"44",stroke:i,strokeWidth:"1"}),t.jsx("rect",{x:"18",y:"42",width:"5",height:"5",rx:"0.5",fill:e,stroke:i,strokeWidth:"2"}),t.jsx("rect",{x:"25",y:"42",width:"5",height:"5",rx:"0.5",fill:e,stroke:i,strokeWidth:"2"}),t.jsx("circle",{cx:"10",cy:"38",r:"1.2",fill:s,opacity:"0.6"}),t.jsx("circle",{cx:"38",cy:"38",r:"1.2",fill:s,opacity:"0.6"}),t.jsx("circle",{cx:"16",cy:"44",r:"0.8",fill:i,opacity:"0.5"}),t.jsx("circle",{cx:"32",cy:"44",r:"0.8",fill:i,opacity:"0.5"}),t.jsx("ellipse",{cx:"24",cy:"44",rx:"14",ry:"2",fill:i,opacity:"0.2"})]}),bl=({primaryColor:e="#A3A3A3",secondaryColor:i="#6B7280",accentColor:s="#FBBF24",size:r=48})=>t.jsxs("svg",{width:r,height:r,viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("ellipse",{cx:"24",cy:"32",rx:"10",ry:"8",fill:e,stroke:i,strokeWidth:"2"}),t.jsx("ellipse",{cx:"24",cy:"18",rx:"7",ry:"6",fill:e,stroke:i,strokeWidth:"2"}),t.jsx("ellipse",{cx:"21",cy:"16",rx:"1.2",ry:"2",fill:s}),t.jsx("ellipse",{cx:"27",cy:"16",rx:"1.2",ry:"2",fill:s}),t.jsx("ellipse",{cx:"14",cy:"28",rx:"3",ry:"7",fill:i,opacity:"0.7"}),t.jsx("ellipse",{cx:"34",cy:"28",rx:"3",ry:"7",fill:i,opacity:"0.7"}),t.jsx("path",{d:"M32 32Q38 36 40 44",stroke:s,strokeWidth:"2"}),t.jsx("path",{d:"M20 14Q18 10 22 12",stroke:i,strokeWidth:"1.2"}),t.jsx("path",{d:"M28 14Q30 10 26 12",stroke:i,strokeWidth:"1.2"})]}),vl=({primaryColor:e="#FBBF24",secondaryColor:i="#A16207",accentColor:s="#F59E42",size:r=48})=>t.jsxs("svg",{width:r,height:r,viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("ellipse",{cx:"24",cy:"32",rx:"9",ry:"7",fill:e,stroke:i,strokeWidth:"2"}),t.jsx("ellipse",{cx:"24",cy:"18",rx:"7",ry:"6",fill:e,stroke:i,strokeWidth:"2"}),t.jsx("ellipse",{cx:"21",cy:"16",rx:"1.2",ry:"2",fill:s}),t.jsx("ellipse",{cx:"27",cy:"16",rx:"1.2",ry:"2",fill:s}),t.jsx("ellipse",{cx:"14",cy:"28",rx:"3",ry:"7",fill:i,opacity:"0.7"}),t.jsx("ellipse",{cx:"34",cy:"28",rx:"3",ry:"7",fill:i,opacity:"0.7"}),t.jsx("path",{d:"M32 32Q38 36 40 44",stroke:s,strokeWidth:"2"})]}),$l=({primaryColor:e="#A3A3A3",secondaryColor:i="#6B7280",accentColor:s="#FBBF24",size:r=48})=>t.jsxs("svg",{width:r,height:r,viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("ellipse",{cx:"24",cy:"32",rx:"9",ry:"7",fill:e,stroke:i,strokeWidth:"2"}),t.jsx("ellipse",{cx:"24",cy:"18",rx:"7",ry:"6",fill:e,stroke:i,strokeWidth:"2"}),t.jsx("ellipse",{cx:"21",cy:"16",rx:"1.2",ry:"2",fill:s}),t.jsx("ellipse",{cx:"27",cy:"16",rx:"1.2",ry:"2",fill:s}),t.jsx("path",{d:"M32 32Q38 36 40 44",stroke:s,strokeWidth:"2"})]}),Ll=({primaryColor:e="#F59E0B",secondaryColor:i="#B45309",accentColor:s="#FBBF24",size:r=48})=>t.jsxs("svg",{width:r,height:r,viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("ellipse",{cx:"24",cy:"32",rx:"13",ry:"11",fill:e,stroke:i,strokeWidth:"2.5"}),t.jsx("ellipse",{cx:"24",cy:"15",rx:"9",ry:"8",fill:e,stroke:i,strokeWidth:"2.5"}),t.jsx("ellipse",{cx:"20",cy:"13",rx:"3",ry:"4",fill:s}),t.jsx("ellipse",{cx:"28",cy:"13",rx:"3",ry:"4",fill:s}),t.jsx("path",{d:"M17 9L14 4Q13 2 14 3",stroke:i,strokeWidth:"3.5",strokeLinecap:"round"}),t.jsx("path",{d:"M31 9L34 4Q35 2 34 3",stroke:i,strokeWidth:"3.5",strokeLinecap:"round"}),t.jsx("ellipse",{cx:"24",cy:"28",rx:"5",ry:"3",fill:"#FBBF24",opacity:"0.5"})]}),Ml=({primaryColor:e="#EF4444",secondaryColor:i="#DC2626",accentColor:s="#FBBF24",size:r=48})=>t.jsxs("svg",{width:r,height:r,viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("ellipse",{cx:"24",cy:"30",rx:"9",ry:"8",fill:e,stroke:i,strokeWidth:"1.5"}),t.jsx("path",{d:"M18 28Q20 26 22 28Q24 26 26 28Q28 26 30 28",stroke:i,strokeWidth:"0.8",fill:"none",opacity:"0.3"}),t.jsx("path",{d:"M18 32Q20 30 22 32Q24 30 26 32Q28 30 30 32",stroke:i,strokeWidth:"0.8",fill:"none",opacity:"0.3"}),t.jsx("ellipse",{cx:"24",cy:"17",rx:"6.5",ry:"6",fill:e,stroke:i,strokeWidth:"1.5"}),t.jsx("ellipse",{cx:"24",cy:"20",rx:"4.5",ry:"3",fill:e,stroke:i,strokeWidth:"1"}),t.jsx("circle",{cx:"22.5",cy:"20.5",r:"0.6",fill:"black"}),t.jsx("circle",{cx:"25.5",cy:"20.5",r:"0.6",fill:"black"}),t.jsx("ellipse",{cx:"21",cy:"15",rx:"2.5",ry:"3",fill:s}),t.jsx("ellipse",{cx:"27",cy:"15",rx:"2.5",ry:"3",fill:s}),t.jsx("circle",{cx:"21",cy:"15",r:"1.5",fill:"black"}),t.jsx("circle",{cx:"27",cy:"15",r:"1.5",fill:"black"}),t.jsx("circle",{cx:"21.5",cy:"14.5",r:"0.7",fill:"white"}),t.jsx("circle",{cx:"27.5",cy:"14.5",r:"0.7",fill:"white"}),t.jsx("path",{d:"M19 12L18 9",stroke:i,strokeWidth:"1.5",strokeLinecap:"round"}),t.jsx("path",{d:"M29 12L30 9",stroke:i,strokeWidth:"1.5",strokeLinecap:"round"}),t.jsx("circle",{cx:"18",cy:"9",r:"0.8",fill:i}),t.jsx("circle",{cx:"30",cy:"9",r:"0.8",fill:i}),t.jsx("path",{d:"M15 28Q12 26 13 32",fill:i,opacity:"0.5"}),t.jsx("path",{d:"M33 28Q36 26 35 32",fill:i,opacity:"0.5"}),t.jsx("line",{x1:"14",y1:"29",x2:"13",y2:"31",stroke:e,strokeWidth:"0.5",opacity:"0.4"}),t.jsx("line",{x1:"34",y1:"29",x2:"35",y2:"31",stroke:e,strokeWidth:"0.5",opacity:"0.4"}),t.jsx("path",{d:"M24 22L23.5 24L24.5 24Z",fill:s,stroke:i,strokeWidth:"0.3"}),t.jsx("path",{d:"M24 25L23.5 27L24.5 27Z",fill:s,stroke:i,strokeWidth:"0.3"}),t.jsx("path",{d:"M24 28L23.5 30L24.5 30Z",fill:s,stroke:i,strokeWidth:"0.3"}),t.jsx("path",{d:"M19 36Q18 38 17 40",stroke:e,strokeWidth:"2",strokeLinecap:"round"}),t.jsx("path",{d:"M29 36Q30 38 31 40",stroke:e,strokeWidth:"2",strokeLinecap:"round"}),t.jsx("path",{d:"M16 40L15.5 41M17 40L17 41M18 40L18.5 41",stroke:i,strokeWidth:"0.8",strokeLinecap:"round"}),t.jsx("path",{d:"M30 40L29.5 41M31 40L31 41M32 40L32.5 41",stroke:i,strokeWidth:"0.8",strokeLinecap:"round"}),t.jsx("path",{d:"M24 37Q25 40 26 42Q27 43 26.5 42",stroke:e,strokeWidth:"2",strokeLinecap:"round"}),t.jsx("path",{d:"M26 42L27 41L26 40",fill:i}),t.jsx("circle",{cx:"24",cy:"23",r:"0.8",fill:"#F97316",opacity:"0.5"}),t.jsx("circle",{cx:"22.5",cy:"24",r:"0.6",fill:"#FBBF24",opacity:"0.4"})]}),Bl=({primaryColor:e="#7C3AED",secondaryColor:i="#5B21B6",accentColor:s="#A78BFA",size:r=48})=>t.jsxs("svg",{width:r,height:r,viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("ellipse",{cx:"24",cy:"32",rx:"13",ry:"11",fill:e,stroke:i,strokeWidth:"2.5"}),t.jsx("path",{d:"M14 28Q16 26 18 28Q20 26 22 28Q24 26 26 28Q28 26 30 28Q32 26 34 28",stroke:i,strokeWidth:"1.5",fill:"none",opacity:"0.5"}),t.jsx("path",{d:"M14 32Q16 30 18 32Q20 30 22 32Q24 30 26 32Q28 30 30 32Q32 30 34 32",stroke:i,strokeWidth:"1.5",fill:"none",opacity:"0.5"}),t.jsx("path",{d:"M14 36Q16 34 18 36Q20 34 22 36Q24 34 26 36Q28 34 30 36Q32 34 34 36",stroke:i,strokeWidth:"1.5",fill:"none",opacity:"0.5"}),t.jsx("line",{x1:"18",y1:"30",x2:"22",y2:"32",stroke:s,strokeWidth:"1",opacity:"0.4"}),t.jsx("line",{x1:"26",y1:"30",x2:"30",y2:"33",stroke:s,strokeWidth:"1",opacity:"0.4"}),t.jsx("ellipse",{cx:"24",cy:"15",rx:"9",ry:"8",fill:e,stroke:i,strokeWidth:"2.5"}),t.jsx("ellipse",{cx:"24",cy:"19",rx:"7",ry:"4.5",fill:e,stroke:i,strokeWidth:"2"}),t.jsx("path",{d:"M19 20Q24 23 29 20",stroke:i,strokeWidth:"1.5",fill:"none"}),t.jsx("path",{d:"M20 20L19 23",stroke:"white",strokeWidth:"1.5",strokeLinecap:"round"}),t.jsx("path",{d:"M28 20L29 23",stroke:"white",strokeWidth:"1.5",strokeLinecap:"round"}),t.jsx("ellipse",{cx:"21.5",cy:"20",rx:"1.2",ry:"1.8",fill:"black"}),t.jsx("ellipse",{cx:"26.5",cy:"20",rx:"1.2",ry:"1.8",fill:"black"}),t.jsx("circle",{cx:"20.5",cy:"19",r:"1",fill:s,opacity:"0.4"}),t.jsx("circle",{cx:"27.5",cy:"19",r:"1",fill:s,opacity:"0.4"}),t.jsx("ellipse",{cx:"20",cy:"13",rx:"3",ry:"4",fill:s}),t.jsx("ellipse",{cx:"28",cy:"13",rx:"3",ry:"4",fill:s}),t.jsx("ellipse",{cx:"20",cy:"13",rx:"1.2",ry:"3",fill:"#5B21B6"}),t.jsx("ellipse",{cx:"28",cy:"13",rx:"1.2",ry:"3",fill:"#5B21B6"}),t.jsx("circle",{cx:"20",cy:"12",r:"0.7",fill:"#DDD6FE"}),t.jsx("circle",{cx:"28",cy:"12",r:"0.7",fill:"#DDD6FE"}),t.jsx("path",{d:"M17 9L14 4Q13 2 14 3",stroke:i,strokeWidth:"3.5",strokeLinecap:"round"}),t.jsx("path",{d:"M31 9L34 4Q35 2 34 3",stroke:i,strokeWidth:"3.5",strokeLinecap:"round"}),t.jsx("circle",{cx:"14",cy:"4",r:"1.5",fill:i}),t.jsx("circle",{cx:"34",cy:"4",r:"1.5",fill:i}),t.jsx("path",{d:"M16 9L14 7",stroke:i,strokeWidth:"2",strokeLinecap:"round"}),t.jsx("path",{d:"M18 10L17 7",stroke:i,strokeWidth:"1.8",strokeLinecap:"round"}),t.jsx("path",{d:"M32 9L34 7",stroke:i,strokeWidth:"2",strokeLinecap:"round"}),t.jsx("path",{d:"M30 10L31 7",stroke:i,strokeWidth:"1.8",strokeLinecap:"round"}),t.jsx("path",{d:"M11 30Q5 22 3 26Q2 30 4 36Q6 40 10 38Q12 36 11 34",fill:i,stroke:i,strokeWidth:"2",opacity:"0.9"}),t.jsx("path",{d:"M37 30Q43 22 45 26Q46 30 44 36Q42 40 38 38Q36 36 37 34",fill:i,stroke:i,strokeWidth:"2",opacity:"0.9"}),t.jsx("path",{d:"M8 32L6 34",stroke:e,strokeWidth:"1.5",opacity:"0.7"}),t.jsx("path",{d:"M10 34L8 36",stroke:e,strokeWidth:"1.5",opacity:"0.7"}),t.jsx("path",{d:"M40 32L42 34",stroke:e,strokeWidth:"1.5",opacity:"0.7"}),t.jsx("path",{d:"M38 34L40 36",stroke:e,strokeWidth:"1.5",opacity:"0.7"}),t.jsx("path",{d:"M24 21L22.5 24L25.5 24Z",fill:s,stroke:i,strokeWidth:"0.8"}),t.jsx("path",{d:"M24 25L22.5 28L25.5 28Z",fill:s,stroke:i,strokeWidth:"0.8"}),t.jsx("path",{d:"M24 29L22.5 32L25.5 32Z",fill:s,stroke:i,strokeWidth:"0.8"}),t.jsx("path",{d:"M24 33L22.5 36L25.5 36Z",fill:s,stroke:i,strokeWidth:"0.8"}),t.jsx("path",{d:"M24 37L22.5 40L25.5 40Z",fill:s,stroke:i,strokeWidth:"0.8"}),t.jsx("path",{d:"M17 41Q15 43 13 45",stroke:e,strokeWidth:"3.5",strokeLinecap:"round"}),t.jsx("path",{d:"M31 41Q33 43 35 45",stroke:e,strokeWidth:"3.5",strokeLinecap:"round"}),t.jsx("path",{d:"M11 45L10 47M13 45L13 47M15 45L16 47",stroke:i,strokeWidth:"1.5",strokeLinecap:"round"}),t.jsx("path",{d:"M33 45L32 47M35 45L35 47M37 45L38 47",stroke:i,strokeWidth:"1.5",strokeLinecap:"round"}),t.jsx("path",{d:"M24 41Q26 44 28 46Q30 47 29.5 45",stroke:e,strokeWidth:"3.5",strokeLinecap:"round"}),t.jsx("path",{d:"M28 46L30 44L28 42",fill:i,stroke:i,strokeWidth:"1.5"}),t.jsx("path",{d:"M27 45L28 43L27 42",fill:s}),t.jsx("circle",{cx:"24",cy:"32",r:"15",fill:s,opacity:"0.1"}),t.jsx("circle",{cx:"12",cy:"24",r:"2",fill:s,opacity:"0.3"}),t.jsx("circle",{cx:"36",cy:"24",r:"2",fill:s,opacity:"0.3"}),t.jsx("circle",{cx:"18",cy:"16",r:"1.5",fill:s,opacity:"0.4"}),t.jsx("circle",{cx:"30",cy:"16",r:"1.5",fill:s,opacity:"0.4"})]}),Fl=({primaryColor:e="#A3A3A3",secondaryColor:i="#6B7280",accentColor:s="#FBBF24",size:r=48})=>t.jsxs("svg",{width:r,height:r,viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("ellipse",{cx:"24",cy:"32",rx:"10",ry:"8",fill:e,stroke:i,strokeWidth:"2"}),t.jsx("ellipse",{cx:"24",cy:"18",rx:"7",ry:"6",fill:e,stroke:i,strokeWidth:"2"}),t.jsx("ellipse",{cx:"21",cy:"16",rx:"1.2",ry:"2",fill:s}),t.jsx("ellipse",{cx:"27",cy:"16",rx:"1.2",ry:"2",fill:s}),t.jsx("ellipse",{cx:"24",cy:"22",rx:"2",ry:"1",fill:i,opacity:"0.5"}),t.jsx("ellipse",{cx:"24",cy:"32",rx:"14",ry:"10",fill:s,opacity:"0.08"})]}),bt=({monster:e,size:i=64})=>{switch(e.id.replace(/-(\d+)$/,"")){case"wolf":return t.jsx(el,{size:i});case"fox":return t.jsx(Jr,{size:i});case"boar":return t.jsx(tl,{size:i});case"owl":return t.jsx(Kr,{size:i});case"giant-rat":return t.jsx(il,{size:i});case"bandit":return t.jsx(rl,{size:i});case"murloc":return t.jsx(ll,{size:i});case"thief":return t.jsx(sl,{size:i});case"skeleton":return t.jsx(nl,{size:i});case"gargoyle":return t.jsx(ol,{size:i});case"ghost":return t.jsx(al,{size:i});case"ghoul":return t.jsx(cl,{size:i});case"ice-elemental":return t.jsx(hl,{size:i});case"fire-elemental":return t.jsx(pl,{size:i});case"air-elemental":return t.jsx(dl,{size:i});case"earth-elemental":return t.jsx(xl,{size:i});case"demon":return t.jsx(fl,{size:i});case"felguard":return t.jsx(gl,{size:i});case"imp":return t.jsx(ul,{size:i});case"minor-demon":return t.jsx(yl,{size:i});case"succubus":return t.jsx(ml,{size:i});case"ice-giant":return t.jsx(jl,{size:i});case"giant":return t.jsx(wl,{size:i});case"troll-brute":return t.jsx(kl,{size:i});case"whelp":return t.jsx(Ml,{size:i});case"ancient-dragon":return t.jsx(Bl,{size:i});case"dragon":return t.jsx(bl,{size:i});case"drake":return t.jsx($l,{size:i});case"guardian-dragon":return t.jsx(Ll,{size:i});case"wyvern":return t.jsx(vl,{size:i})}return t.jsx(Fl,{size:i})};function Al(){const{showTooltip:e,hideTooltip:i}=We();return{showAbilityTooltip:(r,n)=>{const l={};r.baseManaCost&&(l["Mana Cost"]=r.baseManaCost);const a={title:r.name,description:r.description,level:0,stats:l};e(a,{x:n.clientX,y:n.clientY})},hideTooltip:i}}const vt=f.createContext(void 0),Wl=o.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 800;
`,Dl=o.div`
  background: ${({theme:e,$color:i})=>i||e.colors.winter.deepBlue};
  border-radius: ${({theme:e})=>e.borderRadius.lg};
  padding: ${({theme:e})=>e.spacing.lg};
  box-shadow: ${({theme:e})=>e.shadows.xl};
  max-width: 90%;
  width: 800px;
  max-height: 90%;
  height: 500px;
  overflow: auto;
`;function El({children:e}){const[i,s]=f.useState(!1),[r,n]=f.useState(void 0),[l,a]=f.useState(""),d=()=>{s(!1),n(void 0),a("")},c=(u,x)=>{n(u),a(x||""),s(!0)};return t.jsxs(vt.Provider,{value:{visible:i,setVisible:s,content:r,setContent:n,color:l,setColor:a,closeModal:d,openModal:c},children:[e,i&&t.jsx(Wl,{children:t.jsx(Dl,{$color:l,children:r})})]})}const Pe=()=>{const e=f.useContext(vt);if(!e)throw new Error("useModal doit être utilisé dans un ModalProvider");return e},Sl=o.div`
    width: 100%;
    margin-bottom: 0.5rem;
`,Cl=o.div`
    display: flex;
    justify-content: space-between;
    font-size: 0.95rem;
    color: ${({theme:e})=>e.colors.winter.snowWhite};
    margin-bottom: 0.2rem;
`,Pl=o.div`
    position: relative;
    width: 100%;
    height: 22px;
    background: rgba(0,0,0,0.4);
    border-radius: 999px;
    border: 2px solid #ffd700;
    overflow: hidden;
    box-shadow: inset 0 2px 4px rgba(0,0,0,0.3);
`,Ql=o.div`
    height: 100%;
    width: ${({$percent:e})=>e}%;
    background: linear-gradient(90deg,#ffd700 0%,#ffed4e 50%,#ffd700 100%);
    transition: width 0.7s cubic-bezier(.4,2,.3,1);
    position: absolute;
    left: 0;
    top: 0;
    box-shadow: 0 0 10px rgba(255,215,0,0.5);
`,ql=o.div`
    height: 100%;
    width: ${({$percent:e})=>e}%;
    background: linear-gradient(90deg,#22c55e 0%,#bbf7d0 100%);
    transition: width 0.7s cubic-bezier(.4,2,.3,1);
    position: absolute;
    left: ${({$offset:e})=>e}%;
    top: 0;
    box-shadow: 0 0 10px rgba(34,197,94,0.3);
`,Il=o.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    font-weight: bold;
    color: #fff;
    text-shadow: 0 1px 2px rgba(0,0,0,0.8);
    font-size: 0.85rem;
    z-index: 1;
`,Tl=o.div`
    font-size: 0.9rem;
    color: #22c55e;
    margin-top: 0.2rem;
    font-weight: bold;
`;function Rl({character:e,rewards:i}){const s=e.experience/e.experienceToNextLevel*100,r=i&&e.experienceToNextLevel?i.experience/e.experienceToNextLevel*100:0;return t.jsxs(Sl,{children:[t.jsxs(Cl,{children:[t.jsxs("span",{children:["Niveau ",i.levelUp&&i.newLevel?i.newLevel:e.level]}),t.jsxs("span",{children:[e.experience," / ",e.experienceToNextLevel," XP"]})]}),t.jsxs(Pl,{children:[t.jsx(Ql,{$percent:s}),t.jsx(ql,{$percent:r,$offset:s}),t.jsxs(Il,{children:[Math.max(0,Math.round(s+r)),"%"]})]}),t.jsxs(Tl,{children:["+",i.experience," XP gagnés"]})]})}function xe(){const{showTooltip:e,hideTooltip:i}=We();return{showItemTooltip:(r,n)=>{const l={title:r.name,stats:r.stats,quality:r.quality,level:r.level,equiped:r.equiped??void 0};e(l,{x:n.clientX,y:n.clientY})},hideTooltip:i}}const zl=o.h1`
    font-size: 2rem;
    margin-bottom: 0;
`,_l=o.div`
    display: flex;
    flex-direction: row;
    gap: ${({theme:e})=>e.spacing.md};
    // width: 100%;
`,Hl=o(b)`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    font-size: 1.5rem;
    &::before {
        content: '💰';
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 3rem;
        opacity: 0.2;
        z-index: 0;
  }
`,Nl=o(b)`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: ${({theme:e})=>e.spacing.sm};
    position: relative;
    &::before {
    content: '🎁';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 3rem;
    opacity: 0.2;
    z-index: 0;
}
`,Zl=o.div`
    margin-top: ${({theme:e})=>e.spacing.sm};
    font-weight: bold;
    color: ${({theme:e,$quality:i})=>F(i).primary||e.colors.winter.snowWhite};
`,Gl=o.div`
cursor: pointer;
`;function Ul({rewards:e}){const{character:i,updateCharacter:s}=j(),{battle:r,createNewBattle:n,setBattle:l}=ce(),{showItemTooltip:a,hideTooltip:d}=xe(),{closeModal:c}=Pe(),u=()=>{if(!i||!r)return;const x=(i.experience||0)+e.experience,p={...i,experience:e.levelUp?0:x,gold:(i.gold||0)+e.gold,level:e.levelUp?e.newLevel:i.level,health:e.levelUp?i.maxHealth:r.player.health,mana:e.levelUp?i.maxMana:r.player.mana,defeatedMonsters:i.defeatedMonsters+1,experienceToNextLevel:Ae(e.newLevel),bagItems:i.bagItems||[]};if(e.levelUp){const h=me(p);p.health=h.maxHealth,p.mana=h.maxMana,p.strength=h.strength,p.agility=h.agility,p.intellect=h.intellect,p.stamina=h.stamina,p.attackPower=h.attackPower,p.spellPower=h.spellPower,p.armor=h.armor,p.critChance=h.critChance,p.maxHealth=h.maxHealth,p.maxMana=h.maxMana}e.loot&&(p.bagItems=[...i.bagItems||[],{itemId:e.loot.id,item:e.loot}]),s({...p})};return!i||!r?null:t.jsxs(k,{direction:"column",align:"center",justify:"space-between",style:{height:"100%"},children:[t.jsx(zl,{children:"🎉 Victoire ! 🎉"}),t.jsx(Rl,{character:i,rewards:e}),t.jsxs(_l,{children:[t.jsx(Hl,{children:t.jsx(W,{amount:e.gold})}),e.loot&&t.jsxs(Nl,{onMouseMove:x=>a(e.loot,x),onMouseLeave:d,children:[t.jsx(Gl,{children:t.jsx(de,{itemType:e.loot.slot,itemName:e.loot.name,quality:e.loot.quality,size:64})}),t.jsx(Zl,{$quality:e.loot.quality,children:e.loot.name})]})]}),t.jsxs(k,{direction:"row",justify:"center",align:"center",style:{marginTop:"5rem"},children:[t.jsx(A,{onClick:()=>{u(),c(),n(i,e.newLevel,r.zone)},children:"Continuer"}),t.jsx(A,{$variant:"secondary",onClick:()=>{u(),l(null),c()},children:"Pierre de Foyer"})]})]})}function Ol({initialTime:e,onTimeUp:i}){const[s,r]=f.useState(e);f.useEffect(()=>{if(s<=0){i();return}const u=setInterval(()=>{r(x=>x-1e3)},1e3);return()=>clearInterval(u)},[s,i]);const n=Math.floor(s/1e3),l=Math.floor(n/60),a=l<10?`0${l}`:`${l}`,d=n%60,c=d<10?`0${d}`:`${d}`;return t.jsxs(Vl,{children:[a,":",c]})}const Vl=o.div`
    font-size: 1.5rem;
    font-weight: bold;
    color: ${({theme:e})=>e.colors.winter.iceBlue};
`,Xl=o.h1`
    font-size: 2rem;
    margin-bottom: 0;
`;function Yl(){const{character:e,updateCharacter:i}=j(),{battle:s,setBattle:r}=ce(),[n,l]=f.useState(!1),{closeModal:a}=Pe(),d=()=>{if(!e||!s)return;const c={...e};c.health=c.maxHealth*10/100,c.mana=c.maxMana*10/100,i({...c})};return!e||!s?null:t.jsxs(k,{direction:"column",align:"center",justify:"space-between",style:{height:"100%"},children:[t.jsx(Xl,{children:s.status==="defeat"?"💀 Défaite":"🏃 Vous avez fui"}),t.jsxs(ir,{children:[t.jsx(jt,{children:"📜 Journal de Combat"}),t.jsx(sr,{children:[...s.battleLog].reverse().map(c=>t.jsx(kt,{$type:c.type,children:c.message},c.id))})]}),t.jsx(k,{direction:"row",justify:"center",align:"center",style:{marginTop:"5rem"},children:t.jsx(A,{disabled:!n,$variant:"secondary",onClick:()=>{d(),r(null),a()},children:n?"Recupérer mon corp":t.jsx(Ol,{initialTime:1e3*e.level,onTimeUp:()=>l(!0)})})})]})}const Kl=o(k)`
  width: 100%;
`,Jl=o(k)`
  width: 100%;
`,en=o.div`
  font-size: ${({theme:e})=>e.fontSizes["2xl"]};
  font-weight: ${({theme:e})=>e.fontWeights.bold};
  color: ${({theme:e})=>e.colors.text.primary};
  align-self: center;
  position: relative;

    &::before {
    content: '⚔️';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 4rem;
    opacity: 0.2;
    z-index: 0;
    animation: pulse 4s ease-in-out infinite;

    @media (max-width: ${({theme:e})=>e.breakpoints.md}) {
      display: none;
    }
  }

  @keyframes pulse {
    0%, 100% { opacity: 0.1; transform: translate(-50%, -50%) scale(1); }
    50% { opacity: 0.2; transform: translate(-50%, -50%) scale(1.1); }
  }
`,Oe=o.div`
  min-width: 100px;
  min-height: 100px;
  background-color: ${({theme:e})=>e.colors.winter.deepBlue};
  border-radius: 50%;
  margin-bottom: 10px;
  display: flex;
  justify-content: center;
  box-shadow: ${({theme:e})=>e.shadows.xl};
  backdrop-filter: blur(10px);
  align-items: center;
  position: relative;
`,Ve=o.div`
  position: absolute;
  bottom: 0px;
  ${({$reverse:e})=>e?"left: -5px;":"right: -5px;"}
  background: ${({theme:e})=>e.colors.primary.gold};
  color: ${({theme:e})=>e.colors.neutral.black};
  padding: 2px 6px;
  border-radius: ${({theme:e})=>e.borderRadius.md};
  font-size: ${({theme:e})=>e.fontSizes.sm};
  font-weight: ${({theme:e})=>e.fontWeights.bold};
`,Xe=o.div`
  color: ${({theme:e})=>e.colors.primary.gold};
  font-weight: ${({theme:e})=>e.fontWeights.bold};
  font-size: ${({theme:e})=>e.fontSizes.lg};
  padding-right: ${({theme:e})=>e.spacing.md};
  padding-left: ${({theme:e})=>e.spacing.md};
`,tn=o(b)`
  display: flex;
  gap: ${({theme:e})=>e.spacing.xxs};
  justify-content: center;
`,N=o.div`
  width: 60px;
  height: 60px;

  background-color: ${({theme:e})=>e.colors.winter.deepBlue};
  border: ${({theme:e})=>e.borders.medium} solid ${({theme:e})=>e.colors.primary.gold};
  border-radius: ${({theme:e})=>e.borderRadius.lg};
  box-shadow: ${({theme:e})=>e.shadows.xl};
  backdrop-filter: blur(10px);
  overflow: hidden;
  filter: ${({$disabled:e})=>e?"grayscale(100%)":"none"};
  cursor: ${({$disabled:e})=>e?"not-allowed":"pointer"};

  &:hover {
    box-shadow: ${({theme:e,$disabled:i})=>i?e.shadows.xl:e.shadows.glow.gold};
    transition: all 0.2s;
    cursor: ${({$disabled:e})=>e?"not-allowed":"pointer"};
  }
`,ie=o.div`
  position: absolute;
  width: 25px;
  height: 25px;
  bottom: -2px;
  right: -2px;
  background: rgba(0, 0, 0, 0.8);
  color: #fff;
  font-size: ${({theme:e})=>e.fontSizes.base};
  font-weight: ${({theme:e})=>e.fontWeights.bold};
  padding: 1px 4px;
  border-radius: ${({theme:e})=>e.borderRadius.md};
  display: flex;
  justify-content: center;
  align-items: center;
`,sn=o(b)`
  padding: ${({theme:e})=>e.spacing.md};
  height: 300px;
  overflow-y: auto;
`;function rn(){const{battle:e,setBattle:i}=ce(),{character:s}=j(),[r,n]=f.useState(!1),{showAbilityTooltip:l,hideTooltip:a}=Al(),{openModal:d}=Pe(),c=B[s.class],u=["é",'"',"'","(","-","è"],x=f.useCallback(h=>{if(!(e==null||!e)&&e.turn==="player"&&e.status==="ongoing"&&!r){n(!0);const m=h();i(m),m.turn==="player"&&m.status==="ongoing"&&n(!1)}},[e,r,i]);if(f.useEffect(()=>{if(!(e==null||!e)){if(e.turn==="monster"&&e.status==="ongoing"){const h=setTimeout(()=>{n(!1),i(js(e))},500);return()=>clearTimeout(h)}if(e.status==="victory"){console.log("Battle won!");const h=ms(e.monster,e.player);d(t.jsx(Ul,{rewards:h}),"linear-gradient(135deg,rgba(22, 119, 58, 1) 0%,rgba(16, 95, 45, 1) 100%)"),n(!1)}(e.status==="defeat"||e.status==="fled")&&(console.log("Battle lost or fled!"),d(t.jsx(Yl,{}),"linear-gradient(135deg,rgba(119, 22, 22, 1) 0%,rgba(95, 16, 16, 1) 100%)"),n(!1))}},[e,i]),f.useEffect(()=>{const h=m=>{m.key==="&"&&x(()=>Ne(e)),He(s.class,s.level).forEach((y,M)=>{m.key===u[M]&&x(()=>Ze(e,y))})};return window.addEventListener("keydown",h),()=>{window.removeEventListener("keydown",h)}},[x,e,s]),!e)return t.jsx("div",{children:"Loading..."});const p=He(s.class,s.level);return t.jsxs(t.Fragment,{children:[t.jsxs(k,{direction:"row",gap:"2rem",justify:"space-between",children:[t.jsxs(Kl,{direction:"row",align:"flex-start",gap:"0.5rem",children:[t.jsxs(Oe,{children:[t.jsx(Er,{race:e.player.race,sex:"male",size:80}),t.jsx(Ve,{children:e.player.level})]}),t.jsxs(k,{direction:"column",gap:"0.25rem",align:"flex-start",children:[t.jsx(Xe,{children:e.player.name}),t.jsxs(we,{children:[t.jsx(Ue,{$percentage:e.player.health/e.player.maxHealth*100}),t.jsxs(be,{children:[Math.floor(e.player.health/10)," / ",Math.floor(e.player.maxHealth/10)]})]})]})]}),t.jsx(en,{children:"VS"}),t.jsxs(Jl,{direction:"row-reverse",align:"flex-start",gap:"0.5rem",children:[t.jsxs(Oe,{children:[t.jsx(bt,{monster:e.monster,size:80}),t.jsx(Ve,{$reverse:!0,children:e.monster.level})]}),t.jsxs(k,{direction:"column",gap:"0.25rem",align:"flex-end",children:[t.jsx(Xe,{children:e.monster.name}),t.jsxs(we,{children:[t.jsx(Ue,{$percentage:e.monster.health/e.monster.maxHealth*100,$reverse:!0}),t.jsxs(be,{children:[Math.floor(e.monster.health/10)," / ",Math.floor(e.monster.maxHealth/10)]})]})]})]})]}),t.jsxs(sn,{children:[t.jsx(jt,{children:"📜 Journal de Combat"}),[...e.battleLog].reverse().map(h=>t.jsx(kt,{$type:h.type,children:h.message},h.id))]}),t.jsxs(tn,{children:[t.jsxs(N,{style:{marginRight:"1.5rem"},$disabled:e.turn!=="player"||r,onClick:()=>x(()=>Ne(e)),onMouseMove:h=>l({id:"basic-attack",name:"Attaque",icon:"⚔️",description:"Une attaque de base contre l'ennemi.",baseManaCost:0,unlockLevel:1},h),onMouseLeave:a,children:[t.jsx(te,{src:c.primaryStat==="intellect"?Y.magic:Y.attack,alt:"Attaquer"}),t.jsx(ie,{children:"&"})]}),p.map(h=>{const m=mt(h,s.level),g=e.turn==="player"&&e.player.mana>=m&&!r,y=ds(h);return t.jsxs(N,{$disabled:!g,onMouseLeave:a,onMouseMove:M=>l(h,M),onClick:()=>x(()=>Ze(e,h)),children:[y?t.jsx(te,{src:y,alt:h.name}):t.jsx(tr,{children:h.icon}),t.jsx(ie,{children:u[p.indexOf(h)]})]},h.id)}),Array.from({length:5-p.length}).map((h,m)=>t.jsx(N,{},m)),t.jsxs(N,{style:{marginLeft:"1.5rem"},$disabled:e.turn!=="player"||r,onMouseMove:h=>l({id:"basic-defend",name:"Défense",icon:"🛡️",description:"Une action de défense pour réduire les dégâts reçus de 50%.",baseManaCost:0,unlockLevel:1},h),onMouseLeave:a,onClick:()=>x(()=>us(e)),children:[t.jsx(te,{src:Y.defend,alt:"Défendre"}),t.jsx(ie,{children:"è"})]}),t.jsxs(N,{$disabled:e.turn!=="player"||r,onMouseMove:h=>l({id:"basic-flee",name:"Fuir",icon:"🏃‍♂️",description:"Fuyez pauvre fou ! Tentez votre chance pour échapper au combat.",baseManaCost:0,unlockLevel:1},h),onMouseLeave:a,onClick:()=>x(()=>gs(e)),children:[t.jsx(te,{src:Y.flee,alt:"Fuir"}),t.jsx(ie,{children:"_"})]})]})]})}const ln=o.div`
  cursor: pointer;
`,nn=o(Se)`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: ${({theme:e})=>e.spacing.md};
  overflow-y: auto;
  padding-bottom: ${({theme:e})=>e.spacing.md};

  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 810px) {
    grid-template-columns: repeat(2, 1fr);
  }
`,an=o.div`
    display: grid;
    grid-template-areas:
    "icon name"
    "icon desc";
    grid-template-columns: auto 1fr;
    justify-items: start;
    align-items: center;
    gap: ${({theme:e})=>e.spacing.sm};
    border: 1px solid ${({theme:e})=>e.colors.primary.gold};
    border-radius: ${({theme:e})=>e.borderRadius.sm};
    background: ${({theme:e})=>e.colors.neutral.darkGray};
    box-shadow: ${({theme:e})=>e.shadows.md};
    padding: ${({theme:e})=>e.spacing.sm};
`,on=o.div`
    grid-area: name;
    font-size: ${({theme:e})=>e.fontSizes.sm};
    font-weight: ${({theme:e})=>e.fontWeights.bold};
    color: ${({theme:e})=>e.colors.primary.gold};
    height: 25px;
`,cn=o.div`
    font-size: ${({theme:e})=>e.fontSizes.xs};
    grid-area: desc;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    gap: ${({theme:e})=>e.spacing.sm};
`;function dn(){const{character:e}=j(),{shop:i}=rs(),{showItemTooltip:s,hideTooltip:r}=xe(),n=(l,a)=>{e&&(e.gold<l.price*a||e.level<l.level||is(l.id,e,a))};return t.jsxs(t.Fragment,{children:[t.jsx(Qe,{children:t.jsx(E,{$active:!0,onClick:()=>{},children:"Toutes"})}),t.jsx(nn,{children:i.filter(l=>l.level<=e.level).map(l=>{const a=e.gold>=l.price;return t.jsxs(an,{children:[t.jsx(ln,{onMouseMove:d=>s(l,d),onMouseLeave:r,style:{gridArea:"icon"},children:t.jsx(de,{itemType:l.slot,itemName:l.name,quality:l.quality,size:64})}),t.jsx(on,{children:l.name}),t.jsxs(cn,{children:[t.jsxs("span",{children:["Level : ",l.level]}),t.jsx(A,{onClick:()=>n(l,1.8),disabled:!a,$size:"small",$variant:"secondary",children:a?t.jsx(W,{amount:Math.floor(l.price*1.8),variant:"small"}):"Trop cher"})]})]},l.id)})})]})}const xn=o.div`
  cursor: pointer;
`,hn=o(Se)`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: ${({theme:e})=>e.spacing.md};

  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 810px) {
    grid-template-columns: repeat(2, 1fr);
  }
`,pn=o.div`
    display: grid;
    grid-template-areas:
    "icon name"
    "icon desc";
    grid-template-columns: auto 1fr;
    justify-items: start;
    align-items: center;
    gap: ${({theme:e})=>e.spacing.sm};
    border: 1px solid ${({theme:e})=>e.colors.primary.gold};
    border-radius: ${({theme:e})=>e.borderRadius.sm};
    background: ${({theme:e})=>e.colors.neutral.darkGray};
    box-shadow: ${({theme:e})=>e.shadows.md};
    padding: ${({theme:e})=>e.spacing.sm};
`,fn=o.div`
    grid-area: name;
    font-size: ${({theme:e})=>e.fontSizes.sm};
    font-weight: ${({theme:e})=>e.fontWeights.bold};
    color: ${({theme:e})=>e.colors.primary.gold};
    height: 25px;
    line-height: 14px;
`,un=o.div`
    font-size: ${({theme:e})=>e.fontSizes.xs};
    grid-area: desc;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    gap: ${({theme:e})=>e.spacing.sm};
`,gn=o.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing.sm};
`,mn=o.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing.md};
  align-items: center;
  justify-content: space-between;
`,fe=o.button`
  min-width: 24px;
  height: 24px;
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
`,yn=o.div`
  flex: 1;
  text-align: center;
  font-size: ${({theme:e})=>e.fontSizes.xl};
  color: ${({theme:e})=>e.colors.neutral.white};
  font-weight: ${({theme:e})=>e.fontWeights.bold};
`;function jn(){const{character:e,updateCharacter:i}=j(),[s,r]=f.useState("all"),[n,l]=f.useState({}),a=xs(e?.level||1,s==="all"?void 0:s),d=x=>n[x]||1,c=(x,p)=>{l(h=>({...h,[x]:Math.max(1,p)}))},u=x=>{if(!e)return;const p=d(x.id),h=x.price*p;if(e.gold<h)return;const m=e.inventory||{potions:[]},g=hs(m,x.id,p),y={...e,gold:e.gold-h,inventory:g};i(y),l(M=>({...M,[x.id]:1}))};return t.jsxs(t.Fragment,{children:[t.jsxs(Qe,{children:[t.jsx(E,{$active:s==="all",onClick:()=>r("all"),children:"Toutes"}),t.jsx(E,{$active:s==="health",onClick:()=>r("health"),children:"❤️ Vie"}),t.jsx(E,{$active:s==="mana",onClick:()=>r("mana"),children:"💙 Mana"}),t.jsx(E,{$active:s==="effect",onClick:()=>r("effect"),children:"💙 Elixir"})]}),t.jsx(hn,{children:a.map(x=>{if(!e)return null;const p=d(x.id),h=x.price*p,m=e.gold>=h;return t.jsxs(pn,{children:[t.jsx(xn,{style:{gridArea:"icon"},children:t.jsx(wt,{potion:x,size:64})}),t.jsx(fn,{children:x.name}),t.jsx(un,{children:t.jsxs(mn,{children:[t.jsxs(gn,{children:[t.jsx(fe,{onClick:()=>c(x.id,p-1),disabled:p<=1,children:"-"}),t.jsx(yn,{children:p}),t.jsx(fe,{onClick:()=>c(x.id,p+1),disabled:h>=e.gold&&p>0,children:"+"}),t.jsx(fe,{onClick:()=>c(x.id,p+10),disabled:h>=e.gold&&p>0,children:"+10"})]}),t.jsx(A,{onClick:()=>u(x),disabled:!m,$size:"small",$variant:"secondary",children:m?t.jsx(W,{amount:h,variant:"small"}):"Trop cher"})]})})]},x.id)})})]})}const Qe=o.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing.md};
  justify-content: center;
  margin-bottom: ${({theme:e})=>e.spacing.md};
`,E=o.button`
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
`;function kn(){const{character:e}=j(),[i,s]=f.useState("potions");return e?t.jsxs(t.Fragment,{children:[t.jsx(De,{children:"🏪 Boutique"}),t.jsxs(Ee,{children:["Bienvenue dans la boutique ! Achetez des potions et de l'équipement pour améliorer votre personnage.",t.jsx("br",{}),"Toutes les 15 minutes, les stocks d'équipement sont réapprovisionnés."]}),t.jsxs(b,{children:[t.jsxs(Qe,{children:[t.jsx(E,{$active:i==="potions",onClick:()=>s("potions"),children:"🧪 Potions"}),t.jsx(E,{$active:i==="equipment",onClick:()=>s("equipment"),children:"⚔️ Équipement"})]}),i==="potions"&&t.jsx(jn,{}),i==="equipment"&&t.jsx(dn,{})]})]}):null}function ve(e){const i={};return e.forEach(s=>{i[s.item.id]={...s,item:{id:s.item.id,name:s.item.name,slot:s.item.slot,quality:s.item.quality,level:s.item.level,stats:s.item.stats,icon:s.item.icon,price:s.item.price}}}),Object.values(i)}const wn=o.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: ${({theme:e})=>e.spacing.md};

  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }
`,bn=o.div`
  background: rgba(0, 0, 0, 0.3);
  border: 2px solid rgba(255, 215, 0, 0.3);
  border-radius: ${({theme:e})=>e.borderRadius.md};
  padding: ${({theme:e})=>e.spacing.xs};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
`,vn=o.div`
  color: ${({theme:e})=>e.colors.text.secondary};
  font-size: ${({theme:e})=>e.fontSizes.xs};
  margin-bottom: ${({theme:e})=>e.spacing.xs};
  text-transform: uppercase;
  text-align: center;
`,$n=o.div`
  cursor: pointer;
`,Ln=o.div`
  color: ${({theme:e})=>e.colors.text.secondary};
  font-style: italic;
  font-size: ${({theme:e})=>e.fontSizes.sm};
  text-align: center;
`;function Mn(){const{character:e,updateCharacter:i}=j(),{showItemTooltip:s,hideTooltip:r}=xe(),[n,l]=f.useState({});if(f.useEffect(()=>{e&&l(e.equipment||{})},[e]),!e)return null;const a=d=>{if(!e.equipment||!e.equipment[d])return;const c=e.equipment[d];let u=[...e.bagItems||[],{itemId:c.id,item:c}];const x={...e.equipment};delete x[d],u=ve(u),i({...e,equipment:x,bagItems:u})};return t.jsxs(b,{children:[t.jsx(U,{children:t.jsx(O,{children:"⚔️ Équipement"})}),t.jsx(wn,{children:["weapon","head","chest","legs","boots","jewelry"].map(d=>{const c={weapon:"⚔️ Arme",head:"🪖 Tête",chest:"👕 Torse",legs:"👖 Jambes",boots:"👢 Bottes",jewelry:"💍 Bijou"},u=n?.[d];return t.jsxs(bn,{children:[t.jsx(vn,{children:c[d]}),u?t.jsx($n,{onClick:()=>a(d),onMouseMove:x=>s(u,x),onMouseLeave:r,children:t.jsx(de,{itemType:d,itemName:u.name,quality:u.quality,size:52})}):t.jsx(Ln,{children:"Vide"})]},d)})})]})}const Bn=o.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: ${({theme:e})=>e.spacing.md};
`,v=o.div`
  display: flex;
  justify-content: space-between;
  padding: ${({theme:e})=>e.spacing.xs};
  background: rgba(0, 0, 0, 0.3);
  border-radius: ${({theme:e})=>e.borderRadius.md};
  border-left: 3px solid ${({theme:e})=>e.colors.primary.gold};
`,$=o.span`
  color: ${({theme:e})=>e.colors.text.secondary};
  font-size: ${({theme:e})=>e.fontSizes.sm};
`,L=o.span`
  color: ${({theme:e})=>e.colors.primary.gold};
  font-weight: ${({theme:e})=>e.fontWeights.bold};
  font-size: ${({theme:e})=>e.fontSizes.base};
`;function Fn(){const{character:e}=j();if(!e)return null;const i=B[e.class];return t.jsxs(b,{children:[t.jsx(U,{children:t.jsx(O,{children:"📊 Statistiques"})}),t.jsxs(Bn,{children:[t.jsxs(v,{children:[t.jsx($,{children:"❤️ Vie"}),t.jsxs(L,{children:[Math.floor(e.health/10)," / ",Math.floor(e.maxHealth/10)]})]}),t.jsxs(v,{children:[t.jsx($,{children:i.energyName}),t.jsxs(L,{children:[e.mana," / ",e.maxMana]})]}),t.jsxs(v,{children:[t.jsx($,{children:"💰 Or"}),t.jsx(L,{children:t.jsx(W,{amount:e.gold})})]}),(i.primaryStat==="strength"||i.primaryStat==="agility")&&t.jsxs(v,{children:[t.jsx($,{children:"⚔️ Puissance d'attaque"}),t.jsx(L,{children:e.attackPower})]}),i.primaryStat==="intellect"&&t.jsxs(v,{children:[t.jsx($,{children:"🔮 Puissance magique"}),t.jsx(L,{children:e.spellPower})]}),t.jsxs(v,{children:[t.jsx($,{children:"🛡️ Armure"}),t.jsx(L,{children:e.armor})]}),t.jsxs(v,{children:[t.jsx($,{children:"💪 Force"}),t.jsx(L,{children:e.strength})]}),t.jsxs(v,{children:[t.jsx($,{children:"🎯 Agilité"}),t.jsx(L,{children:e.agility})]}),t.jsxs(v,{children:[t.jsx($,{children:"🧠 Intelligence"}),t.jsx(L,{children:e.intellect})]}),t.jsxs(v,{children:[t.jsx($,{children:"💚 Endurance"}),t.jsx(L,{children:e.stamina})]}),t.jsxs(v,{children:[t.jsx($,{children:"⚡ Critique"}),t.jsxs(L,{children:[(e.critChance??0).toFixed(1),"%"]})]})]})]})}const An=e=>({minor:"poor",lesser:"common",normal:"common",greater:"uncommon",superior:"rare",ultimate:"epic"})[e],Wn=o.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(80px, 1fr));
  gap: ${({theme:e})=>e.spacing.md};
`,Dn=o.div`
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
`,En=o.div`
  color: ${({theme:e})=>e.colors.primary.gold};
  font-size: ${({theme:e})=>e.fontSizes.base};
  font-weight: ${({theme:e})=>e.fontWeights.bold};
  text-align: center;
`;function Sn(){const{character:e,updateCharacter:i}=j(),{showTooltip:s,hideTooltip:r}=We();if(!e)return null;const n=l=>{if(!e.inventory)return;const a=ke.find(m=>m.id===l);if(!a)return;const d=ps(e.inventory,l);if(!d.success){alert("Impossible d'utiliser cette potion !");return}let c=e.health||0,u=e.mana||0;const x=e.buffs||[],p=m=>{switch(m.quality){case"minor":return 1e3*60*10;case"lesser":return 1e3*60*20;case"normal":return 1e3*60*30;case"greater":return 1e3*60*40;case"superior":return 1e3*60*50;case"ultimate":return 1e3*60*60;default:return 0}},h=a.id.split("-").pop();switch(a.type){case"health":c=Math.min(e.maxHealth||e.health||0,(e.health||0)+a.restoreAmount),c+=Math.floor((e.maxHealth||0)*(a.restorePercent||0)/100);break;case"mana":u=Math.min(e.maxMana||e.mana||0,(e.mana||0)+a.restoreAmount),u+=Math.floor((e.maxMana||0)*(a.restorePercent||0)/100);break;case"effect":x.push({id:`potion-${h}-${Date.now()}`,effect:h,amount:a.restorePercent||0,duration:p(a),icon:je[h]?.emoji||a.icon,name:a.name,description:a.description,expiresAt:Date.now()+p(a)});break}c<0&&(c=0),u<0&&(u=0),c>(e.maxHealth||0)&&(c=e.maxHealth||0),u>(e.maxMana||0)&&(u=e.maxMana||0),i({...e,inventory:d.inventory,health:c,mana:u,buffs:x})};return t.jsxs(b,{children:[t.jsx(U,{children:t.jsx(O,{children:"🧪 Potions"})}),e.inventory?.potions&&e.inventory.potions.length>0?t.jsx(Wn,{children:e.inventory.potions.map((l,a)=>{const d=ke.find(c=>c.id===l.potionId);return d?t.jsxs(Dn,{onClick:()=>n(d.id),children:[t.jsx("div",{onMouseMove:c=>{s({title:d.name,description:d.description,quality:An(d.quality),level:d.requiredLevel},{x:c.clientX,y:c.clientY})},onMouseLeave:r,children:t.jsx(wt,{potion:d,size:48})}),t.jsxs(En,{children:["x",l.quantity]})]},a):null})}):t.jsx(Ce,{children:"Aucune potion"})]})}const Cn=o.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  gap: ${({theme:e})=>e.spacing.md};
`,Pn=o.div`
  background: rgba(0, 0, 0, 0.3);
  border: 2px solid ${({$quality:e,theme:i})=>{switch(e){case"legendary":return i.colors.quality.legendary;case"epic":return i.colors.quality.epic;case"rare":return i.colors.quality.rare;case"uncommon":return i.colors.quality.uncommon;case"common":return i.colors.quality.common;default:return i.colors.quality.poor}}};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  padding: ${({theme:e})=>e.spacing.md};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({theme:e})=>e.spacing.sm};
`,Qn=o.div`
  cursor: pointer;
`,qn=o.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing.xs};
  width: 100%;
`,Ye=o(A)`
padding: ${({theme:e})=>e.spacing.xs} ${({theme:e})=>e.spacing.sm};
`;function In(){const{character:e,updateCharacter:i}=j(),{showItemTooltip:s,hideTooltip:r}=xe();if(!e)return null;const n=c=>{const u={...c};delete u.equiped;const x=e.equipment||{},p=x[c.slot],h={...x,[c.slot]:u};let m=(e.bagItems||[]).filter(g=>("item"in g?g.item:g).id!==c.id);if(p){const g={...p};delete g.equiped,m=[...m,{itemId:g.id,item:g}]}m=ve(m),i({...e,equipment:h,bagItems:m})},l=c=>{const u=Math.floor((c.price||0)*10);let x=(e.bagItems||[]).filter(p=>("item"in p?p.item:p).id!==c.id);x=ve(x),i({...e,bagItems:x,gold:e.gold+u})},a=(e.bagItems||[]).slice().sort((c,u)=>{const x="item"in c?c.item:c;return(("item"in u?u.item:u).level||0)-(x.level||0)}),d=()=>{let c=0;const u=(e.bagItems||[]).filter(x=>{const p="item"in x?x.item:x;return c+=p.price||0,!1});i({...e,bagItems:u,gold:e.gold+c})};return t.jsxs(b,{children:[t.jsx(U,{children:t.jsx(O,{children:"🎒 Sac"})}),t.jsx("span",{children:a.length>0&&t.jsxs(t.Fragment,{children:["Tout vendre : "," ",t.jsx(Ye,{onClick:()=>d(),$size:"small",$variant:"secondary",children:t.jsx(W,{amount:a.reduce((c,u)=>{const x="item"in u?u.item:u;return c+Math.floor(x.price||0)},0),variant:"small"})})]})}),a.length>0?t.jsx(Cn,{children:a.map((c,u)=>{const x="item"in c?c.item:c;return x.equiped=e.equipment?e.equipment[x.slot]:void 0,!x||!x.name?null:t.jsxs(Pn,{$quality:x.quality,children:[t.jsx(Qn,{onClick:()=>n(x),onMouseMove:p=>s(x,p),onMouseLeave:r,children:t.jsx(de,{itemType:x.slot,itemName:x.name,quality:x.quality,size:52})}),t.jsx(qn,{children:t.jsx(Ye,{onClick:()=>l(x),$size:"small",$variant:"secondary",children:t.jsx(W,{amount:x.price||0,variant:"small"})})})]},u)})}):t.jsx(Ce,{children:"Aucun équipement dans le sac"})]})}const Tn=o.div`
  width: 100%;
  // margin-bottom: ${({theme:e})=>e.spacing.xl};
`,Rn=o.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: ${({theme:e})=>e.spacing.xs};
  font-size: ${({theme:e})=>e.fontSizes.sm};
  color: ${({theme:e})=>e.colors.text.secondary};
`,zn=o.div`
  width: 100%;
  height: 24px;
  background: rgba(0, 0, 0, 0.4);
  border: 2px solid ${({theme:e})=>e.colors.primary.gold};
  border-radius: ${({theme:e})=>e.borderRadius.full};
  overflow: hidden;
  position: relative;
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.3);
`,_n=o.div`
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
`,Hn=o.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-weight: ${({theme:e})=>e.fontWeights.bold};
  color: ${({theme:e})=>e.colors.text.primary};
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.8);
  font-size: ${({theme:e})=>e.fontSizes.xs};
  z-index: 1;
`;function Nn(){const{character:e}=j();if(!e)return null;const i=e.experience/e.experienceToNextLevel*100;return t.jsxs(Tn,{children:[t.jsxs(Rn,{children:[t.jsxs("span",{children:["Niveau ",e.level]}),t.jsxs("span",{children:[e.experience," / ",e.experienceToNextLevel," XP"]})]}),t.jsxs(zn,{children:[t.jsx(_n,{$progress:Math.max(0,Math.min(100,i))}),t.jsxs(Hn,{children:[Math.max(0,Math.round(i)),"%"]})]})]})}const Zn=o.div`
    margin-top: -16px;
    background: rgba(0, 0, 0, 0.5);
    padding: 0 4px;
    border-radius: 4px;
    color: white;
    font-weight: bold;
    font-size: 0.8rem;
`;function Gn(e){if(e<=0)return"00:00";const i=Math.floor(e/1e3),s=Math.floor(i/3600),r=Math.floor(i%3600/60),n=i%60,l=a=>a.toString().padStart(2,"0");return s>0?`${s}:${l(r)}:${l(n)}`:`${l(r)}:${l(n)}`}const Un=({expiresAt:e})=>{const{character:i,updateCharacter:s}=j(),[r,n]=f.useState(e-Date.now());return f.useEffect(()=>{if(r<=0){if(!i)return;const a=xt(i);i.buffs=a,s(i);return}const l=setInterval(()=>{n(e-Date.now())},1e3);return()=>clearInterval(l)},[e,r,i,s]),t.jsx(Zn,{style:{fontSize:"0.8rem",color:r<=6e4?"red":"inherit"},children:Gn(r)})},On=o.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: ${({theme:e})=>e.spacing.xs};
`,Vn=o.div`
  background: rgba(0, 0, 0, 0.3);
  border: 2px solid ${({theme:e})=>e.colors.primary.gold};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  padding: ${({theme:e})=>e.spacing.xs};
  display: flex;
  flex-direction: column;
  align-items: center;

`;function Xn(){const{character:e}=j();return t.jsxs(b,{children:[t.jsx(U,{children:t.jsx(O,{children:"🚀 Buff"})}),!e||!Array.isArray(e.buffs)||e.buffs.length===0?t.jsx(Ce,{children:"Aucun buff actif"}):t.jsx(On,{children:e.buffs.filter(i=>i.expiresAt>Date.now()).map(i=>t.jsxs(Vn,{children:[t.jsx("span",{style:{fontSize:"1.5rem"},children:i.icon}),t.jsx(Un,{expiresAt:i.expiresAt})]},i.expiresAt+(i.name||"")))})]})}o.div`
  color: ${({theme:e})=>e.colors.primary.gold};
  font-size: ${({theme:e})=>e.fontSizes.xl};
  font-family: ${({theme:e})=>e.fonts.primary};
  margin-bottom: ${({theme:e})=>e.spacing.md};
  text-shadow: ${({theme:e})=>e.shadows.glow.gold};
  display: flex;
  align-items: center;
  justify-content: space-between;

  span{
    font-family: ${({theme:e})=>e.fonts.secondary};
    font-size: ${({theme:e})=>e.fontSizes.base};
    text-shadow: none;
    color: ${({theme:e})=>e.colors.text.primary};
  }
`;function Yn(){return t.jsxs(k,{direction:"column",gap:"1rem",children:[t.jsx(Nn,{}),t.jsxs(k,{direction:"row",gap:"32px",justify:"flex-start",align:"flex-start",children:[t.jsxs(k,{direction:"column",gap:"1rem",children:[t.jsx(Mn,{}),t.jsx(Fn,{})]}),t.jsxs(k,{direction:"column",gap:"1rem",align:"flex-start",children:[t.jsx(Xn,{}),t.jsx(Sn,{}),t.jsx(In,{})]})]})]})}const Kn=()=>t.jsxs("svg",{width:"64",height:"64",viewBox:"0 0 64 64",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("rect",{x:"0",y:"0",width:"64",height:"64",rx:"12",fill:"#B6E2A1"}),t.jsx("ellipse",{cx:"32",cy:"54",rx:"22",ry:"7",fill:"#8DC07F"}),t.jsx("ellipse",{cx:"20",cy:"32",rx:"8",ry:"10",fill:"#4C9A2A",stroke:"#2E6B1A",strokeWidth:"2"}),t.jsx("rect",{x:"17",y:"38",width:"6",height:"12",rx:"2",fill:"#A67C52"}),t.jsx("ellipse",{cx:"44",cy:"28",rx:"6",ry:"8",fill:"#5CB85C",stroke:"#4C9A2A",strokeWidth:"1.5"}),t.jsx("rect",{x:"41",y:"34",width:"5",height:"8",rx:"1.5",fill:"#A67C52"}),t.jsx("ellipse",{cx:"12",cy:"40",rx:"4",ry:"6",fill:"#7CC47F"}),t.jsx("rect",{x:"10",y:"46",width:"3",height:"6",rx:"1",fill:"#A67C52"}),t.jsx("ellipse",{cx:"32",cy:"44",rx:"10",ry:"4",fill:"#7CC47F"}),t.jsx("ellipse",{cx:"28",cy:"50",rx:"5",ry:"2",fill:"#7CC47F"}),t.jsx("ellipse",{cx:"38",cy:"50",rx:"4",ry:"2",fill:"#7CC47F"}),t.jsx("ellipse",{cx:"24",cy:"52",rx:"1.2",ry:"0.7",fill:"#FFB347"}),t.jsx("ellipse",{cx:"26",cy:"53",rx:"0.7",ry:"0.4",fill:"#FFD700"}),t.jsx("ellipse",{cx:"40",cy:"52",rx:"1",ry:"0.5",fill:"#FFD700"}),t.jsx("ellipse",{cx:"42",cy:"53",rx:"0.7",ry:"0.4",fill:"#FFB347"}),t.jsx("ellipse",{cx:"24",cy:"56",rx:"2",ry:"1",fill:"#D9D9D9"}),t.jsx("ellipse",{cx:"40",cy:"57",rx:"1.5",ry:"0.8",fill:"#B0B0B0"}),t.jsx("ellipse",{cx:"32",cy:"20",rx:"10",ry:"3",fill:"#FFD700",opacity:"0.2"})]}),Jn=()=>t.jsxs("svg",{width:"64",height:"64",viewBox:"0 0 64 64",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("rect",{x:"0",y:"0",width:"64",height:"64",rx:"12",fill:"#E2D6A1"}),t.jsx("ellipse",{cx:"32",cy:"54",rx:"22",ry:"7",fill:"#C0B77F"}),t.jsx("ellipse",{cx:"32",cy:"38",rx:"12",ry:"8",fill:"#B0B0B0",stroke:"#8C7AA6",strokeWidth:"2"}),t.jsx("path",{d:"M32 30 Q34 34 32 38 Q30 42 32 46",stroke:"#8C7AA6",strokeWidth:"1.5"}),t.jsx("ellipse",{cx:"48",cy:"28",rx:"7",ry:"10",fill:"#4C9A2A",stroke:"#A67C52",strokeWidth:"2"}),t.jsx("rect",{x:"45",y:"38",width:"6",height:"12",rx:"2",fill:"#A67C52"}),t.jsx("ellipse",{cx:"24",cy:"50",rx:"2",ry:"1",fill:"#FFB347"}),t.jsx("ellipse",{cx:"22",cy:"52",rx:"1",ry:"0.5",fill:"#FFD700"}),t.jsx("ellipse",{cx:"20",cy:"48",rx:"6",ry:"2",fill:"#7CC47F"}),t.jsx("ellipse",{cx:"40",cy:"57",rx:"1.5",ry:"0.8",fill:"#B0B0B0"}),t.jsx("ellipse",{cx:"32",cy:"24",rx:"8",ry:"3",fill:"#BCA77B",opacity:"0.3"})]}),ea=()=>t.jsxs("svg",{width:"64",height:"64",viewBox:"0 0 64 64",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("rect",{x:"0",y:"0",width:"64",height:"64",rx:"12",fill:"#C1B6E2"}),t.jsx("ellipse",{cx:"32",cy:"54",rx:"22",ry:"7",fill:"#A7A1BC"}),t.jsx("rect",{x:"18",y:"28",width:"28",height:"18",rx:"3",fill:"#6B4F7A",stroke:"#4F3A6B",strokeWidth:"2"}),t.jsx("rect",{x:"26",y:"36",width:"12",height:"10",rx:"2",fill:"#8C7AA6"}),t.jsx("rect",{x:"30",y:"44",width:"4",height:"6",rx:"1.5",fill:"#FFD700"}),t.jsx("polygon",{points:"18,28 32,14 46,28",fill:"#4F3A6B",stroke:"#6B4F7A",strokeWidth:"2"}),t.jsx("rect",{x:"22",y:"32",width:"4",height:"6",rx:"1",fill:"#E2E2E2"}),t.jsx("rect",{x:"38",y:"32",width:"4",height:"6",rx:"1",fill:"#E2E2E2"}),t.jsx("ellipse",{cx:"12",cy:"38",rx:"3",ry:"6",fill:"#4F3A6B"}),t.jsx("ellipse",{cx:"52",cy:"38",rx:"3",ry:"6",fill:"#4F3A6B"}),t.jsx("ellipse",{cx:"32",cy:"50",rx:"10",ry:"3",fill:"#7CC47F"}),t.jsx("ellipse",{cx:"24",cy:"56",rx:"2",ry:"1",fill:"#D9D9D9"}),t.jsx("ellipse",{cx:"40",cy:"57",rx:"1.5",ry:"0.8",fill:"#B0B0B0"}),t.jsx("ellipse",{cx:"32",cy:"24",rx:"6",ry:"2",fill:"#B6E2F2",opacity:"0.5"})]}),ta=()=>t.jsxs("svg",{width:"64",height:"64",viewBox:"0 0 64 64",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("rect",{x:"0",y:"0",width:"64",height:"64",rx:"12",fill:"#E2A1A1"}),t.jsx("ellipse",{cx:"32",cy:"54",rx:"22",ry:"7",fill:"#C07F7F"}),t.jsx("rect",{x:"20",y:"30",width:"24",height:"14",rx:"2",fill:"#7A2A2A",stroke:"#A63A2B",strokeWidth:"2"}),t.jsx("rect",{x:"16",y:"34",width:"6",height:"10",rx:"1",fill:"#A63A2B"}),t.jsx("rect",{x:"42",y:"34",width:"6",height:"10",rx:"1",fill:"#A63A2B"}),t.jsx("rect",{x:"30",y:"38",width:"4",height:"6",rx:"1",fill:"#E2E2E2"}),t.jsx("ellipse",{cx:"19",cy:"34",rx:"2",ry:"1",fill:"#FFB347"}),t.jsx("ellipse",{cx:"45",cy:"34",rx:"2",ry:"1",fill:"#FFB347"}),t.jsx("ellipse",{cx:"32",cy:"50",rx:"1.2",ry:"0.8",fill:"#E2E2E2"}),t.jsx("ellipse",{cx:"34",cy:"50",rx:"1",ry:"0.6",fill:"#E2E2E2"}),t.jsx("path",{d:"M24 38 Q26 40 28 38",stroke:"#A63A2B",strokeWidth:"1"}),t.jsx("path",{d:"M40 38 Q42 40 44 38",stroke:"#A63A2B",strokeWidth:"1"}),t.jsx("ellipse",{cx:"32",cy:"24",rx:"6",ry:"2",fill:"#7A2A2A",opacity:"0.3"})]}),ia=()=>t.jsxs("svg",{width:"64",height:"64",viewBox:"0 0 64 64",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("rect",{x:"0",y:"0",width:"64",height:"64",rx:"12",fill:"#E2C6A1"}),t.jsx("ellipse",{cx:"32",cy:"54",rx:"22",ry:"7",fill:"#BCA77B"}),t.jsx("polygon",{points:"20,40 32,20 44,40",fill:"#A63A2B",stroke:"#7C4A2A",strokeWidth:"2"}),t.jsx("rect",{x:"27",y:"40",width:"10",height:"10",rx:"2",fill:"#7C4A2A"}),t.jsx("line",{x1:"32",y1:"20",x2:"32",y2:"40",stroke:"#E2C6A1",strokeWidth:"1.5"}),t.jsx("polygon",{points:"12,44 18,32 24,44",fill:"#BCA77B",stroke:"#A67C52",strokeWidth:"1"}),t.jsx("ellipse",{cx:"32",cy:"50",rx:"4",ry:"2",fill:"#FFB347"}),t.jsx("rect",{x:"30",y:"52",width:"4",height:"2",rx:"1",fill:"#A67C52"}),t.jsx("ellipse",{cx:"50",cy:"32",rx:"6",ry:"8",fill:"#4C5A2A"}),t.jsx("rect",{x:"48",y:"38",width:"4",height:"8",rx:"1.5",fill:"#A67C52"}),t.jsx("ellipse",{cx:"16",cy:"48",rx:"5",ry:"2",fill:"#7CC47F"}),t.jsx("ellipse",{cx:"40",cy:"57",rx:"1.5",ry:"0.8",fill:"#B0B0B0"}),t.jsx("ellipse",{cx:"38",cy:"46",rx:"2",ry:"1.2",fill:"#FFD700"}),t.jsx("ellipse",{cx:"36",cy:"47",rx:"1",ry:"0.6",fill:"#A67C52"})]}),sa=()=>t.jsxs("svg",{width:"64",height:"64",viewBox:"0 0 64 64",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("rect",{x:"0",y:"0",width:"64",height:"64",rx:"12",fill:"#A1D7E2"}),t.jsx("ellipse",{cx:"32",cy:"54",rx:"22",ry:"7",fill:"#7FC0C4"}),t.jsx("ellipse",{cx:"32",cy:"38",rx:"10",ry:"6",fill:"#E2E2E2",stroke:"#B0B0B0",strokeWidth:"2"}),t.jsx("path",{d:"M28 38 Q29 34 32 36 Q33 34 36 38",fill:"#FFB347",stroke:"#E2A147",strokeWidth:"1"}),t.jsx("ellipse",{cx:"40",cy:"32",rx:"2",ry:"4",fill:"#47B3FF",stroke:"#A1D7E2",strokeWidth:"1"}),t.jsx("path",{d:"M20 30 Q24 28 28 30",stroke:"#B6E2F2",strokeWidth:"2",fill:"none"}),t.jsx("ellipse",{cx:"24",cy:"48",rx:"5",ry:"2",fill:"#7CC47F"}),t.jsx("ellipse",{cx:"26",cy:"50",rx:"1",ry:"0.5",fill:"#FFD700"}),t.jsx("ellipse",{cx:"22",cy:"50",rx:"1",ry:"0.5",fill:"#FFB347"}),t.jsx("ellipse",{cx:"40",cy:"57",rx:"1.5",ry:"0.8",fill:"#B0B0B0"}),t.jsx("ellipse",{cx:"32",cy:"24",rx:"6",ry:"2",fill:"#FFD700",opacity:"0.3"})]}),$e=[{id:"starting_zone",name:"Foret du Départ",description:"Le point de départ de toutes les aventures, où les héros commencent leur voyage.",levelRange:[1,5],monstersId:["wolf","boar","fox","owl"],componentIcon:Kn},{id:"bandit_camp",name:"Camp de Voleurs",description:"Un campement caché dans la forêt, habité par des bandits et des Murlocs.",levelRange:[5,10],monstersId:["bandit","murloc","thief","giant-rat"],componentIcon:ia},{id:"occult_mansion",name:"Manoir Occulte",description:"Un manoir mystérieux rempli de secrets et de dangers.",levelRange:[10,15],monstersId:["skeleton","ghoul","ghost","gargoyle"],componentIcon:ea},{id:"elemental_plains",name:"Plain Elementaire",description:"Des plaines vastes où les éléments prennent vie sous des formes variées.",levelRange:[15,20],monstersId:["fire-elemental","ice-elemental","earth-elemental","air-elemental"],componentIcon:sa},{id:"demon_stronghold",name:"Forteresse Démoniaque",description:"Le repaire des démons, un endroit sombre et périlleux où seuls les plus braves osent s'aventurer.",levelRange:[20,25],monstersId:["imp","felguard","minor-demon","succubus"],componentIcon:ta},{id:"giants_land",name:"La Terre des Géants",description:"Un territoire vaste et imposant, habité par des créatures gigantesques.",levelRange:[25,35],monstersId:["giant","ice-giant","troll-brute"],componentIcon:Jn}],ra=o.div`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  justify-content: center;
`,la=o.div`
  // width: 80px;
  border: 3px solid ${({$selected:e,theme:i})=>e?i.colors.primary.gold:"transparent"};
  border-radius: 12px;
  background: ${({theme:e})=>e.colors.neutral.darkGray};
  box-shadow: ${({theme:e})=>e.shadows.md};
  padding: 8px;
  cursor: pointer;
  transition: border-color 0.3s;
  display: grid;
  grid-template-areas:
  "icon name"
  "level desc";
  grid-template-columns: auto 1fr;
  grid-template-rows: 30px 1fr;
  gap: 0 16px;
  font-size: ${({theme:e})=>e.fontSizes.sm};
`,na=o.div`
  grid-area: level;
  width: fit-content;
  padding: ${({theme:e})=>e.spacing.xs} ${({theme:e})=>e.spacing.sm};
  margin: auto;
  background-color: ${({theme:e})=>e.colors.winter.deepBlue};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  font-size: ${({theme:e})=>e.fontSizes.xs};
  color: ${({theme:e})=>e.colors.text.primary};
`,aa=o.div`
  grid-area: desc;
  width: 200px;
  text-align: left;
  font-size: ${({theme:e})=>e.fontSizes.sm};
  color: ${({theme:e})=>e.colors.text.secondary};
`,oa=o.div`
  grid-area: name;
  height: 25px;
  font-size: ${({theme:e})=>e.fontSizes.lg};
  font-weight: ${({theme:e})=>e.fontWeights.bold};
  color: ${({theme:e})=>e.colors.primary.gold};
`;function ca(e){let i=$e[0];for(const s of $e)if(e>=s.levelRange[0]&&e<=s.levelRange[1]){i=s;break}else e>s.levelRange[1]&&(i=s);return i}function da(){const{character:e}=j(),[i,s]=f.useState(1),[r,n]=f.useState(ca(e?.level||1)),{createNewBattle:l}=ce();return f.useEffect(()=>{if(r){const a=r.levelRange[0],d=r.levelRange[1],c=Math.min(Math.max(e?.level||1,a),d);s(c)}},[e,i,r]),e?t.jsxs(t.Fragment,{children:[t.jsx(De,{children:"🗺️ Exploration"}),t.jsxs(Ee,{children:["Partez à l'aventure dans les terres sauvages et affrontez des monstres !",t.jsx("br",{}),"Gagnez de l'expérience, de l'or et trouvez des équipements légendaires."]}),t.jsxs(b,{children:[t.jsx(ra,{children:$e.map(a=>{const d=a.componentIcon;return e.level<a.levelRange[0]?null:t.jsxs(la,{$selected:r.id===a.id,onClick:()=>n(a),children:[t.jsx("div",{style:{gridArea:"icon"},children:t.jsx(d,{},a.id)}),t.jsxs(na,{children:[a.levelRange[0]," - ",a.levelRange[1]]}),t.jsx(oa,{children:a.name}),t.jsx(aa,{children:a.description})]},a.id)})}),t.jsx("div",{children:t.jsxs(A,{$size:"large",onClick:()=>{console.log("Creating new battle in zone",r.name,"for monster level",i),l(e,i,r)},children:["⚔️ Chercher un Combat ",i]})})]})]}):null}function xa(){return t.jsx(kn,{})}const ha=o.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: ${({theme:e})=>e.spacing.xl};
`,pa=o.div`
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
`,fa=o.h1`
  color: ${({theme:e})=>e.colors.primary.gold};
  font-size: ${({theme:e})=>e.fontSizes["3xl"]};
  margin-bottom: ${({theme:e})=>e.spacing.md};
  text-shadow: ${({theme:e})=>e.shadows.glow.gold};
  text-align: center;
`,ua=o.p`
  color: ${({theme:e})=>e.colors.text.secondary};
  font-size: ${({theme:e})=>e.fontSizes.base};
  margin-bottom: ${({theme:e})=>e.spacing.xl};
  text-align: center;
  line-height: 1.6;
`,ga=o.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing.md};
  margin-bottom: ${({theme:e})=>e.spacing.xl};
  flex-wrap: wrap;
  justify-content: center;
`,Ke=o.button`
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
`,ma=o.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: ${({theme:e})=>e.spacing.lg};
`,ya=o.div`
  background: rgba(0, 0, 0, 0.3);
  border: 2px solid ${({theme:e})=>e.colors.primary.gold};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  padding: ${({theme:e})=>e.spacing.lg};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({theme:e})=>e.spacing.md};
  transition: all 0.3s;
`,ja=o.h3`
  color: ${({theme:e})=>e.colors.primary.gold};
  font-size: ${({theme:e})=>e.fontSizes.lg};
  font-weight: ${({theme:e})=>e.fontWeights.bold};
  text-align: center;
  margin: 0;
`,ka=o.div`
  color: ${({theme:e})=>e.colors.text.muted};
  font-size: ${({theme:e})=>e.fontSizes.sm};
  font-style: italic;
  text-transform: uppercase;
  letter-spacing: 1px;
`,wa=o.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${({theme:e})=>e.spacing.sm};
  width: 100%;
`,se=o.div`
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
`,ba=o.div`
  color: ${({theme:e})=>e.colors.text.secondary};
  font-size: ${({theme:e})=>e.fontSizes.sm};
  text-align: center;
`,va=o.div`
  text-align: center;
  color: ${({theme:e})=>e.colors.text.secondary};
  font-size: ${({theme:e})=>e.fontSizes.sm};
  margin-bottom: ${({theme:e})=>e.spacing.md};
`,Je={goblin:{icon:"🧌",label:"Gobelin"},beast:{icon:"🐺",label:"Bêtes"},humanoid:{icon:"👤",label:"Humanoïdes"},undead:{icon:"💀",label:"Morts-vivants"},elemental:{icon:"🔥",label:"Élémentaires"},demon:{icon:"😈",label:"Démons"},giant:{icon:"🗿",label:"Géants"},dragon:{icon:"🐉",label:"Dragons"}};function $a(){const{character:e}=j(),[i,s]=f.useState("all"),r=R.filter(l=>i==="all"?!0:l.type===i),n=l=>R.filter(a=>a.type===l).length;return t.jsx(ha,{children:t.jsxs(pa,{children:[t.jsx(fa,{children:"📖 Bestiaire"}),t.jsxs(ua,{children:["Découvrez toutes les créatures qui peuplent le monde de la Fête d'Hiver.",t.jsx("br",{}),"Étudiez leurs forces et leurs faiblesses pour mieux les affronter !"]}),t.jsxs(ga,{children:[t.jsxs(Ke,{$active:i==="all",onClick:()=>s("all"),children:["Tous (",R.length,")"]}),Object.keys(Je).map(l=>{const a=n(l),{icon:d,label:c}=Je[l];return t.jsxs(Ke,{$active:i===l,onClick:()=>s(l),children:[d," ",c," (",a,")"]},l)})]}),t.jsxs(va,{children:[r.length," créature",r.length>1?"s":""," trouvée",r.length>1?"s":""]}),t.jsx(ma,{children:r.map((l,a)=>t.jsxs(ya,{children:[t.jsx(bt,{monster:{...l,level:Math.floor((l.minLevel+l.maxLevel)/2),health:l.baseHealth,maxHealth:l.baseHealth,damage:l.baseDamage,armor:l.baseArmor,abilities:l.abilities??[]},size:96}),t.jsx(ja,{children:l.name}),t.jsx(ka,{children:l.type}),t.jsxs(ba,{children:["Niveau ",l.minLevel," - ",l.maxLevel]}),e?.isAdmin&&t.jsxs(wa,{children:[t.jsxs(se,{children:["❤️ PV: ",t.jsx("span",{children:l.baseHealth})]}),t.jsxs(se,{children:["⚔️ ATT: ",t.jsx("span",{children:l.baseDamage})]}),t.jsxs(se,{children:["🛡️ ARM: ",t.jsx("span",{children:l.baseArmor})]}),t.jsxs(se,{children:["💰 Or: ",t.jsx("span",{children:t.jsx(W,{amount:l.goldReward})})]})]})]},a))})]})})}const La=(e,i)=>e?e.map(s=>{let r=0;return r+=s.level*10,r+=s.gold/1e5,r+=s.achievements?s.achievements.length*5:0,r+=s.defeatedMonsters?s.defeatedMonsters/100:0,s.score=Math.floor(r),s}).sort((s,r)=>(r[i]||0)-(s[i]||0)):[],w=o.div`
    flex: ${({flex:e})=>e||1};
    text-align: ${({align:e})=>e||"center"};
    padding: 0.8rem 0.2rem;
    font-size: 1.1rem;
    color: ${({color:e})=>e||"inherit"};
    font-weight: ${({flex:e})=>e===2?"bold":"normal"};
`;function Ma(){const{members:e}=Pi(),[i,s]=f.useState(e||[]),[r,n]=f.useState("score");return f.useEffect(()=>{s(La(e,r)||[])},[e,r]),t.jsxs(t.Fragment,{children:[t.jsx(De,{children:"🏆 Leaderboard"}),t.jsxs(Ee,{children:["Classement des meilleurs aventuriers d'Azeroth.",t.jsx("br",{}),"Affrontez les autres joueurs pour grimper dans le classement !"]}),t.jsxs(b,{children:[t.jsxs(k,{direction:"row",justify:"space-between",gap:"0",style:{paddingRight:"1rem"},children:[t.jsx(w,{flex:.5,onClick:()=>{},children:"Rank"}),t.jsx(w,{flex:1.5,children:"Name"}),t.jsx(w,{flex:1,style:{cursor:"pointer"},onClick:()=>n("level"),children:"Level"}),t.jsx(w,{flex:2,children:"Gold"}),t.jsx(w,{flex:1,children:"Kill"}),t.jsx(w,{flex:1,children:"HFs"}),t.jsx(w,{flex:1,style:{cursor:"pointer"},onClick:()=>n("score"),children:"Score"})]}),t.jsx(Se,{children:i&&i.map((l,a)=>t.jsxs(k,{direction:"row",justify:"space-between",gap:"0",style:{borderBottom:"1px solid #555",backgroundColor:a%2===0?"rgba(255, 255, 255, 0.05)":"transparent"},children:[t.jsx(w,{flex:.5,children:a+1}),t.jsx(w,{flex:1.5,align:"left",color:B[l.class]?.color||"#fff",children:l.name}),t.jsx(w,{flex:1,children:l.level}),t.jsx(w,{flex:2,children:t.jsx(W,{amount:l.gold})}),t.jsx(w,{flex:1,children:l.defeatedMonsters}),t.jsx(w,{flex:1,children:l.achievements?.length||0}),t.jsx(w,{flex:1,children:ye(l.score||0)})]},l.id))})]})]})}function Ba(){return t.jsx(Ma,{})}function Fa(){return t.jsx(rn,{})}const re=o.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`,le=o.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`,et=o.h1`
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
`,tt=o.h2`
  font-family: ${({theme:e})=>e.fonts.secondary};
  font-size: ${({theme:e})=>e.fontSizes["2xl"]};
  color: ${({theme:e})=>e.colors.winter.iceBlue};
  text-align: center;
  margin-bottom: ${({theme:e})=>e.spacing.md};
  font-weight: ${({theme:e})=>e.fontWeights.light};
  letter-spacing: 2px;
  text-transform: uppercase;
`;function Aa(){const{user:e,loading:i}=Fe(),{character:s,hasCharacter:r,loading:n,createNewCharacter:l}=j(),a=async d=>{try{await l(d)}catch(c){console.error("Erreur lors de la création du personnage:",c),alert("Erreur lors de la création du personnage. Veuillez réessayer.")}};return i||n?t.jsxs(re,{children:[t.jsx(J,{showActions:!1}),t.jsxs(le,{children:[t.jsx(et,{children:"❄️ Fête d'Hiver"}),t.jsx(tt,{children:"Chargement..."})]})]}):e&&!r?t.jsxs(re,{children:[t.jsx(J,{showActions:!1}),t.jsx(le,{children:t.jsx(Js,{onComplete:a})})]}):e&&s?t.jsx(re,{children:t.jsx(ks,{children:t.jsx(El,{children:t.jsx($i,{children:t.jsx(Ci,{children:t.jsxs(ss,{children:[t.jsx(J,{showActions:!0}),t.jsx(le,{children:t.jsx(er,{children:t.jsxs(Ft,{children:[t.jsx(D,{path:"/",element:t.jsx(Yn,{})}),t.jsx(D,{path:"/exploration",element:t.jsx(da,{})}),t.jsx(D,{path:"/battle",element:t.jsx(Fa,{})}),t.jsx(D,{path:"/shop",element:t.jsx(xa,{})}),t.jsx(D,{path:"/bestiary",element:t.jsx($a,{})}),t.jsx(D,{path:"/leaderboard",element:t.jsx(Ba,{})}),t.jsx(D,{path:"*",element:t.jsx(At,{to:"/",replace:!0})})]})})})]})})})})})}):t.jsxs(re,{children:[t.jsx(J,{showActions:!1}),t.jsxs(le,{children:[t.jsx(et,{children:"❄️ Fête d'Hiver"}),t.jsx(tt,{children:"Bienvenue dans l'aventure"})]})]})}function Wa(){return t.jsx(Bt,{children:t.jsx(Aa,{})})}Wt.createRoot(document.getElementById("root")).render(t.jsx(f.StrictMode,{children:t.jsxs(St,{theme:Ot,children:[t.jsx(Vt,{}),t.jsx(ti,{children:t.jsx(ai,{children:t.jsx(zi,{children:t.jsx(Wa,{})})})})]})}));
