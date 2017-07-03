export const searchCampaigns = (search = {}) => {
  return $.ajax({
    method: 'GET',
    url: '/api/search/',
    data: {search: search},
  });
};
