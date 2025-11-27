import { createContext, useState, type ReactNode } from "react";
import styled from "styled-components";

interface ModalContextType {
    visible: boolean;
    setVisible: (value: boolean) => void;
    content: ReactNode;
    setContent: (value: ReactNode) => void;
    color: string;
    setColor: (value: string) => void;
    closeModal: () => void;
    openModal: (content: ReactNode, color?: string) => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export { ModalContext };

const ModalContainer = styled.div`
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
`;

const ModalBody = styled.div<{ $color?: string }>`
  background: ${({ theme, $color }) => $color || theme.colors.winter.deepBlue};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  padding: ${({ theme }) => theme.spacing.lg};
  box-shadow: ${({ theme }) => theme.shadows.xl};
  max-width: 90%;
  width: 800px;
  max-height: 90%;
  height: 500px;
  overflow: auto;
`;

export function ModalProvider({ children }: { children: ReactNode }) {
    const [visible, setVisible] = useState<boolean>(false);
    const [content, setContent] = useState<ReactNode>(undefined);
    const [color, setColor] = useState<string>("");


    const closeModal = () => {
        setVisible(false);
        setContent(undefined);
        setColor("");
    }

    const openModal = (content: ReactNode, color?: string) => {
        setContent(content);
        setColor(color || "");
        setVisible(true);
    };

    return (
        <ModalContext.Provider value={{ visible, setVisible, content, setContent, color, setColor, closeModal, openModal }}>
            {children}
            {visible && (
                <ModalContainer>
                    <ModalBody $color={color}>{content}</ModalBody>
                </ModalContainer>
            )}
        </ModalContext.Provider>
    );

}