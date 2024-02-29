import OSC from "osc-js";

const osc = new OSC({ plugin: new OSC.WebsocketServerPlugin() });

osc.on("*", (message: OSC.Message) => {
  // 受信したOSCメッセージを処理する
  console.log(message.address, message.args);
});

osc.open(); // listening on 'ws://localhost:8080'
console.log("OSC server is running on ws://localhost:8080");
