import React, { Component } from 'react';
import $ from 'jquery';

class SignIn extends Component {
  constructor(props){
    super(props)
  }
  handleSubmit(){
  var userName = $("#name").val()
  console.log(userName)
     //make a post request to the server to store user data in the database
     //store in local storage
     localStorage.setItem("userName",userName)
     $("#sign").hide()
     $("#main-div").attr("hidden",false)
  }
  render() {
      return ( <div id="sign"
       style={{
      width: "500px",
      padding: "30px",
      background: "#ffffff",
      margin: "50px auto",
      boxShadow: "0px 0px 15px rgba(0, 0, 0, 0.22)",
      borderRadius: "200px",
      border: "3px solid black"}}>
          <input type="text" id="name" placeholder="          name" style={{
            boxSizing:"border-box",
            outline: "none",
            display: "block",
            width: "100%",
            padding: "7px",
            border: "none",
            borderBottom: "1px solid #ddd",
            background: "transparent",
            marginBottom: "10px",
            font: "16px Arial, Helvetica, sans-serif",
            height: "45px",
          }}></input>
          <br />
          <br />
          <input type="email" id="email" placeholder="           email"
          style={{
            boxSizing:"border-box",
            outline: "none",
            display: "block",
            width: "100%",
            padding: "7px",
            border: "none",
            borderBottom: "1px solid #ddd",
            background: "transparent",
            marginBottom: "10px",
            font: "16px Arial, Helvetica, sans-serif",
            height: "45px",
          }}
          ></input>
          <br />
          <br />
          <input type="password" id="number" placeholder="          password"
          style={{
            boxSizing:"border-box",
            outline: "none",
            display: "block",
            width: "100%",
            padding: "7px",
            border: "none",
            borderBottom: "1px solid #ddd",
            background: "transparent",
            marginBottom: "10px",
            font: "16px Arial, Helvetica, sans-serif",
            height: "45px",
          }}
          ></input>
          <br />
          <br />
          <button value="Sign-in" onClick={this.handleSubmit}
          style={{
            position:"absolute",
            left:"45%",
            right:"67%",
            width:"150px",
            boxShadow: "inset 0px 1px 0px 0px black",
            backgroundColor: "black",
            border: "1px solid black",
            display: "inline-block",
            cursor: "pointer",
            color: "#ffffff",
            fontSize: "14px",
            padding: "8px 18px",
            textDecoration: "none",
            textTransform: "uppercase",
            borderRadius: "200px",
            border: "3px solid black",
          }}
          >Sign-In</button>

          </div> );
  }
}


class MakeProduct extends Component {
    constructor(props){
        super(props)
        this.state ={
          total:0,
          imge:this.props.prod.image,
          name:this.props.prod.name,
          price:this.props.prod.price
        };
        this.sendData = this.sendData.bind(this)
        this.changeImg = this.changeImg.bind(this)
    }
    sendData(){

      this.setState({total:this.state.total+1})
      $('#e').show()
      var x = {name:this.props.prod.name,price:this.props.prod.price}

    $.post('http://localhost:8000/items',
    { myData: x })
    .done(function () { alert('Request done!'); })
    .fail(function (jqxhr, settings, ex) { alert('failed, ' + ex); });

    }
    changeImg(){
     // $(`#${this.props.prod.name}`).attr("src",this.props.prod.shoes)
     if(this.state.imge===this.props.prod.shoes){this.setState({imge:this.props.prod.bag,name:"free",price:0})}
     else if(this.state.imge===this.props.prod.image){
     this.setState({imge:this.props.prod.shoes,name:this.props.prod.shoesds,price:this.state.price-2})}
     else if(this.state.imge===this.props.prod.bag){
       this.setState({imge:this.props.prod.image,name:this.props.prod.name,price:this.props.prod.price})
     }
    }
    render() {
        return (

          <div >
          <button onClick={this.sendData}
          style={{
            position:"absolute",
            left:"45%",
            right:"67%",
            width:"150px",
            boxShadow: "inset 0px 1px 0px 0px black",
            backgroundColor: "black",
            border: "1px solid black",
            display: "inline-block",
            cursor: "pointer",
            color: "#ffffff",
            fontSize: "14px",
            padding: "8px 18px",
            textDecoration: "none",
            textTransform: "uppercase",
            borderRadius: "200px",
            border: "3px solid black",
          }}>Add to cart</button>
          <div style={{display: 'flex', justifyContent: 'center',

            width: "500px",
            padding: "30px",
            background: "#ffffff",
            margin: "50px auto",
            boxShadow: "0px 0px 15px rgba(0, 0, 0, 0.22)",
            // borderRadius: "200px",
            border: "3px solid black",
            height:  "100%",
            animation: "o-rotate-360 linear 8s infinite"
          }}
           id={this.state.name}>

            <h7><b>Amount:{this.state.total}</b></h7>

            <p><b>description:{this.state.name}</b></p>
            <img src={this.state.imge} width="200px" onClick={this.changeImg} />
            <p>price:{this.state.price}</p>
            <img src="https://simpleicon.com/wp-content/uploads/arrow-34.png" width="100px" id={this.state.price} hidden="true" />
            </div>
            </div>
            );
    }
}

