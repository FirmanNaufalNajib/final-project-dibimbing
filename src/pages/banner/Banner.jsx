
import { Link } from "react-router-dom";
import SideBar from "../../components/SideBar";
import '../styles.css';
import useBannerGet from "../../hooks/banner/useBannerGet";
import BannerCard from "../../components/BannerCard";

const Banner = () => {
  const { banners, loading, error } = useBannerGet();

  const namePages = "Banners";

  return (
    <div className="banner-page d-flex">
      
      <div className="page-bar position-fixed">
      <SideBar namePage={namePages}/>
      <Link to={`createBanner`}>
        <button className="button-create">Create Banner !</button>
      </Link>
      </div >

      <div className="banner-page-content d-flex ">
      {loading ? (
        <p className="loading">Loading...</p>
      ) : error ? (
        <p className="error">{error}</p>
      ) : (
        <div className="banner-list container row">
          {banners.map((banner) => (
            <BannerCard 
            banner={banner} 
            key={banner.id} 
            id={banner.id}
            name={banner.name}
            imageUrl={banner.imageUrl}
            updatedAt={banner.updatedAt}
            />
          ))}
        </div>
      )}
      </div>
 
    </div>
  );
};

export default Banner;
