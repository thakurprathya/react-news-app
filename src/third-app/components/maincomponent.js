import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import Item from './item';
import Loader from './loader';
import InfiniteScroll from "react-infinite-scroll-component"; //including infinite scroll files

const MainComp =(props)=>{ 
  //defining states
  const [articles, setArticles]= useState([]);
  const [loading, setLoading]= useState(true);
  const [page, setPage]= useState(1);
  const [totalResults, setTotalResults]= useState(0);
  
  //similar to componentDidMount
  useEffect(()=>{  //using useEffect, will take place only once, as inputed value is empty array
    (async ()=>{ //use this method to handle async await or make a function which returns the promise and call it here
      let url=`https://newsapi.org/v2/top-headlines?country=${props.Country}&category=${props.Category}&apiKey=${props.apiKey}&pagesize=${props.pageSize}`;  //url using for fetchapi, pagesize is newsapi parameter will fetch only entered data to prop at one page,setting it using props
      props.setProgress(10);  //initialzing progress bar on loading and changing category
      setLoading(true);  //enabling loader
      let data= await fetch(url); //cdm will wait for this promise to resolve
      props.setProgress(30);  //setting width after fetch
      let parsed_data= await data.json();
      props.setProgress(70);  //setting width after parsing data
      //setting states
      setArticles(parsed_data.articles);
      setTotalResults(parsed_data.totalResults);
      setLoading(false);
      props.setProgress(100);  //finalizing progress bar
      document.title= `News App ${CapitalizeStr(props.Category)}`;
    })();

    return ()=>{}; //this gets called when component  unmounts
    //eslint-disable-next-line
  },[]); //not adding any dependencies so will raise an warning which we handle in above command which disables the warning

  const CapitalizeStr= (string)=>{ return (string.charAt(0).toUpperCase() + string.slice(1)); } //func to capitalize string
  const fetchMoreData= async ()=>{
    // an noteworthy point here is we're incrementing page both as state as well as in link if any of them not done error will be raised
    let url=`https://newsapi.org/v2/top-headlines?country=${props.Country}&category=${props.Category}&apiKey=${props.apiKey}&page=${page +1}&pagesize=${props.pageSize}`;
    setPage(page+1); //it takes some amount of time in millisecond which can cause erros if command placed above updating url
    let data= await fetch(url); //cdm will wait for this promise to resolve
    let parsed_data= await data.json();
    //setting states
    setArticles(articles.concat(parsed_data.articles));  //concatenating new data to articles
    setTotalResults(parsed_data.totalResults);   
  }

    return (
      <>
        <h1 className='text-center' style={{marginTop:"120px", marginBottom:"10px"}}><b>Top {CapitalizeStr(props.Category)} Headlines</b></h1>
        {loading && <Loader/>} {/*if loading true then display loader, used here for first time loding on reloding the page, earlier using it for all the loadings*/}
        
        <InfiniteScroll dataLength={articles.length} next={fetchMoreData} hasMore={articles.length !== totalResults} loader={<Loader/>}>
          <div className='container my-4'> {/*without enclosing data in this container a scrollbar appears at bottom on scrolling down styling problem */}
            <div className="row"> {/*using bootstrap table classes for auto arrangements */}
                {articles.map((element)=>{  //creating an function map which will run for every element as we created a loop
                    return (
                    <div className="col-md-3" key={element.url}>  {/*using url as key*/}
                        <Item title={element.title?element.title.slice(0,35):""} description={element.description?element.description.slice(0,80):""} 
                        itemimageurl={element.urlToImage?element.urlToImage:"https://rb.gy/irh0ey"} itemurl={element.url}
                        author={element.author} date={element.publishedAt} source={element.source.name}/> {/*using slicing for limiting content of box if ele is not null*/}
                    </div>
                    )
                })}
            </div>
          </div>
        </InfiniteScroll>
      </>
    )
}

export default MainComp;
MainComp.defaultProps={Country: "us", pageSize: 16, Category: "general"};
MainComp.propTypes={Country: PropTypes.string, pageSize: PropTypes.number, Category: PropTypes.string};