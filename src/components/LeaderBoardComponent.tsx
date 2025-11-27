
import styled from "styled-components";

import { useMembers } from "../contexts";
import { useEffect, useState } from "react";
import { CalculateLeaderBoard } from "../utils/leaderbard";
import { formatNumber } from "../utils/player";
import { CLASSES } from "../types/character";
import Money from "../components/Money";
import {
    Card,
    Flex,
    Title,
    Description,
    Scrollable
} from "../styles/components";


const LeaderboardCell = styled.div<{
    flex?: number;
    color?: string;
    align?: 'left' | 'center' | 'right';
}>`
    flex: ${({ flex }) => flex || 1};
    text-align: ${({ align }) => align || 'center'};
    padding: 0.8rem 0.2rem;
    font-size: 1.1rem;
    color: ${({ color }) => color || 'inherit'};
    font-weight: ${({ flex }) => (flex === 2 ? 'bold' : 'normal')};
`;

// const LeaderBoardContainer = styled.div`
//   width: 100%;
//   max-width: 900px;
//   margin: 0 auto;
//   padding: ${({ theme }) => theme.spacing.xl};
// `;

// const Card = styled.div`
//   background: linear-gradient(135deg, rgba(30,58,95,0.9) 0%, rgba(26,31,46,0.95) 100%);
//   border: ${({ theme }) => theme.borders.medium} solid ${({ theme }) => theme.colors.primary.gold};
//   border-radius: ${({ theme }) => theme.borderRadius.lg};
//   padding: ${({ theme }) => theme.spacing.xl};
//   box-shadow: ${({ theme }) => theme.shadows.xl};
//   backdrop-filter: blur(10px);
// `;

// const Title = styled.h1`
//   color: ${({ theme }) => theme.colors.primary.gold};
//   font-size: ${({ theme }) => theme.fontSizes['3xl']};
//   margin-bottom: ${({ theme }) => theme.spacing.md};
//   text-shadow: ${({ theme }) => theme.shadows.glow.gold};
//   text-align: center;
// `;

// const Description = styled.p`
//   color: ${({ theme }) => theme.colors.text.secondary};
//   font-size: ${({ theme }) => theme.fontSizes.base};
//   margin-bottom: ${({ theme }) => theme.spacing.xl};
//   text-align: center;
//   line-height: 1.6;
// `;

// const Table = styled.table`
//   width: 100%;
//   border-collapse: collapse;
//   background: #222;
//   color: #fff;
//   margin: 2rem auto;
//   box-shadow: 0 0 16px #0008;
// `;

// const Thbody = styled.tbody`
//     overflow-y: auto;
// `;
// const Th = styled.th`
//   padding: 1rem;
//   background: #444;
//   font-size: 1.2rem;
// `;
// const Td = styled.td<{ $colorBorder?: string }>`
//   padding: 0.8rem;
//   text-align: center;
//   border-bottom: 1px solid ${({ $colorBorder }) => $colorBorder || '#555'};
// `;


export function LeaderBoardConponent() {
    const { members } = useMembers();
    const [leaderboard, setLeaderboard] = useState(members || []);
    const [indexOrder, setIndexOrder] = useState<'score' | 'level'>('score');



    useEffect(() => {
        setLeaderboard(CalculateLeaderBoard(members, indexOrder) || []);
    }, [members, indexOrder]);
    return (
        <>
            <Title>🏆 Leaderboard</Title>
            <Description>
                Classement des meilleurs aventuriers d'Azeroth.<br />
                Affrontez les autres joueurs pour grimper dans le classement !
            </Description>
            <Card>
                {/* <Section> */}
                {/* <Grid columns={1} gap="0"> */}
                <Flex direction="row" justify="space-between" gap="0" style={{
                    paddingRight: '1rem',
                }}>
                    <LeaderboardCell flex={0.5} onClick={() => { }}>Rank</LeaderboardCell>
                    <LeaderboardCell flex={1.5}>Name</LeaderboardCell>
                    {/* <LeaderboardCell flex={1} >Faction</LeaderboardCell> */}
                    <LeaderboardCell flex={1} style={{ cursor: 'pointer' }} onClick={() => setIndexOrder('level')}>Level</LeaderboardCell>
                    <LeaderboardCell flex={2}>Gold</LeaderboardCell>
                    <LeaderboardCell flex={1}>Kill</LeaderboardCell>
                    <LeaderboardCell flex={1}>HFs</LeaderboardCell>
                    <LeaderboardCell flex={1} style={{ cursor: 'pointer' }} onClick={() => setIndexOrder('score')}>Score</LeaderboardCell>
                </Flex>
                <Scrollable>
                    {leaderboard && leaderboard.map((player, index) => (
                        <Flex
                            key={player.id}
                            direction="row"
                            justify="space-between"
                            gap="0"
                            style={{
                                borderBottom: '1px solid #555',
                                backgroundColor: index % 2 === 0 ? 'rgba(255, 255, 255, 0.05)' : 'transparent',
                            }}
                        >
                            <LeaderboardCell flex={0.5}>{index + 1}</LeaderboardCell>
                            <LeaderboardCell flex={1.5} align="left" color={CLASSES[player.class]?.color || '#fff'}>{player.name}</LeaderboardCell>
                            {/* <LeaderboardCell flex={1}>{player.faction}</LeaderboardCell> */}
                            <LeaderboardCell flex={1}>{player.level}</LeaderboardCell>
                            <LeaderboardCell flex={2}><Money amount={player.gold} /></LeaderboardCell>
                            <LeaderboardCell flex={1}>{player.defeatedMonsters}</LeaderboardCell>
                            <LeaderboardCell flex={1}>{player.achievements?.length || 0}</LeaderboardCell>
                            <LeaderboardCell flex={1}>{formatNumber(player.score || 0)}</LeaderboardCell>
                        </Flex>
                    ))}
                </Scrollable>
                {/* </Grid> */}
                {/* </Section> */}
            </Card>
        </>
    );
}
