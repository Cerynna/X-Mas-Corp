import{r as h,j as t,u as Je,a as et,R as bt,L as vt,B as $t,b as Bt,c as S,N as Ft,d as Lt}from"./vendor-react-CMUGM2aF.js";import{f as Mt,h as ne,k as tt,l as o,n as Wt,q as At}from"./vendor-CwrXu60c.js";import{i as Dt,g as Et,a as St,b as Qt,c as qt,d as Pt,o as It,u as Tt,s as Ct,r as q,e as Ht,f as ue,h as it,j as st,q as Se,k as _t,l as zt,n as rt,p as Rt,t as Gt,v as Zt}from"./vendor-firebase-BuamTKpQ.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const n of l)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function s(l){const n={};return l.integrity&&(n.integrity=l.integrity),l.referrerPolicy&&(n.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?n.credentials="include":l.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(l){if(l.ep)return;l.ep=!0;const n=s(l);fetch(l.href,n)}})();const Nt={colors:{primary:{gold:"#FFD700",darkGold:"#C7A500",bronze:"#CD7F32"},winter:{iceBlue:"#A5D8FF",deepBlue:"#1E3A5F",snowWhite:"#F8F9FA",frostBlue:"#4A90E2",darkIce:"#2C5F8D"},alliance:{blue:"#0078D7",lightBlue:"#4BA3E3",darkBlue:"#003F7F"},horde:{red:"#8B0000",darkRed:"#5C0000",crimson:"#DC143C"},neutral:{black:"#0A0E1A",darkGray:"#1A1F2E",gray:"#2E3440",lightGray:"#4C566A",silver:"#D8DEE9",white:"#ECEFF4"},accent:{arcane:"#8B5CF6",frost:"#60A5FA",fire:"#EF4444",nature:"#10B981",holy:"#FDE047"},status:{success:"#10B981",warning:"#F59E0B",error:"#EF4444",info:"#3B82F6"},text:{primary:"#ECEFF4",secondary:"#D8DEE9",dark:"#0A0E1A",muted:"#4C566A"},channels:{general:"#ffdb97",wisp:"#cf21c7",group:"#60A5FA",guild:"#10B981",party:"#F59E0B",raid:"#EF4444"},quality:{poor:"#9D9D9D",common:"#FFFFFF",uncommon:"#1EFF00",rare:"#0070DD",epic:"#A335EE",legendary:"#FF8000"}},fonts:{primary:"'Cinzel', serif",secondary:"'Roboto Condensed', sans-serif",body:"'Open Sans', sans-serif",display:"'Cinzel Decorative', cursive"},fontSizes:{xs:"0.75rem",sm:"0.875rem",base:"1rem",lg:"1.125rem",xl:"1.25rem","2xl":"1.5rem","3xl":"1.875rem","4xl":"2.25rem","5xl":"3rem","6xl":"3.75rem"},fontWeights:{light:300,normal:400,medium:500,semibold:600,bold:700,black:900},spacing:{xxs:"0.125rem",xs:"0.25rem",sm:"0.5rem",md:"1rem",lg:"1.5rem",xl:"2rem","2xl":"3rem","3xl":"4rem","4xl":"6rem","5xl":"8rem"},borders:{thin:"1px",medium:"2px",thick:"4px",heavy:"6px"},borderRadius:{none:"0",sm:"0.25rem",md:"0.5rem",lg:"0.75rem",xl:"1rem",full:"9999px"},shadows:{sm:"0 1px 2px 0 rgba(0, 0, 0, 0.5)",md:"0 4px 6px -1px rgba(0, 0, 0, 0.5), 0 2px 4px -1px rgba(0, 0, 0, 0.3)",lg:"0 10px 15px -3px rgba(0, 0, 0, 0.5), 0 4px 6px -2px rgba(0, 0, 0, 0.3)",xl:"0 20px 25px -5px rgba(0, 0, 0, 0.5), 0 10px 10px -5px rgba(0, 0, 0, 0.3)",inner:"inset 0 2px 4px 0 rgba(0, 0, 0, 0.5)",glow:{blue:"0 0 20px rgba(74, 144, 226, 0.6), 0 0 40px rgba(74, 144, 226, 0.4)",gold:"0 0 20px rgba(255, 215, 0, 0.6), 0 0 40px rgba(255, 215, 0, 0.4)",arcane:"0 0 20px rgba(139, 92, 246, 0.6), 0 0 40px rgba(139, 92, 246, 0.4)",frost:"0 0 20px rgba(96, 165, 250, 0.6), 0 0 40px rgba(96, 165, 250, 0.4)"}},transitions:{fast:"150ms ease-in-out",base:"250ms ease-in-out",slow:"350ms ease-in-out"},breakpoints:{xs:"320px",sm:"640px",md:"768px",lg:"1024px",xl:"1280px","2xl":"1536px"},zIndex:{dropdown:1e3,modal:1100,popover:1200,tooltip:1300,notification:1400}},Ut=Mt`
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
`,Ot={apiKey:"AIzaSyAcelSLYaVnCo-VNmZ7duPrBZ2S9p1__Nc",authDomain:"xmas-corp.firebaseapp.com",databaseURL:"https://xmas-corp-default-rtdb.europe-west1.firebasedatabase.app",projectId:"xmas-corp",storageBucket:"xmas-corp.firebasestorage.app",messagingSenderId:"795906380947",appId:"1:795906380947:web:e6e874d93c70d9713fe966",measurementId:"G-EY3X1CEYSZ"},N=Dt(Ot),ve=Et(N),P=St(N);Qt(N);typeof window<"u"&&qt(N);Pt(N);const Vt=async()=>{try{return(await Ct(ve)).user}catch(e){throw console.error("Erreur lors de la connexion anonyme:",e),e}},Xt=e=>It(ve,e),Yt=async e=>{const i=ve.currentUser;if(i)try{await Tt(i,e)}catch(s){throw console.error("Erreur lors de la mise à jour du profil utilisateur:",s),s}else throw new Error("Aucun utilisateur connecté.")},v={users:"users",characters:"characters",messages:"messages",shops:"shops",dungeons:"dungeons"},$e=async(e,i,s)=>{const r=q(P,e),l=Rt(r);return await Gt(l,{...i,docId:l.key,createdAt:ue(),updatedAt:ue()}),l.key},Be=async e=>{try{const i=q(P,e),s=await rt(i);if(s.exists()){const r=s.val();return Object.keys(r).map(l=>({id:l,...r[l]}))}else return[]}catch(i){throw console.error("Erreur lors de la lecture des documents:",i),i}},lt=async(e,i,s,r)=>{try{const l=q(P,e);let n=Se(l,_t(i));s!==void 0&&(n=Se(n,zt(s)));const a=await rt(n);if(a.exists()){const x=a.val();return Object.keys(x).map(d=>({id:d,...x[d]}))}else return[]}catch(l){throw console.error("Erreur lors de la requête:",l),l}},ge=e=>{const i={};return Object.keys(e).forEach(s=>{const r=e[s];if(r!==void 0)if(r!==null&&typeof r=="object"&&!Array.isArray(r)){const l=ge(r);Object.keys(l).length>0&&(i[s]=l)}else Array.isArray(r)?i[s]=r.filter(l=>l!==void 0).map(l=>l!==null&&typeof l=="object"&&!Array.isArray(l)?ge(l):l):i[s]=r}),i},C=async(e,i,s)=>{try{const r=q(P,`${e}/${i}`),l=ge(s);await Ht(r,{...l,updatedAt:ue()})}catch(r){throw console.error("Erreur lors de la mise à jour du document:",r),r}},Kt=async(e,i)=>{try{const s=q(P,`${e}/${i}`);await Zt(s)}catch(s){throw console.error("Erreur lors de la suppression du document:",s),s}},nt=(e,i,s)=>{const r=q(P,`${e}/${i}`),l=it(r,n=>{n.exists()?s({id:i,...n.val()}):s(null)});return()=>st(r,"value",l)},oe=(e,i)=>{const s=q(P,e),r=it(s,l=>{if(l.exists()){const n=l.val(),a=Object.keys(n).map(x=>({id:x,...n[x]}));i(a)}else i([])});return()=>st(s,"value",r)},ot=h.createContext(void 0),Jt=({children:e})=>{const[i,s]=h.useState(null),[r,l]=h.useState(!0);h.useEffect(()=>{const a=Xt(async x=>{if(x)s(x),l(!1);else try{const d=await Vt();s(d)}catch(d){console.error("Erreur lors de la connexion anonyme:",d)}finally{l(!1)}});return()=>a()},[]);const n={user:i,loading:r};return t.jsx(ot.Provider,{value:n,children:e})},Fe=()=>{const e=h.useContext(ot);if(!e)throw new Error("useAuth doit être utilisé dans un AuthProvider");return e},ei={monk:[{id:"jab",name:"Coup de poing",icon:"🥋",description:"Un coup rapide qui inflige +20% de dégâts supplémentaires.",damage:.2,unlockLevel:1,cooldown:10},{id:"rising-sun-kick",name:"Coup de pied du soleil levant",icon:"☀️",description:"Un coup puissant qui inflige +50% de dégâts supplémentaires.",damage:.5,unlockLevel:5,cooldown:20},{id:"blackout-kick",name:"Coup de pied aveuglant",icon:"🌑",description:"Un coup tournoyant qui inflige +80% de dégâts supplémentaires.",damage:.8,unlockLevel:10,cooldown:40},{id:"fists-of-fury",name:"Poings de fureur",icon:"👊",description:"Une série de coups rapides qui infligent +100% de dégâts supplémentaires.",damage:1,unlockLevel:20,cooldown:100},{id:"spinning-crane-kick",name:"Coup de grue tournoyant",icon:"🦢",description:"Un coup tournoyant qui inflige +200% de dégâts supplémentaires.",damage:2,unlockLevel:30,cooldown:200}],warrior:[{id:"heroic-strike",name:"Frappe héroïque",icon:"⚔️",description:"Une attaque puissante qui inflige +20% de dégâts supplémentaires.",damage:.2,unlockLevel:1,cooldown:10},{id:"mortal-strike",name:"Frappe mortelle",icon:"💥",description:"Frappe dévastatrice qui inflige +50% de dégâts supplémentaires.",damage:.5,unlockLevel:5,cooldown:20},{id:"whirlwind",name:"Tourbillon",icon:"🌪️",description:"Attaque tournoyante massive qui inflige +80% de dégâts supplémentaires.",damage:.8,unlockLevel:10,cooldown:40},{id:"recklessness",name:"Témérité",icon:"💢",description:"Frappe avec témérité qui inflige +100% de dégâts supplémentaires.",damage:1,unlockLevel:20,cooldown:100},{id:"execute",name:"Exécution",icon:"☠️",description:"Coup final dévastateur qui inflige +200% de dégâts supplémentaires.",damage:2,unlockLevel:30,cooldown:200}],paladin:[{id:"crusader-strike",name:"Frappe du croisé",icon:"⚡",description:"Frappe sacrée qui inflige +20% de dégâts supplémentaires.",damage:.2,unlockLevel:1,cooldown:10},{id:"holy-light",name:"Lumière sacrée",icon:"✨",description:"Soigne pour 20% de la vie.",damage:0,heal:.2,unlockLevel:3,cooldown:20},{id:"divine-storm",name:"Tempête divine",icon:"🌟",description:"Tempête sacrée qui inflige +80% de dégâts supplémentaires.",damage:.8,unlockLevel:10,cooldown:40},{id:"hammer-of-wrath",name:"Marteau de courroux",icon:"🔨",description:"Marteau divin qui inflige +100% de dégâts.",damage:1,unlockLevel:20,cooldown:100},{id:"divine-shield",name:"Bouclier divin",icon:"🛡️",description:"Frappe protectrice qui inflige +200% de dégâts et soigne +50%.",damage:2,heal:.5,unlockLevel:30,cooldown:200}],hunter:[{id:"arcane-shot",name:"Tir des arcanes",icon:"🏹",description:"Tir magique qui inflige +20% de dégâts supplémentaires.",damage:.2,unlockLevel:1,cooldown:10},{id:"multi-shot",name:"Tir multiple",icon:"🎯",description:"Salve de flèches qui inflige +50% de dégâts supplémentaires.",damage:.5,unlockLevel:5,cooldown:20},{id:"aimed-shot",name:"Tir visé",icon:"🎪",description:"Tir précis et puissant qui inflige +80% de dégâts supplémentaires.",damage:.8,unlockLevel:15,cooldown:40},{id:"explosive-shot",name:"Tir explosif",icon:"💣",description:"Flèche explosive qui inflige +100% de dégâts supplémentaires.",damage:1,unlockLevel:25,cooldown:100},{id:"kill-shot",name:"Tir mortel",icon:"💀",description:"Tir fatal qui inflige +200% de dégâts supplémentaires.",damage:2,unlockLevel:35,cooldown:200}],rogue:[{id:"sinister-strike",name:"Frappe pernicieuse",icon:"🗡️",description:"Attaque sournoise qui inflige +20% de dégâts supplémentaires.",damage:.2,unlockLevel:1,cooldown:10},{id:"eviscerate",name:"Éventration",icon:"🔪",description:"Attaque tranchante qui inflige +50% de dégâts supplémentaires.",damage:.5,unlockLevel:5,cooldown:20},{id:"fan-of-knives",name:"Salve de couteaux",icon:"🗡️",description:"Attaque de zone qui inflige +80% de dégâts supplémentaires.",damage:.8,unlockLevel:10,cooldown:40},{id:"shadowstep",name:"Pas de l’ombre",icon:"🌑",description:"Attaque furtive qui inflige +100% de dégâts supplémentaires.",damage:1,unlockLevel:20,cooldown:100},{id:"vendetta",name:"Vendetta",icon:"🔥",description:"Attaque vengeresse qui inflige +200% de dégâts supplémentaires.",damage:2,unlockLevel:30,cooldown:200}],priest:[{id:"smite",name:"Châtiment",icon:"✨",description:"Frappe sacrée qui inflige +20% de dégâts magiques.",damage:.2,unlockLevel:1,cooldown:10},{id:"heal",name:"Soins",icon:"💚",description:"Soigne pour 20% de la vie.",damage:0,heal:.2,unlockLevel:5,cooldown:20},{id:"shadow-word-pain",name:"Mot de l’ombre : Douleur",icon:"🌑",description:"Douleur de l’ombre qui inflige +50% de dégâts supplémentaires.",damage:.5,unlockLevel:10,cooldown:40},{id:"mind-blast",name:"Explosion mentale",icon:"🧠",description:"Attaque mentale qui inflige +80% de dégâts supplémentaires.",damage:.8,unlockLevel:20,cooldown:100},{id:"divine-hymn",name:"Hymne divin",icon:"🎵",description:"Hymne sacré qui inflige +200% de dégâts supplémentaires et soigne pour 50% de la vie.",damage:2,heal:.5,unlockLevel:30,cooldown:200}],shaman:[{id:"lightning-bolt",name:"Éclair",icon:"⚡",description:"Éclair foudroyant qui inflige +20% de dégâts supplémentaires.",damage:.2,unlockLevel:1,cooldown:10},{id:"earth-shock",name:"Horion de terre",icon:"🌍",description:"Choc élémentaire qui inflige +50% de dégâts supplémentaires.",damage:.5,unlockLevel:5,cooldown:20},{id:"lava-burst",name:"Explosion de lave",icon:"🌋",description:"Lave brûlante qui inflige +80% de dégâts supplémentaires.",damage:.8,unlockLevel:15,cooldown:40},{id:"chain-lightning",name:"Chaîne d’éclairs",icon:"⛈️",description:"Éclairs enchaînés qui infligent +100% de dégâts supplémentaires.",damage:1,unlockLevel:25,cooldown:100},{id:"elemental-mastery",name:"Maîtrise élémentaire",icon:"🔥",description:"Puissance des éléments qui inflige +200% de dégâts supplémentaires.",damage:2,unlockLevel:35,cooldown:200}],mage:[{id:"fireball",name:"Boule de feu",icon:"🔥",description:"Boule de feu ardente qui inflige +20% de dégâts supplémentaires.",damage:.2,unlockLevel:1,cooldown:10},{id:"frostbolt",name:"Éclair de givre",icon:"❄️",description:"Givre glacial qui inflige +50% de dégâts supplémentaires.",damage:.5,unlockLevel:3,cooldown:20},{id:"arcane-missiles",name:"Projectiles des arcanes",icon:"🔮",description:"Salve arcanique qui inflige +80% de dégâts supplémentaires.",damage:.8,unlockLevel:15,cooldown:40},{id:"pyroblast",name:"Explosion pyrotechnique",icon:"💥",description:"Explosion de feu qui inflige +100% de dégâts supplémentaires.",damage:1,unlockLevel:25,cooldown:100},{id:"arcane-power",name:"Puissance des arcanes",icon:"✨",description:"Puissance arcanique ultime qui inflige +200% de dégâts supplémentaires.",damage:2,unlockLevel:35,cooldown:200}],warlock:[{id:"shadow-bolt",name:"Trait de l’ombre",icon:"🌑",description:"Projectile d’ombre qui inflige +20% de dégâts supplémentaires.",damage:.2,unlockLevel:1,cooldown:10},{id:"immolate",name:"Immolation",icon:"🔥",description:"Flammes démoniaques qui infligent +50% de dégâts supplémentaires.",damage:.5,unlockLevel:5,cooldown:20},{id:"chaos-bolt",name:"Trait du chaos",icon:"💀",description:"Chaos destructeur qui inflige +80% de dégâts supplémentaires.",damage:.8,unlockLevel:15,cooldown:40},{id:"soul-fire",name:"Feu de l’âme",icon:"👻",description:"Flammes spirituelles qui infligent +100% de dégâts supplémentaires.",damage:1,unlockLevel:25,cooldown:100},{id:"dark-soul",name:"Âme noire",icon:"😈",description:"Puissance démoniaque qui inflige +200% de dégâts supplémentaires.",damage:2,unlockLevel:35,cooldown:200}],druid:[{id:"wrath",name:"Colère",icon:"🌿",description:"Colère de la nature qui inflige +20% de dégâts supplémentaires.",damage:.2,unlockLevel:1,cooldown:10},{id:"moonfire",name:"Eclat lunaire",icon:"🌙",description:"Lumière lunaire qui inflige +50% de dégâts supplémentaires.",damage:.5,unlockLevel:5,cooldown:20},{id:"starfire",name:"Feu stellaire",icon:"⭐",description:"Feu des étoiles qui inflige +80% de dégâts supplémentaires.",damage:.8,unlockLevel:15,cooldown:40},{id:"starsurge",name:"Déferlante stellaire",icon:"💫",description:"Déferlante cosmique qui inflige +100% de dégâts supplémentaires.",damage:1,unlockLevel:25,cooldown:100},{id:"incarnation",name:"Incarnation",icon:"🦁",description:"Puissance animale qui inflige +200% de dégâts supplémentaires.",damage:2,unlockLevel:35,cooldown:200}],"death-knight":[{id:"death-strike",name:"Frappe de la mort",icon:"💀",description:"Frappe mortelle qui inflige +20% de dégâts supplémentaires.",damage:.2,unlockLevel:1,cooldown:2},{id:"obliterate",name:"Oblitération",icon:"⚔️",description:"Coup destructeur qui inflige +50% de dégâts supplémentaires.",damage:.5,unlockLevel:5,cooldown:20},{id:"frost-strike",name:"Frappe de givre",icon:"❄️",description:"Frappe glaciale qui inflige +80% de dégâts supplémentaires.",damage:.8,unlockLevel:15,cooldown:40},{id:"soul-reaper",name:"Faucheuse d’âme",icon:"👻",description:"Récolte d’âmes qui inflige +100% de dégâts supplémentaires.",damage:1,unlockLevel:25,cooldown:100},{id:"apocalypse",name:"Apocalypse",icon:"☠️",description:"Fin des temps qui inflige +200% de dégâts supplémentaires.",damage:2,unlockLevel:35,cooldown:200}]},G={monk:{id:"monk",name:"Moine",description:"Maître des arts martiaux qui utilise l'énergie spirituelle pour soigner et combattre.",primaryStat:"agility",icon:"🥋",color:"#00FF96",baseHP:105,availableFor:{alliance:["human","dwarf","night-elf","gnome","draenei","worgen"],horde:["orc","undead","tauren","troll","blood-elf","goblin"],neutral:["pandaren"]},armorType:"leather",weaponType:["staff"]},warrior:{id:"warrior",name:"Guerrier",description:"Maître du combat au corps à corps, utilise la rage pour déchaîner des attaques dévastatrices.",primaryStat:"strength",icon:"⚔️",color:"#C79C6E",baseHP:120,availableFor:{alliance:["human","dwarf","night-elf","gnome","draenei","worgen"],horde:["orc","undead","tauren","troll","blood-elf","goblin"],neutral:["pandaren"]},armorType:"plate",weaponType:["sword","axe","mace"]},paladin:{id:"paladin",name:"Paladin",description:"Guerrier sacré qui utilise la Lumière pour protéger ses alliés et punir ses ennemis.",primaryStat:"strength",icon:"🛡️",color:"#F58CBA",baseHP:110,availableFor:{alliance:["human","dwarf","draenei"],horde:["blood-elf","tauren"],neutral:[]},armorType:"plate",weaponType:["sword","mace"]},hunter:{id:"hunter",name:"Chasseur",description:"Maître du tir à distance et compagnon des bêtes sauvages.",primaryStat:"agility",icon:"🏹",color:"#ABD473",baseHP:100,availableFor:{alliance:["human","dwarf","night-elf","draenei","worgen","gnome"],horde:["orc","undead","tauren","troll","blood-elf","goblin"],neutral:["pandaren"]},armorType:"mail",weaponType:["bow"]},rogue:{id:"rogue",name:"Voleur",description:"Assassin furtif spécialisé dans les attaques sournoises et les coups critiques.",primaryStat:"agility",icon:"🗡️",color:"#FFF569",baseHP:95,availableFor:{alliance:["human","dwarf","night-elf","gnome","worgen"],horde:["orc","undead","troll","blood-elf","goblin"],neutral:["pandaren"]},armorType:"leather",weaponType:["sword"]},priest:{id:"priest",name:"Prêtre",description:"Manipule la magie sacrée et de l'ombre pour soigner ou blesser.",primaryStat:"intellect",icon:"✨",color:"#FFFFFF",baseHP:80,availableFor:{alliance:["human","dwarf","night-elf","draenei","worgen"],horde:["undead","troll","blood-elf","goblin"],neutral:["pandaren"]},armorType:"cloth",weaponType:["staff"]},shaman:{id:"shaman",name:"Chaman",description:"Invoque le pouvoir des éléments et des esprits ancestraux.",primaryStat:"intellect",icon:"⚡",color:"#0070DE",baseHP:95,availableFor:{alliance:["draenei"],horde:["orc","tauren","troll","goblin"],neutral:["pandaren"]},armorType:"mail",weaponType:["mace","staff"]},mage:{id:"mage",name:"Mage",description:"Maître des arcanes, du feu et du givre, capable de manipuler les forces magiques.",primaryStat:"intellect",icon:"🔮",color:"#69CCF0",baseHP:75,availableFor:{alliance:["human","dwarf","night-elf","gnome","draenei","worgen"],horde:["orc","undead","troll","blood-elf","goblin"],neutral:["pandaren"]},armorType:"cloth",weaponType:["staff"]},warlock:{id:"warlock",name:"Démoniste",description:"Invoque des démons et utilise la magie de l'ombre et du feu démoniaque.",primaryStat:"intellect",icon:"👿",color:"#9482C9",baseHP:85,availableFor:{alliance:["human","dwarf","gnome","worgen"],horde:["orc","undead","blood-elf","goblin"],neutral:[]},armorType:"cloth",weaponType:["staff"]},druid:{id:"druid",name:"Druide",description:"Transformiste de la nature capable de prendre plusieurs formes animales.",primaryStat:"intellect",icon:"🌿",color:"#FF7D0A",baseHP:90,availableFor:{alliance:["night-elf","worgen"],horde:["tauren","troll"],neutral:[]},armorType:"leather",weaponType:["staff","mace"]},"death-knight":{id:"death-knight",name:"Chevalier de la mort",description:"Guerrier impie maniant les pouvoirs de la mort et de la glace.",primaryStat:"strength",icon:"💀",color:"#C41F3B",baseHP:115,availableFor:{alliance:["human","dwarf","night-elf","gnome","draenei","worgen"],horde:["orc","undead","tauren","troll","blood-elf","goblin"],neutral:["pandaren"]},armorType:"plate",weaponType:["sword","axe","mace"]}},ti=(e,i)=>Object.values(G).filter(s=>s.availableFor[i.id].includes(e.id)),me=[{id:"forest_depths",name:"Profondeurs des Forêts",levelRequirement:5,size:2,masterZone:"starting_zone",boss:{id:"forest_troll",name:"Troll des Forêts",type:"humanoid",icon:"👹",abilities:[{name:"Coup de Massue",icon:"🔨",damage:3e3,cooldown:5,description:"Un coup puissant avec une massue qui inflige de lourds dégâts."},{name:"Rugissement Intimidant",icon:"🗣️",damage:0,cooldown:6,description:"Un rugissement terrifiant qui réduit la défense des ennemis."}],baseHP:0,health:0,maxHealth:0,level:0,armor:0}},{id:"bandit_hideout",name:"Cachette des Bandits",levelRequirement:10,size:3,masterZone:"bandit_camp",boss:{id:"bandit_leader",name:"Chef des Bandits",type:"humanoid",icon:"👺",abilities:[{name:"Frappe Puissante",icon:"⚔️",damage:3500,cooldown:5,description:"Une attaque dévastatrice qui inflige de lourds dégâts à un ennemi."},{name:"Cri de Ralliement",icon:"📢",damage:0,cooldown:6,description:"Un cri inspirant qui augmente l'attaque des alliés proches."}],baseHP:0,health:0,maxHealth:0,level:0,armor:0}},{id:"undeads_lair",name:"Antre des Morts-Vivants",levelRequirement:15,size:5,masterZone:"occult_mansion",boss:{id:"undead_king",name:"Roi des Morts-Vivants",type:"undead",icon:"👑",abilities:[{name:"Cri de Guerre",icon:"📢",damage:3500,cooldown:6,description:"Cri terrifiant qui inflige des dégâts majeurs"},{name:"Lame Spectrale",icon:"👻",damage:4e3,cooldown:7,description:"Frappe spectrale qui ignore l'armure"}],baseHP:0,health:0,maxHealth:0,level:0,armor:0}},{id:"elemental_core",name:"Cœur Élémentaire",levelRequirement:20,size:4,masterZone:"elemental_plains",boss:{id:"elemental_overlord",name:"Souverain Élémentaire",type:"elemental",icon:"🌪️",abilities:[{name:"Tempête Déchaînée",icon:"🌪️",damage:4e3,cooldown:6,description:"Une tempête violente qui inflige des dégâts massifs."}],baseHP:0,health:0,maxHealth:0,level:0,armor:0}},{id:"demon_fortress",name:"Forteresse Démoniaque",levelRequirement:25,size:6,masterZone:"demon_stronghold",boss:{id:"demon_overlord",name:"Souverain Démoniaque",type:"demon",icon:"👹",abilities:[{name:"Choc Infernal",icon:"🔥",damage:4500,cooldown:7,description:"Un choc de flammes infernales infligeant des dégâts massifs."}],baseHP:0,health:0,maxHealth:0,level:0,armor:0}},{id:"giant_caverns",name:"Cavernes des Géants",levelRequirement:30,size:7,masterZone:"giants_land",boss:{id:"giant_king",name:"Roi des Géants",type:"giant",icon:"👑",abilities:[{name:"Frappe Sismique",icon:"🌍",damage:5e3,cooldown:8,description:"Une frappe puissante qui secoue le sol et inflige des dégâts massifs."}],baseHP:0,health:0,maxHealth:0,level:0,armor:0}}],ii={poor:.5,common:1,uncommon:1.5,rare:2.5,epic:4,legendary:6},si={plate:"en Plaque",mail:"en Mailles",leather:"en Cuir",cloth:"en Tissu"},ri={weapon:"⚔️",head:"👑",chest:"🛡️",legs:"👖",boots:"👢",jewelry:"💍"},li={poor:.5,common:1,uncommon:2,rare:5,epic:12,legendary:30},V={sword:{poor:["Épée rouillée","Lame ébréchée"],common:["Épée courte","Lame simple"],uncommon:["Lame tranchante","Épée solide"],rare:["Épée de chevalier","Lame runique"],epic:["Lame de dragon","Épée mystique"],legendary:["Excalibur","Lame éternelle"]},axe:{poor:["Hache usée","Hache ébréchée"],common:["Hache de guerre","Hache solide"],uncommon:["Hache tranchante","Hache de bataille"],rare:["Hache runique","Hache de champion"],epic:["Hache de dragon","Hache mystique"],legendary:["Hache des rois","Hache éternelle"]},mace:{poor:["Marteau usé","Marteau ébréché"],common:["Marteau de guerre","Marteau solide"],uncommon:["Marteau lourd","Marteau de bataille"],rare:["Marteau runique","Marteau de champion"],epic:["Marteau de dragon","Marteau mystique"],legendary:["Marteau des rois","Marteau éternel"]},bow:{poor:["Arc cassé","Arc usé"],common:["Arc court","Arc solide"],uncommon:["Arc long","Arc précis"],rare:["Arc elfique","Arc de maître"],epic:["Arc de dragon","Arc mystique"],legendary:["Arc des rois","Arc éternel"]},staff:{poor:["Bâton cassé","Bâton usé"],common:["Bâton de novice","Bâton solide"],uncommon:["Bâton d'apprenti","Bâton enchanté"],rare:["Bâton mystique","Bâton de sorcier"],epic:["Bâton de dragon","Bâton céleste"],legendary:["Bâton des rois","Bâton éternel"]}},ni={weapon:{poor:["Épée rouillée","Bâton cassé","Dague ébréchée"],common:["Épée courte","Hache de bucheron","Bâton de novice"],uncommon:["Lame tranchante","Marteau lourd","Arc solide"],rare:["Épée de chevalier","Hache runique","Bâton mystique"],epic:["Lame de dragon","Marteau de foudre","Arc de phoenix"],legendary:["Excalibur","Mjolnir","Frostmourne"]},head:{poor:["Bonnet","Chapeau"],common:["Casque","Capuche"],uncommon:["Heaume","Coiffe"],rare:["Couronne","Casque renforcé"],epic:["Heaume de dragon","Couronne céleste"],legendary:["Couronne des rois","Masque éternel"]},chest:{poor:["Tunique","Gilet"],common:["Plastron","Robe"],uncommon:["Cuirasse","Armure"],rare:["Armure renforcée","Robe enchantée"],epic:["Cuirasse céleste","Armure de dragon"],legendary:["Armure des rois","Cuirasse éternel"]},legs:{poor:["Pantalon","Braies"],common:["Jambières","Pantalon renforcé"],uncommon:["Grèves","Cuissardes"],rare:["Jambières renforcée","Grèves renforcée"],epic:["Cuissardes de dragon","Jambières céleste"],legendary:["Grèves des rois","Cuissardes éternel"]},boots:{poor:["Sandales","Bottes"],common:["Solerets","Souliers"],uncommon:["Bottes renforcées","Sandales solides"],rare:["Souliers enchantées","Solerets de bataille"],epic:["Bottes de dragon","Solerets céleste"],legendary:["Bottes des rois","Solerets éternels"]},jewelry:{poor:["Ficelle nouée","Caillou poli"],common:["Anneau de bronze","Collier simple"],uncommon:["Anneau d'argent","Collier enchassé"],rare:["Anneau d'or","Amulette magique"],epic:["Anneau de dragon","Talisman céleste"],legendary:["Anneau des rois","Amulette éternels"]}},oi={human:{id:"human",name:"Humain",description:"Peuple courageux et déterminé de Hurlevent.",faction:"alliance",icon:"👨",baseStats:{strength:3,agility:1,intellect:3,stamina:2}},dwarf:{id:"dwarf",name:"Nain",description:"Race ancienne et robuste de Forgefer.",faction:"alliance",icon:"🧔",baseStats:{strength:3,stamina:4,agility:1,intellect:1}},"night-elf":{id:"night-elf",name:"Elfe de la nuit",description:"Ancien peuple mystique de Kalimdor.",faction:"alliance",icon:"🧝",baseStats:{agility:4,intellect:1,stamina:3,strength:1}},gnome:{id:"gnome",name:"Gnome",description:"Inventeurs ingénieux de Gnomeregan.",faction:"alliance",icon:"🧙",baseStats:{intellect:4,agility:2,strength:2,stamina:1}},draenei:{id:"draenei",name:"Draeneï",description:"Réfugiés nobles guidés par la Lumière.",faction:"alliance",icon:"👽",baseStats:{strength:3,intellect:2,stamina:3,agility:1}},worgen:{id:"worgen",name:"Worgen",description:"Humains maudits transformés en loups-garous.",faction:"alliance",icon:"🐺",baseStats:{strength:3,agility:3,stamina:2,intellect:1}},orc:{id:"orc",name:"Orc",description:"Guerriers féroces d'Orgrimmar.",faction:"horde",icon:"👹",baseStats:{strength:4,stamina:3,agility:1,intellect:1}},undead:{id:"undead",name:"Mort-vivant",description:"Les Réprouvés, libérés du Fléau.",faction:"horde",icon:"🧟",baseStats:{intellect:3,agility:2,stamina:3,strength:1}},tauren:{id:"tauren",name:"Tauren",description:"Géants paisibles des plaines de Mulgore.",faction:"horde",icon:"🐮",baseStats:{strength:3,stamina:4,agility:1,intellect:1}},troll:{id:"troll",name:"Troll",description:"Chasseurs rusés des Îles de l'Écho.",faction:"horde",icon:"🗿",baseStats:{agility:4,intellect:1,stamina:2,strength:2}},"blood-elf":{id:"blood-elf",name:"Elfe de sang",description:"Anciens Haut-Elfes assoiffés de magie.",faction:"horde",icon:"🧝‍♀️",baseStats:{intellect:4,agility:3,strength:1,stamina:1}},goblin:{id:"goblin",name:"Gobelin",description:"Marchands malins et ingénieux.",faction:"horde",icon:"👺",baseStats:{intellect:3,agility:1,strength:2,stamina:3}},pandaren:{id:"pandaren",name:"Pandaren",description:"Âmes sages en quête d'équilibre.",faction:"neutral",icon:"🐼",baseStats:{strength:3,agility:3,intellect:3,stamina:3}}},ai={alliance:{name:"Alliance",id:"alliance",icon:"🛡️",color:"#3b82f6",bgColor:"#1e293b"},horde:{name:"Horde",id:"horde",icon:"⚔️",color:"#ef4444",bgColor:"#450a0a"},neutral:{name:"Neutre",id:"neutral",icon:"☯️",color:"#9ca3af",bgColor:"#374151"}},ci=e=>Object.values(oi).filter(i=>i.faction===e.id),di={male:{name:"Homme",icon:"♂️",id:"male",color:"#3b82f6",bgColor:"#1e293b"},female:{name:"Femme",icon:"♀️",id:"female",color:"#ec4899",bgColor:"#451225"}},xi=[{id:"wolf",name:"Loup",type:"beast",icon:"🐺",abilities:[{name:"Morsure",icon:"🦷",damage:.5,cooldown:2,description:"Mord férocement la cible"}],baseHP:100,health:0,maxHealth:0,level:0,armor:1},{id:"boar",name:"Sanglier",type:"beast",icon:"🐗",abilities:[{name:"Charge",icon:"💨",damage:.2,cooldown:3,description:"Charge brutalement"}],baseHP:100,health:0,maxHealth:0,level:0,armor:1.5},{id:"fox",name:"Renard Agile",type:"beast",icon:"🦊",abilities:[{name:"Fuite Rapide",icon:"🏃",damage:.6,cooldown:2,description:"Esquive et contre-attaque"}],baseHP:100,health:0,maxHealth:0,level:0,armor:1.5},{id:"owl",name:"Hibou Sombre",type:"beast",icon:"🦉",abilities:[{name:"Serres Tranchantes",icon:"🪶",damage:.5,cooldown:2,description:"Attaque silencieuse de nuit"}],baseHP:110,health:0,maxHealth:0,level:0,armor:3},{id:"murloc",name:"Murloc",type:"humanoid",icon:"🐸",abilities:[{name:"Cri Murloc",icon:"📢",damage:.2,cooldown:4,description:"MRGLGLGL!"}],baseHP:130,health:0,maxHealth:0,level:0,armor:2.25},{id:"bandit",name:"Bandit de la Forêt",type:"humanoid",icon:"🗡️",baseHP:120,abilities:[{name:"Coup Sournois",icon:"🔪",damage:1,cooldown:3,description:"Frappe dans le dos"}],health:0,maxHealth:0,level:0,armor:2.5},{id:"thief",name:"Voleur de la Forêt",type:"humanoid",icon:"🕴️",abilities:[{name:"Vol Rapide",icon:"🪙",damage:.4,cooldown:3,description:"Dérobe et frappe rapidement"}],baseHP:130,health:0,maxHealth:0,level:0,armor:3},{id:"giant-rat",name:"Rat Géant",type:"beast",icon:"🐀",abilities:[{name:"Morsure Infectée",icon:"🦠",damage:.3,cooldown:4,description:"Peut empoisonner la cible"}],baseHP:100,health:0,maxHealth:0,level:0,armor:4},{id:"skeleton",name:"Squelette résucité",type:"undead",icon:"💀",baseHP:110,abilities:[{name:"Toucher de Givre",icon:"❄️",damage:1.4,cooldown:4,description:"Toucher glacial qui ralentit"}],health:0,maxHealth:0,level:0,armor:5},{id:"ghoul",name:"Goule affamée",type:"undead",icon:"🧟",baseHP:120,abilities:[{name:"Festin de Chair",icon:"🩸",damage:1.2,heal:20,cooldown:5,description:"Dévore et se soigne"}],health:0,maxHealth:0,level:0,armor:5.5},{id:"ghost",name:"Fantôme du Manoir",type:"undead",icon:"👻",baseHP:100,abilities:[{name:"Hurlement Effrayant",icon:"😱",damage:1,cooldown:4,description:"Effraie et affaiblit la cible"}],health:0,maxHealth:0,level:0,armor:6},{id:"gargoyle",name:"Gargouille Animée",type:"undead",icon:"🗿",baseHP:110,abilities:[{name:"Griffes de Pierre",icon:"🪨",damage:1,cooldown:3,description:"Attaque physique puissante"}],health:0,maxHealth:0,level:0,armor:7},{id:"fire-elemental",name:"Élémentaire de Feu",type:"elemental",icon:"🔥",baseHP:100,abilities:[{name:"Boule de Feu",icon:"💥",damage:1.2,cooldown:3,description:"Lance une boule de feu"}],health:0,maxHealth:0,level:0,armor:10},{id:"ice-elemental",name:"Élémentaire de Eau",type:"elemental",icon:"❄️",baseHP:100,abilities:[{name:"Tempête d'Eau",icon:"🌨️",damage:1.5,cooldown:3,description:"Congèle les ennemis"}],health:0,maxHealth:0,level:0,armor:10.5},{id:"earth-elemental",name:"Élémentaire de Terre",type:"elemental",icon:"🌱",baseHP:120,abilities:[{name:"Secousse Sismique",icon:"🌋",damage:2.5,cooldown:4,description:"Provoque une secousse qui étourdit"}],health:0,maxHealth:0,level:0,armor:12},{id:"air-elemental",name:"Élémentaire d'Air",type:"elemental",icon:"🌪️",baseHP:90,abilities:[{name:"Rafale",icon:"💨",damage:1.8,cooldown:3,description:"Attaque avec une puissante rafale de vent"}],health:0,maxHealth:0,level:0,armor:11},{id:"imp",name:"Diablotin",type:"demon",icon:"👿",baseHP:120,abilities:[{name:"Trait de Feu",icon:"🔥",damage:2,cooldown:3,description:"Tire un trait de feu"}],health:0,maxHealth:0,level:0,armor:15},{id:"felguard",name:"Gangregarde",type:"demon",icon:"😈",baseHP:150,abilities:[{name:"Coup Gangreneux",icon:"💚",damage:1.5,cooldown:4,description:"Frappe corrompue"}],health:0,maxHealth:0,level:0,armor:18},{id:"minor-demon",name:"Démon Mineur",type:"demon",icon:"👹",baseHP:110,abilities:[{name:"Griffes Ardentes",icon:"🔥",damage:.5,cooldown:3,description:"Attaque de feu rapide"}],health:0,maxHealth:0,level:0,armor:16},{id:"succubus",name:"Succube",type:"demon",icon:"👩‍🦰",baseHP:100,abilities:[{name:"Charme Fatal",icon:"💋",damage:.6,cooldown:4,description:"Peut charmer et affaiblir la cible"}],health:0,maxHealth:0,level:0,armor:17},{id:"giant",name:"Géant de Pierre",type:"giant",icon:"🗿",baseHP:175,abilities:[{name:"Écrasement",icon:"🪨",damage:.7,cooldown:4,description:"Écrase avec une force titanesque"}],health:0,maxHealth:0,level:0,armor:20},{id:"ice-giant",name:"Géant de Glace",type:"giant",icon:"🧊",baseHP:200,abilities:[{name:"Souffle Glacial",icon:"❄️",damage:.8,cooldown:4,description:"Rend la cible plus lente"}],health:0,maxHealth:0,level:0,armor:25},{id:"troll-brute",name:"Troll Massif",type:"giant",icon:"🧟‍♂️",baseHP:180,abilities:[{name:"Coup de Massue",icon:"🔨",damage:1.4,cooldown:3,description:"Frappe puissante avec une massue"}],health:0,maxHealth:0,level:0,armor:22.5},{id:"whelp",name:"Dragonnet",type:"dragon",icon:"🐉",baseHP:200,abilities:[{name:"Souffle de Flammes",icon:"🔥",damage:1.2,cooldown:4,description:"Souffle enflammé dévastateur"}],health:0,maxHealth:0,level:0,armor:30},{id:"dragon",name:"Dragon",type:"dragon",icon:"🐲",baseHP:300,abilities:[{name:"Souffle de Dragon",icon:"💨",damage:1,cooldown:3,description:"Souffle destructeur"},{name:"Rugissement",icon:"😤",damage:4500,cooldown:5,description:"Rugissement terrifiant"}],health:0,maxHealth:0,level:0,armor:35},{id:"ancient-dragon",name:"Dragon Ancien",type:"dragon",icon:"🐲",baseHP:400,abilities:[{name:"Cataclysme",icon:"💥",damage:1.2,cooldown:5,description:"Déchaîne un cataclysme"},{name:"Souffle Ancestral",icon:"🌪️",damage:1.8,cooldown:4,description:"Souffle millénaire"}],health:0,maxHealth:0,level:0,armor:40},{id:"wyvern",name:"Wyvern Sauvage",type:"dragon",icon:"🦅",baseHP:220,abilities:[{name:"Piqûre Venimeuse",icon:"🦟",damage:2,cooldown:4,description:"Peut empoisonner la cible"}],health:0,maxHealth:0,level:0,armor:45},{id:"drake",name:"Drake des Cimes",type:"dragon",icon:"🦎",baseHP:280,abilities:[{name:"Souffle Acide",icon:"🧪",damage:1.3,cooldown:3,description:"Souffle corrosif"}],health:0,maxHealth:0,level:0,armor:50},{id:"guardian-dragon",name:"Dragon Gardien",type:"dragon",icon:"🛡️",baseHP:500,abilities:[{name:"Barrière Draconique",icon:"🛡️",damage:1.5,cooldown:5,description:"Réduit fortement les dégâts subis"},{name:"Souffle de Givre",icon:"❄️",damage:2.5,cooldown:4,description:"Souffle glacé paralysant"}],health:0,maxHealth:0,level:0,armor:60}],X=e=>({minor:"poor",lesser:"common",normal:"common",greater:"uncommon",superior:"rare",ultimate:"epic"})[e],ye=[{id:"health-minor",name:"Potion de soins mineure",description:"Restaure 600 points de vie",type:"health",quality:"minor",icon:"🧪",restoreAmount:600,price:100,requiredLevel:1},{id:"health-lesser",name:"Potion de soins inférieure",description:"Restaure 300 points de vie",type:"health",quality:"lesser",icon:"🧪",restoreAmount:3e3,price:5e3,requiredLevel:5},{id:"health-normal",name:"Potion de soins",description:"Restaure 500 points de vie",type:"health",quality:"normal",icon:"🧪",restoreAmount:5e3,price:1e4,requiredLevel:10},{id:"health-greater",name:"Potion de soins supérieure",description:"Restaure 1200 points de vie",type:"health",quality:"greater",icon:"🧪",restoreAmount:12e3,price:5e4,requiredLevel:20},{id:"health-superior",name:"Potion de soins majeure",description:"Restaure 2000 points de vie",type:"health",quality:"superior",icon:"🧪",restoreAmount:2e4,price:1e5,requiredLevel:30},{id:"health-ultimate",name:"Élixir de vie ultime",description:"Restaure 50% de la vie maximale",type:"health",quality:"ultimate",icon:"⚗️",restoreAmount:0,restorePercent:50,price:5e5,requiredLevel:40},{id:"elixir-of-strength",name:"Élixir de force",description:"Augmente temporairement la force de 20% pendant 10 minutes",type:"effect",quality:"normal",icon:"💪",restoreAmount:0,restorePercent:20,price:1e4,requiredLevel:35},{id:"elixir-of-agility",name:"Élixir d'agilité",description:"Augmente temporairement l'agilité de 20% pendant 10 minutes",type:"effect",quality:"normal",icon:"🤸",restoreAmount:0,restorePercent:20,price:1e4,requiredLevel:35},{id:"elixir-of-intellect",name:"Élixir d'intelligence",description:"Augmente temporairement l'intelligence de 20% pendant 10 minutes",type:"effect",quality:"normal",icon:"🧠",restoreAmount:0,restorePercent:20,price:1e4,requiredLevel:35},{id:"elixir-of-luck",name:"Élixir de chance",description:"Augmente temporairement la chance de 20% pendant 10 minutes",type:"effect",quality:"normal",icon:"🍀",restoreAmount:0,restorePercent:20,price:0,requiredLevel:1},{id:"health-dev",name:"Élixir de vie du Dev",description:"Restaure 100% de la vie maximale",type:"health",quality:"ultimate",icon:"💎",restoreAmount:0,restorePercent:100,price:9999999,requiredLevel:0}],hi={jab:"ability_monk_jab","keg-smash":"ability_monk_kegsmash","rising-sun-kick":"ability_monk_risingsunkick","blackout-kick":"ability_monk_blackoutkick","fists-of-fury":"monk_ability_fistoffury","spinning-crane-kick":"ability_monk_cranekick_new","heroic-strike":"ability_rogue_ambush","mortal-strike":"ability_warrior_savageblow",whirlwind:"ability_whirlwind",recklessness:"ability_criticalstrike",execute:"inv_sword_48","crusader-strike":"spell_holy_crusaderstrike","holy-light":"spell_holy_holybolt","divine-storm":"ability_paladin_divinestorm","hammer-of-wrath":"ability_thunderbolt","divine-shield":"spell_holy_divineintervention","arcane-shot":"ability_impalingbolt","multi-shot":"ability_upgrademoonglaive","aimed-shot":"inv_spear_07","explosive-shot":"ability_hunter_explosiveshot","kill-shot":"ability_hunter_assassinate2",backstab:"ability_backstab","sinister-strike":"spell_shadow_ritualofsacrifice",eviscerate:"ability_rogue_eviscerate","kidney-shot":"ability_rogue_kidneyshot","shadow-dance":"ability_rogue_shadowdance",smite:"spell_holy_holysmite",heal:"spell_holy_heal","shadow-word-pain":"spell_shadow_shadowwordpain","mind-blast":"spell_shadow_unholyfrenzy","divine-hymn":"spell_holy_divinehymn","lightning-bolt":"spell_nature_lightning","earth-shock":"spell_nature_earthshock","lava-burst":"spell_shaman_lavaburst","chain-lightning":"spell_nature_chainlightning","elemental-mastery":"spell_nature_wispheal",fireball:"spell_fire_flamebolt",frostbolt:"spell_frost_frostbolt02","arcane-missiles":"spell_nature_starfall",pyroblast:"spell_fire_fireball02","arcane-power":"spell_nature_lightning","shadow-bolt":"spell_shadow_shadowbolt",immolate:"spell_fire_immolation","chaos-bolt":"ability_warlock_chaosbolt",soulfire:"spell_fire_fireball02","dark-soul":"spell_shadow_shadetruesight",wrath:"spell_nature_abolishmagic",moonfire:"spell_nature_starfall",starfire:"spell_arcane_starfire",starfall:"ability_druid_starfall",incarnation:"spell_druid_incarnation","death-strike":"spell_deathknight_butcher2",obliterate:"spell_deathknight_classicon","frost-strike":"spell_deathknight_empowerruneblade2","soul-reaper":"ability_deathknight_soulreaper",apocalypse:"artifactability_unholydeathknight_deathsembrace",attack:"inv_sword_04",magic:"inv_wand_02",defend:"ability_defend",flee:"ability_rogue_sprint","health-potion":"inv_potion_54","mana-potion":"inv_potion_76"},pi=()=>t.jsxs("svg",{width:"64",height:"64",viewBox:"0 0 64 64",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("rect",{x:"0",y:"0",width:"64",height:"64",rx:"12",fill:"#B6E2A1"}),t.jsx("ellipse",{cx:"32",cy:"54",rx:"22",ry:"7",fill:"#8DC07F"}),t.jsx("ellipse",{cx:"20",cy:"32",rx:"8",ry:"10",fill:"#4C9A2A",stroke:"#2E6B1A",strokeWidth:"2"}),t.jsx("rect",{x:"17",y:"38",width:"6",height:"12",rx:"2",fill:"#A67C52"}),t.jsx("ellipse",{cx:"44",cy:"28",rx:"6",ry:"8",fill:"#5CB85C",stroke:"#4C9A2A",strokeWidth:"1.5"}),t.jsx("rect",{x:"41",y:"34",width:"5",height:"8",rx:"1.5",fill:"#A67C52"}),t.jsx("ellipse",{cx:"12",cy:"40",rx:"4",ry:"6",fill:"#7CC47F"}),t.jsx("rect",{x:"10",y:"46",width:"3",height:"6",rx:"1",fill:"#A67C52"}),t.jsx("ellipse",{cx:"32",cy:"44",rx:"10",ry:"4",fill:"#7CC47F"}),t.jsx("ellipse",{cx:"28",cy:"50",rx:"5",ry:"2",fill:"#7CC47F"}),t.jsx("ellipse",{cx:"38",cy:"50",rx:"4",ry:"2",fill:"#7CC47F"}),t.jsx("ellipse",{cx:"24",cy:"52",rx:"1.2",ry:"0.7",fill:"#FFB347"}),t.jsx("ellipse",{cx:"26",cy:"53",rx:"0.7",ry:"0.4",fill:"#FFD700"}),t.jsx("ellipse",{cx:"40",cy:"52",rx:"1",ry:"0.5",fill:"#FFD700"}),t.jsx("ellipse",{cx:"42",cy:"53",rx:"0.7",ry:"0.4",fill:"#FFB347"}),t.jsx("ellipse",{cx:"24",cy:"56",rx:"2",ry:"1",fill:"#D9D9D9"}),t.jsx("ellipse",{cx:"40",cy:"57",rx:"1.5",ry:"0.8",fill:"#B0B0B0"}),t.jsx("ellipse",{cx:"32",cy:"20",rx:"10",ry:"3",fill:"#FFD700",opacity:"0.2"})]}),fi=()=>t.jsxs("svg",{width:"64",height:"64",viewBox:"0 0 64 64",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("rect",{x:"0",y:"0",width:"64",height:"64",rx:"12",fill:"#E2D6A1"}),t.jsx("ellipse",{cx:"32",cy:"54",rx:"22",ry:"7",fill:"#C0B77F"}),t.jsx("ellipse",{cx:"32",cy:"38",rx:"12",ry:"8",fill:"#B0B0B0",stroke:"#8C7AA6",strokeWidth:"2"}),t.jsx("path",{d:"M32 30 Q34 34 32 38 Q30 42 32 46",stroke:"#8C7AA6",strokeWidth:"1.5"}),t.jsx("ellipse",{cx:"48",cy:"28",rx:"7",ry:"10",fill:"#4C9A2A",stroke:"#A67C52",strokeWidth:"2"}),t.jsx("rect",{x:"45",y:"38",width:"6",height:"12",rx:"2",fill:"#A67C52"}),t.jsx("ellipse",{cx:"24",cy:"50",rx:"2",ry:"1",fill:"#FFB347"}),t.jsx("ellipse",{cx:"22",cy:"52",rx:"1",ry:"0.5",fill:"#FFD700"}),t.jsx("ellipse",{cx:"20",cy:"48",rx:"6",ry:"2",fill:"#7CC47F"}),t.jsx("ellipse",{cx:"40",cy:"57",rx:"1.5",ry:"0.8",fill:"#B0B0B0"}),t.jsx("ellipse",{cx:"32",cy:"24",rx:"8",ry:"3",fill:"#BCA77B",opacity:"0.3"})]}),ui=()=>t.jsxs("svg",{width:"64",height:"64",viewBox:"0 0 64 64",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("rect",{x:"0",y:"0",width:"64",height:"64",rx:"12",fill:"#C1B6E2"}),t.jsx("ellipse",{cx:"32",cy:"54",rx:"22",ry:"7",fill:"#A7A1BC"}),t.jsx("rect",{x:"18",y:"28",width:"28",height:"18",rx:"3",fill:"#6B4F7A",stroke:"#4F3A6B",strokeWidth:"2"}),t.jsx("rect",{x:"26",y:"36",width:"12",height:"10",rx:"2",fill:"#8C7AA6"}),t.jsx("rect",{x:"30",y:"44",width:"4",height:"6",rx:"1.5",fill:"#FFD700"}),t.jsx("polygon",{points:"18,28 32,14 46,28",fill:"#4F3A6B",stroke:"#6B4F7A",strokeWidth:"2"}),t.jsx("rect",{x:"22",y:"32",width:"4",height:"6",rx:"1",fill:"#E2E2E2"}),t.jsx("rect",{x:"38",y:"32",width:"4",height:"6",rx:"1",fill:"#E2E2E2"}),t.jsx("ellipse",{cx:"12",cy:"38",rx:"3",ry:"6",fill:"#4F3A6B"}),t.jsx("ellipse",{cx:"52",cy:"38",rx:"3",ry:"6",fill:"#4F3A6B"}),t.jsx("ellipse",{cx:"32",cy:"50",rx:"10",ry:"3",fill:"#7CC47F"}),t.jsx("ellipse",{cx:"24",cy:"56",rx:"2",ry:"1",fill:"#D9D9D9"}),t.jsx("ellipse",{cx:"40",cy:"57",rx:"1.5",ry:"0.8",fill:"#B0B0B0"}),t.jsx("ellipse",{cx:"32",cy:"24",rx:"6",ry:"2",fill:"#B6E2F2",opacity:"0.5"})]}),gi=()=>t.jsxs("svg",{width:"64",height:"64",viewBox:"0 0 64 64",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("rect",{x:"0",y:"0",width:"64",height:"64",rx:"12",fill:"#E2A1A1"}),t.jsx("ellipse",{cx:"32",cy:"54",rx:"22",ry:"7",fill:"#C07F7F"}),t.jsx("rect",{x:"20",y:"30",width:"24",height:"14",rx:"2",fill:"#7A2A2A",stroke:"#A63A2B",strokeWidth:"2"}),t.jsx("rect",{x:"16",y:"34",width:"6",height:"10",rx:"1",fill:"#A63A2B"}),t.jsx("rect",{x:"42",y:"34",width:"6",height:"10",rx:"1",fill:"#A63A2B"}),t.jsx("rect",{x:"30",y:"38",width:"4",height:"6",rx:"1",fill:"#E2E2E2"}),t.jsx("ellipse",{cx:"19",cy:"34",rx:"2",ry:"1",fill:"#FFB347"}),t.jsx("ellipse",{cx:"45",cy:"34",rx:"2",ry:"1",fill:"#FFB347"}),t.jsx("ellipse",{cx:"32",cy:"50",rx:"1.2",ry:"0.8",fill:"#E2E2E2"}),t.jsx("ellipse",{cx:"34",cy:"50",rx:"1",ry:"0.6",fill:"#E2E2E2"}),t.jsx("path",{d:"M24 38 Q26 40 28 38",stroke:"#A63A2B",strokeWidth:"1"}),t.jsx("path",{d:"M40 38 Q42 40 44 38",stroke:"#A63A2B",strokeWidth:"1"}),t.jsx("ellipse",{cx:"32",cy:"24",rx:"6",ry:"2",fill:"#7A2A2A",opacity:"0.3"})]}),mi=()=>t.jsxs("svg",{width:"64",height:"64",viewBox:"0 0 64 64",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("rect",{x:"0",y:"0",width:"64",height:"64",rx:"12",fill:"#E2C6A1"}),t.jsx("ellipse",{cx:"32",cy:"54",rx:"22",ry:"7",fill:"#BCA77B"}),t.jsx("polygon",{points:"20,40 32,20 44,40",fill:"#A63A2B",stroke:"#7C4A2A",strokeWidth:"2"}),t.jsx("rect",{x:"27",y:"40",width:"10",height:"10",rx:"2",fill:"#7C4A2A"}),t.jsx("line",{x1:"32",y1:"20",x2:"32",y2:"40",stroke:"#E2C6A1",strokeWidth:"1.5"}),t.jsx("polygon",{points:"12,44 18,32 24,44",fill:"#BCA77B",stroke:"#A67C52",strokeWidth:"1"}),t.jsx("ellipse",{cx:"32",cy:"50",rx:"4",ry:"2",fill:"#FFB347"}),t.jsx("rect",{x:"30",y:"52",width:"4",height:"2",rx:"1",fill:"#A67C52"}),t.jsx("ellipse",{cx:"50",cy:"32",rx:"6",ry:"8",fill:"#4C5A2A"}),t.jsx("rect",{x:"48",y:"38",width:"4",height:"8",rx:"1.5",fill:"#A67C52"}),t.jsx("ellipse",{cx:"16",cy:"48",rx:"5",ry:"2",fill:"#7CC47F"}),t.jsx("ellipse",{cx:"40",cy:"57",rx:"1.5",ry:"0.8",fill:"#B0B0B0"}),t.jsx("ellipse",{cx:"38",cy:"46",rx:"2",ry:"1.2",fill:"#FFD700"}),t.jsx("ellipse",{cx:"36",cy:"47",rx:"1",ry:"0.6",fill:"#A67C52"})]}),yi=()=>t.jsxs("svg",{width:"64",height:"64",viewBox:"0 0 64 64",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("rect",{x:"0",y:"0",width:"64",height:"64",rx:"12",fill:"#A1D7E2"}),t.jsx("ellipse",{cx:"32",cy:"54",rx:"22",ry:"7",fill:"#7FC0C4"}),t.jsx("ellipse",{cx:"32",cy:"38",rx:"10",ry:"6",fill:"#E2E2E2",stroke:"#B0B0B0",strokeWidth:"2"}),t.jsx("path",{d:"M28 38 Q29 34 32 36 Q33 34 36 38",fill:"#FFB347",stroke:"#E2A147",strokeWidth:"1"}),t.jsx("ellipse",{cx:"40",cy:"32",rx:"2",ry:"4",fill:"#47B3FF",stroke:"#A1D7E2",strokeWidth:"1"}),t.jsx("path",{d:"M20 30 Q24 28 28 30",stroke:"#B6E2F2",strokeWidth:"2",fill:"none"}),t.jsx("ellipse",{cx:"24",cy:"48",rx:"5",ry:"2",fill:"#7CC47F"}),t.jsx("ellipse",{cx:"26",cy:"50",rx:"1",ry:"0.5",fill:"#FFD700"}),t.jsx("ellipse",{cx:"22",cy:"50",rx:"1",ry:"0.5",fill:"#FFB347"}),t.jsx("ellipse",{cx:"40",cy:"57",rx:"1.5",ry:"0.8",fill:"#B0B0B0"}),t.jsx("ellipse",{cx:"32",cy:"24",rx:"6",ry:"2",fill:"#FFD700",opacity:"0.3"})]}),je=[{id:"starting_zone",name:"Foret du Départ",description:"Le point de départ de toutes les aventures, où les héros commencent leur voyage.",levelRange:[1,5],monstersId:["wolf","boar","fox","owl"],componentIcon:pi},{id:"bandit_camp",name:"Camp de Voleurs",description:"Un campement caché dans la forêt, habité par des bandits et des Murlocs.",levelRange:[5,10],monstersId:["bandit","murloc","thief","giant-rat"],componentIcon:mi},{id:"occult_mansion",name:"Manoir Occulte",description:"Un manoir mystérieux rempli de secrets et de dangers.",levelRange:[10,15],monstersId:["skeleton","ghoul","ghost","gargoyle"],componentIcon:ui},{id:"elemental_plains",name:"Plain Elementaire",description:"Des plaines vastes où les éléments prennent vie sous des formes variées.",levelRange:[15,20],monstersId:["fire-elemental","ice-elemental","earth-elemental","air-elemental"],componentIcon:yi},{id:"demon_stronghold",name:"Forteresse Démoniaque",description:"Le repaire des démons, un endroit sombre et périlleux où seuls les plus braves osent s'aventurer.",levelRange:[20,25],monstersId:["imp","felguard","minor-demon","succubus"],componentIcon:gi},{id:"giants_land",name:"La Terre des Géants",description:"Un territoire vaste et imposant, habité par des créatures gigantesques.",levelRange:[25,35],monstersId:["giant","ice-giant","troll-brute"],componentIcon:fi}];function R(e){const i=hi[e];return i?`https://wow.zamimg.com/images/wow/icons/large/${i}.jpg`:(console.warn(`Icon not found for key: ${e}`),"")}const Y={attack:R("attack"),magic:R("magic"),defend:R("defend"),flee:R("flee")},ji=(e,i)=>(ei[e]||[]).filter(r=>r.unlockLevel<=i),ki=e=>R(e.id);function ke(e){const i={};return e.forEach(s=>{i[s.item.id]={...s,item:{id:s.item.id,name:s.item.name,slot:s.item.slot,quality:s.item.quality,level:s.item.level,stats:s.item.stats,icon:s.item.icon,price:s.item.price}}}),Object.values(i)}function wi(){if(typeof crypto<"u"&&crypto.randomUUID)return crypto.randomUUID();const e=[...crypto.getRandomValues(new Uint8Array(16))].map(i=>i.toString(16).padStart(2,"0"));return e[6]=(parseInt(e[6],16)&15|64).toString(16),e[8]=(parseInt(e[8],16)&63|128).toString(16),`${e.slice(0,4).join("")}${e.slice(4,6).join("")}-${e.slice(6,8).join("")}-${e.slice(8,10).join("")}-${e.slice(10,12).join("")}-${e.slice(12,16).join("")}`}const bi=(e,i)=>{const s=G[i.classe.id]||G.warrior,r=i.buffs?.reduce((n,a)=>a.effect==="luck"?n+a.amount/100:n,0)||0;let l=Math.random();if(l+=r>=1?(r-1)*.08:0,!(Math.random()>.3+r))return vi(e,l,s,r)},vi=(e,i,s,r)=>{const l=$i(e,i),n=Bi(),a=Fi(n,s,e,l,r),x=Li(n,l,s),d=Mi(e,l);return{id:`${n}-${l}-${Date.now()}-${wi()}`,name:x,slot:n,quality:l,level:e,stats:a,icon:ri[n],price:d}},$i=(e,i)=>e<10?i>=0&&i<.3?"poor":i>=.3&&i<.6?"common":i>=.6&&i<.85?"uncommon":i>=.85&&i<.99?"rare":"legendary":e<20?i>=0&&i<.15?"poor":i>=.15&&i<.4?"common":i>=.4&&i<.75?"uncommon":i>=.75&&i<.95?"rare":i>=.95&&i<.98?"epic":"legendary":e<30?i>=0&&i<.1?"poor":i>=.1&&i<.3?"common":i>=.3&&i<.65?"uncommon":i>=.65&&i<.9?"rare":i>=.9&&i<.97?"epic":"legendary":e<40?i>=0&&i<.07?"poor":i>=0&&i<.25?"common":i>=0&&i<.6?"uncommon":i>=0&&i<.7?"rare":i>=0&&i<.96?"epic":"legendary":e<50?i>=0&&i<.05?"poor":i>=.05&&i<.2?"common":i>=.2&&i<.5?"uncommon":i>=.5&&i<.65?"rare":i>=.65&&i<.85?"epic":(i>=.85&&i<.95,"legendary"):i>=0&&i<.01?"poor":i>=.01&&i<.1?"common":i>=.1&&i<.4?"uncommon":i>=.4&&i<.6?"rare":i>=.6&&i<.9?"epic":"legendary",Bi=()=>{const e=["weapon","head","chest","legs","boots","jewelry"];return e[Math.floor(Math.random()*e.length)]},Fi=(e,i,s,r,l)=>{const n={},a=Math.floor(s*.8*ii[r]);if(e==="weapon")n[i.primaryStat]=a,n.attackPower=a*2,Math.random()<.25&&(n.critChance=Math.floor(a*(.1+Math.random()*.2)));else if(e==="jewelry"){i?n[i.primaryStat]=a:n.strength=a;const x=["attackPower","critChance","armor"],d=x[Math.floor(Math.random()*x.length)];d==="attackPower"&&i&&i.primaryStat!=="intellect"?n.attackPower=Math.floor(a*1.5):d==="critChance"?n.critChance=Math.floor(a*(.1+Math.random()*.2)):d==="armor"&&(n.armor=Math.floor(a*1.2))}else{n.armor=a*2,i?n[i.primaryStat]=Math.floor(a*.7):n.stamina=Math.floor(a*.7);let x=.15;l>1&&(x+=(l-1)*.2),Math.random()>x&&(n.critChance=Math.floor(a*(.08+Math.random()*.15)))}return Object.keys(n).forEach(x=>{typeof n[x]=="number"&&n[x]<1&&(n[x]=1)}),n},Li=(e,i,s)=>{const r=ni[e][i];let l="";if(e==="weapon"&&s&&s.weaponType){const n=s.weaponType.filter(x=>V[x]&&V[x][i]),a=n[Math.floor(Math.random()*n.length)];l=V[a][i][Math.floor(Math.random()*V[a][i].length)]}else e==="jewelry"?l=`${r[Math.floor(Math.random()*r.length)]}`:l=`${r[Math.floor(Math.random()*r.length)]} ${si[s?s.armorType:"cloth"]}`;return l},Mi=(e,i)=>Math.floor(e*li[i]*100),Le=e=>{const i={};return!e||typeof e!="object"||Object.values(e).forEach(s=>{s&&s.stats&&Object.entries(s.stats).forEach(([r,l])=>{i[r]?i[r]+=l:i[r]=l})}),i};function re(e){return Math.round(200*Math.pow(e,1.5))}function Wi(e,i){const s=100*e,r=e-i;if(r<=-5){const l=Math.max(.2,1+r*.1);return Math.round(s*l)}if(r>=5){const l=Math.min(3,1+r*.2);return Math.round(s*l)}return s}function Ai(e){return e.classe.primaryStat?e.stats[e.classe.primaryStat]:0}function ae(e){const i=(20+e.level*5)*10,s=i*(Ai(e)*5e-4);return Math.round(i+s)}function H(e,i){const s=1+(e-1)*.8529411764705882;return Math.round((i+e*20)*8*s)}function Qe(e,i){const s=3+(e-1)*.5588235294117647;return Math.round((i+e*20)*8*s)}function $(e,i){return Math.round(e*Math.pow(1.18,i-1))}const Di=(e,i)=>{const s=xi.filter(l=>i.monstersId.includes(l.id)),r=s[Math.floor(Math.random()*s.length)];return{id:`${r.id}-${Date.now()}`,name:`${r.name}`,type:r.type,icon:r.icon,level:e,baseHP:r.baseHP,health:Qe(e,r.baseHP),maxHealth:Qe(e,r.baseHP),abilities:r.abilities||[],armor:r.armor}};function Ei(e){return+(1-(e-1)*(.5/34)).toFixed(3)*1e3}function Si(e){return(10+e*2)*10}function Qi(e,i){const s=Si(e);return Math.round(s*(1+i/100))}function qi(e){return(20+e*5)*10}function at(e,i){const s=qi(e);return Math.round(s*(1+i/100))}const qe=e=>{const i=at(e.player.level,e.player.stats.attackPower),s=1+Math.min(1,e.player.stats.critChance/100),r=Math.min(1,e.monster.armor/25e3),l=Math.floor(Math.max(1,i*s*(1-r))),n=Math.max(0,e.monster.health-l),a=n===0,x={id:`${Date.now()}-player-attack`,message:`⚔️ Vous attaquez et infligez ${l} dégâts.`,type:"damage",timestamp:Date.now()};return{...e,monster:{...e.monster,health:n},status:a?"victory":"ongoing",battleLog:[...e.battleLog,x]}},Pi=e=>{const i={id:`${Date.now()}-player-defend`,message:"🛡️ Vous vous mettez en position défensive. Les dégâts du prochain tour seront réduits de 50%.",type:"info",timestamp:Date.now()};return{...e,playerDefending:!0,battleLog:[...e.battleLog,i]}},Ii=e=>{if(Math.random()<.5){const r={id:`${Date.now()}-flee-success`,message:"🏃 Vous avez réussi à fuir le combat !",type:"info",timestamp:Date.now()};return{...e,status:"fled",battleLog:[...e.battleLog,r]}}else{const r={id:`${Date.now()}-flee-fail`,message:"❌ Vous n'avez pas réussi à fuir ! Le monstre vous rattrape.",type:"info",timestamp:Date.now()};return{...e,battleLog:[...e.battleLog,r]}}},Pe=(e,i)=>{let s=at(e.player.level,e.player.stats.attackPower);const r=1+Math.min(1,e.player.stats.critChance/100),l=Math.min(1,e.monster.armor/25e3);s=Math.max(1,s*r*(1-l)),s=Math.floor(s+s*i.damage);const n=Math.max(0,e.monster.health-s),a=n===0,x={id:`${Date.now()}-player-attack`,message:`${i.icon} ${i.name} inflige ${s} dégâts !`,type:"damage",timestamp:Date.now()};return{...e,monster:{...e.monster,health:n},status:a?"victory":"ongoing",battleLog:[...e.battleLog,x]}},Ti=(e,i)=>({experience:Wi(e.level,i.level),gold:Hi(e.level),loot:bi(e.level,i)}),Ci=e=>{const i=e.monster.abilities.length>0&&Math.random()<.3;let s=Qi(e.monster.level,1);const r=Math.min(1,e.player.stats.armor/25e3),l={id:`${Date.now()}-monster-ability`,message:"",type:"damage",timestamp:Date.now()};if(i){const d=e.monster.abilities[Math.floor(Math.random()*e.monster.abilities.length)];d&&(s+=s*d.damage),l.message=`🔴 ${e.monster.name} utilise ${d.name} et inflige `}else l.message=`🔴 ${e.monster.name} attaque et inflige `;s=Math.floor(Math.max(1,s*(1-r))),l.message+=`${s} dégâts.`;const a=Math.max(0,e.player.stats.health-s)===0,x=[...e.battleLog,l];return a&&x.push({id:`${Date.now()}-defeat`,message:`💀 Vous avez été vaincu par ${e.monster.name}...`,type:"defeat",timestamp:Date.now()}),{...e,player:{...e.player,stats:{...e.player.stats,health:Math.max(0,e.player.stats.health-s)}},status:a?"defeat":"ongoing",turnCount:e.turnCount+1,battleLog:[...e.battleLog,l]}};function Hi(e){const r=10+(e-1)*293.8235294117647,l=r*.1,n=r+(Math.random()*2-1)*l;return Math.round(n)}function _i(e){if(!e.buffs)return[];const i=Date.now();return e.buffs.filter(s=>s.expiresAt>i)}function zi(e){return e.toString().normalize("NFD").replace(new RegExp("\\p{Diacritic}","gu"),"").toLowerCase().trim().replace(/\s+/g,"-").replace(/[^a-z0-9-]/g,"").replace(/--+/g,"-")}function le(e){return e>=1e9?(e/1e9).toFixed(1).replace(/\.0$/,"")+"B":e>=1e6?(e/1e6).toFixed(1).replace(/\.0$/,"")+"M":e>=1e3?(e/1e3).toFixed(1).replace(/\.0$/,"")+"K":e.toString()}const Ri=(e,i)=>e?e.map(s=>{let r=0;return r+=s.level*10,r+=s.gold/1e5,r+=s.achievements?s.achievements.length*5:0,r+=s.defeatedMonsters?s.defeatedMonsters/100:0,s.score=Math.floor(r),s}).sort((s,r)=>(r[i]||0)-(s[i]||0)):[],Gi=(e,i)=>{let s=ye.filter(r=>r.requiredLevel<=e);return i&&(s=s.filter(r=>r.type===i)),ne(s,["type","requiredLevel"],["desc","desc"])},Zi=(e,i,s=1)=>e.potions.find(l=>l.potionId===i)?{...e,potions:e.potions.map(l=>l.potionId===i?{...l,quantity:l.quantity+s}:l)}:{...e,potions:[...e.potions,{potionId:i,quantity:s}]},Ni=(e,i)=>{const s=e.potions.find(l=>l.potionId===i);return!s||s.quantity<=0?{inventory:e,success:!1}:{inventory:{potions:e.potions.map(l=>l.potionId===i?{...l,quantity:l.quantity-1}:l).filter(l=>l.quantity>0),equipments:e.equipments,bags:e.bags},success:!0}},ct=h.createContext(void 0);function Ui({children:e}){const[i,s]=h.useState(null),r=Je(),l=et(),n=(a,x,d)=>{x>35&&(x=35);const f={player:a,monster:Di(x,d),turnCount:0,playerDefending:!1,monsterDefending:!1,battleLog:[],status:"ongoing",zone:d};s(f)};return h.useEffect(()=>{i&&r.pathname!=="/battle"&&l("/battle"),!i&&r.pathname==="/battle"&&l("/")},[i,r,l]),t.jsx(ct.Provider,{value:{battle:i,setBattle:s,createNewBattle:n},children:e})}const ce=()=>{const e=h.useContext(ct);if(!e)throw new Error("useBattle doit être utilisé dans un BattleProvider");return e},Oi=async e=>lt(v.characters,"userId",e),Vi=async e=>$e(v.characters,e),dt=h.createContext(void 0),Xi=({children:e})=>{const{user:i}=Fe(),[s,r]=h.useState(null),[l,n]=h.useState(!0),a=h.useCallback(async c=>{try{n(!0);const p=await Oi(c.uid);p.length>0?r(p[0]):r(null)}catch(p){console.error("Erreur lors du chargement du personnage:",p),r(null)}finally{n(!1)}},[]),x=h.useCallback(async(c,p,u,g)=>{if(!i)throw new Error("Utilisateur non connecté");if(!i.displayName)throw new Error("L'utilisateur doit avoir un nom avant de créer un personnage");try{n(!0);const m={userId:i.uid,name:i.displayName,faction:c,race:u,classe:g,gender:p,level:1,gold:10,score:0,isHardcore:!1,stats:{experience:0,experienceToNextLevel:re(1),health:H(1,g.baseHP),maxHealth:H(1,g.baseHP),strength:$(u.baseStats.strength,1),agility:$(u.baseStats.agility,1),intellect:$(u.baseStats.intellect,1),stamina:$(u.baseStats.stamina,1),attackPower:0,armor:0,critChance:0,primaryStat:g.primaryStat},achievements:[],defeatedMonsters:0,inventory:{potions:[],bags:[],equipments:{}},buffs:[],chatChannel:[]};m.stats.attackPower=ae(m),await Vi(m),await a(i)}catch(m){throw console.error("Erreur lors de la création du personnage:",m),m}finally{n(!1)}},[i,a]),d=h.useCallback(async c=>{if((!s||!s.id)&&!c.id)throw new Error("Aucun personnage à mettre à jour");try{const p=c.id??s?.id;if(!p)throw new Error("Impossible de trouver l'ID du personnage à mettre à jour");await C(v.characters,p,{...c}),r(c)}catch(p){throw console.error("Erreur lors de la mise à jour du personnage:",p),p}},[s]);h.useEffect(()=>{i?a(i):(r(null),n(!1))},[i,a]),h.useEffect(()=>{if(!s?.id)return;const c=nt(v.characters,s.id,p=>{p&&r(p)});return()=>c()},[s?.id]);const f={character:s,loading:l,hasCharacter:s!==null&&s?.id!==void 0,createNewCharacter:x,updateCharacter:d};return t.jsx(dt.Provider,{value:f,children:e})},w=()=>{const e=h.useContext(dt);if(!e)throw new Error("useCharacter must be used within a CharacterProvider");return e},Yi=async e=>(await lt(v.messages,"channel",e)).sort((s,r)=>r.timestamp-s.timestamp).slice(0,100).reverse(),Ki=async(e,i,s)=>$e(v.messages,{who:e,message:i,channel:s,timestamp:Date.now()}),Ji=async()=>{const e=await Be(v.characters),i=tt(e.map(r=>(r.status=typeof r.updatedAt=="number"&&r.updatedAt+60*1e3*15>Date.now()?"online":"offline",r)),r=>r.status||"offline");return i.online=ne(i.online||[],["name"],["asc"]),i.offline=ne(i.offline||[],["name"],["asc"]),[...i.online,...i.offline].filter((r,l,n)=>l===n.findIndex(a=>a.userId===r.userId))},es=(e,i)=>{const s=[e.name.toLowerCase(),i.name.toLowerCase()].sort();return zi(`mp_${s.join("_")}`)},ts=async(e,i)=>{const s=es(e,i);e.chatChannel||(e.chatChannel=[]),i.chatChannel||(i.chatChannel=[]),e.chatChannel.find(r=>r.slug===s)||(e.chatChannel.push({slug:s,name:i.name}),await C(v.characters,e.id,{chatChannel:e.chatChannel})),i.chatChannel.find(r=>r.slug===s)||(i.chatChannel.push({slug:s,name:e.name}),await C(v.characters,i.id,{chatChannel:i.chatChannel}))},is=async(e,i)=>{const s=e.chatChannel.filter(r=>r.slug!==i);await C(v.characters,e.id,{chatChannel:s})},ss=h.createContext(void 0),rs=o.div`
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
`,ls=o.div`
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
`,ns=o.div`
    display: flex;
    flex-direction: row;
    background-color: rgba(0, 0, 0, 0.4);
    gap: ${({theme:e})=>e.spacing.md};
    padding: ${({theme:e})=>e.spacing.xs} ${({theme:e})=>e.spacing.sm};
    height: 30px;
    `,os=o.div`
    color: ${({theme:e,selected:i,$type:s})=>{switch(i){case!0:return e.colors.primary.gold;default:return s!=="general"?e.colors.channels.wisp:e.colors.text.secondary}}};
    font-size: ${({theme:e})=>e.fontSizes.base};
    font-weight: ${({theme:e})=>e.fontWeights.bold};
    cursor: pointer;
    display: flex;
    align-items: center;
    `,as=o.div`
    flex: 1;
    // background: red;
    padding: 0;
    overflow-y: auto;
    height: calc(100% - 60px);
    `,cs=o.div`
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
    `,ds=o.span`
    font-weight: ${({theme:e})=>e.fontWeights.semibold};
    `,xs=o.input`
    padding: ${({theme:e})=>e.spacing.sm};
    border: none;
    border-radius: ${({theme:e})=>e.borderRadius.sm};
    background-color: rgba(0, 0, 0, 0.4);
    color: ${({theme:e})=>e.colors.neutral.white};
    font-size: ${({theme:e})=>e.fontSizes.base};
    margin: 0;
    width: 100%;
    height: 30px;
