import Banner from "./home/Banner";
import FeaturedPost from "./home/FeaturedPost";
import UpcomingEvents from "./home/UpcomingEvents";

export default function Home() {
  return (
    <div className="mb-10">
      <Banner />
      <FeaturedPost />
      <UpcomingEvents />
    </div>
  );
}
