import React, { Component } from "react";
import { ChatFeed, Message } from 'react-chat-ui'
import { connect } from "react-redux";
import Footer from "../container/Footer";
import NavbarPage from "../container/NavbarPage";

// Your code stuff...
class Barter extends Component {
  constructor(props){
    super(props);
    this.state = {
      messages: [
        new Message({
          id: 1,
          message: "I want to barter product 789PX",
        }),
        new Message({ id: 0, message: "Agreed" }), 
      ],
    };
  }
render() {

  return (

    <div>
    <div className="page-container">
    <div className="content-wrap">
    <NavbarPage />
    
   { /*<div className="container" style={{ height:'auto', width:'60%' ,border:"1px solid black",borderRadius:"20px" }}>
    <ChatFeed
      messages={this.state.messages}
      isTyping={this.state.is_typing} 
      hasInputField={false} // Boolean: use our input, or use your own
      showSenderName // show the name of the user who sent the message
      bubblesCentered={false} //Boolean should the bubbles be centered in the feed?
      // JSON: Custom bubble styles
      bubbleStyles={
        {
          text: {
            fontSize: 15
          },
          chatbubble: {
            borderRadius: 20,
            padding: 5
          }
        }
      }
      />
    </div>*/}
    </div>
    <div className="footer">
    <Footer/>
    </div>
  </div>
      </div>
    );
    }
}

export default connect((store)=>({
  path:store.walletPath,
  productHistory:store.productHistory,
}),{

})(Barter);