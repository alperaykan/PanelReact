/**
 * Contact Reducer
 */
//action types
import {
   ADD_NEW_CONTACT,
   DELETE_CONTACT,
   UPDATE_CONTACT
} from 'redux/actions/Types';

import contacts from 'assets/Data/Contacts.json';

const INITIAL_STATE = {
   contactsData: contacts.data
}

const ContactReducer = (state = INITIAL_STATE, action) => {
   switch (action.type) {
      // add product to cart 
      case ADD_NEW_CONTACT:
         let contact = action.payload;
         let newcontact = {
            image: "profile.jpg",
            name: contact.name,
            address: contact.address,
            designation: contact.designation,
            type: "recently_added"
         }
         return {
            ...state,
            contactsData: [...state.contactsData, newcontact]
         }
      // remove contact to cart	
      case DELETE_CONTACT:
         let removecontact = action.payload;
         let newData = state.contactsData.filter((contactItem) => contactItem.id !== removecontact.id)
         return {
            ...state,
            contactsData: newData
         }
      // update contact
      case UPDATE_CONTACT:
         let updatecontact = action.payload;
         let newcontactsData = [];
         for (const item of state.contactsData) {
            if (item.id === updatecontact.ID) {
               item.name = updatecontact.data.name;
               item.address = updatecontact.data.address;
               item.designation = updatecontact.data.designation;
            }
            newcontactsData.push(item)
         }
         return {
            ...state,
            contactsData: newcontactsData
         }
      // default case	
      default:
         return { ...state }
   }
}

export default ContactReducer;