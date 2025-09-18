function Products() {
  const products = [
    {
      name: "R33",
      desc: "Luxury 2-Door Sports Coupe",
      price: "from 409,800 ¥",
      image: "/cars/image2.png",
    },
    {
      name: "R34",
      desc: "Hi-Tech Hybrid MPV",
      price: "from 249,800 ¥",
      image: "/cars/image1.png",
    },
    {
      name: "SKYLINE",
      desc: "Next-Gen Hypercar",
      price: "from 699,800 ¥",
      image: "/cars/image4.png",
    },
  ];

  return (
    <section id="investors" className="min-h-screen bg-black text-white px-10 py-16">
      {/* Header */}
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-5xl font-extrabold tracking-wider">
        <span className="text-red-600">FOR</span> INVESTORS
        </h1>
        <div className="flex gap-6 text-gray-400 text-sm">
          <button className="hover:text-red-500">EN</button>
          <button className="hover:text-red-500">CH</button>
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
        {products.map((car, index) => (
          <div
            key={index}
            className="bg-gradient-to-b from-gray-900 to-black rounded-2xl p-6 border border-red-600 shadow-lg hover:shadow-red-700/50 transition"
          >
            <div className="w-full h-60 bg-black flex items-center justify-center rounded-xl mb-6">
              <img
                src={car.image}
                alt={car.name}
                className="object-contain h-full"
              />
            </div>
            <h2 className="text-2xl font-bold mb-2 text-red-500">
              {car.name}
            </h2>
            <p className="text-gray-300 mb-3">{car.desc}</p>
            <p className="text-lg font-semibold">{car.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Products;
