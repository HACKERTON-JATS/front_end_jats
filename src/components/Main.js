import Header from "./Header/Header";
import FeedMain from "./Feed/FeedMain";

const Main = () => {
    return (
        <>
            <Header />
            {
                [...Array(10)].map((i, index) => {
                    return (
                        <FeedMain />
                    );
                })
            }
        </>
    )
}

export default Main;