export const createPerk = (perk) => {
  return $.ajax({
    method: 'POST',
    url: '/api/perks',
    data: {perk}
  });
};