`;function hs({children:e}){const[i,s]=h.useState(!1),[r,l]=h.useState("general"),{character:n}=w(),[a,x]=h.useState([]),d=[{slug:"general",name:"Général"},...n?.chatChannel||[]],f=h.useCallback(async()=>{const m=await Yi(r);x(m.map(j=>({who:j.who,message:j.message,timestamp:j.timestamp??Date.now()})))},[r]),c=()=>{s(!0)},p=()=>{s(!1)},u=m=>{m.value&&n&&(Ki(n.name,m.value,r),m.value="")};h.useEffect(()=>{f()},[f]),h.useEffect(()=>{oe("messages",async()=>{await f()})},[f]);const g=bt.useRef(null);return h.useEffect(()=>{g.current&&(g.current.scrollTop=g.current.scrollHeight)},[a]),t.jsxs(ss.Provider,{value:{showChat:c,hideChat:p},children:[t.jsxs(rs,{$visible:i,children:[t.jsx(ls,{$visible:i,onClick:()=>s(!i),children:i?"❌":"💬"}),i&&t.jsxs(t.Fragment,{children:[t.jsx(ns,{children:d.map(m=>t.jsxs(os,{selected:r===m.slug,onClick:()=>l(m.slug),$type:m.slug,children:[m.name,m.slug!=="general"&&t.jsx("span",{style:{marginLeft:"4px",cursor:"pointer",fontSize:"12px"},onClick:j=>{if(j.stopPropagation(),!n)return;const y=m.slug;is(n,y),r===y&&l("general")},children:"❌"})]},m.slug))}),t.jsx(as,{ref:g,children:a.map((m,j)=>t.jsxs(cs,{$type:r,children:[t.jsxs(ds,{children:["[",m.who,"]:"]})," ",m.message]},j))}),t.jsx(xs,{onKeyDown:m=>{m.key==="Enter"&&u(m.currentTarget)}})]})]}),e]})}const ps=(e,i)=>(console.log("Creating a new dungeon",e),$e(v.dungeons,{...e,who:[{id:i.id,name:i.name,classe:i.classe,level:i.level,ready:!1,position:{x:0,y:0}}],status:"waiting"})),fs=async e=>{if(console.log("Updating dungeon",e),!e.docId)throw new Error("Dungeon docId is required for update");return C(v.dungeons,e.docId,{...e})},Ie=o.div`
  margin-top: ${({theme:e})=>e.spacing.xl};
  max-width: 1200px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({theme:e})=>e.spacing.md};
  height: 80vh;
