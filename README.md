# **API Eateaze**

 API del Comercio Electrónico de Comida [EatEaze](https://github.com/Jenzyy/app-eateaze) .La API ofrece rutas  para llenar la base de datos con platos de comida de muestra, buscar platos por nombre, obtener etiquetas de platos, crear y rastrear órdenes, y manejar la autenticación de usuarios mediante tokens JWT. Además, se integra con PayPal y otras tarjetas de crédito para permitir pagos seguros al realizar pedidos. Estas funcionalidades permiten a los usuarios explorar platos, hacer pedidos y gestionar usuarios en una plataforma de comercio electrónico de comida. 🍔🍕🍣
## Tecnologías Utilizadas 🛠️:
![nodejs](https://img.shields.io/badge/Node%20js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![typescript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![expressjs](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)
![mongodb](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
![jwt](https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=JSON%20web%20tokens&logoColor=white)
![render](https://img.shields.io/badge/Render-46E3B7?style=for-the-badge&logo=render&logoColor=white)
![paypal](https://img.shields.io/badge/PayPal-00457C?style=for-the-badge&logo=paypal&logoColor=white)

## Tabla de Contenido 📑:
- [Rutas](#rutas-)
  - [Usuarios 👥](#usuarios-)
    - Seed Users
    - User Login
    - User Registration
  - [Comidas 🍔](#comidas-)
    - Seed Foods
    - Get All Foods
    - Search Foods
    - Get Food Tags
    - Get Foods by Tag
    - Get Food by ID
  - [Órdenes 🛒](#órdenes-)
    - Create Order
    - Get New Order for Current User
    - Pay for Order
    - Track Order
- [Limitaciones](#limitaciones-)

## Web EatEaze 🌐:
      https://appeateaze.netlify.app/

## Rutas 🚀:
### Usuarios 👥 
- #### **Seed Users**: Llena la base de datos con ejemplos de usuarios.

      GET https://api-eateaze.onrender.com/api/users/seed

- **User Login**: Autentica a un usuario mediante correo electrónico y contraseña.

      POST https://api-eateaze.onrender.com/api/users/login

- **User Registration**: Registra un nuevo usuario.

      POST https://api-eateaze.onrender.com/api/users/register
### Comidas 🍔
- **Seed Foods**: Llena la base de datos con ejemplos de alimentos.

        GET https://api-eateaze.onrender.com/api/foods/seed

- **Get All Foods**: Recupera una lista de todos los alimentos disponibles.

      GET https://api-eateaze.onrender.com/api/foods/

- **Search Foods**: Busca alimentos por nombre.

      GET https://api-eateaze.onrender.com/api/foods/search/:searchTerm

- **Get Food Tags**: Recupera una lista de etiquetas de alimentos con sus recuentos.

      GET https://api-eateaze.onrender.com/api/foods/tags

- **Get Foods by Tag**: Recupera alimentos según una etiqueta específica.

      GET https://api-eateaze.onrender.com/api/foods/tag/:tagName

- **Get Food by ID**: Recupera un alimento específico por su ID.

      GET https://api-eateaze.onrender.com/api/foods/:foodId

### Órdenes 🛒
- **Create Order**: Crea una nueva orden con elementos. (Requiere autenticación)

      POST https://api-eateaze.onrender.com/api/orders/create

- **Get New Order for Current User**: Recupera la nueva orden para el usuario actual. (Requiere autenticación)

      GET https://api-eateaze.onrender.com/api/orders/newOrderForCurrentUser

- **Pay for Order**: Procesa el pago de una nueva orden. (Requiere autenticación)

      POST https://api-eateaze.onrender.com/api/orders/pay

- **Track Order**: Recupera los detalles de una orden por su ID. (Requiere autenticación)

      GET https://api-eateaze.onrender.com/api/orders/track/:id

## **Limitaciones 🚫**:   
 La API está alojada en un servidor gratuito, lo que puede resultar en demoras y algunas interrupciones. Debido a las limitaciones de recursos, podría haber ocasionalmente fallas en la disponibilidad. 