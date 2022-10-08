export default ({ store, redirect }) => {
  if (store.getters['auth/authorized']) {
    return;
  }
  return redirect('/auth/login');
};