`,de=o.h1`
  color: ${({theme:e})=>e.colors.primary.gold};
  font-size: ${({theme:e})=>e.fontSizes["3xl"]};
  text-shadow: ${({theme:e})=>e.shadows.glow.gold};
  margin-bottom: 0;
`,Z=o.div`
  color: ${({theme:e})=>e.colors.text.secondary};
  font-size: ${({theme:e})=>e.fontSizes.base};
  line-height: 1.6;
  text-align: center;
`;o.section`
  padding: ${({theme:e})=>e.spacing["3xl"]} 0;
`;const us=o.div`
  display: grid;
  grid-template-columns: repeat(${({$columns:e=3})=>e}, 1fr);
  gap: ${({$gap:e,theme:i})=>e||i.spacing.lg};

  @media (max-width: ${({theme:e})=>e.breakpoints.lg}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${({theme:e})=>e.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`,k=o.div`
  display: flex;
  flex-direction: ${({$direction:e="row"})=>e};
  align-items: ${({$align:e="center"})=>e};
  justify-content: ${({$justify:e="flex-start"})=>e};
  gap: ${({$gap:e,theme:i})=>e||i.spacing.md};
  flex-wrap: ${({$wrap:e})=>e?"wrap":"nowrap"};
  width: ${({$width:e="auto"})=>e};
`,B=o.div`
  width: 100%;
  background: ${({variant:e})=>{switch(e){case"frost":return"linear-gradient(135deg, rgba(74, 144, 226, 0.2), rgba(30, 58, 95, 0.9))";case"fire":return"linear-gradient(135deg, rgba(239, 68, 68, 0.2), rgba(92, 0, 0, 0.9))";case"arcane":return"linear-gradient(135deg, rgba(139, 92, 246, 0.2), rgba(30, 30, 70, 0.9))";default:return"linear-gradient(135deg, rgba(30, 58, 95, 0.8), rgba(26, 31, 46, 0.9))"}}};
  border: ${({bordered:e,theme:i})=>e?`${i.borders.medium} solid ${i.colors.primary.gold}`:"none"};
  border-radius: ${({theme:e})=>e.borderRadius.lg};
  padding: ${({theme:e})=>e.spacing.md};
  box-shadow: ${({theme:e})=>e.shadows.xl};
  backdrop-filter: blur(10px);
`,Me=o.div`
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
`;const We=o.div`
  color: ${({theme:e})=>e.colors.text.secondary};
  font-style: italic;
  font-size: ${({theme:e})=>e.fontSizes.sm};
  text-align: center;
`,_=o.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${({theme:e})=>e.spacing.sm};
  max-width: 520px;
`,gs=o.input`
  width: 100%;
  padding: ${({theme:e})=>e.spacing.md};
  background: rgba(0, 0, 0, 0.4);
  border: ${({theme:e})=>e.borders.medium} solid
    ${({theme:e})=>e.colors.winter.darkIce};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  color: ${({theme:e})=>e.colors.neutral.white};
  font-size: ${({theme:e})=>e.fontSizes.base};
  font-family: ${({theme:e})=>e.fonts.body};

  &:focus {
    outline: none;
    border-color: ${({theme:e})=>e.colors.primary.gold};
    box-shadow: 0 0 12px ${({theme:e})=>e.colors.primary.gold}40;
  }
`,I=o.label`
  display: block;
  color: ${({theme:e})=>e.colors.winter.iceBlue};
  font-weight: ${({theme:e})=>e.fontWeights.medium};
  font-size: ${({theme:e})=>e.fontSizes.base};
`,Te=o.button`
  padding: ${({theme:e})=>e.spacing.md} ${({theme:e})=>e.spacing.lg};
  font-size: ${({theme:e})=>e.fontSizes.base};
  font-family: ${({theme:e})=>e.fonts.body};
  font-weight: ${({theme:e})=>e.fontWeights.bold};
  border: none;
  border-radius: ${({theme:e})=>e.borderRadius.md};
  cursor: pointer;
  transition: background 0.3s, box-shadow 0.3s;
  width: fit-content;
  ${({variant:e,theme:i})=>{switch(e){default:case"primary":return`
                    background: linear-gradient(135deg, ${i.colors.primary.gold}, ${i.colors.primary.bronze});
                    color: ${i.colors.neutral.black};
                    box-shadow: 0 0 12px ${i.colors.primary.gold}40;

                    &:hover {
                        box-shadow: 0 0 20px ${i.colors.primary.gold}60;
                    }
                `;case"secondary":return`
                    background: ${i.colors.winter.iceBlue};
                    color: ${i.colors.neutral.black};

                    &:hover {
                        background: ${i.colors.winter.frostBlue};
                    }
                `;case"danger":return`
                    background: ${i.colors.horde.red};
                    color: ${i.colors.neutral.white};
                    
                    &:hover {
                        background: ${i.colors.horde.darkRed};
                    }
                `;case"disabled":return`
                    background: ${i.colors.neutral.gray};
                    color: ${i.colors.neutral.darkGray};
                    cursor: not-allowed;
                `}}}
`,xt=h.createContext(void 0);function ms({children:e}){const{character:i}=w(),[s,r]=h.useState([]),[l,n]=h.useState(null),a=Je(),x=et(),d=f=>{if(!i)throw new Error("Character not found");if(!i.id)throw new Error("Character ID not found");if(s.forEach(c=>{if(c.id===f.id)if(c.who&&!c.who.find(p=>p.id===i.id)){if(c.who.length<c.size){c.who.push({id:i.id,name:i.name,classe:i.classe,level:i.level,ready:!1,position:{x:0,y:0}}),fs(c),n(c);return}}else{console.log("Character already in dungeon:"),n(c);return}}),!l){const c=me.find(p=>p.id===f.id);if(c){console.log("Dungeon found in constants:"),ps(c,i);return}throw new Error(`Dungeon with id ${f.id} not found`)}};return h.useEffect(()=>{const f=oe("dungeons",c=>{r(c),c.find(p=>{p.who&&p.status==="waiting"&&p.who.find(u=>u.id===i?.id)&&(n(p),p.who.length>=p.size&&a.pathname!=="/dungeon"&&x("/dungeon"))})});return()=>{f()}},[i,a.pathname,x]),h.useEffect(()=>{if(l?.docId){const f=nt("dungeons",l?.docId||"",c=>{c&&n(c)});return()=>{f()}}},[l?.docId]),t.jsxs(xt.Provider,{value:{dungeons:s,setDungeons:r,findDungeonById:d,currentDungeon:l},children:[l!==null&&t.jsxs(ys,{children:[t.jsx(js,{children:"🏰"}),t.jsxs(k,{$direction:"column",$align:"center",$gap:"0rem",children:[t.jsx(ks,{children:"En attente"}),l&&l.who&&t.jsxs(ws,{children:[l.who.length,"/",l.size]})]})]}),e]})}const ys=o.div`
  position: fixed;
  background-color: ${({theme:e})=>e.colors.primary.gold};
  color: ${({theme:e})=>e.colors.winter.deepBlue};
  top: 60px;
  right: 2px;
  height: 50px;
  font-size: 2rem;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  border-radius: 0.5rem;
  padding: 0.5rem;
`,js=o.div`
  font-size: 2rem;
`,ks=o.div`
  font-size: 1rem;
  font-weight: bold;
`,ws=o.div`
  font-size: 0.875rem;
`,ht=()=>{const e=h.useContext(xt);if(!e)throw new Error("useDungeon must be used within a DungeonProvider");return e},pt=h.createContext(void 0),bs=o.div`
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
`,vs=o.div`
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
`,$s=o.div`
  color: ${({theme:e})=>e.colors.primary.gold};
  font-size: ${({theme:e})=>e.fontSizes.lg};
  text-shadow: ${({theme:e})=>e.shadows.glow.gold};
  text-align: center;
`,Bs=o.div`
  height: 90%;
  overflow-y: auto;
`,Fs=o.div`
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
`,Ls=o.div`
  font-weight: ${({theme:e})=>e.fontWeights.bold};
  color: ${({theme:e,$color:i})=>i||e.colors.primary.gold};
`,Ms=o.div`
  font-size: ${({theme:e})=>e.fontSizes.sm};
  color: ${({theme:e})=>e.colors.winter.iceBlue};
`,Ws=o.div`
  font-size: ${({theme:e})=>e.fontSizes.sm};
  color: ${({theme:e})=>e.colors.winter.iceBlue};
`,As=o.div`
  margin-left: auto;
  display: flex;
  gap: ${({theme:e})=>e.spacing.sm};
`,Ce=o.button`
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
`;function Ds({children:e}){const[i,s]=h.useState(null),[r,l]=h.useState(!1),{character:n}=w();function a(){l(!0)}function x(){l(!1)}const d=h.useCallback(async()=>{const c=await Ji();s(c)},[]);h.useEffect(()=>{oe("characters",d),d()},[n,d]);const f={members:i,showMembers:a,hideMembers:x};return t.jsxs(pt.Provider,{value:f,children:[t.jsxs(bs,{$visible:r,children:[t.jsx(vs,{$visible:r,onClick:()=>{l(!r)},children:r?"❌":"👥"}),t.jsx($s,{children:"Members"}),t.jsx(Bs,{children:i&&i.map(c=>t.jsxs(Fs,{children:[t.jsx(Ms,{children:typeof c.updatedAt=="number"&&c.updatedAt+60*1e3*15>Date.now()?"🟢":"⚪"}),t.jsx(Ws,{children:c.level}),t.jsx(Ls,{$color:c.classe.color,children:c.name}),n&&n.id!==c.id&&t.jsxs(As,{children:[t.jsx(Ce,{onClick:()=>{console.log("SEND LOVE")},children:"❤️"}),t.jsx(Ce,{onClick:()=>{ts(n,c)},children:"💬"})]})]},c.id))})]}),e]})}const Es=()=>{const e=h.useContext(pt);if(!e)throw new Error("useMembers must be used within a MembersProvider");return e},ft=h.createContext(void 0),Ss=o.div`
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
`,Qs=o.div`
  background: ${({theme:e,$color:i})=>i||e.colors.winter.deepBlue};
  border-radius: ${({theme:e})=>e.borderRadius.lg};
  padding: ${({theme:e})=>e.spacing.lg};
  box-shadow: ${({theme:e})=>e.shadows.xl};
  max-width: 90%;
  width: 800px;
  max-height: 90%;
  height: 500px;
  overflow: auto;
`;function qs({children:e}){const[i,s]=h.useState(!1),[r,l]=h.useState(void 0),[n,a]=h.useState(""),x=()=>{s(!1),l(void 0),a("")},d=(f,c)=>{l(f),a(c||""),s(!0)};return t.jsxs(ft.Provider,{value:{visible:i,setVisible:s,content:r,setContent:l,color:n,setColor:a,closeModal:x,openModal:d},children:[e,i&&t.jsx(Ss,{children:t.jsx(Qs,{$color:n,children:r})})]})}const Ae=()=>{const e=h.useContext(ft);if(!e)throw new Error("useModal doit être utilisé dans un ModalProvider");return e},Ps=async(e,i)=>{const s=await Be(v.shops);return ne(s,e,i)},Is=async(e,i,s)=>{const l=(await Be(v.shops)).find(x=>x.id===e);if(!l)return;await Kt(v.shops,l.id);const n=i.inventory.bags||[],a=i.gold-l.price*s;l&&n.push({itemId:l.id,item:l}),await C(v.characters,i.id,{inventory:{...i.inventory,bags:n},gold:a})},ut=h.createContext(void 0);function Ts({children:e}){const[i,s]=h.useState([]),r=h.useCallback(async()=>{s(await Ps(["level"],["asc"]))},[]);return h.useEffect(()=>{oe(v.shops,async()=>{r()})},[r]),t.jsx(ut.Provider,{value:{shop:i,setShop:s},children:e})}const Cs=()=>{const e=h.useContext(ut);if(!e)throw new Error("useShop must be used within a ShopProvider");return e},gt=h.createContext(void 0),Hs=o.div`
  position: fixed;
  left: ${({$x:e})=>e}px;
  top: ${({$y:e})=>e}px;
  z-index: 10000;
  opacity: ${({$visible:e})=>e?1:0};
  transition: opacity 0.2s ease;
  transform: translate(-50%, -100%) translateY(-10px);
`,_s=o.div`
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
`,zs=o.div`
  font-size: ${({theme:e})=>e.fontSizes.base};
  font-weight: ${({theme:e})=>e.fontWeights.bold};
  color: ${({$quality:e})=>{switch(e){case"poor":return"#9d9d9d";case"common":return"#ffffff";case"uncommon":return"#1eff00";case"rare":return"#0070dd";case"epic":return"#a335ee";case"legendary":return"#ff8000";default:return"#ffd700"}}};
  margin-bottom: ${({theme:e})=>e.spacing.xs};
  text-shadow: 0 0 10px rgba(0, 0, 0, 0.8);
  padding: ${({theme:e})=>e.spacing.xs} ${({theme:e})=>e.spacing.sm};
`,Rs=o.div`
  font-size: ${({theme:e})=>e.fontSizes.sm};
  color: ${({theme:e})=>e.colors.text.secondary};
  margin-bottom: ${({theme:e})=>e.spacing.sm};
  font-style: italic;
  padding: ${({theme:e})=>e.spacing.xs} ${({theme:e})=>e.spacing.sm};
`,Gs=o.div`
  display: flex;
  flex-direction: column;
  gap: 0;
  border-top: 1px solid rgba(255, 215, 0, 0.3);
  padding: ${({theme:e})=>e.spacing.xs} ${({theme:e})=>e.spacing.sm};
`,He=o.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`,_e=o.div`
//   display: flex;
  color: #1eff00;
  font-size: ${({theme:e})=>e.fontSizes.sm};
  width: calc(100% - 100px);
  text-transform: capitalize;
`,ze=o.div`
//   display: flex;
  color: ${({theme:e})=>e.colors.primary.gold};
  font-size: ${({theme:e})=>e.fontSizes.sm};
  width: 50px;
  text-align: right;
`,Re=o.div`
  color: ${({$colorText:e})=>e};
  font-size: ${({theme:e})=>e.fontSizes.sm};
  text-align: right;
  width: 50px;
  &:before { 
    content: '${({$colorText:e})=>e==="green"?"+":""}'; 
  } 
`;function Zs({children:e}){const[i,s]=h.useState(null),[r,l]=h.useState({x:0,y:0}),[n,a]=h.useState(!1),[x,d]=h.useState(!1),f=(g,m)=>{s(g),l(m),a(!0)},c=()=>{a(!1),setTimeout(()=>{x||s(null)},200)},p=()=>{d(!0),a(!0)},u=()=>{d(!1),a(!1),setTimeout(()=>{x||s(null)},200)};return t.jsxs(gt.Provider,{value:{showTooltip:f,hideTooltip:c},children:[e,i&&t.jsx(Hs,{$x:r.x,$y:r.y,$visible:n,onMouseMove:p,onMouseLeave:u,children:t.jsxs(_s,{$quality:i.quality,onClick:c,children:[t.jsx(zs,{$quality:i.quality,children:i.title}),i.description&&t.jsxs(Rs,{children:['"',i.description,'"']}),i.stats&&Object.keys(i.stats).length>0&&t.jsxs(Gs,{children:[Object.entries(i.stats).sort().reverse().map(([g,m])=>t.jsxs(He,{children:[t.jsx(_e,{children:g}),t.jsx(ze,{children:m}),i.equiped&&t.jsx(t.Fragment,{children:t.jsx(Re,{$colorText:Number(m)>Number(i.equiped.stats[g])?"green":"red",children:`${Number(m)-Number(i.equiped.stats[g])}`})})]},g)),i.level&&i.level>0?t.jsxs(He,{children:[t.jsx(_e,{children:"level"}),t.jsx(ze,{children:i.level}),i.equiped&&t.jsx(Re,{$colorText:Number(i.level)>Number(i.equiped.level)?"green":"red",children:`${i.equiped.level}`})]}):""]})]})})]})}function De(){const e=h.useContext(gt);if(!e)throw new Error("useTooltip must be used within a TooltipProvider");return e}const Ns=Wt`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`,Us=o.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 64px;
`,Os=o.div`
  border: 6px solid ${({theme:e})=>e.colors.winter.darkIce};
  border-top: 6px solid ${({theme:e})=>e.colors.primary.gold};
  border-radius: 50%;
  width: 48px;
  height: 48px;
  animation: ${Ns} 2s linear infinite;
`;function Ge(){return t.jsx(Us,{children:t.jsx(Os,{})})}const D=o.button`
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
`,Vs="/assets/death-knight-BlDcxklt.png",Xs="/assets/druid-DTZsHHDj.png",Ys="/assets/hunter-Bv91z2Ld.png",Ks="/assets/mage-BleXcksg.png",Js="/assets/monk-BGOXjoq-.png",er="/assets/paladin-C0IVX5DB.png",tr="/assets/priest-BgbDRr4c.png",ir="/assets/rogue-Sa5N04dD.png",sr="/assets/shaman-4zOWNnOm.png",rr="/assets/warlock-C2x8oev9.png",lr="/assets/warrior-BHhjWIDc.png",nr={"death-knight":Vs,druid:Xs,hunter:Ys,mage:Ks,monk:Js,paladin:er,priest:tr,rogue:ir,shaman:sr,warlock:rr,warrior:lr},or=o.img`
  width: ${e=>e.size?e.size+"px":"100%"};  
  height: ${e=>e.size?e.size+"px":"100%"};
  border-radius: 50%;
`;function mt({classe:e,size:i}){return t.jsx(or,{src:nr[e.id],alt:e.id,size:i})}const ar=o.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing.md};
  padding: ${({theme:e})=>e.spacing.sm} 0;
  width: 250px;
`,cr=o.span`
  color: ${({theme:e,$color:i})=>i||e.colors.winter.iceBlue};
  font-weight: ${({theme:e})=>e.fontWeights.black};
  font-size: ${({theme:e})=>e.fontSizes.lg};

  @media (max-width: ${({theme:e})=>e.breakpoints.md}) {
    display: none;
  }
`,dr=o.div`
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
`;function xr(){const{character:e}=w();return e?t.jsxs(ar,{children:[t.jsx(dr,{children:t.jsx(mt,{classe:e.classe})}),t.jsx(cr,{$color:e.classe.color,children:e?.name||"Aventurier"})]}):null}function Ze(e,i){let s=0,r=0,l=0;return e.length===4?(s=parseInt(e[1]+e[1],16),r=parseInt(e[2]+e[2],16),l=parseInt(e[3]+e[3],16)):e.length===7&&(s=parseInt(e.slice(1,3),16),r=parseInt(e.slice(3,5),16),l=parseInt(e.slice(5,7),16)),s=Math.min(255,Math.max(0,Math.round(s+i/100*255))),r=Math.min(255,Math.max(0,Math.round(r+i/100*255))),l=Math.min(255,Math.max(0,Math.round(l+i/100*255))),`rgb(${s},${r},${l})`}function T({color:e="#FFD700",size:i=48}){const s=Ze(e,-30),r=Ze(e,40);return t.jsxs("svg",{width:i,height:i,viewBox:"0 0 64 64",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("circle",{cx:"32",cy:"32",r:"28",fill:e,stroke:s,strokeWidth:"4",filter:"url(#glow)"}),t.jsx("ellipse",{cx:"32",cy:"32",rx:"22",ry:"22",fill:r,opacity:"0.15"}),t.jsx("ellipse",{cx:"40",cy:"24",rx:"8",ry:"4",fill:r,opacity:"0.5"}),t.jsx("ellipse",{cx:"24",cy:"44",rx:"6",ry:"2.5",fill:r,opacity:"0.3"}),t.jsx("defs",{children:t.jsx("filter",{id:"glow",x:"0",y:"0",width:"64",height:"64",filterUnits:"userSpaceOnUse",children:t.jsx("feGaussianBlur",{stdDeviation:"3",result:"blur"})})})]})}function E({amount:e,variant:i="normal"}){const s=Math.floor(e/1e4),r=Math.floor(e%1e4/100),l=e%100;return t.jsxs("span",{style:{display:"flex",alignItems:"center",whiteSpace:"nowrap",justifyContent:"flex-end",gap:i!=="small"?i==="short"?0:16:4},children:[i==="small"&&t.jsxs(t.Fragment,{children:[s>0&&t.jsxs("span",{style:{color:"#FFD700"},children:[le(s)," ",t.jsx(T,{color:"#FFD700",size:8})]}),r>0&&s<900&&t.jsxs("span",{style:{color:"#C0C0C0"},children:[r," ",t.jsx(T,{color:"#C0C0C0",size:8})]}),l>0&&r<90&&t.jsxs("span",{style:{color:"#CD7F32"},children:[l," ",t.jsx(T,{color:"#B87333",size:8})]})]}),i==="short"&&t.jsxs(t.Fragment,{children:[s>0&&t.jsxs("span",{style:{color:"#FFD700"},children:[le(s),"."]}),r>0&&t.jsxs("span",{style:{color:"#C0C0C0"},children:[r,"."]}),t.jsx("span",{style:{color:"#CD7F32"},children:l})]}),i==="normal"&&t.jsxs(t.Fragment,{children:[s>0&&t.jsxs("span",{style:{color:"#FFD700"},children:[le(s)," ",t.jsx(T,{color:"#FFD700",size:12})]}),r>0&&t.jsxs("span",{style:{color:"#C0C0C0"},children:[r," ",t.jsx(T,{color:"#C0C0C0",size:12})]}),t.jsxs("span",{style:{color:"#CD7F32"},children:[l," ",t.jsx(T,{color:"#B87333",size:12})]})]})]})}const hr=o.header`
  position: sticky;
  top: 0;
  // padding: ${({theme:e})=>e.spacing.md} ${({theme:e})=>e.spacing.sm};
  z-index: ${({theme:e})=>e.zIndex.dropdown};
  background-color: ${({theme:e})=>e.colors.winter.deepBlue};
  box-shadow: ${({theme:e})=>e.shadows.md};
`,pr=o.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`,fr=o.nav`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing.md};
`,K=o(vt)`
  text-decoration: none;
  color: ${({theme:e})=>e.colors.neutral.white};
  font-size: ${({theme:e})=>e.fontSizes["2xl"]};
`,ur=o.div`
  width: 250px;
`;function Ne(){const{character:e}=w();return t.jsx(hr,{children:t.jsxs(pr,{children:[t.jsx(xr,{}),t.jsxs(fr,{children:[t.jsx(K,{to:"/",children:"👤"}),t.jsx(K,{to:"/exploration",children:"🗺️"}),t.jsx(K,{to:"/shop",children:"🏪"}),t.jsx(K,{to:"/leaderboard",children:"🏅"})]}),t.jsx(ur,{children:e&&t.jsx(E,{amount:e.gold,variant:"normal"})})]})})}o.div`
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
`;const J=o.img`
width: 100 %;
height: 100 %;
object - fit: cover;
border - radius: ${({theme:e})=>e.borderRadius.sm};
`,gr=o.span`
font - size: 2rem;
display: flex;
align - items: center;
justify - content: center;
`,mr=o.div`
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
`,yt=o.h3`
  font-family: ${({theme:e})=>e.fonts.primary};
  font-size: ${({theme:e})=>e.fontSizes.lg};
  color: ${({theme:e})=>e.colors.primary.gold};
`,yr=o.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  height: 100%;
`,jt=o.div`
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
`;const jr=o.div`
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
`;o(jr)`
display: flex;
flex - direction: row;
align - items: center;
justify - content: center;
gap: ${({theme:e})=>e.spacing.sm};
`;const kr=({size:e=48})=>t.jsxs("svg",{width:e,height:e,viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("ellipse",{cx:"24",cy:"24",rx:"12",ry:"14",fill:"#FBE9D0",stroke:"#A67C52",strokeWidth:"2"}),t.jsx("ellipse",{cx:"24",cy:"26",rx:"10",ry:"12",fill:"#EAD2B7",opacity:"0.5"}),t.jsx("path",{d:"M14 16 Q24 4 34 16 Q32 10 24 12 Q16 10 14 16",fill:"#6B4F1D",stroke:"#4B2E09",strokeWidth:"1"}),t.jsx("rect",{x:"18",y:"19",width:"4",height:"1",rx:"0.5",fill:"#4B2E09"}),t.jsx("rect",{x:"26",y:"19",width:"4",height:"1",rx:"0.5",fill:"#4B2E09"}),t.jsx("ellipse",{cx:"20",cy:"24",rx:"1.5",ry:"2",fill:"#222"}),t.jsx("ellipse",{cx:"28",cy:"24",rx:"1.5",ry:"2",fill:"#222"}),t.jsx("ellipse",{cx:"20",cy:"25",rx:"0.5",ry:"0.7",fill:"#fff"}),t.jsx("ellipse",{cx:"28",cy:"25",rx:"0.5",ry:"0.7",fill:"#fff"}),t.jsx("rect",{x:"23",y:"26",width:"2",height:"3",rx:"1",fill:"#EAD2B7"}),t.jsx("path",{d:"M21 32 Q24 35 27 32",stroke:"#A67C52",strokeWidth:"1.5",fill:"none"}),t.jsx("ellipse",{cx:"24",cy:"36",rx:"2",ry:"1",fill:"#EAD2B7",opacity:"0.7"})]}),wr=({size:e=48})=>t.jsxs("svg",{width:e,height:e,viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("ellipse",{cx:"24",cy:"24",rx:"12",ry:"14",fill:"#FBE9D0",stroke:"#A67C52",strokeWidth:"2"}),t.jsx("ellipse",{cx:"24",cy:"26",rx:"10",ry:"12",fill:"#EAD2B7",opacity:"0.5"}),t.jsx("path",{d:"M12 16 Q24 2 36 16 Q34 10 24 12 Q14 10 12 16",fill:"#C19A6B",stroke:"#A67C52",strokeWidth:"1"}),t.jsx("ellipse",{cx:"24",cy:"16",rx:"8",ry:"3",fill:"#C19A6B"}),t.jsx("rect",{x:"18",y:"19",width:"4",height:"1",rx:"0.5",fill:"#A67C52"}),t.jsx("rect",{x:"26",y:"19",width:"4",height:"1",rx:"0.5",fill:"#A67C52"}),t.jsx("ellipse",{cx:"20",cy:"24",rx:"1.5",ry:"2",fill:"#222"}),t.jsx("ellipse",{cx:"28",cy:"24",rx:"1.5",ry:"2",fill:"#222"}),t.jsx("ellipse",{cx:"20",cy:"25",rx:"0.5",ry:"0.7",fill:"#fff"}),t.jsx("ellipse",{cx:"28",cy:"25",rx:"0.5",ry:"0.7",fill:"#fff"}),t.jsx("rect",{x:"23",y:"26",width:"2",height:"3",rx:"1",fill:"#EAD2B7"}),t.jsx("path",{d:"M21 32 Q24 35 27 32",stroke:"#A67C52",strokeWidth:"1.5",fill:"none"}),t.jsx("ellipse",{cx:"24",cy:"36",rx:"2",ry:"1",fill:"#EAD2B7",opacity:"0.7"})]}),br=({size:e=48})=>t.jsxs("svg",{width:e,height:e,viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("ellipse",{cx:"24",cy:"24",rx:"12",ry:"13",fill:"#E7C9A9",stroke:"#A67C52",strokeWidth:"2"}),t.jsx("ellipse",{cx:"24",cy:"26",rx:"10",ry:"11",fill:"#D1B08A",opacity:"0.5"}),t.jsx("path",{d:"M14 16 Q24 6 34 16 Q32 12 24 14 Q16 12 14 16",fill:"#7C4A03",stroke:"#4B2E09",strokeWidth:"1"}),t.jsx("rect",{x:"16",y:"19",width:"5",height:"2",rx:"1",fill:"#7C4A03"}),t.jsx("rect",{x:"27",y:"19",width:"5",height:"2",rx:"1",fill:"#7C4A03"}),t.jsx("ellipse",{cx:"20",cy:"24",rx:"1.2",ry:"1.7",fill:"#222"}),t.jsx("ellipse",{cx:"28",cy:"24",rx:"1.2",ry:"1.7",fill:"#222"}),t.jsx("ellipse",{cx:"20",cy:"25",rx:"0.4",ry:"0.5",fill:"#fff"}),t.jsx("ellipse",{cx:"28",cy:"25",rx:"0.4",ry:"0.5",fill:"#fff"}),t.jsx("rect",{x:"22",y:"26",width:"4",height:"3",rx:"2",fill:"#D1B08A"}),t.jsx("path",{d:"M19 32 Q24 30 29 32",stroke:"#7C4A03",strokeWidth:"2",fill:"none"}),t.jsx("ellipse",{cx:"24",cy:"36",rx:"7",ry:"4",fill:"#7C4A03",stroke:"#4B2E09",strokeWidth:"1"})]}),vr=({size:e=48})=>t.jsxs("svg",{width:e,height:e,viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("ellipse",{cx:"24",cy:"24",rx:"12",ry:"13",fill:"#E7C9A9",stroke:"#A67C52",strokeWidth:"2"}),t.jsx("ellipse",{cx:"24",cy:"26",rx:"10",ry:"11",fill:"#D1B08A",opacity:"0.5"}),t.jsx("path",{d:"M12 16 Q24 4 36 16 Q34 12 24 14 Q14 12 12 16",fill:"#A67C52",stroke:"#7C4A03",strokeWidth:"1"}),t.jsx("rect",{x:"16",y:"19",width:"5",height:"2",rx:"1",fill:"#7C4A03"}),t.jsx("rect",{x:"27",y:"19",width:"5",height:"2",rx:"1",fill:"#7C4A03"}),t.jsx("ellipse",{cx:"20",cy:"24",rx:"1.2",ry:"1.7",fill:"#222"}),t.jsx("ellipse",{cx:"28",cy:"24",rx:"1.2",ry:"1.7",fill:"#222"}),t.jsx("ellipse",{cx:"20",cy:"25",rx:"0.4",ry:"0.5",fill:"#fff"}),t.jsx("ellipse",{cx:"28",cy:"25",rx:"0.4",ry:"0.5",fill:"#fff"}),t.jsx("rect",{x:"22",y:"26",width:"4",height:"3",rx:"2",fill:"#D1B08A"}),t.jsx("path",{d:"M21 32 Q24 35 27 32",stroke:"#A67C52",strokeWidth:"1.5",fill:"none"}),t.jsx("ellipse",{cx:"18",cy:"38",rx:"2",ry:"1.5",fill:"#A67C52"}),t.jsx("ellipse",{cx:"30",cy:"38",rx:"2",ry:"1.5",fill:"#A67C52"})]}),$r=({size:e=48})=>t.jsxs("svg",{width:e,height:e,viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("ellipse",{cx:"24",cy:"24",rx:"12",ry:"15",fill:"#B6D1C2",stroke:"#3A6351",strokeWidth:"2"}),t.jsx("ellipse",{cx:"24",cy:"26",rx:"10",ry:"13",fill:"#8DB7A2",opacity:"0.5"}),t.jsx("path",{d:"M14 16 Q24 2 34 16 Q32 10 24 12 Q16 10 14 16",fill:"#7C3AED",stroke:"#4B2E09",strokeWidth:"1"}),t.jsx("rect",{x:"14",y:"18",width:"8",height:"1",rx:"0.5",fill:"#3A6351"}),t.jsx("rect",{x:"26",y:"18",width:"8",height:"1",rx:"0.5",fill:"#3A6351"}),t.jsx("ellipse",{cx:"20",cy:"24",rx:"1.5",ry:"2",fill:"#A7F3D0"}),t.jsx("ellipse",{cx:"28",cy:"24",rx:"1.5",ry:"2",fill:"#A7F3D0"}),t.jsx("rect",{x:"23",y:"26",width:"2",height:"3",rx:"1",fill:"#8DB7A2"}),t.jsx("path",{d:"M21 32 Q24 33 27 32",stroke:"#3A6351",strokeWidth:"1.5",fill:"none"}),t.jsx("ellipse",{cx:"8",cy:"20",rx:"3",ry:"7",fill:"#B6D1C2",stroke:"#3A6351",strokeWidth:"1"}),t.jsx("ellipse",{cx:"40",cy:"20",rx:"3",ry:"7",fill:"#B6D1C2",stroke:"#3A6351",strokeWidth:"1"})]}),Br=({size:e=48})=>t.jsxs("svg",{width:e,height:e,viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("ellipse",{cx:"24",cy:"24",rx:"12",ry:"15",fill:"#B6D1C2",stroke:"#3A6351",strokeWidth:"2"}),t.jsx("ellipse",{cx:"24",cy:"26",rx:"10",ry:"13",fill:"#8DB7A2",opacity:"0.5"}),t.jsx("path",{d:"M12 16 Q24 2 36 16 Q34 10 24 12 Q14 10 12 16",fill:"#A78BFA",stroke:"#7C3AED",strokeWidth:"1"}),t.jsx("rect",{x:"14",y:"18",width:"8",height:"1",rx:"0.5",fill:"#3A6351"}),t.jsx("rect",{x:"26",y:"18",width:"8",height:"1",rx:"0.5",fill:"#3A6351"}),t.jsx("ellipse",{cx:"20",cy:"24",rx:"1.5",ry:"2",fill:"#A7F3D0"}),t.jsx("ellipse",{cx:"28",cy:"24",rx:"1.5",ry:"2",fill:"#A7F3D0"}),t.jsx("rect",{x:"23",y:"26",width:"2",height:"3",rx:"1",fill:"#8DB7A2"}),t.jsx("path",{d:"M21 32 Q24 35 27 32",stroke:"#3A6351",strokeWidth:"1.5",fill:"none"}),t.jsx("ellipse",{cx:"8",cy:"20",rx:"3",ry:"7",fill:"#B6D1C2",stroke:"#3A6351",strokeWidth:"1"}),t.jsx("ellipse",{cx:"40",cy:"20",rx:"3",ry:"7",fill:"#B6D1C2",stroke:"#3A6351",strokeWidth:"1"})]}),Fr=({size:e=48})=>t.jsxs("svg",{width:e,height:e,viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("ellipse",{cx:"24",cy:"24",rx:"10",ry:"11",fill:"#F3E1C7",stroke:"#BCA37F",strokeWidth:"2"}),t.jsx("ellipse",{cx:"24",cy:"26",rx:"8",ry:"9",fill:"#E2CFA3",opacity:"0.5"}),t.jsx("path",{d:"M14 16 Q24 6 34 16 Q32 12 24 14 Q16 12 14 16",fill:"#EAB308",stroke:"#B45309",strokeWidth:"1"}),t.jsx("rect",{x:"16",y:"19",width:"4",height:"1",rx:"0.5",fill:"#B45309"}),t.jsx("rect",{x:"28",y:"19",width:"4",height:"1",rx:"0.5",fill:"#B45309"}),t.jsx("ellipse",{cx:"20",cy:"24",rx:"1.2",ry:"1.2",fill:"#222"}),t.jsx("ellipse",{cx:"28",cy:"24",rx:"1.2",ry:"1.2",fill:"#222"}),t.jsx("ellipse",{cx:"20",cy:"25",rx:"0.4",ry:"0.4",fill:"#fff"}),t.jsx("ellipse",{cx:"28",cy:"25",rx:"0.4",ry:"0.4",fill:"#fff"}),t.jsx("ellipse",{cx:"24",cy:"27",rx:"1.5",ry:"1",fill:"#E2CFA3"}),t.jsx("path",{d:"M21 32 Q24 34 27 32",stroke:"#BCA37F",strokeWidth:"1.5",fill:"none"}),t.jsx("ellipse",{cx:"12",cy:"24",rx:"2",ry:"3",fill:"#F3E1C7",stroke:"#BCA37F",strokeWidth:"1"}),t.jsx("ellipse",{cx:"36",cy:"24",rx:"2",ry:"3",fill:"#F3E1C7",stroke:"#BCA37F",strokeWidth:"1"})]}),Lr=({size:e=48})=>t.jsxs("svg",{width:e,height:e,viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("ellipse",{cx:"24",cy:"24",rx:"10",ry:"11",fill:"#F3E1C7",stroke:"#BCA37F",strokeWidth:"2"}),t.jsx("ellipse",{cx:"24",cy:"26",rx:"8",ry:"9",fill:"#E2CFA3",opacity:"0.5"}),t.jsx("path",{d:"M12 16 Q24 6 36 16 Q34 12 24 14 Q14 12 12 16",fill:"#F472B6",stroke:"#BE185D",strokeWidth:"1"}),t.jsx("rect",{x:"16",y:"19",width:"4",height:"1",rx:"0.5",fill:"#BE185D"}),t.jsx("rect",{x:"28",y:"19",width:"4",height:"1",rx:"0.5",fill:"#BE185D"}),t.jsx("ellipse",{cx:"20",cy:"24",rx:"1.2",ry:"1.2",fill:"#222"}),t.jsx("ellipse",{cx:"28",cy:"24",rx:"1.2",ry:"1.2",fill:"#222"}),t.jsx("ellipse",{cx:"20",cy:"25",rx:"0.4",ry:"0.4",fill:"#fff"}),t.jsx("ellipse",{cx:"28",cy:"25",rx:"0.4",ry:"0.4",fill:"#fff"}),t.jsx("ellipse",{cx:"24",cy:"27",rx:"1.5",ry:"1",fill:"#E2CFA3"}),t.jsx("path",{d:"M21 32 Q24 34 27 32",stroke:"#BCA37F",strokeWidth:"1.5",fill:"none"}),t.jsx("ellipse",{cx:"12",cy:"24",rx:"2",ry:"3",fill:"#F3E1C7",stroke:"#BCA37F",strokeWidth:"1"}),t.jsx("ellipse",{cx:"36",cy:"24",rx:"2",ry:"3",fill:"#F3E1C7",stroke:"#BCA37F",strokeWidth:"1"})]}),Mr=({size:e=48})=>t.jsxs("svg",{width:e,height:e,viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("ellipse",{cx:"24",cy:"24",rx:"12",ry:"14",fill:"#A7C7E7",stroke:"#3B82F6",strokeWidth:"2"}),t.jsx("ellipse",{cx:"24",cy:"26",rx:"10",ry:"12",fill:"#60A5FA",opacity:"0.5"}),t.jsx("path",{d:"M16 10 Q12 2 20 12",stroke:"#64748B",strokeWidth:"2",fill:"none"}),t.jsx("path",{d:"M32 10 Q36 2 28 12",stroke:"#64748B",strokeWidth:"2",fill:"none"}),t.jsx("path",{d:"M14 16 Q24 6 34 16 Q32 12 24 14 Q16 12 14 16",fill:"#F3F4F6",stroke:"#64748B",strokeWidth:"1"}),t.jsx("rect",{x:"18",y:"19",width:"4",height:"1",rx:"0.5",fill:"#64748B"}),t.jsx("rect",{x:"26",y:"19",width:"4",height:"1",rx:"0.5",fill:"#64748B"}),t.jsx("ellipse",{cx:"20",cy:"24",rx:"1.5",ry:"2",fill:"#FBBF24"}),t.jsx("ellipse",{cx:"28",cy:"24",rx:"1.5",ry:"2",fill:"#FBBF24"}),t.jsx("rect",{x:"23",y:"26",width:"2",height:"3",rx:"1",fill:"#60A5FA"}),t.jsx("path",{d:"M21 32 Q24 33 27 32",stroke:"#64748B",strokeWidth:"1.5",fill:"none"}),t.jsx("rect",{x:"22",y:"36",width:"4",height:"2",rx:"1",fill:"#60A5FA"})]}),Wr=({size:e=48})=>t.jsxs("svg",{width:e,height:e,viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("ellipse",{cx:"24",cy:"24",rx:"12",ry:"14",fill:"#A7C7E7",stroke:"#3B82F6",strokeWidth:"2"}),t.jsx("ellipse",{cx:"24",cy:"26",rx:"10",ry:"12",fill:"#60A5FA",opacity:"0.5"}),t.jsx("path",{d:"M16 10 Q12 2 20 12",stroke:"#64748B",strokeWidth:"2",fill:"none"}),t.jsx("path",{d:"M32 10 Q36 2 28 12",stroke:"#64748B",strokeWidth:"2",fill:"none"}),t.jsx("path",{d:"M12 16 Q24 6 36 16 Q34 12 24 14 Q14 12 12 16",fill:"#F3F4F6",stroke:"#64748B",strokeWidth:"1"}),t.jsx("rect",{x:"18",y:"19",width:"4",height:"1",rx:"0.5",fill:"#64748B"}),t.jsx("rect",{x:"26",y:"19",width:"4",height:"1",rx:"0.5",fill:"#64748B"}),t.jsx("ellipse",{cx:"20",cy:"24",rx:"1.5",ry:"2",fill:"#FBBF24"}),t.jsx("ellipse",{cx:"28",cy:"24",rx:"1.5",ry:"2",fill:"#FBBF24"}),t.jsx("rect",{x:"23",y:"26",width:"2",height:"3",rx:"1",fill:"#60A5FA"}),t.jsx("path",{d:"M21 32 Q24 35 27 32",stroke:"#64748B",strokeWidth:"1.5",fill:"none"}),t.jsx("ellipse",{cx:"24",cy:"36",rx:"2",ry:"1",fill:"#60A5FA"})]}),Ar=({size:e=48})=>t.jsxs("svg",{width:e,height:e,viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("ellipse",{cx:"24",cy:"24",rx:"13",ry:"14",fill:"#A3A3A3",stroke:"#222",strokeWidth:"2"}),t.jsx("ellipse",{cx:"24",cy:"26",rx:"11",ry:"12",fill:"#6B7280",opacity:"0.5"}),t.jsx("ellipse",{cx:"24",cy:"32",rx:"6",ry:"3",fill:"#F3F4F6",stroke:"#222",strokeWidth:"1"}),t.jsx("ellipse",{cx:"24",cy:"33",rx:"2",ry:"1",fill:"#222"}),t.jsx("ellipse",{cx:"10",cy:"14",rx:"3",ry:"6",fill:"#A3A3A3",stroke:"#222",strokeWidth:"1"}),t.jsx("ellipse",{cx:"38",cy:"14",rx:"3",ry:"6",fill:"#A3A3A3",stroke:"#222",strokeWidth:"1"}),t.jsx("ellipse",{cx:"20",cy:"24",rx:"1.5",ry:"2",fill:"#FBBF24"}),t.jsx("ellipse",{cx:"28",cy:"24",rx:"1.5",ry:"2",fill:"#FBBF24"}),t.jsx("rect",{x:"21",y:"35",width:"2",height:"2",rx:"1",fill:"#fff"}),t.jsx("rect",{x:"25",y:"35",width:"2",height:"2",rx:"1",fill:"#fff"}),t.jsx("rect",{x:"18",y:"19",width:"4",height:"1",rx:"0.5",fill:"#222"}),t.jsx("rect",{x:"26",y:"19",width:"4",height:"1",rx:"0.5",fill:"#222"})]}),Dr=({size:e=48})=>t.jsxs("svg",{width:e,height:e,viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("ellipse",{cx:"24",cy:"24",rx:"13",ry:"14",fill:"#A3A3A3",stroke:"#222",strokeWidth:"2"}),t.jsx("ellipse",{cx:"24",cy:"26",rx:"11",ry:"12",fill:"#6B7280",opacity:"0.5"}),t.jsx("ellipse",{cx:"24",cy:"32",rx:"6",ry:"3",fill:"#F3F4F6",stroke:"#222",strokeWidth:"1"}),t.jsx("ellipse",{cx:"24",cy:"33",rx:"2",ry:"1",fill:"#222"}),t.jsx("ellipse",{cx:"10",cy:"14",rx:"3",ry:"6",fill:"#A3A3A3",stroke:"#222",strokeWidth:"1"}),t.jsx("ellipse",{cx:"38",cy:"14",rx:"3",ry:"6",fill:"#A3A3A3",stroke:"#222",strokeWidth:"1"}),t.jsx("ellipse",{cx:"20",cy:"24",rx:"1.5",ry:"2",fill:"#FBBF24"}),t.jsx("ellipse",{cx:"28",cy:"24",rx:"1.5",ry:"2",fill:"#FBBF24"}),t.jsx("rect",{x:"21",y:"35",width:"2",height:"2",rx:"1",fill:"#fff"}),t.jsx("rect",{x:"25",y:"35",width:"2",height:"2",rx:"1",fill:"#fff"}),t.jsx("rect",{x:"18",y:"19",width:"4",height:"1",rx:"0.5",fill:"#6B7280"}),t.jsx("rect",{x:"26",y:"19",width:"4",height:"1",rx:"0.5",fill:"#6B7280"})]}),Er=({size:e=48})=>t.jsxs("svg",{width:e,height:e,viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("ellipse",{cx:"24",cy:"24",rx:"13",ry:"13",fill:"#F3F4F6",stroke:"#222",strokeWidth:"2"}),t.jsx("ellipse",{cx:"18",cy:"24",rx:"4",ry:"5",fill:"#222",opacity:"0.7"}),t.jsx("ellipse",{cx:"30",cy:"24",rx:"4",ry:"5",fill:"#222",opacity:"0.7"}),t.jsx("ellipse",{cx:"20",cy:"24",rx:"1.2",ry:"1.5",fill:"#22C55E"}),t.jsx("ellipse",{cx:"28",cy:"24",rx:"1.2",ry:"1.5",fill:"#22C55E"}),t.jsx("ellipse",{cx:"24",cy:"30",rx:"2",ry:"1.2",fill:"#222"}),t.jsx("path",{d:"M21 34 Q24 36 27 34",stroke:"#222",strokeWidth:"1.5",fill:"none"}),t.jsx("ellipse",{cx:"10",cy:"14",rx:"3",ry:"3",fill:"#222"}),t.jsx("ellipse",{cx:"38",cy:"14",rx:"3",ry:"3",fill:"#222"})]}),Sr=({size:e=48})=>t.jsxs("svg",{width:e,height:e,viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("ellipse",{cx:"24",cy:"24",rx:"13",ry:"13",fill:"#F3F4F6",stroke:"#222",strokeWidth:"2"}),t.jsx("ellipse",{cx:"18",cy:"24",rx:"4",ry:"5",fill:"#222",opacity:"0.7"}),t.jsx("ellipse",{cx:"30",cy:"24",rx:"4",ry:"5",fill:"#222",opacity:"0.7"}),t.jsx("ellipse",{cx:"20",cy:"24",rx:"1.2",ry:"1.5",fill:"#22C55E"}),t.jsx("ellipse",{cx:"28",cy:"24",rx:"1.2",ry:"1.5",fill:"#22C55E"}),t.jsx("ellipse",{cx:"24",cy:"30",rx:"2",ry:"1.2",fill:"#222"}),t.jsx("path",{d:"M21 34 Q24 36 27 34",stroke:"#222",strokeWidth:"1.5",fill:"none"}),t.jsx("ellipse",{cx:"10",cy:"14",rx:"3",ry:"3",fill:"#222"}),t.jsx("ellipse",{cx:"38",cy:"14",rx:"3",ry:"3",fill:"#222"}),t.jsx("ellipse",{cx:"10",cy:"12",rx:"1.2",ry:"1.2",fill:"#F472B6"}),t.jsx("ellipse",{cx:"10",cy:"12",rx:"0.5",ry:"0.5",fill:"#BE185D"})]}),Qr=({size:e=48})=>t.jsxs("svg",{width:e,height:e,viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("ellipse",{cx:"24",cy:"24",rx:"13",ry:"14",fill:"#65A30D",stroke:"#365314",strokeWidth:"2"}),t.jsx("ellipse",{cx:"24",cy:"26",rx:"11",ry:"12",fill:"#A3E635",opacity:"0.5"}),t.jsx("path",{d:"M14 16 Q24 6 34 16 Q32 12 24 14 Q16 12 14 16",fill:"#222",stroke:"#365314",strokeWidth:"1"}),t.jsx("rect",{x:"16",y:"19",width:"5",height:"2",rx:"1",fill:"#222"}),t.jsx("rect",{x:"27",y:"19",width:"5",height:"2",rx:"1",fill:"#222"}),t.jsx("ellipse",{cx:"20",cy:"24",rx:"1.5",ry:"2",fill:"#DC2626"}),t.jsx("ellipse",{cx:"28",cy:"24",rx:"1.5",ry:"2",fill:"#DC2626"}),t.jsx("rect",{x:"22",y:"26",width:"4",height:"3",rx:"2",fill:"#A3E635"}),t.jsx("path",{d:"M21 32 Q24 35 27 32",stroke:"#365314",strokeWidth:"1.5",fill:"none"}),t.jsx("rect",{x:"22",y:"34",width:"2",height:"2",rx:"1",fill:"#fff"}),t.jsx("rect",{x:"24",y:"34",width:"2",height:"2",rx:"1",fill:"#fff"}),t.jsx("ellipse",{cx:"24",cy:"36",rx:"3",ry:"2",fill:"#A3E635"})]}),qr=({size:e=48})=>t.jsxs("svg",{width:e,height:e,viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("ellipse",{cx:"24",cy:"24",rx:"13",ry:"14",fill:"#65A30D",stroke:"#365314",strokeWidth:"2"}),t.jsx("ellipse",{cx:"24",cy:"26",rx:"11",ry:"12",fill:"#A3E635",opacity:"0.5"}),t.jsx("path",{d:"M12 16 Q24 6 36 16 Q34 12 24 14 Q14 12 12 16",fill:"#222",stroke:"#365314",strokeWidth:"1"}),t.jsx("rect",{x:"16",y:"19",width:"5",height:"2",rx:"1",fill:"#222"}),t.jsx("rect",{x:"27",y:"19",width:"5",height:"2",rx:"1",fill:"#222"}),t.jsx("ellipse",{cx:"20",cy:"24",rx:"1.5",ry:"2",fill:"#DC2626"}),t.jsx("ellipse",{cx:"28",cy:"24",rx:"1.5",ry:"2",fill:"#DC2626"}),t.jsx("rect",{x:"22",y:"26",width:"4",height:"3",rx:"2",fill:"#A3E635"}),t.jsx("path",{d:"M21 32 Q24 35 27 32",stroke:"#365314",strokeWidth:"1.5",fill:"none"}),t.jsx("rect",{x:"22",y:"34",width:"2",height:"2",rx:"1",fill:"#fff"}),t.jsx("rect",{x:"24",y:"34",width:"2",height:"2",rx:"1",fill:"#fff"}),t.jsx("ellipse",{cx:"24",cy:"36",rx:"3",ry:"2",fill:"#A3E635"})]}),Pr=({size:e=48})=>t.jsxs("svg",{width:e,height:e,viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("ellipse",{cx:"24",cy:"24",rx:"13",ry:"14",fill:"#D1D5DB",stroke:"#6B7280",strokeWidth:"2"}),t.jsx("ellipse",{cx:"24",cy:"26",rx:"11",ry:"12",fill:"#9CA3AF",opacity:"0.5"}),t.jsx("path",{d:"M14 16 Q24 6 34 16 Q32 12 24 14 Q16 12 14 16",fill:"#22C55E",stroke:"#6B7280",strokeWidth:"1"}),t.jsx("rect",{x:"16",y:"19",width:"5",height:"1",rx:"0.5",fill:"#6B7280"}),t.jsx("rect",{x:"27",y:"19",width:"5",height:"1",rx:"0.5",fill:"#6B7280"}),t.jsx("ellipse",{cx:"20",cy:"24",rx:"1.5",ry:"2",fill:"#FBBF24"}),t.jsx("ellipse",{cx:"28",cy:"24",rx:"1.5",ry:"2",fill:"#FBBF24"}),t.jsx("rect",{x:"23",y:"26",width:"2",height:"3",rx:"1",fill:"#9CA3AF"}),t.jsx("path",{d:"M21 32 Q24 30 27 32",stroke:"#6B7280",strokeWidth:"1.5",fill:"none"}),t.jsx("ellipse",{cx:"24",cy:"36",rx:"2",ry:"1",fill:"#9CA3AF"}),t.jsx("path",{d:"M18 28 Q20 30 22 28",stroke:"#DC2626",strokeWidth:"1",fill:"none"})]}),Ir=({size:e=48})=>t.jsxs("svg",{width:e,height:e,viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("ellipse",{cx:"24",cy:"24",rx:"13",ry:"14",fill:"#D1D5DB",stroke:"#6B7280",strokeWidth:"2"}),t.jsx("ellipse",{cx:"24",cy:"26",rx:"11",ry:"12",fill:"#9CA3AF",opacity:"0.5"}),t.jsx("path",{d:"M12 16 Q24 6 36 16 Q34 12 24 14 Q14 12 12 16",fill:"#A78BFA",stroke:"#6B7280",strokeWidth:"1"}),t.jsx("rect",{x:"16",y:"19",width:"5",height:"1",rx:"0.5",fill:"#6B7280"}),t.jsx("rect",{x:"27",y:"19",width:"5",height:"1",rx:"0.5",fill:"#6B7280"}),t.jsx("ellipse",{cx:"20",cy:"24",rx:"1.5",ry:"2",fill:"#FBBF24"}),t.jsx("ellipse",{cx:"28",cy:"24",rx:"1.5",ry:"2",fill:"#FBBF24"}),t.jsx("rect",{x:"23",y:"26",width:"2",height:"3",rx:"1",fill:"#9CA3AF"}),t.jsx("path",{d:"M21 32 Q24 30 27 32",stroke:"#6B7280",strokeWidth:"1.5",fill:"none"}),t.jsx("ellipse",{cx:"24",cy:"36",rx:"2",ry:"1",fill:"#9CA3AF"}),t.jsx("path",{d:"M26 28 Q28 30 30 28",stroke:"#DC2626",strokeWidth:"1",fill:"none"})]}),Tr=({size:e=48})=>t.jsxs("svg",{width:e,height:e,viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("ellipse",{cx:"24",cy:"24",rx:"14",ry:"15",fill:"#A0522D",stroke:"#4B2E09",strokeWidth:"2"}),t.jsx("ellipse",{cx:"24",cy:"26",rx:"12",ry:"13",fill:"#C68642",opacity:"0.5"}),t.jsx("ellipse",{cx:"10",cy:"12",rx:"4",ry:"8",fill:"#F3F4F6",stroke:"#4B2E09",strokeWidth:"1"}),t.jsx("ellipse",{cx:"38",cy:"12",rx:"4",ry:"8",fill:"#F3F4F6",stroke:"#4B2E09",strokeWidth:"1"}),t.jsx("ellipse",{cx:"24",cy:"32",rx:"4",ry:"2",fill:"#4B2E09"}),t.jsx("ellipse",{cx:"20",cy:"24",rx:"1.5",ry:"2",fill:"#222"}),t.jsx("ellipse",{cx:"28",cy:"24",rx:"1.5",ry:"2",fill:"#222"}),t.jsx("path",{d:"M21 34 Q24 36 27 34",stroke:"#4B2E09",strokeWidth:"1.5",fill:"none"}),t.jsx("ellipse",{cx:"24",cy:"38",rx:"3",ry:"1.5",fill:"#C68642"})]}),Cr=({size:e=48})=>t.jsxs("svg",{width:e,height:e,viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("ellipse",{cx:"24",cy:"24",rx:"14",ry:"15",fill:"#A0522D",stroke:"#4B2E09",strokeWidth:"2"}),t.jsx("ellipse",{cx:"24",cy:"26",rx:"12",ry:"13",fill:"#C68642",opacity:"0.5"}),t.jsx("ellipse",{cx:"10",cy:"12",rx:"4",ry:"8",fill:"#F3F4F6",stroke:"#4B2E09",strokeWidth:"1"}),t.jsx("ellipse",{cx:"38",cy:"12",rx:"4",ry:"8",fill:"#F3F4F6",stroke:"#4B2E09",strokeWidth:"1"}),t.jsx("ellipse",{cx:"24",cy:"32",rx:"4",ry:"2",fill:"#4B2E09"}),t.jsx("ellipse",{cx:"20",cy:"24",rx:"1.5",ry:"2",fill:"#222"}),t.jsx("ellipse",{cx:"28",cy:"24",rx:"1.5",ry:"2",fill:"#222"}),t.jsx("path",{d:"M21 34 Q24 37 27 34",stroke:"#4B2E09",strokeWidth:"1.5",fill:"none"}),t.jsx("ellipse",{cx:"24",cy:"38",rx:"3",ry:"1.5",fill:"#C68642"}),t.jsx("ellipse",{cx:"10",cy:"10",rx:"1.2",ry:"1.2",fill:"#F472B6"}),t.jsx("ellipse",{cx:"10",cy:"10",rx:"0.5",ry:"0.5",fill:"#BE185D"})]}),Hr=({size:e=48})=>t.jsxs("svg",{width:e,height:e,viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("ellipse",{cx:"24",cy:"24",rx:"13",ry:"15",fill:"#38BDF8",stroke:"#0EA5E9",strokeWidth:"2"}),t.jsx("ellipse",{cx:"24",cy:"26",rx:"11",ry:"13",fill:"#7DD3FC",opacity:"0.5"}),t.jsx("path",{d:"M14 16 Q24 6 34 16 Q32 12 24 14 Q16 12 14 16",fill:"#F97316",stroke:"#EA580C",strokeWidth:"1"}),t.jsx("rect",{x:"16",y:"19",width:"5",height:"1",rx:"0.5",fill:"#EA580C"}),t.jsx("rect",{x:"27",y:"19",width:"5",height:"1",rx:"0.5",fill:"#EA580C"}),t.jsx("ellipse",{cx:"20",cy:"24",rx:"1.5",ry:"2",fill:"#FBBF24"}),t.jsx("ellipse",{cx:"28",cy:"24",rx:"1.5",ry:"2",fill:"#FBBF24"}),t.jsx("rect",{x:"23",y:"26",width:"2",height:"5",rx:"1",fill:"#7DD3FC"}),t.jsx("path",{d:"M21 32 Q24 35 27 32",stroke:"#0EA5E9",strokeWidth:"1.5",fill:"none"}),t.jsx("rect",{x:"22",y:"34",width:"2",height:"2",rx:"1",fill:"#fff"}),t.jsx("rect",{x:"24",y:"34",width:"2",height:"2",rx:"1",fill:"#fff"}),t.jsx("ellipse",{cx:"24",cy:"36",rx:"2",ry:"1",fill:"#7DD3FC"})]}),_r=({size:e=48})=>t.jsxs("svg",{width:e,height:e,viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("ellipse",{cx:"24",cy:"24",rx:"13",ry:"15",fill:"#38BDF8",stroke:"#0EA5E9",strokeWidth:"2"}),t.jsx("ellipse",{cx:"24",cy:"26",rx:"11",ry:"13",fill:"#7DD3FC",opacity:"0.5"}),t.jsx("path",{d:"M12 16 Q24 6 36 16 Q34 12 24 14 Q14 12 12 16",fill:"#F97316",stroke:"#EA580C",strokeWidth:"1"}),t.jsx("rect",{x:"16",y:"19",width:"5",height:"1",rx:"0.5",fill:"#EA580C"}),t.jsx("rect",{x:"27",y:"19",width:"5",height:"1",rx:"0.5",fill:"#EA580C"}),t.jsx("ellipse",{cx:"20",cy:"24",rx:"1.5",ry:"2",fill:"#FBBF24"}),t.jsx("ellipse",{cx:"28",cy:"24",rx:"1.5",ry:"2",fill:"#FBBF24"}),t.jsx("rect",{x:"23",y:"26",width:"2",height:"5",rx:"1",fill:"#7DD3FC"}),t.jsx("path",{d:"M21 32 Q24 35 27 32",stroke:"#0EA5E9",strokeWidth:"1.5",fill:"none"}),t.jsx("ellipse",{cx:"24",cy:"36",rx:"2",ry:"1",fill:"#7DD3FC"})]}),zr=({size:e=48})=>t.jsxs("svg",{width:e,height:e,viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("ellipse",{cx:"24",cy:"24",rx:"12",ry:"15",fill:"#F3E1C7",stroke:"#F59E42",strokeWidth:"2"}),t.jsx("ellipse",{cx:"24",cy:"26",rx:"10",ry:"13",fill:"#FDE68A",opacity:"0.5"}),t.jsx("path",{d:"M14 16 Q24 6 34 16 Q32 12 24 14 Q16 12 14 16",fill:"#FDE047",stroke:"#F59E42",strokeWidth:"1"}),t.jsx("rect",{x:"16",y:"19",width:"5",height:"1",rx:"0.5",fill:"#F59E42"}),t.jsx("rect",{x:"27",y:"19",width:"5",height:"1",rx:"0.5",fill:"#F59E42"}),t.jsx("ellipse",{cx:"20",cy:"24",rx:"1.5",ry:"2",fill:"#22C55E"}),t.jsx("ellipse",{cx:"28",cy:"24",rx:"1.5",ry:"2",fill:"#22C55E"}),t.jsx("rect",{x:"23",y:"26",width:"2",height:"3",rx:"1",fill:"#FDE68A"}),t.jsx("path",{d:"M21 32 Q24 35 27 32",stroke:"#F59E42",strokeWidth:"1.5",fill:"none"}),t.jsx("ellipse",{cx:"8",cy:"20",rx:"3",ry:"7",fill:"#F3E1C7",stroke:"#F59E42",strokeWidth:"1"}),t.jsx("ellipse",{cx:"40",cy:"20",rx:"3",ry:"7",fill:"#F3E1C7",stroke:"#F59E42",strokeWidth:"1"})]}),Rr=({size:e=48})=>t.jsxs("svg",{width:e,height:e,viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("ellipse",{cx:"24",cy:"24",rx:"12",ry:"15",fill:"#F3E1C7",stroke:"#F59E42",strokeWidth:"2"}),t.jsx("ellipse",{cx:"24",cy:"26",rx:"10",ry:"13",fill:"#FDE68A",opacity:"0.5"}),t.jsx("path",{d:"M12 16 Q24 6 36 16 Q34 12 24 14 Q14 12 12 16",fill:"#FDE047",stroke:"#F59E42",strokeWidth:"1"}),t.jsx("rect",{x:"16",y:"19",width:"5",height:"1",rx:"0.5",fill:"#F59E42"}),t.jsx("rect",{x:"27",y:"19",width:"5",height:"1",rx:"0.5",fill:"#F59E42"}),t.jsx("ellipse",{cx:"20",cy:"24",rx:"1.5",ry:"2",fill:"#22C55E"}),t.jsx("ellipse",{cx:"28",cy:"24",rx:"1.5",ry:"2",fill:"#22C55E"}),t.jsx("rect",{x:"23",y:"26",width:"2",height:"3",rx:"1",fill:"#FDE68A"}),t.jsx("path",{d:"M21 32 Q24 35 27 32",stroke:"#F59E42",strokeWidth:"1.5",fill:"none"}),t.jsx("ellipse",{cx:"8",cy:"20",rx:"3",ry:"7",fill:"#F3E1C7",stroke:"#F59E42",strokeWidth:"1"}),t.jsx("ellipse",{cx:"40",cy:"20",rx:"3",ry:"7",fill:"#F3E1C7",stroke:"#F59E42",strokeWidth:"1"})]}),Gr=({size:e=48})=>t.jsxs("svg",{width:e,height:e,viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("ellipse",{cx:"24",cy:"24",rx:"12",ry:"13",fill:"#22C55E",stroke:"#166534",strokeWidth:"2"}),t.jsx("ellipse",{cx:"24",cy:"26",rx:"10",ry:"11",fill:"#A3E635",opacity:"0.5"}),t.jsx("path",{d:"M14 16 Q24 6 34 16 Q32 12 24 14 Q16 12 14 16",fill:"#222",stroke:"#166534",strokeWidth:"1"}),t.jsx("rect",{x:"16",y:"19",width:"4",height:"1",rx:"0.5",fill:"#166534"}),t.jsx("rect",{x:"28",y:"19",width:"4",height:"1",rx:"0.5",fill:"#166534"}),t.jsx("ellipse",{cx:"20",cy:"24",rx:"1.2",ry:"1.7",fill:"#F97316"}),t.jsx("ellipse",{cx:"28",cy:"24",rx:"1.2",ry:"1.7",fill:"#F97316"}),t.jsx("rect",{x:"23",y:"26",width:"2",height:"4",rx:"1",fill:"#A3E635"}),t.jsx("path",{d:"M21 32 Q24 35 27 32",stroke:"#166534",strokeWidth:"1.5",fill:"none"}),t.jsx("ellipse",{cx:"8",cy:"20",rx:"3",ry:"7",fill:"#22C55E",stroke:"#166534",strokeWidth:"1"}),t.jsx("ellipse",{cx:"40",cy:"20",rx:"3",ry:"7",fill:"#22C55E",stroke:"#166534",strokeWidth:"1"})]}),Zr=({size:e=48})=>t.jsxs("svg",{width:e,height:e,viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("ellipse",{cx:"24",cy:"24",rx:"12",ry:"13",fill:"#22C55E",stroke:"#166534",strokeWidth:"2"}),t.jsx("ellipse",{cx:"24",cy:"26",rx:"10",ry:"11",fill:"#A3E635",opacity:"0.5"}),t.jsx("path",{d:"M12 16 Q24 6 36 16 Q34 12 24 14 Q14 12 12 16",fill:"#A78BFA",stroke:"#166534",strokeWidth:"1"}),t.jsx("rect",{x:"16",y:"19",width:"4",height:"1",rx:"0.5",fill:"#166534"}),t.jsx("rect",{x:"28",y:"19",width:"4",height:"1",rx:"0.5",fill:"#166534"}),t.jsx("ellipse",{cx:"20",cy:"24",rx:"1.2",ry:"1.7",fill:"#F97316"}),t.jsx("ellipse",{cx:"28",cy:"24",rx:"1.2",ry:"1.7",fill:"#F97316"}),t.jsx("rect",{x:"23",y:"26",width:"2",height:"4",rx:"1",fill:"#A3E635"}),t.jsx("path",{d:"M21 32 Q24 35 27 32",stroke:"#166534",strokeWidth:"1.5",fill:"none"}),t.jsx("ellipse",{cx:"8",cy:"20",rx:"3",ry:"7",fill:"#22C55E",stroke:"#166534",strokeWidth:"1"}),t.jsx("ellipse",{cx:"40",cy:"20",rx:"3",ry:"7",fill:"#22C55E",stroke:"#166534",strokeWidth:"1"})]}),Nr={human:{male:kr,female:wr},dwarf:{male:br,female:vr},"night-elf":{male:$r,female:Br},gnome:{male:Fr,female:Lr},draenei:{male:Mr,female:Wr},worgen:{male:Ar,female:Dr},pandaren:{male:Er,female:Sr},orc:{male:Qr,female:qr},undead:{male:Pr,female:Ir},tauren:{male:Tr,female:Cr},troll:{male:Hr,female:_r},"blood-elf":{male:zr,female:Rr},goblin:{male:Gr,female:Zr}},kt=({race:e,gender:i,size:s=48})=>{if(!e||!i)return null;const r=Nr[e.id]?.[i.id];return r?t.jsx(r,{size:s}):null},Ur=({primaryColor:e="#C0C0C0",secondaryColor:i="#8B4513",accentColor:s="#FFD700",size:r=24})=>t.jsxs("svg",{width:r,height:r,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("path",{d:"M19 3L5 17L7 19L21 5L19 3Z",fill:e,stroke:s,strokeWidth:"0.5"}),t.jsx("rect",{x:"4",y:"16",width:"6",height:"1.5",fill:s,transform:"rotate(45 4 16)"}),t.jsx("path",{d:"M3 19L5 17L4 18L3 19Z",fill:i,stroke:s,strokeWidth:"0.3"}),t.jsx("circle",{cx:"2.5",cy:"19.5",r:"1.2",fill:s})]}),Or=({primaryColor:e="#8B4513",secondaryColor:i="#4B0082",accentColor:s="#9370DB",size:r=24})=>t.jsxs("svg",{width:r,height:r,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("line",{x1:"6",y1:"20",x2:"18",y2:"4",stroke:e,strokeWidth:"1.5",strokeLinecap:"round"}),t.jsx("path",{d:"M18 4L19.5 2.5L18 1L16.5 2.5L18 4Z",fill:s,stroke:i,strokeWidth:"0.5"}),t.jsx("circle",{cx:"18",cy:"3",r:"2.5",fill:s,opacity:"0.3"}),t.jsx("circle",{cx:"18",cy:"3",r:"1.5",fill:s,opacity:"0.5"})]}),Vr=({primaryColor:e="#696969",secondaryColor:i="#2F4F4F",accentColor:s="#A9A9A9",size:r=24})=>t.jsxs("svg",{width:r,height:r,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("path",{d:"M15 3L7 11L9 13L17 5L15 3Z",fill:e,stroke:s,strokeWidth:"0.5"}),t.jsx("rect",{x:"6",y:"11",width:"4",height:"1",fill:s,transform:"rotate(45 6 11)"}),t.jsx("line",{x1:"5.5",y1:"13.5",x2:"4",y2:"15",stroke:i,strokeWidth:"1.5",strokeLinecap:"round"})]}),Xr=({primaryColor:e="#8B4513",secondaryColor:i="#A9A9A9",accentColor:s="#FFD700",size:r=24})=>t.jsxs("svg",{width:r,height:r,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("line",{x1:"6",y1:"20",x2:"15",y2:"8",stroke:e,strokeWidth:"1.8",strokeLinecap:"round"}),t.jsx("path",{d:"M14 8L18 5L20 8L17 11L14 8Z",fill:i,stroke:s,strokeWidth:"0.5"}),t.jsx("path",{d:"M15 8L19 10L18 12L14 10L15 8Z",fill:i,stroke:s,strokeWidth:"0.5"})]}),Yr=({primaryColor:e="#8B4513",secondaryColor:i="#F5DEB3",accentColor:s="#D2691E",size:r=24})=>t.jsxs("svg",{width:r,height:r,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("path",{d:"M18 4Q20 12 18 20",stroke:e,strokeWidth:"1.5",fill:"none",strokeLinecap:"round"}),t.jsx("path",{d:"M18 4L16 12L18 20",stroke:i,strokeWidth:"0.5",fill:"none"}),t.jsx("line",{x1:"4",y1:"12",x2:"16",y2:"12",stroke:s,strokeWidth:"1"}),t.jsx("path",{d:"M4 12L6 11L6 13L4 12Z",fill:s})]}),Kr=({primaryColor:e="#C0C0C0",secondaryColor:i="#A9A9A9",accentColor:s="#FFD700",size:r=24})=>t.jsxs("svg",{width:r,height:r,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("path",{d:"M8 12Q8 6 12 6Q16 6 16 12L16 16L8 16L8 12Z",fill:e,stroke:s,strokeWidth:"0.5"}),t.jsx("path",{d:"M9 14L15 14",stroke:i,strokeWidth:"1"}),t.jsx("circle",{cx:"12",cy:"9",r:"1",fill:s}),t.jsx("path",{d:"M8 16L8 18L16 18L16 16",fill:i,stroke:s,strokeWidth:"0.3"})]}),Jr=({primaryColor:e="#C0C0C0",secondaryColor:i="#A9A9A9",accentColor:s="#FFD700",size:r=24})=>t.jsxs("svg",{width:r,height:r,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("path",{d:"M9 6L9 18L15 18L15 6L12 4L9 6Z",fill:e,stroke:s,strokeWidth:"0.5"}),t.jsx("ellipse",{cx:"8",cy:"7",rx:"2",ry:"1.5",fill:i,stroke:s,strokeWidth:"0.3"}),t.jsx("ellipse",{cx:"16",cy:"7",rx:"2",ry:"1.5",fill:i,stroke:s,strokeWidth:"0.3"}),t.jsx("line",{x1:"12",y1:"8",x2:"12",y2:"16",stroke:s,strokeWidth:"0.5"}),t.jsx("circle",{cx:"12",cy:"10",r:"0.8",fill:s})]}),el=({primaryColor:e="#8B7355",secondaryColor:i="#654321",accentColor:s="#D4AF37",size:r=24})=>t.jsxs("svg",{width:r,height:r,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("rect",{x:"8",y:"6",width:"8",height:"1.5",fill:s}),t.jsx("path",{d:"M8 7.5L9 18L11 18L10 7.5L8 7.5Z",fill:e,stroke:i,strokeWidth:"0.3"}),t.jsx("path",{d:"M14 7.5L13 18L15 18L16 7.5L14 7.5Z",fill:e,stroke:i,strokeWidth:"0.3"}),t.jsx("ellipse",{cx:"9.5",cy:"13",rx:"1",ry:"1.5",fill:i}),t.jsx("ellipse",{cx:"14.5",cy:"13",rx:"1",ry:"1.5",fill:i})]}),tl=({primaryColor:e="#8B4513",secondaryColor:i="#654321",accentColor:s="#D2691E",size:r=24})=>t.jsxs("svg",{width:r,height:r,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("path",{d:"M8 10L8 16L7 18L10 18L10 16L9 10L8 10Z",fill:e,stroke:i,strokeWidth:"0.5"}),t.jsx("path",{d:"M14 10L14 16L13 18L16 18L16 16L15 10L14 10Z",fill:e,stroke:i,strokeWidth:"0.5"}),t.jsx("line",{x1:"8.5",y1:"12",x2:"9.5",y2:"12",stroke:s,strokeWidth:"0.3"}),t.jsx("line",{x1:"8.5",y1:"14",x2:"9.5",y2:"14",stroke:s,strokeWidth:"0.3"}),t.jsx("line",{x1:"14.5",y1:"12",x2:"15.5",y2:"12",stroke:s,strokeWidth:"0.3"}),t.jsx("line",{x1:"14.5",y1:"14",x2:"15.5",y2:"14",stroke:s,strokeWidth:"0.3"})]}),pe=({primaryColor:e="#FFD700",secondaryColor:i="#DAA520",gemColor:s="#4169E1",size:r=24})=>t.jsxs("svg",{width:r,height:r,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("circle",{cx:"12",cy:"13",r:"5",fill:"none",stroke:e,strokeWidth:"1.5"}),t.jsx("circle",{cx:"12",cy:"13",r:"3.5",fill:"none",stroke:i,strokeWidth:"0.5"}),t.jsx("path",{d:"M12 6L14 9L12 11L10 9L12 6Z",fill:s,stroke:e,strokeWidth:"0.5"}),t.jsx("path",{d:"M11.5 7L12 8L11.5 8.5",stroke:"white",strokeWidth:"0.5",opacity:"0.6"})]}),il=({primaryColor:e="#FFD700",secondaryColor:i="#DAA520",gemColor:s="#8B008B",size:r=24})=>t.jsxs("svg",{width:r,height:r,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("path",{d:"M8 4Q12 6 16 4",stroke:e,strokeWidth:"1",fill:"none"}),t.jsx("line",{x1:"8",y1:"4",x2:"10",y2:"10",stroke:e,strokeWidth:"0.8"}),t.jsx("line",{x1:"16",y1:"4",x2:"14",y2:"10",stroke:e,strokeWidth:"0.8"}),t.jsx("path",{d:"M10 10L12 16L14 10L10 10Z",fill:i,stroke:e,strokeWidth:"0.5"}),t.jsx("ellipse",{cx:"12",cy:"12",rx:"1.5",ry:"2",fill:s}),t.jsx("ellipse",{cx:"11.5",cy:"11.5",rx:"0.5",ry:"0.7",fill:"white",opacity:"0.6"})]}),sl=({primaryColor:e="#C0C0C0",secondaryColor:i="#A9A9A9",gemColor:s="#FF1493",size:r=24})=>t.jsxs("svg",{width:r,height:r,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("path",{d:"M6 8Q12 12 18 8",stroke:e,strokeWidth:"1.2",fill:"none"}),t.jsx("circle",{cx:"6",cy:"8",r:"1",fill:i}),t.jsx("circle",{cx:"12",cy:"11",r:"1",fill:i}),t.jsx("circle",{cx:"18",cy:"8",r:"1",fill:i}),t.jsx("circle",{cx:"12",cy:"14",r:"2.5",fill:s,stroke:e,strokeWidth:"0.5"}),t.jsx("circle",{cx:"11.5",cy:"13.5",r:"0.8",fill:"white",opacity:"0.5"})]}),rl=({primaryColor:e="#FFD700",secondaryColor:i="#DAA520",gemColor:s="#00CED1",size:r=24})=>t.jsxs("svg",{width:r,height:r,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("ellipse",{cx:"12",cy:"12",rx:"6",ry:"4",fill:"none",stroke:e,strokeWidth:"1.5"}),t.jsx("ellipse",{cx:"12",cy:"12",rx:"5",ry:"3",fill:"none",stroke:i,strokeWidth:"0.5"}),t.jsx("circle",{cx:"12",cy:"8",r:"1",fill:s}),t.jsx("circle",{cx:"8",cy:"11",r:"0.8",fill:s}),t.jsx("circle",{cx:"16",cy:"11",r:"0.8",fill:s}),t.jsx("circle",{cx:"12",cy:"16",r:"1",fill:s})]}),ll=({primaryColor:e="#FFD700",secondaryColor:i="#DAA520",gemColor:s="#FF0000",size:r=24})=>t.jsxs("svg",{width:r,height:r,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("path",{d:"M6 14L6 16L18 16L18 14L16 10L14 12L12 8L10 12L8 10L6 14Z",fill:e,stroke:i,strokeWidth:"0.5"}),t.jsx("circle",{cx:"8",cy:"10",r:"0.8",fill:i}),t.jsx("circle",{cx:"12",cy:"8",r:"0.8",fill:i}),t.jsx("circle",{cx:"16",cy:"10",r:"0.8",fill:i}),t.jsx("circle",{cx:"9",cy:"14",r:"1",fill:s}),t.jsx("circle",{cx:"12",cy:"13",r:"1.2",fill:s}),t.jsx("circle",{cx:"15",cy:"14",r:"1",fill:s})]}),A=e=>{switch(e){case"poor":return{primary:"#9D9D9D",secondary:"#7A7A7A",accent:"#6B6B6B",gem:"#808080"};case"common":return{primary:"#FFFFFF",secondary:"#D4D4D4",accent:"#B8B8B8",gem:"#E0E0E0"};case"uncommon":return{primary:"#1EFF00",secondary:"#00D000",accent:"#00A000",gem:"#00FF7F"};case"rare":return{primary:"#0070DD",secondary:"#0052AA",accent:"#003D88",gem:"#4169E1"};case"epic":return{primary:"#A335EE",secondary:"#8020CC",accent:"#6010AA",gem:"#9370DB"};case"legendary":return{primary:"#FF8000",secondary:"#DD6600",accent:"#BB4400",gem:"#FFD700"};default:return{primary:"#FFFFFF",secondary:"#D4D4D4",accent:"#B8B8B8",gem:"#E0E0E0"}}},nl=({itemType:e,itemName:i="",size:s=24})=>{const r=i.toLowerCase(),l={primary:"#C0C0C0",secondary:"#A9A9A9",accent:"#E8E8E8"},n={primary:"#FFD700",secondary:"#DAA520"},a={primary:"#8B4513",secondary:"#654321",accent:"#D2691E"};switch(e){case"weapon":return r.includes("bâton")||r.includes("staff")||r.includes("sceptre")?t.jsx(Or,{primaryColor:a.primary,secondaryColor:"#9370DB",accentColor:"#BA55D3",size:s}):r.includes("dague")||r.includes("dagger")||r.includes("poignard")?t.jsx(Vr,{primaryColor:l.primary,secondaryColor:l.secondary,accentColor:l.accent,size:s}):r.includes("hache")||r.includes("axe")?t.jsx(Xr,{primaryColor:a.primary,secondaryColor:l.primary,accentColor:l.accent,size:s}):r.includes("arc")||r.includes("bow")||r.includes("arbalète")?t.jsx(Yr,{primaryColor:a.primary,secondaryColor:"#DEB887",accentColor:a.accent,size:s}):t.jsx(Ur,{primaryColor:l.primary,secondaryColor:a.secondary,accentColor:l.accent,size:s});case"head":return t.jsx(Kr,{primaryColor:l.primary,secondaryColor:l.secondary,accentColor:n.primary,size:s});case"chest":return t.jsx(Jr,{primaryColor:l.primary,secondaryColor:l.secondary,accentColor:n.primary,size:s});case"legs":return t.jsx(el,{primaryColor:"#6B5D4F",secondaryColor:"#4A3F35",accentColor:n.secondary,size:s});case"boots":return t.jsx(tl,{primaryColor:a.primary,secondaryColor:a.secondary,accentColor:a.accent,size:s});case"jewelry":return r.includes("anneau")||r.includes("ring")||r.includes("bague")?t.jsx(pe,{primaryColor:n.primary,secondaryColor:n.secondary,gemColor:"#4169E1",size:s}):r.includes("amulette")||r.includes("amulet")||r.includes("médaillon")?t.jsx(il,{primaryColor:n.primary,secondaryColor:n.secondary,gemColor:"#9370DB",size:s}):r.includes("collier")||r.includes("necklace")?t.jsx(sl,{primaryColor:"#C0C0C0",secondaryColor:"#A9A9A9",gemColor:"#DC143C",size:s}):r.includes("bracelet")?t.jsx(rl,{primaryColor:n.primary,secondaryColor:n.secondary,gemColor:"#00CED1",size:s}):r.includes("couronne")||r.includes("crown")||r.includes("diadème")?t.jsx(ll,{primaryColor:n.primary,secondaryColor:n.secondary,gemColor:"#FF0000",size:s}):t.jsx(pe,{primaryColor:n.primary,secondaryColor:n.secondary,gemColor:"#4169E1",size:s});default:return t.jsx(pe,{primaryColor:n.primary,secondaryColor:n.secondary,gemColor:"#4169E1",size:s})}},ol=o.div`
  width: ${e=>e.$size}px;
  height: ${e=>e.$size}px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background: ${e=>{const i=A(e.$quality);return`linear-gradient(135deg, ${i.primary}22 0%, ${i.secondary}33 100%)`}};
  border: 2px solid ${e=>A(e.$quality).primary};
  box-shadow: 0 2px 8px ${e=>A(e.$quality).primary}44;
  
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 3px;
    background: radial-gradient(
      circle at 30% 30%,
      ${e=>A(e.$quality).primary}11 0%,
      transparent 70%
    );
  }
