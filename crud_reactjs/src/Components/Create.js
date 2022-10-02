import React from "react";

export default function Create() {
return (
<div className="container m-5">
    <div className="row">
        <div className="col-12">
                <form>
                    <h3 >Create</h3>
                <label htmlFor="inputName" className="form-label">Name</label>
                <input type="text" id="inputName" className="form-control" />
                <br/>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <br />
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    </div>
</div>
);
}