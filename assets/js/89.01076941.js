(window.webpackJsonp=window.webpackJsonp||[]).push([[89],{1390:function(e,t,o){"use strict";o.r(t);var n=o(25),a=Object(n.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"mindee"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#mindee"}},[e._v("#")]),e._v(" Mindee")]),e._v(" "),n("p",[n("a",{attrs:{href:"https://mindee.com",target:"_blank",rel:"noopener noreferrer"}},[e._v("Mindee"),n("OutboundLink")],1),e._v(" develops API-based products for instantly extracting information from any kind of image and transforming it into usable data.")]),e._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[e._v("🔑 Credentials")]),e._v(" "),n("p",[e._v("You can find authentication information for this node "),n("RouterLink",{attrs:{to:"/nodes/credentials/Mindee/"}},[e._v("here")]),e._v(".")],1)]),e._v(" "),n("h2",{attrs:{id:"basic-operations"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#basic-operations"}},[e._v("#")]),e._v(" Basic Operations")]),e._v(" "),n("details",{staticClass:"custom-block details"},[n("summary",[e._v("Invoice")]),e._v(" "),n("ul",[n("li",[e._v("Predict")])])]),e._v(" "),n("details",{staticClass:"custom-block details"},[n("summary",[e._v("Receipt")]),e._v(" "),n("ul",[n("li",[e._v("Predict")])])]),e._v(" "),n("h2",{attrs:{id:"example-usage"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#example-usage"}},[e._v("#")]),e._v(" Example Usage")]),e._v(" "),n("p",[e._v("This workflow allows you to extract information from an image of a receipt using the Mindee node. You can also find the "),n("a",{attrs:{href:"https://n8n.io/workflows/702",target:"_blank",rel:"noopener noreferrer"}},[e._v("workflow"),n("OutboundLink")],1),e._v(" on n8n.io. This example usage workflow uses the following nodes.")]),e._v(" "),n("ul",[n("li",[n("RouterLink",{attrs:{to:"/nodes/nodes-library/core-nodes/Start/"}},[e._v("Start")])],1),e._v(" "),n("li",[n("RouterLink",{attrs:{to:"/nodes/nodes-library/core-nodes/HTTPRequest/"}},[e._v("HTTP Request")])],1),e._v(" "),n("li",[n("a",{attrs:{href:""}},[e._v("Mindee")])])]),e._v(" "),n("p",[e._v("The final workflow should look like the following image.")]),e._v(" "),n("p",[n("img",{attrs:{src:o(819),alt:"A workflow with the Mindee node"}})]),e._v(" "),n("h3",{attrs:{id:"_1-start-node"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-start-node"}},[e._v("#")]),e._v(" 1. Start node")]),e._v(" "),n("p",[e._v("The Start node exists by default when you create a new workflow.")]),e._v(" "),n("h3",{attrs:{id:"_2-http-request-get"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-http-request-get"}},[e._v("#")]),e._v(" 2. HTTP Request (GET)")]),e._v(" "),n("p",[e._v("This example workflow uses the HTTP Request node to make a GET request to download the image of a receipt. You can also use other nodes, for example, the "),n("RouterLink",{attrs:{to:"/nodes/nodes-library/nodes/Box/"}},[e._v("Box")]),e._v(" node, to get the images of the receipts you want to use.")],1),e._v(" "),n("div",{pre:!0},[n("ol",[n("li",[e._v("Enter the URL of the image in the "),n("em",[n("strong",[e._v("URL")])]),e._v(" field. For example, "),n("code",[e._v("https://miro.medium.com/max/1400/0*1T9GkAb93w5NSMsf")]),e._v(".")]),e._v(" "),n("li",[e._v("Select 'File' from the "),n("em",[n("strong",[e._v("Response Format")])]),e._v(" dropdown list.")]),e._v(" "),n("li",[e._v("Click on "),n("em",[n("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])])]),n("p",[e._v("In the screenshot below, you will notice that the HTTP Request node downloads the image from the URL. This image (binary data) can now be used by the other nodes in the workflow.")]),e._v(" "),n("p",[n("img",{attrs:{src:o(820),alt:"Using the HTTP Request node to get the file"}})]),e._v(" "),n("h3",{attrs:{id:"_3-mindee-node-predict-receipt"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-mindee-node-predict-receipt"}},[e._v("#")]),e._v(" 3. Mindee node (predict: receipt)")]),e._v(" "),n("p",[e._v("This node will get the image of the receipt (binary data) from the HTTP Request node and extract the information from it.")]),e._v(" "),n("ol",[n("li",[e._v("Select 'Receipt' from the "),n("em",[n("strong",[e._v("Resource")])]),e._v(" dropdown list.")]),e._v(" "),n("li",[e._v("You'll have to enter credentials for the Mindee node. You can find out how to do that  "),n("RouterLink",{attrs:{to:"/nodes/credentials/Mindee/"}},[e._v("here")]),e._v(".")],1),e._v(" "),n("li",[e._v("Click on "),n("em",[n("strong",[e._v("Execute Node")])]),e._v(" to run the workflow.")])]),e._v(" "),n("p",[e._v("In the screenshot below, you will notice that the node extracts the information from the image that it got from the HTTP Request node.")]),e._v(" "),n("p",[n("img",{attrs:{src:o(821),alt:"Using the Mindee node to extract information from receipt"}})]),e._v(" "),n("h2",{attrs:{id:"further-reading"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#further-reading"}},[e._v("#")]),e._v(" Further Reading")]),e._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"https://medium.com/n8n-io/automatically-adding-expense-receipts-to-google-sheets-with-telegram-mindee-twilio-and-n8n-c47eb2f8d7a5",target:"_blank",rel:"noopener noreferrer"}},[e._v("Automatically Adding Expense Receipts to Google Sheets with Telegram, Mindee, Twilio, and n8n 🧾"),n("OutboundLink")],1)]),e._v(" "),n("li",[n("a",{attrs:{href:"https://medium.com/n8n-io/building-an-expense-tracking-app-in-10-minutes-74b0cececc90",target:"_blank",rel:"noopener noreferrer"}},[e._v("Building an expense tracking app in 10 minutes 📱"),n("OutboundLink")],1)])])])}),[],!1,null,null,null);t.default=a.exports},819:function(e,t,o){e.exports=o.p+"assets/img/workflow.d47872dc.png"},820:function(e,t,o){e.exports=o.p+"assets/img/HTTPRequest_node.c8c0df06.png"},821:function(e,t,o){e.exports=o.p+"assets/img/Mindee_node.d44a65f5.png"}}]);