import Header from "./Header/Header";
// import FeedMain from "./Feed/FeedMain";
import Write from "./Write/Write";

const Main = () => {
    return (
        <>
            <Header />
            <Write />
            {/* {
                [...Array(10)].map((i, index) => {
                    return (
                        <FeedMain />
                    );
                })
            } */}
        </>
    )
}

export default Main;