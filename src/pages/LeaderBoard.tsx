
import styled from "styled-components";
import { useMembers } from "../contexts";
import { useEffect, useState } from "react";
import { CalculateLeaderBoard } from "../utils/leaderbard";
import { formatNumber } from "../utils/player";
import { CLASSES } from "../types/character";
import Money from "../components/Money";

const LeaderBoardContainer = styled.div`
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.xl};
`;

const Card = styled.div`
  background: linear-gradient(135deg, rgba(30,58,95,0.9) 0%, rgba(26,31,46,0.95) 100%);
  border: ${({ theme }) => theme.borders.medium} solid ${({ theme }) => theme.colors.primary.gold};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  padding: ${({ theme }) => theme.spacing.xl};
  box-shadow: ${({ theme }) => theme.shadows.xl};
  backdrop-filter: blur(10px);
`;

const Title = styled.h1`
  color: ${({ theme }) => theme.colors.primary.gold};
  font-size: ${({ theme }) => theme.fontSizes['3xl']};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  text-shadow: ${({ theme }) => theme.shadows.glow.gold};
  text-align: center;
`;

const Description = styled.p`
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: ${({ theme }) => theme.fontSizes.base};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  text-align: center;
  line-height: 1.6;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  background: #222;
  color: #fff;
  margin: 2rem auto;
  box-shadow: 0 0 16px #0008;
`;
const Th = styled.th`
  padding: 1rem;
  background: #444;
  font-size: 1.2rem;
`;
const Td = styled.td<{ $colorBorder?: string }>`
  padding: 0.8rem;
  text-align: center;
  border-bottom: 1px solid ${({ $colorBorder }) => $colorBorder || '#555'};
`;

// const leaderboardData = [
//     { rank: 1, name: "Thrall", faction: "Horde", level: 42, gold: 1200 },
//     { rank: 2, name: "Jaina", faction: "Alliance", level: 39, gold: 1100 },
//     { rank: 3, name: "Sylvanas", faction: "Horde", level: 37, gold: 950 },
//     { rank: 4, name: "Anduin", faction: "Alliance", level: 35, gold: 900 },
//     { rank: 5, name: "Cerynna", faction: "Horde", level: 33, gold: 850 },
// ];

export function LeaderBoard() {
    const { members } = useMembers();
    const [leaderboard, setLeaderboard] = useState(members || []);
    const [indexOrder, setIndexOrder] = useState<'score' | 'level'>('score');



    useEffect(() => {
        setLeaderboard(CalculateLeaderBoard(members, indexOrder) || []);
    }, [members, indexOrder]);
    return (
        <LeaderBoardContainer>
            <Card>
                <Title>🏆 Leaderboard</Title>
                <Description>
                    Classement des meilleurs aventuriers d'Azeroth.<br />
                    Affrontez les autres joueurs pour grimper dans le classement !
                </Description>
                <Table>
                    <thead>
                        <tr>
                            <Th>Rank</Th>
                            <Th>Name</Th>
                            {/* <Th>Faction</Th> */}
                            <Th onClick={() => {
                                setIndexOrder("level")
                            }}>Level</Th>
                            <Th>Gold</Th>
                            <Th>Kill</Th>
                            <Th>HFs</Th>
                            <Th onClick={() => {
                                setIndexOrder("score")
                            }}>Score</Th>
                        </tr>
                    </thead>
                    <tbody>
                        {leaderboard && leaderboard.map((player, index) => (
                            <tr key={player.id} style={{
                                backgroundColor: player.faction === 'horde' ? 'rgba(165, 42, 42, 0.2)' : 'rgba(30, 144, 255, 0.2)',
                            }}>
                                <Td $colorBorder={player.faction === 'horde' ? '#a52a2a' : '#1e90ff'}>{index + 1}</Td>
                                <Td $colorBorder={player.faction === 'horde' ? '#a52a2a' : '#1e90ff'} style={{
                                    color: CLASSES[player.class]?.color || '#fff',
                                }}>{player.name}</Td>
                                {/* <Td $colorBorder={player.faction === 'horde' ? '#a52a2a' : '#1e90ff'}>{player.faction}</Td> */}
                                <Td $colorBorder={player.faction === 'horde' ? '#a52a2a' : '#1e90ff'}>{player.level}</Td>
                                <Td $colorBorder={player.faction === 'horde' ? '#a52a2a' : '#1e90ff'}><Money amount={player.gold} /></Td>
                                <Td $colorBorder={player.faction === 'horde' ? '#a52a2a' : '#1e90ff'}>{player.defeatedMonsters}</Td>
                                <Td $colorBorder={player.faction === 'horde' ? '#a52a2a' : '#1e90ff'}>{player.achievements?.length || 0}</Td>
                                <Td $colorBorder={player.faction === 'horde' ? '#a52a2a' : '#1e90ff'}>{formatNumber(player.score || 0)}</Td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Card>
        </LeaderBoardContainer>
    );
}
