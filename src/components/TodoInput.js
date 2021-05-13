import React, { Component } from 'react'

export default class TodoInput extends Component {
    render() {
        const {item,handleChange,handleSubmit,editItem} = this.props;
        return (
            <div className="card card-body my-3">
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text bg-primary text-white">
                                <i className="fas fa-book fa-2x" />
                            </span>
                        </div>
                        <input type="text" className="form-control text-capitalize" placeholder="add todo item" value={item} onChange={handleChange} />
                    </div>
                    <button type="submit" className={editItem?"btn w-100 btn-success text-uppercase mt-3":"btn w-100 btn-primary text-uppercase mt-3"}>{editItem?"edit item":"add item"}</button>
                </form>
            </div>
        )
    }
}
