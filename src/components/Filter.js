import React, {Component} from 'react';
import '../App.css';

class Filter extends Component {
    render() {
        return (
            <div className="filter">
                {/*<div className="filter-result">{this.props.count}*/}
                {/*</div>*/}
                <span className="category">קטגוריה</span>
                <span className="byCategory">
                    <select value={this.props.category} onChange={this.props.filterProducts} className="categoryFilter">
                        <option name="All" value="All">הכל</option>
                        <option name="Home" value="Home">מוצרי נוי</option>
                        <option name="Balloons" value="Balloons">בלונים</option>
                        <option name="AirBalloon" value="AirBalloon">בלון פורח</option>
                    </select>
                </span>
            </div>
        );
    }
}

export default Filter;