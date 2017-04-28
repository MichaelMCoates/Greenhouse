export const fetchTileCarouselCampaigns = () => {
  return $.ajax({
    method: 'get',
    url: '/api/tilecarousel',
  });
};
