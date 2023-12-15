let arr=
[
    {
    id: 4,
    title: "newTitle",
    price: 205,
    description: "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smartfunctionality",
    image_url: "https://i.imgur.com/R2PN9Wq.jpeg"
    },
    {
    id: 7,
    title: "Ergonomic Wooden Tuna",
    price: 743,
    description: "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
    image_url: "https://i.imgur.com/mp3rUty.jpeg"
    },
    {
    id: 9,
    title: "Electronic Bronze Chips",
    price: 808,
    description: "The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and fourwheel drive",
    image_url: "https://i.imgur.com/R3iobJA.jpeg"
    },
    {
    id: 11,
    title: "Awesome Bronze Car",
    price: 382,
    description: "Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals",
    image_url: "https://i.imgur.com/cBuLvBi.jpeg"
    },
    {
    id: 12,
    title: "Recycled Rubber Cheese",
    price: 30,
    description: "New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016",
    image_url: "https://i.imgur.com/KeqG6r4.jpeg"
    }
    ]


  
  let exp = document.getElementById("exp")


  arr.map((dd)=>{
    const { id, title, price, description, image_url } = arr
    exp.innerHTML +=`

      <div class="card
      " style="width: 18rem;">
      <img src="${dd.image_url}}" class="card-img-top" alt="...">
        <h5 class="card-title">Title:${dd. title}</h5>
        <h5 class="card-title">price:${dd.price}</h5>
      <div class="card-body ">
        <h5 class="card-title">id:${dd.id}</h5>
        <p class="card-text">${dd.description}</p>

      </div>
    </div>
    `
    })