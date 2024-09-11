import React, { useContext } from 'react';
// import { FavoritesContext } from './FavoriteContext'; // Убедитесь в правильности пути

const Favorites = () => {
  // const { favorites } = useContext(FavoritesContext);

  return (
    <div>
      <h1>Favorites</h1>
      {/* <div className="favorites-list">
        {favorites.length === 0 ? (
          <p>No favorite products yet.</p>
        ) : (
          favorites.map((product, index) => (
            <div key={index} className="favorite-item">
              <h1>{product.brand}</h1>
              <img src={product.url} alt={product.title} className="h-[100px]" />
              <p>{product.costMonth2}</p>
              <h1>{product.cost}</h1>
            </div>
          ))
        )}
      </div> */}
    </div>
  );
};

export default Favorites;
