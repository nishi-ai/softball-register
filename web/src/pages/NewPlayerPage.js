import AddPlayerForm from "../components/AddPlayerForm";

function NewPlayerPage() {
    function addPlayerHandler(playerData) {
        console.log("------", playerData)
        // send HTTP request to fetched URL, where you want to send
        fetch(
            'http://localhost:7000/admin/registration',
            // most API requires POST method to store data
            {
                // GET is default
                method: 'POST',
                // body is a data you want to send as JSON format
                body: JSON.stringify(playerData),
                // add some extra headers, if needed, ex. Content-type. extra metadata
                // to the outgoing request to make it clear that this request carries json data
                headers: {
                    'Content-Type': 'application/json'
                },
                mode: 'cors'
            }
        );
        
    }
    return (
        <section>
            <h1>Softball</h1>
            {/* pass addPlayerHandler without () just pointing at a value to onAddPlayer */}
            <AddPlayerForm onAddPlayer={addPlayerHandler}/>
        </section>
    )
}

export default NewPlayerPage