import React from 'react'

export const Breadcrumb = () => {
    return (
            <div class="ui breadcrumb bcrumb">
                <i class="chevron circle big right icon divider"></i>
                <a class="section">Home</a>
                <i class="right angle icon divider"></i>
                <div class="active section">Research Overview</div>
            </div>
    )
}

export default Breadcrumb;
