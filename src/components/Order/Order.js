import React from "react";
import styled from "styled-components";
import {
  DialogContent,
  DialogFooter,
  ConfirmButton,
} from "../FoodDialog/FoodDialog";
import { formatPrice } from "../../data/FoodData";

const OrderedStyle = styled.div`
  position: fixed;
  right: 0px;
  top: 48px;
  width: 340px;
  height: calc(100% - 48px);
  background-color: white;
  box-shadow: 4px 0px 5px 5px gray;
  z-index: 10;
  display: flex;
  flex-direction: column;
`;

const OrderContent = styled(DialogContent)`
  padding: 20px;
  height: 100%;
`;

const OrderContainer = styled.div`
  padding: 10px 0px;
  border-bottom: 1px solid gray;
`;

const OrderItem = styled.div`
  padding: 10px 0px;
  display: grid;
  grid-template-columns: 20px 150px 20px 60px;
  justify-content: space-between;
`;

export function Order({ orders }) {
  return (
    <OrderedStyle>
      {orders.length === 0 ? (
        <OrderContent>Your order's looking empty.</OrderContent>
      ) : (
        <OrderContent>
          <OrderContainer>Your Order: </OrderContainer>
          {orders.map((order) => (
            <OrderContainer>
              <OrderItem>
                <div>1</div>
                <div>{order.name}</div>
                <div></div>
                <div>{formatPrice(order.price)}</div>
              </OrderItem>
            </OrderContainer>
          ))}
        </OrderContent>
      )}

      <DialogFooter>
        <ConfirmButton>Checkout</ConfirmButton>
      </DialogFooter>
    </OrderedStyle>
  );
}