`,xe=({itemType:e,itemName:i="",quality:s="common",size:r=48})=>{const l=Math.floor(r*.65);return t.jsx(ol,{$quality:s,$size:r,children:t.jsx(nl,{itemType:e,itemName:i,quality:"common",size:l})})},al=({liquidColor:e="#DC143C",glassColor:i="#87CEEB",size:s=24})=>t.jsxs("svg",{width:s,height:s,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("path",{d:"M10 3L10 6L8 8L8 18C8 19 9 20 10 20L14 20C15 20 16 19 16 18L16 8L14 6L14 3L10 3Z",fill:i,fillOpacity:"0.3",stroke:i,strokeWidth:"0.8"}),t.jsx("path",{d:"M8.5 12L8.5 18C8.5 18.5 9 19 10 19L14 19C15 19 15.5 18.5 15.5 18L15.5 12L8.5 12Z",fill:e,opacity:"0.8"}),t.jsx("ellipse",{cx:"12",cy:"13",rx:"2",ry:"1",fill:e,opacity:"0.4"}),t.jsx("rect",{x:"10",y:"2",width:"4",height:"1.5",fill:"#8B4513",rx:"0.5"}),t.jsx("rect",{x:"10.5",y:"3",width:"3",height:"0.5",fill:"#654321"}),t.jsx("path",{d:"M9 8L9 16",stroke:"white",strokeWidth:"0.5",opacity:"0.5"})]}),cl=({liquidColor:e="#4169E1",glassColor:i="#87CEEB",size:s=24})=>t.jsxs("svg",{width:s,height:s,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("path",{d:"M10 3L10 6L8 8L8 18C8 19 9 20 10 20L14 20C15 20 16 19 16 18L16 8L14 6L14 3L10 3Z",fill:i,fillOpacity:"0.3",stroke:i,strokeWidth:"0.8"}),t.jsx("path",{d:"M8.5 12L8.5 18C8.5 18.5 9 19 10 19L14 19C15 19 15.5 18.5 15.5 18L15.5 12L8.5 12Z",fill:e,opacity:"0.8"}),t.jsx("circle",{cx:"10",cy:"14",r:"0.5",fill:"#E0FFFF",opacity:"0.8"}),t.jsx("circle",{cx:"13",cy:"15",r:"0.4",fill:"#E0FFFF",opacity:"0.8"}),t.jsx("circle",{cx:"11.5",cy:"16.5",r:"0.3",fill:"#E0FFFF",opacity:"0.8"}),t.jsx("rect",{x:"10",y:"2",width:"4",height:"1.5",fill:"#8B4513",rx:"0.5"}),t.jsx("rect",{x:"10.5",y:"3",width:"3",height:"0.5",fill:"#654321"}),t.jsx("path",{d:"M9 8L9 16",stroke:"white",strokeWidth:"0.5",opacity:"0.5"})]}),dl=({liquidColor:e="#9370DB",glassColor:i="#87CEEB",size:s=24})=>t.jsxs("svg",{width:s,height:s,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("ellipse",{cx:"12",cy:"13",rx:"5",ry:"6",fill:i,fillOpacity:"0.3",stroke:i,strokeWidth:"0.8"}),t.jsx("ellipse",{cx:"12",cy:"14.5",rx:"4.5",ry:"4.5",fill:e,opacity:"0.8"}),t.jsx("rect",{x:"11",y:"6",width:"2",height:"2",fill:i,fillOpacity:"0.3",stroke:i,strokeWidth:"0.6"}),t.jsx("rect",{x:"10.5",y:"4.5",width:"3",height:"1.8",fill:"#8B4513",rx:"0.5"}),t.jsx("ellipse",{cx:"10",cy:"12",rx:"1.5",ry:"2",fill:"white",opacity:"0.4"})]}),xl=o.div`
  width: ${e=>e.$size}px;
  height: ${e=>e.$size}px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background: ${e=>{const i=A(X(e.$quality));return`linear-gradient(135deg, ${i.primary}22 0%, ${i.secondary}33 100%)`}};
  border: 2px solid ${e=>A(X(e.$quality)).primary};
  box-shadow: 0 2px 8px ${e=>A(X(e.$quality)).primary}44;
  
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 3px;
    background: radial-gradient(
      circle at 30% 30%,
      ${e=>A(X(e.$quality)).primary}11 0%,
      transparent 70%
    );
  }