class MakeAll extends Component {
  constructor(props){
    super(props)
    this.getData = this.getData.bind(this)

    this.state={
      totalPrice:0,
      myItems:this.props.all//array
     , length:0,
     showName:localStorage.getItem("userName")
    }
    this.updateItemes = this.updateItemes.bind(this)
   };
   getData(){
     $.get('http://localhost:8000/lubna')
     .done( (data)=> { console.log(data[0].name);
     console.log( $('#x').remove())
     console.log( $('#y').remove())
     $('#my').attr("hidden",false)
     $('#card').attr("hidden",false)
     $('#user').attr("hidden",false)
     $('#see-me').attr("hidden",false)
     $("#sign").hide()
     $("h7").hide()
     $("#h4").hide()
     $("button").hide()
     $("h1").hide()
     $("#update").hide()
     $("#fillMe").hide()
         var count =0
         var arr =[]
         data.forEach((item)=>{
           count+=item.price
           arr.push(item.name)
         })
         this.setState({
           totalPrice:count,
           myItems:this.state.myItems.filter((item)=>{ if(arr.includes(item.name)){return item}}),
           length:arr.length
          })
          //console.log(this.state.myItems)
     })
     .fail(function (jqxhr, settings, ex) { alert('failed, ' + ex); });
   }

   updateItemes(){
     var searchVal = $('#search').val()
      var myarr = []
      if(searchVal.length===0){alert("please type something to search")}
      else{
      this.props.all.forEach((item,index)=>{ if(item.name.includes(searchVal)){
        myarr.push(item)
        var id = `${item.price}`

      $('#'+id).attr('hidden',false)


      }})
     if(myarr.length===0){alert('we dont have this item')}}
   }

    render(){
      var myName = localStorage.getItem("userName")
      return (
        <div >
        <nav style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          minHeight: "10vh",
          background:"black",
          color: "white",
        }}>
        <img style={{position:"absolute",left:"1%",right:"90%"}} src="https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX42109836.jpg" height="50px" width="50px"
         />
        </nav>
        <div>{<SignIn />}</div>
        <div hidden="true" id="main-div">
        <h1>Welcom {localStorage.getItem("userName")}</h1>
        <button onClick={this.getData} id="y"
        style={{
          position:"absolute",
          left:"75%",
          right:"37%",
          width:"150px",
          boxShadow: "inset 0px 1px 0px 0px black",
          backgroundColor: "black",
          border: "1px solid black",
          display: "inline-block",
          cursor: "pointer",
          color: "#ffffff",
          fontSize: "14px",
          padding: "8px 18px",
          textDecoration: "none",
          textTransform: "uppercase",
          borderRadius: "200px",
          border: "3px solid black",

        }}>Show My Cart
        <img id="fillMe"  src={'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRmBwPFsBkVMqA9Qw0MnqnYKy9Ti7aBkgt_Cw&usqp=CAU'} height="30px" width="30px" />
        </button>


        <h3 hidden="true" id="see-me">My-Cart</h3>
        <span id="h4"><input type="text" placeholder="descripe what you want" id="search"
        style={{
          boxSizing:"border-box",
          outline: "none",
          display: "block",
          width: "20%",
          padding: "7px",
          border: "none",
          borderBottom: "1px solid #ddd",
          background: "transparent",
          marginBottom: "10px",
          font: "16px Arial, Helvetica, sans-serif",
          height: "45px",
        }}
        /></span>
        <span>
        <img id="update" onClick={this.updateItemes}
        style={{ height:"50px", width:"50px" ,position:"absolute",right:"80%",left:"20%" , top:"25%"}}
          src="https://images.vexels.com/media/users/3/132068/isolated/preview/f9bb81e576c1a361c61a8c08945b2c48-search-icon-by-vexels.png"/></span>
        <h2 id="my" hidden="true"><b>TOTAL:{this.state.totalPrice}</b></h2>
        <h2 id="card" hidden="true">Items-in-myCart:{this.state.length}</h2>
        <h2 id="user" hidden="true">user-name:{this.state.showName}</h2>
        <br/>
        <br/>
        <br/>
        <br/>
         <div> {this.state.myItems.map((myProduct,index)=>
        (
          <MakeProduct key={index}  prod={myProduct} />)

     ) }
     </div>
     <br/>
     </div>

     </div>

)
    }
}

export default MakeAll;