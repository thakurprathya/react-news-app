import React from 'react'

const Item =(props)=>{
    let {title, description, itemimageurl, itemurl, author, date, source} = props;  //destructuring; from object props pulling  two var as title and discription
    return (
      <div>
        {/* including bootstrap card */}
        <div className="card mb-3">
            <img src={itemimageurl} className="card-img-top" alt="..." style={{height:"210px"}}/>
            <div className="card-body">
                <h5 className="card-title">{title}...</h5>
                <p className="card-text">{description}...</p>
                <p className="card-text"><small className="text-muted">By {!author?"Unknown":author} on {new Date(date).toGMTString()}</small></p>
                <div style={{display:"flex", justifyContent:"space-between"}}>
                <a href={itemurl} target="_blank" rel="noreferrer" className="btn btn-sm btn-dark">Read More</a> 
                <p className="card-text text-muted">{!source?"Unknown":source}</p>
                </div>
                {/*btn-sm class is used for small btns, target="_blank" is used for opening url in new tab and rel is necessary to use with this target 
                if author is null unknown will be shown, date on server is present as ISOstring we converted it into GMT string more
                readable to us, after creating it as a date object, we can change time depending upon different countries
                in our country its gmt*/}
            </div>
        </div>
      </div>
    )
}

export default Item;
