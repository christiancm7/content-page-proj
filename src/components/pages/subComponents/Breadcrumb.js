import React from 'react'

export const Breadcrumb = (props) => {
    return (
            <div className="ui breadcrumb bcrumb">
                <i className="chevron circle big right icon divider"></i>
                <a className="section">Home</a>
                <i className="right angle icon divider"></i>
    <div className="active section">{props.title}</div>
            </div>
    )
}

export default Breadcrumb;
