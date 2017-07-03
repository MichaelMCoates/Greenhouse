export const searchCampaigns = (search = {}) => {
  debugger
  return $.ajax({
    method: 'GET',
    url: '/api/search/',
    data: {search: search},
  });
};
