import React, { Component } from 'react';
import Item from './item';
import Loader from './loader';
import InfiniteScroll from "react-infinite-scroll-component"; //including infinite scroll files

export default class MainComp extends Component { 
  static defaultProps={Country: "us", pageSize: 16, Category: "general"};
  // static propTypes={Country: PropTypes.string, pageSize: PropTypes.number, Category: PropTypes.string}
  
  constructor(props){  //will be called everytime class object created, called, will run first
      super(props);  //for using props in constructor have to pass it as parameter in both constructor and super
    //   console.log(`constructor`);
      this.state={  //setting state inside constructor
         articles: [],
         loading: true,  //making it bydefault true so that it shows loading on reloading the page
         page: 1,
         totalResults: 0  //setting it bydefault 0 used in inifintescroll
      };
      document.title= `News App ${this.CapitalizeStr(this.props.Category)}`;
  }

  CapitalizeStr= (string)=>{ return (string.charAt(0).toUpperCase() + string.slice(1)); }
  async componentDidMount(){  //this will run after render component, also using async await of Js
    //   console.log("cdm");
      let url=`https://newsapi.org/v2/top-headlines?country=${this.props.Country}&category=${this.props.Category}&apiKey=0403917ebc3f4eaaadef9d8878a6b710&pagesize=${this.props.pageSize}`;  //url using for fetchapi, pagesize is newsapi parameter will fetch only entered data to prop at one page,setting it using props
      this.setState({loading: true});  //enabling loader
      let data= await fetch(url); //cdm will wait for this promise to resolve
      let parsed_data= await data.json();
      this.setState({articles: parsed_data.articles, totalResults: parsed_data.totalResults, loading: false});  //setting state depending upon api
  }
  // no longer required below functions as they handle clicking of buttons
  // HandlePrevClick= async ()=>{  //creating function
  //   //   console.log("prev");
  //   let url=`https://newsapi.org/v2/top-headlines?country=${this.props.Country}&category=${this.props.Category}&apiKey=0403917ebc3f4eaaadef9d8878a6b710&page=${this.state.page -1}&pagesize=${this.props.pageSize}`;  //url using for fetchapi
  //   this.setState({loading: true});  //enabling loader
  //   let data= await fetch(url); //cdm will wait for this promise to resolve
  //   let parsed_data= await data.json();
  //   this.setState({page: this.state.page -1, articles: parsed_data.articles, loading: false});
  // }
  // HandleNextClick= async ()=>{  //creating function
  //   //   console.log("next");
  //   let url=`https://newsapi.org/v2/top-headlines?country=${this.props.Country}&category=${this.props.Category}&apiKey=0403917ebc3f4eaaadef9d8878a6b710&page=${this.state.page +1}&pagesize=${this.props.pageSize}`;  //url using for fetchapi
  //       this.setState({loading: true});  //enabling loader
  //       let data= await fetch(url); //cdm will wait for this promise to resolve
  //       let parsed_data= await data.json();
  //       this.setState({page: this.state.page +1, articles: parsed_data.articles, loading: false});
  // }
  fetchMoreData= async ()=>{
    this.setState({page: this.state.page +1});
    // an noteworthy point here is we're incrementing page both as state as well as in link if any of them not done error will be raised
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.Country}&category=${this.props.Category}&apiKey=0403917ebc3f4eaaadef9d8878a6b710&page=${this.state.page +1}&pagesize=${this.props.pageSize}`;
    let data= await fetch(url); //cdm will wait for this promise to resolve
    let parsed_data= await data.json();
    this.setState({ articles: this.state.articles.concat(parsed_data.articles), totalResults: parsed_data.totalResults });  //setting state depending upon api, also here concatenating new data to articles
  }

  render(){
    // console.log(`render`);
    return (
      <>
        <h1 className='mb-4 mt-4 text-center'><b>Top {this.CapitalizeStr(this.props.Category)} Headlines</b></h1>
        {this.state.loading && <Loader/>} {/*if loading true then display loader, used here for first time loding on reloding the page, earlier using it for all the loadings*/}
        
        <InfiniteScroll dataLength={this.state.articles.length} next={this.fetchMoreData} 
        hasMore={this.state.articles.length !== this.state.totalResults} loader={<Loader/>}>
          <div className='container my-4'> {/*without enclosing data in this container a scrollbar appears at bottom on scrolling down styling problem */}
            <div className="row"> {/*using bootstrap table classes for auto arrangements */}
                {/* {!this.state.loading && this.state.articles.map((element)=>{  //creating an function map which will run for every element as we created a loop, also enabling loader for next page, used for simple loader */}
                {this.state.articles.map((element)=>{  //creating an function map which will run for every element as we created a loop
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

        {/* no longer using these buttons bootstrap flexbox classes, btn-lg = btn large, larr and rarr are for arrows */}
        {/* <div className="container d-flex justify-content-between"> 
            <button type="button" className="btn btn-primary btn-lg" onClick={this.HandlePrevClick} disabled={this.state.page<=1}>&larr; Previous</button>
            <button type="button" className="btn btn-primary btn-lg" onClick={this.HandleNextClick} disabled={this.state.page===Math.ceil(this.state.totalResults/this.props.pageSize)}>Next &rarr;</button>
        </div> */}
      </>
    )
  }
}
