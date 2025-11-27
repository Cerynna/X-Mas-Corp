import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
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
    font-family: ${({ theme }) => theme.fonts.body};
    background: linear-gradient(
      180deg,
      ${({ theme }) => theme.colors.neutral.black} 0%,
      ${({ theme }) => theme.colors.winter.deepBlue} 50%,
      ${({ theme }) => theme.colors.neutral.darkGray} 100%
    );
    background-attachment: fixed;
    color: ${({ theme }) => theme.colors.neutral.white};
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
        radial-gradient(2px 2px at 20% 30%, ${({ theme }) =>
          theme.colors.winter.snowWhite}, transparent),
        radial-gradient(2px 2px at 60% 70%, ${({ theme }) =>
          theme.colors.winter.snowWhite}, transparent),
        radial-gradient(1px 1px at 50% 50%, ${({ theme }) =>
          theme.colors.winter.snowWhite}, transparent),
        radial-gradient(1px 1px at 80% 10%, ${({ theme }) =>
          theme.colors.winter.snowWhite}, transparent),
        radial-gradient(2px 2px at 90% 60%, ${({ theme }) =>
          theme.colors.winter.snowWhite}, transparent);
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
    font-family: ${({ theme }) => theme.fonts.primary};
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    line-height: 1.2;
    color: ${({ theme }) => theme.colors.primary.gold};
    text-shadow: 
      2px 2px 4px rgba(0, 0, 0, 0.8),
      0 0 10px rgba(255, 215, 0, 0.3);
  }
  
  h1 {
    font-size: ${({ theme }) => theme.fontSizes["5xl"]};
    margin-bottom: ${({ theme }) => theme.spacing.xl};
  }
  
  h2 {
    font-size: ${({ theme }) => theme.fontSizes["4xl"]};
    margin-bottom: ${({ theme }) => theme.spacing.lg};
  }
  
  h3 {
    font-size: ${({ theme }) => theme.fontSizes["3xl"]};
    margin-bottom: ${({ theme }) => theme.spacing.md};
  }
  
  h4 {
    font-size: ${({ theme }) => theme.fontSizes["2xl"]};
    margin-bottom: ${({ theme }) => theme.spacing.md};
  }
  
  p {
    margin-bottom: ${({ theme }) => theme.spacing.md};
  }
  
  a {
    color: ${({ theme }) => theme.colors.winter.frostBlue};
    text-decoration: none;
    transition: ${({ theme }) => theme.transitions.fast};
    
    &:hover {
      color: ${({ theme }) => theme.colors.primary.gold};
      text-shadow: ${({ theme }) => theme.shadows.glow.gold};
    }
  }
  
  button {
    font-family: ${({ theme }) => theme.fonts.secondary};
    cursor: pointer;
    border: none;
    outline: none;
    transition: ${({ theme }) => theme.transitions.base};
  }
  
  /* Scrollbar personnalisée */
  ::-webkit-scrollbar {
    width: 12px;
  }
  
  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.neutral.darkGray};
    border-radius: ${({ theme }) => theme.borderRadius.md};
  }
  
  ::-webkit-scrollbar-thumb {
    background: linear-gradient(
      180deg,
      ${({ theme }) => theme.colors.primary.gold},
      ${({ theme }) => theme.colors.primary.bronze}
    );
    border-radius: ${({ theme }) => theme.borderRadius.md};
    border: 2px solid ${({ theme }) => theme.colors.neutral.darkGray};
    
    &:hover {
      background: ${({ theme }) => theme.colors.primary.gold};
      box-shadow: ${({ theme }) => theme.shadows.glow.gold};
    }
  }
  
  /* Sélection de texte */
  ::selection {
    background: ${({ theme }) => theme.colors.primary.gold};
    color: ${({ theme }) => theme.colors.neutral.black};
  }
  
  /* Utilitaires */
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 ${({ theme }) => theme.spacing.lg};
  }
`;
