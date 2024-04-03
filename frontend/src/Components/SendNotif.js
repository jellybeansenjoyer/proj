import {PushAPI, CONSTANTS} from "@pushprotocol/restapi"
import {ethers} from 'ethers'

// const provider = new ethers.providers.JsonRpcProvider(process.env.REACT_APP_NODE_URL);
// ce71fa256ead68f0ac405c67f51a4d7d6152cd0d2e5c81d57c2f59b8b5a8e2de
// c06e0a0d48c4af99f9ccb947c861a104d2dc22b292d9a189e6027014d8904113
// ce71fa256ead68f0ac405c67f51a4d7d6152cd0d2e5c81d57c2f59b8b5a8e2de
const signer = new ethers.Wallet('c06e0a0d48c4af99f9ccb947c861a104d2dc22b292d9a189e6027014d8904113');
const healSuper = await PushAPI.initialize(signer, {env: CONSTANTS.ENV.STAGING});

const sendNotification = async (Patient_Address, time_slot, roomId) => {
    const url = `localhost:3000/meeting/${roomId}`;
    console.log(url);
    await healSuper.channel.send([`${Patient_Address}`], {
        notification: {
            title: "Therapy Scheduled",
            body: `Your therapy session has been booked for the time slot: ${time_slot}. Please be sure to be on time. Thank you !!`,
            payload: {
                cta: url
            }
        }
    });
};

export {sendNotification} ;
