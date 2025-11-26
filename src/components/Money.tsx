import { formatNumber } from "../utils/player";
import { ShinyCoin } from "./icons/ShinyCoin";

export default function Money({ amount, variant = "normal" }: { amount: number, variant?: "small" | "normal" }) {
    const gold = Math.floor(amount / 10000);
    const silver = Math.floor((amount % 10000) / 100);
    const copper = amount % 100;
    return (
        <span style={{
            display: 'flex',
            alignItems: 'center',
            whiteSpace: 'nowrap',
            justifyContent: 'flex-end',
            gap: variant === "small" ? '4px' : '16px',

        }}>
            {variant === "small" && (
                <>
                    {gold > 0 && (
                        <span style={{ color: '#FFD700' }}>
                            {formatNumber(gold)} <ShinyCoin color="#FFD700" size={8} />
                        </span>
                    )}
                    {(silver > 0 && gold < 900) && (
                        <span style={{ color: '#C0C0C0' }}>
                            {silver} <ShinyCoin color="#C0C0C0" size={8} />
                        </span>
                    )}
                    {(copper > 0 && silver < 90) && (
                        <span style={{ color: '#CD7F32' }}>
                            {copper} <ShinyCoin color="#B87333" size={8} />
                        </span>
                    )}
                </>
            )}
            {variant === "normal" && (
                <>
                    {gold > 0 && (
                        <span style={{ color: '#FFD700' }}>
                            {formatNumber(gold)} <ShinyCoin color="#FFD700" size={12} />
                        </span>
                    )}
                    {silver > 0 && (
                        <span style={{ color: '#C0C0C0' }}>
                            {silver} <ShinyCoin color="#C0C0C0" size={12} />
                        </span>
                    )}
                    <span style={{ color: '#CD7F32' }}>
                        {copper} <ShinyCoin color="#B87333" size={12} />
                    </span>
                </>
            )}
        </span>
    );
}
