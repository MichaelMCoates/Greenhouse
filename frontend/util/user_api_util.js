export const fetchUser = (user_id) => {
  return $.ajax({
    method: 'GET',
    url: '/api/user' + user_id,
  });
};
