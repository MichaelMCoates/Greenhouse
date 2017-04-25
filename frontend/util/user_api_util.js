export const fetchUser = (user_id) => {
  return $.ajax({
    method: 'GET',
    url: '/api/users/' + user_id,
  });
};

export const updateUser = (user) => {
  return $.ajax({
    method: 'PATCH',
    url: '/api/users/' + user.user.id,
    data: user,
  });
};


export const fetchCampaigns = (user_id) => {
  return $.ajax({
    method: 'GET',
    url: '/api/users/' + user_id + '/campaigns'
  });
};