`,wt=({potion:e,size:i=48})=>{const s=Math.floor(i*.65),r=a=>{switch(a.id.split("-").pop()){case"strength":switch(a.quality){case"minor":return"#CD5C5C";case"lesser":return"#DC143C";case"normal":return"#FF0000";case"greater":return"#FF4500";case"superior":return"#FF6347";case"ultimate":return"#FF7F50";default:return"#DC143C"}case"agility":switch(a.quality){case"minor":return"#4682B4";case"lesser":return"#4169E1";case"normal":return"#0000FF";case"greater":return"#1E90FF";case"superior":return"#00BFFF";case"ultimate":return"#00FFFF";default:return"#4169E1"}case"intellect":switch(a.quality){case"minor":return"#6A5ACD";case"lesser":return"#7B68EE";case"normal":return"#8A2BE2";case"greater":return"#9370DB";case"superior":return"#BA55D3";case"ultimate":return"#DA70D6";default:return"#7B68EE"}case"stamina":switch(a.quality){case"minor":return"#2E8B57";case"lesser":return"#3CB371";case"normal":return"#32CD32";case"greater":return"#00FF7F";case"superior":return"#7CFC00";case"ultimate":return"#ADFF2F";default:return"#3CB371"}case"attackPower":switch(a.quality){case"minor":return"#B8860B";case"lesser":return"#DAA520";case"normal":return"#FFD700";case"greater":return"#FFA500";case"superior":return"#FF8C00";case"ultimate":return"#FF7F50";default:return"#DAA520"}case"spellPower":switch(a.quality){case"minor":return"#4B0082";case"lesser":return"#6A5ACD";case"normal":return"#8A2BE2";case"greater":return"#9400D3";case"superior":return"#9932CC";case"ultimate":return"#BA55D3";default:return"#6A5ACD"}case"critChance":switch(a.quality){case"minor":return"#708090";case"lesser":return"#778899";case"normal":return"#A9A9A9";case"greater":return"#C0C0C0";case"superior":return"#D3D3D3";case"ultimate":return"#DCDCDC";default:return"#778899"}case"luck":switch(a.quality){case"minor":return"#8B4513";case"lesser":return"#A0522D";case"normal":return"#D2691E";case"greater":return"#FF8C00";case"superior":return"#FFA500";case"ultimate":return"#FFD700";default:return"#A0522D"}default:return"#ffffffff00"}},n=(a=>{switch(a.type){case"health":return"#DC143C";case"mana":return"#4169E1";case"effect":return r(a);default:return"#ffffffff00"}})(e);return t.jsx(xl,{$quality:e.quality,$size:i,children:e.type==="health"?t.jsx(al,{liquidColor:n,size:s}):e.type==="mana"?t.jsx(cl,{liquidColor:n,size:s}):t.jsx(dl,{liquidColor:n,size:s})})},hl=({primaryColor:e="#A3A3A3",secondaryColor:i="#6B7280",accentColor:s="#FBBF24",size:r=48})=>t.jsxs("svg",{width:r,height:r,viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("ellipse",{cx:"24",cy:"30",rx:"10",ry:"12",fill:e,stroke:i,strokeWidth:"2"}),t.jsx("ellipse",{cx:"24",cy:"16",rx:"8",ry:"7",fill:e,stroke:i,strokeWidth:"2"}),t.jsx("ellipse",{cx:"20",cy:"16",rx:"2.5",ry:"2.5",fill:s,stroke:i,strokeWidth:"1"}),t.jsx("ellipse",{cx:"28",cy:"16",rx:"2.5",ry:"2.5",fill:s,stroke:i,strokeWidth:"1"}),t.jsx("circle",{cx:"20",cy:"16",r:"1",fill:"black"}),t.jsx("circle",{cx:"28",cy:"16",r:"1",fill:"black"}),t.jsx("polygon",{points:"24,19 22,22 26,22",fill:"#FBBF24",stroke:i,strokeWidth:"0.5"}),t.jsx("ellipse",{cx:"14",cy:"30",rx:"3",ry:"7",fill:i,opacity:"0.7"}),t.jsx("ellipse",{cx:"34",cy:"30",rx:"3",ry:"7",fill:i,opacity:"0.7"}),t.jsx("rect",{x:"21",y:"40",width:"2",height:"4",rx:"0.5",fill:s}),t.jsx("rect",{x:"25",y:"40",width:"2",height:"4",rx:"0.5",fill:s})]}),pl=({primaryColor:e="#F59E42",secondaryColor:i="#A16207",size:s=48})=>t.jsxs("svg",{width:s,height:s,viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("ellipse",{cx:"24",cy:"32",rx:"8",ry:"10",fill:e,stroke:i,strokeWidth:"2"}),t.jsx("ellipse",{cx:"24",cy:"18",rx:"7",ry:"7",fill:e,stroke:i,strokeWidth:"2"}),t.jsx("polygon",{points:"18,10 15,4 22,10",fill:e,stroke:i,strokeWidth:"1.5"}),t.jsx("polygon",{points:"30,10 33,4 26,10",fill:e,stroke:i,strokeWidth:"1.5"}),t.jsx("ellipse",{cx:"24",cy:"20",rx:"3.2",ry:"2.7",fill:"#fff"}),t.jsx("ellipse",{cx:"22",cy:"18",rx:"0.7",ry:"1",fill:"#222"}),t.jsx("ellipse",{cx:"26",cy:"18",rx:"0.7",ry:"1",fill:"#222"}),t.jsx("ellipse",{cx:"24",cy:"21.5",rx:"0.5",ry:"0.4",fill:"#222"}),t.jsx("ellipse",{cx:"36",cy:"40",rx:"3.5",ry:"7",fill:e,stroke:i,strokeWidth:"2"}),t.jsx("ellipse",{cx:"36",cy:"46",rx:"2.2",ry:"2.2",fill:"#fff",stroke:i,strokeWidth:"1"})]}),fl=({primaryColor:e="#6B7280",secondaryColor:i="#4B5563",accentColor:s="#F59E0B",size:r=48})=>t.jsxs("svg",{width:r,height:r,viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("path",{d:"M16 12L14 8L18 10Z",fill:e,stroke:i,strokeWidth:"1"}),t.jsx("path",{d:"M32 12L34 8L30 10Z",fill:e,stroke:i,strokeWidth:"1"}),t.jsx("ellipse",{cx:"24",cy:"18",rx:"9",ry:"8",fill:e,stroke:i,strokeWidth:"1"}),t.jsx("ellipse",{cx:"24",cy:"22",rx:"6",ry:"4",fill:i}),t.jsx("ellipse",{cx:"24",cy:"23",rx:"3",ry:"2",fill:"#1F2937"}),t.jsx("ellipse",{cx:"24",cy:"23",rx:"1.5",ry:"1",fill:"black"}),t.jsx("ellipse",{cx:"20",cy:"16",rx:"1.5",ry:"2",fill:s}),t.jsx("ellipse",{cx:"28",cy:"16",rx:"1.5",ry:"2",fill:s}),t.jsx("circle",{cx:"20",cy:"16",r:"0.8",fill:"black"}),t.jsx("circle",{cx:"28",cy:"16",r:"0.8",fill:"black"}),t.jsx("circle",{cx:"20.5",cy:"15.5",r:"0.4",fill:"white",opacity:"0.8"}),t.jsx("circle",{cx:"28.5",cy:"15.5",r:"0.4",fill:"white",opacity:"0.8"}),t.jsx("path",{d:"M22 24L21.5 26",stroke:"white",strokeWidth:"1",strokeLinecap:"round"}),t.jsx("path",{d:"M26 24L26.5 26",stroke:"white",strokeWidth:"1",strokeLinecap:"round"}),t.jsx("ellipse",{cx:"24",cy:"32",rx:"8",ry:"7",fill:e,stroke:i,strokeWidth:"1"}),t.jsx("ellipse",{cx:"24",cy:"33",rx:"5",ry:"4",fill:"#9CA3AF",opacity:"0.5"}),t.jsx("rect",{x:"18",y:"36",width:"2.5",height:"8",rx:"1",fill:i}),t.jsx("rect",{x:"27.5",y:"36",width:"2.5",height:"8",rx:"1",fill:i}),t.jsx("ellipse",{cx:"19.25",cy:"43",rx:"1.5",ry:"1",fill:"#1F2937"}),t.jsx("ellipse",{cx:"28.75",cy:"43",rx:"1.5",ry:"1",fill:"#1F2937"}),t.jsx("line",{x1:"18",y1:"43.5",x2:"17.5",y2:"44.5",stroke:i,strokeWidth:"0.5"}),t.jsx("line",{x1:"19.25",y1:"43.5",x2:"19.25",y2:"44.5",stroke:i,strokeWidth:"0.5"}),t.jsx("line",{x1:"20.5",y1:"43.5",x2:"21",y2:"44.5",stroke:i,strokeWidth:"0.5"}),t.jsx("path",{d:"M32 32Q36 30 38 26",stroke:e,strokeWidth:"2.5",strokeLinecap:"round"})]}),ul=({primaryColor:e="#8B4513",secondaryColor:i="#5D2E0F",accentColor:s="#D2691E",size:r=48})=>t.jsxs("svg",{width:r,height:r,viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("ellipse",{cx:"24",cy:"20",rx:"10",ry:"9",fill:e,stroke:i,strokeWidth:"1.5"}),t.jsx("ellipse",{cx:"17",cy:"14",rx:"2",ry:"3",fill:e,stroke:i,strokeWidth:"1"}),t.jsx("ellipse",{cx:"31",cy:"14",rx:"2",ry:"3",fill:e,stroke:i,strokeWidth:"1"}),t.jsx("ellipse",{cx:"24",cy:"24",rx:"7",ry:"5",fill:s,stroke:i,strokeWidth:"1"}),t.jsx("ellipse",{cx:"24",cy:"25",rx:"4",ry:"3",fill:i}),t.jsx("ellipse",{cx:"22",cy:"25",rx:"1",ry:"1.5",fill:"black"}),t.jsx("ellipse",{cx:"26",cy:"25",rx:"1",ry:"1.5",fill:"black"}),t.jsx("circle",{cx:"19",cy:"18",r:"1.5",fill:"black"}),t.jsx("circle",{cx:"29",cy:"18",r:"1.5",fill:"black"}),t.jsx("circle",{cx:"19.5",cy:"17.5",r:"0.5",fill:"#DC2626",opacity:"0.8"}),t.jsx("circle",{cx:"29.5",cy:"17.5",r:"0.5",fill:"#DC2626",opacity:"0.8"}),t.jsx("path",{d:"M20 26Q18 28 17 30",stroke:"white",strokeWidth:"2",strokeLinecap:"round"}),t.jsx("path",{d:"M28 26Q30 28 31 30",stroke:"white",strokeWidth:"2",strokeLinecap:"round"}),t.jsx("line",{x1:"20",y1:"13",x2:"19",y2:"10",stroke:i,strokeWidth:"1"}),t.jsx("line",{x1:"23",y1:"12",x2:"23",y2:"9",stroke:i,strokeWidth:"1"}),t.jsx("line",{x1:"26",y1:"12",x2:"26",y2:"9",stroke:i,strokeWidth:"1"}),t.jsx("line",{x1:"29",y1:"13",x2:"30",y2:"10",stroke:i,strokeWidth:"1"}),t.jsx("ellipse",{cx:"24",cy:"34",rx:"11",ry:"8",fill:e,stroke:i,strokeWidth:"1.5"}),t.jsx("rect",{x:"16",y:"38",width:"3",height:"7",rx:"1.5",fill:i}),t.jsx("rect",{x:"29",y:"38",width:"3",height:"7",rx:"1.5",fill:i}),t.jsx("rect",{x:"16",y:"43",width:"3",height:"2",fill:"#1F2937"}),t.jsx("rect",{x:"29",y:"43",width:"3",height:"2",fill:"#1F2937"}),t.jsx("path",{d:"M34 32Q36 31 37 30Q38 29 37 28",stroke:i,strokeWidth:"1.5",strokeLinecap:"round",fill:"none"})]}),gl=({primaryColor:e="#A8A29E",secondaryColor:i="#57534E",accentColor:s="#F59E0B",size:r=48})=>t.jsxs("svg",{width:r,height:r,viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("ellipse",{cx:"24",cy:"33",rx:"11",ry:"8",fill:e,stroke:i,strokeWidth:"2.2"}),t.jsx("line",{x1:"18",y1:"27",x2:"16",y2:"24",stroke:i,strokeWidth:"1.2"}),t.jsx("line",{x1:"22",y1:"26",x2:"21",y2:"22",stroke:i,strokeWidth:"1.2"}),t.jsx("line",{x1:"26",y1:"27",x2:"28",y2:"24",stroke:i,strokeWidth:"1.2"}),t.jsx("line",{x1:"30",y1:"28",x2:"32",y2:"25",stroke:i,strokeWidth:"1.2"}),t.jsx("ellipse",{cx:"24",cy:"16",rx:"8",ry:"6",fill:e,stroke:i,strokeWidth:"2"}),t.jsx("ellipse",{cx:"24",cy:"20",rx:"5",ry:"2.5",fill:"#B6A28B",stroke:i,strokeWidth:"1"}),t.jsx("ellipse",{cx:"22.5",cy:"20.5",rx:"0.5",ry:"0.8",fill:"black"}),t.jsx("ellipse",{cx:"25.5",cy:"20.5",rx:"0.5",ry:"0.8",fill:"black"}),t.jsx("ellipse",{cx:"20",cy:"15",rx:"1.2",ry:"2",fill:"#DC2626"}),t.jsx("ellipse",{cx:"28",cy:"15",rx:"1.2",ry:"2",fill:"#DC2626"}),t.jsx("ellipse",{cx:"20",cy:"15",rx:"0.7",ry:"1.2",fill:"black"}),t.jsx("ellipse",{cx:"28",cy:"15",rx:"0.7",ry:"1.2",fill:"black"}),t.jsx("line",{x1:"22",y1:"13",x2:"24",y2:"15",stroke:"#B91C1C",strokeWidth:"0.7"}),t.jsx("line",{x1:"26",y1:"14",x2:"28",y2:"16",stroke:"#B91C1C",strokeWidth:"0.7"}),t.jsx("ellipse",{cx:"16",cy:"12",rx:"2.2",ry:"3",fill:s,stroke:i,strokeWidth:"1"}),t.jsx("path",{d:"M15 10Q14 8 16 9Q17 10 16 12",stroke:i,strokeWidth:"0.8"}),t.jsx("ellipse",{cx:"32",cy:"12",rx:"2.2",ry:"3",fill:s,stroke:i,strokeWidth:"1"}),t.jsx("path",{d:"M33 10Q34 8 32 9Q31 10 32 12",stroke:i,strokeWidth:"0.8"}),t.jsx("rect",{x:"22",y:"21.5",width:"1.2",height:"2.5",rx:"0.2",fill:"white",stroke:i,strokeWidth:"0.3"}),t.jsx("rect",{x:"24.8",y:"21.5",width:"1.2",height:"2.5",rx:"0.2",fill:"white",stroke:i,strokeWidth:"0.3"}),t.jsx("rect",{x:"23.2",y:"24",width:"1",height:"1.5",rx:"0.2",fill:"#B6A28B",stroke:i,strokeWidth:"0.2"}),t.jsx("path",{d:"M34 33Q39 37 41 44Q39 45 37 43Q36 41 38 40",stroke:s,strokeWidth:"2.2"}),t.jsx("ellipse",{cx:"41",cy:"44",rx:"1.2",ry:"0.7",fill:"#F59E0B",opacity:"0.7"}),t.jsx("rect",{x:"18",y:"38",width:"2.2",height:"6",rx:"0.7",fill:i}),t.jsx("rect",{x:"27.8",y:"38",width:"2.2",height:"6",rx:"0.7",fill:i}),t.jsx("ellipse",{cx:"19",cy:"44",rx:"1",ry:"0.6",fill:"#B6A28B"}),t.jsx("ellipse",{cx:"29",cy:"44",rx:"1",ry:"0.6",fill:"#B6A28B"}),t.jsx("line",{x1:"18.5",y1:"44.5",x2:"18",y2:"45.5",stroke:i,strokeWidth:"0.5"}),t.jsx("line",{x1:"19",y1:"44.5",x2:"19",y2:"45.5",stroke:i,strokeWidth:"0.5"}),t.jsx("line",{x1:"19.5",y1:"44.5",x2:"20",y2:"45.5",stroke:i,strokeWidth:"0.5"}),t.jsx("line",{x1:"28.5",y1:"44.5",x2:"28",y2:"45.5",stroke:i,strokeWidth:"0.5"}),t.jsx("line",{x1:"29",y1:"44.5",x2:"29",y2:"45.5",stroke:i,strokeWidth:"0.5"}),t.jsx("line",{x1:"29.5",y1:"44.5",x2:"30",y2:"45.5",stroke:i,strokeWidth:"0.5"}),t.jsx("ellipse",{cx:"24",cy:"33",rx:"13",ry:"10",fill:i,opacity:"0.08"})]}),ml=({primaryColor:e="#4B5563",secondaryColor:i="#1F2937",accentColor:s="#FBBF24",size:r=48})=>t.jsxs("svg",{width:r,height:r,viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("path",{d:"M24 8Q16 14 14 22L34 22Q32 14 24 8Z",fill:e,stroke:i,strokeWidth:"1.2"}),t.jsx("ellipse",{cx:"24",cy:"24",rx:"7",ry:"5.5",fill:e,stroke:i,strokeWidth:"0.7"}),t.jsx("rect",{x:"17",y:"20",width:"14",height:"5",rx:"1",fill:i,opacity:"0.7"}),t.jsx("ellipse",{cx:"21",cy:"23",rx:"1.2",ry:"1",fill:s,opacity:"0.7"}),t.jsx("ellipse",{cx:"27",cy:"23",rx:"1.2",ry:"1",fill:s,opacity:"0.7"}),t.jsx("path",{d:"M26 25L28 27",stroke:s,strokeWidth:"0.7",strokeLinecap:"round"}),t.jsx("path",{d:"M18 29Q15 33 16 38L32 38Q33 33 30 29Z",fill:e,stroke:i,strokeWidth:"0.7"}),t.jsx("rect",{x:"17",y:"37",width:"14",height:"2",fill:i,opacity:"0.5"}),t.jsx("path",{d:"M19 29L29 38",stroke:i,strokeWidth:"0.7"}),t.jsx("path",{d:"M16 33Q13 36 13 41",stroke:i,strokeWidth:"1",strokeLinecap:"round"}),t.jsx("path",{d:"M32 33Q35 36 35 41",stroke:i,strokeWidth:"1",strokeLinecap:"round"}),t.jsx("path",{d:"M35 41Q39 39 36 36Q33 33 35 41Z",fill:i,stroke:e,strokeWidth:"0.7"}),t.jsx("ellipse",{cx:"21",cy:"39",rx:"1",ry:"0.7",fill:i,opacity:"0.7"}),t.jsx("rect",{x:"19",y:"39",width:"3",height:"7",fill:e,stroke:i,strokeWidth:"0.3"}),t.jsx("rect",{x:"26",y:"39",width:"3",height:"7",fill:e,stroke:i,strokeWidth:"0.3"}),t.jsx("rect",{x:"18.5",y:"45",width:"3.5",height:"2.5",rx:"0.5",fill:i,opacity:"0.7"}),t.jsx("rect",{x:"26.5",y:"45",width:"3.5",height:"2.5",rx:"0.5",fill:i,opacity:"0.7"})]}),yl=({primaryColor:e="#4B5563",secondaryColor:i="#1F2937",accentColor:s="#DC2626",size:r=48})=>t.jsxs("svg",{width:r,height:r,viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("path",{d:"M24 10Q16 12 14 18L34 18Q32 12 24 10Z",fill:i,stroke:"black",strokeWidth:"1"}),t.jsx("path",{d:"M14 18L12 22L24 24L36 22L34 18Z",fill:i,stroke:"black",strokeWidth:"1"}),t.jsx("ellipse",{cx:"24",cy:"20",rx:"7",ry:"5",fill:"black",opacity:"0.4"}),t.jsx("rect",{x:"16",y:"18",width:"16",height:"5",rx:"1",fill:i,stroke:"black",strokeWidth:"0.8"}),t.jsx("ellipse",{cx:"20",cy:"20",rx:"2",ry:"1.5",fill:s,opacity:"0.8"}),t.jsx("ellipse",{cx:"28",cy:"20",rx:"2",ry:"1.5",fill:s,opacity:"0.8"}),t.jsx("circle",{cx:"20",cy:"20",r:"0.8",fill:"black"}),t.jsx("circle",{cx:"28",cy:"20",r:"0.8",fill:"black"}),t.jsx("ellipse",{cx:"24",cy:"24",rx:"6",ry:"5",fill:"#D1A684",stroke:"black",strokeWidth:"0.5"}),t.jsx("path",{d:"M26 22L28 25",stroke:s,strokeWidth:"0.8",strokeLinecap:"round"}),t.jsx("path",{d:"M18 28Q16 30 16 35L32 35Q32 30 30 28Z",fill:i,stroke:"black",strokeWidth:"1"}),t.jsx("rect",{x:"16",y:"34",width:"16",height:"2",fill:"#8B4513",stroke:"black",strokeWidth:"0.5"}),t.jsx("rect",{x:"23",y:"33.5",width:"2",height:"3",fill:s,stroke:"black",strokeWidth:"0.3"}),t.jsx("path",{d:"M18 28L28 35",stroke:"#6B4423",strokeWidth:"2"}),t.jsx("path",{d:"M18 28L28 35",stroke:"#8B6F47",strokeWidth:"1.2"}),t.jsx("path",{d:"M16 30Q12 32 10 36",stroke:e,strokeWidth:"2.5",strokeLinecap:"round"}),t.jsx("path",{d:"M32 30Q36 32 38 36",stroke:e,strokeWidth:"2.5",strokeLinecap:"round"}),t.jsx("line",{x1:"38",y1:"36",x2:"42",y2:"38",stroke:"#9CA3AF",strokeWidth:"1.5",strokeLinecap:"round"}),t.jsx("path",{d:"M42 38L44 40",stroke:"#6B4423",strokeWidth:"1.2",strokeLinecap:"round"}),t.jsx("circle",{cx:"42",cy:"38",r:"0.8",fill:s}),t.jsx("circle",{cx:"20",cy:"36",r:"1.5",fill:"#FBBF24",stroke:"#F59E0B",strokeWidth:"0.5"}),t.jsx("path",{d:"M20 34.5L20 35.5",stroke:"#F59E0B",strokeWidth:"0.5"}),t.jsx("rect",{x:"18",y:"36",width:"3",height:"8",fill:i,stroke:"black",strokeWidth:"0.8"}),t.jsx("rect",{x:"27",y:"36",width:"3",height:"8",fill:i,stroke:"black",strokeWidth:"0.8"}),t.jsx("rect",{x:"17.5",y:"42",width:"4",height:"3",rx:"0.5",fill:"#4B5563",stroke:"black",strokeWidth:"0.5"}),t.jsx("rect",{x:"26.5",y:"42",width:"4",height:"3",rx:"0.5",fill:"#4B5563",stroke:"black",strokeWidth:"0.5"})]}),jl=({primaryColor:e="#4ADE80",secondaryColor:i="#22C55E",accentColor:s="#FDE047",size:r=48})=>t.jsxs("svg",{width:r,height:r,viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("ellipse",{cx:"24",cy:"20",rx:"9",ry:"10",fill:e,stroke:i,strokeWidth:"1.5"}),t.jsx("path",{d:"M24 10L22 13L24 12L26 13Z",fill:"#EF4444",stroke:"#DC2626",strokeWidth:"0.5"}),t.jsx("path",{d:"M24 12L22.5 15L24 14L25.5 15Z",fill:"#F97316",stroke:"#EA580C",strokeWidth:"0.5"}),t.jsx("path",{d:"M24 14L23 17L24 16L25 17Z",fill:"#FBBF24",stroke:"#F59E0B",strokeWidth:"0.5"}),t.jsx("circle",{cx:"20",cy:"18",r:"3.5",fill:s,stroke:i,strokeWidth:"1"}),t.jsx("circle",{cx:"28",cy:"18",r:"3.5",fill:s,stroke:i,strokeWidth:"1"}),t.jsx("circle",{cx:"20",cy:"18",r:"2",fill:"black"}),t.jsx("circle",{cx:"28",cy:"18",r:"2",fill:"black"}),t.jsx("circle",{cx:"20.8",cy:"17.2",r:"0.8",fill:"white"}),t.jsx("circle",{cx:"28.8",cy:"17.2",r:"0.8",fill:"white"}),t.jsx("path",{d:"M24 24Q20 26 18 25Q20 27 24 27Q28 27 30 25Q28 26 24 24Z",fill:i,stroke:i,strokeWidth:"1"}),t.jsx("path",{d:"M20 25L19.5 26.5L20 26Z",fill:"white"}),t.jsx("path",{d:"M22 25L21.5 27L22 26Z",fill:"white"}),t.jsx("path",{d:"M26 25L26.5 27L26 26Z",fill:"white"}),t.jsx("path",{d:"M28 25L28.5 26.5L28 26Z",fill:"white"}),t.jsx("ellipse",{cx:"14",cy:"20",rx:"3",ry:"4",fill:e,stroke:i,strokeWidth:"1",transform:"rotate(-20 14 20)"}),t.jsx("ellipse",{cx:"34",cy:"20",rx:"3",ry:"4",fill:e,stroke:i,strokeWidth:"1",transform:"rotate(20 34 20)"}),t.jsx("path",{d:"M14 18Q12 20 14 22",stroke:i,strokeWidth:"0.5",fill:"none",opacity:"0.5"}),t.jsx("path",{d:"M34 18Q36 20 34 22",stroke:i,strokeWidth:"0.5",fill:"none",opacity:"0.5"}),t.jsx("ellipse",{cx:"24",cy:"34",rx:"7",ry:"8",fill:e,stroke:i,strokeWidth:"1.5"}),t.jsx("ellipse",{cx:"24",cy:"35",rx:"4.5",ry:"5",fill:s,opacity:"0.3"}),t.jsx("path",{d:"M17 30Q14 32 13 36",stroke:e,strokeWidth:"2.5",strokeLinecap:"round"}),t.jsx("path",{d:"M31 30Q34 32 35 36",stroke:e,strokeWidth:"2.5",strokeLinecap:"round"}),t.jsx("circle",{cx:"13",cy:"36",r:"2",fill:e,stroke:i,strokeWidth:"0.8"}),t.jsx("circle",{cx:"35",cy:"36",r:"2",fill:e,stroke:i,strokeWidth:"0.8"}),t.jsx("path",{d:"M12 35L11 34M13 35L13 34M14 35L15 34",stroke:i,strokeWidth:"0.5"}),t.jsx("path",{d:"M36 35L37 34M35 35L35 34M34 35L33 34",stroke:i,strokeWidth:"0.5"}),t.jsx("ellipse",{cx:"20",cy:"42",rx:"2.5",ry:"1.5",fill:e,stroke:i,strokeWidth:"0.8"}),t.jsx("ellipse",{cx:"28",cy:"42",rx:"2.5",ry:"1.5",fill:e,stroke:i,strokeWidth:"0.8"})]}),kl=({primaryColor:e="#E8E8E8",secondaryColor:i="#D3D3D3",accentColor:s="#A9A9A9",size:r=48})=>t.jsxs("svg",{width:r,height:r,viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("ellipse",{cx:"24",cy:"16",rx:"9",ry:"10",fill:e,stroke:s,strokeWidth:"1.5"}),t.jsx("path",{d:"M17 14Q24 13 31 14",stroke:s,strokeWidth:"0.8",opacity:"0.5"}),t.jsx("path",{d:"M16 18Q24 17 32 18",stroke:s,strokeWidth:"0.8",opacity:"0.5"}),t.jsx("ellipse",{cx:"20",cy:"15",rx:"2.5",ry:"3.5",fill:"black"}),t.jsx("ellipse",{cx:"28",cy:"15",rx:"2.5",ry:"3.5",fill:"black"}),t.jsx("circle",{cx:"20",cy:"14.5",r:"1.2",fill:"#DC2626",opacity:"0.9"}),t.jsx("circle",{cx:"28",cy:"14.5",r:"1.2",fill:"#DC2626",opacity:"0.9"}),t.jsx("circle",{cx:"20.5",cy:"14",r:"0.5",fill:"#FCA5A5",opacity:"0.8"}),t.jsx("circle",{cx:"28.5",cy:"14",r:"0.5",fill:"#FCA5A5",opacity:"0.8"}),t.jsx("line",{x1:"17",y1:"12",x2:"19",y2:"14",stroke:s,strokeWidth:"0.6",opacity:"0.6"}),t.jsx("line",{x1:"29",y1:"12",x2:"31",y2:"14",stroke:s,strokeWidth:"0.6",opacity:"0.6"}),t.jsx("path",{d:"M24 18L22 21L26 21Z",fill:"black"}),t.jsx("path",{d:"M23 21L22.5 22M25 21L25.5 22",stroke:s,strokeWidth:"0.5",opacity:"0.5"}),t.jsx("path",{d:"M18 22Q24 23 30 22",stroke:s,strokeWidth:"1",fill:"none"}),t.jsx("rect",{x:"19",y:"22",width:"1.2",height:"2.5",rx:"0.2",fill:i,stroke:s,strokeWidth:"0.3"}),t.jsx("rect",{x:"21",y:"22",width:"1.2",height:"2.5",rx:"0.2",fill:i,stroke:s,strokeWidth:"0.3"}),t.jsx("rect",{x:"23",y:"22",width:"1.2",height:"2.8",rx:"0.2",fill:e,stroke:s,strokeWidth:"0.3"}),t.jsx("rect",{x:"25",y:"22",width:"1.2",height:"2.8",rx:"0.2",fill:e,stroke:s,strokeWidth:"0.3"}),t.jsx("rect",{x:"27",y:"22",width:"1.2",height:"2.5",rx:"0.2",fill:i,stroke:s,strokeWidth:"0.3"}),t.jsx("rect",{x:"20",y:"24.5",width:"1",height:"2",rx:"0.2",fill:i,opacity:"0.7"}),t.jsx("rect",{x:"22",y:"24.5",width:"1",height:"2",rx:"0.2",fill:i,opacity:"0.7"}),t.jsx("rect",{x:"26",y:"24.5",width:"1",height:"2",rx:"0.2",fill:i,opacity:"0.7"}),t.jsx("rect",{x:"22.5",y:"26",width:"3",height:"2",rx:"0.5",fill:e,stroke:s,strokeWidth:"0.5"}),t.jsx("circle",{cx:"24",cy:"27",r:"1",fill:i}),t.jsx("rect",{x:"22.5",y:"28",width:"3",height:"2",rx:"0.5",fill:e,stroke:s,strokeWidth:"0.5"}),t.jsx("circle",{cx:"24",cy:"29",r:"1",fill:i}),t.jsx("rect",{x:"22.5",y:"30",width:"3",height:"2",rx:"0.5",fill:e,stroke:s,strokeWidth:"0.5"}),t.jsx("circle",{cx:"24",cy:"31",r:"1",fill:i}),t.jsx("ellipse",{cx:"24",cy:"35",rx:"7",ry:"6",fill:"none",stroke:e,strokeWidth:"1.8"}),t.jsx("line",{x1:"24",y1:"30",x2:"24",y2:"40",stroke:e,strokeWidth:"1.8"}),t.jsx("path",{d:"M19 32Q24 31 29 32",stroke:e,strokeWidth:"1.2",fill:"none"}),t.jsx("path",{d:"M18 34Q24 33 30 34",stroke:e,strokeWidth:"1.2",fill:"none"}),t.jsx("path",{d:"M18 36Q24 35 30 36",stroke:e,strokeWidth:"1.2",fill:"none"}),t.jsx("path",{d:"M19 38Q24 37 29 38",stroke:e,strokeWidth:"1.2",fill:"none"}),t.jsx("line",{x1:"18",y1:"27",x2:"24",y2:"26",stroke:e,strokeWidth:"1.5"}),t.jsx("line",{x1:"30",y1:"27",x2:"24",y2:"26",stroke:e,strokeWidth:"1.5"}),t.jsx("line",{x1:"18",y1:"28",x2:"14",y2:"33",stroke:e,strokeWidth:"2",strokeLinecap:"round"}),t.jsx("circle",{cx:"14",cy:"33",r:"1.2",fill:i,stroke:s,strokeWidth:"0.5"}),t.jsx("line",{x1:"14",y1:"33",x2:"11",y2:"38",stroke:e,strokeWidth:"1.8",strokeLinecap:"round"}),t.jsx("line",{x1:"30",y1:"28",x2:"34",y2:"33",stroke:e,strokeWidth:"2",strokeLinecap:"round"}),t.jsx("circle",{cx:"34",cy:"33",r:"1.2",fill:i,stroke:s,strokeWidth:"0.5"}),t.jsx("line",{x1:"34",y1:"33",x2:"37",y2:"38",stroke:e,strokeWidth:"1.8",strokeLinecap:"round"}),t.jsx("path",{d:"M10 38L9 40M11 38L11 41M12 38L13 40",stroke:e,strokeWidth:"1.2",strokeLinecap:"round"}),t.jsx("path",{d:"M36 38L35 40M37 38L37 41M38 38L39 40",stroke:e,strokeWidth:"1.2",strokeLinecap:"round"}),t.jsx("ellipse",{cx:"24",cy:"41",rx:"5",ry:"3",fill:"none",stroke:e,strokeWidth:"1.5"}),t.jsx("line",{x1:"21",y1:"42",x2:"19",y2:"46",stroke:e,strokeWidth:"1.8",strokeLinecap:"round"}),t.jsx("line",{x1:"27",y1:"42",x2:"29",y2:"46",stroke:e,strokeWidth:"1.8",strokeLinecap:"round"}),t.jsx("circle",{cx:"24",cy:"30",r:"16",fill:"#DC2626",opacity:"0.05"}),t.jsx("circle",{cx:"15",cy:"20",r:"1",fill:"#DC2626",opacity:"0.3"}),t.jsx("circle",{cx:"33",cy:"20",r:"1",fill:"#DC2626",opacity:"0.3"})]}),wl=({primaryColor:e="#F3F4F6",secondaryColor:i="#A3A3A3",accentColor:s="#DC2626",size:r=48})=>t.jsxs("svg",{width:r,height:r,viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("path",{d:"M12 24Q10 38 24 40Q38 38 36 24Q35 16 24 12Q13 16 12 24Z",fill:e,opacity:"0.85",stroke:i,strokeWidth:"1.5"}),t.jsx("ellipse",{cx:"24",cy:"18",rx:"7",ry:"6",fill:e,opacity:"0.95",stroke:i,strokeWidth:"1.2"}),t.jsx("ellipse",{cx:"21",cy:"17",rx:"1.5",ry:"2.2",fill:s,opacity:"0.85"}),t.jsx("ellipse",{cx:"27",cy:"17",rx:"1.5",ry:"2.2",fill:s,opacity:"0.85"}),t.jsx("ellipse",{cx:"21",cy:"17",rx:"0.7",ry:"1.2",fill:"white",opacity:"0.7"}),t.jsx("ellipse",{cx:"27",cy:"17",rx:"0.7",ry:"1.2",fill:"white",opacity:"0.7"}),t.jsx("path",{d:"M22 20Q24 23 26 20Q24 22 22 20Z",fill:"black",opacity:"0.5"}),t.jsx("path",{d:"M15 22Q10 28 16 34Q18 36 19 34Q17 32 15 22Z",fill:e,opacity:"0.6"}),t.jsx("path",{d:"M33 22Q38 28 32 34Q30 36 29 34Q31 32 33 22Z",fill:e,opacity:"0.6"}),t.jsx("path",{d:"M14 38Q18 44 24 41Q30 44 34 38",stroke:i,strokeWidth:"1.5"}),t.jsx("path",{d:"M18 41Q20 44 22 41",stroke:i,strokeWidth:"1",opacity:"0.7"}),t.jsx("path",{d:"M26 41Q28 44 30 41",stroke:i,strokeWidth:"1",opacity:"0.7"}),t.jsx("ellipse",{cx:"24",cy:"30",rx:"14",ry:"18",fill:s,opacity:"0.07"}),t.jsx("ellipse",{cx:"24",cy:"24",rx:"18",ry:"10",fill:e,opacity:"0.04"})]}),bl=({primaryColor:e="#A3A3A3",secondaryColor:i="#57534E",accentColor:s="#F59E0B",size:r=48})=>t.jsxs("svg",{width:r,height:r,viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("ellipse",{cx:"24",cy:"32",rx:"9",ry:"8",fill:e,stroke:i,strokeWidth:"2"}),t.jsx("ellipse",{cx:"24",cy:"18",rx:"7",ry:"6",fill:e,stroke:i,strokeWidth:"2"}),t.jsx("ellipse",{cx:"21",cy:"16",rx:"1.2",ry:"2",fill:s}),t.jsx("ellipse",{cx:"27",cy:"16",rx:"1.2",ry:"2",fill:s}),t.jsx("ellipse",{cx:"14",cy:"28",rx:"3",ry:"7",fill:i,opacity:"0.7"}),t.jsx("ellipse",{cx:"34",cy:"28",rx:"3",ry:"7",fill:i,opacity:"0.7"}),t.jsx("rect",{x:"21",y:"38",width:"2",height:"4",rx:"0.5",fill:i}),t.jsx("rect",{x:"25",y:"38",width:"2",height:"4",rx:"0.5",fill:i})]}),vl=({primaryColor:e="#6B7C59",secondaryColor:i="#4A5842",accentColor:s="#8B4513",size:r=48})=>t.jsxs("svg",{width:r,height:r,viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("ellipse",{cx:"24",cy:"34",rx:"10",ry:"11",fill:e,stroke:i,strokeWidth:"1.5",opacity:"0.95"}),t.jsx("path",{d:"M18 30L20 32",stroke:"#8B0000",strokeWidth:"1.5",opacity:"0.7"}),t.jsx("path",{d:"M28 32L30 34",stroke:"#8B0000",strokeWidth:"1.5",opacity:"0.7"}),t.jsx("ellipse",{cx:"20",cy:"32",rx:"2",ry:"3",fill:"#4A5842",opacity:"0.6"}),t.jsx("ellipse",{cx:"28",cy:"35",rx:"2.5",ry:"3",fill:"#4A5842",opacity:"0.6"}),t.jsx("path",{d:"M20 34Q24 33 28 34",stroke:"#D3D3D3",strokeWidth:"0.8",opacity:"0.4"}),t.jsx("path",{d:"M20 36Q24 35 28 36",stroke:"#D3D3D3",strokeWidth:"0.8",opacity:"0.4"}),t.jsx("ellipse",{cx:"24",cy:"16",rx:"8.5",ry:"9",fill:e,stroke:i,strokeWidth:"1.5"}),t.jsx("path",{d:"M17 14Q24 13 31 14",stroke:i,strokeWidth:"1",opacity:"0.5"}),t.jsx("ellipse",{cx:"19",cy:"12",rx:"1.5",ry:"2",fill:"#4A5842",opacity:"0.5"}),t.jsx("ellipse",{cx:"29",cy:"13",rx:"1.5",ry:"2",fill:"#4A5842",opacity:"0.5"}),t.jsx("path",{d:"M17 9L16 6",stroke:s,strokeWidth:"2",strokeLinecap:"round",opacity:"0.7"}),t.jsx("path",{d:"M20 8L19 5",stroke:s,strokeWidth:"1.8",strokeLinecap:"round",opacity:"0.6"}),t.jsx("path",{d:"M24 7L24 4",stroke:s,strokeWidth:"1.5",strokeLinecap:"round",opacity:"0.5"}),t.jsx("path",{d:"M28 8L29 5",stroke:s,strokeWidth:"1.8",strokeLinecap:"round",opacity:"0.6"}),t.jsx("path",{d:"M31 10L32 7",stroke:s,strokeWidth:"2",strokeLinecap:"round",opacity:"0.7"}),t.jsx("ellipse",{cx:"20",cy:"15",rx:"2.5",ry:"3",fill:"#F5F5DC",opacity:"0.9"}),t.jsx("ellipse",{cx:"28",cy:"15",rx:"2.5",ry:"3",fill:"#F5F5DC",opacity:"0.9"}),t.jsx("circle",{cx:"20",cy:"15.5",r:"1.5",fill:"#696969",opacity:"0.6"}),t.jsx("circle",{cx:"28",cy:"15.5",r:"1.5",fill:"#696969",opacity:"0.6"}),t.jsx("line",{x1:"18",y1:"14",x2:"17",y2:"15",stroke:"#8B0000",strokeWidth:"0.5",opacity:"0.6"}),t.jsx("line",{x1:"30",y1:"14",x2:"31",y2:"15",stroke:"#8B0000",strokeWidth:"0.5",opacity:"0.6"}),t.jsx("ellipse",{cx:"24",cy:"21",rx:"4",ry:"2.5",fill:"black",opacity:"0.7"}),t.jsx("path",{d:"M21 20Q24 22 27 20",stroke:"#4A5842",strokeWidth:"1",fill:"none"}),t.jsx("rect",{x:"21",y:"19.5",width:"1.2",height:"2",rx:"0.2",fill:"#D2B48C",opacity:"0.8"}),t.jsx("rect",{x:"23.5",y:"19.5",width:"1",height:"1.5",rx:"0.2",fill:"#D2B48C",opacity:"0.7"}),t.jsx("rect",{x:"25.5",y:"19.5",width:"1.2",height:"2",rx:"0.2",fill:"#D2B48C",opacity:"0.8"}),t.jsx("ellipse",{cx:"28",cy:"18",rx:"1.5",ry:"1",fill:"#8B0000",opacity:"0.6"}),t.jsx("path",{d:"M17 18L19 20",stroke:"#8B0000",strokeWidth:"1.2",opacity:"0.6"}),t.jsx("circle",{cx:"26",cy:"12",r:"0.8",fill:"#8B0000",opacity:"0.5"}),t.jsx("path",{d:"M24 17L23 19L25 19Z",fill:"#4A5842",opacity:"0.6"}),t.jsx("path",{d:"M15 30Q12 32 10 35",stroke:e,strokeWidth:"3",strokeLinecap:"round"}),t.jsx("path",{d:"M33 30Q36 32 38 35",stroke:e,strokeWidth:"3",strokeLinecap:"round"}),t.jsx("path",{d:"M12 33L11 34",stroke:"#4A5842",strokeWidth:"1.5",opacity:"0.5"}),t.jsx("path",{d:"M36 33L37 34",stroke:"#4A5842",strokeWidth:"1.5",opacity:"0.5"}),t.jsx("ellipse",{cx:"10",cy:"35",rx:"2",ry:"2.5",fill:e,stroke:i,strokeWidth:"1"}),t.jsx("ellipse",{cx:"38",cy:"35",rx:"2",ry:"2.5",fill:e,stroke:i,strokeWidth:"1"}),t.jsx("path",{d:"M9 36L8 38M10 36L10 39M11 36L12 38",stroke:i,strokeWidth:"1.2",strokeLinecap:"round"}),t.jsx("path",{d:"M37 36L36 38M38 36L38 39M39 36L40 38",stroke:i,strokeWidth:"1.2",strokeLinecap:"round"}),t.jsx("circle",{cx:"8",cy:"38",r:"0.4",fill:"black"}),t.jsx("circle",{cx:"10",cy:"39",r:"0.4",fill:"black"}),t.jsx("circle",{cx:"12",cy:"38",r:"0.4",fill:"black"}),t.jsx("circle",{cx:"36",cy:"38",r:"0.4",fill:"black"}),t.jsx("circle",{cx:"38",cy:"39",r:"0.4",fill:"black"}),t.jsx("circle",{cx:"40",cy:"38",r:"0.4",fill:"black"}),t.jsx("path",{d:"M18 40Q20 42 22 41",stroke:s,strokeWidth:"1.5",fill:"none",opacity:"0.6"}),t.jsx("path",{d:"M26 40Q28 42 30 41",stroke:s,strokeWidth:"1.5",fill:"none",opacity:"0.6"}),t.jsx("circle",{cx:"22",cy:"28",r:"1.2",fill:"#8B0000",opacity:"0.5"}),t.jsx("circle",{cx:"26",cy:"31",r:"1",fill:"#8B0000",opacity:"0.5"}),t.jsx("circle",{cx:"24",cy:"36",r:"0.8",fill:"#4A5842",opacity:"0.4"}),t.jsx("ellipse",{cx:"20",cy:"38",rx:"1.5",ry:"1",fill:"#4A5842",opacity:"0.3"}),t.jsx("path",{d:"M20 42Q19 44 18 46",stroke:e,strokeWidth:"2.5",strokeLinecap:"round"}),t.jsx("path",{d:"M28 42Q29 44 30 46",stroke:e,strokeWidth:"2.5",strokeLinecap:"round"}),t.jsx("circle",{cx:"14",cy:"20",r:"0.6",fill:"black",opacity:"0.4"}),t.jsx("circle",{cx:"34",cy:"22",r:"0.6",fill:"black",opacity:"0.4"}),t.jsx("circle",{cx:"18",cy:"26",r:"0.5",fill:"black",opacity:"0.4"}),t.jsx("ellipse",{cx:"24",cy:"30",rx:"14",ry:"18",fill:"#4A5842",opacity:"0.08"})]}),$l=({primaryColor:e="#A7F3D0",secondaryColor:i="#38BDF8",accentColor:s="#F0F9FF",size:r=64})=>t.jsxs("svg",{width:r,height:r,viewBox:"0 0 64 64",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("defs",{children:t.jsxs("radialGradient",{id:"windTornado",cx:"24",cy:"24",r:"20",gradientUnits:"userSpaceOnUse",children:[t.jsx("stop",{offset:"0%",stopColor:s}),t.jsx("stop",{offset:"60%",stopColor:e}),t.jsx("stop",{offset:"100%",stopColor:i})]})}),t.jsx("path",{d:"M32 60C44 52 52 44 32 38C12 44 20 52 32 60Z",fill:"url(#windTornado)",stroke:i,strokeWidth:"2.5"}),t.jsx("path",{d:"M32 60C38 54 44 48 32 44C20 48 26 54 32 60Z",fill:s,opacity:"0.3"}),t.jsx("ellipse",{cx:"20",cy:"44",rx:"7",ry:"3.5",fill:s,opacity:"0.7"}),t.jsx("ellipse",{cx:"44",cy:"44",rx:"6",ry:"3",fill:s,opacity:"0.7"}),t.jsx("ellipse",{cx:"32",cy:"28",rx:"10",ry:"4",fill:s,opacity:"0.5"}),t.jsx("ellipse",{cx:"32",cy:"52",rx:"12",ry:"3.5",fill:e,opacity:"0.2"}),t.jsx("ellipse",{cx:"32",cy:"56",rx:"21",ry:"9",fill:e,opacity:"0.08"}),t.jsx("ellipse",{cx:"28",cy:"36",rx:"2.2",ry:"3.2",fill:"#18181B"}),t.jsx("ellipse",{cx:"36",cy:"36",rx:"2.2",ry:"3.2",fill:"#18181B"}),t.jsx("circle",{cx:"28",cy:"36",r:"1.2",fill:i}),t.jsx("circle",{cx:"36",cy:"36",r:"1.2",fill:i})]}),Bl=({primaryColor:e="#A3A3A3",secondaryColor:i="#78716C",accentColor:s="#D6D3D1",size:r=64})=>t.jsxs("svg",{width:r,height:r,viewBox:"0 0 64 64",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("defs",{children:t.jsxs("radialGradient",{id:"rockBody",cx:"24",cy:"28",r:"18",gradientUnits:"userSpaceOnUse",children:[t.jsx("stop",{offset:"0%",stopColor:s}),t.jsx("stop",{offset:"60%",stopColor:e}),t.jsx("stop",{offset:"100%",stopColor:i})]})}),t.jsx("ellipse",{cx:"32",cy:"44",rx:"18",ry:"12",fill:"url(#rockBody)",stroke:i,strokeWidth:"2.5"}),t.jsx("ellipse",{cx:"20",cy:"50",rx:"7",ry:"4",fill:e,opacity:"0.7"}),t.jsx("ellipse",{cx:"44",cy:"50",rx:"6",ry:"3.5",fill:e,opacity:"0.7"}),t.jsx("ellipse",{cx:"38",cy:"34",rx:"4",ry:"2.5",fill:i,opacity:"0.6"}),t.jsx("ellipse",{cx:"26",cy:"34",rx:"3.5",ry:"2",fill:i,opacity:"0.6"}),t.jsx("ellipse",{cx:"28",cy:"40",rx:"2.2",ry:"3.2",fill:"#18181B"}),t.jsx("ellipse",{cx:"36",cy:"40",rx:"2.2",ry:"3.2",fill:"#18181B"}),t.jsx("circle",{cx:"28",cy:"40",r:"1.2",fill:e}),t.jsx("circle",{cx:"36",cy:"40",r:"1.2",fill:e}),t.jsx("path",{d:"M28 46Q32 48 36 46",stroke:s,strokeWidth:"1.5",strokeLinecap:"round"}),t.jsx("circle",{cx:"16",cy:"34",r:"1.5",fill:s,opacity:"0.5"}),t.jsx("circle",{cx:"48",cy:"34",r:"1.5",fill:s,opacity:"0.5"}),t.jsx("circle",{cx:"32",cy:"60",r:"2",fill:i,opacity:"0.3"}),t.jsx("ellipse",{cx:"32",cy:"56",rx:"21",ry:"9",fill:e,opacity:"0.08"})]}),Fl=({primaryColor:e="#60A5FA",secondaryColor:i="#3B82F6",accentColor:s="#DBEAFE",size:r=64})=>t.jsxs("svg",{width:r,height:r,viewBox:"0 0 64 64",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("defs",{children:t.jsxs("radialGradient",{id:"waterDrop",cx:"24",cy:"24",r:"20",gradientUnits:"userSpaceOnUse",children:[t.jsx("stop",{offset:"0%",stopColor:s}),t.jsx("stop",{offset:"60%",stopColor:e}),t.jsx("stop",{offset:"100%",stopColor:i})]})}),t.jsx("path",{d:"M32 60Q48 38 32 12Q16 38 32 60Z",fill:"url(#waterDrop)",stroke:i,strokeWidth:"2.5"}),t.jsx("ellipse",{cx:"32",cy:"44",rx:"10",ry:"4",fill:s,opacity:"0.3"}),t.jsx("ellipse",{cx:"32",cy:"52",rx:"7",ry:"3",fill:e,opacity:"0.15"}),t.jsx("circle",{cx:"24",cy:"56",r:"1.5",fill:s,opacity:"0.6"}),t.jsx("circle",{cx:"40",cy:"56",r:"1.5",fill:s,opacity:"0.6"}),t.jsx("circle",{cx:"32",cy:"60",r:"2",fill:s,opacity:"0.5"}),t.jsx("ellipse",{cx:"32",cy:"56",rx:"18",ry:"9",fill:e,opacity:"0.08"}),t.jsx("ellipse",{cx:"28",cy:"36",rx:"2.2",ry:"3.2",fill:"#18181B"}),t.jsx("ellipse",{cx:"36",cy:"36",rx:"2.2",ry:"3.2",fill:"#18181B"}),t.jsx("circle",{cx:"28",cy:"36",r:"1.2",fill:e}),t.jsx("circle",{cx:"36",cy:"36",r:"1.2",fill:e})]}),Ll=({primaryColor:e="#EF4444",secondaryColor:i="#F97316",accentColor:s="#FBBF24",size:r=64})=>t.jsxs("svg",{width:r,height:r,viewBox:"0 0 64 64",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("defs",{children:t.jsxs("radialGradient",{id:"flameTornado",cx:"24",cy:"24",r:"20",gradientUnits:"userSpaceOnUse",children:[t.jsx("stop",{offset:"0%",stopColor:s}),t.jsx("stop",{offset:"40%",stopColor:i}),t.jsx("stop",{offset:"100%",stopColor:e})]})}),t.jsx("path",{d:"M32 60C42 54 52 44 40 38C56 32 48 20 32 26C16 20 8 32 24 38C12 44 22 54 32 60Z",fill:"url(#flameTornado)",stroke:e,strokeWidth:"2.5"}),t.jsx("path",{d:"M32 60C36 52 44 46 32 40C20 46 28 52 32 60Z",fill:s,opacity:"0.3"}),t.jsx("ellipse",{cx:"32",cy:"44",rx:"10",ry:"4",fill:s,opacity:"0.4"}),t.jsx("circle",{cx:"24",cy:"52",r:"1.5",fill:s,opacity:"0.7"}),t.jsx("circle",{cx:"40",cy:"52",r:"1.5",fill:s,opacity:"0.7"}),t.jsx("circle",{cx:"32",cy:"56",r:"2",fill:i,opacity:"0.5"}),t.jsx("ellipse",{cx:"32",cy:"56",rx:"18",ry:"9",fill:e,opacity:"0.08"}),t.jsx("ellipse",{cx:"28",cy:"36",rx:"2.2",ry:"3.2",fill:"#18181B"}),t.jsx("ellipse",{cx:"36",cy:"36",rx:"2.2",ry:"3.2",fill:"#18181B"}),t.jsx("circle",{cx:"28",cy:"36",r:"1.2",fill:e}),t.jsx("circle",{cx:"36",cy:"36",r:"1.2",fill:e})]}),Ml=({primaryColor:e="#8B0000",secondaryColor:i="#DC143C",accentColor:s="#FFD700",size:r=48})=>t.jsxs("svg",{width:r,height:r,viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("ellipse",{cx:"24",cy:"32",rx:"10",ry:"10",fill:e,stroke:"black",strokeWidth:"1.5"}),t.jsx("ellipse",{cx:"24",cy:"16",rx:"8",ry:"7",fill:e,stroke:"black",strokeWidth:"1.5"}),t.jsx("path",{d:"M18 12Q16 8 14 10",stroke:"black",strokeWidth:"2",fill:i,strokeLinecap:"round"}),t.jsx("path",{d:"M30 12Q32 8 34 10",stroke:"black",strokeWidth:"2",fill:i,strokeLinecap:"round"}),t.jsx("ellipse",{cx:"21",cy:"15",rx:"2.5",ry:"3",fill:s}),t.jsx("ellipse",{cx:"27",cy:"15",rx:"2.5",ry:"3",fill:s}),t.jsx("circle",{cx:"21",cy:"15",r:"1",fill:"#FF4500"}),t.jsx("circle",{cx:"27",cy:"15",r:"1",fill:"#FF4500"}),t.jsx("circle",{cx:"21",cy:"14.5",r:"0.5",fill:"white",opacity:"0.8"}),t.jsx("circle",{cx:"27",cy:"14.5",r:"0.5",fill:"white",opacity:"0.8"}),t.jsx("path",{d:"M24 17L23 19L25 19Z",fill:"black"}),t.jsx("path",{d:"M20 20Q24 23 28 20",stroke:"black",strokeWidth:"1.5",fill:i}),t.jsx("path",{d:"M22 20L21 24",stroke:"white",strokeWidth:"1.5",strokeLinecap:"round"}),t.jsx("path",{d:"M26 20L27 24",stroke:"white",strokeWidth:"1.5",strokeLinecap:"round"}),t.jsx("path",{d:"M13 30Q8 26 10 35",fill:i,stroke:"black",strokeWidth:"1"}),t.jsx("path",{d:"M35 30Q40 26 38 35",fill:i,stroke:"black",strokeWidth:"1"}),t.jsx("path",{d:"M24 40Q26 44 28 42",stroke:e,strokeWidth:"2",strokeLinecap:"round"}),t.jsx("path",{d:"M28 42L30 44",stroke:e,strokeWidth:"1.5",strokeLinecap:"round"}),t.jsx("path",{d:"M28 42L26 44",stroke:e,strokeWidth:"1.5",strokeLinecap:"round"}),t.jsx("circle",{cx:"24",cy:"28",r:"2.5",fill:s,opacity:"0.6"}),t.jsx("path",{d:"M24 26L24 30M22 28L26 28",stroke:i,strokeWidth:"0.8"})]}),Wl=({primaryColor:e="#DC2626",secondaryColor:i="#991B1B",accentColor:s="#FBBF24",size:r=48})=>t.jsxs("svg",{width:r,height:r,viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("ellipse",{cx:"24",cy:"18",rx:"7",ry:"6.5",fill:e,stroke:i,strokeWidth:"1.5"}),t.jsx("path",{d:"M19 13L17 9",stroke:i,strokeWidth:"2",strokeLinecap:"round"}),t.jsx("path",{d:"M29 13L31 9",stroke:i,strokeWidth:"2",strokeLinecap:"round"}),t.jsx("circle",{cx:"17",cy:"9",r:"1.5",fill:i}),t.jsx("circle",{cx:"31",cy:"9",r:"1.5",fill:i}),t.jsx("path",{d:"M16 16L12 14L15 18Z",fill:e,stroke:i,strokeWidth:"1"}),t.jsx("path",{d:"M32 16L36 14L33 18Z",fill:e,stroke:i,strokeWidth:"1"}),t.jsx("circle",{cx:"21",cy:"17",r:"2.5",fill:s}),t.jsx("circle",{cx:"27",cy:"17",r:"2.5",fill:s}),t.jsx("circle",{cx:"21",cy:"17",r:"1.5",fill:"black"}),t.jsx("circle",{cx:"27",cy:"17",r:"1.5",fill:"black"}),t.jsx("circle",{cx:"21.5",cy:"16.5",r:"0.7",fill:s,opacity:"0.9"}),t.jsx("circle",{cx:"27.5",cy:"16.5",r:"0.7",fill:s,opacity:"0.9"}),t.jsx("path",{d:"M20 21Q24 23 28 21",stroke:i,strokeWidth:"1.5",fill:"none"}),t.jsx("path",{d:"M22 21L21.5 23",stroke:"white",strokeWidth:"1",strokeLinecap:"round"}),t.jsx("path",{d:"M26 21L26.5 23",stroke:"white",strokeWidth:"1",strokeLinecap:"round"}),t.jsx("ellipse",{cx:"24",cy:"30",rx:"6",ry:"7",fill:e,stroke:i,strokeWidth:"1.5"}),t.jsx("ellipse",{cx:"24",cy:"31",rx:"4",ry:"4.5",fill:i,opacity:"0.3"}),t.jsx("path",{d:"M18 28Q14 26 13 30Q13 32 16 32",fill:i,stroke:i,strokeWidth:"1",opacity:"0.8"}),t.jsx("path",{d:"M30 28Q34 26 35 30Q35 32 32 32",fill:i,stroke:i,strokeWidth:"1",opacity:"0.8"}),t.jsx("line",{x1:"14",y1:"28",x2:"15",y2:"31",stroke:e,strokeWidth:"0.5",opacity:"0.6"}),t.jsx("line",{x1:"34",y1:"28",x2:"33",y2:"31",stroke:e,strokeWidth:"0.5",opacity:"0.6"}),t.jsx("path",{d:"M18 30Q15 32 14 35",stroke:e,strokeWidth:"2",strokeLinecap:"round"}),t.jsx("path",{d:"M30 30Q33 32 34 35",stroke:e,strokeWidth:"2",strokeLinecap:"round"}),t.jsx("line",{x1:"34",y1:"35",x2:"36",y2:"38",stroke:"#D97706",strokeWidth:"1.5"}),t.jsx("path",{d:"M35 38L35 40M36 38L36 40M37 38L37 40",stroke:"#D97706",strokeWidth:"0.8"}),t.jsx("circle",{cx:"36",cy:"38",r:"0.8",fill:s}),t.jsx("rect",{x:"20",y:"36",width:"2",height:"6",rx:"1",fill:e,stroke:i,strokeWidth:"0.8"}),t.jsx("rect",{x:"26",y:"36",width:"2",height:"6",rx:"1",fill:e,stroke:i,strokeWidth:"0.8"}),t.jsx("ellipse",{cx:"21",cy:"42",rx:"1.5",ry:"1",fill:i}),t.jsx("ellipse",{cx:"27",cy:"42",rx:"1.5",ry:"1",fill:i}),t.jsx("path",{d:"M20 42L19 43M21 42L21 43M22 42L23 43",stroke:i,strokeWidth:"0.5"}),t.jsx("path",{d:"M26 42L25 43M27 42L27 43M28 42L29 43",stroke:i,strokeWidth:"0.5"}),t.jsx("path",{d:"M24 36Q26 40 27 43",stroke:e,strokeWidth:"2",strokeLinecap:"round"}),t.jsx("path",{d:"M27 43L28 45",stroke:e,strokeWidth:"1.2",strokeLinecap:"round"}),t.jsx("path",{d:"M27 43L26 45",stroke:e,strokeWidth:"1.2",strokeLinecap:"round"}),t.jsx("path",{d:"M28 45L29 46M26 45L25 46",stroke:s,strokeWidth:"0.8",strokeLinecap:"round"}),t.jsx("circle",{cx:"12",cy:"20",r:"1",fill:"#F97316",opacity:"0.6"}),t.jsx("circle",{cx:"36",cy:"20",r:"1",fill:"#F97316",opacity:"0.6"}),t.jsx("circle",{cx:"16",cy:"34",r:"0.8",fill:"#FBBF24",opacity:"0.5"})]}),Al=({primaryColor:e="#065F46",secondaryColor:i="#047857",accentColor:s="#10B981",size:r=48})=>t.jsxs("svg",{width:r,height:r,viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("rect",{x:"17",y:"12",width:"14",height:"12",rx:"2",fill:e,stroke:"black",strokeWidth:"1.5"}),t.jsx("path",{d:"M18 14Q14 12 12 16Q11 18 13 18",stroke:"black",strokeWidth:"2.5",fill:i,strokeLinecap:"round"}),t.jsx("path",{d:"M30 14Q34 12 36 16Q37 18 35 18",stroke:"black",strokeWidth:"2.5",fill:i,strokeLinecap:"round"}),t.jsx("circle",{cx:"12.5",cy:"16",r:"1.2",fill:"#1F2937"}),t.jsx("circle",{cx:"35.5",cy:"16",r:"1.2",fill:"#1F2937"}),t.jsx("rect",{x:"23",y:"10",width:"2",height:"3",fill:i}),t.jsx("path",{d:"M22 10L24 8L26 10",fill:i,stroke:"black",strokeWidth:"0.5"}),t.jsx("rect",{x:"19",y:"17",width:"3",height:"4",rx:"0.5",fill:s,opacity:"0.9"}),t.jsx("rect",{x:"26",y:"17",width:"3",height:"4",rx:"0.5",fill:s,opacity:"0.9"}),t.jsx("rect",{x:"20",y:"18",width:"1",height:"2",fill:"#047857"}),t.jsx("rect",{x:"27",y:"18",width:"1",height:"2",fill:"#047857"}),t.jsx("circle",{cx:"20.5",cy:"19",r:"0.5",fill:"#D1FAE5"}),t.jsx("circle",{cx:"27.5",cy:"19",r:"0.5",fill:"#D1FAE5"}),t.jsx("rect",{x:"20",y:"22",width:"8",height:"2",fill:"black",opacity:"0.8"}),t.jsx("rect",{x:"20",y:"22",width:"1",height:"3",fill:"white"}),t.jsx("rect",{x:"22",y:"22",width:"1",height:"3",fill:"white"}),t.jsx("rect",{x:"25",y:"22",width:"1",height:"3",fill:"white"}),t.jsx("rect",{x:"27",y:"22",width:"1",height:"3",fill:"white"}),t.jsx("line",{x1:"17",y1:"16",x2:"15",y2:"18",stroke:"#047857",strokeWidth:"1",strokeLinecap:"round"}),t.jsx("line",{x1:"31",y1:"16",x2:"33",y2:"18",stroke:"#047857",strokeWidth:"1",strokeLinecap:"round"}),t.jsx("path",{d:"M14 24L12 26L12 30L16 32",fill:"#1F2937",stroke:"black",strokeWidth:"1"}),t.jsx("path",{d:"M34 24L36 26L36 30L32 32",fill:"#1F2937",stroke:"black",strokeWidth:"1"}),t.jsx("path",{d:"M12 26L10 25",stroke:"#4B5563",strokeWidth:"1.5",strokeLinecap:"round"}),t.jsx("path",{d:"M12 28L10 28",stroke:"#4B5563",strokeWidth:"1.5",strokeLinecap:"round"}),t.jsx("path",{d:"M36 26L38 25",stroke:"#4B5563",strokeWidth:"1.5",strokeLinecap:"round"}),t.jsx("path",{d:"M36 28L38 28",stroke:"#4B5563",strokeWidth:"1.5",strokeLinecap:"round"}),t.jsx("rect",{x:"16",y:"24",width:"16",height:"14",rx:"2",fill:e,stroke:"black",strokeWidth:"1.5"}),t.jsx("rect",{x:"18",y:"26",width:"12",height:"3",rx:"0.5",fill:"#1F2937",opacity:"0.6"}),t.jsx("rect",{x:"18",y:"31",width:"12",height:"3",rx:"0.5",fill:"#1F2937",opacity:"0.6"}),t.jsx("circle",{cx:"24",cy:"30",r:"2",fill:s,opacity:"0.4"}),t.jsx("path",{d:"M24 28L24 32M22 30L26 30",stroke:s,strokeWidth:"0.8",opacity:"0.6"}),t.jsx("rect",{x:"12",y:"28",width:"4",height:"10",rx:"1",fill:e,stroke:"black",strokeWidth:"1"}),t.jsx("rect",{x:"32",y:"28",width:"4",height:"10",rx:"1",fill:e,stroke:"black",strokeWidth:"1"}),t.jsx("rect",{x:"11",y:"36",width:"6",height:"4",rx:"0.5",fill:"#374151",stroke:"black",strokeWidth:"1"}),t.jsx("rect",{x:"31",y:"36",width:"6",height:"4",rx:"0.5",fill:"#374151",stroke:"black",strokeWidth:"1"}),t.jsx("rect",{x:"36",y:"32",width:"2",height:"12",rx:"0.3",fill:"#6B7280",stroke:"black",strokeWidth:"0.8"}),t.jsx("path",{d:"M35 32L39 32L37 28Z",fill:"#4B5563",stroke:"black",strokeWidth:"0.8"}),t.jsx("rect",{x:"36.5",y:"44",width:"1",height:"2",fill:"#8B4513"}),t.jsx("line",{x1:"37",y1:"34",x2:"37",y2:"42",stroke:s,strokeWidth:"0.5",opacity:"0.6"}),t.jsx("circle",{cx:"37",cy:"36",r:"1",fill:s,opacity:"0.3"}),t.jsx("rect",{x:"18",y:"38",width:"4",height:"7",rx:"1",fill:e,stroke:"black",strokeWidth:"1"}),t.jsx("rect",{x:"26",y:"38",width:"4",height:"7",rx:"1",fill:e,stroke:"black",strokeWidth:"1"}),t.jsx("rect",{x:"17",y:"43",width:"6",height:"3",rx:"0.5",fill:"#1F2937",stroke:"black",strokeWidth:"1"}),t.jsx("rect",{x:"25",y:"43",width:"6",height:"3",rx:"0.5",fill:"#1F2937",stroke:"black",strokeWidth:"1"}),t.jsx("circle",{cx:"10",cy:"32",r:"1.5",fill:s,opacity:"0.3"}),t.jsx("circle",{cx:"38",cy:"24",r:"1.5",fill:s,opacity:"0.3"}),t.jsx("circle",{cx:"16",cy:"42",r:"1",fill:s,opacity:"0.4"})]}),Dl=({primaryColor:e="#F472B6",secondaryColor:i="#BE185D",accentColor:s="#FBBF24",size:r=48})=>t.jsxs("svg",{width:r,height:r,viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("ellipse",{cx:"24",cy:"32",rx:"8",ry:"7",fill:e,stroke:i,strokeWidth:"2"}),t.jsx("ellipse",{cx:"24",cy:"18",rx:"7",ry:"6",fill:e,stroke:i,strokeWidth:"2"}),t.jsx("ellipse",{cx:"21",cy:"16",rx:"1.2",ry:"2",fill:s}),t.jsx("ellipse",{cx:"27",cy:"16",rx:"1.2",ry:"2",fill:s}),t.jsx("ellipse",{cx:"24",cy:"20",rx:"2",ry:"1",fill:"#BE185D"}),t.jsx("ellipse",{cx:"14",cy:"28",rx:"3",ry:"7",fill:i,opacity:"0.7"}),t.jsx("ellipse",{cx:"34",cy:"28",rx:"3",ry:"7",fill:i,opacity:"0.7"})]}),El=({primaryColor:e="#DC2626",secondaryColor:i="#991B1B",accentColor:s="#FBBF24",size:r=48})=>t.jsxs("svg",{width:r,height:r,viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("ellipse",{cx:"24",cy:"32",rx:"8",ry:"7",fill:e,stroke:i,strokeWidth:"2"}),t.jsx("ellipse",{cx:"24",cy:"18",rx:"7",ry:"6",fill:e,stroke:i,strokeWidth:"2"}),t.jsx("ellipse",{cx:"21",cy:"16",rx:"1.2",ry:"2",fill:s}),t.jsx("ellipse",{cx:"27",cy:"16",rx:"1.2",ry:"2",fill:s}),t.jsx("path",{d:"M19 13L17 9",stroke:i,strokeWidth:"2",strokeLinecap:"round"}),t.jsx("path",{d:"M29 13L31 9",stroke:i,strokeWidth:"2",strokeLinecap:"round"}),t.jsx("rect",{x:"21",y:"38",width:"2",height:"4",rx:"0.5",fill:i}),t.jsx("rect",{x:"25",y:"38",width:"2",height:"4",rx:"0.5",fill:i})]}),Sl=({primaryColor:e="#60A5FA",secondaryColor:i="#3B82F6",accentColor:s="#DBEAFE",size:r=48})=>t.jsxs("svg",{width:r,height:r,viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("rect",{x:"16",y:"26",width:"16",height:"18",rx:"2",fill:e,stroke:i,strokeWidth:"2"}),t.jsx("rect",{x:"18",y:"10",width:"12",height:"14",rx:"1.5",fill:e,stroke:i,strokeWidth:"2.5"}),t.jsx("rect",{x:"21",y:"15",width:"2.5",height:"4",rx:"0.5",fill:s}),t.jsx("rect",{x:"25.5",y:"15",width:"2.5",height:"4",rx:"0.5",fill:s}),t.jsx("rect",{x:"21",y:"21",width:"6",height:"1.5",rx:"0.3",fill:"black",opacity:"0.6"}),t.jsx("rect",{x:"12",y:"24",width:"6",height:"8",rx:"1",fill:e,stroke:i,strokeWidth:"2"}),t.jsx("rect",{x:"30",y:"24",width:"6",height:"8",rx:"1",fill:e,stroke:i,strokeWidth:"2"}),t.jsx("rect",{x:"10",y:"30",width:"5",height:"12",rx:"1.5",fill:e,stroke:i,strokeWidth:"2"}),t.jsx("rect",{x:"33",y:"30",width:"5",height:"12",rx:"1.5",fill:e,stroke:i,strokeWidth:"2"}),t.jsx("rect",{x:"8",y:"40",width:"8",height:"6",rx:"1.5",fill:e,stroke:i,strokeWidth:"2"}),t.jsx("rect",{x:"32",y:"40",width:"8",height:"6",rx:"1.5",fill:e,stroke:i,strokeWidth:"2"}),t.jsx("rect",{x:"18",y:"42",width:"5",height:"5",rx:"0.5",fill:e,stroke:i,strokeWidth:"2"}),t.jsx("rect",{x:"25",y:"42",width:"5",height:"5",rx:"0.5",fill:e,stroke:i,strokeWidth:"2"})]}),Ql=({primaryColor:e="#A7F3D0",secondaryColor:i="#065F46",accentColor:s="#FBBF24",size:r=48})=>t.jsxs("svg",{width:r,height:r,viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("ellipse",{cx:"24",cy:"32",rx:"10",ry:"8",fill:e,stroke:i,strokeWidth:"2"}),t.jsx("ellipse",{cx:"24",cy:"18",rx:"8",ry:"7",fill:e,stroke:i,strokeWidth:"2"}),t.jsx("ellipse",{cx:"21",cy:"16",rx:"1.5",ry:"2",fill:s}),t.jsx("ellipse",{cx:"27",cy:"16",rx:"1.5",ry:"2",fill:s}),t.jsx("ellipse",{cx:"24",cy:"22",rx:"4",ry:"2",fill:"#065F46"}),t.jsx("rect",{x:"23",y:"23",width:"2",height:"1.2",rx:"0.3",fill:"white"}),t.jsx("rect",{x:"32",y:"36",width:"8",height:"2",rx:"0.5",fill:"#A6531B"})]}),ql=({primaryColor:e="#78716C",secondaryColor:i="#57534E",accentColor:s="#A8A29E",size:r=48})=>t.jsxs("svg",{width:r,height:r,viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("rect",{x:"16",y:"26",width:"16",height:"18",rx:"2",fill:e,stroke:i,strokeWidth:"2"}),t.jsx("line",{x1:"18",y1:"30",x2:"22",y2:"28",stroke:i,strokeWidth:"1",opacity:"0.6"}),t.jsx("line",{x1:"24",y1:"32",x2:"28",y2:"30",stroke:i,strokeWidth:"1",opacity:"0.6"}),t.jsx("line",{x1:"20",y1:"36",x2:"24",y2:"34",stroke:i,strokeWidth:"1",opacity:"0.6"}),t.jsx("line",{x1:"26",y1:"38",x2:"30",y2:"36",stroke:i,strokeWidth:"1",opacity:"0.6"}),t.jsx("path",{d:"M20 32L18 30L20 28L22 30Z",fill:s,stroke:i,strokeWidth:"0.8"}),t.jsx("path",{d:"M28 36L26 34L28 32L30 34Z",fill:s,stroke:i,strokeWidth:"0.8"}),t.jsx("rect",{x:"18",y:"10",width:"12",height:"14",rx:"1.5",fill:e,stroke:i,strokeWidth:"2.5"}),t.jsx("line",{x1:"20",y1:"12",x2:"23",y2:"15",stroke:i,strokeWidth:"1.2",opacity:"0.6"}),t.jsx("line",{x1:"26",y1:"13",x2:"28",y2:"16",stroke:i,strokeWidth:"1.2",opacity:"0.6"}),t.jsx("rect",{x:"20",y:"15",width:"2.5",height:"4",rx:"0.5",fill:"black",opacity:"0.7"}),t.jsx("rect",{x:"25.5",y:"15",width:"2.5",height:"4",rx:"0.5",fill:"black",opacity:"0.7"}),t.jsx("circle",{cx:"21",cy:"17",r:"1",fill:"#FCD34D",opacity:"0.8"}),t.jsx("circle",{cx:"26.5",cy:"17",r:"1",fill:"#FCD34D",opacity:"0.8"}),t.jsx("circle",{cx:"21.3",cy:"16.7",r:"0.4",fill:"#FEF3C7"}),t.jsx("circle",{cx:"26.8",cy:"16.7",r:"0.4",fill:"#FEF3C7"}),t.jsx("rect",{x:"21",y:"21",width:"6",height:"1.5",rx:"0.3",fill:"black",opacity:"0.6"}),t.jsx("path",{d:"M22 10L20 7L22 8L24 6L26 8L28 7L26 10",fill:s,stroke:i,strokeWidth:"1"}),t.jsx("path",{d:"M20 7L19 5M24 6L24 4M28 7L29 5",stroke:i,strokeWidth:"1.2",strokeLinecap:"round"}),t.jsx("rect",{x:"12",y:"24",width:"6",height:"8",rx:"1",fill:e,stroke:i,strokeWidth:"2"}),t.jsx("rect",{x:"30",y:"24",width:"6",height:"8",rx:"1",fill:e,stroke:i,strokeWidth:"2"}),t.jsx("path",{d:"M14 26L13 24L15 25Z",fill:s,stroke:i,strokeWidth:"0.5"}),t.jsx("path",{d:"M34 26L35 24L33 25Z",fill:s,stroke:i,strokeWidth:"0.5"}),t.jsx("rect",{x:"10",y:"30",width:"5",height:"12",rx:"1.5",fill:e,stroke:i,strokeWidth:"2"}),t.jsx("rect",{x:"33",y:"30",width:"5",height:"12",rx:"1.5",fill:e,stroke:i,strokeWidth:"2"}),t.jsx("line",{x1:"11",y1:"34",x2:"13",y2:"36",stroke:i,strokeWidth:"0.8",opacity:"0.5"}),t.jsx("line",{x1:"35",y1:"34",x2:"37",y2:"36",stroke:i,strokeWidth:"0.8",opacity:"0.5"}),t.jsx("rect",{x:"8",y:"40",width:"8",height:"6",rx:"1.5",fill:e,stroke:i,strokeWidth:"2"}),t.jsx("rect",{x:"32",y:"40",width:"8",height:"6",rx:"1.5",fill:e,stroke:i,strokeWidth:"2"}),t.jsx("line",{x1:"10",y1:"42",x2:"10",y2:"44",stroke:i,strokeWidth:"1"}),t.jsx("line",{x1:"12",y1:"42",x2:"12",y2:"44",stroke:i,strokeWidth:"1"}),t.jsx("line",{x1:"14",y1:"42",x2:"14",y2:"44",stroke:i,strokeWidth:"1"}),t.jsx("line",{x1:"34",y1:"42",x2:"34",y2:"44",stroke:i,strokeWidth:"1"}),t.jsx("line",{x1:"36",y1:"42",x2:"36",y2:"44",stroke:i,strokeWidth:"1"}),t.jsx("line",{x1:"38",y1:"42",x2:"38",y2:"44",stroke:i,strokeWidth:"1"}),t.jsx("rect",{x:"18",y:"42",width:"5",height:"5",rx:"0.5",fill:e,stroke:i,strokeWidth:"2"}),t.jsx("rect",{x:"25",y:"42",width:"5",height:"5",rx:"0.5",fill:e,stroke:i,strokeWidth:"2"}),t.jsx("circle",{cx:"10",cy:"38",r:"1.2",fill:s,opacity:"0.6"}),t.jsx("circle",{cx:"38",cy:"38",r:"1.2",fill:s,opacity:"0.6"}),t.jsx("circle",{cx:"16",cy:"44",r:"0.8",fill:i,opacity:"0.5"}),t.jsx("circle",{cx:"32",cy:"44",r:"0.8",fill:i,opacity:"0.5"}),t.jsx("ellipse",{cx:"24",cy:"44",rx:"14",ry:"2",fill:i,opacity:"0.2"})]}),Pl=({primaryColor:e="#A3A3A3",secondaryColor:i="#6B7280",accentColor:s="#FBBF24",size:r=48})=>t.jsxs("svg",{width:r,height:r,viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("ellipse",{cx:"24",cy:"32",rx:"10",ry:"8",fill:e,stroke:i,strokeWidth:"2"}),t.jsx("ellipse",{cx:"24",cy:"18",rx:"7",ry:"6",fill:e,stroke:i,strokeWidth:"2"}),t.jsx("ellipse",{cx:"21",cy:"16",rx:"1.2",ry:"2",fill:s}),t.jsx("ellipse",{cx:"27",cy:"16",rx:"1.2",ry:"2",fill:s}),t.jsx("ellipse",{cx:"14",cy:"28",rx:"3",ry:"7",fill:i,opacity:"0.7"}),t.jsx("ellipse",{cx:"34",cy:"28",rx:"3",ry:"7",fill:i,opacity:"0.7"}),t.jsx("path",{d:"M32 32Q38 36 40 44",stroke:s,strokeWidth:"2"}),t.jsx("path",{d:"M20 14Q18 10 22 12",stroke:i,strokeWidth:"1.2"}),t.jsx("path",{d:"M28 14Q30 10 26 12",stroke:i,strokeWidth:"1.2"})]}),Il=({primaryColor:e="#FBBF24",secondaryColor:i="#A16207",accentColor:s="#F59E42",size:r=48})=>t.jsxs("svg",{width:r,height:r,viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("ellipse",{cx:"24",cy:"32",rx:"9",ry:"7",fill:e,stroke:i,strokeWidth:"2"}),t.jsx("ellipse",{cx:"24",cy:"18",rx:"7",ry:"6",fill:e,stroke:i,strokeWidth:"2"}),t.jsx("ellipse",{cx:"21",cy:"16",rx:"1.2",ry:"2",fill:s}),t.jsx("ellipse",{cx:"27",cy:"16",rx:"1.2",ry:"2",fill:s}),t.jsx("ellipse",{cx:"14",cy:"28",rx:"3",ry:"7",fill:i,opacity:"0.7"}),t.jsx("ellipse",{cx:"34",cy:"28",rx:"3",ry:"7",fill:i,opacity:"0.7"}),t.jsx("path",{d:"M32 32Q38 36 40 44",stroke:s,strokeWidth:"2"})]}),Tl=({primaryColor:e="#A3A3A3",secondaryColor:i="#6B7280",accentColor:s="#FBBF24",size:r=48})=>t.jsxs("svg",{width:r,height:r,viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("ellipse",{cx:"24",cy:"32",rx:"9",ry:"7",fill:e,stroke:i,strokeWidth:"2"}),t.jsx("ellipse",{cx:"24",cy:"18",rx:"7",ry:"6",fill:e,stroke:i,strokeWidth:"2"}),t.jsx("ellipse",{cx:"21",cy:"16",rx:"1.2",ry:"2",fill:s}),t.jsx("ellipse",{cx:"27",cy:"16",rx:"1.2",ry:"2",fill:s}),t.jsx("path",{d:"M32 32Q38 36 40 44",stroke:s,strokeWidth:"2"})]}),Cl=({primaryColor:e="#F59E0B",secondaryColor:i="#B45309",accentColor:s="#FBBF24",size:r=48})=>t.jsxs("svg",{width:r,height:r,viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("ellipse",{cx:"24",cy:"32",rx:"13",ry:"11",fill:e,stroke:i,strokeWidth:"2.5"}),t.jsx("ellipse",{cx:"24",cy:"15",rx:"9",ry:"8",fill:e,stroke:i,strokeWidth:"2.5"}),t.jsx("ellipse",{cx:"20",cy:"13",rx:"3",ry:"4",fill:s}),t.jsx("ellipse",{cx:"28",cy:"13",rx:"3",ry:"4",fill:s}),t.jsx("path",{d:"M17 9L14 4Q13 2 14 3",stroke:i,strokeWidth:"3.5",strokeLinecap:"round"}),t.jsx("path",{d:"M31 9L34 4Q35 2 34 3",stroke:i,strokeWidth:"3.5",strokeLinecap:"round"}),t.jsx("ellipse",{cx:"24",cy:"28",rx:"5",ry:"3",fill:"#FBBF24",opacity:"0.5"})]}),Hl=({primaryColor:e="#EF4444",secondaryColor:i="#DC2626",accentColor:s="#FBBF24",size:r=48})=>t.jsxs("svg",{width:r,height:r,viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("ellipse",{cx:"24",cy:"30",rx:"9",ry:"8",fill:e,stroke:i,strokeWidth:"1.5"}),t.jsx("path",{d:"M18 28Q20 26 22 28Q24 26 26 28Q28 26 30 28",stroke:i,strokeWidth:"0.8",fill:"none",opacity:"0.3"}),t.jsx("path",{d:"M18 32Q20 30 22 32Q24 30 26 32Q28 30 30 32",stroke:i,strokeWidth:"0.8",fill:"none",opacity:"0.3"}),t.jsx("ellipse",{cx:"24",cy:"17",rx:"6.5",ry:"6",fill:e,stroke:i,strokeWidth:"1.5"}),t.jsx("ellipse",{cx:"24",cy:"20",rx:"4.5",ry:"3",fill:e,stroke:i,strokeWidth:"1"}),t.jsx("circle",{cx:"22.5",cy:"20.5",r:"0.6",fill:"black"}),t.jsx("circle",{cx:"25.5",cy:"20.5",r:"0.6",fill:"black"}),t.jsx("ellipse",{cx:"21",cy:"15",rx:"2.5",ry:"3",fill:s}),t.jsx("ellipse",{cx:"27",cy:"15",rx:"2.5",ry:"3",fill:s}),t.jsx("circle",{cx:"21",cy:"15",r:"1.5",fill:"black"}),t.jsx("circle",{cx:"27",cy:"15",r:"1.5",fill:"black"}),t.jsx("circle",{cx:"21.5",cy:"14.5",r:"0.7",fill:"white"}),t.jsx("circle",{cx:"27.5",cy:"14.5",r:"0.7",fill:"white"}),t.jsx("path",{d:"M19 12L18 9",stroke:i,strokeWidth:"1.5",strokeLinecap:"round"}),t.jsx("path",{d:"M29 12L30 9",stroke:i,strokeWidth:"1.5",strokeLinecap:"round"}),t.jsx("circle",{cx:"18",cy:"9",r:"0.8",fill:i}),t.jsx("circle",{cx:"30",cy:"9",r:"0.8",fill:i}),t.jsx("path",{d:"M15 28Q12 26 13 32",fill:i,opacity:"0.5"}),t.jsx("path",{d:"M33 28Q36 26 35 32",fill:i,opacity:"0.5"}),t.jsx("line",{x1:"14",y1:"29",x2:"13",y2:"31",stroke:e,strokeWidth:"0.5",opacity:"0.4"}),t.jsx("line",{x1:"34",y1:"29",x2:"35",y2:"31",stroke:e,strokeWidth:"0.5",opacity:"0.4"}),t.jsx("path",{d:"M24 22L23.5 24L24.5 24Z",fill:s,stroke:i,strokeWidth:"0.3"}),t.jsx("path",{d:"M24 25L23.5 27L24.5 27Z",fill:s,stroke:i,strokeWidth:"0.3"}),t.jsx("path",{d:"M24 28L23.5 30L24.5 30Z",fill:s,stroke:i,strokeWidth:"0.3"}),t.jsx("path",{d:"M19 36Q18 38 17 40",stroke:e,strokeWidth:"2",strokeLinecap:"round"}),t.jsx("path",{d:"M29 36Q30 38 31 40",stroke:e,strokeWidth:"2",strokeLinecap:"round"}),t.jsx("path",{d:"M16 40L15.5 41M17 40L17 41M18 40L18.5 41",stroke:i,strokeWidth:"0.8",strokeLinecap:"round"}),t.jsx("path",{d:"M30 40L29.5 41M31 40L31 41M32 40L32.5 41",stroke:i,strokeWidth:"0.8",strokeLinecap:"round"}),t.jsx("path",{d:"M24 37Q25 40 26 42Q27 43 26.5 42",stroke:e,strokeWidth:"2",strokeLinecap:"round"}),t.jsx("path",{d:"M26 42L27 41L26 40",fill:i}),t.jsx("circle",{cx:"24",cy:"23",r:"0.8",fill:"#F97316",opacity:"0.5"}),t.jsx("circle",{cx:"22.5",cy:"24",r:"0.6",fill:"#FBBF24",opacity:"0.4"})]}),_l=({primaryColor:e="#7C3AED",secondaryColor:i="#5B21B6",accentColor:s="#A78BFA",size:r=48})=>t.jsxs("svg",{width:r,height:r,viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("ellipse",{cx:"24",cy:"32",rx:"13",ry:"11",fill:e,stroke:i,strokeWidth:"2.5"}),t.jsx("path",{d:"M14 28Q16 26 18 28Q20 26 22 28Q24 26 26 28Q28 26 30 28Q32 26 34 28",stroke:i,strokeWidth:"1.5",fill:"none",opacity:"0.5"}),t.jsx("path",{d:"M14 32Q16 30 18 32Q20 30 22 32Q24 30 26 32Q28 30 30 32Q32 30 34 32",stroke:i,strokeWidth:"1.5",fill:"none",opacity:"0.5"}),t.jsx("path",{d:"M14 36Q16 34 18 36Q20 34 22 36Q24 34 26 36Q28 34 30 36Q32 34 34 36",stroke:i,strokeWidth:"1.5",fill:"none",opacity:"0.5"}),t.jsx("line",{x1:"18",y1:"30",x2:"22",y2:"32",stroke:s,strokeWidth:"1",opacity:"0.4"}),t.jsx("line",{x1:"26",y1:"30",x2:"30",y2:"33",stroke:s,strokeWidth:"1",opacity:"0.4"}),t.jsx("ellipse",{cx:"24",cy:"15",rx:"9",ry:"8",fill:e,stroke:i,strokeWidth:"2.5"}),t.jsx("ellipse",{cx:"24",cy:"19",rx:"7",ry:"4.5",fill:e,stroke:i,strokeWidth:"2"}),t.jsx("path",{d:"M19 20Q24 23 29 20",stroke:i,strokeWidth:"1.5",fill:"none"}),t.jsx("path",{d:"M20 20L19 23",stroke:"white",strokeWidth:"1.5",strokeLinecap:"round"}),t.jsx("path",{d:"M28 20L29 23",stroke:"white",strokeWidth:"1.5",strokeLinecap:"round"}),t.jsx("ellipse",{cx:"21.5",cy:"20",rx:"1.2",ry:"1.8",fill:"black"}),t.jsx("ellipse",{cx:"26.5",cy:"20",rx:"1.2",ry:"1.8",fill:"black"}),t.jsx("circle",{cx:"20.5",cy:"19",r:"1",fill:s,opacity:"0.4"}),t.jsx("circle",{cx:"27.5",cy:"19",r:"1",fill:s,opacity:"0.4"}),t.jsx("ellipse",{cx:"20",cy:"13",rx:"3",ry:"4",fill:s}),t.jsx("ellipse",{cx:"28",cy:"13",rx:"3",ry:"4",fill:s}),t.jsx("ellipse",{cx:"20",cy:"13",rx:"1.2",ry:"3",fill:"#5B21B6"}),t.jsx("ellipse",{cx:"28",cy:"13",rx:"1.2",ry:"3",fill:"#5B21B6"}),t.jsx("circle",{cx:"20",cy:"12",r:"0.7",fill:"#DDD6FE"}),t.jsx("circle",{cx:"28",cy:"12",r:"0.7",fill:"#DDD6FE"}),t.jsx("path",{d:"M17 9L14 4Q13 2 14 3",stroke:i,strokeWidth:"3.5",strokeLinecap:"round"}),t.jsx("path",{d:"M31 9L34 4Q35 2 34 3",stroke:i,strokeWidth:"3.5",strokeLinecap:"round"}),t.jsx("circle",{cx:"14",cy:"4",r:"1.5",fill:i}),t.jsx("circle",{cx:"34",cy:"4",r:"1.5",fill:i}),t.jsx("path",{d:"M16 9L14 7",stroke:i,strokeWidth:"2",strokeLinecap:"round"}),t.jsx("path",{d:"M18 10L17 7",stroke:i,strokeWidth:"1.8",strokeLinecap:"round"}),t.jsx("path",{d:"M32 9L34 7",stroke:i,strokeWidth:"2",strokeLinecap:"round"}),t.jsx("path",{d:"M30 10L31 7",stroke:i,strokeWidth:"1.8",strokeLinecap:"round"}),t.jsx("path",{d:"M11 30Q5 22 3 26Q2 30 4 36Q6 40 10 38Q12 36 11 34",fill:i,stroke:i,strokeWidth:"2",opacity:"0.9"}),t.jsx("path",{d:"M37 30Q43 22 45 26Q46 30 44 36Q42 40 38 38Q36 36 37 34",fill:i,stroke:i,strokeWidth:"2",opacity:"0.9"}),t.jsx("path",{d:"M8 32L6 34",stroke:e,strokeWidth:"1.5",opacity:"0.7"}),t.jsx("path",{d:"M10 34L8 36",stroke:e,strokeWidth:"1.5",opacity:"0.7"}),t.jsx("path",{d:"M40 32L42 34",stroke:e,strokeWidth:"1.5",opacity:"0.7"}),t.jsx("path",{d:"M38 34L40 36",stroke:e,strokeWidth:"1.5",opacity:"0.7"}),t.jsx("path",{d:"M24 21L22.5 24L25.5 24Z",fill:s,stroke:i,strokeWidth:"0.8"}),t.jsx("path",{d:"M24 25L22.5 28L25.5 28Z",fill:s,stroke:i,strokeWidth:"0.8"}),t.jsx("path",{d:"M24 29L22.5 32L25.5 32Z",fill:s,stroke:i,strokeWidth:"0.8"}),t.jsx("path",{d:"M24 33L22.5 36L25.5 36Z",fill:s,stroke:i,strokeWidth:"0.8"}),t.jsx("path",{d:"M24 37L22.5 40L25.5 40Z",fill:s,stroke:i,strokeWidth:"0.8"}),t.jsx("path",{d:"M17 41Q15 43 13 45",stroke:e,strokeWidth:"3.5",strokeLinecap:"round"}),t.jsx("path",{d:"M31 41Q33 43 35 45",stroke:e,strokeWidth:"3.5",strokeLinecap:"round"}),t.jsx("path",{d:"M11 45L10 47M13 45L13 47M15 45L16 47",stroke:i,strokeWidth:"1.5",strokeLinecap:"round"}),t.jsx("path",{d:"M33 45L32 47M35 45L35 47M37 45L38 47",stroke:i,strokeWidth:"1.5",strokeLinecap:"round"}),t.jsx("path",{d:"M24 41Q26 44 28 46Q30 47 29.5 45",stroke:e,strokeWidth:"3.5",strokeLinecap:"round"}),t.jsx("path",{d:"M28 46L30 44L28 42",fill:i,stroke:i,strokeWidth:"1.5"}),t.jsx("path",{d:"M27 45L28 43L27 42",fill:s}),t.jsx("circle",{cx:"24",cy:"32",r:"15",fill:s,opacity:"0.1"}),t.jsx("circle",{cx:"12",cy:"24",r:"2",fill:s,opacity:"0.3"}),t.jsx("circle",{cx:"36",cy:"24",r:"2",fill:s,opacity:"0.3"}),t.jsx("circle",{cx:"18",cy:"16",r:"1.5",fill:s,opacity:"0.4"}),t.jsx("circle",{cx:"30",cy:"16",r:"1.5",fill:s,opacity:"0.4"})]}),zl=({primaryColor:e="#A3A3A3",secondaryColor:i="#6B7280",accentColor:s="#FBBF24",size:r=48})=>t.jsxs("svg",{width:r,height:r,viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("ellipse",{cx:"24",cy:"32",rx:"10",ry:"8",fill:e,stroke:i,strokeWidth:"2"}),t.jsx("ellipse",{cx:"24",cy:"18",rx:"7",ry:"6",fill:e,stroke:i,strokeWidth:"2"}),t.jsx("ellipse",{cx:"21",cy:"16",rx:"1.2",ry:"2",fill:s}),t.jsx("ellipse",{cx:"27",cy:"16",rx:"1.2",ry:"2",fill:s}),t.jsx("ellipse",{cx:"24",cy:"22",rx:"2",ry:"1",fill:i,opacity:"0.5"}),t.jsx("ellipse",{cx:"24",cy:"32",rx:"14",ry:"10",fill:s,opacity:"0.08"})]}),Rl=({monster:e,size:i=64})=>{switch(e.id.replace(/-(\d+)$/,"")){case"wolf":return t.jsx(fl,{size:i});case"fox":return t.jsx(pl,{size:i});case"boar":return t.jsx(ul,{size:i});case"owl":return t.jsx(hl,{size:i});case"giant-rat":return t.jsx(gl,{size:i});case"bandit":return t.jsx(yl,{size:i});case"murloc":return t.jsx(jl,{size:i});case"thief":return t.jsx(ml,{size:i});case"skeleton":return t.jsx(kl,{size:i});case"gargoyle":return t.jsx(bl,{size:i});case"ghost":return t.jsx(wl,{size:i});case"ghoul":return t.jsx(vl,{size:i});case"ice-elemental":return t.jsx(Fl,{size:i});case"fire-elemental":return t.jsx(Ll,{size:i});case"air-elemental":return t.jsx($l,{size:i});case"earth-elemental":return t.jsx(Bl,{size:i});case"demon":return t.jsx(Ml,{size:i});case"felguard":return t.jsx(Al,{size:i});case"imp":return t.jsx(Wl,{size:i});case"minor-demon":return t.jsx(El,{size:i});case"succubus":return t.jsx(Dl,{size:i});case"ice-giant":return t.jsx(Sl,{size:i});case"giant":return t.jsx(ql,{size:i});case"troll-brute":return t.jsx(Ql,{size:i});case"whelp":return t.jsx(Hl,{size:i});case"ancient-dragon":return t.jsx(_l,{size:i});case"dragon":return t.jsx(Pl,{size:i});case"drake":return t.jsx(Tl,{size:i});case"guardian-dragon":return t.jsx(Cl,{size:i});case"wyvern":return t.jsx(Il,{size:i})}return t.jsx(zl,{size:i})};function Gl(){const{showTooltip:e,hideTooltip:i}=De();return{showAbilityTooltip:(r,l)=>{const n={},a={title:r.name,description:r.description,level:0,stats:n};e(a,{x:l.clientX,y:l.clientY})},hideTooltip:i}}const Zl=o.div`
    width: 100%;
    margin-bottom: 0.5rem;
