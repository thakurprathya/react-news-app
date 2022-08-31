import React, { Component } from 'react';
import Item from './item';
import Loader from './loader';

export default class MainComp extends Component { 
  static defaultProps={Country: "us", pageSize: 16, Category: "general"};
//   static propTypes={Country: PropTypes.string, pageSize: PropTypes.number, Category: PropTypes.string}
  
  constructor(){  //will be called everytime class object created, called, will run first
      super();
    //   console.log(`constructor`);
      this.state={  //setting state inside constructor
         articles: [],
         loading: false,
         page: 1,
         bool: false
      };
  }
  async componentDidMount(){  //this will run after render component, also using async await of Js
    //   console.log("cdm");
      let url=`https://newsapi.org/v2/top-headlines?country=${this.props.Country}&category=${this.props.Category}&apiKey=5252d16513584e8ab35eb5e4b550dbbc&pagesize=${this.props.pageSize}`;  //url using for fetchapi, pagesize is newsapi parameter will fetch only entered data to prop at one page,setting it using props
      this.setState({loading: true});  //enabling loader
      let data= await fetch(url); //cdm will wait for this promise to resolve
      let parsed_data= await data.json();
      this.setState({articles: parsed_data.articles, totalResults: parsed_data.totalResults, loading: false});  //setting state depending upon api
  }

  HandlePrevClick= async ()=>{  //creating function
    //   console.log("prev");
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.Country}&category=${this.props.Category}&apiKey=5252d16513584e8ab35eb5e4b550dbbc&page=${this.state.page -1}&pagesize=${this.props.pageSize}`;  //url using for fetchapi
    this.setState({loading: true});  //enabling loader
    let data= await fetch(url); //cdm will wait for this promise to resolve
    let parsed_data= await data.json();

    this.setState({page: this.state.page -1, articles: parsed_data.articles, bool: false, loading: false});
  }
  HandleNextClick= async ()=>{  //creating function
    //   console.log("next");
    if(this.state.page +1 <= Math.ceil(this.state.totalResults/this.props.pageSize)){
        let url=`https://newsapi.org/v2/top-headlines?country=${this.props.Country}&category=${this.props.Category}&apiKey=5252d16513584e8ab35eb5e4b550dbbc&page=${this.state.page +1}&pagesize=${this.props.pageSize}`;  //url using for fetchapi
        this.setState({loading: true});  //enabling loader
        let data= await fetch(url); //cdm will wait for this promise to resolve
        let parsed_data= await data.json();

        this.setState({page: this.state.page +1, articles: parsed_data.articles, bool: false, loading: false});
    }
    if(this.state.page+1 === Math.ceil(this.state.totalResults/this.props.pageSize)){ this.setState({bool: true});}
  }

  render(){
    // console.log(`render`);
    return (
      <div className='container my-4'>
        <h1 className='mb-4 mt-4 text-center'><b>Top Headlines</b></h1>
        {this.state.loading && <Loader/>} {/*if loading true then display loader*/}
        <div className="row"> {/*using bootstrap table classes for auto arrangements */}
            {!this.state.loading && this.state.articles.map((element)=>{  //creating an function map which will run for every element as we created a loop, also enabling loader for next page
                return (
                <div className="col-md-3" key={element.url}>  {/*using url as key*/}
                     <Item title={element.title?element.title.slice(0,35):""} description={element.description?element.description.slice(0,80):""} 
                     itemimageurl={element.urlToImage?element.urlToImage:"https://rb.gy/irh0ey"} itemurl={element.url}
                     author={element.author} date={element.publishedAt} source={element.source.name}/> {/*using slicing for limiting content of box if ele is not null*/}
                </div>
                )
            })}
        </div>
        <div className="container d-flex justify-content-between"> {/*bootstrap flexbox classes, btn-lg = btn large, larr and rarr are for arrows */}
            <button type="button" className="btn btn-primary btn-lg" onClick={this.HandlePrevClick} disabled={this.state.page<=1}>&larr; Previous</button> {/*disabling if on page 1 */}
            <button type="button" className="btn btn-primary btn-lg" onClick={this.HandleNextClick} disabled={this.state.bool}>Next &rarr;</button> {/*also can directly add disable condition */}
        </div>
      </div>
    )
  }
}
