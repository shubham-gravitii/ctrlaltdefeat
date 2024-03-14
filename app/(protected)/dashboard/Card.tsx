'use client'
import React from "react";
import "./styles.css";
import { deleteInventory } from "@/lib/actions/inventory.action";
import UpdateForm from "@/components/UpdateInfo";
import Image from "next/image";

interface CardProps {
  imgsrc: string,
  name: string,
  inventoryId: string,
  type: string,
  expiry: string,
  quantity: number | null
}

const Card: React.FC<CardProps> = ({ imgsrc, name, type, expiry, inventoryId, quantity }) => {
  const handleDelete = async () => {
    const response = await deleteInventory({ inventoryId: inventoryId })
    // console.log(response)

  }
  return (
    <div className="bod">
      <div className="container">
        <main className="grid">
          <article className="card">
            <Image
              src={imgsrc}
              alt="Sample photo"
              height="200"
            />
            <div className="text">
              <div>
                <h3>Name: {name}</h3>
                <h3>Type: {type}</h3>
                <h3>Puchase Date: {expiry}</h3>
                {quantity != 0 &&
                  <>
                    <h3>Best Before: { }</h3>

                    <h3>Quantity: {quantity}</h3>
                  </>
                }
              </div>
              <div className="btn">
                <a href="#">
                  <button
                    type="button"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                    onClick={handleDelete}
                  >
                    Delete
                  </button>
                </a>
                <UpdateForm name={name} data={{ expiry, inventoryId, name, type, }} />
              </div>
            </div>
          </article>
        </main>
      </div>
    </div>
  );
}

export default Card;