`,Nl=o.div`
    display: flex;
    justify-content: space-between;
    font-size: 0.95rem;
    color: ${({theme:e})=>e.colors.winter.snowWhite};
    margin-bottom: 0.2rem;
`,Ul=o.div`
    position: relative;
    width: 100%;
    height: 22px;
    background: rgba(0,0,0,0.4);
    border-radius: 999px;
    border: 2px solid #ffd700;
    overflow: hidden;
    box-shadow: inset 0 2px 4px rgba(0,0,0,0.3);
`,Ol=o.div`
    height: 100%;
    width: ${({$percent:e})=>e}%;
    background: linear-gradient(90deg,#ffd700 0%,#ffed4e 50%,#ffd700 100%);
    transition: width 0.7s cubic-bezier(.4,2,.3,1);
    position: absolute;
    left: 0;
    top: 0;
    box-shadow: 0 0 10px rgba(255,215,0,0.5);
`,Vl=o.div`
    height: 100%;
    width: ${({$percent:e})=>e}%;
    background: linear-gradient(90deg,#22c55e 0%,#bbf7d0 100%);
    transition: width 0.7s cubic-bezier(.4,2,.3,1);
    position: absolute;
    left: ${({$offset:e})=>e}%;
    top: 0;
    box-shadow: 0 0 10px rgba(34,197,94,0.3);
`,Xl=o.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    font-weight: bold;
    color: #fff;
    text-shadow: 0 1px 2px rgba(0,0,0,0.8);
    font-size: 0.85rem;
    z-index: 1;
`,Yl=o.div`
    font-size: 0.9rem;
    color: #22c55e;
    margin-top: 0.2rem;
    font-weight: bold;
`;function Kl({character:e,rewards:i}){const s=e.stats.experience/e.stats.experienceToNextLevel*100,r=i&&e.stats.experienceToNextLevel?i.experience/e.stats.experienceToNextLevel*100:0;return t.jsxs(Zl,{children:[t.jsxs(Nl,{children:[t.jsxs("span",{children:["Niveau ",e.level]}),t.jsxs("span",{children:[e.stats.experience," / ",e.stats.experienceToNextLevel," XP"]})]}),t.jsxs(Ul,{children:[t.jsx(Ol,{$percent:s}),t.jsx(Vl,{$percent:r,$offset:s}),t.jsxs(Xl,{children:[Math.max(0,Math.round(s+r)),"%"]})]}),t.jsxs(Yl,{children:["+",i.experience," XP gagnés"]})]})}function he(){const{showTooltip:e,hideTooltip:i}=De();return{showItemTooltip:(r,l)=>{const n={title:r.name,stats:r.stats,quality:r.quality,level:r.level,equiped:r.equiped??void 0};e(n,{x:l.clientX,y:l.clientY})},hideTooltip:i}}const Jl=o.h1`
    font-size: 2rem;
    margin-bottom: 0;
`,en=o.div`
    display: flex;
    flex-direction: row;
    gap: ${({theme:e})=>e.spacing.md};
    // width: 100%;
`,tn=o(B)`
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
`,sn=o(B)`
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
`,rn=o.div`
    margin-top: ${({theme:e})=>e.spacing.sm};
    font-weight: bold;
    color: ${({theme:e,$quality:i})=>A(i).primary||e.colors.winter.snowWhite};
`,ln=o.div`
cursor: pointer;
`;function nn({rewards:e}){const{character:i,updateCharacter:s}=w(),{battle:r,createNewBattle:l,setBattle:n}=ce(),{showItemTooltip:a,hideTooltip:x}=he(),{closeModal:d}=Ae(),f=h.useCallback(()=>{if(!i||!r)return;const c=(i.stats.experience||0)+e.experience,p=c>=re(i.level),u={...i,gold:(i.gold||0)+e.gold,defeatedMonsters:i.defeatedMonsters+1,stats:{...i.stats,experience:p?c-re(i.level):c,health:r.player.stats.health}},g=Le(i.inventory?.equipments||{});p&&(u.level+=1,u.stats.experienceToNextLevel=re(u.level),u.stats.health=H(u.level,i.classe.baseHP)+(g.stamina||0),u.stats.maxHealth=H(u.level,i.classe.baseHP)+(g.stamina||0),u.stats.strength=$(u.race.baseStats.strength,u.level)+(g.strength||0),u.stats.agility=$(u.race.baseStats.agility,u.level)+(g.agility||0),u.stats.intellect=$(u.race.baseStats.intellect,u.level)+(g.intellect||0),u.stats.stamina=$(u.race.baseStats.stamina,u.level)+(g.stamina||0),u.stats.attackPower=ae(u)+(g.attackPower||0),u.stats.armor=g.armor||0,u.stats.critChance=g.critChance||0),e.loot&&(u.inventory||(u.inventory={potions:[],bags:[],equipments:{}}),u.inventory.bags=[...i?.inventory?.bags||[],{itemId:e.loot.id,item:e.loot}]),s(u)},[i,r,e,s]);return h.useEffect(()=>{const c=p=>{r&&(p.key===" "&&(f(),d(),l(i,r.monster.level,r.zone)),p.key.toLowerCase()==="b"&&(f(),n(null),d()))};return window.addEventListener("keydown",c),()=>{window.removeEventListener("keydown",c)}},[r,i,d,l,f]),!i||!r?null:t.jsxs(k,{$direction:"column",$align:"center",$justify:"space-between",style:{height:"100%"},children:[t.jsx(Jl,{children:"🎉 Victoire ! 🎉"}),t.jsx(Kl,{character:i,rewards:e}),t.jsxs(en,{children:[t.jsx(tn,{children:t.jsx(E,{amount:e.gold})}),e.loot&&t.jsxs(sn,{onMouseMove:c=>a(e.loot,c),onMouseLeave:x,children:[t.jsx(ln,{children:t.jsx(xe,{itemType:e.loot.slot,itemName:e.loot.name,quality:e.loot.quality,size:64})}),t.jsx(rn,{$quality:e.loot.quality,children:e.loot.name})]})]}),t.jsxs(k,{$direction:"row",$justify:"center",$align:"center",style:{marginTop:"5rem"},children:[t.jsx(D,{onClick:()=>{f(),d(),l(i,r.monster.level,r.zone)},children:"Continuer"}),t.jsx(D,{$variant:"secondary",onClick:()=>{f(),n(null),d()},children:"Pierre de Foyer"})]})]})}function on({initialTime:e,onTimeUp:i}){const[s,r]=h.useState(e);h.useEffect(()=>{if(s<=0){i();return}const f=setInterval(()=>{r(c=>c-1e3)},1e3);return()=>clearInterval(f)},[s,i]);const l=Math.floor(s/1e3),n=Math.floor(l/60),a=n<10?`0${n}`:`${n}`,x=l%60,d=x<10?`0${x}`:`${x}`;return t.jsxs(an,{children:[a,":",d]})}const an=o.div`
    font-size: 1.5rem;
    font-weight: bold;
    color: ${({theme:e})=>e.colors.winter.iceBlue};
`,cn=o.h1`
    font-size: 2rem;
    margin-bottom: 0;
`;function dn(){const{character:e,updateCharacter:i}=w(),{battle:s,setBattle:r}=ce(),[l,n]=h.useState(!1),{closeModal:a}=Ae(),x=()=>{if(!e||!s)return;const d={...e};d.stats.health=d.stats.maxHealth*10/100,i({...d})};return!e||!s?null:t.jsxs(k,{$direction:"column",$align:"center",$justify:"space-between",style:{height:"100%"},children:[t.jsx(cn,{children:s.status==="defeat"?"💀 Défaite":"🏃 Vous avez fui"}),t.jsxs(mr,{children:[t.jsx(yt,{children:"📜 Journal de Combat"}),t.jsx(yr,{children:[...s.battleLog].reverse().map(d=>t.jsx(jt,{$type:d.type,children:d.message},d.id))})]}),t.jsx(k,{$direction:"row",$justify:"center",$align:"center",style:{marginTop:"5rem"},children:t.jsx(D,{disabled:!l,$variant:"secondary",onClick:()=>{x(),r(null),a()},children:l?"Recupérer mon corp":t.jsx(on,{initialTime:1e3*e.level,onTimeUp:()=>n(!0)})})})]})}const xn=o(k)`
  width: 100%;
`,hn=o(k)`
  width: 100%;
`,pn=o.div`
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
`,fn=o(B)`
  display: flex;
  gap: ${({theme:e})=>e.spacing.xxs};
  justify-content: center;
`,z=o.div`
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
`,ee=o.div`
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
`,un=o(B)`
  padding: ${({theme:e})=>e.spacing.md};
  height: 300px;
  overflow-y: auto;
`;function gn(){const{battle:e,setBattle:i}=ce(),{character:s}=w(),{showAbilityTooltip:r,hideTooltip:l}=Gl(),{openModal:n}=Ae(),[a,x]=h.useState(!1),d=[h.useState(!1),h.useState(!1),h.useState(!1),h.useState(!1),h.useState(!1)],f=ji(s.classe.id,s.level),c=G[s.classe.id],p=["é",'"',"'","(","-","è"],u=h.useCallback((g,m,j,y)=>{if(!e||e.status!=="ongoing")return;if(m==="attack"){if(a)return;x(!0),setTimeout(()=>x(!1),1e3)}if(m==="spell"&&typeof j=="number"&&y){if(d[j][0])return;d[j][1](!0),setTimeout(()=>d[j][1](!1),y*1e3)}const b=g();i(b)},[e,a,d,i]);return h.useEffect(()=>{if(e){if(e.status==="victory"){const g=Ti(e.monster,e.player);n(t.jsx(nn,{rewards:g}),"linear-gradient(135deg,rgba(22, 119, 58, 1) 0%,rgba(16, 95, 45, 1) 100%)")}(e.status==="defeat"||e.status==="fled")&&n(t.jsx(dn,{}),"linear-gradient(135deg,rgba(119, 22, 22, 1) 0%,rgba(95, 16, 16, 1) 100%)")}},[e,i]),h.useEffect(()=>{const g=m=>{m.key==="&"&&u(()=>qe(e),"attack"),f.forEach((j,y)=>{m.key===p[y]&&u(()=>Pe(e,j),"spell",y,j.cooldown)})};return window.addEventListener("keydown",g),()=>{window.removeEventListener("keydown",g)}},[u,e,s,f]),h.useEffect(()=>{if(!e)return;const g=Ei(e.monster.level),m=setTimeout(()=>{if(e.monster.health>0&&e.status==="ongoing"){const j=Ci(e);i(j)}},g);return()=>clearTimeout(m)},[e,i]),e?t.jsxs(t.Fragment,{children:[t.jsxs(k,{$direction:"row",$gap:"2rem",$justify:"space-between",$width:"100%",children:[t.jsxs(xn,{$direction:"row",$align:"flex-start",$gap:"0.5rem",children:[t.jsxs(Oe,{children:[t.jsx(kt,{race:e.player.race,gender:e.player.gender,size:80}),t.jsx(Ve,{children:e.player.level})]}),t.jsxs(k,{$direction:"column",$gap:"0.25rem",$align:"flex-start",$width:"100%",children:[t.jsx(Xe,{children:e.player.name}),t.jsxs(we,{children:[t.jsx(Ue,{$percentage:e.player.stats.health/e.player.stats.maxHealth*100}),t.jsxs(be,{children:[e.player.stats.health," / ",e.player.stats.maxHealth]})]})]})]}),t.jsx(pn,{children:"VS"}),t.jsxs(hn,{$direction:"row-reverse",$align:"flex-start",$gap:"0.5rem",children:[t.jsxs(Oe,{children:[t.jsx(Rl,{monster:e.monster,size:80}),t.jsx(Ve,{$reverse:!0,children:e.monster.level})]}),t.jsxs(k,{$direction:"column",$gap:"0.25rem",$align:"flex-end",$width:"100%",children:[t.jsx(Xe,{children:e.monster.name}),t.jsxs(we,{children:[t.jsx(Ue,{$percentage:e.monster.health/e.monster.maxHealth*100,$reverse:!0}),t.jsxs(be,{children:[e.monster.health," / ",e.monster.maxHealth]})]})]})]})]}),t.jsxs(un,{children:[t.jsx(yt,{children:"📜 Journal de Combat"}),[...e.battleLog].reverse().map(g=>t.jsx(jt,{$type:g.type,children:g.message},g.id))]}),t.jsxs(fn,{children:[t.jsxs(z,{style:{marginRight:"1.5rem"},$disabled:a,onClick:()=>u(()=>qe(e),"attack"),onMouseMove:g=>r({id:"basic-attack",name:"Attaque",icon:"⚔️",description:"Une attaque de base contre l'ennemi.",unlockLevel:1,cooldown:.5,damage:1},g),onMouseLeave:l,children:[t.jsx(J,{src:c.primaryStat==="intellect"?Y.magic:Y.attack,alt:"Attaquer"}),t.jsx(ee,{children:"&"})]}),f.map((g,m)=>{const j=d[m][0]===!1,y=ki(g);return t.jsxs(z,{$disabled:!j,onMouseLeave:l,onMouseMove:b=>r(g,b),onClick:()=>u(()=>Pe(e,g),"spell",m,g.cooldown),children:[y?t.jsx(J,{src:y,alt:g.name}):t.jsx(gr,{children:g.icon}),t.jsx(ee,{children:p[f.indexOf(g)]})]},g.id)}),Array.from({length:5-f.length}).map((g,m)=>t.jsx(z,{},m)),t.jsxs(z,{style:{marginLeft:"1.5rem"},$disabled:a,onMouseMove:g=>r({id:"basic-defend",name:"Défense",icon:"🛡️",description:"Une action de défense pour réduire les dégâts reçus de 50%.",unlockLevel:1,cooldown:.5,damage:0},g),onMouseLeave:l,onClick:()=>u(()=>Pi(e),"attack"),children:[t.jsx(J,{src:Y.defend,alt:"Défendre"}),t.jsx(ee,{children:"è"})]}),t.jsxs(z,{$disabled:a,onMouseMove:g=>r({id:"basic-flee",name:"Fuir",icon:"🏃‍♂️",description:"Fuyez pauvre fou ! Tentez votre chance pour échapper au combat.",unlockLevel:1,cooldown:.5,damage:0},g),onMouseLeave:l,onClick:()=>u(()=>Ii(e),"attack"),children:[t.jsx(J,{src:Y.flee,alt:"Fuir"}),t.jsx(ee,{children:"_"})]})]})]}):t.jsx("div",{children:"Loading..."})}const mn=o.div`
  cursor: pointer;
`,yn=o(Me)`
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
`,jn=o.div`
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
`,kn=o.div`
    grid-area: name;
    font-size: ${({theme:e})=>e.fontSizes.sm};
    font-weight: ${({theme:e})=>e.fontWeights.bold};
    color: ${({theme:e})=>e.colors.primary.gold};
    height: 25px;
`,wn=o.div`
    font-size: ${({theme:e})=>e.fontSizes.xs};
    grid-area: desc;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    gap: ${({theme:e})=>e.spacing.sm};
`;function bn(){const{character:e}=w(),{shop:i}=Cs(),{showItemTooltip:s,hideTooltip:r}=he(),l=(n,a)=>{e&&(e.gold<n.price*a||e.level<n.level||Is(n.id,e,a))};return t.jsxs(t.Fragment,{children:[t.jsx(Ee,{children:t.jsx(Q,{$active:!0,onClick:()=>{},children:"Toutes"})}),t.jsx(yn,{children:i.filter(n=>n.level<=e.level).map(n=>{const a=e.gold>=n.price;return t.jsxs(jn,{children:[t.jsx(mn,{onMouseMove:x=>s(n,x),onMouseLeave:r,style:{gridArea:"icon"},children:t.jsx(xe,{itemType:n.slot??"",itemName:n.name,quality:n.quality,size:64})}),t.jsx(kn,{children:n.name}),t.jsxs(wn,{children:[t.jsxs("span",{children:["Level : ",n.level]}),t.jsx(D,{onClick:()=>l(n,1.8),disabled:!a,$size:"small",$variant:"secondary",children:a?t.jsx(E,{amount:Math.floor(n.price*1.8),variant:"small"}):"Trop cher"})]})]},n.id)})})]})}const vn=o.div`
  cursor: pointer;
`,$n=o(Me)`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: ${({theme:e})=>e.spacing.md};

  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 810px) {
    grid-template-columns: repeat(2, 1fr);
  }
`,Bn=o.div`
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
`,Fn=o.div`
    grid-area: name;
    font-size: ${({theme:e})=>e.fontSizes.sm};
    font-weight: ${({theme:e})=>e.fontWeights.bold};
    color: ${({theme:e})=>e.colors.primary.gold};
    height: 25px;
    line-height: 14px;
`,Ln=o.div`
    font-size: ${({theme:e})=>e.fontSizes.xs};
    grid-area: desc;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    gap: ${({theme:e})=>e.spacing.sm};
`,Mn=o.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing.sm};
`,Wn=o.div`
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
`,An=o.div`
  flex: 1;
  text-align: center;
  font-size: ${({theme:e})=>e.fontSizes.xl};
  color: ${({theme:e})=>e.colors.neutral.white};
  font-weight: ${({theme:e})=>e.fontWeights.bold};
`;function Dn(){const{character:e,updateCharacter:i}=w(),[s,r]=h.useState("all"),[l,n]=h.useState({}),a=Gi(e?.level||1,s==="all"?void 0:s),x=c=>l[c]||1,d=(c,p)=>{n(u=>({...u,[c]:Math.max(1,p)}))},f=c=>{if(!e)return;const p=x(c.id),u=c.price*p;if(e.gold<u)return;const g=e.inventory??{potions:[]},m={...g,potions:g.potions||[]},j=Zi(m,c.id,p),y={...e,gold:e.gold-u,inventory:{...g,potions:j.potions}};i(y),n(b=>({...b,[c.id]:1}))};return t.jsxs(t.Fragment,{children:[t.jsxs(Ee,{children:[t.jsx(Q,{$active:s==="all",onClick:()=>r("all"),children:"Toutes"}),t.jsx(Q,{$active:s==="health",onClick:()=>r("health"),children:"❤️ Vie"}),t.jsx(Q,{$active:s==="mana",onClick:()=>r("mana"),children:"💙 Mana"}),t.jsx(Q,{$active:s==="effect",onClick:()=>r("effect"),children:"💙 Elixir"})]}),t.jsx($n,{children:a.map(c=>{if(!e)return null;const p=x(c.id),u=c.price*p,g=e.gold>=u;return t.jsxs(Bn,{children:[t.jsx(vn,{style:{gridArea:"icon"},children:t.jsx(wt,{potion:c,size:64})}),t.jsx(Fn,{children:c.name}),t.jsx(Ln,{children:t.jsxs(Wn,{children:[t.jsxs(Mn,{children:[t.jsx(fe,{onClick:()=>d(c.id,p-1),disabled:p<=1,children:"-"}),t.jsx(An,{children:p}),t.jsx(fe,{onClick:()=>d(c.id,p+1),disabled:u>=e.gold&&p>0,children:"+"}),t.jsx(fe,{onClick:()=>d(c.id,p+10),disabled:u>=e.gold&&p>0,children:"+10"})]}),t.jsx(D,{onClick:()=>f(c),disabled:!g,$size:"small",$variant:"secondary",children:g?t.jsx(E,{amount:u,variant:"small"}):"Trop cher"})]})})]},c.id)})})]})}const Ee=o.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing.md};
  justify-content: center;
  margin-bottom: ${({theme:e})=>e.spacing.md};
`,Q=o.button`
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
`;function En(){const{character:e}=w(),[i,s]=h.useState("potions");return e?t.jsxs(t.Fragment,{children:[t.jsx(de,{children:"🏪 Boutique"}),t.jsxs(Z,{children:["Bienvenue dans la boutique ! Achetez des potions et de l'équipement pour améliorer votre personnage.",t.jsx("br",{}),"Toutes les 15 minutes, les stocks d'équipement sont réapprovisionnés."]}),t.jsxs(B,{children:[t.jsxs(Ee,{children:[t.jsx(Q,{$active:i==="potions",onClick:()=>s("potions"),children:"🧪 Potions"}),t.jsx(Q,{$active:i==="equipment",onClick:()=>s("equipment"),children:"⚔️ Équipement"})]}),i==="potions"&&t.jsx(Dn,{}),i==="equipment"&&t.jsx(bn,{})]})]}):null}const Sn=o.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(60px, 1fr));
  gap: ${({theme:e})=>e.spacing.sm};
  max-height: 250px;
  overflow-y: auto;
