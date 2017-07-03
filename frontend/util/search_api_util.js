export const searchCampaigns = (search) => {
  return $.ajax({
    method: 'GET',
    url: '/api/contributions/',
    data: search,
  });
};
