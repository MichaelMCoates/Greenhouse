export const SET_AMOUNT = "SET_AMOUNT";
export const SET_PERK = "SET_PERK";

export const setAmount = (amount) => ({
  type: SET_AMOUNT,
  amount
});

export const setPerk = (perk) => ({
  type: SET_PERK,
  perk
});
