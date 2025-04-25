import { useState } from "react";

function FeedbackForm(){

    let [formData,setFormData] = useState({
        username: "",
        remark: "",
        rating: 5
    })

    function handleChange(e){
        let copyObj = {...formData};
        let name = e.target.name;
        let value = e.target.value;

        copyObj[name] = value;
        setFormData(copyObj);
    }

    function handleSubmit(e){
        e.preventDefault();
        console.log(formData);
        alert("-- Thank You --")
    }

    return (
        <div>
            <h1>Feedback Form</h1>
            <form onSubmit={handleSubmit}>
                <div className="username">
                    <label htmlFor="usrname">Username: </label>
                    <input onChange = {handleChange} type="text" id="usrname" placeholder="enter name" name="username" value={formData.username}/>
                </div>
                <br />
                <div className="remark">
                    <label htmlFor="rmrk">Remark: </label>
                    <input onChange = {handleChange} type="text" id="rmrk" placeholder="enter remark" name="remark" value={formData.remark}/>
                </div>
                <br />
                <div className="rating">
                    Rating: 
                    <input onChange = {handleChange} type="range" name="rating" min={0} max={5} step={1} value={formData.rating}/>
                    {formData.rating}
                </div>
                <br />
                <div className="submit">
                    <button>Submit</button>
                </div>
            </form>
        </div>
    )
}

export default FeedbackForm;