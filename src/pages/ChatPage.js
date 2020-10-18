import { Button } from "@material-ui/core";
import React from "react";
import CeramicClient from "@ceramicnetwork/ceramic-http-client";
import IdentityWallet from "identity-wallet";
import { Client, PrivateKey, UserAuth } from "@textile/hub";
const ceramic = new CeramicClient();


function ChatPage() {
  const createDoc = async () => {
    try {
      const idw = await IdentityWallet.create({
        getPermission: async () => [],
        seed:
          "0x8e641c0dc77f6916cc7f743dad774cdf9f6f7bcb880b11395149dd878377cd398650bbfd4607962b49953c87da4d7f3ff247ed734b06f96bdd69479377bc612b",
      });
      await ceramic.setDIDProvider(idw.getDidProvider());
      const doc1 = await ceramic.createDocument("tile", {
        content: { title: "Client Document", desc: "My Desc" },
      });
      console.log(doc1.id);
      console.log(doc1.content);
    } catch (err) {
      alert(err);
    }
  };

  const showDoc = async () => {
    const doc1 = await ceramic.loadDocument(
      "ceramic://bagcqcera27xo2eb7vt4pg7tfwr6nwoblwrd2saf45qduhuozinj3a2odcdbq"
    );
    console.log(doc1.content);
    console.log(doc1.state);
  };

  const updateDoc = async () => {
    const IdentityWallet = require("identity-wallet").default;
    const idw = await IdentityWallet.create({
      getPermission: async () => [],
      seed:
        "0x8e641c0dc77f6916cc7f743dad774cdf9f6f7bcb880b11395149dd878377cd398650bbfd4607962b49953c87da4d7f3ff247ed734b06f96bdd69479377bc612b",
    });
    await ceramic.setDIDProvider(idw.getDidProvider());
    const doc1 = await ceramic.loadDocument(
      "ceramic://bagcqcera27xo2eb7vt4pg7tfwr6nwoblwrd2saf45qduhuozinj3a2odcdbq"
    );
    await doc1.change({
      content: {
        title: "A doc with schema",
        desc: "This should not be possible",
        description: "Nw",
      },
    });
    console.log(doc1.content);
  };

  const listenDoc = async () => {
    const IdentityWallet = require("identity-wallet").default;
    const idw = await IdentityWallet.create({
      getPermission: async () => [],
      seed:
        "0x8e641c0dc77f6916cc7f743dad774cdf9f6f7bcb880b11395149dd878377cd398650bbfd4607962b49953c87da4d7f3ff247ed734b06f96bdd69479377bc612b",
    });
    await ceramic.setDIDProvider(idw.getDidProvider());
    const doc1 = await ceramic.loadDocument(
      "ceramic://bagcqcera27xo2eb7vt4pg7tfwr6nwoblwrd2saf45qduhuozinj3a2odcdbq"
    );
    doc1.on("change", () => console.log("doc1 was updated:", doc1.content));
  };

  const setup = async (auth) => {
    const user = await PrivateKey.fromRandom();

    const client = await Client.withUserAuth(auth);

    return client;
  };

  return (
    <div>
      <Button onClick={createDoc}>Create</Button>
    </div>
  );
}

export default ChatPage;
