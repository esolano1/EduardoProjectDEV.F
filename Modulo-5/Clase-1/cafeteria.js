const orderList = document.getElementById('orderList');
const addOrderBtn = document.getElementById('addOrderBtn');

let orderId = 1; // Para identificar los pedidos

addOrderBtn.addEventListener('click', () => {
    const order = { id: orderId++, status: 'En Proceso' };
    addOrder(order);
    processOrder(order); // Simula la preparación asincrónica
});

function addOrder(order) {
    const listItem = document.createElement('li');
    listItem.id = `order-${order.id}`;
    listItem.textContent = `Pedido #${order.id}: ${order.status}`;
    orderList.appendChild(listItem);
}

function updateOrderStatus(order, status) {
    const listItem = document.getElementById(`order-${order.id}`);
    if (listItem) {
        listItem.textContent = `Pedido #${order.id}: ${status}`;
    }
}

// Simula la preparación del pedido con Promesas y async/await
function prepareOrder(order) {
    return new Promise((resolve) => {
        // Simula tiempo de preparación aleatorio entre 2 y 5 segundos
        const preparationTime = Math.floor(Math.random() * 3000) + 2000;
        setTimeout(() => {
            resolve(order);
        }, preparationTime);
    });
}

async function processOrder(order) {
    await prepareOrder(order); // Espera la "preparación" del pedido
    updateOrderStatus(order, 'Completado'); // Cambia el estado visual
}