`,Qn=o.div`
  background: rgba(0, 0, 0, 0.3);
  border-radius: ${({theme:e})=>e.borderRadius.md};
  display: flex;
  flex-direction: column;
  align-items: center;
`,qn=o.div`
  cursor: pointer;
`,Pn=o.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing.xs};
  width: 100%;
`,Ye=o(D)`
padding: ${({theme:e})=>e.spacing.xs} ${({theme:e})=>e.spacing.sm};
`;function In(){const{character:e,updateCharacter:i}=w(),{showItemTooltip:s,hideTooltip:r}=he();if(!e)return null;const l=d=>{const f={...d};delete f.equiped;const c=e.inventory.equipments||{},p=c[d.slot],u={...c,[d.slot]:f};let g=(e.inventory.bags||[]).filter(j=>("item"in j?j.item:j).id!==d.id);if(p){const j={...p};delete j.equiped,g=[...g,{itemId:j.id,item:j}]}g=ke(g);const m=Le(u);i({...e,stats:{...e.stats,maxHealth:H(e.level,e.classe.baseHP)+(m.stamina||0),strength:$(e.race.baseStats.strength,e.level)+(m.strength||0),agility:$(e.race.baseStats.agility,e.level)+(m.agility||0),intellect:$(e.race.baseStats.intellect,e.level)+(m.intellect||0),stamina:$(e.race.baseStats.stamina,e.level)+(m.stamina||0),attackPower:ae(e)+(m.attackPower||0),armor:m.armor||0,critChance:m.critChance||0},inventory:{...e.inventory,equipments:u,bags:g}})},n=d=>{const f=Math.floor((d.price||0)*10);let c=(e.inventory.bags||[]).filter(p=>("item"in p?p.item:p).id!==d.id);c=ke(c),i({...e,inventory:{...e.inventory,bags:c},gold:e.gold+f})},a=(e.inventory?.bags||[]).slice().sort((d,f)=>{const c="item"in d?d.item:d;return(("item"in f?f.item:f).level||0)-(c.level||0)}),x=()=>{let d=0;const f=(e.inventory.bags||[]).filter(c=>{const p="item"in c?c.item:c;return d+=p.price||0,!1});i({...e,inventory:{...e.inventory,bags:f},gold:e.gold+d})};return t.jsxs(B,{children:[t.jsx(U,{children:t.jsx(O,{children:"🎒 Sac"})}),t.jsx(k,{$justify:"flex-end",$align:"center",$gap:"0.5rem",style:{marginBottom:"1rem"},children:a.length>0&&t.jsxs(t.Fragment,{children:["Tout vendre : "," ",t.jsx(Ye,{onClick:()=>x(),$size:"small",$variant:"secondary",children:t.jsx(E,{amount:a.reduce((d,f)=>{const c="item"in f?f.item:f;return d+Math.floor(c.price||0)},0),variant:"small"})})]})}),a.length>0?t.jsx(Sn,{children:a.map((d,f)=>{const c="item"in d?d.item:d;return c.equiped=e.inventory.equipments?e.inventory.equipments[c.slot]:void 0,!c||!c.name?null:t.jsxs(Qn,{$quality:c.quality,children:[t.jsx(qn,{onClick:()=>l(c),onMouseMove:p=>s(c,p),onMouseLeave:r,children:t.jsx(xe,{itemType:c.slot,itemName:c.name,quality:c.quality,size:52})}),t.jsx(Pn,{children:t.jsx(Ye,{onClick:()=>n(c),$size:"small",$variant:"secondary",children:t.jsx(E,{amount:c.price||0,variant:"short"})})})]},f)})}):t.jsx(We,{children:"Aucun équipement dans le sac"})]})}const Tn=o.div`
    // margin-top: -16px;
    background: rgba(0, 0, 0, 1);
    border: 1px solid ${({theme:e})=>e.colors.primary.gold};
    padding: 0 4px;
    border-radius: 4px;
    color: white;
    font-weight: bold;
    position: absolute;
    bottom: -0.5rem;
`;function Cn(e){if(e<=0)return"00:00";const i=Math.floor(e/1e3),s=Math.floor(i/3600),r=Math.floor(i%3600/60),l=i%60,n=a=>a.toString().padStart(2,"0");return s>0?`${s}:${n(r)}:${n(l)}`:`${n(r)}:${n(l)}`}const Hn=({expiresAt:e})=>{const{character:i,updateCharacter:s}=w(),[r,l]=h.useState(e-Date.now());return h.useEffect(()=>{if(r<=0){if(!i)return;const a=_i(i);i.buffs=a,s(i);return}const n=setInterval(()=>{l(e-Date.now())},1e3);return()=>clearInterval(n)},[e,r,i,s]),t.jsx(Tn,{style:{fontSize:"0.8rem",color:r<=6e4?"red":"inherit"},children:Cn(r)})},_n=o.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: ${({theme:e})=>e.spacing.xs};
`,zn=o.div`
  background: rgba(0, 0, 0, 0.3);
  border: 2px solid ${({theme:e})=>e.colors.primary.gold};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  padding: ${({theme:e})=>e.spacing.xs};
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`,Rn=o.div`
  font-size: 1.5rem;
