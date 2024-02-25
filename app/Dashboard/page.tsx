import React from 'react'
import Card from './Card';
import './styles.css'
import { fetchInventory } from '@/lib/actions/inventory.action';
const Board = async () => {
  const inventory = await fetchInventory({ InventoryType: "SEED" }) as any;
  const inventoryTool = await fetchInventory({ InventoryType: "TOOL" }) as any;
  return (
    <>
      <div className="bod">
        <div className="one">
          <h1>Crops</h1>
        </div>
        <div className="container">
          <main className="grid">
            {inventory?.data?.map((item: any) => (
              <Card
                key={item.id}
                inventoryId={item.id}
                imgsrc={item.imgsrc}
                name={item.name}
                type={item.type}
                expiry={item.expiery.toString().substr(0, 10)}
              />
            ))}
          </main>
          <div className="one">
            <h1>Tools</h1>
          </div>
          <div className="container">
            <main className='grid'>
              {inventoryTool?.data?.map((item: any) => (
                <Card
                  key={item.id}
                  inventoryId={item.id}
                  imgsrc={item.imgsrc}
                  name={item.name}
                  type={item.type}
                  expiry={item.expiery.toString().substr(0, 10)}
                />
              ))}
            </main>
          </div>
        </div>
      </div>
    </>
  );
}

export default Board