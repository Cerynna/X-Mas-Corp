import { createContext, useCallback, useEffect, useState, type ReactNode } from "react";
import React from "react";
import styled from "styled-components";
import { getMessagesByChannel, onCollectionChange, removeMpList, sendMessageToChannel } from "../firebase";
import { useCharacter } from "./useCharacter";

interface ChatContextType {
    showChat: () => void;
    hideChat: () => void;
}

const ChatContext = createContext<ChatContextType | undefined>(undefined);

export { ChatContext };

interface VisibilityProps {
    $visible: boolean;
}

const ChatContainer = styled.div<VisibilityProps>`
  position: fixed;
  bottom: ${({ $visible }) => ($visible ? '0' : '-10px')};;
  left: 0;
  z-index: 9999;
  width: ${({ $visible }) => ($visible ? '400px' : '0')};
  height: ${({ $visible }) => ($visible ? '300px' : '0')};
  border: 2px solid ${({ theme }) => theme.colors.primary.gold};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  box-shadow: ${({ theme }) => theme.shadows.xl};
  backdrop-filter: blur(10px);
`;

const ChatToggler = styled.div<VisibilityProps>`
    position: absolute;
    top: ${({ $visible }) => ($visible ? '0' : '-70px')};
    right: ${({ $visible }) => ($visible ? '0' : '-60px')};
    width: ${({ $visible }) => ($visible ? '30px' : '60px')};
    height: ${({ $visible }) => ($visible ? '30px' : '60px')};
    background-color: ${({ theme }) => theme.colors.primary.gold};
    border-radius: ${({ theme }) => theme.borderRadius.sm};
    font-size: ${({ $visible }) => ($visible ? '0.8rem' : '1.5rem')};;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`;


const MessageTab = styled.div`
    display: flex;
    flex-direction: row;
    background-color: rgba(0, 0, 0, 0.4);
    gap: ${({ theme }) => theme.spacing.md};
    padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.sm};
    height: 30px;
    `;

interface MessageTabItemProps {
    selected: boolean;
}

const MessageTabItem = styled.div <MessageTabItemProps & { $type: "general" | string }> `
    color: ${({ theme, selected, $type }) => {
        switch (selected) {
            case true:
                return theme.colors.primary.gold;
            default:
                if ($type !== "general") return theme.colors.channels.wisp;
                return theme.colors.text.secondary;
        }
    }};
    font-size: ${({ theme }) => theme.fontSizes.base};
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    cursor: pointer;
    display: flex;
    align-items: center;
    `;

const MessageList = styled.div`
    flex: 1;
    // background: red;
    padding: 0;
    overflow-y: auto;
    height: calc(100% - 60px);
    `;

const MessageContainer = styled.div<{ $type: "general" | string }>`
    flex: 1;
    display: flex;
    flex-direction: row;
    gap: ${({ theme }) => theme.spacing.xs};
    padding: ${({ theme }) => theme.spacing.xxs} ${({ theme }) => theme.spacing.sm};
    color: ${({ theme, $type }) => {
        if ($type !== "general") return theme.colors.channels.wisp;
        return theme.colors.channels.general;
    }};
    &:nth-child(odd) {
        background-color: rgba(0, 0, 0, 0.1);
    }
    &:nth-child(even) {
        background-color: rgba(0, 0, 0, 0.2);
    }
    `;

const MessageWho = styled.span`
    font-weight: ${({ theme }) => theme.fontWeights.semibold};
    `;

const MessageInput = styled.input`
    padding: ${({ theme }) => theme.spacing.sm};
    border: none;
    border-radius: ${({ theme }) => theme.borderRadius.sm};
    background-color: rgba(0, 0, 0, 0.4);
    color: ${({ theme }) => theme.colors.neutral.white};
    font-size: ${({ theme }) => theme.fontSizes.base};
    margin: 0;
    width: 100%;
    height: 30px;
`;



export function ChatProvider({ children }: { children: ReactNode }) {
    const [visible, setVisible] = useState(false);
    const [selectedTab, setSelectedTab] = useState("general");
    const { character } = useCharacter();
    const [messages, setMessages] = useState<Array<{
        who: string;
        message: string;
        timestamp: number;
    }>>([]);

    const channels = [{ slug: "general", name: "Général" }, ...(character?.chatChannel || [])];

    const loadMessages = useCallback(async () => {
        const mess = await getMessagesByChannel(selectedTab)
        setMessages(
            mess.map((msg: { who: string; message: string; channel: string; timestamp?: number }) => ({
                who: msg.who,
                message: msg.message,
                timestamp: msg.timestamp ?? Date.now()
            }))
        );
    }, [selectedTab]);

    const showChat = () => {
        setVisible(true);
    };

    const hideChat = () => {
        setVisible(false);
    };

    const sendMesage = (inputElement: HTMLInputElement) => {
        if (!inputElement.value) return;
        if (!character) return;
        sendMessageToChannel(character.name, inputElement.value, selectedTab);
        inputElement.value = '';
    }

    useEffect(() => {
        loadMessages();
    }, [loadMessages]);

    useEffect(() => {
        onCollectionChange('messages', async () => {
            await loadMessages();
        });
    }, [loadMessages]);

    // Ref pour le scroll auto
    const messageListRef = React.useRef<HTMLDivElement>(null);

    // Scroll en bas à chaque update des messages
    useEffect(() => {
        if (messageListRef.current) {
            messageListRef.current.scrollTop = messageListRef.current.scrollHeight;
        }
    }, [messages]);

    return (
        <ChatContext.Provider value={{ showChat, hideChat }}>
            <ChatContainer $visible={visible}>
                <ChatToggler $visible={visible} onClick={() => setVisible(!visible)}>
                    {visible ? '❌' : '💬'}
                </ChatToggler>
                {visible && (
                    <>
                        <MessageTab>
                            {channels.map(channel => (
                                <MessageTabItem
                                    key={channel.slug}
                                    selected={selectedTab === channel.slug}
                                    onClick={() => setSelectedTab(channel.slug)}
                                    $type={channel.slug}
                                >
                                    {channel.name}
                                    {channel.slug !== 'general' && (
                                        <span style={{ marginLeft: '4px', cursor: 'pointer', fontSize: '12px' }} onClick={(e) => {
                                            e.stopPropagation();
                                            // Remove channel from character's chatChannel
                                            if (!character) return;
                                            const slug = channel.slug;
                                            // Call removeMpList function
                                            removeMpList(character, slug);
                                            // If the removed channel is the selected one, switch to general
                                            if (selectedTab === slug) {
                                                setSelectedTab('general');
                                            }
                                        }}>❌</span>
                                    )}
                                </MessageTabItem>
                            ))}
                        </MessageTab>
                        <MessageList ref={messageListRef}>
                            {
                                messages.map((msg, index) => (
                                    <MessageContainer key={index} $type={selectedTab}>
                                        <MessageWho>[{msg.who}]:</MessageWho> {msg.message}
                                    </MessageContainer>
                                ))
                            }
                        </MessageList>
                        <MessageInput onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
                            if (e.key === 'Enter') {
                                sendMesage(e.currentTarget);
                                // e.currentTarget.value = '';
                            }
                        }}></MessageInput>
                    </>
                )}
            </ChatContainer>
            {children}
        </ChatContext.Provider>
    );
}