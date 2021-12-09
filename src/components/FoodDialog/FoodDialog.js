import React from "react";
import styled from "styled-components";
import { FoodLabel } from "../Menu/FoodGrid";
import { pizzaRed } from "../../styles/colors";
import { Title } from "../../styles/title";
import { formatPrice } from "../../data/FoodData";
import { QuantityInput } from "./QuantityInput";
import { useQuantity } from "../../hooks/useQuantity";
import { Toppings } from "./Toppings";
import { useToppings } from "../../hooks/useToppings";
import { useChoice } from "../../hooks/useChoice";
import { Choices } from "./Choices";

const Dialog = styled.div`
  width: 500px;
  background-color: white;
  position: fixed;
  top: 75px;
  z-index: 5;
  max-height: calc(100% - 100px);
  left: calc(50% - 250px);
  display: flex;
  flex-direction: column;
`;

export const DialogContent = styled.div`
  overflow: auto;
  min-height: 100px;
  padding: 0px 40px;
  padding-bottom: 80px;
`;

export const DialogFooter = styled.div`
  display: flex;
  justify-content: center;
  box-shadow: 0px -2px 10px 0px gray;
  height: 60px;
`;

export const ConfirmButton = styled(Title)`
  margin: 10px;
  color: white;
  height: 20px;
  border-radius: 5px;
  padding: 10px;
  text-align: center;
  width: 200px;
  cursor: pointer;
  background-color: ${pizzaRed};
  ${({ disabled }) =>
    disabled &&
    `
  opacity: .5;
  background-color: gray;
  pointer-events: none;
  `}
`;

const DialogShadow = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0px;
  background-color: black;
  opacity: 0.7;
  z-index: 4;
`;

const DialogBanner = styled.div`
  min-height: 200px;
  margin-bottom: 20px;
  ${({ img }) =>
    img
      ? `background-image: url(${process.env.PUBLIC_URL + img});`
      : `min-height: 75px;`}
  background-position: center;
  background-size: cover;
`;

const DialogBannerName = styled(FoodLabel)`
  top: ${({ img }) => (img ? `100px` : `20px`)};
  font-size: 30px;
  padding: 5px 40px;
`;

const pricePerTopping = 0.5;

export function getPrice(order) {
  return (
    order.quantity *
    (order.price +
      order.toppings.filter((t) => t.checked).length * pricePerTopping)
  );
}

function hasToppings(food) {
  return food.section === "Pizza";
}

function FoodDialogContainer({ openFood, setOpenFood, setOrders, orders }) {
  const quantity = useQuantity(openFood && openFood.quantity);
  const toppings = useToppings(openFood.toppings);
  const choiceRadio = useChoice(openFood.choice);
  const isEditing = openFood.index > -1;

  function close() {
    setOpenFood();
  }

  if (!openFood) return null;

  const order = {
    ...openFood,
    quantity: quantity.value,
    toppings: toppings.toppings,
    choice: choiceRadio.value,
  };

  function editOrder(newOrder) {
    const newOrders = [...orders];
    newOrders[openFood.index] = order;
    setOrders(newOrders);
    close();
  }

  function addToOrder() {
    setOrders([...orders, order]);
    close();
  }

  return (
    <>
      <DialogShadow onClick={close} />
      <Dialog>
        <DialogBanner img={openFood.img}>
          <DialogBannerName>{openFood.name}</DialogBannerName>
        </DialogBanner>
        <DialogContent>
          <QuantityInput quantity={quantity} />
          {hasToppings(openFood) && (
            <>
              <h3>Would you like toppings?</h3>
              <Toppings {...toppings} />
            </>
          )}
          {openFood.choices && (
            <Choices openFood={openFood} choiceRadio={choiceRadio} />
          )}
        </DialogContent>
        <DialogFooter>
          <ConfirmButton
            onClick={isEditing ? editOrder : addToOrder}
            disabled={openFood.choices && !choiceRadio.value} // has choices (drinks) && no radio checked
          >
            {isEditing ? `Update order: ` : `Add to order: `}
            {formatPrice(getPrice(order))}
          </ConfirmButton>
        </DialogFooter>
      </Dialog>
    </>
  );
}

export function FoodDialog(props) {
  if (!props.openFood) return null;
  return <FoodDialogContainer {...props} />;
}
