import React from 'react'
import Card from './Card';
import './styles.css'
import { fetchInventory } from '@/lib/actions/inventory.action';
import { currentUser } from '@/hooks/use-current-user';


export default async function Page() {
  const user = await currentUser();

  if (!user) {
    return;
  }
  const inventoryArr = await fetchInventory({ userId: user.id as string, InventoryType: "SEED" }) as any;
  const inventory = await inventoryArr?.data?.filter((element: any) => {
    return element.name !== "tractor" && element.name !== 'harvestor'
  })
  const inventoryToolArr = await fetchInventory({ userId: user.id as string, InventoryType: "TOOL" }) as any;
  const inventoryTool = await inventoryArr?.data?.filter((element: any) => {
    return element.name === "tractor" || element.name === 'harvestor'
  })
  console.log(inventory)
  return (
    <>
      <div className="bod">
        <div className="one">
          <h1>Crops</h1>
          {inventory.length === 0 && <h3 className='m-3 '>Please add some data to show</h3>}
        </div>
        <div className="container">
          <main className="grid">
            {inventory?.map((item: any) => {
              console.log(item)
              return (
                <Card
                  key={item.id}
                  inventoryId={item.id}
                  // imgsrc={`${images[item.name]?.src}`}
                  imgsrc={`/images/${item.name}.jpeg`}
                  name={item.name}
                  type={item.type}
                  expiry={item.expiery.toString().substr(0, 10)}
                  quantity={item.quantity}
                />)
            })}
          </main>
          <div className="one flex flex-col justify-center items-center">
            <h1>Tools</h1>
            {inventoryTool.length === 0 && <h3 className='m-3 '>Please add some data to show</h3>}

          </div>
          <div className="container">
            <main className='grid'>
              {inventoryTool?.map((item: any) => (
                <Card
                  key={item.id}
                  inventoryId={item.id}
                  imgsrc={`/images/${item.name}.jpeg`}

                  name={item.name}
                  type={item.type}
                  quantity={item.quantity}
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
