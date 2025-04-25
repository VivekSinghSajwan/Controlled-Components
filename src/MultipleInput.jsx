import { useState } from "react";

function MultipleInput(){
    let [inputData,setInputData] = useState({
        FirstName:"",
        LastName:"",
        Email:""
    });

    let changeData = (e) => {
        console.log(Math.random());
        let name = e.target.name;
        let value = e.target.value;

        let copyObj = {...inputData};
        copyObj[name] = value;
        setInputData(copyObj);
    }

    let handleSubmit = (e) => {
        e.preventDefault();
        alert("-- Data Submitted--")
        console.log(inputData);
        setInputData({
            FirstName:"",
            LastName:"",
            Email:""
        });
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                    onChange={changeData} 
                    type="text" 
                    placeholder="firstName" 
                    name="FirstName" 
                    value={inputData.FirstName}
                /><br/>
                <input 
                    onChange={changeData} 
                    type="text" 
                    placeholder="lastName" 
                    name="LastName" 
                    value={inputData.LastName}
                /><br/>
                <input 
                    onChange={changeData} 
                    type="email" 
                    placeholder="email" 
                    name="Email" 
                    value={inputData.Email}
                /><br/>
                <button>SUBMIT</button>
            </form>
        </div>
    )
}

export default MultipleInput;