import { useShop } from "../../contexts/useShop";

export function EquipmentShop() {
    const { shop } = useShop();
    return (
        <>
            {
                shop.map((item, index) => {
                    return <div key={item.id}>{index + 1}. {item.name}</div>
                })
            }
        </>
    )
}