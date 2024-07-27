import Hero from "../components/Hero"
import HomeCard from "../components/HomeCard"
import JobListe from "../components/Jobliste"
import ViewAllJobs from "../components/ViewAllJobs"
const HomePage = () => {
    return (
        <>
        <Hero/>
        <HomeCard/>
        <JobListe isHome={true} />
        <ViewAllJobs/>
        </>
    )
}

export default HomePage;