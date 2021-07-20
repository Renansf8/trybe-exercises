const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      margherita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};
  
const customerInfo = (order) => {
  return console.log( `Olá ${order.order.delivery.deliveryPerson}, entregue para: ${order.name}, Telefone: ${order.phoneNumber}, R. ${order.address.street}, N°: ${order.address.number}, AP: ${order.address.apartment}.`)

}

customerInfo(order);

order.order.delivery.deliveryPerson = 'Luiz Silva';
order.payment = 50;

const orderModifier = (order) => {
  return console.log(`Olá ${order.order.delivery.deliveryPerson}, o total do seu pedido de muzzarella, calabresa e ${order.order.drinks.coke.type} é R$ ${order.payment},00`);
}

orderModifier(order);