import React from "react";

const Search = () => (
<div className="row text-center">
            <div className="col"></div>
            <div className="col-10">
                <div className="card">
                    <div className="card-header">Search</div>
                    <div className="card-body" id="search">
                        <form>
                            <div className="form-group">
                                <label >Topic</label>
                                <input  className="form-control" />
                            </div>

                            <div className="form-group">
                                <label >Start Year</label>
                                <input className="form-control" />
                            </div>

                            <div className="form-group">
                                <label >End Year</label>
                                <input className="form-control" />
                            </div>

                            <button className="btn btn-primary">search</button>
                        </form>
                    </div>
                </div>
                </div>
            <div className="col"></div>
     </div>
);

export default Search;