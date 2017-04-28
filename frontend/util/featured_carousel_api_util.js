export const fetchFeaturedCarouselCampaigns = () => {
  return $.ajax({
    method: 'get',
    url: '/api/featuredcarousel',
  });
};
