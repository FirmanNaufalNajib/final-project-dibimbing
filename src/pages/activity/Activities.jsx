import { Link } from 'react-router-dom';
import SideBar from '../../components/SideBar';
import Navbar from '../../components/Navbar';
import Activitycard from '../../components/ActivityCard';
import useActivitiesGet from '../../hooks/activity/useActivityGet';
import '../styles.css';

const Activities = () => {
  const { activities, loading, error } = useActivitiesGet();
  
  const namePage = "Activities";

  const role = localStorage.getItem("role")

  return (
    <div className="activity-page d-flex">

{role === "admin" ? 
      <div className='page-bar position-fixed' >
        <SideBar namePage= {namePage} />
        <Link to={`createActivity`}>
          <button className="button-create">Create Activity!</button>
        </Link>
      </div>
      : <Navbar/>}

      {loading ? (
        <p className="loading">Loading...</p>
      ) : error ? (
        <p className="error">{error}</p>
      ) : (
      <div className="activity-page-content d-flex ">

      <div className="activity-list container row">
      {activities.map(activity => (
        <Activitycard 
        activity={activity} 
        key={activity.id} 
        id={activity.id}
        title={activity.title}
        description={activity.description}
        imageUrls={activity.imageUrls[0]}
        />
      ))}
      </div>
      </div>
    )}
      
    </div>
  );
};

export default Activities;
