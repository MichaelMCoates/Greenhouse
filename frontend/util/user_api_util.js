export const fetchUser = (user_id) => {
  return $.ajax({
    method: 'GET',
    url: '/api/users/' + user_id,
  });
};
