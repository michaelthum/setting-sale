function isOnSale(item) {

  return item.discount > 0
  }
  
  export function selectSaleItems(items) {
  
  return items.filter(isOnSale)
  }