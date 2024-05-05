import React from 'react';
import { Link } from 'react-router-dom';
import SideBar from '../../components/SideBar';
import CategoryCard from '../../components/CategoryCard';
import useCategoryGet from '../../hooks/category/useCategoryGet';
import '../styles.css';
const Category = () => {
  const { categories, loading, error } = useCategoryGet();

  return (
    <div className="category-page d-flex">

      <div className="page-bar position-fixed">
        <SideBar namePage="Categories"/>
        <Link to={`createCategory`}>
          <button className="button-create">Create Category </button>
        </Link>
      </div>

      {loading ? (
        <p className="loading">Loading...</p>
      ) : error ? (
        <p className="error">{error}</p>
      ) : (
        <div className="category-list container row">
          {categories.map(category => (
          <CategoryCard
          key={category.id}
          id={category.id}
          category={category}
          imageUrl={category.imageUrl}
          name={category.name}
          />
      ))}

    </div>
      )}
      
    </div>
  );
};

export default Category;
