/*
 * Actions change things in your application
 * Since this application uses a uni-directional data flow, specifically redux,
 * we have these actions which are the only way your application interacts with
 * your application state. This guarantees that your state is up to date and nobody
 * messes it up weirdly somewhere.
 *
 * To add a new Action:
 * 1) Import your constant
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 * 3) (optional) Add an async function like this:
 *    export function asyncYourAction(var) {
 *        return function(dispatch) {
 *             // Do async stuff here
 *             return dispatch(yourAction(var));
 *        }
 *    }
 *
 *    If you add an async function, remove the export from the function
 *    created in the second step
 */
 
 
import axios from 'axios';
import {
    SET_AUTH,
    CHANGE_FORM,
    SENDING_LOGIN_REQUEST,
    SET_ERROR_MESSAGE,
    SERVER_URL,
    SET_HOME_SCREEN_LOADING,
    SET_CURRENT_BIDS,
    CURRENT_BID_URL,
    LOGIN_URL
} from '../constants/AppConstants';
import * as errorMessages  from '../constants/MessageConstants';
import store from '../store.js';
import utilityMethods from '../utils/utilityMethods';

let useMock = true;

/**
 * Logs an user in
 * @param  {string} username The username of the user to be logged in
 * @param  {string} password The password of the user to be logged in
 */
export function loginUser(username, password) {

    return function(dispatch) {

        // Show the loading indicator, hide the last error
        dispatch(sendingLoginRequest(true));

        // If no username or password was specified, throw a field-missing error
        if (anyElementsEmpty({ username, password })) {
            dispatch(setErrorMessage(errorMessages.FIELD_MISSING));
            dispatch(sendingLoginRequest(false));
            return;
        }

        if (useMock)  {
            dispatch(sendingLoginRequest(false));
            let seller = {
                "id":423783,
                "businessName":"Jiffy Lube",
                "businessType":"Vehicle Services",
                "firstName":"Michael",
                "lastName":"Kent",
                "address":"6305 Jarvis Ave",
                "city":"Newark",
                "state":"CA",
                "zip":"94560",
                "services":[
                    {
                        "serviceName":"Oil Change",
                        "serviceType":"oilchange"
                    },
                    {
                        "serviceName":"Tire Change",
                        "serviceType":"tirechange"
                    },
                    {
                        "serviceName":"Brake Pad Replacement",
                        "serviceType":"brakepadreplacement"
                   }
                   ]
           };
            dispatch(setAuthState(true, seller,''));
            utilityMethods.saveUserSession(seller);
            return;
        }

        axios.post(`${LOGIN_URL}`,{
            username: username, password:password
        }).then(function (response) {
            dispatch(sendingLoginRequest(false));
            if(response.status == 200 && response.data.meta.status == 200) {
                dispatch(setAuthState(true,response.data.data.seller,''));
                utilityMethods.saveUserSession(response.data.data.seller);
            } else {
                dispatch(setAuthState(false,{},response.data.meta.errorMessage));
            }
        }).catch(function (error) {
            console.log(error);
            dispatch(sendingLoginRequest(false));
        });

    }
}

/**
 * Logs the current user out
 */
export function logoutUser() {
    let storeData = store.getState();

    return function(dispatch) {
        dispatch(setHomeScreenLoading(true));
        axios.post(`${SERVER_URL}/logout`,{
            username: storeData.currentUser.id
        }).then(function (response) {
            dispatch(setHomeScreenLoading(false));
            if(response.status == 200 && response.data.meta.status == 200) {
                dispatch(setAuthState(false,{},''));
                utilityMethods.removeUserSession();
            } else {
                //display general error
            }
        }).catch(function (error) {
            dispatch(setHomeScreenLoading(false));
            console.log(error);
        });

    }
}

export function getBidsByServiceType(serviceType){
    return function(dispatch) {


        if (useMock) {

            let currentBids = {
                    "oilchange":[
                        {
                            "id":"1",
                            "expiry":"",
                            "winningBid":"$24",
                            "yourBid":"$25",
                            "delta":"$1",
                            "serviceType":"oilchange",
                            "quickinfo":"Honda/Civic/2012"
                        },
                        {
                            "id":"2",
                            "expiry":"",
                            "winningBid":"$18",
                            "yourBid":"$21",
                            "delta":"$3",
                            "serviceType":"oilchange",
                            "quickinfo":"Toyota/Corolla/2015"
                        },
                        {
                            "id":"3",
                            "expiry":"",
                            "winningBid":"$27",
                            "yourBid":"$29",
                            "delta":"$2",
                            "serviceType":"oilchange",
                            "quickinfo":"Honda/Odyssey/2007"

                        }
                    ],
                    "tirechange":[
                        {
                            "id":"4",
                            "expiry":"",
                            "winningBid":"$64",
                            "yourBid":"$65",
                            "delta":"$1",
                            "serviceType":"tirechange",
                            "quickinfo":"1 Tire(s), Honda/Civic/2012"
                        },
                        {
                            "id":"5",
                            "expiry":"",
                            "winningBid":"$59",
                            "yourBid":"$76",
                            "delta":"$17",
                            "serviceType":"tirechange",
                            "quickinfo":"1 Tire(s), Toyota/Corolla/2008"
                        },
                        {
                            "id":"6",
                            "expiry":"",
                            "winningBid":"$464",
                            "yourBid":"$490",
                            "delta":"$7",
                            "serviceType":"tirechange",
                            "quickinfo":"4 Tire(s), Honda/Civic/2012"
                        }
                    ],
                    "brakepadreplacement":[
                        {
                            "id":"7",
                            "expiry":"",
                            "winningBid":"$147",
                            "yourBid":"$149",
                            "delta":"$2",
                            "serviceType":"brakepadreplacement",
                            "quickinfo":"2 Front, Honda/Civic/2012"
                        },
                        {
                            "id":"8",
                            "expiry":"",
                            "winningBid":"$162",
                            "yourBid":"$176",
                            "delta":"$14",
                            "serviceType":"brakepadreplacement",
                            "quickinfo":"2 Rear, Honda/Civic/2012"
                        },
                        {
                            "id":"9",
                            "expiry":"",
                            "winningBid":"$119",
                            "yourBid":"$124",
                            "delta":"$5",
                            "serviceType":"brakepadreplacement",
                            "quickinfo":"2 Rear, Toyota/Corolla/2008"
                        }
                    ]
        
                };
                utilityMethods.stopLoading(serviceType);
                dispatch(setCurrentBids(currentBids));
                return;
        }




        utilityMethods.startLoading(serviceType);
        axios.get(`${CURRENT_BID_URL}?servicetype=${serviceType}`)
            .then(function (response) {
                utilityMethods.stopLoading(serviceType);
                if(response.status == 200 && response.data.meta.status == 200) {
                    dispatch(setCurrentBids(response.data.data.currentBids));
                } else {
                    console.log('error',response)
                }
            }).catch(function (error) {
                utilityMethods.stopLoading(serviceType);
                console.log(error);
            });
    }
}

