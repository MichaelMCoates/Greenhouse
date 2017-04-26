
export const fetchCampaign = (campaignId) => {
  return $.ajax({
    method: 'GET',
    url: '/api/campaigns/' + campaignId
  });
};

export const createCampaign = (campaign) => {
  return $.ajax({
    method: 'POST',
    url: '/api/campaigns/',
    data: campaign
  });
};
