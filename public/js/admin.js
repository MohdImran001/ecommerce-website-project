const deleteProduct = (btn) => {
  const productId = btn.parentNode.querySelector('[name=productId]').value;
  const csrfToken = btn.parentNode.querySelector('[name=_csrf]').value;

  const parentNode = btn.closest('article');

  fetch("/admin/delete-product/" + productId, {
      method: "DELETE",
      headers: {
          "csrf-token": csrfToken
      }
  }).then(result => {
      console.log(result.json());
      parentNode.remove();
  }).catch(result => {
      console.log(result);
  })

};
