
export const fetchCampaign = (campaignId) => {
  return $.ajax({
    method: 'GET',
    url: '/api/campaigns/' + campaignId
  });
};
