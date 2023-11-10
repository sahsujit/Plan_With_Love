import Card from "./Card";
function Tours(props){
    function removeHandler(id){
        console.log(id);
        props.removeTour(id)
    }
    
    return(
        <div className="container">
            <div className="title">
                <h2>Plan With Love</h2>
            </div>
            <div className="cards">
                {
                    props.tours.map((tour) => {
                        return <Card {...tour} removeTour={removeHandler}></Card>
                    })
                }
            </div>
        </div>
    )

}
export default Tours;