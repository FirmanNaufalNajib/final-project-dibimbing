//import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"
import SideBar from "../../components/SideBar"
import useActivitybyIdAll from "../../hooks/activity/useActivitybyIdAll"
import ActivityDetailCard from "../../components/ActivityDetailCard"

const ActivityDetail = () => {
  const namePage = "Activity Detail"
  //const {id} = useParams()
  const { activity } = useActivitybyIdAll()

  return (
    <>
      <div className="category-page d-flex">
      <div className="page-bar position-fixed">
      <SideBar namePage={namePage}/>
      <Link to={`updateActivity/${activity.id}`}>
      <button className="edit-button">Edit Activity</button>
      </Link>
      </div>

      <ActivityDetailCard 
        activity={activity}
        key={activity.id}
        categoryId={activity.category?.id}
        categoryImageUrl={activity.category?.imageUrl}
        categoryName={activity.category?.name}
        categoryCreatedAt={activity.category?.createdAt}
        categoryUpdatedAt={activity.category?.updatedAt}
        id={activity.id}
        title={activity.title}
        description={activity.description}
        imageUrls={activity.imageUrls}
        price={activity.price}
        price_discount={activity.price_discount}
        rating={activity.rating}
        total_reviews={activity.total_reviews}
        facilities={activity.facilities}
        address={activity.address}
        province={activity.province}
        city={activity.city}
        location_map={activity.location_map}
        createdAt={activity.createdAt}
        updatedAt={activity.updatedAt}
      />
    </div>
    </>
  )
}

export default ActivityDetail