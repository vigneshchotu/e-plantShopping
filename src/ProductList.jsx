import React, { useState } from "react";
import "./ProductList.css";
import CartItem from "./CartItem";
import { useDispatch } from "react-redux";
import { addItem } from "./CartSlice";

function ProductList({ onHomeClick }) {
  const [showCart, setShowCart] = useState(false);
  const dispatch = useDispatch();

  const plantsArray = [
    {
      category: "Air Purifying Plants",
      plants: [
        {
          id: 1,
          name: "Snake Plant",
          image: "https://cdn.pixabay.com/photo/2021/01/22/06/04/snake-plant-5939187_1280.jpg",
          cost: 15,
        },
        {
          id: 2,
          name: "Spider Plant",
          image: "https://cdn.pixabay.com/photo/2018/07/11/06/47/chlorophytum-3530413_1280.jpg",
          cost: 12,
        },
        {
          id: 3,
          name: "Peace Lily",
          image: "https://cdn.pixabay.com/photo/2019/06/12/14/14/peace-lilies-4269365_1280.jpg",
          cost: 18,
        },
        {
          id: 4,
          name: "Boston Fern",
          image: "https://cdn.pixabay.com/photo/2020/04/30/19/52/boston-fern-5114414_1280.jpg",
          cost: 20,
        },
        {
          id: 5,
          name: "Rubber Plant",
          image: "https://cdn.pixabay.com/photo/2020/02/15/11/49/flower-4850729_1280.jpg",
          cost: 17,
        },
        {
          id: 6,
          name: "Aloe Vera",
          image: "https://cdn.pixabay.com/photo/2018/04/02/07/42/leaf-3283175_1280.jpg",
          cost: 14,
        },
      ],
    },
    {
      category: "Aromatic Fragrant Plants",
      plants: [
        { id: 7, name: "Lavender", image: "https://images.unsplash.com/photo-1611909023032-2d6b3134ecba", cost: 20 },
        { id: 8, name: "Jasmine", image: "https://images.unsplash.com/photo-1592729645009-b96d1e63d14b", cost: 18 },
        { id: 9, name: "Rosemary", image: "https://cdn.pixabay.com/photo/2019/10/11/07/12/rosemary-4541241_1280.jpg", cost: 15 },
        { id: 10, name: "Mint", image: "https://cdn.pixabay.com/photo/2016/01/07/18/16/mint-1126282_1280.jpg", cost: 12 },
        { id: 11, name: "Lemon Balm", image: "https://cdn.pixabay.com/photo/2019/09/16/07/41/balm-4480134_1280.jpg", cost: 14 },
        { id: 12, name: "Hyacinth", image: "https://cdn.pixabay.com/photo/2019/04/07/20/20/hyacinth-4110726_1280.jpg", cost: 22 },
      ],
    },
    {
      category: "Insect Repellent Plants",
      plants: [
        { id: 13, name: "Oregano", image: "https://cdn.pixabay.com/photo/2015/05/30/21/20/oregano-790702_1280.jpg", cost: 10 },
        { id: 14, name: "Marigold", image: "https://cdn.pixabay.com/photo/2022/02/22/05/45/marigold-7028063_1280.jpg", cost: 8 },
        { id: 15, name: "Geraniums", image: "https://cdn.pixabay.com/photo/2012/04/26/21/51/flowerpot-43270_1280.jpg", cost: 20 },
        { id: 16, name: "Basil", image: "https://cdn.pixabay.com/photo/2016/07/24/20/48/tulsi-1539181_1280.jpg", cost: 9 },
        { id: 17, name: "Lavender", image: "https://images.unsplash.com/photo-1611909023032-2d6b3134ecba", cost: 20 },
        { id: 18, name: "Catnip", image: "https://cdn.pixabay.com/photo/2015/07/02/21/55/cat-829681_1280.jpg", cost: 13 },
      ],
    },
    {
      category: "Medicinal Plants",
      plants: [
        { id: 19, name: "Aloe Vera", image: "https://cdn.pixabay.com/photo/2018/04/02/07/42/leaf-3283175_1280.jpg", cost: 14 },
        { id: 20, name: "Echinacea", image: "https://cdn.pixabay.com/photo/2014/12/05/03/53/echinacea-557477_1280.jpg", cost: 16 },
        { id: 21, name: "Peppermint", image: "https://cdn.pixabay.com/photo/2017/07/12/12/23/peppermint-2496773_1280.jpg", cost: 13 },
        { id: 22, name: "Lemon Balm", image: "https://cdn.pixabay.com/photo/2019/09/16/07/41/balm-4480134_1280.jpg", cost: 14 },
        { id: 23, name: "Chamomile", image: "https://cdn.pixabay.com/photo/2016/08/19/19/48/flowers-1606041_1280.jpg", cost: 15 },
        { id: 24, name: "Calendula", image: "https://cdn.pixabay.com/photo/2019/07/15/18/28/flowers-4340127_1280.jpg", cost: 12 },
      ],
    },
    {
      category: "Low Maintenance Plants",
      plants: [
        { id: 25, name: "ZZ Plant", image: "https://images.unsplash.com/photo-1632207691143-643e2a9a9361", cost: 25 },
        { id: 26, name: "Pothos", image: "https://cdn.pixabay.com/photo/2018/11/15/10/32/plants-3816945_1280.jpg", cost: 10 },
        { id: 27, name: "Snake Plant", image: "https://cdn.pixabay.com/photo/2021/01/22/06/04/snake-plant-5939187_1280.jpg", cost: 15 },
        { id: 28, name: "Cast Iron Plant", image: "https://cdn.pixabay.com/photo/2017/02/16/18/04/cast-iron-plant-2072008_1280.jpg", cost: 20 },
        { id: 29, name: "Succulents", image: "https://cdn.pixabay.com/photo/2016/11/21/16/05/cacti-1846147_1280.jpg", cost: 18 },
        { id: 30, name: "Aglaonema", image: "https://cdn.pixabay.com/photo/2014/10/10/04/27/aglaonema-482915_1280.jpg", cost: 22 },
      ],
    },
  ];

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
    alert(`${plant.name} added to cart`);
  };

  return (
    <div>
      {/* NAVBAR */}
      <div className="navbar">
        <h2>🌿 Paradise Nursery</h2>
        <button onClick={() => setShowCart(false)}>Plants</button>
        <button onClick={() => setShowCart(true)}>Cart</button>
      </div>

      {/* PRODUCTS */}
      {!showCart ? (
        <div>
          {plantsArray.map((category, index) => (
            <div key={index}>
              <h2>{category.category}</h2>

              <div className="product-grid">
                {category.plants.map((plant) => (
                  <div key={plant.id} className="product-card">
                    <img src={plant.image} alt={plant.name} />
                    <h3>{plant.name}</h3>
                    <p>₹{plant.cost}</p>

                    <button onClick={() => handleAddToCart(plant)}>
                      Add to Cart
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <CartItem />
      )}
    </div>
  );
}

export default ProductList;
