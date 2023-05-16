import { Room } from "../classes/room";

export function createRoom(username) { //creates object of given user given data with room id
    let initialRoomData = '';
    initialRoomData = new Room(username, Math.floor(1000 + Math.random() * 9000)); 
    // console.log(initialRoomData.name)
    return JSON.stringify(initialRoomData);
    // return initialRoomData
}