export function setCurrentBids(currentBids){
    return {
        type: SET_CURRENT_BIDS,
        currentBids:currentBids
    };
}

/**
 * Registers a user
 * @param  {string} username The username of the new user
 * @param  {string} password The password of the new user
 */
export function register(username, password) {
    return (dispatch) => {
        // Show the loading indicator, hide the last error
        dispatch(sendingRequest(true));
        // If no username or password was specified, throw a field-missing error
        if (anyElementsEmpty({ username, password })) {
            dispatch(setErrorMessage(errorMessages.FIELD_MISSING));
            dispatch(sendingRequest(false));
            return;
        }
        // Generate salt for password encryption
        const salt = genSalt(username);
        // Encrypt password
        bcrypt.hash(password, salt, (err, hash) => {
            // Something wrong while hashing
            if (err) {
                dispatch(setErrorMessage(errorMessages.GENERAL_ERROR));
                return;
            }
            // Use auth.js to fake a request
            auth.register(username, hash, (success, err) => {
                // When the request is finished, hide the loading indicator
                dispatch(sendingRequest(false));
                dispatch(setAuthState(success));
                if (success) {
                    // If the register worked, forward the user to the homepage and clear the form
                    forwardTo('/dashboard');
                    dispatch(changeForm({
                        username: "",
                        password: ""
                    }));
                } else {
                    switch (err.type) {
                        case 'username-exists':
                            dispatch(setErrorMessage(errorMessages.USERNAME_TAKEN));
                            return;
                        default:
                            dispatch(setErrorMessage(errorMessages.GENERAL_ERROR));
                            return;
                    }
                }
            });
        });
    }
}

/**
 * Sets the authentication state of the application
 * @param {boolean} isLoggedIn True means a user is logged in, false means no user is logged in
 * @param {object} currentUser logged in user object
 * @param {string} login error if any
 */
export function setAuthState(isLoggedIn, currentUser, loginError) {
    return {
        type: SET_AUTH,
        isLoggedIn:isLoggedIn,
        currentUser:currentUser,
        loginError:loginError
    };
}

/**
 * Sets the form state
 * @param  {object} newState          The new state of the form
 * @param  {string} newState.username The new text of the username input field of the form
 * @param  {string} newState.password The new text of the password input field of the form
 * @return {object}                   Formatted action for the reducer to handle
 */
export function changeForm(newState) {
    return { type: CHANGE_FORM, newState };
}

/**
 * Sets the requestSending state, which displays a loading indicator during requests
 * @param  {boolean} sending The new state the app should have
 * @return {object}          Formatted action for the reducer to handle
 */
export function sendingLoginRequest(sending) {
    return {
        type: SENDING_LOGIN_REQUEST,
        sending:sending
    };
}

export function setHomeScreenLoading(homeScreenLoading) {
    return {
        type: SET_HOME_SCREEN_LOADING,
        homeScreenLoading:homeScreenLoading
    };
}


/**
 * Sets the errorMessage state, which displays the ErrorMessage component when it is not empty
 * @param message
 */
function setErrorMessage(message) {
    return (dispatch) => {
        dispatch({ type: SET_ERROR_MESSAGE, message });

        const form = document.querySelector('.form-page__form-wrapper');
        if (form) {
            form.classList.add('js-form__err-animation');
            // Remove the animation class after the animation is finished, so it
            // can play again on the next error
            setTimeout(() => {
                form.classList.remove('js-form__err-animation');
            }, 150);

            // Remove the error message after 3 seconds
            setTimeout(() => {
                dispatch({ type: SET_ERROR_MESSAGE, message: '' });
            }, 3000);
        }
    }
}

/**
 * Forwards the user
 * @param {string} location The route the user should be forwarded to
 */
function forwardTo(location) {
    console.log('forwardTo(' + location + ')');
    browserHistory.push(location);
}


/**
 * Checks if any elements of a JSON object are empty
 * @param  {object} elements The object that should be checked
 * @return {boolean}         True if there are empty elements, false if there aren't
 */
function anyElementsEmpty(elements) {
    for (let element in elements) {
        if (!elements[element]) {
            return true;
        }
    }
    return false;
}


