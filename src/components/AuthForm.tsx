// import { useState } from 'react';
// import styled from 'styled-components';
// // import { signIn, signUp, signInWithGoogle } from '../firebase';
// import { WowButton } from './';

// const AuthModal = styled.div`
//   position: fixed;
//   top: 50%;
//   left: 50%;
//   transform: translate(-50%, -50%);
//   background: linear-gradient(135deg, rgba(30, 58, 95, 0.95), rgba(26, 31, 46, 0.98));
//   border: ${({ theme }) => theme.borders.medium} solid ${({ theme }) => theme.colors.primary.gold};
//   border-radius: ${({ theme }) => theme.borderRadius.lg};
//   padding: ${({ theme }) => theme.spacing['3xl']};
//   box-shadow: ${({ theme }) => theme.shadows.xl}, ${({ theme }) => theme.shadows.glow.blue};
//   max-width: 500px;
//   width: 90%;
//   z-index: ${({ theme }) => theme.zIndex.modal};
// `;

// const Overlay = styled.div`
//   position: fixed;
//   top: 0;
//   left: 0;
//   right: 0;
//   bottom: 0;
//   background: rgba(0, 0, 0, 0.8);
//   z-index: ${({ theme }) => theme.zIndex.modal};
// `;

// const Title = styled.h2`
//   font-family: ${({ theme }) => theme.fonts.display};
//   font-size: ${({ theme }) => theme.fontSizes['3xl']};
//   color: ${({ theme }) => theme.colors.primary.gold};
//   text-align: center;
//   margin-bottom: ${({ theme }) => theme.spacing.xl};
// `;

// const Form = styled.form`
//   display: flex;
//   flex-direction: column;
//   gap: ${({ theme }) => theme.spacing.lg};
// `;

// const Input = styled.input`
//   font-family: ${({ theme }) => theme.fonts.body};
//   font-size: ${({ theme }) => theme.fontSizes.base};
//   padding: ${({ theme }) => theme.spacing.md};
//   background: rgba(10, 14, 26, 0.6);
//   border: ${({ theme }) => theme.borders.thin} solid ${({ theme }) => theme.colors.neutral.gray};
//   border-radius: ${({ theme }) => theme.borderRadius.md};
//   color: ${({ theme }) => theme.colors.neutral.white};
//   transition: all ${({ theme }) => theme.transitions.base};

//   &:focus {
//     outline: none;
//     border-color: ${({ theme }) => theme.colors.primary.gold};
//     box-shadow: 0 0 10px rgba(255, 215, 0, 0.3);
//   }

//   &::placeholder {
//     color: ${({ theme }) => theme.colors.neutral.lightGray};
//   }
// `;

// const ButtonGroup = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: ${({ theme }) => theme.spacing.md};
//   margin-top: ${({ theme }) => theme.spacing.lg};
// `;

// const Divider = styled.div`
//   display: flex;
//   align-items: center;
//   text-align: center;
//   margin: ${({ theme }) => theme.spacing.lg} 0;
//   color: ${({ theme }) => theme.colors.neutral.lightGray};
//   font-size: ${({ theme }) => theme.fontSizes.sm};

//   &::before,
//   &::after {
//     content: '';
//     flex: 1;
//     border-bottom: ${({ theme }) => theme.borders.thin} solid
//       ${({ theme }) => theme.colors.neutral.gray};
//   }

//   &::before {
//     margin-right: ${({ theme }) => theme.spacing.md};
//   }

//   &::after {
//     margin-left: ${({ theme }) => theme.spacing.md};
//   }
// `;

// const ErrorMessage = styled.div`
//   padding: ${({ theme }) => theme.spacing.md};
//   background: rgba(239, 68, 68, 0.2);
//   border: ${({ theme }) => theme.borders.thin} solid ${({ theme }) => theme.colors.status.error};
//   border-radius: ${({ theme }) => theme.borderRadius.md};
//   color: ${({ theme }) => theme.colors.status.error};
//   font-size: ${({ theme }) => theme.fontSizes.sm};
// `;

// const ToggleText = styled.p`
//   text-align: center;
//   color: ${({ theme }) => theme.colors.neutral.silver};
//   font-size: ${({ theme }) => theme.fontSizes.sm};
//   margin-top: ${({ theme }) => theme.spacing.lg};

//   button {
//     background: none;
//     border: none;
//     color: ${({ theme }) => theme.colors.primary.gold};
//     text-decoration: underline;
//     cursor: pointer;
//     font-size: ${({ theme }) => theme.fontSizes.sm};
//     padding: 0;

//     &:hover {
//       color: ${({ theme }) => theme.colors.primary.darkGold};
//     }
//   }
// `;

// interface AuthFormProps {
//   onClose: () => void;
// }

// export function AuthForm({ onClose }: AuthFormProps) {
//   const [isSignUp, setIsSignUp] = useState(false);
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [displayName, setDisplayName] = useState('');
//   const [error, setError] = useState('');
//   const [loading, setLoading] = useState(false);

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setError('');
//     setLoading(true);

//     try {
//       if (isSignUp) {
//         // await signUp(email, password, displayName);
//       } else {
//         // await signIn(email, password);
//       }
//       onClose();
//     } catch (err: unknown) {
//       if (err instanceof Error) {
//         setError(err.message);
//       } else {
//         setError('Une erreur est survenue');
//       }
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleGoogleSignIn = async () => {
//     setError('');
//     setLoading(true);

//     try {
//       await signInWithGoogle();
//       onClose();
//     } catch (err: unknown) {
//       if (err instanceof Error) {
//         setError(err.message);
//       } else {
//         setError('Une erreur est survenue');
//       }
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <>
//       <Overlay onClick={onClose} />
//       <AuthModal>
//         <Title>{isSignUp ? 'Créer un compte' : 'Connexion'}</Title>

//         {error && <ErrorMessage>{error}</ErrorMessage>}

//         <Form onSubmit={handleSubmit}>
//           {isSignUp && (
//             <Input
//               type="text"
//               placeholder="Nom du personnage"
//               value={displayName}
//               onChange={(e) => setDisplayName(e.target.value)}
//               required
//             />
//           )}

//           <Input
//             type="email"
//             placeholder="Adresse email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//             autoComplete="email"
//           />

//           <Input
//             type="password"
//             placeholder="Mot de passe"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//             minLength={6}
//             autoComplete={isSignUp ? "new-password" : "current-password"}
//           />

//           <ButtonGroup>
//             <WowButton type="submit" $fullWidth disabled={loading}>
//               {loading ? 'Chargement...' : isSignUp ? 'S\'inscrire' : 'Se connecter'}
//             </WowButton>

//             <Divider>OU</Divider>

//             <WowButton
//               type="button"
//               $variant="secondary"
//               $fullWidth
//               onClick={handleGoogleSignIn}
//               disabled={loading}
//             >
//               Continuer avec Google
//             </WowButton>
//           </ButtonGroup>
//         </Form>

//         <ToggleText>
//           {isSignUp ? 'Vous avez déjà un compte ? ' : 'Pas encore de compte ? '}
//           <button type="button" onClick={() => setIsSignUp(!isSignUp)}>
//             {isSignUp ? 'Se connecter' : 'S\'inscrire'}
//           </button>
//         </ToggleText>
//       </AuthModal>
//     </>
//   );
// }
