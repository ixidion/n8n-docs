(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{1393:function(e,t,o){"use strict";o.r(t);var a=o(25),s=Object(a.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"microsoft-teams"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#microsoft-teams"}},[e._v("#")]),e._v(" Microsoft Teams")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://teams.microsoft.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Microsoft Teams"),a("OutboundLink")],1),e._v(" is a business-oriented communication and collaboration platform that combines workplace chat, video meetings, file storage , and application integration.")]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("🔑 Credentials")]),e._v(" "),a("p",[e._v("You can find authentication information for this node "),a("RouterLink",{attrs:{to:"/nodes/credentials/Microsoft/"}},[e._v("here")]),e._v(".")],1)]),e._v(" "),a("h2",{attrs:{id:"basic-operations"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#basic-operations"}},[e._v("#")]),e._v(" Basic Operations")]),e._v(" "),a("details",{staticClass:"custom-block details"},[a("summary",[e._v("Channel")]),e._v(" "),a("ul",[a("li",[e._v("Create a channel")]),e._v(" "),a("li",[e._v("Delete a channel")]),e._v(" "),a("li",[e._v("Get a channel")]),e._v(" "),a("li",[e._v("Get all channels")]),e._v(" "),a("li",[e._v("Update a channel")])])]),e._v(" "),a("details",{staticClass:"custom-block details"},[a("summary",[e._v("Channel Message (Beta)")]),e._v(" "),a("ul",[a("li",[e._v("Create a message")]),e._v(" "),a("li",[e._v("Get all messages")])])]),e._v(" "),a("h2",{attrs:{id:"example-usage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example-usage"}},[e._v("#")]),e._v(" Example Usage")]),e._v(" "),a("p",[e._v("This workflow allows you to create, update and send a message to a channel in Microsoft Teams. You can also find the "),a("a",{attrs:{href:"https://n8n.io/workflows/680",target:"_blank",rel:"noopener noreferrer"}},[e._v("workflow"),a("OutboundLink")],1),e._v(" on n8n.io. This example usage workflow would use the following nodes.")]),e._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/nodes/nodes-library/core-nodes/Start/"}},[e._v("Start")])],1),e._v(" "),a("li",[a("a",{attrs:{href:""}},[e._v("Microsoft Teams")])])]),e._v(" "),a("p",[e._v("The final workflow should look like the following image.")]),e._v(" "),a("p",[a("img",{attrs:{src:o(825),alt:"A workflow with the Microsoft Teams node"}})]),e._v(" "),a("h3",{attrs:{id:"_1-start-node"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-start-node"}},[e._v("#")]),e._v(" 1. Start node")]),e._v(" "),a("p",[e._v("The start node exists by default when you create a new workflow.")]),e._v(" "),a("h3",{attrs:{id:"_2-microsoft-teams-node-create-channel"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-microsoft-teams-node-create-channel"}},[e._v("#")]),e._v(" 2. Microsoft Teams node (create: channel)")]),e._v(" "),a("ol",[a("li",[e._v("First of all, you'll have to enter credentials for the Microsoft Teams node. You can find out how to do that "),a("RouterLink",{attrs:{to:"/nodes/credentials/Microsoft/"}},[e._v("here")]),e._v(".")],1),e._v(" "),a("li",[e._v("Select the team that you want to use from the "),a("em",[a("strong",[e._v("Team ID")])]),e._v(" dropdown list.")]),e._v(" "),a("li",[e._v("Enter a name for the channel in the "),a("em",[a("strong",[e._v("Name")])]),e._v(" field.")]),e._v(" "),a("li",[e._v("Click on "),a("em",[a("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])]),e._v(" "),a("p",[a("img",{attrs:{src:o(826),alt:"Create a channel with the Microsoft Teams node"}})]),e._v(" "),a("div",{pre:!0},[a("h3",{pre:!0,attrs:{id:"_3-microsoft-teams1-node-update-channel"}},[a("a",{pre:!0,attrs:{class:"header-anchor",href:"#_3-microsoft-teams1-node-update-channel"}},[e._v("#")]),e._v(" 3. Microsoft Teams1 node (update: channel)")]),e._v(" "),a("ol",[a("li",[e._v("Select the credentials that you entered in the previous node.")]),e._v(" "),a("li",[e._v("Select 'Update' from the "),a("em",[a("strong",[e._v("Operation")])]),e._v(" dropdown list.")]),e._v(" "),a("li",[e._v("Click on the gears icon next to the "),a("em",[a("strong",[e._v("Team ID")])]),e._v(" field and click on "),a("em",[a("strong",[e._v("Add Expression")])]),e._v(".")]),e._v(" "),a("li",[e._v("Select the following in the "),a("em",[a("strong",[e._v("Variable Selector")])]),e._v(" section: Nodes > Microsoft Teams > Parameters > teamId. You can also add the following expression: "),a("code",[e._v('{{$node["Microsoft Teams"].parameter["teamId"]}}')])]),e._v(" "),a("li",[e._v("Click on the gears icon next to the "),a("em",[a("strong",[e._v("Channel ID")])]),e._v(" field and click on "),a("em",[a("strong",[e._v("Add Expression")])]),e._v(".")]),e._v(" "),a("li",[e._v("Select the following in the "),a("em",[a("strong",[e._v("Variable Selector")])]),e._v(" section: Nodes > Microsoft Teams > Output > JSON > id. You can also add the following expression: "),a("code",[e._v('{{$node["Microsoft Teams"].json["id"]}}')])]),e._v(" "),a("li",[e._v("Click on the "),a("em",[a("strong",[e._v("Add Field")])]),e._v(" button and select 'Name' from the dropdown list.")]),e._v(" "),a("li",[e._v("Enter a new channel name in the "),a("em",[a("strong",[e._v("Name")])]),e._v(" field.")]),e._v(" "),a("li",[e._v("Click on "),a("em",[a("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])]),e._v(" "),a("p",[a("img",{pre:!0,attrs:{src:o(827),alt:"Update a Channel with the Microsoft Teams node"}})])]),a("div",{pre:!0},[a("h3",{pre:!0,attrs:{id:"_4-microsoft-teams2-node-create-channelmessage"}},[a("a",{pre:!0,attrs:{class:"header-anchor",href:"#_4-microsoft-teams2-node-create-channelmessage"}},[e._v("#")]),e._v(" 4. Microsoft Teams2 node (create: channelMessage)")]),e._v(" "),a("ol",[a("li",[e._v("Select the credentials that you entered in the previous node.")]),e._v(" "),a("li",[e._v("Select 'Channel Message (Beta)' from the "),a("em",[a("strong",[e._v("Resource")])]),e._v(" dropdown list.")]),e._v(" "),a("li",[e._v("Click on the gears icon next to the "),a("em",[a("strong",[e._v("Team ID")])]),e._v(" field and click on "),a("em",[a("strong",[e._v("Add Expression")])]),e._v(".")]),e._v(" "),a("li",[e._v("Select the following in the "),a("em",[a("strong",[e._v("Variable Selector")])]),e._v(" section: Nodes > Microsoft Teams > Parameters > teamId. You can also add the following expression: "),a("code",[e._v('{{$node["Microsoft Teams"].parameter["teamId"]}}')])]),e._v(" "),a("li",[e._v("Click on the gears icon next to the "),a("em",[a("strong",[e._v("Channel ID")])]),e._v(" field and click on "),a("em",[a("strong",[e._v("Add Expression")])]),e._v(".")]),e._v(" "),a("li",[e._v("Select the following in the "),a("em",[a("strong",[e._v("Variable Selector")])]),e._v(" section: Nodes > Microsoft Teams > Output > JSON > id. You can also add the following expression: "),a("code",[e._v('{{$node["Microsoft Teams"].json["id"]}}')])]),e._v(" "),a("li",[e._v("Select 'Text' from the "),a("em",[a("strong",[e._v("Message Type")])]),e._v(" dropdown list.")]),e._v(" "),a("li",[e._v("Enter a message in the "),a("em",[a("strong",[e._v("Message")])]),e._v(" field.")]),e._v(" "),a("li",[e._v("Click on "),a("em",[a("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])]),e._v(" "),a("p",[a("img",{pre:!0,attrs:{src:o(828),alt:"Send a message with the Microsoft Teams node"}})])])])}),[],!1,null,null,null);t.default=s.exports},825:function(e,t,o){e.exports=o.p+"assets/img/workflow.22b8e132.png"},826:function(e,t,o){e.exports=o.p+"assets/img/MicrosoftTeams_node.ecb302fd.png"},827:function(e,t,o){e.exports=o.p+"assets/img/MicrosoftTeams1_node.62aff7d2.png"},828:function(e,t,o){e.exports=o.p+"assets/img/MicrosoftTeams2_node.49657200.png"}}]);