`,Gn=o.div`
  font-size: 1rem;
  text-align: center;
  position: absolute;
  bottom: 1.5rem;
`;function Zn(){const{character:e}=w(),i=tt(e?.buffs||[],s=>s.effect);return t.jsxs(B,{children:[t.jsx(U,{children:t.jsx(O,{children:"🚀 Buff"})}),!e||!Array.isArray(e.buffs)||e.buffs.length===0?t.jsx(We,{children:"Aucun buff actif"}):t.jsx(_n,{children:Object.values(i).map(s=>t.jsxs(zn,{children:[t.jsx(Rn,{children:s[0].icon}),t.jsxs(Gn,{children:["x",s.length]}),t.jsx(Hn,{expiresAt:Math.max(...s.map(r=>r.expiresAt))})]},s[0].expiresAt+(s[0].name||"")))})]})}const Nn=e=>({minor:"poor",lesser:"common",normal:"common",greater:"uncommon",superior:"rare",ultimate:"epic"})[e],Un=o.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(80px, 1fr));
  gap: ${({theme:e})=>e.spacing.md};
`,On=o.div`
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
`,Vn=o.div`
  color: ${({theme:e})=>e.colors.primary.gold};
  font-size: ${({theme:e})=>e.fontSizes.base};
  font-weight: ${({theme:e})=>e.fontWeights.bold};
  text-align: center;
`;function Xn(){const{character:e,updateCharacter:i}=w(),{showTooltip:s,hideTooltip:r}=De();if(!e)return null;const l=n=>{if(!e.inventory)return;const a=ye.find(u=>u.id===n);if(!a)return;const x=Ni(e.inventory,n);if(!x.success){alert("Impossible d'utiliser cette potion !");return}let d=e.stats.health||0;const f=e.buffs||[],c=u=>{switch(u.quality){case"minor":return 1e3*60*10;case"lesser":return 1e3*60*20;case"normal":return 1e3*60*30;case"greater":return 1e3*60*40;case"superior":return 1e3*60*50;case"ultimate":return 1e3*60*60;default:return 0}},p=a.id.split("-").pop();switch(a.type){case"health":d=Math.min(e.stats.maxHealth||e.stats.health||0,(e.stats.health||0)+a.restoreAmount),d+=Math.floor((e.stats.maxHealth||0)*(a.restorePercent||0)/100);break;case"effect":f.push({id:`potion-${p}-${Date.now()}`,effect:p,amount:a.restorePercent||0,duration:c(a),icon:a.icon,name:a.name,description:a.description,expiresAt:Date.now()+c(a)});break}d<0&&(d=0),d>(e.stats.maxHealth||0)&&(d=e.stats.maxHealth||0),i({...e,inventory:x.inventory,stats:{...e.stats,health:d},buffs:f})};return t.jsxs(B,{children:[t.jsx(U,{children:t.jsx(O,{children:"🧪 Potions"})}),e.inventory?.potions&&e.inventory.potions.length>0?t.jsx(Un,{children:e.inventory.potions.map((n,a)=>{const x=ye.find(d=>d.id===n.potionId);return x?t.jsxs(On,{onClick:()=>l(x.id),children:[t.jsx("div",{onMouseMove:d=>{s({title:x.name,description:x.description,quality:Nn(x.quality),level:x.requiredLevel},{x:d.clientX,y:d.clientY})},onMouseLeave:r,children:t.jsx(wt,{potion:x,size:48})}),t.jsxs(Vn,{children:["x",n.quantity]})]},a):null})}):t.jsx(We,{children:"Aucune potion"})]})}const Yn=o.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(200px, 1fr));
  gap: ${({theme:e})=>e.spacing.md};
`,L=o.div`
  display: flex;
  justify-content: space-between;
  padding: ${({theme:e})=>e.spacing.xs};
  background: rgba(0, 0, 0, 0.3);
  border-radius: ${({theme:e})=>e.borderRadius.md};
  border-left: 3px solid ${({theme:e})=>e.colors.primary.gold};
`,M=o.span`
  color: ${({theme:e})=>e.colors.text.secondary};
  font-size: ${({theme:e})=>e.fontSizes.sm};
`,W=o.span`
  color: ${({theme:e})=>e.colors.primary.gold};
  font-weight: ${({theme:e})=>e.fontWeights.bold};
  font-size: ${({theme:e})=>e.fontSizes.base};
`;function Kn(){const{character:e}=w();return e?t.jsxs(B,{children:[t.jsx(U,{children:t.jsx(O,{children:"📊 Statistiques"})}),t.jsxs(Yn,{children:[t.jsxs(L,{children:[t.jsx(M,{children:"❤️ Vie"}),t.jsxs(W,{children:[e.stats.health," / ",e.stats.maxHealth]})]}),t.jsxs(L,{children:[t.jsx(M,{children:"💰 Or"}),t.jsx(W,{children:t.jsx(E,{amount:e.gold})})]}),t.jsxs(L,{children:[t.jsx(M,{children:"⚔️ Puissance"}),t.jsx(W,{children:e.stats.attackPower})]}),t.jsxs(L,{children:[t.jsx(M,{children:"🛡️ Armure"}),t.jsx(W,{children:e.stats.armor})]}),t.jsxs(L,{children:[t.jsx(M,{children:"💪 Force"}),t.jsx(W,{children:e.stats.strength})]}),t.jsxs(L,{children:[t.jsx(M,{children:"🎯 Agilité"}),t.jsx(W,{children:e.stats.agility})]}),t.jsxs(L,{children:[t.jsx(M,{children:"🧠 Intelligence"}),t.jsx(W,{children:e.stats.intellect})]}),t.jsxs(L,{children:[t.jsx(M,{children:"💚 Endurance"}),t.jsx(W,{children:e.stats.stamina})]}),t.jsxs(L,{children:[t.jsx(M,{children:"⚡ Critique"}),t.jsxs(W,{children:[((e.stats.critChance??0)/100).toFixed(2),"%"]})]})]})]}):null}const Jn=o.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: ${({theme:e})=>e.spacing.md};

  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }
`,eo=o.div`
  background: rgba(0, 0, 0, 0.3);
  border: 2px solid rgba(255, 215, 0, 0.3);
  border-radius: ${({theme:e})=>e.borderRadius.md};
  padding: ${({theme:e})=>e.spacing.xs};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
`,to=o.div`
  color: ${({theme:e})=>e.colors.text.secondary};
  font-size: ${({theme:e})=>e.fontSizes.xs};
  margin-bottom: ${({theme:e})=>e.spacing.xs};
  text-transform: uppercase;
  text-align: center;
`,io=o.div`
  cursor: pointer;
`,so=o.div`
  color: ${({theme:e})=>e.colors.text.secondary};
  font-style: italic;
  font-size: ${({theme:e})=>e.fontSizes.sm};
  text-align: center;
`;function ro(){const{character:e,updateCharacter:i}=w(),{showItemTooltip:s,hideTooltip:r}=he(),[l,n]=h.useState({});if(h.useEffect(()=>{e&&e.inventory&&n(e.inventory.equipments||{})},[e]),!e)return null;const a=x=>{if(!e.inventory.equipments||!e.inventory.equipments[x])return;const d=e.inventory.equipments[x];let f=[...e.inventory.bags||[],{itemId:d.id,item:d}];const c={...e.inventory.equipments};delete c[x],f=ke(f);const p=Le(c);i({...e,inventory:{...e.inventory,equipments:c,bags:f},stats:{...e.stats,maxHealth:H(e.level,e.classe.baseHP)+(p.stamina||0),strength:$(e.race.baseStats.strength,e.level)+(p.strength||0),agility:$(e.race.baseStats.agility,e.level)+(p.agility||0),intellect:$(e.race.baseStats.intellect,e.level)+(p.intellect||0),stamina:$(e.race.baseStats.stamina,e.level)+(p.stamina||0),attackPower:ae(e)+(p.attackPower||0),armor:p.armor||0,critChance:p.critChance||0}})};return t.jsxs(B,{children:[t.jsx(U,{children:t.jsx(O,{children:"⚔️ Équipement"})}),t.jsx(Jn,{children:["weapon","head","chest","legs","boots","jewelry"].map(x=>{const d={weapon:"⚔️ Arme",head:"🪖 Tête",chest:"👕 Torse",legs:"👖 Jambes",boots:"👢 Bottes",jewelry:"💍 Bijou"},f=l?.[x];return t.jsxs(eo,{children:[t.jsx(to,{children:d[x]}),f?t.jsx(io,{onClick:()=>a(x),onMouseMove:c=>s(f,c),onMouseLeave:r,children:t.jsx(xe,{itemType:x,itemName:f.name,quality:f.quality,size:52})}):t.jsx(so,{children:"Vide"})]},x)})})]})}const lo=o.div`
  width: 100%;
  // margin-bottom: ${({theme:e})=>e.spacing.xl};
`,no=o.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: ${({theme:e})=>e.spacing.xs};
  font-size: ${({theme:e})=>e.fontSizes.sm};
  color: ${({theme:e})=>e.colors.text.secondary};
`,oo=o.div`
  width: 100%;
  height: 24px;
  background: rgba(0, 0, 0, 0.4);
  border: 2px solid ${({theme:e})=>e.colors.primary.gold};
  border-radius: ${({theme:e})=>e.borderRadius.full};
  overflow: hidden;
  position: relative;
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.3);
`,ao=o.div`
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
`,co=o.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-weight: ${({theme:e})=>e.fontWeights.bold};
  color: ${({theme:e})=>e.colors.text.primary};
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.8);
  font-size: ${({theme:e})=>e.fontSizes.xs};
  z-index: 1;
`;function xo(){const{character:e}=w();if(!e)return null;const i=e.stats.experience/e.stats.experienceToNextLevel*100;return t.jsxs(lo,{children:[t.jsxs(no,{children:[t.jsxs("span",{children:["Niveau ",e.level]}),t.jsxs("span",{children:[e.stats.experience," / ",e.stats.experienceToNextLevel," XP"]})]}),t.jsxs(oo,{children:[t.jsx(ao,{$progress:Math.max(0,Math.min(100,i))}),t.jsxs(co,{children:[Math.max(0,Math.round(i)),"%"]})]})]})}function ho(){return t.jsxs(k,{$direction:"column",$gap:"1rem",$width:"100%",children:[t.jsx(xo,{}),t.jsxs(k,{$direction:"row",$gap:"1rem",$justify:"flex-start",$align:"flex-start",$width:"100%",children:[t.jsxs(k,{$direction:"column",$gap:"1rem",$width:"100%",children:[t.jsx(ro,{}),t.jsx(Kn,{})]}),t.jsxs(k,{$direction:"column",$gap:"1rem",$align:"flex-start",$width:"100%",children:[t.jsx(Zn,{}),t.jsx(Xn,{}),t.jsx(In,{})]})]})]})}function po(){return t.jsx(ho,{})}function fo(){const{dungeons:e}=ht();return t.jsxs(B,{children:[t.jsx("h4",{children:"Dungeon Finder"}),e.map(i=>t.jsxs("div",{children:[t.jsx("h3",{children:i.name}),t.jsx("div",{children:i.who?.map(s=>t.jsxs("div",{children:[s.name," (Level ",s.level," ",s.classe.name,")"]},s.id))||"No participants yet."})]},i.docId))]})}const uo=o.div`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  justify-content: center;
`,go=o.div`
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
  "level desc"
  "dungeon dungeon";
  grid-template-columns: auto 1fr;
  grid-template-rows: 30px 1fr;
  gap: 0 16px;
  font-size: ${({theme:e})=>e.fontSizes.sm};
`,mo=o.div`
  grid-area: level;
  width: fit-content;
  padding: ${({theme:e})=>e.spacing.xs} ${({theme:e})=>e.spacing.sm};
  margin: auto;
  background-color: ${({theme:e})=>e.colors.winter.deepBlue};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  font-size: ${({theme:e})=>e.fontSizes.xs};
  color: ${({theme:e})=>e.colors.text.primary};
`,yo=o.div`
  grid-area: desc;
  width: 200px;
  text-align: left;
  font-size: ${({theme:e})=>e.fontSizes.sm};
  color: ${({theme:e})=>e.colors.text.secondary};
`,jo=o.div`
  grid-area: name;
  height: 25px;
  font-size: ${({theme:e})=>e.fontSizes.lg};
  font-weight: ${({theme:e})=>e.fontWeights.bold};
  color: ${({theme:e})=>e.colors.primary.gold};
`,ko=o.div`
  grid-area: dungeon;
  margin-top: 8px;
  font-size: ${({theme:e})=>e.fontSizes.xs};
  font-weight: ${({theme:e})=>e.fontWeights.bold};
  color: ${({theme:e})=>e.colors.primary.bronze};
  text-align: center;
`;function wo(e){let i=je[0];for(const s of je)if(e>=s.levelRange[0]&&e<=s.levelRange[1]){i=s;break}else e>s.levelRange[1]&&(i=s);return i}function bo(){const{character:e}=w(),{findDungeonById:i,currentDungeon:s}=ht(),[r,l]=h.useState(1),[n,a]=h.useState(wo(e?.level||1)),{createNewBattle:x}=ce(),d=me.find(f=>f.masterZone===n.id);return h.useEffect(()=>{if(n){const f=n.levelRange[0],c=n.levelRange[1],p=Math.min(Math.max(e?.level||1,f),c);l(p)}},[e,r,n]),e?t.jsxs(t.Fragment,{children:[t.jsx(de,{children:"🗺️ Exploration"}),t.jsxs(Z,{children:["Partez à l'aventure dans les terres sauvages et affrontez des monstres !",t.jsx("br",{}),"Gagnez de l'expérience, de l'or et trouvez des équipements légendaires."]}),t.jsx(B,{children:t.jsxs(k,{$direction:"column",$align:"center",$gap:"2rem",children:[t.jsx(uo,{children:je.map(f=>{const c=f.componentIcon,p=me.find(u=>u.masterZone===f.id);return e.level<f.levelRange[0]?null:t.jsxs(go,{$selected:n.id===f.id,onClick:()=>a(f),children:[t.jsx("div",{style:{gridArea:"icon"},children:t.jsx(c,{},f.id)}),t.jsxs(mo,{children:[f.levelRange[0]," - ",f.levelRange[1]]}),t.jsx(jo,{children:f.name}),t.jsx(yo,{children:f.description}),p&&e.level>=p.levelRequirement&&t.jsxs(ko,{children:["Donjons: ",p?p.name:"Aucun"]})]},f.id)})}),t.jsxs(k,{$justify:"center",$gap:"1rem",children:[t.jsx(D,{$size:"large",$variant:"alliance",onClick:()=>{x(e,r,n)},children:"Parcourir la Zone"}),t.jsx(D,{$size:"large",$variant:"horde",disabled:s!==null||d&&e.level<d.levelRequirement,onClick:()=>{d&&i(d)},children:"Trouver un Donjon"})]})]})}),t.jsx(fo,{})]}):null}function vo(){return t.jsx(En,{})}const F=o.div`
    flex: ${({$flex:e})=>e||1};
    text-align: ${({$align:e})=>e||"center"};
    padding: 0.8rem 0.2rem;
    font-size: 1.1rem;
    color: ${({$color:e})=>e||"inherit"};
    font-weight: ${({$flex:e})=>e===2?"bold":"normal"};
`;function $o(){const{members:e}=Es(),[i,s]=h.useState(e||[]),[r,l]=h.useState("score");return h.useEffect(()=>{s(Ri(e,r)||[])},[e,r]),t.jsxs(t.Fragment,{children:[t.jsx(de,{children:"🏆 Leaderboard"}),t.jsxs(Z,{children:["Classement des meilleurs aventuriers d'Azeroth.",t.jsx("br",{}),"Affrontez les autres joueurs pour grimper dans le classement !"]}),t.jsxs(B,{children:[t.jsxs(k,{$direction:"row",$justify:"space-between",$gap:"0",style:{paddingRight:"1rem"},children:[t.jsx(F,{$flex:.5,onClick:()=>{},children:"Rank"}),t.jsx(F,{$flex:1.5,children:"Name"}),t.jsx(F,{$flex:1,style:{cursor:"pointer"},onClick:()=>l("level"),children:"Level"}),t.jsx(F,{$flex:2,children:"Gold"}),t.jsx(F,{$flex:1,children:"Kill"}),t.jsx(F,{$flex:1,children:"HFs"}),t.jsx(F,{$flex:1,style:{cursor:"pointer"},onClick:()=>l("score"),children:"Score"})]}),t.jsx(Me,{children:i&&i.map((n,a)=>t.jsxs(k,{$direction:"row",$justify:"space-between",$gap:"0",style:{borderBottom:"1px solid #555",backgroundColor:a%2===0?"rgba(255, 255, 255, 0.05)":"transparent"},children:[t.jsx(F,{$flex:.5,children:a+1}),t.jsx(F,{$flex:1.5,$align:"left",$color:G[n.classe.id]?.color||"#fff",children:n.name}),t.jsx(F,{$flex:1,children:n.level}),t.jsx(F,{$flex:2,children:t.jsx(E,{amount:n.gold})}),t.jsx(F,{$flex:1,children:n.defeatedMonsters}),t.jsx(F,{$flex:1,children:n.achievements?.length||0}),t.jsx(F,{$flex:1,children:le(n.score||0)})]},n.id))})]})]})}function Bo(){return t.jsx($o,{})}function Fo(){return t.jsx(gn,{})}const Lo=o.input.attrs({type:"radio"})`
  opacity: 0;
  position: absolute;
  left: -9999px;
`,Mo=o.label`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem 1.5rem;
  border-radius: 1rem;
  border: 2px solid
    ${({$checked:e,$borderColor:i,theme:s})=>e?i||s.colors.primary.gold:s.colors.winter.darkIce};
  background: ${({$checked:e,$backgroundColor:i,theme:s})=>e?i||s.colors.winter.iceBlue:"rgba(255, 255, 255, 0.1)"};
  color: ${({theme:e,$checked:i})=>i?e.colors.primary.gold:e.colors.neutral.white};
  font-weight: 600;
  font-size: 1.1rem;
  cursor: ${({$disabled:e})=>e?"not-allowed":"pointer"};
  opacity: ${({$disabled:e})=>e?.5:1};
  box-shadow: ${({$checked:e})=>e?"0 0 8px #FFD70055":"none"};
  transition: all 0.2s;
  width: 100%;

  &:hover {
    border-color: ${({theme:e})=>e.colors.primary.gold};
    background: ${({$checked:e,$backgroundColor:i,theme:s})=>e?i||s.colors.winter.iceBlue:s.colors.winter.darkIce};
  }
`,te=({checked:e,onChange:i,label:s,value:r,name:l,borderColor:n,backgroundColor:a,disabled:x})=>t.jsxs(Mo,{$checked:e,$borderColor:n,$backgroundColor:a,$disabled:x,children:[t.jsx(Lo,{checked:e,onChange:i,value:r,name:l,disabled:x}),s]});function Wo({race:e,gender:i,classe:s,displayName:r}){return t.jsxs(Ao,{children:[t.jsx(Do,{children:r}),t.jsxs(k,{children:[t.jsx(kt,{race:e,gender:i,size:100}),t.jsx(mt,{classe:s,size:100})]}),t.jsx(B,{children:s.description})]})}const Ao=o.div`
    width: 100%;
    max-width: 250px;
    height: 300px;
    // background-color: #222;
    // border: 2px solid #555;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    color: #fff;
    padding: ${e=>e.theme.spacing.md};
`,Do=o.h2`
  margin: 0;
  font-size: 1.5rem;
  color: #ffd700;
`;function Eo(){const[e,i]=h.useState(!1);h.useEffect(()=>{const y=setTimeout(()=>i(!0),100);return()=>clearTimeout(y)},[]);const{user:s}=Fe(),{createNewCharacter:r}=w(),[l,n]=h.useState(s.displayName||""),[a,x]=h.useState(null),[d,f]=h.useState(null),[c,p]=h.useState(null),[u,g]=h.useState(null),m=h.useMemo(()=>a?ci(a):[],[a]),j=h.useMemo(()=>!c||!a?[]:ti(c,a),[c,a]);return s?t.jsxs("div",{style:{opacity:e?1:0,transition:"opacity 400ms ease"},children:[t.jsx(de,{children:"🗺️ Bienvenue Aventurier"}),t.jsxs(Z,{children:["Pour fêter les fêtes d'hiver, je t'invite à découvrir notre toute nouvelle aventure RPG en ligne !",t.jsx("br",{}),"Crée ton personnage, explore des terres sauvages, affronte des monstres et grimpe dans le classement des meilleurs aventuriers !",t.jsx("br",{}),"Rejoins-nous dès maintenant et vis une expérience épique remplie de batailles et de trésors à découvrir. Bonne aventure à toi !"]}),t.jsx(B,{children:s?.displayName?t.jsxs(t.Fragment,{children:[t.jsxs(Z,{children:["Okay ",s.displayName,", maintenant tu va devoir crée un personnage."]}),t.jsxs(k,{$gap:"1rem",$align:"flex-start",$justify:"flex-start",$direction:"row",children:[t.jsxs(k,{$direction:"column",children:[t.jsxs(_,{children:[t.jsx(I,{children:"Faction"}),Object.entries(ai).map(([y,b])=>t.jsx(te,{checked:a?.id===y,onChange:()=>{x(b),p(null),g(null)},label:t.jsxs("span",{children:[b.icon," ",b.name]}),value:y,name:"faction",borderColor:b.color,backgroundColor:b.bgColor},y))]}),t.jsxs(_,{children:[t.jsx(I,{children:"Genre"}),Object.entries(di).map(([y,b])=>t.jsx(te,{checked:d?.id===y,onChange:()=>{f(b)},label:t.jsxs("span",{children:[b.icon," ",b.name]}),value:y,name:"gender",borderColor:b.color,backgroundColor:b.bgColor},y))]})]}),a&&t.jsxs(_,{children:[t.jsx(I,{children:"Race"}),t.jsx(k,{$direction:"column",$gap:"0.5rem",children:m.map(y=>t.jsx(te,{checked:c?.id===y.id,onChange:()=>{p(y),g(null)},label:t.jsxs("span",{children:[y.icon," ",y.name]}),value:y.id,name:"race",borderColor:a.color,backgroundColor:a.bgColor},y.id))})]}),c&&a&&t.jsxs(_,{children:[t.jsx(I,{children:"Classe"}),t.jsx(us,{$columns:2,$gap:"0.5rem",children:j.map(y=>t.jsx(te,{checked:u?u.id===y.id:!1,onChange:()=>g(y),label:t.jsxs("span",{style:{color:y.color},children:[y.icon," ",y.name]}),value:y.id,name:"class",borderColor:y.color,backgroundColor:"#222",disabled:!1},y.id))})]}),d&&a&&c&&u&&t.jsxs(k,{$direction:"column",$gap:"0.5em",$align:"center",$justify:"center",children:[t.jsx(I,{children:"Ton personnage est prêt !"}),t.jsx(Wo,{race:c,gender:d,classe:u,displayName:l||s.displayName||"Aventurier"}),t.jsx(Te,{onClick:()=>{r(a,d,c,u)},children:"Créer mon personnage"})]})]})]}):t.jsxs(_,{style:{margin:"0 auto"},children:[t.jsx(I,{children:"Comment tu souhaites t'appeler ?"}),t.jsx(gs,{type:"text",value:l,onChange:y=>n(y.target.value),placeholder:"Entrez un nom (min. 3 caractères)",minLength:3,autoFocus:!0}),t.jsx(Te,{onClick:()=>{l.length>=3&&Yt({displayName:l})},children:"Valider"})]})})]}):null}function So(){return t.jsx("div",{children:t.jsx("h2",{children:"Déplacement des joueurs en temps réel"})})}function Qo(){return t.jsx(So,{})}const ie=o.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`,se=o.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`,Ke=o.h2`
  font-family: ${({theme:e})=>e.fonts.secondary};
  font-size: ${({theme:e})=>e.fontSizes["2xl"]};
  color: ${({theme:e})=>e.colors.winter.iceBlue};
  text-align: center;
  margin-bottom: ${({theme:e})=>e.spacing.md};
  font-weight: ${({theme:e})=>e.fontWeights.light};
  letter-spacing: 2px;
  text-transform: uppercase;
`;function qo(){const{user:e,loading:i}=Fe(),{character:s,hasCharacter:r,loading:l}=w();return i||l?t.jsx(ie,{children:t.jsxs(se,{children:[t.jsx(Ge,{}),t.jsx(Ke,{children:"Chargement..."})]})}):e&&!r?t.jsx(ie,{children:t.jsx(se,{children:t.jsx(Ie,{children:t.jsx(Eo,{})})})}):e&&r&&s?t.jsx(ie,{children:t.jsx(Ui,{children:t.jsx(ms,{children:t.jsx(qs,{children:t.jsx(hs,{children:t.jsx(Ds,{children:t.jsxs(Ts,{children:[t.jsx(Ne,{}),t.jsx(se,{children:t.jsx(Ie,{children:t.jsxs(Bt,{children:[t.jsx(S,{path:"/",element:t.jsx(po,{})}),t.jsx(S,{path:"/exploration",element:t.jsx(bo,{})}),t.jsx(S,{path:"/battle",element:t.jsx(Fo,{})}),t.jsx(S,{path:"/shop",element:t.jsx(vo,{})}),t.jsx(S,{path:"/dungeon",element:t.jsx(Qo,{})}),t.jsx(S,{path:"/leaderboard",element:t.jsx(Bo,{})}),t.jsx(S,{path:"*",element:t.jsx(Ft,{to:"/",replace:!0})})]})})})]})})})})})})}):t.jsxs(ie,{children:[t.jsx(Ne,{}),t.jsxs(se,{children:[t.jsx(Ge,{}),t.jsx(Ke,{children:"Chargement..."})]})]})}function Po(){return t.jsx($t,{children:t.jsx(qo,{})})}Lt.createRoot(document.getElementById("root")).render(t.jsx(h.StrictMode,{children:t.jsxs(At,{theme:Nt,children:[t.jsx(Ut,{}),t.jsx(Jt,{children:t.jsx(Xi,{children:t.jsx(Zs,{children:t.jsx(Po,{})})})})]})}));
